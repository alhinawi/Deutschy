import type {Ex} from './exercises';
// Append only: existing question identities stay stable.
export const kochrundeGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Lara nimmt ___ Reibe. (die)','die','der','den','Reibe مؤنث أكوزاتيف: die.','Reibe is feminine accusative: die.'],
 ['Karim holt ___ Pfannenwender. (der)','den','dem','des','Pfannenwender مذكر أكوزاتيف: den.','Pfannenwender is masculine accusative: den.'],
 ['Ben sucht ___ Sieb. (das)','das','dem','der','Sieb محايد أكوزاتيف: das.','Sieb is neuter accusative: das.'],
 ['Nora nimmt ___ Schöpfkelle. (die)','die','der','den','Schöpfkelle مؤنث أكوزاتيف: die.','Schöpfkelle is feminine accusative: die.'],
 ],
 possessiv:[
 ['Lara sucht ___ Schneidebrett. (sie, Singular)','ihr','ihre','ihren','Schneidebrett محايد أكوزاتيف؛ sie مفرد: ihr.','Schneidebrett is neuter accusative; singular sie takes ihr.'],
 ['Elias reinigt ___ Pfanne. (er)','seine','sein','seinen','Pfanne مؤنث أكوزاتيف؛ er: seine.','Pfanne is feminine accusative; er takes seine.'],
 ['Wir holen ___ Schüsseln. (wir)','unsere','unser','unserem','Schüsseln جمع أكوزاتيف؛ wir: unsere.','Schüsseln is accusative plural; wir takes unsere.'],
 ['Karim, ist das ___ Wasserkocher? (du)','dein','deine','deinen','Wasserkocher مذكر نوميناتيف؛ du: dein.','Wasserkocher is masculine nominative; du takes dein.'],
 ],
 modalverben:[
 ['Ben ___ die Brühe behalten. (möchten)','möchte','möchtet','möchten','Ben مفرد: möchte.','Singular Ben takes möchte.'],
 ['Wir ___ die Zutaten getrennt anbieten. (wollen)','wollen','wollt','will','wir مع wollen: wollen.','Wir takes wollen.'],
 ['___ du das Brett holen? (können)','Kannst','Könnt','Können','du مع können: kannst.','Du takes kannst.'],
 ['Ihr ___ zuerst nach den Wünschen fragen. (sollen)','sollt','soll','sollen','ihr مع sollen: sollt.','Ihr takes sollt.'],
 ],
 imperativ:[
 ['An eine Person mit du: ___ die Kelle neben den Topf! (legen)','Leg','Legt','Legen','du أمر legen: leg؛ lege صحيح كمان بس مش ضمن الاختيارات.','The du imperative is leg; lege is also valid but not offered.'],
 ['An mehrere Personen mit ihr: ___ das Sieb auf den Tisch! (stellen)','Stellt','Stell','Stellen','ihr أمر stellen: stellt.','The ihr imperative of stellen is stellt.'],
 ['Höflich mit Sie: ___ Sie das Brett. (nehmen)','Nehmen','Nimm','Nehmt','الأمر الرسمي: Nehmen Sie.','Formal imperative: Nehmen Sie.'],
 ['An eine Person mit du: ___ mir bitte die Reibe! (geben)','Gib','Gebt','Geben','du أمر geben: gib.','The du imperative of geben is gib.'],
 ],
 komparativ:[
 ['Die schwarze Pfanne ist ___ als die rote. (groß)','größer','großer','am größten','groß في المقارنة: größer.','The comparative of groß is größer.'],
 ['Dieses Brett ist ___ als das andere. (breit)','breiter','breiteste','am breitesten','breit في المقارنة: breiter.','The comparative of breit is breiter.'],
 ['Die kleine Kelle ist ___ als die große. (leicht)','leichter','leichteste','am leichtesten','leicht في المقارنة: leichter.','The comparative of leicht is leichter.'],
 ['Der neue Griff ist ___ als der alte. (lang)','länger','langer','am längsten','lang في المقارنة: länger.','The comparative of lang is länger.'],
 ],
 'dativ-praepositionen':[
 ['Ben fragt nach ___ großen Sieb. (das)','dem','das','den','nach داتيف؛ Sieb محايد: dem.','Nach takes dative; neuter Sieb takes dem.'],
 ['Lara nimmt die Kelle aus ___ Schublade. (die)','der','die','den','aus داتيف؛ Schublade مؤنث: der.','Aus takes dative; feminine Schublade takes der.'],
 ['Elias kommt mit ___ Bruder. (sein)','seinem','seinen','sein','mit داتيف؛ Bruder مذكر: seinem.','Mit takes dative; masculine Bruder takes seinem.'],
 ['Seit ___ Monat haben wir diese Reibe. (ein)','einem','einen','eines','seit داتيف؛ Monat مذكر: einem.','Seit takes dative; masculine Monat takes einem.'],
 ],
};
