import assert from 'node:assert/strict';
import fs from 'node:fs';

const first = JSON.parse(fs.readFileSync('data/word-examples.json', 'utf8'));
const second = JSON.parse(fs.readFileSync('data/word-examples2.json', 'utf8'));

// Protect reviewed distinctions that the structural coverage test cannot detect.
// Location: river, swimming pool, puddle and pond are different places.
assert(first.kieselstein.ar.includes('النهر'));
assert(!first.kieselstein.ar.includes('البحر'));
assert(first.schwimmring.ar.includes('حمام السباحة'));
assert(first.papierschiffchen.ar.includes('بركة ميه'));
assert(!first.papierschiffchen.ar.includes('الطين'));
for (const entry of [first.molch, second.kroete]) assert(entry.ar.includes('البركة'));

// An ignition is not a fall; easily is not slightly; evening is not night.
assert(first.streichholz.ar.includes('بيولع'));
assert(first.muschel.ar.includes('بسهولة'));
for (const entry of [first.amsel, second.gecko]) assert(entry.ar.includes('المسا'));

// A maraca rattles when shaken. It is not a squeeze toy.
assert(second.rumbakugel.de.includes('rasselt'));
assert(second.rumbakugel.de.includes('Schütteln'));
assert(second.rumbakugel.ar.includes('بتخشخش'));
assert(first.rumbakugel.de.includes('schüttle'));

// Keep the German subject and the Egyptian Arabic meaning aligned.
assert(first.schneckenhaus.de.startsWith('Die Schnecke'));
assert(first.schneckenhaus.ar.includes('الحلزون شايل'));
assert(first.skorpion.ar.includes('إبرة سامة'));
assert(first.quitte.ar.includes('بتتاكل'));
assert(first.brotfrucht.ar.includes('بتتاكل'));
assert(second.naehgarn.ar.includes('علبة الخياطة'));
console.log('PASS 21 bilingual meaning regressions for the reviewed units 12-17 examples');
