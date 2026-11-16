'use client';
import { useState } from 'react';
import { useT } from '@/lib/i18n';
import Mixed from './Mixed';
import MiniQuiz from './MiniQuiz';
import { sample } from '@/lib/data';

import { useStore } from '@/lib/store';
import { b2Grammar } from '@/lib/b2-grammar';
export default function B2View() {
  const t = useT();
  const { s: progress, ready } = useStore();
  const complete = b2Grammar.reduce((n, d) => n + d.rows.filter((r) => (progress.seen[`b2:${d.id}:${r[0]}`]?.ok ?? 0) > 0).length, 0);
  const [id, setId] = useState(0);
  const s = b2Grammar[id];
  return <div className="space-y-6">
    <h1 className="ar-title text-4xl font-bold">{t('تدريبات قواعد B2', 'B2 grammar practice')}</h1>
    <p className="text-muted">{t('اتدرّب على نقل الكلام بصيغة تقرير، ووصف الأسماء بالمشتقات، وتحويل الجمل لأسماء، والمبني للمجهول مع المودال، والروابط المزدوجة. اختار موضوع وحل 8 أسئلة.', 'Practice reported speech, participial attributes, nominal style, passive constructions with modals and paired connectors. Choose a topic and answer eight questions.')}</p>
    <p className="num text-sm font-bold text-accent">{t('أسئلة جاوبتها صح على الجهاز ده: ', 'Questions answered correctly on this device: ')}<bdi dir="ltr">{ready ? complete : 0} / 40</bdi></p>
    <div className="flex flex-wrap gap-2">{b2Grammar.map((x, i) => <button key={x.id} aria-pressed={id === i} onClick={() => setId(i)} className={`rounded-full border px-4 py-2 ${id === i ? 'bg-accent text-accent-ink border-accent' : 'border-line'}`}>{x.name}</button>)}</div>
    <section className="space-y-3 rounded-2xl border border-line bg-card p-5"><h2 dir="ltr" className="de text-2xl font-bold">{s.name}</h2><p className="ar-title text-lg"><Mixed text={t(s.ar, s.en)} /></p><p dir="ltr" lang="de" className="de text-lg">{s.rows[0][0].replace('___', s.rows[0][1])}</p></section>
    <MiniQuiz key={s.id} game={`b2-${s.id}`} size={8} make={() => sample(s.rows, 8).map(([prompt, ...options]) => ({ prompt, options, key: `b2:${s.id}:${prompt}`, hear: prompt.replace('___', options[0]), note: [s.ar, s.en] }))} />
  </div>;
}
