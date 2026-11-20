'use client';
import { useRef, useState } from 'react';
import { idioms, idiomTopics } from '@/lib/idioms';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';
import TopicIcon from './TopicIcon';
import Mixed from './Mixed';

export default function IdiomView() {
  const t = useT();
  const { lang } = useLang();
  const [lv, setLv] = useState('all');
  const [topic, setTopic] = useState('all');
  const [q, setQ] = useState('');
  const searchInput=useRef<HTMLInputElement>(null);
  const normalized=q.trim().normalize('NFC').toLocaleLowerCase('de');
  const focus=()=>searchInput.current?.focus();
  const clearSearch=()=>{setQ('');focus()};
  const all=()=>{setLv('all');setTopic('all');setQ('');focus()};
  const topicIds=['all',...new Set(idioms.map((d)=>d.topic??'alltag'))];
  const list = idioms.filter((d) => (lv === 'all' || d.level === lv) && (topic === 'all' || (d.topic??'alltag') === topic) && (!normalized || [d.de,d.en,d.ar,d.literal,d.ex,d.exAr].join(' ').normalize('NFC').toLocaleLowerCase('de').includes(normalized)));
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{t('تعبيرات ألمانية', 'Redewendungen')}</h1>
      <p className="text-muted">{t('تعبيرات مشهورة بمعناها الحقيقي. المعنى الحرفي غالبًا بيضحّك، لكن المقصود حاجة تانية.', 'Common idioms with their real meaning. The literal meaning is often funny; the intended meaning is different.')}</p>
      <div role="group" aria-label={t('مجموعة التعبيرات','Idiom grouping')} className="flex flex-wrap gap-2">
        {['all', 'A2', 'B1', 'B2', 'C1'].map((l) => <button key={l} aria-pressed={lv===l} onClick={() => setLv(l)} className={`num min-h-11 rounded-full border px-4 py-2 ${lv === l ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{l === 'all' ? t('كل المستويات', 'All levels') : l}</button>)}
      </div>
      <div role="group" aria-label={t('موضوع التعبير','Idiom topic')} className="flex flex-wrap gap-2">
        {topicIds.map((tp) => <button key={tp} aria-pressed={topic===tp} onClick={() => setTopic(tp)} className={`min-h-11 rounded-full border px-4 py-2 ${topic === tp ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{tp === 'all' ? t('كل المواضيع', 'All topics') : (lang === 'ar' ? idiomTopics[tp]?.[0] ?? tp : idiomTopics[tp]?.[1] ?? tp)}</button>)}
      </div>
      <label htmlFor="idiom-search" className="block font-bold">{t('دوّر في التعبير أو المعنى أو المثال','Search an expression, meaning or example')}</label>
      <input ref={searchInput} id="idiom-search" type="search" aria-describedby="idiom-search-help" dir="auto" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('دوّر', 'Search')} className="min-h-11 w-full rounded-xl border border-line bg-paper px-4 py-2" />
      <p id="idiom-search-help" className="text-sm text-muted">{t('البحث بيشمل الألماني والمصري والإنجليزي، جوه المجموعة المختارة. الفلاتر مؤقتة، مش بتتحفظ ومفيش نقط هنا.','Search covers German, Egyptian Arabic and English within the selected grouping. Filters are temporary, not saved, and there are no points here.')}</p>
      <p role="status" aria-atomic="true" className="num text-sm text-muted">{t('النتائج','Results')}: <span dir="ltr" className="inline-block">{list.length} / {idioms.length}</span> · <bdi>{lv==='all'?t('كل المستويات','All levels'):lv}</bdi></p>
      <div className="flex flex-wrap gap-3">{q&&<button onClick={clearSearch} className="min-h-11 rounded-full border border-line px-4 py-2">{t('امسح البحث بس','Clear search only')}</button>}{(q||lv!=='all'||topic!=='all')&&<button onClick={all} className="min-h-11 rounded-full border border-line px-4 py-2">{t('اعرض كل التعبيرات','Show all idioms')}</button>}</div>
      {!list.length&&<p className="rounded-xl border border-line bg-card p-4">{lv==='all'?t('مفيش تعبير مطابق. جرّب كلمة أقصر أو امسح البحث.','No matching idioms. Try a shorter term or clear the search.'):t('مفيش تعبير مطابق في المجموعة دي. جرّب كلمة أقصر، أو دوّر في كل المجموعات من غير ما تغير الكلمة.','No matching idioms in this grouping. Try a shorter term, or search all groupings without changing the query.')}</p>}
      <ul className="grid gap-3 sm:grid-cols-2">
        {list.map((d) => (
          <li key={d.de} className="space-y-2 rounded-2xl border border-line bg-card p-4">
            <div className="flex items-start justify-between gap-2">
              <p dir="ltr" lang="de" className="de text-xl font-semibold">{d.de}</p>
              <button onClick={() => speak(d.de)} aria-label={t('اسمع التعبير','Hear the idiom')} className="min-h-11 min-w-11 shrink-0 rounded-full border border-line p-2"><Speaker /></button>
            </div>
            <span className="num text-xs font-bold text-accent">{d.level}</span>
            {d.topic && <span className="inline-flex items-center gap-1 text-xs text-muted"><TopicIcon topic={d.topic} className="h-4 w-4" />{lang === 'ar' ? idiomTopics[d.topic]?.[0] ?? d.topic : idiomTopics[d.topic]?.[1] ?? d.topic}</span>}
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
