import CreditsBrowser from '@/components/CreditsBrowser';
import { T } from '@/lib/i18n';
export const metadata = { title: 'Photo credits - Deutschy' };
export default function Credits() {
  return <div className="space-y-6">
    <h1 className="ar-title text-4xl font-bold"><T ar="حقوق الصور" en="Photo credits" /></h1>
    <p className="text-muted"><T ar="الصور من Wikimedia Commons ومصادر تانية بترخيص يسمح باستخدامها. دور على أي كلمة عشان تلاقي المصوّر والترخيص ورابط الملف الأصلي. الصور اتصغّرت واتضغطت للموقع؛ القص مسجّل عند الصور اللي اتقصّت." en="Photos are from Wikimedia Commons and other sources licensed for reuse. Search any word for its author, license and original file link. Images are resized and compressed for this site; cropped images are marked." /></p>
    <CreditsBrowser />
    <noscript>JavaScript is needed to search and page through all photo credits.</noscript>
  </div>;
}
