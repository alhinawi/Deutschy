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

const {conjugationVerbs,conjugationTenses,conjugated,conjugationAnswers}=lib('conjugation');for(const v of conjugationVerbs)for(const tense of conjugationTenses)for(let p=0;p<6;p++)assert(conjugated(v,tense,p).length>1);assert.equal(conjugated(conjugationVerbs[3],'Perfekt',1),'bist gekommen');assert.equal(conjugated(conjugationVerbs[2],'Futur II',4),'werdet gemacht haben');assert(conjugationAnswers(conjugationVerbs[0],'Konjunktiv II Vergangenheit',1).includes('wärst gewesen'));console.log('PASS: 264 conjugation cells, sein/haben selection, Futur II and accepted short variant');

const {dialogues}=lib('egypt-dialogues');assert.equal(dialogues.length,16);assert.equal(new Set(dialogues.map(d=>d.id)).size,16);for(const l of ['A1','A2','B1','B2']){assert.equal(dialogues.filter(d=>d.level===l).length,4);for(const topic of ['market','doctor','work','travel'])assert(dialogues.some(d=>d.level===l&&d.topic===topic))}for(const d of dialogues){assert.equal(d.lines.length,4);assert(d.lines.every(l=>l.length===3&&l.every(Boolean)));assert.equal(d.q.length,2);for(const q of d.q)assert.equal(new Set(q.slice(1)).size,3)}console.log('PASS: 16 original dialogues, 64 bilingual turns, 32 distinct comprehension questions');

const {sheets}=lib('sheets');assert.equal(new Set(sheets.map(s=>s.id)).size,sheets.length);for(const d of dialogues)assert(sheets.some(s=>s.id==='dialogue-'+d.id));for(const l of ['C1','C2'])assert(sheets.some(s=>s.id.startsWith(l.toLowerCase()+'-')));console.log('PASS: '+sheets.length+' printable sheets, unique IDs, all Egyptian dialogues and advanced levels covered');

const {startTimed,timedRemaining,finishTimed,timedQuestions}=lib('timed-practice');for(const l of CHECK_LEVELS){const s=startTimed(l,10,1000);assert.equal(s.deadline,601000);assert.equal(timedRemaining(s,601001),0);assert.equal(timedRemaining(s,1000),600);assert(timedQuestions(s).some(q=>q.kind==='grammar'));assert(timedQuestions(s).some(q=>q.kind==='reading'));const q=timedQuestions(s)[0];s.answers=[q.options[0]];assert.equal(finishTimed(s,'ended',61000).correct,1);assert.equal(finishTimed(s,'time',9999999).elapsed,600000)}assert.equal(startTimed('C2',20,0).deadline,1200000);console.log('PASS: timed 10/20-minute deadlines, all-level mixed banks, grading and elapsed cap');

assert(search('Umbuchung',100).some(h=>h.kind==='dialogue'));for(const query of ['Dictation','Timed mixed practice','Printable study sheets'])assert(search(query,100).some(h=>h.kind==='page'));console.log('PASS: new practice routes and Egyptian dialogue content discoverable in global search');

const {pitfalls}=lib('pitfalls');assert.equal(pitfalls.length,18);for(const l of CHECK_LEVELS)assert.equal(pitfalls.filter(p=>p.level===l).length,3);for(const p of pitfalls){assert.equal(p.answers.length,3);assert.equal(new Set(p.answers).size,3);assert(p.source.startsWith('https://'))}console.log('PASS: 18 source-linked pitfalls, three per level, distinct correction options');

const {soundContrasts}=lib('sound-contrasts');assert.equal(soundContrasts.length,6);for(const p of soundContrasts){assert.equal(p.words.length,2);assert.notEqual(p.words[0],p.words[1]);assert.equal(p.meanings[0].length,2);assert.equal(p.meanings[1].length,2);assert.equal(p.approx.length,2)}console.log('PASS: six distinct sound-pair structures and bilingual cues');

const {writingFrames}=lib('writing-frames');assert.equal(writingFrames.length,8);for(const l of ['A1','A2','B1','B2'])assert.equal(writingFrames.filter(f=>f.task.level===l).length,2);for(const f of writingFrames){assert(f.task.model.length>30);assert(f.frame.some(s=>s.includes('[')));assert(f.task.need.length>0)}console.log('PASS: eight writing frames preserve original tasks/models, two per A1-B2');

const {contextPacks}=lib('context-packs');assert.equal(contextPacks.length,4);assert.equal(new Set(contextPacks.flatMap(p=>p.items.map(i=>i.word.id))).size,24);for(const p of contextPacks){assert.equal(p.items.length,6);for(const i of p.items){assert(words.some(w=>w===i.word));assert(i.de.length>10&&i.ar.length>5)}}console.log('PASS: four context packs, 24 unique existing noun references and original phrases');

const {deckTsv,deckWords,pluralForCard}=lib('deck-export');assert.equal(deckWords(['bus','bus','unknown']).length,1);assert.equal(pluralForCard(words.find(w=>w.id==='koffer')),'die Koffer');assert.equal(pluralForCard(words.find(w=>w.id==='kaffee')),'');const tsv=deckTsv(['bus','koffer']);assert(tsv.startsWith('#separator:Tab\n#html:false\n'));assert.equal(tsv.split('\n').filter(l=>l&&!l.startsWith('#')).length,2);assert(tsv.includes('die Busse'));console.log('PASS: unique deck export, original articles, hidden/unchanged plurals, UTF-8 TSV headers');

assert(search('bekommen',100).some(h=>h.href==='/pitfalls/#b1-bekommen'));assert(search('bieten',100).some(h=>h.href==='/sound-contrasts/#i'));assert(search('arrival',100).some(h=>h.href==='/context-packs/#arrival'));assert(search('application',100).some(h=>h.href==='/writing-frames/#bewerbung'));console.log('PASS: learner guides, contrasts, frames and pack deep links in search');
const {mapExamples}=await load('src/lib/grammar-map.ts');assert.equal(Object.keys(mapExamples).length,pitfalls.length);for(const p of pitfalls)assert.ok(mapExamples[p.id]?.length>10);console.log('PASS: all 18 grammar-map reminders have complete contextual examples');

const {mapArabic}=lib('grammar-map');for(const p of pitfalls){assert.equal(mapArabic[p.id].length,2);assert.ok(mapArabic[p.id].every(t=>!/[A-Za-z]/.test(t)))}console.log('PASS: Arabic-only map summaries avoid mixed-script conjunction ambiguity');

const {practicalTerms}=lib('practical-glossary');assert.equal(practicalTerms.length,24);assert.equal(new Set(practicalTerms.map(w=>w.de)).size,24);for(const w of practicalTerms){assert(!words.some(x=>x.de===w.de));assert(['der','die','das'].includes(w.article));assert(w.plural&&(w.example.endsWith('.')||w.example.endsWith('?')));assert(w.source.startsWith('https://de.wiktionary.org/wiki/'))}console.log('PASS: 24 distinct new practical nouns, explicit articles/plurals and dictionary sources');

const {shadowingTexts}=lib('shadowing');for(const l of ['A1','A2','B1','B2','C1','C2'])assert(shadowingTexts.some(t=>t.level===l));for(const t of shadowingTexts){assert(t.lines.every(s=>s.length>0));const original=lib('reading').readings.find(r=>r.id===t.id).de.join(' ').replace(/\s/g,'');assert.equal(t.lines.join('').replace(/\s/g,''),original)}console.log('PASS: shadowing segments preserve all original text across six levels');

const {speakingCards}=lib('speaking-cards');assert.equal(speakingCards.length,12);assert.equal(new Set(speakingCards.map(c=>c.id)).size,12);for(const l of ['A1','A2','B1','B2'])assert.equal(speakingCards.filter(c=>c.level===l).length,3);for(const c of speakingCards){assert(c.model.length>40&&c.followUp.endsWith('?'));assert.equal(c.checks.length,3)}console.log('PASS: 12 original speaking prompts/models/follow-ups, three per A1-B2');

const {studyGoals,starterPlan}=lib('start-guide');for(const g of studyGoals)for(const lv of ['unsure','A1','A2','B1','B2','C1','C2'])for(const minutes of [10,20]){const p=starterPlan(g.id,lv,minutes);assert.equal(p.length,3);assert.equal(p.reduce((n,s)=>n+s.minutes,0),minutes);assert(p.every(s=>s.href.startsWith('/')&&!s.href.includes('undefined')));if(['C1','C2'].includes(lv))assert(p.every(s=>s.href!=='/speaking-cards/'&&s.href!=='/writing-frames/'))}console.log('PASS: 70 goal/level/time plans, honest advanced routes and exact suggested time totals');
assert(search('Gehalt',100).some(h=>h.href==='/practical-words/#term-9'));assert(search('digital learning',100).some(h=>h.href==='/speaking-cards/#digital-learning'));assert(search('Prepare for work',100).some(h=>h.href==='/start/#work'));assert(starterPlan('basics','C2',10).some(s=>s.href==='/grammar-map/#C2'));assert(starterPlan('speaking','B2',10).some(s=>s.href==='/shadowing/#B2'));console.log('PASS: new term/card/goal search results and selected-level starter links');

const {caseDrills,caseGroups}=lib('case-lab');assert.equal(caseDrills.length,12);for(const g of caseGroups)assert.equal(caseDrills.filter(d=>d.group===g[0]).length,4);for(const d of caseDrills)assert(d.answer!==d.wrong&&d.ar.length>15&&d.en.length>15);console.log('PASS: 12 location/verb/fixed-case contrast drills with distinct answers');

const {microTexts}=lib('reading-micro');assert.equal(microTexts.length,8);for(const l of ['A1','A2','B1','B2'])assert.equal(microTexts.filter(r=>r.level===l).length,2);for(const r of microTexts){assert(r.de.join(' ').split(/\s+/).length<=90);assert.equal(r.q.length,3);for(const q of r.q)assert.equal(new Set(q.slice(1)).size,3)}console.log('PASS: eight short original micro-readings, two per A1-B2, 24 distinct comprehension items');

const {dictationDiff}=lib('dictation');let diff=dictationDiff('Ich lerne heute gern Deutsch.','Ich lerne gern Deutsch.');assert.equal(diff.filter(d=>d.kind==='extra').map(d=>d.text).join(' '),'heute');assert.equal(diff.filter(d=>d.kind==='missing').length,0);diff=dictationDiff('Ich Deutsch.','Ich lerne Deutsch.');assert.equal(diff.filter(d=>d.kind==='missing')[0].text,'lerne');assert.equal(dictationDiff('schon','schön').filter(d=>d.kind!=='same').length,2);console.log('PASS: aligned dictation diff handles insertions, omissions and umlauts without cascading mismatches');

const {formationLessons}=lib('word-formation');assert.equal(formationLessons.length,4);for(const l of formationLessons){assert.equal(l.questions.length,2);assert(l.examples.length>=2);for(const q of l.questions)assert(q[1]!==q[2])}console.log('PASS: four word-formation lessons and eight distinct self-check questions');

const {emptyWeek,cleanWeek,weekStart,shiftWeek,dayKeys,planTotals}=lib('weekly-plan');assert.equal(weekStart(new Date(2026,10,16)),'2026-11-16');assert.equal(weekStart(new Date(2026,10,22)),'2026-11-16');assert.equal(shiftWeek('2026-12-28',1),'2027-01-04');assert.equal(dayKeys('2026-12-28')[6],'2027-01-03');assert.equal(planTotals(emptyWeek()).tasks,0);let wk=emptyWeek();wk[0]={goal:'Read',minutes:999,done:true};assert.equal(cleanWeek(wk)[0].minutes,240);assert.equal(cleanWeek([{bad:1}]).length,7);assert.equal(planTotals(cleanWeek(wk)).done,1);console.log('PASS: weekly planner Monday/year boundaries, empty truth, input bounds and self-check totals');

assert(search('Verb-governed case',100).some(h=>h.href==='/case-lab/#verb'));assert(search('suffix',100).some(h=>h.href==='/word-formation/#suffixes'));assert(search('Eine Zahl braucht Kontext',100).some(h=>h.href==='/reading/micro-b2-zahl/'));console.log('PASS: sixth-list contrasts, formation and micro-readings are discoverable in global search');

assert.equal(dictationDiff('a '.repeat(400),'a').filter(d=>d.kind==='extra').length,399);console.log('PASS: long allowed dictation input does not silently truncate diff tokens');

const {presentFocus}=lib('present-focus');assert.equal(presentFocus.length,12);for(const v of presentFocus)assert.equal(v.forms.length,6);assert.equal(presentFocus.find(v=>v.inf==='lesen').forms[1],'liest');assert.equal(presentFocus.find(v=>v.inf==='sprechen').forms[4],'sprecht');console.log('PASS: 72 source-linked present focus cells, including singular stem changes');
const typedNumbers=lib('typed-zahlen');
assert.equal(typedNumbers.typedZahlen.length,16);
for(const q of typedNumbers.typedZahlen){assert(typedNumbers.checkNumeric(q.kind,q.answer,q.answer));assert(!typedNumbers.checkNumeric(q.kind,'',q.answer));assert(!typedNumbers.checkNumeric(q.kind,q.answer+'x',q.answer));}
assert(typedNumbers.checkNumeric('price','03.50','3,50'));assert(typedNumbers.checkNumeric('date','03.10','3.10.'));assert(typedNumbers.checkNumeric('time','01:05','1:05'));
for(const [k,s] of [['time','24:00'],['time','13:5'],['date','31.4.'],['price','3,5'],['number','21x'],['number','٢١']])assert.equal(typedNumbers.numericValue(k,s),null);
console.log('PASS: 16 typed numeric fixtures, accepted padding/decimal variants and strict format/date boundaries');
assert(search('Typed numbers',100).some(h=>h.href==='/zahlen/#typed-zahlen'));
assert(search('stem changes',100).some(h=>h.href==='/conjugation/#present-focus'));
assert(search('Perfekt context',100).some(h=>h.href==='/perfekt/'));
console.log('PASS: seventh-list practice additions discoverable without duplicate tools');
const modals=lib('modal-meaning');assert.equal(modals.modalMeaning.length,6);modals.modalMeaning.forEach((q,i)=>{assert.notEqual(q.options[0],q.options[1]);assert.equal(modals.modalOptionsAr[i].length,2);assert.notEqual(modals.modalOptionsAr[i][0],modals.modalOptionsAr[i][1]);});
console.log('PASS: six bilingual modal-meaning contrasts');
const {readingEvidence}=lib('reading-evidence');for(const [id,quotes] of Object.entries(readingEvidence)){const r=lib('reading').readings.find(r=>r.id===id);assert(r,id);assert.equal(quotes.length,r.q.length);for(const quote of quotes)assert(r.de.join(' ').includes(quote),id+quote);}
console.log('PASS: 18 reading evidence excerpts are exact and aligned to six A1-B1 text question sets');
assert(search('Modal meaning',100).some(h=>h.href==='/grammar/modalverben/#modal-meaning'));
assert(search('Guided Konjunktiv',100).some(h=>h.href==='/b1/#polite-transform'));
console.log('PASS: modal meanings and guided form practice are searchable');
const reviewCleaner=lib('answer-review').cleanReview;assert.deepEqual(JSON.parse(JSON.stringify(reviewCleaner({cards:{a:{b:2,due:10}},saved:['a','a']}))),{cards:{a:{b:2,due:10}},saved:['a']});
for(const raw of [null,[],{cards:{a:null}},{cards:{a:{b:99,due:1}}},{cards:[]},{saved:'word'}])assert.equal(reviewCleaner(raw).unreadable,true);
console.log('PASS: review shape validation preserves good cards, deduplicates words and marks corrupt schedules');
const {validateProgress}=lib('progress-validation');const blankProgress={xp:0,streak:0,best:0,lastDay:'',name:'',seen:{},scores:[],theme:'papier',daily:{},goal:50,srs:{},challenge:{},exams:{}};
let safeProgress=validateProgress({xp:25,name:'Test',seen:{a:{ok:2,bad:1}},srs:{a:{b:2,due:4}}},blankProgress);assert.equal(safeProgress.invalid,false);assert.equal(safeProgress.state.seen.a.ok,2);for(const raw of [null,[],{seen:null},{scores:'bad'},{srs:[]},{xp:-1},{seen:{a:{ok:'2',bad:1}}}])assert.equal(validateProgress(raw,blankProgress).invalid,true);
console.log('PASS: progress validation preserves valid history and flags malformed shapes without writes');
const {matchesConjugation}=lib('conj-compare');assert(matchesConjugation('  HAST   GEMACHT ','hast gemacht'));assert(matchesConjugation('wa\u0308re','wäre'));assert(!matchesConjugation('muß','muss'));assert(!matchesConjugation('heissen','heißen'));assert(!matchesConjugation('wurde','würde'));assert(!matchesConjugation('reist','reisest'));
console.log('PASS: conjugation model comparison normalizes NFC/space/case without collapsing distinct spellings');
const isolated=validateProgress({},blankProgress);isolated.state.seen.temporary={ok:1,bad:0};assert.equal(validateProgress({},blankProgress).state.seen.temporary,undefined);
console.log('PASS: fresh progress defaults do not share mutable history objects');

// Every noun topic is searchable as a lesson, not only through individual words.
const searchIndex = lib('search-index');
const topicData = lib('data');
for (const topic of topicData.topics) {
 const target = `/lessons/${topic.id}/`;
 assert(searchIndex.index().some(h => h.kind === 'page' && h.href === target), `Missing lesson search entry: ${topic.id}`);
 for (const q of [topicData.topicTitles[topic.id], topicData.topicName(topic.id, 'ar'), topicData.topicName(topic.id, 'en')]) {
  assert(searchIndex.search(q, 100).some(h => h.href === target), `Unsearchable lesson: ${topic.id}: ${q}`);
 }
}
const counts = lib('arcount');
assert.equal(counts.arWords(7), '7 كلمات');
assert.equal(counts.arWords(16), '16 كلمة');
assert.equal(counts.arMinutes(5), '5 دقايق');
assert.equal(counts.arMinutes(12), '12 دقيقة');
console.log('PASS: 58 lesson entries searchable by German, Arabic and English titles; counted nouns');

// Source-grounded verb snapshot: do not silently regress audited principal parts.
const verbAudit = JSON.parse(readFileSync('docs/eleventh-verb-audit.json', 'utf8'));
const allVerbs = lib('verbs').verbs;
assert.equal(verbAudit.records, allVerbs.length);
for (const row of verbAudit.audit) {
 const v = allVerbs.find(v => v.inf === row.inf);
 assert(v, row.inf);
 assert.deepEqual([...v.pres], row.present, row.inf + ' present');
 assert.equal(v.pret, row.preterite_3sg, row.inf + ' preterite');
 assert.equal(v.pp, row.participle, row.inf + ' participle');
 assert.equal(v.aux, row.auxiliary, row.inf + ' auxiliary');
}
console.log('PASS: 143 source-audited verbs, 858 present forms and 429 principal-part fields retain checked values');
const correctedA1=lib('grammar-a').grammarA;
assert(correctedA1.find(g=>g.id==='satzbau').sum[1].includes('not the second word'));
assert(correctedA1.find(g=>g.id==='artikel-genus').points[1][1].includes('den in the dative'));
assert(correctedA1.find(g=>g.id==='negation').points[1][1].includes('before the final infinitive or participle'));
assert(correctedA1.find(g=>g.id==='imperativ').points[0][1].includes('Fahr!, not Fähr!'));
console.log('PASS: four source-reviewed beginner grammar explanations retain key qualifications');

const {flashDecision,queue:flashQueue,SESSION_MAX,NEW_PER_SESSION}=lib('srs');
for(const ok of [true,false]) {const d=flashDecision(true,ok);assert.equal(d.schedule,false);assert.equal(d.record,false);assert.equal(d.xp,0);assert.equal(d.countKnown,false);assert.equal(d.requeue,false);}
assert.equal(flashDecision(false,false).requeue,true);assert.equal(flashDecision(false,true).xp,2);
const queueState=Object.fromEntries(words.slice(0,30).map((w,i)=>[w.id,{b:i%6+1,due:100}]));
const dueFlash=flashQueue(words,queueState,100);assert.equal(dueFlash.length,SESSION_MAX);assert(dueFlash.every(w=>queueState[w.id]));
assert.equal(flashQueue(words,{},100).length,NEW_PER_SESSION);
console.log('PASS: flash retries are bounded, first-pass-only schedule/XP/history, due priority and session/new limits');
const reviewedA2=lib('grammar-b').grammarB;
assert(reviewedA2.find(g=>g.id==='dativ').points[1][1].includes('or -s'));
assert(reviewedA2.find(g=>g.id==='adjektiv-endungen').points[1][1].includes('feminine and neuter keep -e'));
assert(reviewedA2.find(g=>g.id==='perfekt').points[2][1].includes('Movement alone is not enough'));
assert(reviewedA2.find(g=>g.id==='perfekt').points[3][1].includes('-ieren'));
console.log('PASS: A2 dative plural, adjective accusative and Perfekt qualifications retained');
const a2Drills=lib('exercises-a2-depth').a2Depth;
for(const [topic,rows]of Object.entries(a2Drills)){assert.equal(rows.length,6);for(const row of rows){assert.equal(row.length,6);assert.equal(new Set(row.slice(1,4)).size,3);assert(row[0].includes('___'));assert(row[4]&&row[5]);}const all=lib('exercises').exercises[topic];assert.deepEqual(JSON.parse(JSON.stringify(all.slice(9,15))),JSON.parse(JSON.stringify(rows)));}
assert.equal(a2Drills.dativ[0][1],'Autos');assert.equal(a2Drills['adjektiv-endungen'][0][1],'kleine');assert.equal(a2Drills.perfekt[1][1],'hat');
console.log('PASS: 18 A2 contrast drills appended, unique options, bilingual feedback and checked exception answers');

const {practiceOptionOrder}=lib('practice-options');
const permutations=new Set();const positions=new Set();
for(let n=0;n<30;n++){const key=`dativ:${n}:question`,o=practiceOptionOrder(key,'0');assert.equal(new Set(o).size,3);assert.deepEqual([...o].sort(),[0,1,2]);assert.deepEqual(o,practiceOptionOrder(key,'0'));permutations.add(o.join(''));positions.add(o.indexOf(0));}
assert.equal(permutations.size,6);assert.equal(positions.size,3);
assert.equal(lib('exercises').exercises.satzbau[2][0],'___ du heute?');
console.log('PASS: quiz options use all six stable permutations, cover all correct positions and retain the repaired yes/no prompt');

const {everydayTexts}=lib('reading-everyday');assert.equal(everydayTexts.length,8);
for(const r of everydayTexts){assert(['A2','B1'].includes(r.level));assert(r.de.join(' ').split(/\s+/).length>=100);assert.equal(r.de.length,r.ar.length);assert.equal(r.q.length,4);assert.equal(readingEvidence[r.id].length,4);for(const q of r.q)assert.equal(new Set(q.slice(1)).size,3);assert(lib('reading').readings.some(t=>t.id===r.id));}
const readerSource=readFileSync('src/components/ReadingView.tsx','utf8');assert(readerSource.includes('locked.current=true'));assert(readerSource.includes('practiceOptionOrder'));assert(readerSource.includes('disabled={pick!==null}'));
console.log('PASS: eight extended A2/B1 fictional everyday texts, thirty-two evidence-backed questions, reading input lock and six-way ordering');

for(const [inf,forms] of Object.entries({nehmen:['nehme','nimmst','nimmt','nehmen','nehmt','nehmen'],geben:['gebe','gibst','gibt','geben','gebt','geben'],fahren:['fahre','fährst','fährt','fahren','fahrt','fahren'],arbeiten:['arbeite','arbeitest','arbeitet','arbeiten','arbeitet','arbeiten'],wissen:['weiß','weißt','weiß','wissen','wisst','wissen'],sehen:['sehe','siehst','sieht','sehen','seht','sehen']})){assert.equal(JSON.stringify(presentFocus.find(v=>v.inf===inf).forms),JSON.stringify(forms));assert(lib('present-focus').presentNotes[inf]);}
console.log('PASS: 36 additional checked present forms with singular/plural contrast notes');

const {localActivity}=lib('local-activity');const clock=new Date(2026,0,2,12);const record={lastDay:'2026-01-01',streak:5,daily:{'2025-12-31':8,'2026-01-01':0,'2026-01-02':12}};const original=JSON.stringify(record);let activity=localActivity(record,clock);assert.equal(activity.currentStreak,5);assert.equal(activity.practicedToday,false);assert.equal(activity.recent.length,7);assert.equal(activity.recent[0].key,'2025-12-27');assert.equal(activity.recent[6].xp,12);assert.equal(localActivity({...record,lastDay:'2025-12-31'},clock).currentStreak,0);assert.equal(localActivity({...record,lastDay:'2026-01-03'},clock).currentStreak,0);assert.equal(localActivity({...record,lastDay:'2026-01-02'},clock).practicedToday,true);assert.equal(JSON.stringify(record),original);assert.equal(localActivity({...record,lastDay:''},clock).currentStreak,0);
console.log('PASS: display-only local streak expiry, yesterday grace, future/empty dates, year boundary and seven exact daily XP values');
const gameLayoutSource=readFileSync('src/components/GameRunner.tsx','utf8');assert(gameLayoutSource.includes('min-w-0 [overflow-wrap:anywhere]'));assert(gameLayoutSource.includes('grid-cols-1 gap-3 min-[480px]:grid-cols-2'));
console.log('PASS: long photo-quiz choices wrap and mobile choices use a readable single column');

assert.equal(b1Grammar.length,6);assert.equal(b1Grammar.reduce((n,d)=>n+d.rows.length,0),48);for(const id of ['indirekte-fragen','konnektoren']){assert(lib('b1-grammar').b1GrammarSources[id]);assert.equal(checkBank('B1').filter(q=>q.key.startsWith(`b1:${id}:`)).length,8);}
console.log('PASS: 16 source-linked B1 embedded-question and connector contrasts integrate into the existing bank');

const {everydayDialogues,dialogueEvidence}=lib('dialogues-everyday');assert.equal(everydayDialogues.length,24);for(const d of everydayDialogues){assert.equal(d.q.length,3);assert(d.lines.length>=7);assert(lib('dialogues').dialogues.some(x=>x.id===d.id));assert.equal(dialogueEvidence[d.id].length,3);for(const q of d.q)assert.equal(new Set(q.slice(1)).size,3);for(const quote of dialogueEvidence[d.id])assert(d.lines.some(l=>l[1].includes(quote)));}
console.log('PASS: two appended original A2/B1 dialogues, six distinct answers and exact line evidence');

const {dictationSet,dictationSources}=lib('dictation');for(const level of ['A1','A2','B1','B2','C1','C2']){const sources=dictationSources(level);assert(sources.length);assert.equal(sources.reduce((n,s)=>n+s.count,0),dictationSet(level).length);for(const s of sources){assert(dictationSet(level,s.id).every(x=>x.source===s.id&&x.level===level));assert.equal(dictationSet(level,s.id).length,s.count);}}for(const id of ['alltag-a2-paket','alltag-b1-schicht']){const r=lib('reading').readings.find(r=>r.id===id);const set=dictationSet(r.level,id);assert(set.length>=8);assert(set.every(x=>r.de.join(' ').includes(x.text)));assert(set.every(x=>dictationItems.some(y=>y.id===x.id)));}
console.log('PASS: focused dictation source sets partition all levels, preserve sentence IDs/order and include both new readings');
const allReview=lib('answer-review').reviewBank();assert(allReview.every(q=>q.options.length===3&&q.options.every(Boolean)));
for(const w of words){const q=allReview.find(q=>q.key===w.id);assert(q);assert.equal(q.prompt,`${w.ar} / ${lib('data').glossOf(w,'en')}`);assert.equal(q.options[0],`${w.art} ${w.de}`);}
for(const f of ['ReviewView','WordReview','AnswerReview']){const text=readFileSync(`src/components/${f}.tsx`,'utf8');assert(text.includes('useRef'));assert(/\.current.*return/.test(text));}
console.log('PASS: review options remain three-way, word prompts hide German answer, synchronous review locks retained');

const roundsSource=readFileSync('src/components/GameRunner.tsx','utf8');assert(!roundsSource.includes('}, 900)'));assert(roundsSource.includes("typed.normalize('NFC')"));assert(roundsSource.includes('if(locked.current)return;locked.current=true;award'));assert(roundsSource.includes('disabled={picked!==null}'));assert(roundsSource.includes('saved.current=true;addScore(game,score)'));
console.log('PASS: photo/article/spelling games retain manual feedback, Unicode input, answer locks and once-only completion');

assert(roundsSource.includes('openKeys.current.length===2'));assert(roundsSource.includes('matchedIds.current'));assert(!roundsSource.includes('setTimeout'));assert(roundsSource.includes('No words for this topic'));assert(roundsSource.includes('aria-pressed={show}'));console.log('PASS: memory interaction uses synchronous pair state, manual continuation, named cards and unavailable-topic guard');
for(const p of lib('linked-practice').linkedPractice){const r=lib('reading').readings.find(r=>r.id===p.reading),d=lib('dialogues').dialogues.find(d=>d.id===p.dialogue);assert(r&&d);assert.equal(r.level,d.level);assert(lib('dictation').dictationSet(r.level,r.id).length>=8);}
for(const list of [lib('reading').readings,lib('dialogues').dialogues]){assert.equal(new Set(list.map(x=>x.id)).size,list.length);for(const x of list)assert.equal(new Set(x.q.map(q=>q[0])).size,x.q.length);}
console.log('PASS: linked scenario reading/dialogue/dictation sets resolve, unique IDs and within-scenario questions');
const {resumeEntry,resumeLabel}=lib('resume');assert.equal(resumeEntry({href:'https://evil.invalid/',at:100},100),null);assert.equal(resumeEntry({href:'/account/',at:100},100),null);assert.equal(resumeEntry({href:'/reading/not-real/',at:100},100),null);assert.equal(resumeEntry({href:'/reading/alltag-a2-lerntandem/?q=1',at:100},100),null);assert.equal(resumeEntry({href:'/dialogues/#lerntandem-ort',at:100},100).href,'/dialogues/#lerntandem-ort');assert.equal(resumeEntry({href:'/grammar/dativ/',at:1000000},100),null);assert(resumeLabel('/reading/alltag-a2-lerntandem/'));console.log('PASS: resume only accepts known local study paths, valid fragments/times and excludes accounts/external/query links');

for(const g of lib('grammar').grammar){assert.equal(lib('grammar-walkthrough').grammarWalkthrough[g.id].length,2);assert(g.ex[0]);assert(lib('exercises').exercises[g.id]?.length>=3)}assert(readFileSync('src/components/Practice.tsx','utf8').includes('g:${topic}:${indices[i]}'));console.log('PASS: all 41 grammar topics have worked walkthroughs and quick rounds preserve original question keys');

{
 const {levelProgress,LEVELS}=lib('progress');
 const {grammar:groups}=lib('grammar');const {exercises:bank}=lib('exercises');
 for(const level of LEVELS){
  const keys=groups.filter(g=>g.level===level).flatMap(g=>(bank[g.id]??[]).map((_,i)=>`g:${g.id}:${i}`));
  const need=Math.ceil(keys.length*.8);const state={seen:Object.fromEntries(keys.slice(0,need-1).map(k=>[k,{ok:1,bad:5}]))};
  assert.equal(levelProgress(state,level).passed,false);state.seen[keys[need-1]]={ok:1,bad:7};assert.equal(levelProgress(state,level).passed,true);
  state.seen[keys[0]]={ok:100,bad:0};assert.equal(levelProgress(state,level).got,need);
 }
 const view=readFileSync('src/components/CertificateView.tsx','utf8');
 assert(view.includes('not an accredited language certificate or proof of proficiency'));
 assert(view.includes('htmlFor="practice-name"'));assert(view.includes('<h1'));
 assert(!view.includes('This certifies that'));
 console.log('PASS: personal practice record uses distinct correct-once 80% threshold, clear qualification and labeled optional name');
}
{
 const {contextualPhoto}=lib('data');for(const topic of ['family','jobs','jobs2'])assert.equal(contextualPhoto({topic}),true);for(const topic of ['food','medizin','body','moebel'])assert.equal(contextualPhoto({topic}),false);
 const game=readFileSync('src/components/GameRunner.tsx','utf8');assert(game.includes('data-meaning-cue'));assert(game.includes('contextualPhoto(w)'));console.log('PASS: family/job quiz uses written meaning, ordinary object photo prompts unchanged');
}

for(const id of ['alltag-a2-waschraum','alltag-b1-protokoll']){const r=lib('reading').readingOf(id);for(const quote of readingEvidence[id])assert(r.de.join(' ').includes(quote));assert(lib('linked-practice').linkedPractice.some(x=>x.reading===id));assert(dictationSet(r.level,id).length>=8)}
const {everydayGrammar}=lib('exercises-everyday');assert.equal(Object.keys(everydayGrammar).length,6);for(const [key,rows] of Object.entries(everydayGrammar)){assert.equal(rows.length,4);const full=lib('exercises').exercises[key];assert(full.some((_,i)=>JSON.stringify(full.slice(i,i+rows.length))===JSON.stringify(rows)));for(const r of rows){assert.equal(r.length,6);assert.equal(new Set(r.slice(1,4)).size,3);assert(r[4]&&r[5]);}}console.log('PASS: 24 contextual grammar items append after all existing banks with bilingual explanations');
const laundry=words.filter(w=>w.topic==='waesche');assert.equal(laundry.length,4);for(const [id,article,plural] of [['waeschekorb','der','Wäschekörbe'],['waeschestaender','der','-'],['buegelbrett','das','Bügelbretter'],['kleiderbuegel','der','-']]){const w=laundry.find(w=>w.id===id);assert.equal(w.art,article);assert.equal(w.plural,plural);assert(w.photo.author&&w.photo.license&&w.photo.padding);assert.equal(topicData.glossOf(w,'en').length>0,true);assert(!topicData.contextualPhoto(w));}console.log('PASS: four laundry-care nouns have checked articles, plural conventions, English meanings and real-photo credits');

const {neighborhoodTexts}=lib('reading-neighborhood');assert.equal(neighborhoodTexts.length,3);for(const r of neighborhoodTexts){assert.equal(r.q.length,4);assert.equal(r.de.length,r.ar.length);assert(r.de.join(' ').split(/\s+/).length>=70);for(const quote of readingEvidence[r.id])assert(r.de.join(' ').includes(quote));assert(dictationSet(r.level,r.id).length>=8);for(const q of r.q)assert.equal(new Set(q.slice(1)).size,3);assert(lib('linked-practice').linkedPractice.some(x=>x.reading===r.id));}console.log('PASS: three original A1-B1 linked readings with exact evidence and focused listening/dictation sources');
const {neighborhoodGrammar}=lib('exercises-neighborhood');assert.equal(Object.keys(neighborhoodGrammar).length,6);for(const [key,rows] of Object.entries(neighborhoodGrammar)){assert.equal(rows.length,4);assert(lib('exercises').exercises[key].some((_,i)=>JSON.stringify(lib('exercises').exercises[key].slice(i,i+rows.length))===JSON.stringify(rows)));for(const r of rows){assert.equal(r.length,6);assert.equal(new Set(r.slice(1,4)).size,3);assert(r[4]&&r[5]);}}console.log('PASS: 24 additional A1-A2 grammar items append after all previous extensions');
const gardening=words.filter(w=>w.topic==='gartenpflege');assert.equal(gardening.length,3);for(const [id,art,plural]of [['giesskanne','die','Gießkannen'],['blumentopf','der','Blumentöpfe'],['schubkarre','die','Schubkarren']]){const w=gardening.find(w=>w.id===id);assert.equal(w.art,art);assert.equal(w.plural,plural);assert(w.photo.author&&w.photo.license&&w.photo.padding);assert(topicData.glossOf(w,'en'));}console.log('PASS: three checked garden-care nouns retain dictionary forms and credited real photos');

const {objectTexts}=lib('reading-objects');assert.equal(objectTexts.length,3);for(const r of objectTexts){assert.equal(r.q.length,4);assert.equal(r.de.length,r.ar.length);for(const q of r.q)assert.equal(new Set(q.slice(1)).size,3);for(const quote of readingEvidence[r.id])assert(r.de.join(' ').includes(quote));assert(dictationSet(r.level,r.id).length>=10);assert(lib('linked-practice').linkedPractice.some(x=>x.reading===r.id));}console.log('PASS: three new A1-B1 original everyday-object scenarios, exact evidence, distinct answers and focused dictation');

const {objectGrammar}=lib('exercises-objects');assert.equal(Object.keys(objectGrammar).length,6);for(const [key,rows] of Object.entries(objectGrammar)){assert.equal(rows.length,4);assert(lib('exercises').exercises[key].some((_,i)=>JSON.stringify(lib('exercises').exercises[key].slice(i,i+rows.length))===JSON.stringify(rows)));for(const row of rows){assert.equal(row.length,6);assert.equal(new Set(row.slice(1,4)).size,3);assert(row[4]&&row[5]);}}console.log('PASS: 24 everyday-object grammar rows append after prior saved identities');

const sewing=words.filter(w=>w.topic==='naehzubehoer');assert.equal(sewing.length,3);for(const [id,art,plural]of [['fingerhut','der','Fingerhüte'],['sicherheitsnadel','die','Sicherheitsnadeln'],['reissverschluss','der','Reißverschlüsse']]){const w=sewing.find(w=>w.id===id);assert.equal(w.art,art);assert.equal(w.plural,plural);assert(w.photo.author&&w.photo.license&&w.photo.padding);assert(topicData.glossOf(w,'en'));}console.log('PASS: three sewing-accessory nouns retain checked forms and real-photo credits');

const {packingTexts}=lib('reading-packing');assert.equal(packingTexts.length,3);for(const r of packingTexts){assert.equal(r.q.length,4);assert.equal(r.de.length,r.ar.length);for(const q of r.q)assert.equal(new Set(q.slice(1)).size,3);for(const quote of readingEvidence[r.id])assert(r.de.join(' ').includes(quote));assert(dictationSet(r.level,r.id).length>=10);assert(lib('linked-practice').linkedPractice.some(x=>x.reading===r.id));}console.log('PASS: three original cleanup/packing scenarios have exact evidence, distinct options and focused dictation');

const {packingGrammar}=lib('exercises-packing');assert.equal(Object.keys(packingGrammar).length,6);for(const [key,rows] of Object.entries(packingGrammar)){assert.equal(rows.length,4);assert(lib('exercises').exercises[key].some((_,i)=>JSON.stringify(lib('exercises').exercises[key].slice(i,i+rows.length))===JSON.stringify(rows)));for(const r of rows){assert.equal(r.length,6);assert.equal(new Set(r.slice(1,4)).size,3);assert(r[4]&&r[5]);}}console.log('PASS: 24 packing/cleanup grammar rows append after every earlier bank with bilingual explanations');

for(const [topic,expected]of [['putzhelfer',[['kehrblech','das','Kehrbleche'],['handfeger','der','-'],['schwamm','der','Schwämme']]],['reisehelfer',[['kofferanhaenger','der','-'],['vorhaengeschloss','das','Vorhängeschlösser'],['gepaeckwaage','die','Gepäckwaagen']]]]){const group=words.filter(w=>w.topic===topic);assert.equal(group.length,3);for(const[id,art,plural]of expected){const w=group.find(w=>w.id===id);assert.equal(w.art,art);assert.equal(w.plural,plural);assert(w.photo.author&&w.photo.license&&w.photo.padding);assert(topicData.glossOf(w,'en'));}}console.log('PASS: six checked cleanup/travel nouns with credited real photos and same-form plurals');

const readingBrowser=readFileSync('src/components/ReadingBrowser.tsx','utf8');for(const text of ['reading-search','reading-level','role="status"','aria-atomic="true"',"setQuery('');setLevel('all')",'No matching texts.',"normalize('NFC')"])assert(readingBrowser.includes(text));assert(!readingBrowser.includes('localStorage'));console.log('PASS: reading browser has labeled search/group filter, result status, clear/empty state and no learner-record writes');

const {breakTexts}=lib('reading-breaks');assert.equal(breakTexts.length,3);for(const r of breakTexts){assert.equal(r.q.length,4);assert.equal(r.de.length,r.ar.length);for(const q of r.q)assert.equal(new Set(q.slice(1)).size,3);for(const quote of readingEvidence[r.id])assert(r.de.join(' ').includes(quote));assert(dictationSet(r.level,r.id).length>=10);assert(lib('linked-practice').linkedPractice.some(x=>x.reading===r.id));}console.log('PASS: three break/stationery/event scenarios have exact evidence, distinct answers and focused dictation');

const {breakGrammar}=lib('exercises-breaks');assert.equal(Object.keys(breakGrammar).length,6);for(const[key,rows]of Object.entries(breakGrammar)){assert.equal(rows.length,4);assert(lib('exercises').exercises[key].some((_,i)=>JSON.stringify(lib('exercises').exercises[key].slice(i,i+rows.length))===JSON.stringify(rows)));for(const r of rows){assert.equal(r.length,6);assert.equal(new Set(r.slice(1,4)).size,3);assert(r[4]&&r[5]);}}console.log('PASS: 24 break/stationery grammar rows append after all saved identities');

const verbBrowser=readFileSync('src/components/VerbBrowser.tsx','utf8');for(const part of ['verb-search','role="status"','aria-pressed=','No matching verbs.','Clear search and filters',"q.trim().normalize('NFC')"])assert(verbBrowser.includes(part));assert(!verbBrowser.includes('localStorage'));console.log('PASS: verb browser exposes search label, selected filters, live count, clear/empty guidance and normalized query without learner writes');

for(const [topic,expected]of [['pausenbedarf',[['brotdose','die','Brotdosen'],['trinkflasche','die','Trinkflaschen'],['thermoskanne','die','Thermoskannen']]],['schreibzubehoer',[['heftgeraet','das','Heftgeräte'],['klebeband','das','Klebebänder'],['spitzer','der','-']]]]){const group=words.filter(w=>w.topic===topic);assert.equal(group.length,3);for(const[id,art,plural]of expected){const w=group.find(w=>w.id===id);assert.equal(w.art,art);assert.equal(w.plural,plural);assert(w.photo.author&&w.photo.license&&w.photo.padding);assert(topicData.glossOf(w,'en'));}}console.log('PASS: six break/stationery nouns have checked forms and credited real photos');

const {borrowingTexts}=lib('reading-borrowing');assert.equal(borrowingTexts.length,3);for(const r of borrowingTexts){assert.equal(r.q.length,4);assert.equal(r.de.length,r.ar.length);for(const q of r.q)assert.equal(new Set(q.slice(1)).size,3);for(const quote of readingEvidence[r.id])assert(r.de.join(' ').includes(quote));assert(dictationSet(r.level,r.id).length>=10);assert(lib('linked-practice').linkedPractice.some(x=>x.reading===r.id));}console.log('PASS: three original baking/ownership/borrowing scenarios preserve exact evidence and linked dictation');
const {borrowingGrammar}=lib('exercises-borrowing');assert.equal(Object.keys(borrowingGrammar).length,6);for(const [topic,rows]of Object.entries(borrowingGrammar)){assert.equal(rows.length,4);assert.equal(JSON.stringify(lib('exercises').exercises[topic].slice(-4)),JSON.stringify(rows));for(const q of rows){assert.equal(new Set(q.slice(1,4)).size,3);assert(q[4]&&q[5]);}}console.log('PASS: 24 borrowing/baking grammar rows append after all earlier saved questions');
const conjUI=readFileSync('src/components/ConjugationTrainer.tsx','utf8');for(const token of ['htmlFor="conj-person"','aria-expanded={table}','aria-controls="conj-reference"','Previous person','autoComplete="off"','No points or history are saved here.'])assert(conjUI.includes(token));assert(!/localStorage|saveProgress|addXP/.test(conjUI));console.log('PASS: full conjugation lab has direct person selection, previous/next, expanded state and honest unsaved practice');

for(const [topic,expected]of [['backhelfer',[['backform','die','Backformen'],['ausstechform','die','Ausstechformen'],['topflappen','der','-']]],['badzubehoer',[['seifenschale','die','Seifenschalen'],['nagelschere','die','Nagelscheren'],['seifenspender','der','-']]]]){const group=words.filter(w=>w.topic===topic);assert.equal(group.length,3);for(const[id,art,plural]of expected){const w=group.find(w=>w.id===id);assert.equal(w.art,art);assert.equal(w.plural,plural);assert(w.photo.author&&w.photo.license&&w.photo.padding);assert(topicData.glossOf(w,'en'));}}console.log('PASS: six baking/bathroom nouns retain checked forms and credited real photographs');

const {wrappingTexts}=lib('reading-wrapping');assert.equal(wrappingTexts.length,3);for(const r of wrappingTexts){assert.equal(r.q.length,4);assert.equal(r.de.length,r.ar.length);for(const q of r.q)assert.equal(new Set(q.slice(1)).size,3);for(const quote of readingEvidence[r.id])assert(r.de.join(' ').includes(quote));assert(dictationSet(r.level,r.id).length>=10);assert(lib('linked-practice').linkedPractice.some(x=>x.reading===r.id));}console.log('PASS: three original gift/shoe-storage/wrapping scenarios preserve exact evidence and linked dictation');

const {wrappingGrammar}=lib('exercises-wrapping');assert.equal(Object.keys(wrappingGrammar).length,6);assert.equal(Object.values(wrappingGrammar).flat().length,24);for(const [id,rows]of Object.entries(wrappingGrammar)){assert.equal(rows.length,4);assert.equal(JSON.stringify(lib('exercises').exercises[id].slice(-4)),JSON.stringify(rows));for(const row of rows){assert.equal(new Set(row.slice(1,4)).size,3);assert(row[4]&&row[5]);}}console.log('PASS:24 appended gift/shoe grammar rows and all six bilingual explanations');
