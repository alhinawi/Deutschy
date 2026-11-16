import VerbTable from '@/components/VerbTable';
import { T } from '@/lib/i18n';

export const metadata = { title: 'Strong and irregular verbs – Deutschy' };
export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold"><T ar="الأفعال القوية والشاذة" en="Strong and irregular verbs" /></h1>
      <p className="text-muted"><T ar="جدول لكل مستوى: الصيغة مع er/sie/es، الماضي البسيط، والماضي التام مع فعل المساعدة." en="One table per level: the er/sie/es form, Präteritum and Perfekt with its auxiliary." /></p>
      <VerbTable />
    </div>
  );
}
