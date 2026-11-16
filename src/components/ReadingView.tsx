'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { ReadingText } from '@/lib/reading';
import { useT } from '@/lib/i18n';
import { useStore } from '@/lib/store';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';

const order = (n: number, seed: number) => [[0, 1, 2], [1, 2, 0], [2, 0, 1], [0, 2, 1], [1, 0, 2], [2, 1, 0]][(seed * 5 + n * 3) % 6];

export default function ReadingView({ r }: { r: ReadingText }) {
  const t = useT();
  const { award } = useStore();
  const [show, setShow] = useState(false);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = i >= r.q.length;
  const q = r.q[i];
  const answer = (k: number) => {
    if (pick !== null) return;
    setPick(k);
    const ok = k === 0;
    if (ok) setScore((s) => s + 1);
    award(ok ? 8 : 0, `r:${r.id}:${i}`, ok);
  };
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Link href="/reading/" className="text-sm text-muted hover:text-ink">← {t('القراءة', 'Reading')}</Link>
      <div>
        <span className="num rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent">{r.level}</span>
        <h1 className="de mt-2 text-4xl font-semibold" lang="de">{r.title[0]}</h1>
        <p className="ar-title text-xl text-muted">{r.title[1]}</p>
      </div>
      <article dir="ltr" lang="de" className="de space-y-4 rounded-2xl border border-line bg-card p-5 text-xl leading-relaxed">
        {r.de.map((p, k) => <p key={k}>{p}</p>)}
        <button onClick={() => speak(r.de.join(' '))} className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-base"><Speaker />{t('اسمع النص', 'Listen')}</button>
      </article>
      <button onClick={() => setShow(!show)} className="rounded-full border border-line px-5 py-2 font-bold">{show ? t('اخفي الترجمة', 'Hide translation') : t('اعرض الترجمة', 'Show translation')}</button>
      {show && <div className="ar-title space-y-3 rounded-2xl border border-line bg-paper p-5 text-lg">{r.ar.map((p, k) => <p key={k}>{p}</p>)}</div>}
      <section className="space-y-3 rounded-2xl border border-line bg-card p-5">
        <div className="flex items-center justify-between">
          <h2 className="ar-title text-2xl font-bold">{t('أسئلة', 'Questions')}</h2>
          <span dir="ltr" className="num text-sm font-bold text-muted">{Math.min(i + 1, r.q.length)} / {r.q.length}</span>
        </div>
        {done ? (
          <div className="space-y-3">
            <p className="ar-title text-2xl">{t(`نتيجتك ${score} من ${r.q.length}`, `Your score: ${score} of ${r.q.length}`)}</p>
            <button onClick={() => { setI(0); setPick(null); setScore(0); }} className="rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{t('أعد المحاولة', 'Try again')}</button>
          </div>
        ) : (
          <>
            <p dir="ltr" className="de text-xl font-semibold" lang="de">{q[0]}</p>
            <div className="grid gap-2">
              {order(i, r.id.length).map((k) => {
                const state = pick === null ? '' : k === 0 ? 'border-good border-2 bg-good/10' : pick === k ? 'border-bad bg-bad/10' : 'opacity-60';
                return (
                  <button dir="ltr" key={k} onClick={() => answer(k)} lang="de" className={`de flex items-center justify-between gap-2 rounded-xl border border-line bg-paper px-3 py-2.5 text-start text-lg ${state}`}>
                    <span>{q[1 + k]}</span>
                    {pick !== null && k === 0 && <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-good" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label="correct"><path d="M5 12l5 5 9-10" /></svg>}
                    {pick === k && k !== 0 && <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-bad" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-label="wrong"><path d="M6 6l12 12M18 6L6 18" /></svg>}
                  </button>
                );
              })}
            </div>
            {pick !== null && (
              <button onClick={() => { setI(i + 1); setPick(null); }} className="rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{i + 1 >= r.q.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button>
            )}
          </>
        )}
      </section>
    </div>
  );
}
