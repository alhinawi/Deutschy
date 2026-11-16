import raw from '../../data/vocab.json';
import enRaw from '../../data/en.json';

export type Photo = { file: string; page: string; commons: string; license: string; author: string; padding?: boolean; model?: boolean };
export type Word = {
  id: string; topic: string; art: 'der' | 'die' | 'das'; de: string; plural: string; ar: string; photo: Photo;
};
// Relationships and occupations cannot be identified reliably from appearance alone.
export const contextualPhoto = (w: Pick<Word, 'topic'>) => ['family', 'jobs', 'jobs2'].includes(w.topic);
export type Topic = { id: string; ar: string };

export const topics: Topic[] = raw.topics;
export const words = raw.words as Word[];

export const topicTitles: Record<string, string> = {
  family: 'Familie', food: 'Essen', drinks: 'Getränke', house: 'Haus', places: 'Stadt', transport: 'Verkehr',
  kitchen: 'Küche 2', devices: 'Geräte', outdoors: 'Draußen', town: 'Dorf & Stadt', clothes: 'Kleidung', animals: 'Tiere', body: 'Körper', school: 'Schule & Büro', nature: 'Natur', jobs: 'Berufe',
  obst: 'Obst & Gemüse 2', tiere2: 'Tiere 2', moebel: 'Möbel & Haus', werkzeug: 'Werkzeug & Dinge', sport: 'Sport & Musik',
  kleidung2: 'Kleidung & Zubehör',
  essen2: 'Essen & Trinken 2',
  natur2: 'Natur 2',
  fahrzeuge: 'Fahrzeuge',
  gebaeude: 'Gebäude & Orte',
  tiere3: 'Tiere 3',
  dinge2: 'Alltagsdinge',
  gemuese2: 'Obst & Gemüse 3',
  fleisch: 'Fleisch & Fertiggerichte',
  getraenke2: 'Getränke & Geschirr',
  sehenswert: 'Sehenswürdigkeiten',
  jobs2: 'Berufe 2',
  sport2: 'Sport 2',
  musik: 'Musik',
  haushalt2: 'Haushalt',
  buero: 'Büro & Schule',
  voegel: 'Vögel & Insekten',
  saeuger: 'Tiere 4',
  pflanzen: 'Pflanzen & Blumen',
  landschaft: 'Landschaft',
  medizin: 'Gesundheit',
  technik: 'Technik',
  bauen: 'Bauen & Werkstatt',
  feste: 'Feste',
  verkehr2: 'Verkehr 2',
  kueche2: 'Küchengeräte',
  essen3: 'Essen 3',
  schule2: 'Schule & Büro',
  musik2: 'Musik & Kunst',
  spielzeug: 'Spielzeug',
  koerper2: 'Körper 2',
  essen4: 'Essen 4',
  tiere5: 'Tiere 5',
  orte2: 'Orte 2',
  fahrzeuge2: 'Fahrzeuge',
  kleidung3: 'Kleidung & Nähen',
  natur3: 'Natur 3',
};
export const topicEn: Record<string, string> = {  kleidung3: 'Clothes and sewing',
  natur3: 'Nature 3',
  koerper2: 'Body 2',
  essen4: 'Food 4',
  tiere5: 'Animals 5',
  orte2: 'Places 2',
  fahrzeuge2: 'Vehicles',
  kueche2: 'Kitchen tools',
  essen3: 'Food 3',
  schule2: 'School and office',
  musik2: 'Music and art',
  spielzeug: 'Toys',
  voegel: 'Birds and insects',
  saeuger: 'Animals 4',
  pflanzen: 'Plants and flowers',
  landschaft: 'Landscape',
  medizin: 'Health',
  technik: 'Technology',
  bauen: 'Building and workshop',
  feste: 'Celebrations',
  verkehr2: 'Traffic 2',
  gemuese2: 'Fruit and vegetables 3',
  fleisch: 'Meat and ready meals',
  getraenke2: 'Drinks and tableware',
  sehenswert: 'Landmarks',
  jobs2: 'Jobs 2',
  sport2: 'Sport 2',
  musik: 'Music',
  haushalt2: 'Household',
  buero: 'Office and school',
  kleidung2: 'Clothes and accessories',
  essen2: 'Food and drink 2',
  natur2: 'Nature 2',
  fahrzeuge: 'Vehicles',
  gebaeude: 'Buildings and places',
  tiere3: 'Animals 3',
  dinge2: 'Everyday things',

  family: 'Family', food: 'Food', drinks: 'Drinks', house: 'House', places: 'Places', transport: 'Transport', clothes: 'Clothes', animals: 'Animals', body: 'Body', school: 'School and office', nature: 'Nature', jobs: 'Jobs', kitchen: 'Kitchen and food 2', devices: 'Devices and things', outdoors: 'Outdoors', town: 'Village and city',
  obst: 'Fruit and vegetables 2', tiere2: 'Animals 2', moebel: 'Furniture and home items', werkzeug: 'Tools and objects', sport: 'Sport and music',
};
export const glossOf = (w: Word, lang: 'ar' | 'en') => (lang === 'en' ? (enRaw as Record<string, string>)[w.id] ?? w.ar : w.ar);
export const topicName = (id: string, lang: 'ar' | 'en') => (lang === 'en' ? topicEn[id] : topics.find((t) => t.id === id)?.ar ?? id);
export const wordsOf = (topic: string) => words.filter((w) => w.topic === topic);
export const withArticle = (w: Word) => `${w.art} ${w.de}`;
export const pluralText = (w: Word, lang: 'ar' | 'en' = 'ar') => (w.plural === '' ? '' : w.plural === '-' ? 'die ' + w.de + (lang === 'ar' ? ' (نفس الشكل)' : ' (same form)') : 'die ' + w.plural);
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
