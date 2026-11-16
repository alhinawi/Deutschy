import { readFileSync,writeFileSync } from 'node:fs';
const version=readFileSync('.next/BUILD_ID','utf8').trim();
const sw=`const CACHE='deutschy-${version}';
const PAGES=CACHE+'-pages',ASSETS=CACHE+'-assets';
const OFFLINE='/offline.html';
async function putBounded(name,request,response,max){const c=await caches.open(name);await c.put(request,response);const keys=await c.keys();while(keys.length>max)await c.delete(keys.shift());}
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['/',OFFLINE,'/icon-192.png','/icon-512.png']))));
self.addEventListener('message',e=>{if(e.data==='APPLY_UPDATE')self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('deutschy-')&&![CACHE,PAGES,ASSETS].includes(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin||/^\\/(api|account|admin)(\\/|$)/.test(u.pathname)||u.search||e.request.headers.get('RSC'))return;
if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(async r=>{if(r.ok){try{await putBounded(PAGES,e.request,r.clone(),80)}catch{}}return r}).catch(async()=>await caches.match(e.request)||await caches.match(OFFLINE)));return;}
if(u.pathname.startsWith('/_next/static/')||u.pathname.startsWith('/fonts/')||u.pathname.startsWith('/img/'))e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(async r=>{if(r.ok){try{await putBounded(ASSETS,e.request,r.clone(),500)}catch{}}return r})));});`;
writeFileSync('out/sw.js',sw);
console.log('Built versioned offline worker',version);
