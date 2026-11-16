'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { exercises } from '@/lib/exercises';
import { grammarOf } from '@/lib/grammar';
import { useStore } from '@/lib/store';
import { useLang, useT } from '@/lib/i18n';
import Mixed from './Mixed';

const order = (n: number, seed: number) => { const perms = [[0, 1, 2], [1, 2, 0], [2, 0, 1], [0, 2, 1], [1, 0, 2], [2, 1, 0]]; return perms[(seed * 7 + n * 3) % 6]; };

export default function ReviewView() {
  const t = useT();
  const { lang } = useLang();
  const { s, ready, award } = useStore();
  const [round,setRound]=useState(0);
  const [done, setDone] = useState<Record<string, number>>({});
  const list = useMemo(() => {
    if (!ready) return [];
    const out: { key: string; topic: string; i: number }[] = [];
    for (const [key, v] of Object.entries(s.seen)) {
      const m = /^g:(.+):(\d+)$/.exec(key);
      if (!m || v.bad <= v.ok) continue;
      if (exercises[m[1]]?.[Number(m[2])]) out.push({ key, topic: m[1], i: Number(m[2]) });
    }
    return out;
    // the list is fixed when the page opens so answered items stay visible
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready,round]);
  if (!ready) return <p className="text-muted">…</p>;
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{t('راجع أخطاءك', 'Review your mistakes')}</h1>
      <p className="text-muted">{t('دي أسئلة القواعد اللي إجاباتك الغلط فيها أكتر من الصح في السجل المحفوظ. الإجابة الصح بتزوّد عداد الصح، مش بتمسح تاريخ الغلط. القائمة ثابتة للجولة؛ حدثها عشان تشوف اللي لسه محتاج مراجعة.', 'These grammar exercises have more saved wrong answers than correct ones. A correct answer adds to the correct count; it does not erase past errors. The round stays fixed. Refresh to see which exercises still need review.')}</p>
      <p className="text-sm text-muted">{t('السجل ده على المتصفح والجهاز ده، مش تشخيص مستوى. صفحة المراجعة اليومية بتجمع أنواع تانية من الأسئلة المحفوظة.','This browser/device record is not a proficiency diagnosis. Daily review also covers other supported saved question types.')}</p><div className="flex flex-wrap gap-3"><button onClick={()=>{setDone({});setRound(r=>r+1)}} className="rounded-full border border-line px-5 py-3">{t('حدث قائمة الجولة','Refresh round list')}</button><Link className="rounded-full border border-line px-5 py-3" href="/review/daily/">{t('المراجعة اليومية الأوسع','Wider daily review')}</Link></div>
      {list.length === 0 ? (
        <div className="space-y-3 rounded-2xl border border-line bg-card p-6">
          <p className="ar-title text-xl">{t('مفيش أخطاء للمراجعة دلوقتي.', 'Nothing to review right now.')}</p>
          <Link href="/grammar/" className="inline-block rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{t('ابدأ تمرين قواعد', 'Practise grammar')}</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {list.map(({ key, topic, i }) => {
            const it = exercises[topic][i];
            const pick = done[key];
            const g = grammarOf(topic);
            const opts = order(i, topic.length).map((k) => ({ k, text: it[1 + k] }));
            return (
              <section key={key} className="space-y-3 rounded-2xl border border-line bg-card p-5">
                {g && <Link href={`/grammar/${topic}/`} className="num text-xs font-bold text-accent">{g.level} · {lang === 'ar' ? g.title[0] : g.title[1]}</Link>}
                <p className="review-counts num text-sm">{t("صح: ","Correct: ")}{s.seen[key]?.ok??0} · {t("غلط: ","Wrong: ")}{s.seen[key]?.bad??0}</p>
                <p className="de num text-xl font-semibold" lang="de">{it[0]}</p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {opts.map(({ k, text }) => {
                    const state = pick === undefined ? '' : k === 0 ? 'border-good border-2 bg-good/10' : pick === k ? 'border-bad bg-bad/10' : '';
                    return <button key={k} disabled={pick !== undefined} onClick={() => { setDone((d) => ({ ...d, [key]: k })); award(k === 0 ? 5 : 0, key, k === 0); }} className={`de num rounded-xl border border-line bg-paper px-3 py-2.5 text-lg ${state}`} lang="de">{text}</button>;
                  })}
                </div>
                {pick !== undefined && <p className="ar-title text-lg text-muted">{lang === 'ar' ? <Mixed text={it[4]} /> : it[5]}</p>}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
