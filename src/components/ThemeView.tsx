'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { themes } from '@/lib/themes';
import { words, topicName, glossOf, img, pluralText } from '@/lib/data';
import { speak } from '@/lib/speak';
import { useLang, useT } from '@/lib/i18n';
import Speaker from './Speaker';
import VocabularyQuiz from './VocabularyQuiz';

type Theme = { id: string; de: string; ar: string; en: string; topics: string[]; words?: string[]; example?: string; discussion?: string[] };
export default function ThemeView({ groups = themes, a2 = false, practiceLevel = 'A2' }: { groups?: Theme[]; a2?: boolean; practiceLevel?: 'A2' | 'B1' | 'B2' | 'C1' | 'C2' }) {
  const t = useT();
  const { lang } = useLang();
  const [id, setId] = useState(groups[0].id);
  useEffect(() => {
    const h = window.location.hash.slice(1);
    if (groups.some((x) => x.id === h)) setId(h);
  }, []);
  const th = groups.find((x) => x.id === id)!;
  const list = words.filter((w) => th.words ? th.words.includes(w.id) : th.topics.includes(w.topic));
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="ar-title text-4xl font-bold">{a2 ? t(`مفردات لممارسة ${practiceLevel}`, `Vocabulary for ${practiceLevel} practice`) : t('مفردات حسب موضوع الامتحان', 'Vocabulary by exam theme')}</h1>
        <p className="text-muted">{a2 && practiceLevel === 'C2' ? t('8 محاور عشان تفكك الافتراضات وتحدد نطاق الحجة وتكتب خلاصة تحافظ على الفروق الدقيقة. الأسماء المصوّرة مراجعة ملموسة، مش قائمة كلمات C2. ابدأ من المثال وسؤال النقاش، وخلي الاستعارة منفصلة عن الدليل. ده تدريب مركز مش معيار كفاءة رسمي.', 'Eight lenses for examining assumptions, limiting a claim and preserving fine distinctions in synthesis. Photographed nouns are concrete revision, not a C2 word list. Start from the example and discussion prompt, keeping metaphor separate from evidence. Focused practice, not an official proficiency measure.') : a2 && practiceLevel === 'C1' ? t('8 زوايا لتحليل الدليل والمسؤولية والاختيار وموازنة المصالح. الصور لأسماء ملموسة راجعتها قبل كده، مش قائمة كلمات C1 رسمية. التحدي هنا في بناء الحجة وتحديد حدودها: اقرأ المثال وطبّق سؤال المناقشة، وبعدها راجع الأداة والجمع.', 'Eight perspectives on evidence, accountability, selection and trade-offs. Previously studied photographed nouns are concrete anchors, not an official C1 word list. The challenge is to build and qualify an argument: study the example and discussion prompt, then review articles and plurals.') : a2 && practiceLevel === 'B2' ? t('8 مجالات عشان تناقش المصالح والنتائج وتشرح عمليات وتوازن بين حجج. الأسماء المصوّرة هنا نقطة بداية ومراجعة، مش مقياس مستوى الكلمة ولا قائمة امتحان رسمية. استخدم كل مجموعة في فقرة تحليلية من عندك.', 'Eight fields for discussing competing interests, consequences and processes, and weighing arguments. These photographed nouns are starting points and revision, not a claim about the level of each word or an official exam list. Use each group in your own analytical paragraph.') : a2 && practiceLevel === 'B1' ? t('8 مواضيع عشان تناقش الشغل والمرور والطاقة والثقافة، وتشرح مشكلة وتقترح حل. راجع الأداة والجمع، وبعدها جرّب تستخدم الكلمة في جملة فيها سبب أو شرط. فيها كلمات للمراجعة، مش قائمة امتحان رسمية.', 'Eight themes for discussing work, traffic, energy and culture, explaining a problem and proposing a solution. Review each article and plural, then use the noun in a sentence with a reason or condition. Includes revision, not an official exam list.') : a2 ? t('8 مواضيع للتدريب على وصف حياتك وطلب المساعدة. فيها مراجعة لكلمات سابقة، مش قائمة رسمية لامتحان. اختبر نفسك وركّب جمل من عندك.', 'Eight themes for describing daily life and asking for help. Includes earlier vocabulary for revision; not an official exam list. Test yourself and make your own sentences.') : t('المواضيع اللي بتتكرر في امتحانات Goethe من A1 لـ B1. كل كلمة بصورة حقيقية وأداة وجمع. اضغط على السماعة تسمعها.', 'The themes that recur in Goethe exams from A1 to B1. Every word has a real photo, its article and plural. Tap the speaker to hear it.')}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {groups.map((x) => (
          <button key={x.id} aria-pressed={id === x.id} onClick={() => { setId(x.id); history.replaceState(null, '', `#${x.id}`); }} className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${id === x.id ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-card'}`}>{lang === 'ar' ? x.ar : x.en}</button>
        ))}
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="de text-2xl font-bold">{th.de}</h2>
        <span className="num shrink-0 whitespace-nowrap text-sm text-muted">{list.length} {t('كلمة', 'words')}</span>
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        {th.topics.map((tp) => <Link key={tp} href={`/lessons/${tp}/`} className="rounded-full border border-line px-3 py-1 text-accent hover:bg-card">{topicName(tp, lang)}</Link>)}
      </div>
      {th.example && <p dir="ltr" lang="de" className="de rounded-2xl border border-line bg-card p-4 text-xl">{th.example}</p>}
      {th.discussion && <p className="ar-title rounded-2xl border border-line p-4 text-lg">{t(th.discussion[0], th.discussion[1])}</p>}
      <VocabularyQuiz key={id} pool={list} id={`theme-${id}`} />
      <ul className="grid gap-3 sm:grid-cols-2">
        {list.map((w) => (
          <li key={w.id} className="flex overflow-hidden rounded-2xl border border-line bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img(w)} alt="" width={96} height={96} loading="lazy" className="h-24 w-24 shrink-0 object-cover" />
            <div className="flex min-w-0 flex-1 items-center justify-between gap-2 p-3">
              <div className="min-w-0">
                <p dir="ltr" lang="de" className="de num text-lg font-semibold"><span className="text-accent">{w.art}</span> {w.de}</p>
                {pluralText(w, lang) && <p dir="ltr" className="de num text-sm text-muted">{pluralText(w, lang)}</p>}
                <p className="ar-title text-base">{glossOf(w, lang)}</p>
              </div>
              <button onClick={() => speak(`${w.art} ${w.de}`)} aria-label="Speak" className="shrink-0 rounded-full border border-line px-2.5 py-1"><Speaker /></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
