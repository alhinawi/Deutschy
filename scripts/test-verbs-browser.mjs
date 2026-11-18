import ts from 'typescript';
import vm from 'node:vm';
import {readFileSync,existsSync} from 'node:fs';
import p from 'puppeteer-core';
import assert from 'node:assert/strict';
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const root=path.resolve(fileURLToPath(new URL('../out/',import.meta.url)));
// Serve only the static export on loopback; no production account or writes.
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.woff2':'font/woff2'};
const server=http.createServer(async(req,res)=>{
 try {
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  let file=path.resolve(root,'.'+pathname);
  if(file!==root&&!file.startsWith(root+path.sep))throw new Error('Invalid path');
  if((await fs.stat(file)).isDirectory())file=path.join(file,'index.html');
  const body=await fs.readFile(file);
  res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(body);
 } catch {res.writeHead(404);res.end('Not found');}
});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const base='http://127.0.0.1:'+server.address().port;
let b;
const cache=new Map();
function loadTs(file){if(cache.has(file))return cache.get(file);const exports={};cache.set(file,exports);const localRequire=name=>{if(!name.startsWith('.'))return require(name);const base=path.resolve(path.dirname(file),name);const resolved=['.ts','.json'].map(ext=>base+ext).find(existsSync);if(resolved?.endsWith('.json'))return JSON.parse(readFileSync(resolved,'utf8'));return loadTs(resolved)};vm.runInNewContext(ts.transpileModule(readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,{exports,require:localRequire});return exports}
const verbs=loadTs(fileURLToPath(new URL('../src/lib/verbs.ts',import.meta.url))).verbs;
const pronouns=['ich','du','er/sie/es','wir','ihr','sie/Sie'];
function correct(prompt){if(prompt.includes('Partizip II'))return verbs.find(v=>v.inf===prompt.split(' →')[0]).pp;if(prompt.includes('Perfekt:'))return verbs.find(v=>v.inf===prompt.split(' →')[0]).aux==='sein'?'bin':'habe';const v=verbs.find(v=>v.inf===prompt.match(/\((.+)\)/)[1]);return v.pres[pronouns.findIndex(p=>prompt.startsWith(p+' ___'))]}
let variants=0,checks=0;
try{
b=await p.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',args:['--no-sandbox']});
for(const lang of ['ar','en'])for(const width of [320,390]){
 const g=await b.newPage(),errors=[];g.on('pageerror',e=>errors.push(e.message));await g.setViewport({width,height:900});
 await g.evaluateOnNewDocument(l=>{if(!sessionStorage.getItem('qa-verbs-init')){localStorage.clear();localStorage.setItem('deutschy:lang',l);sessionStorage.setItem('qa-verbs-init','1')}},lang);
 await g.goto(base+'/verbs/quiz/',{waitUntil:'networkidle0'});await g.waitForSelector('[data-verb-quiz] button[lang=de]');
 const stored=()=>g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:v1')||'{}'));
 let xp=0;
 for(let round=0;round<2;round++){
  for(let i=0;i<10;i++){
   const prompt=await g.$eval('[data-verb-quiz] p[lang=de]',e=>e.textContent),answer=correct(prompt),good=round===0||i%2===0;
   const options=await g.$$eval('[data-verb-quiz] button[lang=de]',a=>a.map(e=>e.textContent));assert(options.includes(answer));checks++;
   const selected=good?answer:options.find(s=>s!==answer);
   await g.evaluate(selected=>{const buttons=[...document.querySelectorAll('[data-verb-quiz] button[lang=de]')],btn=buttons.find(e=>e.textContent===selected);const click=btn[Object.keys(btn).find(k=>k.startsWith('__reactProps'))].onClick;window.__retiredAnswer=click;click();click();for(const e of buttons)e[Object.keys(e).find(k=>k.startsWith('__reactProps'))].onClick()},selected);
   await g.waitForFunction(()=>[...document.querySelectorAll('[data-verb-quiz] button[lang=de]')].every(e=>e.disabled));xp+=good?5:0;
   let s=await stored();assert.equal(s.xp,xp);assert.equal(s.scores.length,round);checks+=2;
   const feedback=await g.$eval('[data-verb-quiz] > p[role=status]',e=>e.textContent);assert(good?/صح|Correct\./.test(feedback):feedback.includes(answer));checks++;
   if(i===1&&round===1){
    await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);checks++;
    assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'feedback width');checks++;if(width===390&&process.env.VERBS_SCREENSHOT_DIR){await g.evaluate(()=>scrollTo(0,0));await g.screenshot({path:path.join(process.env.VERBS_SCREENSHOT_DIR,'verbs161-feedback-'+lang+'.png'),fullPage:false});}
   }
   // A retired Next must not move the later prompt after it has been answered.
   if(i>0)await g.evaluate(()=>window.__retiredNext());
   assert.equal(await g.$eval('[data-verb-quiz] p[lang=de]',e=>e.textContent),prompt);checks++;
   await g.evaluate(()=>{const btn=[...document.querySelectorAll('[data-verb-quiz] button')].find(e=>/^(التالي|Next|النتيجة|Result)$/.test(e.textContent));const click=btn[Object.keys(btn).find(k=>k.startsWith('__reactProps'))].onClick;window.__retiredNext=click;click();click()});
   if(i<9){await g.waitForFunction(n=>document.querySelector('[data-verb-quiz] > div > span[dir=ltr]')?.textContent===(n+2)+' / 10',{},i);await g.waitForFunction(()=>[...document.querySelectorAll('[data-verb-quiz] button[lang=de]')].every(e=>!e.disabled));await g.evaluate(()=>{window.__retiredAnswer();if(window.__retiredRestart)window.__retiredRestart()});assert.equal((await stored()).xp,xp);checks++}
  }
  await g.waitForFunction(()=>!document.querySelector('[data-verb-quiz] button[lang=de]'));let s=await stored();assert.equal(s.scores.length,round+1);assert.equal(s.scores[round].game,'verb-quiz');assert.equal(s.scores[round].score,round===0?10:5);assert.equal(s.xp,xp);checks+=4;
  await g.evaluate(()=>{const btn=[...document.querySelectorAll('[data-verb-quiz] button')].find(e=>/^(جولة جديدة|New round)$/.test(e.textContent));const click=btn[Object.keys(btn).find(k=>k.startsWith('__reactProps'))].onClick;window.__retiredRestart=click;click();click()});
  await g.waitForSelector('[data-verb-quiz] button[lang=de]:not([disabled])');const prompt=await g.$eval('[data-verb-quiz] p[lang=de]',e=>e.textContent);await g.evaluate(()=>{window.__retiredAnswer();window.__retiredNext();window.__retiredRestart()});assert.equal(await g.$eval('[data-verb-quiz] p[lang=de]',e=>e.textContent),prompt);assert.equal((await stored()).scores.length,round+1);assert.equal((await stored()).xp,xp);checks+=3;
 }
 // Completed results are already recorded before New round;an abandoned partial round adds no result.
 const prompt=await g.$eval('[data-verb-quiz] p[lang=de]',e=>e.textContent);await g.evaluate(answer=>[...document.querySelectorAll('[data-verb-quiz] button[lang=de]')].find(e=>e.textContent===answer).click(),correct(prompt));xp+=5;
 await g.reload({waitUntil:'networkidle0'});await g.waitForSelector('[data-verb-quiz] button[lang=de]');const s=await stored();assert.equal(s.scores.length,2);assert.equal(s.xp,xp);assert.deepEqual(s.seen,{});assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);checks+=5;
 variants++;await g.close();
}
console.log('PASS',variants,'AR/EN320/390 verb-quiz variants;',checks,'answer-lock/stale prompt/Next/restart/round/result/XP/reload/layout assertions;4 axe snapshots');
}finally{await b?.close();server.close()}
