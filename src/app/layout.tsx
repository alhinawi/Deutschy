import type { Metadata } from 'next';
import {appearanceThemes,DEFAULT_APPEARANCE} from '@/lib/appearance';
import './globals.css';
import { LangProvider } from '@/lib/i18n';
import AccountStateBoundary from '@/components/AccountStateBoundary';
import Shell from '@/components/Shell';

export const metadata: Metadata = {
  title: 'Deutschy – Learn German A1 to C2 · تعلّم الألماني',
  description: 'Learn German at every level, A1 to C2, with real photos and games, explained in Egyptian Arabic and English. منصة لتعلم الألماني بكل مستوياته بالصور والألعاب.',
  twitter: { card: 'summary_large_image', title: 'Deutschy', images: ['/og.png'] },
  icons: { icon: '/favicon.svg' },
  metadataBase: new URL('https://deutschy.pages.dev'),
  openGraph: { title: 'Deutschy', description: 'تعلّم الألماني بكل مستوياته بالصور والألعاب · Learn German A1 to C2', url: 'https://deutschy.pages.dev', locale: 'ar_EG', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Deutschy - German practice' }] },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Applies the per-browser saved theme before first paint so the site never
  // flashes the default look (owner request, Nov 19 2026). Only the appearance
  // key is read; a failure leaves the default theme in place.
  const themeMap=Object.fromEntries(appearanceThemes.map(t=>[t.id,t.className]));
  const allClasses=[...new Set(appearanceThemes.flatMap(t=>t.className.split(' ')))];
  const themeScript=`(function(){try{var m=${JSON.stringify(themeMap)},all=${JSON.stringify(allClasses)},t=window.localStorage.getItem('deutschy:appearance');if(t&&m[t]){var r=document.documentElement;r.classList.remove.apply(r.classList,all);for(var c of m[t].split(' '))r.classList.add(c);r.dataset.theme=t}}catch(e){}})();`;
  return (
    <html lang="ar" dir="rtl" data-theme={DEFAULT_APPEARANCE} className={appearanceThemes[0].className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preload" href="/fonts/cairo-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/amiri-bold-arabic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/fraunces-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <LangProvider><AccountStateBoundary><Shell>{children}</Shell></AccountStateBoundary></LangProvider>
      </body>
    </html>
  );
}
