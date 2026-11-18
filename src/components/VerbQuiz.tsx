'use client';
import { useEffect, useRef, useState } from 'react';
import { verbs, type Verb } from '@/lib/verbs';
import { useStore } from '@/lib/store';
import { useT } from '@/lib/i18n';

type Q = { prompt: string; hint: string; opts: string[]; answer: string };
const P = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
const shuffle = <T,>(a: T[]) => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const uniq = (a: string[]) => [...new Set(a)];
function make(): Q[] {
  const pool = shuffle(verbs.filter((v) => v.kind !== 'reflexive' && v.kind !== 'separable'));
  return pool.slice(0, 10).map((v: Verb, n) => {
    const kind = n % 3;
    if (kind === 0) {
      const p = Math.floor(Math.random() * 6);
      const wrong = uniq(v.pres.filter((x) => x !== v.pres[p])).slice(0, 3);
      const filler = [v.pret, v.pp];
      const opts = shuffle(uniq([v.pres[p], ...wrong, ...filler]).slice(0, 4));
      return { prompt: `${P[p]} ___  (${v.inf})`, hint: 'Präsens', opts, answer: v.pres[p] };
    }
    if (kind === 1) {
      const others = shuffle(verbs.filter((x) => x.inf !== v.inf && x.kind !== 'reflexive' && x.kind !== 'separable' && x.pp !== v.pp)).slice(0, 2).map((x) => x.pp);
      const stemWrong = 'ge' + v.inf.slice(0, -2) + 't';
      return { prompt: `${v.inf} → Partizip II`, hint: 'Partizip II', opts: shuffle(uniq([v.pp, ...others, stemWrong]).slice(0, 4)), answer: v.pp };
    }
    return { prompt: `${v.inf} → Perfekt: ich ___ ${v.pp}`, hint: 'haben / sein', opts: ['habe', 'bin'], answer: v.aux === 'sein' ? 'bin' : 'habe' };
  });
}
export default function VerbQuiz() {
  const t = useT();
  const { award, addScore } = useStore();
  const [qs, setQs] = useState<Q[]>([]);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const current = useRef({ round: 0, index: 0, locked: false, finished: false });
  const restart = () => { const round=current.current.round+1;current.current={round,index:0,locked:false,finished:false};setRound(round);setQs(make());setI(0);setPick(null);setScore(0); };
  useEffect(() => {restart();return()=>{current.current.round++;}}, []);
  if (qs.length === 0) return null;
  const done = i >= qs.length;
  const q = qs[i];
  const choose = (o: string) => {
    const c=current.current;
    if (!q || c.round!==round || c.index!==i || c.locked || c.finished || pick!==null || !q.opts.includes(o)) return;
    c.locked=true;
    setPick(o);
    const ok = o === q.answer;
    if (ok) setScore((s) => s + 1);
    award(ok ? 5 : 0);
  };
  const next = () => { const c=current.current;if(c.round!==round||c.index!==i||!c.locked||c.finished||pick===null)return;c.index=i+1;setI(i+1);setPick(null);if(i+1===qs.length){c.finished=true;addScore('verb-quiz',score)}else c.locked=false; };
  return (
    <div data-verb-quiz className="space-y-4 rounded-2xl border border-line bg-card p-5">
      <div className="flex items-center justify-between"><span className="num text-sm font-bold text-accent">{q ? q.hint : ''}</span><span dir="ltr" role="status" aria-live="polite" aria-atomic="true" className="num text-sm font-bold text-muted">{Math.min(i + 1, qs.length)} / {qs.length}</span></div>
      {done ? (
        <div className="space-y-3">
          <p role="status" aria-live="polite" className="ar-title text-2xl">{t(`نتيجتك ${score} من ${qs.length}`, `Your score: ${score} of ${qs.length}`)}</p>
          <button onClick={() => {if(current.current.round===round&&current.current.finished)restart();}} className="min-h-11 rounded-full bg-accent px-5 py-2 font-bold text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">{t('جولة جديدة', 'New round')}</button>
        </div>
      ) : (
        <>
          <p dir="ltr" className="de num break-words text-2xl font-semibold" lang="de">{q.prompt}</p>
          <div className="grid grid-cols-2 gap-2">
            {q.opts.map((o) => {
              const st = !pick ? '' : o === q.answer ? 'border-good bg-good/10' : pick === o ? 'border-bad bg-bad/10' : 'opacity-60';
              return <button key={o} dir="ltr" disabled={pick!==null} onClick={() => choose(o)} className={`de num min-h-11 min-w-0 break-words rounded-xl border border-line bg-paper px-3 py-3 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card ${st}`} lang="de">{o}</button>;
            })}
          </div>
          {pick!==null && <p role="status">{pick===q.answer?t('صح.','Correct.'):<>{t('الإجابة الصحيحة: ','Correct answer: ')}<span dir="ltr" lang="de" className="de inline-block">{q.answer}</span></>}</p>}
          {pick!==null && <div className="flex justify-end"><button onClick={next} className="min-h-11 rounded-full bg-accent px-5 py-2 font-bold text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">{i + 1 >= qs.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button></div>}
        </>
      )}
    </div>
  );
  }
