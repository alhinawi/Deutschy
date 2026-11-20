'use client';
import {useMemo,useState} from 'react';
import Link from 'next/link';
import {animalGroups,animalIds} from '@/lib/animal-groups';
import {words,img,glossOf,pluralText} from '@/lib/data';
import {wordMatchesSearch} from '@/lib/word-search';
import {useLang,useT} from '@/lib/i18n';
import FilterDisclosure from './FilterDisclosure';
export default function AnimalBrowser(){
 const t=useT(),{lang}=useLang();const [group,setGroup]=useState('all'),[query,setQuery]=useState(''),[limit,setLimit]=useState(24);
 const all=useMemo(()=>words.filter(w=>animalIds.has(w.id)),[]);
 const chosen=animalGroups.find(g=>g.id===group);const allowed=chosen?new Set<string>(chosen.ids):null;
 const filtered=all.filter(w=>(!allowed||allowed.has(w.id))&&wordMatchesSearch(w,query));
 const reset=()=>setLimit(24);
 return <section aria-label={t('كلمات الحيوانات','Animal vocabulary')} className="space-y-5">
  <label htmlFor="animal-search" className="block font-bold">{t('دوّر بالألماني أو المصري أو الإنجليزي أو الجمع','Search German, Egyptian Arabic, English or plural')}</label>
  <input id="animal-search" type="search" value={query} onChange={e=>{setQuery(e.target.value);reset()}} className="min-h-11 w-full rounded-xl border border-line bg-card p-3"/>
  <FilterDisclosure activeCount={group!=='all'?1:0}>
   <fieldset><legend className="mb-2 font-bold">{t('اختار مجموعة','Choose a group')}</legend><div className="flex flex-wrap gap-2">{[{id:'all',ar:'كل الحيوانات',en:'All animals'},...animalGroups].map(g=><button key={g.id} type="button" aria-pressed={group===g.id} onClick={()=>{setGroup(g.id);reset()}} className={`min-h-11 rounded-full border px-4 py-2 ${group===g.id?'border-accent bg-accent text-accent-ink':'border-line bg-card'}`}>{t(g.ar,g.en)} <span className="num">({g.id==='all'?all.length:animalGroups.find(a=>a.id===g.id)?.ids.length})</span></button>)}</div></fieldset>
   {(query||group!=='all')&&<button type="button" onClick={()=>{setQuery('');setGroup('all');reset();document.getElementById('animal-search')?.focus()}} className="min-h-11 rounded-full border border-line px-4 py-2">{t('امسح البحث والفلاتر','Clear search and filters')}</button>}
  </FilterDisclosure>
  <p role="status" aria-atomic="true" className="num">{t(`النتائج: ${filtered.length}، المعروض: ${Math.min(limit,filtered.length)}`,`Results: ${filtered.length}; showing ${Math.min(limit,filtered.length)}`)}</p>
  {!filtered.length?<p>{t('مفيش حيوان مطابق. جرّب اسم تاني أو امسح الفلاتر.','No matching animal. Try another name or clear the filters.')}</p>:<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.slice(0,limit).map(w=><article key={w.id} className="min-w-0 overflow-hidden rounded-2xl border border-line bg-card">
   {/* eslint-disable-next-line @next/next/no-img-element */}
   <img src={img(w)} alt={`${w.art} ${w.de}`} loading="lazy" width={640} height={480} className="photo"/>
   <div className="space-y-2 p-4"><h2 dir="ltr" lang="de" className="de break-words text-2xl"><span className="text-accent">{w.art}</span> {w.de}</h2><p className="ar-title text-xl">{glossOf(w,lang)}</p>{w.plural!==''&&<p dir="ltr" lang="de" className="de text-sm text-muted">{pluralText(w,lang)}</p>}<Link href={`/lessons/${w.topic}/#word-${w.id}`} className="inline-flex min-h-11 items-center underline">{t('افتح الكارت في الدرس وتدرّب','Open this lesson card and practise')}</Link></div>
  </article>)}</div>}
  {limit<filtered.length&&<button type="button" onClick={()=>setLimit(n=>n+24)} className="min-h-11 rounded-full bg-accent px-5 py-3 text-accent-ink">{t('اعرض حيوانات أكتر','Show more animals')}</button>}
 </section>
}
