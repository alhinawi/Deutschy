import p from 'puppeteer-core';import assert from 'node:assert/strict';import http from 'node:http';import fs from 'node:fs/promises';import path from 'node:path';import{createRequire}from'node:module';
const require=createRequire(import.meta.url),root=path.resolve('out');let checks=0,axes=0;
const {words}=JSON.parse(await fs.readFile('data/vocab.json','utf8'));const selected=words.filter(w=>['pflaster','adventskranz','spielplatz'].includes(w.id));
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
const server=http.createServer(async(req,res)=>{try{let f=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(f!==root&&!f.startsWith(root+path.sep))throw Error('path');if((await fs.stat(f)).isDirectory())f=path.join(f,'index.html');res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'application/octet-stream'});res.end(await fs.readFile(f))}catch{res.writeHead(404);res.end('Not found')}});await new Promise(r=>server.listen(0,'127.0.0.1',r));let b;
try{b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
for(const lang of ['ar','en'])for(const width of [320,390]){
 const context=await b.createBrowserContext(),g=await context.newPage(),errors=[];g.on('pageerror',e=>errors.push(e.message));await g.setViewport({width,height:840});await g.evaluateOnNewDocument(l=>localStorage.setItem('deutschy:lang',l),lang);const base='http://127.0.0.1:'+server.address().port;
 for(const w of selected){
  await g.goto(base+'/lessons/'+w.topic+'/',{waitUntil:'networkidle0'});const sel=`article img[src="/img/${w.id}.jpg"]`;await g.waitForSelector(sel);await g.$eval(sel,e=>e.closest('article').scrollIntoView({block:'center'}));await g.waitForFunction(s=>{const e=document.querySelector(s);return e?.complete&&e.naturalWidth>0},{},sel);
  assert.equal(await g.$eval(sel,e=>e.getAttribute('alt')),`${w.art} ${w.de}`);checks++;
  assert.equal(await g.$eval(sel,e=>e.closest('article').querySelector('h2').textContent),`${w.art} ${w.de}`);checks++;
  assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks++;
  await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);axes++;
  if(width===390)await g.screenshot({path:`/downloads/noun173-${w.id}-${lang}.png`});
 }
 await g.goto(base+'/credits/',{waitUntil:'networkidle0'});await g.waitForSelector('#credit-search');const before=await g.evaluate(()=>localStorage.getItem('deutschy:v1'));
 for(const w of selected){await g.$eval('#credit-search',(e,v)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(e,v);e.dispatchEvent(new Event('input',{bubbles:true}))},w.de);await g.waitForFunction(n=>document.querySelectorAll('tbody tr').length===1&&document.querySelector('tbody th')?.textContent.includes(n),{},w.de);
  assert.deepEqual(await g.$$eval('tbody td a',es=>es.map(e=>e.href)),[w.photo.commons,`https://creativecommons.org/licenses/by/${w.photo.license.split(' ').at(-1)}/`]);checks++;
  assert((await g.$eval('tbody',e=>e.textContent)).includes(w.photo.author));checks++;
 }
 assert.equal(await g.evaluate(()=>localStorage.getItem('deutschy:v1')),before);checks++;assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks++;
 await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);axes++;
 if(width===390)await g.screenshot({path:`/downloads/noun173-credits-${lang}.png`});assert.deepEqual(errors,[]);checks++;await context.close();
}console.log(`PASS noun photos: ${checks} browser assertions,4 AR/EN320/390 variants,12 lesson image checks,12 photo/license credit pairs,${axes} axe snapshots;no progress mutation`);
}finally{await b?.close();server.close()}
