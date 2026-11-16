// Source-level study regressions. Run with npm run test:study.
import ts from 'typescript';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
const require = createRequire(import.meta.url);
const cache = new Map();
function load(file) {
 if (cache.has(file)) return cache.get(file);
 if (file.endsWith('.json')) return JSON.parse(readFileSync(file, 'utf8'));
 const exports = {}; cache.set(file, exports);
 const localRequire = (name) => {
   if (!name.startsWith('.')) return require(name);
   const target = path.resolve(path.dirname(file), name);
   const resolved = ['', '.ts', '.tsx', '.json', '.js'].map((ext) => target + ext).find(existsSync);
   if (!resolved) throw Error(`Cannot resolve ${name}`);
   return load(resolved);
 };
 const js = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
 vm.runInNewContext(js, { exports, require: localRequire, console, Date, Set, Map });
 return exports;
}
const lib = (name) => load(path.resolve(`src/lib/${name}.ts`));
const { b1Grammar } = lib('b1-grammar');
const { writingTasks } = lib('writing');
const { b1Texts } = lib('reading-b1');
const { b1Themes } = lib('b1-themes');
const { words } = lib('data');
const { practicedWords, dueWords } = lib('word-review');
const { grade, dayNum } = lib('srs');
for (const d of b1Grammar) {
 assert.equal(d.rows.length, 8);
 for (const row of d.rows) { assert.equal(row.length, 4); assert.equal(new Set(row.slice(1)).size, 3); assert(row[0].includes('___')); }
}
const tasks = writingTasks.filter((t) => t.level === 'B1');
assert.equal(tasks.length, 7);
for (const task of tasks) {
 const text = ' ' + task.model.toLowerCase().replace(/\s+/g, ' ') + ' ';
 assert(task.model.trim().split(/\s+/).length >= task.min, task.id + ' model too short');
 assert(task.need.every(([alts]) => alts.split('|').some((x) => text.includes(x))), task.id + ' missing model phrase');
 assert(task.tips?.[0] && task.tips?.[1]);
}
assert.equal(b1Texts.length, 4);
for (const r of b1Texts) { assert.equal(r.q.length, 4); assert.equal(r.de.length, r.ar.length); assert(r.gloss.length >= 4); for (const q of r.q) assert.equal(new Set(q.slice(1)).size, 3); }
assert.equal(b1Themes.length, 8);
for (const th of b1Themes) { assert(th.words.length >= 5); assert(th.words.every((id) => words.some((w) => w.id === id))); }
const empty = { xp: 0, seen: {}, srs: {}, daily: {}, goal: 50 };
assert.equal(practicedWords(empty).length, 0);
const s = { ...empty, seen: { apfel: { ok: 1, bad: 0 }, banane: { ok: 0, bad: 1 }, 'g:unknown:0': { ok: 20, bad: 0 } }, srs: { banane: { b: 2, due: 102 } } };
assert.equal(practicedWords(s).length, 2);
assert.equal(dueWords(s, 100).length, 1);
assert.equal(dueWords(s, 102).length, 2);
assert.equal(grade(undefined, true, 100).due, 101);
assert.equal(grade({ b: 5, due: 100 }, true, 100).due, 132);
assert.equal(grade({ b: 6, due: 100 }, true, 100).b, 6);
assert.equal(grade({ b: 4, due: 100 }, false, 100).due, 100);
const midnight = new Date(2026, 10, 16, 0, 0, 0).getTime();
assert.equal(dayNum(midnight) - dayNum(midnight - 1), 1);
console.log('PASS: 32 B1 drill shapes, 7 writing models, 4 texts, 8 themes, real-history filtering, due boundaries, Leitner schedule, local midnight');
