import photos from './lesson-photo-map.json';
/** Each entry is a checked photo context, not proof of tense, identity or thoughts. */
export function grammarPhoto(id:string):string{
 const path=photos.grammar[id as keyof typeof photos.grammar];
 if(!path)throw Error('Missing grammar photo: '+id);
 return path;
}
export function topicPhoto(id:string):string{
 const path=photos.topics[id as keyof typeof photos.topics];
 if(!path)throw Error('Missing topic photo: '+id);
 return path;
}
export const grammarPhotoIds=Object.keys(photos.grammar);
