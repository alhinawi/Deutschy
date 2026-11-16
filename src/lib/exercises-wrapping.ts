import type {Ex} from './exercises';
// Append after all older banks to preserve saved question identities.
export const wrappingGrammar:Record<string,Ex[]>={
 satzbau:[
 ['Welcher Satz beginnt mit Heute und hat Verbzweitstellung?','Heute packt Nils das Buch ein.','Heute Nils packt das Buch ein.','Heute das Buch Nils einpackt.','بعد Heute الفعل المتصرف packt في المكان التاني، وein في الآخر.','After Heute, finite packt is in second position and ein goes to the end.'],
 ['Welcher Satz beginnt mit Danach und hat Verbzweitstellung?','Danach hängt Amira den Schuhlöffel auf.','Danach Amira hängt den Schuhlöffel auf.','Danach den Schuhlöffel auf Amira hängt.','Danach بتشغل أول مكان؛ hängt في التاني، وبعده الفاعل.','Danach takes the first position; hängt is second, followed by the subject.'],
 ['Welcher Satz beginnt mit Im Regal und hat Verbzweitstellung?','Im Regal stehen zwei Paar Schuhe.','Im Regal zwei Paar Schuhe stehen.','Im Regal zwei stehen Paar Schuhe.','Im Regal عبارة واحدة في أول مكان، وبعدها stehen.','Im Regal is one phrase in the first position, followed by stehen.'],
 ['Welcher Satz ist korrekt?','Morgen sehen wir zuerst in der Kiste nach.','Morgen wir sehen zuerst in der Kiste nach.','Morgen wir zuerst nachsehen in der Kiste.','Morgen أول مكان، sehen تاني مكان وnach آخر الجملة.','Morgen is first, sehen second, and nach ends the clause.'],
 ],
 praesens:[
 ['Nils ___ das Geschenk ein. (packen)','packt','packst','packen','Nils مفرد: packt.','Singular Nils takes packt.'],
 ['Du ___ die Paare zusammen. (stellen)','stellst','stellt','stelle','مع du النهاية -st: stellst.','With du, the ending is -st: stellst.'],
 ['Ihr ___ ein langes Band. (suchen)','sucht','suchst','suche','مع ihr: sucht.','With ihr: sucht.'],
 ['Ich ___ die Kiste neben die Tür. (legen)','lege','legt','legst','مع ich: lege.','With ich: lege.'],
 ],
 negation:[
 ['Das ist ___ Geschenktüte, sondern ein Umschlag.','keine','kein','keinen','نفي اسم مؤنث من غير أداة معرفة: keine Geschenktüte.','Negate an indefinite feminine noun with keine Geschenktüte.'],
 ['Das Papier ist ___ groß genug.','nicht','kein','keinen','هنا بننفي الصفة groß genug بـ nicht.','Here nicht negates the adjective phrase groß genug.'],
 ['Wir haben ___ langes Band mehr.','kein','keine','keinen','Band محايد وأكوزاتيف: kein langes Band.','Band is neuter accusative: kein langes Band.'],
 ['Amira sucht den Schuhlöffel ___ mehr hinter dem Stiefel.','nicht','kein','keine','nicht mehr يعني مبقتش؛ المفعول هنا معرف بـ den.','Nicht mehr means no longer; the object here has definite den.'],
 ],
 'trennbare-verben':[
 ['Nils packt das Buch ___. (einpacken)','ein','auf','nach','einpacken: packt ... ein.','Einpacken separates as packt ... ein.'],
 ['Amira hängt den Schuhlöffel ___. (aufhängen)','auf','ein','mit','aufhängen: hängt ... auf.','Aufhängen separates as hängt ... auf.'],
 ['Deniz sieht in der Kiste ___. (nachsehen)','nach','aus','ein','nachsehen بمعنى يبص أو يراجع هنا: sieht ... nach.','Nachsehen means to look/check here: sieht ... nach.'],
 ['Mara bringt die Karte ___. (mitbringen)','mit','nach','aus','mitbringen: bringt ... mit.','Mitbringen separates as bringt ... mit.'],
 ],
 dativ:[
 ['Amira zeigt ___ Bruder den Haken. (der)','dem','den','des','الشخص اللي بتوريه الحاجة داتيف: dem Bruder.','The person shown something takes the dative: dem Bruder.'],
 ['Nils gibt ___ Freundin das Buch. (die)','der','die','den','الشخص اللي بياخد الحاجة داتيف مؤنث: der Freundin.','The recipient is feminine dative: der Freundin.'],
 ['Das rote Band gefällt ___. (ich)','mir','mich','mein','gefallen بياخد داتيف: mir.','Gefallen takes the dative: mir.'],
 ['Die Schuhe gehören ___. (du)','dir','dich','dein','gehören بياخد داتيف: dir.','Gehören takes the dative: dir.'],
 ],
 perfekt:[
 ['Nils hat das Buch ___. (einpacken)','eingepackt','einpackt','geeinpackt','مع البادئة المنفصلة ein، ge بتدخل في النص: eingepackt.','With separable ein, ge goes in the middle: eingepackt.'],
 ['Amira hat die Paare ___. (ordnen)','geordnet','geordnen','ordnete','Partizip II من ordnen هو geordnet.','The past participle of ordnen is geordnet.'],
 ['Wir haben zuerst in der Kiste ___. (nachsehen)','nachgesehen','genachsehen','nachgeseht','nachsehen: nachgesehen.','The past participle of nachsehen is nachgesehen.'],
 ['Deniz hat die neue Ordnung ___. (aufschreiben)','aufgeschrieben','geaufschrieben','aufschrieb','aufschreiben: aufgeschrieben.','The past participle of aufschreiben is aufgeschrieben.'],
 ]
};
