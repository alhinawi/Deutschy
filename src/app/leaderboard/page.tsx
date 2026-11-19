'use client';
import { useEffect, useState } from 'react';
import Flame from '@/components/Flame';
import { useStore, level } from '@/lib/store';
import { T, useT } from '@/lib/i18n';

const names: Record<string, string> = { quiz: 'Bild-Quiz', article: 'der·die·das', spelling: 'Buchstabieren', memory: 'Memory' };
type Board = { xp: { name: string; xp: number; best: number }[]; scores: { name: string; game: string; score: number }[] };

export default function Leaderboard() {
  const { s } = useStore();
  const t = useT();
  const [board, setBoard] = useState<Board | null>(null);
  useEffect(() => { fetch('/api/leaderboard').then((r) => r.json()).then(setBoard).catch(() => setBoard({ xp: [], scores: [] })); }, []);
  return (
    <div className="space-y-8">
      <div>
        <h1 className="ar-title text-4xl font-bold"><T ar="المتصدرين" en="Leaderboard" /></h1>
        <p className="mt-2 text-muted"><T ar="الترتيب العالمي لكل اللي عاملين حساب. سجّل حساب عشان اسمك يظهر وتقدمك يتحفظ." en="The global ranking of everyone with an account. Create an account so your name shows up and your progress is saved." /></p>
      </div>
      <section className="grid gap-4 rounded-2xl border border-line bg-card p-5 sm:grid-cols-3">
        <Stat l={t('المستوى', 'Level')} v={<span className="num text-3xl font-bold">{level(s.xp)}</span>} />
        <Stat l="XP" v={<span className="num text-3xl font-bold">{s.xp}</span>} />
        <Stat l={t('أطول سلسلة أيام', 'Best streak')} v={<span className="num inline-flex items-center gap-1 text-3xl font-bold"><Flame className="h-7 w-7 text-accent" />{s.best}</span>} />
      </section>
      <section className="rounded-2xl border border-line bg-card p-5">
        <h2 className="ar-title text-2xl font-bold"><T ar="أعلى XP" en="Top XP" /></h2>
        {!board ? <p className="mt-2 text-muted">…</p> : board.xp.length === 0 ? <p className="mt-2 text-sm text-muted"><T ar="لسه مفيش حد. كون أول واحد." en="Nobody yet. Be the first." /></p> : (
          <ol className="mt-3 space-y-1">{board.xp.map((r, i) => <li key={i} className="num flex justify-between"><span>{i + 1}. {r.name}</span><b>{r.xp} XP</b></li>)}</ol>
        )}
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(names).map(([g, label]) => {
          const rows = (board?.scores ?? []).filter((x) => x.game === g).slice(0, 5);
          const mine = s.scores.filter((x) => x.game === g).sort((a, b) => b.score - a.score).slice(0, 3);
          return (
            <section key={g} className="rounded-2xl border border-line bg-card p-5">
              <h2 className="de text-xl font-semibold">{label}</h2>
              {rows.length === 0 ? <p className="mt-2 text-sm text-muted"><T ar="لسه ماتلعبتش." en="Not played yet." /></p> : (
                <ol className="mt-3 space-y-1">{rows.map((r, i) => <li key={i} className="num flex justify-between"><span>{i + 1}. {r.name}</span><b>{r.score}</b></li>)}</ol>
              )}
              {mine.length > 0 && <p className="num mt-3 border-t border-line pt-2 text-sm text-muted"><T ar="أحسن نتايجك" en="Your best" />: {mine.map((m) => m.score).join(' · ')}</p>}
            </section>
          );
        })}
      </div>
    </div>
  );
}
function Stat({ l, v }: { l: string; v: React.ReactNode }) {
  return <div><p className="mb-1 text-xs text-muted">{l}</p>{v}</div>;
}
