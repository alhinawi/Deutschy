'use client';
import { useState } from 'react';
import { idioms } from '@/lib/idioms';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';
import Mixed from './Mixed';

export default function IdiomView() {
  const t = useT();
  const { lang } = useLang();
  const [lv, setLv] = useState('all');
  const [q, setQ] = useState('');
  const list = idioms.filter((d) => (lv === 'all' || d.level === lv) && (!q || (d.de + d.en + d.ar).toLowerCase().includes(q.toLowerCase())));
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{t('تعبيرات ألمانية', 'Redewendungen')}</h1>
      <p className="text-muted">{t('تعبيرات مشهورة بمعناها الحقيقي. المعنى الحرفي غالبًا بيضحّك، لكن المقصود حاجة تانية.', 'Common idioms with their real meaning. The literal meaning is often funny; the intended meaning is different.')}</p>
      <div className="flex flex-wrap gap-2">
        {['all', 'B1', 'B2', 'C1'].map((l) => <button key={l} onClick={() => setLv(l)} className={`num rounded-full border px-4 py-2 ${lv === l ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{l === 'all' ? t('الكل', 'All') : l}</button>)}
      </div>
      <input dir="auto" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('دوّر', 'Search')} className="w-full rounded-xl border border-line bg-paper px-4 py-2" />
      <ul className="grid gap-3 sm:grid-cols-2">
        {list.map((d) => (
          <li key={d.de} className="space-y-2 rounded-2xl border border-line bg-card p-4">
            <div className="flex items-start justify-between gap-2">
              <p dir="ltr" lang="de" className="de text-xl font-semibold">{d.de}</p>
              <button onClick={() => speak(d.de)} aria-label="Speak" className="shrink-0 rounded-full border border-line px-2 py-0.5"><Speaker /></button>
            </div>
            <span className="num text-xs font-bold text-accent">{d.level}</span>
            <p dir="ltr" className="text-sm italic text-muted">{t('حرفيًا', 'Literally')}: {d.literal}</p>
            <p className="ar-title font-bold">{lang === 'ar' ? <Mixed text={d.ar} /> : d.en}</p>
            <div className="rounded-xl bg-paper p-3">
              <p dir="ltr" lang="de" className="de">{d.ex}</p>
              {lang === 'ar' && <p className="ar-title mt-1 text-sm text-muted"><Mixed text={d.exAr} /></p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
