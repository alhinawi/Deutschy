'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CHECK_LEVELS, type CheckLevel, type CheckQuestion, type CheckResult, buildCheck, readResults, saveResult, resultFor } from '@/lib/level-check';
import { sample } from '@/lib/data';
import { useT, useLang } from '@/lib/i18n';
import { useStore } from '@/lib/store';
import Mixed from './Mixed';

type Item = CheckQuestion & { shuffled: string[] };
export default function LevelCheck({ level }: { level: CheckLevel }) {
 const t = useT(); const { lang } = useLang(); const { award } = useStore();
 const [history, setHistory] = useState<CheckResult[]>([]);
 const [items, setItems] = useState<Item[] | null>(null);
 const [answers, setAnswers] = useState<string[]>([]); const [i,setI] = useState(0);
 const [id,setId] = useState(''); const [saveError,setSaveError] = useState(false);
 const [saved,setSaved] = useState(false); const savedRef = useRef('');
 useEffect(() => setHistory(readResults()), []);
 const finished = !!items && i >= items.length;
 const result = finished ? resultFor(id,level,items!,answers) : null;
 useEffect(() => {
   if (!finished || !items || savedRef.current === id) return;
   const r = resultFor(id,level,items,answers);
   try { saveResult(r); savedRef.current=id; setSaved(true); setHistory(readResults()); } catch { setSaveError(true); }
 },[finished,items,id,level,answers]);
 const start = () => { setItems(buildCheck(level).map((q) => ({...q,shuffled:sample(q.options,q.options.length)})));setAnswers([]);setI(0);setId(`${level}:${Date.now()}:${Math.random().toString(36).slice(2,8)}`);setSaved(false);setSaveError(false); };
 const q = items?.[i]; const pick=answers[i];
 return <div className="mx-auto max-w-3xl space-y-6">
   <h1 className="ar-title text-4xl font-bold">{t(`مراجعة مختلطة ${level}`, `${level} level check`)}</h1>
   <p className="text-muted">{t('16 سؤال من بنوك الأسئلة الموجودة: 10 قواعد و6 فهم مقروء. النص موجود مع سؤال القراءة. ده فحص مراجعة محدود، مش تحديد رسمي للمستوى ولا امتحان معتمد، ومش بيقيس المحادثة والكتابة والسمع. النتيجة بتتحفظ على الجهاز بعد ما تخلص بس.', '16 questions from existing question banks: 10 grammar and 6 reading-comprehension questions. Reading questions include their text. This is a limited revision check, not official placement or certification, and does not assess speaking, writing or listening. Results save on this device only after completion.')}</p>
   {!items && <><nav aria-label={t('مستوى المراجعة', 'Check level')} className="flex flex-wrap gap-2">{CHECK_LEVELS.map((l) => <Link key={l} href={`/level-check/${l}/`} aria-current={level===l?'page':undefined} className={`rounded-full border px-4 py-2 ${level===l?'border-accent bg-accent text-accent-ink':'border-line'}`}>{l}</Link>)}</nav><button onClick={start} className="rounded-full bg-accent px-5 py-3 font-bold text-accent-ink">{t('ابدأ جولة جديدة', 'Start a new check')}</button><section className="space-y-3"><h2 className="ar-title text-2xl font-bold">{t('نتايجك السابقة على الجهاز ده', 'Previous results on this device')}</h2>{history.filter((r)=>r.level===level).length ? <ul className="space-y-2">{history.filter((r)=>r.level===level).slice(-5).reverse().map((r)=><li key={r.id} className="rounded-xl border border-line bg-card p-3"><time dateTime={new Date(r.at).toISOString()}>{new Date(r.at).toLocaleDateString('en-GB')}</time><span dir="ltr" className="num ms-3 font-bold">{r.correct} / {r.total} ({Math.round(r.correct/r.total*100)}%)</span></li>)}</ul>:<p className="text-muted">{t('لسه مفيش نتيجة مكتملة للمستوى ده.', 'No completed check for this level yet.')}</p>}</section></>}
   {q && <section className="space-y-4 rounded-2xl border border-line bg-card p-5">
     <div className="flex flex-wrap justify-between gap-2"><p dir="ltr" className="num text-sm font-bold">{i+1} / {items!.length}</p><p className="text-sm text-muted">{q.kind==='grammar'?t('قواعد','Grammar'):t('فهم مقروء','Reading comprehension')}</p></div>
     {q.context && <article dir="ltr" lang="de" className="de whitespace-pre-line rounded-xl border border-line bg-paper p-4 text-lg leading-relaxed">{q.context}</article>}
     <h2 dir="ltr" lang="de" className="de text-xl font-bold">{q.prompt}</h2>
     <div className="grid gap-2">{q.shuffled.map((o)=><button key={o} disabled={pick!==undefined} onClick={()=>{if(pick!==undefined)return;setAnswers([...answers,o]);award(o===q.options[0]?5:0,q.key,o===q.options[0]);}} dir="ltr" lang="de" className={`de rounded-xl border p-3 text-start text-lg ${pick!==undefined&&o===q.options[0]?'border-good bg-good/10':pick===o?'border-bad bg-bad/10':'border-line bg-paper'}`}>{o}</button>)}</div>
     {pick!==undefined && <div className="space-y-3" role="status"><p>{pick===q.options[0]?t('صح.','Correct.'):t('الإجابة الصح متعلّمة فوق.','The correct answer is marked above.')}</p>{q.explanation&&<p className="ar-title text-muted"><Mixed text={q.explanation[lang==='ar'?0:1]}/></p>}<button onClick={()=>setI(i+1)} className="rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{i+1===items!.length?t('النتيجة','Result'):t('التالي','Next')}</button></div>}
   </section>}
   {result && <section className="space-y-4 rounded-2xl border border-line bg-card p-5"><h2 className="ar-title text-2xl font-bold">{t('نتيجة الجولة','Check result')}</h2><p dir="ltr" className="num text-3xl font-bold">{result.correct} / {result.total} ({Math.round(result.correct/result.total*100)}%)</p><dl className="space-y-2">{(['grammar','reading'] as const).map((kind)=><div key={kind} className="flex justify-between"><dt>{kind==='grammar'?t('قواعد','Grammar'):t('قراءة','Reading')}</dt><dd dir="ltr">{result[kind].correct} / {result[kind].total}</dd></div>)}</dl><p role="status">{saveError?t('النتيجة ظاهرة هنا بس المتصفح مقدرش يحفظها.','The result is shown, but the browser could not save it.'):saved?t('اتحفظت على الجهاز ده.','Saved on this device.') : t('بنحفظ النتيجة...','Saving result...')}</p><details><summary className="cursor-pointer font-bold">{t('راجع أسئلة الجولة','Review this check')}</summary><ol className="mt-3 space-y-4">{items!.map((x,k)=><li key={x.key} className="space-y-2 border-t border-line pt-3"><p dir="ltr" lang="de" className="de">{k+1}. {x.prompt}</p><p dir="ltr" lang="de" className="de text-muted">{t('إجابتك: ','Your answer: ')}{answers[k]}</p><p dir="ltr" lang="de" className="de font-bold">{t('الصح: ','Correct: ')}{x.options[0]}</p><Link href={x.href} className="inline-block text-accent underline">{t('افتح المصدر للتدريب','Open source practice')}</Link></li>)}</ol></details><button onClick={()=>{setItems(null);setAnswers([]);setI(0);}} className="rounded-full border border-line px-5 py-2">{t('ارجع للسجل','Back to history')}</button></section>}
   <p className="text-sm text-muted">{t('السجل بيحتفظ بآخر 50 جولة مكتملة. مسح بيانات المتصفح ممكن يمسحه. تكرار أسئلة من تدريبات سابقة ممكن يرفع النتيجة، عشان كده متعتبرهاش قياس مستقل لمستواك.', 'History keeps the last 50 completed checks. Clearing browser data can erase it. Familiar questions from earlier practice can raise your score, so do not treat this as an independent measure of proficiency.')}</p>
 </div>;
}
