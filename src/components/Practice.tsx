'use client';
import { useRef, useState } from 'react';
import { exercises } from '@/lib/exercises';
import { useStore } from '@/lib/store';
import { useLang, useT } from '@/lib/i18n';
import Mixed from './Mixed';
import {practiceOptionOrder} from '@/lib/practice-options';
import {answerEffect} from '@/lib/game-effects';

export default function Practice({ topic }: { topic: string }) {
  const bank = exercises[topic] ?? [];
  const [short,setShort]=useState(false);
  const { lang } = useLang();
  const t = useT();
  const { award } = useStore();
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [firstWrong, setFirstWrong] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [round,setRound]=useState(0);
  const locked=useRef(false);
  const indices=short?Array.from({length:Math.min(3,bank.length)},(_,n)=>(round*3+n)%bank.length):bank.map((_,n)=>n);
  const items=indices.map(n=>bank[n]);
  const reset=(value:boolean)=>{setShort(value);setI(0);setPick(null);setFirstWrong(null);setScore(0);setRound(r=>r+1);locked.current=false};
  if (items.length === 0) return null;
  const done = i >= items.length;
  const it = items[i];
  const opts = it ? practiceOptionOrder(`${topic}:${indices[i]}:${it[0]}`,String(round)).map((k) => ({ k, text: it[1 + k] })) : [];
  const answer = (k: number) => {
    if (pick !== null || locked.current || k === firstWrong) return;
    if (firstWrong !== null) {
      // Retry after the hint: reveal the answer, no new points or history.
      locked.current = true;
      if (k === 0) answerEffect(true);
      setPick(k);
      return;
    }
    const ok = k === 0;
    if (ok) { locked.current=true; setScore((s) => s + 1); award(5, `g:${topic}:${indices[i]}`, true); setPick(k); }
    else { award(0, `g:${topic}:${indices[i]}`, false); setFirstWrong(k); }
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
          <button onClick={() => { setI(0); setPick(null); setFirstWrong(null); setScore(0);setRound(r=>r+1);locked.current=false; }} className="rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{t('أعد المحاولة', 'Try again')}</button>
        </div>
      ) : (
        <>
          <p className="de num text-xl font-semibold" lang="de" dir="ltr">{it[0]}</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {opts.map(({ k, text }) => {
              const state = pick === null ? (k === firstWrong ? 'border-bad bg-bad/10 opacity-60' : '') : k === 0 ? 'border-good border-2 bg-good/10' : pick === k ? 'border-bad bg-bad/10' : 'opacity-60';
              return <button key={k} disabled={pick!==null||k===firstWrong} onClick={() => answer(k)} className={`de num rounded-xl border border-line bg-paper px-3 py-2.5 text-lg ${state}`} lang="de"><span className="flex items-center justify-between gap-2"><span>{text}</span>{pick !== null && k === 0 && <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-good" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label="correct"><path d="M5 12l5 5 9-10" /></svg>}{(pick === k || (pick === null && firstWrong === k)) && k !== 0 && <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-bad" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-label="wrong"><path d="M6 6l12 12M18 6L6 18" /></svg>}</span></button>;
            })}
          </div>
          {pick === null && firstWrong !== null && (
            <div role="status" className="space-y-2 rounded-xl border border-line bg-paper p-4">
              <p className="ar-title text-lg">{t('مش هي. ','Not it. ')}{lang === 'ar' ? <Mixed text={it[4]} /> : it[5]}</p>
              <p className="text-sm text-muted">{t('اقرى السبب وجرّب مرة تانية. آخر محاولة قبل ما الإجابة تظهر، والنقط اتحسبت من أول إجابة.','Read why and try once more. Last try before the answer shows; points were scored on the first answer.')}</p>
            </div>
          )}
          {pick !== null && (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p role="status" className="ar-title text-lg text-muted">{pick===0?(firstWrong!==null?t('صح بعد التلميح. النقط بتتسجل من أول إجابة. ','Correct after the hint. Points come from the first answer. '):t('صح. ','Correct. ')):t('راجع الشرح. ','Review the explanation. ')}{lang === 'ar' ? <Mixed text={it[4]} /> : it[5]}</p>
              <button onClick={() => { setI(i + 1); setPick(null);setFirstWrong(null);locked.current=false; }} className="rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{i + 1 >= items.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
