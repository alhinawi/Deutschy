'use client';
import { useState } from 'react';
import { useT } from '@/lib/i18n';
import Mixed from './Mixed';
import MiniQuiz from './MiniQuiz';
import { sample } from '@/lib/data';

import { useStore } from '@/lib/store';
import { c2Grammar } from '@/lib/c2-grammar';
export default function C2View() {
  const t = useT();
  const { s: progress, ready } = useStore();
  const complete = c2Grammar.reduce((n, d) => n + d.rows.filter((r) => (progress.seen[`c2:${d.id}:${r[0]}`]?.ok ?? 0) > 0).length, 0);
  const [id, setId] = useState(0);
  const s = c2Grammar[id];
  return <div className="space-y-6">
    <h1 className="ar-title text-4xl font-bold">{t('تدريبات قواعد C2', 'C2 grammar practice')}</h1>
    <p className="text-muted">{t('دقّق في نطاق الكلام والاستثناءات وترتيب الربط، وميّز الزمن من التخمين. 5 مواضيع فيها 40 سؤال عن الصياغة والمعنى. بنراجع تراكيب معروفة بدقة أعلى، مش بندّعي إن كل تركيب حصري لـ C2 أو إن ده منهج كامل.', 'Examine scope, exceptions, clause linking and the distinction between time and inference. Five topics with 40 questions about form and meaning. Familiar constructions are revisited for precision, not claimed as exclusive to C2 or a complete syllabus.')}</p>
    <p className="num text-sm font-bold text-accent">{t('أسئلة جاوبتها صح على الجهاز ده: ', 'Questions answered correctly on this device: ')}<bdi dir="ltr">{ready ? complete : 0} / 40</bdi></p>
    <div className="flex flex-wrap gap-2">{c2Grammar.map((x, i) => <button key={x.id} aria-pressed={id === i} onClick={() => setId(i)} className={`rounded-full border px-4 py-2 ${id === i ? 'bg-accent text-accent-ink border-accent' : 'border-line'}`}>{x.name}</button>)}</div>
    <section className="space-y-3 rounded-2xl border border-line bg-card p-5"><h2 dir="ltr" className="de text-2xl font-bold">{s.name}</h2><p className="ar-title text-lg"><Mixed text={t(s.ar, s.en)} /></p><p dir="ltr" lang="de" className="de text-lg">{s.rows[0][0].replace('___', s.rows[0][1])}</p><details className="text-sm text-muted"><summary className="cursor-pointer">{t('مصادر القاعدة', 'Grammar sources')}</summary><ul className="mt-2 space-y-2" dir="ltr">{s.sources.map((url) => <li key={url}><a href={url} target="_blank" rel="noreferrer" className="break-all underline">{new URL(url).hostname}: {url.split('/').filter(Boolean).at(-1)}</a></li>)}</ul></details></section>
    <MiniQuiz key={s.id} game={`c2-${s.id}`} size={8} make={() => sample(s.rows, 8).map(([prompt, ...options]) => ({ prompt, options, key: `c2:${s.id}:${prompt}`, hear: prompt.replace('___', options[0]), note: [s.ar, s.en] }))} />
  </div>;
}
