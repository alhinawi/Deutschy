import {numWord,timeFormal,dateWord} from './zahlen';
export type TypedKind='number'|'time'|'date'|'price';
export const typedZahlen=[
...[21,67,345,2026].map(n=>({kind:'number' as TypedKind,prompt:numWord(n),answer:String(n)})),
...[[1,5],[13,30],[0,0],[22,45]].map(([h,m])=>({kind:'time' as TypedKind,prompt:timeFormal(h,m),answer:`${h}:${String(m).padStart(2,'0')}`})),
...[[3,10],[1,8],[21,12],[30,4]].map(([d,m])=>({kind:'date' as TypedKind,prompt:dateWord(d,m),answer:`${d}.${m}.`})),
...[[3,50],[12,5],[1,0],[24,90]].map(([e,c])=>({kind:'price' as TypedKind,prompt:`${e===1?'ein':numWord(e)} Euro${c?' '+numWord(c)+' Cent':''}`,answer:`${e},${String(c).padStart(2,'0')}`})),
];
export function numericValue(kind:TypedKind,raw:string):string|null{const s=raw.trim();if(kind==='number')return /^\d+$/.test(s)?String(Number(s)):null;if(kind==='time'){const m=s.match(/^(\d{1,2}):(\d{2})$/);return m&&+m[1]<24&&+m[2]<60?`${+m[1]}:${m[2]}`:null}if(kind==='date'){const m=s.match(/^(\d{1,2})\.(\d{1,2})\.?$/);if(!m)return null;const d=+m[1],mo=+m[2];return mo>=1&&mo<=12&&d>=1&&d<=[31,29,31,30,31,30,31,31,30,31,30,31][mo-1]?`${d}.${mo}.`:null}const m=s.match(/^(\d+)[,.](\d{2})$/);return m?`${Number(m[1])},${m[2]}`:null}
export function checkNumeric(kind:TypedKind,raw:string,answer:string){const v=numericValue(kind,raw);return v!==null&&v===numericValue(kind,answer)}
