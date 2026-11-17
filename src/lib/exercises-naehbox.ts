import type {Ex} from './exercises';
// Append only; retain saved topic/index identities.
export const naehboxGrammar:Record<string,Ex[]>={
 satzbau:[
 ['Ordne: Morgen / zeigt / Mira / den Beutel.','Morgen zeigt Mira den Beutel.','Morgen Mira zeigt den Beutel.','Zeigt Morgen den Mira Beutel.','Morgen في أول مكان، والفعل في التاني.','Morgen is first; the finite verb is second.'],
 ['Welche neutrale Ja/Nein-Frage ist richtig?','Bleibt die Garnrolle hier?','Die Garnrolle bleibt hier?','Bleiben die Garnrolle hier?','السؤال المحايد يبدأ بالفعل، وRolle مفرد. ترتيب الخبر بنغمة سؤال ممكن بس مش المطلوب.','A neutral yes/no question begins with the verb. Rolle is singular. A statement with question intonation is possible but not the requested pattern.'],
 ['Ordne: Danach / fotografieren / wir / die Rolle.','Danach fotografieren wir die Rolle.','Danach wir fotografieren die Rolle.','Wir danach die Rolle fotografieren.','Danach أول مكان، والفعل في التاني.','Danach is first; the finite verb is second.'],
 ['Welche W-Frage hat die normale Wortstellung?','Wem gehört die Mappe?','Wem die Mappe gehört?','Wem gehören die Mappe?','Wem وبعده الفعل؛ Mappe مفرد.','The finite verb follows Wem; Mappe is singular.'],
 ],
 praesens:[
 ['Mira ___ die blaue Garnrolle. (behalten)','behält','behaltet','behalten','Mira مفرد: behält.','Singular Mira takes behält.'],
 ['Sami ___ die leere Rolle nach unten. (legen)','legt','legst','legen','Sami مفرد: legt.','Singular Sami takes legt.'],
 ['Ihr ___ nach der Garnrolle. (fragen)','fragt','fragst','fragen','ihr مع fragen: fragt.','Ihr takes fragt.'],
 ['Hala ___ eine neue Karte. (schreiben)','schreibt','schreibst','schreiben','Hala مفرد: schreibt.','Singular Hala takes schreibt.'],
 ],
 negation:[
 ['Die blaue Garnrolle ist ___ leer. (nicht/kein)','nicht','kein','keine','بننفي الصفة leer بـnicht.','Negate the adjective leer with nicht.'],
 ['Jonas schreibt ___ Nähanleitung. (kein)','keine','keinen','keinem','Nähanleitung مؤنث أكوزاتيف: keine.','Nähanleitung is feminine accusative: keine.'],
 ['Auf dem Zettel steht ___ Preis. (kein)','kein','keinen','keinem','Preis فاعل مذكر نوميناتيف: kein.','Preis is the masculine nominative subject: kein.'],
 ['Die neue Karte hat noch ___ Namen. (kein)','keinen','kein','keinem','Name اسم ضعيف، مذكر أكوزاتيف: keinen Namen.','Name is a weak masculine noun; accusative is keinen Namen.'],
 ],
 'trennbare-verben':[
 ['Sami ___ die leere Rolle ___. (wegräumen)','räumt ... weg','wegräumt ...','räumen ... weg','wegräumen مع Sami: räumt ... weg.','Wegräumen with Sami is räumt ... weg.'],
 ['Hala ___ den Namen ___. (nachschlagen)','schlägt ... nach','nachschlägt ...','schlagen ... nach','nachschlagen مع Hala: schlägt ... nach.','Nachschlagen with Hala is schlägt ... nach.'],
 ['Jonas ___ die Karte ___. (zurückbringen)','bringt ... zurück','zurückbringt ...','bringen ... zurück','zurückbringen مع Jonas: bringt ... zurück.','Zurückbringen with Jonas is bringt ... zurück.'],
 ['Wir ___ die Garnrolle ___. (herausnehmen)','nehmen ... heraus','herausnehmen ...','nimmt ... heraus','herausnehmen مع wir: nehmen ... heraus.','Herausnehmen with wir is nehmen ... heraus.'],
 ],
 dativ:[
 ['Mira zeigt ___ Schwester den Beutel. (ihre)','ihrer','ihre','ihren','المستلم داتيف؛ Schwester مؤنث: ihrer.','The recipient is dative; feminine Schwester takes ihrer.'],
 ['Die Mappe gehört ___ Nachbarin. (die)','der','die','den','gehören بياخد داتيف: der Nachbarin.','Gehören takes dative: der Nachbarin.'],
 ['Malek dankt ___ Freundin. (seine)','seiner','seine','seinen','danken بياخد داتيف: seiner Freundin.','Danken takes dative: seiner Freundin.'],
 ['Hala zeigt ___ Freunden die Karte. (die)','den','die','der','المستلم جمع داتيف: den Freunden.','The recipients are dative plural: den Freunden.'],
 ],
 perfekt:[
 ['Hala hat den Namen ___. (nachschlagen)','nachgeschlagen','genachschlagen','nachschlagt','التصريف من nachschlagen: nachgeschlagen.','The participle of nachschlagen is nachgeschlagen.'],
 ['Sami ___ die Rolle weggeräumt. (haben)','hat','ist','haben','wegräumen مع haben؛ Sami مفرد: hat.','Wegräumen takes haben; singular Sami takes hat.'],
 ['Jonas hat die Karte ___. (zurückbringen)','zurückgebracht','gezurückbringt','zurückgebringt','التصريف من zurückbringen: zurückgebracht.','The participle of zurückbringen is zurückgebracht.'],
 ['Die Freunde ___ ins Arbeitszimmer gegangen. (sein)','sind','haben','ist','gehen للانتقال مع sein؛ Freunde جمع: sind.','Movement use of gehen takes sein; plural Freunde takes sind.'],
 ]
};
