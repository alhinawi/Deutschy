'use client';
import { useEffect, useState } from 'react';
import { writingTasks, type WTask } from '@/lib/writing';
import { useStore } from '@/lib/store';
import { useLang, useT } from '@/lib/i18n';
import Mixed from './Mixed';

const LV = ['all', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
const has = (text: string, alts: string) => { const x = ' ' + text.toLowerCase().replace(/\s+/g, ' ') + ' '; return alts.split('|').some((a) => x.includes(a)); };
const Tick = ({ ok }: { ok: boolean }) => ok
  ? <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-good" fill="none" stroke="currentColor" strokeWidth="3" aria-label="ok"><path d="M5 12l5 5 9-10" /></svg>
  : <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-muted" fill="none" stroke="currentColor" strokeWidth="2" aria-label="missing"><circle cx="12" cy="12" r="8" /></svg>;

export default function WritingView({ onlyLevel }: { onlyLevel?: 'A2' | 'B1' | 'B2' | 'C1' | 'C2' } = {}) {
  const t = useT();
  const { lang } = useLang();
  const [lv, setLv] = useState<(typeof LV)[number]>('all');
  const [open, setOpen] = useState<WTask | null>(null);
  useEffect(()=>{const select=()=>{const id=window.location.hash.slice(1);const task=writingTasks.find(t=>t.id===id&&(!onlyLevel||t.level===onlyLevel));if(task)setOpen(task)};select();window.addEventListener('hashchange',select);return()=>window.removeEventListener('hashchange',select)},[onlyLevel]);
  const list = writingTasks.filter((x) => lv === 'all' || x.level === lv).filter((x) => !onlyLevel || x.level === onlyLevel);
  if (open) return <Task task={open} back={() => {setOpen(null);history.replaceState(null,'',location.pathname)}} />;
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{onlyLevel ? t(`تدريب كتابة ${onlyLevel}`, `${onlyLevel} writing practice`) : t('تدريب الكتابة', 'Writing practice')}</h1>
      <p className="text-muted">{onlyLevel === 'C2' ? t('7 مهام لصياغة موقف دقيق: فرّق بين المقدمة والاستنتاج، اعرض أقوى اعتراض، وراجع حكمك من غير ما تمسح الفروق. النماذج افتراضية ومش معيار امتحان رسمي. مسوداتك على الجهاز، وفحص الطول والعبارات مش حكم على الأسلوب أو الحجة أو صحة اللغة بالكامل.', 'Seven tasks for precise judgment: separate premise from inference, address a strong objection and revise a position without erasing distinctions. Models are fictional, not official exam benchmarks. Drafts stay on-device; phrase and length checks do not assess style, argument or full grammatical accuracy.') : onlyLevel === 'C1' ? t('7 مهام لتحليل معايير وشرح حدود الدليل وتلخيص مواقف من غير تحريف. اعرض اعتراض قوي ورد عليه، وميّز رأيك عن كلام المصدر. النماذج مواقف افتراضية، والمسودات على جهازك. فحص العبارات والطول مش تقييم جودة الحجة أو تصحيح كامل للغة.', 'Seven tasks for examining criteria, qualifying evidence and synthesizing positions fairly. Address a strong objection and distinguish your view from a source. Models use fictional scenarios, and drafts stay on your device. Phrase and length checks do not grade argument quality or fully correct your German.') : onlyLevel === 'B2' ? t('7 مهام عشان تقيّم اقتراحات وتعرض حجج وتعترض بأدب وتقترح حلول. ميّز بين الرأي والدليل، ونظّم الفقرات حسب وظيفتها. مسودتك بتتحفظ هنا؛ النموذج للمقارنة، وفحص العبارات مش تصحيح كامل للألماني.', 'Seven tasks for evaluating proposals, weighing arguments, disagreeing politely and suggesting solutions. Distinguish opinion from evidence and give each paragraph a purpose. Drafts are saved here; models support comparison, and phrase checks are not full German correction.') : onlyLevel === 'B1' ? t('7 مهام لرسائل رسمية وشخصية وإبداء الرأي وتنظيم خطة. وضّح سببك، اربط الأفكار، وادّي مثال أو اقتراح. احفظ مسودتك وقارنها بالنموذج بعد ما تحاول. الفحص هنا للعبارات وعدد الكلمات بس، مش تصحيح كامل للألماني.', 'Seven tasks for formal and personal messages, giving opinions and organizing a plan. Explain your reasons, link ideas and give an example or suggestion. Save a draft and compare it with the model after trying. Checks cover phrases and word count, not full German correction.') : t('اختار مهمة واكتب مسودتك بنفسك. الفحص بيشوف عدد الكلمات والعبارات المطلوبة بس، مش بيصحّح الألماني كله. بعد المحاولة، قارن كتابتك بالنموذج.', 'Short tasks for each level. You write it yourself and the page checks that the key phrases and word count are there. There is no automatic grading of your German, and you can see a model at the end.')}</p>
      <div className="flex flex-wrap gap-2">
        {!onlyLevel && LV.map((l) => <button key={l} onClick={() => setLv(l)} className={`num rounded-full border px-4 py-2 ${lv === l ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{l === 'all' ? t('الكل', 'All') : l}</button>)}
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {list.map((x) => (
          <li key={x.id}><button onClick={() => setOpen(x)} className="w-full rounded-2xl border border-line bg-card p-4 text-start hover:border-accent">
            <span className="num text-xs font-bold text-accent">{x.level}</span>
            <span className="ar-title block text-xl">{lang === 'ar' ? x.title[0] : x.title[1]}</span>
            <span className="num text-sm text-muted">{x.min}+ {t('كلمة', 'words')}</span>
          </button></li>
        ))}
      </ul>
    </div>
  );
}

function Task({ task, back }: { task: WTask; back: () => void }) {
  const t = useT();
  const { lang } = useLang();
  const { s, award } = useStore();
  const key = `deutschy:w:${task.id}`;
  const [text, setText] = useState('');
  const [model, setModel] = useState(false);
  useEffect(() => { try { setText(localStorage.getItem(key) ?? ''); } catch { /* ignore */ } }, [key]);
  const n = words(text);
  const checks = task.need.map((x) => has(text, x[0]));
  const done = checks.every(Boolean) && n >= task.min;
  const won = (s.seen[`w:${task.id}`]?.ok ?? 0) > 0;
  useEffect(() => { if (done && !won) award(20, `w:${task.id}`, true); }, [done, won, award, task.id]);
  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <button onClick={back} className="text-sm text-muted hover:text-ink">← {t('كل المهام', 'All tasks')}</button>
      <div>
        <p className="num text-sm font-bold text-accent">{task.level}</p>
        <h1 className="ar-title text-3xl font-bold">{lang === 'ar' ? task.title[0] : task.title[1]}</h1>
      </div>
      <p className="ar-title text-lg leading-8">{lang === 'ar' ? <Mixed text={task.brief[0]} /> : task.brief[1]}</p>
      {task.tips && <aside className="rounded-xl border border-accent bg-card p-4"><h2 className="ar-title mb-2 text-xl font-bold">{t('خد بالك', 'Writing tip')}</h2><p><Mixed text={lang === 'ar' ? task.tips[0] : task.tips[1]} /></p></aside>}
      <label htmlFor="writing-answer" className="ar-title block font-bold">{t('نصك بالألماني', 'Your text in German')}</label>
      <textarea id="writing-answer" dir="ltr" lang="de" rows={9} value={text} onChange={(e) => { setText(e.target.value); try { localStorage.setItem(key, e.target.value); } catch { /* ignore */ } }} className="de w-full rounded-2xl border border-line bg-card p-4 text-lg outline-none focus:border-accent" placeholder="…" />
      <p dir="ltr" className={`num text-sm ${n >= task.min ? 'text-good' : 'text-muted'}`}>{n} / {task.min} {t('كلمة', 'words')}</p>
      <ul className="space-y-2">
        {task.need.map((x, i) => (
          <li key={i} className="flex items-center gap-3 rounded-xl border border-line bg-card px-3 py-2">
            <Tick ok={checks[i]} />
            <span dir="ltr" className="de num font-semibold">{x[0].split('|')[0]}{x[0].includes('|') ? ' …' : ''}</span>
            <span className="ar-title ms-auto text-sm text-muted">{lang === 'ar' ? x[1] : x[2]}</span>
          </li>
        ))}
      </ul>
      {done && <p className="ar-title rounded-xl border border-good bg-good/10 p-3 text-lg">{t('كل العبارات موجودة. اقرا نصك تاني وراجع الأخطاء، وبعدين قارنه بالنموذج.', 'All key phrases are in. Read your text again, fix mistakes, then compare it with the model.')}</p>}
      <button onClick={() => setModel(!model)} className="rounded-full border border-line px-5 py-2 font-bold">{model ? t('اخفي النموذج', 'Hide model') : t('شوف نموذج', 'Show a model')}</button>
      {model && <p dir="ltr" lang="de" className="de whitespace-pre-line rounded-2xl border border-line bg-paper p-4 text-lg leading-8">{task.model}</p>}
    </div>
  );
}
