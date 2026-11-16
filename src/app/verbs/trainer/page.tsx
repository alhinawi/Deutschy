import ConjTrainer from '@/components/ConjTrainer';
import { T } from '@/lib/i18n';

export const metadata = { title: 'Conjugation trainer – Deutschy' };
export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold"><T ar="تدريب التصريف" en="Conjugation trainer" /></h1>
      <p className="text-muted"><T ar="اكتب الصيغة الصح للفعل في المضارع أو الماضي البسيط أو الماضي التام. 10 أسئلة في الجولة." en="Type the correct form in Präsens, Präteritum or Perfekt. 10 questions per round." /></p>
      <ConjTrainer />
    </div>
  );
}
