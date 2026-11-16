import Link from 'next/link';
import { topics, wordsOf, img } from '@/lib/data';
import { arWords } from '@/lib/arcount';
import { T } from '@/lib/i18n';
import { TopicName } from '@/components/L';

export const metadata = { title: 'Lessons – Deutschy' };

export default function Lessons() {
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold"><T ar="الدروس · المستوى A1" en="Lessons · Level A1" /></h1>
      <p className="text-muted"><T ar="كل درس موضوع واحد. افتح الدرس، شوف الكروت، وبعدين جرّب الألعاب على نفس الكلمات." en="Each lesson is one topic. Open it, study the cards, then play the games on the same words." /></p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((t, i) => {
          const ws = wordsOf(t.id);
          return (
            <Link key={t.id} href={`/lessons/${t.id}/`} className="flex overflow-hidden rounded-2xl border border-line bg-card hover:border-accent">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img(ws[0])} alt="" className="h-28 w-28 shrink-0 object-cover" width={112} height={112} loading="lazy" />
              <div className="p-4">
                <p className="num text-xs font-bold text-accent"><T ar={`الدرس ${i + 1}`} en={`Lesson ${i + 1}`} /></p>
                <p className="ar-title text-xl text-ink"><TopicName id={t.id} /></p>
                <p className="num text-sm text-muted"><T ar={`${arWords(ws.length)}`} en={`${ws.length} words`} /></p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
