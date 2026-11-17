import type {Ex} from './exercises';
// Append only; retain earlier saved topic/index identities.
export const garteneckeGrammar:Record<string,Ex[]>={
 satzbau:[
 ['Ordne: Tim / holt / den Eimer.','Tim holt den Eimer.','Tim den Eimer holt.','Holt den Tim Eimer.','الفعل المتصرف في المكان التاني.','The finite verb is in second position.'],
 ['Welche neutrale Ja/Nein-Frage ist richtig?','Liegt die Kelle im Eimer?','Die Kelle liegt im Eimer?','Liegt im die Kelle Eimer?','السؤال المحايد يبدأ بالفعل. الخبر بنغمة سؤال ممكن في سياق استغراب، بس مش النمط المطلوب هنا.','A neutral yes/no question begins with the verb. A statement with question intonation can express surprise but is not the requested pattern.'],
 ['Ordne: Danach / schreiben / wir / die Namen.','Danach schreiben wir die Namen.','Danach wir schreiben die Namen.','Danach die Namen wir schreiben.','Danach في أول مكان، والفعل في التاني.','Danach takes first position; the finite verb is second.'],
 ['Welche Frage hat die normale W-Fragen-Stellung?','Wo steht die Sprühflasche?','Wo die Sprühflasche steht?','Wo stehen die Sprühflasche?','بعد Wo الفعل، وFlasche مفرد.','The finite verb follows Wo, and Flasche is singular.'],
 ],
 praesens:[
 ['Rana ___ die Pflanzkelle. (suchen)','sucht','suchst','suchen','Rana مفرد: sucht.','Singular Rana takes sucht.'],
 ['Yusuf ___ ein Foto. (machen)','macht','machst','machen','Yusuf مفرد: macht.','Singular Yusuf takes macht.'],
 ['Ihr ___ die Namen nach. (schlagen)','schlagt','schlägt','schlagen','ihr مع schlagen: schlagt.','Ihr takes schlagt.'],
 ['Amina ___ das Bild an. (sehen)','sieht','seht','sehen','sie مفرد مع sehen: sieht.','Singular sie takes sieht.'],
 ],
 negation:[
 ['Im Eimer liegt ___ Rechen. (kein)','kein','keinen','keinem','Rechen فاعل مذكر نوميناتيف: kein.','Rechen is the masculine nominative subject: kein.'],
 ['Die dritte Karte hat ___ Namen. (kein)','keinen','kein','keinem','Name مذكر أكوزاتيف، والاسم الضعيف هنا Namen: keinen Namen.','Name is masculine accusative and a weak noun: keinen Namen.'],
 ['Das Foto zeigt ___ den Inhalt jeder ähnlichen Flasche. (nicht/kein)','nicht','kein','keine','مع den Inhalt بنستخدم nicht هنا.','Nicht is used with the definite noun phrase den Inhalt here.'],
 ['Die Freunde schreiben ___ Pflegeanleitung. (kein)','keine','keinen','keinem','Pflegeanleitung مؤنث أكوزاتيف: keine.','Pflegeanleitung is feminine accusative: keine.'],
 ],
 'trennbare-verben':[
 ['Mara ___ den Namen ___. (nachschlagen)','schlägt ... nach','nachschlägt ...','schlagen ... nach','nachschlagen مع Mara: schlägt ... nach.','Nachschlagen with Mara is schlägt ... nach.'],
 ['Rana ___ die Kelle ___. (herausnehmen)','nimmt ... heraus','herausnimmt ...','nehmen ... heraus','herausnehmen مع Rana: nimmt ... heraus.','Herausnehmen with Rana is nimmt ... heraus.'],
 ['Jonas ___ die Töpfe ___. (umstellen)','stellt ... um','umstellt ...','stellen ... um','umstellen بمعنى يغير مكان هنا بينفصل: stellt ... um.','Umstellen meaning to move to another position separates here: stellt ... um.'],
 ['Wir ___ die Kelle ___. (zurücklegen)','legen ... zurück','zurücklegen ...','legt ... zurück','zurücklegen مع wir: legen ... zurück.','Zurücklegen with wir is legen ... zurück.'],
 ],
 dativ:[
 ['Tim gibt ___ Freundin den Eimer. (seine)','seiner','seine','seinen','المستلم داتيف؛ Freundin مؤنث: seiner.','The recipient is dative; feminine Freundin takes seiner.'],
 ['Die Pflanzkelle gehört ___ Nachbarin. (die)','der','die','den','gehören بياخد داتيف: der Nachbarin.','Gehören takes dative: der Nachbarin.'],
 ['Amina zeigt ___ Freunden das Heft. (die)','den','die','der','المستلم جمع داتيف: den Freunden.','The recipients are dative plural: den Freunden.'],
 ['Yusuf hilft ___ Freund beim Fotografieren. (sein)','seinem','seinen','seine','helfen بياخد داتيف؛ Freund مذكر: seinem.','Helfen takes dative; masculine Freund takes seinem.'],
 ],
 perfekt:[
 ['Rana hat die Kelle ___. (finden)','gefunden','gefindet','finden','التصريف من finden: gefunden.','The participle of finden is gefunden.'],
 ['Mara ___ den Namen nachgeschlagen. (haben)','hat','ist','haben','nachschlagen هنا مع haben، وMara مفرد: hat.','Nachschlagen takes haben here; singular Mara takes hat.'],
 ['Jonas hat die Töpfe ___. (umstellen)','umgestellt','geumstellt','umgestellen','umstellen بمعنى نقل هنا: umgestellt.','The participle of separable umstellen meaning to reposition is umgestellt.'],
 ['Die Freunde ___ in den Schuppen gegangen. (sein)','sind','haben','ist','gehen للانتقال مع sein؛ Freunde جمع: sind.','Movement use of gehen takes sein; plural Freunde takes sind.'],
 ]
};
