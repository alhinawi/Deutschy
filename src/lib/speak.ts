'use client';
let ttsServer:boolean|null=null,cur:HTMLAudioElement|null=null,curUrl:string|null=null,generation=0;
function cancel(){cur?.pause();cur=null;if(curUrl){URL.revokeObjectURL(curUrl);curUrl=null}if(typeof speechSynthesis!=='undefined')speechSynthesis.cancel()}
export function stopSpeaking(){generation++;cancel()}
// Explicit taps only. Never substitute a non-German device voice.
export async function speak(text:string){stopSpeaking();const token=generation;
 if(ttsServer===null){try{ttsServer=Boolean((await(await fetch('/api/health')).json()).tts)}catch{ttsServer=false}}
 if(token!==generation)return false;
 if(ttsServer){try{const r=await fetch('/api/tts?text='+encodeURIComponent(text));if(token!==generation)return false;if(r.ok){const blob=await r.blob();if(token!==generation)return false;curUrl=URL.createObjectURL(blob);const audio=new Audio(curUrl);cur=audio;audio.onended=()=>{if(token===generation)cancel()};audio.onerror=()=>{if(token===generation)cancel()};await audio.play();if(token!==generation){audio.pause();return false}return true}}catch{if(token!==generation)return false;cancel()}}
 if(typeof speechSynthesis==='undefined')return false;const voice=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith('de'));if(!voice)return false;
 try{const u=new SpeechSynthesisUtterance(text);u.lang=voice.lang;u.voice=voice;u.rate=.85;speechSynthesis.speak(u);return true}catch{return false}
}
