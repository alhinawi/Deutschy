'use client';
import { useId, useState, type ReactNode } from 'react';
import { useT } from '@/lib/i18n';

export default function FilterDisclosure({ activeCount = 0, children }: { activeCount?: number; children: ReactNode }) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? t('اقفل الفلاتر', 'Close filters') : t('افتح الفلاتر', 'Open filters')}
          title={open ? t('اقفل الفلاتر', 'Close filters') : t('افتح الفلاتر', 'Open filters')}
          className="relative inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-line bg-card p-2 text-ink hover:border-accent"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
          </svg>
          {activeCount > 0 && (
            <span className="num absolute -top-1 -end-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs font-bold text-accent-ink">{activeCount}</span>
          )}
        </button>
        <span className="text-sm text-muted">
          {t('الفلاتر', 'Filters')}{activeCount > 0 && <> · <span className="num">{activeCount}</span> {t('شغالة', 'active')}</>}
        </span>
      </div>
      {open && <div id={panelId} className="space-y-4 rounded-2xl border border-line bg-card p-4">{children}</div>}
    </div>
  );
}
