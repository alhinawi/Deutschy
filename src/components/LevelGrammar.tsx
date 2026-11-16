'use client';
import Link from 'next/link';
import { GRAMMAR_PHOTO, grammarByLevel, type Lvl } from '@/lib/grammar';
import Art from './Art';
import { photoOf, verbs, slug } from '@/lib/verbs';
import { useLang, useT } from '@/lib/i18n';

export default function LevelGrammar({ level }: { level: Lvl }) {
  const { lang } = useLang();
  const t = useT();
  const gs = grammarByLevel(level);
  const vs = verbs.filter((v) => v.level === level);
  return (
    <>
      <section className="space-y-4">
        <h2 className="ar-title text-2xl font-bold">{t('القواعد', 'Grammar')} <span className="num text-base text-muted">· {gs.length}</span></h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gs.map((g) => (
            <Link key={g.id} href={`/grammar/${g.id}/`} className="flex overflow-hidden rounded-2xl border border-line bg-card hover:border-accent">
              {GRAMMAR_PHOTO.has(g.id) ? (

                // eslint-disable-next-line @next/next/no-img-element

                <img src={`/img/${g.img}.jpg`} alt="" className="h-28 w-28 shrink-0 object-cover" loading="lazy" />

              ) : <Art kind="grammar" className="h-28 w-28 shrink-0 object-cover" label={g.level} />}
              <div className="p-4"><p className="num text-xs font-bold text-accent">{level}</p><p className="ar-title text-xl leading-snug">{lang === 'ar' ? g.title[0] : g.title[1]}</p></div>
            </Link>
          ))}
        </div>
      </section>
      {vs.length > 0 && (
        <section className="space-y-4">
          <h2 className="ar-title text-2xl font-bold">{t('الأفعال', 'Verbs')} <span className="num text-base text-muted">· {vs.length}</span></h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {vs.map((v) => (
              <Link key={v.inf} href={`/verbs/${slug(v.inf)}/`} className="flex overflow-hidden rounded-2xl border border-line bg-card hover:border-accent">
                {photoOf(v) ? (

                  // eslint-disable-next-line @next/next/no-img-element

                  <img src={`/img/${photoOf(v)}.jpg`} alt="" className="h-20 w-20 shrink-0 object-cover" loading="lazy" />

                ) : <Art kind={v.kind} className="h-20 w-20 shrink-0 object-cover" />}
                <div className="p-3"><p className="de text-lg font-semibold leading-tight">{v.inf}</p><p className="ar-title text-base text-muted">{lang === 'ar' ? v.ar : v.en}</p></div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
