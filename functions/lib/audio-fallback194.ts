import {ttsVoices,voiceForTextHash} from './tts-voices';
import allowedTexts from '../../data/audio-fallback-allowlist194.json';
export type AudioFallbackEnv={AUDIO_FALLBACK_ENABLED?:string;AUDIO_FALLBACK_SERVICE_TOKEN?:string;AUDIO_FALLBACK_VOICES?:string;AUDIO_FALLBACK?:{fetch(request:Request):Promise<Response>}};
const allowed=new Set(allowedTexts);
export function fallbackVoices(env:AudioFallbackEnv){try{const value=JSON.parse(env.AUDIO_FALLBACK_VOICES??'[]');return Array.isArray(value)?value.filter((v:unknown):v is string=>typeof v==='string'&&v.length>0&&v.length<=100).slice(0,40):[]}catch{return []}}
export function audioFallbackConfigured(env:AudioFallbackEnv){return env.AUDIO_FALLBACK_ENABLED==='true'&&Boolean(env.AUDIO_FALLBACK&&env.AUDIO_FALLBACK_SERVICE_TOKEN)&&fallbackVoices(env).length>0}
const fail=(status:number,code:string)=>Response.json({ok:false,code,retryable:false},{status,headers:{'cache-control':'no-store'}});
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
 if(!allowed.has(text))return fail(404,'text_not_allowed');
 try{const res=await env.AUDIO_FALLBACK!.fetch(new Request('https://audio-fallback.internal/v1/speech',{method:'POST',headers:{'content-type':'application/json',Authorization:'Bearer '+env.AUDIO_FALLBACK_SERVICE_TOKEN!,'X-Audio-Site':'deutschy'},body:JSON.stringify({text,language:'de',voice,fallbackReason:body.fallbackReason}),signal:request.signal}));
  if(!res.ok)return fail([400,401,403,404,409,429,502,503,507].includes(res.status)?res.status:502,'fallback_unavailable');
  if(!(res.headers.get('content-type')??'').startsWith('audio/mpeg'))return fail(502,'invalid_audio');
  return new Response(res.body,{headers:{'content-type':'audio/mpeg','cache-control':'private, no-store','x-content-type-options':'nosniff','X-Audio-Cache':res.headers.get('X-Audio-Cache')==='HIT'?'HIT':'MISS'}});
 }catch{return fail(502,'fallback_unavailable')}
}
