'use client';
import Link from 'next/link';
import { useState } from 'react';
import Art from './Art';
import { photoOf, verbs, slug, type VerbKind } from '@/lib/verbs';
import type { Lvl } from '@/lib/grammar';
import { useLang, useT } from '@/lib/i18n';

const LV: Lvl[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const KINDS: { id: VerbKind; ar: string; en: string }[] = [
  { id: 'regular', ar: 'منتظمة', en: 'Regular' }, { id: 'strong', ar: 'قوية', en: 'Strong' }, { id: 'irregular', ar: 'شاذة', en: 'Irregular' },
  { id: 'modal', ar: 'مساعدة', en: 'Modal' }, { id: 'separable', ar: 'منفصلة', en: 'Separable' }, { id: 'reflexive', ar: 'انعكاسية', en: 'Reflexive' },
];
export default function VerbBrowser() {
  const { lang } = useLang();
  const t = useT();
  const [lv, setLv] = useState<Lvl | 'all'>('all');
  const [kind, setKind] = useState<VerbKind | 'all'>('all');
  const [q, setQ] = useState('');
  const list = verbs.filter((v) => (lv === 'all' || v.level === lv) && (kind === 'all' || v.kind === kind) && (q === '' || (v.inf + ' ' + v.ar + ' ' + v.en).toLowerCase().includes(q.toLowerCase())));
  const chip = (on: boolean) => `num rounded-full border px-3 py-1 text-sm font-bold ${on ? 'border-accent bg-accent text-accent-ink' : 'border-line hover:bg-card'}`;
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {(['all', ...LV] as const).map((l) => <button key={l} onClick={() => setLv(l)} className={chip(lv === l)}>{l === 'all' ? t('كل المستويات', 'All levels') : l}</button>)}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button onClick={() => setKind('all')} className={chip(kind === 'all')}>{t('كل الأنواع', 'All types')}</button>
        {KINDS.map((k) => <button key={k.id} onClick={() => setKind(k.id)} className={chip(kind === k.id)}>{lang === 'ar' ? k.ar : k.en}</button>)}
      </div>
      <Link href="/verbs/quiz/" className="inline-block rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-ink">{t('اختبر نفسك', 'Take the quiz')}</Link>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('ابحث عن فعل (ألماني أو عربي أو إنجليزي)', 'Search a verb (German, Arabic or English)')} className="w-full rounded-full border border-line bg-card px-4 py-2 text-sm sm:w-96" />
      <p className="num text-sm text-muted">{list.length} {t('فعل', 'verbs')}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((v) => (
          <Link key={v.inf} href={`/verbs/${slug(v.inf)}/`} className="flex overflow-hidden rounded-2xl border border-line bg-card hover:border-accent">
            {photoOf(v) ? (

              // eslint-disable-next-line @next/next/no-img-element

              <img src={`/img/${photoOf(v)}.jpg`} alt="" className="h-28 w-24 shrink-0 object-cover" loading="lazy" />

            ) : <Art kind={v.kind} className="h-28 w-24 shrink-0 object-cover" />}
            <div className="min-w-0 p-3">
              <p className="num text-xs font-bold text-accent">{v.level} · {KINDS.find((k) => k.id === v.kind)![lang]}</p>
              <p className="de text-2xl font-semibold leading-tight" lang="de">{v.inf}</p>
              <p className="ar-title text-lg text-muted">{lang === 'ar' ? v.ar : v.en}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
