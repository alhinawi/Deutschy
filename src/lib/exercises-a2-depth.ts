import type {Ex} from './exercises';
// Appended after existing rows to preserve device-local question IDs.
export const a2Depth:Record<string,Ex[]>={
 dativ:[
 ['Wir fahren mit den ___. (Plural von Auto)','Autos','Auton','Autosen','جمع Autos منتهي بـ s، مش بنزود n في الداتيف.','Autos ends in -s, so no extra dative -n.'],
 ['Sie spielt mit den ___. (Plural von Kind)','Kindern','Kinder','Kindes','الجمع Kinder بياخد n في الداتيف.','Kinder adds -n in the dative plural.'],
 ['Ich danke ___ für die Hilfe. (du)','dir','dich','dein','danken بياخد داتيف: dir.','Danken takes the dative: dir.'],
 ['Die Jacke gehört ___. (ich)','mir','mich','mein','gehören مع الداتيف: mir.','Gehören takes the dative: mir.'],
 ['Wir helfen ___ Frau. (die)','der','die','den','helfen بياخد داتيف، وأداة المؤنث تبقى der.','Helfen takes the dative; feminine die becomes der.'],
 ['Er gibt ___ Kindern Wasser. (die, Plural)','den','dem','der','الجمع في الداتيف أداته den، وKindern فيها n.','Dative plural uses den; Kindern also has -n.'],
 ],
 'adjektiv-endungen':[
 ['Ich sehe das ___ Kind. (klein)','kleine','kleinen','kleines','بعد das في المفعول المباشر المحايد، الصفة نهايتها e.','After das in neuter accusative, the adjective ends in -e.'],
 ['Sie kauft die ___ Tasche. (rot)','rote','roten','roter','المؤنث المفعول المباشر بعد die بيفضل e.','Feminine accusative after die keeps -e.'],
 ['Wir besuchen den ___ Lehrer. (nett)','netten','nette','netter','المذكر المفعول المباشر بعد den بياخد en.','Masculine accusative after den takes -en.'],
 ['Ich wohne in einem ___ Haus. (klein)','kleinen','kleines','kleinem','مكان ثابت في الداتيف، وبعد einem نهاية الصفة en.','Dative after einem gives the adjective -en.'],
 ['Das ist ein ___ Auto. (neu)','neues','neue','neuen','المحايد في حالة الفاعل بعد ein بياخد es.','Neuter nominative after ein takes -es.'],
 ['Die ___ Kinder spielen. (klein)','kleinen','kleine','kleiner','الجمع بعد أداة التعريف بياخد en.','Plural adjectives after the definite article take -en.'],
 ],
 perfekt:[
 ['Ich habe in Kairo ___. (studieren)','studiert','gestudiert','studieren','أفعال -ieren بتكوّن اسم المفعول من غير ge.','Verbs in -ieren form the participle without ge-.'],
 ['Er ___ sich bewegt. (bewegen)','hat','ist','wird','الفعل هنا انعكاسي، ومعاه haben رغم وجود حركة.','This reflexive use takes haben despite movement.'],
 ['Wir ___ nach Hause gegangen. (gehen)','sind','haben','werden','gehen لتغيير المكان بياخد sein؛ مع wir تبقى sind.','Gehen takes sein for a change of location; wir sind.'],
 ['Sie hat ihre Oma ___. (besuchen)','besucht','gebesucht','besuchen','البادئة be غير منفصلة، فمفيش ge.','The inseparable prefix be- prevents ge-.'],
 ['Ich habe im Supermarkt ___. (einkaufen)','eingekauft','geeinkauft','einkaufen','مع الفعل المنفصل، ge بتيجي بعد البادئة.','A separable verb places ge- after its prefix.'],
 ['Das Kind ist ___. (einschlafen)','eingeschlafen','eingeschlaft','einschlafen','تغيير الحالة مع sein، واسم المفعول eingeschlafen.','A change of state takes sein; the participle is eingeschlafen.'],
 ]
};
