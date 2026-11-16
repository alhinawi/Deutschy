// Model-form practice: whitespace, NFC and case normalized, spelling retained.
export const normalizeConjugation=(s:string)=>s.normalize('NFC').trim().toLowerCase().replace(/\s+/g,' ');
export const matchesConjugation=(input:string,target:string)=>normalizeConjugation(input)===normalizeConjugation(target);
