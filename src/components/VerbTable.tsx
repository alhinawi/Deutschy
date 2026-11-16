'use client';
import { useState } from 'react';
import Link from 'next/link';
import { verbs, slug } from '@/lib/verbs';
import { useLang, useT } from '@/lib/i18n';

const LV = ['A1', 'A2', 'B1', 'B2'];
export default function VerbTable() {
  const t = useT();
  const { lang } = useLang();
  const [lv, setLv] = useState('A1');
  const rows = verbs.filter((v) => v.level === lv && (v.kind === 'strong' || v.kind === 'irregular' || v.kind === 'modal'));
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {LV.map((l) => <button key={l} onClick={() => setLv(l)} className={`num rounded-full border px-4 py-2 ${lv === l ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{l}</button>)}
      </div>
      {rows.length === 0 ? <p className="text-muted">{t('مفيش أفعال قوية في المستوى ده.', 'No strong or irregular verbs at this level.')}</p> : (
        <div dir="ltr" className="overflow-x-auto rounded-2xl border border-line bg-card">
          <table className="de num w-full text-left text-sm">
            <thead className="text-sm text-muted"><tr><th className="p-2">Infinitiv</th><th className="p-2">er/sie/es</th><th className="p-2">Präteritum</th><th className="p-2">Perfekt</th></tr></thead>
            <tbody>
              {rows.map((v) => (
                <tr key={v.inf} className="border-t border-line">
                  <td className="p-2 font-semibold"><Link href={`/verbs/${slug(v.inf)}/`} className="hover:text-accent">{v.inf}</Link><span className="ar-title block text-xs font-normal text-muted" dir={lang === 'ar' ? 'rtl' : 'ltr'}>{lang === 'ar' ? v.ar : v.en}</span></td>
                  <td className="p-2">{v.pres[2]}</td>
                  <td className="p-2">{v.pret}</td>
                  <td className="p-2">{v.aux === 'sein' ? 'ist' : 'hat'} {v.pp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
