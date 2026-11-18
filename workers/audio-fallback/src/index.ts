import allowlist from './allowlist.json';
import {normalize,parseInput,slots,cap,failure} from './policy';
interface Env{LEDGER:DurableObjectNamespace;AUDIO_FALLBACK_SERVICE_TOKEN?:string;FALLBACK_ENABLED?:string;POOL_ROTATION_ENABLED?:string;ELIGIBLE_SLOTS?:string;SINGLE_SLOT?:string;DAILY_CHAR_CAP?:string;[key:string]:unknown}
const MAX_BYTES=512000,MAX_STORED=64000000;
const hash=async(s:string)=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))).map(n=>n.toString(16).padStart(2,'0')).join('');
async function authorized(request:Request,env:Env){const expected=env.AUDIO_FALLBACK_SERVICE_TOKEN;if(!expected||expected.length<32)return false;const actual=request.headers.get('Authorization')||'';const a=new TextEncoder().encode(await hash(actual)),b=new TextEncoder().encode(await hash('Bearer '+expected));return crypto.subtle.timingSafeEqual(a,b)}
export default {async fetch(request:Request,env:Env){
 if(env.FALLBACK_ENABLED!=='true')return failure('disabled');
 if(!await authorized(request,env))return failure('unauthorized',401);
 if(request.method!=='POST'||new URL(request.url).pathname!=='/v1/speech')return failure('invalid_request',400);
 const site=request.headers.get('X-Audio-Site')||'';if(!['deutschy','henglish'].includes(site))return failure('site_not_allowed',403);
 if(Number(request.headers.get('Content-Length')||0)>8192)return failure('invalid_request',400);
 return env.LEDGER.get(env.LEDGER.idFromName('shared-audio-v1')).fetch(request);
}} satisfies ExportedHandler<Env>;
export class AudioLedger{
 constructor(private ctx:DurableObjectState,private env:Env){const sql=ctx.storage.sql;sql.exec('CREATE TABLE IF NOT EXISTS audio(id TEXT PRIMARY KEY, bytes BLOB NOT NULL, size INTEGER NOT NULL)');sql.exec('CREATE TABLE IF NOT EXISTS daily(day TEXT PRIMARY KEY, chars INTEGER NOT NULL, attempts INTEGER NOT NULL)');sql.exec('CREATE TABLE IF NOT EXISTS pending(id TEXT PRIMARY KEY, slot INTEGER NOT NULL, created INTEGER NOT NULL)');sql.exec('CREATE TABLE IF NOT EXISTS parked(slot INTEGER PRIMARY KEY, reason TEXT NOT NULL)');sql.exec('CREATE TABLE IF NOT EXISTS meta(id TEXT PRIMARY KEY, value INTEGER NOT NULL)');sql.exec('CREATE TABLE IF NOT EXISTS rate(id TEXT PRIMARY KEY, n INTEGER NOT NULL)')}
 async fetch(request:Request):Promise<Response>{return this.ctx.blockConcurrencyWhile(async()=>{try{return await this.handle(request)}catch{return failure('storage_unavailable',503)}})}
 private async handle(request:Request):Promise<Response>{
 if(this.env.FALLBACK_ENABLED!=='true')return failure('disabled');if(!await authorized(request,this.env))return failure('unauthorized',401);
 const site=request.headers.get('X-Audio-Site')||'';if(!['deutschy','henglish'].includes(site))return failure('site_not_allowed',403);
 const body=await request.text();if(body.length>8192)return failure('invalid_request',400);let value;try{value=JSON.parse(body)}catch{return failure('invalid_request',400)}
 const parsed=parseInput(value,site,allowlist);if(!parsed.input)return failure(parsed.code!,parsed.status);const input=parsed.input,sql=this.ctx.storage.sql;
 const id=await hash(JSON.stringify(['v1',input.language,input.voice,input.text]));const cached=sql.exec<{bytes:ArrayBuffer}>('SELECT bytes FROM audio WHERE id=?',id).toArray()[0];
 if(cached)return new Response(cached.bytes,{headers:{'Content-Type':'audio/mpeg','Cache-Control':'private, max-age=86400','X-Audio-Cache':'HIT'}});
 if(sql.exec('SELECT id FROM pending WHERE id=?',id).toArray().length)return failure('generation_in_progress',409);
 const day=new Date().toISOString().slice(0,10),minute=Math.floor(Date.now()/60000),rateId=site+':'+minute;
 const rate=Number(sql.exec<{n:number}>('SELECT n FROM rate WHERE id=?',rateId).toArray()[0]?.n||0);if(rate>=6)return failure('rate_limited',429);
 const candidates=slots(this.env.ELIGIBLE_SLOTS,this.env.POOL_ROTATION_ENABLED,this.env.SINGLE_SLOT).filter(n=>typeof this.env['ELEVENLABS_KEY_'+n]==='string'&&!sql.exec('SELECT slot FROM parked WHERE slot=?',n).toArray().length);if(!candidates.length)return failure('no_eligible_key');
 const used=Number(sql.exec<{chars:number}>('SELECT chars FROM daily WHERE day=?',day).toArray()[0]?.chars||0),chars=Array.from(input.text).length;if(used+chars>cap(this.env.DAILY_CHAR_CAP))return failure('daily_cap',429);
 const stored=Number(sql.exec<{n:number}>('SELECT COALESCE(SUM(size),0) AS n FROM audio').toArray()[0]?.n||0);if(stored+MAX_BYTES>MAX_STORED)return failure('storage_cap',507);
 const next=Number(sql.exec<{value:number}>('SELECT value FROM meta WHERE id=?','next').toArray()[0]?.value||0),slot=candidates[next%candidates.length],key=this.env['ELEVENLABS_KEY_'+slot]as string;
 // Subscription reads debit no generation credits. A failure never falls through to a new key.
 let subscription:Record<string,unknown>;try{const r=await fetch('https://api.elevenlabs.io/v1/user/subscription',{headers:{'xi-api-key':key},signal:AbortSignal.timeout(5000)});if(!r.ok)return failure('quota_unavailable');subscription=await r.json()}catch{return failure('quota_unavailable')}
 if(subscription.tier!=='free'||subscription.can_extend_character_limit!==false||typeof subscription.character_count!=='number'||typeof subscription.character_limit!=='number'||subscription.character_count+chars>subscription.character_limit)return failure('quota_unavailable');
 // Synchronous transaction persists the conservative debit and crash marker before generation.
 this.ctx.storage.transactionSync(()=>{sql.exec('INSERT INTO daily VALUES(?,?,1) ON CONFLICT(day) DO UPDATE SET chars=chars+excluded.chars, attempts=attempts+1',day,chars);sql.exec('INSERT INTO pending VALUES(?,?,?)',id,slot,Date.now());sql.exec('INSERT INTO meta VALUES(?,?) ON CONFLICT(id) DO UPDATE SET value=excluded.value','next',next+1);sql.exec('INSERT INTO rate VALUES(?,1) ON CONFLICT(id) DO UPDATE SET n=n+1',rateId);sql.exec('DELETE FROM rate WHERE id LIKE ? AND id != ?',site+':%',rateId);sql.exec('DELETE FROM daily WHERE day < ?',day)});
 let result:Response;try{result=await fetch('https://api.elevenlabs.io/v1/text-to-speech/'+input.voice+'?output_format=mp3_44100_128',{method:'POST',signal:AbortSignal.timeout(8000),headers:{'xi-api-key':key,'Content-Type':'application/json','Accept':'audio/mpeg'},body:JSON.stringify({text:input.text,model_id:'eleven_multilingual_v2',language_code:input.language,voice_settings:{stability:.6,similarity_boost:.75}})})}catch{return failure('ambiguous_result',502)}
 if(!result.ok){let reason='provider_failed';try{const err=await result.json()as{detail?:{status?:string}};if(err.detail?.status==='quota_exceeded')reason='quota_exceeded'}catch{}sql.exec('INSERT OR REPLACE INTO parked VALUES(?,?)',slot,reason);sql.exec('DELETE FROM pending WHERE id=?',id);return failure('provider_failed',502)}
 if(!(result.headers.get('Content-Type')||'').startsWith('audio/'))return failure('ambiguous_result',502);
 const bytes=await result.arrayBuffer();if(!bytes.byteLength||bytes.byteLength>MAX_BYTES)return failure('ambiguous_result',502);
 this.ctx.storage.transactionSync(()=>{sql.exec('INSERT INTO audio VALUES(?,?,?)',id,bytes,bytes.byteLength);sql.exec('DELETE FROM pending WHERE id=?',id)});
 return new Response(bytes,{headers:{'Content-Type':'audio/mpeg','Cache-Control':'private, max-age=86400','X-Audio-Cache':'MISS'}});
 }
}
