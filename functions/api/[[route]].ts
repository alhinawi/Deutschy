import {serveAudioFallback,audioFallbackConfigured,fallbackVoices,type AudioFallbackEnv} from '../lib/audio-fallback194';
import { Hono } from 'hono';
import { handle } from 'hono/cloudflare-pages';
import {validAccountValues} from '../lib/account-state';
import {serveTTS,ttsConfigured,type TTSEnv} from '../lib/tts';

type Env = TTSEnv & AudioFallbackEnv & {
  DB?: D1Database;
  HELPER?: {ask(input:unknown):Promise<{status:number;body:unknown;retryAfter:string|null}>};
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  SESSION_SECRET?: string;
};

const ADMIN_EMAIL = '3asfuur@gmail.com';
const SESSION_DAYS = 30;
const enc = new TextEncoder();

const b64u = (buf: ArrayBuffer | Uint8Array) => {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
const fromB64u = (s: string) => {
  const p = s.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (s.length % 4)) % 4);
  const bin = atob(p);
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
};
const hmac = async (secret: string, data: string) => {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
  return key;
};
const sign = async (secret: string, data: string) => {
  const key = await hmac(secret, data);
  return b64u(await crypto.subtle.sign('HMAC', key, enc.encode(data)));
};
const verify = async (secret: string, data: string, sig: string) => {
  const key = await hmac(secret, data);
  try {
    return await crypto.subtle.verify('HMAC', key, fromB64u(sig), enc.encode(data));
  } catch {
    return false;
  }
};

type SessionUser = { id: number; email: string; name: string; picture: string; exp: number };

const readCookie = (header: string | null, name: string) => {
  if (!header) return null;
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return v.join('=');
  }
  return null;
};

async function getUser(req: Request, env: Env): Promise<SessionUser | null> {
  if (!env.SESSION_SECRET) return null;
  const raw = readCookie(req.headers.get('cookie'), 'dsess');
  if (!raw) return null;
  const [payload, sig] = raw.split('.');
  if (!payload || !sig || !(await verify(env.SESSION_SECRET, payload, sig))) return null;
  try {
    const u = JSON.parse(new TextDecoder().decode(fromB64u(payload))) as SessionUser;
    return u.exp > Date.now() / 1000 ? u : null;
  } catch {
    return null;
  }
}


const pbkdf2 = async (password: string, salt: Uint8Array) => {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  return b64u(await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, key, 256));
};
const emailOk = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) && e.length <= 120;

async function startSession(c: any, u: { id: number; email: string; name: string; picture: string }, redirect?: string) {
  const user: SessionUser = { ...u, exp: Math.floor(Date.now() / 1000) + SESSION_DAYS * 86400 };
  const payload = b64u(enc.encode(JSON.stringify(user)));
  const sig = await sign(c.env.SESSION_SECRET, payload);
  const cookie = `dsess=${payload}.${sig}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_DAYS * 86400}`;
  if (redirect) {
    const res = c.redirect(redirect, 302);
    res.headers.append('Set-Cookie', cookie);
    res.headers.append('Set-Cookie', 'dstate=; Path=/api/auth; Max-Age=0');
    return res;
  }
  c.header('Set-Cookie', cookie);
  return c.json({ user: { email: u.email, name: u.name, picture: u.picture, isAdmin: u.email === ADMIN_EMAIL } });
}
async function upsertGoogle(db: D1Database, email: string, name: string, picture: string) {
  const row = await db.prepare('SELECT id, name, picture FROM users WHERE email = ?').bind(email).first<{ id: number; name: string; picture: string }>();
  if (row) {
    await db.prepare('UPDATE users SET google = 1, picture = ? WHERE id = ?').bind(picture, row.id).run();
    return { id: row.id, name: row.name, picture };
  }
  const r = await db.prepare('INSERT INTO users (email, name, picture, google, created_at) VALUES (?, ?, ?, 1, ?)').bind(email, name, picture, Date.now()).run();
  return { id: Number(r.meta.last_row_id), name, picture };
}

const app = new Hono<{ Bindings: Env }>().basePath('/api');

app.post('/helper/chat',async c=>{
 const origin=c.req.header('Origin');
 const fail=(status:number,code:string)=>new Response(JSON.stringify({code}),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
 if(origin!=='https://deutschy.pages.dev')return fail(403,'HELPER_UNAVAILABLE');
 if(!c.env.HELPER)return fail(503,'HELPER_UNAVAILABLE');
 if(Number(c.req.header('Content-Length')||0)>20000)return fail(413,'HELPER_INVALID_REQUEST');
 try{
  const raw=await c.req.text();if(raw.length>20000)return fail(413,'HELPER_INVALID_REQUEST');
  const payload=JSON.parse(raw);const ip=c.req.header('CF-Connecting-IP');if(!ip)return fail(503,'HELPER_UNAVAILABLE');
  const user=await getUser(c.req.raw,c.env);
  const identity=user&&Number.isSafeInteger(user.id)?'user:'+user.id:'guest:'+ip;
  const result=await c.env.HELPER.ask({payload,identity,ip});
  return new Response(JSON.stringify(result.body),{status:result.status,headers:{'Content-Type':'application/json','Cache-Control':'no-store',...(result.retryAfter?{'Retry-After':result.retryAfter}:{})}});
 }catch{return fail(503,'HELPER_UNAVAILABLE')}
});

app.get('/health', (c) =>
  c.json({
    ok: true,
    app: 'deutschy',
    auth: Boolean(c.env.GOOGLE_CLIENT_ID && c.env.GOOGLE_CLIENT_SECRET && c.env.SESSION_SECRET),
    db: Boolean(c.env.DB),
    tts: ttsConfigured(c.env),
    audioFallback: audioFallbackConfigured(c.env),
    audioFallbackVoices: fallbackVoices(c.env),
  }),
);

app.get('/auth/google', async (c) => {
  const { GOOGLE_CLIENT_ID, SESSION_SECRET } = c.env;
  if (!GOOGLE_CLIENT_ID || !SESSION_SECRET) return c.json({ error: 'auth_not_configured' }, 503);
  const origin = new URL(c.req.url).origin;
  const state = b64u(crypto.getRandomValues(new Uint8Array(18)));
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: `${origin}/api/auth/callback`,
    response_type: 'code',
    scope: 'openid email profile',
    state,
    prompt: 'select_account',
  });
  const res = c.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`, 302);
  res.headers.append('Set-Cookie', `dstate=${state}; Path=/api/auth; HttpOnly; Secure; SameSite=Lax; Max-Age=600`);
  return res;
});

app.get('/auth/callback', async (c) => {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SESSION_SECRET } = c.env;
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !SESSION_SECRET) return c.json({ error: 'auth_not_configured' }, 503);
  const url = new URL(c.req.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const saved = readCookie(c.req.header('cookie') ?? null, 'dstate');
  if (!code || !state || !saved || state !== saved) return c.redirect('/?login=failed', 302);
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: `${url.origin}/api/auth/callback`,
      grant_type: 'authorization_code',
    }),
  });
  if (!tokenRes.ok) return c.redirect('/?login=failed', 302);
  const tok = (await tokenRes.json()) as { id_token?: string };
  if (!tok.id_token) return c.redirect('/?login=failed', 302);
  // id_token was received directly from Google's token endpoint over TLS in exchange for our code.
  const claims = JSON.parse(new TextDecoder().decode(fromB64u(tok.id_token.split('.')[1]))) as {
    aud?: string; iss?: string; email?: string; email_verified?: boolean; name?: string; picture?: string;
  };
  if (claims.aud !== GOOGLE_CLIENT_ID || !claims.email || claims.email_verified !== true) return c.redirect('/?login=failed', 302);
  const email = claims.email.toLowerCase();
  const name = claims.name ?? claims.email;
  const picture = claims.picture ?? '';
  let id = 0;
  if (c.env.DB) {
    const g = await upsertGoogle(c.env.DB, email, name, picture);
    id = g.id;
    return startSession(c, { id, email, name: g.name, picture }, '/');
  }
  return startSession(c, { id, email, name, picture }, '/');
});

app.get('/auth/me', async (c) => {
  const u = await getUser(c.req.raw, c.env);
  c.header('Cache-Control', 'no-store');
  if (!u) return c.json({ user: null });
  return c.json({ user: { id: u.id, email: u.email, name: u.name, picture: u.picture, isAdmin: u.email === ADMIN_EMAIL } });
});

app.post('/auth/logout', (c) => {
  c.header('Set-Cookie', 'dsess=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0');
  return c.json({ ok: true });
});


app.post('/auth/register', async (c) => {
  if (!c.env.DB || !c.env.SESSION_SECRET) return c.json({ error: 'not_configured' }, 503);
  const b = (await c.req.json().catch(() => ({}))) as { email?: string; password?: string; name?: string };
  const email = (b.email ?? '').trim().toLowerCase();
  const password = b.password ?? '';
  const name = (b.name ?? '').trim().slice(0, 40) || email.split('@')[0];
  if (!emailOk(email)) return c.json({ error: 'bad_email' }, 400);
  if (password.length < 8 || password.length > 100) return c.json({ error: 'weak_password' }, 400);
  const exists = await c.env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first();
  if (exists) return c.json({ error: 'email_taken' }, 409);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await pbkdf2(password, salt);
  const r = await c.env.DB.prepare('INSERT INTO users (email, name, pass_hash, pass_salt, created_at) VALUES (?, ?, ?, ?, ?)').bind(email, name, hash, b64u(salt), Date.now()).run();
  return startSession(c, { id: Number(r.meta.last_row_id), email, name, picture: '' });
});

app.post('/auth/login', async (c) => {
  if (!c.env.DB || !c.env.SESSION_SECRET) return c.json({ error: 'not_configured' }, 503);
  const b = (await c.req.json().catch(() => ({}))) as { email?: string; password?: string };
  const email = (b.email ?? '').trim().toLowerCase();
  const password = b.password ?? '';
  const row = await c.env.DB.prepare('SELECT id, name, picture, pass_hash, pass_salt FROM users WHERE email = ?').bind(email).first<{ id: number; name: string; picture: string; pass_hash: string | null; pass_salt: string | null }>();
  if (!row || !row.pass_hash || !row.pass_salt) return c.json({ error: row ? 'use_google' : 'bad_credentials' }, 401);
  const hash = await pbkdf2(password, fromB64u(row.pass_salt));
  if (hash !== row.pass_hash) return c.json({ error: 'bad_credentials' }, 401);
  return startSession(c, { id: row.id, email, name: row.name, picture: row.picture });
});

app.get('/me/state',async c=>{
 c.header('Cache-Control','no-store');
 const u=await getUser(c.req.raw,c.env);if(!u||!c.env.DB)return c.json({error:'unauthorized'},401);
 const row=await c.env.DB.prepare('SELECT data,revision FROM account_state WHERE user_id=?').bind(u.id).first<{data:string;revision:number}>();
 if(row){if(!Number.isSafeInteger(row.revision)||row.revision<1)return c.json({error:'unreadable'},503);let values;try{values=JSON.parse(row.data)}catch{return c.json({error:'unreadable'},503)}if(!validAccountValues(values))return c.json({error:'unreadable'},503);return c.json({accountId:u.id,values,revision:row.revision})}
 // Preserve old account progress when an account first adopts the fuller state.
 const old=await c.env.DB.prepare('SELECT xp,streak,best,last_day,data FROM progress WHERE user_id=?').bind(u.id).first<{xp:number;streak:number;best:number;last_day:string;data:string}>();
 const values:Record<string,string>={};if(old){let d;try{d=JSON.parse(old.data||'{}');if(!d||typeof d!=='object'||Array.isArray(d))throw Error('Invalid legacy data')}catch{return c.json({error:'unreadable'},503)}values['deutschy:v1']=JSON.stringify({...d,xp:old.xp,streak:old.streak,best:old.best,lastDay:old.last_day})}
 if(!validAccountValues(values))return c.json({error:'unreadable'},503);
 return c.json({accountId:u.id,values,revision:0});
});
app.put('/me/state',async c=>{
 c.header('Cache-Control','no-store');
 if(c.req.header('Origin')!==new URL(c.req.url).origin)return c.json({error:'origin'},403);
 const u=await getUser(c.req.raw,c.env);if(!u||!c.env.DB)return c.json({error:'unauthorized'},401);
 if(Number(c.req.header('Content-Length')||0)>1500000)return c.json({error:'too_big'},413);
 const raw=await c.req.text();if(enc.encode(raw).length>1500000)return c.json({error:'too_big'},413);
 let b;try{b=JSON.parse(raw)}catch{return c.json({error:'bad_body'},400)}
 if(!b||typeof b!=='object'||Array.isArray(b))return c.json({error:'bad_body'},400);
 if(b.accountId!==u.id)return c.json({error:'account_changed'},409);
 if(!Number.isSafeInteger(b.revision)||b.revision<0||!validAccountValues(b.values))return c.json({error:'bad_body'},400);
 const data=JSON.stringify(b.values),at=Date.now();
 const saved=b.revision===0?await c.env.DB.prepare('INSERT INTO account_state(user_id,data,revision,updated_at) VALUES(?,?,1,?) ON CONFLICT(user_id) DO NOTHING RETURNING revision').bind(u.id,data,at).first<{revision:number}>():await c.env.DB.prepare('UPDATE account_state SET data=?,revision=revision+1,updated_at=? WHERE user_id=? AND revision=? RETURNING revision').bind(data,at,u.id,b.revision).first<{revision:number}>();
 if(!saved)return c.json({error:'conflict'},409);
 return c.json({ok:true,revision:saved.revision});
});

app.get('/me/progress', async (c) => {
  const u = await getUser(c.req.raw, c.env);
  c.header('Cache-Control', 'no-store');
  if (!u || !c.env.DB) return c.json({ error: 'unauthorized' }, 401);
  const row = await c.env.DB.prepare('SELECT xp, streak, best, last_day, data FROM progress WHERE user_id = ?').bind(u.id).first<{ xp: number; streak: number; best: number; last_day: string; data: string }>();
  if (!row) return c.json({ progress: null });
  return c.json({ progress: { xp: row.xp, streak: row.streak, best: row.best, lastDay: row.last_day, data: JSON.parse(row.data || '{}') } });
});

app.put('/me/progress', async (c) => {
  const u = await getUser(c.req.raw, c.env);
  if (!u || !c.env.DB) return c.json({ error: 'unauthorized' }, 401);
  if(await c.env.DB.prepare('SELECT user_id FROM account_state WHERE user_id=?').bind(u.id).first())return c.json({error:'new_client_required'},409);
 const b = (await c.req.json().catch(() => null)) as { xp?: number; streak?: number; best?: number; lastDay?: string; data?: unknown } | null;
  if (!b) return c.json({ error: 'bad_body' }, 400);
  const n = (x: unknown) => Math.max(0, Math.min(10_000_000, Math.floor(Number(x) || 0)));
  const data = JSON.stringify(b.data ?? {});
  if (data.length > 200_000) return c.json({ error: 'too_big' }, 413);
  await c.env.DB.prepare(
    'INSERT INTO progress (user_id, xp, streak, best, last_day, data, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET xp = excluded.xp, streak = excluded.streak, best = excluded.best, last_day = excluded.last_day, data = excluded.data, updated_at = excluded.updated_at',
  ).bind(u.id, n(b.xp), n(b.streak), n(b.best), String(b.lastDay ?? '').slice(0, 10), data, Date.now()).run();
  return c.json({ ok: true });
});

app.post('/me/score', async (c) => {
  const u = await getUser(c.req.raw, c.env);
  if (!u || !c.env.DB) return c.json({ error: 'unauthorized' }, 401);
  const b = (await c.req.json().catch(() => ({}))) as { game?: string; score?: number };
  if((b as {accountId?:number}).accountId!==undefined&&(b as {accountId?:number}).accountId!==u.id)return c.json({error:'account_changed'},409);
  const game = String(b.game ?? '').slice(0, 24);
  const score = Math.max(0, Math.min(100000, Math.floor(Number(b.score) || 0)));
  if (!game) return c.json({ error: 'bad_game' }, 400);
  await c.env.DB.prepare('INSERT INTO scores (user_id, game, score, at) VALUES (?, ?, ?, ?)').bind(u.id, game, score, Date.now()).run();
  return c.json({ ok: true });
});

// Invalid individual snapshots cannot break a public ranking or replace legacy counters.
const ACCOUNT_PROGRESS_SQL=`(
 SELECT u.id,u.name,
 COALESCE(CASE WHEN json_valid(a.snapshot) THEN MAX(0,MIN(10000000,CAST(json_extract(a.snapshot,'$.xp') AS INTEGER))) END,p.xp,0) xp,
 COALESCE(CASE WHEN json_valid(a.snapshot) THEN MAX(0,MIN(10000000,CAST(json_extract(a.snapshot,'$.best') AS INTEGER))) END,p.best,0) best
 FROM users u LEFT JOIN (
  SELECT user_id,CASE WHEN json_valid(data) THEN json_extract(data,'$."deutschy:v1"') END snapshot FROM account_state
 ) a ON a.user_id=u.id LEFT JOIN progress p ON p.user_id=u.id
 WHERE a.user_id IS NOT NULL OR p.user_id IS NOT NULL
)`;

app.get('/leaderboard', async (c) => {
  if (!c.env.DB) return c.json({ xp: [], scores: [] });
  c.header('Cache-Control', 'public, max-age=30');
  const xp = await c.env.DB.prepare(`SELECT name,xp,best FROM ${ACCOUNT_PROGRESS_SQL} ORDER BY xp DESC LIMIT 20`).all();
  const scores = await c.env.DB.prepare('SELECT u.name, s.game, MAX(s.score) AS score FROM scores s JOIN users u ON u.id = s.user_id GROUP BY s.user_id, s.game ORDER BY score DESC LIMIT 30').all();
  return c.json({ xp: xp.results, scores: scores.results });
});

app.get('/admin/ping', async (c) => {
  const u = await getUser(c.req.raw, c.env);
  c.header('Cache-Control', 'no-store');
  if (!u || u.email !== ADMIN_EMAIL) return c.json({ error: 'forbidden' }, 403);
  return c.json({ ok: true });
});

app.get('/admin/stats', async (c) => {
  const u = await getUser(c.req.raw, c.env);
  c.header('Cache-Control', 'no-store');
  if (!u || u.email !== ADMIN_EMAIL) return c.json({ error: 'forbidden' }, 403);
  if (!c.env.DB) return c.json({ users: 0, google: 0, active7: 0, xp: 0, recent: [], top: [] });
  const db = c.env.DB;
  const day = Date.now() - 7 * 864e5;
  const one = async (q: string, ...b: unknown[]) => ((await db.prepare(q).bind(...b).first()) as Record<string, number> | null) ?? {};
  const users = (await one('SELECT COUNT(*) n FROM users')).n ?? 0;
  const google = (await one('SELECT COUNT(*) n FROM users WHERE google = 1')).n ?? 0;
  const week = (await one('SELECT COUNT(*) n FROM users WHERE created_at > ?', day)).n ?? 0;
  const xp = (await one(`SELECT COALESCE(SUM(xp),0) n FROM ${ACCOUNT_PROGRESS_SQL}`)).n ?? 0;
  const games = (await one('SELECT COUNT(*) n FROM scores')).n ?? 0;
  const recent = (await db.prepare('SELECT name, email, google, created_at FROM users ORDER BY created_at DESC LIMIT 10').all()).results;
  const top = (await db.prepare(`SELECT name,xp FROM ${ACCOUNT_PROGRESS_SQL} ORDER BY xp DESC LIMIT 5`).all()).results;
  return c.json({ users, google, week, xp, games, recent, top });
});

// Text-to-speech via ElevenLabs when a key is configured; otherwise the client falls back to the browser's German voice.
app.post('/audio-fallback', (c) => serveAudioFallback(c.req.raw,c.env));
app.get('/tts', (c) => serveTTS(c.req.raw,c.env));

export const onRequest = handle(app);
