export type G = 'm' | 'f' | 'n';
export type Case = 'nom' | 'akk' | 'dat';
export type Noun = { w: string; g: G; pl: string };
// Everyday objects. Gender and plural checked per entry.
export const things: Noun[] = [
  { w: 'Tisch', g: 'm', pl: 'Tische' }, { w: 'Stuhl', g: 'm', pl: 'Stühle' }, { w: 'Schrank', g: 'm', pl: 'Schränke' }, { w: 'Mantel', g: 'm', pl: 'Mäntel' }, { w: 'Garten', g: 'm', pl: 'Gärten' },
  { w: 'Tasche', g: 'f', pl: 'Taschen' }, { w: 'Lampe', g: 'f', pl: 'Lampen' }, { w: 'Blume', g: 'f', pl: 'Blumen' }, { w: 'Jacke', g: 'f', pl: 'Jacken' }, { w: 'Wohnung', g: 'f', pl: 'Wohnungen' }, { w: 'Straße', g: 'f', pl: 'Straßen' },
  { w: 'Buch', g: 'n', pl: 'Bücher' }, { w: 'Auto', g: 'n', pl: 'Autos' }, { w: 'Haus', g: 'n', pl: 'Häuser' }, { w: 'Fenster', g: 'n', pl: 'Fenster' }, { w: 'Bett', g: 'n', pl: 'Betten' }, { w: 'Kleid', g: 'n', pl: 'Kleider' },
];
export const vehicles: Noun[] = [
  { w: 'Bus', g: 'm', pl: 'Busse' }, { w: 'Zug', g: 'm', pl: 'Züge' }, { w: 'Straßenbahn', g: 'f', pl: 'Straßenbahnen' }, { w: 'U-Bahn', g: 'f', pl: 'U-Bahnen' }, { w: 'Auto', g: 'n', pl: 'Autos' }, { w: 'Fahrrad', g: 'n', pl: 'Fahrräder' },
];
export const adjs = ['neu', 'alt', 'groß', 'klein', 'schön', 'gut', 'billig', 'lang', 'kurz', 'hübsch'];

export const caseName: Record<Case, [string, string]> = { nom: ['Nominativ', 'الفاعل'], akk: ['Akkusativ', 'المفعول به'], dat: ['Dativ', 'المفعول له'] };
export const gName: Record<G, [string, string]> = { m: ['maskulin', 'مذكر'], f: ['feminin', 'مؤنث'], n: ['neutral', 'محايد'] };

export const defArt: Record<Case, Record<G | 'p', string>> = {
  nom: { m: 'der', f: 'die', n: 'das', p: 'die' }, akk: { m: 'den', f: 'die', n: 'das', p: 'die' }, dat: { m: 'dem', f: 'der', n: 'dem', p: 'den' },
};
export const indefArt: Record<Case, Record<G | 'p', string>> = {
  nom: { m: 'ein', f: 'eine', n: 'ein', p: 'keine' }, akk: { m: 'einen', f: 'eine', n: 'ein', p: 'keine' }, dat: { m: 'einem', f: 'einer', n: 'einem', p: 'keinen' },
};
// Adjective endings
export const endDef: Record<Case, Record<G | 'p', string>> = {
  nom: { m: 'e', f: 'e', n: 'e', p: 'en' }, akk: { m: 'en', f: 'e', n: 'e', p: 'en' }, dat: { m: 'en', f: 'en', n: 'en', p: 'en' },
};
export const endIndef: Record<Case, Record<G | 'p', string>> = {
  nom: { m: 'er', f: 'e', n: 'es', p: 'en' }, akk: { m: 'en', f: 'e', n: 'es', p: 'en' }, dat: { m: 'en', f: 'en', n: 'en', p: 'en' },
};
export const endZero: Record<Case, Record<G | 'p', string>> = {
  nom: { m: 'er', f: 'e', n: 'es', p: 'e' }, akk: { m: 'en', f: 'e', n: 'es', p: 'e' }, dat: { m: 'em', f: 'er', n: 'em', p: 'en' },
};
export const datPl = (pl: string) => (/[ns]$/.test(pl) ? pl : pl + 'n');
export const cap = (s: string) => s[0].toUpperCase() + s.slice(1);

export const frames: { c: Case; t: string; pool: 'things' | 'vehicles'; pl?: boolean }[] = [
  { c: 'nom', t: 'Ich glaube, {NP} ist hier.', pool: 'things' },
  { c: 'nom', t: 'Ich sehe, dass {NP} fehlt.', pool: 'things' },
  { c: 'akk', t: 'Ich kaufe {NP}.', pool: 'things' },
  { c: 'akk', t: 'Sie braucht {NP}.', pool: 'things' },
  { c: 'akk', t: 'Wir suchen {NP}.', pool: 'things' },
  { c: 'dat', t: 'Die Katze sitzt neben {NP}.', pool: 'things' },
  { c: 'dat', t: 'Die Katze schläft unter {NP}.', pool: 'things' },
  { c: 'dat', t: 'Ich fahre mit {NP}.', pool: 'vehicles' },
];
