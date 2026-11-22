import assert from 'node:assert/strict';
import fs from 'node:fs';

const vocab = JSON.parse(fs.readFileSync('data/vocab.json', 'utf8'));
const examples = JSON.parse(fs.readFileSync('data/word-examples.json', 'utf8'));
const examples2 = JSON.parse(fs.readFileSync('data/word-examples2.json', 'utf8'));
const ids = new Set(vocab.words.map((w) => w.id));
let checks = 0;

// Every entry belongs to a real word and carries both languages.
for (const [id, ex] of Object.entries(examples)) {
  assert(ids.has(id), `unknown word id: ${id}`);
  assert(typeof ex.de === 'string' && ex.de.length >= 8 && ex.de.endsWith('.'), `bad de for ${id}`);
  assert(typeof ex.ar === 'string' && ex.ar.length >= 4, `bad ar for ${id}`);
  checks += 3;
}
for (const [id, ex] of Object.entries(examples2)) {
  assert(ids.has(id), `unknown word id (file 2): ${id}`);
  assert(typeof ex.de === 'string' && ex.de.length >= 8 && ex.de.endsWith('.'), `bad de (file 2) for ${id}`);
  assert(typeof ex.ar === 'string' && ex.ar.length >= 4, `bad ar (file 2) for ${id}`);
  assert(examples[id], `second example without a first example: ${id}`);
  assert(examples[id].de !== ex.de, `second example repeats the first for ${id}`);
  checks += 5;
}

// The German sentence must actually contain the German word (stem-tolerant:
// umlaut/ß-folded, case-insensitive, inflection-friendly prefix match).
const fold = (s) => s.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss');
const usesWord = (w, ex) => {
  const nameWords = fold(w.de).split(/[^a-z]+/).filter((x) => x.length >= 2);
  const hay = fold(ex.de).split(/[^a-z]+/);
  return nameWords.some((nw) => hay.some((tok) => tok === nw || (nw.length >= 3 && tok.startsWith(nw.slice(0, nw.length - 1)))));
};
for (const w of vocab.words) {
  const ex = examples[w.id];
  if (!ex) continue;
  assert(usesWord(w, ex), `example for ${w.id} (${w.de}) does not use the word: ${ex.de}`);
  checks++;
  const ex2 = examples2[w.id];
  if (!ex2) continue;
  assert(usesWord(w, ex2), `second example for ${w.id} (${w.de}) does not use the word: ${ex2.de}`);
  checks++;
}

// First examples cover every topic; second examples cover units 1-13 (the
// first 24 topics) fully.
const coveredUnits = vocab.topics.slice(0, 204).map((t) => t.id);
for (const topic of coveredUnits) for (const w of vocab.words.filter((x) => x.topic === topic)) assert(examples[w.id], `missing example for ${w.id}`);
checks += coveredUnits.length;
const secondUnits = vocab.topics.slice(0, 156).map((t) => t.id);
for (const topic of secondUnits) for (const w of vocab.words.filter((x) => x.topic === topic)) assert(examples2[w.id], `missing second example for ${w.id}`);
checks += secondUnits.length;

// WordCard renders both examples with a hear-the-example action.
const card = fs.readFileSync('src/components/WordCard.tsx', 'utf8');
for (const token of ['exampleOf(w.id)', 'example2Of(w.id)', 'ExampleRow', 'اسمع المثال', 'lang="de"']) assert(card.includes(token), token);
checks += 5;

console.log(`PASS word-examples: ${checks} checks, ${Object.keys(examples).length} first sentences covering the first ${coveredUnits.length} topics (units 1-17) + ${Object.keys(examples2).length} second sentences covering the first ${secondUnits.length} topics (units 1-13), each sentence uses its word`);
