'use client';
import {useEffect,useState} from 'react';
import {useT} from '@/lib/i18n';
import {EFFECT_KEY,effectsEnabled,installEffectGestures,stopEffects} from '@/lib/game-effects';
export default function GameSoundControl(){
 const t=useT(),[enabled,setEnabled]=useState(false),[reduced,setReduced]=useState(false),[failed,setFailed]=useState(false);
 useEffect(()=>{
  const media=matchMedia('(prefers-reduced-motion: reduce)');
  const sync=()=>{setEnabled(effectsEnabled());setReduced(media.matches);if(!effectsEnabled())stopEffects()};
  sync();media.addEventListener('change',sync);window.addEventListener('storage',sync);const remove=installEffectGestures();
  return()=>{media.removeEventListener('change',sync);window.removeEventListener('storage',sync);remove()};
 },[]);
 const toggle=()=>{try{localStorage.setItem(EFFECT_KEY,enabled?'off':'on');setEnabled(effectsEnabled());setFailed(false)}catch{setFailed(true)}stopEffects()};
 return <aside aria-label={t('أصوات الإجابات','Answer sounds')} className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted">
  <button type="button" aria-pressed={enabled} disabled={reduced} onClick={toggle} className="min-h-11 rounded-full border border-line px-4 py-2 text-ink disabled:opacity-60">{enabled?t('أصوات الإجابات: شغالة','Answer sounds: on'):t('أصوات الإجابات: مقفولة','Answer sounds: off')}</button>
  <span>{reduced?t('مقفولة عشان إعداد تقليل الحركة.','Off because reduced motion is enabled.'):t('نغمات قصيرة، غير صوت قراءة الألماني. تحكّم كمان في صوت جهازك.','Short tones, separate from German speech. Device volume also applies.')}</span>
  {failed&&<p role="status">{t('اختيار الصوت متحفظش. التخزين المحلي مش متاح.','Sound preference was not saved. Local storage is unavailable.')}</p>}
 </aside>;
}
