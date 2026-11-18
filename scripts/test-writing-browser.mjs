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
const tasks=loadTs(fileURLToPath(new URL('../src/lib/writing.ts',import.meta.url))).writingTasks;
let variants=0,checks=0;
try {
b=await p.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',args:['--no-sandbox']});
for(const lang of ['ar','en']) for(const width of [320,390]) for(const level of (process.env.WRITING_LEVELS||'A1,A2,B1,B2,C1,C2').split(',')) {
 const [source,target]=tasks.filter(t=>t.level===level),text=target.need.map(n=>n[0].split('|')[0]).join(' ')+' '+Array(target.min+5).fill('Fixture').join(' ');
 const g=await b.newPage(),errors=[];g.on('pageerror',e=>errors.push(e.message));
 await g.setViewport({width,height:900});await g.evaluateOnNewDocument(l=>{if(!sessionStorage.getItem('qa-writing-init')){localStorage.clear();localStorage.setItem('deutschy:lang',l);sessionStorage.setItem('qa-writing-init','1')}if(sessionStorage.getItem('qa-fail-read')){const original=Storage.prototype.getItem;Storage.prototype.getItem=function(k){if(k.startsWith('deutschy:w:'))throw new DOMException('Fixture unavailable','SecurityError');return original.call(this,k)}}},lang);
 await g.goto(base+'/writing/#'+source.id,{waitUntil:'networkidle0'});await g.waitForSelector('#writing-answer:not([disabled])');
 const setText=async t=>g.$eval('#writing-answer',(e,t)=>{Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value').set.call(e,t);e.dispatchEvent(new Event('input',{bubbles:true}))},t);
 await setText(text);await g.waitForFunction(id=>localStorage.getItem('deutschy:w:'+id)!==null,{},source.id);
 await g.evaluate(()=>[...document.querySelectorAll('main button')].find(e=>/Show a model|شوف نموذج/.test(e.textContent)).click());
 await g.evaluate(id=>{localStorage.setItem('deutschy:w:'+id,'Separate target draft');location.hash=id},target.id);
 await g.waitForFunction(title=>document.querySelector('main h1')?.textContent===title,{},target.title[lang==='ar'?0:1]);
 await g.waitForFunction(()=>document.querySelector('#writing-answer')?.value==='Separate target draft');
 assert(!(await g.$eval('main',e=>e.textContent)).match(/Hide model|اخفي النموذج/));
 assert.equal(await g.evaluate(id=>JSON.parse(localStorage.getItem('deutschy:v1')||'{}').seen?.['w:'+id],target.id),undefined);checks+=3;
 await g.evaluate(id=>location.hash=id,source.id);await g.waitForFunction(text=>document.querySelector('#writing-answer')?.value===text,{},text);checks++;
 await g.evaluate(id=>location.hash=id,target.id);await g.waitForFunction(()=>document.querySelector('#writing-answer')?.value==='Separate target draft');checks++;
 await setText(text);await g.waitForFunction(id=>JSON.parse(localStorage.getItem('deutschy:v1')||'{}').seen?.['w:'+id]?.ok===1,{},target.id);
 const xp=await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:v1')).xp);checks++;
 await g.evaluate(id=>location.hash=id,source.id);await g.waitForFunction(title=>document.querySelector('main h1')?.textContent===title,{},source.title[lang==='ar'?0:1]);
 await g.evaluate(id=>location.hash=id,target.id);await g.waitForFunction(title=>document.querySelector('main h1')?.textContent===title,{},target.title[lang==='ar'?0:1]);await g.waitForFunction(text=>document.querySelector('#writing-answer')?.value===text,{},text);
 assert.equal(await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:v1')).xp),xp);assert.equal(await g.evaluate(id=>JSON.parse(localStorage.getItem('deutschy:v1')).seen['w:'+id].ok,target.id),1);checks+=2;
 // Saving fails visibly while the entered draft remains in the tab and old saved draft stays intact.
 await g.evaluate(()=>{const original=Storage.prototype.setItem;window.__restoreWriting=()=>Storage.prototype.setItem=original;Storage.prototype.setItem=function(k,v){if(k.startsWith('deutschy:w:'))throw new DOMException('Fixture quota','QuotaExceededError');return original.call(this,k,v)}});
 await setText('Unsaved fixture after storage failure');await g.waitForSelector('#writing-draft-status[role=alert]');assert.equal(await g.$eval('#writing-answer',e=>e.value),'Unsaved fixture after storage failure');assert.equal(await g.evaluate(id=>localStorage.getItem('deutschy:w:'+id),target.id),text);assert.equal(await g.$eval('#writing-answer',e=>e.getAttribute('aria-describedby')),'writing-draft-status');checks+=3;
 if(level==='A1'){await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);checks++;if(width===390&&process.env.WRITING_SCREENSHOT_DIR)await g.screenshot({path:path.join(process.env.WRITING_SCREENSHOT_DIR,'writing160-save-warning-'+lang+'.png'),fullPage:true})}
 await g.evaluate(()=>window.__restoreWriting());await g.reload({waitUntil:'networkidle0'});await g.waitForFunction(text=>document.querySelector('#writing-answer')?.value===text,{},text);checks++;
 // Blocked draft reads expose an error and never award a blank draft or mutate the stored source.
 await g.evaluate(()=>sessionStorage.setItem('qa-fail-read','1'));await g.reload({waitUntil:'networkidle0'});await g.waitForSelector('#writing-draft-status[role=alert]');assert.equal(await g.$eval('#writing-answer',e=>e.value),'');assert.equal(await g.evaluate(()=>JSON.parse(localStorage.getItem('deutschy:v1')).xp),xp);checks+=2;
 await g.evaluate(()=>sessionStorage.removeItem('qa-fail-read'));await g.reload({waitUntil:'networkidle0'});await g.waitForFunction(text=>document.querySelector('#writing-answer')?.value===text,{},text);checks++;
 await g.evaluate(()=>location.hash='not-a-real-task');await g.waitForFunction(()=>!document.querySelector('#writing-answer'));assert.equal(await g.evaluate(id=>localStorage.getItem('deutschy:w:'+id),target.id),text);assert.deepEqual(errors,[]);assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks+=3;
 // A complete draft present before mounting can earn only its own task,once.
 await g.evaluate((id,text)=>{localStorage.setItem('deutschy:w:'+id,text);const s=JSON.parse(localStorage.getItem('deutschy:v1'));delete s.seen['w:'+id];localStorage.setItem('deutschy:v1',JSON.stringify(s));location.hash=id},target.id,text);await g.reload({waitUntil:'networkidle0'});await g.waitForFunction(id=>JSON.parse(localStorage.getItem('deutschy:v1')).seen?.['w:'+id]?.ok===1,{},target.id);assert.equal(await g.$eval('#writing-answer',e=>e.value),text);checks++;
 await g.evaluate(()=>location.hash='');await g.waitForFunction(()=>!document.querySelector('#writing-answer'));checks++;
 variants++;await g.close();
}
console.log('PASS',variants,'AR/EN320/390 writing variants;',checks,'task isolation/draft/model/reward/storage/read-error/hash/layout assertions;', (process.env.WRITING_LEVELS||'A1,A2,B1,B2,C1,C2').split(',').includes('A1')?4:0,'axe snapshots');
} finally {await b?.close();server.close()}
