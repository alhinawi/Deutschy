import type {Ex} from './exercises';
// Append only; all older topic/index identities stay stable.
export const readingcornerGrammar:Record<string,Ex[]>={
 satzbau:[
 ['Ordne: Nora / legt / das Lesezeichen / ins Buch.','Nora legt das Lesezeichen ins Buch.','Nora das Lesezeichen legt ins Buch.','Nora legt ins das Lesezeichen Buch.','الفعل المتصرف في المكان التاني.','The finite verb takes second position.'],
 ['Beginne mit Morgen: Nora gibt Sami das Buch.','Morgen gibt Nora Sami das Buch.','Morgen Nora gibt Sami das Buch.','Morgen Nora Sami das Buch gibt.','Morgen في الأول؛ الفعل بعده وبعدين الفاعل.','With Morgen first, the finite verb follows before the subject.'],
 ['Bilde eine Ja/Nein-Frage: Yusuf findet die Lupe.','Findet Yusuf die Lupe?','Yusuf findet die Lupe?','Die Lupe Yusuf findet?','سؤال نعم أو لا هنا بيبدأ بالفعل.','The requested yes/no question starts with the finite verb.'],
 ['Ordne: Im Regal / stehen / zwei Buchstützen.','Im Regal stehen zwei Buchstützen.','Im Regal zwei Buchstützen stehen.','Im stehen Regal zwei Buchstützen.','المكان وحدة في الأول، وبعدين الفعل.','The location fills first position, followed by the finite verb.'],
 ],
 praesens:[
 ['Nora ___ noch zwei Seiten. (lesen)','liest','lest','lesen','lesen مع sie المفرد: liest.','Lesen with singular sie is liest.'],
 ['Yusuf ___ die Lupe. (finden)','findet','findest','finden','finden مع Yusuf: findet.','Finden with Yusuf is findet.'],
 ['Ihr ___ die Bücher. (ordnen)','ordnet','ordnen','ordnest','ordnen مع ihr: ordnet.','Ordnen with ihr is ordnet.'],
 ['Ich ___ eine Rückkehrzeit auf den Zettel. (schreiben)','schreibe','schreibt','schreibst','schreiben مع ich: schreibe.','Schreiben with ich is schreibe.'],
 ],
 negation:[
 ['Das ist ___ Lesezeichen, sondern ein Kassenzettel.','kein','nicht','keine','نفي اسم محايد نكرة: kein Lesezeichen.','Negating an indefinite neuter noun takes kein.'],
 ['Nora liest heute ___, sondern morgen.','nicht','kein','keine','نفي الوقت هنا بـ nicht.','Nicht negates the stated time contrast.'],
 ['Im Fach liegen ___ Hefte.','keine','nicht','kein','نفي الجمع من غير أداة: keine Hefte.','A plural noun with no article is negated with keine.'],
 ['Das ist ___ meine Lupe.','nicht','kein','keine','قبل الملكية هنا بنستخدم nicht.','Use nicht before the possessive phrase here.'],
 ],
 'trennbare-verben':[
 ['Nora ___ das Buch ___. (zuklappen)','klappt / zu','zuklappt / —','klappen / zu','zuklappen منفصل: klappt ... zu.','Zuklappen separates: klappt ... zu.'],
 ['Yusuf ___ einen Band ___. (herausnehmen)','nimmt / heraus','herausnimmt / —','nehmt / heraus','herausnehmen منفصل ومع er الفعل nimmt.','Herausnehmen separates and uses nimmt with er.'],
 ['Wir ___ das Gespräch vorher ___. (ankündigen)','kündigen / an','ankündigen / —','kündigt / an','ankündigen منفصل: kündigen ... an.','Ankündigen separates: kündigen ... an.'],
 ['Ich ___ die Lupe in die Schublade ___. (zurücklegen)','lege / zurück','zurücklege / —','legt / zurück','zurücklegen منفصل: lege ... zurück.','Zurücklegen separates: lege ... zurück.'],
 ],
 dativ:[
 ['Nora gibt ___ Bruder das Buch. (ihr)','ihrem','ihren','ihr','المستلم داتيف: ihrem Bruder.','The recipient takes dative: ihrem Bruder.'],
 ['Yusuf hilft ___ Mutter beim Ordnen. (seine)','seiner','seine','seinen','helfen بياخد داتيف: seiner Mutter.','Helfen takes dative: seiner Mutter.'],
 ['Die Lupe gehört ___ Nachbarn. (der)','dem','den','des','gehören بياخد داتيف: dem Nachbarn.','Gehören takes dative: dem Nachbarn.'],
 ['Hana zeigt ___ Mitbewohnern den Zettel. (die)','den','die','der','الشخص اللي بنوريه داتيف؛ الجمع den Mitbewohnern.','The people shown something take dative: den Mitbewohnern.'],
 ],
 perfekt:[
 ['Nora ___ zwei Seiten gelesen.','hat','ist','haben','lesen في المثال بياخد haben؛ Nora hat.','Lesen takes haben here: Nora hat.'],
 ['Yusuf hat die Lupe ___. (finden)','gefunden','gefindet','finden','التصريف التالت من finden هو gefunden.','The past participle of finden is gefunden.'],
 ['Wir ___ das Gespräch angekündigt.','haben','sind','hat','ankündigen بياخد haben؛ wir haben.','Ankündigen takes haben: wir haben.'],
 ['Karim ___ zum großen Tisch gegangen.','ist','hat','haben','gehen بحركة لمكان في المثال بياخد sein.','Gehen expressing movement to a place takes sein here.'],
 ]
};
