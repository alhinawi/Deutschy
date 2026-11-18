'use client';
import PoliteTransform from './PoliteTransform';
import { useState } from 'react';
import { useT } from '@/lib/i18n';
import Mixed from './Mixed';
import MiniQuiz from './MiniQuiz';
import { sample } from '@/lib/data';

import { useStore } from '@/lib/store';
import { b1Grammar,b1GrammarSources } from '@/lib/b1-grammar';
export default function B1View() {
  const t = useT();
  const { s: progress, ready } = useStore();
  const complete = b1Grammar.reduce((n, d) => n + d.rows.filter((r) => (progress.seen[`b1:${d.id}:${r[0]}`]?.ok ?? 0) > 0).length, 0);
  const [id, setId] = useState(0);
  const s = b1Grammar[id];
  return <div className="space-y-6">
    <h1 className="ar-title text-4xl font-bold">{t('تدريبات قواعد B1', 'B1 grammar practice')}</h1>
    <p className="text-muted">{t('اتدرّب على الطلب بأدب والافتراض، ووصف العمليات، وربط الجمل والتعبير عن التعارض والهدف والشرط. اختار موضوع، راجع مثاله، وبعدين جاوب على 8 أسئلة. الغلط فرصة تراجع السبب وتجرب تاني.', 'Practice polite requests and hypothetical situations, describing processes, relative clauses, contrast, purpose and conditions. Choose a topic, review its example and answer eight questions.')}</p>
    <p className="num text-sm font-bold text-accent">{t('أسئلة جاوبتها صح في السجل ده: ', 'Questions answered correctly in this record: ')}<bdi dir="ltr">{ready ? complete : 0} / {b1Grammar.reduce((n,d)=>n+d.rows.length,0)}</bdi></p>
    <div className="flex flex-wrap gap-2">{b1Grammar.map((x, i) => <button key={x.id} aria-pressed={id === i} onClick={() => setId(i)} className={`rounded-full border px-4 py-2 ${id === i ? 'bg-accent text-accent-ink border-accent' : 'border-line'}`}>{x.name}</button>)}</div>
    <section className="space-y-3 rounded-2xl border border-line bg-card p-5"><h2 dir="ltr" className="de text-2xl font-bold">{s.name}</h2><p className="ar-title text-lg"><Mixed text={t(s.ar, s.en)} /></p><p dir="ltr" lang="de" className="de text-lg">{s.rows[0][0].replace('___', s.rows[0][1])}</p></section>
    {b1GrammarSources[s.id]&&<a href={b1GrammarSources[s.id]} className="inline-block underline" target="_blank" rel="noreferrer">{t('مرجع ترتيب الجملة','Word-order reference')}</a>}
    {s.id === "konjunktiv" && <PoliteTransform/>}
    <MiniQuiz key={s.id} game={`b1-${s.id}`} size={8} make={() => sample(s.rows, 8).map(([prompt, ...options]) => ({ prompt, options, key: `b1:${s.id}:${prompt}`, hear: prompt.replace('___', options[0]), note: [s.ar, s.en] }))} />
  </div>;
}
