import type {Ex} from './exercises';
// Append only. Earlier saved topic/index identities must not shift.
export const handarbeitGrammar:Record<string,Ex[]>={
 satzbau:[
 ['Ordne: Mila / legt / die Wolle / in den Korb.','Mila legt die Wolle in den Korb.','Mila die Wolle legt in den Korb.','Mila legt in die Wolle den Korb.','الفعل المتصرف في المكان التاني.','The finite verb takes second position.'],
 ['Beginne mit Morgen: Sara zeigt Mila den Anfang.','Morgen zeigt Sara Mila den Anfang.','Morgen Sara zeigt Mila den Anfang.','Morgen Sara Mila den Anfang zeigt.','بعد Morgen الفعل، وبعدين الفاعل.','With Morgen first, the verb comes before the subject.'],
 ['Bilde eine Ja/Nein-Frage: Nabil braucht den kleinen Rahmen.','Braucht Nabil den kleinen Rahmen?','Nabil braucht den kleinen Rahmen?','Den kleinen Rahmen Nabil braucht?','السؤال المطلوب بيبدأ بالفعل المتصرف.','The requested yes/no question begins with the finite verb.'],
 ['Ordne: Im Korb / liegen / zwei Stricknadeln.','Im Korb liegen zwei Stricknadeln.','Im Korb zwei Stricknadeln liegen.','Im liegen Korb zwei Stricknadeln.','المكان كله وحدة في الأول، والفعل بعده.','The location fills first position, followed by the finite verb.'],
 ],
 praesens:[
 ['Mila ___ ein kleines Stück. (häkeln)','häkelt','häkelst','häkeln','مع Mila المفرد: häkelt.','With singular Mila: häkelt.'],
 ['Du ___ den kleinen Rahmen. (nehmen)','nimmst','nehmst','nimmt','nehmen مع du بيتغير إلى nimmst.','Nehmen changes its stem with du: nimmst.'],
 ['Ihr ___ Eva vorher. (fragen)','fragt','fragen','fragst','fragen مع ihr: fragt.','Fragen with ihr is fragt.'],
 ['Ich ___ das Muster aus. (probieren)','probiere','probiert','probierst','probieren مع ich: probiere.','Probieren with ich is probiere.'],
 ],
 negation:[
 ['Das ist ___ Häkelnadel, sondern eine Stricknadel.','keine','kein','nicht','نفي اسم مؤنث نكرة: keine Häkelnadel.','Negating an indefinite feminine noun takes keine.'],
 ['Mila häkelt heute ___, sondern morgen.','nicht','kein','keine','نفي الوقت هنا بـ nicht.','Nicht negates the time contrast here.'],
 ['Im Korb liegen ___ Stricknadeln.','keine','nicht','kein','نفي جمع من غير أداة: keine.','A plural noun without an article is negated with keine.'],
 ['Das ist ___ mein Stickrahmen.','nicht','kein','keine','قبل الملكية هنا بنستخدم nicht.','Use nicht before the possessive phrase here.'],
 ],
 'trennbare-verben':[
 ['Nabil ___ den Rahmen am Montag ___. (zurückbringen)','bringt / zurück','zurückbringt / -','bringen / zurück','zurückbringen منفصل: bringt ... zurück.','Zurückbringen separates: bringt ... zurück.'],
 ['Mila ___ die Wolle ___. (einpacken)','packt / ein','einpackt / -','packen / ein','einpacken منفصل: packt ... ein.','Einpacken separates: packt ... ein.'],
 ['Wir ___ das Muster ___. (ausprobieren)','probieren / aus','ausprobieren / -','probiert / aus','ausprobieren منفصل: probieren ... aus.','Ausprobieren separates: probieren ... aus.'],
 ['Eva ___ die Schachtel ___. (aufmachen)','macht / auf','aufmacht / -','machen / auf','aufmachen منفصل: macht ... auf.','Aufmachen separates: macht ... auf.'],
 ],
 dativ:[
 ['Sara hilft ___ Freundin. (ihre)','ihrer','ihre','ihren','helfen بياخد داتيف: ihrer Freundin.','Helfen takes dative: ihrer Freundin.'],
 ['Der Rahmen gehört ___ Nachbarin. (die)','der','die','den','gehören بياخد داتيف؛ المؤنث der.','Gehören takes dative; feminine takes der.'],
 ['Leila zeigt ___ Teilnehmern die Liste. (die)','den','die','der','الناس اللي بنوريهم داتيف: den Teilnehmern.','The people shown something take dative: den Teilnehmern.'],
 ['Ich danke ___ Bruder für die Wolle. (mein)','meinem','meinen','mein','danken بياخد داتيف: meinem Bruder.','Danken takes dative: meinem Bruder.'],
 ],
 perfekt:[
 ['Mila ___ ein kleines Stück gehäkelt.','hat','ist','haben','häkeln هنا بياخد haben؛ Mila hat.','Häkeln takes haben here: Mila hat.'],
 ['Nabil hat den Rahmen ___. (zurückbringen)','zurückgebracht','gezurückbringt','zurückbringen','التصريف التالت: zurückgebracht.','The past participle is zurückgebracht.'],
 ['Wir ___ das Muster ausprobiert.','haben','sind','hat','ausprobieren بياخد haben؛ wir haben.','Ausprobieren takes haben: wir haben.'],
 ['Eva ___ am Abend nach Hause gegangen.','ist','hat','haben','gehen بحركة لمكان هنا بياخد sein.','Gehen expressing movement to a place takes sein here.'],
 ]
};
