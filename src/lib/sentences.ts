import { grammar } from './grammar';
import type { Lvl } from './grammar-types';

export type Sentence = { de: string; ar: string; en: string; level: Lvl; topic: string };
const seen = new Set<string>();
export const sentences: Sentence[] = grammar.flatMap((g) =>
  g.ex.map(([de, ar, en]) => ({ de, ar, en, level: g.level, topic: g.id })),
).filter((s) => {
  const words = s.de.trim().split(/\s+/);
  if (words.length < 3 || words.length > 9 || seen.has(s.de)) return false;
  seen.add(s.de);
  return true;
});
export const tokens = (s: string) => s.trim().split(/\s+/);
// compare ignoring case of the first word and final punctuation spacing
export const norm = (s: string) => s.trim().replace(/\s+/g, ' ').replace(/[.!?]+$/, '').toLowerCase();
