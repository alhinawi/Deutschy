import { words, glossOf, topicName } from './data';
import { grammar } from './grammar';
import { verbs, slug } from './verbs';
import { idioms } from './idioms';
import { sidebar } from './nav';

export type Hit = { kind: 'word' | 'grammar' | 'verb' | 'idiom' | 'page'; title: string; sub: string; href: string; hay: string };

export const norm = (s: string) =>
  s.toLowerCase().replace(/ß/g, 'ss').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
    .replace(/[\u064b-\u065f\u0670]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');

let cache: Hit[] | null = null;
export function index(): Hit[] {
  if (cache) return cache;
  const out: Hit[] = [];
  const h = (kind: Hit['kind'], title: string, sub: string, href: string, extra: string) => out.push({ kind, title, sub, href, hay: norm(`${title} ${sub} ${extra}`) });
  sidebar.forEach((g) => g.items.filter((i) => !i.admin).forEach((i) => h('page', i.en, i.ar, i.href, `${i.ar} ${i.en}`)));
  words.forEach((w) => h('word', `${w.art} ${w.de}`, `${w.ar} · ${glossOf(w, 'en')}`, `/lessons/${w.topic}/`, `${w.de} ${w.plural} ${topicName(w.topic, 'en')}`));
  grammar.forEach((g) => h('grammar', g.title[1], `${g.title[0]} · ${g.level}`, `/grammar/${g.id}/`, g.sum.join(' ')));
  verbs.forEach((v) => h('verb', v.inf, `${v.ar} · ${v.en}`, `/verbs/${slug(v.inf)}/`, `${v.pp} ${v.pret} ${v.pres.join(' ')}`));
  idioms.forEach((d) => h('idiom', d.de, `${d.ar} · ${d.en}`, '/redewendungen/', d.literal));
  cache = out;
  return out;
}

export function search(q: string, limit = 30): Hit[] {
  const n = norm(q.trim());
  if (n.length < 2) return [];
  const res: [number, Hit][] = [];
  for (const x of index()) {
    const t = norm(x.title);
    let s = 0;
    if (t === n) s = 100; else if (t.split(' ').some((p) => p === n)) s = 90; else if (t.startsWith(n) || t.split(' ').some((p) => p.startsWith(n))) s = 70; else if (t.includes(n)) s = 50; else if (x.hay.includes(n)) s = 20;
    if (s) res.push([s + (x.kind === 'word' || x.kind === 'verb' ? 1 : 0), x]);
  }
  return res.sort((a, b) => b[0] - a[0]).slice(0, limit).map((r) => r[1]);
}
