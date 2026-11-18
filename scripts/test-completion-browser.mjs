import p from 'puppeteer-core';import assert from 'node:assert/strict';import http from 'node:http';import fs from 'node:fs/promises';import path from 'node:path';import{createRequire}from'node:module';import{loadTs}from'./content-loader.mjs';
const require=createRequire(import.meta.url),root=path.resolve('out'),{checkpointQuestions:banks}=loadTs(path.resolve('src/lib/checkpoint-questions.ts'));
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
const server=http.createServer(async(req,res)=>{try{let f=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(f!==root&&!f.startsWith(root+path.sep))throw Error('path');if((await fs.stat(f)).isDirectory())f=path.join(f,'index.html');res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'application/octet-stream'});res.end(await fs.readFile(f))}catch{res.writeHead(404);res.end('Not found')}});await new Promise(r=>server.listen(0,'127.0.0.1',r));let b,checks=0;
const key='deutschy:v1';
const fixture={xp:37,streak:2,best:3,lastDay:'2026-11-17',name:'Test',theme:'papier',seen:{'g:artikel:0':{ok:2,bad:1}},scores:[{game:'old',score:4,at:5,name:'Test'}],daily:{'2026-11-17':37},goal:50,srs:{apfel:{b:2,due:1900000000000}},challenge:{old:1},exams:{A1:45},pfad:{pron:false,other:true}};
try{
 b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
 for(const lang of ['ar','en'])for(const width of [320,390]){
  const context=await b.createBrowserContext(),g=await context.newPage(),errors=[];g.on('pageerror',e=>errors.push(e.message));await g.setViewport({width,height:840});await g.evaluateOnNewDocument((l,v,k)=>{localStorage.setItem('deutschy:lang',l);if(!localStorage.getItem(k))localStorage.setItem(k,JSON.stringify(v))},lang,fixture,key);
  const base='http://127.0.0.1:'+server.address().port;
  const goto=async route=>{await g.goto(base+route,{waitUntil:'networkidle0'})};
  const stored=()=>g.evaluate(k=>JSON.parse(localStorage.getItem(k)),key);
  const clickText=async(text,scope='#lesson-checkpoint')=>{await g.$$eval(scope+' button',(bs,txt)=>{const x=bs.find(e=>e.textContent.trim()===txt);if(!x)throw Error('button '+txt);x.click()},text)};
  async function round(id,fail=false){for(let i=0;i<8;i++){
   await clickText(banks[id][i].choices[fail&&i===0?1:0]);
   // Double Next events must not skip questions or double-credit completion.
   await g.$$eval('#lesson-checkpoint button',(bs,txt)=>{const x=bs.find(e=>e.textContent.trim()===txt);x.click();x.click()},i===7?(lang==='ar'?'النتيجة':'Result'):(lang==='ar'?'التالي':'Next'));
   if(i<7){assert((await g.$eval('#lesson-checkpoint [aria-atomic=true]',e=>e.textContent)).includes(String(i+2)));checks++;}
  }}
  await goto('/lernpfad/');assert.equal(await g.$$eval('input[type=checkbox]',e=>e.length),0);checks++;
  for(const [id,route]of [['pron','/pronunciation/'],['learn','/learn/']]){
   await goto(route);const before=JSON.stringify(await stored());await g.$eval('#lesson-checkpoint',e=>e.scrollIntoView());assert.equal(JSON.stringify(await stored()),before);checks++;
   await round(id,true);assert.equal((await stored()).seen[`checkpoint:${id}:passed`],undefined);assert.equal((await stored()).xp,id==='pron'?37:57);checks+=2;
   await clickText(lang==='ar'?'حاول تاني':'Try again');
   // Partial correct round, then reload, must not count as completion.
   await clickText(banks[id][0].choices[0]);await clickText(lang==='ar'?'التالي':'Next');await g.reload({waitUntil:'networkidle0'});assert.equal((await stored()).seen[`checkpoint:${id}:passed`],undefined);checks++;
   await round(id);let state=await stored();assert.equal(state.xp,id==='pron'?57:77);assert.equal(state.seen[`checkpoint:${id}:passed`].ok,1);assert.equal(state.seen['g:artikel:0'].ok,2);assert.deepEqual(state.srs,fixture.srs);assert.deepEqual(state.exams,fixture.exams);assert.deepEqual(state.scores,fixture.scores);assert.deepEqual(state.pfad,fixture.pfad);checks+=7;
   await g.reload({waitUntil:'networkidle0'});await round(id);assert.equal((await stored()).xp,state.xp);assert.equal((await stored()).seen[`checkpoint:${id}:passed`].ok,1);checks+=2;
  }
  await goto('/lernpfad/');assert.equal(await g.$$eval('input[type=checkbox]',e=>e.length),0);assert((await g.$eval('ol',e=>e.textContent)).includes('1 / 1'));checks+=2;
  // Keep legacy manual completion distinctly labeled without rewriting it or granting XP.
  await g.evaluate(k=>{const s=JSON.parse(localStorage.getItem(k));delete s.seen['checkpoint:pron:passed'];s.pfad.pron=true;localStorage.setItem(k,JSON.stringify(s))},key);await g.reload({waitUntil:'networkidle0'});assert(await g.$eval('ol',(e,l)=>e.textContent.includes(l==='ar'?'سجل قديم محفوظ':'Prior completion kept'),lang));checks++;
  await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);checks++;
  if(width===390)await g.screenshot({path:'/downloads/completion171-path-'+lang+'.png',fullPage:true});
  await goto('/learn/');await round('learn');assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks++;
  await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);checks++;
  if(width===390){await g.$eval('#lesson-checkpoint',e=>e.scrollIntoView());await g.screenshot({path:'/downloads/completion171-review-'+lang+'.png'})}
  // A failed write preserves old bytes and can be retried from the earned result.
  await g.evaluate(k=>localStorage.setItem(k,JSON.stringify({xp:0,seen:{},pfad:{pron:false}})),key);
  await goto('/learn/');const beforeDenied=await g.evaluate(k=>localStorage.getItem(k),key);
  await g.evaluate(k=>{const original=Storage.prototype.setItem;window.restoreStorage=()=>{Storage.prototype.setItem=original};Storage.prototype.setItem=function(a,v){if(a===k)throw new DOMException('Quota','QuotaExceededError');return original.call(this,a,v)}},key);
  await round('learn');assert.equal(await g.evaluate(k=>localStorage.getItem(k),key),beforeDenied);assert(await g.$('#lesson-checkpoint [role=alert]'));checks+=2;
  await g.evaluate(()=>window.restoreStorage());await clickText(lang==='ar'?'حاول تحفظ النتيجة تاني':'Retry saving this result');assert.equal((await stored()).xp,20);checks++;
  await g.evaluate(k=>localStorage.setItem(k,'{broken'),key);await goto('/learn/');await round('learn');assert.equal(await g.evaluate(k=>localStorage.getItem(k),key),'{broken');checks++;
  assert.deepEqual(errors,[]);checks++;await context.close();
 }
 console.log('PASS4AR/EN320/390automatic-completion variants;',checks,'assertions;failed/partial/reload/repeat/doubleNext,legacy/currentdata retained,8axe snapshots');
}finally{await b?.close();server.close()}
