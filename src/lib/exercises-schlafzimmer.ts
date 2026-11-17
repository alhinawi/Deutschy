import type {Ex} from './exercises';
// Append only: prior question identities are not changed.
export const schlafzimmerGrammar:Record<string,Ex[]>={
 'artikel-genus':[
 ['___ Kissen liegt auf dem Sessel. (Kissen)','Das','Der','Die','Kissen محايد: das.','Kissen is neuter: das.'],
 ['___ Nachttischlampe ist aus. (Nachttischlampe)','Die','Der','Das','Nachttischlampe مؤنث: die.','Nachttischlampe is feminine: die.'],
 ['___ Wecker steht neben der Lampe. (Wecker)','Der','Die','Das','Wecker مذكر: der.','Wecker is masculine: der.'],
 ['___ Matratze liegt unter dem Laken. (Matratze)','Die','Der','Das','Matratze مؤنث: die.','Matratze is feminine: die.'],
 ],
 dativ:[
 ['Das graue Kissen gehört ___. (ich)','mir','mich','mein','gehören بياخد داتيف؛ ich: mir.','Gehören takes dative; ich becomes mir.'],
 ['Malik zeigt ___ die Einstellung. (Jana)','Jana','Janas','Janen','اسم Jana هنا مستفيد داتيف من غير نهاية إضافية.','The recipient Jana is dative; this personal name takes no added ending.'],
 ['Der Zettel hilft ___ nicht. (wir)','uns','unser','wir','helfen داتيف؛ wir: uns.','Helfen takes dative; wir becomes uns.'],
 ['Lea gibt ___ die Mappe. (der Bruder)','dem Bruder','den Bruder','des Bruders','المستلم مذكر داتيف: dem Bruder.','The masculine recipient is dative: dem Bruder.'],
 ],
 'trennbare-verben':[
 ['Omar legt die Decke ___. (zusammenlegen)','zusammen','an','vor','zusammenlegen بيتفصل: legt ... zusammen.','Zusammenlegen separates: legt ... zusammen.'],
 ['Jana schaltet die Lampe ___. (ausschalten)','aus','ein','mit','ausschalten بيتفصل: schaltet ... aus.','Ausschalten separates: schaltet ... aus.'],
 ['Lea holt die Mappe ___. (herausholen)','heraus','zu','ab','herausholen بيتفصل: holt ... heraus.','Herausholen separates: holt ... heraus.'],
 ['Malik stellt den Wecker ___. (zurückstellen)','zurück','auf','bei','zurückstellen بيتفصل: stellt ... zurück.','Zurückstellen separates: stellt ... zurück.'],
 ],
 praesens:[
 ['Jana ___ noch ein paar Seiten. (lesen)','liest','lest','lese','sie مفرد مع lesen: liest.','Singular sie takes liest.'],
 ['Omar ___ die Decke. (nehmen)','nimmt','nehmt','nehme','er مع nehmen: nimmt.','Er takes nimmt.'],
 ['Wir ___ den Unterschied. (bemerken)','bemerken','bemerkt','bemerkst','wir مع bemerken: bemerken.','Wir takes bemerken.'],
 ['Du ___ Malik die neue Zeit. (sagen)','sagst','sagt','sage','du مع sagen: sagst.','Du takes sagst.'],
 ],
 'dativ-praepositionen':[
 ['Der Wecker steht neben ___ Lampe. (die; Wo?)','der','die','den','مكان ثابت؛ neben داتيف؛ Lampe مؤنث: der.','Fixed location uses dative after neben: der Lampe.'],
 ['Sami legt das Buch neben ___ Wecker. (der; Wohin?)','den','dem','des','اتجاه لمكان جديد؛ neben أكوزاتيف؛ Wecker مذكر: den.','Destination uses accusative after neben: den Wecker.'],
 ['Lea spricht mit ___ Bruder. (ihr)','ihrem','ihren','ihr','mit داتيف؛ Bruder مذكر: ihrem.','Mit takes dative; masculine Bruder takes ihrem.'],
 ['Die alte Notiz stammt von ___ Besuch. (der letzte)','dem letzten','den letzten','des letzten','von داتيف: dem letzten Besuch.','Von takes dative: dem letzten Besuch.'],
 ],
 negation:[
 ['Die Lampe ist ___ an. (nicht / kein)','nicht','kein','keine','نفي an هنا بـ nicht.','Negate an with nicht here.'],
 ['Das ist ___ neue Matratze. (eine)','keine','kein','keinen','Matratze مؤنث نوميناتيف: keine.','Matratze is feminine nominative: keine.'],
 ['Omar bestellt ___ Kissen. (ein)','kein','keinen','keine','Kissen محايد أكوزاتيف: kein.','Kissen is neuter accusative: kein.'],
 ['Auf dem Tisch liegt ___ Zettel. (ein)','kein','keinen','keine','Zettel مذكر نوميناتيف: kein.','Zettel is masculine nominative: kein.'],
 ],
};
