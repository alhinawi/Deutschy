'use client';
import Link from 'next/link';
import Speaker from './Speaker';
import Mixed from './Mixed';
import { speak } from '@/lib/speak';
import Art from './Art';
import { photoOf, verbs, slug, type Verb } from '@/lib/verbs';
import { useLang, useT } from '@/lib/i18n';

const MODAL_PAST: Record<string, string> = { können: 'Ich habe schwimmen können.', müssen: 'Ich habe arbeiten müssen.', wollen: 'Ich habe gehen wollen.', dürfen: 'Ich habe bleiben dürfen.', sollen: 'Ich habe warten sollen.', mögen: 'Das habe ich gemocht.' };
const P = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
const KINDS: Record<string, [string, string]> = { regular: ['منتظم', 'Regular'], strong: ['قوي (غير منتظم)', 'Strong (irregular stem)'], irregular: ['شاذ', 'Irregular'], modal: ['مساعد', 'Modal'], separable: ['منفصل', 'Separable'], reflexive: ['انعكاسي', 'Reflexive'] };
export default function VerbView({ v }: { v: Verb }) {
  const { lang } = useLang();
  const t = useT();
  const idx = verbs.findIndex((x) => x.inf === v.inf);
  const prev = verbs[idx - 1];
  const next = verbs[idx + 1];
  const pp = v.pp;
  const source = v.source ?? `https://de.wiktionary.org/wiki/${encodeURIComponent(v.inf.replace(/^sich /, ''))}`;
  const perfektAux = v.aux === 'sein' ? ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'] : ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'];
  const reflP = ['mich', 'dich', 'sich', 'uns', 'euch', 'sich'];
  const perfekt = P.map((p, n) => `${p === 'er/sie/es' ? 'er' : p === 'sie/Sie' ? 'sie' : p} ${perfektAux[n]}${v.kind === 'reflexive' ? ' ' + reflP[n] : ''} ${pp}`);
  const row = (n: number) => `${P[n]} ${v.pres[n]}`;
  return (
    <article className="space-y-8">
      <Link href="/verbs/" className="text-sm text-muted hover:text-ink">← {t('الأفعال', 'Verbs')}</Link>
      <header className="overflow-hidden rounded-2xl border border-line bg-card sm:flex">
        {photoOf(v) ? (

          // eslint-disable-next-line @next/next/no-img-element

          <img src={`/img/${photoOf(v)}.jpg`} alt="" className="h-44 w-full object-cover sm:h-auto sm:w-56" loading="lazy" />

        ) : <Art kind={v.kind} className="h-44 w-full object-cover sm:h-auto sm:w-56" />}
        <div className="space-y-2 p-5">
          <p className="text-sm font-bold text-accent"><span className="num">{v.level}</span> · <bdi>{KINDS[v.kind][lang === 'ar' ? 0 : 1]}</bdi></p>
          <div className="flex items-center gap-3">
            <h1 className="de text-4xl font-bold" lang="de">{v.inf}</h1>
            <button onClick={() => speak(v.inf.replace(/^sich /, ''))} aria-label="Speak" className="rounded-full border border-line px-3 py-1 hover:bg-paper"><Speaker /></button>
          </div>
          <p className="ar-title text-2xl text-muted">{lang === 'ar' ? v.ar : v.en}</p>
        </div>
      </header>
      <section className="space-y-3">
        <h2 className="ar-title text-2xl font-bold">{t('التصريف', 'Conjugation')}</h2>
        {v.kind === 'modal' && <aside className="space-y-2 rounded-2xl border border-line bg-card p-4">
          <p>{t('جدول الماضي هنا بيعرض الفعل لوحده، من غير مصدر تاني. مع مصدر تاني، أغلب أفعال المودال بتستخدم مصدرها بدل اسم المفعول في آخر الجملة. المثال اللي تحت مهم عشان ما تعممش الجدول على كل جملة.', 'The Perfekt table shows the modal used alone, without another infinitive. With another infinitive, most modals use their infinitive instead of the past participle. Do not apply this table to every sentence.')}</p>
          <p dir="ltr" lang="de" className="de text-xl">{MODAL_PAST[v.inf]}</p>
          <a href="https://deutsch.lingolia.com/de/grammatik/verben/modalverben" target="_blank" rel="noreferrer" className="underline">{t('راجع قاعدة الماضي مع أفعال المودال', 'Modal Perfekt reference')}</a>
        </aside>}
        {v.inf === 'lassen' && <aside className="space-y-2 rounded-2xl border border-line p-4"><p>{t('الصيغة في الجدول للفعل لوحده. مع مصدر تاني، غالبًا بنستخدم المصدر في الماضي بدل اسم المفعول؛ بعض التركيبات ليها بدائل.', 'The table is for the verb used alone. With another infinitive, Perfekt commonly uses the infinitive instead of the participle; some constructions allow variants.')}</p><p dir="ltr" lang="de" className="de text-xl">Ich habe das Buch zu Hause gelassen.</p><p dir="ltr" lang="de" className="de text-xl">Ich habe ihn gehen lassen.</p></aside>}
        <div dir="ltr" className="overflow-x-auto rounded-2xl border border-line bg-card">
          <table className="de num w-full text-base sm:text-lg" dir="ltr">
            <thead><tr className="border-b border-line bg-paper"><th className="px-2.5 py-2.5 text-start sm:px-4 font-bold text-accent">Präsens</th><th className="px-2.5 py-2.5 text-start sm:px-4 font-bold text-accent">Perfekt</th></tr></thead>
            <tbody>{P.map((_, n) => <tr key={n} className="border-b border-line last:border-0"><td className="px-2.5 py-2 sm:px-4">{row(n)}</td><td className="px-2.5 py-2 text-muted sm:px-4">{perfekt[n]}</td></tr>)}</tbody>
          </table>
        </div>
        <div className="de num grid gap-3 text-lg sm:grid-cols-3" dir="ltr">
          {[['Infinitiv', v.inf], ['Präteritum (er/sie/es)', `er ${v.pret}`], ['Partizip II', `${v.aux === 'sein' ? 'ist' : 'hat'} ${v.pp}`]].map(([k, x]) => (
            <div key={k} className="rounded-2xl border border-line bg-card p-4"><p className="text-xs font-bold text-accent">{k}</p><p className="mt-1 font-semibold">{x}</p></div>
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="ar-title text-2xl font-bold">{t('مثال', 'Example')}</h2>
        <div className="rounded-2xl border border-line bg-card p-4">
          <div className="flex items-start justify-between gap-2">
            <p className="de num text-2xl font-semibold" lang="de">{v.ex[0]}</p>
            <button onClick={() => speak(v.ex[0])} aria-label="Speak" className="shrink-0 rounded-full border border-line px-3 py-1 hover:bg-paper"><Speaker /></button>
          </div>
          <p className="ar-title mt-1 text-xl text-muted">{lang === 'ar' ? <Mixed text={v.ex[1]} /> : v.ex[2]}</p>
        </div>
      </section>
      <p className="text-sm text-muted">{t('المساعد هنا للاستخدام المعروض. المعنى والتركيب وأحيانًا المنطقة ممكن يغيّروه؛ الجدول مش قائمة بكل الاستخدامات.', 'The auxiliary is for the selected use. Meaning, construction and sometimes region can change it; the table does not cover every use.')} <a href={source} target="_blank" rel="noreferrer" className="underline">{t('مصدر مراجعة الصيغ', 'Form reference')}</a></p>
      <nav className="flex justify-between gap-3 text-sm font-bold">
        {prev ? <Link href={`/verbs/${slug(prev.inf)}/`} className="de rounded-full border border-line px-4 py-2 hover:bg-card">← {prev.inf}</Link> : <span />}
        {next ? <Link href={`/verbs/${slug(next.inf)}/`} className="de rounded-full bg-accent px-4 py-2 text-accent-ink">{next.inf} →</Link> : <span />}
      </nav>
    </article>
  );
}
