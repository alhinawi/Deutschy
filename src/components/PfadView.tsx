'use client';
import Link from 'next/link';
import {checkpointState} from '@/lib/completion';
import { PATH, stepState, stepRule } from '@/lib/progress';
import { useStore } from '@/lib/store';
import { useT } from '@/lib/i18n';

export default function PfadView() {
  const t = useT();
  const { s, ready } = useStore();
  const rows = PATH.map((st) => ({ st, ...stepState(s, st) }));
  const done = rows.filter((r) => r.done).length;
  const next = rows.findIndex((r) => !r.done);
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{t('مسار A1', 'A1 learning path')}</h1>
      <p className="text-muted">{t('خطوات مرتبة من أول حرف لحد امتحان A1. التقدم من اللي حليته على جهازك بس.', 'Ordered steps from the first letter to the A1 exam. Progress comes only from what you did on this device.')}</p>
      <div className="rounded-2xl border border-line bg-card p-4">
        <div className="flex items-center justify-between"><span className="ar-title font-bold">{t('اتخلّص', 'Completed')}</span><span dir="ltr" className="num font-bold">{ready ? done : 0} / {PATH.length}</span></div>
        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-line" role="progressbar" aria-label={t('تقدم مسار A1', 'A1 path progress')} aria-valuemin={0} aria-valuemax={PATH.length} aria-valuenow={done}><div className="h-full bg-accent" style={{ width: `${(done / PATH.length) * 100}%` }} /></div>
        {next >= 0 && ready && <Link href={rows[next].st.href} className="mt-3 inline-block rounded-full bg-accent px-5 py-2 font-bold text-accent-ink">{t('كمّل: ', 'Continue: ')}{t(rows[next].st.ar, rows[next].st.en)}</Link>}
      </div>
      <ol className="space-y-2">
        {rows.map((r, i) => (
          <li key={r.st.id} className={`rounded-2xl border bg-card p-4 ${i === next ? 'border-accent border-2' : 'border-line'}`}>
            <div className="flex items-start gap-3">
              <span className={`num flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${r.done ? 'bg-good text-white' : 'border border-line'}`}>
                {r.done ? <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-label="done"><path d="m5 12 5 5 9-10" /></svg> : i + 1}
              </span>
              <div className="min-w-0 flex-1 space-y-2">
                <Link href={r.st.href} className="ar-title block text-lg font-bold hover:text-accent">{t(r.st.ar, r.st.en)}</Link>
                <div className="flex items-center gap-3"><div className="h-2 flex-1 overflow-hidden rounded-full bg-line"><div className="h-full bg-accent" style={{ width: `${(r.got / r.total) * 100}%` }} /></div><span dir="ltr" className="num text-xs font-bold text-muted">{ready ? r.got : 0} / {r.total}{r.st.id === 'exam' ? '%' : ''}</span></div>
                <p className="text-sm text-muted">{ready&&r.st.kind==='checkpoint'&&checkpointState(s,r.st.id as 'pron'|'learn').legacy?t('سجل قديم محفوظ؛ مش نتيجة مراجعة.','Prior completion kept; not a review result.'):t(...stepRule(r.st))}</p>

              </div>
            </div>
          </li>
        ))}
      </ol>
      <Link href="/levels/A2/" className="inline-block rounded-full border border-line px-5 py-2 font-bold">{t('بعد A1: مستوى A2', 'After A1: level A2')}</Link>
    </div>
  );
}
