import { topics, wordsOf } from './data';
import type { State } from './store';

// Linear A1 lesson path: the 204 topic lessons in their fixed curriculum
// order, grouped into sequential units. A lesson unlocks when the previous
// lesson is complete; a lesson is complete when every word in it has been
// answered correctly at least once on this device.
export const UNIT_SIZE = 12;

export type LessonStep = { index: number; topic: string; ar: string };
export type LessonUnit = { index: number; ar: string; en: string; lessons: LessonStep[] };

export const lessonSteps: LessonStep[] = topics.map((t, index) => ({ index, topic: t.id, ar: t.ar }));

export const lessonUnits: LessonUnit[] = Array.from({ length: Math.ceil(lessonSteps.length / UNIT_SIZE) }, (_, index) => ({
  index,
  ar: `الوحدة ${index + 1}`,
  en: `Unit ${index + 1}`,
  lessons: lessonSteps.slice(index * UNIT_SIZE, (index + 1) * UNIT_SIZE),
}));

export function lessonDone(s: Pick<State, 'seen'>, topic: string): boolean {
  const ws = wordsOf(topic);
  return ws.length > 0 && ws.every((w) => (s.seen[w.id]?.ok ?? 0) > 0);
}

export function lessonUnlocked(s: Pick<State, 'seen'>, index: number): boolean {
  if (index <= 0) return true;
  return lessonDone(s, lessonSteps[index - 1].topic);
}

export function lessonKnown(s: Pick<State, 'seen'>, topic: string): { known: number; total: number } {
  const ws = wordsOf(topic);
  return { known: ws.filter((w) => (s.seen[w.id]?.ok ?? 0) > 0).length, total: ws.length };
}

export function unitProgress(s: Pick<State, 'seen'>, unit: LessonUnit): { done: number; total: number } {
  return { done: unit.lessons.filter((l) => lessonDone(s, l.topic)).length, total: unit.lessons.length };
}

// The first incomplete lesson: where "continue" should send the learner.
export function nextLesson(s: Pick<State, 'seen'>): LessonStep {
  return lessonSteps.find((l) => !lessonDone(s, l.topic)) ?? lessonSteps[lessonSteps.length - 1];
}
