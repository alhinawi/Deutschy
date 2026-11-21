import assert from 'node:assert/strict';
import fs from 'node:fs';

const vocab = JSON.parse(fs.readFileSync('data/vocab.json', 'utf8'));
const examples = JSON.parse(fs.readFileSync('data/word-examples.json', 'utf8'));
const ids = new Set(vocab.words.map((w) => w.id));
let checks = 0;

// Every entry belongs to a real word and carries both languages.
for (const [id, ex] of Object.entries(examples)) {
  assert(ids.has(id), `unknown word id: ${id}`);
  assert(typeof ex.de === 'string' && ex.de.length >= 8 && ex.de.endsWith('.'), `bad de for ${id}`);
  assert(typeof ex.ar === 'string' && ex.ar.length >= 4, `bad ar for ${id}`);
  checks += 3;
}

// The German sentence must actually contain the German word (stem-tolerant:
// umlaut/ß-folded, case-insensitive, inflection-friendly prefix match).
const fold = (s) => s.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss');
for (const w of vocab.words) {
  const ex = examples[w.id];
  if (!ex) continue;
  const nameWords = fold(w.de).split(/[^a-z]+/).filter((x) => x.length >= 2);
  const hay = fold(ex.de).split(/[^a-z]+/);
  const hit = nameWords.some((nw) => hay.some((tok) => tok === nw || (nw.length >= 3 && tok.startsWith(nw.slice(0, nw.length - 1)))));
  assert(hit, `example for ${w.id} (${w.de}) does not use the word: ${ex.de}`);
  checks++;
}

// Units 1-4 (the first 48 topics) are fully covered.
const coveredUnits = vocab.topics.slice(0, 48).map((t) => t.id);
for (const topic of coveredUnits) for (const w of vocab.words.filter((x) => x.topic === topic)) assert(examples[w.id], `missing example for ${w.id}`);
checks += coveredUnits.length;

// WordCard renders the example with a hear-the-example action.
const card = fs.readFileSync('src/components/WordCard.tsx', 'utf8');
for (const token of ['exampleOf(w.id)', 'playEx', 'اسمع المثال', 'exStatusId', 'lang="de"']) assert(card.includes(token), token);
checks += 5;

console.log(`PASS word-examples: ${checks} checks, ${Object.keys(examples).length} example sentences covering the first ${coveredUnits.length} topics (units 1-4), each sentence uses its word`);
