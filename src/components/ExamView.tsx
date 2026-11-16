'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { exercises } from '@/lib/exercises';
import { grammar } from '@/lib/grammar';
import { sentences } from '@/lib/sentences';
import { readings } from '@/lib/reading';
import { shuffle, sample } from '@/lib/data';
import { useStore, load } from '@/lib/store';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';
import Mixed from './Mixed';

type Lv = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
const LEVELS: Lv[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const MINUTES: Record<Lv, number> = { A1: 20, A2: 20, B1: 25, B2: 25, C1: 30, C2: 30 };
type Item = { sec: 'reading' | 'grammar' | 'listening'; prompt?: string; de?: string; ctx?: string; opts: { de?: string; ar?: string; en?: string; text?: string }[]; ans: number; key: string; ar?: string; en?: string };

function make(level: Lv): Item[] {
  const out: Item[] = [];
  const texts = sample(readings.filter((r) => r.level === level), 2);
  for (const r of texts) {
    for (const [qi, q] of r.q.entries()) {
      if (out.filter((x) => x.sec === 'reading').length >= 6) break;
      const order = shuffle([0, 1, 2]);
      out.push({ sec: 'reading', ctx: r.de.join(' '), prompt: q[0], opts: order.map((k) => ({ text: q[1 + k] })), ans: order.indexOf(0), key: `r:${r.id}:${qi}` });
    }
  }
  const ex: { topic: string; i: number }[] = [];
  for (const g of grammar.filter((x) => x.level === level)) (exercises[g.id] ?? []).forEach((_, i) => ex.push({ topic: g.id, i }));
  for (const { topic, i } of sample(ex, 10)) {
    const it = exercises[topic][i];
    const order = shuffle([0, 1, 2]);
    out.push({ sec: 'grammar', de: it[0], opts: order.map((k) => ({ text: it[1 + k] })), ans: order.indexOf(0), key: `g:${topic}:${i}`, ar: it[4], en: it[5] });
  }
  for (const s of sample(sentences.filter((x) => x.level === level), 5)) {
    const others = sample(sentences.filter((x) => x.level === level && x.de !== s.de), 2);
    const all = shuffle([s, ...others]);
    out.push({ sec: 'listening', de: s.de, opts: all.map((x) => ({ ar: x.ar, en: x.en })), ans: all.indexOf(s), key: `s:${s.topic}` });
  }
  return out;
}

export default function ExamView() {
  const t = useT();
  const { lang } = useLang();
  const { s, ready, award, patch } = useStore();
  const [level, setLevel] = useState<Lv | null>(null);
  const [attempt, setAttempt] = useState(0);
  const items = useMemo(() => (level ? make(level) : []), [level, attempt]);
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [left, setLeft] = useState(0);
  const [done, setDone] = useState(false);
  const fin = useRef(false);

  const finish = () => {
    if (fin.current) return;
    fin.current = true;
    setDone(true);
    const right = items.filter((it, i) => picks[i] === it.ans).length;
    const pct = Math.round((right / Math.max(1, items.length)) * 100);
    const exams = load().exams;
    patch({ exams: { ...exams, [level as string]: Math.max(exams[level as string] ?? 0, pct) } });
    award(right * 5);
  };
  const finishRef = useRef(finish);
  finishRef.current = finish;
  useEffect(() => {
    if (!level || done) return;
    const id = setInterval(() => setLeft((x) => { if (x <= 1) { clearInterval(id); setTimeout(() => finishRef.current(), 0); return 0; } return x - 1; }), 1000);
    return () => clearInterval(id);
  }, [level, done, attempt]);

  if (!ready) return <p className="text-muted">…</p>;
  const title = <h1 className="ar-title text-4xl font-bold">{t('امتحان المستوى', 'Level exam')}</h1>;
  if (!level) {
    return (
      <div className="space-y-6">{title}
        <p className="text-muted">{t('امتحان قصير على نمط جوته وtelc: قراءة وقواعد وسمع، بوقت محدد ودرجة في الآخر. النجاح من 60%.', 'A short exam in the style of Goethe and telc: reading, grammar and listening, timed and scored. You pass at 60%.')}</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {LEVELS.map((l) => (
            <button key={l} onClick={() => { fin.current = false; setPicks({}); setDone(false); setLeft(MINUTES[l] * 60); setLevel(l); setAttempt((a) => a + 1); }} className="rounded-2xl border border-line bg-card p-4 text-start hover:border-accent">
              <span className="de num block text-3xl font-bold text-accent">{l}</span>
              <span className="num block text-sm text-muted">{MINUTES[l]} {t('دقيقة', 'min')}</span>
              {s.exams[l] !== undefined && <span className="num block text-sm">{t('أفضل نتيجة', 'Best')} {s.exams[l]}%</span>}
            </button>
          ))}
        </div>
      </div>
    );
  }
  const secs = [['reading', t('القراءة', 'Reading')], ['grammar', t('القواعد', 'Grammar')], ['listening', t('السمع', 'Listening')]] as const;
  if (done) {
    const right = items.filter((it, i) => picks[i] === it.ans).length;
    const pct = Math.round((right / Math.max(1, items.length)) * 100);
    return (
      <div className="space-y-6">{title}
        <div className="space-y-4 rounded-2xl border border-line bg-card p-6">
          <p className="num text-sm font-bold text-accent">{level}</p>
          <p className="ar-title text-3xl font-bold">{pct >= 60 ? t('نجحت', 'Passed') : t('لسه محتاج مراجعة', 'Not yet')}</p>
          <p dir="ltr" className="num text-3xl font-bold">{pct}% <span className="text-base font-normal text-muted">({right} / {items.length})</span></p>
          <div className="space-y-2">
            {secs.map(([k, name]) => {
              const idx = items.map((it, i) => ({ it, i })).filter((x) => x.it.sec === k);
              if (!idx.length) return null;
              const ok = idx.filter((x) => picks[x.i] === x.it.ans).length;
              return <p key={k} className="flex justify-between border-b border-line pb-1"><span>{name}</span><span dir="ltr" className="num">{ok} / {idx.length}</span></p>;
            })}
          </div>
          <div className="flex gap-3">
            <button onClick={() => { fin.current = false; setPicks({}); setDone(false); setLeft(MINUTES[level] * 60); setAttempt((a) => a + 1); }} className="flex-1 rounded-full bg-accent py-3 font-bold text-accent-ink">{t('امتحان جديد', 'New exam')}</button>
            <button onClick={() => setLevel(null)} className="flex-1 rounded-full border border-line py-3 font-bold">{t('المستويات', 'Levels')}</button>
          </div>
        </div>
        <div className="space-y-3">
          {items.map((it, i) => picks[i] === it.ans ? null : (
            <section key={i} className="space-y-1 rounded-2xl border border-line bg-card p-4">
              <p dir="ltr" lang="de" className="de num font-semibold">{it.prompt ?? it.de}</p>
              <p dir={it.sec === 'listening' ? undefined : 'ltr'} className="text-good">{it.sec === 'listening' ? (lang === 'ar' ? it.opts[it.ans].ar : it.opts[it.ans].en) : it.opts[it.ans].text}</p>
              {it.ar && <p className="ar-title text-sm text-muted">{lang === 'ar' ? <Mixed text={it.ar} /> : it.en}</p>}
            </section>
          ))}
        </div>
      </div>
    );
  }
  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');
  let lastSec = '';
  let lastCtx = '';
  const answered = Object.keys(picks).length;
  return (
    <div className="space-y-5">
      <div className="sticky top-0 z-10 flex items-center justify-between rounded-2xl border border-line bg-card/95 px-4 py-2 backdrop-blur">
        <span className="de num text-xl font-bold text-accent">{level}</span>
        <span dir="ltr" className="num text-xl font-bold">{mm}:{ss}</span>
        <span dir="ltr" className="num text-sm text-muted">{answered} / {items.length}</span>
      </div>
      {items.map((it, i) => {
        const head = it.sec !== lastSec ? secs.find((x) => x[0] === it.sec)![1] : null;
        lastSec = it.sec;
        const ctx = it.ctx && it.ctx !== lastCtx ? it.ctx : null;
        if (it.ctx) lastCtx = it.ctx;
        return (
          <div key={i} className="space-y-3">
            {head && <h2 className="ar-title border-b border-line pb-1 text-2xl font-bold">{head}</h2>}
            {ctx && <p dir="ltr" lang="de" className="de rounded-2xl border border-line bg-card p-4 text-lg leading-relaxed">{ctx}</p>}
            <section className="space-y-3 rounded-2xl border border-line bg-card p-4">
              {it.sec === 'listening' ? (
                <button onClick={() => speak(it.de!)} className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-bold text-accent-ink"><Speaker />{t('اسمع الجملة', 'Play the sentence')}</button>
              ) : (
                <p dir="ltr" lang="de" className="de num text-lg font-semibold">{it.prompt ?? it.de}</p>
              )}
              <div className="space-y-2">
                {it.opts.map((o, k) => (
                  <button key={k} onClick={() => setPicks((p) => ({ ...p, [i]: k }))} className={`w-full rounded-xl border px-4 py-2.5 text-lg ${picks[i] === k ? 'border-accent border-2 bg-accent/10' : 'border-line bg-paper'} ${it.sec === 'listening' ? 'ar-title' : 'de num'}`} lang={it.sec === 'listening' ? undefined : 'de'}>
                    {it.sec === 'listening' ? (lang === 'ar' ? <Mixed text={o.ar!} /> : o.en) : o.text}
                  </button>
                ))}
              </div>
            </section>
          </div>
        );
      })}
      <button onClick={finish} className="w-full rounded-full bg-accent py-3 font-bold text-accent-ink">{t('سلّم الامتحان', 'Submit exam')}</button>
    </div>
  );
}
