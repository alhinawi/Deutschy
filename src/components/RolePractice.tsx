'use client';
import { useEffect, useRef, useState } from 'react';
import type { Dialogue } from '@/lib/dialogues';
import { speak, stopSpeaking } from '@/lib/speak';
import { useT } from '@/lib/i18n';
import Speaker from './Speaker';

export default function RolePractice({ d }: { d: Dialogue }) {
  const t = useT();
  const people = [...new Set(d.lines.map((x) => x[0]))];
  const [role, setRole] = useState(people[0]);
  const [turn, setTurn] = useState(0);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const generation = useRef(0);
  const halt = () => { generation.current++; stopSpeaking(); setError(false); };
  useEffect(() => () => { generation.current++; stopSpeaking(); }, []);
  const line = d.lines[turn];
  const play = async (text: string) => { const token=++generation.current; const ok=await speak(text); if(token===generation.current)setError(!ok); };
  const move = (n:number) => { halt(); setTurn(Math.max(0,Math.min(d.lines.length,n))); setShow(false); };
  const reset = (r: string) => { halt(); setRole(r); setTurn(0); setShow(false); };
  return <section data-role-practice className="space-y-4 rounded-2xl border border-accent bg-card p-5">
    <h2 className="ar-title text-2xl font-bold">{t('بدّل الأدوار واتكلم', 'Switch roles and speak')}</h2>
    <p className="text-sm text-muted">{t('اختار دورك. اقرأ ردك بصوتك، واسمع دور الشخص التاني. مفيش تسجيل ولا تقييم لنطقك، ومفيش نقط لمجرد تشغيل الصوت. الصوت حسب المتصفح وجهازك. مكانك في الحوار مؤقت ومش محفوظ. السابق بيخفي الاقتراح تاني؛ إعادة البداية بتحتفظ بدورك المختار.', 'Choose a role. Say your lines aloud and listen to the partner. No recording, pronunciation scoring or points for playing audio. Voice availability depends on your browser and device. Position is temporary, not saved. Previous hides the suggestion again; restart keeps your selected role.')}</p>
    <div className="flex flex-wrap gap-2" role="group" aria-label={t('اختار دورك', 'Choose your role')}>{people.map((p) => <button key={p} aria-pressed={role === p} onClick={() => reset(p)} className={`min-h-11 rounded-full border px-4 py-2 ${role === p ? 'border-accent bg-accent text-accent-ink' : 'border-line'}`}>{p}</button>)}</div>
    {line ? <div className="space-y-3" aria-live="polite">
      <p className="num text-sm text-muted" dir="ltr">{turn + 1} / {d.lines.length} · {line[0]}</p>
      <p className="ar-title font-bold">{line[0] === role ? t('دورك. قول ردك، وبعدين اكشف الاقتراح لو محتاج.', 'Your turn. Say your reply, then reveal the suggestion if needed.') : t('اسمع رد الشخص التاني.', 'Listen to your partner.')}</p>
      {(line[0] !== role || show) && <p dir="ltr" lang="de" className="de text-xl">{line[1]}</p>}
      <div className="flex flex-wrap gap-2">
        {line[0] === role && !show && <button onClick={() => setShow(true)} className="min-h-11 rounded-full border border-line px-4 py-2">{t('اكشف رد مقترح', 'Reveal a suggested reply')}</button>}
        {(line[0] !== role || show) && <button onClick={() => play(line[1])} className="flex items-center gap-2 rounded-full border border-line px-4 py-2"><Speaker />{t('اسمع الجملة', 'Hear the line')}</button>}
        <button onClick={() => move(turn+1)} className="min-h-11 rounded-full bg-accent px-4 py-2 font-bold text-accent-ink">{t('كمّل الحوار', 'Continue conversation')}</button>
      </div>
    </div> : <div className="space-y-3"><p role="status">{t('وصلت لآخر الحوار. جرب الدور التاني.', 'End of the conversation. Try the other role.')}</p><button onClick={() => reset(people[(people.indexOf(role) + 1) % people.length])} className="min-h-11 rounded-full bg-accent px-4 py-2 font-bold text-accent-ink">{t('بدّل الدور وابدأ تاني', 'Switch role and restart')}</button></div>}
    <div className="flex flex-wrap gap-2"><button disabled={turn===0} onClick={()=>move(turn-1)} className="min-h-11 rounded-full border border-line px-4 py-2 disabled:opacity-50">{t('السابق في الحوار','Previous dialogue line')}</button><button onClick={()=>reset(role)} className="min-h-11 rounded-full border border-line px-4 py-2 disabled:opacity-50">{t('ابدأ الحوار بنفس الدور','Restart with this role')}</button></div><div className="flex flex-wrap gap-2 border-t border-line pt-3"><button onClick={() => play(d.lines.map((x) => x[1]).join(' '))} className="min-h-11 rounded-full border border-line px-4 py-2">{t('اسمع الحوار كله', 'Hear the whole dialogue')}</button></div>
    {error && <p role="status">{t('الصوت مش متاح في المتصفح ده.', 'Speech is unavailable in this browser.')}</p>}
  </section>;
}
