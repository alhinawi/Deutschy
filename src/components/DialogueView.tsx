'use client';
import { useState } from 'react';
import { dialogues, type Dialogue } from '@/lib/dialogues';
import { useStore } from '@/lib/store';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';
import Mixed from './Mixed';
import RolePractice from './RolePractice';

const order = (n: number, seed: number) => [[0, 1, 2], [1, 2, 0], [2, 0, 1], [0, 2, 1], [1, 0, 2], [2, 1, 0]][(seed * 5 + n * 3) % 6];

export default function DialogueView({ conversation = false }: { conversation?: boolean } = {}) {
  const t = useT();
  const { lang } = useLang();
  const [open, setOpen] = useState<Dialogue | null>(null);
  const [lv, setLv] = useState('all');
  if (open) return <One d={open} back={() => setOpen(null)} />;
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{conversation ? t('تدريب محادثة A1 و A2', 'A1 and A2 conversation practice') : t('حوارات', 'Dialogues')}</h1>
      <p className="text-muted">{t('اقرا واسمع حوارات من الحياة اليومية، مع الترجمة، وبعدها 3 أسئلة فهم.', 'Read and listen to everyday dialogues with translation, then answer 3 comprehension questions.')}</p>
      <div className="flex flex-wrap gap-2">
        {(conversation ? ['all', 'A1', 'A2'] : ['all', 'A1', 'A2', 'B1']).map((l) => <button key={l} onClick={() => setLv(l)} className={`num rounded-full border px-4 py-2 ${lv === l ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{l === 'all' ? t('الكل', 'All') : l}</button>)}
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {dialogues.filter((d) => (!conversation || ['A1', 'A2'].includes(d.level)) && (lv === 'all' || d.level === lv)).map((d) => (
          <li key={d.id}><button onClick={() => setOpen(d)} className="w-full rounded-2xl border border-line bg-card p-4 text-start hover:border-accent">
            <span className="num text-xs font-bold text-accent">{d.level}</span>
            <span className="de block text-xl font-semibold">{d.title[0]}</span>
            <span className="ar-title block text-muted">{lang === 'ar' ? d.title[1] : `${d.lines.length} lines`}</span>
          </button></li>
        ))}
      </ul>
    </div>
  );
}

function One({ d, back }: { d: Dialogue; back: () => void }) {
  const t = useT();
  const { lang } = useLang();
  const { award } = useStore();
  const [tr, setTr] = useState(true);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const q = d.q[i];
  const answer = (k: number) => { if (pick !== null) return; setPick(k); if (k === 0) setScore((s) => s + 1); award(k === 0 ? 8 : 0, `d:${d.id}:${i}`, k === 0); };
  const speakers = [...new Set(d.lines.map((l) => l[0]))];
  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <button onClick={back} className="text-sm text-muted hover:text-ink">← {t('كل الحوارات', 'All dialogues')}</button>
      <div>
        <span className="num rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent">{d.level}</span>
        <h1 className="de mt-2 text-3xl font-semibold" lang="de">{d.title[0]}</h1>
        <p className="ar-title text-lg text-muted">{d.title[1]}</p>
      </div>
      <RolePractice key={d.id} d={d} />
      <button onClick={() => setTr(!tr)} className="rounded-full border border-line px-4 py-2 text-sm font-bold">{tr ? t('اخفي الترجمة', 'Hide translation') : t('اعرض الترجمة', 'Show translation')}</button>
      <ul className="space-y-2">
        {d.lines.map(([who, de, ar], k) => (
          <li key={k} className={`flex ${speakers.indexOf(who) === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[88%] rounded-2xl border p-3 ${speakers.indexOf(who) === 0 ? 'border-line bg-card' : 'border-accent/40 bg-paper'}`}>
              <p dir="ltr" className="num text-xs font-bold text-accent">{who}</p>
              <div className="flex items-start gap-2">
                <p dir="ltr" lang="de" className="de text-lg">{de}</p>
                <button onClick={() => speak(de)} aria-label="Speak" className="shrink-0 rounded-full border border-line px-2 py-0.5"><Speaker /></button>
              </div>
              {tr && <p className="ar-title mt-1 text-sm text-muted">{lang === 'ar' ? <Mixed text={ar} /> : ''}</p>}
            </div>
          </li>
        ))}
      </ul>
      <section className="space-y-3 rounded-2xl border border-line bg-card p-5">
        <div className="flex items-center justify-between">
          <h2 className="ar-title text-2xl font-bold">{t('أسئلة', 'Questions')}</h2>
          <span dir="ltr" className="num text-sm font-bold text-muted">{Math.min(i + 1, d.q.length)} / {d.q.length}</span>
        </div>
        {i >= d.q.length ? (
          <div className="space-y-3">
            <p className="ar-title text-2xl">{t(`نتيجتك ${score} من ${d.q.length}`, `Your score: ${score} of ${d.q.length}`)}</p>
            <button onClick={() => { setI(0); setPick(null); setScore(0); }} className="rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{t('أعد المحاولة', 'Try again')}</button>
          </div>
        ) : (
          <>
            <p dir="ltr" lang="de" className="de text-xl font-semibold">{q[0]}</p>
            <div className="grid gap-2">
              {order(i, d.id.length).map((k) => {
                const st = pick === null ? '' : k === 0 ? 'border-good border-2 bg-good/10' : pick === k ? 'border-bad bg-bad/10' : 'opacity-60';
                return <button dir="ltr" key={k} lang="de" onClick={() => answer(k)} className={`de rounded-xl border border-line bg-paper px-3 py-2.5 text-start text-lg ${st}`}>{q[1 + k]}</button>;
              })}
            </div>
            {pick !== null && <button onClick={() => { setI(i + 1); setPick(null); }} className="w-full rounded-full bg-accent py-2 font-bold text-accent-ink">{i + 1 >= d.q.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button>}
          </>
        )}
      </section>
    </div>
  );
}
