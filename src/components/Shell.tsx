'use client';
import {saveResume} from '@/lib/resume';
import {localActivity} from '@/lib/local-activity';
import {useLocalClock} from '@/lib/use-local-clock';
import SpeechNotice from './SpeechNotice';
import PwaStatus from './PwaStatus';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import Flame from './Flame';
import CloseIcon from './CloseIcon';
import SheetLink from './SheetLink';
import { useAuth, useStore, level } from '@/lib/store';
import { useLang, useT } from '@/lib/i18n';
import { sidebar } from '@/lib/nav';
import AuthSync from './AuthSync';
import SearchBox, { SearchIcon } from './SearchBox';

export default function Shell({ children }: { children: ReactNode }) {
  const user = useAuth();
  const { s,storageError } = useStore();
  const now=useLocalClock();
  const currentStreak=localActivity(s,now).currentStreak;
  const { lang, setLang } = useLang();
  const t = useT();
  const path = usePathname() ?? '/';
  useEffect(()=>{const save=()=>saveResume(path,location.hash);save();window.addEventListener('hashchange',save);return()=>window.removeEventListener('hashchange',save)},[path]);
  const [open, setOpen] = useState(false);
  const mobileNavigation = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!open) return;
    const dialog = mobileNavigation.current;
    if (!dialog) return;
    const desktop = window.matchMedia('(min-width: 768px)');
    if (desktop.matches) { setOpen(false); return; }
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    const resize = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', resize);
    return () => {
      desktop.removeEventListener('change', resize);
      dialog.close();
      document.body.style.overflow = overflow;
    };
  }, [open]);
  const [searching, setSearching] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      const typing = !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
      if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && !typing && !e.ctrlKey && !e.metaKey)) { e.preventDefault(); setOpen(false); setSearching(true); }
      else if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = user?.isAdmin ? s.theme || 'papier' : 'papier';
  }, [user, s.theme]);
  const activeHref = sidebar.flatMap((g) => g.items).filter((i) => i.href === '/' ? path === '/' : path === i.href || path.startsWith(i.href.endsWith('/') ? i.href : i.href + '/')).sort((a, b) => b.href.length - a.href.length)[0]?.href;
  const active = (href: string) => href === activeHref;
  const navigation = (
        <nav className="space-y-4 text-sm font-semibold">
          {sidebar.map((g) => (
            <div key={g.id}>
              <p className="px-3 pb-1 text-xs font-bold uppercase tracking-wide text-muted">{t(g.ar, g.en)}</p>
              <ul className="space-y-0.5">
                {g.items.filter((i) => !i.admin || user?.isAdmin).map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className={`flex items-center justify-between rounded-lg px-3 py-2 ${active(i.href) ? 'bg-accent text-accent-ink' : 'hover:bg-card'}`}>
                      <span>{t(i.ar, i.en)}</span>
                      {i.tag && <span className="de num text-xs opacity-70">{i.tag}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
  );
  return (
    <>
      <AuthSync />
      <SpeechNotice />
      <a href="#main" className="sr-only z-50 rounded-lg bg-accent focus:px-4 focus:py-2 font-bold text-accent-ink focus:not-sr-only focus:fixed focus:start-3 focus:top-3">{t('روح للمحتوى', 'Skip to content')}</a>
      <SearchBox open={searching} onClose={() => setSearching(false)} />
      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
        <div className="flex items-center gap-2 px-4 sm:gap-3 py-2.5">
          <button aria-label={t('القائمة', 'Menu')} aria-haspopup="dialog" aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg border border-line p-2 md:hidden">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
          <Link href="/" className="de text-2xl font-semibold tracking-tight" dir="ltr">Deutsch<span className="text-accent">y</span></Link>
          <div className="num ms-auto max-[360px]:hidden flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-xs font-bold text-muted" dir="ltr">
            <span className="max-sm:hidden">Lv {level(s.xp)}</span><span title={`${s.xp} XP`}>{s.xp >= 10000 ? new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(s.xp) : s.xp} XP</span>
            <span aria-label={t(`السلسلة الحالية: ${currentStreak}`,`Current streak: ${currentStreak}`)} className="inline-flex items-center gap-0.5 text-accent"><Flame />{currentStreak}</span>
          </div>
          <button onClick={() => setSearching(true)} aria-label={t('بحث', 'Search')} className="rounded-full border border-line p-1.5 hover:bg-card"><SearchIcon className="h-4 w-4" /></button>
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} aria-label={lang === 'ar' ? 'EN English' : 'عربي Arabic'} className="rounded-full border border-line px-2.5 py-1 text-xs font-bold whitespace-nowrap sm:px-3 hover:bg-card">
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
          {user === undefined ? <span className="inline-block h-7 w-8 sm:w-14" aria-hidden="true" /> : user ? (
            <Link href="/account/" className="hidden rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-accent-ink sm:inline-block">{user.name.split(' ')[0]}</Link>
          ) : (
            <Link href="/account/" aria-label={t("دخول", "Sign in")} className="rounded-full bg-accent px-2.5 py-1.5 text-xs font-bold whitespace-nowrap sm:px-3 text-accent-ink"><span className="hidden sm:inline">{t("دخول", "Sign in")}</span><svg viewBox="0 0 24 24" className="h-4 w-4 sm:hidden" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 22v-3a8 8 0 0 1 16 0v3" /></svg></Link>
          )}
        </div>
      </header>
      <dialog ref={mobileNavigation} id="mobile-navigation" aria-label={t('التنقل', 'Navigation')}
        onCancel={e => { e.preventDefault(); setOpen(false); }}
        onKeyDown={e => {
          if (e.key !== 'Tab') return;
          const controls = e.currentTarget.querySelectorAll<HTMLElement>('button, a[href]');
          const first = controls[0], last = controls[controls.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
        }}
        onClick={e => {
          if (e.target !== e.currentTarget) return;
          const bounds = e.currentTarget.getBoundingClientRect();
          if (e.clientX < bounds.left || e.clientX > bounds.right || e.clientY < bounds.top || e.clientY > bounds.bottom) setOpen(false);
        }}
        className="fixed inset-y-0 start-0 end-auto m-0 h-dvh max-h-none w-72 max-w-[calc(100%-2rem)] overflow-y-auto border-e border-line bg-paper p-3 text-ink backdrop:bg-black/40 md:hidden">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="ar-title text-lg font-bold">{t('التنقل', 'Navigation')}</h2>
          <button type="button" aria-label={t('اقفل القائمة', 'Close menu')} onClick={() => setOpen(false)} className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-line p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"><CloseIcon/></button>
        </div>
        <div onClick={e => { if ((e.target as HTMLElement).closest('a[href]')) setOpen(false); }}>{navigation}</div>
      </dialog>
      <aside className="fixed bottom-0 top-[53px] z-40 hidden w-64 overflow-y-auto border-e border-line bg-paper p-3 start-0 md:block" aria-label={t('التنقل', 'Navigation')}>
        {navigation}
      </aside>
      <main id="main" tabIndex={-1} className="outline-none px-4 py-8 md:ps-72 md:pe-8">
        <div className="mx-auto max-w-5xl">{storageError&&<p role="alert" className="mb-4 rounded-xl border border-line bg-card p-4">{t('التقدم المحلي مش قابل للحفظ أو جزء من سجله مش مقروء. الأصل متساب من غير تغيير؛ الإجابات الجديدة ممكن ماتتحفظش. متحذفش بيانات المتصفح قبل ما تحتفظ بنسخة لو السجل مهم ليك.','Local progress cannot be saved or part of its record cannot be read. The original is unchanged; new answers may not be saved. Keep a copy before clearing browser data if this history matters to you.')}</p>}{children}<SheetLink /><p className="mt-6 text-sm text-muted">{t('الصوت المصنّع: ','Synthesized speech: ')}<a href="https://elevenlabs.io" className="underline" title="German synthesized speech | elevenlabs.io">elevenlabs.io</a>{t('، مش تسجيل بشري. حسب توفر الكلمة والصوت المختار.','; not a human recording. Availability depends on the phrase and selected voice.')}</p><PwaStatus /></div>
      </main>
    </>
  );
}
