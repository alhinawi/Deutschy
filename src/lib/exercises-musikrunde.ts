import type {Ex} from './exercises';
// Append after older banks to preserve saved topic/index identities.
export const musikrundeGrammar:Record<string,Ex[]>={
 satzbau:[
 ['Ordne: Ben / gibt / das Plektrum / zurück.','Ben gibt das Plektrum zurück.','Ben zurückgibt das Plektrum.','Ben das Plektrum gibt zurück.','الفعل المتصرف في المكان التاني والجزء المنفصل في الآخر.','The finite verb is second and the separable prefix is last.'],
 ['Welche Frage ist richtig?','Wo liegt der grüne Beutel?','Wo der grüne Beutel liegt?','Wo liegen der grüne Beutel?','بعد Wo الفعل المتصرف؛ Beutel مفرد.','The finite verb follows Wo; Beutel is singular.'],
 ['Ordne: Danach / spielen / wir / langsamer.','Danach spielen wir langsamer.','Danach wir spielen langsamer.','Danach langsamer wir spielen.','Danach بتاخد أول مكان، والفعل المتصرف في التاني.','Danach fills the first position; the finite verb is second.'],
 ['Welche neutrale Ja/Nein-Frage ist richtig?','Braucht Nora das Buch?','Nora braucht das Buch?','Braucht das Nora Buch?','في سؤال نعم أو لا المحايد الفعل الأول. صيغة الخبر بعلامة استفهام ممكن تبقى سؤال استغراب بس مش النمط المطلوب.','A neutral yes/no question starts with the finite verb. A statement with question intonation can express surprise but is not the requested pattern.'],
 ],
 praesens:[
 ['Nora ___ ihr Plektrum. (suchen)','sucht','suchst','suchen','Nora مفرد: sucht.','Singular Nora takes sucht.'],
 ['Ben ___ ihr den Beutel. (geben)','gibt','gebt','geben','geben مع Ben المفرد: gibt.','Geben with singular Ben is gibt.'],
 ['Ihr ___ die Reihenfolge. (ändern)','ändert','ändern','ändere','ändern مع ihr: ändert.','Ändern with ihr is ändert.'],
 ['Wir ___ nach jedem Klang. (warten)','warten','wartet','warte','warten مع wir: warten.','Warten with wir is warten.'],
 ],
 negation:[
 ['Nora findet ___ Plektrum auf dem Tisch. (kein)','kein','keinen','keinem','Plektrum محايد أكوزاتيف: kein.','Plektrum is neuter accusative: kein.'],
 ['Sie spielen heute ___ gleichzeitig. (nicht/kein)','nicht','kein','keine','بننفي gleichzeitig باستخدام nicht.','Nicht negates gleichzeitig.'],
 ['Jonas hat ___ eigene Karte. (kein)','keine','keinen','keinem','Karte مؤنث أكوزاتيف: keine.','Karte is feminine accusative: keine.'],
 ['Wir machen ___ Aufnahme. (kein)','keine','keinen','keinem','Aufnahme مؤنث أكوزاتيف: keine.','Aufnahme is feminine accusative: keine.'],
 ],
 'trennbare-verben':[
 ['Ben ___ das Plektrum ___. (zurückgeben)','gibt ... zurück','zurückgibt ...','geben ... zurück','zurückgeben بينفصل هنا: gibt ... zurück.','Zurückgeben separates here: gibt ... zurück.'],
 ['Lea ___ die Instrumente ___. (ausprobieren)','probiert ... aus','ausprobiert ...','probieren ... aus','ausprobieren بينفصل: probiert ... aus.','Ausprobieren separates: probiert ... aus.'],
 ['Sami ___ die Eindrücke ___. (aufschreiben)','schreibt ... auf','aufschreibt ...','schreiben ... auf','aufschreiben بينفصل: schreibt ... auf.','Aufschreiben separates: schreibt ... auf.'],
 ['Wir ___ beim Rhythmusspiel ___. (mitmachen)','machen ... mit','mitmachen ...','macht ... mit','mitmachen مع wir: machen ... mit.','Mitmachen with wir is machen ... mit.'],
 ],
 dativ:[
 ['Ben gibt ___ Schwester das Plektrum. (seine)','seiner','seine','seinen','المستلم داتيف؛ Schwester مؤنث: seiner.','The recipient is dative; feminine Schwester takes seiner.'],
 ['Das Buch gehört ___ Bruder. (der)','dem','den','des','gehören بياخد داتيف: dem Bruder.','Gehören takes dative: dem Bruder.'],
 ['Mira zeigt ___ Freund die Karte. (ihr)','ihrem','ihren','ihr','الشخص اللي بتوريه الحاجة داتيف: ihrem Freund.','The person shown something is dative: ihrem Freund.'],
 ['Jonas hilft ___ Freunden. (die, Plural)','den','die','der','helfen داتيف؛ الجمع den Freunden.','Helfen takes dative: den Freunden.'],
 ],
 perfekt:[
 ['Nora ___ das Plektrum gesucht. (haben)','hat','ist','haben','suchen بياخد haben؛ Nora مفرد: hat.','Suchen takes haben; singular Nora takes hat.'],
 ['Ben hat es ___. (zurückgeben)','zurückgegeben','gezurückgeben','zurückgebt','التصريف هنا zurückgegeben.','The participle is zurückgegeben.'],
 ['Sie haben die Reihenfolge ___. (ändern)','geändert','geändern','ändert','التصريف من ändern: geändert.','The participle of ändern is geändert.'],
 ['Jonas ___ zur Karte gegangen. (sein)','ist','hat','sein','gehen للانتقال هنا مع sein؛ Jonas مفرد: ist.','This movement use of gehen takes sein; singular Jonas takes ist.'],
 ]
};
