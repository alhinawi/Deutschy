import photos from './lesson-photo-map.json';
/** Checked action scenes or concrete teaching contexts. Never evidence of thoughts, tense or ownership. */
export const verbPhotos:Readonly<Record<string,string>>=Object.freeze(photos.verbs);
export function verifiedVerbPhoto(inf:string):string|null{return Object.hasOwn(verbPhotos,inf)?verbPhotos[inf]:null;}
