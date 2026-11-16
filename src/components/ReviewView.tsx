'use client';
import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { exercises } from '@/lib/exercises';
import { grammarOf } from '@/lib/grammar';
import { useStore } from '@/lib/store';
import { useLang, useT } from '@/lib/i18n';
import Mixed from './Mixed';
import {practiceOptionOrder} from '@/lib/practice-options';

export default function ReviewView() {
  const t = useT();
  const { lang } = useLang();
  const { s, ready, award } = useStore();
  const [round,setRound]=useState(0);
  const answered=useRef(new Set<string>());
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
  if (!ready) return <p role="status" className="text-muted">{t("بنحمّل تقدمك...","Loading your progress...")}</p>;
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{t('راجع أخطاءك', 'Review your mistakes')}</h1>
      <p className="text-muted">{t('دي أسئلة القواعد اللي إجاباتك الغلط فيها أكتر من الصح في السجل المحفوظ. الإجابة الصح بتزوّد عداد الصح، مش بتمسح تاريخ الغلط. القائمة بتفضل زي ما هي طول الجولة. اضغط على تحديث القائمة عشان تشوف الأسئلة اللي لسه محتاجة مراجعة.', 'These grammar exercises have more saved wrong answers than correct ones. A correct answer adds to the correct count; it does not erase past errors. The round stays fixed. Refresh to see which exercises still need review.')}</p>
      <p className="text-sm text-muted">{t('السجل ده على المتصفح والجهاز ده، مش تشخيص مستوى. صفحة المراجعة اليومية بتجمع أنواع تانية من الأسئلة المحفوظة.','This browser/device record is not a proficiency diagnosis. Daily review also covers other supported saved question types.')}</p><div className="flex flex-wrap gap-3"><button onClick={()=>{answered.current.clear();setDone({});setRound(r=>r+1)}} className="rounded-full border border-line px-5 py-3">{t('حدث قائمة الجولة','Refresh round list')}</button><Link className="rounded-full border border-line px-5 py-3" href="/review/daily/">{t('المراجعة اليومية الأوسع','Wider daily review')}</Link></div>
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
            const opts = practiceOptionOrder(`${topic}:${i}:${it[0]}`,String(round)).map((k) => ({ k, text: it[1 + k] }));
            return (
              <section key={key} className="space-y-3 rounded-2xl border border-line bg-card p-5">
                {g && <Link href={`/grammar/${topic}/`} className="num text-xs font-bold text-accent">{g.level} · {lang === 'ar' ? g.title[0] : g.title[1]}</Link>}
                <p className="review-counts num text-sm">{t("صح: ","Correct: ")}{s.seen[key]?.ok??0} · {t("غلط: ","Wrong: ")}{s.seen[key]?.bad??0}</p>
                <p dir="ltr" className="de num break-words text-xl font-semibold" lang="de">{it[0]}</p>
                <div className="grid gap-2 lg:grid-cols-3">
                  {opts.map(({ k, text }) => {
                    const state = pick === undefined ? '' : k === 0 ? 'border-good border-2 bg-good/10' : pick === k ? 'border-bad bg-bad/10' : '';
                    return <button key={k} disabled={pick !== undefined} onClick={() => { if(answered.current.has(key))return;answered.current.add(key);setDone((d) => ({ ...d, [key]: k })); award(k === 0 ? 5 : 0, key, k === 0); }} dir="ltr" className={`de num min-h-11 min-w-0 break-words text-start rounded-xl border border-line bg-paper px-3 py-2.5 text-lg ${state}`} lang="de">{text}</button>;
                  })}
                </div>
                {pick !== undefined && <p role="status">{pick===0?t("صح.","Correct."):t("الإجابة الصح: ","Correct answer: ")}<span dir="ltr" lang="de" className="de inline-block">{pick===0?"":it[1]}</span></p>}
                {pick !== undefined && <p className="ar-title text-lg text-muted">{lang === 'ar' ? <Mixed text={it[4]} /> : it[5]}</p>}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
