'use client';
import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { verben, perfektOf, PERSONS, type GenVerb } from '@/lib/verben';
import { verbOf, slug } from '@/lib/verbs';
import { useLang, useT } from '@/lib/i18n';
import { speak } from '@/lib/speak';
import Speaker from './Speaker';

const LV = ['A1', 'A2', 'B1', 'B2'] as const;
const KINDS = [
  { id: 'regular', ar: 'منتظمة', en: 'regular' },
  { id: 'strong', ar: 'قوية', en: 'strong' },
  { id: 'irregular', ar: 'شاذة', en: 'irregular' },
  { id: 'modal', ar: 'مساعدة', en: 'modal' },
  { id: 'separable', ar: 'منفصلة', en: 'separable' },
  { id: 'reflexive', ar: 'انعكاسية', en: 'reflexive' },
] as const;
type KindId = (typeof KINDS)[number]['id'];
const PAGE = 60;

function Tense({ title, forms }: { title: string; forms: string[] }) {
  return (
    <div>
      <p className="ar-title mb-1 text-sm font-bold text-accent">{title}</p>
      <table className="w-full border-collapse text-sm" dir="ltr">
        <tbody>
          {forms.map((f, i) => (
            <tr key={i} className="border-b border-line last:border-0">
              <td className="w-24 py-1 pr-2 text-muted">{PERSONS[i]}</td>
              <td className="de py-1" lang="de">{f}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function VerbCard({ v }: { v: GenVerb }) {
  const t = useT();
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const curated = verbOf(v.inf) || verbOf(v.inf.replace(/^sich /, ''));
  return (
    <li className="rounded-2xl border border-line bg-card p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p dir="ltr" lang="de" className="de text-xl font-semibold">{v.inf}</p>
          {lang === 'ar' ? <p className="ar-title text-muted">{v.ar}</p> : null}
        </div>
        <button onClick={() => speak(v.inf.replace(/^sich /, ''))} aria-label={t('اسمع الفعل', 'Hear the verb')} className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-line p-2"><Speaker /></button>
      </div>
      <p className="num mt-1 text-xs font-bold text-accent">{v.lvl} · {v.kinds.map((k) => KINDS.find((x) => x.id === k)![lang === 'ar' ? 'ar' : 'en']).join(' · ')}</p>
      <p dir="ltr" className="de mt-2 text-sm text-muted" lang="de">{perfektOf(v)} · {v.pret[2]}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button aria-expanded={open} onClick={() => setOpen(!open)} className="min-h-11 rounded-full border border-line px-4 py-2 text-sm font-bold">
          {open ? t('اقفل التصريف', 'Hide conjugation') : t('التصريف الكامل', 'Full conjugation')}
        </button>
        {curated && (
          <Link href={`/verbs/${slug(curated.inf)}/`} className="flex min-h-11 items-center rounded-full border border-accent px-4 py-2 text-sm font-bold text-accent">
            {t('تفاصيل وأمثلة', 'Details and examples')}
          </Link>
        )}
      </div>
      {open && (
        <div className="mt-4 grid gap-4 rounded-xl bg-paper p-4 sm:grid-cols-2">
          <Tense title={t('المضارع · Präsens', 'Present · Präsens')} forms={v.pres} />
          <Tense title={t('الماضي البسيط · Präteritum', 'Simple past · Präteritum')} forms={v.pret} />
          <Tense title={t('الافتراضي · Konjunktiv II', 'Subjunctive · Konjunktiv II')} forms={v.kj2} />
          <div>
            <p className="ar-title mb-1 text-sm font-bold text-accent">{t('الأمر · Imperativ', 'Imperative · Imperativ')}</p>
            <table className="w-full border-collapse text-sm" dir="ltr">
              <tbody>
                <tr className="border-b border-line"><td className="w-24 py-1 pr-2 text-muted">du</td><td className="de py-1" lang="de">{v.imp[0]}</td></tr>
                <tr><td className="w-24 py-1 pr-2 text-muted">ihr</td><td className="de py-1" lang="de">{v.imp[1]}</td></tr>
              </tbody>
            </table>
            <p className="ar-title mb-1 mt-4 text-sm font-bold text-accent">{t('الماضي التام · Perfekt', 'Present perfect · Perfekt')}</p>
            <p dir="ltr" className="de text-sm" lang="de">{perfektOf(v)}</p>
          </div>
        </div>
      )}
    </li>
  );
}

export default function VerbenBrowser() {
  const { lang } = useLang();
  const t = useT();
  const [lv, setLv] = useState<string>('all');
  const [kind, setKind] = useState<KindId | 'all'>('all');
  const [q, setQ] = useState('');
  const [shown, setShown] = useState(PAGE);
  const searchInput = useRef<HTMLInputElement>(null);
  const nq = q.trim().normalize('NFC').toLocaleLowerCase('de');
  const list = useMemo(() => verben.filter((v) =>
    (lv === 'all' || v.lvl === lv) &&
    (kind === 'all' || v.kinds.includes(kind)) &&
    (!nq || (v.inf + ' ' + v.ar + ' ' + v.pp + ' ' + v.pret.join(' ')).normalize('NFC').toLocaleLowerCase('de').includes(nq))
  ), [lv, kind, nq]);
  const chip = (on: boolean) => `num min-h-11 rounded-full border px-3 py-2 text-sm font-bold ${on ? 'border-accent bg-accent text-accent-ink' : 'border-line hover:bg-card'}`;
  const reset = (fn: () => void) => () => { fn(); setShown(PAGE); };
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t('المستوى', 'Level')}>
        {(['all', ...LV] as const).map((l) => <button key={l} aria-pressed={lv === l} onClick={reset(() => setLv(l))} className={chip(lv === l)}>{l === 'all' ? t('كل المستويات', 'All levels') : l}</button>)}
      </div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t('نوع الفعل', 'Verb type')}>
        <button aria-pressed={kind === 'all'} onClick={reset(() => setKind('all'))} className={chip(kind === 'all')}>{t('كل الأنواع', 'All types')}</button>
        {KINDS.map((k) => <button key={k.id} aria-pressed={kind === k.id} onClick={reset(() => setKind(k.id))} className={chip(kind === k.id)}>{lang === 'ar' ? k.ar : k.en}</button>)}
      </div>
      <label htmlFor="verben-search" className="block font-semibold">{t('دوّر على أي فعل بالألماني أو المصري', 'Search any verb in German or Arabic')}</label>
      <input ref={searchInput} id="verben-search" type="search" dir="auto" value={q} onChange={(e) => { setQ(e.target.value); setShown(PAGE); }} placeholder={t('مثال: gehen أو يروح', 'e.g. gehen')} className="min-h-11 w-full rounded-full border border-line bg-card px-4 py-2 text-sm sm:w-96" />
      <div className="flex flex-wrap items-center gap-3">
        <p className="num text-sm text-muted" role="status" aria-atomic="true">{list.length} / {verben.length}</p>
        {(q || lv !== 'all' || kind !== 'all') && <button onClick={reset(() => { setQ(''); setLv('all'); setKind('all'); searchInput.current?.focus(); })} className="min-h-11 rounded-full border border-line px-4 py-2">{t('امسح البحث والفلاتر', 'Clear search and filters')}</button>}
      </div>
      {list.length === 0 && <p className="rounded-2xl border border-line bg-card p-5">{t('مفيش فعل مطابق. جرّب كلمة أقصر أو امسح الفلاتر.', 'No matching verb. Try a shorter term or clear the filters.')}</p>}
      <ul className="grid gap-3 sm:grid-cols-2">
        {list.slice(0, shown).map((v) => <VerbCard key={v.inf} v={v} />)}
      </ul>
      {list.length > shown && (
        <button onClick={() => setShown(shown + PAGE)} className="min-h-11 w-full rounded-full border border-line bg-paper px-4 py-2 font-bold">
          {t('عرّض أكتر', 'Show more')} · <span dir="ltr" className="num inline-block">{list.length - shown}</span>
        </button>
      )}
    </div>
  );
}
