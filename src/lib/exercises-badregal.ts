import type {Ex} from './exercises';
// Append only; previous saved topic/index identities stay stable.
export const badregalGrammar:Record<string,Ex[]>={
 satzbau:[
 ['Ordne: Heute / räumt / Mira / das Regal auf.','Heute räumt Mira das Regal auf.','Heute Mira räumt das Regal auf.','Heute aufräumt Mira das Regal.','Heute أول مكان، räumt في التاني وauf في الآخر.','Heute is first, räumt second, and auf at the end.'],
 ['Welche neutrale Ja/Nein-Frage ist richtig?','Liegt der Kamm links?','Der Kamm liegt links?','Liegen der Kamm links?','السؤال المحايد بيبدأ بالفعل؛ Kamm مفرد. ترتيب الخبر بنغمة سؤال ممكن بس مش ده المطلوب.','A neutral yes/no question starts with the verb. Kamm is singular. Statement order with question intonation is possible but not requested.'],
 ['Ordne: Danach / macht / Nora / ein Foto.','Danach macht Nora ein Foto.','Danach Nora macht ein Foto.','Danach ein Foto Nora macht.','Danach أول مكان والفعل في التاني.','Danach is first and the finite verb second.'],
 ['Welche W-Frage hat die normale Wortstellung?','Wem gehört der Waschlappen?','Wem der Waschlappen gehört?','Wem gehören der Waschlappen?','Wem وبعده الفعل؛ Waschlappen مفرد.','Wem is followed by the finite verb; Waschlappen is singular.'],
 ],
 praesens:[
 ['Mira ___ die kleine Bürste nach rechts. (stellen)','stellt','stellst','stellen','Mira مفرد: stellt.','Singular Mira takes stellt.'],
 ['Sami ___ nur seinen Kamm mit. (nehmen)','nimmt','nehmt','nehmen','Sami مفرد: nimmt.','Singular Sami takes nimmt.'],
 ['Ihr ___ nach einem freien Fach. (suchen)','sucht','suchst','suchen','ihr مع suchen: sucht.','Ihr takes sucht.'],
 ['Nora ___ Ben das neue Foto. (geben)','gibt','gebt','geben','Nora مفرد: gibt.','Singular Nora takes gibt.'],
 ],
 negation:[
 ['Der Korb ist noch ___ voll. (nicht/kein)','nicht','kein','keine','بننفي الصفة voll بـnicht.','Negate the adjective voll with nicht.'],
 ['Im freien Fach liegt ___ Kamm. (kein)','kein','keinen','keinem','Kamm فاعل مذكر نوميناتيف: kein.','Kamm is the masculine nominative subject: kein.'],
 ['Nora löscht ___ Foto. (kein)','kein','keinen','keinem','Foto محايد أكوزاتيف: kein.','Foto is neuter accusative: kein.'],
 ['Dalia legt ___ nasse Karte ins Fach. (kein)','keine','keinen','keinem','Karte مؤنث أكوزاتيف: keine.','Karte is feminine accusative: keine.'],
 ],
 'trennbare-verben':[
 ['Mira ___ das Badregal ___. (aufräumen)','räumt ... auf','aufräumt ...','räumen ... auf','aufräumen مع Mira: räumt ... auf.','Aufräumen with Mira is räumt ... auf.'],
 ['Sami ___ seinen Kamm ___. (mitnehmen)','nimmt ... mit','mitnimmt ...','nehmen ... mit','mitnehmen مع Sami: nimmt ... mit.','Mitnehmen with Sami is nimmt ... mit.'],
 ['Nora ___ bei Ben ___. (nachfragen)','fragt ... nach','nachfragt ...','fragen ... nach','nachfragen مع Nora: fragt ... nach.','Nachfragen with Nora is fragt ... nach.'],
 ['Dalia ___ den benutzten Lappen nicht ins Fach ___. (zurücklegen)','legt ... zurück','zurücklegt ...','legen ... zurück','zurücklegen مع Dalia: legt ... zurück.','Zurücklegen with Dalia is legt ... zurück.'],
 ],
 dativ:[
 ['Lina zeigt ___ Freundin das freie Fach. (ihre)','ihrer','ihre','ihren','المستلم داتيف؛ Freundin مؤنث: ihrer.','The recipient is dative; feminine Freundin takes ihrer.'],
 ['Der Kamm gehört ___ Bruder. (der)','dem','den','des','gehören بياخد داتيف؛ Bruder مذكر: dem.','Gehören takes dative; masculine Bruder takes dem.'],
 ['Nora hilft ___ Mitbewohner beim Suchen. (der)','dem','den','des','helfen بياخد داتيف؛ Mitbewohner مذكر: dem.','Helfen takes dative; masculine Mitbewohner takes dem.'],
 ['Lina gibt ___ Gästen frische Handtücher. (die)','den','die','der','المستلم جمع داتيف: den Gästen.','The plural recipient takes dative: den Gästen.'],
 ],
 perfekt:[
 ['Mira hat das Regal ___. (aufräumen)','aufgeräumt','aufräumt','geaufräumt','Partizip من aufräumen: aufgeräumt.','The past participle of aufräumen is aufgeräumt.'],
 ['Sami hat seinen Kamm ___. (mitnehmen)','mitgenommen','mitgenehmt','genommenmit','Partizip من mitnehmen: mitgenommen.','The past participle of mitnehmen is mitgenommen.'],
 ['Nora hat das alte Foto ___. (schicken)','geschickt','geschicken','geschicktet','Partizip من schicken: geschickt.','The past participle of schicken is geschickt.'],
 ['Ben hat die Bürste rechts ___. (finden)','gefunden','gefindet','gefanden','Partizip من finden: gefunden.','The past participle of finden is gefunden.'],
 ]
};
