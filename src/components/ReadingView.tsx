'use client';
import {linkedPractice} from '@/lib/linked-practice';
import {dictationSet} from '@/lib/dictation';
import {readingEvidence} from '@/lib/reading-evidence';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import type { ReadingText } from '@/lib/reading';
import { useT } from '@/lib/i18n';
import { useStore } from '@/lib/store';
import { speak, stopSpeaking } from '@/lib/speak';
import Speaker from './Speaker';
import {practiceOptionOrder} from '@/lib/practice-options';

export default function ReadingView({ r }: { r: ReadingText }) {
  const t = useT();
  const { award } = useStore();
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState(false);
  const [audioError, setAudioError] = useState(false);
  useEffect(() => () => stopSpeaking(), []);
  const [show, setShow] = useState(false);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [round,setRound]=useState(0);
  const locked=useRef(false);
  const done = i >= r.q.length;
  const q = r.q[i];
  const evidence=readingEvidence[r.id]?.[i];
  const answer = (k: number) => {
    if (pick !== null || locked.current) return;
    locked.current=true;
    setPick(k);
    const ok = k === 0;
    if (ok) setScore((s) => s + 1);
    award(ok ? 8 : 0, `${listening ? 'l' : 'r'}:${r.id}:${i}`, ok);
  };
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Link href="/reading/" className="min-h-11 inline-flex items-center rounded-full text-sm text-muted hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper">← {t('القراءة', 'Reading')}</Link>
      <div>
        <span className="num rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent">{r.level}</span>
        <h1 className="de mt-2 break-words text-4xl font-semibold" lang="de">{r.title[0]}</h1>
        <p className="ar-title text-xl text-muted">{r.title[1]}</p>
      </div>
      {(r.id.startsWith('c1-') || r.id.startsWith('c2-') || r.id.startsWith('micro-') || r.id.startsWith('alltag-')) && <p className="text-sm text-muted">{t('نص أصلي بموقف افتراضي للتدريب، مش تقرير عن واقعة حقيقية.', 'Original fictional practice scenario, not a report of real events.')}</p>}
      <div className="flex flex-wrap gap-2">{[false, true].map((v) => <button key={String(v)} aria-pressed={listening === v} onClick={() => { stopSpeaking(); setListening(v); setTranscript(false); setShow(false); setI(0); setPick(null); setScore(0);setRound(r=>r+1);locked.current=false; }} className={`min-h-11 rounded-full border px-5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${listening === v ? 'border-accent bg-accent text-accent-ink' : 'border-line'}`}>{v ? t('تدريب السمع', 'Listening practice') : t('تدريب القراءة', 'Reading practice')}</button>)}</div>
      {listening && <section className="space-y-3 rounded-2xl border border-line bg-card p-5"><p>{t('اسمع الأول وجاوب من غير النص. الصوت حسب الأصوات الألماني المتاحة على جهازك.', 'Listen first and answer without the text. Speech uses the German voices available on your device.')}</p><div className="flex flex-wrap gap-2"><button onClick={async () => setAudioError(!(await speak(r.de.join(' '))))} className="min-h-11 flex items-center gap-2 rounded-full border border-line px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"><Speaker />{t('اسمع', 'Listen')}</button><button onClick={stopSpeaking} className="min-h-11 rounded-full border border-line px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">{t('وقف الصوت', 'Stop audio')}</button><button aria-expanded={transcript} aria-controls="reading-transcript" onClick={() => setTranscript(!transcript)} className="min-h-11 rounded-full border border-line px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">{transcript ? t('اخفي النص', 'Hide text') : t('اعرض النص', 'Show text')}</button></div></section>}
      {(!listening || transcript) && <article id="reading-transcript" dir="ltr" lang="de" className="de [overflow-wrap:anywhere] space-y-4 rounded-2xl border border-line bg-card p-5 text-xl leading-relaxed">
        {r.de.map((p, k) => <p key={k}>{p}</p>)}
        <button onClick={async () => setAudioError(!(await speak(r.de.join(' '))))} className="min-h-11 flex items-center gap-2 rounded-full border border-line px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"><Speaker />{t('اسمع النص', 'Listen')}</button>
      </article>}
      {audioError && <p role="status">{t("مفيش صوت ألماني متاح. تقدر تكمل قراءة من غير صوت.","No German voice is available. You can continue reading without audio.")}</p>}
      <button aria-expanded={show} aria-controls="reading-translation" onClick={() => setShow(!show)} className="min-h-11 rounded-full border border-line px-5 py-2 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper">{show ? t('اخفي الترجمة', 'Hide translation') : t('اعرض الترجمة', 'Show translation')}</button>
      {show && <div id="reading-translation" className="ar-title space-y-3 rounded-2xl border border-line bg-paper p-5 text-lg">{r.ar.map((p, k) => <p key={k}>{p}</p>)}</div>}
      {r.gloss && <details className="rounded-2xl border border-line bg-card p-4"><summary className="ar-title min-h-11 cursor-pointer rounded-lg text-xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">{t('كلمات تساعدك', 'Egyptian Arabic word help')}</summary><dl className="mt-3 grid gap-3 sm:grid-cols-2">{r.gloss.map(([de, ar]) => <div key={de}><dt dir="ltr" lang="de" className="de font-bold">{de}</dt><dd dir="rtl" lang="ar" className="ar-title text-muted">{ar}</dd></div>)}</dl></details>}
      {linkedPractice.find(p=>p.reading===r.id)&&<nav aria-label={t('كمل نفس الموقف','Continue this scenario')} className="flex flex-wrap gap-3"><Link className="min-h-11 inline-flex items-center rounded-full border border-line px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper" href={`/dialogues/#${linkedPractice.find(p=>p.reading===r.id)!.dialogue}`}>{t('اتمرن على الحوار','Practice the dialogue')}</Link><Link className="min-h-11 inline-flex items-center rounded-full border border-line px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper" href={`/dictation/#${dictationSet(r.level,r.id)[0]?.id||r.level}`}>{t('اسمع واكتب جمل النص','Listen and type the reading sentences')}</Link></nav>}
      <section className="space-y-3 rounded-2xl border border-line bg-card p-5">
        <div className="flex items-center justify-between">
          <h2 className="ar-title text-2xl font-bold">{t('أسئلة', 'Questions')}</h2>
          <span dir="ltr" className="num text-sm font-bold text-muted">{Math.min(i + 1, r.q.length)} / {r.q.length}</span>
        </div>
        {done ? (
          <div className="space-y-3">
            <p className="ar-title text-2xl">{t(`نتيجتك ${score} من ${r.q.length}`, `Your score: ${score} of ${r.q.length}`)}</p>
            <button onClick={() => { setI(0); setPick(null); setScore(0);setRound(r=>r+1);locked.current=false; }} className="rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{t('أعد المحاولة', 'Try again')}</button>
          </div>
        ) : (
          <>
            <p dir="ltr" className="de text-xl font-semibold" lang="de">{q[0]}</p>
            <div className="grid gap-2">
              {practiceOptionOrder(`${r.id}:${i}:${q[0]}`,String(round)).map((k) => {
                const state = pick === null ? '' : k === 0 ? 'border-good border-2 bg-good/10' : pick === k ? 'border-bad bg-bad/10' : '';
                return (
                  <button dir="ltr" key={k} disabled={pick!==null} onClick={() => answer(k)} lang="de" className={`de flex items-center justify-between gap-2 rounded-xl border border-line bg-paper px-3 py-2.5 text-start text-lg ${state}`}>
                    <span>{q[1 + k]}</span>
                    
            {pick !== null && k === 0 && <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-good" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label="correct"><path d="M5 12l5 5 9-10" /></svg>}
                    {pick === k && k !== 0 && <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-bad" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-label="wrong"><path d="M6 6l12 12M18 6L6 18" /></svg>}
                  </button>
                );
              })}
            </div>
            {pick !== null && <p role="status">{pick===0?t('صح.','Correct.'):t('راجع الإجابة الصح.','Check the correct answer.')}</p>}
            {pick !== null && evidence && <aside className="space-y-2 rounded-xl border border-line p-4" aria-label={t('دليل من النص','Evidence from the text')}><h3>{t('راجع الدليل من النص','Check the evidence from the text')}</h3><blockquote dir="ltr" lang="de" className="de text-lg">{evidence}</blockquote><p className="text-sm text-muted">{t('قارن معنى الجملة بالسؤال؛ الإجابة ممكن تعيد نفس المعنى بكلمات مختلفة.','Compare the sentence with the question; the answer may paraphrase the same meaning.')}</p></aside>}
            {pick !== null && (
              <button onClick={() => { setI(i + 1); setPick(null);locked.current=false; }} className="rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{i + 1 >= r.q.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button>
            )}
          </>
        )}
      </section>
    </div>
  );
}
