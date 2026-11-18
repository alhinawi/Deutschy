import type {ConjugationVerb} from './conjugation';
const forms=(s:string)=>s.split('|');
// Explicit source-checked forms, not a heuristic irregular-verb generator.
export const extraConjugationVerbs:ConjugationVerb[]=[
 {inf:'geben',ar:'يدي',pres:forms('gebe|gibst|gibt|geben|gebt|geben'),pret:forms('gab|gabst|gab|gaben|gabt|gaben'),pp:'gegeben',aux:'haben',ki:forms('gebe|gebest|gebe|geben|gebet|geben'),kii:forms('gäbe|gäbest|gäbe|gäben|gäbet|gäben'),source:'https://www.duden.de/konjugation/geben'},
 {inf:'nehmen',ar:'ياخد',pres:forms('nehme|nimmst|nimmt|nehmen|nehmt|nehmen'),pret:forms('nahm|nahmst|nahm|nahmen|nahmt|nahmen'),pp:'genommen',aux:'haben',ki:forms('nehme|nehmest|nehme|nehmen|nehmet|nehmen'),kii:forms('nähme|nähmest|nähme|nähmen|nähmet|nähmen'),source:'https://www.duden.de/konjugation/nehmen'},
 {inf:'lesen',ar:'يقرا',pres:forms('lese|liest|liest|lesen|lest|lesen'),pret:forms('las|lasest|las|lasen|last|lasen'),pp:'gelesen',aux:'haben',ki:forms('lese|lesest|lese|lesen|leset|lesen'),kii:forms('läse|läsest|läse|läsen|läset|läsen'),source:'https://www.duden.de/konjugation/lesen_dozieren'},
 {inf:'sprechen',ar:'يتكلم',pres:forms('spreche|sprichst|spricht|sprechen|sprecht|sprechen'),pret:forms('sprach|sprachst|sprach|sprachen|spracht|sprachen'),pp:'gesprochen',aux:'haben',ki:forms('spreche|sprechest|spreche|sprechen|sprechet|sprechen'),kii:forms('spräche|sprächest|spräche|sprächen|sprächet|sprächen'),source:'https://www.duden.de/konjugation/sprechen'},
 {inf:'fahren',ar:'يروح بمواصلة',pres:forms('fahre|fährst|fährt|fahren|fahrt|fahren'),pret:forms('fuhr|fuhrst|fuhr|fuhren|fuhrt|fuhren'),pp:'gefahren',aux:'sein',ki:forms('fahre|fahrest|fahre|fahren|fahret|fahren'),kii:forms('führe|führest|führe|führen|führet|führen'),source:'https://www.duden.de/konjugation/fahren'},
 {inf:'bleiben',ar:'يفضل موجود',pres:forms('bleibe|bleibst|bleibt|bleiben|bleibt|bleiben'),pret:forms('blieb|bliebst|blieb|blieben|bliebt|blieben'),pp:'geblieben',aux:'sein',ki:forms('bleibe|bleibest|bleibe|bleiben|bleibet|bleiben'),kii:forms('bliebe|bliebest|bliebe|blieben|bliebet|blieben'),source:'https://www.duden.de/konjugation/bleiben'},
 {inf:'finden',ar:'يلاقي',pres:forms('finde|findest|findet|finden|findet|finden'),pret:forms('fand|fandest|fand|fanden|fandet|fanden'),pp:'gefunden',aux:'haben',ki:forms('finde|findest|finde|finden|findet|finden'),kii:forms('fände|fändest|fände|fänden|fändet|fänden'),source:'https://www.duden.de/konjugation/finden'},
 {inf:'arbeiten',ar:'يشتغل',pres:forms('arbeite|arbeitest|arbeitet|arbeiten|arbeitet|arbeiten'),pret:forms('arbeitete|arbeitetest|arbeitete|arbeiteten|arbeitetet|arbeiteten'),pp:'gearbeitet',aux:'haben',ki:forms('arbeite|arbeitest|arbeite|arbeiten|arbeitet|arbeiten'),kii:forms('arbeitete|arbeitetest|arbeitete|arbeiteten|arbeitetet|arbeiteten'),source:'https://www.duden.de/konjugation/arbeiten'},
];
export const extraConjugationVariants:Record<string,Partial<Record<string,Record<number,string[]>>>>={
 geben:{'Konjunktiv II Gegenwart':{1:['gäbst'],4:['gäbt']}},
 nehmen:{'Konjunktiv II Gegenwart':{1:['nähmst'],4:['nähmt']}},
 lesen:{'Präteritum':{1:['last']}},
 sprechen:{'Konjunktiv II Gegenwart':{1:['sprächst'],4:['sprächt']}},
 fahren:{'Konjunktiv II Gegenwart':{1:['führst'],4:['führt']}},
 finden:{'Präteritum':{1:['fandst']}},
};
