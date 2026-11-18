import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import {loadTs} from './content-loader.mjs';
const {foodGroups,drinkGroups,foodIds,drinkIds}=loadTs(path.resolve('src/lib/food-groups.ts'));const {words}=JSON.parse(fs.readFileSync('data/vocab.json'));const en=JSON.parse(fs.readFileSync('data/en.json'));const {search}=loadTs(path.resolve('src/lib/search-index.ts'));let checks=0;
assert.equal(foodIds.size,166);assert.equal(drinkIds.size,12);assert.equal(foodGroups.length,9);assert.equal(drinkGroups.length,3);checks+=4;
for(const [groups,ids]of [[foodGroups,foodIds],[drinkGroups,drinkIds]]){assert.equal(groups.flatMap(g=>g.ids).length,ids.size);checks++;for(const g of groups){assert(g.ar&&g.en&&g.ids.length);checks++;for(const id of g.ids){const w=words.find(w=>w.id===id);assert(w,id);assert(en[id]);assert(fs.existsSync('public/img/'+id+'.jpg'));assert(w.photo.commons&&w.photo.license&&(w.photo.author||w.photo.license==='Public domain'));assert(search(en[id],500).some(h=>h.href===`/lessons/${w.topic}/#word-${id}`),id);checks+=5;}}}
for(const id of foodIds){assert(!drinkIds.has(id));checks++}
for(const id of ['teller','tasse','glas','flasche','reiskocher','honigglas','teebeutel','hummer','hund','fressnapf']){assert(!foodIds.has(id));assert(!drinkIds.has(id));checks+=2;}
for(const id of ['apfel','falafel','baklava','linse','salat','reis','kaffeebohne']){assert(foodIds.has(id));checks++}
for(const id of ['wasser','pfefferminztee','cappuccino','bier']){assert(drinkIds.has(id));checks++}
for(const term of ['Food in pictures','Drinks in pictures'])assert(search(term,50).some(h=>h.title===term));checks+=2;
console.log('PASS food/drink collections:',checks,'assertions;166existing food entries/9groups,12drinks/3groups,disjointIDs,photos/credits,search anchors,utensil/container/living-animal exclusions');
