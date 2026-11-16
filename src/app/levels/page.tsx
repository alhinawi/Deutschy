import Link from 'next/link';
import { levels } from '@/lib/levels';
import { arWords, arLessons } from '@/lib/arcount';
import { words, topics } from '@/lib/data';
import { T } from '@/lib/i18n';
import { LevelText } from '@/components/L';

export const metadata = { title: 'Levels A1-C2 – Deutschy' };

export default function Levels() {
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold"><T ar="المستويات" en="Levels" /></h1>
      <p className="text-muted"><T ar="Deutschy بتغطي كل المستويات من A1 لحد C2. بنفتح كل مستوى لما محتواه يخلص ويتراجع، من غير محتوى فاضي أو مزيف." en="Deutschy covers every level from A1 to C2. A level opens once its content is finished and reviewed, with no empty or fake content." /></p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {levels.map((l) => (
          <Link key={l.id} href={`/levels/${l.id}/`} className={`rounded-2xl border bg-card p-6 ${l.status === 'live' ? 'border-accent' : 'border-line opacity-80'}`}>
            <div className="flex items-center justify-between">
              <p className="de num text-4xl font-semibold">{l.id}</p>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${l.status === 'live' ? 'bg-accent text-accent-ink' : 'border border-line text-muted'}`}>{l.status === 'live' ? <T ar="متاح" en="Open" /> : <T ar="قريباً" en="Soon" />}</span>
            </div>
            <p className="ar-title mt-1 text-xl text-accent"><LevelText id={l.id} f="name" /></p>
            <p className="mt-2 text-muted"><LevelText id={l.id} f="desc" /></p>
            {l.status === 'live' && <p className="num mt-3 text-sm font-bold"><T ar={`${arLessons(topics.length)} · ${arWords(words.length)} بصور`} en={`${topics.length} lessons · ${words.length} words with photos`} /></p>}
          </Link>
        ))}
      </div>
    </div>
  );
}
