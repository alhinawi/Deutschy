import {topicPhoto} from '@/lib/lesson-photos';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { arWords } from '@/lib/arcount';
import { levels, levelOf, topicLevel } from '@/lib/levels';
import { topics, wordsOf } from '@/lib/data';
import { T } from '@/lib/i18n';
import { LevelText, TopicName } from '@/components/L';
import LevelGrammar from '@/components/LevelGrammar';

export const dynamicParams = false;
export const generateStaticParams = () => levels.map((l) => ({ level: l.id }));

export default async function LevelPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const l = levelOf(level);
  if (!l) notFound();
  const ts = topics.filter((t) => topicLevel(t.id) === l.id);
  return (
    <div className="space-y-6">
      <Link href="/levels/" className="text-sm text-muted hover:text-ink">← <T ar="كل المستويات" en="All levels" /></Link>
      <h1 className="ar-title text-4xl font-bold"><span className="de num">{l.id}</span> · <LevelText id={l.id} f="name" /></h1>
      <p className="text-lg text-muted"><LevelText id={l.id} f="desc" /></p>
      {ts.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ts.map((t, i) => {
            const ws = wordsOf(t.id);
            return (
              <Link key={t.id} href={`/lessons/${t.id}/`} className="flex overflow-hidden rounded-2xl border border-line bg-card hover:border-accent">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={topicPhoto(t.id)} alt="" className="h-28 w-28 shrink-0 object-cover" width={112} height={112} loading="lazy" />
                <div className="p-4">
                  <p className="num text-xs font-bold text-accent">{l.id} · <T ar={`درس ${i + 1}`} en={`Lesson ${i + 1}`} /></p>
                  <p className="ar-title text-xl text-ink"><TopicName id={t.id} /></p>
                  <p className="num text-sm text-muted"><T ar={`${arWords(ws.length)}`} en={`${ws.length} words`} /></p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      {l.id === 'B1' && <section className="space-y-3 rounded-2xl border border-line bg-card p-5"><h2 className="ar-title text-2xl font-bold"><T ar="ابدأ تدريبات B1" en="Start B1 practice" /></h2><div className="flex flex-wrap gap-2">{[['/b1/', 'القواعد', 'Grammar'], ['/b1/wortschatz/', 'الكلمات', 'Vocabulary'], ['/b1/writing/', 'الكتابة', 'Writing'], ['/reading/b1-reparaturtreff/', 'قراءة وسمع', 'Reading and listening']].map(([href, ar, en]) => <Link key={href} href={href} className="rounded-full border border-line px-4 py-2 font-bold"><T ar={ar} en={en} /></Link>)}</div></section>}
      {l.id === 'B2' && <section className="space-y-3 rounded-2xl border border-line bg-card p-5"><h2 className="ar-title text-2xl font-bold"><T ar="ابدأ تدريبات B2" en="Start B2 practice" /></h2><div className="flex flex-wrap gap-2">{[['/b2/', 'القواعد', 'Grammar'], ['/b2/wortschatz/', 'الكلمات', 'Vocabulary'], ['/b2/writing/', 'الكتابة', 'Writing'], ['/reading/b2-bibliothek/', 'قراءة وسمع', 'Reading and listening'], ['/level-check/B2/', 'مراجعة مختلطة', 'Mixed check']].map(([href, ar, en]) => <Link key={href} href={href} className="rounded-full border border-line px-4 py-2 font-bold"><T ar={ar} en={en} /></Link>)}</div></section>}
      {l.id === 'C1' && <section className="space-y-3 rounded-2xl border border-line bg-card p-5"><h2 className="ar-title text-2xl font-bold"><T ar="ابدأ تدريبات C1" en="Start C1 practice" /></h2><div className="flex flex-wrap gap-2">{[['/c1/', 'القواعد', 'Grammar'], ['/c1/wortschatz/', 'الكلمات', 'Vocabulary'], ['/c1/writing/', 'الكتابة', 'Writing'], ['/reading/c1-kennzahlen/', 'قراءة وسمع', 'Reading and listening'], ['/level-check/C1/', 'مراجعة مختلطة', 'Mixed check']].map(([href, ar, en]) => <Link key={href} href={href} className="rounded-full border border-line px-4 py-2 font-bold"><T ar={ar} en={en} /></Link>)}</div></section>}
      {l.id === 'C2' && <section className="space-y-3 rounded-2xl border border-line bg-card p-5"><h2 className="ar-title text-2xl font-bold"><T ar="ابدأ تدريبات C2" en="Start C2 practice" /></h2><div className="flex flex-wrap gap-2">{[['/c2/', 'القواعد', 'Grammar'], ['/c2/wortschatz/', 'الكلمات', 'Vocabulary'], ['/c2/writing/', 'الكتابة', 'Writing'], ['/reading/c2-uebersetzung/', 'قراءة وسمع', 'Reading and listening'], ['/level-check/C2/', 'مراجعة مختلطة', 'Mixed check']].map(([href, ar, en]) => <Link key={href} href={href} className="rounded-full border border-line px-4 py-2 font-bold"><T ar={ar} en={en} /></Link>)}</div></section>}
      <LevelGrammar level={l.id} />
    </div>
  );
}
