import {spawn} from 'node:child_process';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const route='src/app/sentences/page.tsx',library='data/sentences190/library.json';
const originalRoute=fs.existsSync(route)?fs.readFileSync(route):null,originalLibrary=fs.readFileSync(library);
fs.mkdirSync('src/app/sentences',{recursive:true});fs.copyFileSync('scripts/fixtures/sentences190-page.tsx',route);
const incomplete=JSON.parse(originalLibrary);incomplete[0].publication='draft';fs.writeFileSync(library,JSON.stringify(incomplete));
const log=fs.openSync('/tmp/sentence190-guard.log','w');
const env={...process.env,SENTENCE_LIBRARY_PREVIEW:'',NODE_OPTIONS:'--max-old-space-size=512'};
const server=spawn(process.execPath,['node_modules/next/dist/bin/next','dev','--hostname','127.0.0.1','--port','32191'],{env,stdio:['ignore',log,log]});
try{
 let status,body;
 for(let n=0;n<100;n++){try{const r=await fetch('http://127.0.0.1:32191/sentences/');status=r.status;body=await r.text();if(status===404||body.includes('NEXT_HTTP_ERROR_FALLBACK;404'))break}catch{}await new Promise(r=>setTimeout(r,300))}
 assert(status===404||body.includes('NEXT_HTTP_ERROR_FALLBACK;404'));assert(!body.includes('data-sentence-id'));assert(!body.includes('Guten Morgen, ich heiße Karim.'));console.log('PASS sentence190 incomplete-release guard: actual fixture invokes notFound and renders no corpus without private preview; Next development streaming may return HTTP200');
}finally{server.kill('SIGTERM');await new Promise(r=>server.once('exit',r));fs.closeSync(log);fs.writeFileSync(library,originalLibrary);if(originalRoute)fs.writeFileSync(route,originalRoute);else{fs.rmSync(route);fs.rmdirSync('src/app/sentences')}}
