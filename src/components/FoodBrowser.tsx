'use client';
import {useMemo,useState} from 'react';
import Link from 'next/link';
import {foodGroups,drinkGroups,foodIds,drinkIds} from '@/lib/food-groups';
import {words,img,glossOf,pluralText} from '@/lib/data';
import {wordMatchesSearch} from '@/lib/word-search';
import {useLang,useT} from '@/lib/i18n';
export default function FoodBrowser({kind}:{kind:'food'|'drinks'}){
 const drinking=kind==='drinks',groups=drinking?drinkGroups:foodGroups,ids=drinking?drinkIds:foodIds,searchId=drinking?'drink-search':'food-search';
 const t=useT(),{lang}=useLang();const [group,setGroup]=useState('all'),[query,setQuery]=useState(''),[limit,setLimit]=useState(24);
 const all=useMemo(()=>words.filter(w=>ids.has(w.id)),[ids]);
 const chosen=groups.find(g=>g.id===group);const allowed=chosen?new Set<string>(chosen.ids):null;
 const filtered=all.filter(w=>(!allowed||allowed.has(w.id))&&wordMatchesSearch(w,query));
 const reset=()=>setLimit(24);
 return <section aria-label={drinking?t('كلمات المشروبات','Drink vocabulary'):t('كلمات الأكل','Food vocabulary')} className="space-y-5">
  <label htmlFor={searchId} className="block font-bold">{t('دوّر بالألماني أو المصري أو الإنجليزي أو الجمع','Search German, Egyptian Arabic, English or plural')}</label>
  <input id={searchId} type="search" value={query} onChange={e=>{setQuery(e.target.value);reset()}} className="min-h-11 w-full rounded-xl border border-line bg-card p-3"/>
  <label className="block space-y-2"><span className="font-bold">{t('اختار مجموعة','Choose a group')}</span><select aria-label={t('مجموعة الكلمات','Vocabulary group')} value={group} onChange={e=>{setGroup(e.target.value);reset()}} className="min-h-11 w-full rounded-xl border border-line bg-card p-3">{[{id:'all',ar:drinking?'كل المشروبات':'كل الأكل',en:drinking?'All drinks':'All food'},...groups].map(g=><option key={g.id} value={g.id}>{t(g.ar,g.en)} ({g.id==='all'?all.length:groups.find(a=>a.id===g.id)?.ids.length})</option>)}</select></label>
  <p role="status" aria-atomic="true" className="num">{t(`النتائج: ${filtered.length}، المعروض: ${Math.min(limit,filtered.length)}`,`Results: ${filtered.length}; showing ${Math.min(limit,filtered.length)}`)}</p>
  {(query||group!=='all')&&<button type="button" onClick={()=>{setQuery('');setGroup('all');reset();document.getElementById(searchId)?.focus()}} className="min-h-11 rounded-full border border-line px-4 py-2">{t('امسح البحث والفلاتر','Clear search and filters')}</button>}
  {!filtered.length?<p>{t('مفيش كلمة مطابقة. جرّب اسم تاني أو امسح الفلاتر.','No matching word. Try another name or clear the filters.')}</p>:<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.slice(0,limit).map(w=><article key={w.id} className="min-w-0 overflow-hidden rounded-2xl border border-line bg-card">
   {/* eslint-disable-next-line @next/next/no-img-element */}
   <img src={img(w)} alt={`${w.art} ${w.de}`} loading="lazy" width={640} height={480} className="photo"/>
   <div className="space-y-2 p-4"><h2 dir="ltr" lang="de" className="de break-words text-2xl"><span className="text-accent">{w.art}</span> {w.de}</h2><p className="ar-title text-xl">{glossOf(w,lang)}</p>{w.plural!==''&&<p dir="ltr" lang="de" className="de text-sm text-muted">{pluralText(w,lang)}</p>}<Link href={`/lessons/${w.topic}/#word-${w.id}`} className="inline-flex min-h-11 items-center underline">{t('افتح الكارت في الدرس وتدرّب','Open this lesson card and practise')}</Link></div>
  </article>)}</div>}
  {limit<filtered.length&&<button type="button" onClick={()=>setLimit(n=>n+24)} className="min-h-11 rounded-full bg-accent px-5 py-3 text-accent-ink">{t('اعرض كلمات أكتر','Show more words')}</button>}
 </section>
}
