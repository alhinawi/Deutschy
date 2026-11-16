import type { Ex } from './exercises';

// More practice for B1 to C2: [sentence, correct, wrong, wrong, explanation AR, explanation EN]
export const moreB: Record<string, Ex[]> = {
  'verben-mit-praepositionen': [
    ['Ich warte ___ den Bus.', 'auf', 'für', 'an', 'warten auf + Akkusativ', 'warten auf + accusative'],
    ['Sie interessiert sich ___ Musik.', 'für', 'auf', 'über', 'sich interessieren für', 'sich interessieren für'],
    ['Er denkt oft ___ seine Familie.', 'an', 'auf', 'über', 'denken an + Akkusativ', 'denken an + accusative'],
    ['Wir sprechen ___ das Wetter.', 'über', 'an', 'von', 'sprechen über + Akkusativ', 'sprechen über + accusative'],
    ['Ich freue mich ___ das Wochenende. (kommend)', 'auf', 'über', 'an', 'sich freuen auf = ينتظر بفرحة', 'sich freuen auf = look forward to'],
  ],
  relativsaetze: [
    ['Der Mann, ___ dort steht, ist mein Lehrer.', 'der', 'den', 'dem', 'Nominativ مذكر: der', 'masculine nominative: der'],
    ['Die Frau, ___ ich gestern gesehen habe, ist Ärztin.', 'die', 'der', 'den', 'Akkusativ مؤنث: die', 'feminine accusative: die'],
    ['Das Buch, ___ ich lese, ist spannend.', 'das', 'dem', 'der', 'Akkusativ محايد: das', 'neuter accusative: das'],
    ['Der Freund, ___ ich helfe, wohnt in Köln.', 'dem', 'den', 'der', 'helfen + Dativ: dem', 'helfen + dative: dem'],
    ['Die Kinder, ___ im Garten spielen, sind laut.', 'die', 'den', 'denen', 'Nominativ جمع: die', 'plural nominative: die'],
  ],
  'konjunktiv-2': [
    ['Wenn ich Zeit ___, würde ich kommen.', 'hätte', 'habe', 'hatte', 'Konjunktiv II von haben: hätte', 'Konjunktiv II of haben: hätte'],
    ['Ich ___ gern ein Eis. (möchten)', 'hätte', 'habe', 'wäre', 'للطلب بأدب: ich hätte gern', 'polite request: ich hätte gern'],
    ['___ Sie mir bitte helfen? (können)', 'Könnten', 'Können', 'Konnten', 'Konjunktiv II = أكتر أدب', 'Konjunktiv II is more polite'],
    ['Wenn er reich ___, würde er reisen.', 'wäre', 'ist', 'war', 'sein: wäre', 'sein: wäre'],
    ['An deiner Stelle ___ ich das nicht tun.', 'würde', 'werde', 'wurde', 'würde + Infinitiv', 'würde + infinitive'],
  ],
  passiv: [
    ['Das Haus ___ gebaut.', 'wird', 'ist', 'hat', 'Vorgangspassiv: werden', 'process passive: werden'],
    ['Der Brief ___ gestern geschrieben.', 'wurde', 'wird', 'ist', 'Präteritum Passiv: wurde', 'past passive: wurde'],
    ['Hier ___ Deutsch gesprochen.', 'wird', 'werden', 'ist', 'Deutsch مفرد: wird', 'Deutsch is singular: wird'],
    ['Die Bücher ___ gelesen.', 'werden', 'wird', 'wurde', 'جمع: werden', 'plural: werden'],
    ['Das Auto ___ von meinem Vater repariert.', 'wird', 'hat', 'war', 'von + Dativ = الفاعل', 'von + dative names the agent'],
  ],
  genitiv: [
    ['Das ist das Auto ___ Mannes. (der)', 'des', 'der', 'dem', 'Genitiv مذكر: des (+es)', 'masculine genitive: des'],
    ['Die Tasche ___ Frau ist rot. (die)', 'der', 'die', 'des', 'Genitiv مؤنث: der', 'feminine genitive: der'],
    ['Das Dach ___ Hauses ist alt. (das)', 'des', 'der', 'dem', 'Genitiv محايد: des', 'neuter genitive: des'],
    ['Wegen ___ Regens bleiben wir hier. (der)', 'des', 'den', 'dem', 'wegen + Genitiv', 'wegen + genitive'],
    ['Die Bücher ___ Kinder sind neu. (die)', 'der', 'die', 'den', 'Genitiv جمع: der', 'plural genitive: der'],
  ],
  'infinitiv-zu': [
    ['Ich habe keine Lust, heute ___ arbeiten.', 'zu', 'um', 'ohne', 'zu + Infinitiv', 'zu + infinitive'],
    ['Er fängt an, Deutsch ___ lernen.', 'zu', 'um zu', 'für', 'anfangen + zu', 'anfangen + zu'],
    ['Sie geht in die Stadt, ___ Brot zu kaufen.', 'um', 'damit', 'weil', 'um ... zu = علشان', 'um ... zu = in order to'],
    ['Er ging, ___ sich zu verabschieden.', 'ohne', 'um', 'damit', 'ohne ... zu = من غير', 'ohne ... zu = without'],
    ['Es ist wichtig, pünktlich ___ sein.', 'zu', 'um', 'dass', 'zu + sein', 'zu + sein'],
  ],
  'konnektoren-b1': [
    ['Es regnet, ___ bleiben wir zu Hause.', 'deshalb', 'obwohl', 'weil', 'deshalb = عشان كده', 'deshalb = therefore'],
    ['___ es regnet, gehen wir spazieren.', 'Obwohl', 'Deshalb', 'Denn', 'obwohl = رغم إن', 'obwohl = although'],
    ['Ich lerne, ___ ich die Prüfung bestehen will.', 'weil', 'deshalb', 'trotzdem', 'weil = لأن', 'weil = because'],
    ['Er ist krank, ___ geht er zur Arbeit.', 'trotzdem', 'weil', 'obwohl', 'trotzdem = برضه', 'trotzdem = nevertheless'],
    ['Ich bleibe hier, ___ du wiederkommst.', 'bis', 'während', 'seit', 'bis = لحد ما', 'bis = until'],
  ],
  'passiv-erweitert': [
    ['Die Tür ist schon ___. (Zustandspassiv: öffnen)', 'geöffnet', 'geöffnen', 'öffnet', 'sein + Partizip II', 'sein + participle II'],
    ['Das Problem lässt sich leicht ___.', 'lösen', 'gelöst', 'löst', 'sich lassen + Infinitiv', 'sich lassen + infinitive'],
    ['Das Gerät ist leicht ___. (zu bedienen)', 'zu bedienen', 'bedienen', 'bedient', 'sein + zu + Infinitiv', 'sein + zu + infinitive'],
    ['Das Fenster musste ___ werden.', 'repariert', 'reparieren', 'repariere', 'Modal + Partizip II + werden', 'modal + participle II + werden'],
  ],
  'konjunktiv-1': [
    ['Er sagt, er ___ krank. (sein, indirekte Rede)', 'sei', 'ist', 'wäre', 'Konjunktiv I: er sei', 'Konjunktiv I: er sei'],
    ['Sie meint, sie ___ keine Zeit. (haben)', 'habe', 'hat', 'hätte', 'Konjunktiv I: sie habe', 'Konjunktiv I: sie habe'],
    ['Der Minister sagte, er ___ zurücktreten. (werden)', 'werde', 'wird', 'würde', 'Konjunktiv I: er werde', 'Konjunktiv I: er werde'],
    ['Sie sagen, sie ___ keine Angst. (haben, sie Pl.)', 'hätten', 'haben', 'habe', 'جمع = نفس الحاضر، فنستخدم Konjunktiv II', 'plural equals indicative, so use Konjunktiv II'],
  ],
  partizipialattribute: [
    ['Der ___ Hund bellt. (laufen)', 'laufende', 'gelaufene', 'läuft', 'Partizip I = بيحصل دلوقتي', 'Partizip I = happening now'],
    ['Das ___ Fenster muss repariert werden. (zerbrechen)', 'zerbrochene', 'zerbrechende', 'zerbrach', 'Partizip II = انتهى', 'Partizip II = completed'],
    ['Die ___ Kinder sind müde. (spielen)', 'spielenden', 'gespielten', 'spielten', 'Partizip I + en', 'Partizip I + en'],
    ['Der von der Polizei ___ Mann ist frei.', 'verhaftete', 'verhaftende', 'verhaften', 'Partizip II مع passiv', 'Partizip II with passive meaning'],
  ],
  nominalstil: [
    ['"Wenn man die Regeln beachtet" = ___ der Regeln', 'unter Beachtung', 'trotz Beachtung', 'ohne Beachtung', 'unter Beachtung = مع مراعاة', 'unter Beachtung = observing'],
    ['"weil es regnet" = ___ des Regens', 'wegen', 'trotz', 'während', 'wegen + Genitiv', 'wegen + genitive'],
    ['"nachdem er angekommen war" = nach ___', 'seiner Ankunft', 'sein Ankommen', 'seine Ankunft', 'nach + Dativ', 'nach + dative'],
    ['"ohne dass jemand fragte" = ohne ___', 'Nachfrage', 'nachzufragen', 'fragen', 'ohne + اسم', 'ohne + noun'],
  ],
  'subjektive-modalverben': [
    ['Er soll sehr reich ___. (man sagt)', 'sein', 'ist', 'gewesen', 'sollen = بيقولوا', 'sollen = they say'],
    ['Sie muss zu Hause ___. (sicher)', 'sein', 'ist', 'wird', 'müssen = أكيد', 'müssen = must (certain)'],
    ['Er kann den Zug verpasst ___. (vielleicht)', 'haben', 'hat', 'worden', 'Vergangenheit: Partizip II + haben', 'past: participle II + haben'],
    ['Sie will Millionärin ___. (sie behauptet)', 'sein', 'ist', 'wird', 'wollen = بتدّعي', 'wollen = claims'],
  ],
  'konjunktiv-2-vergangenheit': [
    ['Wenn ich es gewusst ___, wäre ich gekommen.', 'hätte', 'habe', 'wäre', 'hätte + Partizip II', 'hätte + participle II'],
    ['Wenn er früher ___, hätte er den Zug erreicht. (aufstehen)', 'aufgestanden wäre', 'aufgestanden hätte', 'aufstände', 'aufstehen + sein: wäre', 'aufstehen takes sein: wäre'],
    ['Ich ___ das nicht getan.', 'hätte', 'wäre', 'würde', 'hätte + Partizip II', 'hätte + participle II'],
    ['Wären wir nur früher ___!', 'gegangen', 'gehen', 'ging', 'wären + Partizip II', 'wären + participle II'],
  ],
  'funktionsverbgefuege': [
    ['eine Entscheidung ___', 'treffen', 'machen', 'tun', 'eine Entscheidung treffen', 'eine Entscheidung treffen'],
    ['Kritik ___', 'üben', 'machen', 'geben', 'Kritik üben', 'Kritik üben'],
    ['in Frage ___', 'stellen', 'legen', 'setzen', 'in Frage stellen', 'in Frage stellen'],
    ['zur Verfügung ___', 'stehen', 'sitzen', 'liegen', 'zur Verfügung stehen', 'zur Verfügung stehen'],
  ],
  modalpartikeln: [
    ['Komm ___ her! (Aufforderung freundlich)', 'doch', 'mal nicht', 'schon', 'doch = تلطيف الأمر', 'doch softens a request'],
    ['Das ist ___ klar! (offensichtlich)', 'ja', 'bloß', 'mal', 'ja = إنت عارف', 'ja = as you know'],
    ['Sag ___ , wie spät ist es? (freundlich)', 'mal', 'ja', 'halt', 'mal = شوية', 'mal softens'],
    ['Das ist ___ so. (Resignation)', 'halt', 'mal', 'bloß', 'halt = ما باليد حيلة', 'halt = that is how it is'],
  ],
  wissenschaftssprache: [
    ['Es ___ gezeigt werden, dass ...', 'konnte', 'kann sein', 'will', 'Passiv im wissenschaftlichen Stil', 'passive in scientific style'],
    ['Die Ergebnisse ___ die These. (bestätigen)', 'bestätigen', 'bestehen', 'beziehen', 'bestätigen = تأكد', 'bestätigen = confirm'],
    ['___ der Untersuchung ergab sich Folgendes.', 'Im Verlauf', 'Im Weg', 'In Fall', 'im Verlauf = خلال', 'im Verlauf = during'],
  ],
  'als-ob': [
    ['Er tut so, ___ er nichts wüsste.', 'als ob', 'wenn', 'weil', 'als ob = كأنه', 'als ob = as if'],
    ['Sie sieht aus, als ob sie müde ___.', 'wäre', 'ist', 'war', 'als ob + Konjunktiv II', 'als ob + Konjunktiv II'],
    ['Es ist, ___ die Zeit stehen bliebe.', 'als ob', 'ob', 'obwohl', 'als ob', 'als ob'],
  ],
  stilregister: [
    ['Formell: "Ich ___ Ihnen für Ihre Hilfe."', 'danke', 'dank', 'bedank', 'danke + Dativ', 'danke + dative'],
    ['Umgangssprache für "Ich weiß es nicht": "Keine ___"', 'Ahnung', 'Wissen', 'Idee', 'Keine Ahnung = معرفش', 'Keine Ahnung = no idea'],
    ['Höflich: "___ Sie mir bitte sagen, wie spät es ist?"', 'Könnten', 'Kannst', 'Kann', 'Konjunktiv II = مؤدب', 'Konjunktiv II = polite'],
  ],
  redewendungen: [
    ['"Daumen drücken" bedeutet ...', 'Glück wünschen', 'ärgern', 'streiten', 'يتمنى الحظ', 'to wish luck'],
    ['"Das ist mir Wurst" bedeutet ...', 'Das ist mir egal', 'Ich bin hungrig', 'Ich mag es', 'يعني مش فارق', 'it is all the same to me'],
    ['"Ich verstehe nur Bahnhof" bedeutet ...', 'Ich verstehe nichts', 'Ich bin am Bahnhof', 'Ich fahre weg', 'مفهمتش حاجة', 'I understand nothing'],
  ],
  'dialekte-umgangssprache': [
    ['Süddeutsch "Servus" bedeutet ...', 'Hallo / Tschüss', 'Danke', 'Bitte', 'تحية في الجنوب', 'a southern greeting'],
    ['"Moin" sagt man vor allem in ...', 'Norddeutschland', 'Bayern', 'Österreich', 'moin في الشمال', 'moin is northern German'],
    ['"Grüß Gott" hört man vor allem in ...', 'Süddeutschland', 'Hamburg', 'Berlin', 'grüß Gott في الجنوب', 'grüß Gott is southern'],
  ],
};
