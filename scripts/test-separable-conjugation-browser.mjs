import p from 'puppeteer-core';
import assert from 'node:assert/strict';
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {loadTs} from './content-loader.mjs';
const require=createRequire(import.meta.url),root=path.resolve('out');
const {conjugationVerbs:verbs,conjugationTenses:tenses,conjugationAnswers:answers}=loadTs(path.resolve('src/lib/conjugation.ts'));
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
const server=http.createServer(async(req,res)=>{try{let f=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(f!==root&&!f.startsWith(root+path.sep))throw Error('path');if((await fs.stat(f)).isDirectory())f=path.join(f,'index.html');res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'application/octet-stream'});res.end(await fs.readFile(f))}catch{res.writeHead(404);res.end('Not found')}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));let b,checks=0;
try{
 b=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
 for(const lang of ['ar','en'])for(const width of [320,390]){
  const g=await b.newPage(),errors=[];g.on('pageerror',e=>errors.push(e.message));await g.setViewport({width,height:840});
  await g.evaluateOnNewDocument(l=>{localStorage.clear();localStorage.setItem('deutschy:lang',l)},lang);
  await g.goto('http://127.0.0.1:'+server.address().port+'/conjugation/',{waitUntil:'networkidle0'});
  assert.equal(await g.$$eval('#conj-verb option',e=>e.length),16);checks++;
  for(let vi=12;vi<16;vi++)for(let ti=0;ti<tenses.length;ti++){
   const person=ti%6;await g.select('#conj-verb',String(vi));await g.select('#conj-tense',tenses[ti]);await g.select('#conj-person',String(person));
   assert.equal(await g.$eval('#conj-answer',e=>e.value),'');checks++;
   const list=answers(verbs[vi],tenses[ti],person);await g.type('#conj-answer',list.at(-1));
   await g.$eval('#conj-answer',e=>e.form.requestSubmit());
   assert(await g.$eval('form + [role=status]',(e,l)=>e.textContent.includes(l==='ar'?'صح.':'Correct.'),lang));checks++;
  }
  for(const [vi,ti,wrong]of [[12,'Präsens','einkaufe'],[13,'Präsens','anrufe'],[14,'Perfekt','habe gebracht mit'],[15,'Futur I','werde räumen auf']]){
   await g.select('#conj-verb',String(vi));await g.select('#conj-tense',ti);await g.select('#conj-person','0');await g.type('#conj-answer',wrong);await g.$eval('#conj-answer',e=>e.form.requestSubmit());
   assert(await g.$eval('form + [role=status]',(e,l)=>e.textContent.includes(l==='ar'?'راجع الصيغة':'Check the form'),lang));checks++;
  }
  assert(await g.$('#separable-conj-title'));checks++;
  for(let vi=12;vi<16;vi++)for(const tense of tenses){
   await g.select('#conj-verb',String(vi));await g.select('#conj-tense',tense);
   const buttons=await g.$$('button');for(const x of buttons)if((await x.evaluate(e=>e.textContent)).trim()===(lang==='ar'?'جدول المراجعة':'Reference table'))await x.click();
   const rows=await g.$$eval('#conj-reference tbody td',es=>es.map(e=>e.textContent));assert.deepEqual(rows,Array.from({length:6},(_,p)=>answers(verbs[vi],tense,p).join(' / ')));checks+=6;
   assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks++;
  }
  await g.select('#conj-verb','2');assert.equal(await g.$('#separable-conj-title'),null);checks++;
  await g.select('#conj-verb','14');await g.select('#conj-tense','Konjunktiv II Gegenwart');await g.select('#conj-person','1');await g.type('#conj-answer','brächtest mit');await g.$eval('#conj-answer',e=>e.form.requestSubmit());
  for(const x of await g.$$('button'))if((await x.evaluate(e=>e.textContent)).trim()===(lang==='ar'?'جدول المراجعة':'Reference table'))await x.click();
  assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);checks+=2;
  await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);checks++;
  if(width===390){await g.evaluate(()=>scrollTo(0,0));await g.screenshot({path:'/downloads/separable169-'+lang+'.png',fullPage:true});await g.$eval('#conj-full-title',e=>e.scrollIntoView());await g.screenshot({path:'/downloads/separable169-detail-'+lang+'.png'})}
  assert.equal(await g.evaluate(()=>localStorage.getItem('deutschy:v1')),null);checks++;await g.close();
 }
 console.log('PASS4AR/EN320/390 conjugation variants;',checks,'assertions,176 correct-form UI submissions,16 wrong-order cases,1056 reference rows,4axe snapshots;no saved progress');
}finally{await b?.close();server.close()}
