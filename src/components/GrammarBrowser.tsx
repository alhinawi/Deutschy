'use client';
import Link from 'next/link';
import { useState } from 'react';
import { grammar, type Lvl } from '@/lib/grammar';
import Mixed from './Mixed';
import { useLang, useT } from '@/lib/i18n';

const LV: Lvl[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
export default function GrammarBrowser() {
  const { lang } = useLang();
  const t = useT();
  const [lv, setLv] = useState<Lvl | 'all'>('all');
  const [q, setQ] = useState('');
  const list = grammar.filter((g) => (lv === 'all' || g.level === lv) && (q === '' || (g.title[0] + ' ' + g.title[1] + ' ' + g.sum[0] + ' ' + g.sum[1]).toLowerCase().includes(q.toLowerCase())));
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        {(['all', ...LV] as const).map((l) => (
          <button key={l} onClick={() => setLv(l)} className={`num rounded-full border px-3 py-1 text-sm font-bold ${lv === l ? 'border-accent bg-accent text-accent-ink' : 'border-line hover:bg-card'}`}>{l === 'all' ? t('الكل', 'All') : l}</button>
        ))}
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('ابحث في القواعد', 'Search grammar')} className="ms-auto w-full rounded-full border border-line bg-card px-4 py-2 text-sm sm:w-64" />
      </div>
      <p className="num text-sm text-muted">{list.length} {t('موضوع', 'topics')}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((g) => (
          <Link key={g.id} href={`/grammar/${g.id}/`} className="flex overflow-hidden rounded-2xl border border-line bg-card hover:border-accent">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/img/${g.img}.jpg`} alt="" className="h-32 w-28 shrink-0 object-cover" width={112} height={128} loading="lazy" />
            <div className="min-w-0 p-4">
              <p className="num text-xs font-bold text-accent">{g.level}</p>
              <p className="ar-title text-xl leading-snug text-ink">{lang === 'ar' ? <Mixed text={g.title[0]} /> : g.title[1]}</p>
              <p className="mt-1 line-clamp-2 text-sm text-muted">{lang === 'ar' ? <Mixed text={g.sum[0]} /> : g.sum[1]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
