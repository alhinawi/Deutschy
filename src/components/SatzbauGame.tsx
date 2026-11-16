'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { satzbau, patterns, type Pattern } from '@/lib/satzbau';
import { sample, shuffle } from '@/lib/data';
import { tokens, norm } from '@/lib/sentences';
import { useLang, useT } from '@/lib/i18n';
import { useStore } from '@/lib/store';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';
import Mixed from './Mixed';

export default function SatzbauGame() {
  const t = useT();
  const [pat, setPat] = useState<Pattern | ''>('');
  const [round, setRound] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="space-y-6">
      <Link href="/games/" className="text-sm text-muted hover:text-ink">← {t('الألعاب', 'Games')}</Link>
      <h1 className="ar-title text-3xl font-bold">{t("ركّب الجملة","Build the sentence")}</h1><p>{t("المكان التاني معناه المكوّن التاني، مش تاني كلمة. التدريب بيقارن بنموذج وترتيبات بديلة محددة؛ لو إجابتك مختلفة، ده مش حكم إن كل ترتيب تاني غلط. النتيجة تدريب شخصي مش تقييم رسمي.","Second position means the second constituent, not the second word. This checks a model and listed alternatives, not every grammatical order. A mismatch is not proof every other order is wrong. This is practice, not an official assessment.")}</p>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => { setPat(''); setRound((r) => r + 1); }} className={`rounded-full border px-4 py-2 ${pat === '' ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{t('الكل', 'All')}</button>
        {patterns.map((p) => (
          <button key={p.id} onClick={() => { setPat(p.id); setRound((r) => r + 1); }} className={`de rounded-full border px-4 py-2 ${pat === p.id ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{p.t}</button>
        ))}
      </div>
      {mounted && <Rounds key={`${pat}-${round}`} pat={pat} again={() => setRound((r) => r + 1)} />}
    </div>
  );
}

function Rounds({ pat, again }: { pat: Pattern | ''; again: () => void }) {
  const t = useT();
  const { lang } = useLang();
  const { award, addScore } = useStore();
  const qs = useMemo(() => sample(satzbau.filter((s) => !pat || s.p === pat), 8), [pat]);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [saved, setSaved] = useState(false);
  const [res, setRes] = useState<null | boolean>(null);
  const [chosen, setChosen] = useState<number[]>([]);
  const q = qs[i];
  const toks = useMemo(() => (q ? shuffle(tokens(q.de).map((w, k) => ({ w, k }))) : []), [q]);
  if (i >= qs.length) {
    if (!saved) { setSaved(true); addScore('satzbau', score); }
    return (
      <div className="mx-auto max-w-md space-y-4 rounded-2xl border border-line bg-card p-8 text-center">
        <p className="ar-title text-3xl font-bold">{t('خلصت الجولة', 'Round finished')}</p>
        <p dir="ltr" className="num text-xl">{score} / {qs.length}</p>
        <button onClick={again} className="rounded-full bg-accent px-6 py-3 font-bold text-accent-ink">{t('جولة جديدة', 'New round')}</button>
      </div>
    );
  }
  const rule = patterns.find((p) => p.id === q.p)!;
  const built = chosen.map((c) => toks[c].w).join(' ');
  const check = () => {
    const ok = [q.de, ...(q.alt ?? [])].some((a) => norm(a) === norm(built));
    setRes(ok);
    if (ok) setScore((s) => s + 1);
    award(ok ? 12 : 0, `sb:${q.p}`, ok);
  };
  return (
    <div className="mx-auto max-w-md space-y-4">
      <div className="h-1.5 overflow-hidden rounded-full bg-line"><div className="h-full bg-accent" style={{ width: `${(i / qs.length) * 100}%` }} /></div>
      <div className="flex items-center justify-between"><span className="de text-sm font-bold text-accent">{rule.t}</span><span dir="ltr" className="num text-sm text-muted">{i + 1} / {qs.length}</span></div>
      <p className="satzbau-prompt ar-title text-center text-xl">{lang === 'ar' ? <Mixed text={q.ar} /> : q.en}</p>
      <div dir="ltr" className="de flex min-h-16 flex-wrap items-center gap-2 rounded-2xl border border-dashed border-line bg-card p-3" lang="de">
        {chosen.map((c, p) => (
          <button key={p} disabled={res !== null} onClick={() => setChosen(chosen.filter((_, j) => j !== p))} className="rounded-lg border border-accent bg-paper px-3 py-1.5 text-lg font-semibold">{toks[c].w}</button>
        ))}
        {chosen.length === 0 && <span className="text-muted">{t('اضغط على الكلمات بالترتيب', 'Tap the words in order')}</span>}
      </div>
      <div dir="ltr" className="satzbau-bank de flex flex-wrap justify-center gap-2" lang="de">
        {toks.map((tk, c) => (
          <button key={c} disabled={chosen.includes(c) || res !== null} onClick={() => setChosen([...chosen, c])} className="rounded-lg border border-line bg-paper px-3 py-1.5 text-lg font-semibold disabled:opacity-30">{tk.w}</button>
        ))}
      </div>
      {res === null && <button disabled={chosen.length !== toks.length} onClick={check} className="w-full rounded-full bg-accent py-3 font-bold text-accent-ink disabled:opacity-40">{t('تأكيد', 'Check')}</button>}
      {res !== null && (
        <div className="space-y-3 rounded-2xl border border-line bg-card p-4">
          <p dir="ltr" className={`de text-xl font-semibold ${res ? 'text-good' : 'text-bad'}`} lang="de">{q.de}</p>
          <p className="ar-title text-muted">{lang === 'ar' ? <Mixed text={rule.ruleAr} /> : rule.ruleEn}</p>
          <div className="flex gap-3">
            <button aria-label={t("اسمع النموذج","Listen to model")} onClick={() => speak(q.de)} className="rounded-full border border-line px-4 py-2"><Speaker /></button>
            <button onClick={() => { setI(i + 1); setRes(null); setChosen([]); }} className="flex-1 rounded-full bg-accent py-2 font-bold text-accent-ink">{i + 1 >= qs.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button>
          </div>
        </div>
      )}
    </div>
  );
}
