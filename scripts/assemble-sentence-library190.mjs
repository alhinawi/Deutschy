import {readFileSync,readdirSync,writeFileSync,mkdirSync,copyFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const preview=process.argv.includes('--preview');
const check=spawnSync(process.execPath,[resolve(root,'scripts/test-sentence-library190.mjs'),...(preview?[]:['--release'])],{encoding:'utf8'});
process.stdout.write(check.stdout);process.stderr.write(check.stderr);
if(check.status!==0)process.exit(check.status??1);
const dir=resolve(root,'data/sentences190');
const rows=readdirSync(dir).filter(f=>/^original-[a-z0-9-]+\.json$/.test(f)).sort().flatMap(file=>JSON.parse(readFileSync(resolve(dir,file),'utf8')));
if(!preview&&rows.some(r=>r.publication!=='approved'))throw Error('Release blocked: every entry must be approved after final review');
const fields=['id','de','ar','en','level','topic','register','origin','publication'];
writeFileSync(resolve(dir,'library.json'),JSON.stringify(rows.map(r=>Object.fromEntries(fields.map(k=>[k,r[k]]))))+'\n');
console.log(`Prepared ${rows.length} ${preview?'PRIVATE PREVIEW':'approved'} entries.`);

if(!preview){mkdirSync(resolve(root,'src/app/sentences'),{recursive:true});copyFileSync(resolve(root,'scripts/fixtures/sentences190-page.tsx'),resolve(root,'src/app/sentences/page.tsx'))}
