const ones = ['null', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
const tens = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];

// Cardinal number in words, 0 to 999999.
export function numWord(n: number, final = true): string {
  if (n < 20) return n === 1 && final ? 'eins' : ones[n];
  if (n < 100) { const u = n % 10; return (u ? ones[u] + 'und' : '') + tens[Math.floor(n / 10)]; }
  if (n < 1000) { const h = Math.floor(n / 100), r = n % 100; return ones[h] + 'hundert' + (r ? numWord(r, final) : ''); }
  const t = Math.floor(n / 1000), r = n % 1000;
  return (t === 1 ? 'ein' : numWord(t, false)) + 'tausend' + (r ? numWord(r, final) : '');
}

const ordIrr: Record<number, string> = { 1: 'ers', 3: 'drit', 7: 'sieb', 8: 'ach' };
// Ordinal stem + ending, 1 to 31. Dative after "am": -ten / -sten.
export function ordWord(n: number, ending = 'en'): string {
  if (n < 20) return (ordIrr[n] ?? numWord(n, false)) + 't' + ending;
  return numWord(n, false) + 'st' + ending;
}

export const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
export const monthsAr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
export const days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
export const daysAr = ['الاتنين', 'التلات', 'الأربع', 'الخميس', 'الجمعة', 'السبت', 'الحد'];
export const dim = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const dateWord = (d: number, m: number) => `am ${ordWord(d)} ${months[m - 1]}`;
export const dateDigits = (d: number, m: number) => `${d}.${m}.`;

export const pad = (n: number) => String(n).padStart(2, '0');
const hw = (h: number, o = false) => (h === 1 ? (o ? 'ein' : 'eins') : numWord(h, false));
// Formal (24 hour) reading.
export function timeFormal(h: number, m: number) { return m === 0 ? `${numWord(h, false)} Uhr` : `${numWord(h, false)} Uhr ${numWord(m)}`; }
// Everyday reading, 12 hour clock.
export function timeInformal(h: number, m: number) {
  const a = h % 12 || 12, b = (h + 1) % 12 || 12;
  switch (m) {
    case 0: return `${hw(a, true)} Uhr`;
    case 5: return `fünf nach ${hw(a)}`;
    case 10: return `zehn nach ${hw(a)}`;
    case 15: return `Viertel nach ${hw(a)}`;
    case 20: return `zwanzig nach ${hw(a)}`;
    case 25: return `fünf vor halb ${hw(b)}`;
    case 30: return `halb ${hw(b)}`;
    case 35: return `fünf nach halb ${hw(b)}`;
    case 40: return `zwanzig vor ${hw(b)}`;
    case 45: return `Viertel vor ${hw(b)}`;
    case 50: return `zehn vor ${hw(b)}`;
    default: return `fünf vor ${hw(b)}`;
  }
}
