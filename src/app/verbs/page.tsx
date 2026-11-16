import VerbBrowser from '@/components/VerbBrowser';
import { T } from '@/lib/i18n';
import { arVerbs } from '@/lib/arcount';
import { verbs } from '@/lib/verbs';

export const metadata = { title: 'Verbs – Deutschy' };
export default function VerbsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="ar-title text-4xl font-bold"><T ar="الأفعال والتصريف" en="Verbs and conjugation" /></h1>
        <p className="mt-2 max-w-2xl text-muted"><T ar={`${arVerbs(verbs.length)} بتصريف المضارع والـ Perfekt والـ Präteritum، مع الأفعال القوية والشاذة والمنفصلة والانعكاسية.`} en={`${verbs.length} verbs with present, Perfekt and Präteritum, including strong, irregular, separable and reflexive verbs.`} /></p>
      </div>
      <VerbBrowser />
    </div>
  );
}
