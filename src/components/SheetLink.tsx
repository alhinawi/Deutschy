'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sheetIds } from '@/lib/sheet-ids';
import { useT } from '@/lib/i18n';

export default function SheetLink() {
  const t = useT();
  const id = (usePathname() ?? '').replace(/^\/|\/$/g, '');
  if (!sheetIds.includes(id)) return null;
  return (
    <div className="no-print mt-8">
      <Link href={`/blatt/${id}/`} className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2 font-bold hover:border-accent">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4v-8h16v8h-2M7 14h10v7H7z" /></svg>
        {t('ورقة للطباعة', 'Printable sheet')}
      </Link>
    </div>
  );
}
