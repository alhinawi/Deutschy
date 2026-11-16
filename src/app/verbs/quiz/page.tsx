import VerbQuiz from '@/components/VerbQuiz';
import { T } from '@/lib/i18n';

export const metadata = { title: 'Verb quiz – Deutschy' };
export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold"><T ar="اختبار الأفعال" en="Verb quiz" /></h1>
      <p className="text-muted"><T ar="10 أسئلة عشوائية على تصريف المضارع وصيغة الماضي واختيار فعل المساعدة. كل إجابة صح بـ 5 XP." en="10 random questions: present forms, Partizip II, and haben or sein. 5 XP per right answer." /></p>
      <VerbQuiz />
    </div>
  );
}
