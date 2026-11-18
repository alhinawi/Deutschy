'use client';
import {useRef,useState} from 'react';
import Link from 'next/link';
import {checkpointQuestions} from '@/lib/checkpoint-questions';
import {checkpointKey,checkpointPassed,checkpointState,type CheckpointId} from '@/lib/completion';
import {useStore} from '@/lib/store';
import {useT} from '@/lib/i18n';
export default function LessonCheckpoint({id}:{id:CheckpointId}){
 const t=useT(),{s,ready,storageError,awardOnce}=useStore(),bank=checkpointQuestions[id];
 const [index,setIndex]=useState(0),[pick,setPick]=useState<string|null>(null),[score,setScore]=useState(0),[done,setDone]=useState(false),[run,setRun]=useState(0);
 const cursor=useRef(0),generation=useRef(0),locked=useRef(false),finished=useRef(false),feedback=useRef<HTMLParagraphElement>(null);
 const current=bank[index],status=checkpointState(s,id),passed=done&&checkpointPassed(score,bank.length,bank.length);
 // Stable order rotates correct positions without turning question identities into random keys.
 const choices=current?[...current.choices.slice(index%3),...current.choices.slice(0,index%3)]:[];
 function answer(value:string){if(!ready||locked.current||done||cursor.current!==index||generation.current!==run)return;locked.current=true;setPick(value);if(value===current.choices[0])setScore(n=>n+1)}
 function next(){if(pick===null||done||finished.current||cursor.current!==index||generation.current!==run)return;cursor.current++;if(index+1===bank.length){finished.current=true;setDone(true);if(checkpointPassed(score,bank.length,bank.length))awardOnce(20,checkpointKey(id));}else{setIndex(i=>i+1);setPick(null);locked.current=false}requestAnimationFrame(()=>feedback.current?.focus())}
 function restart(){generation.current++;setRun(generation.current);cursor.current=0;setIndex(0);setPick(null);setScore(0);setDone(false);locked.current=false;finished.current=false;requestAnimationFrame(()=>feedback.current?.focus())}
 return <section id="lesson-checkpoint" aria-labelledby="checkpoint-title" className="space-y-4 rounded-2xl border border-line bg-card p-5">
  <h2 id="checkpoint-title" className="ar-title text-2xl font-bold">{t('مراجعة آخر الدرس','End-of-lesson review')}</h2>
  <p>{t('الخطوة بتتسجل تلقائي لما تخلّص جولة المراجعة بـ 8 إجابات صح من 8. التصفح لوحده مش إكمال. تقدر تعيد المحاولة؛ 20 نقطة مرة واحدة للخطوة، مش مع كل إعادة.','This step is recorded automatically after finishing an 8-of-8 review round. Browsing alone does not complete it. Retry as needed; 20 XP is awarded once for the step, not on every retry.')}</p>
  <p className="text-sm text-muted">{id==='pron'?t('دي مراجعة للحروف وأمثلة مكتوبة، مش اختبار سمع أو تقييم لنطقك. الصوت اختياري ومش شرط عشان تكمّل.','This checks letters and written examples, not listening or your spoken pronunciation. Audio is optional and not required for completion.'):t('دي مراجعة قصيرة لأمثلة الدرس، مش شهادة إنك أتقنت كل الأساسيات.','This is a short review of lesson examples, not certification of all the basics.')}</p>
  {status.legacy&&<p className="text-sm text-muted">{t('عندك علامة إكمال قديمة محفوظة من قبل التحديث. سبناها زي ما هي؛ مش نتيجة اختبار، والمراجعة دي متاحة ليك.','A completion mark from before this update is kept as a prior record. It is not a quiz result; you can still take this review.')}</p>}
  {status.earned&&<p role="status" className="text-good">{t('المراجعة مكتملة ومسجلة على الجهاز ده.','Review completed and recorded on this device.')}</p>}
  {storageError&&<p role="alert">{t('مقدرناش نحفظ التقدم بأمان. السجل القديم متغيرش؛ سيب النتيجة مفتوحة وحاول تاني بعد ما التخزين يشتغل.','Progress could not be saved safely. Existing data is unchanged; keep this result open and retry when storage works.')}</p>}
  <p ref={feedback} tabIndex={-1} role="status" aria-live="polite" aria-atomic="true" className="num focus:outline-none">{done?t(`النتيجة: ${score} / ${bank.length}`,`Result: ${score} / ${bank.length}`):t(`السؤال ${index+1} من ${bank.length}`,`Question ${index+1} of ${bank.length}`)}</p>
  {done?<div className="space-y-3"><p>{passed?t('خلصت المراجعة صح. الإكمال بيظهر في المسار لما الحفظ ينجح.','You finished the review correctly. Completion appears in the path when saving succeeds.'):t('الجولة خلصت، بس لسه مش إكمال للخطوة. راجع الأمثلة وحاول تجيب 8 من 8.','The round is finished, but the step is not complete yet. Review the examples and try for 8 of 8.')}</p><button onClick={restart} className="min-h-11 rounded-full border border-line px-4 py-3">{t('حاول تاني','Try again')}</button>{passed&&!status.earned&&<button onClick={()=>awardOnce(20,checkpointKey(id))} className="min-h-11 rounded-full border border-line px-4 py-3">{t('حاول تحفظ النتيجة تاني','Retry saving this result')}</button>}</div>:<><p id="checkpoint-prompt" className="ar-title text-xl">{t(...current.prompt)}</p><div role="group" aria-labelledby="checkpoint-prompt" className="grid gap-2 sm:grid-cols-3">{choices.map(value=><button key={value} disabled={!ready||pick!==null} dir="ltr" lang="de" onClick={()=>answer(value)} className={`de min-h-11 rounded-xl border border-line p-3 ${pick!==null&&value===current.choices[0]?'border-good bg-good/10':''}`}>{value}</button>)}</div>{pick!==null&&<><p role="status">{pick===current.choices[0]?t('صح. ','Correct. '):t('الإجابة الصحيحة: ','Correct answer: ')}{pick!==current.choices[0]&&<bdi dir="ltr" lang="de">{current.choices[0]} </bdi>}{t(...current.note)}</p><button onClick={next} className="min-h-11 rounded-full bg-accent px-5 py-3 text-accent-ink">{index+1===bank.length?t('النتيجة','Result'):t('التالي','Next')}</button></>}</>}
  <Link href="/lernpfad/" className="block min-h-11 py-3 underline">{t('افتح مسار التعلم','Open the learning path')}</Link>
 </section>;
}
