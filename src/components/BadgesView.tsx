'use client';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { useT } from '@/lib/i18n';
import { badges, currentStreak } from '@/lib/badges';

export default function BadgesView() {
  const t = useT();
  const { s, ready } = useStore();
  if (!ready) return <p role="status">{t('بنحمّل تقدمك...', 'Loading your progress...')}</p>;
  const list = badges(s);
  const earned = list.filter((b) => b.earned).length;
  return <div className="space-y-6">
    <h1 className="ar-title text-4xl font-bold">{t('شارات إنجازك', 'Your badges')}</h1>
    <p className="text-muted">{t('كل شارة من تمرينك الفعلي، مش هدية جاهزة. البيانات دي من السجل الموجود في المتصفح ده. مسح بياناته ممكن يمسح التقدم المحلي.', 'Every badge comes from recorded practice, never sample achievements. These numbers use this browser\'s saved record. Clearing browser data can erase local progress.')}</p>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[
      [String(s.xp), 'XP', 'XP'],
      [String(currentStreak(s)), 'أيام متواصلة دلوقتي', 'Current streak'],
      [String(Math.max(s.best, s.streak)), 'أطول سلسلة أيام', 'Best streak'],
      [`${earned} / ${list.length}`, 'شارات مفتوحة', 'Badges earned'],
    ].map(([v, ar, en]) => <div key={en} className="rounded-2xl border border-line bg-card p-4"><p dir="ltr" className="num text-2xl font-bold">{v}</p><p className="ar-title text-muted">{t(ar, en)}</p></div>)}</div>
    <p className="ar-title text-muted">{t('شارة الأيام بتعتمد على أطول سلسلة محفوظة. السلسلة الحالية بتبقى 0 لو فات يوم كامل من غير تدريب. شارة الإجابات بتحسب المحاولات الصح، حتى لو السؤال اتكرر.', 'Streak badges use your saved best streak. Your current streak is 0 after a full day without practice. Answer badges count correct attempts, including repeated questions.')}</p>
    <ul className="grid gap-4 sm:grid-cols-2">{list.map((b) => <li key={b.id} className={`space-y-3 rounded-2xl border p-5 ${b.earned ? 'border-good bg-good/10' : 'border-line bg-card'}`}>
      <div className="flex items-center gap-3"><svg viewBox="0 0 48 48" className={`h-12 w-12 shrink-0 ${b.earned ? 'text-good' : 'text-muted'}`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="24" cy="18" r="12" /><path d="m16 28-3 15 11-6 11 6-3-15" />{b.earned ? <path d="m18 18 4 4 8-8" /> : <path d="M21 17v-2a3 3 0 0 1 6 0v2m-7 0h8v6h-8z" />}</svg><div><h2 className="ar-title text-xl font-bold">{b.target} {t(b.ar, b.en)}</h2><p className="text-sm text-muted">{b.earned ? t('اتفتحت', 'Earned') : t('لسه مقفولة', 'Locked')}</p></div></div>
      <div role="progressbar" aria-label={`${b.target} ${t(b.ar, b.en)}`} aria-valuemin={0} aria-valuemax={b.target} aria-valuenow={Math.min(b.got, b.target)} className="h-2 overflow-hidden rounded-full bg-line"><div className={`h-full ${b.earned ? 'bg-good' : 'bg-accent'}`} style={{ width: `${Math.min(100, b.got / b.target * 100)}%` }} /></div>
      <p dir="ltr" className="num text-sm text-muted">{Math.min(b.got, b.target)} / {b.target}</p>
    </li>)}</ul>
    <Link href="/daily/" className="inline-block rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{t('ابدأ تحدي النهارده', 'Start today\'s challenge')}</Link>
  </div>;
}
