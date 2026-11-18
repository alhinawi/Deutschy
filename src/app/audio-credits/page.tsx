import Link from 'next/link';
import {T} from '@/lib/i18n';
export const metadata={title:'Sound models - Deutschy'};
export default function AudioCredits(){return <article className="space-y-5 leading-8">
<h1 className="ar-title text-3xl font-bold"><T ar="عن نماذج الأصوات" en="About the sound models"/></h1>
<p><T ar="نماذج العناوين معمولة بمحرك eSpeak NG المجاني من رموز الأصوات مباشرة، مش بقراءة أسماء الحروف. دي نماذج مبسطة بصوت آلي، مش تسجيلات بشرية. اسمع الكلمات كمان عشان تتعلم النطق الطبيعي في سياقه." en="Heading models use the free eSpeak NG engine with explicit phoneme input, rather than reading letter names. They are simplified computer-generated models, not human recordings. Listen to the word examples too for pronunciation in context."/></p>
<p><T ar="الحروف المتحركة ليها نموذج قصير ونموذج طويل. نموذج r بطرف اللسان، وده نطق ألماني صحيح، مش النطق الحلقي الوحيد. الأزرار دي بتشغّل ملفات موجودة في الموقع من غير خدمة صوت مدفوعة." en="Vowels have short and long models. The r model uses the valid German tongue-tip variant, rather than the throat variant. These buttons use files included in the site, with no paid speech service."/></p>
<p dir="ltr"><a className="underline" href="https://github.com/espeak-ng/espeak-ng/tree/1.50">eSpeak NG 1.50</a> · <a className="underline" href="https://github.com/espeak-ng/espeak-ng/blob/1.50/COPYING">Engine license: GPLv3 or later</a></p>
<p><T ar="الموقع بيضم ملفات الصوت الناتجة بس، مش كود المحرك أو قاعدة بياناته. الأصوات معمولة من إعدادات محفوظة عشان نقدر نراجعها ونبدلها بتسجيلات أحسن بعدين." en="Only generated audio is included, not engine code or its voice database. The generation settings are recorded so these models can be reviewed and replaced with better recordings later."/></p>
<Link className="inline-flex min-h-11 items-center underline" href="/pronunciation/"><T ar="ارجع للنطق" en="Back to pronunciation"/></Link>
</article>}
