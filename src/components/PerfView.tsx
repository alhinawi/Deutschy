'use client';
import PerfektContext from './PerfektContext';
import { useMemo, useState } from 'react';
import { verbs, type Verb } from '@/lib/verbs';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import { sample } from '@/lib/data';
import Speaker from './Speaker';
import Mixed from './Mixed';
import MiniQuiz, { type QItem } from './MiniQuiz';

const pool = verbs.filter((v) => v.kind === 'strong' || v.kind === 'irregular');
const pick = (v: Verb, f: (x: Verb) => string) => {
  const c = f(v);
  const others = sample(pool.filter((x) => f(x) !== c), 12);
  const seen = new Set([c]);
  const d: string[] = [];
  for (const o of others) { const s = f(o); if (!seen.has(s)) { seen.add(s); d.push(s); } if (d.length === 3) break; }
  return [c, ...d];
};

export default function PerfView() {
  const t = useT();
  const { lang } = useLang();
  const [tab, setTab] = useState<'context' | 'rules' | 'table' | 'pp' | 'pret' | 'aux'>('context');
  const [q, setQ] = useState('');
  const rows = useMemo(() => pool.filter((v) => !q || v.inf.includes(q.toLowerCase()) || v.en.toLowerCase().includes(q.toLowerCase())).sort((a, b) => a.inf.localeCompare(b.inf, 'de')), [q]);
  const pill = (on: boolean) => `rounded-full border px-4 py-2 ${on ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`;
  const tabs = [['context', t('السياق والاستثناءات','Context and exceptions')], ['rules', t('القواعد', 'Rules')], ['table', t('جدول الأفعال', 'Verb table')], ['pp', 'Partizip II'], ['pret', 'Präteritum'], ['aux', 'haben / sein']] as const;
  const rules: [string, string, string, string[]][] = [
    ['Perfekt', 'بنستخدمه في الكلام اليومي للماضي. haben أو sein في التاني + Partizip II في الآخر.', 'The everyday past in speech. haben or sein in second position, Partizip II at the end.', ['Ich habe Pizza gegessen.', 'Er ist nach Hause gegangen.']],
    ['haben / sein', 'أغلب الأفعال بتاخد haben. أفعال كتير بتوصف انتقال أو تغيّر حالة بتاخد sein، بس المعنى والتركيب بيفرقوا. احفظ المساعد مع الاستخدام، وراجع تبويب السياق.', 'Most verbs use haben. Many intransitive changes of place/state use sein, as do sein and bleiben. Meaning, construction and region matter; learn the auxiliary with its use. See Context and exceptions.', ['Wir sind nach Berlin gefahren.', 'Sie ist müde geworden.', 'Ich bin zu Hause geblieben.']],
    ['Präteritum', 'في الكتابة والحكي. في الكلام بنستخدمه غالبًا مع sein و haben والأفعال المساعدة: war, hatte, konnte, wollte.', 'Used in writing and narration. In speech mostly with sein, haben and modals: war, hatte, konnte, wollte.', ['Ich war gestern krank.', 'Er hatte keine Zeit.', 'Wir konnten nicht kommen.']],
    ['Partizip II', 'أنماط شائعة مش مولّد لكل الأفعال. فيه أفعال منتظمة وقوية ومختلطة، وفيه أفعال من غير بادئة التصريف وأفعال ببادئة منفصلة. احفظ الصيغة وراجع الأمثلة في تبويب السياق.', 'Common patterns, not a universal generator: weak -t, strong -en and mixed forms with stem changes. -ieren and inseparable verbs omit ge-; separable verbs usually place it after the prefix. Learn exact forms.', ['gemacht, gespielt', 'gegangen, gesehen', 'besucht, vergessen']],
  ];
  return (
    <div className="space-y-6">
      <div><h1 className="ar-title text-4xl font-bold">{t('الماضي في الألماني', 'Past tenses')}</h1><p dir="ltr" lang="de" className="de mt-1 text-xl text-muted">Perfekt und Präteritum</p></div>
      <div className="flex flex-wrap gap-2">{tabs.map(([k, n]) => <button key={k} onClick={() => setTab(k)} aria-pressed={tab === k} className={pill(tab === k)}>{n}</button>)}</div>
      {tab === 'context' && <PerfektContext/>}
      {tab === 'rules' && (
        <div className="space-y-4">
          {rules.map(([h, ar, en, ex]) => (
            <section key={h} className="space-y-2 rounded-2xl border border-line bg-card p-4">
              <h2 dir="auto" className="de text-xl font-semibold">{h}</h2>
              <p className="ar-title text-muted">{lang === 'ar' ? <Mixed text={ar} /> : en}</p>
              <ul dir="ltr" className="space-y-1">{ex.map((e) => <li key={e}><button onClick={() => speak(e)} lang="de" className="de flex items-center gap-2 text-start">{e}<Speaker className="h-4 w-4 shrink-0 text-muted" /></button></li>)}</ul>
            </section>
          ))}
        </div>
      )}
      {tab === 'table' && (
        <div className="space-y-3">
          <input value={q} onChange={(e) => setQ(e.target.value)} dir="ltr" placeholder={t('ابحث عن فعل', 'Search a verb')} aria-label={t('ابحث عن فعل', 'Search a verb')} className="w-full rounded-xl border border-line bg-paper px-4 py-2" />
          <div dir="ltr" tabIndex={0} role="region" aria-label={t('جدول الأفعال', 'Verb table')} className="overflow-x-auto rounded-2xl border border-line bg-card">
            <table className="w-full min-w-[420px] text-start">
              <thead><tr className="border-b border-line text-sm text-muted"><th className="p-2 text-start">Infinitiv</th><th className="p-2 text-start">Präteritum</th><th className="p-2 text-start">Perfekt</th><th className="p-2 text-start">{lang === 'ar' ? 'المعنى' : 'Meaning'}</th></tr></thead>
              <tbody>{rows.map((v) => (
                <tr key={v.inf} className="border-b border-line last:border-0">
                  <td className="de p-2 font-semibold"><button onClick={() => speak(`${v.inf}, ${v.pret}, ${v.aux === 'sein' ? 'ist' : 'hat'} ${v.pp}`)} className="flex items-center gap-1" lang="de">{v.inf}<Speaker className="h-3.5 w-3.5 text-muted" /></button></td>
                  <td lang="de" className="de p-2">{v.pret}</td>
                  <td lang="de" className="de p-2">{v.aux === 'sein' ? 'ist' : 'hat'} {v.pp}</td>
                  <td className="p-2 text-sm text-muted">{lang === 'ar' ? v.ar : v.en}</td>
                </tr>))}</tbody>
            </table>
          </div>
        </div>
      )}
      {tab === 'pp' && <MiniQuiz key="pp" game="partizip-ii" make={() => sample(pool, 10).map((v): QItem => ({ key: `pf:pp:${v.inf}`, prompt: `${v.inf}: ${v.aux === 'sein' ? 'er ist' : 'er hat'} ___`, options: pick(v, (x) => x.pp), hear: `${v.aux === 'sein' ? 'er ist' : 'er hat'} ${v.pp}`, note: [v.ar, v.en] }))} />}
      {tab === 'pret' && <MiniQuiz key="pt" game="praeteritum" make={() => sample(pool, 10).map((v): QItem => ({ key: `pf:pt:${v.inf}`, prompt: `${v.inf}: gestern ___ er`, options: pick(v, (x) => x.pret.split(' ')[0]), hear: `gestern ${v.pret.split(' ')[0]} er`, note: [v.ar, v.en] }))} />}
      {tab === 'aux' && <MiniQuiz key="ax" game="haben-sein" make={() => sample(verbs.filter((v) => ['machen','kommen','gehen','essen','sehen','sprechen'].includes(v.inf)), 10).map((v): QItem => ({ key: `pf:ax:${v.inf}`, prompt: `${v.inf}: er ___ ${v.pp}`, options: v.aux === 'sein' ? ['ist', 'hat'] : ['hat', 'ist'], hear: `er ${v.aux === 'sein' ? 'ist' : 'hat'} ${v.pp}`, note: [v.ar, v.en] }))} />}
    </div>
  );
}
