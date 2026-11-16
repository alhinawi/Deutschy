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

import { dialogues } from './dialogues';
import { writingTasks } from './writing';

const frac = (got: number, total: number) => ({ got, total });
// Skills covered per level, from device data only
export function skills(s: State, l: Lvl) {
  const g = levelProgress(s, l);
  let rg = 0, rt = 0;
  for (const r of readings.filter((x) => x.level === l)) for (let i = 0; i < r.q.length; i++) { rt++; if ((s.seen[`r:${r.id}:${i}`]?.ok ?? 0) > 0) rg++; }
  let dg = 0, dt = 0;
  for (const d of dialogues.filter((x) => x.level === l)) for (let i = 0; i < d.q.length; i++) { dt++; if ((s.seen[`d:${d.id}:${i}`]?.ok ?? 0) > 0) dg++; }
  const wt = writingTasks.filter((x) => x.level === l);
  const wg = wt.filter((x) => (s.seen[`w:${x.id}`]?.ok ?? 0) > 0).length;
  return { grammar: frac(g.got, g.total), reading: frac(rg, rt), dialogue: frac(dg, dt), writing: frac(wg, wt.length), exam: s.exams?.[l] };
}
export function cardsKnown(s: State) { return Object.values(s.srs ?? {}).filter((c) => c.b >= 4).length; }
export const challengeDays = (s: State) => Object.keys(s.challenge ?? {}).length;
