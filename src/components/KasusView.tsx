'use client';
import { useState } from 'react';
import { defArt, indefArt, frames, things, vehicles, caseName, gName, type Case, type G } from '@/lib/kasus';
import { useT } from '@/lib/i18n';
import MiniQuiz, { type QItem } from './MiniQuiz';

const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
const shuf = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);
const FORMS = ['der', 'die', 'das', 'den', 'dem'];
const why: Record<Case, [string, string]> = {
  nom: ['الفاعل أو الحاجة اللي الجملة بتتكلم عنها (Nominativ)', 'the subject of the sentence (Nominativ)'],
  akk: ['المفعول به المباشر (Akkusativ)', 'the direct object (Akkusativ)'],
  dat: ['بعد حرف جر بيطلب Dativ (neben, unter, mit)', 'after a preposition that takes Dativ (neben, unter, mit)'],
};

function item(): QItem {
  const f = pick(frames);
  const n = pick(f.pool === 'vehicles' ? vehicles : things);
  const right = defArt[f.c][n.g];
  const bad = shuf(FORMS.filter((x) => x !== right)).slice(0, 3);
  return { key: `kas:${f.c}:${n.g}`, prompt: f.t.replace('{NP}', `___ ${n.w}`), options: [right, ...bad], note: [`${n.w}: ${gName[n.g as G][1]}. ${why[f.c][0]}: ${right}`, `${n.w}: ${gName[n.g as G][0]}. ${why[f.c][1]}: ${right}`] };
}

export default function KasusView() {
  const t = useT();
  const [tab, setTab] = useState<'table' | 'quiz'>('table');
  const pill = (on: boolean) => `rounded-full border px-4 py-2 ${on ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`;
  const cs: Case[] = ['nom', 'akk', 'dat'];
  const gs: (G | 'p')[] = ['m', 'f', 'n', 'p'];
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{t('الحالات (Kasus)', 'Cases (Kasus)')}</h1>
      <p className="text-muted">{t('الأداة بتتغير حسب دور الاسم في الجملة. حفّظ الجدول وبعدها اتدرب.', 'The article changes with the role of the noun in the sentence. Learn the table, then practise.')}</p>
      <div className="flex gap-2">
        <button onClick={() => setTab('table')} className={pill(tab === 'table')}>{t('الجدول', 'Table')}</button>
        <button onClick={() => setTab('quiz')} className={pill(tab === 'quiz')}>{t('اختبار', 'Quiz')}</button>
      </div>
      {tab === 'table' && (
        <div dir="ltr" className="space-y-4">
          {[['der / die / das', defArt], ['ein / eine / kein', indefArt]].map(([title, art]) => (
            <section key={title as string} className="space-y-2">
              <h2 className="de text-xl font-semibold">{title as string}</h2>
              <div className="overflow-x-auto rounded-2xl border border-line bg-card">
                <table className="w-full min-w-[320px] text-center">
                  <thead><tr className="text-sm text-muted"><th className="p-2"></th>{gs.map((g) => <th key={g} className="p-2">{g === 'p' ? 'Plural' : g}</th>)}</tr></thead>
                  <tbody>{cs.map((c) => <tr key={c} className="border-t border-line"><th className="de p-2 text-start text-sm">{caseName[c][0].slice(0, 3)}.</th>{gs.map((g) => <td key={g} className="de p-2">{(art as typeof defArt)[c][g]}</td>)}</tr>)}</tbody>
                </table>
              </div>
            </section>
          ))}
          <ul dir="auto" className="ar-title space-y-1 text-sm text-muted">
            <li>{t('Nominativ: مين بيعمل الفعل؟ (Wer?)', 'Nominativ: who does the verb? (Wer?)')}</li>
            <li>{t('Akkusativ: إيه اللي بيحصله الفعل؟ (Wen/Was?) المذكر بس بيتغير: der → den.', 'Akkusativ: what receives the action? (Wen/Was?) Only masculine changes: der → den.')}</li>
            <li>{t('Dativ: لمين أو فين؟ (Wem?) بعد mit, bei, von, zu, aus, nach. مذكر ومحايد: dem، مؤنث: der، جمع: den (+ n).', 'Dativ: to whom or where? (Wem?) after mit, bei, von, zu, aus, nach. Masculine and neuter: dem, feminine: der, plural: den (+ n).')}</li>
          </ul>
        </div>
      )}
      {tab === 'quiz' && <MiniQuiz game="kasus" make={() => Array.from({ length: 10 }, item)} />}
    </div>
  );
}
