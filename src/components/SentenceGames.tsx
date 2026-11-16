'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { sentences, tokens, norm, Sentence } from '@/lib/sentences';
import { sample, shuffle } from '@/lib/data';
import { useLang, useT } from '@/lib/i18n';
import { useStore } from '@/lib/store';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';
import Mixed from './Mixed';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

export default function SentenceGames({ game }: { game: 'build' | 'dictation' | 'listening' }) {
  const t = useT();
  const [level, setLevel] = useState<string>('');
  const [round, setRound] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const list = useMemo(() => (level ? sentences.filter((s) => s.level === level) : sentences), [level]);
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href="/games/" className="text-sm text-muted hover:text-ink">← {t('الألعاب', 'Games')}</Link>
        <label className="text-sm text-muted">
          {t('المستوى', 'Level')}{' '}
          <select className="rounded-lg border border-line bg-card px-2 py-1 text-ink" value={level} onChange={(e) => { setLevel(e.target.value); setRound((r) => r + 1); }}>
            <option value="">{t('كل المستويات', 'All levels')}</option>
            {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </label>
      </div>
      {mounted && <Rounds key={`${game}-${level}-${round}`} game={game} list={list} again={() => setRound((r) => r + 1)} />}
    </div>
  );
}

function Rounds({ game, list, again }: { game: 'build' | 'dictation' | 'listening'; list: Sentence[]; again: () => void }) {
  const t = useT();
  const { lang } = useLang();
  const { award, addScore } = useStore();
  const qs = useMemo(() => sample(list, Math.min(8, list.length)), [list]);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [saved, setSaved] = useState(false);
  const [res, setRes] = useState<null | boolean>(null);
  const [typed, setTyped] = useState('');
  const [chosen, setChosen] = useState<number[]>([]);
  const xp = game === 'build' ? 12 : game === 'listening' ? 10 : 15;
  const [pick, setPick] = useState<number | null>(null);
  const q = qs[i];
  const toks = useMemo(() => (q ? shuffle(tokens(q.de).map((w, k) => ({ w, k }))) : []), [q]);

  if (qs.length === 0) return <p className="text-muted">{t('مفيش جمل في المستوى ده لسه.', 'No sentences for this level yet.')}</p>;
  if (i >= qs.length) {
    if (!saved) { setSaved(true); addScore(game, score); }
    return (
      <div className="mx-auto max-w-md space-y-4 rounded-2xl border border-line bg-card p-8 text-center">
        <p className="ar-title text-3xl font-bold">{t('خلصت الجولة', 'Round finished')}</p>
        <p dir="ltr" className="num text-xl">{score} / {qs.length}</p>
        <p className="text-muted">+{score * xp} XP</p>
        <button onClick={again} className="rounded-full bg-accent px-6 py-3 font-bold text-accent-ink">{t('جولة جديدة', 'New round')}</button>
      </div>
    );
  }
  const next = () => { setI(i + 1); setRes(null); setTyped(''); setChosen([]); setPick(null); };
  const finish = (ok: boolean) => { setRes(ok); if (ok) setScore((s) => s + 1); award(ok ? xp : 0, `s:${q.topic}`, ok); };
  const gloss = lang === 'ar' ? q.ar : q.en;
  const choices = useMemo(() => {
    if (!q || game !== 'listening') return [] as { text: string; ok: boolean }[];
    const pool = list.filter((x) => x.de !== q.de);
    const others = sample(pool, Math.min(2, pool.length)).map((x) => ({ text: lang === 'ar' ? x.ar : x.en, ok: false }));
    return shuffle([{ text: lang === 'ar' ? q.ar : q.en, ok: true }, ...others]);
  }, [q, game, list, lang]);
  const built = chosen.map((c) => toks[c].w).join(' ');

  return (
    <div className="mx-auto max-w-md space-y-4">
      <div className="h-1.5 overflow-hidden rounded-full bg-line"><div className="h-full bg-accent" style={{ width: `${(i / qs.length) * 100}%` }} /></div>
      <p dir="ltr" className="num text-center text-sm text-muted">{i + 1} / {qs.length}</p>
      {game === 'build' ? (
        <>
          <p className="ar-title text-center text-xl">{lang === 'ar' ? <Mixed text={gloss} /> : gloss}</p>
          <div dir="ltr" className="de flex min-h-16 flex-wrap items-center gap-2 rounded-2xl border border-dashed border-line bg-card p-3" lang="de">
            {chosen.map((c, p) => (
              <button key={p} disabled={res !== null} onClick={() => setChosen(chosen.filter((_, j) => j !== p))} className="rounded-lg border border-accent bg-paper px-3 py-1.5 text-lg font-semibold">{toks[c].w}</button>
            ))}
            {chosen.length === 0 && <span className="text-muted">{t('اضغط على الكلمات بالترتيب', 'Tap the words in order')}</span>}
          </div>
          <div dir="ltr" className="de flex flex-wrap justify-center gap-2" lang="de">
            {toks.map((tk, c) => (
              <button key={c} disabled={chosen.includes(c) || res !== null} onClick={() => setChosen([...chosen, c])} className="rounded-lg border border-line bg-paper px-3 py-1.5 text-lg font-semibold disabled:opacity-30">{tk.w}</button>
            ))}
          </div>
          {res === null && (
            <button disabled={chosen.length !== toks.length} onClick={() => finish(norm(built) === norm(q.de))} className="w-full rounded-full bg-accent py-3 font-bold text-accent-ink disabled:opacity-40">{t('تأكيد', 'Check')}</button>
          )}
        </>
      ) : game === 'listening' ? (
        <>
          <div className="flex items-center justify-center gap-3">
            <button onClick={() => speak(q.de)} className="flex items-center gap-2 rounded-full bg-accent px-6 py-4 font-bold text-accent-ink"><Speaker />{t('اسمع الجملة', 'Play the sentence')}</button>
          </div>
          <p className="text-center text-sm text-muted">{t('اسمع واختار المعنى الصح.', 'Listen and pick the right meaning.')}</p>
          <div className="space-y-2">
            {choices.map((c, k) => {
              const state = pick === null ? '' : c.ok ? 'border-good border-2 bg-good/10' : pick === k ? 'border-bad bg-bad/10' : 'opacity-60';
              return <button key={k} disabled={res !== null} onClick={() => { setPick(k); finish(c.ok); }} className={`ar-title w-full rounded-xl border border-line bg-paper px-4 py-3 text-lg ${state}`}>{lang === 'ar' ? <Mixed text={c.text} /> : c.text}</button>;
            })}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center gap-3">
            <button onClick={() => speak(q.de)} className="flex items-center gap-2 rounded-full bg-accent px-6 py-4 font-bold text-accent-ink"><Speaker />{t('اسمع الجملة', 'Play the sentence')}</button>
          </div>
          <p className="text-center text-sm text-muted">{t('اكتب اللي سمعته بالألماني.', 'Type what you hear in German.')}</p>
          <form onSubmit={(e) => { e.preventDefault(); if (res !== null || !typed.trim()) return; finish(norm(typed) === norm(q.de)); }} className="space-y-3">
            <input dir="ltr" lang="de" value={typed} onChange={(e) => setTyped(e.target.value)} disabled={res !== null} className="de w-full rounded-xl border border-line bg-card px-4 py-3 text-xl outline-none focus:border-accent" />
            <button disabled={res !== null} className="w-full rounded-full bg-accent py-3 font-bold text-accent-ink disabled:opacity-50">{t('تأكيد', 'Check')}</button>
          </form>
        </>
      )}
      {res !== null && (
        <div className="space-y-3 rounded-2xl border border-line bg-card p-4">
          <p dir="ltr" className={`de text-xl font-semibold ${res ? 'text-good' : 'text-bad'}`} lang="de">{q.de}</p>
          <p className="ar-title text-muted">{lang === 'ar' ? <Mixed text={gloss} /> : gloss}</p>
          <div className="flex gap-3">
            <button onClick={() => speak(q.de)} className="rounded-full border border-line px-4 py-2"><Speaker /></button>
            <button onClick={next} className="flex-1 rounded-full bg-accent py-2 font-bold text-accent-ink">{i + 1 >= qs.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button>
          </div>
        </div>
      )}
    </div>
  );
}
