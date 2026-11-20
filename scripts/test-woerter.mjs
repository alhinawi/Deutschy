// Validates src/lib/generated/woerter.json: known articles/plurals + structure.
import { readFileSync } from 'node:fs';
const words = JSON.parse(readFileSync(new URL('../src/lib/generated/woerter.json', import.meta.url)));
const byDe = new Map(words.map((w) => [w.de, w]));
let fails = 0;
const check = (de, art, pl) => {
  const w = byDe.get(de);
  if (!w) { console.error('MISSING', de); fails++; return; }
  if (art !== undefined && w.art !== art) { console.error('ART', de, 'got', w.art, 'want', art); fails++; }
  if (pl !== undefined && w.pl !== pl) { console.error('PLURAL', de, 'got', w.pl, 'want', pl); fails++; }
};
check('Mann','der','Männer'); check('Frau','die','Frauen'); check('Kind','das','Kinder');
check('Apfel','der','Äpfel'); check('Haus','das','Häuser'); check('Zeit','die','Zeiten');
check('Auto','das','Autos'); check('Jahr','das','Jahre'); check('Hand','die','Hände');
check('Arbeit','die','Arbeiten'); check('Schule','die','Schulen'); check('Sonne','die','Sonnen');
check('Wasser','das'); check('Butter','die'); check('Paprika','die'); check('Leiter','die');
check('Schnitzel','das'); check('Kiwi','die'); check('Name','der','Namen'); check('Herz','das','Herzen');
check('Geld','das','Gelder'); check('Zahn','der','Zähne'); check('Stadt','die','Städte');
check('Baum','der','Bäume'); check('Nacht','die','Nächte'); check('Maus','die','Mäuse');
const eltern = byDe.get('Eltern'); if (!eltern || !eltern.pluralOnly) { console.error('Eltern should be plural-only'); fails++; }
const seen = new Set();
for (const w of words) {
  if (seen.has(w.de)) { console.error('DUP', w.de); fails++; }
  seen.add(w.de);
  if (!w.de || !w.ar || !w.cat) { console.error('SHAPE', w.de); fails++; }
  if (!w.pluralOnly && !['der','die','das'].includes(w.art)) { console.error('ART SHAPE', w.de, w.art); fails++; }
}
if (words.length < 1500) { console.error('TOO FEW', words.length); fails++; }
if (fails) { console.error(fails + ' failures'); process.exit(1); }
console.log('woerter OK:', words.length, 'words, articles and plurals verified');
