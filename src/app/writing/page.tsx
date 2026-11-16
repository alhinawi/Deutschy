import Link from 'next/link';import {T} from '@/lib/i18n';
import WritingView from '@/components/WritingView';

export const metadata = { title: 'Writing practice – Deutschy' };
export default function Page() {
  return <div className="space-y-5"><Link href="/writing-frames/" className="underline"><T ar="جديد: خطط الرسائل وقوائم المراجعة A1-B2" en="New: A1-B2 letter frames and self-checklists"/></Link><WritingView /></div>;
}
