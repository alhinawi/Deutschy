import LevelRoutes from '@/components/LevelRoutes';
import Link from 'next/link';
import { topics, words, wordsOf, img } from '@/lib/data';
import { arWords } from '@/lib/arcount';
import { T } from '@/lib/i18n';
import { TopicName } from '@/components/L';

export default function Home() {
  const hero = words.filter((w) => ['apfel', 'pferd', 'fahrrad', 'kaffee'].includes(w.id));
  return (
    <div className="space-y-14">
      <LevelRoutes />
      <section className="grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="num text-sm font-bold text-accent"><T ar={`من A1 لحد C2 · ${arWords(words.length)} بصور حقيقية جاهزة دلوقتي`} en={`A1 to C2 · ${words.length} words with real photos, ready now`} /></p>
          <h1 className="ar-title min-h-[2.3em] text-4xl font-bold leading-[1.15] md:text-6xl">
            <T ar="الألماني بقى " en="German is easier " /><span className="text-accent"><T ar="أسهل" en="with pictures" /></span><T ar=" بالصورة والعربي المصري" en=" and plain explanations" />
          </h1>
          <p className="max-w-lg text-lg text-muted"><T ar="اتعلّم الاسم مع صورته وأداة التعريف، وراجع الجمع لما يكون معروض. ذاكر بالكروت، وبعدها اختبر نفسك في الألعاب." en="Learn each noun with its photo and article, and review its plural where shown. Study the cards, then test yourself in the games." /></p>
          <div className="flex flex-wrap gap-3">
            <Link href="/lessons/" className="rounded-full bg-accent px-6 py-3 font-bold text-accent-ink"><T ar="ابدأ الدروس" en="Start lessons" /></Link>
            <Link href="/grammar/" className="rounded-full border border-line px-6 py-3 font-bold hover:bg-card"><T ar="القواعد" en="Grammar" /></Link>
            <Link href="/verbs/" className="rounded-full border border-line px-6 py-3 font-bold hover:bg-card"><T ar="الأفعال" en="Verbs" /></Link>
            <Link href="/games/" className="rounded-full border border-line px-6 py-3 font-bold hover:bg-card"><T ar="العب" en="Play" /></Link>
            <Link href="/account/" className="rounded-full border border-line px-6 py-3 font-bold hover:bg-card"><T ar="سجّل حساب" en="Create account" /></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {hero.map((w) => (
            <div key={w.id} className="overflow-hidden rounded-2xl border border-line bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img(w)} alt={w.de} className="photo" width={480} height={360} />
              <p className="de p-3 text-lg font-semibold"><span className="text-accent">{w.art}</span> {w.de}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="ar-title mb-5 text-3xl font-bold"><T ar="المستوى A1 · الدروس" en="Level A1 · Lessons" /></h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => {
            const ws = wordsOf(t.id);
            return (
              <Link key={t.id} href={`/lessons/${t.id}/`} className="group overflow-hidden rounded-2xl border border-line bg-card hover:border-accent">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img(ws[0])} alt="" className="photo" width={480} height={360} loading="lazy" />
                <div className="p-4">
                  <p className="ar-title text-xl text-ink"><TopicName id={t.id} /> · <span className="num">{ws.length}</span></p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
