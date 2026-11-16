'use client';
import { useState } from 'react';
import { akk, dat, wechsel, fills, type Prep } from '@/lib/praep';
import { defArt, things } from '@/lib/kasus';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import { sample } from '@/lib/data';
import Speaker from './Speaker';
import Mixed from './Mixed';
import PrepDiagram from './PrepDiagram';
import MiniQuiz, { type QItem } from './MiniQuiz';

const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];

function fillItem([s, ans, grp]: (typeof fills)[number]): QItem {
  const other = (grp === 'akk' ? ['mit', 'aus', 'bei', 'von', 'zu'] : ['durch', 'für', 'gegen', 'ohne', 'um']).map((x) => (s.startsWith('___') ? x[0].toUpperCase() + x.slice(1) : x));
  return { key: `pp:${ans}`, prompt: s, options: [ans, ...sample(other, 3)], hear: s.replace('___', ans), note: [grp === 'akk' ? `${ans.toLowerCase()} + Akkusativ` : `${ans.toLowerCase()} + Dativ`, grp === 'akk' ? `${ans.toLowerCase()} + Akkusativ` : `${ans.toLowerCase()} + Dativ`] };
}
const WO = ['steht', 'liegt'];
const objs: [string, string][] = [['Die Tasche', 'die Tasche'], ['Das Buch', 'das Buch']];
function woItem(): QItem {
  const w = pick(wechsel.filter((x) => !['zwischen', 'über', 'an'].includes(x.p)));
  const n = pick(things.filter((x) => ['Tisch', 'Stuhl', 'Schrank', 'Bett', 'Haus', 'Auto'].includes(x.w)));
  const wohin = Math.random() < 0.5;
  const [o, oa] = pick(objs);
  const right = defArt[wohin ? 'akk' : 'dat'][n.g];
  const verb = pick(WO);
  const s = wohin ? `Ich stelle ${oa} ${w.p} ___ ${n.w}.` : `${o} ${verb} ${w.p} ___ ${n.w}.`;
  const bad = ['der', 'die', 'das', 'den', 'dem'].filter((x) => x !== right);
  return { key: `pw:${w.p}`, prompt: s, options: [right, ...sample(bad, 3)], note: wohin ? ['Wohin? Bewegung: Akkusativ', 'Wohin? Movement: Akkusativ'] : ['Wo? Ort: Dativ', 'Wo? Place: Dativ'] };
}
function kasusItem(): QItem {
  const all: [string, string][] = [...akk.filter((x) => x[0] !== 'entlang').map((x) => [x[0], 'Akkusativ'] as [string, string]), ...dat.filter((x) => x[0] !== 'gegenüber').map((x) => [x[0], 'Dativ'] as [string, string]), ...wechsel.map((x) => [x.p, 'Akk. oder Dativ'] as [string, string])];
  const [p, k] = pick(all);
  return { key: `pk:${p}`, prompt: p, options: [k, ...['Akkusativ', 'Dativ', 'Akk. oder Dativ'].filter((x) => x !== k)], note: [`${p}: ${k}`, `${p}: ${k}`] };
}

function List({ rows, k }: { rows: Prep[]; k: string }) {
  const { lang } = useLang();
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {rows.map((r) => (
        <li key={r[0]} className="space-y-1.5 rounded-2xl border border-line bg-card p-4">
          <div className="flex items-start justify-between gap-2"><p dir="ltr" lang="de" className="de text-xl font-semibold">{r[0]} <span className="text-sm text-accent">+ {k}</span></p>
            <button onClick={() => speak(r[3])} aria-label="Speak" className="shrink-0 rounded-full border border-line px-2 py-0.5"><Speaker /></button></div>
          <p className="ar-title font-bold">{lang === 'ar' ? <Mixed text={r[1]} /> : r[2]}</p>
          <div className="rounded-xl bg-paper p-3"><p dir="ltr" lang="de" className="de">{r[3]}</p>{lang === 'ar' && <p className="ar-title mt-1 text-sm text-muted"><Mixed text={r[4]} /></p>}</div>
        </li>
      ))}
    </ul>
  );
}

export default function PraepView() {
  const t = useT();
  const { lang } = useLang();
  const [tab, setTab] = useState<'akk' | 'dat' | 'wechsel' | 'quiz'>('akk');
  const [q, setQ] = useState<'fill' | 'wo' | 'kasus'>('fill');
  const pill = (on: boolean) => `rounded-full border px-4 py-2 ${on ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`;
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{t('حروف الجر', 'Prepositions')}</h1>
      <p className="text-muted">{lang === 'ar' ? <Mixed text="كل حرف جر بيطلب حالة: Akkusativ أو Dativ. وفيه 9 حروف بتاخد الاتنين حسب السؤال: Wo ولا Wohin." /> : 'Each preposition takes a case: Akkusativ or Dativ. Nine take either, depending on the question: Wo? or Wohin?'}</p>
      <div className="flex flex-wrap gap-2">
        {([['akk', 'Akkusativ'], ['dat', 'Dativ'], ['wechsel', 'Wechsel'], ['quiz', t('اختبار', 'Quiz')]] as const).map(([k, n]) => <button key={k} onClick={() => setTab(k)} aria-pressed={tab === k} className={pill(tab === k)}>{n}</button>)}
      </div>
      {tab === 'akk' && <List rows={akk} k="Akkusativ" />}
      {tab === 'dat' && <List rows={dat} k="Dativ" />}
      {tab === 'wechsel' && (
        <div className="space-y-3">
          <p dir="auto" className="ar-title rounded-2xl border border-line bg-card p-4">{lang === 'ar' ? <Mixed text="Wo (فين، مكان ثابت) = Dativ. Wohin (لفين، حركة) = Akkusativ." /> : 'Wo? (where, a fixed place) = Dativ. Wohin? (where to, movement) = Akkusativ.'}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {wechsel.map((w) => (
              <li key={w.p} className="space-y-2 rounded-2xl border border-line bg-card p-4">
                <div className="flex items-center justify-between gap-3"><div><p dir="ltr" lang="de" className="de text-2xl font-semibold">{w.p}</p><p className="ar-title text-sm text-muted">{lang === 'ar' ? <Mixed text={w.ar} /> : w.en}</p></div><PrepDiagram p={w.p} /></div>
                {([['Wo? Dativ', w.wo], ['Wohin? Akkusativ', w.wohin]] as const).map(([l, e]) => (
                  <button key={l} onClick={() => speak(e[0])} className="block w-full rounded-xl bg-paper p-3 text-start">
                    <span dir="ltr" className="num text-xs font-bold text-accent">{l}</span>
                    <span dir="ltr" lang="de" className="de block">{e[0]}</span>
                    {lang === 'ar' && <span className="ar-title block text-sm text-muted"><Mixed text={e[1]} /></span>}
                  </button>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}
      {tab === 'quiz' && (
        <>
          <div className="flex flex-wrap gap-2">
            {([['fill', t('اختار الحرف', 'Pick the preposition')], ['wo', 'Wo? Wohin?'], ['kasus', t('الحالة', 'Case')]] as const).map(([k, n]) => <button key={k} onClick={() => setQ(k)} className={pill(q === k)}>{n}</button>)}
          </div>
          {q === 'fill' && <MiniQuiz key="f" game="praep-fill" make={() => sample(fills, 10).map(fillItem)} />}
          {q === 'wo' && <MiniQuiz key="w" game="praep-wo" make={() => Array.from({ length: 10 }, woItem)} />}
          {q === 'kasus' && <MiniQuiz key="k" game="praep-kasus" make={() => Array.from({ length: 10 }, kasusItem)} />}
        </>
      )}
    </div>
  );
}
