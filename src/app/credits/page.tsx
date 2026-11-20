import lessonPhotos from '../../../data/lesson-photo-credits187.json';
import {photoLicenseUrl} from '@/lib/photo-license';
import CreditsBrowser from '@/components/CreditsBrowser';
import { T } from '@/lib/i18n';
export const metadata = { title: 'Photo credits - Deutschy' };
export default function Credits() {
  return <div className="space-y-6">
    <h1 className="ar-title text-4xl font-bold"><T ar="حقوق الصور" en="Photo credits" /></h1>
    <p className="text-muted"><T ar="الصور من Wikimedia Commons ومصادر تانية بترخيص يسمح باستخدامها. دور على أي كلمة عشان تلاقي المصوّر والترخيص ورابط الملف الأصلي. الصور اتصغّرت واتضغطت للموقع؛ القص مسجّل عند الصور اللي اتقصّت." en="Photos are from Wikimedia Commons and other sources licensed for reuse. Search any word for its author, license and original file link. Images are resized and compressed for this site; cropped images are marked." /></p>
    <details className="rounded-2xl border border-line bg-card p-4"><summary className="min-h-11 cursor-pointer py-2 font-bold"><T ar="صور القواعد والمواقف" en="Grammar and context photographs"/></summary><p className="my-3 text-sm text-muted"><T ar="الصور بتظهر بقص مناسب للمساحة؛ النسخ اتصغّرت واتضغطت من غير قص دائم. باقي صور الدروس ليها نفس حقوق كلماتها في البحث تحت." en="Images use display crops; display copies are resized and compressed without permanent crops. Other lesson photos keep their word credits in the search below."/></p><ul className="space-y-3">{lessonPhotos.map(p=><li key={p.id} className="break-words border-t border-line pt-3" dir="ltr"><p className="font-bold">{p.title}</p><p>{p.author}</p><p>{photoLicenseUrl(p.license)?<a className="underline" href={photoLicenseUrl(p.license)} target="_blank" rel="noreferrer">{p.license}</a>:p.license}</p><a className="inline-flex min-h-11 items-center underline" href={p.source} target="_blank" rel="noreferrer"><T ar="الملف الأصلي" en="Original file"/></a></li>)}</ul></details>
    <details className="rounded-2xl border border-line bg-card p-4"><summary className="min-h-11 cursor-pointer py-2 font-bold"><T ar="مصادر البيانات" en="Data sources"/></summary><ul className="my-3 list-disc space-y-2 ps-6 text-sm">
      <li><T ar="أدوات وجموع الأسماء: مستخرجة من Wiktionary الألماني عبر مستودع gambolputty/german-nouns، بترخيص " en="Noun articles and plurals: extracted from the German Wiktionary via the gambolputty/german-nouns repository, licensed "/><a className="underline" dir="ltr" href="https://github.com/gambolputty/german-nouns" target="_blank" rel="noreferrer">CC BY-SA 4.0</a>.</li>
      <li><T ar="ترتيب اختيار الكلمات الأكثر استخداماً: قوائم Hermit Dave FrequencyWords (مصدرها OpenSubtitles2018)، بترخيص " en="Most-used word selection ranking: Hermit Dave FrequencyWords lists (from OpenSubtitles2018), licensed "/><a className="underline" dir="ltr" href="https://github.com/hermitdave/FrequencyWords" target="_blank" rel="noreferrer">CC BY-SA 4.0</a>.</li>
      <li><T ar="تصريف الأفعال: مستودع german-verbs-dict بترخيص " en="Verb conjugations: the german-verbs-dict repository, licensed "/><a className="underline" dir="ltr" href="https://github.com/rosae-group/german-verbs-dict" target="_blank" rel="noreferrer">Apache-2.0</a>.</li>
      <li><T ar="المعاني بالمصري والجمل والتدريبات: تأليف داخلي للموقع." en="Egyptian Arabic meanings, sentences and exercises: authored in-house."/></li>
    </ul></details>
    <CreditsBrowser />
    <noscript>JavaScript is needed to search and page through all photo credits.</noscript>
  </div>;
}
