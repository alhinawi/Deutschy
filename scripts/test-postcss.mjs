// Regression for the PostCSS copy actually resolved by Next, using test-only maps.
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {readFile,writeFile,mkdtemp,mkdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
const require=createRequire(import.meta.url);
const pkg=JSON.parse(await readFile(new URL('../package.json',import.meta.url),'utf8'));
const lock=JSON.parse(await readFile(new URL('../package-lock.json',import.meta.url),'utf8'));
assert.equal(pkg.overrides?.next?.postcss,'$postcss');
const nextRequire=createRequire(require.resolve('next/package.json'));
assert.equal(nextRequire.resolve('postcss/package.json'),require.resolve('postcss/package.json'));
const version=nextRequire('postcss/package.json').version;
const [major,minor,patch]=version.split('.').map(Number);
assert(major===8&&(minor>5||(minor===5&&patch>=33)),version);
assert(!lock.packages['node_modules/next/node_modules/postcss']);
assert.equal(lock.packages['node_modules/postcss'].version,version);
const postcss=nextRequire('postcss');
const dir=await mkdtemp(path.join(tmpdir(),'deutschy-postcss-test-'));
try {
 const allowed=path.join(dir,'input');await mkdir(allowed);
 const marker='DEUTSCHY_TEST_ONLY_MAP_SOURCE';
 const fixture=JSON.stringify({version:3,file:'input.css',sources:['fixture.css'],sourcesContent:[marker],names:[],mappings:'AAAA'});
 await writeFile(path.join(dir,'outside.map'),fixture);
 await writeFile(path.join(allowed,'local.map'),fixture);
 const includesMarker=result=>JSON.stringify(result.map?.toJSON()||{}).includes(marker);
 const css=map=>'a { color: red; }\n/*# sourceMappingURL='+map+' */';
 const base={from:path.join(allowed,'input.css'),to:path.join(allowed,'output.css'),map:{inline:false}};
 const traversal=await postcss([]).process(css('../outside.map'),base);
 assert(!includesMarker(traversal),'Untrusted parent path must not load an outside fixture map');
 const absolute=await postcss([]).process(css(path.join(dir,'outside.map')),{from:undefined,map:{inline:false}});
 assert(!includesMarker(absolute),'Untrusted absolute path without from must not load fixture map');
 const local=await postcss([]).process(css('local.map'),base);
 assert(includesMarker(local),'Legitimate same-directory previous map must keep working');
 console.log('PASS: Next resolves shared PostCSS '+version+'; outside-map traversal/no-from absolute paths blocked; local source map preserved');
} finally {await rm(dir,{recursive:true,force:true})}
