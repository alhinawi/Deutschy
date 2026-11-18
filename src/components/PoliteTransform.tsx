
'use client';
import {answerEffect} from '@/lib/game-effects';
import {useRef,useState} from 'react';
import {useT} from '@/lib/i18n';
import {b1Grammar} from '@/lib/b1-grammar';
const selected=[{row:0,ar:'افتراض حاضر: لو كان عندي وقت أكتر. اكتب صيغة الفعل المطلوبة بس.',en:'Present hypothetical: if I had more time. Type only the required verb form.',cue:'werden → Konjunktiv II'},{row:1,ar:'طلب بأدب. اكتب صيغة الفعل المطلوبة بس، بحرف كبير في بداية السؤال.',en:'Polite request. Type only the required verb form, capitalized at the start of the question.',cue:'können → Sie'},{row:2,ar:'رغبة بأدب، مش حكاية عن امبارح. اكتب صيغة الفعل بس.',en:'Polite wish, not a report about yesterday. Type only the verb form.',cue:'haben → ich'},{row:3,ar:'نصيحة في موقف متخيل. اكتب صيغة الفعل بس.',en:'Advice in an imagined situation. Type only the verb form.',cue:'sein → ich'}];

const names=[['افتراض حاضر','Present hypothetical'],['طلب بأدب','Polite request'],['رغبة بأدب','Polite wish'],['نصيحة متخيلة','Imagined advice']];
type Attempt={answer:string;checked:boolean};
export default function PoliteTransform(){
 const t=useT(),[i,setI]=useState(0),[attempts,setAttempts]=useState<Record<number,Attempt>>({}),[notice,setNotice]=useState('');
 const input=useRef<HTMLInputElement>(null),q=selected[i],row=b1Grammar[0].rows[q.row],attempt=attempts[i]||{answer:'',checked:false};
 const setAttempt=(value:Attempt)=>{setAttempts(p=>({...p,[i]:value}));setNotice('')};
 const change=(n:number)=>{setI(n);setNotice('')};
 const count=Object.values(attempts).filter(a=>a.checked).length;
 return <section id="polite-transform" aria-labelledby="polite-heading" className="scroll-mt-24 space-y-4 rounded-xl border border-line bg-card p-4">
 <h2 id="polite-heading" className="ar-title text-2xl">{t('من المعنى للصيغة','From purpose to form')}</h2>
 <p>{t('نفس أمثلة التدريب الأصلي، بخطوة موجهة: حدد الغرض، راجع الفعل والضمير، واكتب الصيغة. هنا الافتراض عن الحاضر والطلبات بأدب، مش ماضي الافتراض.','The same original practice examples, now guided: identify the purpose, check verb and person, then type the form. This covers present hypotheticals and polite requests, not past counterfactuals.')}</p>
 <p id="polite-help" className="text-sm text-muted">{t('محاولاتك بتفضل وإنت بتبدل بين الأمثلة هنا بس. بتتمسح لما تسيب الصفحة أو تحدّثها. مسح المثال بيأثر على المثال المختار بس. مفيش نقاط أو سجل محفوظ.','Attempts stay while switching examples here, but clear when you leave or reload. Reset affects only the selected example. No points or saved history.')}</p>
 <label htmlFor="polite-task" className="block">{t('المثال والغرض','Example and purpose')}</label>
 <select id="polite-task" value={i} onChange={e=>change(+e.target.value)} className="min-h-11 w-full max-w-full rounded-xl border border-line bg-paper p-3">{selected.map((_,j)=><option key={j} value={j}>{j+1} · {t(names[j][0],names[j][1])}</option>)}</select>
 <p role="status" aria-atomic="true" className="num text-sm text-muted">{notice||<>{t('المثال','Example')} <span dir="ltr" className="inline-block">{i+1} / {selected.length}</span> · {t('اتراجع','Checked')} <span dir="ltr" className="inline-block">{count} / {selected.length}</span></>}</p>
 <p>{t(q.ar,q.en)}</p><p dir="ltr" className="de">{q.cue}</p><p dir="ltr" lang="de" className="de text-xl">{row[0]}</p>
 <form onSubmit={e=>{e.preventDefault();if(attempt.answer.trim()){if(!attempt.checked)answerEffect(attempt.answer.normalize('NFC').trim()===row[1]);setAttempt({...attempt,checked:true})}}} className="space-y-3">
 <label htmlFor="polite-answer" className="block">{t('صيغة الفعل','Verb form')}</label>
 <input ref={input} id="polite-answer" aria-describedby="polite-help" value={attempt.answer} onChange={e=>setAttempt({answer:e.target.value,checked:false})} dir="ltr" lang="de" autoComplete="off" autoCapitalize="none" spellCheck={false} className="de w-full rounded-xl border border-line bg-paper p-3" maxLength={30}/>
 <button disabled={!attempt.answer.trim()} className="min-h-11 rounded-full bg-accent px-5 py-3 text-accent-ink disabled:opacity-50">{t('راجع الصيغة','Check form')}</button>
 </form>
 {attempt.checked&&<div role="status" className="space-y-2"><p>{attempt.answer.normalize('NFC').trim()===row[1]?t('صح.','Correct.'):t('راجع الأوملاوت والضمير وحالة الحرف.','Check umlauts, person and capitalization.')}</p><p dir="ltr" lang="de" className="de text-xl">{row[0].replace('___',row[1])}</p></div>}
 <div className="flex flex-wrap gap-2">
 <button onClick={()=>change((i+selected.length-1)%selected.length)} className="min-h-11 rounded-full border border-line px-4 py-3">{t('المثال اللي قبله','Previous example')}</button>
 <button onClick={()=>change((i+1)%selected.length)} className="min-h-11 rounded-full border border-line px-4 py-3">{t('المثال اللي بعده','Next example')}</button>
 <button disabled={!attempt.answer&&!attempt.checked} onClick={()=>{setAttempt({answer:'',checked:false});setNotice(t('المثال ده اتمسح. محاولات الأمثلة التانية زي ما هي.','This example is reset. Other attempts are unchanged.'));input.current?.focus()}} className="min-h-11 rounded-full border border-line px-4 py-3 disabled:opacity-50">{t('امسح المثال ده','Reset this example')}</button>
 </div></section>
}
