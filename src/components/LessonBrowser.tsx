'use client';
import Link from 'next/link';
import {useMemo,useRef,useState} from 'react';
import {topics,topicTitles,topicEn,wordsOf,img} from '@/lib/data';
import {arWords} from '@/lib/arcount';
import {useT} from '@/lib/i18n';
import {wordMatchesSearch,normalizeWordSearch} from '@/lib/word-search';
import {TopicName} from './L';
export default function LessonBrowser(){
 const t=useT();const [query,setQuery]=useState('');const searchInput=useRef<HTMLInputElement>(null);
 const filtered=useMemo(()=>{const q=normalizeWordSearch(query);return topics.map((topic,index)=>({topic,index,ws:wordsOf(topic.id)})).filter(({topic,ws})=>[topic.ar,topicTitles[topic.id],topicEn[topic.id]].some(title=>normalizeWordSearch(title??'').includes(q))||ws.some(w=>wordMatchesSearch(w,q)))},[query]);
 return <section className="space-y-4" aria-label={t('اختار درس حسب الموضوع','Choose a topic lesson')}>
  <label htmlFor="lesson-search" className="block font-semibold">{t('دوّر بعنوان الدرس أو كلمة ألماني أو عربي أو إنجليزي','Search by lesson title or a German, Arabic or English word')}</label>
  <input id="lesson-search" ref={searchInput} type="search" value={query} onChange={e=>setQuery(e.target.value)} aria-describedby="lesson-search-help" className="min-h-11 w-full rounded-xl border border-line bg-card p-3"/>
  <p id="lesson-search-help" className="text-sm text-muted">{t('البحث بيشمل أسماء المواضيع والكلمات ومعانيها بالإنجليزي وصيغ الجمع. رقم كل درس بيفضل ثابت حتى مع البحث.','Search covers topic names, lesson words, English meanings and plurals. Each lesson keeps its original number when filtered.')}</p>
  <div className="flex flex-wrap items-center gap-3"><p className="num text-sm text-muted" role="status" aria-atomic="true">{t(`الدروس الظاهرة: ${filtered.length} من ${topics.length}`,`Showing ${filtered.length} of ${topics.length} lessons`)}</p>{query&&<button type="button" onClick={()=>{setQuery('');searchInput.current?.focus()}} className="min-h-11 rounded-full border border-line px-4 py-2">{t('امسح البحث','Clear search')}</button>}</div>
  {filtered.length===0?<p className="rounded-2xl border border-line bg-card p-5">{t('مفيش دروس مطابقة. جرّب كلمة أقصر أو امسح البحث.','No matching lessons. Try a shorter word or clear the search.')}</p>:<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(({topic,index,ws})=><Link key={topic.id} href={`/lessons/${topic.id}/`} className="flex min-w-0 overflow-hidden rounded-2xl border border-line bg-card hover:border-accent">
   {/* eslint-disable-next-line @next/next/no-img-element */}
   <img src={img(ws[0])} alt="" className="h-28 w-28 shrink-0 object-cover" width={112} height={112} loading="lazy"/>
   <div className="min-w-0 p-4 [overflow-wrap:anywhere]"><p className="num text-xs font-bold text-accent">{t(`الدرس ${index+1}`,`Lesson ${index+1}`)}</p><p className="ar-title text-xl text-ink"><TopicName id={topic.id}/></p><p className="num text-sm text-muted">{t(arWords(ws.length),`${ws.length} words`)}</p></div>
  </Link>)}</div>}
 </section>
}
