// Run after a static build. Check ordinary routes can be reached from the home/hubs.
import {readdirSync,readFileSync} from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('out'), graph=new Map();
function walk(dir){for(const e of readdirSync(dir,{withFileTypes:true})){if(e.name==='_next')continue;const f=path.join(dir,e.name);if(e.isDirectory())walk(f);else if(e.name==='index.html'){let route='/'+path.relative(root,path.dirname(f)).replaceAll(path.sep,'/');if(!route.endsWith('/'))route+='/';const html=readFileSync(f,'utf8');graph.set(route,[...html.matchAll(/<a\b[^>]*href="(\/[^\"]*)"/g)].map(m=>decodeURIComponent(new URL(m[1].replaceAll('&amp;','&'),'https://deutschy.pages.dev').pathname)));}}}
walk(root);const visited=new Set(),queue=['/'];while(queue.length){const r=queue.pop();if(visited.has(r))continue;visited.add(r);queue.push(...(graph.get(r)||[]).filter(x=>!visited.has(x)));}
const intentional=r=>r==='/404/'||r==='/admin/'||/^\/certificate\/(A1|A2|B1|B2|C1|C2)\/$/.test(r);
const missing=[...graph.keys()].filter(r=>!visited.has(r)&&!intentional(r));assert.deepEqual(missing,[],'Ordinary routes unreachable from home/hubs');
for(const [r,links]of graph)if(!intentional(r))assert(links.some(h=>h!==r&&graph.has(h)),`Dead end: ${r}`);
console.log(`PASS: ${[...graph.keys()].filter(r=>!intentional(r)).length} ordinary routes reachable from home, with no dead ends. Excludes 404, admin and 6 state-gated certificates.`);
