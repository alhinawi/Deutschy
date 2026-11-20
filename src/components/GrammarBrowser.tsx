'use client';
import {grammarPhoto} from '@/lib/lesson-photos';
import Link from 'next/link';
import { arTopics } from '@/lib/arcount';
import { useRef, useState } from 'react';
import { grammar, type Lvl } from '@/lib/grammar';
import Mixed from './Mixed';
import { useLang, useT } from '@/lib/i18n';
import FilterDisclosure from './FilterDisclosure';

const LV: Lvl[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
export default function GrammarBrowser() {
  const { lang } = useLang();
  const t = useT();
  const [lv, setLv] = useState<Lvl | 'all'>('all');
  const [q, setQ] = useState('');
  const searchInput = useRef<HTMLInputElement>(null);
  const query = q.trim().toLocaleLowerCase();
  const list = grammar.filter((g) => (lv === 'all' || g.level === lv) && (query === '' || (g.title[0] + ' ' + g.title[1] + ' ' + g.sum[0] + ' ' + g.sum[1]).toLowerCase().includes(query)));
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="grammar-search" className="sr-only">{t('ابحث في القواعد', 'Search grammar')}</label><input id="grammar-search" ref={searchInput} aria-describedby="grammar-search-hint" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('ابحث في القواعد', 'Search grammar')} className="w-full rounded-full border border-line bg-card px-4 py-2 text-sm sm:w-64" />
      </div>
      <FilterDisclosure activeCount={lv === 'all' ? 0 : 1}>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t('المستوى', 'Level')}>
          {(['all', ...LV] as const).map((l) => (
            <button key={l} type="button" aria-pressed={lv === l} onClick={() => setLv(l)} className={`num rounded-full border px-3 py-1 text-sm font-bold ${lv === l ? 'border-accent bg-accent text-accent-ink' : 'border-line hover:bg-card'}`}>{l === 'all' ? t('الكل', 'All') : l}</button>
          ))}
        </div>
        <button type="button" disabled={lv==='all'&&!q} onClick={()=>{setLv('all');setQ('');searchInput.current?.focus()}} className="rounded-full border border-line px-3 py-2 text-sm disabled:opacity-50">{t('اعرض كل المواضيع','Show all topics')}</button>
      </FilterDisclosure>
      <p id="grammar-search-hint" className="text-sm text-muted">{t('البحث في عناوين وملخصات المواضيع. مسح البحث بيسيّب المستوى اللي اخترته.', 'Search topic titles and summaries. Clearing only the query keeps your level filter.')}</p>
      <div className="flex flex-wrap gap-2"><button type="button" disabled={!q} onClick={()=>{setQ('');searchInput.current?.focus()}} className="rounded-full border border-line px-3 py-2 text-sm disabled:opacity-50">{t('امسح البحث بس','Clear query only')}</button></div>
      <p role="status" aria-live="polite" aria-atomic="true" className="num text-sm text-muted">{t(arTopics(list.length), `${list.length} topics`)}</p>
      {list.length===0&&<p className="rounded-xl border border-line p-4">{t('مفيش مواضيع مطابقة. غيّر البحث أو المستوى، أو اعرض كل المواضيع.','No matching topics. Change the query or level, or show all topics.')}</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((g) => (
          <Link key={g.id} href={`/grammar/${g.id}/`} className="flex min-h-32 overflow-hidden rounded-2xl border border-line bg-card hover:border-accent">

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img data-grammar-photo src={grammarPhoto(g.id)} alt="" width={112} height={128} className="h-32 w-28 shrink-0 object-cover" loading="lazy" />

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
