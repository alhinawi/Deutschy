import {words,glossOf,type Word} from './data';
export function pluralForCard(w:Word){return w.plural?`die ${w.plural==='-'?w.de:w.plural}`:''}
export function deckWords(ids:string[]){const wanted=new Set(ids);return words.filter(w=>wanted.has(w.id))}
export function deckTsv(ids:string[]){const field=(s:string)=>'"'+s.replace(/[\t\r\n]+/g,' ').replace(/"/g,'""')+'"';return '#separator:Tab\n#html:false\n#columns:Front\tBack\n'+deckWords(ids).map(w=>[`${w.art} ${w.de}`,[w.ar,glossOf(w,'en'),pluralForCard(w)?`Plural: ${pluralForCard(w)}`:''].filter(Boolean).join(' | ')].map(field).join('\t')).join('\n')+'\n'}
