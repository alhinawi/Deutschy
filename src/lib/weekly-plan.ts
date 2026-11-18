export const PLAN_KEY='deutschy:weekly-plan:v1';
export type PlanDay={goal:string;minutes:number;done:boolean};export type PlanWeek=PlanDay[];
export const emptyWeek=():PlanWeek=>Array.from({length:7},()=>({goal:'',minutes:0,done:false}));
export function weekStart(d=new Date()){const x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()-((x.getDay()+6)%7));return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}-${String(x.getDate()).padStart(2,'0')}`}
export function shiftWeek(key:string,offset:number){const [y,m,d]=key.split('-').map(Number),x=new Date(y,m-1,d+offset*7);return weekStart(x)}
export function dayKeys(key:string){const [y,m,d]=key.split('-').map(Number);return Array.from({length:7},(_,i)=>{const x=new Date(y,m-1,d+i);return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}-${String(x.getDate()).padStart(2,'0')}`})}
export function cleanWeek(value:unknown):PlanWeek{if(!Array.isArray(value)||value.length!==7)return emptyWeek();return value.map(v=>{const o=v&&typeof v==='object'?v as Record<string,unknown>:{};const goal=typeof o.goal==='string'?o.goal.slice(0,150):'';return {goal,minutes:typeof o.minutes==='number'&&Number.isFinite(o.minutes)?Math.min(240,Math.max(0,Math.round(o.minutes))):0,done:!!goal.trim()&&o.done===true}})}
export function planTotals(week:PlanWeek){return {planned:week.filter(d=>d.goal.trim()).reduce((s,d)=>s+d.minutes,0),checked:week.filter(d=>d.goal.trim()&&d.done).reduce((s,d)=>s+d.minutes,0),tasks:week.filter(d=>d.goal.trim()).length,done:week.filter(d=>d.goal.trim()&&d.done).length}}

// Reading persisted data must not treat a damaged week as a new empty plan.
export function readPlanWeek(raw:string|null,key:string):{week:PlanWeek;unreadable:boolean;records:Record<string,unknown>|null}{
 try {
  const records:unknown=raw===null?{}:JSON.parse(raw);
  if(!records||typeof records!=='object'||Array.isArray(records))throw Error('invalid plan root');
  const data=records as Record<string,unknown>;
  if(!Object.prototype.hasOwnProperty.call(data,key))return {week:emptyWeek(),unreadable:false,records:data};
  const value=data[key];
  const valid=Array.isArray(value)&&value.length===7&&value.every(d=>d&&typeof d==='object'&&!Array.isArray(d)&&typeof d.goal==='string'&&d.goal.length<=150&&Number.isInteger(d.minutes)&&d.minutes>=0&&d.minutes<=240&&typeof d.done==='boolean'&&(!d.done||!!d.goal.trim()));
  return {week:valid?cleanWeek(value):emptyWeek(),unreadable:!valid,records:data};
 } catch {return {week:emptyWeek(),unreadable:true,records:null};}
}
