import type { Word } from './data';

// Leitner boxes. A correct answer moves the card up one box and schedules it after the interval.
// A wrong answer sends it back to box 1; flashcards offer one practice retry per round.
export type Card = { b: number; due: number };
export const INTERVALS = [0, 1, 2, 4, 8, 16, 32]; // days per box
export const MAX_BOX = INTERVALS.length - 1;
export const NEW_PER_SESSION = 10;
export const SESSION_MAX = 25;
export const dayNum = (t = Date.now()) => Math.floor((t - new Date(t).getTimezoneOffset() * 60000) / 86400000);

export const grade = (c: Card | undefined, ok: boolean, now = dayNum()): Card => {
  const b = ok ? Math.min(MAX_BOX, (c?.b ?? 0) + 1) : 1;
  return { b, due: now + (ok ? INTERVALS[b] : 0) };
};

export function stats(list: Word[], srs: Record<string, Card>, now = dayNum()) {
  let due = 0, fresh = 0, learning = 0, known = 0;
  for (const w of list) {
    const c = srs[w.id];
    if (!c) { fresh++; continue; }
    if (c.b >= 4) known++; else learning++;
    if (c.due <= now) due++;
  }
  return { due, fresh, learning, known, total: list.length };
}

export function queue(list: Word[], srs: Record<string, Card>, now = dayNum()): Word[] {
  const due = list.filter((w) => srs[w.id] && srs[w.id].due <= now).sort((a, b) => srs[a.id].b - srs[b.id].b || srs[a.id].due - srs[b.id].due);
  const fresh = list.filter((w) => !srs[w.id]).slice(0, NEW_PER_SESSION);
  return [...due, ...fresh].slice(0, SESSION_MAX);
}

// A practice retry must not inflate intervals, XP, history or first-pass accuracy.
export function flashDecision(wasRetry: boolean, ok: boolean) {
 return { schedule: !wasRetry, record: !wasRetry, xp: !wasRetry && ok ? 2 : 0, countKnown: !wasRetry && ok, requeue: !wasRetry && !ok };
}
