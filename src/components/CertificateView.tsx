'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useT } from '@/lib/i18n';
import { useStore } from '@/lib/store';
import { levelProgress, PASS } from '@/lib/progress';
import type { Lvl } from '@/lib/grammar-types';

export default function CertificateView({ level }: { level: string }) {
  const t = useT();
  const { s, ready, patch, storageError } = useStore();
  const [name, setName] = useState('');
  if (!ready) return <p role="status" className="text-muted">{t('بنحمّل سجل تدريبك…', 'Loading your practice record…')}</p>;
  const p = levelProgress(s, level as Lvl);
  const need = Math.ceil(p.total * PASS);
  const title = t('سجل تدريب القواعد', 'Grammar practice record');
  const qualification = t('ده سجل شخصي من سجل تدريبك، مش شهادة لغة معتمدة ولا إثبات مستوى. الإجابات ممكن تكون اتكررت في محاولات مختلفة.', 'This is a personal record from your practice record, not an accredited language certificate or proof of proficiency. Correct answers can come from repeated attempts.');
  if (!p.passed) {
    return (
      <div className="mx-auto max-w-md space-y-4 rounded-2xl border border-line bg-card p-6 text-center">
        <h1 className="ar-title text-2xl font-bold">{title}</h1>
        <p>{t('السجل لسه مش متاح. جاوب صح مرة واحدة على الأقل على 80% من أسئلة قواعد المجموعة دي.', "This record is not available yet. Answer at least 80% of this group's grammar questions correctly at least once.")}</p>
        <p dir="ltr" className="num font-bold">{level}: {p.got} / {p.total}</p>
        <p>{t(`فاضل ${Math.max(0, need - p.got)} سؤال مختلف بإجابة صح.`, `${Math.max(0, need - p.got)} more distinct questions need a correct answer.`)}</p>
        <p className="text-sm text-muted">{qualification}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href={`/levels/${level}/`} className="rounded-full bg-accent px-5 py-3 font-bold text-accent-ink">{t('اتدرّب على القواعد', 'Practice grammar')}</Link>
          <Link href="/progress/" className="rounded-full border border-line px-5 py-3 font-bold">{t('تقدمي', 'My progress')}</Link>
        </div>
      </div>
    );
  }
  const shown = s.name || name.trim();
  const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <h1 className="ar-title text-3xl font-bold print:hidden">{title}</h1>
      {!s.name && (
        <form onSubmit={(e) => { e.preventDefault(); if (name.trim()) patch({ name: name.trim() }); }} className="space-y-2 print:hidden">
          <label htmlFor="practice-name" className="block font-bold">{t('اسمك على السجل (اختياري)', 'Name on this record (optional)')}</label>
          <p id="practice-name-help" className="text-sm text-muted">{t('الاسم بيتحفظ في الحساب للمسجّل، وفي ذاكرة التبويب للضيف. تقدر تطبع من غير اسم.', 'Your name uses account storage when signed in, or tab memory for guests. You can print without a name.')}</p>
          <div className="flex flex-wrap gap-2">
            <input id="practice-name" aria-describedby="practice-name-help" autoComplete="name" dir="auto" maxLength={100} value={name} onChange={(e) => setName(e.target.value)} className="min-w-0 flex-1 rounded-xl border border-line bg-card px-4 py-3 outline-none focus:border-accent" />
            <button disabled={!name.trim()} className="rounded-full bg-accent px-5 py-3 font-bold text-accent-ink disabled:opacity-50">{t('احفظ الاسم', 'Save name')}</button>
          </div>
        </form>
      )}
      {storageError && <p role="status" className="rounded-xl border border-line p-3">{t('الاسم مش مضمون يتحفظ؛ السجل مش متاح أو محتاجة مراجعة. تقدر تطبع المعروض دلوقتي.', 'The name may not be saved: the record is unavailable or needs review. You can still print the current view.')}</p>}
      <section aria-label={title} className="space-y-4 rounded-2xl border-4 border-double border-accent bg-card p-5 text-center sm:p-8">
        <p className="de text-sm font-bold uppercase tracking-widest text-accent">Deutschy</p>
        <h2 lang="de" dir="ltr" className="de text-3xl font-semibold">Persönlicher Übungsnachweis</h2>
        {shown && <p dir="auto" className="de break-words text-3xl font-bold [overflow-wrap:anywhere]">{shown}</p>}
        <p className="text-muted">{t('أسئلة قواعد مختلفة ليها إجابة صح مرة واحدة على الأقل في سجل التدريب:', 'Distinct grammar questions answered correctly at least once in the practice record:')}</p>
        <p dir="ltr" className="num text-5xl font-bold text-accent">{p.got} / {p.total}</p>
        <p dir="ltr" className="num font-bold">{level} · {date}</p>
        <p className="text-sm text-muted">{qualification}</p>
      </section>
      <button onClick={() => window.print()} className="rounded-full border border-line px-5 py-3 font-bold print:hidden">{t('اطبع أو احفظ PDF', 'Print or save as PDF')}</button>
    </div>
  );
}
