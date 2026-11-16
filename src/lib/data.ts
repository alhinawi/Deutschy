import raw from '../../data/vocab.json';
import enRaw from '../../data/en.json';

export type Photo = { file: string; page: string; commons: string; license: string; author: string };
export type Word = {
  id: string; topic: string; art: 'der' | 'die' | 'das'; de: string; plural: string; ar: string; photo: Photo;
};
export type Topic = { id: string; ar: string };

export const topics: Topic[] = raw.topics;
export const words = raw.words as Word[];

export const topicTitles: Record<string, string> = {
  family: 'Familie', food: 'Essen', drinks: 'Getränke', house: 'Haus', places: 'Stadt', transport: 'Verkehr',
  kitchen: 'Küche 2', devices: 'Geräte', outdoors: 'Draußen', town: 'Dorf & Stadt', clothes: 'Kleidung', animals: 'Tiere', body: 'Körper', school: 'Schule & Büro', nature: 'Natur', jobs: 'Berufe',
  obst: 'Obst & Gemüse', tiere2: 'Tiere 2', moebel: 'Möbel & Haus', werkzeug: 'Werkzeug & Dinge', sport: 'Sport & Musik',
};
export const topicEn: Record<string, string> = {
  family: 'Family', food: 'Food', drinks: 'Drinks', house: 'House', places: 'Places', transport: 'Transport', clothes: 'Clothes', animals: 'Animals', body: 'Body', school: 'School and office', nature: 'Nature', jobs: 'Jobs', kitchen: 'Kitchen and food 2', devices: 'Devices and things', outdoors: 'Outdoors', town: 'Village and city',
  obst: 'Fruit and vegetables 2', tiere2: 'Animals 2', moebel: 'Furniture and home items', werkzeug: 'Tools and objects', sport: 'Sport and music',
};
export const glossOf = (w: Word, lang: 'ar' | 'en') => (lang === 'en' ? (enRaw as Record<string, string>)[w.id] ?? w.ar : w.ar);
export const topicName = (id: string, lang: 'ar' | 'en') => (lang === 'en' ? topicEn[id] : topics.find((t) => t.id === id)?.ar ?? id);
export const wordsOf = (topic: string) => words.filter((w) => w.topic === topic);
export const withArticle = (w: Word) => `${w.art} ${w.de}`;
export const pluralText = (w: Word, lang: 'ar' | 'en' = 'ar') => (w.plural === '-' ? 'die ' + w.de + (lang === 'ar' ? ' (نفس الشكل)' : ' (same form)') : 'die ' + w.plural);
export const img = (w: Word) => `/img/${w.id}.jpg`;

export const shuffle = <T,>(a: T[]): T[] => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};
export const sample = <T,>(a: T[], n: number) => shuffle(a).slice(0, n);
