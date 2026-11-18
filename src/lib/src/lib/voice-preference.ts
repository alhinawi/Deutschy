'use client';
import {ttsVoices} from './tts-voices';
export const validVoicePreference=(value:unknown):value is string=>value==='varied'||(typeof value==='string'&&ttsVoices.some(v=>v.id===value));
let scope:Promise<string>|null=null;
export async function voicePreferenceKey(){
 if(!scope)scope=(async()=>{const response=await fetch('/api/auth/me',{cache:'no-store'});if(!response.ok)throw Error('identity unavailable');const data=await response.json();if(data.user===null)return 'deutschy:voice:guest';if(!Number.isInteger(data.user?.id)||data.user.id<1)throw Error('identity unavailable');return 'deutschy:voice:user:'+data.user.id})().catch(error=>{scope=null;throw error});
 return scope;
}
export async function readVoicePreference(){const key=await voicePreferenceKey();const value=localStorage.getItem(key)??'varied';return validVoicePreference(value)?value:'varied'}
export async function writeVoicePreference(value:string){if(!validVoicePreference(value))throw Error('invalid voice');const key=await voicePreferenceKey();localStorage.setItem(key,value)}
