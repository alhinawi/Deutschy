'use client';
import { useMemo, useRef, useState } from 'react';
import {photoLicenseUrl} from '@/lib/photo-license';
import {wordMatchesSearch} from '@/lib/word-search';
import { words } from '@/lib/data';
import { useT } from '@/lib/i18n';
const PAGE_SIZE = 40;
export default function CreditsBrowser() {
  const t = useT();
  const searchInput = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const filtered = useMemo(() => words.filter(w => wordMatchesSearch(w,query,[w.photo.file,w.photo.author])), [query]);
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages - 1);
  return <section className="space-y-4" aria-label={t('ابحث في حقوق الصور', 'Browse photo credits')}>
    <label htmlFor="credit-search" className="block">{t('دوّر باسم الكلمة أو المصوّر أو الملف', 'Search by word, photographer or file')}</label>
    <input type="search" ref={searchInput} aria-describedby="credit-search-help" id="credit-search" value={query} onChange={e => { setQuery(e.target.value); setPage(0); }} className="w-full rounded-xl border border-line bg-card p-3" />
    <p id="credit-search-help" className="text-sm text-muted">{t('دوّر بالألماني أو العربي أو المعنى الإنجليزي أو الجمع أو بيانات الصورة، في كل الصفحات. مسح البحث بيرجّعك لأول صفحة.', 'Search German, Arabic, English meanings, plurals and photo details across all pages. Clearing search returns to the first page.')}</p>
    {query && <button type="button" className="min-h-11 rounded-full border border-line px-4 py-2" onClick={() => {setQuery('');setPage(0);searchInput.current?.focus();}}>{t('امسح البحث', 'Clear search')}</button>}
    <p className="num text-sm text-muted" role="status" aria-atomic="true">{t(`النتائج: ${filtered.length} · الصفحة ${current + 1} من ${pages}`, `Results: ${filtered.length} · Page ${current + 1} of ${pages}`)}</p>
    <div dir="ltr" className="overflow-x-auto rounded-2xl border border-line bg-card" tabIndex={0} role="region" aria-label={t('جدول حقوق الصور، يتحرك بالعرض', 'Photo credits table, scroll horizontally')}>
      <table className="w-full text-start text-sm" dir="ltr">
        <caption className="p-3 text-left text-muted">{t('حقوق الصور وروابط الملفات الأصلية', 'Photo credits and original source links')}</caption>
        <thead><tr className="border-b border-line text-left text-muted">{['Word', 'File', 'Author', 'License'].map(h => <th scope="col" lang="en" key={h} className="p-3">{h}</th>)}</tr></thead>
        <tbody>{filtered.slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE).map(w => <tr key={w.id} className="border-b border-line last:border-0">
          <th scope="row" lang="de" className="p-3 de text-left font-normal">{w.art} {w.de}</th>
          <td className="p-3"><a aria-label={t(`الصورة الأصلية لـ ${w.art} ${w.de}: ${w.photo.file}`, `Original photo for ${w.art} ${w.de}: ${w.photo.file}`)} className="underline" href={w.photo.commons} target="_blank" rel="noreferrer">{w.photo.file}</a></td>
          <td className="p-3">{w.photo.author || '-'}</td>
          <td className="p-3">{photoLicenseUrl(w.photo.license) ? <a href={photoLicenseUrl(w.photo.license)} target="_blank" rel="noreferrer" className="underline">{w.photo.license}</a> : w.photo.license}{w.photo.model && <span className="block text-xs text-muted">Photo of a physical 3D-printed model.</span>}{w.photo.padding&&<span className="block text-xs text-muted">{t('اتضافت مساحة فاضية حوالين الصورة؛ الأصل في الرابط.','Neutral padding added; original linked.')}</span>}{'modified' in w.photo && <span className="block text-xs text-muted">Cropped; original linked.</span>}</td>
        </tr>)}</tbody>
      </table>
    </div>
    {filtered.length === 0 && <p>{t('مفيش نتائج. جرّب كلمة أقصر أو امسح البحث.', 'No results. Try a shorter term or clear the search.')}</p>}
    <div className="flex flex-wrap gap-3" role="group" aria-label={t('صفحات حقوق الصور', 'Photo credit pages')}>
      <button type="button" disabled={current === 0} onClick={() => setPage(0)} className="rounded-full border border-line px-5 py-3 disabled:opacity-50">{t('أول صفحة', 'First page')}</button>
      <button disabled={current === 0} onClick={() => setPage(current - 1)} className="rounded-full border border-line px-5 py-3 disabled:opacity-50">{t('الصفحة اللي قبلها', 'Previous page')}</button>
      <button disabled={current >= pages - 1} onClick={() => setPage(current + 1)} className="rounded-full border border-line px-5 py-3 disabled:opacity-50">{t('الصفحة اللي بعدها', 'Next page')}</button>
      <button type="button" disabled={current >= pages - 1} onClick={() => setPage(pages - 1)} className="rounded-full border border-line px-5 py-3 disabled:opacity-50">{t('آخر صفحة', 'Last page')}</button>
    </div>
  </section>;
}
