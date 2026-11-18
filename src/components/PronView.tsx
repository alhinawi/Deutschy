'use client';
import LessonCheckpoint from '@/components/LessonCheckpoint';
import Link from 'next/link';
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
        <p className="text-muted">{t('اضغط على الكلمة عشان تسمعها لو الصوت متاح. أصوات الألماني مالهاش مقابل مطابق في العربي؛ التشبيهات هنا تقريبية.', 'Tap any word to hear it. German sounds do not map exactly onto Arabic, so the comparisons are approximate.')}</p>
      </div>
      <Link href="/sound-contrasts/" className="block underline">{t('جديد: معمل فرق الأصوات وتقريب عربي محدود','New: sound contrasts and limited Arabic memory cues')}</Link><nav className="flex flex-wrap gap-2" aria-label="Sounds">
        {pron.map((s) => <a key={s.id} href={`#${s.id}`} className="de num rounded-full border border-line bg-card px-3 py-1.5 text-sm font-semibold hover:border-accent">{s.t}</a>)}
        <a href="#pairs" className="rounded-full border border-line bg-card px-3 py-1.5 text-sm font-semibold hover:border-accent">{t('أزواج متشابهة', 'Minimal pairs')}</a>
      </nav>
      {pron.map((s) => (
        <section key={s.id} id={s.id} className="space-y-3 rounded-2xl border border-line bg-card p-5">
          <h2 className="de num text-3xl font-bold text-accent">{s.t}</h2>
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
      <LessonCheckpoint id="pron"/>
    </div>
  );
}
