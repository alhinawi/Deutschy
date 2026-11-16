import type {Ex} from './exercises';
// Always appended after earlier extension banks. Context fixes the intended form.
export const everydayGrammar:Record<string,Ex[]>={
 imperativ:[
 ['___ bitte die Liste! (du, lesen)','Lies','Lese','Liest','مع du بنحافظ على تغيير e إلى ie: Lies!','The du imperative keeps the e to ie change: Lies!'],
 ['___ bitte leise! (ihr, sein)','Seid','Sei','Sind','الأمر مع ihr من sein هو Seid!','The ihr imperative of sein is Seid!'],
 ['___ Sie bitte Ihren Namen ein! (eintragen)','Tragen','Tragt','Trägst','الأمر الرسمي بيبدأ بالفعل، وبعده Sie؛ ein في الآخر.','The polite imperative uses the verb followed by Sie; ein stays at the end.'],
 ['___ kurz hier! (du, warten)','Warte','Wart','Wartest','مع warten بنحتفظ بـ e في الأمر: Warte!','Warten keeps -e in the imperative: Warte!'],
 ],
 'trennbare-verben':[
 ['Dalia trägt ihren Namen in die Liste ___. (eintragen)','ein','an','mit','eintragen فعل منفصل، والبادئة ein بتيجي في الآخر.','Eintragen is separable; ein goes at the end.'],
 ['Ben ___ Dalia später an. (anrufen)','ruft','anruft','rufen','في الجملة الأساسية بنصرف rufen ونحط an في الآخر.','In a main clause, conjugate rufen and place an at the end.'],
 ['Wir müssen die Einladung ___. (abschicken)','abschicken','schicken ab','abgeschickt','بعد müssen المصدر المنفصل بيفضل كلمة واحدة.','After müssen, the separable infinitive stays in one word.'],
 ['Jonas hat den Termin ___. (aufschreiben)','aufgeschrieben','geaufschrieben','aufschreiben','اسم المفعول: auf + ge + schrieben.','The participle places ge inside the prefix: aufgeschrieben.'],
 ],
 'nebensaetze-weil-dass':[
 ['Dalia wartet, weil die Maschine noch ___. (laufen)','läuft','laufen','gelaufen','بعد weil الفعل المصرف في الآخر: die Maschine läuft.','After weil, the finite verb goes last: die Maschine läuft.'],
 ['Jonas sagt, dass er den Raum ___. (prüfen, Präsens)','prüft','prüfen','geprüft','بعد dass الفعل المصرف في الآخر، وer بياخد prüft.','After dass, the finite verb goes last; er takes prüft.'],
 ['Weil Ben die Liste nicht sieht, ___ er zu spät an. (anfangen)','fängt','er fängt','fangen','الجملة الفرعية في الأول بتاخد المكان الأول؛ بعدها الفعل المصرف علطول.','The initial subordinate clause occupies position one, so the finite verb follows immediately.'],
 ['Ich glaube, dass wir morgen ___. (einkaufen, Präsens)','einkaufen','kaufen ein','eingekauft','في الجملة الفرعية الفعل المنفصل بيلتئم في الآخر.','In the subordinate clause, the separable verb rejoins at the end.'],
 ],
 'reflexive-verben':[
 ['Ben entschuldigt ___ bei Dalia.','sich','ihn','ihm','sich entschuldigen: مع er الضمير الانعكاسي sich.','Sich entschuldigen uses sich with er.'],
 ['Wir kümmern ___ um die Anfrage.','uns','euch','sich','sich kümmern: مع wir الضمير uns.','Sich kümmern uses uns with wir.'],
 ['Ich notiere ___ die Uhrzeit. (für mich selbst)','mir','mich','mein','die Uhrzeit هي المفعول المباشر، فضمير الشخص هنا داتيف: mir.','Die Uhrzeit is the direct object, so the reflexive pronoun is dative: mir.'],
 ['Ihr freut ___ auf den Übungsabend.','euch','uns','sich','sich freuen: مع ihr الضمير euch.','Sich freuen uses euch with ihr.'],
 ],
 relativsaetze:[
 ['Das ist die Liste, ___ neben der Tür hängt.','die','der','den','Liste مؤنث، والضمير فاعل في جملة الصلة: die.','Liste is feminine and the relative pronoun is the subject: die.'],
 ['Das ist der Raum, ___ wir vorgeschlagen haben.','den','der','dem','Raum مذكر وهو المفعول المباشر داخل جملة الصلة: den.','Raum is masculine and the direct object inside the relative clause: den.'],
 ['Ben ist der Nachbar, ___ Dalia wartet. (auf jemanden warten)','auf den','auf dem','für den','warten auf بياخد أكوزاتيف؛ مع المذكر auf den.','Warten auf takes the accusative; masculine auf den.'],
 ['Hier sind die Aufgaben, ___ noch offen sind.','die','denen','deren','الجمع هنا فاعل داخل جملة الصلة: die.','The plural relative pronoun is the subject here: die.'],
 ],
 'infinitiv-zu':[
 ['Jonas verspricht, die Anfrage heute ___. (abschicken)','abzuschicken','zu abschicken','abgeschickt','مع المصدر المنفصل zu بتدخل بين البادئة والجذر.','With a separable infinitive, zu goes between prefix and stem.'],
 ['Mariam prüft den Text, ___ Fehler zu finden. (Zweck)','um','ohne','statt','الهدف هنا: um ... zu، والفاعل في الجزئين واحد.','The stated purpose uses um ... zu with the same subject.'],
 ['Dalia geht hinunter, ohne die Tasche ___. (mitnehmen)','mitzunehmen','zu mitnehmen','mitgenommen','ohne ... zu، ومع mitnehmen الشكل mitzunehmen.','Ohne ... zu uses the separable form mitzunehmen.'],
 ['Es ist wichtig, die Angaben genau ___. (prüfen)','zu prüfen','prüfen zu','geprüft','بعد Es ist wichtig بنستخدم zu قبل المصدر.','After Es ist wichtig, use zu before the infinitive.'],
 ]
};
