import p from 'puppeteer-core';import assert from 'node:assert/strict';import http from 'node:http';import fs from 'node:fs/promises';import path from 'node:path';import{createRequire}from'node:module';import{loadTs}from'./content-loader.mjs';
const require=createRequire(import.meta.url),root=path.resolve('out'),{everydayVerbs:verbs}=loadTs(path.resolve('src/lib/verbs-everyday.ts'));
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
const server=http.createServer(async(req,res)=>{try{let f=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(f!==root&&!f.startsWith(root+path.sep))throw Error('path');if((await fs.stat(f)).isDirectory())f=path.join(f,'index.html');res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'application/octet-stream'});res.end(await fs.readFile(f))}catch{res.writeHead(404);res.end('Not found')}});await new Promise(r=>server.listen(0,'127.0.0.1',r));let b,checks=0;
try{
 b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
 for(const lang of ['ar','en'])for(const width of [320,390]){
  const g=await b.newPage(),errors=[];g.on('pageerror',e=>errors.push(e.message));await g.setViewport({width,height:840});await g.evaluateOnNewDocument(l=>{localStorage.clear();localStorage.setItem('deutschy:lang',l)},lang);
  for(const id of ['bezahlen','sterben','duschen','lesen','schneiden','einsteigen','spielen','fliegen']){
   await g.goto('http://127.0.0.1:'+server.address().port+'/verbs/'+id+'/',{waitUntil:'networkidle0'});
   assert.equal(await g.$$eval('article header img',e=>e.length),['spielen','fliegen'].includes(id)?1:0);checks++;
   if(!['spielen','fliegen'].includes(id)){assert(await g.$('article header svg'));checks++;}
   assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks++;
   if(id==='bezahlen'){
    await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);checks++;
    if(width===390)await g.screenshot({path:'/downloads/photo170-bezahlen-'+lang+'.png',fullPage:true});
   }
  }
  await g.goto('http://127.0.0.1:'+server.address().port+'/grammar/aussprache/',{waitUntil:'networkidle0'});assert.equal(await g.$$eval('article header img',e=>e.length),0);assert(await g.$('article header svg'));checks+=2;
  await g.goto('http://127.0.0.1:'+server.address().port+'/grammar/',{waitUntil:'networkidle0'});assert.equal(await g.$$eval('a[href="/grammar/aussprache/"] img',e=>e.length),0);assert.equal(await g.$$eval('a[href="/grammar/zahlen-uhrzeit/"] img',e=>e.length),1);checks+=2;
  await g.goto('http://127.0.0.1:'+server.address().port+'/lessons/',{waitUntil:'networkidle0'});assert.equal(await g.$$eval('a[href^="/lessons/"] img',e=>e.length),199);checks++;
  await g.goto('http://127.0.0.1:'+server.address().port+'/verbs/',{waitUntil:'networkidle0'});const images=await g.$$eval('a[href^="/verbs/"] img',es=>es.map(e=>e.closest('a').getAttribute('href')).sort());assert.deepEqual(images,['/verbs/fliegen/','/verbs/spielen/']);checks++;
  const tiles=await g.$$eval('a[href^="/verbs/"] svg',es=>es.length);assert.equal(tiles,153);checks++;
  if(width===390)await g.screenshot({path:'/downloads/photo170-catalogue-'+lang+'.png'});
  assert.deepEqual(errors,[]);checks++;await g.close();
 }
 console.log('PASS4AR/EN320/390photo-policy variants;',checks,'assertions,32verb details,8grammar screens,4lesson cover inventories,4axe snapshots');
}finally{await b?.close();server.close()}
