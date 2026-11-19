'use client';
import {saveResume} from '@/lib/resume';
import {localActivity} from '@/lib/local-activity';
import {useLocalClock} from '@/lib/use-local-clock';
import PwaRuntime from './PwaRuntime';
import SpeechNotice from './SpeechNotice';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import Flame from './Flame';
import CloseIcon from './CloseIcon';
import SheetLink from './SheetLink';
import { useAuth, useStore, level } from '@/lib/store';
import { useLang, useT } from '@/lib/i18n';
import {applyAppearance,readAppearance,persistAppearanceBrowser} from '@/lib/appearance';
import StudyNavigation from './StudyNavigation';
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
  useEffect(()=>{const save=()=>saveResume(path.endsWith('/')?path:path+'/',location.hash);save();window.addEventListener('hashchange',save);return()=>window.removeEventListener('hashchange',save)},[path]);
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
    const sync=()=>{const resolved=readAppearance(s.theme);applyAppearance(resolved);persistAppearanceBrowser(resolved)};sync();window.addEventListener('storage',sync);window.addEventListener('deutschy:appearance',sync);return()=>{window.removeEventListener('storage',sync);window.removeEventListener('deutschy:appearance',sync)};
  }, [s.theme]);
  const navigation = <StudyNavigation path={path} isAdmin={Boolean(user?.isAdmin)} onSearch={()=>{setOpen(false);setSearching(true)}}/>;
  return (
    <>
      <AuthSync />
      <SpeechNotice />
      <a href="#main" className="sr-only z-50 rounded-lg bg-accent focus:px-4 focus:py-2 font-bold text-accent-ink focus:not-sr-only focus:fixed focus:start-3 focus:top-3">{t('روح للمحتوى', 'Skip to content')}</a>
      <SearchBox open={searching} onClose={() => setSearching(false)} />
      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
        <div className="flex items-center gap-2 px-4 sm:gap-3 py-2.5">
          <button aria-label={t('القائمة', 'Menu')} aria-haspopup="dialog" aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line md:hidden">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
          <Link href="/" className="de inline-flex min-h-11 items-center text-2xl font-semibold tracking-tight" dir="ltr">Deutsch<span className="text-accent">y</span></Link>
          <div className="num ms-auto hidden md:flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-xs font-bold text-muted" dir="ltr">
            <span className="max-sm:hidden">Lv {level(s.xp)}</span><span title={`${s.xp} XP`}>{s.xp >= 10000 ? new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(s.xp) : s.xp} XP</span>
            <span aria-label={t(`السلسلة الحالية: ${currentStreak}`,`Current streak: ${currentStreak}`)} className="inline-flex items-center gap-0.5 text-accent"><Flame />{currentStreak}</span>
          </div>
          <button onClick={() => setSearching(true)} aria-label={t('بحث', 'Search')} className="ms-auto flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line hover:bg-card md:ms-0"><SearchIcon className="h-4 w-4" /></button>
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} aria-label={lang === 'ar' ? 'EN English' : 'عربي Arabic'} className="flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line px-2 text-xs font-bold hover:bg-card">
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
          {user === undefined ? <span className="hidden h-7 w-8 sm:inline-block sm:w-14" aria-hidden="true" /> : user ? (
            <Link href="/account/" className="hidden rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-accent-ink sm:inline-block">{user.name.split(' ')[0]}</Link>
          ) : (
            <Link href="/account/" aria-label={t("دخول", "Sign in")} className="hidden min-h-11 min-w-11 items-center justify-center rounded-xl bg-accent px-2 text-xs font-bold text-accent-ink sm:flex"><span className="hidden sm:inline">{t("دخول", "Sign in")}</span><svg viewBox="0 0 24 24" className="h-4 w-4 sm:hidden" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 22v-3a8 8 0 0 1 16 0v3" /></svg></Link>
          )}
        </div>
      </header>
      <dialog ref={mobileNavigation} id="mobile-navigation" aria-label={t('التنقل', 'Navigation')}
        onCancel={e => { e.preventDefault(); setOpen(false); }}
        onKeyDown={e => {
          if (e.key !== 'Tab') return;
          const controls = e.currentTarget.querySelectorAll<HTMLElement>('button, a[href], summary');
          const visible=[...controls].filter(e=>e.checkVisibility());const first = visible[0], last = visible[visible.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
        }}
        onClick={e => {
          if (e.target !== e.currentTarget) return;
          const bounds = e.currentTarget.getBoundingClientRect();
          if (e.clientX < bounds.left || e.clientX > bounds.right || e.clientY < bounds.top || e.clientY > bounds.bottom) setOpen(false);
        }}
        className="fixed inset-y-0 start-0 end-auto m-0 h-dvh max-h-none w-72 max-w-[calc(100%-2rem)] overflow-y-auto border-e border-line bg-paper p-3 text-ink backdrop:bg-black/40 md:hidden">
        <div className="mb-4 flex items-center justify-between gap-3 border-b border-line pb-3">
          <h2 className="ar-title text-lg font-bold">{t('التنقل', 'Navigation')}</h2>
          <button type="button" aria-label={t('اقفل القائمة', 'Close menu')} onClick={() => setOpen(false)} className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-line p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"><CloseIcon/></button>
        </div>
        <Link data-mobile-account href="/account/" onClick={() => setOpen(false)} className="mb-3 flex min-h-11 items-center gap-2 rounded-xl border border-line px-3 text-sm font-bold text-accent focus-visible:outline-2 focus-visible:outline-accent">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/></svg>
          {user?t('حسابي','My account'):t('تسجيل الدخول','Sign in')}
        </Link>
        <div onClick={e => { if ((e.target as HTMLElement).closest('a[href]')) setOpen(false); }}>{navigation}</div>
      </dialog>
      <aside className="fixed bottom-0 top-[65px] z-40 hidden w-64 overflow-y-auto border-e border-line bg-paper p-3 start-0 md:block" aria-label={t('التنقل', 'Navigation')}>
        {navigation}
      </aside>
      <PwaRuntime />
      <main id="main" tabIndex={-1} className="outline-none px-4 pb-28 pt-6 md:pb-8 md:ps-72 md:pe-8">
        <div className="mx-auto max-w-5xl">{storageError&&<p role="alert" className="mb-4 rounded-xl border border-line bg-card p-4">{t('سجل التدريب مش قابل للتحديث أو جزء منه مش مقروء. الأصل متساب من غير تغيير؛ الإجابات الجديدة ممكن ماتتحفظش. احتفظ بنسخة من أي كلام مهم قبل إعادة التحميل.','Practice data cannot be updated or part of its record cannot be read. The original is unchanged; new answers may not be saved. Copy important text before reloading.')}</p>}{children}<SheetLink /></div>
      </main>
      <nav aria-label={t('التنقل السريع','Quick navigation')} className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 border-t border-line bg-card pb-[env(safe-area-inset-bottom)] shadow-lg md:hidden">{[['/','دفترى','Journal','home'],['/lernpfad/','المسار','Path','path'],['/lessons/','المكتبة','Library','library'],['/progress/','تقدمي','Progress','progress']].map(([href,ar,en,icon])=><Link key={href} href={href} aria-current={path===href?'page':undefined} className={`flex min-h-16 flex-col items-center justify-center gap-1 px-1 text-xs font-bold ${path===href?'bg-accent/10 text-accent':'text-muted'}`}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">{icon==='home'?<path d="m3 10 9-7 9 7v10H3Zm5 10v-7h8v7"/>:icon==='path'?<path d="M5 20v-5a3 3 0 0 1 3-3h8a3 3 0 0 0 0-6H5m0 0 3-3M5 6l3 3m-3 8v3h3"/>:icon==='library'?<path d="M3 4h7v16H3zm11 0h7v16h-7M6 8h1m10 0h1"/>:<path d="M4 20h16M7 16v-4m5 4V8m5 8V4"/>}</svg><span>{t(ar,en)}</span></Link>)}</nav>
    </>
  );
}
