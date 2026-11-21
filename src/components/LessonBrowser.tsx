'use client';
import {topicPhoto} from '@/lib/lesson-photos';
import Link from 'next/link';
import {useMemo,useRef,useState} from 'react';
import {topics,topicTitles,topicEn,wordsOf,img,glossOf} from '@/lib/data';
import {arWords} from '@/lib/arcount';
import {useT} from '@/lib/i18n';
import {useStore} from '@/lib/store';
import {wordMatchesSearch,normalizeWordSearch} from '@/lib/word-search';
import {lessonUnits,lessonUnlocked,lessonDone,unitProgress} from '@/lib/lesson-path';
import {TopicName} from './L';
export default function LessonBrowser(){
 const t=useT();const [query,setQuery]=useState('');const searchInput=useRef<HTMLInputElement>(null);
 const {s,ready}=useStore();
 const filtered=useMemo(()=>{const q=normalizeWordSearch(query);return topics.map((topic,index)=>({topic,index,ws:wordsOf(topic.id)})).filter(({topic,ws})=>[topic.ar,topicTitles[topic.id],topicEn[topic.id]].some(title=>normalizeWordSearch(title??'').includes(q))||ws.some(w=>wordMatchesSearch(w,q)))},[query]);
 const card=({topic,index,ws}:{topic:(typeof topics)[number];index:number;ws:ReturnType<typeof wordsOf>})=>{
  const locked=ready&&!lessonUnlocked(s,index);const done=ready&&lessonDone(s,topic.id);
  return <div key={topic.id} className="space-y-2"><Link key={topic.id} href={`/lessons/${topic.id}/`} aria-label={locked?t(`الدرس ${index+1} مقفول`,`Lesson ${index+1} locked`):undefined} className={`relative flex min-w-0 overflow-hidden rounded-2xl border border-line bg-card hover:border-accent ${locked?'opacity-70':''}`}>
   {/* eslint-disable-next-line @next/next/no-img-element */}
   <img src={query.trim()?img(ws.find(w=>wordMatchesSearch(w,query))??ws[0]):topicPhoto(topic.id)} alt="" className="h-28 w-28 shrink-0 object-cover" width={112} height={112} loading="lazy"/>
   <div className="min-w-0 p-4 [overflow-wrap:anywhere]"><p className="num text-xs font-bold text-accent">{t(`الدرس ${index+1}`,`Lesson ${index+1}`)}</p><p className="ar-title text-xl text-ink"><TopicName id={topic.id}/></p><p className="num text-sm text-muted">{t(arWords(ws.length),`${ws.length} words`)}</p></div>
   {locked&&<span role="img" aria-label={t('مقفول','Locked')} className="absolute end-2 top-2 rounded-full border border-line bg-paper p-1.5"><svg viewBox="0 0 24 24" className="h-4 w-4 text-muted" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span>}
   {done&&<span role="img" aria-label={t('تم','Done')} className="absolute end-2 top-2 rounded-full bg-accent p-1.5 text-accent-ink"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg></span>}
  </Link>{query.trim()&&ws.some(w=>wordMatchesSearch(w,query))&&<ul className="space-y-1">{ws.filter(w=>wordMatchesSearch(w,query)).slice(0,3).map(w=><li key={w.id}><Link href={`/lessons/${w.topic}/#word-${w.id}`} className="flex min-h-11 flex-wrap items-center gap-x-2 rounded-xl border border-line px-3 py-2 underline"><span dir="ltr" lang="de" className="de">{w.art} {w.de}</span><span>{glossOf(w,'ar')} · {glossOf(w,'en')}</span></Link></li>)}</ul>}</div>};
 return <section className="space-y-4" aria-label={t('اختار درس حسب الموضوع','Choose a topic lesson')}>
  <label htmlFor="lesson-search" className="block font-semibold">{t('دوّر بعنوان الدرس أو كلمة ألماني أو عربي أو إنجليزي','Search by lesson title or a German, Arabic or English word')}</label>
  <input id="lesson-search" ref={searchInput} type="search" value={query} onChange={e=>setQuery(e.target.value)} aria-describedby="lesson-search-help" className="min-h-11 w-full rounded-xl border border-line bg-card p-3"/>
  <p id="lesson-search-help" className="text-sm text-muted">{t('البحث بيشمل أسماء المواضيع والكلمات ومعانيها بالإنجليزي وصيغ الجمع. رقم كل درس بيفضل ثابت حتى مع البحث.','Search covers topic names, lesson words, English meanings and plurals. Each lesson keeps its original number when filtered.')}</p>
  <div className="flex flex-wrap items-center gap-3"><p className="num text-sm text-muted" role="status" aria-atomic="true">{t(`الدروس الظاهرة: ${filtered.length} من ${topics.length}`,`Showing ${filtered.length} of ${topics.length} lessons`)}</p>{query&&<button type="button" onClick={()=>{setQuery('');searchInput.current?.focus()}} className="min-h-11 rounded-full border border-line px-4 py-2">{t('امسح البحث','Clear search')}</button>}</div>
  <p className="text-sm text-muted">{t('الدروس بتتفتح بالترتيب: خلّص كل كلمات درس عشان يتفتح اللي بعده.','Lessons unlock in order: finish every word of a lesson to open the next one.')}</p>
  {filtered.length===0?<p className="rounded-2xl border border-line bg-card p-5">{t('مفيش دروس مطابقة. جرّب كلمة أقصر أو امسح البحث.','No matching lessons. Try a shorter word or clear the search.')}</p>:query.trim()?<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(card)}</div>:<div className="space-y-6">{lessonUnits.map(unit=>{const p=ready?unitProgress(s,unit):{done:0,total:unit.lessons.length};return <section key={unit.index} aria-label={t(unit.ar,unit.en)} className="space-y-3"><div className="flex items-center justify-between gap-3"><h2 className="text-lg font-bold">{t(unit.ar,unit.en)}</h2><span dir="ltr" className="num text-xs font-bold text-muted">{p.done} / {p.total}</span></div><div role="progressbar" aria-label={t(`تقدم ${unit.ar}`,`${unit.en} progress`)} aria-valuemin={0} aria-valuemax={p.total} aria-valuenow={p.done} className="h-1.5 overflow-hidden rounded-full bg-line"><div aria-hidden="true" className="h-full bg-accent transition-[width]" style={{width:`${p.total?(p.done/p.total)*100:0}%`}}/></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{unit.lessons.map(l=>card(filtered.find(f=>f.topic.id===l.topic)!))}</div></section>})}</div>}
 </section>
}
