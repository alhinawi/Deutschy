'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useT } from '@/lib/i18n';
import { useStore } from '@/lib/store';
import { levelProgress } from '@/lib/progress';
import type { Lvl } from '@/lib/grammar-types';

export default function CertificateView({ level }: { level: string }) {
  const t = useT();
  const { s, ready, patch } = useStore();
  const [name, setName] = useState('');
  if (!ready) return <p className="text-muted">…</p>;
  const p = levelProgress(s, level as Lvl);
  if (!p.passed) {
    return (
      <div className="mx-auto max-w-md space-y-3 rounded-2xl border border-line bg-card p-8 text-center">
        <p className="ar-title text-2xl font-bold">{t('الشهادة دي لسه مقفولة', 'This certificate is still locked')}</p>
        <Link href="/progress/" className="inline-block rounded-full bg-accent px-5 py-2.5 font-bold text-accent-ink">{t('تقدمي', 'My progress')}</Link>
      </div>
    );
  }
  const shown = s.name || name;
  const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      {!s.name && (
        <form onSubmit={(e) => { e.preventDefault(); if (name.trim()) patch({ name: name.trim() }); }} className="flex gap-2 print:hidden">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t('اكتب اسمك', 'Your name')} className="w-full rounded-xl border border-line bg-card px-4 py-3 outline-none focus:border-accent" />
          <button className="rounded-full bg-accent px-5 font-bold text-accent-ink">{t('حفظ', 'Save')}</button>
        </form>
      )}
      <div className="space-y-4 rounded-2xl border-4 border-double border-accent bg-card p-8 text-center">
        <p className="de text-sm font-bold uppercase tracking-widest text-accent">Deutschy</p>
        <p className="de text-3xl font-semibold">Zertifikat</p>
        <p className="text-muted">{t('بنشهد إن', 'This certifies that')}</p>
        <p dir="auto" className="de min-h-12 text-4xl font-bold">{shown || '…'}</p>
        <p className="text-muted">{t('أكمل بنجاح تمارين قواعد المستوى', 'has completed the grammar practice for level')}</p>
        <p className="num text-6xl font-bold text-accent">{level}</p>
        <p dir="ltr" className="num text-sm text-muted">{p.got} / {p.total} · {date}</p>
      </div>
      <button onClick={() => window.print()} className="rounded-full border border-line px-5 py-2 font-bold print:hidden">{t('اطبع أو احفظ PDF', 'Print or save as PDF')}</button>
    </div>
  );
}
