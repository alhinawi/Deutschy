'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import NextStudy from '@/components/NextStudy';
import {localActivity} from '@/lib/local-activity';
import {useLocalClock} from '@/lib/use-local-clock';
import { useT } from '@/lib/i18n';
import { useStore, level, levelFloor } from '@/lib/store';
import { accuracy } from '@/lib/progress-lite';

const ProgressDetails = dynamic(() => import('@/components/ProgressDetails'), { ssr: false, loading: () => null });

const GOALS = [20, 50, 100, 200];
function Bar({ v, max }: { v: number; max: number }) {
  return <div className="h-2 overflow-hidden rounded-full bg-line"><div className="h-full bg-accent" style={{ width: `${max ? Math.min(100, (v / max) * 100) : 0}%` }} /></div>;
}
export default function Progress() {
  const t = useT();
  const { s, ready, patch } = useStore();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const now=useLocalClock();
  const activity=localActivity(s,now);
  if (!ready) return <p className="text-muted">…</p>;
  const day = s.daily[activity.today] ?? 0;
  const lv = level(s.xp);
  const ac = accuracy(s);
  const last7 = activity.recent;
  const peak = Math.max(s.goal, ...last7.map((d) => d.xp));
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <h1 className="ar-title text-4xl font-bold">{t('تقدمي', 'My progress')}</h1>
      <p className="rounded-xl border border-line bg-card p-4">{t('السجل ده على المتصفح والجهاز ده بس، مش متزامن. حذف بيانات المتصفح ممكن يمسحه. مستوى XP لعبة تنظيمية، مش مستوى لغة معتمد.','This record stays in this browser on this device and is not synced. Clearing browser data can erase it. XP level is a practice counter, not a certified language level.')}</p>
      <NextStudy />

      <section className="space-y-3 rounded-2xl border border-line bg-card p-5">
        <div className="flex items-center justify-between"><h2 className="ar-title text-2xl font-bold">{t('هدف النهارده', 'Daily goal')}</h2><span dir="ltr" className="num font-bold">{day} / {s.goal} XP</span></div>
        <Bar v={day} max={s.goal} />
        <p className="text-muted">{day >= s.goal ? t('حققت هدف النهارده.', 'You reached today’s goal.') : t(`فاضل ${s.goal - day} XP.`, `${s.goal - day} XP to go.`)}</p>
        <div className="flex flex-wrap gap-2">
          {GOALS.map((g) => <button key={g} onClick={() => patch({ goal: g })} className={`num rounded-full border px-4 py-1.5 font-bold ${s.goal === g ? 'border-accent bg-accent text-accent-ink' : 'border-line'}`}>{g}</button>)}
        </div>
        <div dir="ltr" aria-hidden="true" className="flex h-24 items-end gap-2 pt-2">
          {last7.map((d) => <div key={d.key} className="flex h-full flex-1 flex-col items-center justify-end gap-1"><div className="w-full flex-1 self-stretch"><div className="flex h-full items-end"><div className="w-full rounded-t bg-accent/70" style={{ height: `${peak ? (d.xp / peak) * 100 : 0}%`, minHeight: d.xp ? 4 : 1 }} /></div></div><span className="num text-[10px] text-muted">{d.key.slice(8)}</span></div>)}
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-line bg-card p-5" aria-labelledby="activity-heading">
        <h2 id="activity-heading" className="ar-title text-2xl font-bold">{t('آخر 7 أيام على الجهاز ده','Last 7 days on this device')}</h2>
        <p className="text-sm text-muted">{t('تواريخ حسب ساعة جهازك. الجدول بيسجل XP المكتسب، مش وقت المذاكرة. يوم من غير XP مش دليل إنك مااتمرنتش؛ المحاولة الغلط ممكن تسجل نشاط من غير نقاط.','Dates use your device clock. This table records earned XP, not study time. Zero XP does not prove no practice: an incorrect attempt can record activity without points.')}</p>
        <div dir="ltr" className="overflow-x-auto"><table className="w-full text-start"><caption className="sr-only">{t('XP اليومي المحفوظ','Saved daily XP')}</caption><thead><tr><th scope="col" className="p-2 text-start">{t('التاريخ','Date')}</th><th scope="col" className="p-2 text-end">XP</th></tr></thead><tbody>{last7.map(d=><tr key={d.key} className="border-t border-line"><th scope="row" className="num p-2 text-start font-normal"><time dateTime={d.key}>{d.key}</time></th><td className="num p-2 text-end">{d.xp}</td></tr>)}</tbody></table></div>
        <p>{activity.practicedToday?t('فيه محاولة مسجلة النهارده.','An attempt is recorded today.'):activity.currentStreak>0?t('آخر محاولة امبارح. السلسلة لسه مستمرة؛ مفيش محاولة مسجلة النهارده.','The last attempt was yesterday. The streak is still current; no attempt is recorded today.'):t('مفيش سلسلة حالية. أي سجل قديم لسه محفوظ.','No current streak. Any older record is still saved.')}</p>
        <p className="text-sm text-muted">{t('السلسلة بتزيد بأول محاولة في يوم جديد، حتى لو غلط؛ مش لازم تحقق هدف XP. الأرقام المعروضة مش بتغير السجل القديم.','A streak counts the first attempt on a new day, even if incorrect; it does not require reaching the XP goal. This display does not rewrite older records.')}</p>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[[t('مستوى XP', 'XP level'), lv], ['XP', s.xp], [t('السلسلة الحالية', 'Current streak'), activity.currentStreak], [t('دقة المحاولات', 'Attempt accuracy'), `${ac.pct}%`]].map(([l, v]) => (
          <div key={String(l)} className="rounded-2xl border border-line bg-card p-4"><p className="text-xs text-muted">{l}</p><p className="num text-3xl font-bold">{v}</p></div>
        ))}
        <div className="col-span-2 space-y-1 sm:col-span-4"><Bar v={s.xp - levelFloor(lv)} max={levelFloor(lv + 1) - levelFloor(lv)} /><p dir="ltr" className="num text-xs text-muted">{s.xp} / {levelFloor(lv + 1)} XP</p></div>
      </section>

      <details className="rounded-2xl border border-line bg-card p-5" onToggle={(event) => setDetailsOpen(event.currentTarget.open)}>
        <summary className="ar-title cursor-pointer text-xl font-bold">{t('تفاصيل التقدم حسب المستوى','Detailed progress by level')}</summary>
        {detailsOpen && <ProgressDetails />}
      </details>
    </div>
  );
}
