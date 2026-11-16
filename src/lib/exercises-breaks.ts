import type {Ex} from './exercises';
// Append after every older bank. Saved g:topic:index meanings stay fixed.
export const breakGrammar:Record<string,Ex[]>={
 satzbau:[
 ['Im Park ___ Lina eine Pause. (machen)','macht','machen','machst','عبارة المكان في الأول، والفعل المصرف في المكان التاني: macht.','The place phrase comes first; the finite verb macht takes second position.'],
 ['___ liegt die Trinkflasche?','Wo','Wen','Wer','السؤال عن مكان حاجة ثابتة بكلمة Wo.','Ask about an object’s location with Wo.'],
 ['Sami ordnet die Seiten, ___ er sie einheftet. (before)','bevor','denn','deshalb','bevor معناها قبل ما، وبتخلي الفعل في آخر الجملة التابعة.','Bevor means before and puts the verb at the end of the subordinate clause.'],
 ['Die Zahl ist noch offen, ___ nennen wir sie nicht. (therefore)','deshalb','weil','dass','deshalb في الأول، فالفعل nennen بعده والفاعل wir بعد الفعل.','Deshalb takes first position, followed by the verb nennen and then wir.'],
 ],
 praesens:[
 ['Lina ___ ein Brot. (essen)','isst','esst','essen','essen مع مفرد الغائب بتبقى isst.','Essen becomes isst in the third-person singular.'],
 ['Du ___ die Seiten nach Hause. (tragen)','trägst','tragt','tragen','tragen مع du بتبقى trägst.','Tragen becomes trägst with du.'],
 ['Wir ___ den Bestand. (prüfen)','prüfen','prüft','prüfst','مع wir الشكل prüfen.','Wir takes prüfen.'],
 ['___ ihr alle drei Seiten? (haben)','Habt','Hat','Hast','مع ihr الشكل habt.','Ihr takes habt.'],
 ],
 negation:[
 ['Auf der Bank bleibt ___ Papier liegen. (kein)','kein','keinen','keine','Papier محايد وفاعل هنا، فنستخدم kein.','Papier is neuter and the subject here, so use kein.'],
 ['Die zusätzliche Sorte ist ___ bestätigt.','nicht','kein','keine','بننفي bestätigt بكلمة nicht.','Negate bestätigt with nicht.'],
 ['Sami hat heute ___ fehlende Seite. (eine)','keine','keinen','kein','Seite مؤنث أكوزاتيف: keine fehlende Seite.','Seite is feminine accusative: keine fehlende Seite.'],
 ['Lina nimmt ___ Kaffee mit. (ein)','keinen','kein','keine','Kaffee مذكر أكوزاتيف، فنفيه keinen.','Kaffee is masculine accusative, so its negative determiner is keinen.'],
 ],
 'trennbare-verben':[
 ['Lina hebt den Apfel für später ___. (aufheben)','auf','an','zurück','aufheben هنا يحتفظ بحاجة: hebt ... auf.','Aufheben here means keep something for later: hebt ... auf.'],
 ['Sami ___ die Seiten ein. (einheften)','heftet','heften','heftest','einheften مع Sami بتبقى heftet ... ein.','Einheften with Sami becomes heftet ... ein.'],
 ['Das Team hält einige Becher ___. (bereithalten)','bereit','mit','ab','bereithalten بيتفصل: hält ... bereit.','Bereithalten separates as hält ... bereit.'],
 ['___ du deine Trinkflasche mit? (mitnehmen)','Nimmst','Nehmt','Nehmen','mitnehmen مع du بتبقى nimmst ... mit.','Mitnehmen with du becomes nimmst ... mit.'],
 ],
 dativ:[
 ['Eva erklärt ___ die Idee. (er)','ihm','ihn','er','الشخص اللي بنشرح له داتيف: ihm.','The person receiving the explanation is dative: ihm.'],
 ['Die Brotdose gehört ___. (sie, Singular)','ihr','sie','ihre','gehören بياخد داتيف؛ sie هنا تبقى ihr.','Gehören takes the dative; singular sie becomes ihr.'],
 ['Nora antwortet ___ Gast. (der)','dem','den','des','antworten بياخد داتيف، والمذكر dem Gast.','Antworten takes the dative: dem Gast.'],
 ['Das Team hilft ___ Gästen. (die, Plural)','den','die','der','helfen بياخد داتيف؛ الجمع den Gästen.','Helfen takes the dative; plural den Gästen.'],
 ],
 perfekt:[
 ['Lina hat die Flasche ___. (füllen)','gefüllt','gefüllen','füllt','اسم المفعول من füllen هو gefüllt.','The past participle of füllen is gefüllt.'],
 ['Sami ___ die Seite gefunden. (haben)','hat','ist','haben','finden في Perfekt بياخد haben، ومع Sami الشكل hat.','Finden uses haben in the Perfekt; Sami takes hat.'],
 ['Wir haben den Hinweis ___. (erklären)','erklärt','geerklärt','erklären','erklären ببادئة er، فاسم المفعول من غير ge: erklärt.','Erklären starts with inseparable er-, so the participle has no ge-: erklärt.'],
 ['Eva ist nach Hause ___. (gehen)','gegangen','gegeht','gehen','Perfekt من gehen هو ist ... gegangen.','The Perfekt of gehen is ist ... gegangen.'],
 ]
};
