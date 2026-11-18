'use client';
import {answerEffect} from '@/lib/game-effects';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {pitfalls} from '@/lib/pitfalls';
import {useT} from '@/lib/i18n';
import Mixed from './Mixed';
import {practiceOptionOrder} from '@/lib/practice-options';
export default function PitfallsGuide(){
 const t=useT(),[level,setLevel]=useState('A1'),[picks,setPicks]=useState<Record<string,number>>({});
 const lock=useRef<Record<string,number>>({}),heading=useRef<HTMLHeadingElement>(null);
 const list=pitfalls.filter(p=>p.level===level),ids=list.map(p=>p.id),answered=ids.filter(id=>picks[id]!==undefined).length;
 useEffect(()=>{const open=()=>{const p=pitfalls.find(p=>p.id===location.hash.slice(1));if(p)setLevel(p.level)};open();window.addEventListener('hashchange',open);return()=>window.removeEventListener('hashchange',open)},[]);
 useEffect(()=>{document.getElementById(location.hash.slice(1))?.scrollIntoView()},[level]);
 function reset(){const keep=Object.fromEntries(Object.entries(lock.current).filter(([id])=>!ids.includes(id)));lock.current=keep;setPicks(keep);heading.current?.focus()}
 return <article className="mx-auto max-w-3xl space-y-5">
 <h1 ref={heading} tabIndex={-1} className="ar-title text-4xl font-bold">{t('متنقلش العربي حرفياً','Avoid word-for-word transfer')}</h1>
 <p>{t('نقط تستاهل المراجعة وإنت بتتعلم ألماني بالعربي، مش حكم إن كل الناطقين بالعربي بيغلطوا نفس الغلط. المستويات لتنظيم التدريب مش ترتيب رسمي؛ أمثلة B2 فيها جسر للشرح المتقدم.','Points to check when learning German through Arabic, not a claim that all Arabic speakers make the same mistakes. Levels organize practice, not official placement; B2 examples bridge into advanced explanations.')}</p>
 <p className="text-sm text-muted">{t('إجاباتك مؤقتة، من غير نقط أو سجل محفوظ. تغيير المجموعة بيحتفظ بإجابات المجموعات التانية؛ إعادة المجموعة دي بس بتمسح إجاباتها هي.','Answers are temporary, with no points or saved history. Switching groups keeps answers in other groups; resetting this group clears only its answers.')}</p>
 <label htmlFor="pitfall-level" className="block">{t('مجموعة التدريب','Practice grouping')}</label><select id="pitfall-level" value={level} onChange={e=>setLevel(e.target.value)} className="min-h-11 rounded-xl border border-line bg-card p-3">{['A1','A2','B1','B2','C1','C2'].map(l=><option key={l}>{l}</option>)}</select>
 <p role="status" aria-atomic="true" className="num text-sm text-muted">{t('أسئلة جاوبتها في المجموعة دي: ','Answered in this group: ')}<span dir="ltr" className="inline-block">{answered} / {list.length}</span> · <bdi>{level}</bdi></p>
 {list.map(p=><section id={p.id} key={p.id} className="space-y-4 rounded-xl border border-line bg-card p-4"><h2 className="ar-title text-2xl"><Mixed text={t(...p.title)}/></h2><p><Mixed text={t(...p.note)}/></p><fieldset className="space-y-2"><legend dir="ltr" lang="de" className="de pb-2 text-xl">{p.prompt}</legend>{practiceOptionOrder(p.id,'pitfall').map(i=><button key={i} disabled={picks[p.id]!==undefined} onClick={()=>{if(lock.current[p.id]!==undefined)return;lock.current[p.id]=i;answerEffect(i===0);setPicks(s=>({...s,[p.id]:i}))}} dir="ltr" lang="de" className="de block min-h-11 w-full rounded-xl border border-line p-3 text-start">{p.answers[i]}</button>)}{picks[p.id]!==undefined&&<div role="status" aria-atomic="true" className="space-y-2"><p>{picks[p.id]===0?t('صح.','Correct.'):t('راجع الشرح. الصيغة المطلوبة:','Review the explanation. Target answer:')}</p><p dir="ltr" lang="de" className="de">{p.answers[0]}</p></div>}</fieldset><div className="flex flex-wrap gap-4 text-sm"><Link href={p.href} className="py-2 underline">{t('تدريب مرتبط','Related practice')}</Link><a href={p.source} target="_blank" rel="noreferrer" className="py-2 underline">{t('مرجع الشرح','Explanation source')}</a></div></section>)}
 <button disabled={!answered} onClick={reset} className="min-h-11 rounded-full border border-line px-5 py-3 disabled:opacity-50">{t('ابدأ أسئلة المجموعة دي بس من جديد','Reset this group only')}</button>
 </article>
}
