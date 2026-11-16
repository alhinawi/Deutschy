'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { verbOf, slug, type Verb } from '@/lib/verbs';
import { PERSONS } from '@/lib/conj';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import { sample } from '@/lib/data';
import Speaker from './Speaker';
import Mixed from './Mixed';
import MiniQuiz, { type QItem } from './MiniQuiz';

const NAMES = ['sein', 'haben', 'werden', 'können', 'müssen', 'wollen', 'sollen', 'dürfen', 'mögen', 'machen', 'wohnen', 'lernen', 'arbeiten', 'fahren', 'sprechen', 'lesen', 'sehen', 'geben', 'nehmen', 'essen', 'schlafen', 'laufen', 'wissen'];
const list = NAMES.map((n) => verbOf(n)).filter((v): v is Verb => !!v);
const ending = ['e', 'st', 't', 'en', 't', 'en'];
const stem = (inf: string) => (/(eln|ern)$/.test(inf) ? inf.slice(0, -1) : inf.slice(0, -2));
const pron = (i: number) => PERSONS[i];

function fill(v: Verb): QItem {
  const i = [0, 1, 2, 3, 4, 5][Math.floor(Math.random() * 6)];
  const right = v.pres[i];
  const regular = ending.map((e) => stem(v.inf) + e);
  const pool = [...new Set([...v.pres, ...regular])].filter((x) => x !== right);
  return { key: `pr:${v.inf}`, prompt: `${pron(i)} ___ (${v.inf})`, hint: undefined, options: [right, ...sample(pool, 3)], hear: undefined, note: [`${pron(i)} ${right}`, `${pron(i)} ${right}`] };
}
function listen(v: Verb): QItem {
  const i = Math.floor(Math.random() * 6);
  const right = `${pron(i)} ${v.pres[i]}`;
  const pool = [...new Set(v.pres.map((f, k) => `${pron(k)} ${f}`))].filter((x) => x !== right);
  return { key: `pr:${v.inf}`, prompt: 'Hör zu. Was hörst du?', options: [right, ...sample(pool, 3)], hear: right };
}

export default function PraesensView() {
  const t = useT();
  const { lang } = useLang();
  const [tab, setTab] = useState<'table' | 'fill' | 'listen'>('table');
  const [vi, setVi] = useState(0);
  const v = list[vi];
  const pill = (on: boolean) => `rounded-full border px-4 py-2 ${on ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`;
  const pickList = useMemo(() => list, []);
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{t('تصريف الأفعال الأساسية', 'Core verbs in the present')}</h1>
      <p className="text-muted">{lang === 'ar' ? <Mixed text="أفعال sein وhaben والمودال والمنتظمة والقوية في Präsens. اضغط على أي شكل عشان تسمعه." /> : 'sein, haben, the modals, regular and strong verbs in the Präsens. Tap any form to hear it.'}</p>
      <div className="flex flex-wrap gap-2">
        {([['table', t('الجدول', 'Table')], ['fill', t('كمّل', 'Fill in')], ['listen', t('سمع', 'Listen')]] as const).map(([k, n]) => <button key={k} onClick={() => setTab(k)} aria-pressed={tab === k} className={pill(tab === k)}>{n}</button>)}
      </div>
      {tab === 'table' && (
        <>
          <div className="flex flex-wrap gap-2">
            {pickList.map((x, k) => <button key={x.inf} onClick={() => setVi(k)} lang="de" className={`de rounded-full border px-3 py-1.5 text-sm ${vi === k ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{x.inf}</button>)}
          </div>
          <section className="space-y-3 rounded-2xl border border-line bg-card p-4">
            <div className="flex items-baseline justify-between gap-2"><h2 dir="ltr" lang="de" className="de text-3xl font-semibold">{v.inf}</h2><span className="ar-title text-muted">{lang === 'ar' ? <Mixed text={v.ar} /> : v.en}</span></div>
            <ul dir="ltr" className="grid gap-2">
              {PERSONS.map((p, i) => (
                <li key={p}><button onClick={() => speak(`${p} ${v.pres[i]}`)} className="flex w-full items-center justify-between rounded-xl border border-line bg-paper px-3 py-2 text-start">
                  <span lang="de" className="de text-lg"><span className="text-muted">{p}</span> <b>{v.pres[i]}</b></span><Speaker className="h-4 w-4 text-muted" />
                </button></li>
              ))}
            </ul>
            <Link href={`/verbs/${slug(v.inf)}/`} className="inline-block text-sm font-bold text-accent underline">{t('كل أزمنة الفعل', 'All tenses of this verb')}</Link>
          </section>
        </>
      )}
      {tab === 'fill' && <MiniQuiz key="f" game="praesens" make={() => sample(list, 10).map(fill)} />}
      {tab === 'listen' && <MiniQuiz key="l" game="praesens-hoeren" make={() => sample(list, 10).map(listen)} />}
    </div>
  );
}
