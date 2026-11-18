import roster from './voice-roster.json';
export const normalize=(s:string)=>s.normalize('NFC').trim().replace(/\s+/gu,' ');
export const reasons=new Set(['free_unavailable','free_playback_error','free_start_timeout']);
export const voices:Record<string,Set<string>>={de:new Set(roster.de.map(v=>v.id)),en:new Set(roster.en.map(v=>v.id))};
export type Input={text:string;language:'de'|'en';voice:string;fallbackReason:string};
export function parseInput(value:unknown,site:string,allowlist:Record<string,string[]>):{input?:Input;code?:string;status?:number}{
 if(!value||typeof value!=='object')return {code:'invalid_request',status:400};
 const v=value as Record<string,unknown>;
 if(Object.keys(v).some(k=>!['text','language','voice','fallbackReason'].includes(k))||typeof v.text!=='string'||typeof v.voice!=='string'||typeof v.fallbackReason!=='string'||!reasons.has(v.fallbackReason))return {code:'invalid_request',status:400};
 const text=normalize(v.text);if(!text||Array.from(text).length>1000||v.language!==(site==='deutschy'?'de':'en'))return {code:'invalid_request',status:400};
 if(!voices[v.language as string]?.has(v.voice))return {code:'voice_not_allowed',status:400};
 if(!allowlist[site]?.includes(text))return {code:'text_not_allowed',status:404};
 return {input:{text,voice:v.voice,language:v.language as 'de'|'en',fallbackReason:v.fallbackReason}};
}
export function cap(value?:string){const n=Number(value);return Number.isInteger(n)&&n>0&&n<=1000?n:1000}
export function slots(eligible:string|undefined,rotation:string|undefined,single:string|undefined){const parsed=[...new Set((eligible||'').split(',').map(Number).filter(n=>Number.isInteger(n)&&n>=1&&n<=14))];if(rotation==='true')return parsed;const n=Number(single);return parsed.includes(n)?[n]:[]}
export const failure=(code:string,status=503)=>Response.json({ok:false,code,retryable:false},{status,headers:{'Cache-Control':'no-store'}});
