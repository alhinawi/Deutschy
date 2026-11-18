'use client';
import {useEffect,useState} from 'react';
import {speechFailureCopy,subscribeSpeechStatus,type SpeechStatus} from '@/lib/speak';
import {useT} from '@/lib/i18n';
import CloseIcon from './CloseIcon';
import Speaker from './Speaker';

/** One failure notice for every caller of the shared speech helper. */
export default function SpeechNotice(){
 const t=useT();
 const [status,setStatus]=useState<SpeechStatus|null>(null);
 useEffect(()=>subscribeSpeechStatus(next=>setStatus(next==='unavailable'||next==='error'?next:null)),[]);
 const copy=status==='unavailable'||status==='error'?speechFailureCopy[status]:null;
 return <div className="pointer-events-none fixed inset-x-3 bottom-4 z-50 mx-auto max-w-md" role="status" aria-live="polite" aria-atomic="true">
  {copy&&<div data-speech-notice className="pointer-events-auto flex items-start gap-3 rounded-2xl border border-accent bg-card p-4 text-ink shadow-lg">
   <Speaker className="mt-1 h-5 w-5 shrink-0 text-accent"/>
   <p className="min-w-0 flex-1 text-sm leading-relaxed">{t(copy.ar,copy.en)}</p>
   <button type="button" onClick={()=>setStatus(null)} aria-label={t('اقفل تنبيه الصوت','Dismiss audio notice')} className="-m-2 inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full hover:bg-paper focus-visible:outline-2 focus-visible:outline-accent"><CloseIcon/></button>
  </div>}
 </div>;
}
