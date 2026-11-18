import {readFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const dir=resolve(root,'data/sentences190');
const files=readdirSync(dir).filter(f=>/^original-[a-z0-9-]+\.json$/.test(f)).sort();
const levels=new Set(['A1','A2','B1','B2','C1','C2']);
const ids=new Set(),german=new Map(),translations=new Map(),errors=[];
const counts={total:0,reviewed:0,integrationChecked:0,approved:0,byLevel:{},byTopic:{}};
const norm=s=>s.normalize('NFC').toLocaleLowerCase('de-DE').replace(/[\p{P}\p{S}]/gu,' ').replace(/\s+/g,' ').trim();
for(const file of files){
 const rows=JSON.parse(readFileSync(resolve(dir,file),'utf8'));
 for(const row of rows){
  counts.total++;const key=`${file}:${row.id}`;
  for(const field of ['id','de','ar','en','level','topic'])if(typeof row[field]!=='string'||!row[field].trim())errors.push(`${key}: missing ${field}`);
  if(!levels.has(row.level))errors.push(`${key}: invalid level`);
  if(!/^s190-[a-z0-9-]{1,55}$/.test(row.id))errors.push(`${key}: invalid stable ID`);
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(row.topic))errors.push(`${key}: invalid topic key`);
  if(ids.has(row.id))errors.push(`${key}: duplicate ID`);ids.add(row.id);
  for(const field of ['de','ar','en']){
   const text=row[field]||'';
   if(text!==text.normalize('NFC'))errors.push(`${key}: non-NFC ${field}`);
   if(/[\u0660-\u0669\u06f0-\u06f9\u200b-\u200f\u202a-\u202e\u2066-\u2069]/u.test(text))errors.push(`${key}: forbidden digits or invisible controls in ${field}`);
   if(/___|\{\{|TODO|TBD|lorem ipsum/i.test(text))errors.push(`${key}: unfinished ${field}`);
   if(!/[.!?؟]$/.test(text))errors.push(`${key}: missing terminal punctuation in ${field}`);
  }
  if(!/\p{Script=Arabic}/u.test(row.ar||''))errors.push(`${key}: Arabic missing`);
  if(/\p{Script=Arabic}/u.test(row.de||'')||/\p{Script=Arabic}/u.test(row.en||''))errors.push(`${key}: language field contamination`);
  const de=norm(row.de||''),tr=norm(`${row.ar||''} ${row.en||''}`);
  if(german.has(de))errors.push(`${key}: duplicate German with ${german.get(de)}`);german.set(de,key);
  if(translations.has(tr))errors.push(`${key}: duplicate translation pair with ${translations.get(tr)}`);translations.set(tr,key);
  if(row.origin!=='original'&&!row.attribution?.sentenceId)errors.push(`${key}: imported entry lacks provenance`);
  if(row.review?.nativeSignoff!==false&&!row.review?.nativeReviewer)errors.push(`${key}: ungrounded native sign-off`);
  const reviewed=['german','egyptian','english','standalone','level'].every(k=>row.review?.[k]==='checked');
  if(reviewed)counts.reviewed++;
  const digest=createHash('sha256').update(JSON.stringify(['id','de','ar','en','level','topic'].map(k=>row[k]))).digest('hex');
  const integrationChecked=row.integrationReview?.status==='checked'&&row.integrationReview?.contentSha256===digest;
  if(integrationChecked)counts.integrationChecked++;
  if(row.integrationReview?.status==='checked'&&!integrationChecked)errors.push(`${key}: stale integration review after content change`);
  if(row.publication==='approved')counts.approved++;
  if(row.publication==='approved'&&(!reviewed||!integrationChecked))errors.push(`${key}: approval without complete review`);
  counts.byLevel[row.level]=(counts.byLevel[row.level]||0)+1;
  counts.byTopic[row.topic]=(counts.byTopic[row.topic]||0)+1;
 }
}
if(process.argv.includes('--release')){
 if(counts.total!==7000)errors.push(`Release blocked: ${counts.total}/7000 entries`);
 if(counts.reviewed!==7000)errors.push(`Release blocked: ${counts.reviewed}/7000 checked entries`);
 if(counts.integrationChecked!==7000)errors.push(`Release blocked: ${counts.integrationChecked}/7000 integration language checks`);
 if(counts.approved!==7000)errors.push(`Release blocked: ${counts.approved}/7000 approved entries`);
 if(JSON.stringify([...ids]).length>250000)errors.push('Activity IDs exceed per-account key capacity');
}
console.log(JSON.stringify({files:files.length,...counts,errors},null,2));
if(errors.length)process.exitCode=1;
