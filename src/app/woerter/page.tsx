import WoerterBrowser from '@/components/WoerterBrowser';
import { T } from '@/lib/i18n';
import { woerter } from '@/lib/woerter';

export const metadata = { title: 'Wörter – Deutschy' };
export default function WoerterPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="ar-title text-4xl font-bold"><T ar="قاموس الكلمات" en="Word dictionary" /></h1>
        <p className="mt-2 max-w-2xl text-muted"><T ar={`${woerter.length} كلمة ألمانية بالمعنى بالمصري: أسماء بالأداة والجمع، وأفعال وصفات وظروف. لون الأداة بيقولك نوع الاسم: der أزرق للمذكر، die أحمر للمؤنث، das أخضر للمحايد. دوّر على أي كلمة.`} en={`${woerter.length} German words with Arabic meanings: nouns with article and plural, plus verbs, adjectives and adverbs. The article color shows the gender: der blue, die red, das green. Search any word.`} /></p>
      </div>
      <WoerterBrowser />
    </div>
  );
}
