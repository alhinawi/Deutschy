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
 const js = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
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
console.log('PASS: 40 B2 drill shapes, 7 B2 writing models, 4 B2 texts, 8 B2 themes, 60 randomized level checks preserve existing-bank keys, category balance and scoring');

const { c1Grammar } = lib('c1-grammar');
const { c1Texts } = lib('reading-c1');
const { c1Themes } = lib('c1-themes');
assert.equal(c1Grammar.length,5);
for(const d of c1Grammar) { assert.equal(d.rows.length,8); assert(d.sources.length>0); assert(d.sources.every(s=>s.startsWith('https://'))); for(const r of d.rows) { assert.equal(r.length,4); assert.equal(new Set(r.slice(1)).size,3); } }
const c1tasks=writingTasks.filter(t=>t.level==='C1'); assert.equal(c1tasks.length,7);
for(const t of c1tasks) {const text=' '+t.model.toLowerCase().replace(/\s+/g,' ')+' '; assert(t.min>=120);assert(t.model.trim().split(/\s+/).length>=t.min);assert(t.need.every(([a])=>a.split('|').some(x=>text.includes(x))));assert(t.tips?.[0]&&t.tips?.[1]);}
assert.equal(c1Texts.length,4);for(const t of c1Texts) {assert.equal(t.q.length,4);assert.equal(t.de.length,t.ar.length);assert(t.gloss.length>=4);for(const q of t.q) assert.equal(new Set(q.slice(1)).size,3);}
assert.equal(c1Themes.length,8);for(const t of c1Themes) {assert.equal(t.words.length,5);assert(t.words.every(id=>words.some(w=>w.id===id)));assert.equal(t.discussion.length,2);assert(t.example.length>80);}
assert(CHECK_LEVELS.includes('C1'));assert(checkBank('C1').some(q=>q.key.startsWith('c1:')));assert(checkBank('C1').some(q=>q.key.startsWith('r:c1-')));
console.log('PASS: 40 source-linked C1 grammar rows, 7 writing models, 4 texts, 8 discussion themes and C1 bank inclusion');

const { c2Grammar } = lib('c2-grammar');
const { c2Texts } = lib('reading-c2');
const { c2Themes } = lib('c2-themes');
assert.equal(c2Grammar.length,5);
for(const d of c2Grammar) { assert.equal(d.rows.length,8); assert(d.sources.length>0); assert(d.sources.every(s=>s.startsWith('https://'))); for(const r of d.rows) { assert.equal(r.length,4); assert.equal(new Set(r.slice(1)).size,3); } }
const c2tasks=writingTasks.filter(t=>t.level==='C2'); assert.equal(c2tasks.length,7);
for(const t of c2tasks) {const text=' '+t.model.toLowerCase().replace(/\s+/g,' ')+' '; assert(t.min>=140);assert(t.model.trim().split(/\s+/).length>=t.min);assert(t.need.every(([a])=>a.split('|').some(x=>text.includes(x))));assert(t.tips?.[0]&&t.tips?.[1]);}
assert.equal(c2Texts.length,4);for(const t of c2Texts) {assert.equal(t.q.length,4);assert.equal(t.de.length,t.ar.length);assert(t.gloss.length>=4);for(const q of t.q) assert.equal(new Set(q.slice(1)).size,3);}
assert.equal(c2Themes.length,8);for(const t of c2Themes) {assert.equal(t.words.length,5);assert(t.words.every(id=>words.some(w=>w.id===id)));assert.equal(t.discussion.length,2);assert(t.example.length>80);}
assert(CHECK_LEVELS.includes('C2'));assert(checkBank('C2').some(q=>q.key.startsWith('c2:')));assert(checkBank('C2').some(q=>q.key.startsWith('r:c2-')));
console.log('PASS: 40 source-linked C2 grammar rows, 7 writing models, 4 texts, 8 discussion themes and C2 bank inclusion');

const {reviewQueue,gradeReview,reviewBank}=lib('answer-review');
const emptyReview={cards:{},saved:[]};const clean={...s,seen:{},srs:{}};
assert.equal(reviewQueue(clean,emptyReview,100).length,0);
const savedReview={cards:{},saved:['apfel']};assert(reviewQueue(clean,savedReview,100).some(q=>q.key==='apfel'));
const scheduled=gradeReview(savedReview,'apfel',true,100);assert.equal(scheduled.cards.apfel.due,101);assert.equal(reviewQueue(clean,scheduled,100).length,0);assert.equal(reviewQueue(clean,scheduled,101).length,1);
assert.equal(gradeReview(scheduled,'apfel',false,101).cards.apfel.due,101);
for(const l of CHECK_LEVELS){const q=checkBank(l)[0];assert(reviewQueue({...clean,seen:{[q.key]:{ok:0,bad:1}}},emptyReview,100).some(x=>x.key===q.key));}
assert.equal(reviewQueue({...clean,seen:{'unknown:legacy':{ok:0,bad:9}}},emptyReview,100).length,0);
assert(reviewBank().some(q=>q.key==='l:c2-schweigen:0'));
const {search,index}=lib('search-index');for(const q of ['دقة','precision','Schweigen','Apfel'])assert(search(q,500).length>0);assert(index().some(h=>h.kind==='writing'&&h.href==='/writing/#c2-uebersetzen'));assert(index().some(h=>h.kind==='reading'&&h.href==='/reading/c2-schweigen/'));
console.log('PASS: empty/own-miss/saved review, schedule boundaries, unknown-key exclusion and multilingual global search');

const {dictationItems,compareDictation}=lib('dictation');for(const l of CHECK_LEVELS)assert(dictationItems.some(x=>x.level===l));assert(compareDictation('Grüße dich!','Grüße dich!').exact);assert(!compareDictation('Grusse dich','Grüße dich!').words[0].match);assert.equal(compareDictation('Hallo, Welt','Hallo Welt!').words.filter(w=>!w.match).length,0);console.log('PASS: dictation all levels, NFC, umlaut and punctuation comparison');
