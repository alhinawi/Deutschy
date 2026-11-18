import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import {loadTs} from './content-loader.mjs';
const writingModel=loadTs(path.resolve('src/lib/writing.ts')).writingTasks.find(t=>t.id==='brieffreund').model;
const require=createRequire(import.meta.url),root=path.resolve('out'),records=new Map();
let mode='ok',puts=0;
const record=id=>{if(!records.has(id))records.set(id,{revision:1,values:{'deutschy:lang':'en','deutschy:appearance':'papier','deutschy:w:brieffreund':'Existing server draft '+id,'deutschy:v1':JSON.stringify({xp:73,streak:2,best:4,lastDay:'2026-11-17',name:'Fixture',seen:{'g:artikel-genus:0':{ok:1,bad:0}}})}});return records.get(id)};
const json=(res,data,status=200)=>{res.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end(JSON.stringify(data))};
const server=http.createServer(async(req,res)=>{
 const url=new URL(req.url,'http://localhost'),id=Number(req.headers['x-fixture-user']||0);
 if(url.pathname==='/api/auth/me'){if(mode==='auth-fail')return json(res,{error:'offline'},503);return json(res,{user:id?{id,name:'Fixture',email:'fixture@example.invalid',picture:''}:null})}
 if(url.pathname==='/api/me/state'){
  if(!id)return json(res,{error:'unauthorized'},401);const r=record(id);
  if(req.method==='GET'){if(mode==='load-fail')return json(res,{error:'offline'},503);return json(res,{accountId:id,...r})}
  let body='';for await(const chunk of req)body+=chunk;const input=JSON.parse(body);puts++;
  if(mode==='fail')return json(res,{error:'offline'},503);
  if(mode==='hold')await new Promise(resolve=>setTimeout(resolve,1800));
  if(mode==='conflict'||input.revision!==r.revision)return json(res,{error:'conflict'},409);
  assert.equal(input.accountId,id);r.values=input.values;r.revision++;return json(res,{ok:true,revision:r.revision});
 }
 try{const pathname=decodeURIComponent(url.pathname);let file=path.resolve(root,'.'+pathname);if(!file.startsWith(root+path.sep)&&file!==root)throw Error();if((await fs.stat(file)).isDirectory())file=path.join(file,'index.html');const content=await fs.readFile(file);res.writeHead(200,{'Content-Type':({'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.woff2':'font/woff2'})[path.extname(file)]||'application/octet-stream'});res.end(content)}catch{res.writeHead(404);res.end('Not found')}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base='http://127.0.0.1:'+server.address().port;
let browser,checks=0,axeChecks=0;const errors=[];
async function page(id=0){const p=await browser.newPage();p.on('pageerror',e=>errors.push(e.message));p.on('dialog',d=>d.accept());await p.setViewport({width:Number(process.env.ACCOUNT_WIDTH||390),height:844});await p.setExtraHTTPHeaders({'x-fixture-user':String(id)});await p.evaluateOnNewDocument(()=>{
 window.__storageAttempts=[];for(const name of ['localStorage','sessionStorage','indexedDB'])Object.defineProperty(window,name,{configurable:true,get(){window.__storageAttempts.push(name);throw Error('Persistent storage blocked by fixture')}});
 });return p}
const ready=p=>p.waitForSelector('[data-account-save]');
const saved=p=>p.waitForFunction(()=>document.querySelector('[data-account-save]')?.textContent.match(/Saved to your account|اتحفظ في حسابك/));
const write=(p,value)=>p.$eval('#writing-answer',(e,v)=>{Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value').set.call(e,v);e.dispatchEvent(new Event('input',{bubbles:true}))},value);
async function inspect(p,name){assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(await p.evaluate(()=>window.__storageAttempts),[]);checks+=2;await p.addScriptTag({path:require.resolve('axe-core/axe.min.js')});const violations=await p.evaluate(async()=>(await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations.map(v=>v.id));assert.deepEqual(violations,[],name);axeChecks++;if(name&&Number(process.env.ACCOUNT_WIDTH||390)===390)await p.screenshot({path:'/downloads/account186-'+name+'.png',fullPage:false})}
try{
 browser=await puppeteer.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',args:['--no-sandbox']});
 const p=await page(1);await p.goto(base+'/writing/#brieffreund',{waitUntil:'networkidle0'});await ready(p);await p.waitForFunction(()=>document.querySelector('#writing-answer')?.value==='Existing server draft 1');assert.equal(await p.evaluate(()=>document.documentElement.lang),'en');checks+=2;
 await saved(p);mode='hold';await write(p,'Draft waits for server acknowledgement');await p.waitForFunction(()=>document.querySelector('#writing-draft-status')?.textContent.includes('Saving'));assert((await p.$eval('[data-account-save]',e=>e.textContent)).includes('Saving'));checks++;await saved(p);mode='ok';await inspect(p,'writing-en');
 await p.reload({waitUntil:'networkidle0'});await p.waitForFunction(()=>document.querySelector('#writing-answer')?.value==='Draft waits for server acknowledgement');checks++;
 await write(p,writingModel);await saved(p);await p.waitForFunction(()=>document.querySelector('#writing-draft-status')?.textContent.includes('saved to your account'));const awarded=JSON.parse(record(1).values['deutschy:v1']);assert(awarded.xp>73);assert.equal(awarded.seen['w:brieffreund'].ok,1);await p.reload({waitUntil:'networkidle0'});await p.waitForSelector('#writing-answer');await saved(p);assert.equal(JSON.parse(record(1).values['deutschy:v1']).xp,awarded.xp);checks+=3;mode='fail';await write(p,'Keep me through failure');await p.waitForSelector('[data-account-save][role=alert]');assert.equal(await p.$eval('#writing-answer',e=>e.value),'Keep me through failure');assert.equal(record(1).values['deutschy:w:brieffreund'],writingModel);checks+=2;await inspect(p,'failure-en');mode='ok';await p.$eval('[data-account-save] button',e=>e.click());await saved(p);assert.equal(record(1).values['deutschy:w:brieffreund'],'Keep me through failure');checks++;
 mode='conflict';await write(p,'Keep me through conflict');await p.waitForSelector('[data-account-save][role=alert]');assert((await p.$eval('[data-account-save]',e=>e.textContent)).includes('another tab or device'));const at=puts;await write(p,'New edit after conflict');await new Promise(r=>setTimeout(r,800));assert.equal(puts,at);checks+=2;await inspect(p,'conflict-en');mode='ok';await p.close();
 const second=await page(2);await second.goto(base+'/writing/#brieffreund',{waitUntil:'networkidle0'});await second.waitForFunction(()=>document.querySelector('#writing-answer')?.value==='Existing server draft 2');checks++;await second.close();
 const settings=await page(1);await settings.goto(base+'/settings/',{waitUntil:'networkidle0'});await ready(settings);await settings.click('input[name=appearance][value=midnight]');await saved(settings);assert.equal(record(1).values['deutschy:appearance'],'midnight');await settings.reload({waitUntil:'networkidle0'});await settings.waitForFunction(()=>document.documentElement.dataset.theme==='midnight');checks+=2;await inspect(settings,'settings-en');await settings.click('input[name=appearance][value=papier]');await saved(settings);await settings.click('[aria-label="عربي Arabic"]');await saved(settings);await settings.goto(base+'/writing/#brieffreund',{waitUntil:'networkidle0'});await settings.waitForFunction(()=>document.documentElement.lang==='ar');await inspect(settings,'writing-ar');checks++;
 // Hydration reads before any page mount: all migrated callers work with Storage blocked.
 for(const route of ['/progress/','/review/daily/','/level-check/A1/','/timed-practice/','/weekly-plan/','/review/words/','/badges/']){const r=await settings.goto(base+route,{waitUntil:'networkidle0'});assert.equal(r.status(),200,route);await ready(settings);assert.deepEqual(await settings.evaluate(()=>window.__storageAttempts),[],route);checks++;
 if(route==='/weekly-plan/'){
  await settings.waitForSelector('#goal-0');await settings.$eval('#goal-0',e=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(e,'Account weekly plan fixture');e.dispatchEvent(new Event('input',{bubbles:true}))});await settings.$$eval('main button',bs=>bs.find(b=>/Update week plan|حدّث خطة الأسبوع/.test(b.textContent)).click());await saved(settings);assert(record(1).values['deutschy:weekly-plan:v1'].includes('Account weekly plan fixture'));await settings.reload({waitUntil:'networkidle0'});await settings.waitForFunction(()=>document.querySelector('#goal-0')?.value==='Account weekly plan fixture');checks+=2;
 }
 if(route==='/timed-practice/'){
  await settings.$$eval('main button',bs=>bs.find(b=>/Start session|ابدأ الجولة/.test(b.textContent)).click());await saved(settings);const session=JSON.parse(record(1).values['deutschy:timed:v1']).active;assert(session?.id);await settings.reload({waitUntil:'networkidle0'});await settings.waitForSelector('[role=timer]');assert.equal(JSON.parse(record(1).values['deutschy:timed:v1']).active.id,session.id);checks+=2;
 }
 if(route==='/review/daily/'){
  await settings.type('#save-word','Apfel');await settings.waitForSelector('main li button');await settings.$eval('main li button',e=>e.click());await saved(settings);assert(JSON.parse(record(1).values['deutschy:review:v1']).saved.length>0);checks++;
 }
 }await settings.close();
 const guest=await page();await guest.goto(base+'/writing/#brieffreund',{waitUntil:'networkidle0'});await guest.waitForSelector('#writing-answer');const before=puts;await write(guest,'Guest draft is temporary');await guest.click('[aria-label="EN English"]');assert((await guest.$eval('#writing-draft-status',e=>e.textContent)).includes('tab memory only'));checks++;await inspect(guest,'guest-en');await guest.reload({waitUntil:'networkidle0'});await guest.waitForFunction(()=>document.querySelector('#writing-answer')?.value==='');assert.equal(puts,before);checks+=2;await guest.close();
 mode='load-fail';const blocked=await page(1);await blocked.goto(base+'/writing/#brieffreund',{waitUntil:'networkidle0'});await blocked.waitForFunction(()=>document.querySelector('main')?.textContent.includes('مش هنكتب فوقه'));assert.equal(await blocked.$('#writing-answer'),null);checks++;await inspect(blocked,'load-failed-ar');mode='ok';await blocked.$eval('main button:last-child',e=>e.click());await ready(blocked);assert((await blocked.$eval('[data-account-save]',e=>e.textContent)).includes('ضيف'));checks++;await blocked.close();
 assert.deepEqual(errors,[]);checks++;console.log('PASS account browser',checks,'checks',axeChecks,'axe snapshots; AR/EN'+(process.env.ACCOUNT_WIDTH||390)+', blocked persistent storage, account rehydration/isolation, ack-only status, pending/error/retry/conflict/guest/theme/language/load-failure');
}finally{await browser?.close();server.close()}
