'use client';
import {useT} from '@/lib/i18n';
export default function SeparableConjugationGuide(){
 const t=useT();
 return <aside aria-labelledby="separable-conj-title" className="space-y-3 rounded-xl border border-line bg-paper p-4">
  <h3 id="separable-conj-title" className="ar-title text-xl font-bold">{t('الفعل المنفصل: إمتى نفصل وإمتى نضم؟','Separable verbs: split or joined?')}</h3>
  <p>{t('التصريف البسيط هنا للجملة الرئيسية: الجزء المتصرّف في مكان الفعل، والبادئة في آخر الجملة. اكتب الجزئين بالترتيب، من غير الضمير.','Simple finite forms here are for a main clause: the conjugated part takes the verb position and the prefix closes the clause. Enter both parts in order, without the pronoun.')}</p>
  <p className="de" lang="de" dir="ltr">Ich rufe dich heute an.</p>
  <p>{t('مع المساعد، المصدر أو اسم المفعول بيبقى كلمة واحدة. الحروف دي جزء من الصيغة، مش كلمتين منفصلتين.','With an auxiliary, the infinitive or participle stays one word. Its prefix is part of the form, not a separate trailing word.')}</p>
  <p className="de" lang="de" dir="ltr">Ich habe dich angerufen.</p>
  <p className="de" lang="de" dir="ltr">Ich werde dich anrufen.</p>
  <p>{t('في الجملة الفرعية العادية، الفعل البسيط بيرجع كلمة واحدة في الآخر. التدريب ده بيطلب صيغة الجملة الرئيسية، مش صيغة الجملة الفرعية.','In an ordinary subordinate clause, the simple verb rejoins at the end. This exercise asks for a main-clause form, not that subordinate-clause form.')}</p>
  <p className="de" lang="de" dir="ltr">Ich weiß, dass du heute anrufst.</p>
  <p>{t('مع الشراء، المعنى هنا شراء طلبات، من غير ضمير انعكاسي. فيه استخدام تاني بمعنى شراء حصة أو عضوية، وده مش المقصود هنا.','Einkaufen here means buying everyday supplies, without a reflexive pronoun. The reflexive use for buying a stake or membership is outside this set.')}</p>
  <a className="inline-block min-h-11 py-3 text-sm underline" href="https://learngerman.dw.com/de/satzbau-nebens%C3%A4tze-2/l-40555142/gr-40556102" target="_blank" rel="noreferrer">{t('مرجع الجملة الفرعية','Subordinate-clause reference')}</a>
  <a className="inline-block min-h-11 py-3 text-sm underline" href="https://www.gymglish.com/de/wunderbla/deutsche-grammatik/prasenskonjugation-trennbare-verben" target="_blank" rel="noreferrer">{t('مرجع فصل البادئة','Prefix separation reference')}</a>
 </aside>;
}
