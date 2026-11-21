import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import path from 'node:path';
import {loadTs} from './content-loader.mjs';
const {photoLicenseUrl}=loadTs(path.resolve('src/lib/photo-license.ts'));
const {words}=JSON.parse(fs.readFileSync('data/vocab.json','utf8'));
const ledger=JSON.parse(fs.readFileSync('data/noun-photo-audit173.json','utf8'));
let checks=0;
assert.equal(ledger.length,965);checks++;
assert.equal(new Set(ledger.map(r=>r.id)).size,965);checks++;
const current=new Map(words.map(w=>[w.id,w]));
for (const entry of ledger) {
 const word=current.get(entry.id);assert(word,entry.id+' removed: update scoped ledger deliberately');checks++;
 assert.equal(crypto.createHash('sha256').update(fs.readFileSync(`public/img/${entry.id}.jpg`)).digest('hex'),entry.sha256,entry.id+' photo changed: visually recheck and update ledger');checks++;
 assert.equal(word.photo.padding??false,entry.padding,entry.id+' padding drift');checks++;
 for(const key of ['source','file','license','author']){assert.equal(key==='source'?word.photo.commons:word.photo[key],entry[key],entry.id+' credit drift');checks++;}
}
const changed=ledger.filter(e=>e.decision==='replace');assert.deepEqual(changed.map(e=>e.id).sort(),['adventskranz','bruder','grossvater','kind','pflaster','spielplatz','vater']);checks++;
for(const e of changed){assert.notEqual(e.beforeSha256,e.sha256);assert(photoLicenseUrl(e.license));checks+=2;}
for (const kind of ['BY','BY-SA'])for(const version of ['2.0','2.5','3.0','4.0']){assert.equal(photoLicenseUrl(`CC ${kind} ${version}`),`https://creativecommons.org/licenses/${kind.toLowerCase()}/${version}/`);checks++;}
assert.equal(photoLicenseUrl('CC0'),'https://creativecommons.org/publicdomain/zero/1.0/');checks++;
for(const value of ['CC BY 9.0','CC BY 4.0 extra','cc by 4.0','Public domain','GFDL 1.2','Pexels License','https://evil.invalid','CC BY-SA 3.0 de']){assert.equal(photoLicenseUrl(value),undefined);checks++;}
console.log(`PASS ${checks} noun-photo/credit assertions; all 965 reviewed hashes pinned; ${changed.length} deliberate replacements; safe exact license URL mapping`);
