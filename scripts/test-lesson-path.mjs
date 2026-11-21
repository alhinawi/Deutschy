import assert from 'node:assert/strict';
import path from 'node:path';
import { loadTs } from './content-loader.mjs';
const { lessonSteps, lessonUnits, lessonDone, lessonUnlocked, lessonKnown, unitProgress, nextLesson, UNIT_SIZE } = loadTs(path.resolve('src/lib/lesson-path.ts'));
const { wordsOf } = loadTs(path.resolve('src/lib/data.ts'));
let checks = 0;

// Shape: every topic appears exactly once, in curriculum order.
assert.equal(lessonSteps.length, 204);
assert.equal(new Set(lessonSteps.map((l) => l.topic)).size, 204);
assert.equal(lessonSteps[0].topic, 'family');
assert.equal(lessonUnits.length, Math.ceil(204 / UNIT_SIZE));
assert.equal(lessonUnits.flatMap((u) => u.lessons).length, 204);
assert(lessonUnits.every((u, i) => u.lessons.every((l, n) => l.index === i * UNIT_SIZE + n)));
checks += 6;

// Empty state: only the first lesson is unlocked, nothing is done.
const empty = { seen: {} };
assert.equal(lessonDone(empty, 'family'), false);
assert.equal(lessonUnlocked(empty, 0), true);
assert.equal(lessonUnlocked(empty, 1), false);
assert.equal(lessonUnlocked(empty, 100), false);
assert.equal(nextLesson(empty).topic, 'family');
checks += 5;

// Complete lesson 1: lesson 2 unlocks, lesson 3 stays locked.
const seen1 = { seen: Object.fromEntries(wordsOf('family').map((w) => [w.id, { ok: 1, bad: 0 }])) };
assert.equal(lessonDone(seen1, 'family'), true);
assert.equal(lessonUnlocked(seen1, 1), true);
assert.equal(lessonUnlocked(seen1, 2), false);
assert.equal(nextLesson(seen1).topic, lessonSteps[1].topic);
checks += 4;

// Partial completion does not unlock; a single miss blocks.
const partial = { seen: Object.fromEntries(wordsOf('family').map((w, n) => [w.id, { ok: n ? 1 : 0, bad: 0 }])) };
assert.equal(lessonDone(partial, 'family'), false);
assert.equal(lessonUnlocked(partial, 1), false);
const kp = lessonKnown(partial, 'family');
assert.equal(kp.known, kp.total - 1);
checks += 3;

// Unit progress counts completed lessons only.
const up = unitProgress(seen1, lessonUnits[0]);
assert.equal(up.done, 1);
assert.equal(up.total, UNIT_SIZE);
checks += 2;

// Completing everything leaves the path at the final lesson.
const all = { seen: Object.fromEntries(lessonSteps.flatMap((l) => wordsOf(l.topic).map((w) => [w.id, { ok: 1, bad: 0 }]))) };
assert.equal(nextLesson(all).topic, lessonSteps[203].topic);
assert(lessonUnlocked(all, 203));
checks += 2;

console.log(`PASS lesson-path model: ${checks} checks, 204 lessons in ${lessonUnits.length} sequential units, previous-lesson completion unlocks, partial progress never unlocks`);
