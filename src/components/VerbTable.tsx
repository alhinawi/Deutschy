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
        {LV.map((l) => <button key={l} aria-pressed={lv===l} onClick={() => setLv(l)} className={`num min-h-11 rounded-full border px-4 py-2 ${lv === l ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{l}</button>)}
      </div>
      <p role="status" aria-live="polite" aria-atomic="true" className="num text-sm text-muted">{rows.length} {t('فعل قوي أو شاذ أو مساعد للمعنى في المستوى المختار.', rows.length===1?'strong, irregular or modal verb at the selected level.':'strong, irregular or modal verbs at the selected level.')}</p>
      <p id="verb-table-hint" className="text-sm text-muted">{t('الجدول فيه الأفعال القوية والشاذة والمساعدة للمعنى بس. لو الأعمدة مش باينة كلها، حرّك الجدول بالعرض. اختيار المستوى مؤقت ومش بيغيّر تقدمك.','Only strong, irregular and modal verbs are shown. Scroll the table sideways if needed. The level selection is temporary and does not change your progress.')}</p>
      {rows.length === 0 ? <p className="text-muted">{t('مفيش أفعال قوية أو شاذة أو مساعدة للمعنى في المستوى ده.', 'No strong, irregular or modal verbs at this level.')}</p> : (
        <div dir="ltr" role="region" tabIndex={0} aria-label={t('جدول تصريف الأفعال','Verb conjugation table')} aria-describedby="verb-table-hint" className="overflow-x-auto rounded-2xl border border-line bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
          <table className="de num min-w-[520px] w-full text-left text-sm">
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
