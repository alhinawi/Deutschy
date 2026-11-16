import GrammarBrowser from '@/components/GrammarBrowser';
import { T } from '@/lib/i18n';
import { arTopics } from '@/lib/arcount';
import { grammar } from '@/lib/grammar';

export const metadata = { title: 'Grammar academy – Deutschy' };
export default function GrammarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="ar-title text-4xl font-bold"><T ar="أكاديمية القواعد" en="Grammar academy" /></h1>
        <p className="mt-2 max-w-2xl text-muted"><T ar={`${arTopics(grammar.length)} من A1 لحد C2. كل موضوع فيه شرح بالمصري، قواعد، أمثلة بنطق، وجدول لو محتاج.`} en={`${grammar.length} topics from A1 to C2. Each has an explanation, rules, spoken examples and a table where needed.`} /></p>
      </div>
      <GrammarBrowser />
    </div>
  );
}
