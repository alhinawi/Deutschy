'use client';
import { useState } from 'react';
import { defArt, indefArt, endDef, endIndef, endZero, caseName, gName, things, adjs, datPl, cap, type G, type Case } from '@/lib/kasus';
import { sample } from '@/lib/data';
import { useT } from '@/lib/i18n';
import MiniQuiz, { type QItem } from './MiniQuiz';

const cases: Case[] = ['nom', 'akk', 'dat'];
const gs: (G | 'p')[] = ['m', 'f', 'n', 'p'];
const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
const ALL = ['e', 'en', 'er', 'es', 'em'];

function item(): QItem {
  const c = pick(cases);
  const kind = pick(['def', 'indef', 'zero'] as const);
  const n = pick(things);
  const adj = pick(adjs);
  const g: G | 'p' = kind === 'zero' ? 'p' : kind === 'indef' && Math.random() < 0.2 ? 'p' : pick(['m', 'f', 'n'] as G[]);
  const gg: G | 'p' = g;
  const noun0 = gg === 'p' ? (c === 'dat' ? datPl(n.pl) : n.pl) : n.w;
  const gender: G = gg === 'p' ? n.g : (gg as G);
  const noun = gg === 'p' ? noun0 : (things.filter((x) => x.g === gender).length ? pick(things.filter((x) => x.g === gender)).w : n.w);
  const art = kind === 'def' ? defArt[c][gg] : kind === 'indef' ? indefArt[c][gg] : '';
  const end = kind === 'def' ? endDef[c][gg] : kind === 'indef' ? endIndef[c][gg] : endZero[c][gg];
  const np = [art, adj + '___', noun].filter(Boolean).join(' ');
  const frame = c === 'nom' ? (gg === 'p' ? '{NP} sind hier.' : '{NP} ist hier.') : c === 'akk' ? 'Ich kaufe {NP}.' : 'Die Katze sitzt neben {NP}.';
  const prompt = cap(frame.replace('{NP}', np)).replace(/^(\S+)/, (m) => m);
  const bad = sample(ALL.filter((x) => x !== end), 3).map((x) => '-' + x);
  const kn = kind === 'def' ? ['الـ (bestimmt)', 'definite article'] : kind === 'indef' ? ['ein/eine/keine', 'ein / eine / keine'] : ['من غير أداة', 'no article'];
  const gl = gg === 'p' ? ['جمع', 'plural'] : gName[gg as G];
  return { key: `adj:${c}:${kind}:${gg}`, prompt, options: ['-' + end, ...bad], note: [`${caseName[c][0]}، ${gl[0]}، ${kn[0]}: -${end}`, `${caseName[c][0]}, ${gl[1]}, ${kn[1]}: -${end}`] };
}

function Table({ title, art, end }: { title: string; art: typeof defArt | null; end: typeof endDef }) {
  return (
    <section className="space-y-2">
      <h3 className="de text-xl font-semibold">{title}</h3>
      <div className="overflow-x-auto rounded-2xl border border-line bg-card">
        <table className="w-full min-w-[300px] text-center">
          <thead><tr className="text-sm text-muted"><th className="p-2"></th>{gs.map((g) => <th key={g} className="p-2">{g === 'p' ? 'Plural' : g === 'm' ? 'm' : g === 'f' ? 'f' : 'n'}</th>)}</tr></thead>
          <tbody>
            {cases.map((c) => (
              <tr key={c} className="border-t border-line">
                <th className="de p-2 text-start text-sm">{caseName[c][0].slice(0, 3)}.</th>
                {gs.map((g) => <td key={g} className="de whitespace-nowrap px-1 py-2 text-sm">{art ? <span className="text-muted">{art[c][g]} </span> : null}<b className="text-accent">-{end[c][g]}</b></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function AdjView() {
  const t = useT();
  const [tab, setTab] = useState<'table' | 'quiz'>('table');
  const pill = (on: boolean) => `rounded-full border px-4 py-2 ${on ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`;
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{t('نهايات الصفات', 'Adjektivendungen')}</h1>
      <p className="text-muted">{t('الصفة قبل الاسم بتاخد نهاية حسب الحالة (Kasus) والجنس والأداة. الجداول دي بتوضح النهاية.', 'An adjective before a noun takes an ending that depends on case, gender and the article. These tables show the ending.')}</p>
      <div className="flex gap-2">
        <button onClick={() => setTab('table')} className={pill(tab === 'table')}>{t('الجداول', 'Tables')}</button>
        <button onClick={() => setTab('quiz')} className={pill(tab === 'quiz')}>{t('اختبار', 'Quiz')}</button>
      </div>
      {tab === 'table' && (
        <div dir="ltr" className="space-y-5">
          <Table title="der / die / das" art={defArt} end={endDef} />
          <Table title="ein / eine / kein" art={indefArt} end={endIndef} />
          <Table title={t('من غير أداة', 'No article')} art={null} end={endZero} />
          <p dir="auto" className="ar-title text-sm text-muted">{t('مثال: der neue Tisch، ein neuer Tisch، neuer Tisch (مع جمع: neue Tische). نفس الجدول للمفرد المؤنث والمحايد في Nom/Akk: die neue Lampe، das neue Buch، ein neues Buch.', 'Example: der neue Tisch, ein neuer Tisch, neue Tische. Feminine and neuter match in Nom and Akk: die neue Lampe, das neue Buch, ein neues Buch.')}</p>
        </div>
      )}
      {tab === 'quiz' && <MiniQuiz game="adjektivendungen" make={() => Array.from({ length: 10 }, item)} />}
    </div>
  );
}
