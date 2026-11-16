import type { Verb } from './verbs';

export const PERSONS = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'] as const;
export type Tense = 'pres' | 'pret' | 'perf';

// Präteritum endings from the 3rd person singular form
function pretForms(pret: string): string[] {
  const [w, ...rest] = pret.split(' ');
  const tail = rest.length ? ' ' + rest.join(' ') : '';
  const e = w.endsWith('e');
  const du = e ? w + 'st' : /(s|ß|x|z|t|d|sch)$/.test(w) ? w + 'est' : w + 'st';
  const ihr = e ? w + 't' : /(t|d)$/.test(w) ? w + 'et' : w + 't';
  const pl = e ? w + 'n' : w + 'en';
  return [w, du, w, pl, ihr, pl].map((x) => x + tail);
}
const AUX = { haben: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'], sein: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'] };

export function forms(v: Verb, t: Tense): string[] {
  if (t === 'pres') return [...v.pres];
  if (t === 'pret') return pretForms(v.pret);
  return AUX[v.aux].map((a) => `${a} ${v.pp}`);
}
export const trainable = (v: Verb) => v.kind !== 'reflexive';
