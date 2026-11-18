'use client';

import Link from 'next/link';
import LocalDashboard from '@/components/LocalDashboard';
import { useT } from '@/lib/i18n';
import { useStore } from '@/lib/store';
import { LEVELS, PASS, cardsKnown, levelProgress, readingProgress, skills, wordProgress } from '@/lib/progress';

function Bar({ value, max }: { value: number; max: number }) {
  return <div className="h-2 overflow-hidden rounded-full bg-line"><div className="h-full bg-accent" style={{ width: `${max ? Math.min(100, value / max * 100) : 0}%` }} /></div>;
}

export default function ProgressDetails() {
  const t = useT();
  const { s, ready } = useStore();
  if (!ready) return <p role="status" className="py-4 text-muted">{t('بنفتح سجل التدريب...', 'Loading your practice record...')}</p>;

  const words = wordProgress(s);
  const readings = readingProgress(s);

  return <div className="mt-5 space-y-8">
    <LocalDashboard />

    <section className="space-y-3" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="ar-title text-2xl font-bold">{t('المهارات في كل مستوى', 'Skills by level')}</h2>
      <div className="grid grid-cols-3 gap-3">
        {[[t('أفضل سلسلة', 'Best streak'), s.best], [t('أيام التحدي', 'Challenge days'), Object.keys(s.challenge ?? {}).length], [t('كروت في صندوق 4 أو أعلى', 'Cards in box 4 or higher'), cardsKnown(s)]].map(([label, value]) => (
          <div key={String(label)} className="rounded-2xl border border-line bg-card p-3"><p className="text-xs text-muted">{label}</p><p className="num text-2xl font-bold">{value}</p></div>
        ))}
      </div>
      <div className="space-y-3">
        {LEVELS.map((level) => {
          const stats = skills(s, level);
          const rows: [string, { got: number; total: number }][] = [[t('القواعد', 'Grammar'), stats.grammar], [t('القراءة', 'Reading'), stats.reading], [t('الحوارات', 'Dialogues'), stats.dialogue], [t('الكتابة', 'Writing'), stats.writing]];
          return <div key={level} className="space-y-2 rounded-2xl border border-line bg-card p-4">
            <div className="flex items-center justify-between"><p className="num text-2xl font-bold">{level}</p><span className="num text-sm text-muted">{stats.exam !== undefined ? <>{t('الامتحان', 'Exam')} <bdi dir="ltr">{stats.exam}%</bdi></> : t('لسه ماتمتحنتش', 'No exam yet')}</span></div>
            {rows.filter(([, row]) => row.total > 0).map(([label, row]) => <div key={label} className="space-y-1"><div className="flex justify-between text-sm"><span>{label}</span><span dir="ltr" className="num text-muted">{row.got} / {row.total}</span></div><Bar value={row.got} max={row.total} /></div>)}
          </div>;
        })}
      </div>
      <Link href="/exam/" className="inline-block rounded-full border border-line px-5 py-2 text-sm font-bold hover:bg-card">{t('امتحان المستوى', 'Level exam')}</Link>
    </section>

    <section className="grid gap-3 sm:grid-cols-2">
      <div className="space-y-2 rounded-2xl border border-line bg-card p-5"><p className="ar-title text-xl font-bold">{t('الكلمات', 'Words')}</p><Bar value={words.known} max={words.total} /><p dir="ltr" className="num text-sm text-muted">{words.known} / {words.total}</p></div>
      <div className="space-y-2 rounded-2xl border border-line bg-card p-5"><p className="ar-title text-xl font-bold">{t('أسئلة القراءة', 'Reading questions')}</p><Bar value={readings.got} max={readings.total} /><p dir="ltr" className="num text-sm text-muted">{readings.got} / {readings.total}</p></div>
    </section>

    <section className="space-y-3">
      <h2 className="ar-title text-2xl font-bold">{t('سجلات تدريب القواعد', 'Grammar practice records')}</h2>
      <p className="text-muted">{t(`السجل بيتفتح لما تجاوب صح مرة واحدة على الأقل على ${Math.round(PASS * 100)}% من أسئلة المجموعة. ده سجل تدريب، مش إثبات مستوى لغة أو شهادة.`, `A practice record unlocks after at least ${Math.round(PASS * 100)}% of a group's questions have been answered correctly once. It is not a proficiency rating or certificate.`)}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {LEVELS.map((level) => {
          const progress = levelProgress(s, level);
          const need = Math.ceil(progress.total * PASS);
          return <div key={level} className="space-y-2 rounded-2xl border border-line bg-card p-5">
            <div className="flex items-center justify-between"><p className="num text-2xl font-bold">{level}</p><span dir="ltr" className="num text-sm text-muted">{progress.got} / {progress.total}</span></div>
            <Bar value={progress.got} max={progress.total} />
            {progress.passed ? <Link href={`/certificate/${level}/`} className="inline-block rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{t('اعرض سجل التدريب', 'View practice record')}</Link> : <div className="space-y-2"><p className="text-sm text-muted">{t(`فاضل ${Math.max(0, need - progress.got)} سؤال مختلف بإجابة صح.`, `${Math.max(0, need - progress.got)} more distinct questions need a correct answer.`)}</p><Link href={`/levels/${level}/`} className="inline-block rounded-full border border-line px-5 py-3 font-bold">{t('اتدرّب على القواعد', 'Practice grammar')}</Link></div>}
          </div>;
        })}
      </div>
    </section>
  </div>;
}
