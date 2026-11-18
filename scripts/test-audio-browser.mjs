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
let identity=101,provider=true,requests=[];
const server=http.createServer(async(req,res)=>{
 try {
  if(req.url==='/api/health'){res.writeHead(200,{'content-type':'application/json'});res.end(JSON.stringify({tts:provider}));return}
  if(req.url==='/api/auth/me'){res.writeHead(200,{'content-type':'application/json'});res.end(JSON.stringify({user:identity?{id:identity,name:'Fixture',email:'fixture@example.invalid',picture:'',isAdmin:false}:null}));return}
  if(req.url.startsWith('/api/tts?')){requests.push(req.url);res.writeHead(200,{'content-type':'audio/mpeg'});res.end('fixture');return}
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
let b;let checks=0,variants=0;
try{b=await p.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',args:['--no-sandbox']});
const routes=[['/shadowing/','Listen to this segment','اسمع الجزء'],['/dictation/','Listen to the sentence','اسمع الجملة'],['/sound-contrasts/',null,null],['/speaking/','Listen','اسمع النموذج']];
for(const lang of ['ar','en'])for(const width of [320,390])for(const[route,en,ar]of routes){
 const page=await b.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.setViewport({width,height:900});
 await page.evaluateOnNewDocument(lang=>{localStorage.clear();localStorage.setItem('deutschy:lang',lang);window.__audio=[];window.__spoken=[];window.Audio=class{constructor(src){this.src=src}async play(){window.__audio.push({src:this.src,rate:this.playbackRate});setTimeout(()=>this.onended?.(),20)}pause(){}};const target=new EventTarget();Object.defineProperty(window,'speechSynthesis',{configurable:true,value:{cancel(){},getVoices:()=>[{name:'Google Deutsch',voiceURI:'Google Deutsch',lang:'de-DE'}],speak:u=>window.__spoken.push(u),addEventListener:(...args)=>target.addEventListener(...args),removeEventListener:(...args)=>target.removeEventListener(...args)}})},lang);
 await page.goto(base+route,{waitUntil:'networkidle0'});if(errors.length)console.log(route,errors);await page.waitForSelector('main button',{timeout:5000});const before=requests.length;
 await page.evaluate(label=>{const button=label?[...document.querySelectorAll('main button')].find(b=>b.textContent===label):document.querySelector('main button[lang=de]');if(!button)throw Error('missing play:'+label+':'+location.pathname+':'+[...document.querySelectorAll('main button')].map(b=>b.textContent).join('|'));if(button.disabled)throw Error('provider must work without Edge');button.click()},lang==='ar'?ar:en);
 await page.waitForFunction(()=>window.__audio.length===1);assert.equal(requests.length,before+1);assert.equal(await page.evaluate(()=>window.__spoken.length),0);assert(new URL(requests.at(-1),base).searchParams.get('voice')==='varied');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);checks+=5;variants++;await page.close();
}
for(const lang of ['ar','en'])for(const width of [320,390]){
 const context=await b.createBrowserContext(),page=await context.newPage();await page.setViewport({width,height:900});await page.evaluateOnNewDocument(l=>{if(!localStorage.getItem('deutschy:testsettings')){localStorage.clear();localStorage.setItem('deutschy:testsettings','1');localStorage.setItem('deutschy:lang',l)}},lang);await page.goto(base+'/settings/',{waitUntil:'networkidle0'});await page.waitForFunction(()=>!document.querySelector('#site-voice').disabled);assert.equal(await page.$eval('#site-voice',e=>e.options.length),22);assert.equal(await page.$eval('#site-voice',e=>e.value),'varied');const fixed=await page.$eval('#site-voice',e=>e.options[1].value);await page.select('#site-voice',fixed);await page.waitForFunction(v=>localStorage.getItem('deutschy:voice:user:101')===v,{},fixed);await page.reload({waitUntil:'networkidle0'});await page.waitForFunction(v=>document.querySelector('#site-voice').value===v,{},fixed);identity=202;await page.reload({waitUntil:'networkidle0'});await page.waitForFunction(()=>!document.querySelector('#site-voice').disabled);assert.equal(await page.$eval('#site-voice',e=>e.value),'varied');identity=101;
 await page.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await page.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 if(width===390&&process.env.AUDIO_SCREENSHOT_DIR)await page.screenshot({path:path.join(process.env.AUDIO_SCREENSHOT_DIR,'audio164-settings-'+lang+'.png'),fullPage:true});checks+=7;await context.close();
}
console.log('PASS',variants,'provider-first AR/EN320/390 variants;',checks,'provider priority,no-Edge playback,voice preference forwarding,22 settings choices,per-account isolation,reload persistence,4axe,layout assertions');
}finally{await b?.close();server.close()}
