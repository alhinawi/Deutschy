'use client';
import Speaker from '@/components/Speaker';
import { sections } from '@/lib/basics';
import { speak } from '@/lib/speak';
import { T, useLang } from '@/lib/i18n';

export default function Learn() {
  const { lang } = useLang();
  return (
    <div className="space-y-10">
      <div>
        <h1 className="ar-title text-4xl font-bold"><T ar="أساسيات المستوى A1" en="Level A1 basics" /></h1>
        <p className="mt-2 text-muted"><T ar="ابدأ بالتحيات والأرقام والأيام والألوان، وبعدين جرّب الفعلين الأساسيين. اضغط على السماعة عشان تسمع النطق لو الصوت متاح على جهازك." en="Greetings, numbers, days, colours and the two most important verbs. Tap the speaker button to hear the pronunciation." /></p>
      </div>
      {sections.map((sec) => (
        <section key={sec.id} id={sec.id} className="rounded-2xl border border-line bg-card p-5">
          <h2 className="de text-2xl font-semibold">{sec.title} {lang === 'ar' && <span className="ar-title text-xl text-muted">· {sec.ar}</span>}</h2>
          {sec.note && lang === 'ar' && <p className="ar-title mt-2 text-lg leading-8 text-muted">{sec.note}</p>}
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {sec.rows.map(([de, ar]) => (
              <li key={de} className="flex items-center justify-between gap-3 rounded-xl border border-line bg-paper px-4 py-2.5">
                <span className="de num text-lg" lang="de">{de}</span>
                <span className="flex items-center gap-2">
                  {ar && lang === 'ar' && <span className="ar-title text-lg text-muted">{ar}</span>}
                  <button aria-label="نطق" onClick={() => speak(de.replace(/^\d+ – /, ''))} className="rounded-full border border-line px-2.5 py-0.5 text-sm hover:bg-card"><Speaker /></button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
