'use client';
import { useMemo, useState } from 'react';
import { exercises } from '@/lib/exercises';
import { grammar } from '@/lib/grammar';
import { sentences } from '@/lib/sentences';
import { words, withArticle, glossOf, img, type Word } from '@/lib/data';
import { useStore, today, load } from '@/lib/store';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';
import Flame from './Flame';
import Mixed from './Mixed';

type Q =
  | { kind: 'grammar'; key: string; text: string; opts: string[]; ans: number; ar: string; en: string }
  | { kind: 'vocab'; key: string; w: Word; opts: string[]; ans: number }
  | { kind: 'listen'; key: string; de: string; opts: { ar: string; en: string }[]; ans: number; ar: string; en: string };

const rng = (seed: number) => () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const hash = (s: string) => { let h = 7; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
const shuf = <T,>(a: T[], r: () => number) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

export function build(day: string): Q[] {
  const r = rng(hash(day));
  const out: Q[] = [];
  const ex: { topic: string; i: number }[] = [];
  for (const g of grammar) (exercises[g.id] ?? []).forEach((_, i) => ex.push({ topic: g.id, i }));
  for (const { topic, i } of shuf(ex, r).slice(0, 5)) {
    const it = exercises[topic][i];
    const order = shuf([0, 1, 2], r);
    out.push({ kind: 'grammar', key: `g:${topic}:${i}`, text: it[0], opts: order.map((k) => it[1 + k]), ans: order.indexOf(0), ar: it[4], en: it[5] });
  }
  const pool = words.filter((w) => w.photo);
  for (const w of shuf(pool, r).slice(0, 4)) {
    const others = shuf(pool.filter((x) => x.id !== w.id), r).slice(0, 2);
    const all = shuf([w, ...others], r);
    out.push({ kind: 'vocab', key: `w:${w.id}`, w, opts: all.map(withArticle), ans: all.indexOf(w) });
  }
  const ss = sentences.filter((s) => s.level === 'A1' || s.level === 'A2' || s.level === 'B1');
  for (const s of shuf(ss, r).slice(0, 3)) {
    const others = shuf(ss.filter((x) => x.de !== s.de), r).slice(0, 2);
    const all = shuf([s, ...others], r);
    out.push({ kind: 'listen', key: `s:${s.topic}`, de: s.de, opts: all.map((x) => ({ ar: x.ar, en: x.en })), ans: all.indexOf(s), ar: s.ar, en: s.en });
  }
  return out;
}

export default function DailyView() {
  const t = useT();
  const { lang } = useLang();
  const { s, ready, award, patch } = useStore();
  const day = today();
  const qs = useMemo(() => build(day), [day]);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  if (!ready) return <p className="text-muted">…</p>;
  const prev = s.challenge[day];
  const done = i >= qs.length;
  const title = <h1 className="ar-title text-4xl font-bold">{t('تحدي اليوم', 'Daily challenge')}</h1>;
  const streak = (
    <div className="flex items-center gap-2 rounded-2xl border border-line bg-card p-4">
      <Flame className="h-6 w-6" />
      <span className="num text-2xl font-bold">{s.streak}</span>
      <span className="text-muted">{t('يوم متتالي', 'day streak')}</span>
      <span className="num ms-auto text-sm text-muted">{t('أفضل', 'Best')} {s.best}</span>
    </div>
  );
  if (prev !== undefined && !started) {
    return (
      <div className="space-y-6">{title}{streak}
        <div className="space-y-3 rounded-2xl border border-line bg-card p-6">
          <p className="ar-title text-2xl font-bold">{t('خلصت تحدي النهارده', 'Today is done')}</p>
          <p dir="ltr" className="num text-xl">{prev} / {qs.length}</p>
          <p className="text-muted">{t('تحدي جديد بكرة.', 'A new challenge opens tomorrow.')}</p>
        </div>
      </div>
    );
  }
  if (!started) {
    return (
      <div className="space-y-6">{title}{streak}
        <div className="space-y-4 rounded-2xl border border-line bg-card p-6">
          <p className="text-muted">{t('12 سؤال كل يوم: 5 قواعد و4 مفردات بالصور و3 جمل للسمع. كمّل كل يوم عشان السلسلة متتقطعش.', '12 questions a day: 5 grammar, 4 vocabulary with photos and 3 listening sentences. Finish one every day to keep your streak.')}</p>
          <button onClick={() => setStarted(true)} className="w-full rounded-full bg-accent py-3 font-bold text-accent-ink">{t('ابدأ', 'Start')}</button>
        </div>
      </div>
    );
  }
  if (done) {
    return (
      <div className="space-y-6">{title}{streak}
        <div className="space-y-3 rounded-2xl border border-line bg-card p-6 text-center">
          <p className="ar-title text-3xl font-bold">{t('خلصت تحدي النهارده', 'Today is done')}</p>
          <p dir="ltr" className="num text-xl">{score} / {qs.length}</p>
          <p className="text-muted">+{score * 8 + 20} XP</p>
        </div>
      </div>
    );
  }
  const q = qs[i];
  const choose = (k: number) => {
    if (pick !== null) return;
    setPick(k);
    const ok = k === q.ans;
    if (ok) setScore((x) => x + 1);
    award(ok ? 8 : 0, q.key, ok);
    if (i === qs.length - 1) { award(20); patch({ challenge: { ...load().challenge, [day]: score + (ok ? 1 : 0) } }); }
  };
  const state = (k: number) => (pick === null ? '' : k === q.ans ? 'border-good border-2 bg-good/10' : pick === k ? 'border-bad bg-bad/10' : 'opacity-60');
  const labels = q.kind === 'listen' ? q.opts.map((o) => (lang === 'ar' ? o.ar : o.en)) : q.opts;
  return (
    <div className="mx-auto max-w-md space-y-4">
      {title}
      <div className="h-1.5 overflow-hidden rounded-full bg-line"><div className="h-full bg-accent" style={{ width: `${(i / qs.length) * 100}%` }} /></div>
      <p dir="ltr" className="num text-center text-sm text-muted">{i + 1} / {qs.length}</p>
      {q.kind === 'grammar' && <p dir="ltr" lang="de" className="de num text-xl font-semibold">{q.text}</p>}
      {q.kind === 'vocab' && (
        <div className="space-y-2">
          <div className="overflow-hidden rounded-2xl border border-line"><img src={img(q.w)} alt="" className="aspect-[4/3] w-full object-cover" /></div>
          <p className="text-center text-muted">{t('إيه الكلمة الصح؟', 'Which word is this?')}</p>
        </div>
      )}
      {q.kind === 'listen' && (
        <div className="space-y-2 text-center">
          <button onClick={() => speak(q.de)} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-4 font-bold text-accent-ink"><Speaker />{t('اسمع الجملة', 'Play the sentence')}</button>
          <p className="text-sm text-muted">{t('اسمع واختار المعنى الصح.', 'Listen and pick the right meaning.')}</p>
        </div>
      )}
      <div className="space-y-2">
        {labels.map((l, k) => (
          <button key={k} disabled={pick !== null} onClick={() => choose(k)} className={`${q.kind === 'listen' ? 'ar-title' : 'de num'} w-full rounded-xl border border-line bg-paper px-4 py-3 text-lg ${state(k)}`} lang={q.kind === 'listen' ? undefined : 'de'}>
            {q.kind === 'listen' && lang === 'ar' ? <Mixed text={l} /> : l}
          </button>
        ))}
      </div>
      {pick !== null && (
        <div className="space-y-3 rounded-2xl border border-line bg-card p-4">
          {q.kind === 'grammar' && <p className="ar-title text-muted">{lang === 'ar' ? <Mixed text={q.ar} /> : q.en}</p>}
          {q.kind === 'vocab' && <p className="ar-title text-muted"><span dir="ltr" className="de font-semibold text-ink">{withArticle(q.w)}</span> · {glossOf(q.w, lang)}</p>}
          {q.kind === 'listen' && <p dir="ltr" lang="de" className="de text-xl font-semibold">{q.de}</p>}
          <button onClick={() => { setI(i + 1); setPick(null); }} className="w-full rounded-full bg-accent py-2 font-bold text-accent-ink">{i + 1 >= qs.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button>
        </div>
      )}
    </div>
  );
}
