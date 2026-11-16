import Link from 'next/link';
import {T} from '@/lib/i18n';
import DialogueView from '@/components/DialogueView';

export const metadata = { title: 'Dialogues – Deutschy' };
export default function Page() {
  return <div className="space-y-4"><Link href="/egypt-dialogues/" className="underline"><T ar="جديد: 16 حوار في سياق مصري A1-B2" en="New: 16 Egyptian-context A1-B2 dialogues"/></Link><DialogueView /></div>;
}
