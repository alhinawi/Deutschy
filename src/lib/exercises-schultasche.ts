import type {Ex} from './exercises';
// Append only; earlier saved topic/index identities stay stable.
export const schultascheGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Lea öffnet ___ kleine Federmäppchen. (das)','das','dem','des','Federmäppchen محايد أكوزاتيف: das.','Federmäppchen is neuter accusative: das.'],
 ['Nils nimmt ___ lose Gummiband. (das)','das','dem','des','Gummiband محايد أكوزاتيف: das.','Gummiband is neuter accusative: das.'],
 ['Hana beschriftet ___ kleinen Umschlag. (der)','den','dem','des','Umschlag مذكر أكوزاتيف: den.','Umschlag is masculine accusative: den.'],
 ['Esra beschreibt ___ braune Mäppchen. (das)','das','dem','des','Mäppchen محايد أكوزاتيف: das.','Mäppchen is neuter accusative: das.'],
 ],
 possessiv:[
 ['Lea sucht ___ Federmäppchen. (sie, Singular)','ihr','ihren','ihrem','Lea مع محايد أكوزاتيف: ihr Federmäppchen.','Lea takes ihr with neuter accusative Federmäppchen.'],
 ['Tarek zeigt auf ___ eigene Tasche. (er)','seine','seinen','seinem','er: sein؛ Tasche مؤنث أكوزاتيف: seine.','For er, sein plus feminine accusative Tasche becomes seine.'],
 ['Hana hilft ___ Freundin beim Sortieren. (sie, Singular)','ihrer','ihre','ihren','helfen مع داتيف؛ Freundin مؤنث: ihrer.','Helfen takes dative; feminine Freundin takes ihrer.'],
 ['Wir prüfen ___ kleine Liste. (wir)','unsere','unseren','unserem','Liste مؤنث أكوزاتيف: unsere.','Liste is feminine accusative: unsere.'],
 ],
 modalverben:[
 ['Lea ___ ihre Tasche packen. (wollen)','will','wollen','willst','Lea مفرد: will.','Singular Lea takes will.'],
 ['___ ihr die Karten mischen? (können)','Könnt','Kann','Kannst','ihr مع können: könnt، بحرف كبير أول السؤال.','Ihr takes könnt, capitalized at the start of a question.'],
 ['Esra ___ noch nichts als sicher behaupten. (möchten)','möchte','möchtest','möchten','Esra مفرد: möchte.','Singular Esra takes möchte.'],
 ['Wir ___ zuerst die Beschreibung vergleichen. (wollen)','wollen','will','wollt','wir مع wollen: wollen.','Wir takes wollen.'],
 ],
 imperativ:[
 ['Du-Imperativ von nehmen: ___ das lose Band!','Nimm','Nehmt','Nehmen','nehmen مع du في الأمر: Nimm.','The du imperative of nehmen is Nimm.'],
 ['Ihr-Imperativ von prüfen: ___ die sechs Karten!','Prüft','Prüf','Prüfen','prüfen مع ihr في الأمر: Prüft.','The ihr imperative of prüfen is Prüft.'],
 ['Höflicher Sie-Imperativ von beschreiben: ___ Sie das Mäppchen!','Beschreiben','Beschreibt','Beschreib','الأمر الرسمي: Beschreiben Sie.','The formal imperative is Beschreiben Sie.'],
 ['Du-Imperativ von lesen: ___ bitte die Notiz!','Lies','Lest','Lesen','lesen مع du في الأمر: Lies.','The du imperative of lesen is Lies.'],
 ],
 komparativ:[
 ['Das kleine Fach ist ___ als das große. (klein)','kleiner','kleinste','am kleinsten','المقارنة المطلوبة: kleiner.','The requested comparative is kleiner.'],
 ['Der Schal ist ___ als das Mäppchen. (lang)','länger','langer','am längsten','المقارنة من lang: länger.','The comparative of lang is länger.'],
 ['Die neue Beschreibung ist ___ als die alte. (genau)','genauer','genaueste','am genauesten','المقارنة المطلوبة: genauer.','The requested comparative is genauer.'],
 ['Heute findet Lea ihre Stifte ___ als gestern. (schnell)','schneller','schnellste','am schnellsten','مع als هنا المقارنة: schneller.','The comparative with als here is schneller.'],
 ],
 'dativ-praepositionen':[
 ['Lea kommt mit ___ braunen Mäppchen. (das)','dem','das','den','mit بياخد داتيف: dem Mäppchen.','Mit takes dative: dem Mäppchen.'],
 ['Die Karte ist von ___ Schwester. (die)','der','die','den','von بياخد داتيف: der Schwester.','Von takes dative: der Schwester.'],
 ['Nils lernt bei ___ Freunden. (die)','den','die','der','bei مع الجمع داتيف: den Freunden.','Bei takes dative plural: den Freunden.'],
 ['Lea holt das Mäppchen aus ___ kleinen Fach. (das)','dem','das','den','aus بياخد داتيف: dem kleinen Fach.','Aus takes dative: dem kleinen Fach.'],
 ]
};
