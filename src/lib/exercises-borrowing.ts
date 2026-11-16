import type {Ex} from './exercises';
// Append after every older bank; existing saved identities remain fixed.
export const borrowingGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Mila braucht ___ kleine Ausstechform. (eine)','eine','einen','einem','Ausstechform مؤنث ومفعول به: eine.','Ausstechform is feminine and the direct object: eine.'],
 ['Ben legt ___ Stern auf das Blech. (der)','den','dem','des','Stern مذكر وأكوزاتيف: den Stern.','Stern is masculine accusative: den Stern.'],
 ['Dalia packt ___ Seifenspender ein. (der)','den','dem','der','Seifenspender مذكر ومفعول به: den.','Seifenspender is masculine and the direct object: den.'],
 ['Jonas bestätigt ___ neuen Termin. (ein)','einen','einem','einer','Termin مذكر أكوزاتيف: einen neuen Termin.','Termin is masculine accusative: einen neuen Termin.'],
 ],
 possessiv:[
 ['Dalia sagt: Das ist ___ Nagelschere. (ich)','meine','mein','meinen','Nagelschere مؤنث نوميناتيف: meine.','Nagelschere is feminine nominative: meine.'],
 ['Jonas besucht ___ Nachbarin. (er)','seine','seinen','seinem','صاحب الحاجة er والمفعول Nachbarin مؤنث: seine Nachbarin.','The possessor is er and Nachbarin is feminine accusative: seine Nachbarin.'],
 ['Mila zeigt ___ Bruder den Stern. (sie, Singular)','ihrem','ihren','ihr','Bruder هو الشخص اللي بتوريه الحاجة، داتيف: ihrem Bruder.','Bruder receives what is shown and takes the dative: ihrem Bruder.'],
 ['Wir bringen ___ Formen zurück. (wir)','unsere','unseren','unserem','Formen جمع أكوزاتيف: unsere Formen.','Formen is plural accusative: unsere Formen.'],
 ],
 modalverben:[
 ['Dalia ___ den leeren Spender behalten. (dürfen)','darf','dürft','dürfen','dürfen مع Dalia مفرد بتبقى darf.','Dürfen with singular Dalia becomes darf.'],
 ['Jonas ___ zuerst die Nachbarin fragen. (müssen)','muss','müsst','müssen','müssen مع Jonas مفرد بتبقى muss.','Müssen with singular Jonas becomes muss.'],
 ['___ ihr die Formen am Sonntag zurückbringen? (können)','Könnt','Kann','Können','können مع ihr بتبقى könnt.','Können with ihr becomes könnt.'],
 ['Ich ___ noch nichts versprechen. (wollen)','will','wollt','wollen','wollen مع ich بتبقى will.','Wollen with ich becomes will.'],
 ],
 imperativ:[
 ['___ die Nachbarin zuerst! (fragen, du)','Frag','Fragt','Fragen','الأمر مع du من fragen هنا Frag؛ Frage كمان صيغة صحيحة.','The du imperative is Frag; Frage is also a valid form.'],
 ['___ die Schale bitte zurück! (bringen, ihr)','Bringt','Bring','Bringen','الأمر مع ihr هو Bringt.','The ihr imperative is Bringt.'],
 ['___ Sie den Termin schriftlich! (bestätigen)','Bestätigen','Bestätigt','Bestätige','الأمر الرسمي: Bestätigen Sie.','The formal imperative is Bestätigen Sie.'],
 ['___ die Schachtel zur Tür! (stellen, du)','Stell','Stellt','Stellen','الأمر مع du هنا Stell؛ Stelle كمان صيغة صحيحة.','The du imperative here is Stell; Stelle is also valid.'],
 ],
 komparativ:[
 ['Diese Form ist ___ als die andere. (klein)','kleiner','kleinste','kleinsten','المقارنة من klein هي kleiner، وبعدها als.','The comparative of klein is kleiner, followed by als.'],
 ['Die neue Absprache ist ___ als die alte. (klar)','klarer','klarste','klarsten','صيغة المقارنة klarer.','The comparative is klarer.'],
 ['Die Form bleibt ___ bei Paul als geplant. (lang)','länger','langer','längste','المقارنة من lang بتاخد أوملاوت: länger.','The comparative of lang has an umlaut: länger.'],
 ['Dieser Topflappen ist ___ als der blaue. (dick)','dicker','dickste','dicksten','المقارنة من dick هي dicker.','The comparative of dick is dicker.'],
 ],
 'dativ-praepositionen':[
 ['Die Schale kommt aus ___ Gästebad. (das)','dem','den','des','aus دايماً داتيف؛ المحايد dem Gästebad.','Aus takes the dative: dem Gästebad.'],
 ['Jonas spricht mit ___ Nachbarin. (die)','der','die','den','mit داتيف؛ المؤنث der Nachbarin.','Mit takes the dative: der Nachbarin.'],
 ['Nach ___ Besuch packt Dalia aus. (der)','dem','den','des','nach هنا داتيف: nach dem Besuch.','Nach takes the dative here: nach dem Besuch.'],
 ['Die Formen sind seit ___ Tag bei Jonas. (ein)','einem','einen','einer','seit داتيف: seit einem Tag.','Seit takes the dative: seit einem Tag.'],
 ]
};
