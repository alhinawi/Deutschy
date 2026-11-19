'use client';
import {useEffect,useMemo,useRef,useState} from 'react';
import {useT} from '@/lib/i18n';
import {speak,stopSpeaking} from '@/lib/speak';
import Speaker from '../Speaker';
import {useSentenceActivity} from '@/lib/sentence-activity190';
import {filterLibrary,sentenceAnswerKey,sentenceLevels,sentenceTopicLabels,type LibrarySentence} from '@/lib/sentence-library190';
const button='min-h-11 rounded-xl border border-line px-4 py-2 font-semibold disabled:opacity-50';
export default function SentenceLibrary190({rows,preview=false}:{rows:LibrarySentence[];preview?:boolean}){
 const t=useT(),activity=useSentenceActivity();
 const [query,setQuery]=useState(''),[level,setLevel]=useState('all'),[topic,setTopic]=useState('all'),[mode,setMode]=useState('all'),[page,setPage]=useState(0),[active,setActive]=useState(''),[status,setStatus]=useState(''),[rate,setRate]=useState('.85');
 const [practice,setPractice]=useState<LibrarySentence|null>(null),[answer,setAnswer]=useState(''),[result,setResult]=useState<'correct'|'retry'|null>(null);
 const generation=useRef(0),practiceRef=useRef<HTMLTextAreaElement>(null);
 const topicLabel=(key:string)=>{const label=sentenceTopicLabels[key];return label?t(...label):key.replace(/-/g,' ')};
 const topics=useMemo(()=>[...new Set(rows.map(r=>r.topic))].sort(),[rows]);
 const completedCount=rows.filter(row=>activity.completed.has(row.id)).length;
 const filtered=useMemo(()=>filterLibrary(rows,{query,level,topic,mode,completed:activity.completed,saved:activity.saved}),[rows,query,level,topic,mode,activity.completed,activity.saved]);
 const pages=Math.max(1,Math.ceil(filtered.length/20)),currentPage=Math.min(page,pages-1),visible=filtered.slice(currentPage*20,currentPage*20+20);
 function cancel(){generation.current++;stopSpeaking();setActive('')}
 useEffect(()=>()=>{generation.current++;stopSpeaking()},[]);
 useEffect(()=>{cancel();setPage(0);setPractice(null);setAnswer('');setResult(null)},[query,level,topic,mode]);
 useEffect(()=>{if(practice)practiceRef.current?.focus()},[practice]);
 async function play(row:LibrarySentence){
  cancel();const token=generation.current;setActive(row.id);setStatus(t('جاري تجهيز الصوت.','Preparing audio.'));
  const ok=await speak(row.de,{rate:Number(rate),onstatus:state=>{if(token!==generation.current)return;if(state==='playing')setStatus(t('الجملة شغالة.','Sentence playing.'));else if(state==='ended'){setActive('');setStatus(t('خلصت الجملة. تقدر تسمعها تاني.','Sentence finished. You can replay it.'))}else if(state==='unavailable'||state==='error'){setActive('');setStatus(t('الصوت مش متاح دلوقتي. النص موجود للقراءة.','Audio is unavailable now. The text is available to read.'))}}});
  if(!ok&&token===generation.current){setActive('');setStatus(t('الصوت مش متاح دلوقتي. النص موجود للقراءة.','Audio is unavailable now. The text is available to read.'))}
 }
 function startPractice(row:LibrarySentence){cancel();setPractice(row);setAnswer('');setResult(null)}
 function check(){if(!practice)return;const correct=sentenceAnswerKey(answer)===sentenceAnswerKey(practice.de);setResult(correct?'correct':'retry');if(correct)activity.complete(practice.id)}
 return <div className="space-y-6">
  <header className="space-y-4 rounded-3xl border border-line bg-card p-5 sm:p-8">
   <p className="de text-sm font-bold tracking-widest" dir="ltr">DEUTSCH IM ALLTAG</p>
   <h1 className="ar-title text-3xl font-bold sm:text-5xl">{preview?t('معاينة خاصة لمكتبة الجمل','Private sentence-library preview'):t('أهم 7000 جملة ألماني','7000 useful German sentences')}</h1>
   <p className="max-w-3xl text-lg leading-relaxed">{t('ألماني، مصري، وإنجليزي. دور على جملة لموقفك، اسمعها، وبعدين جرب تكتبها من الذاكرة.','German, Egyptian Arabic and English. Find a sentence for your situation, listen, then try writing it from memory.')}</p>
   <p className="text-sm text-muted">{t('اختيار تعليمي للجمل المفيدة، مش ترتيب إحصائي للجمل الأكثر استخداماً. المستويات تقريبية للتدريب، مش تصنيف رسمي لكل جملة.','An editorial selection of useful sentences, not a statistical frequency ranking. Levels are approximate practice bands, not official sentence certifications.')}</p>
   <p className="text-sm text-muted">{t('الجمل أمثلة للتدريب على اللغة، مش نصيحة طبية أو قانونية، ولا شروط لخدمة بعينها.','These are language-practice examples, not medical or legal advice or the terms of a particular service.')}</p>
   <div className="flex flex-wrap gap-3 text-sm"><span className="rounded-full border border-line px-4 py-2">{rows.length} {t('جملة','sentences')}</span><span className="rounded-full border border-line px-4 py-2">{completedCount} {t('اتكتبت صح في التدريب','typed accurately in practice')}</span><span className="rounded-full border border-line px-4 py-2">{topics.length} {t('موضوع','topics')}</span></div>
   {preview&&<p role="note" className="font-bold">{t('نسخة عمل خاصة. الإصدار الكامل لسه مش جاهز للنشر.','Private working copy. The full release is not ready to publish.')}</p>}
  </header>
  <section aria-label={t('بحث وفلترة الجمل','Sentence search and filters')} className="space-y-4 rounded-2xl border border-line p-4">
   <div><label htmlFor="sentence190-query" className="mb-2 block font-bold">{t('دور بالألماني أو المصري أو الإنجليزي','Search in German, Egyptian Arabic or English')}</label><input id="sentence190-query" type="search" value={query} maxLength={200} onChange={e=>setQuery(e.target.value)} placeholder={t('مثال: Termin، معاد، appointment','For example: Termin, معاد, appointment')} className="min-h-12 w-full rounded-xl border border-line bg-card px-4 py-3"/></div>
   <div className="grid gap-4 sm:grid-cols-3">
    <div><label htmlFor="sentence190-level" className="mb-2 block">{t('المستوى التقريبي','Approximate level')}</label><select id="sentence190-level" value={level} onChange={e=>setLevel(e.target.value)} className="min-h-12 w-full rounded-xl border border-line bg-card p-3"><option value="all">{t('كل المستويات','All levels')}</option>{sentenceLevels.filter(l=>rows.some(r=>r.level===l)).map(l=><option key={l}>{l}</option>)}</select></div>
    <div><label htmlFor="sentence190-topic" className="mb-2 block">{t('الموضوع','Topic')}</label><select id="sentence190-topic" value={topic} onChange={e=>setTopic(e.target.value)} className="min-h-12 w-full min-w-0 rounded-xl border border-line bg-card p-3"><option value="all">{t('كل المواضيع','All topics')}</option>{topics.map(key=><option key={key} value={key}>{topicLabel(key)}</option>)}</select></div>
    <div><label htmlFor="sentence190-mode" className="mb-2 block">{t('المجموعة','Collection')}</label><select id="sentence190-mode" value={mode} onChange={e=>setMode(e.target.value)} className="min-h-12 w-full rounded-xl border border-line bg-card p-3"><option value="all">{t('كل الجمل','All sentences')}</option><option value="saved">{t('الجمل المحفوظة','Saved sentences')}</option><option value="new">{t('لسه متكتبتش صح','Not yet typed accurately')}</option><option value="practised">{t('اتكتبت صح في التدريب','Typed accurately in practice')}</option></select></div>
   </div>
   <div className="flex flex-wrap items-center gap-3"><button className={button} onClick={()=>{setQuery('');setLevel('all');setTopic('all');setMode('all');setPage(0)}}>{t('امسح الفلاتر','Clear filters')}</button><label htmlFor="sentence190-rate">{t('سرعة الصوت','Playback speed')}</label><select id="sentence190-rate" className="min-h-11 rounded-xl border border-line bg-card px-3" value={rate} onChange={e=>{cancel();setRate(e.target.value)}}><option value=".7">0.7</option><option value=".85">0.85</option><option value="1">1</option></select><button className={button} onClick={()=>{cancel();setStatus(t('اتوقف الصوت.','Audio stopped.'))}}>{t('وقف الصوت','Stop audio')}</button></div>
   <p className="text-sm text-muted">{t('تسجيل مطابق لو موجود، بعده صوت الموقع، وبعده صوت إيدج الألماني الاحتياطي. مش كل الجمل ليها ملف مسجل، وتوفر الصوت حسب الجهاز والاتصال.','An exact recording if available, then site speech, then a German Edge fallback voice. Not every sentence has a recorded file; audio availability depends on your device and connection.')}</p>
   <p className="text-sm text-muted">{t('الحفظ والتدريب بيتحفظوا في حسابك. للضيف: في التبويب ده بس، وبيختفوا لما يتقفل أو يتعمله تحديث. النجاح هنا معناه كتابة مطابقة، مش شهادة إتقان.','Saved sentences and practice are stored in your account. For guests: only in this tab, lost on close or reload. Success here means accurate typing, not certified mastery.')}</p>
   {activity.error&&<p role="alert">{t('تعذر قراءة أو تحديث سجل الجمل. الأصل متساب زي ما هو؛ متعتمدش على حفظ تغييرات جديدة.','The sentence record could not be read or updated. The original is unchanged; do not rely on new changes being saved.')}</p>}
   <p role="status" aria-live="polite">{status}</p>
  </section>
  {practice&&<section aria-labelledby="sentence190-practice-title" className="space-y-4 rounded-2xl border-2 border-accent bg-card p-5">
   <div className="flex flex-wrap items-center justify-between gap-3"><h2 id="sentence190-practice-title" className="ar-title text-2xl font-bold">{t('اكتب من الذاكرة','Write from memory')}</h2><button className={button} onClick={()=>{cancel();setPractice(null)}}>{t('اقفل التدريب','Close practice')}</button></div>
   <p lang="ar" dir="rtl" className="text-lg">{practice.ar}</p><p lang="en" dir="ltr">{practice.en}</p>
   <button className={button} onClick={()=>play(practice)} disabled={active===practice.id}>{t('اسمع الجملة','Listen to the sentence')}</button>
   <label htmlFor="sentence190-answer" className="block font-bold">{t('اكتب الجملة بالألماني','Write the sentence in German')}</label>
   <textarea ref={practiceRef} id="sentence190-answer" lang="de" dir="ltr" value={answer} maxLength={1500} autoComplete="off" autoCorrect="off" spellCheck={false} rows={3} onChange={e=>{setAnswer(e.target.value);setResult(null)}} className="de w-full rounded-xl border border-line bg-paper p-4 text-xl" aria-describedby="sentence190-answer-help"/>
   <p id="sentence190-answer-help" className="text-sm text-muted">{t('الحروف الكبيرة والأوملاوت مهمين. المقارنة بتتجاهل المسافات الزيادة وعلامة الوقف في آخر الجملة. مش بنقيّم إجابات بديلة صحيحة.','Case and umlauts matter. Comparison ignores extra spaces and final punctuation. Alternative correct phrasings are not graded.')}</p>
   <button className={button+' bg-accent text-accent-ink'} disabled={!answer.trim()||!activity.ready||activity.error} onClick={check}>{t('قارن بالجملة','Compare with the sentence')}</button>
   {result&&<div role="status" className="space-y-2"><p className="font-bold">{result==='correct'?t('كتابة مطابقة.','Accurate typing.'):t('لسه مش مطابقة. بص على النموذج وحاول تاني.','Not an exact match yet. Check the model and try again.')}</p><p className="de text-xl" lang="de" dir="ltr">{practice.de}</p></div>}
  </section>}
  <div className="flex flex-wrap items-center justify-between gap-3"><p aria-live="polite">{filtered.length} {t('نتيجة','results')}</p><p>{t('صفحة','Page')} {currentPage+1} / {pages}</p></div>
  {!filtered.length?<section className="rounded-2xl border border-line p-6"><h2 className="ar-title text-xl font-bold">{t('مفيش جمل بالفلاتر دي','No sentences match these filters')}</h2><p className="mt-2">{t('جرّب كلمة أقصر أو امسح الفلاتر. المحفوظة بتظهر بعد ما تحفظ جملة.','Try a shorter word or clear the filters. Saved sentences appear after you save one.')}</p></section>:<ol className="space-y-4" start={currentPage*20+1}>{visible.map((row,index)=><li key={row.id} id={row.id} className="space-y-4 rounded-2xl border border-line bg-card p-5" data-sentence-id={row.id}>
   <div className="flex flex-wrap items-center gap-2 text-sm text-muted"><span className="num">{currentPage*20+index+1}</span><span className="rounded-full border border-line px-3 py-1" dir="ltr">{row.level}</span><span>{topicLabel(row.topic)}</span>{activity.completed.has(row.id)&&<span>{t('اتكتبت صح','Typed accurately')}</span>}</div>
   {practice?.id===row.id?<p className="text-muted">{t('النموذج مستخبي وإنت بتتدرب.','The model is hidden while you practise.')}</p>:<p className="de text-2xl leading-relaxed" lang="de" dir="ltr">{row.de}</p>}<p className="text-lg leading-relaxed" lang="ar" dir="rtl">{row.ar}</p><p className="leading-relaxed text-muted" lang="en" dir="ltr">{row.en}</p>
   <div className="flex flex-wrap gap-3"><button className={button+' bg-accent text-accent-ink'} disabled={active===row.id} onClick={()=>play(row)} aria-busy={active===row.id} aria-label={active===row.id?t(`شغال: ${row.de}`,`Playing: ${row.de}`):t(`اسمع: ${row.de}`,`Listen: ${row.de}`)}><Speaker className="h-5 w-5" /></button><button className={button} onClick={()=>startPractice(row)}>{t('اتدرب عليها','Practise this')}</button><button className={button} disabled={!activity.ready||activity.error} onClick={()=>activity.toggleSaved(row.id)} aria-pressed={activity.saved.has(row.id)}>{activity.saved.has(row.id)?t('شيل من المحفوظة','Remove from saved'):t('احفظ الجملة','Save sentence')}</button></div>
  </li>)}</ol>}
  <nav aria-label={t('صفحات الجمل','Sentence pages')} className="flex flex-wrap items-center justify-center gap-4"><button className={button} disabled={currentPage===0} onClick={()=>{cancel();setPage(currentPage-1)}}>{t('السابق','Previous')}</button><span>{currentPage+1} / {pages}</span><button className={button} disabled={currentPage+1>=pages} onClick={()=>{cancel();setPage(currentPage+1)}}>{t('التالي','Next')}</button></nav>
 </div>
}
