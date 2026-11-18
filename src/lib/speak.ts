'use client';
import {chooseEdgeGermanVoice} from './browser-voices';
import {readVoicePreference} from './voice-preference';
import {recordedAudio} from './recorded-audio';
export type SpeechStatus='loading'|'playing'|'ended'|'stopped'|'unavailable'|'error';
export type SpeechOptions={rate?:number;voice?:string;onend?:()=>void;onerror?:()=>void;onstatus?:(status:SpeechStatus)=>void};
const listeners=new Set<(status:SpeechStatus)=>void>();
export function subscribeSpeechStatus(listener:(status:SpeechStatus)=>void){listeners.add(listener);return()=>{listeners.delete(listener)}}
export const speechFailureCopy={
 unavailable:{ar:'الصوت مش متاح هنا دلوقتي. مفيش مصدر صوت متوافق؛ تقدر تكمل بالنص.',en:'Audio is unavailable here right now. No compatible audio source was found. You can continue with the text.'},
 error:{ar:'الصوت مقدرش يكمل. جرّب تشغيله تاني؛ النص لسه متاح.',en:'Audio could not finish playing. Try playing it again. The text is still available.'}
};
let health:{enabled:boolean;until:number}|null=null,cur:HTMLAudioElement|null=null,curUrl:string|null=null,generation=0,request:AbortController|null=null;
let notifyActive:((status:SpeechStatus)=>void)|null=null;
function cancel(){request?.abort();request=null;if(cur){cur.onended=null;cur.onerror=null;cur.pause();cur=null}if(curUrl){URL.revokeObjectURL(curUrl);curUrl=null}if(typeof speechSynthesis!=='undefined')speechSynthesis.cancel()}
export function stopSpeaking(){generation++;const notify=notifyActive;notifyActive=null;cancel();notify?.('stopped')}
// Explicit taps only: verified recording > manifest-only proxy > identified German Edge voice.
export async function speak(raw:string,options:SpeechOptions={}){
 stopSpeaking();const token=generation,text=raw.normalize('NFC').trim().replace(/\s+/gu,' '),rate=Math.min(1.5,Math.max(.5,options.rate??.85));
 const notify=(status:SpeechStatus)=>{options.onstatus?.(status);listeners.forEach(listener=>listener(status))};
 notifyActive=notify;notify('loading');
 let finished=false;
 const finish=(status:'ended'|'unavailable'|'error')=>{if(token!==generation||finished)return false;finished=true;notifyActive=null;cancel();notify(status);if(status==='ended')options.onend?.();else options.onerror?.();return false};
 if(!text)return finish('unavailable');
 const ended=()=>{finish('ended')},failed=()=>{finish('error')};
 async function playAudio(src:string){if(token!==generation)return false;const audio=new Audio(src);let started=false;cur=audio;audio.playbackRate=rate;audio.onended=ended;audio.onerror=()=>{if(started)failed()};try{await audio.play();started=true;if(token!==generation){audio.pause();return false}notify('playing');return true}catch{if(token===generation){audio.onended=null;audio.onerror=null;audio.pause();cur=null;if(curUrl){URL.revokeObjectURL(curUrl);curUrl=null}}return false}}
 const recording=recordedAudio[text];
 if(recording && await playAudio(recording))return true;
 if(token!==generation)return false;
 request=new AbortController();const controller=request,signal=controller.signal;
 // A stalled connection must still reach the permitted browser fallback.
 const timeout=setTimeout(()=>controller.abort(),8000);
 try{
  if(!health || health.until<Date.now()){const res=await fetch('/api/health',{signal});health={enabled:Boolean((await res.json()).tts),until:Date.now()+30000}}
  if(token!==generation)return false;
  if(health.enabled){let preference='varied';try{preference=await readVoicePreference()}catch{/* Default without writing when identity/storage cannot be read. */}if(token!==generation)return false;const res=await fetch('/api/tts?text='+encodeURIComponent(text)+'&voice='+encodeURIComponent(preference),{signal});if(token!==generation)return false;if(res.ok&&(res.headers.get('content-type')??'').startsWith('audio/')){const blob=await res.blob();if(token!==generation)return false;curUrl=URL.createObjectURL(blob);if(await playAudio(curUrl))return true}}
 }catch{if(token!==generation)return false}finally{clearTimeout(timeout)}
 if(token!==generation)return false;
 if(typeof speechSynthesis==='undefined')return finish('unavailable');const voice=chooseEdgeGermanVoice(options.voice);if(!voice)return finish('unavailable');
 try{const u=new SpeechSynthesisUtterance(text);u.lang=voice.lang;u.voice=voice;u.rate=rate;u.onend=ended;u.onerror=failed;speechSynthesis.speak(u);notify('playing');return true}catch{return finish('error')}
}
