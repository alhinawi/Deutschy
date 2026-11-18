'use client';
import {grammarPhoto} from '@/lib/lesson-photos';
import {grammarWalkthrough} from '@/lib/grammar-walkthrough';
import ModalMeaning from './ModalMeaning';
import GrammarReferences from './GrammarReferences';
import Link from 'next/link';
import Speaker from './Speaker';
import Mixed from './Mixed';
import Practice from './Practice';
import { speak } from '@/lib/speak';
import { grammar, type GrammarTopic } from '@/lib/grammar';
import { useLang, useT } from '@/lib/i18n';

export default function GrammarView({ g }: { g: GrammarTopic }) {
  const { lang } = useLang();
  const t = useT();
  const i = lang === 'ar' ? 0 : 1;
  const idx = grammar.findIndex((x) => x.id === g.id);
  const prev = grammar[idx - 1];
  const next = grammar[idx + 1];
  return (
    <article className="space-y-8">
      <Link href="/grammar/" className="text-sm text-muted hover:text-ink">← {t('أكاديمية القواعد', 'Grammar academy')}</Link>
      <header className="overflow-hidden rounded-2xl border border-line bg-card sm:flex">

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img data-grammar-photo src={grammarPhoto(g.id)} alt="" className="h-44 w-full object-cover sm:h-auto sm:w-56" loading="lazy" />

        <div className="space-y-2 p-5">
          <p className="num text-sm font-bold text-accent">{g.level}</p>
          <h1 className="ar-title text-3xl font-bold leading-tight">{lang === 'ar' ? <Mixed text={g.title[0]} /> : g.title[1]}</h1>
          <p className="ar-title text-xl leading-8 text-muted">{lang === 'ar' ? <Mixed text={g.sum[0]} /> : g.sum[1]}</p>
        </div>
      </header>
      {g.id === "modalverben" && <ModalMeaning/>}
      <section className="space-y-3">
        <h2 className="ar-title text-2xl font-bold">{t('القواعد', 'Rules')}</h2>
        <ol className="space-y-3">
          {g.points.map((p, n) => (
            <li key={n} className="flex gap-3 rounded-2xl border border-line bg-card p-4">
              <span className="num grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-accent-ink">{n + 1}</span>
              <p className="ar-title text-xl leading-8">{lang === 'ar' ? <Mixed text={p[0]} /> : p[1]}</p>
            </li>
          ))}
        </ol>
      </section>
      {g.table && (
        <section className="space-y-3">
          <h2 className="ar-title text-2xl font-bold">{t('الجدول', 'Table')}</h2>
          <div dir="ltr" tabIndex={0} role="region" aria-label={t("جدول القواعد","Grammar table")} className="overflow-x-auto rounded-2xl border border-line bg-card">
            <table className="de num w-full text-start text-base sm:text-lg" dir="ltr">
              <thead><tr className="border-b border-line bg-paper">{g.table.h.map((h, n) => <th scope="col" key={n} className="px-2.5 py-2.5 text-start sm:px-4 font-bold text-accent">{h}</th>)}</tr></thead>
              <tbody>{g.table.r.map((r, n) => <tr key={n} className="border-b border-line last:border-0">{r.map((c, m) => m === 0 ? <th scope="row" key={m} className="whitespace-nowrap px-2.5 py-2 text-start font-bold text-muted sm:px-4">{c}</th> : <td key={m} className="whitespace-nowrap px-2.5 py-2 sm:px-4">{c}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </section>
      )}
      <section className="space-y-3">
        <h2 className="ar-title text-2xl font-bold">{t('أمثلة', 'Examples')}</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {g.ex.map((e, n) => (
            <li key={n} className="rounded-2xl border border-line bg-card p-4">
              <div className="flex items-start justify-between gap-2">
                <p className="de num text-xl font-semibold" lang="de" dir="ltr">{e[0]}</p>
                <button onClick={() => speak(e[0])} aria-label={t('اسمع المثال', 'Hear the example')} className="min-h-11 min-w-11 shrink-0 rounded-full border border-line px-3 py-1 text-sm hover:bg-paper"><Speaker /></button>
              </div>
              <p className="ar-title mt-1 text-lg text-muted">{lang === 'ar' ? <Mixed text={e[1]} /> : e[2]}</p>
            </li>
          ))}
        </ul>
      </section>
      {grammarWalkthrough[g.id]&&<section aria-label={t('مثال محلول خطوة بخطوة','Worked example walkthrough')} className="space-y-3 rounded-2xl border border-accent/40 bg-card p-5"><h2 className="ar-title text-2xl font-bold">{t('نفهم مثال سوا','Walk through an example')}</h2><p className="text-sm text-muted">{t('ده شرح لمثال موجود فوق، مش سؤال بدرجة. حاول تحدد الجزء المهم قبل ما تقرا التحليل.','This explains an example above, not a scored question. Spot the key part before reading the analysis.')}</p><p dir="ltr" lang="de" className="de break-words text-xl">{g.ex[0][0]}</p><details><summary className="cursor-pointer py-3">{t('افتح التحليل','Show the walkthrough')}</summary><p className="mt-3 leading-8">{lang==='ar'?<Mixed text={grammarWalkthrough[g.id][0]}/>:grammarWalkthrough[g.id][1]}</p></details></section>}
      <Link href={`/grammar/${g.id}/sheet/`} className="inline-block rounded-full border border-line px-5 py-2 text-sm font-bold hover:bg-card">{t('ورقة ملخص للطباعة', 'Printable cheat sheet')}</Link>
      <Practice topic={g.id} />
      <GrammarReferences topic={g.id}/>
      {g.tip && (
        <section className="rounded-2xl border border-accent/40 bg-card p-5">
          <p className="num text-xs font-bold uppercase text-accent">{t('نصيحة', 'Tip')}</p>
          <p className="ar-title mt-1 text-xl leading-8">{lang === 'ar' ? <Mixed text={g.tip[0]} /> : g.tip[1]}</p>
        </section>
      )}
      <nav className="flex justify-between gap-3 text-sm font-bold">
        {prev ? <Link href={`/grammar/${prev.id}/`} className="rounded-full border border-line px-4 py-2 hover:bg-card">← {lang === 'ar' ? prev.title[0] : prev.title[1]}</Link> : <span />}
        {next ? <Link href={`/grammar/${next.id}/`} className="rounded-full bg-accent px-4 py-2 text-accent-ink">{lang === 'ar' ? next.title[0] : next.title[1]} →</Link> : <span />}
      </nav>
    </article>
  );
}
