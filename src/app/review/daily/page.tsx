import AnswerReview from '@/components/AnswerReview';
import ReviewView from '@/components/ReviewView';
export const metadata={title:'Your daily review - Deutschy',robots:{index:false,follow:true}};
export default function Page(){return <div className="space-y-12"><AnswerReview/><section className="border-t border-line pt-8"><ReviewView/></section></div>;}
