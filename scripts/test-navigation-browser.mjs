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
for(const lang of ['ar','en']) for(const width of [320,390]) {
 const g=await b.newPage(),errors=[];g.on('pageerror',e=>errors.push(e.message));
 await g.setViewport({width,height:760});
 await g.evaluateOnNewDocument(l=>{localStorage.clear();localStorage.setItem('deutschy:lang',l)},lang);
 await g.goto(base+'/',{waitUntil:'networkidle0'});
 let menu=await g.$('header button[aria-controls="mobile-navigation"]');assert(menu);
 assert.equal(await g.$eval('#mobile-navigation',e=>e.open),false);
 assert.equal(await g.$eval('aside',e=>getComputedStyle(e).display),'none');
 await g.evaluate(()=>document.body.style.overflow='auto');
 const open=async()=>{await menu.focus();await g.keyboard.press('Enter');await g.waitForFunction(()=>document.querySelector('#mobile-navigation')?.matches(':modal'))};
 await open();
 assert.equal(await menu.evaluate(e=>e.getAttribute('aria-expanded')),'true');
 assert.equal(await g.evaluate(()=>document.activeElement?.getAttribute('aria-label')),lang==='ar'?'اقفل القائمة':'Close menu');
 assert.equal(await g.evaluate(()=>document.body.style.overflow),'hidden');checks+=5;
 assert.equal(await g.$eval('#mobile-navigation button',e=>e.textContent.trim()),'');
 assert.equal(await g.$eval('#mobile-navigation button svg',e=>e.getAttribute('aria-hidden')),'true');
 const levels=await g.$$eval('#mobile-navigation nav > div',groups=>groups.filter(e=>e.querySelector('a[href^="/levels/"]:not([href="/levels/"])')).map(e=>({title:e.querySelector('p')?.textContent,hrefs:[...e.querySelectorAll('a')].map(a=>a.getAttribute('href'))})));
 assert.deepEqual(levels.map(e=>e.title),['A1','A2','B1','B2','C1','C2'].map(l=>lang==='ar'?'المستوى '+l:'Level '+l));
 for(const [i,level] of ['A1','A2','B1','B2','C1','C2'].entries()){
   assert.deepEqual(levels[i].hrefs,[`/levels/${level}/`,...(level==='A1'?['/lernpfad/']:[`/${level.toLowerCase()}/`,`/${level.toLowerCase()}/wortschatz/`,`/${level.toLowerCase()}/writing/`])]);
 }
 checks+=9;

 // Native modal blocks programmatic background focus, pointer and Tab escape.
 await g.$eval('header a',e=>e.focus());assert(await g.evaluate(()=>document.activeElement.closest('#mobile-navigation')!==null));
 const count=await g.$$eval('#mobile-navigation a',a=>a.length);assert(count>20);
 for(let i=0;i<count+4;i++){await g.keyboard.press('Tab');assert(await g.evaluate(()=>document.activeElement.closest('#mobile-navigation')!==null),'Tab escaped native navigation dialog')}
 await g.$eval('#mobile-navigation button',e=>e.focus());
 await g.keyboard.down('Shift');await g.keyboard.press('Tab');await g.keyboard.up('Shift');
 assert(await g.$eval('#mobile-navigation a:last-child',()=>true));
 assert(await g.evaluate(()=>document.activeElement.closest('#mobile-navigation')!==null));checks+=count+6;
 await g.$eval('#mobile-navigation',e=>e.scrollTop=0);await g.$eval('#mobile-navigation button',e=>e.focus());
 await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});
 assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.html)}))),[]);checks++;
 if(width===390&&process.env.NAV_SCREENSHOT_DIR)await g.screenshot({path:path.join(process.env.NAV_SCREENSHOT_DIR,'navigation165-'+lang+'.png'),fullPage:false});
 await g.keyboard.press('Escape');await g.waitForFunction(()=>!document.querySelector('#mobile-navigation').open);
 assert(await menu.evaluate(e=>e===document.activeElement));assert.equal(await g.evaluate(()=>document.body.style.overflow),'auto');checks+=2;
 await open();await g.click('#mobile-navigation button');await g.waitForFunction(()=>!document.querySelector('#mobile-navigation').open);assert(await menu.evaluate(e=>e===document.activeElement));checks++;
 await open();await g.mouse.click(lang==='ar'?8:width-8,380);await g.waitForFunction(()=>!document.querySelector('#mobile-navigation').open);assert(await menu.evaluate(e=>e===document.activeElement));checks++;
 // Clicking empty dialog padding is not a backdrop click.
 await open();const box=await g.$eval('#mobile-navigation',e=>{const r=e.getBoundingClientRect();return {x:r.left+2,y:r.top+2}});await g.mouse.click(box.x,box.y);assert(await g.$eval('#mobile-navigation',e=>e.open));checks++;
 // Same-route links close too, without waiting for pathname change.
 await g.click('#mobile-navigation a[href="/"]');await g.waitForFunction(()=>!document.querySelector('#mobile-navigation').open);checks++;
 await open();await Promise.all([g.waitForNavigation({waitUntil:'networkidle0'}),g.click('#mobile-navigation a[href="/lessons/"]')]);
 assert.match(g.url(),/\/lessons\/?$/);assert.equal(await g.$eval('#mobile-navigation',e=>e.open),false);assert.notEqual(await g.evaluate(()=>document.body.style.overflow),'hidden');checks+=3;menu=await g.$('header button[aria-controls="mobile-navigation"]');await g.evaluate(()=>document.body.style.overflow='auto');
 // Breakpoint transition closes mobile modal and unlocks desktop UI.
 await open();await g.setViewport({width:1280,height:760});await g.waitForFunction(()=>!document.querySelector('#mobile-navigation').open);
 assert.equal(await g.$eval('aside',e=>getComputedStyle(e).display),'block');assert.equal(await g.evaluate(()=>document.body.style.overflow),'auto');
 assert(await g.$eval('aside a[href="/lessons/"]',e=>e.offsetWidth>0));checks+=3;
 await g.setViewport({width,height:760});assert.equal(await g.$eval('#mobile-navigation',e=>e.open),false);checks++;
 // Search shortcut closes navigation first, preserves its own input focus/scroll lock.
 await open();await g.keyboard.down('Control');await g.keyboard.press('k');await g.keyboard.up('Control');
 await g.waitForFunction(()=>!document.querySelector('#mobile-navigation').open&&document.querySelector('[role=combobox]'));
 assert.equal(await g.evaluate(()=>document.activeElement.getAttribute('role')),'combobox');assert.equal(await g.evaluate(()=>document.body.style.overflow),'hidden');checks+=2;
 await g.keyboard.press('Escape');await g.waitForFunction(()=>!document.querySelector('[role=combobox]'));assert.equal(await g.evaluate(()=>document.body.style.overflow),'auto');
 assert.equal(await g.evaluate(()=>localStorage.getItem('deutschy:v1')),null);assert.deepEqual(errors,[]);assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks+=4;
 variants++;await g.close();
}
console.log('PASS',variants,'AR/EN320/390 navigation variants;',checks,'focus/modal/keyboard/close/route/resize/search/storage assertions;4 axe snapshots');
} finally {await b?.close();server.close()}
