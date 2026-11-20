'use client';
import { useEffect, useState } from 'react';
import Flame from '@/components/Flame';
import { useStore, level } from '@/lib/store';
import { T, useT } from '@/lib/i18n';

const names: Record<string, string> = { quiz: 'Bild-Quiz', article: 'der·die·das', spelling: 'Buchstabieren', memory: 'Memory' };
type Board = { xp: { name: string; xp: number; best: number; avatar?: string | null; placeholder?: boolean }[]; scores: { name: string; game: string; score: number }[] };

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
        {board?.xp.some(r => r.placeholder) && <p className="mt-2 text-xs text-muted"><T ar="أسماء البداية أمثلة لحد ما يحل محلها متعلمين مسجلين." en="Starter profiles are examples, replaced as registered learners join." /></p>}
        {!board ? <p className="mt-2 text-muted">…</p> : board.xp.length === 0 ? <p className="mt-2 text-sm text-muted"><T ar="لسه مفيش حد. كون أول واحد." en="Nobody yet. Be the first." /></p> : (
          <ol className="mt-3 space-y-1">{board.xp.map((r, i) => <li key={i} className="num flex min-w-0 items-center gap-3 rounded-xl px-1 py-2"><span className="w-5 shrink-0 text-center text-sm text-muted">{i + 1}</span><LeaderAvatar src={r.placeholder ? r.avatar : undefined} /><span dir="auto" className="min-w-0 flex-1 truncate">{r.name}</span><b dir="ltr" className="shrink-0 text-sm">{r.xp} XP</b></li>)}</ol>
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

function LeaderAvatar({ src }: { src?: string | null }) {
  const [failed, setFailed] = useState(false);
  return <span data-avatar={src && !failed ? 'photo' : 'default'} className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-paper text-muted">{src && !failed ? <img src={src} alt="" width={40} height={40} className="h-full w-full object-cover" onError={() => setFailed(true)} /> : <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5"><circle cx="12" cy="8" r="3.5" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /></svg>}</span>;
}
