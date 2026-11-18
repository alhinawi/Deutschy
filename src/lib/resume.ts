import {accountMemory} from './account-memory';
import routes from './resume-routes.json';
const known=new Map(routes.map(([href,label])=>[href,label]));
export const RESUME_KEY='deutschy:resume:v1';
export type Resume={href:string;at:number};
export function resumeEntry(raw:unknown,now=Date.now()):Resume|null{
 if(!raw||typeof raw!=='object'||Array.isArray(raw))return null;
 const r=raw as Record<string,unknown>;
 if(typeof r.href!=='string'||r.href.length>240||typeof r.at!=='number'||!Number.isFinite(r.at)||r.at<0||r.at>now+60000)return null;
 const [path,hash,...extra]=r.href.split('#');
 if(extra.length||!known.has(path)||(hash!==undefined&&!/^[a-zA-Z0-9_-]{1,100}$/.test(hash)))return null;
 return {href:r.href,at:r.at};
}
export function resumeLabel(href:string){return known.get(href.split('#')[0])||''}
export function saveResume(path:string,hash='',now=Date.now()){
 const entry=resumeEntry({href:path+hash,at:now},now);if(!entry)return;
 try{const raw=accountMemory.getItem(RESUME_KEY);if(raw){let previous;try{previous=JSON.parse(raw)}catch{return}if(!resumeEntry(previous,now))return}accountMemory.setItem(RESUME_KEY,JSON.stringify(entry));window.dispatchEvent(new Event('deutschy:resume'))}catch{/* Navigation works without storage. */}
}
export function readResume(){try{return resumeEntry(JSON.parse(accountMemory.getItem(RESUME_KEY)||'null'))}catch{return null}}
