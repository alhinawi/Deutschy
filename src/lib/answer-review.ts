import { CHECK_LEVELS, checkBank, type CheckQuestion } from './level-check';
import { words, sample } from './data';
import { dayNum, grade, type Card } from './srs';
import type { State } from './store';
export const REVIEW_KEY = 'deutschy:review:v1';
export type ReviewData = { cards: Record<string, Card>; saved: string[] };
export function readReview(): ReviewData { try {const d=JSON.parse(localStorage.getItem(REVIEW_KEY)||'{}');return {cards:d.cards||{},saved:Array.isArray(d.saved)?d.saved.filter((id:unknown)=>typeof id==='string'):[]};}catch{return {cards:{},saved:[]};} }
export function writeReview(d:ReviewData) { localStorage.setItem(REVIEW_KEY,JSON.stringify(d)); }
export function reviewBank(): CheckQuestion[] {
 const bank=CHECK_LEVELS.flatMap(checkBank);const unique=new Map(bank.map(q=>[q.key,q]));
 for(const q of bank.filter(q=>q.kind==='reading')) unique.set(q.key.replace(/^r:/,'l:'),{...q,key:q.key.replace(/^r:/,'l:')});
 for(const w of words) unique.set(w.id,{key:w.id,kind:'grammar',prompt:`${w.ar} / ${w.de}`,options:[`${w.art} ${w.de}`,...sample(words.filter(x=>x.id!==w.id),2).map(x=>`${x.art} ${x.de}`)],href:`/lessons/${w.topic}/`});
 return [...unique.values()];
}
export function reviewQueue(s:State,d:ReviewData,now=dayNum()) {return reviewBank().filter(q=>((s.seen[q.key]?.bad||0)>0||d.saved.includes(q.key)||!!s.srs[q.key])&&(!d.cards[q.key]||d.cards[q.key].due<=now)).sort((a,b)=>(d.cards[a.key]?.due??-Infinity)-(d.cards[b.key]?.due??-Infinity)||a.key.localeCompare(b.key));}
export function gradeReview(d:ReviewData,key:string,ok:boolean,now=dayNum()):ReviewData {return {...d,cards:{...d.cards,[key]:grade(d.cards[key],ok,now)}};}
