import {readings} from './reading';
export const dictationItems=readings.flatMap(r=>r.de.flatMap((p,pi)=>p.split(/(?<=[.!?])\s+/).filter(s=>s.length>10).map((text,i)=>({id:`${r.id}:${pi}:${i}`,level:r.level,source:r.id,title:r.title[0],text,href:`/reading/${r.id}/`}))));
export function compareDictation(answer:string,target:string){const tokens=(s:string)=>s.normalize('NFC').trim().replace(/[.,!?;:"„“”()]/g,'').split(/\s+/).filter(Boolean);const a=tokens(answer),b=tokens(target);return {exact:answer.normalize('NFC').trim()===target.normalize('NFC').trim(),words:b.map((word,i)=>({word,typed:a[i]||'',match:a[i]===word})),extra:a.slice(b.length)};}
export type DictationDiff={kind:'same'|'missing'|'extra';text:string};
// Word alignment, not language grading. Case and umlauts remain significant.
export function dictationDiff(answer:string,target:string):DictationDiff[]{const tokens=(s:string)=>s.normalize('NFC').trim().replace(/[.,!?;:"„“”()]/g,'').split(/\s+/).filter(Boolean),a=tokens(answer),b=tokens(target);const dp=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0));for(let i=a.length-1;i>=0;i--)for(let j=b.length-1;j>=0;j--)dp[i][j]=a[i]===b[j]?1+dp[i+1][j+1]:Math.max(dp[i+1][j],dp[i][j+1]);let i=0,j=0;const out:DictationDiff[]=[];while(i<a.length||j<b.length){if(i<a.length&&j<b.length&&a[i]===b[j]){out.push({kind:'same',text:b[j]});i++;j++}else if(i<a.length&&(j===b.length||dp[i+1][j]>=dp[i][j+1]))out.push({kind:'extra',text:a[i++]});else out.push({kind:'missing',text:b[j++]})}return out}

// A focused set uses only sentences from one original reading; no new score or storage.
export function dictationSet(level:string,source='all'){return dictationItems.filter(x=>x.level===level&&(source==='all'||x.source===source));}
export function dictationSources(level:string){return readings.filter(r=>r.level===level&&dictationItems.some(x=>x.source===r.id)).map(r=>({id:r.id,title:r.title[0],count:dictationSet(level,r.id).length}));}
