import Link from 'next/link';
import { notFound } from 'next/navigation';
import { arWords } from '@/lib/arcount';
import { topics, topicTitles, wordsOf } from '@/lib/data';
import VocabularyQuiz from '@/components/VocabularyQuiz';
import WordCard from '@/components/WordCard';
import { T } from '@/lib/i18n';
import { gameHref } from '@/lib/game-links';
import { TopicName } from '@/components/L';

export const dynamicParams = false;
export const generateStaticParams = () => topics.map((t) => ({ topic: t.id }));

export default async function Topic({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const t = topics.find((x) => x.id === topic);
  if (!t) notFound();
  const ws = wordsOf(topic);
  const topicIndex = topics.findIndex(x=>x.id===topic);
  const neighbors = [{item:topics[topicIndex-1],index:topicIndex-1,previous:true},{item:topics[topicIndex+1],index:topicIndex+1,previous:false}].filter(x=>x.item);
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0 max-w-full">
          <Link href="/lessons/" className="text-sm text-muted hover:text-ink">← <T ar="كل الدروس" en="All lessons" /></Link>
          <h1 dir="ltr" lang="de" className="de mt-1 text-3xl font-semibold [overflow-wrap:anywhere] sm:text-4xl">{topicTitles[topic]}</h1>
          <p className="ar-title text-2xl text-muted"><TopicName id={topic} /> · <span className="num"><T ar={`${arWords(ws.length)}`} en={`${ws.length} words`} /></span></p>
        </div>
        <Link href={`/games/quiz/?topic=${topic}`} className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-ink"><T ar="اختبر نفسك في الدرس" en="Quiz yourself on this lesson" /></Link>
      </div>
      <nav aria-label="Lesson practice" className="rounded-2xl border border-line bg-card p-4 space-y-3">
        <h2 className="text-lg font-semibold"><T ar="درّب كلمات الدرس ده" en="Practise this lesson's words" /></h2>
        <p className="text-sm text-muted"><T ar="كل لعبة هنا بتستخدم كلمات الدرس ده بس." en="Each game here uses only this lesson's words." /></p>
        <div className="flex flex-wrap gap-2">{[
          ['flashcards','كروت المراجعة','Flashcards'],['quiz','اختبار الصور','Photo quiz'],['article','أداة التعريف','Articles'],['spelling','الهجاء','Spelling'],['memory','لعبة الذاكرة','Memory'],
        ].map(([game,ar,en])=><Link key={game} href={gameHref(game,topic)} className="min-h-11 inline-flex items-center rounded-full border border-line px-4 py-2 text-sm font-semibold hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"><T ar={ar} en={en}/></Link>)}</div>
      </nav>
      <nav aria-label="Neighboring lessons" className="grid gap-3 sm:grid-cols-2">{neighbors.map(({item,index,previous})=><Link key={item.id} rel={previous?'prev':'next'} href={`/lessons/${item.id}/`} className="min-h-11 min-w-0 rounded-2xl border border-line bg-card p-4 hover:border-accent [overflow-wrap:anywhere] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"><p className="text-sm font-semibold"><T ar={previous?'الدرس اللي فات':'الدرس اللي بعده'} en={previous?'Previous lesson':'Next lesson'}/> · <span className="num">{index+1}</span></p><p dir="ltr" lang="de" className="de mt-1 text-xl">{topicTitles[item.id]}</p><p className="text-sm text-muted"><TopicName id={item.id}/></p></Link>)}</nav>
      <VocabularyQuiz pool={ws} id={`topic-${topic}`} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{ws.map((w, n) => <WordCard key={w.id} w={w} first={n < 2} />)}</div>
    </div>
  );
}
