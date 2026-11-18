import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import {loadTs} from './content-loader.mjs';
const model=loadTs(path.resolve('src/lib/sentence-library190.ts'));
const activity=loadTs(path.resolve('src/lib/sentence-activity190.ts'));
const rows=JSON.parse(fs.readFileSync('data/sentences190/library.json','utf8'));
let checks=0;const equal=(a,b)=>{assert.deepEqual(a,b);checks++};
equal(model.sentenceSearchKey('Straße ÄÖÜ'),'strasse aou');
equal(model.sentenceSearchKey('إنت مَوجود؟'),'انت موجود؟');
equal(model.sentenceAnswerKey('  Ich  heiße Karim. '),'Ich heiße Karim');
assert.notEqual(model.sentenceAnswerKey('Ich heiße Karim.'),model.sentenceAnswerKey('ich heisse Karim.'));checks++;
const options={query:'',level:'all',topic:'all',mode:'all',completed:new Set(),saved:new Set()};
equal(model.filterLibrary(rows,options).length,rows.length);
for(const row of rows){
 assert(model.sentenceTopicLabels[row.topic]?.length===2, `Missing bilingual topic label: ${row.topic}`);checks++;
 assert(model.filterLibrary(rows,{...options,query:row.de}).some(r=>r.id===row.id));checks++;
 assert(model.filterLibrary(rows,{...options,query:row.ar}).some(r=>r.id===row.id));checks++;
 assert(model.filterLibrary(rows,{...options,query:row.en}).some(r=>r.id===row.id));checks++;
 assert(model.filterLibrary(rows,{...options,level:row.level}).some(r=>r.id===row.id));checks++;
 assert(model.filterLibrary(rows,{...options,topic:row.topic}).some(r=>r.id===row.id));checks++;
}
const first=rows[0],completed=new Set([first.id]),saved=new Set([first.id]);
equal(model.filterLibrary(rows,{...options,mode:'practised',completed}).map(r=>r.id),[first.id]);
equal(model.filterLibrary(rows,{...options,mode:'new',completed}).length,rows.length-1);
equal(model.filterLibrary(rows,{...options,mode:'saved',saved}).map(r=>r.id),[first.id]);
equal(model.filterLibrary(rows,{...options,query:'zzzznonexistentzzzz'}).length,0);
equal(model.filterLibrary(rows,{...options,level:'C2',topic:'introductions'}).length,0);
equal([...activity.decodeSentenceIds(null)],[]);
equal([...activity.decodeSentenceIds(JSON.stringify([first.id,first.id]))],[first.id]);
for(const bad of ['{}','null','[1]','["wrong-id"]','["s190-evil\\u202e"]','not json']){assert.throws(()=>activity.decodeSentenceIds(bad));checks++}
const future=Array.from({length:7000},(_,i)=>`s190-core-${String(i+1).padStart(4,'0')}`);
assert(JSON.stringify(future).length<250000);checks++;
equal(activity.decodeSentenceIds(JSON.stringify(future)).size,7000);
console.log('PASS sentence190 model',checks,'checks, trilingual search for each current row, filters, comparison, corrupt-state protection, 7000-ID capacity');
