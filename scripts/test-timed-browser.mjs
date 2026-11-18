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
let variants=0,checks=0;
try {
b=await p.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',args:['--no-sandbox']});
for(const lang of ['ar','en']) for(const width of [320,390]) for(const level of ['A1','A2','B1','B2','C1','C2']) {
 const g=await b.newPage(),errors=[];g.on('pageerror',e=>errors.push(e.message));
 await g.setViewport({width,height:900});
 await g.evaluateOnNewDocument(l=>{if(!sessionStorage.getItem('qa-timed-initialized')){localStorage.clear();localStorage.setItem('deutschy:lang',l);sessionStorage.setItem('qa-timed-initialized','1')}},lang);
 await g.goto(base+'/timed-practice/',{waitUntil:'networkidle0'});
 await g.waitForSelector('#timed-level');await g.select('#timed-level',level);
 const started=await g.evaluate(()=>{
   const btn=[...document.querySelectorAll('main button')].find(e=>/ابدأ الجولة|Start session/.test(e.textContent));
   const click=btn[Object.keys(btn).find(k=>k.startsWith('__reactProps'))].onClick;
   window.__oldBegin=click;click();const first=JSON.parse(localStorage.getItem('deutschy:timed:v1')).active.id;click();
   return {first,after:JSON.parse(localStorage.getItem('deutschy:timed:v1')).active.id};
 });assert.equal(started.first,started.after);checks++;
 await g.waitForSelector('main section h2[lang=de]');
 const first=await g.evaluate(()=>{
   const btn=document.querySelector('main section button[lang=de]');
   const click=btn[Object.keys(btn).find(k=>k.startsWith('__reactProps'))].onClick;
   window.__oldAnswer=click;click();click();click();
   return JSON.parse(localStorage.getItem('deutschy:timed:v1'));
 });assert.equal(first.active.answers.length,1);assert.equal(first.active.level,level);assert.equal(first.history.length,0);checks+=3;
 await g.waitForSelector('main section [role=status]');assert(await g.$$eval('main section button[lang=de]',a=>a.every(e=>e.disabled)));checks++;
 if(level==='A1'&&width===390&&process.env.TIMED_SCREENSHOT_DIR){await g.$eval('main section h2[lang=de]',e=>e.scrollIntoView({block:'center'}));await g.screenshot({path:path.join(process.env.TIMED_SCREENSHOT_DIR,'timed158-feedback-'+lang+'.png'),fullPage:true})}
 const next=await g.evaluateHandle(()=>[...document.querySelectorAll('main section button')].find(e=>/^(التالي|Next)$/.test(e.textContent)));
 await next.evaluate(e=>{const click=e[Object.keys(e).find(k=>k.startsWith('__reactProps'))].onClick;window.__oldNext=click;click();click()});
 await g.waitForFunction(()=>!document.querySelector('main section button[lang=de]').disabled);
 // Re-enter the original handler after moving forward. It must not answer unseen/current question.
 await g.evaluate(()=>window.__oldAnswer());
 assert.equal(await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:timed:v1')).active.answers.length),1);checks++;
 await g.evaluate(()=>{const btn=document.querySelector('main section button[lang=de]');const click=btn[Object.keys(btn).find(k=>k.startsWith('__reactProps'))].onClick;click();click()});
 assert.equal(await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:timed:v1')).active.answers.length),2);checks++;
 // Reload with an answered prompt awaiting Next:resume at the next unanswered prompt without recounting it.
 await g.reload({waitUntil:'networkidle0'});await g.waitForSelector('main section button[lang=de]');
 assert.equal(await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:timed:v1')).active.answers.length),2);
 assert(await g.$$eval('main section button[lang=de]',a=>a.every(e=>!e.disabled)));checks+=2;
 await g.evaluate(()=>{const answer=document.querySelector('main section button[lang=de]');window.__retiredAnswer=answer[Object.keys(answer).find(k=>k.startsWith('__reactProps'))].onClick;const btn=[...document.querySelectorAll('main section button')].find(e=>/أنهي الجولة دلوقتي|End session now/.test(e.textContent));const click=btn[Object.keys(btn).find(k=>k.startsWith('__reactProps'))].onClick;click();click()});
 await g.waitForSelector('#timed-level');
 let stored=await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:timed:v1')));assert.equal(stored.active,null);assert.equal(stored.history.length,1);assert.equal(stored.history[0].answered,2);assert.equal(stored.history[0].reason,'ended');checks+=4;
 // Begin a new session,then invoke the prior session's old answer after expiry.
 await g.evaluate(()=>[...document.querySelectorAll('main button')].find(e=>/ابدأ الجولة|Start session/.test(e.textContent)).click());
 await g.waitForSelector('main section button[lang=de]');
 await g.evaluate(()=>window.__retiredAnswer());assert.equal(await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:timed:v1')).active.answers.length),0);checks++;
 await g.evaluate(()=>{const s=JSON.parse(localStorage.getItem('deutschy:timed:v1')).active;Date.now=()=>s.deadline+1;const btn=document.querySelector('main section button[lang=de]');btn[Object.keys(btn).find(k=>k.startsWith('__reactProps'))].onClick()});
 await g.waitForSelector('#timed-level');stored=await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:timed:v1')));
 assert.equal(stored.active,null);assert.equal(stored.history.length,2);assert.equal(stored.history[1].answered,0);assert.equal(stored.history[1].reason,'time');assert(stored.history[1].elapsed<=stored.history[1].minutes*60000);checks+=5;
 assert.equal(await g.evaluate(()=>localStorage.getItem('deutschy:v1')),null);assert.deepEqual(errors,[]);assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks+=3;
 if(level==='A1'){await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);checks++}
 variants++;await g.close();
}
console.log('PASS',variants,'six-level AR/EN320/390 timed variants;',checks,'reentry/stale handler/session/expiry/reload/storage/layout assertions;4 axe snapshots');
} finally {await b?.close();server.close()}
