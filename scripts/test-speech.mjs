import ts from 'typescript';import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const compile=file=>ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const helper=compile('src/lib/browser-voices.ts'),js=compile('src/lib/speak.ts');
const edge={lang:'de-DE',name:'Microsoft Katja Online (Natural) - German (Germany)',voiceURI:'Microsoft Katja Online (Natural) - German (Germany)'},edge2={lang:'de-AT',name:'Microsoft Ingrid',voiceURI:'Microsoft Ingrid'},google={lang:'de-DE',name:'Google Deutsch',voiceURI:'Google Deutsch'};
const calls=[];let voices=[google];
function setup(extra={}){const exports={},policy={},context={setTimeout,clearTimeout,fetch:async()=>({json:async()=>({tts:false})}),speechSynthesis:{cancel:()=>calls.push('cancel'),getVoices:()=>voices,speak:u=>calls.push(u)},AbortController,Date,SpeechSynthesisUtterance:class{constructor(text){this.text=text}},...extra};vm.runInNewContext(helper,{...context,exports:policy});vm.runInNewContext(js,{...context,exports,require:name=>name.includes('static-speech')?{staticSpeech:extra.staticSpeech??{},speechShardBases:extra.speechShardBases??{}}:name.includes('recorded-audio')?{recordedAudio:{'Recorded fixture':'/fixture.mp3'}}:name.includes('voice-preference')?{readVoicePreference:async()=> extra.preference??'varied'}:policy});return {exports,policy}}
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

// Every caller receives shared feedback even without passing callbacks.
voices=[google];let statuses=[],failures=0;
ex=setup().exports;const unsubscribe=ex.subscribeSpeechStatus(s=>statuses.push(s));
assert.equal(await ex.speak('No compatible source',{onerror:()=>failures++}),false);
assert.deepEqual(statuses,['loading','unavailable']);assert.equal(failures,1);
statuses.length=0;voices=[edge];
assert.equal(await ex.speak('Allowed voice'),true);assert.deepEqual(statuses,['loading','playing']);
const utterance=calls.at(-1);utterance.onerror();utterance.onend();
assert.deepEqual(statuses,['loading','playing','error']);
statuses.length=0;await ex.speak('Stopped normally');ex.stopSpeaking();
assert.deepEqual(statuses,['loading','playing','stopped']);
unsubscribe();statuses.length=0;await ex.speak('After unsubscribe');assert.deepEqual(statuses,[]);ex.stopSpeaking();
let staleResolve;statuses=[];ex=setup({fetch:()=>new Promise(r=>staleResolve=r)}).exports;
ex.subscribeSpeechStatus(s=>statuses.push(s));const cancelled=ex.speak('Cancelled lookup');ex.stopSpeaking();staleResolve({json:async()=>({tts:false})});
assert.equal(await cancelled,false);assert.deepEqual(statuses,['loading','stopped']);
ex=setup({speechSynthesis:undefined}).exports;statuses=[];ex.subscribeSpeechStatus(s=>statuses.push(s));assert.equal(await ex.speak('No speech API'),false);assert.deepEqual(statuses,['loading','unavailable']);
voices=[edge];statuses=[];ex=setup({speechSynthesis:{cancel(){},getVoices:()=>voices,speak(){throw Error('device error')}}}).exports;ex.subscribeSpeechStatus(s=>statuses.push(s));assert.equal(await ex.speak('Thrown playback'),false);assert.deepEqual(statuses,['loading','error']);
console.log('PASS shared unavailable/error notices,initial onerror callback,playing/stopped states,terminal deduplication,unsubscribe,cancellation silence,and missing speech API');
let deadline;statuses=[];voices=[google];
ex=setup({setTimeout:fn=>{deadline=fn;return 1},clearTimeout(){},fetch:(_url,{signal})=>new Promise((_resolve,reject)=>signal.addEventListener('abort',()=>reject(Error('deadline'))))}).exports;
ex.subscribeSpeechStatus(s=>statuses.push(s));const timed=ex.speak('Stalled network');deadline();assert.equal(await timed,false);assert.deepEqual(statuses,['loading','unavailable']);
console.log('PASS stalled network reaches permitted fallback and visible unavailable state');

// Static synthesized speech is shard-routed and does not request a provider on a cache hit.
voices=[google];let sources=[];
ex=setup({staticSpeech:{'Static fixture':{url:'/clips/test.mp3',voiceId:'v1',shard:'one'}},speechShardBases:{one:'https://deutschy-sounds.pages.dev'},fetch:async()=>{throw Error('static hit must not fetch')},Audio:class{constructor(src){sources.push(src)}async play(){}pause(){}}}).exports;
assert.equal(await ex.speak('Static fixture'),true);assert.deepEqual(sources,['https://deutschy-sounds.pages.dev/clips/test.mp3']);ex.stopSpeaking();
ex=setup({staticSpeech:{'Static fixture':{url:'/clips/test.mp3',voiceId:'v1',shard:'one'}},speechShardBases:{one:'https://deutschy-sounds.pages.dev'},Audio:class{async play(){throw Error('missing clip')}pause(){}}}).exports;
statuses=[];ex.subscribeSpeechStatus(s=>statuses.push(s));assert.equal(await ex.speak('Static fixture'),false);assert.equal(statuses.at(-1),'unavailable');
console.log('PASS static shard clip before provider,canonical registry,missing file reaches visible unavailable');

sources=[];ex=setup({preference:'different-fixed-voice',staticSpeech:{'Static fixture':{url:'/clips/test.mp3',voiceId:'v1',shard:'one'}},speechShardBases:{one:'https://deutschy-sounds.pages.dev'},fetch:async()=>{throw Error('static wins despite fixed choice')},Audio:class{constructor(src){sources.push(src)}async play(){}pause(){}}}).exports;assert.equal(await ex.speak('Static fixture'),true);assert.equal(sources.length,1);ex.stopSpeaking();console.log('PASS184 exact static audio wins over unavailable preferred voice without provider use');
// Same-origin generated clips play before any paid proxy/browser fallback.
sources=[];const localClip='/clips/'+'a'.repeat(64)+'.mp3';ex=setup({staticSpeech:{'Local fixture':{url:localClip,voiceId:'Erinome',shard:'deutschy-local'}},fetch:async()=>{throw Error('local clip must not call a provider')},Audio:class{constructor(src){sources.push(src)}async play(){}pause(){}}}).exports;assert.equal(await ex.speak('Local fixture'),true);assert.equal(sources[0],localClip);assert.equal(sources.length,1);ex.stopSpeaking();console.log('PASS same-origin generated audio takes precedence without a provider call');
