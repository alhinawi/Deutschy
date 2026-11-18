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
let browser;
try{
 browser=await p.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
 const page=await browser.newPage();await page.setViewport({width:390,height:844});
 await page.evaluateOnNewDocument(()=>localStorage.setItem('deutschy:lang','en'));
 const responses=[];page.on('response',r=>{if(r.url().includes('deutschy-sounds'))responses.push({url:r.url(),status:r.status(),headers:r.headers()})});
 await page.goto((process.env.LIVE_BASE||'http://127.0.0.1:'+server.address().port)+'/lessons/family/',{waitUntil:'networkidle0'});
 await page.waitForSelector('article button');await page.click('article button');
 await new Promise(r=>setTimeout(r,4000));
 assert.equal(responses.length,1);assert.equal(responses[0].status,200);assert.equal(responses[0].headers['content-type'],'audio/mpeg');assert.equal(responses[0].headers['access-control-allow-origin'],'*');assert((await page.$eval('article',e=>e.textContent)).includes('Audio finished.'));
 console.log(JSON.stringify({responses,status:await page.$eval('article',e=>e.textContent),audio:await page.evaluate(()=>[...document.querySelectorAll('audio')].map(e=>({src:e.src,paused:e.paused,duration:e.duration})))},null,2));
 await page.screenshot({path:'/downloads/deutschy178-static-playback-en.png'});
}finally{await browser?.close();server.close()}
