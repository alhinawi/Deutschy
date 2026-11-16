'use client';
import { useState } from 'react';
import Link from 'next/link';
import { words, type Word, glossOf, pluralText, sample } from '@/lib/data';
import { useStore, today } from '@/lib/store';
import { dueWords, practicedWords } from '@/lib/word-review';
import { grade } from '@/lib/srs';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';

type Card = { w: Word; opts: string[] };
const label = (w: Word) => `${w.art} ${w.de}`;
export default function WordReview() {
 const { s, ready, patch, award, setCard } = useStore();
 const t = useT(); const { lang } = useLang();
 const [deck, setDeck] = useState<Card[] | null>(null);
 const [i, setI] = useState(0); const [pick, setPick] = useState<string | null>(null);
 const [correct, setCorrect] = useState(0);
 if (!ready) return <p role="status">{t('بنحمّل تقدمك...', 'Loading your progress...')}</p>;
 const studied = practicedWords(s), due = dueWords(s);
 const daily = s.daily?.[today()] ?? 0;
 const goal = Math.max(1, s.goal || 50);
 const start = () => {
   const cards = due.slice(0, 20).map((w) => {
     const options = [...new Set(sample(words.filter((x) => x.id !== w.id && glossOf(x, lang) !== glossOf(w, lang)), words.length).map(label))].filter((x) => x !== label(w)).slice(0, 3);
     return { w, opts: sample([label(w), ...options], 4) };
   }); setDeck(cards); setI(0); setPick(null); setCorrect(0);
 };
 const q = deck?.[i];
 const answer = (option: string) => {
   if (!q || pick !== null) return;
   setPick(option); const ok = option === label(q.w);
   setCard(q.w.id, grade(s.srs?.[q.w.id], ok));
   award(ok ? 5 : 0, q.w.id, ok);
   if (ok) setCorrect((n) => n + 1);
 };
 return <div className="mx-auto max-w-3xl space-y-6">
   <h1 className="ar-title text-4xl font-bold">{t('مراجعة كلماتك المتباعدة', 'Spaced review of your words')}</h1>
   <p className="text-muted">{t('هنا الكلمات اللي جاوبت عليها أو بدأت جدول مذاكرتها بس. مفيش كلمات متعلّمة ولا إنجازات جاهزة. الصح بيأجل المراجعة 1، 2، 4، 8، 16، 32 يوم حسب مرحلة الكارت. الغلط بيفضل مستحق النهارده.', 'Only words you answered or scheduled through study appear here. No pre-learned words or sample achievements. Correct answers schedule reviews after 1, 2, 4, 8, 16 or 32 days by card stage. Misses remain due today.')}</p>
   <section className="space-y-3 rounded-2xl border border-line bg-card p-5">
     <h2 className="ar-title text-2xl font-bold">{t('هدف النهارده من تمرينك الفعلي', 'Today\'s goal from real activity')}</h2>
     <p dir="ltr" className="num font-bold">{daily} / {goal} XP</p>
     <div role="progressbar" aria-label={t('هدف الخبرة اليومي', 'Daily XP goal')} aria-valuemin={0} aria-valuemax={goal} aria-valuenow={Math.min(daily, goal)} className="h-3 overflow-hidden rounded-full bg-line"><div className="h-full bg-accent" style={{ width: `${Math.min(100, daily / goal * 100)}%` }} /></div>
     <p className="text-muted">{daily >= goal ? t('حققت هدفك النهارده.', 'You reached today\'s goal.') : t('فتح الصفحة أو كشف الإجابة مش بيزود النقط. الإجابة الصح هنا بتديك 5 XP. الهدف بيتجدد حسب تاريخ جهازك.', 'Opening the page or revealing an answer earns no points. A correct answer here earns 5 XP. The goal resets with your device\'s local date.')}</p>
     <fieldset><legend className="mb-2 text-sm">{t('اختار هدفك اليومي', 'Choose your daily goal')}</legend><div className="flex flex-wrap gap-2">{[20,50,100,200].map((g) => <button key={g} onClick={() => patch({ goal: g })} aria-pressed={goal === g} className={`rounded-full border px-4 py-2 ${goal === g ? 'border-accent bg-accent text-accent-ink' : 'border-line'}`}>{g} XP</button>)}</div></fieldset>
   </section>
   <p className="ar-title text-lg">{t(`كلمات متدرّب عليها: ${studied.length}. مستحق للمراجعة: ${due.length}.`, `Practiced words: ${studied.length}. Due for review: ${due.length}.`)}</p>
   {!deck ? <section className="space-y-3 rounded-2xl border border-line bg-card p-5">
     {due.length ? <button onClick={start} className="rounded-full bg-accent px-5 py-3 font-bold text-accent-ink">{t(`ابدأ (${Math.min(due.length,20)} كلمة)`, `Start (${Math.min(due.length,20)} words)`)}</button> : <><p>{studied.length ? t('كلماتك كلها لسه معادها مجاش. ارجع لما تستحق أو اتعلم كلمات تانية.', 'Your words are scheduled for later. Return when due or study more vocabulary.') : t('لسه مفيش كلمات متدرّب عليها. حل اختبار كلمات الأول عشان يتكوّن سجلك.', 'No practiced words yet. Answer a vocabulary quiz to build your record.')}</p><Link href="/lessons/" className="inline-block rounded-full border border-line px-5 py-2 font-bold">{t('افتح دروس الكلمات', 'Open vocabulary lessons')}</Link></>}
   </section> : q ? <section className="space-y-4 rounded-2xl border border-line bg-card p-5">
     <p dir="ltr" className="num text-sm text-muted">{i+1} / {deck.length}</p>
     <h2 className="ar-title text-2xl font-bold">{t('اختار الكلمة بأداتها', 'Choose the noun with its article')}</h2>
     <p className="ar-title text-xl">{glossOf(q.w, lang)}</p>
     <div className="grid gap-2">{q.opts.map((o) => <button key={o} disabled={pick !== null} dir="ltr" lang="de" onClick={() => answer(o)} className={`de rounded-xl border p-3 text-start text-lg ${pick !== null && o === label(q.w) ? 'border-good bg-good/10' : pick === o ? 'border-bad bg-bad/10' : 'border-line bg-paper'}`}>{o}</button>)}</div>
     {pick !== null && <div className="space-y-3" role="status"><p>{pick === label(q.w) ? t('صح. اتحدد ميعاد المراجعة الجاية.', 'Correct. Your next review is scheduled.') : t('الإجابة الصح متعلّمة فوق. الكلمة لسه مستحقة النهارده.', 'The correct answer is marked above. This word remains due today.')}</p><p dir="ltr" lang="de" className="de">{pluralText(q.w, lang)}</p><div className="flex flex-wrap gap-2"><button onClick={() => speak(label(q.w))} aria-label={t('اسمع الكلمة', 'Hear the word')} className="rounded-full border border-line p-3"><Speaker /></button><button onClick={() => { setI(i+1); setPick(null); }} className="rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{t('التالي', 'Next')}</button></div></div>}
   </section> : <section className="space-y-3 rounded-2xl border border-line bg-card p-5"><h2 className="ar-title text-2xl font-bold">{t('خلصت الجلسة', 'Session finished')}</h2><p>{t(`إجابات صح: ${correct} من ${deck.length}.`, `Correct answers: ${correct} of ${deck.length}.`)}</p><button onClick={() => setDeck(null)} className="rounded-full border border-line px-5 py-2">{t('ارجع للجدول', 'Back to schedule')}</button></section>}
   <p className="text-sm text-muted">{t('مواعيد الكروت والهدف من السجل الموجود في المتصفح ده. مسح البيانات ممكن يمسحهم. ده جدول تدريب، مش تقييم رسمي لحفظك.', 'Card dates and goals use this browser\'s saved record. Clearing its data can erase them. This is a study schedule, not an official memory assessment.')}</p>
 </div>;
}
