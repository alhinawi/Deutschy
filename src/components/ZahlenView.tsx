'use client';
import TypedZahlen from './TypedZahlen';
import { useState } from 'react';
import { numWord, ordWord, months, monthsAr, days, daysAr, dim, dateWord, dateDigits, pad, timeFormal, timeInformal } from '@/lib/zahlen';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';
import MiniQuiz, { type QItem } from './MiniQuiz';

const ri = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));
const RANGES: [number, number][] = [[1, 20], [21, 99], [100, 999], [1000, 9999]];

function numItem(hear: boolean): QItem {
  const [a, b] = RANGES[ri(0, 3)];
  const n = ri(a, b);
  const s = String(n);
  const bad = new Set<string>();
  const sw = s.length > 1 ? s.slice(0, -2) + s.slice(-1) + s.slice(-2, -1) : '';
  if (sw && sw !== s && !sw.startsWith('0')) bad.add(sw);
  [n + 10, n - 10, n + 1, n - 1, n + 100, n * 10].forEach((x) => { if (x > 0 && x !== n && bad.size < 6) bad.add(String(x)); });
  const opts = [s, ...[...bad].slice(0, 3)];
  const w = numWord(n);
  return { key: `z:${n}`, prompt: hear ? 'Hör zu. Welche Zahl ist das?' : w, hint: hear ? undefined : undefined, options: opts, hear: hear ? w : undefined };
}

function timeItem(hear: boolean): QItem {
  const h = ri(0, 23), m = ri(0, 11) * 5;
  const right = `${pad(h)}:${pad(m)}`;
  if (hear) {
    const w = timeFormal(h, m);
    const bad = [`${pad((h + 1) % 24)}:${pad(m)}`, `${pad(h)}:${pad((m + 30) % 60)}`, `${pad((h + 23) % 24)}:${pad(m)}`];
    return { key: `t:${right}`, prompt: 'Hör zu. Wie spät ist es?', options: [right, ...bad], hear: w };
  }
  const hh = ri(1, 12);
  const mm = ri(0, 11) * 5;
  const r = `${hh}:${pad(mm)}`;
  const nx = (hh % 12) + 1, pv = ((hh + 10) % 12) + 1;
  const bad = [`${nx}:${pad(mm)}`, `${pv}:${pad(mm)}`, `${hh}:${pad((mm + 30) % 60)}`];
  return { key: `t:${r}`, prompt: timeInformal(hh, mm), hint: undefined, options: [r, ...bad.filter((x) => x !== r)].slice(0, 4), hear: timeInformal(hh, mm) };
}

function dateItem(hear: boolean): QItem {
  const m = ri(1, 12), d = ri(1, dim[m - 1]);
  const w = dateWord(d, m);
  const right = dateDigits(d, m);
  const bad = new Set<string>();
  bad.add(dateDigits(d === dim[m - 1] ? d - 1 : d + 1, m));
  bad.add(dateDigits(d, (m % 12) + 1));
  if (d <= 12 && d !== m) bad.add(dateDigits(m, d));
  bad.add(dateDigits(Math.max(1, d - 1), m));
  const opts = [right, ...[...bad].filter((x) => x !== right).slice(0, 3)];
  return { key: `dt:${right}`, prompt: hear ? 'Hör zu. Welches Datum ist das?' : w, options: opts, hear: hear ? w : undefined };
}

function Row({ k, v, say }: { k: string; v: string; say?: string }) {
  return (
    <button onClick={() => speak(say ?? v)} className="flex min-w-0 w-full items-center justify-between gap-2 rounded-xl border border-line bg-paper px-3 py-2 text-start">
      <span dir="ltr" lang="de" className="de min-w-0 flex-1 [overflow-wrap:anywhere]">{v}</span>
      <span className="flex shrink-0 items-center gap-2"><span className="num text-sm font-bold text-accent">{k}</span><Speaker className="h-4 w-4 text-muted" /></span>
    </button>
  );
}

export default function ZahlenView() {
  const t = useT();
  const { lang } = useLang();
  const [tab, setTab] = useState<'learn' | 'num' | 'time' | 'date'>('learn');
  const [hear, setHear] = useState(true);
  const tabs = [['learn', t('اتعلم', 'Learn')], ['num', t('الأرقام', 'Numbers')], ['time', t('الساعة', 'Time')], ['date', t('التاريخ', 'Date')]] as const;
  const pill = (on: boolean) => `rounded-full border px-4 py-2 ${on ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`;
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{t('الأرقام والساعة والتاريخ', 'Zahlen, Uhrzeit, Datum')}</h1>
      <p className="text-muted">{t('اسمع واختار الرقم أو الساعة أو التاريخ، أو جرّب تدريب الكتابة. اضغط على السطر عشان تسمعه لو الصوت متاح.', 'Listen and choose the number, time or date. Tap any line to hear it.')}</p>
      <TypedZahlen/>
      <div className="flex flex-wrap gap-2">{tabs.map(([k, n]) => <button key={k} onClick={() => setTab(k)} aria-pressed={tab === k} className={pill(tab === k)}>{n}</button>)}</div>
      {tab !== 'learn' && (
        <div className="flex gap-2">
          <button onClick={() => setHear(true)} className={pill(hear)}>{t('سمع', 'Listen')}</button>
          <button onClick={() => setHear(false)} className={pill(!hear)}>{t('قراءة', 'Read')}</button>
        </div>
      )}
      {tab === 'num' && <MiniQuiz key={'n' + hear} game="zahlen" make={() => Array.from({ length: 10 }, () => numItem(hear))} />}
      {tab === 'time' && <MiniQuiz key={'t' + hear} game="uhrzeit" make={() => Array.from({ length: 10 }, () => timeItem(hear))} />}
      {tab === 'date' && <MiniQuiz key={'d' + hear} game="datum" make={() => Array.from({ length: 10 }, () => dateItem(hear))} />}
      {tab === 'time' && (
        <p className="ar-title text-sm text-muted">{hear ? t('بتسمع الساعة بنظام 24 ساعة وتختار الشكل الرقمي.', 'You hear the 24 hour reading and pick the digital form.') : t('بتقرا الساعة الاعتيادية (12 ساعة): halb vier يعني 3:30، مش 4:30.', 'You read the everyday 12 hour form: halb vier means 3:30, not 4:30.')}</p>
      )}
      {tab === 'learn' && (
        <div dir="ltr" className="space-y-6">
          <section className="space-y-2">
            <h2 className="ar-title text-2xl font-bold" dir="auto">{t('الأرقام', 'Numbers')}</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {[...Array(21).keys()].map((n) => <Row key={n} k={String(n)} v={numWord(n)} />)}
              {[30, 40, 50, 60, 70, 80, 90, 100, 1000].map((n) => <Row key={n} k={String(n)} v={numWord(n)} />)}
              {[21, 34, 67, 99, 345, 2026].map((n) => <Row key={n} k={String(n)} v={numWord(n)} />)}
            </div>
            <p dir="auto" className="ar-title text-sm text-muted">{t('من 21 فوق: الآحاد الأول وبعدين und وبعدين العشرات (einundzwanzig = 21).', 'From 21: units first, then und, then the tens (einundzwanzig = 21).')}</p>
          </section>
          <section className="space-y-2">
            <h2 className="ar-title text-2xl font-bold" dir="auto">{t('الساعة', 'Time')}</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {[[15, 0], [15, 15], [15, 30], [15, 45], [15, 10], [15, 25], [15, 35], [15, 50]].map(([h, m]) => <Row key={m} k={`${h % 12}:${pad(m)}`} v={timeInformal(h, m)} />)}
              {[[8, 30], [17, 45], [20, 15]].map(([h, m]) => <Row key={h} k={`${pad(h)}:${pad(m)}`} v={timeFormal(h, m)} />)}
            </div>
            <p dir="auto" className="ar-title text-sm text-muted">{t('halb بتعني نص ساعة قبل الساعة الجاية: halb vier = 3:30. الرسمي (نشرة، قطر): فيه 24 ساعة.', 'halb means half an hour before the next hour: halb vier = 3:30. Formal use (trains, news) uses the 24 hour clock.')}</p>
          </section>
          <section className="space-y-2">
            <h2 className="ar-title text-2xl font-bold" dir="auto">{t('التاريخ', 'Date')}</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {[1, 2, 3, 7, 8, 15, 20, 21, 31].map((d) => <Row key={d} k={`${d}.`} v={`am ${ordWord(d)}`} />)}
            </div>
            <p dir="auto" className="ar-title text-sm text-muted">{t('الترتيب بيخلص بـ -ten لحد 19، و -sten من 20. شاذين: erste, dritte, siebte, achte.', 'Ordinals end in -ten up to 19 and -sten from 20. Irregular: erste, dritte, siebte, achte.')}</p>
            <div className="grid gap-2 min-[400px]:grid-cols-2">
              {months.map((m, i) => <Row key={m} k={lang === 'ar' ? monthsAr[i] : String(i + 1)} v={m} />)}
              {days.map((m, i) => <Row key={m} k={lang === 'ar' ? daysAr[i] : String(i + 1)} v={m} />)}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
