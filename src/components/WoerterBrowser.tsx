'use client';
import { useMemo, useRef, useState } from 'react';
import { woerter, type Wort } from '@/lib/woerter';
import { useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';
import FilterDisclosure from './FilterDisclosure';

type ArtFilter = 'all' | 'der' | 'die' | 'das' | 'plural';
const PAGE = 60;

function WortCard({ w }: { w: Wort }) {
  const t = useT();
  const artClass = w.pluralOnly || !w.art ? 'art-plural' : `art-${w.art}`;
  return (
    <li className={`rounded-2xl border border-line bg-card p-4 border-s-4 ${artClass}`}>
      <div className="flex items-start justify-between gap-2">
        <p dir="ltr" lang="de" className="de text-xl font-semibold">
          {w.art && !w.pluralOnly && <span className={`art-badge ${artClass}`}>{w.art}</span>} {w.de}
        </p>
        <button onClick={() => speak(w.pluralOnly ? w.de : `${w.art} ${w.de}`)} aria-label={t('اسمع الكلمة', 'Hear the word')} className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-line p-2"><Speaker /></button>
      </div>
      <p className="ar-title mt-1 font-bold">{w.ar}</p>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
        {w.pluralOnly
          ? <span dir="ltr" className="de" lang="de">{t('جمع فقط', 'plural only')}</span>
          : w.pl && <span>{t('الجمع', 'Plural')}: <span dir="ltr" className="de inline-block" lang="de">die {w.pl}</span></span>}
        {w.gen && w.gen !== w.de && <span>{t('المضاف إليه', 'Genitive')}: <span dir="ltr" className="de inline-block" lang="de">{w.gen}</span></span>}
      </div>
    </li>
  );
}

export default function WoerterBrowser() {
  const t = useT();
  const [art, setArt] = useState<ArtFilter>('all');
  const [q, setQ] = useState('');
  const [shown, setShown] = useState(PAGE);
  const searchInput = useRef<HTMLInputElement>(null);
  const nq = q.trim().normalize('NFC').toLocaleLowerCase('de');
  const list = useMemo(() => woerter.filter((w) => {
    if (art === 'plural' && !w.pluralOnly) return false;
    if (art !== 'all' && art !== 'plural' && (w.pluralOnly || w.art !== art)) return false;
    return !nq || (w.de + ' ' + (w.pl || '') + ' ' + w.ar).normalize('NFC').toLocaleLowerCase('de').includes(nq);
  }), [art, nq]);
  const chip = (on: boolean, extra = '') => `num min-h-11 rounded-full border px-4 py-2 text-sm font-bold ${extra} ${on ? 'border-accent bg-accent text-accent-ink' : 'border-line hover:bg-card'}`;
  const reset = (fn: () => void) => () => { fn(); setShown(PAGE); };
  return (
    <div className="space-y-4">
      <label htmlFor="woerter-search" className="block font-semibold">{t('دوّر على أي كلمة بالألماني أو المصري', 'Search any word in German or Arabic')}</label>
      <input ref={searchInput} id="woerter-search" type="search" dir="auto" value={q} onChange={(e) => { setQ(e.target.value); setShown(PAGE); }} placeholder={t('مثال: Haus أو بيت', 'e.g. Haus')} className="min-h-11 w-full rounded-full border border-line bg-card px-4 py-2 text-sm sm:w-96" />
      <FilterDisclosure activeCount={art === 'all' ? 0 : 1}>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t('الأداة', 'Article')}>
          <button aria-pressed={art === 'all'} onClick={reset(() => setArt('all'))} className={chip(art === 'all')}>{t('الكل', 'All')}</button>
          <button aria-pressed={art === 'der'} onClick={reset(() => setArt('der'))} className={chip(art === 'der', 'art-der-text')}>der</button>
          <button aria-pressed={art === 'die'} onClick={reset(() => setArt('die'))} className={chip(art === 'die', 'art-die-text')}>die</button>
          <button aria-pressed={art === 'das'} onClick={reset(() => setArt('das'))} className={chip(art === 'das', 'art-das-text')}>das</button>
          <button aria-pressed={art === 'plural'} onClick={reset(() => setArt('plural'))} className={chip(art === 'plural')}>{t('جمع فقط', 'Plural only')}</button>
        </div>
        {(q || art !== 'all') && <button onClick={reset(() => { setQ(''); setArt('all'); searchInput.current?.focus(); })} className="min-h-11 rounded-full border border-line px-4 py-2">{t('امسح البحث والفلتر', 'Clear search and filter')}</button>}
      </FilterDisclosure>
      <div className="flex flex-wrap items-center gap-3">
        <p className="num text-sm text-muted" role="status" aria-atomic="true">{list.length} / {woerter.length}</p>
      </div>
      <div className="flex flex-wrap gap-4 text-sm" aria-hidden="true">
        <span><span className="art-badge art-der">der</span> {t('مذكر', 'masculine')}</span>
        <span><span className="art-badge art-die">die</span> {t('مؤنث', 'feminine')}</span>
        <span><span className="art-badge art-das">das</span> {t('محايد', 'neuter')}</span>
      </div>
      {list.length === 0 && <p className="rounded-2xl border border-line bg-card p-5">{t('مفيش كلمة مطابقة. جرّب كلمة أقصر أو امسح الفلتر.', 'No matching word. Try a shorter term or clear the filter.')}</p>}
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.slice(0, shown).map((w) => <WortCard key={`${w.de}-${w.cat}`} w={w} />)}
      </ul>
      {list.length > shown && (
        <button onClick={() => setShown(shown + PAGE)} className="min-h-11 w-full rounded-full border border-line bg-paper px-4 py-2 font-bold">
          {t('عرّض أكتر', 'Show more')} · <span dir="ltr" className="num inline-block">{list.length - shown}</span>
        </button>
      )}
    </div>
  );
}
