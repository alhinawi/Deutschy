import type {Ex} from './exercises';
// Append only, retaining every earlier saved topic/index identity.
export const flurablageGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Mila nimmt ___ leeren Schlüsselring. (der)','den','dem','des','Schlüsselring مذكر أكوزاتيف: den.','Schlüsselring is masculine accusative: den.'],
 ['Sami sieht ___ blaue Schale. (die)','die','der','den','Schale مؤنث أكوزاتيف: die.','Schale is feminine accusative: die.'],
 ['Lea trägt ___ leere Kiste. (eine)','eine','einer','einen','Kiste مؤنث أكوزاتيف: eine.','Kiste is feminine accusative: eine.'],
 ['Amir räumt ___ Holzstück weg. (das)','das','dem','des','Holzstück محايد أكوزاتيف: das.','Holzstück is neuter accusative: das.'],
 ],
 possessiv:[
 ['Mila legt ___ Schlüssel in die Tasche. (ihr eigener)','ihren','ihrem','ihre','Mila: ihr، وSchlüssel مذكر أكوزاتيف: ihren.','For Mila, ihr plus masculine accusative Schlüssel becomes ihren.'],
 ['Sami sucht ___ leeren Ring. (sein eigener)','seinen','seinem','seine','Sami: sein، وRing مذكر أكوزاتيف: seinen.','For Sami, sein plus masculine accusative Ring becomes seinen.'],
 ['Lea zeigt ___ Freund das Fach. (ihr eigener)','ihrem','ihren','ihre','المستلم داتيف؛ Freund مذكر: ihrem.','The recipient is dative; masculine Freund takes ihrem.'],
 ['Wir ändern ___ vorläufige Vereinbarung. (unsere)','unsere','unseren','unserem','Vereinbarung مؤنث أكوزاتيف: unsere.','Vereinbarung is feminine accusative: unsere.'],
 ],
 modalverben:[
 ['Sami ___ den leeren Ring haben. (möchten)','möchte','möchtest','möchten','Sami مفرد: möchte.','Singular Sami takes möchte.'],
 ['___ du den freien Platz messen? (können)','Kannst','Könnt','Können','du مع können: kannst؛ أول السؤال حرف كبير.','Du takes kannst; capitalize it at the start of a question.'],
 ['Wir ___ zuerst nachfragen. (wollen)','wollen','wollt','will','wir مع wollen: wollen.','Wir takes wollen.'],
 ['Ihr ___ die Kiste hineintragen. (können)','könnt','kann','können','ihr مع können: könnt.','Ihr takes könnt.'],
 ],
 imperativ:[
 ['Du-Imperativ von nehmen: ___ nur den Ring!','Nimm','Nehmt','Nehmen','nehmen مع du في الأمر: Nimm.','The du imperative of nehmen is Nimm.'],
 ['Ihr-Imperativ von fragen: ___ zuerst!','Fragt','Frag','Fragen','fragen مع ihr في الأمر: Fragt.','The ihr imperative of fragen is Fragt.'],
 ['Höflicher Sie-Imperativ von messen: ___ Sie den Platz!','Messen','Messt','Miss','الأمر الرسمي: Messen Sie.','The formal imperative is Messen Sie.'],
 ['Du-Imperativ von sein: ___ bitte vorsichtig!','Sei','Seid','Sind','sein مع du في الأمر: Sei.','The du imperative of sein is Sei.'],
 ],
 komparativ:[
 ['Die Skizze wirkt ___ als die echte Ablage. (groß)','größer','großer','am größten','المقارنة من groß: größer، وبعدها als.','The comparative of groß is größer, followed by als.'],
 ['Diese Kiste ist ___ als die andere. (leicht)','leichter','leichteste','am leichtesten','صيغة المقارنة: leichter.','The comparative is leichter.'],
 ['Die neue Ordnung ist ___ als vorher. (gut)','besser','guter','am besten','المقارنة من gut: besser.','The comparative of gut is besser.'],
 ['Ela fragt ___ nach als früher. (oft)','öfter','ofter','am häufigsten','المقارنة المطلوبة من oft هنا: öfter. häufiger بديل صحيح لكنه مش من الاختيارات.','The requested comparative of oft here is öfter. Häufiger is also valid but is not one of the choices.'],
 ],
 'dativ-praepositionen':[
 ['Mila kommt mit ___ Tasche herein. (die)','der','die','den','mit بياخد داتيف: der Tasche.','Mit takes dative: der Tasche.'],
 ['Sami geht zu ___ Kommode. (die)','der','die','den','zu بياخد داتيف: der Kommode.','Zu takes dative: der Kommode.'],
 ['Der Ring ist aus ___ festen Metall. (das)','dem','das','den','aus بياخد داتيف: dem festen Metall.','Aus takes dative: dem festen Metall.'],
 ['Lea spricht mit ___ Freunden. (die)','den','die','der','mit مع الجمع داتيف: den Freunden.','Mit takes dative plural: den Freunden.'],
 ]
};
