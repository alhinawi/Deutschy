import Link from 'next/link';
import { notFound } from 'next/navigation';
import { arWords } from '@/lib/arcount';
import { topics, topicTitles, wordsOf } from '@/lib/data';
import VocabularyQuiz from '@/components/VocabularyQuiz';
import WordCard from '@/components/WordCard';
import { T } from '@/lib/i18n';
import { TopicName } from '@/components/L';

export const dynamicParams = false;
export const generateStaticParams = () => topics.map((t) => ({ topic: t.id }));

export default async function Topic({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const t = topics.find((x) => x.id === topic);
  if (!t) notFound();
  const ws = wordsOf(topic);
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
      <VocabularyQuiz pool={ws} id={`topic-${topic}`} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{ws.map((w, n) => <WordCard key={w.id} w={w} first={n < 2} />)}</div>
    </div>
  );
}
