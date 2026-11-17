import type {Ex} from './exercises';
// Append only; previous saved topic/index identities stay stable.
export const balkonrundeGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Lina stellt ___ Klappstuhl an die Wand. (der)','den','dem','der','Klappstuhl مفعول مذكر أكوزاتيف: den.','Klappstuhl is a masculine accusative object: den.'],
 ['Timo sucht ___ Gießkanne. (die)','die','der','den','Gießkanne مؤنث أكوزاتيف: die.','Gießkanne is feminine accusative: die.'],
 ['Eva misst ___ leeren Blumenkasten. (der)','den','dem','des','Blumenkasten مذكر أكوزاتيف: den.','Blumenkasten is masculine accusative: den.'],
 ['Sara rückt ___ Stuhl näher an den Tisch. (ihr)','ihren','ihrem','ihrer','Stuhl مذكر أكوزاتيف؛ ihr: ihren.','Stuhl is masculine accusative; ihr takes ihren.'],
 ],
 possessiv:[
 ['Lina sagt: Das ist ___ Buch. (ich)','mein','meine','meinen','Buch محايد نوميناتيف؛ ich: mein.','Buch is neuter nominative; ich takes mein.'],
 ['Timo, wo steht ___ Gießkanne? (du)','deine','dein','deinen','Gießkanne مؤنث نوميناتيف؛ du: deine.','Gießkanne is feminine nominative; du takes deine.'],
 ['Eva beschreibt ___ Balkon. (wir)','unseren','unser','unserem','Balkon مذكر أكوزاتيف؛ wir: unseren.','Balkon is masculine accusative; wir takes unseren.'],
 ['Sara zeigt Leon ___ Pflanzen. (sie, Singular)','ihre','ihr','ihren','Pflanzen مفعول جمع أكوزاتيف؛ الملكية بتاعة Sara: ihre.','Pflanzen is accusative plural; singular sie takes ihre.'],
 ],
 modalverben:[
 ['Eva ___ den Kasten später bepflanzen. (wollen)','will','wollt','wollen','Eva مفرد: will والمصدر في الآخر.','Singular Eva takes will, with the infinitive last.'],
 ['Wir ___ zuerst Fragen sammeln. (möchten)','möchten','möchtet','möchte','wir مع möchten: möchten.','Wir takes möchten.'],
 ['___ du den Stuhl zusammenklappen? (können)','Kannst','Könnt','Können','du مع können: kannst.','Du takes kannst.'],
 ['Ihr ___ die Kanne neben den Topf stellen. (sollen)','sollt','soll','sollen','ihr مع sollen: sollt.','Ihr takes sollt.'],
 ],
 imperativ:[
 ['Bitte an eine Person mit du: ___ den Stuhl an die Wand! (stellen)','Stell','Stellt','Stellen','du أمر stellen: stell؛ stelle كمان صحيح بس مش ضمن الاختيارات.','The du imperative is stell; stelle is also valid but not among the choices.'],
 ['Bitte an mehrere Personen mit ihr: ___ den Untersetzer unter dem Topf! (lassen)','Lasst','Lass','Lassen','ihr أمر lassen: lasst.','The ihr imperative of lassen is lasst.'],
 ['Höfliche Bitte mit Sie: ___ Sie zuerst nach. (fragen)','Fragen','Frag','Fragt','الأمر الرسمي: Fragen Sie ... nach.','The formal imperative is Fragen Sie ... nach.'],
 ['Bitte an eine Person mit du: ___ das Buch vom Stuhl! (nehmen)','Nimm','Nehmt','Nehmen','du أمر nehmen: nimm.','The du imperative of nehmen is nimm.'],
 ],
 komparativ:[
 ['Der neue Kasten ist ___ als der alte. (breit)','breiter','breiteste','am breitesten','breit في المقارنة: breiter مع als.','The comparative of breit is breiter with als.'],
 ['Der Holzstuhl ist ___ als der kleine Hocker. (schwer)','schwerer','schwerste','am schwersten','schwer في المقارنة: schwerer.','The comparative of schwer is schwerer.'],
 ['Sara stellt den Stuhl ___ an den Tisch als vorher. (nah)','näher','naher','am nächsten','nah في المقارنة: näher.','The comparative of nah is näher.'],
 ['Der Untersetzer ist ___ als der Teller. (klein)','kleiner','kleinste','am kleinsten','klein في المقارنة: kleiner.','The comparative of klein is kleiner.'],
 ],
 'dativ-praepositionen':[
 ['Eva spricht mit ___ Nachbarn. (der, Singular)','dem','den','des','mit داتيف؛ Nachbar مذكر مفرد: dem Nachbarn.','Mit takes dative; singular masculine Nachbar becomes dem Nachbarn.'],
 ['Leon nimmt das Buch aus ___ Tasche. (die)','der','die','den','aus داتيف؛ Tasche مؤنث: der.','Aus takes dative; feminine Tasche takes der.'],
 ['Nach ___ Aufräumen trinken sie Tee. (das)','dem','das','den','nach داتيف؛ Aufräumen اسم محايد: dem.','Nach takes dative; the nominalized infinitive Aufräumen is neuter: dem.'],
 ['Der leere Kasten steht seit ___ Tagen hier. (zwei)','zwei','zweien','zweier','seit بياخد داتيف؛ العدد zwei من غير نهاية وTagen جمع داتيف.','Seit takes dative; zwei stays uninflected and Tagen is dative plural.'],
 ],
};
