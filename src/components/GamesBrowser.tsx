'use client';
import Link from 'next/link';
import {useRef,useState} from 'react';
import {useLang,useT} from '@/lib/i18n';
import {topics,topicTitles,topicName,words,wordsOf} from '@/lib/data';
import {gameHref,vocabularyGames} from '@/lib/game-links';
const games = [
  { id: 'flashcards', t: 'Karteikarten', ar: 'كروت المراجعة', en: 'Flashcards', d: 'مراجعة متباعدة: الكلمة اللي بتعرفها بترجعلك بعد وقت أطول. +2 XP للي تعرفه.', de: 'Spaced repetition: words you know return after a longer gap. +2 XP for each known word.' },
  { id: 'quiz', t: 'Bild-Quiz', ar: 'اختبار الصور', en: 'Picture quiz', d: 'صورة وأربع اختيارات. لحد 10 أسئلة، +10 XP لكل إجابة صح.', de: 'One photo and four choices. Up to 10 questions, +10 XP per correct answer.' },
  { id: 'article', t: 'der · die · das', ar: 'اختار الأداة', en: 'Pick the article', d: 'كلمة وتلات أدوات. الأداة الصح هي اللي بتفرق. +10 XP.', de: 'One word and three articles. The right article is what matters. +10 XP.' },
  { id: 'spelling', t: 'Buchstabieren', ar: 'اكتب الكلمة', en: 'Spell it', d: 'صورة وتكتب الكلمة بالألماني. +15 XP لكل كلمة صح.', de: 'See a photo and type the German word. +15 XP per correct word.' },
  { id: 'memory', t: 'Memory', ar: 'لعبة الذاكرة', en: 'Memory', d: 'طابق الصورة بالكلمة. كل ما قلّت المحاولات زاد السكور.', de: 'Match the photo to the word. Fewer tries means a higher score.' },
  { id: 'build', t: 'Satzbau', ar: 'رتّب الجملة', en: 'Build the sentence', d: 'رتّب كلمات الجملة بالألماني من الترجمة. +12 XP لكل جملة.', de: 'Put the German words in order from the translation. +12 XP per sentence.' },
  { id: 'satzbau', t: 'Satzstellung', ar: 'قواعد ترتيب الجملة', en: 'Word order', d: 'رتّب جمل فيها الفعل تاني وجمل تابعة وPerfekt وأفعال منفصلة. فيه قاعدة بعد كل جملة. +12 XP.', de: 'Build sentences with verb-second, subordinate clauses, the Perfekt bracket and separable verbs. Each ends with the rule. +12 XP.' },
  { id: 'dictation', t: 'Diktat', ar: 'املا واسمع', en: 'Dictation', d: 'اسمع الجملة واكتبها. +15 XP لكل جملة.', de: 'Listen to the sentence and type it. +15 XP per sentence.' },
  { id: 'listening', t: 'Hören', ar: 'اسمع واختار', en: 'Listening', d: 'اسمع الجملة واختار معناها الصح. +10 XP لكل جملة.', de: 'Listen to the sentence and pick its meaning. +10 XP per sentence.' },
];

export default function GamesBrowser(){
 const t=useT();const {lang}=useLang();const [topic,setTopic]=useState('');const topicInput=useRef<HTMLSelectElement>(null);const count=topic?wordsOf(topic).length:words.length;
 return <section className="space-y-5" aria-label={t('اختار لعبة وموضوع','Choose a game and topic')}>
  <div className="space-y-3 rounded-2xl border border-line bg-card p-4">
   <label htmlFor="game-topic" className="block font-semibold">{t('موضوع ألعاب الكلمات','Vocabulary game topic')}</label>
   <select id="game-topic" ref={topicInput} value={topic} onChange={e=>setTopic(e.target.value)} aria-describedby="game-topic-help" className="min-h-11 w-full max-w-full rounded-xl border border-line bg-paper p-3">
    <option value="">{t('كل الكلمات','All words')}</option>{topics.map(tp=><option key={tp.id} value={tp.id}>{topicTitles[tp.id]} · {topicName(tp.id,lang)}</option>)}
   </select>
   <p id="game-topic-help" className="text-sm text-muted">{t('الموضوع بينطبق على كروت المراجعة والصور والأداة والكتابة والذاكرة بس. ألعاب الجمل بتفضل بمجموعات الجمل الخاصة بيها.','The topic applies only to flashcards, picture quiz, articles, spelling and memory. Sentence games keep their own sentence sets.')}</p>
   <div className="flex flex-wrap items-center gap-3"><p className="num text-sm text-muted" role="status" aria-atomic="true">{t(`كلمات الموضوع: ${count}`,`Words in scope: ${count}`)}</p>{topic&&<button type="button" onClick={()=>{setTopic('');topicInput.current?.focus()}} className="min-h-11 rounded-full border border-line px-4 py-2">{t('ارجع لكل الكلمات','Reset to all words')}</button>}</div>
  </div>
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{games.map(g=><Link key={g.id} href={gameHref(g.id,topic)} className="min-w-0 rounded-2xl border border-line bg-card p-6 hover:border-accent [overflow-wrap:anywhere]">
   <p className="text-xs font-bold text-muted">{vocabularyGames.has(g.id)?t('لعبة كلمات','Vocabulary game'):t('لعبة جمل','Sentence game')}</p><p dir="ltr" lang="de" className="de mt-2 text-2xl font-semibold">{g.t}</p><p className="ar-title text-xl text-accent">{t(g.ar,g.en)}</p><p className="mt-2 text-muted">{t(g.d,g.de)}</p>
  </Link>)}</div>
 </section>
}
