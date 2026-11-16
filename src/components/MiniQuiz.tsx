'use client';
import { useMemo, useState } from 'react';
import { useStore } from '@/lib/store';
import { useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';
import Mixed from './Mixed';
import { useLang } from '@/lib/i18n';

// options[0] is the correct answer. hear: German text read aloud on request. note: short explanation shown after answering.
export type QItem = { prompt: string; hint?: string; options: string[]; hear?: string; note?: [string, string]; key: string };

const shuffle = <T,>(a: T[]) => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };

export default function MiniQuiz({ make, game, size = 10 }: { make: () => QItem[]; game: string; size?: number }) {
  const t = useT();
  const { lang } = useLang();
  const { award, addScore } = useStore();
  const [run, setRun] = useState(0);
  const items = useMemo(() => make().slice(0, size), [run]); // eslint-disable-line react-hooks/exhaustive-deps
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const q = items[i];
  const opts = useMemo(() => (q ? shuffle(q.options) : []), [q]);
  if (!q) {
    return (
      <div className="space-y-3 rounded-2xl border border-line bg-card p-5">
        <p className="ar-title text-2xl">{t(`نتيجتك ${score} من ${items.length}`, `Your score: ${score} of ${items.length}`)}</p>
        <button onClick={() => { addScore(game, score); setRun(run + 1); setI(0); setScore(0); setPick(null); }} className="rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{t('جولة جديدة', 'New round')}</button>
      </div>
    );
  }
  const answer = (o: string) => { if (pick !== null) return; setPick(o); const ok = o === q.options[0]; if (ok) setScore((s) => s + 1); award(ok ? 5 : 0, q.key, ok); };
  return (
    <div className="space-y-3 rounded-2xl border border-line bg-card p-5">
      <div className="flex items-center justify-between"><span dir="ltr" className="num text-sm font-bold text-muted">{i + 1} / {items.length}</span>
        {q.hear && <button onClick={() => speak(q.hear!)} aria-label="Speak" className="rounded-full border border-line px-3 py-1"><Speaker /></button>}</div>
      <p dir="ltr" lang="de" className="de text-xl font-semibold">{q.prompt}</p>
      {q.hint && <p className="ar-title text-sm text-muted">{q.hint}</p>}
      <div className="grid gap-2">
        {opts.map((o) => {
          const st = pick === null ? '' : o === q.options[0] ? 'border-good border-2 bg-good/10' : pick === o ? 'border-bad bg-bad/10' : 'opacity-60';
          return <button dir="ltr" lang="de" key={o} onClick={() => answer(o)} className={`de rounded-xl border border-line bg-paper px-3 py-2.5 text-start text-lg ${st}`}>{o}</button>;
        })}
      </div>
      {pick !== null && q.note && <p className="ar-title text-sm text-muted">{lang === 'ar' ? <Mixed text={q.note[0]} /> : q.note[1]}</p>}
      {pick !== null && <button onClick={() => { setI(i + 1); setPick(null); }} className="w-full rounded-full bg-accent py-2 font-bold text-accent-ink">{i + 1 >= items.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button>}
    </div>
  );
}
export { shuffle };
