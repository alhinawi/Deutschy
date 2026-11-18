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
for(const lang of ['ar','en']) for(const width of [320,390,1280]) {
 const g=await b.newPage(),errors=[];g.on('pageerror',e=>errors.push(e.message));
 await g.setViewport({width,height:760});
 await g.evaluateOnNewDocument(l=>{localStorage.clear();localStorage.setItem('deutschy:lang',l)},lang);
 await g.goto(base+'/',{waitUntil:'networkidle0'});
 const opener=await g.$('header button[aria-label="'+(lang==='ar'?'بحث':'Search')+'"]');assert(opener);
 await opener.focus();await g.keyboard.press('Enter');await g.waitForSelector('[role=dialog]');
 assert.equal(await g.evaluate(()=>document.activeElement?.getAttribute('role')),'combobox');
 assert.equal(await g.evaluate(()=>document.body.style.overflow),'hidden');checks+=2;
 // Reverse/forward tab wrap both ways and never leave the dialog.
 await g.keyboard.down('Shift');await g.keyboard.press('Tab');await g.keyboard.up('Shift');
 assert.equal(await g.evaluate(()=>document.activeElement?.getAttribute('aria-label')),lang==='ar'?'اقفل البحث':'Close search');
 await g.keyboard.press('Tab');assert.equal(await g.evaluate(()=>document.activeElement?.getAttribute('role')),'combobox');
 await g.keyboard.press('Tab');assert.equal(await g.evaluate(()=>document.activeElement?.tagName),'BUTTON');
 // Arrow/Enter on the close control must not follow a search result.
 await g.keyboard.press('ArrowDown');assert.equal(await g.evaluate(()=>document.activeElement?.tagName),'BUTTON');
 await g.keyboard.press('Tab');checks+=4;
 await g.keyboard.press('ArrowDown');await g.type('[role=combobox]','zzzzzzzzzzzz');
 await g.waitForFunction(()=>document.querySelector('[role=combobox]').value==='zzzzzzzzzzzz'&&!document.querySelector('[role=option]'));
 await g.keyboard.press('ArrowDown');assert.equal(await g.$eval('[role=combobox]',e=>e.getAttribute('aria-activedescendant')),null);checks++;
 await g.$eval('[role=combobox]',e=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(e,'de');e.dispatchEvent(new Event('input',{bubbles:true}))});
 await g.waitForFunction(()=>document.querySelectorAll('[role=option]').length===30);
 for(let i=0;i<40;i++)await g.keyboard.press('ArrowDown');
 const selected=await g.$eval('[role=combobox]',e=>e.getAttribute('aria-activedescendant'));
 assert.equal(await g.$$eval('[role=option]',a=>a[a.length-1].id),selected);
 assert(await g.$eval('[role=listbox]',e=>e.scrollTop>0));
 assert(await g.$eval('[aria-selected=true]',e=>{const r=e.getBoundingClientRect(),p=e.parentElement.getBoundingClientRect();return r.top>=p.top-1&&r.bottom<=p.bottom+1}));checks+=3;
 await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});
 const violations=await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.html)})));
 assert.deepEqual(violations,[]);checks++;
 if(width===390&&process.env.SEARCH_SCREENSHOT_DIR)await g.screenshot({path:path.join(process.env.SEARCH_SCREENSHOT_DIR,'search155-selected-'+lang+'.png'),fullPage:false});
 await g.keyboard.press('Escape');await g.waitForFunction(()=>!document.querySelector('[role=dialog]'));
 assert(await opener.evaluate(e=>e===document.activeElement));assert.equal(await g.evaluate(()=>document.body.style.overflow),'');checks+=2;
 // Reopen resets the query and selected state; pointer close restores opener.
 await g.keyboard.press('Enter');await g.waitForFunction(()=>document.querySelector('[role=combobox]')?.value==='');assert.equal(await g.$eval('[role=combobox]',e=>e.value),'');
 await g.click('[role=dialog] button');assert(await opener.evaluate(e=>e===document.activeElement));checks+=2;
 // Keyboard shortcut opener restoration and composition Enter guard.
 await g.keyboard.press('/');await g.waitForSelector('[role=combobox]');
 await g.type('[role=combobox]','Rotkehlchen');await g.waitForFunction(()=>document.querySelector('[role=option]'));
 await g.$eval('[role=combobox]',e=>e.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true,isComposing:true})));
 assert(await g.$('[role=dialog]'));checks++;
 // Result navigation resolves the same selected href; no learner progress writes.
 const title=await g.$eval('[aria-selected=true]',e=>e.innerText);assert.match(title,/Rotkehlchen/);
 await Promise.all([g.waitForNavigation({waitUntil:'networkidle0'}),g.keyboard.press('Enter')]);
 assert.match(g.url(),/\/lessons\/rotkehlchenamsel\/?#word-rotkehlchen$/);assert.equal(await g.$('[role=dialog]'),null);
 assert.equal(await g.evaluate(()=>localStorage.getItem('deutschy:v1')),null);assert.deepEqual(errors,[]);checks+=4;
 variants++;await g.close();
}
const coldContext=await b.createBrowserContext();const cold=await coldContext.newPage();await cold.setCacheEnabled(false);await cold.setBypassServiceWorker(true);
await cold.setRequestInterception(true);
let held=[],hold=false;
cold.on('request',r=>{if(hold&&r.url().includes('/_next/static/chunks/')&&r.url().endsWith('.js'))held.push(r);else r.continue()});
await cold.goto(base+'/',{waitUntil:'networkidle0'});hold=true;
await cold.keyboard.press('/');await cold.waitForSelector('[role=combobox]');
await cold.type('[role=combobox]','Rotkehlchen');
await cold.$eval('[role=combobox]',e=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(e,'Amsel');e.dispatchEvent(new Event('input',{bubbles:true}))});
await cold.keyboard.press('Escape');await cold.waitForFunction(()=>!document.querySelector('[role=dialog]'));
await cold.keyboard.press('/');await cold.waitForFunction(()=>document.querySelector('[role=combobox]')?.value==='');
await cold.type('[role=combobox]','Kohlrabi');hold=false;assert(held.length>0,'Cold import request was intercepted');
for(const r of held)await r.continue();
await cold.waitForFunction(()=>document.querySelector('[aria-selected=true]')?.textContent.includes('Kohlrabi'));
assert.equal(await cold.$eval('[role=combobox]',e=>e.value),'Kohlrabi');
assert(!(await cold.$eval('[role=listbox]',e=>e.textContent)).includes('Rotkehlchen'));
await cold.keyboard.press('Tab');await cold.keyboard.press('Enter');await cold.waitForFunction(()=>!document.querySelector('[role=dialog]'));
assert.equal(cold.url(),base+'/');await cold.close();
console.log('PASS cold delayed import:latest query wins across close/reopen;Enter on close does not navigate');
console.log('PASS',variants,'AR/EN 320/390/1280 variants;',checks,'keyboard,focus,scroll,IME,navigation,storage assertions;6 axe snapshots');
} finally {await b?.close();server.close()}
