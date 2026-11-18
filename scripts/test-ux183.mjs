import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import{loadTs}from'./content-loader.mjs';
const{studyNavigation,personalNavigation,unmappedNavigation}=loadTs(path.resolve('src/lib/study-navigation.ts'));const{sidebar}=loadTs(path.resolve('src/lib/nav.ts'));let checks=0;
assert.equal(studyNavigation.length,7);assert.equal(studyNavigation[2].groups.length,7);assert.equal(unmappedNavigation.length,0);checks+=3;
const all=[...studyNavigation.flatMap(s=>[...s.items,...(s.groups??[]).flatMap(g=>g.items)]),...personalNavigation];assert.equal(new Set(all.map(i=>i.href)).size,all.length);assert.deepEqual([...new Set(all.map(i=>i.href))].sort(),[...new Set(sidebar.flatMap(g=>g.items.map(i=>i.href)))].sort());checks+=2;
for(const s of studyNavigation){assert(s.items.length||s.groups?.length);for(const g of s.groups??[])assert(g.items.length);checks++}
for(const i of all){assert(fs.existsSync('out'+i.href+'index.html'),i.href);checks++}
console.log(`PASS UX183 navigation model:${checks}checks,7Henglish-ordersections,7populatedacademies,noemptygroups,all${all.length}oldroutespreservedonce`);
