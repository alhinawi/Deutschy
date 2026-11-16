'use client';
import { useState } from 'react';
import { kein, order, wq, wlist } from '@/lib/negation';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import { sample } from '@/lib/data';
import Speaker from './Speaker';
import Mixed from './Mixed';
import MiniQuiz, { type QItem } from './MiniQuiz';

export default function NegView() {
  const t = useT();
  const { lang } = useLang();
  const [tab, setTab] = useState<'rules' | 'w' | 'kein' | 'order' | 'wq'>('rules');
  const pill = (on: boolean) => `rounded-full border px-4 py-2 ${on ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`;
  const tabs = [['rules', t('القواعد', 'Rules')], ['w', t('W-Fragen', 'W-Fragen')], ['kein', 'nicht / kein'], ['order', t('ترتيب nicht', 'Word order')], ['wq', t('اختبار الأسئلة', 'Question quiz')]] as const;
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{t('النفي والأسئلة', 'Negation and questions')}</h1>
      <div className="flex flex-wrap gap-2">{tabs.map(([k, n]) => <button key={k} onClick={() => setTab(k)} className={pill(tab === k)}>{n}</button>)}</div>
      {tab === 'rules' && (
        <div className="space-y-4">
          {([
            ['kein', 'بننفي بيها الاسم اللي معاه ein أو من غير أداة. بتتصرف زي ein: kein, keine, keinen, keinem.', 'Negates a noun that has ein or no article. It declines like ein: kein, keine, keinen, keinem.', ['Ich habe kein Auto.', 'Wir haben keine Kinder.']],
            ['nicht', 'بننفي بيها الفعل أو الصفة أو الاسم اللي معاه der أو mein.', 'Negates a verb, an adjective, or a noun with der or mein.', ['Ich komme nicht.', 'Das ist nicht mein Auto.', 'Das Essen ist nicht gut.']],
            [t('مكان nicht', 'Position of nicht'), 'لو بننفي الجملة كلها: في الآخر. وقبل الصفة وقبل الجار والمجرور وقبل الجزء الأخير من الفعل.', 'Negating the whole sentence: at the end. Before an adjective, a prepositional phrase or the final verb part.', ['Ich verstehe das nicht.', 'Sie fährt nicht nach Berlin.', 'Er hat das Buch nicht gelesen.']],
            [t('سؤال نعم/لا', 'Yes/no questions'), 'الفعل في الأول. والإجابة: Ja أو Nein أو Doch. Doch بتستخدمها لما ترد على سؤال منفي.', 'The verb comes first. Answer: Ja, Nein or Doch. Doch contradicts a negative question.', ['Kommst du heute?', 'Kommst du nicht? Doch!']],
            ['W-Fragen', 'كلمة السؤال الأول وبعدها الفعل في المكان التاني.', 'The question word comes first and the verb is second.', ['Wo wohnst du?', 'Wann kommst du?']],
          ] as [string, string, string, string[]][]).map(([h, ar, en, ex]) => (
            <section key={h} className="space-y-2 rounded-2xl border border-line bg-card p-4">
              <h2 dir="auto" className="de text-xl font-semibold">{h}</h2>
              <p className="ar-title text-muted">{lang === 'ar' ? <Mixed text={ar} /> : en}</p>
              <ul dir="ltr" className="space-y-1">{ex.map((e) => <li key={e}><button onClick={() => speak(e)} lang="de" className="de flex items-center gap-2 text-start">{e}<Speaker className="h-4 w-4 shrink-0 text-muted" /></button></li>)}</ul>
            </section>
          ))}
        </div>
      )}
      {tab === 'w' && (
        <ul className="grid gap-2 sm:grid-cols-2">
          {wlist.map(([w, ar, en, ex]) => (
            <li key={w}><button onClick={() => speak(ex)} className="flex w-full items-center justify-between gap-2 rounded-2xl border border-line bg-card p-3 text-start">
              <span className="min-w-0"><span dir="ltr" lang="de" className="de block text-lg font-semibold">{w}</span><span className="ar-title block text-sm text-muted">{lang === 'ar' ? <Mixed text={ar} /> : en}</span><span dir="ltr" lang="de" className="de block text-sm">{ex}</span></span>
              <Speaker className="h-4 w-4 shrink-0 text-muted" />
            </button></li>
          ))}
        </ul>
      )}
      {tab === 'kein' && <MiniQuiz key="k" game="nicht-kein" make={() => sample(kein, 10).map(([s, a, x, y, z, n]): QItem => ({ key: `neg:${a}`, prompt: s, options: [a, x, y, z], note: [n, n] }))} />}
      {tab === 'order' && <><p className="ar-title text-muted">{t('اختار الجملة الصح.', 'Pick the correct sentence.')}</p><MiniQuiz key="o" game="nicht-stellung" make={() => sample(order, 6).map((o): QItem => ({ key: `neg:o:${o[0]}`, prompt: 'Welcher Satz ist richtig?', options: o, hear: undefined }))} size={6} /></>}
      {tab === 'wq' && <MiniQuiz key="w" game="w-fragen" make={() => sample(wq, 10).map(([s, a, x, y, z]): QItem => ({ key: `wf:${a}`, prompt: s, options: [a, x, y, z], hear: s.replace('___', a) }))} />}
    </div>
  );
}
