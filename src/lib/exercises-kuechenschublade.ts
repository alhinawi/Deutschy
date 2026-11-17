import type {Ex} from './exercises';
// Append only; keep earlier saved question identities stable.
export const kuechenschubladeGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Jana sucht ___ kleinen Sparschäler. (der)','den','dem','des','Sparschäler مذكر أكوزاتيف: den.','Sparschäler is masculine accusative: den.'],
 ['Malik leiht ___ Kartoffelstampfer aus. (der)','den','dem','des','Kartoffelstampfer مذكر أكوزاتيف: den.','Kartoffelstampfer is masculine accusative: den.'],
 ['Amir holt ___ große Schüssel. (die)','die','der','den','Schüssel مؤنث أكوزاتيف: die.','Schüssel is feminine accusative: die.'],
 ['Karim vergrößert ___ zweite Foto. (das)','das','dem','des','Foto محايد أكوزاتيف: das.','Foto is neuter accusative: das.'],
 ],
 possessiv:[
 ['Jana öffnet ___ schmale Schublade. (sie, Singular)','ihre','ihren','ihrem','Jana مع مؤنث أكوزاتيف: ihre.','Jana takes ihre with feminine accusative Schublade.'],
 ['Malik bringt ___ Stampfer zurück. (er)','seinen','sein','seinem','er: sein؛ Stampfer مذكر أكوزاتيف: seinen.','For er, masculine accusative Stampfer takes seinen.'],
 ['Eva hilft ___ Nachbarn. (sie, Singular)','ihrem','ihren','ihr','helfen مع داتيف؛ Nachbar اسم ضعيف مذكر: ihrem Nachbarn.','Helfen takes dative; weak masculine Nachbar becomes ihrem Nachbarn.'],
 ['Wir prüfen ___ beiden Karten. (wir)','unsere','unseren','unserem','Karten جمع أكوزاتيف: unsere.','Karten is accusative plural: unsere.'],
 ],
 modalverben:[
 ['Malik ___ am Sonntag kochen. (wollen)','will','wollen','willst','Malik مفرد: will.','Singular Malik takes will.'],
 ['___ ihr die Fotos vergrößern? (können)','Könnt','Kann','Kannst','ihr مع können: könnt؛ أول السؤال بحرف كبير.','Ihr takes könnt, capitalized at the start of the question.'],
 ['Eva ___ ihre Schüssel selbst benutzen. (möchten)','möchte','möchtest','möchten','Eva مفرد: möchte.','Singular Eva takes möchte.'],
 ['Wir ___ zuerst den Tisch freiräumen. (wollen)','wollen','will','wollt','wir مع wollen: wollen.','Wir takes wollen.'],
 ],
 imperativ:[
 ['Du-Imperativ von geben: ___ mir bitte die Karte!','Gib','Gebt','Geben','geben مع du في الأمر: Gib.','The du imperative of geben is Gib.'],
 ['Ihr-Imperativ von vergleichen: ___ die beiden Fotos!','Vergleicht','Vergleich','Vergleichen','الأمر مع ihr: Vergleicht.','The ihr imperative is Vergleicht.'],
 ['Höflicher Sie-Imperativ von öffnen: ___ Sie die Schublade!','Öffnen','Öffnet','Öffne','الأمر الرسمي: Öffnen Sie.','The formal imperative is Öffnen Sie.'],
 ['Du-Imperativ von nehmen: ___ nur den Stampfer!','Nimm','Nehmt','Nehmen','nehmen مع du في الأمر: Nimm.','The du imperative of nehmen is Nimm.'],
 ],
 komparativ:[
 ['Die linke Schublade ist ___ als die rechte. (schmal)','schmaler','schmalste','am schmalsten','المقارنة المطلوبة: schmaler؛ schmäler كمان صيغة صحيحة، مش اختيار غلط هنا.','The requested comparative is schmaler. Schmäler is also valid and is not used as a distractor.'],
 ['Der Stampfer ist ___ als der kleine Löffel. (lang)','länger','langer','am längsten','المقارنة من lang: länger.','The comparative of lang is länger.'],
 ['Das vergrößerte Foto ist ___ als das kleine. (deutlich)','deutlicher','deutlichste','am deutlichsten','المقارنة المطلوبة: deutlicher.','The requested comparative is deutlicher.'],
 ['Heute findet Jana den Schäler ___ als gestern. (schnell)','schneller','schnellste','am schnellsten','مع als هنا المقارنة: schneller.','The comparative with als here is schneller.'],
 ],
 'dativ-praepositionen':[
 ['Der Stampfer kommt von ___ Nachbarin. (die)','der','die','den','von بياخد داتيف: der Nachbarin.','Von takes dative: der Nachbarin.'],
 ['Amir holt die Schüssel aus ___ Schrank. (der)','dem','den','des','aus بياخد داتيف: dem Schrank.','Aus takes dative: dem Schrank.'],
 ['Jana kocht mit ___ Freunden. (die)','den','die','der','mit مع جمع داتيف: den Freunden.','Mit takes dative plural: den Freunden.'],
 ['Malik geht nach ___ Essen nach Hause. (das)','dem','das','den','nach بياخد داتيف: dem Essen.','Nach takes dative: dem Essen.'],
 ]
};
