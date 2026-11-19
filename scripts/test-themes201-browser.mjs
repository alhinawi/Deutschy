import http from 'node:http';import fs from 'node:fs/promises';import path from 'node:path';import assert from 'node:assert/strict';import puppeteer from 'puppeteer-core';import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),root=path.resolve('out');
const server=http.createServer(async(req,res)=>{const u=new URL(req.url,'http://localhost');
if(u.pathname==='/api/auth/me'){res.writeHead(200,{'Content-Type':'application/json','Cache-Control':'no-store'});return res.end('{"user":null}')}
try{let file=path.resolve(root,'.'+decodeURIComponent(u.pathname));if(file!==root&&!file.startsWith(root+path.sep))throw Error();if((await fs.stat(file)).isDirectory())file=path.join(file,'index.html');const body=await fs.readFile(file);res.writeHead(200,{'Content-Type':({'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2'})[path.extname(file)]||'application/octet-stream'});res.end(body)}catch{res.writeHead(404);res.end()}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+server.address().port;
let b,checks=0,axe=0;const errors=[];
try{
b=await puppeteer.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();p.on('pageerror',e=>errors.push(e.message));
await p.setViewport({width:390,height:844});
// 1. Pre-seed a saved theme, then verify the NEXT load applies it before paint.
await p.goto(base+'/',{waitUntil:'domcontentloaded'});
await p.evaluate(()=>localStorage.setItem('deutschy:appearance','nacht'));
await p.goto(base+'/grammar/',{waitUntil:'domcontentloaded'});
// At domcontentloaded the inline script has already run: theme must be applied pre-paint.
assert.equal(await p.evaluate(()=>document.documentElement.dataset.theme),'nacht','saved theme applied pre-paint');checks++;
const darkBg=await p.evaluate(()=>getComputedStyle(document.documentElement).backgroundColor);
assert(darkBg==='rgb(20, 22, 28)','dark background from first paint: '+darkBg);checks++;
// 2. Theme picker: 21 choices, almania applies instantly with the flag stripe, persists on reload.
await p.goto(base+'/settings/',{waitUntil:'domcontentloaded'});
await p.waitForFunction(()=>!document.querySelector('[name=appearance]')?.disabled);
assert.equal((await p.$$('[name=appearance]')).length,21,'21 theme choices');checks++;
await p.$eval('[name=appearance][value=almania]',e=>{e.scrollIntoView({block:'center'});e.click()});
await p.waitForFunction(()=>document.documentElement.dataset.theme==='almania');
assert.equal(await p.evaluate(()=>localStorage.getItem('deutschy:appearance')),'almania','choice saved in browser');checks++;
const stripe=await p.evaluate(()=>{const cs=getComputedStyle(document.body,'::before');return {h:cs.height,bg:cs.backgroundImage}});
assert.equal(stripe.h,'6px','flag stripe height');assert(stripe.bg.includes('linear-gradient'),'flag stripe gradient');checks+=2;
await p.screenshot({path:'/downloads/themes201-picker-ar.png'});
await p.reload({waitUntil:'domcontentloaded'});
assert.equal(await p.evaluate(()=>document.documentElement.dataset.theme),'almania','almania survives reload');checks++;
// 3. Home page in almania (AR) and nacht (EN) look right and do not overflow.
await p.goto(base+'/',{waitUntil:'domcontentloaded'});
await p.waitForSelector('main');
assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);checks++;
await p.screenshot({path:'/downloads/themes201-almania-home-ar.png'});
await p.evaluate(()=>localStorage.setItem('deutschy:appearance','nacht'));
await p.goto(base+'/',{waitUntil:'domcontentloaded'});
await p.waitForSelector('main');await p.click('[aria-label="EN English"]');
await p.waitForFunction(()=>document.documentElement.lang==='en');
assert.equal(await p.evaluate(()=>document.documentElement.dataset.theme),'nacht');checks++;
await p.screenshot({path:'/downloads/themes201-nacht-home-en.png'});
await p.addScriptTag({path:require.resolve('axe-core/axe.min.js')});
assert.deepEqual(await p.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id)),[]);axe++;
assert.deepEqual(errors,[],'no page errors');
console.log('PASS201 browser:',checks,'checks: pre-paint theme apply, 21-choice picker, flag stripe, reload persistence, AR/EN homes,',axe,'axe snapshot.');
}finally{await b?.close();server.close()}
