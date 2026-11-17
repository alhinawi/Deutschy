import type {Ex} from './exercises';
// Append only; keep older topic/index identities.
export const kuechenprepGrammar:Record<string,Ex[]>={
 satzbau:[
 ['Ordne: Lena / stellt / den Saft / auf den Tisch.','Lena stellt den Saft auf den Tisch.','Lena den Saft stellt auf den Tisch.','Lena auf den Tisch den Saft stellt.','الفعل المتصرف في المكان التاني.','The finite verb is second.'],
 ['Welche Frage ist richtig?','Wo steht die Zitronenpresse?','Wo die Zitronenpresse steht?','Wo stehen die Zitronenpresse?','بعد Wo الفعل، وZitronenpresse مفرد.','The finite verb follows Wo; Zitronenpresse is singular.'],
 ['Ordne: Danach / fragen / wir / die Gäste.','Danach fragen wir die Gäste.','Danach wir fragen die Gäste.','Danach die Gäste wir fragen.','Danach في أول مكان والفعل في التاني.','Danach takes first position; the finite verb is second.'],
 ['Welche neutrale Ja/Nein-Frage ist richtig?','Braucht Ben einen zweiten Löffel?','Ben braucht einen zweiten Löffel?','Braucht einen Ben zweiten Löffel?','السؤال المحايد يبدأ بالفعل. صيغة الخبر بنغمة سؤال ممكنة للاستغراب، بس مش المطلوب هنا.','A neutral yes/no question begins with the finite verb. A statement with question intonation may express surprise but is not the requested pattern.'],
 ],
 praesens:[
 ['Lena ___ die Zitronenpresse. (suchen)','sucht','suchst','suchen','Lena مفرد: sucht.','Singular Lena takes sucht.'],
 ['Omar ___ auf das Regal. (zeigen)','zeigt','zeigen','zeigst','Omar مفرد: zeigt.','Singular Omar takes zeigt.'],
 ['Ihr ___ die Schalen. (beschriften)','beschriftet','beschriften','beschrifte','beschriften مع ihr: beschriftet.','Beschriften with ihr is beschriftet.'],
 ['Wir ___ die Zutaten getrennt. (lassen)','lassen','lasst','lässt','lassen مع wir: lassen.','Lassen with wir is lassen.'],
 ],
 negation:[
 ['Omar möchte ___ Zitronensaft. (kein)','keinen','kein','keinem','Zitronensaft مذكر أكوزاتيف: keinen.','Zitronensaft is masculine accusative: keinen.'],
 ['Die Presse liegt ___ in der Schublade. (nicht/kein)','nicht','kein','keine','بننفي المكان هنا باستخدام nicht.','Nicht negates the location here.'],
 ['Auf der Liste stehen ___ Namen. (kein)','keine','keinen','keinem','Namen جمع نوميناتيف: keine.','Namen is nominative plural: keine.'],
 ['Ben hat ___ zweiten Löffel. (kein)','keinen','kein','keinem','Löffel مذكر أكوزاتيف: keinen.','Löffel is masculine accusative: keinen.'],
 ],
 'trennbare-verben':[
 ['Tarek ___ den Mörser ___. (mitnehmen)','nimmt ... mit','mitnimmt ...','nehmen ... mit','mitnehmen مع Tarek: nimmt ... mit.','Mitnehmen with Tarek is nimmt ... mit.'],
 ['Ben ___ die Zutaten ___. (aufschreiben)','schreibt ... auf','aufschreibt ...','schreiben ... auf','aufschreiben بينفصل: schreibt ... auf.','Aufschreiben separates: schreibt ... auf.'],
 ['Dalia ___ die Mischung ___. (umfüllen)','füllt ... um','umfüllt ...','füllen ... um','umfüllen بينفصل: füllt ... um.','Umfüllen separates: füllt ... um.'],
 ['Wir ___ die alten Notizen ___. (aufheben)','heben ... auf','aufheben ...','hebt ... auf','aufheben مع wir: heben ... auf.','Aufheben with wir is heben ... auf.'],
 ],
 dativ:[
 ['Lena gibt ___ Freund die kleine Schale. (ihr)','ihrem','ihren','ihr','المستلم داتيف: ihrem Freund.','The recipient is dative: ihrem Freund.'],
 ['Der Mörser gehört ___ Gast. (der)','dem','den','des','gehören بياخد داتيف: dem Gast.','Gehören takes dative: dem Gast.'],
 ['Dalia zeigt ___ Gästen die Zutaten. (die)','den','die','der','المستلم جمع داتيف: den Gästen.','The recipients are dative plural: den Gästen.'],
 ['Ben hilft ___ Freundin. (seine)','seiner','seine','seinen','helfen بياخد داتيف؛ Freundin مؤنث: seiner.','Helfen takes dative; Freundin is feminine: seiner.'],
 ],
 perfekt:[
 ['Lena ___ die Presse gefunden. (haben)','hat','ist','haben','finden هنا مع haben؛ Lena مفرد: hat.','Finden takes haben here; singular Lena takes hat.'],
 ['Tarek hat den Mörser ___. (mitbringen)','mitgebracht','gemitbringen','mitgebringt','التصريف من mitbringen: mitgebracht.','The participle of mitbringen is mitgebracht.'],
 ['Dalia hat die Mischung ___. (umfüllen)','umgefüllt','geumfüllt','umgefüllen','التصريف من umfüllen: umgefüllt.','The participle of umfüllen is umgefüllt.'],
 ['Die Gäste ___ nach Hause gegangen. (sein)','sind','haben','ist','gehen للانتقال هنا مع sein؛ Gäste جمع: sind.','Movement use of gehen takes sein; plural Gäste takes sind.'],
 ]
};
