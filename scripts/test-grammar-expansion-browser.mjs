import p from 'puppeteer-core';import assert from 'node:assert/strict';import http from 'node:http';import fs from 'node:fs/promises';import path from 'node:path';import{createRequire}from'node:module';import{loadTs}from'./content-loader.mjs';
const require=createRequire(import.meta.url),root=path.resolve('out'),{expansionExercises:banks}=loadTs(path.resolve('src/lib/exercises-expansion.ts'));
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
const server=http.createServer(async(req,res)=>{try{let f=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(f!==root&&!f.startsWith(root+path.sep))throw Error('path');if((await fs.stat(f)).isDirectory())f=path.join(f,'index.html');res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'application/octet-stream'});res.end(await fs.readFile(f))}catch{res.writeHead(404);res.end('Not found')}});await new Promise(r=>server.listen(0,'127.0.0.1',r));let b,checks=0;
try{
 b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
 for(const topic of Object.keys(banks))for(const lang of ['ar','en'])for(const width of [320,390]){
  const g=await b.newPage(),errors=[];g.on('pageerror',e=>errors.push(e.message));await g.setViewport({width,height:840});await g.evaluateOnNewDocument(l=>{localStorage.clear();localStorage.setItem('deutschy:lang',l)},lang);
  await g.goto('http://127.0.0.1:'+server.address().port+'/grammar/'+topic+'/',{waitUntil:'networkidle0'});
  assert.equal(await g.$$eval('article > section ol li',e=>e.length),topic==='plusquamperfekt'?5:6);checks++;
  assert.equal(await g.$$eval('section[aria-label] a[target=_blank]',e=>e.length),3);checks++;
  await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);checks++;
  if(width===390){await g.screenshot({path:'/downloads/grammar167-'+topic+'-'+lang+'.png'});await g.$eval('article > section ol',e=>e.scrollIntoView());await g.screenshot({path:'/downloads/grammar167-rules-'+topic+'-'+lang+'.png'})}
  for(let i=0;i<8;i++){
   assert.equal(await g.$eval('section:has(fieldset) > p[lang=de]',e=>e.textContent),banks[topic][i][0]);checks++;
   const right=banks[topic][i][1];const options=await g.$$('section:has(fieldset) button[lang=de]');assert.equal(options.length,3);checks++;
   for(const option of options)if(await option.evaluate((e,x)=>e.textContent===x,right))await option.click();
   assert.equal(await g.$$eval('section:has(fieldset) button[lang=de]:disabled',e=>e.length),3);checks++;
   assert(await g.$eval('section:has(fieldset) [role=status]',(e,l)=>e.textContent.startsWith(l==='ar'?'صح.':'Correct.'),lang));checks++;
   const next=await g.$('section:has(fieldset) [role=status] + button');await next.click();
  }
  assert(await g.$eval('section:has(fieldset)',(e,l)=>e.textContent.includes(l==='ar'?'نتيجتك 8 من 8':'Your score: 8 of 8'),lang));checks++;
  assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);checks+=2;
  await g.goto('http://127.0.0.1:'+server.address().port+'/grammar/'+topic+'/sheet/',{waitUntil:'networkidle0'});assert(await g.$('h1'));assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks+=2;
  if(width===390)await g.screenshot({path:'/downloads/grammar167-sheet-'+topic+'-'+lang+'.png'});await g.close();
 }
 console.log('PASS8AR/EN320/390 topic variants;',checks,'assertions,64correct question submissions,8axe snapshots,8cheat-sheet checks');
}finally{await b?.close();server.close()}
