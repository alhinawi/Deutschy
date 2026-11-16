import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
const base = 'https://deutschy.pages.dev';
const excluded = /^(admin|account|progress|daily|badges|review|certificate|404)(\/|$)/;
const routes = [];
async function walk(dir, prefix = '') {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name === '_next') continue;
    if (e.isDirectory()) await walk(path.join(dir, e.name), prefix + e.name + '/');
    else if (e.name === 'index.html' && !excluded.test(prefix)) routes.push('/' + prefix);
  }
}
await walk('out');
routes.sort();
await writeFile('out/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + routes.map((r) => `  <url><loc>${base}${r}</loc></url>`).join('\n') + '\n</urlset>\n');
console.log(`Sitemap: ${routes.length} exported public routes`);
