// Validates src/lib/generated/verben.json against known-correct paradigms.
import { readFileSync } from 'node:fs';
const verbs = JSON.parse(readFileSync(new URL('../src/lib/generated/verben.json', import.meta.url)));
const byInf = new Map(verbs.map((v) => [v.inf, v]));
let fails = 0;
const eq = (inf, field, expected) => {
  const v = byInf.get(inf);
  if (!v) { console.error('MISSING VERB', inf); fails++; return; }
  const got = JSON.stringify(v[field]);
  if (got !== JSON.stringify(expected)) { console.error('MISMATCH', inf, field, 'got', got, 'want', JSON.stringify(expected)); fails++; }
};
// Full Präsens paradigms for the most important verbs (ich, du, er/sie/es, wir, ihr, sie/Sie)
eq('sein', 'pres', ['bin','bist','ist','sind','seid','sind']);
eq('haben', 'pres', ['habe','hast','hat','haben','habt','haben']);
eq('werden', 'pres', ['werde','wirst','wird','werden','werdet','werden']);
eq('können', 'pres', ['kann','kannst','kann','können','könnt','können']);
eq('müssen', 'pres', ['muss','musst','muss','müssen','müsst','müssen']);
eq('dürfen', 'pres', ['darf','darfst','darf','dürfen','dürft','dürfen']);
eq('sollen', 'pres', ['soll','sollst','soll','sollen','sollt','sollen']);
eq('wollen', 'pres', ['will','willst','will','wollen','wollt','wollen']);
eq('mögen', 'pres', ['mag','magst','mag','mögen','mögt','mögen']);
eq('wissen', 'pres', ['weiß','weißt','weiß','wissen','wisst','wissen']);
eq('gehen', 'pres', ['gehe','gehst','geht','gehen','geht','gehen']);
eq('nehmen', 'pres', ['nehme','nimmst','nimmt','nehmen','nehmt','nehmen']);
eq('sehen', 'pres', ['sehe','siehst','sieht','sehen','seht','sehen']);
eq('geben', 'pres', ['gebe','gibst','gibt','geben','gebt','geben']);
eq('kommen', 'pres', ['komme','kommst','kommt','kommen','kommt','kommen']);
eq('sprechen', 'pres', ['spreche','sprichst','spricht','sprechen','sprecht','sprechen']);
eq('arbeiten', 'pres', ['arbeite','arbeitest','arbeitet','arbeiten','arbeitet','arbeiten']);
eq('öffnen', 'pres', ['öffne','öffnest','öffnet','öffnen','öffnet','öffnen']);
eq('studieren', 'pres', ['studiere','studierst','studiert','studieren','studiert','studieren']);
eq('ankommen', 'pres', ['komme an','kommst an','kommt an','kommen an','kommt an','kommen an']);
eq('sich freuen', 'pres', ['freue mich','freust dich','freut sich','freuen uns','freut euch','freuen sich']);
// Präteritum first person
eq('gehen', 'pret', ['ging','gingst','ging','gingen','gingt','gingen']);
eq('arbeiten', 'pret', ['arbeitete','arbeitetest','arbeitete','arbeiteten','arbeitetet','arbeiteten']);
eq('sein', 'pret', ['war','warst','war','waren','wart','waren']);
eq('haben', 'pret', ['hatte','hattest','hatte','hatten','hattet','hatten']);
eq('bringen', 'pret', ['brachte','brachtest','brachte','brachten','brachtet','brachten']);
eq('sich freuen', 'pret', ['freute mich','freutest dich','freute sich','freuten uns','freutet euch','freuten sich']);
// Konjunktiv II spot checks
eq('haben', 'kj2', ['hätte','hättest','hätte','hätten','hättet','hätten']);
eq('sein', 'kj2', ['wäre','wärst','wäre','wären','wärt','wären']);
eq('mögen', 'kj2', ['möchte','möchtest','möchte','möchten','möchtet','möchten']);
eq('können', 'kj2', ['könnte','könntest','könnte','könnten','könntet','könnten']);
// Partizip II + auxiliary
for (const [inf, pp, aux] of [['gehen','gegangen','sein'],['arbeiten','gearbeitet','haben'],['ankommen','angekommen','sein'],['studieren','studiert','haben'],['besuchen','besucht','haben'],['verstehen','verstanden','haben'],['mitkommen','mitgekommen','sein'],['aufstehen','aufgestanden','sein'],['bleiben','geblieben','sein'],['sterben','gestorben','sein'],['bekommen','bekommen','haben']]) {
  const v = byInf.get(inf);
  if (!v || v.pp !== pp || v.aux !== aux) { console.error('PP/AUX MISMATCH', inf, v && (v.pp + '/' + v.aux), 'want', pp + '/' + aux); fails++; }
}
// Structural checks on every entry
const ids = new Set();
const LV = new Set(['A1','A2','B1','B2','C1']);
const KN = new Set(['regular','strong','irregular','modal','modal-trait','separable','reflexive']);
for (const v of verbs) {
  if (ids.has(v.inf)) { console.error('DUPLICATE', v.inf); fails++; }
  ids.add(v.inf);
  if (!LV.has(v.lvl) || !v.ar || !v.pp || !Array.isArray(v.pres) || v.pres.length !== 6 || !Array.isArray(v.pret) || v.pret.length !== 6) { console.error('SHAPE', v.inf); fails++; }
  if (v.kj2 && v.kj2.length !== 6) { console.error('KJ2 SHAPE', v.inf); fails++; }
  if (v.imp && v.imp.length !== 2) { console.error('IMP SHAPE', v.inf); fails++; }
  if (!['haben','sein'].includes(v.aux)) { console.error('AUX', v.inf); fails++; }
  for (const k of v.kinds) if (!KN.has(k)) { console.error('KIND', v.inf, k); fails++; }
  if (v.pres.some((f) => typeof f !== 'string' || !f.trim())) { console.error('EMPTY FORM', v.inf); fails++; }
}
if (verbs.length < 800) { console.error('TOO FEW VERBS', verbs.length); fails++; }
if (fails) { console.error(fails + ' failures'); process.exit(1); }
console.log('verben OK:', verbs.length, 'verbs, all paradigms verified');
