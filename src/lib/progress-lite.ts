import type { State } from './store';

export function accuracy(s: State) {
  let ok = 0;
  let bad = 0;
  for (const v of Object.values(s.seen)) {
    ok += v.ok;
    bad += v.bad;
  }
  return { ok, bad, pct: ok + bad ? Math.round((ok / (ok + bad)) * 100) : 0 };
}

export function cardsKnown(s: State) {
  return Object.values(s.srs ?? {}).filter((card) => card.b >= 4).length;
}

export function challengeDays(s: State) {
  return Object.keys(s.challenge ?? {}).length;
}
