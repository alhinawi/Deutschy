import type {Ex} from './exercises';
// Append only; earlier saved topic/index identities stay stable.
export const fahrradeckeGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Emil sucht ___ kleine Luftpumpe. (die)','die','der','den','Luftpumpe مؤنث أكوزاتيف: die.','Luftpumpe is feminine accusative: die.'],
 ['Salma hebt ___ graue Jacke hoch. (die)','die','der','den','Jacke مؤنث أكوزاتيف: die.','Jacke is feminine accusative: die.'],
 ['Karim zählt ___ dritten Reifenheber. (der)','den','dem','des','Reifenheber مذكر أكوزاتيف: den.','Reifenheber is masculine accusative: den.'],
 ['Paula beschreibt ___ Geräusch. (das)','das','dem','des','Geräusch محايد أكوزاتيف: das.','Geräusch is neuter accusative: das.'],
 ],
 possessiv:[
 ['Emil sucht ___ eigene Pumpe. (er)','seine','seinen','seinem','Emil: sein، وPumpe مؤنث أكوزاتيف: seine.','For Emil, sein plus feminine accusative Pumpe becomes seine.'],
 ['Salma hängt ___ Jacke auf. (sie, Singular)','ihre','ihren','ihrem','Salma: ihr، وJacke مؤنث أكوزاتيف: ihre.','For Salma, ihr plus feminine accusative Jacke becomes ihre.'],
 ['Paula erklärt ___ Freund die Beobachtung. (sie, Singular)','ihrem','ihren','ihre','المستلم داتيف؛ Freund مذكر: ihrem.','The recipient is dative; masculine Freund takes ihrem.'],
 ['Wir ergänzen ___ alte Liste. (wir)','unsere','unseren','unserem','Liste مؤنث أكوزاتيف: unsere.','Liste is feminine accusative: unsere.'],
 ],
 modalverben:[
 ['Paula ___ zuerst nach einem Termin fragen. (wollen)','will','wollen','willst','Paula مفرد: will.','Singular Paula takes will.'],
 ['___ ihr noch einmal nachzählen? (können)','Könnt','Kann','Kannst','ihr مع können: könnt؛ حرف كبير أول السؤال.','Ihr takes könnt; capitalize it at the start of a question.'],
 ['Emil ___ die längere Tasche nehmen. (möchten)','möchte','möchtest','möchten','Emil مفرد: möchte.','Singular Emil takes möchte.'],
 ['Wir ___ keine Diagnose stellen. (können)','können','kann','könnt','wir مع können: können.','Wir takes können.'],
 ],
 imperativ:[
 ['Du-Imperativ von zählen: ___ bitte noch einmal!','Zähl','Zählt','Zählen','zählen مع du في الأمر: Zähl؛ Zähle بديل صحيح مش في الاختيارات.','The du imperative is Zähl; Zähle is also valid but not one of the choices.'],
 ['Ihr-Imperativ von nehmen: ___ die längere Tasche!','Nehmt','Nimm','Nehmen','nehmen مع ihr في الأمر: Nehmt.','The ihr imperative of nehmen is Nehmt.'],
 ['Höflicher Sie-Imperativ von beschreiben: ___ Sie das Geräusch!','Beschreiben','Beschreibt','Beschreib','الأمر الرسمي: Beschreiben Sie.','The formal imperative is Beschreiben Sie.'],
 ['Du-Imperativ von geben: ___ mir bitte die Liste!','Gib','Gebt','Geben','geben مع du في الأمر: Gib.','The du imperative of geben is Gib.'],
 ],
 komparativ:[
 ['Diese Tasche ist ___ als der rote Beutel. (lang)','länger','langer','am längsten','المقارنة من lang: länger.','The comparative of lang is länger.'],
 ['Die neue Notiz ist ___ als die alte. (genau)','genauer','genauste','am genauesten','المقارنة المطلوبة: genauer.','The requested comparative is genauer.'],
 ['Die Beschreibung ist ___ als eine erfundene Diagnose. (hilfreich)','hilfreicher','hilfreichste','am hilfreichsten','مع als المقارنة هنا: hilfreicher.','The comparative with als here is hilfreicher.'],
 ['Das Tuch ist ___ als die Pumpe. (leicht)','leichter','leichteste','am leichtesten','المقارنة المطلوبة: leichter.','The requested comparative is leichter.'],
 ],
 'dativ-praepositionen':[
 ['Das Tuch ist in einem Beutel; Emil kommt mit ___ Beutel herein. (der)','dem','den','des','mit بياخد داتيف: dem Beutel.','Mit takes dative: dem Beutel.'],
 ['Die Pumpe gehört zu ___ alten Set. (das)','dem','das','den','zu بياخد داتيف: dem alten Set.','Zu takes dative: dem alten Set.'],
 ['Paula geht zu ___ Werkstatt. (die)','der','die','den','zu بياخد داتيف: der Werkstatt.','Zu takes dative: der Werkstatt.'],
 ['Deniz spricht mit ___ Freunden über die Notiz. (die)','den','die','der','mit مع الجمع داتيف: den Freunden.','Mit takes dative plural: den Freunden.'],
 ]
};
