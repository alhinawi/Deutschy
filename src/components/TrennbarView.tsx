'use client';
import { useState } from 'react';
import { sep, parts, plain, type Sep } from '@/lib/trennbar';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import { sample } from '@/lib/data';
import Speaker from './Speaker';
import Mixed from './Mixed';
import MiniQuiz, { type QItem } from './MiniQuiz';

const norm = (w: string) => w.replace(/[.,!?]/g, '').toLowerCase();
const lastSentence = (s: Sep) => { const p = plain(s).split(/(?<=[.?!])\s+/); return p[p.length - 1]; };

function wordOrder(s: Sep): QItem {
  const { finite, prefix } = parts(s);
  const tok = lastSentence(s).split(' ');
  const end = (tok[tok.length - 1].match(/[.?!]$/) ?? [''])[0];
  const fi = tok.findIndex((w) => norm(w) === finite.toLowerCase());
  let pi = -1; tok.forEach((w, k) => { if (k !== fi && norm(w) === prefix) pi = k; });
  const strip = (w: string) => w.replace(/[.?!]$/, '');
  const base = tok.map(strip);
  const build = (arr: string[]) => arr.join(' ') + end;
  const without = (arr: string[], k: number) => arr.filter((_, x) => x !== k);
  const right = build(base);
  const a = [...base]; a[fi] = base[fi] + prefix; const d1 = build(without(a, pi));
  const b = without(base, pi); b.splice(fi, 0, prefix); const d2 = build(b);
  const c = without(base, pi); c.splice(pi > fi + 1 ? fi + 1 : 0, 0, prefix); const d3 = build(c);
  const opts = [...new Set([right, d1, d2, d3])];
  return { key: `sv:${s.inf}`, prompt: s.inf, hint: s.ar, options: opts.slice(0, 4), note: [`الفعل المنفصل: ${s.inf}. في الجملة الرئيسية الفعل بيتصرف، والبادئة بتروح آخر الجملة.`, `Separable verb: ${s.inf}. In a main clause the verb is conjugated and the prefix goes to the end.`] };
}

function perfect(s: Sep): QItem {
  const [aux, p] = s.perf.split(' ');
  const flip = (aux === 'hat' ? 'ist' : 'hat') + ' ' + p;
  const ge = aux + ' ge' + p;
  const inf = aux + ' ' + s.inf;
  return { key: `sv:${s.inf}`, prompt: `Perfekt: ${s.inf}`, hint: s.ar, options: [...new Set([s.perf, flip, ge, inf])].slice(0, 4), hear: s.perf, note: [`${s.inf}: ${s.perf}`, `${s.inf}: ${s.perf}`] };
}

export default function TrennbarView() {
  const t = useT();
  const { lang } = useLang();
  const [tab, setTab] = useState<'list' | 'order' | 'perf'>('list');
  const tabs = [['list', t('القائمة', 'List')], ['order', t('ترتيب الجملة', 'Word order')], ['perf', 'Perfekt']] as const;
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold">{t('الأفعال المنفصلة', 'Trennbare Verben')}</h1>
      <p className="text-muted">{t('الأفعال دي بتتقسم: الفعل بيتصرف والبادئة بتروح آخر الجملة. اتعلمها وبعدها اتدرب.', 'These verbs split: the verb is conjugated and the prefix moves to the end of the clause. Learn them, then practise.')}</p>
      <div className="flex flex-wrap gap-2">
        {tabs.map(([k, n]) => <button key={k} onClick={() => setTab(k)} className={`rounded-full border px-4 py-2 ${tab === k ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-paper'}`}>{n}</button>)}
      </div>
      {tab === 'list' && (
        <ul className="grid gap-3 sm:grid-cols-2">
          {sep.map((s) => (
            <li key={s.inf} className="space-y-1.5 rounded-2xl border border-line bg-card p-4">
              <div className="flex items-start justify-between gap-2">
                <p dir="ltr" lang="de" className="de text-xl font-semibold">{s.inf}</p>
                <button onClick={() => speak(plain(s))} aria-label="Speak" className="shrink-0 rounded-full border border-line px-2 py-0.5"><Speaker /></button>
              </div>
              <p className="ar-title font-bold">{lang === 'ar' ? <Mixed text={s.ar} /> : s.en}</p>
              <p dir="ltr" lang="de" className="de text-sm text-muted">{s.perf}</p>
              <div className="rounded-xl bg-paper p-3">
                <p dir="ltr" lang="de" className="de">{s.ex.split(/(\{[^}]+\})/).map((x, k) => x.startsWith('{') ? <b key={k} className="text-accent">{x.slice(1, -1)}</b> : x)}</p>
                {lang === 'ar' && <p className="ar-title mt-1 text-sm text-muted"><Mixed text={s.exAr} /></p>}
              </div>
            </li>
          ))}
        </ul>
      )}
      {tab === 'order' && <><p className="ar-title text-muted">{t('اختار الجملة الصح للفعل ده.', 'Pick the correct sentence for the verb.')}</p><MiniQuiz key="o" game="trennbar-order" make={() => sample(sep, 10).map(wordOrder)} /></>}
      {tab === 'perf' && <MiniQuiz key="p" game="trennbar-perfekt" make={() => sample(sep, 10).map(perfect)} />}
    </div>
  );
}
