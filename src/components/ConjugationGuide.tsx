'use client';
import {useT} from '@/lib/i18n';
export default function ConjugationGuide(){
 const t=useT();
 return <details className="rounded-xl border border-line bg-card p-4">
  <summary className="min-h-11 cursor-pointer py-2 font-bold">{t('إزاي تفهم الصيغ، مش تحفظها بس؟','How do the forms differ?')}</summary>
  <div className="mt-3 space-y-3">
   <p>{t('الماضي البسيط وصيغة الافتراض ممكن يبقوا نفس الحروف، خصوصا مع الأفعال المنتظمة. اسم الصيغة فوق هو المطلوب في التدريب؛ الجملة الكاملة هي اللي بتوضح المعنى في الكلام الحقيقي.','The simple past and hypothetical form can look identical, especially with regular verbs. This exercise names the target form; a full sentence supplies the meaning in real use.')}</p>
   <p className="de" dir="ltr">Gestern arbeitete ich zu Hause.</p>
   <p>{t('امبارح اشتغلت من البيت: ده خبر عن الماضي.','Yesterday I worked from home: a statement about the past.')}</p>
   <p className="de" dir="ltr">Wenn ich mehr Zeit hätte, würde ich zu Hause arbeiten.</p>
   <p>{t('لو كان عندي وقت أكتر، كنت هشتغل من البيت: ده افتراض. تركيب الفعل المساعد مع المصدر هنا بيوضح الافتراض بدل الشكل المشترك.','If I had more time, I would work from home: a hypothetical situation. The würde construction makes that meaning clearer than the shared simple form.')}</p>
   <p>{t('صيغة الكلام المنقول كمان ممكن تطابق الخبر. إحنا بنعرض التصريف الأساسي زي الجدول؛ اختيار بديل أوضح في تقرير أو خبر محتاج سياق. وصيغ الافتراض مش كلها شائعة بنفس الدرجة في الكلام اليومي.','Reported-speech forms can also match the indicative. We show the basic paradigm; choosing a clearer replacement in a report needs context. Not every simple hypothetical form is equally common in conversation.')}</p>
   <p>{t('في جدول كل زمن هتلاقي تصريف مستقل لكل ضمير. البدائل الصحيحة اللي راجعناها بتتقبل وبتظهر مفصولة بشرطة مائلة.','Each tense has a form for every person. Verified alternative spellings are accepted and appear separated by a slash in the reference table.')}</p>
   <div className="flex flex-wrap gap-3 text-sm">
    <a className="min-h-11 py-3 underline" href="https://www.duden.de/sprachwissen/sprachratgeber/Konjunktiv-2-oder-w%C3%BCrde-Form" target="_blank" rel="noreferrer">{t('شرح بديل الافتراض','Duden: hypothetical alternatives')}</a>
    <a className="min-h-11 py-3 underline" href="https://grammis.ids-mannheim.de/systematische-grammatik/1613" target="_blank" rel="noreferrer">{t('جداول الأفعال المساعدة','IDS: auxiliary forms')}</a>
   </div>
  </div>
 </details>;
}
