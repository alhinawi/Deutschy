import type {Ex} from './exercises';
// Append-only contextual practice. Do not insert before prior saved identities.
export const neighborhoodGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Nina füllt ___ kleinen Topf. (der)','den','dem','des','füllen بياخد مفعول مباشر؛ المذكر أداته den.','Füllen takes a direct object; masculine accusative uses den.'],
 ['Omar kauft ___ Brot. (ein)','ein','einen','einem','Brot محايد، فالمفعول المباشر ein Brot.','Brot is neuter, so the direct object is ein Brot.'],
 ['Lea bringt ___ Karten mit. (die, Plural)','die','den','der','الجمع في الأكوزاتيف أداته die.','The accusative plural article is die.'],
 ['Wir brauchen ___ neue Gießkanne. (eine)','eine','einen','einem','Gießkanne مؤنث، في الأكوزاتيف eine.','Gießkanne is feminine; accusative eine.'],
 ],
 possessiv:[
 ['Nina sucht ___ grüne Kanne. (sie, Singular)','ihre','seine','ihr','المالك sie مفرد مؤنث، والمملوك مؤنث أكوزاتيف: ihre Kanne.','The owner is she and the object is feminine accusative: ihre Kanne.'],
 ['Omar schreibt ___ Freunden. (er)','seinen','sein','seine','المالك er، والأصدقاء جمع داتيف بعد schreiben: seinen Freunden.','The owner is he; schreiben takes dative plural for the recipients: seinen Freunden.'],
 ['Wir holen ___ Kartenspiel. (wir)','unser','unsere','unseren','المالك wir، وKartenspiel محايد أكوزاتيف: unser.','The owner is we; Kartenspiel is neuter accusative: unser.'],
 ['Ist das ___ Garten? (ihr, mehrere Personen)','euer','eure','euren','ملكية ihr هي euer، والمذكر فاعل من غير نهاية إضافية.','For plural you, the possessive is euer; masculine nominative takes no added ending.'],
 ],
 modalverben:[
 ['Ben ___ erst um halb acht kommen. (können)','kann','könnt','können','مع Ben بنستخدم مفرد الغائب kann.','Ben takes third-person singular kann.'],
 ['___ ihr am Freitag spielen? (wollen)','Wollt','Will','Wollen','مع ihr الشكل wollt، والفعل أول سؤال نعم/لا.','Ihr takes wollt; the verb comes first in a yes/no question.'],
 ['Wir ___ zuerst den Plan prüfen. (müssen)','müssen','müsst','muss','مع wir بنستخدم müssen، والمصدر prüfen في الآخر.','Wir takes müssen; the infinitive prüfen stays at the end.'],
 ['Nina möchte die Pflanze ___. (gießen)','gießen','gießt','gegossen','بعد möchte بنستخدم المصدر من غير zu.','After möchte, use the infinitive without zu.'],
 ],
 'praeteritum-basics':[
 ['Gestern ___ der Topf trocken. (sein)','war','waren','warst','Topf مفرد، وماضي sein معاه war.','Topf is singular; sein in the past is war.'],
 ['Wir ___ am Freitag Zeit. (haben, Präteritum)','hatten','hattet','hatte','مع wir ماضي haben هو hatten.','With wir, haben in the past is hatten.'],
 ['___ du gestern im Garten? (sein)','Warst','Wart','Waren','ماضي sein مع du هو warst.','The past of sein with du is warst.'],
 ['Ihr ___ keine Getränke dabei. (haben, Präteritum)','hattet','hatten','hattest','ماضي haben مع ihr هو hattet.','The past of haben with ihr is hattet.'],
 ],
 komparativ:[
 ['Dieser Topf ist ___ als der andere. (groß)','größer','groß','am größten','المقارنة مع als: groß تبقى größer.','Comparison with als uses größer.'],
 ['Die neue Nachricht ist ___ als die erste. (klar)','klarer','klarste','am klarsten','المقارنة من klar هي klarer.','The comparative of klar is klarer.'],
 ['Ben kommt später ___ Lea.','als','wie','denn','بعد المقارنة später بنستخدم als.','After the comparative später, use als.'],
 ['Die beiden Töpfe sind gleich ___. (groß)','groß','größer','größten','مع gleich بنستخدم الصفة العادية من غير مقارنة.','Gleich uses the base adjective rather than a comparative.'],
 ],
 'dativ-praepositionen':[
 ['Lea fährt mit ___ Bus. (der)','dem','den','des','mit بياخد داتيف، والمذكر dem.','Mit takes the dative; masculine dem.'],
 ['Omar bekommt eine Nachricht von ___ Freundin. (eine)','einer','eine','einen','von بياخد داتيف، والمؤنث einer.','Von takes the dative; feminine einer.'],
 ['Nach ___ Spiel gehen alle nach Hause. (das)','dem','das','den','nach بياخد داتيف، والمحايد dem.','Nach takes the dative; neuter dem.'],
 ['Sara spricht mit ___ Nachbarn. (die, Plural)','den','dem','der','mit + جمع داتيف: den Nachbarn.','Mit plus dative plural: den Nachbarn.'],
 ]
};
