export function sameAnswer191(value:string,answer:string){return value.normalize('NFC').trim().replace(/\s+/gu,' ')===answer.normalize('NFC').trim().replace(/\s+/gu,' ')}
