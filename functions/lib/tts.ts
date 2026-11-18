import {ttsVoices,voiceForTextHash} from './tts-voices';
// Server-only. No provider credential or response body is ever returned to the browser.
export type TTSEnv = {
  DB?: D1Database;
  TTS_ENABLED?: string;
  TTS_DAILY_CHAR_CAP?: string;
  ELEVENLABS_KEY_1?: string; ELEVENLABS_KEY_2?: string; ELEVENLABS_KEY_3?: string;
  ELEVENLABS_KEY_4?: string; ELEVENLABS_KEY_5?: string; ELEVENLABS_KEY_6?: string;
  ELEVENLABS_KEY_7?: string; ELEVENLABS_KEY_8?: string; ELEVENLABS_KEY_9?: string;
  ELEVENLABS_KEY_12?: string;
};
const keySlots = [1,2,3,4,5,6,7,8,9,12] as const;
const settingsProfile = 'premade-roster-v1-multilingual-v2-de-s060-s075';
export const normalizeSpeechText = (text:string) => text.normalize('NFC').trim().replace(/\s+/gu,' ');
export function ttsConfigured(env:TTSEnv) {
  return env.TTS_ENABLED === 'true' && Boolean(env.DB) && keySlots.some(slot=>env[`ELEVENLABS_KEY_${slot}`]);
}
export function dailyCap(value?:string) {
  // A bad or excessive override must never silently remove the free-tier guard.
  const n = Number(value ?? 1000);
  return Number.isInteger(n) && n >= 1 && n <= 1000 ? n : 1000;
}
const fallback = (status=503) => Response.json({fallback:true},{status,headers:{'cache-control':'no-store'}});
const audio = (body:ArrayBuffer) => new Response(body,{headers:{'content-type':'audio/mpeg','cache-control':'private, max-age=86400','x-content-type-options':'nosniff'}});
const sha = async (text:string) => Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text)))).map(b=>b.toString(16).padStart(2,'0')).join('');

export async function serveTTS(request:Request, env:TTSEnv):Promise<Response> {
  // OFF by default, including cached audio, until publication/voice review is settled.
  if (!ttsConfigured(env)) return fallback();
  const db=env.DB!;
  const url=new URL(request.url), origin=request.headers.get('origin');
  if ((origin && origin!==url.origin) || request.headers.get('sec-fetch-site')==='cross-site') return fallback(403);
  const text=normalizeSpeechText(url.searchParams.get('text')??'');
  if (!text || text.length>1000) return fallback(400);
  const preference=url.searchParams.get('voice')??'varied';
  if(preference!=='varied'&&!ttsVoices.some(v=>v.id===preference))return fallback(400);
  const id=await sha(text),voice=preference==='varied'?voiceForTextHash(id).id:preference,profile=`${settingsProfile}:${voice}`,cacheId=await sha(profile+':'+id);
  let owner='',storageReserved=false,storedBytes=0;
  try {
    // A hash alone is not authorization: require the exact canonical manifest text.
    const entry=await db.prepare('SELECT text FROM tts_manifest WHERE id = ? AND text = ?').bind(id,text).first<{text:string}>();
    if (!entry) return fallback(404);
    const hit=await db.prepare('SELECT audio FROM tts_audio WHERE id = ?').bind(cacheId).first<{audio:ArrayBuffer}>();
    if (hit?.audio) return audio(hit.audio);
    owner=crypto.randomUUID();
    const now=Date.now();
    const lock=await db.prepare(`INSERT INTO tts_locks (id,owner,expires_at) VALUES (?,?,?) ON CONFLICT(id) DO UPDATE SET owner=excluded.owner,expires_at=excluded.expires_at WHERE tts_locks.expires_at < ? RETURNING owner`).bind(cacheId,owner,now+180000,now).first<{owner:string}>();
    if(lock?.owner!==owner) { owner=''; return fallback(409); }
    // Another request may have cached between our first read and acquiring the lock.
    const ready=await db.prepare('SELECT audio FROM tts_audio WHERE id = ?').bind(cacheId).first<{audio:ArrayBuffer}>();
    if(ready?.audio)return audio(ready.audio);
    // Keep this new cache within a64MB budget,well below the free D1 per-DB ceiling.
    // Reserve the maximum accepted clip size atomically before any provider debit.
    const space=await db.prepare(`INSERT INTO tts_storage (id,bytes) VALUES (1,512000) ON CONFLICT(id) DO UPDATE SET bytes=tts_storage.bytes+512000 WHERE tts_storage.bytes+512000 <= 64000000 RETURNING bytes`).bind().first<{bytes:number}>();
    if(!space)return fallback(507);
    storageReserved=true;
    for(const slot of keySlots) {
      const key=env[`ELEVENLABS_KEY_${slot}`];
      if(!key)continue;
      const parked=await db.prepare('SELECT parked_until FROM tts_keys WHERE slot = ?').bind(slot).first<{parked_until:number}>();
      if(parked && parked.parked_until>Date.now())continue;
      const day=new Date().toISOString().slice(0,10),cap=dailyCap(env.TTS_DAILY_CHAR_CAP),chars=Array.from(text).length;
      // Every attempted call consumes a reservation. Unknown failures are not refunded.
      // INSERT/conditional UPDATE is one atomic SQL statement, not a read-then-write.
      const budget=await db.prepare(`INSERT INTO tts_usage (day,chars,attempts) SELECT ?,?,1 WHERE ? <= ? ON CONFLICT(day) DO UPDATE SET chars=tts_usage.chars+excluded.chars,attempts=tts_usage.attempts+1 WHERE tts_usage.chars+excluded.chars <= ? RETURNING chars`).bind(day,chars,chars,cap,cap).first<{chars:number}>();
      if(!budget)return fallback(429);
      let response:Response;
      try {
        response=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_128`,{method:'POST',signal:AbortSignal.timeout(8000),headers:{'xi-api-key':key,'content-type':'application/json',accept:'audio/mpeg'},body:JSON.stringify({text,model_id:'eleven_multilingual_v2',language_code:'de',voice_settings:{stability:.6,similarity_boost:.75}})});
      } catch {return fallback(502)} // Ambiguous outcome: do not try another key.
      if(!response.ok) {
        let status='';
        try {const error=await response.json() as {detail?:{status?:string}};status=error.detail?.status??''}catch{/* No provider payload leaves this handler. */}
        if(status==='quota_exceeded') {
          // No guessed monthly reset. Park indefinitely until an operator verifies reset.
          await db.prepare(`INSERT INTO tts_keys (slot,parked_until,reason) VALUES (?,?,?) ON CONFLICT(slot) DO UPDATE SET parked_until=excluded.parked_until,reason=excluded.reason`).bind(slot,Number.MAX_SAFE_INTEGER,'quota_exceeded').run();
          continue;
        }
        // 401,429,abuse/rate limits are not permission to cycle through accounts.
        return fallback(502);
      }
      if(!(response.headers.get('content-type')??'').startsWith('audio/'))return fallback(502);
      const bytes=await response.arrayBuffer();
      if(!bytes.byteLength||bytes.byteLength>512000)return fallback(502);
      // Cache synchronously before releasing the lock. Failed persistence is not success.
      await db.prepare('INSERT OR IGNORE INTO tts_audio (id,manifest_id,profile,audio,created_at) VALUES (?,?,?,?,?)').bind(cacheId,id,profile,bytes,Date.now()).run();
      storedBytes=bytes.byteLength;
      return audio(bytes);
    }
    return fallback();
  } catch {return fallback()}
  finally {if(storageReserved){try{await db.prepare('UPDATE tts_storage SET bytes = MAX(0,bytes - ?) WHERE id = 1').bind(512000-storedBytes).run()}catch{/* Fail-closed:leaked reservations reduce room,never exceed the budget. */}}if(owner) {try{await db.prepare('DELETE FROM tts_locks WHERE id = ? AND owner = ?').bind(cacheId,owner).run()}catch{/* Expiry permits recovery after a storage outage. */}}}
}
