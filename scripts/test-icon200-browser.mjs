import http from 'node:http';import fs from 'node:fs/promises';import path from 'node:path';import assert from 'node:assert/strict';import puppeteer from 'puppeteer-core';import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),root=path.resolve('out');
const server=http.createServer(async(req,res)=>{const u=new URL(req.url,'http://localhost');if(u.pathname==='/api/auth/me'){res.writeHead(200,{'Content-Type':'application/json','Cache-Control':'no-store'});return res.end('{"user":null}')}
try{let file=path.resolve(root,'.'+decodeURIComponent(u.pathname));if(file!==root&&!file.startsWith(root+path.sep))throw Error();if((await fs.stat(file)).isDirectory())file=path.join(file,'index.html');const body=await fs.readFile(file);res.writeHead(200,{'Content-Type':({'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2'})[path.extname(file)]||'application/octet-stream'});res.end(body)}catch{res.writeHead(404);res.end()}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+server.address().port;
let b,checks=0,axe=0;const errors=[];
try{
b=await puppeteer.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();p.on('pageerror',e=>errors.push(e.message));
await p.setViewport({width:390,height:844});
await p.evaluateOnNewDocument(()=>{window.Audio=class{play(){return Promise.reject(new Error('fixture: no recording'))}pause(){}};Object.defineProperty(window,'speechSynthesis',{configurable:true,value:{getVoices:()=>[],cancel(){},speak(u){setTimeout(()=>u.onend?.(),30)},addEventListener(){},removeEventListener(){}}});Object.defineProperty(window,'localStorage',{get(){throw Error('persistent storage must not be used')}})});
async function open(route,lang){await p.goto(base+route,{waitUntil:'domcontentloaded'});await p.waitForSelector('[aria-label="EN English"]');if(lang==='en')await p.click('[aria-label="EN English"]');await p.waitForFunction(lang=>document.documentElement.lang===lang,{},lang)}
for(const lang of ['ar','en']){
  // Sentence library: icon-only listen button with accessible label.
  await open('/sentences/',lang);
  await p.waitForSelector('[data-sentence-id]');
  const info=await p.$eval('[data-sentence-id] button:first-child',el=>{const svg=el.querySelector('svg');return {label:el.getAttribute('aria-label'),hasSvg:!!svg,text:el.textContent.trim(),h:el.getBoundingClientRect().height}});
  assert(info.hasSvg,'speaker icon rendered');
  assert(info.label&&info.label.length>3,'accessible label present: '+info.label);
  assert(!/اسمع|Listen/.test(info.text),'no visible اسمع/Listen text: '+info.text);
  checks+=3;
  const card=await p.$('[data-sentence-id]');
  await card.evaluate(e=>e.scrollIntoView({block:'center'}));
  await card.screenshot({path:'/downloads/icon200-sentence-'+lang+'.png'});
  assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks++;
  // Reading page: both listen buttons icon-only with labels.
  await open('/reading/',lang);
  const first=await p.$('main a[href^="/reading/"]');
  if(first){const href=await first.evaluate(e=>e.getAttribute('href'));await open(href,lang);
    const btns=await p.$$eval('main button svg',svgs=>svgs.map(s=>{const b=s.closest('button');return {label:b.getAttribute('aria-label'),text:b.textContent.trim()}}).filter(x=>x.label&&/اسمع|Listen/.test(x.label)));
    for(const x of btns){assert(!/اسمع|Listen/.test(x.text),'reading listen button icon-only: '+x.text)}checks++;
  }
  await p.addScriptTag({path:require.resolve('axe-core/axe.min.js')});
  assert.deepEqual(await p.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);axe++;
}
// GameRunner quiz prompt: disclaimer sentence gone.
await open('/games/', 'ar');
const gt=await p.evaluate(()=>document.body.innerText);
assert(!gt.includes('الصورة للسياق'));checks++;
assert.deepEqual(errors,[],'no page errors');
console.log('PASS200 browser:',checks,'checks AR/EN 390px,',axe,'axe snapshots. Listen buttons icon-only with localized labels; quiz disclaimer removed.');
}finally{await b?.close();server.close()}
