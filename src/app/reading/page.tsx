import Link from 'next/link';
import { T } from '@/lib/i18n';
import { readings } from '@/lib/reading';

export const metadata = { title: 'Lesen – Deutschy' };
export default function Reading() {
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold"><T ar="القراءة" en="Reading" /></h1>
      <p className="text-muted"><T ar="نصوص قصيرة من A1 لـ B1 وأسئلة بعد كل نص. اضغط على الترجمة بس لما تحتاجها." en="Short texts from A1 to B1 with questions after each one. Open the translation only when you need it." /></p>
      <div className="grid gap-4 sm:grid-cols-2">
        {readings.map((r) => (
          <Link key={r.id} href={`/reading/${r.id}/`} className="rounded-2xl border border-line bg-card p-5 hover:border-accent">
            <span className="num rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent">{r.level}</span>
            <p className="de mt-2 text-2xl font-semibold">{r.title[0]}</p>
            <p className="ar-title text-lg text-muted"><T ar={r.title[1]} en={r.de[0].slice(0, 70) + '…'} /></p>
          </Link>
        ))}
      </div>
    </div>
  );
}
