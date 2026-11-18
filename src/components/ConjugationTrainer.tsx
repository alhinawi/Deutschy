'use client';
import PresentFocus from './PresentFocus';
import ConjugationGuide from './ConjugationGuide';
import {useRef,useState} from 'react';
import {useT} from '@/lib/i18n';
import {persons,conjugationVerbs,conjugationTenses,conjugationAnswers} from '@/lib/conjugation';

export default function ConjugationTrainer(){
 const t=useT(),[vi,setV]=useState(0),[tense,setTense]=useState(conjugationTenses[0]),[person,setPerson]=useState(0),[answer,setAnswer]=useState(''),[checked,setChecked]=useState(false),[table,setTable]=useState(false);
 const input=useRef<HTMLInputElement>(null);
 const v=conjugationVerbs[vi],answers=conjugationAnswers(v,tense,person);
 function reset(){setAnswer('');setChecked(false);setTable(false)}
 function move(delta:number){setPerson(p=>(p+delta+persons.length)%persons.length);reset()}
 return <div className="mx-auto max-w-3xl space-y-5">
  <h1 className="ar-title text-4xl font-bold">{t('معمل تصريف الأفعال','Verb conjugation lab')}</h1>
  <p>{t('12 فعل شائع، فيهم أفعال منتظمة وقوية وفعلين مساعدين. 6 أزمنة وصيغ للخبر والكلام المنقول والافتراض. دي مجموعة بتكبر، مش كل أفعال الألماني. هنا بتتمرّن على كتابة الصيغة؛ اختيار الزمن المناسب محتاج سياق.','12 common verbs, including regular and strong verbs and two auxiliaries. Six tenses plus reported-speech and hypothetical forms. This is a growing selection, not all German verbs. This practices forms, not when to use each tense.')}</p>
  <ConjugationGuide/>
  <PresentFocus/>
  <section aria-labelledby="conj-full-title" className="space-y-4 rounded-xl border border-line bg-card p-4">
   <h2 id="conj-full-title" className="ar-title text-2xl">{t('اختار الزمن والضمير','Choose tense and person')}</h2>
   <p id="conj-help" className="text-sm text-muted">{t('اختار الضمير مباشرة أو اتحرك بين الضماير. بعد آخر ضمير بنرجع للأول. تغيير الاختيار بيمسح الإجابة وجدول المراجعة. مفيش نقاط أو سجل بيتحفظ هنا. مسح المحاولة بيمسح الإجابة والجدول بس، من غير تغيير الفعل أو الزمن أو الضمير.','Choose a person directly or move between persons. After the last person, the sequence returns to the first. Changing a selection clears the answer and reference table. No points or history are saved here. Reset this attempt clears only this typed form and reference table, keeping your selections.')}</p>
   <div className="grid gap-4 sm:grid-cols-2">
    <div className="space-y-2"><label htmlFor="conj-verb" className="block">{t('الفعل','Verb')}</label><select id="conj-verb" dir="ltr" value={vi} onChange={e=>{setV(+e.target.value);reset()}} className="min-h-11 w-full rounded-xl border border-line bg-paper p-3">{conjugationVerbs.map((x,i)=><option key={x.inf} value={i}>{x.inf}</option>)}</select></div>
    <div className="space-y-2"><label htmlFor="conj-person" className="block">{t('الضمير','Person')}</label><select id="conj-person" dir="ltr" value={person} onChange={e=>{setPerson(+e.target.value);reset()}} className="min-h-11 w-full rounded-xl border border-line bg-paper p-3">{persons.map((x,i)=><option key={x} value={i}>{x}</option>)}</select></div>
   </div>
   <label htmlFor="conj-tense" className="block">{t('الزمن أو الصيغة','Tense or mood')}</label>
   <select id="conj-tense" dir="ltr" value={tense} onChange={e=>{setTense(e.target.value);reset()}} className="min-h-11 w-full max-w-full rounded-xl border border-line bg-paper p-3">{conjugationTenses.map(x=><option key={x}>{x}</option>)}</select>
   <p className="text-sm text-muted">{t('المعنى هنا: ','Selected verb: ')}{v.ar && t(v.ar,v.inf)}</p>
   {v.inf==='fahren'&&<div className="space-y-2 rounded-xl border border-line p-3">
    <p>{t('هنا بنتدرّب على معنى الانتقال بمواصلة، فالمساعد في الأزمنة المركبة هو فعل يكون. في معاني تانية، زي قيادة عربية بعينها، المساعد ممكن يختلف. المثالين دول مش نفس الاستخدام.','This set uses travel by vehicle, with sein in compound forms. Other meanings, such as driving a particular vehicle, can use haben. These examples have different uses.')}</p>
    <p className="de" dir="ltr">Ich bin nach Berlin gefahren.</p>
    <p className="de" dir="ltr">Ich habe den Wagen gefahren.</p>
    <a className="inline-block min-h-11 py-3 text-sm underline" href="https://www.duden.de/rechtschreibung/fahren" target="_blank" rel="noreferrer">{t('مرجع المعاني والمساعد','Meanings and auxiliary reference')}</a>
   </div>}
   <p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-muted"><span dir="ltr" className="inline-block">{person+1} / {persons.length} · {tense}</span></p>
   <p className="de break-words text-2xl" dir="ltr">{persons[person]} ___ ({v.inf})</p>
   <form onSubmit={e=>{e.preventDefault();setChecked(true)}} className="space-y-3">
    <label htmlFor="conj-answer" className="block">{t('اكتب التصريف كله، من غير الضمير','Type the full verb form, without the pronoun')}</label>
    <input ref={input} id="conj-answer" aria-describedby="conj-help" lang="de" dir="ltr" autoComplete="off" autoCapitalize="none" spellCheck={false} value={answer} onChange={e=>{setAnswer(e.target.value);setChecked(false)}} className="de w-full rounded-xl border border-line bg-paper p-3" maxLength={100}/>
    <button disabled={!answer.trim()} className="min-h-11 rounded-full bg-accent px-5 py-3 text-accent-ink disabled:opacity-50">{t('راجع','Check')}</button>
   </form>
   {checked&&<div role="status" className="space-y-2 rounded-xl border border-line p-4"><p>{answers.includes(answer.normalize('NFC').trim().replace(/\s+/g,' '))?t('صح.','Correct.'):t('راجع الصيغة، والمساعد، والأوملاوت.','Check the form, auxiliary and umlauts.')}</p><p className="de break-words text-xl" dir="ltr">{persons[person]} {answers.join(' / ')}</p></div>}
   <div className="flex flex-wrap gap-3">
    <button type="button" disabled={!answer&&!checked&&!table} onClick={()=>{reset();input.current?.focus()}} className="min-h-11 rounded-full border border-line px-5 py-3 disabled:opacity-50">{t('امسح المحاولة دي','Reset this attempt')}</button>
    <button type="button" onClick={()=>move(-1)} className="min-h-11 rounded-full border border-line px-5 py-3">{t('الضمير اللي قبله','Previous person')}</button>
    <button type="button" onClick={()=>move(1)} className="min-h-11 rounded-full border border-line px-5 py-3">{t('الضمير اللي بعده','Next person')}</button>
    <button type="button" aria-expanded={table} aria-controls={table?"conj-reference":undefined} onClick={()=>setTable(!table)} className="min-h-11 rounded-full border border-line px-5 py-3">{table?t('اخفي جدول المراجعة','Hide reference table'):t('جدول المراجعة','Reference table')}</button>
   </div>
   {table&&<div className="space-y-2"><p id="conj-table-help" className="text-sm text-muted">{t('جدول مراجعة للضمائر كلها في الزمن المختار. لو الصيغ طويلة، حرّك الجدول بالعرض. فتحه أو قفله مش بيغيّر إجابتك.','Reference for every person in the selected tense. Scroll sideways for long forms. Opening or closing it does not change your answer.')}</p><p id="conj-table-caption" dir="ltr" className="de [overflow-wrap:anywhere]">{v.inf}: {tense}</p><div id="conj-reference" role="region" tabIndex={0} aria-labelledby="conj-table-caption" aria-describedby="conj-table-help" className="overflow-x-auto rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" dir="ltr"><table className="min-w-[520px] w-full"><caption className="sr-only">{v.inf}: {tense}</caption><thead><tr><th scope="col">Person</th><th scope="col">Form</th></tr></thead><tbody>{persons.map((p,i)=><tr key={p}><th scope="row" className="p-2">{p}</th><td className="de p-2">{conjugationAnswers(v,tense,i).join(' / ')}</td></tr>)}</tbody></table></div></div>}
   <p className="text-sm text-muted">{t('بعض صيغ Konjunktiv شبه الخبر؛ هنا بنراجع الصيغة المطلوبة بالاسم. صيغة würde بديل شائع، مش زمن سابع. مفيش مبني للمجهول أو أفعال مودال في المجموعة دي.','Some Konjunktiv forms match the indicative; this checks the named form. The würde form is a common alternative, not a seventh tense. This set excludes passive and modal verbs.')}</p>
   <a href={v.source} target="_blank" rel="noreferrer" className="inline-block min-h-11 py-3 underline">{t('مصدر مراجعة التصريف','Conjugation reference')}</a>
  </section>
 </div>;
}
