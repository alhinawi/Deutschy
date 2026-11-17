import type {Ex} from './exercises';
// Append only; saved topic/index identities stay stable.
export const waescheregalGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Mila sucht ___ Fusselrolle. (die)','die','der','den','suchen بياخد أكوزاتيف؛ Fusselrolle مؤنث: die.','Suchen takes accusative; feminine Fusselrolle takes die.'],
 ['Sami nimmt ___ Korb. (der)','den','dem','der','Korb مفعول مذكر أكوزاتيف: den.','Korb is a masculine accusative object: den.'],
 ['Leyla fotografiert ___ alte Waschbrett. (das)','das','dem','den','Waschbrett محايد أكوزاتيف: das.','Waschbrett is neuter accusative: das.'],
 ['Ines legt ___ Hemd auf den Tisch. (ihr)','ihr','ihrem','ihren','Hemd محايد أكوزاتيف: ihr.','Hemd is neuter accusative: ihr.'],
 ],
 possessiv:[
 ['Mila sagt: Das ist ___ Pullover. (ich)','mein','meine','meinen','Pullover فاعل مذكر نوميناتيف؛ ich: mein.','Pullover is masculine nominative; ich takes mein.'],
 ['Sami, wo ist ___ Bürste? (du)','deine','dein','deinen','Bürste فاعل مؤنث نوميناتيف؛ du: deine.','Bürste is feminine nominative; du takes deine.'],
 ['Leyla fotografiert ___ Waschbrett. (wir)','unser','unsere','unseren','Waschbrett محايد أكوزاتيف؛ wir: unser.','Waschbrett is neuter accusative; wir takes unser.'],
 ['Ines sucht ___ beiden Hemden. (sie, Singular)','ihre','ihr','ihren','Hemden جمع أكوزاتيف؛ الملكية بتاعة Ines: ihre.','Hemden is accusative plural; singular sie takes ihre.'],
 ],
 modalverben:[
 ['Mila ___ die Rolle benutzen. (wollen)','will','wollt','wollen','Mila مفرد: will؛ benutzen مصدر في الآخر.','Singular Mila takes will, with the infinitive benutzen last.'],
 ['Wir ___ zuerst die Pflegehinweise lesen. (möchten)','möchten','möchtet','möchte','wir مع möchten: möchten.','Wir takes möchten.'],
 ['___ du den Zettel ergänzen? (können)','Kannst','Könnt','Können','du مع können: kannst؛ الفعل أول السؤال.','Du takes kannst, with the verb first in a yes/no question.'],
 ['Ihr ___ das Hemd getrennt hinlegen. (sollen)','sollt','soll','sollen','ihr مع sollen: sollt.','Ihr takes sollt.'],
 ],
 imperativ:[
 ['Bitte an eine Person mit du: ___ das Tuch weg! (nehmen)','Nimm','Nehmt','Nehmen','du أمر nehmen: nimm؛ weg في الآخر.','The du imperative of nehmen is nimm; weg comes last.'],
 ['Bitte an mehrere Personen mit ihr: ___ auf den Zettel! (schauen)','Schaut','Schau','Schauen','ihr أمر schauen: schaut، من غير الضمير.','The ihr imperative is schaut, without the pronoun.'],
 ['Höfliche Bitte mit Sie: ___ Sie das Brett bitte hierhin. (legen)','Legen','Leg','Legt','الأمر الرسمي: Legen Sie.','The formal imperative is Legen Sie.'],
 ['Bitte an eine Person mit du: ___ die Rolle zurück! (legen)','Leg','Legt','Legen','du أمر legen: leg؛ lege كمان صحيح بس مش ضمن الاختيارات.','The du imperative is leg; lege is also valid but is not among the choices.'],
 ],
 komparativ:[
 ['Der grüne Griff ist ___ als der weiße. (lang)','länger','langer','am längsten','lang في المقارنة: länger مع als.','Lang becomes länger with als.'],
 ['Diese Bürste ist ___ als die andere. (klein)','kleiner','kleinste','am kleinsten','klein في المقارنة: kleiner.','The comparative of klein is kleiner.'],
 ['Das erste Foto ist ___ als das zweite. (dunkel)','dunkler','dunkelste','am dunkelsten','dunkel في المقارنة غالباً dunkler.','The usual comparative form of dunkel is dunkler.'],
 ['Jetzt kann man den Rand ___ sehen als vorher. (gut)','besser','guter','am besten','gut في المقارنة غير منتظمة: besser.','Gut has the irregular comparative besser.'],
 ],
 'dativ-praepositionen':[
 ['Die Rolle liegt bei ___ Handtüchern. (die)','den','die','der','bei داتيف؛ جمع Handtücher بياخد den ونهاية n: Handtüchern.','Bei takes dative; plural Handtücher becomes den Handtüchern.'],
 ['Leyla spricht mit ___ Vater. (ihr)','ihrem','ihren','ihrer','mit داتيف؛ Vater مذكر: ihrem.','Mit takes dative; masculine Vater takes ihrem.'],
 ['Karim nimmt das Hemd aus ___ Korb. (der)','dem','den','des','aus داتيف؛ Korb مذكر: dem.','Aus takes dative; masculine Korb takes dem.'],
 ['Nach ___ Foto legt Leyla das Tuch zurück. (das)','dem','das','den','nach داتيف؛ Foto محايد: dem.','Nach takes dative; neuter Foto takes dem.'],
 ],
};
