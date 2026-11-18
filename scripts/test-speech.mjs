import ts from 'typescript';import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const compile=file=>ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const helper=compile('src/lib/browser-voices.ts'),js=compile('src/lib/speak.ts');
const edge={lang:'de-DE',name:'Microsoft Katja Online (Natural) - German (Germany)',voiceURI:'Microsoft Katja Online (Natural) - German (Germany)'},edge2={lang:'de-AT',name:'Microsoft Ingrid',voiceURI:'Microsoft Ingrid'},google={lang:'de-DE',name:'Google Deutsch',voiceURI:'Google Deutsch'};
const calls=[];let voices=[google];
function setup(extra={}){const exports={},policy={},context={fetch:async()=>({json:async()=>({tts:false})}),speechSynthesis:{cancel:()=>calls.push('cancel'),getVoices:()=>voices,speak:u=>calls.push(u)},AbortController,Date,SpeechSynthesisUtterance:class{constructor(text){this.text=text}},...extra};vm.runInNewContext(helper,{...context,exports:policy});vm.runInNewContext(js,{...context,exports,require:name=>name.includes('recorded-audio')?{recordedAudio:{'Recorded fixture':'/fixture.mp3'}}:name.includes('voice-preference')?{readVoicePreference:async()=> 'varied'}:policy});return {exports,policy}}
let {exports,policy}=setup();
const bad=[google,{lang:'de-DE',name:'Android Deutsch',voiceURI:'com.android.tts'},{lang:'de-DE',name:'Microsoft Google',voiceURI:'Google Android'},{lang:'en-US',name:'Microsoft Aria',voiceURI:'Microsoft Aria'},{lang:'de-DE',name:'Unknown',voiceURI:'default'},{lang:'de-DE'}];
assert.equal(policy.edgeGermanVoices(bad).length,0);assert.equal(policy.edgeGermanVoices([...bad,edge,edge2]).length,2);
assert.equal(await exports.speak('Hallo'),false);assert(!calls.some(c=>typeof c==='object'));
voices=[google,edge,edge2];assert.equal(await exports.speak('Guten Tag'),true);assert.equal(calls.at(-1).voice,edge);assert.equal(policy.chooseEdgeGermanVoice(edge2.voiceURI),edge2);assert.equal(policy.chooseEdgeGermanVoice(google.voiceURI),edge);
// Re-check live voices on each play;cached/previously selected Google and removed Edge cannot be used.
voices=[google];assert.equal(policy.chooseEdgeGermanVoice(edge.voiceURI),undefined);const count=calls.filter(c=>typeof c==='object').length;assert.equal(await exports.speak('No fallback'),false);assert.equal(calls.filter(c=>typeof c==='object').length,count);exports.stopSpeaking();assert.equal(calls.at(-1),'cancel');
console.log('PASS:German Microsoft/Edge allowlist rejects Google/Android/unknown/non-German,stale selection rechecked,Edge playback/cancellation retained');
let resolveHealth;voices=[edge];let ex=setup({fetch:()=>new Promise(r=>resolveHealth=r)}).exports;const pending=ex.speak('stale');ex.stopSpeaking();resolveHealth({json:async()=>({tts:false})});assert.equal(await pending,false);
console.log('PASS:stopping during async health lookup suppresses stale playback');
let played=0;const requests=[];ex=setup({fetch:async url=>{requests.push(url);return url==='/api/health'?{json:async()=>({tts:true})}:{ok:true,headers:{get:()=> 'audio/mpeg'},blob:async()=>({})}},URL:{createObjectURL:()=> 'blob:fixture',revokeObjectURL:()=>{}},Audio:class{async play(){played++}pause(){}}}).exports;
const before=calls.filter(c=>typeof c==='object').length;assert.equal(await ex.speak('Server first'),true);assert.equal(played,1);assert.equal(calls.filter(c=>typeof c==='object').length,before);assert(requests[1].startsWith('/api/tts?text='));ex.stopSpeaking();
ex=setup({fetch:async url=>url==='/api/health'?{json:async()=>({tts:true})}:{ok:false}}).exports;assert.equal(await ex.speak('Server unavailable'),true);assert.equal(calls.at(-1).voice,edge);
console.log('PASS:existing server audio priority retained;unavailable server falls back only to allowed Edge');

let ended=0;ex=setup({fetch:async()=>{throw Error('recorded must not fetch')},Audio:class{async play(){played++}pause(){}}}).exports;const recordedBefore=played;assert.equal(await ex.speak('Recorded fixture',{rate:.7,onend:()=>ended++}),true);assert.equal(played,recordedBefore+1);ex.stopSpeaking();
console.log('PASS reviewed recording path wins before provider/browser and supports stop');
