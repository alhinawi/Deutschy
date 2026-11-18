'use client';
import LessonCheckpoint from '@/components/LessonCheckpoint';
import Link from 'next/link';
import { headingSounds } from '@/lib/heading-sounds';
import { pron, pairs } from '@/lib/pron';
import { speak } from '@/lib/speak';
import { useLang, useT } from '@/lib/i18n';
import Speaker from './Speaker';
import Mixed from './Mixed';

const PE: Record<string, string> = { schon: 'already', schön: 'beautiful', Bar: 'bar', Bär: 'bear', lesen: 'to read', lösen: 'to solve', musste: 'had to', müsste: 'would have to' };

export default function PronView() {
  const t = useT();
  const { lang } = useLang();
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="ar-title text-4xl font-bold">{t('النطق', 'Pronunciation')}</h1>
        <p className="text-muted">{t('اسمع صوت الحرف من زرار الصوت جنب العنوان، أو اضغط على أي كلمة عشان تسمع مثال. أصوات الألماني مالهاش مقابل مطابق في العربي؛ التشبيهات هنا تقريبية.', 'Use the sound buttons beside each heading, or tap a word to hear an example. German sounds do not map exactly onto Arabic, so the comparisons are approximate.')}</p>
      </div>
      <Link href="/sound-contrasts/" className="block underline">{t('جديد: معمل فرق الأصوات وتقريب عربي محدود','New: sound contrasts and limited Arabic memory cues')}</Link><nav className="flex flex-wrap gap-2" aria-label="Sounds">
        {pron.map((s) => <a key={s.id} href={`#${s.id}`} className="de num rounded-full border border-line bg-card px-3 py-1.5 text-sm font-semibold hover:border-accent">{s.t}</a>)}
        <a href="#pairs" className="rounded-full border border-line bg-card px-3 py-1.5 text-sm font-semibold hover:border-accent">{t('أزواج متشابهة', 'Minimal pairs')}</a>
      </nav>
      <p className="text-sm leading-7 text-muted">{t('الأزرار جنب العناوين نماذج صوتية مبسطة، مش أسماء الحروف. اسمع أمثلة الكلمات كمان عشان تعرف الصوت في الكلام. أزرار 1 و2 بتوضح النطق القصير والطويل للحروف المتحركة.', 'The heading buttons play simplified sound models, not letter names. Listen to the word examples too for sounds in speech. Buttons 1 and 2 show short and long vowel models.')}</p>
      {pron.map((s) => (
        <section key={s.id} id={s.id} className="space-y-3 rounded-2xl border border-line bg-card p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="de num text-3xl font-bold text-accent" dir="ltr" lang="de">{s.t}</h2>
            <div className="flex flex-wrap gap-2" role="group" aria-label={t('صوت الحرف', 'Model sounds')}>
              {headingSounds.filter(sound => sound.section === s.id).map(sound => (
                <button key={sound.id} data-heading-sound={sound.id} aria-label={`${t('اسمع صوت', 'Hear sound')} ${sound.label}`} onClick={() => speak(sound.label, {modelSource:sound.url,rate:1})} className="inline-flex min-h-11 min-w-11 items-center gap-2 rounded-xl border border-line bg-paper px-3 py-2 hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                  <span className="de num text-base font-semibold" lang="de" dir="ltr">{sound.label}</span><Speaker />
                </button>
              ))}
            </div>
          </div>
          <p className="ar-title text-lg leading-8">{lang === 'ar' ? <Mixed text={s.ar} /> : s.en}</p>
          <ul className="grid grid-cols-2 gap-2">
            {s.words.map(([de, ar, en]) => (
              <li key={de}>
                <button onClick={() => speak(de)} className="flex w-full items-center justify-between gap-2 rounded-xl border border-line bg-paper px-3 py-2.5 text-start hover:border-accent">
                  <span><span dir="ltr" lang="de" className="de num block text-lg font-semibold">{de}</span><span className="ar-title block text-sm text-muted">{lang === 'ar' ? ar : en}</span></span>
                  <Speaker />
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <section id="pairs" className="space-y-3 rounded-2xl border border-line bg-card p-5">
        <h2 className="ar-title text-2xl font-bold">{t('أزواج متشابهة', 'Minimal pairs')}</h2>
        <p className="text-muted">{t('اسمع الفرق بين الصوتين.', 'Hear the difference between the two sounds.')}</p>
        <ul className="space-y-2">
          {pairs.map(([a, aa, b, ba]) => (
            <li key={a} className="grid grid-cols-2 gap-2">
              {[[a, aa], [b, ba]].map(([w, g]) => (
                <button key={w} onClick={() => speak(w)} className="flex items-center justify-between gap-2 rounded-xl border border-line bg-paper px-3 py-2.5 text-start hover:border-accent">
                  <span><span dir="ltr" lang="de" className="de num block text-lg font-semibold">{w}</span><span className="ar-title block text-sm text-muted">{lang === 'ar' ? g : PE[w]}</span></span>
                  <Speaker />
                </button>
              ))}
            </li>
          ))}
        </ul>
      </section>
      <Link href="/audio-credits/" className="inline-flex min-h-11 items-center text-sm underline">{t('عن نماذج الأصوات ومصدرها', 'About the sound models and their source')}</Link>
      <LessonCheckpoint id="pron"/>
    </div>
  );
}
