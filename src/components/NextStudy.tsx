'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {useT} from '@/lib/i18n';
import {useStore} from '@/lib/store';
import {readResume,resumeLabel,type Resume} from '@/lib/resume';
export default function NextStudy(){
 const t=useT(),{s,ready}=useStore();const[last,setLast]=useState<Resume|null>(null),[due,setDue]=useState<number|null>(null);
 useEffect(()=>{const sync=()=>setLast(readResume());sync();window.addEventListener('deutschy:resume',sync);window.addEventListener('storage',sync);return()=>{window.removeEventListener('deutschy:resume',sync);window.removeEventListener('storage',sync)}},[]);
 useEffect(()=>{if(!ready)return;let active=true;import('@/lib/word-review').then(({dueWords})=>{if(active)setDue(dueWords(s).length)}).catch(()=>{if(active)setDue(-1)});return()=>{active=false}},[s,ready]);
 const mistakes=ready?Object.entries(s.seen).filter(([k,v])=>k.startsWith('g:')&&v.bad>v.ok).length:0;
 return <section aria-labelledby="next-study-title" className="overflow-hidden rounded-3xl border border-line bg-card">
  <div className="flex items-center justify-between border-b border-line px-5 py-3 text-xs font-bold tracking-wide"><span>{t('دفتر مذاكرتك','YOUR STUDY JOURNAL')}</span><span dir="ltr" className="num text-accent">A1 / DE</span></div>
  <div className="space-y-5 p-5 sm:p-7"><div className="flex items-start gap-4"><span aria-hidden="true" className="de text-6xl font-semibold leading-none text-accent">01</span><div className="space-y-2"><h2 id="next-study-title" className="text-2xl font-bold leading-snug">{last?t('نكمّل من هنا؟','Pick up where you left off'):t('أول مرة؟ نبدأ بالحروف.','New here? Start with letters.')}</h2><p className="text-sm leading-7 text-muted">{last?t('آخر صفحة مذاكرة فتحتها، من غير ما نعتبرها خلصت.','Your last study page, not a claim that you finished it.'):t('اسمع الحرف، شوف مثاله، وبعدها جرّب مراجعة قصيرة. مش محتاج حساب.','Hear a letter, see its example, then try a short review. No account needed.')}</p></div></div>
  <Link data-home-primary data-resume-link={last?'':undefined} href={last?.href??'/pronunciation/'} className="flex min-h-14 items-center justify-between gap-3 rounded-2xl bg-accent px-5 py-4 font-bold text-accent-ink"><span>{last?t('كمّل: ','Continue: ')+resumeLabel(last.href):t('ابدأ أول خطوة','Start the first step')}</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 shrink-0 rtl:rotate-180"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></Link>
  <div className="flex flex-wrap items-center justify-between gap-2 text-sm"><Link href="/lernpfad/" className="inline-flex min-h-11 items-center font-bold underline underline-offset-4">{t('شوف الطريق خطوة بخطوة','See the step-by-step path')}</Link>{due!==null&&due>0?<Link href="/review/words/" className="inline-flex min-h-11 items-center text-accent underline">{t(`راجع ${due} كلمة مستحقة`,`Review ${due} due words`)}</Link>:mistakes>0?<Link href="/review/" className="inline-flex min-h-11 items-center underline">{t('راجع أخطاءك','Review your mistakes')}</Link>:null}</div>
  <details className="border-t border-line pt-2 text-xs leading-6 text-muted"><summary className="min-h-11 cursor-pointer py-3">{t('إيه اللي بيتحفظ؟','What is saved?')}</summary><p>{t('للمسجّل: التقدم وآخر صفحة والتفضيلات بتتحفظ في الحساب. للضيف: ذاكرة التبويب بس، وبتروح بعد إعادة التحميل. مفيش بيانات مذاكرة جديدة بتتكتب على الجهاز.','Signed-in progress, last page and preferences are saved to the account. Guests use tab memory only, cleared on reload. No new study data is written to this device.')}</p></details>
  </div></section>;
}
