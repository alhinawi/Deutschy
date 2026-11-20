'use client';
import {useEffect,useRef,useState} from 'react';
import {useT} from '@/lib/i18n';
import Mixed from './Mixed';
import HelperAnswer from './HelperAnswer';
type Turn={role:'user'|'assistant';content:string};
export default function LearningHelper(){
 const t=useT(),[question,setQuestion]=useState(''),[level,setLevel]=useState('A1'),[turns,setTurns]=useState<Turn[]>([]),[busy,setBusy]=useState(false),[error,setError]=useState('');
 const generation=useRef(0),controller=useRef<AbortController|null>(null),lock=useRef(false),listRef=useRef<HTMLOListElement>(null);
 function cancel(){generation.current++;controller.current?.abort();controller.current=null;lock.current=false;setBusy(false)}
 useEffect(()=>()=>{generation.current++;controller.current?.abort()},[]);
 useEffect(()=>{listRef.current?.lastElementChild?.scrollIntoView({block:'end'})},[turns,busy]);
 async function ask(e?:React.FormEvent){e?.preventDefault();if(lock.current||!question.trim())return;lock.current=true;setBusy(true);setError('');const token=++generation.current,c=new AbortController();controller.current=c;const text=question.trim();setTurns(old=>[...old.slice(-18),{role:'user',content:text}]);setQuestion('');const timer=setTimeout(()=>c.abort(),30000);
  try{const response=await fetch('/api/helper/chat',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},signal:c.signal,body:JSON.stringify({message:text,userLevel:level,history:turns.slice(-4)})});const data=await response.json();if(token!==generation.current)return;
   if(!response.ok){setTurns(old=>old.slice(0,-1));setQuestion(text);setError(data.code==='HELPER_DAILY_LIMIT'?t('الحد المجاني خلص النهارده. جرّب بكرة، والدروس شغالة عادي.','The daily free limit was reached. Try tomorrow; lessons still work.'):data.code==='HELPER_RATE_LIMIT'?t('استنى دقيقة قبل السؤال الجاي.','Wait a minute before the next question.'):data.code==='HELPER_INVALID_REQUEST'?t('ابعت سؤال أقصر، لحد 1200 حرف.','Send a shorter question, up to 1200 characters.'):t('المساعد مش متاح دلوقتي. جرّب بعد شوية.','The helper is unavailable right now. Try again later.'));return}
   if(typeof data.text!=='string'||!data.text.trim()||data.text.length>6000)throw Error('invalid');setTurns(old=>[...old.slice(-18),{role:'assistant',content:data.text}]);
  }catch{if(token===generation.current){setTurns(old=>old[old.length-1]?.role==='user'?old.slice(0,-1):old);setError(t('الطلب مكملش. جرّب تاني.','The request did not finish. Try again.'))}}
  finally{clearTimeout(timer);if(token===generation.current){lock.current=false;setBusy(false);controller.current=null}}
 }
 return <section className="space-y-4" aria-label={t('مساعد مذاكرة الألماني','German study helper')}>
  <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t('مستواك','Your level')}>
   <span className="text-sm text-muted">{t('مستواك','Your level')}:</span>
   {['A1','A2','B1','B2','C1','C2'].map(l=><button key={l} aria-pressed={level===l} disabled={busy} onClick={()=>{cancel();setTurns([]);setError('');setLevel(l)}} className={`num min-h-11 rounded-full border px-3 py-1 text-sm font-bold ${level===l?'border-accent bg-accent text-accent-ink':'border-line'}`}>{l}</button>)}
  </div>
  <p className="text-sm text-muted">{t('رد آلي ممكن يغلط، فراجع قبل ما تعتمد عليه · لحد 6 أسئلة في اليوم · المحادثة مش بتتحفظ وبتتمسح لما تخرج','Automated answers can be wrong, check them · up to 6 questions a day · the conversation is not saved and clears when you leave')}</p>
  <ol ref={listRef} aria-label={t('المحادثة','Conversation')} aria-live="polite" className="space-y-3">
   {turns.length===0&&<li className="rounded-2xl border border-line bg-card p-4"><p className="mb-1 font-bold">{t('أهلًا! أنا مدرس الألماني بتاعك.','Hi! I am your German teacher.')}</p><p className="text-muted">{t('اسألني أي حاجة في الألماني، أو ابعتلي جملة ألماني تترجمها أو أصححها.','Ask me anything about German, or send a German sentence to translate or correct.')}</p></li>}
   {turns.map((turn,i)=><li key={i} dir="auto" className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl p-4 ${turn.role==='user'?'ms-auto bg-accent text-accent-ink':'me-auto border border-line bg-card'}`}>{turn.role==='assistant'?<HelperAnswer text={turn.content}/>:<Mixed text={turn.content}/>}</li>)}
   {busy&&<li role="status" className="me-auto flex items-center gap-2 rounded-2xl border border-line bg-card p-4"><span className="animate-pulse">{t('بيكتب','Typing')}</span><span className="flex gap-1" aria-hidden="true"><span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:0ms]"></span><span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:150ms]"></span><span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:300ms]"></span></span></li>}
  </ol>
  <form onSubmit={ask} className="flex items-end gap-2">
   <label htmlFor="helper-question" className="sr-only">{t('رسالتك','Your message')}</label>
   <textarea id="helper-question" rows={1} maxLength={1200} value={question} disabled={busy} onChange={e=>setQuestion(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();ask()}}} placeholder={t('اكتب سؤالك هنا...','Type your question...')} className="min-h-11 max-h-40 flex-1 resize-none rounded-2xl border border-line bg-card p-3"/>
   <button disabled={busy||!question.trim()} aria-label={t('ابعت','Send')} className="min-h-11 min-w-11 rounded-full bg-accent px-5 py-3 text-accent-ink disabled:opacity-50">{t('ابعت','Send')}</button>
   {turns.length>0&&<button type="button" onClick={()=>{cancel();setTurns([]);setQuestion('');setError('');document.getElementById('helper-question')?.focus()}} className="min-h-11 rounded-full border border-line px-4 py-2 text-sm">{t('امسح','Clear')}</button>}
  </form>
  {error&&<p role="alert" className="text-sm text-bad">{error}</p>}
 </section>
}
