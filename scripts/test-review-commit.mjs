import assert from 'node:assert/strict';import path from 'node:path';import{loadTs}from'./content-loader.mjs';
const {commitReviewChange}=loadTs(path.resolve('src/lib/review-commit.ts'));let checks=0;
const initial={cards:{apfel:{b:2,due:105}},saved:['apfel']};let durable=structuredClone(initial),writes=0;
const read=()=>structuredClone(durable),write=x=>{writes++;durable=structuredClone(x)};
let change=x=>({...x,saved:[...x.saved,'igel']});
let r=commitReviewChange(read,write,change);assert(r.ok);assert.deepEqual(durable.saved,['apfel','igel']);checks+=2;
const before=structuredClone(durable);r=commitReviewChange(read,()=>{throw Error('quota')},x=>({...x,saved:[]}));assert(!r.ok);assert.deepEqual(r.data,before);assert.deepEqual(durable,before);checks+=3;
// A second action uses current storage, not a component snapshot from before another tab saved.
durable.saved.push('hund');r=commitReviewChange(read,write,x=>({...x,saved:x.saved.filter(v=>v!=='igel')}));assert(r.ok);assert.deepEqual(durable.saved,['apfel','hund']);assert.deepEqual(durable.cards,initial.cards);checks+=3;
const bad={...durable,unreadable:true};const n=writes;r=commitReviewChange(()=>bad,write,change);assert(!r.ok);assert.equal(writes,n);assert.equal(r.data,bad);checks+=3;
r=commitReviewChange(read,write,x=>({...x,unreadable:true}));assert(!r.ok);assert.equal(writes,n);checks+=2;
r=commitReviewChange(read,write,()=>{throw Error('invalid action')});assert(!r.ok);assert.deepEqual(r.data,durable);assert.equal(writes,n);checks+=3;
console.log(`PASS ${checks} durable review commit assertions: quota failure,latest snapshot,unreadable guards,unchanged unrelated cards`);
