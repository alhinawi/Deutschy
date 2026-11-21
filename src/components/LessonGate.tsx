'use client';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { useT } from '@/lib/i18n';
import { lessonSteps, lessonUnlocked } from '@/lib/lesson-path';
import { TopicName } from './L';

// Gates a lesson page on the linear path: a lesson opens once the previous
// lesson is complete. Locked lessons say exactly what unlocks them.
export default function LessonGate({ index, children }: { index: number; children: React.ReactNode }) {
  const t = useT();
  const { s, ready } = useStore();
  if (!ready) return <div aria-busy="true" className="min-h-72 animate-pulse rounded-2xl border border-line bg-card" />;
  if (lessonUnlocked(s, index)) return <>{children}</>;
  const previous = lessonSteps[index - 1];
  return (
    <section aria-labelledby="lesson-locked" className="mx-auto max-w-md space-y-4 rounded-2xl border border-line bg-card p-8 text-center">
      <svg viewBox="0 0 24 24" className="mx-auto h-10 w-10 text-muted" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
      <h1 id="lesson-locked" className="ar-title text-2xl font-bold">{t('الدرس ده لسه مقفول', 'This lesson is still locked')}</h1>
      <p className="text-sm leading-7 text-muted">{t('الدروس بتتفتح بالترتيب. كمّل الدرس اللي قبله عشان يتفتح: كل كلمة فيه لازم تتجاوب صح مرة واحدة على الأقل.', 'Lessons unlock in order. Finish the previous lesson to open this one: every word in it needs one correct answer.')}</p>
      <Link href={`/lessons/${previous.topic}/`} className="flex min-h-14 items-center justify-center rounded-2xl bg-accent px-4 py-3 font-bold text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">
        {t(`كمّل الدرس ${previous.index + 1}: `, `Finish lesson ${previous.index + 1}: `)}<TopicName id={previous.topic} />
      </Link>
      <Link href="/lessons/" className="inline-flex min-h-11 items-center text-sm text-muted underline">{t('كل الدروس', 'All lessons')}</Link>
    </section>
  );
}
