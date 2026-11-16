import {practicalTerms} from './practical-glossary';
import {speakingCards} from './speaking-cards';
import {studyGoals} from './start-guide';
import {pitfalls} from './pitfalls';
import {soundContrasts} from './sound-contrasts';
import {writingFrames} from './writing-frames';
import {contextPacks} from './context-packs';
import { dialogues } from './egypt-dialogues';
import { readings } from './reading';
import { writingTasks } from './writing';
import { b1Grammar } from './b1-grammar';
import { b2Grammar } from './b2-grammar';
import { c1Grammar } from './c1-grammar';
import { c2Grammar } from './c2-grammar';
import { words, glossOf, topicName } from './data';
import { grammar } from './grammar';
import { verbs, slug } from './verbs';
import { idioms } from './idioms';
import { sidebar } from './nav';

export type Hit = { kind: 'word' | 'grammar' | 'verb' | 'idiom' | 'page' | 'reading' | 'writing' | 'dialogue'; title: string; sub: string; href: string; hay: string };

export const norm = (s: string) =>
  s.toLowerCase().replace(/ß/g, 'ss').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
    .replace(/[\u064b-\u065f\u0670]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');

let cache: Hit[] | null = null;
export function index(): Hit[] {
  if (cache) return cache;
  const out: Hit[] = [];
  const h = (kind: Hit['kind'], title: string, sub: string, href: string, extra: string) => out.push({ kind, title, sub, href, hay: norm(`${title} ${sub} ${extra}`) });
  sidebar.forEach((g) => g.items.filter((i) => !i.admin).forEach((i) => h('page', i.en, i.ar, i.href, `${i.ar} ${i.en}`)));
  words.forEach((w) => h('word', `${w.art} ${w.de}`, `${w.ar} · ${glossOf(w, 'en')}`, `/lessons/${w.topic}/`, `${w.de} ${w.plural} ${topicName(w.topic, 'en')}`));
  grammar.forEach((g) => h('grammar', g.title[1], `${g.title[0]} · ${g.level}`, `/grammar/${g.id}/`, g.sum.join(' ')));
  verbs.forEach((v) => h('verb', v.inf, `${v.ar} · ${v.en}`, `/verbs/${slug(v.inf)}/`, `${v.pp} ${v.pret} ${v.pres.join(' ')}`));
  idioms.forEach((d) => h('idiom', d.de, `${d.ar} · ${d.en}`, '/redewendungen/', d.literal));
  practicalTerms.forEach(w=>h('word',w.article+' '+w.de,w.ar+' · '+w.en,`/practical-words/#${w.id}`,w.plural+' '+w.example));
  speakingCards.forEach(c=>h('page',c.title[1],c.title[0]+' · '+c.level,`/speaking-cards/#${c.id}`,c.prompt+' '+c.model+' '+c.followUp));
  studyGoals.forEach(g=>h('page',g.title[1],g.title[0],`/start/#${g.id}`,g.steps.flat().join(' ')));
  pitfalls.forEach(p=>h('page',p.title[1],p.title[0]+' · '+p.level,`/pitfalls/#${p.id}`,p.note.join(' ')+' '+p.prompt+' '+p.answers.join(' ')));
  soundContrasts.forEach(p=>h('page',p.words.join(' / '),p.contrast,`/sound-contrasts/#${p.id}`,p.meanings.flat().join(' ')+' '+p.tip.join(' ')));
  writingFrames.forEach(f=>h('writing',f.task.title[1]+' - frame',f.task.title[0]+' · '+f.task.level,`/writing-frames/#${f.id}`,f.frame.join(' ')+' '+f.register.join(' ')));
  contextPacks.forEach(p=>h('page',p.title[1],p.title[0],`/context-packs/#${p.id}`,p.id.replaceAll('-',' ')+' '+p.note.join(' ')+' '+p.items.map(i=>i.de+' '+i.ar+' '+i.word.de).join(' ')));
  dialogues.forEach(d=>h('dialogue',d.title[0],`${d.title[1]} · ${d.level}`,`/egypt-dialogues/${d.id}/`,d.lines.flat().join(' ')+' '+d.gloss.flat().join(' ')));
  readings.forEach(r=>h('reading',r.title[0],`${r.title[1]} · ${r.level}`,`/reading/${r.id}/`,r.de.join(' ')+' '+r.ar.join(' ')));
  writingTasks.forEach(w=>h('writing',w.title[1],`${w.title[0]} · ${w.level}`,`/writing/#${w.id}`,w.brief.join(' ')+' '+(w.tips||[]).join(' ')));
  for(const [level,drills] of [['B1',b1Grammar],['B2',b2Grammar],['C1',c1Grammar],['C2',c2Grammar]] as const) for(const d of drills)h('grammar',d.name,`${level} · ${d.ar}`,`/${level.toLowerCase()}/`,d.en+' '+d.rows.map(r=>r[0]).join(' '));
  cache = out;
  return out;
}

export function search(q: string, limit = 30): Hit[] {
  const n = norm(q.trim());
  if (n.length < 2) return [];
  const res: [number, Hit][] = [];
  for (const x of index()) {
    const t = norm(x.title);
    let s = 0;
    if (t === n) s = 100; else if (t.split(' ').some((p) => p === n)) s = 90; else if (t.startsWith(n) || t.split(' ').some((p) => p.startsWith(n))) s = 70; else if (t.includes(n)) s = 50; else if (x.hay.includes(n)) s = 20;
    if (s) res.push([s + (x.kind === 'word' || x.kind === 'verb' ? 1 : 0), x]);
  }
  return res.sort((a, b) => b[0] - a[0]).slice(0, limit).map((r) => r[1]);
}
