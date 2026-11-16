'use client';
import { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Hit } from '@/lib/search-index';
import { useLang, useT } from '@/lib/i18n';

const KIND: Record<Hit['kind'], [string, string]> = { word: ['كلمة', 'Word'], grammar: ['قاعدة', 'Grammar'], verb: ['فعل', 'Verb'], idiom: ['تعبير', 'Idiom'], page: ['صفحة', 'Page'], reading:['قراءة','Reading'], writing:['كتابة','Writing'],dialogue:['حوار','Dialogue'] };

export function SearchIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.500-3.500" /></svg>;
}

export default function SearchBox({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useT();
  const { lang } = useLang();
  const router = useRouter();
  const [q, setQ] = useState('');
  const [hits, setHits] = useState<Hit[]>([]);
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const mod = useRef<typeof import('@/lib/search-index') | null>(null);
  const id = useId();
  useEffect(() => {
    if (!open) return;
    setQ(''); setHits([]); setSel(0);
    input.current?.focus();
    import('@/lib/search-index').then((m) => { mod.current = m; m.index(); });
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const run = () => { setHits(mod.current ? mod.current.search(q) : []); setSel(0); };
    if (mod.current) run(); else import('@/lib/search-index').then((m) => { mod.current = m; run(); });
  }, [q, open]);
  if (!open) return null;
  const go = (h: Hit) => { onClose(); router.push(h.href); };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { e.preventDefault(); onClose(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, hits.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    else if (e.key === 'Enter' && hits[sel]) { e.preventDefault(); go(hits[sel]); }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-3 pt-16" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div role="dialog" aria-modal="true" aria-label={t('بحث', 'Search')} onKeyDown={onKey} className="w-full max-w-xl rounded-2xl border border-line bg-paper shadow-xl">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <SearchIcon className="h-5 w-5 shrink-0 text-muted" />
          <input ref={input} dir="auto" value={q} onChange={(e) => setQ(e.target.value)} role="combobox" aria-expanded={hits.length > 0} aria-controls={id} aria-activedescendant={hits[sel] ? `${id}-${sel}` : undefined} aria-label={t('بحث', 'Search')} placeholder={t('دوّر في الكلمات والقواعد والقراءة والكتابة A1-C2', 'Search vocabulary, grammar, reading and writing A1-C2')} className="w-full bg-transparent py-1 text-lg outline-none" />
          <button onClick={onClose} className="rounded-lg border border-line px-2 py-1 text-xs font-bold text-muted">Esc</button>
        </div>
        <ul id={id} role="listbox" className="max-h-[60vh] overflow-y-auto p-2">
          {hits.map((h, k) => (
            <li key={h.kind + h.href + h.title} id={`${id}-${k}`} role="option" aria-selected={k === sel} onMouseEnter={() => setSel(k)} onClick={() => go(h)}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2 ${k === sel ? 'bg-accent text-accent-ink' : ''}`}>
              <span className="min-w-0">
                <span dir="auto" className="de block truncate font-semibold">{h.title}</span>
                <span dir="auto" className={`block truncate text-sm ${k === sel ? 'opacity-90' : 'text-muted'}`}>{h.sub}</span>
              </span>
              <span className="shrink-0 text-xs font-bold opacity-80">{lang === 'ar' ? KIND[h.kind][0] : KIND[h.kind][1]}</span>
            </li>
          ))}
          {q.trim().length >= 2 && hits.length === 0 && <li className="px-3 py-4 text-center text-muted">{t('مفيش نتائج', 'No results')}</li>}
          {q.trim().length < 2 && <li className="px-3 py-4 text-center text-sm text-muted">{t('اكتب حرفين على الأقل. اختصار: / أو Ctrl+K', 'Type at least 2 letters. Shortcut: / or Ctrl+K')}</li>}
        </ul>
      </div>
    </div>
  );
}
