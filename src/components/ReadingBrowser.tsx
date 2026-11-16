'use client';
import Link from 'next/link';
import {useMemo,useState} from 'react';
import {readings} from '@/lib/reading';
import {useT} from '@/lib/i18n';

const levels=['A1','A2','B1','B2','C1','C2'];
export default function ReadingBrowser(){
 const t=useT();
 const [query,setQuery]=useState('');
 const [level,setLevel]=useState('all');
 const filtered=useMemo(()=>{const q=query.trim().normalize('NFC').toLocaleLowerCase('de');return readings.filter(r=>(level==='all'||r.level===level)&&[...r.title,...r.de,...r.ar,...(r.gloss??[]).flat()].join(' ').normalize('NFC').toLocaleLowerCase('de').includes(q))},[level,query]);
 const clear=()=>{setQuery('');setLevel('all')};
 return <section className="space-y-4" aria-label={t('اختار نص للقراءة','Choose a reading text')}>
  <div className="grid gap-4 rounded-2xl border border-line bg-card p-4 sm:grid-cols-[1fr_auto]">
   <div className="min-w-0 space-y-2"><label htmlFor="reading-search" className="block font-semibold">{t('دوّر بعنوان أو كلمة ألماني أو عربي','Search by title or a German or Arabic word')}</label><input id="reading-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} className="min-h-11 w-full min-w-0 rounded-xl border border-line bg-paper p-3" /></div>
   <div className="min-w-0 space-y-2"><label htmlFor="reading-level" className="block font-semibold">{t('مجموعة التدريب التقريبية','Approximate practice group')}</label><select id="reading-level" value={level} onChange={e=>setLevel(e.target.value)} className="num min-h-11 w-full rounded-xl border border-line bg-paper p-3"><option value="all">{t('كل المجموعات','All groups')}</option>{levels.map(l=><option key={l} value={l}>{l}</option>)}</select></div>
  </div>
  <div className="flex flex-wrap items-center justify-between gap-3"><p className="num text-sm text-muted" role="status" aria-atomic="true">{t(`النصوص الظاهرة: ${filtered.length} من ${readings.length}`,`Showing ${filtered.length} of ${readings.length} texts`)}</p>{(query||level!=='all')&&<button onClick={clear} className="min-h-11 rounded-full border border-line px-4 py-2">{t('امسح البحث والفلتر','Clear search and filter')}</button>}</div>
  {filtered.length===0?<p className="rounded-2xl border border-line bg-card p-5">{t('مفيش نصوص مطابقة. جرّب كلمة أقصر أو امسح البحث والفلتر.','No matching texts. Try a shorter word or clear the search and filter.')}</p>:<div className="grid gap-4 sm:grid-cols-2">{filtered.map(r=><Link key={r.id} href={`/reading/${r.id}/`} className="min-w-0 rounded-2xl border border-line bg-card p-5 hover:border-accent [overflow-wrap:anywhere]">
   <span dir="ltr" className="num rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent">{r.level}</span>
   <h2 dir="ltr" lang="de" className="de mt-2 text-2xl font-semibold">{r.title[0]}</h2>
   <p className="ar-title text-lg text-muted">{t(r.title[1],r.de[0].slice(0,70)+(r.de[0].length>70?'…':''))}</p>
  </Link>)}</div>}
 </section>
}
