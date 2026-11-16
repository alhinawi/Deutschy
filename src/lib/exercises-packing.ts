import type {Ex} from './exercises';
// Append-only. Existing g:topic:index identities must retain their meaning.
export const packingGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Amir holt ___ Handfeger. (der)','den','dem','des','holen بياخد مفعول مباشر؛ المذكر في الأكوزاتيف den.','Holen takes a direct object; masculine accusative is den.'],
 ['Lea nimmt ___ Kehrblech. (das)','das','dem','des','Kehrblech محايد؛ أداة الأكوزاتيف das.','Kehrblech is neuter; its accusative article is das.'],
 ['Emil packt ___ dünnes Heft ein. (ein)','ein','einen','einem','Heft محايد، فنستخدم ein في الأكوزاتيف.','Heft is neuter, so accusative uses ein.'],
 ['Marta bringt ___ Becher mit. (die, Plural)','die','den','der','Becher هنا مفعول مباشر جمع، فأداته die.','Becher is a plural direct object here, so use die.'],
 ],
 possessiv:[
 ['Noura sucht ___ Gepäckwaage. (sie, Singular)','ihre','sein','ihren','المالك sie، والحاجة مؤنث أكوزاتيف: ihre Gepäckwaage.','The owner is she and the object is feminine accusative: ihre Gepäckwaage.'],
 ['Emil steckt den Schlüssel in ___ Jackentasche. (er)','seine','seinem','ihrer','المالك er. الحركة لجوه الجيب بتاخد أكوزاتيف مؤنث: seine Jackentasche.','The owner is he. Movement into the pocket uses feminine accusative: seine Jackentasche.'],
 ['Wir prüfen ___ Packliste. (wir)','unsere','unser','unserem','المالك wir، وPackliste مؤنث أكوزاتيف: unsere.','The owner is we; Packliste is feminine accusative: unsere.'],
 ['Ist das ___ Koffer? (du)','dein','deine','deinen','المالك du، وKoffer مذكر فاعل: dein Koffer.','The owner is you; Koffer is masculine nominative: dein Koffer.'],
 ],
 modalverben:[
 ['___ du das Kehrblech festhalten? (können)','Kannst','Könnt','Kann','können مع du بتبقى kannst. المصدر festhalten في الآخر.','Können with du becomes kannst. The infinitive festhalten stays at the end.'],
 ['Marta ___ keine schwere Kanne tragen. (wollen)','will','wollen','wollt','مع Marta مفرد الغائب من wollen هو will.','Marta takes third-person singular will.'],
 ['Ihr ___ die Liste noch einmal prüfen. (müssen)','müsst','muss','müssen','مع ihr الشكل müsst.','Ihr takes müsst.'],
 ['Wir können das Gewicht ___. (vergleichen)','vergleichen','vergleicht','verglichen','بعد können بنستخدم المصدر من غير zu.','After können, use the infinitive without zu.'],
 ],
 imperativ:[
 ['___ bitte das Fenster! (öffnen, du)','Öffne','Öffnet','Öffnen','الأمر مع du من öffnen هو Öffne.','The du imperative of öffnen is Öffne.'],
 ['___ bitte die Becher mit! (mitbringen, ihr)','Bringt','Bring','Bringen','الأمر مع ihr هو Bringt ... mit.','The ihr imperative is Bringt ... mit.'],
 ['___ Sie bitte Ihren Eintrag! (prüfen)','Prüfen','Prüft','Prüfst','الأمر الرسمي: Prüfen Sie.','The formal imperative is Prüfen Sie.'],
 ['___ den Schlüssel nicht in den Koffer! (legen, du)','Leg','Legt','Legen','الأمر مع du هو Leg. صيغة Lege صحيحة برضه، بس مش من الاختيارات هنا.','The du imperative is Leg. Lege is also valid but is not an option here.'],
 ],
 komparativ:[
 ['Ohne das Buch ist der Koffer ___. (leicht)','leichter','leichteste','am leichtesten','من غير الكتاب المقارنة هي leichter.','Compared with carrying the book, the suitcase is leichter.'],
 ['Dieser Koffer ist schwerer ___ der andere.','als','wie','denn','بعد المقارنة schwerer بنستخدم als.','After the comparative schwerer, use als.'],
 ['Das Heft ist ___ als das Buch. (dünn)','dünner','dünn','am dünnsten','dünn في المقارنة بتبقى dünner.','The comparative of dünn is dünner.'],
 ['Die beiden Koffer sind gleich ___. (groß)','groß','größer','größten','بعد gleich بنستخدم الصفة العادية groß، مش المقارنة.','After gleich, use the base adjective groß, not the comparative.'],
 ],
 'dativ-praepositionen':[
 ['Marta fährt mit ___ Bus. (der)','dem','den','des','mit بتاخد داتيف، والمذكر dem.','Mit takes the dative; masculine dem.'],
 ['Der Schwamm liegt neben dem Waschbecken. Nach ___ Basteln räumen sie auf. (das)','dem','das','den','nach بتاخد داتيف، وBasteln مصدر متحول لاسم محايد: dem.','Nach takes the dative; nominalized Basteln is neuter: dem.'],
 ['Emil fährt zu ___ Freundin. (eine)','einer','eine','einen','zu بتاخد داتيف، والمؤنث einer.','Zu takes the dative; feminine einer.'],
 ['Noura bekommt eine Nachricht von ___ Freunden. (die, Plural)','den','die','der','von بتاخد داتيف؛ الجمع den Freunden.','Von takes the dative; plural den Freunden.'],
 ]
};
