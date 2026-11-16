import fs from 'node:fs';
const d = JSON.parse(fs.readFileSync('data/vocab.json', 'utf8'));
let bad = 0;
const ids = new Set();
for (const w of d.words) {
  const fail = (m) => { console.error('FAIL', w.id, m); bad++; };
  if (ids.has(w.id)) fail('duplicate id'); ids.add(w.id);
  if (!['der', 'die', 'das'].includes(w.art)) fail('article');
  if (!w.de || !w.ar || w.plural === undefined) fail('missing text');
  if (!fs.existsSync(`public/img/${w.id}.jpg`)) fail('missing photo');
  if (!w.photo?.license || !w.photo?.commons) fail('missing credit');
}
const topicIds = new Set(d.topics.map((t) => t.id));
for (const w of d.words) if (!topicIds.has(w.topic)) { console.error('FAIL topic', w.id); bad++; }
console.log(`${d.words.length} words, ${d.topics.length} topics, ${bad} problems`);
process.exit(bad ? 1 : 0);
