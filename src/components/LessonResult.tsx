'use client';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { useT } from '@/lib/i18n';
import { lessonDone, lessonKnown, lessonSteps } from '@/lib/lesson-path';
import { TopicName } from './L';

// End-of-lesson result screen: a per-lesson progress bar while learning,
// and once every word has one correct answer, a result card with one big
// "next lesson" button.
export default function LessonResult({ index, topic }: { index: number; topic: string }) {
  const t = useT();
  const { s, ready } = useStore();
  if (!ready) return <div aria-busy="true" className="min-h-24 animate-pulse rounded-2xl border border-line bg-card" />;
  const { known, total } = lessonKnown(s, topic);
  const done = lessonDone(s, topic);
  const next = lessonSteps[index + 1];
  return (
    <section aria-labelledby="lesson-result" className="space-y-4 rounded-2xl border border-line bg-card p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 id="lesson-result" className="ar-title text-xl font-bold">{done ? t('خلصت الدرس ده', 'Lesson complete') : t('تقدمك في الدرس', 'Your lesson progress')}</h2>
        <span dir="ltr" className="num text-sm font-bold text-muted">{known} / {total}</span>
      </div>
      <div role="progressbar" aria-label={t('تقدم الدرس', 'Lesson progress')} aria-valuemin={0} aria-valuemax={total} aria-valuenow={known} aria-valuetext={t(`${known} من ${total} كلمة عرفتها`, `${known} of ${total} words known`)} className="h-2 overflow-hidden rounded-full bg-line"><div aria-hidden="true" className="h-full bg-accent transition-[width]" style={{ width: `${total ? (known / total) * 100 : 0}%` }} /></div>
      {done ? (
        <div className="space-y-4 text-center">
          <p className="text-sm leading-7 text-muted">{t(`اتعلمت ${total} كلمة في الدرس ده. كل واحدة اتجاوبت صح مرة على الأقل.`, `You learned ${total} words in this lesson. Each was answered correctly at least once.`)}</p>
          {next ? (
            <Link data-next-lesson href={`/lessons/${next.topic}/`} className="flex min-h-14 items-center justify-center rounded-2xl bg-accent px-4 py-3 text-lg font-bold text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">
              {t(`الدرس اللي بعده: `, `Next lesson: `)}<TopicName id={next.topic} />
            </Link>
          ) : (
            <Link href="/levels/A2/" className="flex min-h-14 items-center justify-center rounded-2xl bg-accent px-4 py-3 text-lg font-bold text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">{t('خلصت كل دروس A1. ابدأ A2', 'All A1 lessons done. Start A2')}</Link>
          )}
        </div>
      ) : (
        <p className="text-sm leading-7 text-muted">{t('اعرف كل كلمة مرة على الأقل — من الكروت أو الألعاب أو الاختبار — عشان تخلص الدرس ويتفتح اللي بعده.', 'Know every word at least once — flashcards, games or the quiz — to finish the lesson and unlock the next one.')}</p>
      )}
    </section>
  );
}
