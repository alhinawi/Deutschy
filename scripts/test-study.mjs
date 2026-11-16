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

const { b2Grammar } = lib('b2-grammar');
const { b2Texts } = lib('reading-b2');
const { b2Themes } = lib('b2-themes');
for (const d of b2Grammar) { assert.equal(d.rows.length,8); for (const r of d.rows) { assert.equal(r.length,4); assert.equal(new Set(r.slice(1)).size,3); } }
const b2tasks = writingTasks.filter((t) => t.level === 'B2');
assert.equal(b2tasks.length,7);
for (const t of b2tasks) { const text=' '+t.model.toLowerCase().replace(/\s+/g,' ')+' '; assert(t.model.trim().split(/\s+/).length >= t.min); assert(t.need.every(([a])=>a.split('|').some(x=>text.includes(x)))); assert(t.tips?.[0]); }
assert.equal(b2Texts.length,4); for (const t of b2Texts) { assert.equal(t.q.length,4); assert.equal(t.de.length,t.ar.length); assert(t.gloss.length>=4); }
assert.equal(b2Themes.length,8); for(const t of b2Themes) { assert(t.words.length>=5); assert(t.words.every(id=>words.some(w=>w.id===id))); }
const { CHECK_LEVELS,checkBank,buildCheck,resultFor } = lib('level-check');
for(const level of CHECK_LEVELS) {
 const bank=checkBank(level); assert(bank.length>=16); assert.equal(new Set(bank.map(q=>q.key)).size,bank.length);
 for(const q of bank) { assert(q.options.length>=3); assert.equal(new Set(q.options).size,q.options.length); if(q.kind==='reading')assert(q.context); }
 for(let run=0;run<10;run++) { const q=buildCheck(level); assert.equal(q.length,16); assert.equal(new Set(q.map(x=>x.key)).size,16); assert.equal(q.filter(x=>x.kind==='grammar').length,10); assert.equal(q.filter(x=>x.kind==='reading').length,6); assert(q.every(x=>bank.some(y=>y.key===x.key&&y.prompt===x.prompt))); const r=resultFor('test',level,q,q.map(x=>x.options[0]),100); assert.equal(r.correct,16); assert.equal(r.at,100); assert.equal(resultFor('wrong',level,q,q.map(x=>x.options[1])).correct,0); }
}
console.log('PASS: 40 B2 drill shapes, 7 B2 writing models, 4 B2 texts, 8 B2 themes, 40 randomized level checks preserve existing-bank keys, category balance and scoring');
