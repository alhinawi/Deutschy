import type {Ex} from './exercises';
// Append only; previous saved topic/index identities stay stable.
export const schuhplatzGrammar:Record<string,Ex[]>={
 satzbau:[
 ['Ordne: Unten / stehen / Ranas Hausschuhe.','Unten stehen Ranas Hausschuhe.','Unten Ranas Hausschuhe stehen.','Unten steht Ranas Hausschuhe.','Unten أول مكان والفعل في التاني؛ Hausschuhe جمع: stehen.','Unten is first, the finite verb second; plural Hausschuhe takes stehen.'],
 ['Welche neutrale Ja/Nein-Frage ist richtig?','Gehört das graue Paar Emil?','Das graue Paar gehört Emil?','Gehören das graue Paar Emil?','السؤال المحايد يبدأ بالفعل؛ Paar مفرد. ترتيب الخبر بنغمة سؤال ممكن بس مش المطلوب.','A neutral yes/no question begins with the verb; Paar is singular. Statement order with question intonation is possible but not requested.'],
 ['Ordne: Danach / fragt / Niko / seine Schwester.','Danach fragt Niko seine Schwester.','Danach Niko fragt seine Schwester.','Danach seine Schwester Niko fragt.','Danach أول مكان والفعل في التاني.','Danach is first and the finite verb second.'],
 ['Welche W-Frage hat die normale Wortstellung?','Wem gehören die braunen Hausschuhe?','Wem die braunen Hausschuhe gehören?','Wem gehört die braunen Hausschuhe?','Wem وبعده الفعل؛ Hausschuhe جمع: gehören.','Wem is followed by the finite verb; plural Hausschuhe takes gehören.'],
 ],
 praesens:[
 ['Rana ___ das braune Paar heraus. (nehmen)','nimmt','nehmt','nehmen','Rana مفرد: nimmt.','Singular Rana takes nimmt.'],
 ['Emil ___ auf das untere Brett. (zeigen)','zeigt','zeigst','zeigen','Emil مفرد: zeigt.','Singular Emil takes zeigt.'],
 ['Ihr ___ die beiden Senkel. (vergleichen)','vergleicht','vergleichst','vergleichen','ihr مع vergleichen: vergleicht.','Ihr takes vergleicht.'],
 ['Esma ___ noch keine Entscheidung. (treffen)','trifft','trefft','treffen','Esma مفرد: trifft.','Singular Esma takes trifft.'],
 ],
 negation:[
 ['Die Kiste ist noch ___ fertig sortiert. (nicht/kein)','nicht','kein','keine','بننفي fertig sortiert بـnicht.','Negate fertig sortiert with nicht.'],
 ['In der Schachtel liegt ___ Schlüssel. (kein)','kein','keinen','keinem','Schlüssel فاعل مذكر نوميناتيف: kein.','Schlüssel is the masculine nominative subject: kein.'],
 ['Hala kauft ___ Ersatz. (kein)','keinen','kein','keinem','Ersatz مذكر أكوزاتيف: keinen.','Ersatz is masculine accusative: keinen.'],
 ['Esma hat ___ Schuhe reserviert. (kein)','keine','keinen','keinem','Schuhe جمع أكوزاتيف: keine.','Schuhe is accusative plural: keine.'],
 ],
 'trennbare-verben':[
 ['Rana ___ das braune Paar ___. (herausnehmen)','nimmt ... heraus','herausnimmt ...','nehmen ... heraus','herausnehmen مع Rana: nimmt ... heraus.','Herausnehmen with Rana is nimmt ... heraus.'],
 ['Jonas ___ die beiden Senkel ___. (zurücklegen)','legt ... zurück','zurücklegt ...','legen ... zurück','zurücklegen مع Jonas: legt ... zurück.','Zurücklegen with Jonas is legt ... zurück.'],
 ['Niko ___ bei Esma ___. (nachfragen)','fragt ... nach','nachfragt ...','fragen ... nach','nachfragen مع Niko: fragt ... nach.','Nachfragen with Niko is fragt ... nach.'],
 ['Hala ___ später in ihrer Tasche ___. (weitersuchen)','sucht ... weiter','weitersucht ...','suchen ... weiter','weitersuchen مع Hala: sucht ... weiter.','Weitersuchen with Hala is sucht ... weiter.'],
 ],
 dativ:[
 ['Das graue Paar gehört ___ Bruder. (der)','dem','den','des','gehören بياخد داتيف؛ Bruder مذكر: dem.','Gehören takes dative; masculine Bruder takes dem.'],
 ['Jonas hilft ___ Mitbewohnerin beim Suchen. (die)','der','die','den','helfen بياخد داتيف؛ Mitbewohnerin مؤنث: der.','Helfen takes dative; feminine Mitbewohnerin takes der.'],
 ['Niko stellt ___ Schwester eine Frage. (seine)','seiner','seine','seinen','المستلم داتيف؛ Schwester مؤنث: seiner.','The recipient is dative; feminine Schwester takes seiner.'],
 ['Esma erklärt ___ Freunden die Notiz. (die)','den','die','der','المستلم جمع داتيف: den Freunden.','The plural recipient takes dative: den Freunden.'],
 ],
 perfekt:[
 ['Rana hat ihre Tasche auf die Bank ___. (legen)','gelegt','gelegen','gelegtet','legen بمعنى يحط: gelegt؛ liegen بمعنى يكون موجود: gelegen.','Legen, to put, has gelegt; liegen, to lie/be located, has gelegen.'],
 ['Jonas hat die Schachtel ___. (öffnen)','geöffnet','geöffnen','geöffnt','Partizip من öffnen: geöffnet.','The past participle of öffnen is geöffnet.'],
 ['Niko hat vorher ___. (nachfragen)','nachgefragt','genachfragt','nachfragen','Partizip من nachfragen: nachgefragt.','The past participle of nachfragen is nachgefragt.'],
 ['Esma hat noch nichts ___. (verschenken)','verschenkt','geverschenkt','verschenken','verschenken ببادئة ver غير منفصلة: verschenkt من غير ge.','Verschenken has inseparable ver: verschenkt without ge.'],
 ]
};
