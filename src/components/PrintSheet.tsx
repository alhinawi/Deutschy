'use client';
import Link from 'next/link';
import Mixed from './Mixed';
import { type Sheet } from '@/lib/sheets';
import { useLang, useT } from '@/lib/i18n';

export default function PrintSheet({ s }: { s: Sheet }) {
  const { lang } = useLang();
  const t = useT();
  const ar = lang === 'ar';
  return (
    <article className="sheet mx-auto max-w-3xl space-y-5">
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <Link href={`/${s.id}/`} className="text-sm text-muted hover:text-ink">← {t('التدريب', 'Trainer')}</Link>
        <button onClick={() => window.print()} className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-ink">{t('اطبع أو احفظ PDF', 'Print or save as PDF')}</button>
      </div>
      <header className="border-b-2 border-ink pb-3">
        <p className="num text-sm font-bold text-accent">Deutschy</p>
        <h1 className="ar-title text-3xl font-bold leading-tight">{ar ? <Mixed text={s.title[0]} /> : s.title[1]}</h1>
        <p className="ar-title text-lg text-muted">{ar ? <Mixed text={s.sub[0]} /> : s.sub[1]}</p>
      </header>
      {s.blocks.map((b, n) => (
        <section key={n} className={`space-y-2 ${(b.table?.r.length ?? 0) > 18 ? 'tall' : ''}`}>
          <h2 className="ar-title text-xl font-bold">{ar ? <Mixed text={b.h[0]} /> : b.h[1]}</h2>
          {b.note && <p className="ar-title text-muted">{ar ? <Mixed text={b.note[0]} /> : b.note[1]}</p>}
          {b.lines && <ul dir="ltr" className="space-y-1">{b.lines.map((l, m) => <li key={m} className="de text-lg">{l.de}{l.ar && ar && <span dir="rtl" className="ar-title block text-sm text-muted"><Mixed text={l.ar} /></span>}</li>)}</ul>}
          {b.table && (
            <div dir="ltr" tabIndex={0} role="region" aria-label={ar ? b.h[0] : b.h[1]} className="overflow-x-auto border border-line">
              <table className="de num w-full text-start text-sm sm:text-base">
                {b.table.h.some(Boolean) && <thead><tr className="border-b border-line bg-paper">{b.table.h.map((h, i) => <th key={i} className="px-2 py-1.5 text-start font-bold">{h}</th>)}</tr></thead>}
                <tbody>{b.table.r.map((r, i) => <tr key={i} className="border-b border-line last:border-0">{r.map((c, j) => <td key={j} className={`px-2 py-1 ${j === 0 ? 'font-bold' : ''}`}>{c}</td>)}</tr>)}</tbody>
              </table>
            </div>
          )}
        </section>
      ))}
    </article>
  );
}
