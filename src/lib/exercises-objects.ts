import type {Ex} from './exercises';
// Append after all older extension banks. Prior g:topic:index meanings must not move.
export const objectGrammar:Record<string,Ex[]>={
 satzbau:[
 ['Heute ___ Mira eine Dose. (suchen)','sucht','suchen','suchst','Heute واخدة أول مكان، فالفعل المصرف في المكان التاني: sucht.','Heute fills the first position; the finite verb sucht takes second position.'],
 ['Am Donnerstag ___ Yasmin den Schirm zurück. (bringen)','bringt','bringen','bringst','بعد عبارة الوقت بنحط الفعل، وبعده الفاعل. مع Yasmin الشكل bringt.','After the time phrase comes the verb, then the subject. Yasmin takes bringt.'],
 ['___ steht die blaue Dose?','Wo','Wer','Wen','السؤال عن مكان ثابت: Wo.','Ask about a fixed location with Wo.'],
 ['Mira hat einen Knopf, ___ er ist zu klein.','aber','weil','dass','aber بتربط جملتين رئيسيتين؛ بعده er ist. مع weil أو dass الفعل يروح الآخر.','Aber joins main clauses, so er ist follows. Weil and dass would send the verb to the end.'],
 ],
 praesens:[
 ['Mira ___ die Dose vom Regal. (nehmen)','nimmt','nehmt','nehmen','nehmen مع مفرد الغائب بتبقى nimmt.','Nehmen becomes nimmt in the third-person singular.'],
 ['Du ___ einen großen Knopf. (suchen)','suchst','sucht','suche','مع du بنضيف st: suchst.','Du takes the ending -st: suchst.'],
 ['Wir ___ die offenen Fragen. (notieren)','notieren','notiert','notierst','مع wir الشكل notieren.','Wir takes notieren.'],
 ['___ ihr den Schirm heute? (brauchen)','Braucht','Brauchen','Brauchst','مع ihr بنستخدم braucht. السؤال بيبدأ بالفعل.','Ihr takes braucht. The yes/no question starts with the verb.'],
 ],
 negation:[
 ['Daniel braucht heute ___ Schirm. (ein)','keinen','kein','keine','Schirm مذكر أكوزاتيف، فنفي ein Schirm هنا keinen Schirm.','Schirm is masculine accusative here: keinen Schirm.'],
 ['Der schwarze Knopf ist ___ groß genug.','nicht','kein','keinen','بننفي الوصف groß genug بكلمة nicht.','Negate the description groß genug with nicht.'],
 ['In der Dose liegt ___ Papier. (kein)','kein','keinen','keine','Papier محايد وموجود هنا كفاعل: kein Papier.','Papier is neuter and the subject here: kein Papier.'],
 ['Yasmin hat ___ eigene Schirmtasche. (eine)','keine','keinen','kein','Schirmtasche مؤنث أكوزاتيف، فنستخدم keine.','Schirmtasche is feminine accusative, so use keine.'],
 ],
 'trennbare-verben':[
 ['Yasmin gibt den Schirm am Donnerstag ___. (zurückgeben)','zurück','mit','an','الفعل zurückgeben بيتفصل في الجملة الرئيسية: gibt ... zurück.','Zurückgeben separates in a main clause: gibt ... zurück.'],
 ['___ du den Mantel mit? (mitbringen)','Bringst','Bringt','Bringen','mitbringen مع du: bringst ... mit.','Mitbringen with du becomes bringst ... mit.'],
 ['Die Gruppe sieht die Jacke gemeinsam ___. (ansehen)','an','ab','zu','ansehen بيتفصل: sieht ... an، ومع المفرد sehen بتبقى sieht.','Ansehen separates as sieht ... an; singular sehen changes to sieht.'],
 ['Mira ___ die Dose auf. (aufmachen)','macht','machen','machst','aufmachen مع Mira: macht ... auf.','Aufmachen with Mira becomes macht ... auf.'],
 ],
 dativ:[
 ['Yasmin gibt ___ den Schirm zurück. (er)','ihm','ihn','er','الشخص المستلم مع geben بياخد داتيف: ihm.','The recipient with geben is dative: ihm.'],
 ['Der Schirm gehört ___. (ich)','mir','mich','mein','gehören بياخد داتيف: mir.','Gehören takes the dative: mir.'],
 ['Mira hilft ___ Schwester. (die)','der','die','den','helfen بياخد داتيف؛ المؤنث der Schwester.','Helfen takes the dative: der Schwester.'],
 ['Paula erklärt ___ den Ablauf. (die Besucher, Plural)','den Besuchern','die Besucher','der Besucher','الشخص اللي بنشرح له داتيف: den Besuchern، ونضيف n للاسم الجمع هنا.','The people receiving the explanation are dative: den Besuchern, with -n on this plural noun.'],
 ],
 perfekt:[
 ['Yasmin hat ihren Schirm ___. (vergessen)','vergessen','vergesst','gevergessen','اسم المفعول من vergessen هو vergessen، من غير ge إضافية.','The past participle is vergessen, without an extra ge-.'],
 ['Mira ___ die Dose geöffnet. (haben)','hat','ist','haben','öffnen هنا بيركب مع haben، ومع Mira الشكل hat.','Öffnen uses haben here; Mira takes hat.'],
 ['Wir haben die Fragen ___. (notieren)','notiert','genotiert','notieren','الأفعال اللي بتنتهي بـ ieren اسم المفعول بتاعها من غير ge: notiert.','Verbs ending in -ieren form the participle without ge-: notiert.'],
 ['Daniel ist zu Fuß nach Hause ___. (gehen)','gegangen','gegeht','gegangen sein','Perfekt بتاع gehen: ist ... gegangen.','The Perfekt of gehen is ist ... gegangen.'],
 ]
};
