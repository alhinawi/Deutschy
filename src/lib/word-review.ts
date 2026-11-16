import { words } from './data';
import type { State } from './store';
import { dayNum } from './srs';

// Only words with an actual answer record or a saved study schedule enter this page.
export function practicedWords(s: State) {
  return words.filter((w) => {
    const v = s.seen[w.id];
    return (v && v.ok + v.bad > 0) || !!s.srs?.[w.id];
  });
}
export function dueWords(s: State, now = dayNum()) {
  return practicedWords(s).filter((w) => !s.srs?.[w.id] || s.srs[w.id].due <= now)
    .sort((a, b) => (s.srs?.[a.id]?.due ?? -Infinity) - (s.srs?.[b.id]?.due ?? -Infinity) || a.id.localeCompare(b.id));
}
