import LearningHelper from '@/components/LearningHelper';
import {T} from '@/lib/i18n';
export const metadata={title:'German study helper - Deutschy',description:'Short German study questions with Egyptian Arabic explanations,free daily limits and no saved conversation.'};
export default function Helper(){return <div className="mx-auto max-w-3xl space-y-5"><h1 className="ar-title text-4xl font-bold"><T ar="مساعد مذاكرة الألماني" en="German study helper"/></h1><p><T ar="اتكلم مع مدرس ألماني بالمصري: اسأل، ابعت جملة يصححهالك، أو اطلب ترجمة. اختار مستواك فوق." en="Short Egyptian Arabic explanations with German examples. A study helper,not an accredited teacher or official level assessment."/></p><LearningHelper/></div>}
