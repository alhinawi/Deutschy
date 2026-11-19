import puppeteer from 'puppeteer-core';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import fs from 'node:fs';
import ts from 'typescript';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const policy={};vm.runInNewContext(ts.transpileModule(fs.readFileSync('functions/lib/account-state.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,{exports:policy,TextEncoder});
const require=createRequire(import.meta.url),port=32190,base=`http://127.0.0.1:${port}`,log=fs.openSync('/tmp/sentence190-dev.log','w');
const originalRoute=fs.existsSync('src/app/sentences/page.tsx')?fs.readFileSync('src/app/sentences/page.tsx'):null;
const exportMode=process.env.SENTENCE_LIBRARY_EXPORT==='1';
if(!exportMode){fs.mkdirSync('src/app/sentences',{recursive:true});fs.copyFileSync('scripts/fixtures/sentences190-page.tsx','src/app/sentences/page.tsx')}
const server=exportMode?spawn('python3',['-m','http.server',String(port),'--bind','127.0.0.1','--directory','out'],{stdio:['ignore',log,log]}):spawn(process.execPath,['node_modules/next/dist/bin/next','dev','--hostname','127.0.0.1','--port',String(port)],{env:{...process.env,SENTENCE_LIBRARY_PREVIEW:'1',NODE_OPTIONS:'--max-old-space-size=512'},stdio:['ignore',log,log]});
let browser,checks=0,axes=0,guest=false,fail=false,values={},revision=0;
const errors=[];
const wait=ms=>new Promise(r=>setTimeout(r,ms));
try{
 for(let n=0;n<100;n++){try{const r=await fetch(base+'/sentences/');if(r.ok)break}catch{}if(n===99)throw Error('Development preview did not start');await wait(300)}
 browser=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
 const p=await browser.newPage();await p.setViewport({width:390,height:844});p.on('pageerror',e=>errors.push(e.message));p.on('dialog',d=>d.accept());
 await p.evaluateOnNewDocument(()=>{window.__ttsMode='ready';window.__ttsCalls=[];window.__ttsCancelled=0;window.Audio=class{play(){return Promise.reject(new Error('Fixture: no exact recording'))}pause(){}};window.SpeechSynthesisUtterance=class{constructor(text){this.text=text}};Object.defineProperty(window,'speechSynthesis',{configurable:true,value:{getVoices:()=>window.__ttsMode==='unavailable'?[]:[{name:'Microsoft Katja Online',voiceURI:'Microsoft Katja Online',lang:'de-DE'}],cancel(){window.__ttsCancelled++},speak(utterance){window.__ttsCalls.push({text:utterance.text,rate:utterance.rate});if(window.__ttsMode!=='hold')setTimeout(()=>utterance.onend?.(),30)},addEventListener(){},removeEventListener(){}}});window.__storageAttempts=[];for(const name of ['localStorage','sessionStorage','indexedDB'])Object.defineProperty(window,name,{get(){if(name==='localStorage')return{getItem(k){if(k!=='deutschy:appearance')window.__storageAttempts.push('localStorage');return null},setItem(k){if(k!=='deutschy:appearance')window.__storageAttempts.push('localStorage')},removeItem(k){if(k!=='deutschy:appearance')window.__storageAttempts.push('localStorage')}};window.__storageAttempts.push(name);throw Error('Storage forbidden')}})});
 await p.setRequestInterception(true);
 p.on('request',async req=>{const url=new URL(req.url());
  if(url.pathname==='/api/auth/me')return req.respond({status:200,contentType:'application/json',body:JSON.stringify({user:guest?null:{id:1,name:'Sentence test',email:'fixture@example.invalid'}})});
  if(url.pathname==='/api/me/state'){
   if(req.method()==='GET')return req.respond({status:200,contentType:'application/json',body:JSON.stringify({accountId:1,values,revision})});
   if(fail)return req.respond({status:503,contentType:'application/json',body:'{}'});
   const data=JSON.parse(req.postData());assert.equal(data.revision,revision);assert(policy.validAccountValues(data.values),'Real server policy must accept sentence saved/completed keys');values=data.values;revision++;return req.respond({status:200,contentType:'application/json',body:JSON.stringify({ok:true,revision})});
  }
  if(url.pathname==='/api/health')return req.respond({status:200,contentType:'application/json',body:'{"tts":false}'});
  if(url.pathname.startsWith('/api/'))return req.respond({status:200,contentType:'application/json',body:'{}'});
  return req.continue();
 });
 async function ready(){await p.waitForSelector('[data-account-save]');await p.waitForSelector('[data-sentence-id]');await p.waitForFunction(()=>!document.querySelector('[data-sentence-id] button:last-child')?.disabled)}
 async function saved(){await p.waitForFunction(()=>/Saved to your account|اتحفظ في حسابك/.test(document.querySelector('[data-account-save]')?.textContent||''))}
 async function inspect(name){assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(await p.evaluate(()=>window.__storageAttempts),[]);checks+=2;await p.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await p.evaluate(async()=>(await axe.run(document.querySelector('main'),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.html)}))),[]);axes++;await p.screenshot({path:`/downloads/sentence190-${name}.png`})}
 async function clickText(text){await p.$$eval('main button',(bs,text)=>{const b=bs.find(b=>b.textContent===text);if(!b)throw Error('Missing button '+text);b.click()},text)}
 await p.goto(base+'/sentences/',{waitUntil:'domcontentloaded'});await ready();
 await p.$$eval('main nav button',bs=>bs.at(-1).click());await p.waitForFunction(()=>document.querySelector('main ol')?.start===21);assert.equal(await p.$eval('[data-sentence-id] .num',e=>e.textContent),'21');checks++;await p.$$eval('main nav button',bs=>bs[0].click());await p.waitForFunction(()=>document.querySelector('main ol')?.start===1);await inspect('overview-ar');
 await p.$eval('[data-sentence-id]',e=>e.scrollIntoView({block:'start'}));await inspect('cards-ar');
 await p.click('[aria-label="EN English"]');await saved();await p.evaluate(()=>scrollTo(0,0));await inspect('overview-en');
 await p.type('#sentence190-query','appointment');assert((await p.$$('[data-sentence-id]')).length>0);checks++;
 await p.$eval('#sentence190-query',e=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(e,'zzzznonexistentzzzz');e.dispatchEvent(new Event('input',{bubbles:true}))});await p.waitForFunction(()=>document.querySelector('main')?.textContent.includes('No sentences match'));checks++;
 await clickText('Clear filters');await p.waitForSelector('[data-sentence-id]');
 await p.select('#sentence190-level','B2');await p.waitForFunction(()=>[...document.querySelectorAll('[data-sentence-id]')].every(e=>e.textContent.includes('B2')));checks++;
 await p.select('#sentence190-topic','introductions');await p.waitForFunction(()=>document.querySelector('main')?.textContent.includes('No sentences match'));checks++;
 await clickText('Clear filters');await p.waitForSelector('[data-sentence-id]');
 const firstId=await p.$eval('[data-sentence-id]',e=>e.dataset.sentenceId);
 const firstDe=await p.$eval('[data-sentence-id] p[lang=de]',e=>e.textContent);
 await p.$eval('[data-sentence-id] button:first-child',e=>e.click());await p.waitForFunction(()=>document.querySelector('main')?.textContent.includes('Sentence finished.'));assert.equal(await p.evaluate(()=>window.__ttsCalls.at(-1).text),firstDe);checks++;
 await p.select('#sentence190-rate','.7');await p.$eval('[data-sentence-id] button:first-child',e=>e.click());await p.waitForFunction(()=>document.querySelector('main')?.textContent.includes('Sentence finished.'));assert.equal(await p.evaluate(()=>window.__ttsCalls.at(-1).rate),.7);checks++;
 await p.evaluate(()=>{window.__ttsMode='hold'});await p.$eval('[data-sentence-id] button:first-child',e=>e.click());await p.waitForFunction(()=>document.querySelector('main')?.textContent.includes('Sentence playing.'));await clickText('Stop audio');await p.waitForFunction(()=>document.querySelector('main')?.textContent.includes('Audio stopped.'));checks++;
 await p.evaluate(()=>{window.__ttsMode='unavailable'});await p.$eval('[data-sentence-id] button:first-child',e=>e.click());await p.waitForFunction(()=>document.querySelector('main')?.textContent.includes('Audio is unavailable now.'));checks++;
 await p.evaluate(()=>{window.__ttsMode='ready'});

 await p.$eval('[data-sentence-id] button:last-child',e=>e.click());await saved();assert(JSON.parse(values['deutschy:sentences190:saved']).includes(firstId));checks++;
 await p.select('#sentence190-mode','saved');await p.waitForFunction(()=>document.querySelectorAll('[data-sentence-id]').length===1);checks++;
 await p.$eval('[data-sentence-id] button:nth-child(2)',e=>e.click());await p.waitForSelector('#sentence190-answer');assert.equal(await p.$('[data-sentence-id] p[lang=de]'),null);checks++;
 await p.type('#sentence190-answer','This is not the German answer.');await clickText('Compare with the sentence');await p.waitForFunction(()=>document.querySelector('main')?.textContent.includes('Not an exact match yet'));assert.equal(values['deutschy:sentences190:completed'],undefined);checks++;
 await p.$eval('#sentence190-answer',(e,value)=>{Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value').set.call(e,value);e.dispatchEvent(new Event('input',{bubbles:true}))},firstDe);
 await clickText('Compare with the sentence');await p.waitForFunction(()=>document.querySelector('main')?.textContent.includes('Accurate typing.'));await saved();assert(JSON.parse(values['deutschy:sentences190:completed']).includes(firstId));checks++;
 await p.$eval('#sentence190-practice-title',e=>e.scrollIntoView({block:'start'}));await inspect('practice-en');
 await p.reload({waitUntil:'domcontentloaded'});await ready();await p.select('#sentence190-mode','practised');await p.waitForFunction(()=>document.querySelectorAll('[data-sentence-id]').length===1);checks++;
 await p.setViewport({width:320,height:844});await inspect('compact-en');assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks++;
 await p.setViewport({width:390,height:844});await clickText('Clear filters');fail=true;await p.$eval('[data-sentence-id] button:last-child',e=>e.click());await p.waitForSelector('[data-account-save][role=alert]');checks++;await p.evaluate(()=>scrollTo(0,0));await inspect('save-failure-en');fail=false;
 guest=true;await p.reload({waitUntil:'domcontentloaded'});await ready();await p.$eval('[data-sentence-id] button:last-child',e=>e.click());await p.select('#sentence190-mode','saved');await p.waitForFunction(()=>document.querySelectorAll('[data-sentence-id]').length===1);checks++;await p.reload({waitUntil:'domcontentloaded'});await ready();await p.select('#sentence190-mode','saved');await p.waitForFunction(()=>document.querySelectorAll('[data-sentence-id]').length===0);checks++;
 assert.deepEqual(errors,[]);checks++;console.log('PASS sentence190 browser',checks,'checks,',axes,'axe snapshots: AR/EN390,320, search, level/topic/status, saved, typing, account reload, failure, guest reset, no persistent device storage');
}finally{await browser?.close();server.kill('SIGTERM');await new Promise(r=>server.once('exit',r));fs.closeSync(log);if(originalRoute)fs.writeFileSync('src/app/sentences/page.tsx',originalRoute);else{fs.rmSync('src/app/sentences/page.tsx',{force:true});fs.rmdirSync('src/app/sentences')}}
