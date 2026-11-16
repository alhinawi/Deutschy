'use client';
import { useState } from 'react';
import { useT } from '@/lib/i18n';
import Mixed from './Mixed';
import MiniQuiz from './MiniQuiz';
import { sample } from '@/lib/data';

import { b1Grammar } from '@/lib/b1-grammar';
export default function B1View() {
  const t = useT();
  const [id, setId] = useState(0);
  const s = b1Grammar[id];
  return <div className="space-y-6">
    <h1 className="ar-title text-4xl font-bold">{t('تدريبات قواعد B1', 'B1 grammar practice')}</h1>
    <div className="flex flex-wrap gap-2">{b1Grammar.map((x, i) => <button key={x.id} aria-pressed={id === i} onClick={() => setId(i)} className={`rounded-full border px-4 py-2 ${id === i ? 'bg-accent text-accent-ink border-accent' : 'border-line'}`}>{x.name}</button>)}</div>
    <section className="space-y-3 rounded-2xl border border-line bg-card p-5"><h2 dir="ltr" className="de text-2xl font-bold">{s.name}</h2><p className="ar-title text-lg"><Mixed text={t(s.ar, s.en)} /></p><p dir="ltr" lang="de" className="de text-lg">{s.rows[0][0].replace('___', s.rows[0][1])}</p></section>
    <MiniQuiz key={s.id} game={`b1-${s.id}`} size={8} make={() => sample(s.rows, 8).map(([prompt, ...options]) => ({ prompt, options, key: `b1:${s.id}:${prompt}`, hear: prompt.replace('___', options[0]), note: [s.ar, s.en] }))} />
  </div>;
}
