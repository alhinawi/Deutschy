import {glossOf,type Word} from './data';
// Discovery only: never use this relaxed case/spacing match to grade German answers.
export const normalizeWordSearch=(value:string)=>value.normalize('NFC').trim().replace(/\s+/gu,' ').toLocaleLowerCase('de').replace(/ß/g,'ss');
export function wordMatchesSearch(w:Word,query:string,extra:readonly string[]=[]){
 const q=normalizeWordSearch(query);
 if(!q)return true;
 // Match inside a real field, not across unrelated field boundaries.
 return [w.de,`${w.art} ${w.de}`,w.plural==='-'?w.de:w.plural,w.ar,glossOf(w,'en'),...extra].some(value=>normalizeWordSearch(value).includes(q));
}
