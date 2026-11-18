import {conjugationVerbs} from './conjugation';
// Preserve the original twelve entries and their order as the full lab grows.
export const presentFocus=[...conjugationVerbs.slice(0,4).map(v=>({inf:v.inf,forms:v.pres,source:v.source})),{inf:'lesen',forms:['lese','liest','liest','lesen','lest','lesen'],source:'https://www.verbformen.de/konjugation/indikativ/praesens/lesen.htm'},{inf:'sprechen',forms:['spreche','sprichst','spricht','sprechen','sprecht','sprechen'],source:'https://www.verbformen.de/konjugation/indikativ/praesens/sprechen.htm'}];

// New forms transcribed from each linked present-indicative reference.
presentFocus.push(
 {inf:'nehmen',forms:['nehme','nimmst','nimmt','nehmen','nehmt','nehmen'],source:'https://www.verbformen.de/konjugation/indikativ/praesens/nehmen.htm'},
 {inf:'geben',forms:['gebe','gibst','gibt','geben','gebt','geben'],source:'https://www.verbformen.de/konjugation/indikativ/praesens/geben.htm'},
 {inf:'fahren',forms:['fahre','fährst','fährt','fahren','fahrt','fahren'],source:'https://www.verbformen.de/konjugation/indikativ/praesens/fahren.htm'},
 {inf:'arbeiten',forms:['arbeite','arbeitest','arbeitet','arbeiten','arbeitet','arbeiten'],source:'https://www.verbformen.de/konjugation/indikativ/praesens/arbeiten.htm'},
 {inf:'wissen',forms:['weiß','weißt','weiß','wissen','wisst','wissen'],source:'https://www.verbformen.de/konjugation/indikativ/praesens/wissen.htm'},
 {inf:'sehen',forms:['sehe','siehst','sieht','sehen','seht','sehen'],source:'https://www.verbformen.de/konjugation/indikativ/praesens/sehen.htm'},
);
export const presentNotes:Record<string,[string,string]>={
 nehmen:['خلي بالك من حرفين m مع du و er/sie/es، لكن ihr nehmt.','Note the double m with du and er/sie/es, but ihr nehmt.'],
 geben:['تغيير e إلى i مع du و er/sie/es بس؛ ihr gebt.','The e to i change is limited to du and er/sie/es; ihr gebt.'],
 fahren:['الأوملاوت مع du و er/sie/es، مش مع ihr.','The umlaut appears with du and er/sie/es, not with ihr.'],
 arbeiten:['فيه e إضافية في النهايات مع du و er/sie/es و ihr.','An extra e appears in the endings for du, er/sie/es and ihr.'],
 wissen:['المفرد ليه جذر مختلف: ich weiß و du weißt و er weiß. الجمع بيستخدم wiss.','The singular uses a different stem: ich weiß, du weißt, er weiß. The plural uses wiss.'],
 sehen:['التغيير إلى ie مع du و er/sie/es، لكن ihr seht.','The change to ie appears with du and er/sie/es, but ihr seht.'],
};
