import {ttsVoices,voiceForTextHash} from './tts-voices';
import allowedTexts from '../../data/audio-fallback-allowlist194.json';
export type AudioFallbackEnv={AUDIO_FALLBACK_ENABLED?:string;AUDIO_FALLBACK_SERVICE_TOKEN?:string;AUDIO_FALLBACK_VOICES?:string;ELEVENLABS_KEYS?:string;AUDIO_FALLBACK?:{fetch(request:Request):Promise<Response>};
 caches?:never};
const allowed=new Set(allowedTexts);
export function fallbackVoices(env:AudioFallbackEnv){try{const value=JSON.parse(env.AUDIO_FALLBACK_VOICES??'[]');return Array.isArray(value)?value.filter((v:unknown):v is string=>typeof v==='string'&&v.length>0&&v.length<=100).slice(0,40):[]}catch{return []}}
export function elevenLabsKeys(env:AudioFallbackEnv){try{const value=JSON.parse(env.ELEVENLABS_KEYS??'[]');return Array.isArray(value)?value.filter((v:unknown):v is string=>typeof v==='string'&&v.length>10&&v.length<=200).slice(0,50):[]}catch{return []}}
export function audioFallbackConfigured(env:AudioFallbackEnv){const service=env.AUDIO_FALLBACK_ENABLED==='true'&&Boolean(env.AUDIO_FALLBACK&&env.AUDIO_FALLBACK_SERVICE_TOKEN);const direct=elevenLabsKeys(env).length>0;return (service||direct)&&fallbackVoices(env).length>0}
const fail=(status:number,code:string)=>Response.json({ok:false,code,retryable:false},{status,headers:{'cache-control':'no-store'}});
// Keys that reported quota/auth failure this isolate-lifetime; skipped on later requests.
const exhausted=new Set<string>();
async function fromElevenLabs(text:string,voice:string,keys:string[],seed:number,signal:AbortSignal):Promise<Response|null>{
 const usable=keys.filter(k=>!exhausted.has(k));if(!usable.length)return null;
 const start=seed%usable.length;
 for(let i=0;i<usable.length;i++){
  const key=usable[(start+i)%usable.length];
  try{
   const res=await fetch('https://api.elevenlabs.io/v1/text-to-speech/'+voice+'?output_format=mp3_44100_128',{method:'POST',headers:{'xi-api-key':key,'content-type':'application/json','accept':'audio/mpeg'},body:JSON.stringify({text,model_id:'eleven_multilingual_v2',language_code:'de',voice_settings:{stability:.6,similarity_boost:.75}}),signal});
   if(res.status===401||res.status===429){exhausted.add(key);continue}
   if(!res.ok){const body=await res.clone().text().catch(()=>'');if(/quota|limit/i.test(body)){exhausted.add(key);continue}return null}
   if(!(res.headers.get('content-type')??'').startsWith('audio/'))return null;
   return res;
  }catch{/* try next key */}
 }
 return null;
}
export async function serveAudioFallback(request:Request,env:AudioFallbackEnv){
 if(!audioFallbackConfigured(env))return fail(503,'disabled');
 const url=new URL(request.url);if(request.method!=='POST')return fail(405,'method_not_allowed');
 if(request.headers.get('origin')!==url.origin||request.headers.get('sec-fetch-site')==='cross-site')return fail(403,'origin');
 if(!(request.headers.get('content-type')??'').startsWith('application/json'))return fail(400,'content_type');
 if(Number(request.headers.get('content-length')??0)>12000)return fail(400,'body_too_large');
 let raw:string;try{raw=await request.text()}catch{return fail(400,'body')};if(raw.length>12000)return fail(400,'body_too_large');
 let body:Record<string,unknown>;try{body=JSON.parse(raw)}catch{return fail(400,'json')};if(!body||typeof body!=='object'||Array.isArray(body))return fail(400,'json');
 const text=typeof body.text==='string'?body.text.normalize('NFC').trim().replace(/\s+/gu,' '):'';
 if(!text||text.length>1000||body.language!=='de'||(body.voice!=='varied'&&!fallbackVoices(env).includes(String(body.voice)))||!['free_unavailable','free_playback_error','free_start_timeout'].includes(String(body.fallbackReason)))return fail(400,'parameters');
 const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text)))).map(b=>b.toString(16).padStart(2,'0')).join('');
 const preference=String(body.voice);const voice=preference==='varied'?voiceForTextHash(hash).id:preference;
 if(!ttsVoices.some(v=>v.id===voice)||!fallbackVoices(env).includes(voice))return fail(400,'voice');
 // Catalogued site texts always pass; short German phrases (chat assistant) pass too.
 if(!allowed.has(text)&&text.length>300)return fail(404,'text_not_allowed');
 const cacheKey='https://tts-cache.internal/v1/'+voice+'/'+hash+'.mp3';
 try{
  const cache=(caches as unknown as {default:Cache}).default;
  const hit=await cache.match(cacheKey);
  if(hit)return new Response(hit.body,{headers:{'content-type':'audio/mpeg','cache-control':'private, no-store','x-content-type-options':'nosniff','X-Audio-Cache':'HIT'}});
  let res:Response|null=null;
  const keys=elevenLabsKeys(env);
  if(env.AUDIO_FALLBACK&&env.AUDIO_FALLBACK_SERVICE_TOKEN){
   res=await env.AUDIO_FALLBACK.fetch(new Request('https://audio-fallback.internal/v1/speech',{method:'POST',headers:{'content-type':'application/json',Authorization:'Bearer '+env.AUDIO_FALLBACK_SERVICE_TOKEN,'X-Audio-Site':'deutschy'},body:JSON.stringify({text,language:'de',voice,fallbackReason:body.fallbackReason}),signal:request.signal}));
   if(!res.ok)res=null;
  }
  if(!res&&keys.length)res=await fromElevenLabs(text,voice,keys,parseInt(hash.slice(0,8),16),request.signal);
  if(!res||!res.ok)return fail(502,'fallback_unavailable');
  if(!(res.headers.get('content-type')??'').startsWith('audio/'))return fail(502,'invalid_audio');
  const bytes=await res.arrayBuffer();if(!bytes.byteLength||bytes.byteLength>2_000_000)return fail(502,'invalid_audio');
  const stored=new Response(bytes,{headers:{'content-type':'audio/mpeg','cache-control':'public, max-age=31536000, immutable'}});
  try{await cache.put(cacheKey,stored)}catch{/* cache is best-effort */}
  return new Response(bytes,{headers:{'content-type':'audio/mpeg','cache-control':'private, no-store','x-content-type-options':'nosniff','X-Audio-Cache':'MISS'}});
 }catch{return fail(502,'fallback_unavailable')}
}
