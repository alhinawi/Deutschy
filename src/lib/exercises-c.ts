import type { Ex } from './exercises';

// Extra practice for the thinnest B2 to C2 topics: [sentence, correct, wrong, wrong, explanation AR, explanation EN]
export const moreC: Record<string, Ex[]> = {
  'passiv-erweitert': [
    ['Das Problem ist leicht ___. (lösen, -bar)', 'lösbar', 'gelöst', 'lösend', 'bar = ممكن يتعمل', '-bar = can be done'],
    ['Die Rechnung ist noch nicht ___. (Zustandspassiv: bezahlen)', 'bezahlt', 'bezahlen', 'bezahlte', 'sein + Partizip II = حالة', 'sein + participle II = state'],
    ['Man kann das nicht ändern = Das ist nicht zu ___.', 'ändern', 'geändert', 'ändert', 'sein + zu + Infinitiv', 'sein + zu + infinitive'],
  ],
  'konjunktiv-1': [
    ['Er sagte, er ___ gestern im Kino gewesen. (sein)', 'sei', 'wäre', 'ist', 'Konjunktiv I Vergangenheit: sei gewesen', 'Konjunktiv I past: sei gewesen'],
    ['Die Zeitung berichtet, der Präsident ___ zurückgetreten. (sein)', 'sei', 'ist', 'war', 'نقل كلام الغير: sei', 'reported speech: sei'],
    ['Sie fragte, ob er Zeit ___. (haben)', 'habe', 'hat', 'hätte', 'indirekte Frage: Konjunktiv I', 'indirect question: Konjunktiv I'],
  ],
  partizipialattribute: [
    ['Die ___ Preise machen Sorgen. (steigen)', 'steigenden', 'gestiegenen', 'steigt', 'Partizip I = لسه بيحصل', 'Partizip I = ongoing'],
    ['Das ___ Medikament wirkt schnell. (verschreiben)', 'verschriebene', 'verschreibende', 'verschrieb', 'Partizip II = اتكتب', 'Partizip II = prescribed'],
    ['Der seit Jahren ___ Streit ist gelöst. (andauern)', 'andauernde', 'angedauerte', 'andauern', 'Partizip I + e', 'Partizip I + e'],
  ],
  nominalstil: [
    ['"Er entschied sich" = Er traf eine ___.', 'Entscheidung', 'Entscheiden', 'Entschieden', 'اسم من الفعل', 'noun from the verb'],
    ['"während er arbeitete" = während seiner ___', 'Arbeit', 'Arbeiten', 'Gearbeitet', 'während + Genitiv', 'während + genitive'],
    ['"weil er krank war" = aufgrund seiner ___', 'Krankheit', 'Kranken', 'Kranker', 'aufgrund + Genitiv', 'aufgrund + genitive'],
  ],
  'subjektive-modalverben': [
    ['Er dürfte jetzt zu Hause ___. (wahrscheinlich)', 'sein', 'ist', 'wäre', 'dürfte = غالباً', 'dürfte = probably'],
    ['Sie will das Buch schon gelesen ___. (sie behauptet)', 'haben', 'hat', 'gehabt', 'wollen + Partizip II + haben', 'wollen + participle II + haben'],
    ['Er soll gestern angekommen ___. (man sagt)', 'sein', 'haben', 'ist', 'sollen + Partizip II + sein', 'sollen + participle II + sein'],
  ],
  'konjunktiv-2-vergangenheit': [
    ['Ich wäre gern länger ___. (bleiben)', 'geblieben', 'bleiben', 'blieb', 'wäre + Partizip II', 'wäre + participle II'],
    ['Wenn sie das gewusst ___, hätte sie angerufen.', 'hätte', 'wäre', 'hat', 'wissen + haben: hätte', 'wissen takes haben: hätte'],
    ['Er hätte mehr lernen ___.', 'sollen', 'gesollt', 'soll', 'Ersatzinfinitiv beim Modalverb', 'double infinitive with modals'],
  ],
  funktionsverbgefuege: [
    ['eine Frage ___', 'stellen', 'machen', 'tun', 'eine Frage stellen', 'eine Frage stellen'],
    ['Rücksicht ___', 'nehmen', 'machen', 'geben', 'Rücksicht nehmen', 'Rücksicht nehmen'],
    ['in Betracht ___', 'ziehen', 'gehen', 'setzen', 'in Betracht ziehen', 'in Betracht ziehen'],
    ['zum Ausdruck ___', 'bringen', 'nehmen', 'stellen', 'zum Ausdruck bringen', 'zum Ausdruck bringen'],
  ],
  modalpartikeln: [
    ['Das war ___ nicht so schlimm. (beruhigend)', 'doch', 'halt', 'bloß', 'doch = تطمين', 'doch = reassurance'],
    ['Wie spät ist es ___? (neugierig)', 'eigentlich', 'bloß', 'halt', 'eigentlich = بالمناسبة', 'eigentlich = by the way'],
    ['Was hast du ___ gemacht? (Vorwurf)', 'bloß', 'mal', 'ja', 'bloß = إيه اللي عملته!', 'bloß = what on earth did you do'],
  ],
  wissenschaftssprache: [
    ['Die Studie ___ zu dem Ergebnis, dass ...', 'kommt', 'geht', 'bringt', 'zu dem Ergebnis kommen', 'zu einem Ergebnis kommen'],
    ['Es lässt sich ___, dass die Methode funktioniert.', 'festhalten', 'festfallen', 'feststellen sich', 'sich festhalten lassen', 'sich festhalten lassen'],
    ['Im Folgenden ___ die Ergebnisse dargestellt.', 'werden', 'sind', 'haben', 'Passiv: werden', 'passive: werden'],
    ['Die Hypothese ___ sich als falsch.', 'erwies', 'bewies', 'bewies sich', 'sich erweisen als = تبين إنه', 'sich erweisen als = turn out to be'],
    ['Diese Annahme ist ___ belegt. (empirisch)', 'empirisch', 'empirische', 'Empirie', 'adverb = بدون نهاية', 'adverb takes no ending'],
  ],
  'als-ob': [
    ['Er benimmt sich, als ob er der Chef ___.', 'wäre', 'ist', 'sein', 'als ob + Konjunktiv II', 'als ob + Konjunktiv II'],
    ['Sie tut, ___ schliefe sie.', 'als', 'ob', 'wenn', 'als + Verb an zweiter Stelle', 'als + verb in second position'],
    ['Es sieht aus, als ___ es regnen würde.', 'ob', 'wenn', 'dass', 'als ob', 'als ob'],
    ['Er sprach, als ob er alles ___. (wissen)', 'wüsste', 'weiß', 'wusste', 'Konjunktiv II von wissen: wüsste', 'Konjunktiv II of wissen: wüsste'],
    ['Das Kind tut so, als ___ es nichts gehört.', 'hätte', 'wäre', 'hat', 'hören + haben: hätte', 'hören takes haben: hätte'],
  ],
  stilregister: [
    ['Formell: "Ich ___ mich für die Verspätung."', 'entschuldige', 'verzeihe', 'sorry', 'sich entschuldigen = رسمي', 'sich entschuldigen = formal'],
    ['Umgangssprachlich für "sehr gut": "___!"', 'Klasse', 'Geschätzt', 'Verehrt', 'Klasse = ممتاز (عامية)', 'Klasse = great (casual)'],
    ['Höflicher Brief: "Mit freundlichen ___"', 'Grüßen', 'Grüßt', 'Gruß', 'Mit freundlichen Grüßen', 'Mit freundlichen Grüßen'],
    ['Unter Freunden: "Wie geht\'s ___?"', 'dir', 'Ihnen', 'euch', 'du-Form مع الأصدقاء', 'du form among friends'],
    ['Formell: "Wie geht es ___?"', 'Ihnen', 'dir', 'dich', 'Sie-Form: Ihnen', 'Sie form: Ihnen'],
  ],
  redewendungen: [
    ['"Ich habe die Nase voll" bedeutet ...', 'Ich habe genug davon', 'Ich bin krank', 'Ich rieche etwas', 'زهقت', 'I am fed up'],
    ['"Das ist ein Katzensprung" bedeutet ...', 'Es ist sehr nah', 'Es ist gefährlich', 'Es ist laut', 'قريب قوي', 'it is very close'],
    ['"Jemandem die Daumen halten" heißt ...', 'ihm Glück wünschen', 'ihn schlagen', 'ihm helfen', 'يتمنى له الحظ', 'to wish someone luck'],
    ['"Tomaten auf den Augen haben" heißt ...', 'etwas nicht sehen', 'Hunger haben', 'müde sein', 'مش شايف اللي قدامه', 'not to see what is obvious'],
    ['"Das geht auf keine Kuhhaut" bedeutet ...', 'Das ist unerhört', 'Das ist teuer', 'Das ist lecker', 'ده مش معقول', 'that is outrageous'],
  ],
  'dialekte-umgangssprache': [
    ['"Tschüss" ist ...', 'umgangssprachlich', 'sehr formell', 'ein Dialekt nur in Bayern', 'عامية للوداع', 'casual goodbye'],
    ['Schweizerdeutsch "Grüezi" bedeutet ...', 'Guten Tag', 'Danke', 'Gute Nacht', 'تحية في سويسرا', 'a Swiss greeting'],
    ['"Brötchen", "Semmel" und "Schrippe" meinen ...', 'dasselbe', 'verschiedene Getränke', 'Fleisch', 'أسماء مختلفة لنفس الحاجة', 'regional names for the same thing'],
    ['Österreichisch "Servus" sagt man ...', 'zur Begrüßung und zum Abschied', 'nur abends', 'nur im Büro', 'للتحية والوداع', 'for hello and goodbye'],
    ['Umgangssprache: "Ich hab\'s" = ...', 'Ich habe es', 'Ich hatte es', 'Ich haben es', 'اختصار ich habe es', 'short for ich habe es'],
  ],
};
