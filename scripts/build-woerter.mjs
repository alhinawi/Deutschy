// Builds src/lib/generated/woerter.json for the /woerter/ section.
// Article + plural source (verified, free): nouns.csv from github.com/gambolputty/german-nouns
// (CC BY-SA 4.0, extracted from the German Wiktionary). Repo vocabulary (data/vocab.json) keeps
// its own in-house articles/plurals; the CSV is the referee and covers the extra nouns authored
// in data/woerter-extra.json. data/woerter-overrides.json fixes known source gaps by hand.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';

const csvPath = process.env.NOUNS_CSV || '/tmp/nouns.csv';
const ART = { m: 'der', f: 'die', n: 'das' };

// --- load CSV, keep pure noun entries ---
const csv = readFileSync(csvPath, 'utf8').split('\n');
const header = csv[0].split(',');
const col = Object.fromEntries(header.map((h, i) => [h, i]));
const byLemma = new Map();
for (let i = 1; i < csv.length; i++) {
  const line = csv[i];
  if (!line) continue;
  // cheap CSV split: quoted fields contain commas; split with a tiny state machine
  const cells = [];
  let cur = '', q = false;
  for (const ch of line) {
    if (q) { if (ch === '"') q = false; else cur += ch; }
    else if (ch === '"') q = true;
    else if (ch === ',') { cells.push(cur); cur = ''; }
    else cur += ch;
  }
  cells.push(cur);
  const lemma = cells[col.lemma];
  const pos = cells[col.pos];
  if (!pos.includes('Substantiv') || /(Affix|Gebundenes Lexem|Suffix|Präfix|Toponym)/.test(pos)) continue;
  const genus = cells[col.genus] || cells[col['genus 1']] || '';
  const pl = cells[col['nominativ plural']] || cells[col['nominativ plural 1']] || '';
  const gen = cells[col['genitiv singular']] || '';
  const rec = { genus, pl, gen };
  const prev = byLemma.get(lemma);
  // prefer rows with a genus and a plural
  if (!prev || (!prev.genus && genus) || (!prev.pl && pl)) byLemma.set(lemma, { genus: genus || prev?.genus || '', pl: pl || prev?.pl || '', gen: gen || prev?.gen || '' });
}

const overrides = JSON.parse(readFileSync('data/woerter-overrides.json', 'utf8'));
const extra = JSON.parse(readFileSync('data/woerter-extra.json', 'utf8'));
const vocab = JSON.parse(readFileSync('data/vocab.json', 'utf8'));

const out = [];
const seen = new Set();
const issues = [];
const addWord = (de, ar, cat, src, fallback, pos = 'noun') => {
  if (seen.has(de)) return;
  seen.add(de);
  if (pos !== 'noun') { out.push({ de, art: null, pl: '', gen: '', ar, cat, pluralOnly: false, src, pos }); return; }
  const c = byLemma.get(de);
  const o = overrides[de] || {};
  const genus = o.genus || c?.genus || '';
  const art = o.art || fallback?.art || ART[genus] || null;
  const pl = o.pl !== undefined ? o.pl : (c?.pl || fallback?.pl || '');
  const pluralOnly = !!o.pluralOnly || !!fallback?.pluralOnly || (!art && !!pl);
  if (!pluralOnly && !art) { issues.push('NO ARTICLE: ' + de); return; }
  out.push({ de, art: pluralOnly ? null : art, pl: pluralOnly ? '' : pl, gen: o.gen || c?.gen || '', ar, cat, pluralOnly, src, pos });
};

for (const w of vocab.words) addWord(w.de, w.ar, w.topic, 'vocab', { art: w.art, pl: w.plural });
for (const w of extra) addWord(w.de, w.ar, w.cat, 'extra');
// frequency-ranked expansion batches: data/woerter-freq<N>.json, entries { de, ar, pos, cat? }
// selection source: Hermit Dave FrequencyWords de_50k (CC BY-SA 4.0, OpenSubtitles2018); meanings authored in-house
const freqFiles = readdirSync('data').filter((f) => /^woerter-freq\d+\.json$/.test(f)).sort();
for (const f of freqFiles) {
  for (const w of JSON.parse(readFileSync('data/' + f, 'utf8'))) addWord(w.de, w.ar, w.cat || 'freq', f.replace('.json', ''), { art: w.art, pl: w.pl, pluralOnly: w.pluralOnly }, w.pos || 'noun');
}

out.sort((a, b) => a.de.localeCompare(b.de, 'de'));
mkdirSync('src/lib/generated', { recursive: true });
writeFileSync('src/lib/generated/woerter.json', JSON.stringify(out));
console.log('words written:', out.length, '| skipped:', issues.length);
if (issues.length) console.log(issues.slice(0, 40).join('\n'));
// article comparison report for repo vocab
let mismatch = 0;
for (const w of vocab.words) {
  const c = byLemma.get(w.de);
  if (c?.genus && ART[c.genus] !== w.art) { if (mismatch++ < 30) console.log('ART MISMATCH', w.de, 'vocab:', w.art, 'csv:', ART[c.genus]); }
}
console.log('article mismatches (vocab vs csv):', mismatch);
