import puppeteer from 'puppeteer-core';import {spawn} from 'node:child_process';import assert from 'node:assert/strict';
const server=spawn('python3',['-m','http.server','32203','--bind','127.0.0.1','--directory','out'],{stdio:'ignore'});let b;
try{for(let i=0;i<100;i++){try{if((await fetch('http://127.0.0.1:32203/')).ok)break}catch{}await new Promise(r=>setTimeout(r,100))}b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});const p=await b.newPage();await p.setViewport({width:390,height:844,isMobile:true,hasTouch:true});await p.setRequestInterception(true);p.on('request',r=>{const path=new URL(r.url()).pathname;
if(path==='/api/leaderboard')return r.respond({status:200,contentType:'application/json',body:JSON.stringify({xp:[{name:'Ahmed',xp:240,best:6,avatar:'/images/leaders/leader-1.jpg',placeholder:true},{name:'Mostafa',xp:195,best:5,avatar:'/images/leaders/leader-2.jpg',placeholder:true},{name:'Hinawi',xp:150,best:3},{name:'Nour',xp:160,best:4,avatar:null,placeholder:true}].sort((a,b2)=>b2.xp-a.xp),scores:[]})});
if(path.startsWith('/api/'))return r.respond({status:200,contentType:'application/json',body:JSON.stringify(path==='/api/auth/me'?{user:null}:{tts:false})});return r.continue()});
await p.goto('http://127.0.0.1:32203/leaderboard/',{waitUntil:'networkidle0'});
for(const lang of ['ar','en']){if(lang==='en')await p.click('[aria-label="EN English"]');await p.waitForFunction(l=>document.documentElement.lang===l,{},lang);
// The name-entry box is gone; the stats row is level, XP and best streak only.
assert.equal(await p.$('input'),null);
assert.equal((await p.$$('[data-avatar=photo]')).length,2);assert.equal((await p.$$('[data-avatar=default]')).length,2);
assert(await p.$$eval('[data-avatar=photo] img',es=>es.every(e=>e.complete && e.naturalWidth>0)));
await p.evaluate(()=>document.querySelector('section ol').scrollIntoView({block:'start'}));
const text=await p.$eval('body',e=>e.textContent);
assert(!/اكتب اسمك|Your name/.test(text));
// Placeholder leaders and the real learner render together, ordered by XP.
for(const name of ['Ahmed','Mostafa','Hinawi','Nour'])assert(text.includes(name),name);
const ranks=await p.$$eval('section ol li',es=>es.map(e=>e.textContent));
assert(ranks.length>=4);
assert(ranks.findIndex(t=>t.includes('Ahmed'))<ranks.findIndex(t=>t.includes('Hinawi')));
assert(ranks.findIndex(t=>t.includes('Nour'))<ranks.findIndex(t=>t.includes('Hinawi')));
assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
await p.screenshot({path:`/downloads/leaderboard203-${lang}390.png`,fullPage:true})}
console.log('PASS leaderboard203 AR/EN390: name box removed, real learner ranked between placeholders by XP, no overflow');}finally{await b?.close();server.kill()}
