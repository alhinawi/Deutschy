'use client';
import Link from 'next/link';
import Mixed from './Mixed';
import { type GrammarTopic } from '@/lib/grammar';
import { useLang, useT } from '@/lib/i18n';

export default function SheetView({ g }: { g: GrammarTopic }) {
  const { lang } = useLang();
  const t = useT();
  const ar = lang === 'ar';
  return (
    <article className="sheet mx-auto max-w-3xl space-y-5">
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <Link href={`/grammar/${g.id}/`} className="text-sm text-muted hover:text-ink">← {t('الدرس الكامل', 'Full lesson')}</Link>
        <button onClick={() => window.print()} className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-ink">{t('اطبع أو احفظ PDF', 'Print or save as PDF')}</button>
      </div>
      <header className="border-b-2 border-ink pb-3">
        <p className="num text-sm font-bold text-accent">{g.level} · Deutschy</p>
        <h1 className="ar-title text-3xl font-bold leading-tight">{ar ? <Mixed text={g.title[0]} /> : g.title[1]}</h1>
        <p className="ar-title text-lg text-muted">{ar ? <Mixed text={g.sum[0]} /> : g.sum[1]}</p>
      </header>
      <section className="space-y-2">
        <h2 className="ar-title text-xl font-bold">{t('القواعد', 'Rules')}</h2>
        <ol className="list-decimal space-y-1.5 ps-6">
          {g.points.map((p, n) => <li key={n} className="ar-title text-lg leading-7">{ar ? <Mixed text={p[0]} /> : p[1]}</li>)}
        </ol>
      </section>
      {g.table && (
        <section className="space-y-2">
          <div dir="ltr" className="overflow-x-auto border border-line">
            <table className="de num w-full text-start text-base" dir="ltr">
              <thead><tr className="border-b border-line bg-paper">{g.table.h.map((h, n) => <th key={n} className="px-2 py-2 text-start font-bold">{h}</th>)}</tr></thead>
              <tbody>{g.table.r.map((r, n) => <tr key={n} className="border-b border-line last:border-0">{r.map((c, m) => <td key={m} className={`px-2 py-1.5 ${m === 0 ? 'font-bold' : ''}`}>{c}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </section>
      )}
      <section className="space-y-2">
        <h2 className="ar-title text-xl font-bold">{t('أمثلة', 'Examples')}</h2>
        <ul className="space-y-1.5">
          {g.ex.map((e, n) => (
            <li key={n} className="border-b border-line pb-1.5">
              <p dir="ltr" lang="de" className="de num text-lg font-semibold">{e[0]}</p>
              <p className="ar-title text-muted">{ar ? <Mixed text={e[1]} /> : e[2]}</p>
            </li>
          ))}
        </ul>
      </section>
      {g.tip && (
        <section className="border border-accent/50 p-3">
          <p className="ar-title text-lg leading-7"><b>{t('نصيحة: ', 'Tip: ')}</b>{ar ? <Mixed text={g.tip[0]} /> : g.tip[1]}</p>
        </section>
      )}
    </article>
  );
}
