export type Drill = { id: string; name: string; ar: string; en: string; rows: string[][] };
export const b1Grammar: Drill[] = [
 { id: 'konjunktiv', name: 'Konjunktiv II', ar: 'للطلب بأدب أو حاجة بتتخيلها: würde + المصدر. احفظ hätte و wäre و könnte. بعد wenn الفعل في الآخر.', en: 'For polite requests and imagined situations: würde + infinitive. Learn hätte, wäre and könnte. After wenn, the verb goes last.', rows: [
 ['Wenn ich mehr Zeit hätte, ___ ich öfter lesen.', 'würde', 'werde', 'wurde'],
 ['Höfliche Bitte: ___ Sie mir bitte helfen?', 'Könnten', 'Konnten', 'Können werden'],
 ['Ich ___ gern ein Glas Wasser.', 'hätte', 'hatte', 'habe gehabt'],
 ['Wenn ich du ___, würde ich zum Arzt gehen.', 'wäre', 'war', 'bin'],
 ['Wir ___ gern nach Wien fahren.', 'würden', 'wurden', 'worden'],
 ['Wenn er Geld hätte, ___ er ein Fahrrad kaufen.', 'könnte', 'konnte', 'kannst'],
 ['Ich ___ an deiner Stelle früher anfangen.', 'würde', 'wurde', 'werdet'],
 ['Es wäre schön, wenn du morgen kommen ___.', 'könntest', 'konnte', 'können'],
 ] },
 { id: 'passiv', name: 'Passiv', ar: 'المبني للمجهول بيركّز على اللي بيحصل: werden + Partizip II. في الماضي البسيط: wurde. الشخص اللي بيعمل الفعل ممكن ييجي بعد von + Dativ.', en: 'The passive focuses on the action: werden + Partizip II. In the simple past use wurde. The agent can be introduced by von + Dativ.', rows: [
 ['Das Haus ___ gerade gebaut.', 'wird', 'hat', 'werden'],
 ['Die Briefe ___ jeden Morgen gebracht.', 'werden', 'wird', 'hat'],
 ['Das Fenster wird ___. (öffnen)', 'geöffnet', 'öffnen', 'geöffnen'],
 ['Die Straße ___ gestern gesperrt.', 'wurde', 'wird werden', 'hat'],
 ['Wer backt den Kuchen? Der Kuchen wird ___ meiner Mutter gebacken.', 'von', 'mit', 'bei'],
 ['Die Zimmer ___ gestern gereinigt.', 'wurden', 'wurde', 'hatte'],
 ['Das Auto wird morgen ___. (reparieren)', 'repariert', 'gerepariert', 'reparieren'],
 ['Aktiv: Man schließt die Tür. Passiv: Die Tür ___.', 'wird geschlossen', 'hat geschlossen', 'wird schließen'],
 ] },
 { id: 'relativ', name: 'Relativsätze', ar: 'جملة الوصل بتوصف اسم. الجنس والعدد من الاسم، والحالة من وظيفة الضمير جوه جملة الوصل. الفعل في الآخر.', en: 'A relative clause describes a noun. Gender and number come from the noun; case comes from the pronoun\'s role inside the relative clause. The verb goes last.', rows: [
 ['Das ist der Mann, ___ neben mir wohnt.', 'der', 'den', 'dem'],
 ['Die Frau, ___ ich gestern gesehen habe, ist Ärztin.', 'die', 'der', 'den'],
 ['Das Kind, ___ dort spielt, heißt Ali.', 'das', 'dem', 'den'],
 ['Der Kollege, ___ ich geholfen habe, ist nett.', 'dem', 'den', 'der'],
 ['Die Leute, ___ hier arbeiten, sind freundlich.', 'die', 'denen', 'der'],
 ['Das Buch, ___ du mir gegeben hast, ist spannend.', 'das', 'dem', 'der'],
 ['Die Frau, mit ___ ich spreche, ist meine Lehrerin.', 'der', 'die', 'dem'],
 ['Die Freunde, ___ wir helfen, ziehen morgen um.', 'denen', 'die', 'den'],
 ] },
 { id: 'nebensaetze', name: 'obwohl / damit / falls', ar: 'obwohl = رغم إن، damit = عشان (هدف)، falls = لو حصل إن. التلاتة بيخلّوا الفعل في آخر الجملة. لو بدأت بيهم، الفعل بتاع الجملة الرئيسية بييجي بعد الفاصلة على طول.', en: 'Obwohl expresses contrast, damit a purpose, falls a condition. All send the verb to the end. If the subordinate clause comes first, the main verb follows the comma.', rows: [
 ['Gegensatz: Er geht spazieren, ___ es regnet.', 'obwohl', 'damit', 'falls'],
 ['Ziel: Ich spreche langsam, ___ du mich verstehst.', 'damit', 'obwohl', 'falls'],
 ['Bedingung: ___ du Hilfe brauchst, ruf mich an.', 'Falls', 'Damit', 'Obwohl'],
 ['Sie lernt viel, obwohl sie wenig Zeit ___.', 'hat', 'haben', 'hast'],
 ['Wir sparen Geld, damit wir eine Reise machen ___.', 'können', 'kann', 'könnt'],
 ['Falls der Zug ausfällt, ___ wir den Bus.', 'nehmen', 'wir nehmen', 'genommen'],
 ['Obwohl er müde ist, ___ er weiter.', 'arbeitet', 'er arbeitet', 'arbeiten'],
 ['Ich schreibe es auf, damit ich es nicht ___.', 'vergesse', 'vergessen', 'vergisst'],
 ] },
];

// Original drills, source-checked word-order rules, 2026-11-16.
export const b1GrammarSources:Record<string,string>={
 'indirekte-fragen':'https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-questions',
 'konnektoren':'https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions',
};
b1Grammar.push(
 {id:'indirekte-fragen',name:'Indirekte Fragen',ar:'السؤال غير المباشر جوه جملة: كلمة السؤال بتفضل، ولو السؤال إجابته أيوه أو لأ بنستخدم ob. الفعل المتصرف في آخر الجملة التابعة. علامة الاستفهام حسب الجملة كلها، مش وجود كلمة سؤال لوحده.',en:'An embedded question keeps its question word; a yes/no question uses ob. The finite verb goes last in the dependent clause. Punctuation follows the whole sentence, not merely the presence of a question word.',rows:[
 ['Ich weiß nicht, wann der Kurs ___.','beginnt','beginnen','beginnen wird ist'],
 ['Direkt: Kommt der Bus? Ich frage, ___ der Bus kommt.','ob','wo','wer'],
 ['Können Sie mir sagen, wo ___?','der Bahnhof ist','ist der Bahnhof','der Bahnhof sein'],
 ['Weißt du, wie viel die Karte ___?','kostet','kosten','koste haben'],
 ['Sie möchte wissen, warum er so früh ___.','geht','gehen','gegangen'],
 ['Direkt: Hast du Zeit? Er fragt, ___ ich Zeit habe.','ob','was','wann ist'],
 ['Ich weiß nicht, was sie gestern ___.','gesagt hat','hat gesagt','sagen hat'],
 ['Kannst du mir sagen, wann du ___?','ankommst','kommst an','ankommen'],
 ]},
 {id:'konnektoren',name:'weil / denn / deshalb',ar:'المعنى لوحده مش كفاية: weil بتبدأ جملة تابعة فعلها في الآخر. denn بتربط جملتين رئيسيتين من غير قلب ترتيبهم. deshalb و trotzdem ممكن يحتلوا المكان الأول، وبعدهم الفعل المتصرف. obwohl جملة تابعة، لكن trotzdem مش نفس التركيب.',en:'Meaning is not enough: weil introduces a verb-final dependent clause. Denn links main clauses without changing their internal order. Deshalb and trotzdem can occupy first position, followed by the finite verb. Obwohl introduces a dependent clause; trotzdem uses a different structure.',rows:[
 ['Ich bleibe zu Hause, weil ich krank ___.','bin','sein','bin ich'],
 ['Ich bleibe zu Hause, denn ___.','ich bin krank','ich krank bin','bin ich krank'],
 ['Ich bin krank. Deshalb ___ zu Hause.','bleibe ich','ich bleibe','bleiben ich'],
 ['Es regnet. Trotzdem ___ spazieren.','gehen wir','wir gehen','geht wir'],
 ['Obwohl es regnet, ___ spazieren.','gehen wir','wir gehen','gehen'],
 ['Er kommt später, weil sein Bus Verspätung ___.','hat','haben','hat er'],
 ['Der Bus hat Verspätung. Deshalb ___ später.','kommt er','er kommt','kommen er'],
 ['Sie lernt weiter, denn ___.','sie hat morgen eine Prüfung','sie morgen eine Prüfung hat','hat sie morgen eine Prüfung'],
 ]},
);
