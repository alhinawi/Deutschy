'use client';
import {matchesConjugation} from '@/lib/conj-compare';
import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { verbs } from '@/lib/verbs';
import { forms, PERSONS, trainable, type Tense } from '@/lib/conj';
import { useStore } from '@/lib/store';
import { useLang, useT } from '@/lib/i18n';
import { sample } from '@/lib/data';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';

const LV = ['A1', 'A2', 'B1', 'B2'] as const;

type Item = { vi: number; p: number; t: Tense };

export default function ConjTrainer() {
  const t = useT();
  const { lang } = useLang();
  const { award, addScore } = useStore();
  const [tense, setTense] = useState<Tense | 'mix'>('mix');
  const [upTo, setUpTo] = useState<(typeof LV)[number]>('B1');
  const [items, setItems] = useState<Item[] | null>(null);
  const [i, setI] = useState(0);
  const [val, setVal] = useState('');
  const [res, setRes] = useState<null | boolean>(null);
  const [score, setScore] = useState(0);
  const [saved, setSaved] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const pool = useMemo(() => verbs.map((v, vi) => ({ v, vi })).filter(({ v }) => trainable(v) && LV.indexOf(v.level as (typeof LV)[number]) !== -1 && LV.indexOf(v.level as (typeof LV)[number]) <= LV.indexOf(upTo)), [upTo]);
  const tn: Record<Tense, [string, string]> = { pres: ['المضارع', 'Präsens'], pret: ['الماضي البسيط', 'Präteritum'], perf: ['الماضي التام', 'Perfekt'] };

  const start = () => {
    const ts: Tense[] = tense === 'mix' ? ['pres', 'pret', 'perf'] : [tense];
    const picks = sample(pool, Math.min(10, pool.length));
    setItems(picks.map(({ vi }, n) => ({ vi, p: Math.floor(Math.random() * 6), t: ts[n % ts.length] })));
    setI(0); setVal(''); setRes(null); setScore(0); setSaved(false);
  };
  if (!items) {
    return (
      <div className="space-y-5 rounded-2xl border border-line bg-card p-5">
        <div className="space-y-2">
          <p className="font-bold">{t('الزمن', 'Tense')}</p>
          <div className="flex flex-wrap gap-2">
            {([['mix', t('الكل', 'Mixed')], ['pres', 'Präsens'], ['pret', 'Präteritum'], ['perf', 'Perfekt']] as const).map(([k, n]) => (
              <button key={k} onClick={() => setTense(k)} className={`de rounded-full border px-4 py-2 ${tense === k ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{n}</button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-bold">{t('لحد مستوى', 'Up to level')}</p>
          <div className="flex flex-wrap gap-2">
            {LV.map((l) => (
              <button key={l} onClick={() => setUpTo(l)} className={`num rounded-full border px-4 py-2 ${upTo === l ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{l}</button>
            ))}
          </div>
        </div>
        <button onClick={start} className="w-full rounded-full bg-accent py-3 font-bold text-accent-ink">{t('ابدأ التدريب', 'Start drill')}</button>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/verbs/table/" className="font-bold text-accent">{t('جدول الأفعال القوية والشاذة', 'Strong and irregular verb table')}</Link>
          <Link href="/verbs/quiz/" className="font-bold text-accent">{t('اختبار الأفعال', 'Verb quiz')}</Link>
        </div>
      </div>
    );
  }
  if (i >= items.length) {
    if (!saved) { setSaved(true); addScore('conjugation', score); }
    return (
      <div className="space-y-4 rounded-2xl border border-line bg-card p-8 text-center">
        <p className="ar-title text-3xl font-bold">{t('خلصت التدريب', 'Drill finished')}</p>
        <p dir="ltr" className="num text-xl">{score} / {items.length}</p>
        <div className="flex gap-3">
          <button onClick={start} className="flex-1 rounded-full bg-accent py-3 font-bold text-accent-ink">{t('تدريب جديد', 'New drill')}</button>
          <button onClick={() => setItems(null)} className="flex-1 rounded-full border border-line py-3 font-bold">{t('الإعدادات', 'Settings')}</button>
        </div>
      </div>
    );
  }
  const it = items[i];
  const v = verbs[it.vi];
  const all = forms(v, it.t);
  const target = all[it.p];
  const check = () => {
    if (res !== null || !val.trim()) return;
    const ok = matchesConjugation(val,target);
    setRes(ok);
    if (ok) setScore((s) => s + 1);
    award(ok ? 6 : 0, `v:${v.inf}`, ok);
  };
  return (
    <div className="space-y-4 rounded-2xl border border-line bg-card p-5">
      <div className="h-1.5 overflow-hidden rounded-full bg-line"><div className="h-full bg-accent" style={{ width: `${(i / items.length) * 100}%` }} /></div>
      <div className="flex items-center justify-between"><span className="de num text-sm font-bold text-accent">{tn[it.t][1]}</span><span dir="ltr" className="num text-sm text-muted">{i + 1} / {items.length}</span></div>
      <p className="de num text-3xl font-bold" lang="de" dir="ltr">{PERSONS[it.p]} <span className="text-muted">___</span></p>
      <p dir="ltr" className="de text-xl" lang="de">{v.inf} <span className="ar-title text-base text-muted">{lang === 'ar' ? v.ar : v.en}</span></p>
      <p className="text-sm text-muted">{t("بنقارن بالشكل المعروض في النموذج: بنوحد المسافات وحالة الحرف، لكن الأوملاوت والفرق بين الحرف المزدوج والحرف الألماني الخاص بيفضلوا مهمين. فيه بدائل صحيحة ممكن تكون خارج النموذج ده؛ الاختلاف مش حكم على كل الاستعمالات.","This checks the displayed model form, ignoring case and extra spaces but preserving umlauts and ss/ß spelling. Valid regional or short variants may be outside this model; a mismatch is not a verdict on every usage.")}</p><form onSubmit={(e) => { e.preventDefault(); check(); }} className="space-y-3">
        <label htmlFor="conj-trainer-answer" className="block">{t("اكتب صيغة الفعل من غير الضمير","Type the verb form without the pronoun")}</label><input id="conj-trainer-answer" ref={input} dir="ltr" lang="de" autoCapitalize="off" autoCorrect="off" spellCheck={false} value={val} onChange={(e) => setVal(e.target.value)} disabled={res !== null} className="de w-full rounded-xl border border-line bg-paper px-4 py-3 text-xl outline-none focus:border-accent" />
        {res === null && <button className="w-full rounded-full bg-accent py-3 font-bold text-accent-ink">{t('تأكيد', 'Check')}</button>}
      </form>
      {res !== null && (
        <div role="status" className="space-y-3 rounded-xl border border-line bg-paper p-4">
          <p dir="ltr" className={`de text-xl font-semibold ${res ? 'text-good' : 'text-bad'}`}>{PERSONS[it.p]} {target}</p>
          <div dir="ltr" className="de grid grid-cols-2 gap-x-4 text-sm text-muted">
            {PERSONS.map((p, k) => <span key={p} className={k === it.p ? 'font-bold text-ink' : ''}>{p} {all[k]}</span>)}
          </div>
          <div className="flex gap-3">
            <button aria-label={t("اسمع النموذج","Listen to model")} onClick={() => speak(`${PERSONS[it.p].split('/')[0]} ${target}`)} className="rounded-full border border-line px-4 py-2"><Speaker /></button>
            <button onClick={() => { setI(i + 1); setVal(''); setRes(null); }} className="flex-1 rounded-full bg-accent py-2 font-bold text-accent-ink">{i + 1 >= items.length ? t('النتيجة', 'Result') : t('التالي', 'Next')}</button>
          </div>
        </div>
      )}
    </div>
  );
}
