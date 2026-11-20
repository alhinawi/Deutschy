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
  const dialog = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const mod = useRef<typeof import('@/lib/search-index') | null>(null);
  const id = useId();
  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setQ(''); setHits([]); setSel(0);
    input.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    let active = true;
    const run = (m: typeof import('@/lib/search-index')) => {
      if (!active) return;
      setHits(m.search(q)); setSel(0);
    };
    if (mod.current) run(mod.current);
    else import('@/lib/search-index').then((m) => { mod.current = m; run(m); });
    return () => { active = false; };
  }, [q, open]);
  useEffect(() => {
    if (open) list.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [sel, hits, open]);
  if (!open) return null;
  const go = (h: Hit) => { onClose(); router.push(h.href); };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Tab') {
      const controls = dialog.current?.querySelectorAll<HTMLElement>('input, button, a[href], [tabindex="0"]');
      if (!controls?.length) return;
      const first = controls[0], last = controls[controls.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      return;
    }
    if (e.key === 'Escape') { e.preventDefault(); onClose(); }
    else if (e.target === input.current && e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.max(0, Math.min(s + 1, hits.length - 1))); }
    else if (e.target === input.current && e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    else if (e.target === input.current && e.key === 'Enter' && hits[sel]) { e.preventDefault(); go(hits[sel]); }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-3 pt-16" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={dialog} role="dialog" aria-modal="true" aria-label={t('بحث', 'Search')} onKeyDown={onKey} className="w-full max-w-xl rounded-2xl border border-line bg-paper shadow-xl">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <SearchIcon className="h-5 w-5 shrink-0 text-muted" />
          <input ref={input} dir="auto" data-search-input value={q} onChange={(e) => setQ(e.target.value)} role="combobox" aria-expanded={hits.length > 0} aria-controls={id} aria-activedescendant={hits[sel] ? `${id}-${sel}` : undefined} aria-label={t('بحث', 'Search')} placeholder={t('دوّر في الكلمات والقواعد والقراءة والكتابة A1-C2', 'Search vocabulary, grammar, reading and writing A1-C2')} className="w-full bg-transparent py-1 text-lg outline-none" />
          <button aria-label={t('اقفل البحث', 'Close search')} onClick={onClose} className="rounded-lg border border-line px-2 py-1 text-xs font-bold text-muted">Esc</button>
        </div>
        <ul ref={list} id={id} role="listbox" className="max-h-[60vh] overflow-y-auto p-2">
          {hits.map((h, k) => (
            <li key={h.kind + h.href + h.title} id={`${id}-${k}`} role="option" aria-selected={k === sel} onMouseEnter={() => setSel(k)} onClick={() => go(h)}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2 ${k === sel ? 'bg-accent text-accent-ink' : ''}`}>
              <span className="min-w-0">
                <span dir="auto" className="de block truncate font-semibold">{h.title}</span>
                <span dir="auto" className={`block truncate text-sm ${k === sel ? '' : 'text-muted'}`}>{h.sub}</span>
              </span>
              <span className={`shrink-0 text-xs font-bold ${k === sel ? '' : 'text-muted'}`}>{lang === 'ar' ? KIND[h.kind][0] : KIND[h.kind][1]}</span>
            </li>
          ))}
          {q.trim().length >= 2 && hits.length === 0 && <li className="px-3 py-4 text-center text-muted">{t('مفيش نتائج. جرّب كلمة أقصر، أو دوّر على فعل زي gehen أو كلمة زي Haus.', 'No results. Try a shorter term, or search a verb like gehen or a noun like Haus.')}</li>}
          {q.trim().length < 2 && <li className="px-3 py-4 text-center text-sm text-muted">{t('اكتب حرفين على الأقل. اختصار: / أو Ctrl+K', 'Type at least 2 letters. Shortcut: / or Ctrl+K')}</li>}
        </ul>
      </div>
    </div>
  );
}
