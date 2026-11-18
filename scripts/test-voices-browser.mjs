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
const routes=[{path:'/shadowing/',select:'#german-voice',button:'Listen to this segment',ar:'اسمع الجزء'},{path:'/dictation/',select:'#dict-voice',button:'Listen to the sentence',ar:'اسمع الجملة'},{path:'/sound-contrasts/',select:'#contrast-voice',button:null},{path:'/speaking/',select:'#browser-voice',button:'Listen',ar:'اسمع النموذج'}];
let variants=0,checks=0;
try{b=await p.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',args:['--no-sandbox']});
for(const lang of ['ar','en'])for(const width of [320,390])for(const route of routes){
 const g=await b.newPage(),errors=[];g.on('pageerror',e=>errors.push(e.message));await g.setViewport({width,height:900});
 await g.evaluateOnNewDocument(l=>{localStorage.clear();localStorage.setItem('deutschy:lang',l);const google={name:'Google Deutsch',voiceURI:'Google Deutsch',lang:'de-DE'},edge={name:'Microsoft Katja Online (Natural) - German (Germany)',voiceURI:'Microsoft Katja',lang:'de-DE'},edge2={name:'Microsoft Conrad',voiceURI:'Microsoft Conrad',lang:'de-DE'};window.__voiceFixture={google,edge,edge2};window.__voices=[google,{name:'Android German',voiceURI:'com.android.tts',lang:'de-DE'},{name:'Unknown German',voiceURI:'default',lang:'de-DE'}];window.__spoken=[];const target=new EventTarget();Object.defineProperty(window,'speechSynthesis',{configurable:true,value:{getVoices:()=>window.__voices,cancel:()=>{},speak:u=>{window.__spoken.push({name:u.voice?.name,uri:u.voice?.voiceURI,text:u.text});queueMicrotask(()=>u.onend?.())},addEventListener:(...a)=>target.addEventListener(...a),removeEventListener:(...a)=>target.removeEventListener(...a)}});window.__voicesChanged=()=>target.dispatchEvent(new Event('voiceschanged'));window.SpeechSynthesisUtterance=class{constructor(text){this.text=text}}},lang);
 await g.goto(base+route.path,{waitUntil:'networkidle0'});await g.waitForSelector(route.select);
 const options=()=>g.$$eval(route.select+' option',a=>a.map(e=>e.textContent));assert(!(await options()).some(s=>/Google|Android|Unknown/.test(s)));checks++;
 const clickPlay=async({stale=false}={})=>g.evaluate((label,stale)=>{const btn=label?[...document.querySelectorAll('main button')].find(e=>e.textContent===label):document.querySelector('main button[lang=de]');if(stale){btn[Object.keys(btn).find(k=>k.startsWith('__reactProps'))].onClick()}else btn.click()},route.button?(lang==='ar'?route.ar:route.button):null,stale);
 await clickPlay();assert.equal(await g.evaluate(()=>window.__spoken.length),0);checks++;
 await g.evaluate(()=>{window.__voices=[window.__voiceFixture.google,window.__voiceFixture.edge,window.__voiceFixture.edge2];window.__voicesChanged()});await g.waitForFunction(sel=>[...document.querySelector(sel).options].some(e=>e.value==='Microsoft Conrad'),{},route.select);
 assert(!(await options()).some(s=>/Google|Android/.test(s)));await clickPlay();await g.waitForFunction(()=>window.__spoken.at(-1)?.uri==='Microsoft Katja');assert.equal(await g.evaluate(()=>window.__spoken.at(-1)?.uri),'Microsoft Katja');checks+=2;
 await g.select(route.select,'Microsoft Conrad');await clickPlay();await g.waitForFunction(()=>window.__spoken.at(-1)?.uri==='Microsoft Conrad');assert.equal(await g.evaluate(()=>window.__spoken.at(-1)?.uri),'Microsoft Conrad');checks++;
 // Policy uses the current platform list even before a voiceschanged event updates the dropdown.
 await g.evaluate(()=>window.__voices=[window.__voiceFixture.google]);await clickPlay({stale:true});await new Promise(r=>setTimeout(r,100));assert.equal(await g.evaluate(()=>window.__spoken.length),2);checks++;
 await g.evaluate(()=>window.__voicesChanged());await g.waitForFunction(sel=>![...document.querySelector(sel).options].some(e=>e.value==='Microsoft Conrad'),{},route.select);assert(!(await options()).some(s=>/Google|Android/.test(s)));checks++;
 if(route.path==='/shadowing/'){
  await g.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await g.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);checks++;
  if(width===390&&process.env.VOICES_SCREENSHOT_DIR){await g.$eval(route.select,e=>e.scrollIntoView({block:'center'}));await g.screenshot({path:path.join(process.env.VOICES_SCREENSHOT_DIR,'voices164-fallback-' +lang+'.png'),fullPage:false})}
 }
 assert.equal(await g.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);assert.equal(await g.evaluate(()=>localStorage.getItem('deutschy:v1')),null);checks+=3;variants++;await g.close();
}
console.log('PASS',variants,'AR/EN320/390 direct browser-voice variants;',checks,'Google/Android/unknown exclusion,Edge selection/live removal/no-history/layout assertions;4 axe snapshots');
}finally{await b?.close();server.close()}
