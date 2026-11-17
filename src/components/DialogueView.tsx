'use client';
import Link from 'next/link';
import GermanVoice from './GermanVoice';
import { useEffect,useState,useRef,useMemo } from 'react';
import { dialogues, type Dialogue } from '@/lib/dialogues';
import { useStore } from '@/lib/store';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';
import Mixed from './Mixed';
import RolePractice from './RolePractice';
import {practiceOptionOrder} from '@/lib/practice-options';
import {linkedPractice} from '@/lib/linked-practice';
import {dialogueEvidence} from '@/lib/dialogues-everyday';

export default function DialogueView({ conversation = false }: { conversation?: boolean } = {}) {
  const t = useT();
  const { lang } = useLang();
  const [open, setOpen] = useState<Dialogue | null>(null);
  const [lv, setLv] = useState('all');
  const [query,setQuery]=useState('');const searchInput=useRef<HTMLInputElement>(null);
  const filtered=useMemo(()=>{const q=query.trim().normalize('NFC').toLocaleLowerCase('de');return dialogues.filter(d=>(!conversation||['A1','A2'].includes(d.level))&&(lv==='all'||d.level===lv)&&[...d.title,...d.lines.flat()].join(' ').normalize('NFC').toLocaleLowerCase('de').includes(q))},[conversation,lv,query]);
  const available=dialogues.filter(d=>!conversation||['A1','A2'].includes(d.level)).length;
  useEffect(()=>{const sync=()=>{const d=dialogues.find(d=>d.id===location.hash.slice(1));if(d&&(!conversation||['A1','A2'].includes(d.level)))setOpen(d)};sync();window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync)},[conversation]);
  if (open) return <One key={open.id} d={open} back={() => {history.replaceState(null,'',location.pathname);setOpen(null)}} />;
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{conversation ? t('تدريب محادثة A1 و A2', 'A1 and A2 conversation practice') : t('حوارات', 'Dialogues')}</h1>
      <p className="text-muted">{t('اقرا حوار من الحياة اليومية، واسمعه لو الصوت متاح. استخدم الترجمة وقت الحاجة، وبعدين جاوب على 3 أسئلة فهم.', 'Read and listen to everyday dialogues with translation, then answer 3 comprehension questions.')}</p>
      <nav aria-label={t("مواقف يومية","Everyday situations")} className="flex flex-wrap gap-3">{[["im-kleidergeschaeft","المحل","Shop"],["beim-arzt-termin","الدكتور","Doctor"],["wohnungsbesichtigung","الشقة","Flat"]].map(([id,ar,en])=><button key={id} onClick={()=>setOpen(dialogues.find(d=>d.id===id)!)} className="min-h-11 rounded-full border border-line px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper">{t(ar,en)}</button>)}<Link className="min-h-11 rounded-full border border-line px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper" href="/egypt-dialogues/a1-reise/">{t("القطر","Train")}</Link></nav>
      <div className="space-y-2"><label htmlFor="dialogue-search" className="block font-semibold">{t('دوّر بعنوان أو كلمة ألماني أو عربي','Search by title or a German or Arabic word')}</label><input id="dialogue-search" ref={searchInput} type="search" value={query} onChange={e=>setQuery(e.target.value)} aria-describedby="dialogue-search-help" className="min-h-11 w-full rounded-xl border border-line bg-card p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"/><p id="dialogue-search-help" className="text-sm text-muted">{t('البحث في عناوين الحوارات وكلام الشخصيات، جوّه مجموعة التدريب اللي اخترتها. مسح البحث بس بيسيّب مجموعة التدريب.','Search covers dialogue titles and speaker lines within your selected practice group. Clearing only the query keeps your practice group.')}</p></div>
      <div className="flex flex-wrap gap-2">
        {(conversation ? ['all', 'A1', 'A2'] : ['all', 'A1', 'A2', 'B1']).map((l) => <button key={l} aria-pressed={lv === l} onClick={() => setLv(l)} className={`num min-h-11 rounded-full border px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${lv === l ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{l === 'all' ? t('الكل', 'All') : l}</button>)}
      </div>
      <div className="flex flex-wrap items-center gap-3"><p className="num text-sm text-muted" role="status" aria-atomic="true">{t(`الحوارات الظاهرة: ${filtered.length} من ${available}`,`Showing ${filtered.length} of ${available} dialogues`)}</p>{query&&<button type="button" onClick={()=>{setQuery('');searchInput.current?.focus()}} className="min-h-11 rounded-full border border-line px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper">{t('امسح البحث بس','Clear query only')}</button>}{(query||lv!=='all')&&<button type="button" onClick={()=>{setQuery('');setLv('all');searchInput.current?.focus()}} className="min-h-11 rounded-full border border-line px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper">{t('امسح البحث والفلتر','Clear search and filter')}</button>}</div>
      {filtered.length===0&&<p className="rounded-2xl border border-line bg-card p-5">{t('مفيش حوارات مطابقة. جرّب كلمة أقصر أو امسح البحث والفلتر.','No matching dialogues. Try a shorter word or clear the search and filter.')}</p>}
      <ul className="grid gap-3 sm:grid-cols-2">
        {filtered.map((d) => (
          <li key={d.id}><button onClick={() => {history.replaceState(null,'','#'+d.id);window.dispatchEvent(new HashChangeEvent('hashchange'));setOpen(d)}} className="min-h-11 w-full rounded-2xl border border-line bg-card p-4 text-start hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper">
            <span className="num text-xs font-bold text-accent">{d.level}</span>
            <span dir="ltr" lang="de" className="de block text-xl font-semibold">{d.title[0]}</span>
            <span className="ar-title block text-muted">{lang === 'ar' ? d.title[1] : `${d.lines.length} lines`}</span>
          </button></li>
        ))}
      </ul>
    </div>
  );
}

function One({ d, back }: { d: Dialogue; back: () => void }) {
  const t = useT();
  const { award } = useStore();
  const [tr, setTr] = useState(true);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [round,setRound]=useState(0);
  const locked=useRef(false);
  const q = d.q[i];
  const answer = (k: number) => { if (pick !== null || locked.current) return;locked.current=true; setPick(k); if (k === 0) setScore((s) => s + 1); award(k === 0 ? 8 : 0, `d:${d.id}:${i}`, k === 0); };
  const speakers = [...new Set(d.lines.map((l) => l[0]))];
  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <button onClick={back} className="inline-flex min-h-11 items-center rounded-lg px-2 text-sm text-muted hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper">← {t('كل الحوارات', 'All dialogues')}</button>
      <div>
        <span className="num rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent">{d.level}</span>
        <h1 className="de mt-2 min-w-0 max-w-full hyphens-auto text-3xl font-semibold [overflow-wrap:anywhere]" lang="de">{d.title[0]}</h1>
        <p className="ar-title text-lg text-muted">{d.title[1]}</p>
      </div>
      <GermanVoice text={d.lines.map(l=>l[1]).join(" ")}/><p className="text-sm text-muted">{t("حوار تخيلي للتدريب، مش نصيحة طبية أو عرض سكن أو سعر حقيقي.","Fictional practice dialogue, not medical advice, a housing offer or a live price.")}</p>
      {linkedPractice.find(p=>p.dialogue===d.id)&&<Link className="inline-flex min-h-11 items-center rounded-full border border-line px-5 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper" href={`/reading/${linkedPractice.find(p=>p.dialogue===d.id)!.reading}/`}>{t('اقرا نفس الموقف بكلمات وسمع وإملاء','Read this scenario with vocabulary, listening and dictation')}</Link>}
      <RolePractice key={d.id} d={d} />
      <button aria-pressed={tr} aria-controls="dialogue-lines" onClick={() => setTr(!tr)} className="min-h-11 rounded-full border border-line px-4 py-2 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper">{tr ? t('اخفي الترجمة', 'Hide Egyptian Arabic') : t('اعرض الترجمة', 'Show Egyptian Arabic')}</button>
      <ul id="dialogue-lines" className="space-y-2">
        {d.lines.map(([who, de, ar], k) => (
          <li key={k} className={`flex ${speakers.indexOf(who) === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[88%] rounded-2xl border p-3 ${speakers.indexOf(who) === 0 ? 'border-line bg-card' : 'border-accent/40 bg-paper'}`}>
              <div className="flex items-center justify-between gap-2">
                <p dir="ltr" className="num text-xs font-bold text-accent">{who}</p>
                <button onClick={() => speak(de)} aria-label={t('اسمع الجملة','Hear the sentence')} className="min-h-11 min-w-11 shrink-0 rounded-full border border-line p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"><Speaker /></button>
              </div>
              <p dir="ltr" lang="de" className="de min-w-0 hyphens-auto text-lg [overflow-wrap:anywhere]">{de}</p>
              {tr && <p dir="rtl" lang="ar" className="ar-title mt-1 text-sm text-muted"><Mixed text={ar} /></p>}
            </div>
          </li>
        ))}
      </ul>
      <section className="space-y-3 rounded-2xl border border-line bg-card p-5">
        <div className="flex items-center justify-between">
          <h2 className="ar-title text-2xl font-bold">{t('أسئلة', 'Questions')}</h2>
          <span dir="ltr" role="status" aria-live="polite" aria-atomic="true" aria-label={t(`السؤال ${Math.min(i + 1, d.q.length)} من ${d.q.length}`, `Question ${Math.min(i + 1, d.q.length)} of ${d.q.length}`)} className="num text-sm font-bold text-muted">{Math.min(i + 1, d.q.length)} / {d.q.length}</span>
        </div>
        {i >= d.q.length ? (
          <div className="space-y-3">
            <p role="status" aria-live="polite" aria-atomic="true" className="ar-title text-2xl">{t(`نتيجتك ${score} من ${d.q.length}`, `Your score: ${score} of ${d.q.length}`)}</p>
            <button onClick={() => { setI(0); setPick(null); setScore(0);setRound(r=>r+1);locked.current=false; }} className="min-h-11 rounded-full bg-accent px-5 py-2 font-bold text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">{t('أعد المحاولة', 'Try again')}</button>
          </div>
        ) : (
          <>
            <p dir="ltr" lang="de" className="de text-xl font-semibold">{q[0]}</p>
            <div className="grid gap-2">
              {practiceOptionOrder(`${d.id}:${i}:${q[0]}`,String(round)).map((k) => {
                const st = pick === null ? '' : k === 0 ? 'border-good border-2 bg-good/10' : pick === k ? 'border-bad bg-bad/10' : 'opacity-60';
                return <button dir="ltr" key={k} disabled={pick!==null} lang="de" onClick={() => answer(k)} className={`de min-h-11 rounded-xl border border-line bg-paper px-3 py-2.5 text-start text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card ${st}`}>{q[1 + k]}</button>;
              })}
            </div>
            {pick!==null&&<p role="status">{pick===0?t('صح.','Correct.'):t('راجع الإجابة الصح.','Check the correct answer.')}</p>}
            {pick!==null&&dialogueEvidence[d.id]?.[i]&&<aside className="space-y-2 rounded-xl border border-line p-4"><h3>{t('الدليل من الحوار','Evidence from the dialogue')}</h3><blockquote dir="ltr" lang="de" className="de text-lg">{dialogueEvidence[d.id][i]}</blockquote></aside>}
            {pick !== null && <button onClick={() => { setI(i + 1); setPick(null);locked.current=false; }} className="min-h-11 w-full rounded-full bg-accent py-2 font-bold text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">{i + 1 >= d.q.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button>}
          </>
        )}
      </section>
    </div>
  );
}
