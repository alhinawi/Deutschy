'use client';
import { useRef, useState } from 'react';
import { exercises } from '@/lib/exercises';
import { useStore } from '@/lib/store';
import { useLang, useT } from '@/lib/i18n';
import Mixed from './Mixed';
import {practiceOptionOrder} from '@/lib/practice-options';

export default function Practice({ topic }: { topic: string }) {
  const bank = exercises[topic] ?? [];
  const [short,setShort]=useState(false);
  const { lang } = useLang();
  const t = useT();
  const { award } = useStore();
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [round,setRound]=useState(0);
  const locked=useRef(false);
  const indices=short?Array.from({length:Math.min(3,bank.length)},(_,n)=>(round*3+n)%bank.length):bank.map((_,n)=>n);
  const items=indices.map(n=>bank[n]);
  const reset=(value:boolean)=>{setShort(value);setI(0);setPick(null);setScore(0);setRound(r=>r+1);locked.current=false};
  if (items.length === 0) return null;
  const done = i >= items.length;
  const it = items[i];
  const opts = it ? practiceOptionOrder(`${topic}:${indices[i]}:${it[0]}`,String(round)).map((k) => ({ k, text: it[1 + k] })) : [];
  const answer = (k: number) => {
    if (pick !== null || locked.current) return;
    locked.current=true;
    setPick(k);
    const ok = k === 0;
    if (ok) setScore((s) => s + 1);
    award(ok ? 5 : 0, `g:${topic}:${indices[i]}`, ok);
  };
  return (
    <section className="space-y-3 rounded-2xl border border-line bg-card p-5">
      <div className="flex items-center justify-between">
        <h2 className="ar-title text-2xl font-bold">{t('تمرّن', 'Practice')}</h2>
        <span dir="ltr" className="num text-sm font-bold text-muted">{Math.min(i + 1, items.length)} / {items.length}</span>
      </div>
      <fieldset><legend className="mb-2 text-sm text-muted">{t('طول الجولة من نفس بنك الأسئلة','Round length from the same question bank')}</legend><div className="flex flex-wrap gap-2">{[false,true].map(v=><button key={String(v)} aria-pressed={short===v} onClick={()=>reset(v)} className="rounded-full border border-line px-4 py-3">{v?t('جولة سريعة: لحد 3 أسئلة','Quick round: up to 3 questions'):t('كل أسئلة الموضوع','All topic questions')}</button>)}</div></fieldset><p className="text-sm text-muted">{t('تغيير طول الجولة بيبدأ محاولة جديدة من غير مسح السجل. الجولة السريعة من الأسئلة الموجودة، مش محتوى إضافي؛ كل إجابة بتتحفظ بهويتها الأصلية.','Changing length starts a new attempt without erasing history. Quick rounds use existing questions, not extra content; each answer keeps its original history identity.')}</p>
      {done ? (
        <div className="space-y-3">
          <p className="ar-title text-2xl">{t(`نتيجتك ${score} من ${items.length}`, `Your score: ${score} of ${items.length}`)}</p>
          <button onClick={() => { setI(0); setPick(null); setScore(0);setRound(r=>r+1);locked.current=false; }} className="rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{t('أعد المحاولة', 'Try again')}</button>
        </div>
      ) : (
        <>
          <p className="de num text-xl font-semibold" lang="de" dir="ltr">{it[0]}</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {opts.map(({ k, text }) => {
              const state = pick === null ? '' : k === 0 ? 'border-good border-2 bg-good/10' : pick === k ? 'border-bad bg-bad/10' : 'opacity-60';
              return <button key={k} disabled={pick!==null} onClick={() => answer(k)} className={`de num rounded-xl border border-line bg-paper px-3 py-2.5 text-lg ${state}`} lang="de"><span className="flex items-center justify-between gap-2"><span>{text}</span>{pick !== null && k === 0 && <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-good" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label="correct"><path d="M5 12l5 5 9-10" /></svg>}{pick === k && k !== 0 && <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-bad" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-label="wrong"><path d="M6 6l12 12M18 6L6 18" /></svg>}</span></button>;
            })}
          </div>
          {pick !== null && (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p role="status" className="ar-title text-lg text-muted">{pick===0?t('صح. ','Correct. '):t('راجع الشرح. ','Review the explanation. ')}{lang === 'ar' ? <Mixed text={it[4]} /> : it[5]}</p>
              <button onClick={() => { setI(i + 1); setPick(null);locked.current=false; }} className="rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{i + 1 >= items.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
