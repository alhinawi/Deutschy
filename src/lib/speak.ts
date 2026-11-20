'use client';
import {chooseEdgeGermanVoice} from './browser-voices';
import {readVoicePreference} from './voice-preference';
import {staticSpeech,speechShardBases} from './static-speech';
import {recordedAudio} from './recorded-audio';
export type SpeechStatus='loading'|'playing'|'ended'|'stopped'|'unavailable'|'error';
export type SpeechOptions={modelSource?:string;rate?:number;voice?:string;onend?:()=>void;onerror?:()=>void;onstatus?:(status:SpeechStatus)=>void};
const listeners=new Set<(status:SpeechStatus)=>void>();
export function subscribeSpeechStatus(listener:(status:SpeechStatus)=>void){listeners.add(listener);return()=>{listeners.delete(listener)}}
export const speechFailureCopy={
 unavailable:{ar:'الصوت مش متاح هنا دلوقتي. مفيش مصدر صوت متوافق؛ تقدر تكمل بالنص.',en:'Audio is unavailable here right now. No compatible audio source was found. You can continue with the text.'},
 error:{ar:'الصوت مقدرش يكمل. جرّب تشغيله تاني؛ النص لسه متاح.',en:'Audio could not finish playing. Try playing it again. The text is still available.'}
};
type Health={audioFallback:boolean;voices:string[];until:number};
type Reason='free_unavailable'|'free_playback_error'|'free_start_timeout';
let health:Health|null=null,cur:HTMLAudioElement|null=null,curUrl:string|null=null,generation=0,request:AbortController|null=null;
let clearActive:(()=>void)|null=null,notifyActive:((status:SpeechStatus)=>void)|null=null;
function cancel(){clearActive?.();clearActive=null;request?.abort();request=null;if(cur){cur.onended=null;cur.onerror=null;cur.pause();cur=null}if(curUrl){URL.revokeObjectURL(curUrl);curUrl=null}if(typeof speechSynthesis!=='undefined')speechSynthesis.cancel()}
export function stopSpeaking(){generation++;const notify=notifyActive;notifyActive=null;cancel();notify?.('stopped')}
const denied=(error:unknown)=>['AbortError','NotAllowedError'].includes((error as {name?:string})?.name??'');
// Exact clips first, then the live ElevenLabs adapter (/api/audio-fallback),
// then the permitted browser voice as the last resort.
export async function speak(raw:string,options:SpeechOptions={}){
 stopSpeaking();const token=generation,text=raw.normalize('NFC').trim().replace(/\s+/gu,' '),rate=Math.min(1.5,Math.max(.5,options.rate??.85));
 const active=()=>token===generation&&!finished;
 const notify=(status:SpeechStatus)=>{if(token!==generation&&status!=='stopped')return;options.onstatus?.(status);listeners.forEach(listener=>listener(status))};
 let finished=false,vendorTried=false,reason:Reason='free_unavailable';
 notifyActive=notify;notify('loading');
 const finish=(status:'ended'|'unavailable'|'error')=>{if(!active())return false;finished=true;notifyActive=null;cancel();notify(status);if(status==='ended')options.onend?.();else options.onerror?.();return false};
 if(!text)return finish('unavailable');
 async function playAudio(src:string,next:()=>Promise<boolean>):Promise<boolean>{
  if(!active())return false;
  const audio=new Audio(src);cur=audio;audio.playbackRate=rate;let moved=false,timer:ReturnType<typeof setTimeout>|undefined;
  const clean=()=>{if(timer!==undefined)clearTimeout(timer);audio.onended=null;audio.onerror=null};clearActive=clean;
  async function advance(error?:unknown){if(moved||!active())return false;moved=true;clean();audio.pause();if(cur===audio)cur=null;if(denied(error))return finish('error');if((error as {name?:string})?.name!=='StartTimeout')reason='free_playback_error';return next()}
  audio.onended=()=>{if(moved||!active())return;moved=true;clean();finish('ended')};
  audio.onerror=()=>{void advance()};
  return new Promise<boolean>(resolve=>{let settled=false;const settle=(value:boolean)=>{if(!settled){settled=true;resolve(value)}};
   clearActive=()=>{clean();settle(false)};
   audio.onerror=()=>{void advance().then(settle)};
   timer=setTimeout(()=>{reason='free_start_timeout';const e=new Error('Audio start timeout');e.name='StartTimeout';void advance(e).then(settle)},8000);
   try{Promise.resolve(audio.play()).then(()=>{if(moved||!active()){settle(false);return}if(timer!==undefined)clearTimeout(timer);notify('playing');settle(true)},error=>{void advance(error).then(settle)})}catch(error){void advance(error).then(settle)}
  });
 }
 async function vendor():Promise<boolean>{
  if(!active()||vendorTried)return false;vendorTried=true;
  if(text.length>1000)return browser();
  request=new AbortController();const controller=request;let timedOut=false;
  const timer=setTimeout(()=>{timedOut=true;controller.abort()},8000);
  try{
   if(!health||health.until<Date.now()){const res=await fetch('/api/health',{signal:controller.signal});const data=await res.json();health={audioFallback:data.audioFallback===true,voices:Array.isArray(data.audioFallbackVoices)?data.audioFallbackVoices.filter((v:unknown)=>typeof v==='string'):[],until:Date.now()+30000}}
   if(!active())return false;if(!health.audioFallback)return browser();
   let preference='';try{preference=await readVoicePreference()}catch{}
   const voice=preference==='varied'||health.voices.includes(preference)?preference:'varied';if(!health.voices.length)return browser();
   if(!active())return false;notify('loading');
   const res=await fetch('/api/audio-fallback',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({text,language:'de',voice,fallbackReason:reason}),signal:controller.signal});
   if(!active())return false;
   if(!res.ok||!(res.headers.get('content-type')??'').startsWith('audio/'))return browser();
   const blob=await res.blob();if(!active())return false;curUrl=URL.createObjectURL(blob);return await playAudio(curUrl,async()=>finish('error'));
  }catch(error){if(!active())return false;if(denied(error)&&!timedOut)return finish('error');return browser()}
  finally{clearTimeout(timer)}
 }
 async function browser():Promise<boolean>{
  if(!active())return false;
  const voice=typeof speechSynthesis==='undefined'?undefined:chooseEdgeGermanVoice(options.voice);
  if(!voice)return finish('unavailable');
  let moved=false,started=false,timer:ReturnType<typeof setTimeout>|undefined;const u=new SpeechSynthesisUtterance(text);u.lang=voice.lang;u.voice=voice;u.rate=rate;
  const clean=()=>{if(timer!==undefined)clearTimeout(timer);u.onstart=null;u.onend=null;u.onerror=null};clearActive=clean;
  const advance=async(error?:unknown)=>{if(moved||!active())return false;moved=true;clean();speechSynthesis.cancel();if(denied(error)||(error as {error?:string})?.error==='not-allowed'||['canceled','interrupted'].includes((error as {error?:string})?.error??''))return finish('error');if(reason!=='free_start_timeout')reason='free_playback_error';return finish('unavailable')};
  u.onstart=()=>{started=true;if(active()&&timer!==undefined)clearTimeout(timer)};
  u.onend=()=>{if(moved||!active())return;moved=true;clean();finish('ended')};u.onerror=e=>{void advance(e)};
  try{speechSynthesis.speak(u);if(!active())return false;notify('playing');if(!started)timer=setTimeout(()=>{reason='free_start_timeout';void advance()},8000);return true}catch(error){return advance(error)}
 }
 // Phoneme models cannot fall back to text spelling without changing what is taught.
 if(options.modelSource!==undefined){if(!/^\/clips\/[a-f0-9]{64}\.mp3$/.test(options.modelSource))return finish('unavailable');return playAudio(options.modelSource,async()=>finish('unavailable'))}
 const sources:string[]=[];if(recordedAudio[text])sources.push(recordedAudio[text]);const cached=staticSpeech[text];
 if(cached?.shard==='deutschy-local'&&/^\/clips\/[a-f0-9]{64}\.mp3$/.test(cached.url))sources.push(cached.url);
 const base=cached?speechShardBases[cached.shard]:'';if(cached&&/^https:\/\/[a-z0-9-]+\.pages\.dev$/.test(base))sources.push(base+cached.url);
 let index=0;const next=async():Promise<boolean>=>{if(!active())return false;return index<sources.length?playAudio(sources[index++],next):vendor()};return next();
}
