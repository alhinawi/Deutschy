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
 const g=await b.newPage(),errors=[];let accept=false;g.on('dialog',d=>(d.type()==='beforeunload'||accept)?d.accept():d.dismiss());g.on('pageerror',e=>errors.push(e.message));
 await g.setViewport({width,height:900});
 await g.evaluateOnNewDocument(l=>{if(!sessionStorage.getItem('qa-planner-init')){localStorage.clear();localStorage.setItem('deutschy:lang',l);sessionStorage.setItem('qa-planner-init','1')}},lang);
 await g.goto(base+'/weekly-plan/',{waitUntil:'networkidle0'});await g.waitForSelector('#goal-0');
 const weekKey=await g.evaluate(()=>{const d=new Date(),x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()-((x.getDay()+6)%7));return x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0')});
 const empty=()=>Array.from({length:7},()=>({goal:'',minutes:0,done:false}));
 const valid=empty();valid[0]={goal:'Fixture preexisting note',minutes:25,done:false};
 const malformed=[{goal:'Fixture preexisting note',minutes:25,done:false}];
 const other={'2000-01-03':[{legacy:'Keep exact other-week data'}]};
 const save=async()=>g.evaluate(()=>[...document.querySelectorAll('main button')].find(e=>/Save week on device|احفظ الأسبوع على الجهاز/.test(e.textContent)).click());
 const read=()=>g.evaluate(()=>localStorage.getItem('deutschy:weekly-plan:v1'));
 const seed=async raw=>{await g.evaluate(raw=>localStorage.setItem('deutschy:weekly-plan:v1',raw),raw);await g.reload({waitUntil:'networkidle0'});await g.waitForSelector('#goal-0')};
 for(const raw of [JSON.stringify({...other,[weekKey]:malformed}),'[]','null','{bad','',JSON.stringify({...other,[weekKey]:null})]) {
   await seed(raw);assert(await g.$('main [role=alert]'));assert.equal(await read(),raw);
   await g.type('#goal-0','Unsaved draft');await save();assert.equal(await read(),raw);assert.equal(await g.$eval('#goal-0',e=>e.value),'Unsaved draft');
   assert.match(await g.$eval('main',e=>e.textContent),lang==='ar'?/الأصل متساب من غير تغيير/:/original is unchanged/);checks+=5;
 }
 if(width===390&&process.env.PLANNER_SCREENSHOT_DIR)await g.screenshot({path:path.join(process.env.PLANNER_SCREENSHOT_DIR,'planner159-preserved-'+lang+'.png'),fullPage:false});
 await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);checks++;
 // Valid save keeps unrelated/legacy weeks untouched,then survives reload.
 await seed(JSON.stringify({...other,[weekKey]:valid}));assert.equal(await g.$('main [role=alert]'),null);assert.equal(await g.$eval('#goal-0',e=>e.value),'Fixture preexisting note');checks+=2;
 await g.type('#goal-0',' extended');await save();let stored=JSON.parse(await read());assert.deepEqual(stored['2000-01-03'],other['2000-01-03']);assert.equal(stored[weekKey][0].goal,'Fixture preexisting note extended');checks+=2;
 await g.reload({waitUntil:'networkidle0'});await g.waitForSelector('#goal-0');assert.equal(await g.$eval('#goal-0',e=>e.value),'Fixture preexisting note extended');checks++;
 // Corruption after form load is rechecked before writing:current draft and disk data both survive.
 await g.type('#goal-0',' draft');const changed=JSON.stringify({...other,[weekKey]:malformed});await g.evaluate(raw=>localStorage.setItem('deutschy:weekly-plan:v1',raw),changed);await save();assert.equal(await read(),changed);assert.match(await g.$eval('#goal-0',e=>e.value),/ draft$/);checks+=2;
 // Storage denial also preserves draft,without a success message.
 await seed(JSON.stringify({...other,[weekKey]:valid}));await g.type('#goal-0',' draft');await g.evaluate(()=>{const original=Storage.prototype.setItem;window.__restoreSet=()=>Storage.prototype.setItem=original;Storage.prototype.setItem=function(k,v){if(k==='deutschy:weekly-plan:v1')throw new DOMException('Fixture quota','QuotaExceededError');return original.call(this,k,v)}});await save();assert.equal(JSON.parse(await read())[weekKey][0].goal,'Fixture preexisting note');assert.match(await g.$eval('#goal-0',e=>e.value),/ draft$/);await g.evaluate(()=>window.__restoreSet());checks+=2;
 // Explicit confirmed delete remains scoped,including a damaged current week;cancel makes no write.
 await seed(changed);const clear=async()=>g.evaluate(()=>[...document.querySelectorAll('main button')].find(e=>/Delete only this week|امسح الأسبوع ده بس/.test(e.textContent)).click());
 await clear();assert.equal(await read(),changed);accept=true;await clear();stored=JSON.parse(await read());assert.equal(Object.hasOwn(stored,weekKey),false);assert.deepEqual(stored['2000-01-03'],other['2000-01-03']);checks+=3;
 assert.equal(await g.evaluate(()=>localStorage.getItem('deutschy:v1')),null);assert.deepEqual(errors,[]);assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks+=3;
 variants++;await g.close();
}
console.log('PASS',variants,'AR/EN320/390 weekly-plan variants;',checks,'malformed preservation/save/reload/storage/explicit-delete/layout assertions;4 axe snapshots');
} finally {await b?.close();server.close()}
