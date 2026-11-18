import p from 'puppeteer-core';
import assert from 'node:assert/strict';
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),root=path.resolve('out');
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.woff2':'font/woff2'};
const server=http.createServer(async(req,res)=>{try{
 const pathname=new URL(req.url,'http://localhost').pathname;
 if(pathname.startsWith('/api/')){res.writeHead(200,{'content-type':'application/json'});res.end(JSON.stringify(pathname==='/api/health'?{tts:false}:{user:null}));return}
 let file=path.resolve(root,'.'+decodeURIComponent(pathname));if(!file.startsWith(root+path.sep))throw Error('path');if((await fs.stat(file)).isDirectory())file=path.join(file,'index.html');res.writeHead(200,{'content-type':mime[path.extname(file)]||'application/octet-stream'});res.end(await fs.readFile(file));
}catch{res.writeHead(404);res.end('Not found')}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
let browser,checks=0;
try{
 browser=await p.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',args:['--no-sandbox']});
 for(const lang of ['ar','en'])for(const width of [320,390]){
  const context=await browser.createBrowserContext(),page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.setViewport({width,height:844,isMobile:true,hasTouch:true});
  await page.evaluateOnNewDocument(l=>{
   localStorage.setItem('deutschy:lang',l);window.__voiceMode='unavailable';window.__speechCount=0;window.SpeechSynthesisUtterance=class{constructor(text){this.text=text}};
   const target=new EventTarget();Object.defineProperty(window,'speechSynthesis',{configurable:true,value:{cancel(){},getVoices:()=>[{lang:'de-DE',name:window.__voiceMode==='unavailable'?'Google Deutsch':'Microsoft Katja',voiceURI:window.__voiceMode==='unavailable'?'Google Deutsch':'Microsoft Katja'}],speak(u){window.__speechCount++;if(window.__voiceMode==='error')setTimeout(()=>u.onerror?.(),40);else setTimeout(()=>u.onend?.(),120)},addEventListener:(...a)=>target.addEventListener(...a),removeEventListener:(...a)=>target.removeEventListener(...a)}});
  },lang);
  await page.setRequestInterception(true);page.on('request',r=>r.url().startsWith('https://deutschy-sounds.pages.dev/')?r.abort():r.continue());
  const base='http://127.0.0.1:'+server.address().port;
  await page.goto(base+'/lessons/family/',{waitUntil:'networkidle0'});
  const selector='article button';await page.waitForSelector(selector);await page.$eval(selector,e=>e.scrollIntoView({block:'center'}));await page.tap(selector);
  await page.waitForSelector('[data-speech-notice]');
  const unavailable=lang==='ar'?'الصوت مش متاح':'Audio is unavailable';
  assert((await page.$eval('[data-speech-notice]',e=>e.textContent)).includes(unavailable));
  assert((await page.$eval('article [role=status]',e=>e.textContent)).includes(unavailable));
  assert.equal(await page.$eval(selector,e=>e.getAttribute('aria-busy')),'false');
  assert.equal(await page.evaluate(()=>window.__speechCount),0);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks+=5;
  await page.addScriptTag({path:require.resolve('axe-core/axe.min.js')});assert.deepEqual(await page.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);checks++;
  if(width===390)await page.screenshot({path:'/downloads/deutschy-audio-unavailable-'+lang+'.png'});
  // Dismissal, repeated taps and a language switch keep the notice usable.
  await page.$eval('[data-speech-notice] button',e=>e.click());assert.equal(await page.$('[data-speech-notice]'),null);await page.tap(selector);await page.waitForSelector('[data-speech-notice]');checks++;
  await page.evaluate(()=>{window.__voiceMode='error'});await page.tap(selector);await page.waitForFunction(()=>document.querySelector('[data-speech-notice]')?.textContent.includes(document.documentElement.lang==='ar'?'مقدرش يكمل':'could not finish'));
  assert((await page.$eval('article [role=status]',e=>e.textContent)).includes(lang==='ar'?'مقدرش يكمل':'could not finish'));checks++;
  await page.evaluate(()=>{window.__voiceMode='ok'});await page.$eval(selector,e=>e.scrollIntoView({block:'center'}));await page.tap(selector);await page.waitForFunction(()=>document.querySelector('article [role=status]')?.textContent.includes(document.documentElement.lang==='ar'?'الصوت خلص':'Audio finished'));
  assert.equal(await page.$('[data-speech-notice]'),null);checks++;
  // A caller with no local error handler gets the same shared failure notice.
  await page.goto(base+'/pronunciation/',{waitUntil:'networkidle0'});await page.waitForSelector('main button');await page.$eval('main button',e=>e.scrollIntoView({block:'center'}));await page.tap('main button');await page.waitForSelector('[data-speech-notice]');assert((await page.$eval('[data-speech-notice]',e=>e.textContent)).includes(unavailable));checks++;
  assert.deepEqual(errors,[]);checks++;await context.close();
 }
 console.log('PASS audio feedback:',checks,'assertions; AR/EN 320/390 touch variants, inline/shared unavailable, runtime error, success clear, dismissal/retry, unrelated caller, 4 axe snapshots, no overflow or page errors.');
}catch(e){for(const page of await browser?.pages()||[]){console.log(await page.evaluate(()=>({status:document.querySelector('article [role=status]')?.textContent,mode:window.__voiceMode,count:window.__speechCount})));await page.screenshot({path:'/downloads/audio-debug.png'});}throw e}finally{await browser?.close();server.close()}
