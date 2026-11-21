import {T} from '@/lib/i18n';
import ReadingBrowser from '@/components/ReadingBrowser';
export const metadata={title:'Lesen – Deutschy'};
export default function Reading(){return <div className="space-y-6">
 <h1 className="ar-title text-4xl font-bold"><T ar="القراءة" en="Reading"/></h1>
 <p className="text-muted"><T ar="نصوص قصيرة متقسّمة لمجموعات تدريب تقريبية من A1 لحد C2، مش تقييم لمستواك. دوّر بعنوان أو كلمة، واقرأ النص الأول وافتح الترجمة لما تحتاجها." en="Short texts in approximate A1-C2 practice groups, not a proficiency assessment. Search by title or word, then read before opening the translation."/></p>
 <ReadingBrowser/>
 </div>}
