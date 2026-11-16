import { grammar } from './grammar';
import { exercises } from './exercises';
import { readings } from './reading';
import { words, topics } from './data';
import type { State } from './store';
import type { Lvl } from './grammar-types';

export const LEVELS: Lvl[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
export const PASS = 0.8;

// Share of a level's practice questions answered correctly at least once.
export function levelProgress(s: State, l: Lvl) {
  let total = 0, got = 0;
  for (const g of grammar.filter((x) => x.level === l)) {
    const n = (exercises[g.id] ?? []).length;
    total += n;
    for (let i = 0; i < n; i++) if ((s.seen[`g:${g.id}:${i}`]?.ok ?? 0) > 0) got++;
  }
  return { total, got, ratio: total ? got / total : 0, passed: total > 0 && got / total >= PASS };
}
export function wordProgress(s: State) {
  const known = words.filter((w) => (s.seen[w.id]?.ok ?? 0) > 0).length;
  return { known, total: words.length };
}
export function readingProgress(s: State) {
  let total = 0, got = 0;
  for (const r of readings) for (let i = 0; i < r.q.length; i++) { total++; if ((s.seen[`r:${r.id}:${i}`]?.ok ?? 0) > 0) got++; }
  return { total, got };
}
export function accuracy(s: State) {
  let ok = 0, bad = 0;
  for (const v of Object.values(s.seen)) { ok += v.ok; bad += v.bad; }
  return { ok, bad, pct: ok + bad ? Math.round((ok / (ok + bad)) * 100) : 0 };
}
export const topicCount = topics.length;
