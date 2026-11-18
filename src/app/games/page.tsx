import {T} from '@/lib/i18n';
import GamesBrowser from '@/components/GamesBrowser';
export const metadata={title:'Games – Deutschy'};
export default function Games(){return <div className="space-y-6">
 <h1 className="ar-title text-4xl font-bold"><T ar="ألعاب" en="Games" /></h1>
 <p className="text-muted"><T ar="اختار تدريب للكلمات والقواعد والاستماع والقراءة. تفاصيل النقط بتظهر جوّه كل لعبة، والصوت بيشتغل لما تضغط عليه." en="Choose vocabulary, grammar, listening or reading practice. Point details appear inside each game, and sounds play when you tap them." /></p>
 <GamesBrowser />
 </div>}
