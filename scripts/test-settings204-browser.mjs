import puppeteer from 'puppeteer-core';import {spawn} from 'node:child_process';import assert from 'node:assert/strict';
const server=spawn('python3',['-m','http.server','32204','--bind','127.0.0.1','--directory','out'],{stdio:'ignore'});let b;
try{for(let i=0;i<100;i++){try{if((await fetch('http://127.0.0.1:32204/')).ok)break}catch{}await new Promise(r=>setTimeout(r,100))}b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});const p=await b.newPage();await p.setViewport({width:390,height:844,isMobile:true,hasTouch:true});await p.setRequestInterception(true);p.on('request',r=>{const path=new URL(r.url()).pathname;if(path.startsWith('/api/'))return r.respond({status:200,contentType:'application/json',body:JSON.stringify(path==='/api/auth/me'?{user:null}:{tts:false})});return r.continue()});
// A lesson page no longer carries the sound/install details block, but the offline worker still registers.
await p.goto('http://127.0.0.1:32204/lessons/',{waitUntil:'networkidle0'});
let text=await p.$eval('body',e=>e.textContent);
assert(!/الصوت والتثبيت|Sound and installation/.test(text));
assert(!/أصوات التفاعل|Interaction sounds/.test(text));
await p.waitForFunction(async()=>'serviceWorker' in navigator&&!!(await navigator.serviceWorker.getRegistration()),{timeout:15000});
console.log('PASS lesson pages: sound/install block gone, service worker still registered');
// The settings page owns those controls now.
await p.goto('http://127.0.0.1:32204/settings/',{waitUntil:'networkidle0'});
for(const lang of ['ar','en']){if(lang==='en')await p.click('[aria-label="EN English"]');await p.waitForFunction(l=>document.documentElement.lang===l,{},lang);
text=await p.$eval('body',e=>e.textContent);
assert(/الصوت والتثبيت|Sound and installation/.test(text));
assert(/أصوات التفاعل|Interaction sounds/.test(text));
assert(/elevenlabs\.io/.test(await p.$eval('body',e=>e.innerHTML)));
assert(await p.$('aside[aria-label]'));
assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
await p.screenshot({path:`/downloads/settings204-${lang}390.png`,fullPage:true})}
console.log('PASS settings204 AR/EN390: interaction sounds, credit line and install/update status on the settings page, no overflow');}finally{await b?.close();server.kill()}
