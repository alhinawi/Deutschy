'use client';
import LocalDashboard from '@/components/LocalDashboard';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { useStore, level, levelFloor, today } from '@/lib/store';
import { LEVELS, skills, cardsKnown, challengeDays, levelProgress, wordProgress, readingProgress, accuracy, PASS } from '@/lib/progress';

const GOALS = [20, 50, 100, 200];
function Bar({ v, max }: { v: number; max: number }) {
  return <div className="h-2 overflow-hidden rounded-full bg-line"><div className="h-full bg-accent" style={{ width: `${max ? Math.min(100, (v / max) * 100) : 0}%` }} /></div>;
}
export default function Progress() {
  const t = useT();
  const { s, ready, patch } = useStore();
  if (!ready) return <p className="text-muted">…</p>;
  const day = s.daily[today()] ?? 0;
  const lv = level(s.xp);
  const wp = wordProgress(s), rp = readingProgress(s), ac = accuracy(s);
  const last7 = Array.from({ length: 7 }, (_, k) => { const d = new Date(); d.setDate(d.getDate() - (6 - k)); const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; return { key, v: s.daily[key] ?? 0 }; });
  const peak = Math.max(s.goal, ...last7.map((d) => d.v));
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <h1 className="ar-title text-4xl font-bold">{t('تقدمي', 'My progress')}</h1>
      <LocalDashboard />

      <section className="space-y-3 rounded-2xl border border-line bg-card p-5">
        <div className="flex items-center justify-between"><h2 className="ar-title text-2xl font-bold">{t('هدف النهارده', 'Daily goal')}</h2><span dir="ltr" className="num font-bold">{day} / {s.goal} XP</span></div>
        <Bar v={day} max={s.goal} />
        <p className="text-muted">{day >= s.goal ? t('حققت هدف النهارده.', 'You reached today’s goal.') : t(`فاضل ${s.goal - day} XP.`, `${s.goal - day} XP to go.`)}</p>
        <div className="flex flex-wrap gap-2">
          {GOALS.map((g) => <button key={g} onClick={() => patch({ goal: g })} className={`num rounded-full border px-4 py-1.5 font-bold ${s.goal === g ? 'border-accent bg-accent text-accent-ink' : 'border-line'}`}>{g}</button>)}
        </div>
        <div dir="ltr" className="flex h-24 items-end gap-2 pt-2">
          {last7.map((d) => <div key={d.key} className="flex h-full flex-1 flex-col items-center justify-end gap-1"><div className="w-full flex-1 self-stretch"><div className="flex h-full items-end"><div className="w-full rounded-t bg-accent/70" style={{ height: `${peak ? (d.v / peak) * 100 : 0}%`, minHeight: d.v ? 4 : 1 }} /></div></div><span className="num text-[10px] text-muted">{d.key.slice(8)}</span></div>)}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[[t('المستوى', 'Level'), lv], ['XP', s.xp], [t('السلسلة', 'Streak'), s.streak], [t('الدقة', 'Accuracy'), `${ac.pct}%`]].map(([l, v]) => (
          <div key={String(l)} className="rounded-2xl border border-line bg-card p-4"><p className="text-xs text-muted">{l}</p><p className="num text-3xl font-bold">{v}</p></div>
        ))}
        <div className="col-span-2 space-y-1 sm:col-span-4"><Bar v={s.xp - levelFloor(lv)} max={levelFloor(lv + 1) - levelFloor(lv)} /><p dir="ltr" className="num text-xs text-muted">{s.xp} / {levelFloor(lv + 1)} XP</p></div>
      </section>

      <section className="space-y-3">
        <h2 className="ar-title text-2xl font-bold">{t('المهارات في كل مستوى', 'Skills by level')}</h2>
        <div className="grid grid-cols-3 gap-3">
          {[[t('أفضل سلسلة', 'Best streak'), s.best], [t('أيام التحدي', 'Challenge days'), challengeDays(s)], [t('كروت محفوظة', 'Cards known'), cardsKnown(s)]].map(([l, v]) => (
            <div key={String(l)} className="rounded-2xl border border-line bg-card p-3"><p className="text-xs text-muted">{l}</p><p className="num text-2xl font-bold">{v}</p></div>
          ))}
        </div>
        <div className="space-y-3">
          {LEVELS.map((l) => {
            const k = skills(s, l);
            const rows: [string, { got: number; total: number }][] = [[t('القواعد', 'Grammar'), k.grammar], [t('القراءة', 'Reading'), k.reading], [t('الحوارات', 'Dialogues'), k.dialogue], [t('الكتابة', 'Writing'), k.writing]];
            return (
              <div key={l} className="space-y-2 rounded-2xl border border-line bg-card p-4">
                <div className="flex items-center justify-between"><p className="num text-2xl font-bold">{l}</p><span className="num text-sm text-muted">{k.exam !== undefined ? <>{t('الامتحان', 'Exam')} <bdi dir="ltr">{k.exam}%</bdi></> : t('لسه ماتمتحنتش', 'No exam yet')}</span></div>
                {rows.filter(([, v]) => v.total > 0).map(([n, v]) => (
                  <div key={n} className="space-y-1"><div className="flex justify-between text-sm"><span>{n}</span><span dir="ltr" className="num text-muted">{v.got} / {v.total}</span></div><Bar v={v.got} max={v.total} /></div>
                ))}
              </div>
            );
          })}
        </div>
        <Link href="/exam/" className="inline-block rounded-full border border-line px-5 py-2 text-sm font-bold hover:bg-card">{t('امتحان المستوى', 'Level exam')}</Link>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2 rounded-2xl border border-line bg-card p-5"><p className="ar-title text-xl font-bold">{t('الكلمات', 'Words')}</p><Bar v={wp.known} max={wp.total} /><p dir="ltr" className="num text-sm text-muted">{wp.known} / {wp.total}</p></div>
        <div className="space-y-2 rounded-2xl border border-line bg-card p-5"><p className="ar-title text-xl font-bold">{t('أسئلة القراءة', 'Reading questions')}</p><Bar v={rp.got} max={rp.total} /><p dir="ltr" className="num text-sm text-muted">{rp.got} / {rp.total}</p></div>
      </section>

      <section className="space-y-3">
        <h2 className="ar-title text-2xl font-bold">{t('شهادات المستويات', 'Level certificates')}</h2>
        <p className="text-muted">{t(`الشهادة بتتفتح لما تجاوب ${Math.round(PASS * 100)}% من تمارين قواعد المستوى صح.`, `A certificate unlocks when you answer ${Math.round(PASS * 100)}% of a level’s grammar practice correctly.`)}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {LEVELS.map((l) => {
            const p = levelProgress(s, l);
            return (
              <div key={l} className="space-y-2 rounded-2xl border border-line bg-card p-5">
                <div className="flex items-center justify-between"><p className="num text-2xl font-bold">{l}</p><span dir="ltr" className="num text-sm text-muted">{p.got} / {p.total}</span></div>
                <Bar v={p.got} max={p.total} />
                {p.passed
                  ? <Link href={`/certificate/${l}/`} className="inline-block rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{t('اعرض الشهادة', 'View certificate')}</Link>
                  : <p className="text-sm text-muted">{t('لسه مقفولة', 'Locked')}</p>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
