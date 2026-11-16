import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/lib/i18n';
import Shell from '@/components/Shell';

export const metadata: Metadata = {
  title: 'Deutschy – Learn German A1 to C2 · تعلّم الألماني',
  description: 'Learn German at every level, A1 to C2, with real photos and games, explained in Egyptian Arabic and English. منصة لتعلم الألماني بكل مستوياته بالصور والألعاب.',
  icons: { icon: '/favicon.svg' },
  metadataBase: new URL('https://deutschy.pages.dev'),
  openGraph: { title: 'Deutschy', description: 'تعلّم الألماني بكل مستوياته بالصور والألعاب · Learn German A1 to C2', url: 'https://deutschy.pages.dev', locale: 'ar_EG' },
};

const boot = `try{var l=localStorage.getItem('deutschy:lang')==='en'?'en':'ar';document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" data-theme="papier" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/cairo-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/amiri-bold-arabic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/fraunces-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body>
        <LangProvider><Shell>{children}</Shell></LangProvider>
      </body>
    </html>
  );
}
