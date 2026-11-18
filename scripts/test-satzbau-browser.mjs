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
const {satzbau,patterns}=loadTs(fileURLToPath(new URL('../src/lib/satzbau.ts',import.meta.url))),{tokens}=loadTs(fileURLToPath(new URL('../src/lib/sentences.ts',import.meta.url)));
let variants=0,checks=0;
try{b=await p.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',args:['--no-sandbox']});
for(const lang of ['ar','en'])for(const width of [320,390]){
 const g=await b.newPage(),errors=[];g.on('pageerror',e=>errors.push(e.message));await g.setViewport({width,height:900});await g.evaluateOnNewDocument(l=>{if(!sessionStorage.getItem('qa-sb-init')){localStorage.clear();localStorage.setItem('deutschy:lang',l);sessionStorage.setItem('qa-sb-init','1')}},lang);
 await g.goto(base+'/games/satzbau/',{waitUntil:'networkidle0'});await g.waitForSelector('.satzbau-bank');
 let xp=0,history=0;
 for(const pat of ['all',...patterns.map(p=>p.id)]){
  const label=pat==='all'?(lang==='ar'?'الكل':'All'):patterns.find(p=>p.id===pat).t;
  await g.evaluate(label=>[...document.querySelectorAll('main button')].find(e=>e.textContent===label).click(),label);await g.waitForSelector('.satzbau-bank');
  const total=Math.min(8,satzbau.filter(r=>pat==='all'||r.p===pat).length);let score=0;
  for(let i=0;i<total;i++){
   const hint=await g.$eval('.satzbau-prompt',e=>e.textContent),row=satzbau.find(r=>r[lang==='ar'?'ar':'en']===hint),correct=i%2===0;
   assert(row);checks++;
   if(i===0){
    // Repeated bank handler cannot append twice,and stale edits cannot revert later token edits.
    const first=await g.evaluate(()=>{const e=document.querySelector('.satzbau-bank button'),click=e[Object.keys(e).find(k=>k.startsWith('__reactProps'))].onClick;window.__retiredToken=click;click();click();return e.textContent});
    await g.waitForFunction(()=>document.querySelectorAll('[data-satzbau-round] > div[dir=ltr]:not(.satzbau-bank) button').length===1);checks++;
    await g.evaluate(()=>window.__retiredToken());assert.equal(await g.$$eval('[data-satzbau-round] > div[dir=ltr]:not(.satzbau-bank) button',a=>a.length),1);checks++;
    await g.evaluate(()=>{const e=document.querySelector('[data-satzbau-round] > div[dir=ltr]:not(.satzbau-bank) button'),click=e[Object.keys(e).find(k=>k.startsWith('__reactProps'))].onClick;window.__retiredRemove=click;click();click()});await g.waitForFunction(()=>document.querySelectorAll('[data-satzbau-round] > div[dir=ltr]:not(.satzbau-bank) button').length===0);checks++;
   }
   const sequence=correct?tokens(row.de):[...tokens(row.de)].reverse();
   for(const word of sequence){await g.evaluate(word=>{const e=[...document.querySelectorAll('.satzbau-bank button')].find(e=>!e.disabled&&e.textContent===word);if(!e)throw Error('Missing token '+word);e.click()},word)}
   await g.evaluate(()=>{if(window.__retiredRemove)window.__retiredRemove();if(window.__retiredToken)window.__retiredToken()});
   assert.equal(await g.$$eval('[data-satzbau-round] > div[dir=ltr]:not(.satzbau-bank) button',a=>a.length),sequence.length);checks++;
   await g.evaluate(()=>{const e=[...document.querySelectorAll('main button')].find(e=>/^(تأكيد|Check)$/.test(e.textContent));if(e.disabled)throw Error('Check unexpectedly disabled');const click=e[Object.keys(e).find(k=>k.startsWith('__reactProps'))].onClick;window.__retiredCheck=click;click();click();if(window.__oldRoundCheck)window.__oldRoundCheck()});
   await g.waitForSelector('[data-satzbau-round] p[role=status]');if(correct){xp+=12;score++}
   const state=await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:v1')));assert.equal(state.xp,xp);assert.equal(state.scores.length,history);assert(await g.$$eval('.satzbau-bank button',a=>a.every(e=>e.disabled)));checks+=3;
   if(i===1){await g.evaluate(()=>{if(window.__retiredNext)window.__retiredNext()});assert.equal(await g.$eval('.satzbau-prompt',e=>e.textContent),hint);checks++}
   if(pat==='all'&&i===1){await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);checks++;if(width===390&&process.env.SATZBAU_SCREENSHOT_DIR){await g.evaluate(()=>scrollTo(0,0));await g.screenshot({path:path.join(process.env.SATZBAU_SCREENSHOT_DIR,'satzbau162-feedback-'+lang+'.png'),fullPage:true})}}
   await g.evaluate(()=>{const e=[...document.querySelectorAll('[data-satzbau-round] button')].find(e=>/^(التالي|Next|النتيجة|Result)$/.test(e.textContent)),click=e[Object.keys(e).find(k=>k.startsWith('__reactProps'))].onClick;window.__retiredNext=click;click();click()});
   if(i<total-1){await g.waitForFunction(()=>!document.querySelector('[data-satzbau-round] p[role=status]'));await g.evaluate(()=>{window.__retiredCheck();window.__retiredNext()});assert.equal((await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:v1')))).xp,xp);assert.equal(await g.$$eval('[data-satzbau-round] > div[dir=ltr]:not(.satzbau-bank) button',a=>a.length),0);checks+=2}
  }
  await g.waitForFunction(n=>JSON.parse(localStorage.getItem('deutschy:v1')).scores.length===n,{},++history);const result=await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:v1')).scores.at(-1));assert.equal(result.game,'satzbau');assert.equal(result.score,score);checks+=2;
  await g.evaluate(()=>{window.__oldRoundCheck=window.__retiredCheck;const e=[...document.querySelectorAll('main button')].find(e=>/^(جولة جديدة|New round)$/.test(e.textContent)),click=e[Object.keys(e).find(k=>k.startsWith('__reactProps'))].onClick;window.__oldRoundAgain=click;click();click()});await g.waitForSelector('.satzbau-bank');const hint=await g.$eval('.satzbau-prompt',e=>e.textContent);await g.evaluate(()=>{window.__oldRoundCheck();window.__retiredNext();window.__oldRoundAgain()});assert.equal(await g.$eval('.satzbau-prompt',e=>e.textContent),hint);assert.equal(await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:v1')).scores.length),history);checks+=2;variants++;
 }
 await g.reload({waitUntil:'networkidle0'});await g.waitForSelector('.satzbau-bank');assert.equal(await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:v1')).xp),xp);assert.equal(await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:v1')).scores.length),history);assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);checks+=4;await g.close();
}
console.log('PASS',variants,'AR/EN320/390 all+seven-pattern sentence-builder rounds;',checks,'token/check/Next/unmounted-round/result/XP/reload/layout assertions;4 axe snapshots');
}finally{await b?.close();server.close()}
