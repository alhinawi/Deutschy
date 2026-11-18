import ts from 'typescript';import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import crypto from 'node:crypto';
const js=ts.transpileModule(fs.readFileSync('src/lib/game-effects.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
let notes=[],stops=0,timers=[],reduced=false,stored=null;const events={},exports={};
class KeyboardEvent{constructor(key){this.key=key;this.isTrusted=true}}
class AudioContext{state='running';currentTime=0;destination={};createOscillator(){return{frequency:{set value(v){notes.push(v)}},connect(){},disconnect(){},start(){},stop(){stops++}}}createGain(){return{gain:{setValueAtTime(){},linearRampToValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){},disconnect(){}}}}
const document={hidden:false,addEventListener:(k,fn,capture)=>{if(capture||!events[k])events[k]=fn},removeEventListener:k=>delete events[k]};const localStorage={getItem:()=>stored};
vm.runInNewContext(js,{exports,require:()=>({accountMemory:localStorage}),document,window:{AudioContext,matchMedia:()=>({matches:reduced})},localStorage,KeyboardEvent,Element:class{},queueMicrotask:()=>{},setTimeout:fn=>timers.push(fn)});
const e=exports;const cleanup=e.installEffectGestures();e.answerEffect(true);assert.equal(notes.length,0);
events.click({isTrusted:true});e.answerEffect(true);assert.deepEqual(notes,[523.25,659.25]);e.answerEffect(false);assert.equal(notes.length,2);
events.click({isTrusted:true});e.answerEffect(false);assert.deepEqual(notes.slice(-2),[293.66,261.63]);
events.click({isTrusted:false});e.answerEffect(true);assert.equal(notes.length,4);
for(const fn of timers)fn();events.keydown(new KeyboardEvent('a'));e.answerEffect(true);assert.equal(notes.length,4);
events.keydown(new KeyboardEvent('Enter'));e.answerEffect(true);assert.equal(notes.length,6);
stored='off';events.click({isTrusted:true});e.answerEffect(true);assert.equal(notes.length,6);stored='on';reduced=true;events.click({isTrusted:true});e.answerEffect(true);assert.equal(notes.length,6);reduced=false;
document.hidden=true;events.click({isTrusted:true});e.answerEffect(true);assert.equal(notes.length,6);events.visibilitychange();assert(stops>=6);document.hidden=false;
localStorage.getItem=()=>{throw Error('blocked')};assert.equal(e.effectsEnabled(),false);cleanup();assert.equal(Object.keys(events).length,0);
for(const row of JSON.parse(fs.readFileSync('data/family-photo177.json'))){assert.equal(crypto.createHash('sha256').update(fs.readFileSync('public/img/'+row.id+'.jpg')).digest('hex'),row.sha256);assert.notEqual(row.sha256,row.beforeSha256)}
for(const name of ['CaseLab','ConjugationTrainer','DictationTrainer','EgyptDialogueView','ModalMeaning','PerfektContext','PitfallsGuide','PoliteTransform','PresentFocus','SoundContrastLab','TimedPractice','TypedZahlen','WordFormation','GameRunner'])assert(fs.readFileSync('src/components/'+name+'.tsx','utf8').includes('answerEffect('),name);
assert(!fs.readFileSync('src/components/ExamView.tsx','utf8').includes('answerEffect'));console.log('PASS effects model: positive/negative notes,gesture gate,one per gesture,synthetic/keyboard/off/reduced/hidden/storage/cleanup;2 photo hashes;14 local grading hooks;blind exam answers stay silent');
