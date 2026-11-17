export const vocabularyGames=new Set(['flashcards','quiz','article','spelling','memory']);
export function gameHref(game:string,topic=''){return `/games/${game}/${topic&&vocabularyGames.has(game)?`?topic=${encodeURIComponent(topic)}`:''}`;}
