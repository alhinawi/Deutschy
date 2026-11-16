import Link from 'next/link';
import { T } from '@/lib/i18n';
export default function NotFound() {
  return <section className="mx-auto max-w-2xl space-y-5 py-8">
    <p className="num text-sm font-bold text-accent">404</p>
    <h1 className="ar-title text-4xl font-bold"><T ar="الصفحة دي مش موجودة" en="This page does not exist" /></h1>
    <p className="text-muted"><T ar="ممكن الرابط اتغيّر أو اتكتب غلط. ارجع للدروس، أو افتح البحث من علامة العدسة فوق ودوّر باسم الكلمة أو الموضوع." en="The link may have changed or contain a typo. Return to the lessons, or use the search icon above to find a word or topic." /></p>
    <div className="flex flex-wrap gap-3">
      <Link href="/" className="rounded-full bg-accent px-5 py-3 font-bold text-accent-ink"><T ar="الصفحة الرئيسية" en="Home" /></Link>
      <Link href="/lessons/" className="rounded-full border border-line px-5 py-3 font-bold"><T ar="كل الدروس" en="All lessons" /></Link>
      <Link href="/grammar/" className="rounded-full border border-line px-5 py-3 font-bold"><T ar="القواعد" en="Grammar" /></Link>
    </div>
  </section>;
}
