'use client';
import {useEffect,useId,useRef,useState} from 'react';
import Speaker from './Speaker';
import { Word, img } from '@/lib/data';
import { speak, speechFailureCopy, type SpeechStatus } from '@/lib/speak';
import { Gloss, PluralText } from './L';
import { exampleOf } from '@/lib/word-examples';
import { T, useT } from '@/lib/i18n';

export default function WordCard({ w, first = false }: { w: Word; first?: boolean }) {
  const t=useT();
  const [status,setStatus]=useState<SpeechStatus|null>(null),statusId=useId(),mounted=useRef(true);
  const [exStatus,setExStatus]=useState<SpeechStatus|null>(null),exStatusId=useId();
  useEffect(()=>{mounted.current=true;return()=>{mounted.current=false}},[]);
  const busy=status==='loading';
  const copy=status==='unavailable'||status==='error'?speechFailureCopy[status]:null;
  const play=()=>speak(`${w.art} ${w.de}`,{onstatus:next=>{if(mounted.current)setStatus(next)}});
  const ex=exampleOf(w.id);
  const playEx=()=>{if(ex)speak(ex.de,{onstatus:next=>{if(mounted.current)setExStatus(next)}})};
  return (
    <article id={`word-${w.id}`} className="scroll-mt-20 overflow-hidden rounded-2xl border border-line bg-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img(w)} alt={`${w.art} ${w.de}`} className="photo" loading={first ? 'eager' : 'lazy'} fetchPriority={first ? 'high' : 'auto'} width={480} height={360} />
      <div className="space-y-1 p-4">
        {w.photo.model && <p className="text-sm text-muted"><T ar="صورة مجسم تشريحي مطبوع ثلاثي الأبعاد" en="Photo of a 3D-printed anatomical model" /></p>}
        <div className="flex items-start justify-between gap-2">
          <h2 className="de text-2xl font-semibold leading-tight" lang="de">
            <span className="text-accent">{w.art}</span> {w.de}
          </h2>
          <button onClick={play} aria-busy={busy} aria-describedby={status?statusId:undefined} aria-label={t(`اسمع الكلمة: ${w.art} ${w.de}`, `Hear the word: ${w.art} ${w.de}`)} className="min-h-11 min-w-11 shrink-0 inline-flex items-center justify-center rounded-full border border-line px-3 py-2 text-sm hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"><Speaker /></button>
        </div>
        <p id={statusId} role="status" aria-live="polite" className="text-sm leading-relaxed text-muted">{copy?t(copy.ar,copy.en):status==='loading'?t('بنجهز الصوت...','Loading audio...'):status==='playing'?t('الصوت شغال.','Audio playing.'):status==='ended'?t('الصوت خلص.','Audio finished.'):status==='stopped'?t('الصوت اتوقف.','Audio stopped.'):''}</p>
        <p className="ar-title text-xl text-ink"><Gloss w={w} /></p>
        {w.plural !== '' && <p className="de text-sm text-muted" lang="de"><PluralText w={w} /></p>}
        {ex && (
          <div className="mt-2 flex items-start justify-between gap-2 rounded-xl border border-line bg-paper p-3">
            <div className="min-w-0 space-y-1">
              <p className="de text-sm leading-relaxed" dir="ltr" lang="de">{ex.de}</p>
              <p className="text-sm leading-relaxed text-muted">{ex.ar}</p>
              {exStatus && <p id={exStatusId} role="status" aria-live="polite" className="text-xs text-muted">{exStatus==='loading'?t('بنجهز الصوت...','Loading audio...'):exStatus==='playing'?t('الصوت شغال.','Audio playing.'):exStatus==='ended'?t('الصوت خلص.','Audio finished.'):exStatus==='stopped'?t('الصوت اتوقف.','Audio stopped.'):t(speechFailureCopy[exStatus].ar,speechFailureCopy[exStatus].en)}</p>}
            </div>
            <button onClick={playEx} aria-busy={exStatus==='loading'} aria-describedby={exStatus?exStatusId:undefined} aria-label={t(`اسمع المثال: ${ex.de}`, `Hear the example: ${ex.de}`)} className="min-h-11 min-w-11 shrink-0 inline-flex items-center justify-center rounded-full border border-line px-3 py-2 text-sm hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"><Speaker /></button>
          </div>
        )}
      </div>
    </article>
  );
}
