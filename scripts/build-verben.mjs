// Builds src/lib/generated/verben.json for the /konjugation/ section.
// Conjugation source: german-verbs-dict (npm, Apache-2.0, https://github.com/rosae-group/german-verbs-dict),
// itself based on german-pos-dict. Meanings in Egyptian Arabic are authored in data/verben-quelle/*.json.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const dict = require('german-verbs-dict/dist/verbs.json');
// Second conjugation source: kaikki.org German Wiktionary extract (CC BY-SA 4.0,
// https://kaikki.org/dewiktionary/), prefiltered to complete verified paradigms.
const kaikki = JSON.parse(readFileSync('data/verben-kaikki.json', 'utf8'));

const LEVELS = { 'a1a.json': 'A1', 'a2a.json': 'A2', 'b1a.json': 'B1', 'b2c.json': 'B2', 'c1.json': 'C1' };
const MODALS = new Set(['dürfen','können','mögen','müssen','sollen','wollen']);
const MIXED = new Set(['bringen','denken','wissen','kennen','nennen','rennen','senden','wenden','brennen']);
// Verbs that build Perfekt with sein (movement / change of state / a few others)
const SEIN = new Set(('sein werden bleiben gehen kommen fahren fliegen laufen reisen wandern ziehen steigen springen fallen sterben wachsen passieren geschehen gelingen glücken misslingen verschwinden erscheinen entstehen vergehen einschlafen aufwachen aufstehen umziehen einziehen ausziehen begegnen folgen entkommen entgehen entlaufen fliehen rennen klettern kriechen hüpfen schwimmen tauchen sinken schreiten gleiten rutschen landen starten auftauchen untergehen aufgehen explodieren treten stürzen schweben driften irren pilgern ziehen entstehen geschehen wiedersehen').split(' '));
const SEP_PREFIXES = ['zusammen','zurück','zwischen','hinterher','entgegen','voraus','vorbei','voran','weiter','wieder','darauf','dabei','dazu','davon','darüber','heraus','hinein','herum','hinauf','hinunter','hinaus','herbei','fort','los','nieder','innen','inne','empor','fehl','statt','teil','beiseite','ab','an','auf','aus','bei','da','dar','ein','her','hin','mit','nach','vor','weg','zu','um','über','unter','durch'];
const INSEP = /^(be|emp|ent|er|ge|miss|ver|zer|über|unter|durch|um|hinter|wider|wieder|voll)/;

const files = readdirSync('data/verben-quelle').filter((f) => f.endsWith('.json')).sort();
const entries = [];
const seen = new Set();
for (const f of files) {
  for (const [inf, ar] of JSON.parse(readFileSync('data/verben-quelle/' + f, 'utf8'))) {
    if (seen.has(inf)) continue;
    seen.add(inf);
    entries.push({ inf, ar, lvl: LEVELS[f] ?? 'C1' });
  }
}

const lookup = (inf) => {
  const tries = [inf, inf.replace(/ /g, ''), inf.split(' ').reverse().join(' '), inf.split(' ').reverse().join('')];
  if (inf.startsWith('sich ')) tries.push(inf.slice(5));
  for (const k of tries) if (dict[k]) return { key: k, d: dict[k] };
  return null;
};
const six = (t) => {
  try { return t ? [t.S['1'], t.S['2'], t.S['3'], t.P['1'], t.P['2'], t.P['3']] : null; }
  catch { return null; } // incomplete paradigm in the source dictionary
};
const REVERSED = new Set(['kennen lernen', 'spazieren gehen', 'bleiben stehen', 'stehen bleiben']);
const join = (f) => (Array.isArray(f) ? f.join(' ') : f);
const joinFor = (inf) => (f) => (Array.isArray(f) ? (REVERSED.has(inf) ? [...f].reverse().join(' ') : f.join(' ')) : f);

const patches = JSON.parse(readFileSync('data/verben-patches.json', 'utf8'));
// Modern German spelling (post-1996): ß -> ss after a short vowel before t or word end.
// The source dictionary mixes in pre-reform spellings (muß, paßte, schloß).
const SS_KEEP = new Set(['aß', 'aßt', 'besaß', 'besaßt', 'maß', 'maßt', 'saß', 'saßt', 'vergaß', 'vergaßt', 'stoßt', 'stößt']);
const SS_LONG = /(ie|ei|ai|au|eu|äu|ah|eh|ih|oh|uh|äh|öh|üh|aa|ee|oo)ß/;
const fixSpelling = (form) => typeof form === 'string' ? form.split(' ').map((tok) => {
  if (SS_KEEP.has(tok) || SS_LONG.test(tok) || tok.startsWith('begrüß') || tok.includes('öß')) return tok;
  return tok.replace(/([aeiouäöü])ß(?=t|$)/g, '$1ss');
}).join(' ') : form;

const missing = [];
const out = [];
for (const { inf, ar, lvl } of entries) {
  if (patches[inf]) {
    const p = patches[inf];
    out.push({ inf, ar, lvl, kinds: p.kinds, aux: p.aux, pres: p.pres, pret: p.pret, kj2: p.kj2, imp: p.imp, pp: p.pp });
    continue;
  }
  const hit = lookup(inf);
  if (!hit) {
    const k = kaikki[inf];
    if (!k) { missing.push(inf); continue; }
    const refl = inf.startsWith('sich ');
    const base = refl ? inf.slice(5) : inf;
    const separable = k.pres[0].replace(/ (mich|dich|sich|uns|euch)$/, '').includes(' ');
    const firstPret = k.pret[0].split(' ')[0];
    const cat = MODALS.has(base) ? 'modal' : (!firstPret.endsWith('te') ? 'strong' : 'regular');
    const kinds = [cat];
    if (MODALS.has(base)) kinds.push('modal-trait');
    if (separable) kinds.push('separable');
    if (refl) kinds.push('reflexive');
    out.push({ inf, ar, lvl, kinds, aux: k.aux, pres: k.pres.map(fixSpelling), pret: k.pret.map(fixSpelling), kj2: k.kj2.map(fixSpelling), imp: k.imp.map(fixSpelling), pp: fixSpelling(k.pp) });
    continue;
  }
  const { d } = hit;
  const refl = inf.startsWith('sich ');
  const base = refl ? inf.slice(5) : inf;
  const presRaw = six(d.PRÄ), pretRaw = six(d.PRT), kj2Raw = six(d.KJ2);
  if (!presRaw || !pretRaw || !kj2Raw) {
    const p = patches[inf];
    if (!p && kaikki[inf]) {
      const k = kaikki[inf];
      const separable = k.pres[0].replace(/ (mich|dich|sich|uns|euch)$/, '').includes(' ');
      const cat = MODALS.has(base) ? 'modal' : (!k.pret[0].split(' ')[0].endsWith('te') ? 'strong' : 'regular');
      const kinds = [cat];
      if (separable) kinds.push('separable');
      if (refl) kinds.push('reflexive');
      out.push({ inf, ar, lvl, kinds, aux: k.aux, pres: k.pres.map(fixSpelling), pret: k.pret.map(fixSpelling), kj2: k.kj2.map(fixSpelling), imp: k.imp.map(fixSpelling), pp: fixSpelling(k.pp) });
      continue;
    }
    if (!p) { missing.push(inf + ' (incomplete paradigm)'); continue; }
    out.push({ inf, ar, lvl, kinds: p.kinds, aux: p.aux, pres: p.pres, pret: p.pret, kj2: p.kj2, imp: p.imp, pp: p.pp });
    continue;
  }
  const separable = presRaw.some(Array.isArray);
  const jf = joinFor(inf); const pres = presRaw.map(jf), pret = pretRaw.map(jf), kj2 = kj2Raw ? kj2Raw.map(jf) : null;
  let imp = d.IMP ? [d.IMP.S, d.IMP.P] : null;
  if (separable && presRaw[0][1]) {
    const prefix = presRaw[0][1];
    const baseInf = base.startsWith(prefix) ? base.slice(prefix.length) : base;
    if (!imp && dict[baseInf] && dict[baseInf].IMP) imp = [dict[baseInf].IMP.S + ' ' + prefix, dict[baseInf].IMP.P + ' ' + prefix];
  }
  const pp = d.PA2 && d.PA2[0];
  if (refl) {
    const RP = ['mich', 'dich', 'sich', 'uns', 'euch', 'sich'];
    for (let i = 0; i < 6; i++) { pres[i] += ' ' + RP[i]; pret[i] += ' ' + RP[i]; if (kj2) kj2[i] += ' ' + RP[i]; }
    if (imp) imp = [imp[0] + ' dich', imp[1] + ' euch'];
  }
  if (inf === 'kennen lernen') imp = ['lerne kennen', 'lernt kennen'];
  // auxiliary: separable-prefix inheritance and space-joined tokens, else curated list, else haben
  let aux = 'haben';
  const tokenSein = base.split(' ').some((tok) => SEIN.has(tok));
  let sepBase = null;
  if (!INSEP.test(base)) {
    for (const p of SEP_PREFIXES) if (base.startsWith(p) && base.length > p.length + 2 && SEIN.has(base.slice(p.length))) { sepBase = base.slice(p.length); break; }
  }
  if (SEIN.has(base) || tokenSein || sepBase) aux = 'sein';
  if (refl) aux = 'haben';
  // kind: modal > regular/strong/irregular by Präteritum; separable/reflexive are extra traits
  const prt1 = Array.isArray(pretRaw[0]) ? pretRaw[0][0] : pretRaw[0];
  const cat = MODALS.has(base) ? 'modal' : (!prt1.endsWith('te') ? 'strong' : (MIXED.has(base) || base === 'haben' || base === 'sein' || base === 'werden' ? 'irregular' : 'regular'));
  const kinds = [cat];
  if (MODALS.has(base)) kinds.push('modal-trait');
  if (separable) kinds.push('separable');
  if (refl) kinds.push('reflexive');
  const ppOut = separable && pp && !pp.startsWith(presRaw[0][1]) ? presRaw[0][1] + pp : pp;
  out.push({ inf, ar, lvl, kinds, aux, pres: pres.map(fixSpelling), pret: pret.map(fixSpelling), kj2: kj2 && kj2.map(fixSpelling), imp: imp && imp.map(fixSpelling), pp: fixSpelling(ppOut) });
}

if (missing.length) { console.error('MISSING (' + missing.length + '):'); console.error(missing.join('\n')); }
out.sort((a, b) => a.inf.localeCompare(b.inf, 'de'));
mkdirSync('src/lib/generated', { recursive: true });
writeFileSync('src/lib/generated/verben.json', JSON.stringify(out));
console.log('verbs written:', out.length, '| missing:', missing.length);
