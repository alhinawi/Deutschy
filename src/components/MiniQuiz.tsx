'use client';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useStore } from '@/lib/store';
import { useT } from '@/lib/i18n';
import { speak,stopSpeaking } from '@/lib/speak';
import Speaker from './Speaker';
import Mixed from './Mixed';
import { useLang } from '@/lib/i18n';

// options[0] is the correct answer. hear: German text read aloud on request. note: short explanation shown after answering.
export type QItem = { prompt: string; hint?: string; options: string[]; hear?: string; note?: [string, string]; key: string };

const shuffle = <T,>(a: T[]) => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };

type Props = { make: () => QItem[]; game: string; size?: number };
export default function MiniQuiz(props: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <Quiz {...props} /> : <div className="min-h-72" aria-busy="true" />;
}
function Quiz({ make, game, size = 10 }: Props) {
  const t = useT();
  const promptId = useId();
  const hintId = useId();
  const promptFocus = useRef<HTMLParagraphElement>(null);
  const resultFocus = useRef<HTMLParagraphElement>(null);
  const { lang } = useLang();
  const { award, addScore } = useStore();
  const [run, setRun] = useState(0);
  const items = useMemo(() => make().slice(0, size), [run]); // eslint-disable-line react-hooks/exhaustive-deps
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const saved=useRef(false);
  const locked=useRef(false);
  const [audioError,setAudioError]=useState(false);
  useEffect(()=>()=>stopSpeaking(),[]);
  useEffect(()=>{if(items.length&&i>=items.length&&!saved.current){saved.current=true;addScore(game,score)}},[i,items.length,game,score,addScore]);
  useEffect(()=>{if(i>0||run>0){(i<items.length?promptFocus:resultFocus).current?.focus()}},[i,run,items.length]);
  const q = items[i];
  const opts = useMemo(() => (q ? shuffle(q.options) : []), [q]);
  if (!q) {
    return (
      <div className="space-y-3 rounded-2xl border border-line bg-card p-5">
        <p ref={resultFocus} tabIndex={-1} role="status" aria-live="polite" aria-atomic="true" className="ar-title text-2xl focus:outline-none">{t(`نتيجتك ${score} من ${items.length}`, `Your score: ${score} of ${items.length}`)}</p>
        <button onClick={() => { saved.current=false;locked.current=false; setAudioError(false); setRun(run + 1); setI(0); setScore(0); setPick(null); }} className="min-h-11 rounded-full bg-accent px-5 py-2 font-bold text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">{t('جولة جديدة', 'New round')}</button>
      </div>
    );
  }
  const answer = (o: string) => { if (pick !== null || locked.current) return;locked.current=true; setPick(o); const ok = o === q.options[0]; if (ok) setScore((s) => s + 1); award(ok ? 5 : 0, q.key, ok); };
  return (
    <div className="space-y-3 rounded-2xl border border-line bg-card p-5">
      <div className="flex items-center justify-between"><span dir="ltr" role="status" aria-live="polite" aria-atomic="true" aria-label={t(`السؤال ${i + 1} من ${items.length}`, `Question ${i + 1} of ${items.length}`)} className="num text-sm font-bold text-muted">{i + 1} / {items.length}</span>
        {q.hear && <button onClick={async () => setAudioError(!(await speak(q.hear!)))} aria-label={t("اسمع بالألماني", "Listen in German")} className="min-h-11 min-w-11 rounded-full border border-line px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"><Speaker /></button>}</div>
      <p ref={promptFocus} tabIndex={-1} id={promptId} dir="ltr" lang="de" className="de text-xl font-semibold focus:outline-none">{q.prompt}</p>
      {q.hint && <p id={hintId} className="ar-title text-sm text-muted"><Mixed text={q.hint} /></p>}
      <div role="group" aria-labelledby={promptId} aria-describedby={q.hint ? hintId : undefined} className="grid gap-2">
        {opts.map((o) => {
          const st = pick === null ? '' : o === q.options[0] ? 'border-good border-2 bg-good/10' : pick === o ? 'border-bad bg-bad/10' : '';
          return <button disabled={pick!==null} dir="ltr" lang="de" key={o} onClick={() => answer(o)} className={`de min-h-11 rounded-xl border border-line bg-paper px-3 py-2.5 text-start text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card ${st}`}>{o}</button>;
        })}
      </div>
      {audioError&&<p role="status">{t("مفيش صوت ألماني متاح. كمل قراءة لو النص ظاهر.","No German voice is available. Continue reading if text is shown.")}</p>}
      {pick!==null&&<p role="status" aria-live="polite" aria-atomic="true" dir="auto">{pick===q.options[0]?t("صح.","Correct."):<>{t("راجع الإجابة الصحيحة: ","Correct answer: ")}<bdi lang="de" dir="ltr">{q.options[0]}</bdi></>}</p>}
      {pick !== null && q.note && <p role="note" aria-label={t("شرح الإجابة", "Answer explanation")} dir="auto" className="ar-title text-sm text-muted leading-relaxed break-words">{lang === 'ar' ? <Mixed text={q.note[0]} /> : q.note[1]}</p>}
      {pick !== null && <button onClick={() => { stopSpeaking(); setAudioError(false); setI(i + 1); setPick(null);locked.current=false; }} className="min-h-11 w-full rounded-full bg-accent py-2 font-bold text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">{i + 1 >= items.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button>}
    </div>
  );
}
export { shuffle };
