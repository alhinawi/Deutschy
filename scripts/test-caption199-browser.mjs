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
await p.evaluateOnNewDocument(()=>{Object.defineProperty(window,'localStorage',{get(){throw Error('persistent storage must not be used')}})});
async function open(route,lang){await p.goto(base+route,{waitUntil:'domcontentloaded'});await p.waitForSelector('[aria-label="EN English"]');if(lang==='en')await p.click('[aria-label="EN English"]');await p.waitForFunction(lang=>document.documentElement.lang===lang,{},lang)}
const arCaption='الصورة للسياق',enCaption='Context photo only';
for(const lang of ['ar','en']){
  await open('/lessons/family/',lang);
  await p.waitForSelector('article');
  // 1. The removed caption must appear nowhere on any vocab card.
  const bodyText=await p.evaluate(()=>document.body.innerText);
  assert(!bodyText.includes(arCaption)&&!bodyText.includes(enCaption),'caption line still rendered');checks++;
  // 2. Card content itself (word, gloss, plural) still renders.
  assert(bodyText.includes('Großvater'));checks++;
  // 3. No horizontal overflow at 390.
  assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks++;
  // Screenshot the first contextual-photo card (der Großvater area).
  const card=await p.$('#word-grossvater');
  if(card){await card.evaluate(e=>e.scrollIntoView({block:'center'}));await card.screenshot({path:'/downloads/caption199-card-'+lang+'.png'});}else{await p.screenshot({path:'/downloads/caption199-card-'+lang+'.png'})}
  checks++;
  // 4. Search overlay opens, input focused, and has NO visible outline.
  await p.keyboard.press('Escape');
  const opener=await p.$('header button[aria-label*="بحث"], header button[aria-label*="Search"], header button[aria-label*="earch"]');
  assert(opener,'search opener found');checks++;
  await opener.click();
  await p.waitForSelector('[data-search-input]');
  const outline=await p.$eval('[data-search-input]',el=>{const cs=getComputedStyle(el);return {style:cs.outlineStyle,width:cs.outlineWidth,focused:document.activeElement===el}});
  assert.equal(outline.style,'none','search input shows no outline: '+JSON.stringify(outline));
  assert.equal(outline.focused,true,'search input still receives focus');checks+=2;
  await p.screenshot({path:'/downloads/caption199-search-'+lang+'.png'});
  // 5. Buttons elsewhere keep their visible focus ring (global rule intact).
  await p.keyboard.press('Escape');
  const btn=await p.$('header a[aria-label="EN English"], header button[aria-label="EN English"]');
  if(btn){await btn.evaluate(e=>e.focus());const ring=await btn.evaluate(e=>getComputedStyle(e).outlineStyle);assert.equal(ring,'solid','other controls keep focus ring');checks++;}
  await p.addScriptTag({path:require.resolve('axe-core/axe.min.js')});
  const viol=await p.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id));
  assert.deepEqual(viol,[],'axe clean');axe++;
}
assert.deepEqual(errors,[],'no page errors');
console.log('PASS199 browser:',checks,'checks across AR/EN at 390px,',axe,'axe snapshots. Caption removed, cards intact, search input focus has no outline, other controls keep rings.');
}finally{await b?.close();server.close()}
