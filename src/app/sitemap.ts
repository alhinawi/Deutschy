import type { MetadataRoute } from 'next';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import { topics } from '@/lib/data';
import { grammar } from '@/lib/grammar';
import { verbs, slug } from '@/lib/verbs';
import { readings } from '@/lib/reading';
import { CHECK_LEVELS } from '@/lib/level-check';
import { dialogues } from '@/lib/egypt-dialogues';
import { sheets } from '@/lib/sheets';

export const dynamic = 'force-static';
const excluded = /^(admin|account|progress|daily|badges|review|certificate)(\/|$)/;
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = new Set<string>();
  function walk(dir: string, prefix = '') {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('[')) continue;
      if (entry.isDirectory()) walk(path.join(dir, entry.name), prefix + entry.name + '/');
      else if (entry.name === 'page.tsx' && !excluded.test(prefix)) routes.add('/' + prefix);
    }
  }
  walk(path.join(process.cwd(), 'src/app'));
  CHECK_LEVELS.forEach((l) => routes.add(`/level-check/${l}/`));
  topics.forEach((t) => routes.add(`/lessons/${t.id}/`));
  grammar.forEach((g) => { routes.add(`/grammar/${g.id}/`); routes.add(`/grammar/${g.id}/sheet/`); });
  verbs.forEach((v) => routes.add(`/verbs/${slug(v.inf)}/`));
  readings.forEach((r) => routes.add(`/reading/${r.id}/`));
  dialogues.forEach(d=>routes.add(`/egypt-dialogues/${d.id}/`));
  sheets.forEach((s) => routes.add(`/blatt/${s.id}/`));
  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].forEach((l) => routes.add(`/levels/${l}/`));
  ['flashcards', 'quiz', 'article', 'spelling', 'memory', 'build', 'dictation', 'listening', 'satzbau'].forEach((g) => routes.add(`/games/${g}/`));
  return [...routes].sort().map((route) => ({ url: `https://deutschy.pages.dev${route}` }));
}
