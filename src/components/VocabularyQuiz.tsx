'use client';
import { useState } from 'react';
import { type Word, words, glossOf, sample } from '@/lib/data';
import { useLang, useT } from '@/lib/i18n';
import MiniQuiz, { type QItem } from './MiniQuiz';

export default function VocabularyQuiz({ pool, id }: { pool: Word[]; id: string }) {
  const { lang } = useLang();
  const t = useT();
  const [open, setOpen] = useState(false);
  const size = Math.min(5, pool.length);
  if (!size) return null;
  return <section className="space-y-3">
    <button onClick={() => setOpen(!open)} aria-expanded={open} className="rounded-full border border-accent px-5 py-2 font-bold text-accent">{open ? t('اقفل الاختبار', 'Close quiz') : t(`اختبار سريع: ${size} أسئلة`, `Mini-quiz: ${size} questions`)}</button>
    {open && <MiniQuiz key={`${id}:${lang}`} game={`vocab-${id}`} size={size} make={() => sample(pool, size).map((w): QItem => {
      const label = (v: Word) => `${v.art} ${v.de}`;
      const seen = new Set([label(w)]);
      const distractors: string[] = [];
      for (const other of sample(words.filter((v) => v.id !== w.id && glossOf(v, lang) !== glossOf(w, lang)), words.length)) {
        if (!seen.has(label(other))) { seen.add(label(other)); distractors.push(label(other)); }
        if (distractors.length === 3) break;
      }
      return { prompt: 'Welches Wort passt?', hint: glossOf(w, lang), options: [label(w), ...distractors], hear: undefined, key: w.id, note: [`${label(w)}: ${w.ar}`, `${label(w)}: ${glossOf(w, 'en')}`] };
    })} />}
  </section>;
}
