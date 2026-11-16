import { verbs } from './verbs';
import { PERSONS } from './conj';
import { akk, dat, wechsel } from './praep';
import { wlist } from './negation';
import { sep } from './trennbar';
import { idioms } from './idioms';
import { caseName, defArt, indefArt, endDef, endIndef, endZero, gName, type Case, type G } from './kasus';
import { numWord, months, monthsAr, days, daysAr } from './zahlen';

export type Table = { h: string[]; r: string[][] };
export type Block = { h: [string, string]; note?: [string, string]; table?: Table; lines?: { de: string; ar?: string }[] };
export type Sheet = { id: string; title: [string, string]; sub: [string, string]; blocks: Block[] };

const C: Case[] = ['nom', 'akk', 'dat'];
const GS: (G | 'p')[] = ['m', 'f', 'n', 'p'];
const artTable = (src: Record<Case, Record<G | 'p', string>>): Table => ({ h: ['', 'm', 'f', 'n', 'Pl.'], r: C.map((c) => [caseName[c][0], ...GS.map((g) => src[c][g])]) });
const core = ['sein', 'haben', 'werden', 'können', 'müssen', 'wollen', 'sollen', 'dürfen', 'machen', 'wohnen', 'arbeiten', 'fahren', 'sprechen', 'lesen', 'sehen', 'geben', 'nehmen', 'essen', 'schlafen', 'wissen'];

import { sheetIds } from './sheet-ids';
export const sheets: Sheet[] = [
  { id: 'praesens', title: ['ورقة تصريف Präsens', 'Präsens conjugation sheet'], sub: ['الأفعال الأساسية في المضارع', 'The core verbs in the present tense'],
    blocks: [{ h: ['التصريف', 'Conjugation'], table: { h: ['Infinitiv', ...PERSONS], r: core.map((i) => verbs.find((v) => v.inf === i)).filter((v) => !!v).map((v) => [v!.inf, ...v!.pres]) } }] },
  { id: 'kasus', title: ['ورقة الحالات', 'Cases sheet'], sub: ['Nominativ, Akkusativ, Dativ', 'Nominativ, Akkusativ, Dativ'],
    blocks: [
      { h: ['أداة التعريف', 'Definite article'], table: artTable(defArt) },
      { h: ['أداة التنكير', 'Indefinite article'], table: artTable(indefArt) },
      { h: ['الجنس', 'Gender'], lines: (['m', 'f', 'n'] as G[]).map((g) => ({ de: `${g} = ${gName[g][0]}`, ar: gName[g][1] })) },
    ] },
  { id: 'adjektivendungen', title: ['ورقة نهايات الصفات', 'Adjective endings sheet'], sub: ['نهاية الصفة بعد الأداة', 'The ending after the article'],
    blocks: [
      { h: ['بعد der / die / das', 'After der / die / das'], table: artTable(endDef) },
      { h: ['بعد ein / eine', 'After ein / eine'], table: artTable(endIndef) },
      { h: ['من غير أداة', 'No article'], table: artTable(endZero) },
    ] },
  { id: 'praepositionen', title: ['ورقة حروف الجر', 'Prepositions sheet'], sub: ['Akkusativ, Dativ, Wechselpräpositionen', 'Akkusativ, Dativ, two-way prepositions'],
    blocks: [
      { h: ['Akkusativ', 'Akkusativ'], table: { h: ['', '', ''], r: akk.map((p) => [p[0], p[1], p[3]]) } },
      { h: ['Dativ', 'Dativ'], table: { h: ['', '', ''], r: dat.map((p) => [p[0], p[1], p[3]]) } },
      { h: ['Wechselpräpositionen', 'Two-way prepositions'], note: ['wo? بيجي مع Dativ. wohin? بيجي مع Akkusativ.', 'Wo? takes Dativ. Wohin? takes Akkusativ.'], table: { h: ['', 'Wo? (Dativ)', 'Wohin? (Akkusativ)'], r: wechsel.map((p) => [p.p, p.wo[0], p.wohin[0]]) } },
    ] },
  { id: 'negation', title: ['ورقة النفي والأسئلة', 'Negation and questions sheet'], sub: ['nicht, kein, W-Fragen', 'nicht, kein, W-Fragen'],
    blocks: [
      { h: ['nicht / kein', 'nicht / kein'], lines: [{ de: 'kein + Nomen: Ich habe kein Auto.', ar: 'بننفي الاسم اللي معاه ein أو من غير أداة' }, { de: 'nicht: Ich komme nicht.', ar: 'بننفي الفعل أو الصفة أو الاسم اللي معاه der أو mein' }, { de: 'Ich habe das Buch nicht gelesen.', ar: 'nicht قبل الجزء الأخير من الفعل' }] },
      { h: ['W-Fragen', 'Question words'], table: { h: ['', '', ''], r: wlist.map((w) => [w[0], w[1], w[3]]) } },
    ] },
  { id: 'trennbare-verben', title: ['ورقة الأفعال المنفصلة', 'Separable verbs sheet'], sub: ['البادئة بتروح آخر الجملة', 'The prefix goes to the end'],
    blocks: [{ h: ['الأفعال', 'Verbs'], table: { h: ['Infinitiv', 'Perfekt', 'Beispiel'], r: sep.map((s) => [s.inf, s.perf, s.ex.replace(/[{}]/g, '')]) } }] },
  { id: 'zahlen', title: ['ورقة الأرقام', 'Numbers sheet'], sub: ['الأرقام والشهور والأيام', 'Numbers, months and days'],
    blocks: [
      { h: ['الأرقام من صفر لحد عشرين', 'Numbers 0 to 20'], table: { h: ['', ''], r: Array.from({ length: 21 }, (_, n) => [String(n), numWord(n)]) } },
      { h: ['العشرات', 'Tens'], table: { h: ['', ''], r: [30, 40, 50, 60, 70, 80, 90, 100, 1000].map((n) => [String(n), numWord(n)]) } },
      { h: ['الشهور', 'Months'], table: { h: ['', ''], r: months.map((m, i) => [m, monthsAr[i]]) } },
      { h: ['الأيام', 'Days'], table: { h: ['', ''], r: days.map((d, i) => [d, daysAr[i]]) } },
    ] },
  { id: 'perfekt', title: ['ورقة الماضي', 'Past tenses sheet'], sub: ['Perfekt und Präteritum', 'Perfekt und Präteritum'],
    blocks: [
      { h: ['القاعدة', 'Rule'], lines: [{ de: 'Perfekt = haben / sein + Partizip II', ar: 'الفعل المساعد في التاني، والتصريفة التالتة في الآخر' }, { de: 'sein: gehen, fahren, kommen, bleiben, werden', ar: 'الحركة وتغيير الحالة' }] },
      { h: ['الأفعال القوية', 'Strong and irregular verbs'], table: { h: ['Infinitiv', 'Präteritum', 'Perfekt'], r: verbs.filter((v) => v.kind === 'strong' || v.kind === 'irregular').sort((a, b) => a.inf.localeCompare(b.inf, 'de')).map((v) => [v.inf, v.pret, `${v.aux === 'sein' ? 'ist' : 'hat'} ${v.pp}`]) } },
    ] },
  { id: 'redewendungen', title: ['ورقة التعبيرات', 'Idioms sheet'], sub: ['تعبيرات ألمانية وتعني إيه', 'German idioms and what they mean'],
    blocks: [{ h: ['التعبيرات', 'Idioms'], table: { h: ['', ''], r: idioms.map((i) => [i.de, i.ar]) } }] },
];
export const sheetOf = (id: string) => sheets.find((s) => s.id === id);
if (sheets.length !== sheetIds.length) throw new Error('sheet ids out of sync');
