import {accountMemory} from './account-memory';
import { CHECK_LEVELS, checkBank, type CheckQuestion } from './level-check';
import { words, sample, glossOf } from './data';
import { dayNum, grade, type Card } from './srs';
import type { State } from './store';
export const REVIEW_KEY = 'deutschy:review:v1';
export type ReviewData = { cards: Record<string, Card>; saved: string[]; unreadable?:boolean };
export function cleanReview(raw:unknown):ReviewData{const out:ReviewData={cards:{},saved:[]};if(!raw||typeof raw!=='object'||Array.isArray(raw))return {...out,unreadable:true};const d=raw as Record<string,unknown>;if(d.saved!==undefined){if(Array.isArray(d.saved)){out.saved=[...new Set(d.saved.filter((id):id is string=>typeof id==='string'))];if(d.saved.some(id=>typeof id!=='string'))out.unreadable=true}else out.unreadable=true}if(d.cards!==undefined){if(d.cards&&typeof d.cards==='object'&&!Array.isArray(d.cards)){for(const [key,value] of Object.entries(d.cards)){const c=value as Card;if(c&&typeof c==='object'&&Number.isInteger(c.b)&&c.b>=1&&c.b<=6&&Number.isInteger(c.due)){out.cards[key]={b:c.b,due:c.due}}else out.unreadable=true}}else out.unreadable=true}return out}
export function readReview():ReviewData{try{return cleanReview(JSON.parse(accountMemory.getItem(REVIEW_KEY)||'{}'))}catch{return {cards:{},saved:[],unreadable:true}}}
export function writeReview(d:ReviewData){if(d.unreadable||readReview().unreadable)throw Error('Unreadable review data preserved');accountMemory.setItem(REVIEW_KEY,JSON.stringify(d))}
let cachedBank:CheckQuestion[]|null=null;
export function reviewBank(): CheckQuestion[] {
 if(cachedBank)return cachedBank;
 const bank=CHECK_LEVELS.flatMap(checkBank);const unique=new Map(bank.map(q=>[q.key,q]));
 for(const q of bank.filter(q=>q.kind==='reading')) unique.set(q.key.replace(/^r:/,'l:'),{...q,key:q.key.replace(/^r:/,'l:')});
 for(const w of words) unique.set(w.id,{key:w.id,kind:'grammar',prompt:`${w.ar} / ${glossOf(w,'en')}`,options:[`${w.art} ${w.de}`,...sample(words.filter(x=>x.id!==w.id),2).map(x=>`${x.art} ${x.de}`)],href:`/lessons/${w.topic}/`});
 cachedBank=[...unique.values()];return cachedBank;
}
export function reviewQueue(s:State,d:ReviewData,now=dayNum()) {return reviewBank().filter(q=>((s.seen[q.key]?.bad||0)>0||d.saved.includes(q.key)||!!s.srs[q.key])&&(!d.cards[q.key]||d.cards[q.key].due<=now)).sort((a,b)=>(d.cards[a.key]?.due??-Infinity)-(d.cards[b.key]?.due??-Infinity)||a.key.localeCompare(b.key));}
export function gradeReview(d:ReviewData,key:string,ok:boolean,now=dayNum()):ReviewData {return {...d,cards:{...d.cards,[key]:grade(d.cards[key],ok,now)}};}
