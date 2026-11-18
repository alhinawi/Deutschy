import {loadTs} from './content-loader.mjs';
import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';
const lib=name=>loadTs(path.resolve(`src/lib/${name}.ts`));
const manifest=new Map(),excluded={tooLong:0};
const normalize=text=>text.normalize('NFC').trim().replace(/\s+/gu,' ');
function add(text,source){if(typeof text!=='string')throw Error(`Not speech text:${source}`);text=normalize(text);if(!text)return;if(text.length>1000){excluded.tooLong++;return}const id=crypto.createHash('sha256').update(text).digest('hex');if(!manifest.has(id))manifest.set(id,{id,text,source})}
const {words}=lib('data');for(const w of words)add(`${w.art} ${w.de}`,`noun:${w.id}`);
for(const r of lib('reading').readings){for(const p of r.de)add(p,`reading:${r.id}`);add(r.de.join(' '),`reading-whole:${r.id}`);add(r.de[0].split(/(?<=[.!?])\s/)[0],`speaking:${r.id}`)}
for(const item of lib('dictation').dictationItems)add(item.text,`dictation:${item.id}`);
for(const r of lib('shadowing').shadowingTexts)for(const line of r.lines)add(line,`shadowing:${r.id}`);
for(const name of ['dialogues','egypt-dialogues'])for(const d of lib(name).dialogues){for(const line of d.lines)add(line[1],`${name}:${d.id}`);add(d.lines.map(l=>l[1]).join(' '),`${name}-whole:${d.id}`)}
for(const g of lib('grammar').grammar)for(const ex of g.ex)add(ex[0],`grammar:${g.id}`);
for(const s of lib('sentences').sentences)add(s.de,`sentence:${s.topic}`);
for(const s of lib('speaking-cards').speakingCards){for(const field of ['prompt','model','followUp'])add(s[field],`speaking-card:${s.id}`)}
for(const pair of lib('sound-contrasts').soundContrasts)for(const word of pair.words)add(word,`sound:${pair.id}`);
const {verbs}=lib('verbs'),{PERSONS,forms,trainable}=lib('conj');
for(const v of verbs){add(v.inf.replace(/^sich /,''),`verb:${v.inf}`);add(v.ex[0],`verb-example:${v.inf}`);add(`${v.inf}, ${v.pret}, ${v.aux==='sein'?'ist':'hat'} ${v.pp}`,`verb-parts:${v.inf}`);for(let i=0;i<6;i++)add(`${PERSONS[i]} ${v.pres[i]}`,`present:${v.inf}`);if(trainable(v))for(const tense of ['pres','pret','perf'])forms(v,tense).forEach((form,i)=>add(`${PERSONS[i].split('/')[0]} ${form}`,`conjugation:${v.inf}`))}
for(const d of lib('idioms').idioms)add(d.de,'idiom');
for(const section of lib('basics').sections)for(const row of section.rows)add(row[0].replace(/^\d+ – /,''),`basic:${section.id}`);
for(const p of lib('pron').pron)for(const row of p.words)add(row[0],`pron:${p.id}`);
for(const p of lib('pron').pairs){add(p[0],'pron-pair');add(p[1],'pron-pair')}
const prep=lib('praep');for(const row of [...prep.akk,...prep.dat])add(row[3],'preposition');for(const row of prep.wechsel){add(row.wo[0],'preposition-place');add(row.wohin[0],'preposition-direction')}for(const row of prep.fills)add(row[0].replace('___',row[1]),'preposition-fill');
const neg=lib('negation');for(const row of [...neg.kein,...neg.wq])add(row[0].replace('___',row[1]),'negation-question');for(const row of neg.order)add(row[0],'negation-order');for(const row of neg.wlist)add(row[3],'question-word');
const {sep,plain}=lib('trennbar');for(const row of sep)add(plain(row),'separable-example');
const z=lib('zahlen');for(let n=0;n<=9999;n++)add(z.numWord(n),'number-quiz:0-9999');for(const v of [...z.days,...z.months])add(v,'calendar');for(let m=1;m<=12;m++)for(let d=1;d<=z.dim[m-1];d++)add(z.dateWord(d,m),'date-quiz');for(let h=0;h<24;h++)for(let m=0;m<60;m++){add(z.timeFormal(h,m),'time-formal');add(z.timeInformal(h,m),'time-informal')}
for(const row of lib('typed-zahlen').typedZahlen)add(row.prompt,'typed-number');
const rows=[...manifest.values()].sort((a,b)=>a.id.localeCompare(b.id));
const quote=s=>`'${s.replaceAll("'","''")}'`;
// Append/upsert known content only. Never DELETE or REPLACE existing rows or caches.
fs.writeFileSync('data/tts-manifest.sql',rows.map(r=>`INSERT INTO tts_manifest (id,text,source) VALUES (${quote(r.id)},${quote(r.text)},${quote(r.source)}) ON CONFLICT(id) DO UPDATE SET text=excluded.text,source=excluded.source;`).join('\n')+'\n');
fs.writeFileSync('data/tts-manifest.json',JSON.stringify(rows,null,2)+'\n');
console.log(JSON.stringify({entries:rows.length,characters:rows.reduce((n,r)=>n+Array.from(r.text).length,0),excluded,sha256:crypto.createHash('sha256').update(JSON.stringify(rows)).digest('hex')},null,2));
