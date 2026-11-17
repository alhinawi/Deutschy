import LessonBrowser from '@/components/LessonBrowser';
import { T } from '@/lib/i18n';

export const metadata = { title: 'Lessons – Deutschy' };

export default function Lessons() {
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold"><T ar="الدروس · المستوى A1" en="Lessons · Level A1" /></h1>
      <p className="text-muted"><T ar="كل درس عن موضوع واحد. راجع الصورة والاسم والأداة، وبعدين اختبر نفسك في نفس الكلمات." en="Each lesson is one topic. Open it, study the cards, then play the games on the same words." /></p>
      <LessonBrowser />
    </div>
  );
}
