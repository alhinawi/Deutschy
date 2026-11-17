import type {Ex} from './exercises';
// Append only: existing question identities stay stable.
export const badrundeGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Paul hebt ___ Deckel vom Korb. (der)','den','dem','des','Deckel مفعول مذكر أكوزاتيف: den.','Deckel is a masculine accusative object: den.'],
 ['Mina findet ___ leere Flasche. (die)','die','der','den','Flasche مؤنث أكوزاتيف: die.','Flasche is feminine accusative: die.'],
 ['Lea nimmt ___ Flaschen wieder in die Hand. (Plural)','die','der','das','Flaschen جمع أكوزاتيف: die.','Flaschen is accusative plural: die.'],
 ['Tom stellt ___ Becher zurück. (der)','den','dem','der','Becher مذكر أكوزاتيف: den.','Becher is masculine accusative: den.'],
 ],
 possessiv:[
 ['Lea hängt ___ Handtuch auf. (sie, Singular)','ihr','ihre','ihren','Handtuch محايد أكوزاتيف؛ sie مفرد: ihr.','Handtuch is neuter accusative; singular sie takes ihr.'],
 ['Amir sucht ___ Seifenschale. (er)','seine','sein','seinen','Seifenschale مؤنث أكوزاتيف؛ er: seine.','Seifenschale is feminine accusative; er takes seine.'],
 ['Wir zählen ___ Ringe. (wir)','unsere','unser','unserem','Ringe جمع أكوزاتيف؛ wir: unsere.','Ringe is accusative plural; wir takes unsere.'],
 ['Tom, ist das ___ Zahnputzbecher? (du)','dein','deine','deinen','Zahnputzbecher مذكر نوميناتيف؛ du: dein.','Zahnputzbecher is masculine nominative; du takes dein.'],
 ],
 modalverben:[
 ['Nina ___ den Vorhang wieder aufhängen. (möchten)','möchte','möchtet','möchten','Nina مفرد: möchte والمصدر في الآخر.','Singular Nina takes möchte, with infinitive last.'],
 ['Wir ___ zuerst die Angaben lesen. (wollen)','wollen','wollt','will','wir مع wollen: wollen.','Wir takes wollen.'],
 ['___ du den Deckel zurücksetzen? (können)','Kannst','Könnt','Können','du مع können: kannst.','Du takes kannst.'],
 ['Ihr ___ die Ringe getrennt liegen lassen. (sollen)','sollt','soll','sollen','ihr مع sollen: sollt.','Ihr takes sollt.'],
 ],
 imperativ:[
 ['An eine Person mit du: ___ die Seife in die Schale! (legen)','Leg','Legt','Legen','du أمر legen: leg؛ lege صحيح كمان بس مش ضمن الاختيارات.','The du imperative is leg; lege is also valid but not offered.'],
 ['An mehrere Personen mit ihr: ___ die Flaschen aufs Regal! (stellen)','Stellt','Stell','Stellen','ihr أمر stellen: stellt.','The ihr imperative of stellen is stellt.'],
 ['Höflich mit Sie: ___ Sie zuerst nach. (fragen)','Fragen','Frag','Fragt','الأمر الرسمي: Fragen Sie ... nach.','Formal imperative: Fragen Sie ... nach.'],
 ['An eine Person mit du: ___ den Becher zurück! (nehmen)','Nimm','Nehmt','Nehmen','du أمر nehmen: nimm.','The du imperative of nehmen is nimm.'],
 ],
 komparativ:[
 ['Der blaue Becher ist ___ als der rote. (groß)','größer','großer','am größten','groß في المقارنة: größer.','The comparative of groß is größer.'],
 ['Der rechte Haken hängt ___ als der linke. (hoch)','höher','hocher','am höchsten','hoch في المقارنة: höher.','The comparative of hoch is höher.'],
 ['Die neue Matte ist ___ als die alte. (weich)','weicher','weichste','am weichsten','weich في المقارنة: weicher.','The comparative of weich is weicher.'],
 ['Diese Ablage ist ___ als die andere. (breit)','breiter','breiteste','am breitesten','breit في المقارنة: breiter.','The comparative of breit is breiter.'],
 ],
 'dativ-praepositionen':[
 ['Nina fragt nach ___ passenden Ring. (der)','dem','den','des','nach داتيف؛ der Ring: dem passenden Ring.','Nach takes dative: dem passenden Ring.'],
 ['Lea nimmt die Flasche aus ___ Korb. (der)','dem','den','der','aus داتيف؛ Korb مذكر: dem.','Aus takes dative; masculine Korb takes dem.'],
 ['Tom spricht mit ___ Schwester. (seine)','seiner','seine','seinen','mit داتيف؛ Schwester مؤنث: seiner.','Mit takes dative; feminine Schwester takes seiner.'],
 ['Seit ___ Woche fehlt ein Ring. (eine)','einer','eine','einen','seit داتيف؛ Woche مؤنث: einer.','Seit takes dative; feminine Woche takes einer.'],
 ],
};
