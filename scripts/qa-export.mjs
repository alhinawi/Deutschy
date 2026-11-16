// Run after a static build: node scripts/qa-export.mjs
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const out = path.resolve('out');
const pages = [];
function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '_next') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === 'index.html' && !p.includes('/404/')) pages.push(p);
  }
}
walk(out);
const failures = [];
const resolves = (href) => {
  const p = path.join(out, decodeURIComponent(new URL(href, 'https://deutschy.pages.dev').pathname));
  return existsSync(p) && (statSync(p).isFile() || existsSync(path.join(p, 'index.html')));
};
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const match of html.matchAll(/<a\b[^>]*href="(\/[^\"]*)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (href.startsWith('//') || href.startsWith('/api/')) continue;
    if (!resolves(href)) failures.push(`${path.relative(out, page)}: ${href}`);
  }
  for (const match of html.matchAll(/<img\b[^>]*src="(\/[^\"]*)"/g)) {
    if (!resolves(match[1])) failures.push(`${path.relative(out, page)}: image ${match[1]}`);
  }
  assert.match(html, /<title>[^<]+<\/title>/, `Missing title: ${page}`);
}
assert(existsSync(path.join(out, 'sitemap.xml')), 'Missing native exported sitemap');
const xml = readFileSync(path.join(out, 'sitemap.xml'), 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
assert(urls.length > 0, 'Empty sitemap');
for (const url of urls) if (!resolves(url)) failures.push(`Sitemap: ${url}`);
assert.deepEqual(failures, [], 'Broken exported links');
assert(existsSync(path.join(out, 'og.png')), 'Missing Open Graph image');
console.log(`PASS: ${pages.length} exported pages, internal links, ${urls.length} sitemap targets and OG image`);

const c1Routes = ['/c1/','/c1/wortschatz/','/c1/writing/','/reading/c1-kennzahlen/','/reading/c1-archiv/','/reading/c1-beteiligung/','/reading/c1-reparatur/','/level-check/C1/'];
for(const route of c1Routes) {const url='https://deutschy.pages.dev'+route; const html=readFileSync(path.join(out,route,'index.html'),'utf8');assert(html.includes('<link rel="canonical" href="'+url+'"'), 'Wrong C1 canonical: '+route);assert(html.includes('<meta property="og:url" content="'+url+'"'), 'Wrong C1 OG URL: '+route);assert(urls.includes(url),'C1 missing from sitemap: '+route);}
assert(resolves('/levels/C1/')&&resolves('/levels/C2/'),'Sidebar level destinations missing');
console.log('PASS: eight new C1 canonical/OG URLs and sitemap inclusion; C1/C2 level destinations resolve');
