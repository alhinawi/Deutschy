import VerbenBrowser from '@/components/VerbenBrowser';
import { T } from '@/lib/i18n';
import { verben } from '@/lib/verben';

export const metadata = { title: 'Verben – Deutschy' };
export default function VerbsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="ar-title text-4xl font-bold"><T ar="تصريف الأفعال" en="Verb conjugation" /></h1>
        <p className="mt-2 max-w-2xl text-muted"><T ar={`${verben.length} فعل ألماني بتصريفهم الكامل: المضارع والماضي البسيط والماضي التام والافتراضي والأمر. دوّر على أي فعل، أو فلتر بالمستوى والنوع (منتظم، قوي، شاذ، مساعد، منفصل، انعكاسي).`} en={`${verben.length} German verbs with full conjugation: present, simple past, present perfect, subjunctive II and imperative. Search any verb or filter by level and type.`} /></p>
      </div>
      <VerbenBrowser />
    </div>
  );
}
