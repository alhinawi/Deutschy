import type {State} from './store';
export function localDay(d:Date){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
export function localActivity(s:Pick<State,'lastDay'|'streak'|'daily'>,now=new Date()){
 const today=localDay(now),yesterday=new Date(now);yesterday.setDate(yesterday.getDate()-1);
 const current=s.lastDay===today||s.lastDay===localDay(yesterday);
 const recent=Array.from({length:7},(_,i)=>{const d=new Date(now);d.setHours(12,0,0,0);d.setDate(d.getDate()-(6-i));const key=localDay(d);return {key,xp:s.daily[key]??0};});
 return {today,recent,currentStreak:current?s.streak:0,practicedToday:s.lastDay===today,stale:!!s.lastDay&&!current};
}
