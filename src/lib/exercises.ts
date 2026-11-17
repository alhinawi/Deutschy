import { moreA } from './exercises-a';
import { moreB } from './exercises-b';
import { moreC } from './exercises-c';
// [sentence with ___, correct, wrong, wrong, explanation AR, explanation EN]
export type Ex = [string, string, string, string, string, string];
export const exercises: Record<string, Ex[]> = {
  aussprache: [
    ['Wie spricht man "sch" in "Schule"?', 'sh', 's', 'ch', 'sch = ش', 'sch sounds like "sh"'],
    ['Das Wort "Straße" hat ein langes ...', 's (ß)', 'z', 'sch', 'ß = س طويلة', 'ß is a long s'],
    ['"Wasser": w klingt wie ...', 'v', 'w', 'f', 'w الألماني = v', 'German w sounds like v'],
    ['"Zeit": z klingt wie ...', 'ts', 'z', 's', 'z = تس', 'z sounds like ts'],
  ],
  'pronomen-sein-haben': [
    ['Ich ___ Student.', 'bin', 'ist', 'bist', 'ich bin', 'ich bin'],
    ['Du ___ Hunger.', 'hast', 'hat', 'habe', 'du hast', 'du hast'],
    ['Wir ___ in Kairo.', 'sind', 'seid', 'ist', 'wir sind', 'wir sind'],
    ['Er ___ einen Bruder.', 'hat', 'habt', 'hast', 'er hat', 'er hat'],
    ['Ihr ___ müde.', 'seid', 'sind', 'bist', 'ihr seid', 'ihr seid'],
  ],
  satzbau: [
    ['Heute ___ ich Deutsch.', 'lerne', 'ich lerne', 'lernen', 'الفعل في المكان التاني', 'verb in second position'],
    ['___ wohnst du?', 'Wo', 'Wer', 'Wann', 'Wo = فين', 'Wo = where'],
    ['___ du heute?', 'Kommst', 'Du', 'Wann', 'سؤال نعم/لا: الفعل أول', 'yes/no question: verb first'],
    ['Morgen ___ wir ins Kino.', 'gehen', 'wir gehen', 'gegangen', 'الفعل تاني', 'verb second'],
  ],
  praesens: [
    ['Er ___ in Mansoura.', 'wohnt', 'wohnst', 'wohne', 'er + t', 'er takes -t'],
    ['Du ___ viel.', 'arbeitest', 'arbeitst', 'arbeitet', 'جذر بـ t بياخد e', 'stem in t takes e'],
    ['Sie (she) ___ mit dem Bus.', 'fährt', 'fahrt', 'fahre', 'fahren: fährt', 'fahren: fährt'],
    ['Ich ___ ein Buch.', 'lese', 'liest', 'lesen', 'ich + e', 'ich + e'],
    ['Du ___ Brot.', 'isst', 'esst', 'isset', 'essen: du isst', 'essen: du isst'],
  ],
  'artikel-genus': [
    ['___ Zeitung ist neu.', 'Die', 'Der', 'Das', '-ung دايما die', '-ung is always die'],
    ['___ Mädchen spielt.', 'Das', 'Die', 'Der', '-chen دايما das', '-chen is always das'],
    ['Ich habe ___ Bruder.', 'einen', 'eine', 'ein', 'Akkusativ مذكر: einen', 'masculine accusative: einen'],
    ['Der Plural von "das Kind" ist ...', 'die Kinder', 'die Kinds', 'die Kindern', 'Kind → Kinder', 'Kind → Kinder'],
  ],
  negation: [
    ['Ich habe ___ Zeit.', 'keine', 'nicht', 'kein', 'Zeit مؤنث: keine', 'Zeit is feminine: keine'],
    ['Das ist ___ Auto.', 'kein', 'nicht', 'keine', 'Auto محايد: kein', 'Auto is neuter: kein'],
    ['Er arbeitet ___.', 'nicht', 'kein', 'keine', 'نفي الفعل: nicht', 'negating the verb: nicht'],
    ['Kommst du nicht? - ___, ich komme!', 'Doch', 'Ja', 'Nein', 'doch = بالعكس', 'doch answers a negative question'],
  ],
  akkusativ: [
    ['Ich sehe ___ Mann.', 'den', 'der', 'dem', 'مذكر Akkusativ: den', 'masculine accusative: den'],
    ['Er kauft ___ Apfel.', 'einen', 'ein', 'einer', 'einen', 'einen'],
    ['Das Geschenk ist für ___ Lehrer.', 'den', 'dem', 'der', 'für + Akkusativ', 'für + accusative'],
    ['Ich lese ___ Zeitung.', 'die', 'den', 'dem', 'مؤنث ما بيتغيرش', 'feminine does not change'],
  ],
  possessiv: [
    ['Das ist ___ Mutter. (my)', 'meine', 'mein', 'meinen', 'Mutter مؤنث', 'Mutter is feminine'],
    ['Wo ist ___ Bruder? (your, du)', 'dein', 'deine', 'euer', 'du → dein', 'du → dein'],
    ['Ich besuche ___ Opa. (my)', 'meinen', 'mein', 'meine', 'Akkusativ مذكر', 'masculine accusative'],
    ['Das ist ___ Tasche. (her)', 'ihre', 'seine', 'ihr', 'sie → ihr + e', 'sie → ihr + e'],
  ],
  modalverben: [
    ['Ich ___ Deutsch sprechen.', 'kann', 'kannst', 'können', 'ich kann', 'ich kann'],
    ['Du ___ mehr lernen.', 'musst', 'muss', 'müssen', 'du musst', 'du musst'],
    ['Er ___ heute nicht kommen.', 'kann', 'können', 'kannst', 'er kann', 'er kann'],
    ['Wir ___ morgen früh aufstehen.', 'müssen', 'muss', 'müsst', 'wir müssen', 'wir müssen'],
  ],
  'trennbare-verben': [
    ['Ich ___ um 7 Uhr ___. (aufstehen)', 'stehe ... auf', 'aufstehe ... -', 'stehe ... aufzu', 'البادئة في الآخر', 'prefix goes to the end'],
    ['Der Zug ___ um acht ___. (ankommen)', 'kommt ... an', 'ankommt ... -', 'kommt ... zu', 'البادئة في الآخر', 'prefix goes to the end'],
    ['Wir ___ am Abend ___. (fernsehen)', 'sehen ... fern', 'fernsehen ... -', 'sehen ... aus', 'fern بتنفصل', 'fern splits off'],
  ],
  imperativ: [
    ['___ bitte her! (kommen, du)', 'Komm', 'Kommst', 'Kommt', 'du: جذر الفعل', 'du: the stem'],
    ['___ langsam! (sprechen, ihr)', 'Sprecht', 'Sprich', 'Sprechen', 'ihr: زي المضارع', 'ihr: like the present'],
    ['___ Sie bitte die Tür! (öffnen)', 'Öffnen', 'Öffne', 'Öffnet', 'Sie: مصدر + Sie', 'Sie: infinitive + Sie'],
    ['___ ruhig! (sein, du)', 'Sei', 'Bist', 'Sein', 'sei', 'sei'],
  ],
  'zahlen-uhrzeit': [
    ['21 = ...', 'einundzwanzig', 'zwanzigeins', 'zweiundzehn', 'الواحد الأول', 'ones come first'],
    ['3:30 = Es ist ___ vier.', 'halb', 'viertel', 'Uhr', 'halb vier', 'halb vier'],
    ['___ Montag habe ich Unterricht.', 'Am', 'Um', 'Im', 'am + يوم', 'am + day'],
    ['Der Kurs beginnt ___ 8 Uhr.', 'um', 'am', 'im', 'um + ساعة', 'um + clock time'],
  ],
  dativ: [
    ['Ich helfe ___ Mutter.', 'meiner', 'meine', 'meinen', 'helfen + Dativ', 'helfen + dative'],
    ['Das Buch gehört ___ Lehrer.', 'dem', 'den', 'der', 'gehören + Dativ', 'gehören + dative'],
    ['Er gibt ___ Kind einen Apfel.', 'dem', 'das', 'den', 'Dativ محايد: dem', 'neuter dative: dem'],
    ['Wie gefällt ___ die Stadt? (du)', 'dir', 'dich', 'du', 'gefallen + Dativ', 'gefallen + dative'],
  ],
  'dativ-praepositionen': [
    ['Ich fahre mit ___ Bus. (der)', 'dem', 'den', 'der', 'mit + Dativ', 'mit + dative'],
    ['Das ist ein Geschenk für ___ Freund. (der)', 'den', 'dem', 'der', 'für + Akkusativ', 'für + accusative'],
    ['Das Buch liegt auf ___ Tisch. (der)', 'dem', 'den', 'der', 'مكان ثابت = Dativ', 'location = dative'],
    ['Ich lege das Buch auf ___ Tisch. (der)', 'den', 'dem', 'der', 'حركة = Akkusativ', 'movement = accusative'],
  ],
  perfekt: [
    ['Gestern habe ich Deutsch ___.', 'gelernt', 'gelernen', 'lernt', 'ge + جذر + t', 'ge + stem + t'],
    ['Wir ___ nach Kairo gefahren.', 'sind', 'haben', 'waren', 'حركة = sein', 'movement = sein'],
    ['Hast du schon ___?', 'gegessen', 'gegesst', 'geessen', 'essen → gegessen', 'essen → gegessen'],
    ['Ich habe den Freund ___. (besuchen)', 'besucht', 'gebesucht', 'besuchen', 'be- من غير ge', 'be- takes no ge'],
  ],
  'praeteritum-basics': [
    ['Ich ___ gestern krank.', 'war', 'bin', 'wäre', 'sein: war', 'sein: war'],
    ['Wir ___ keine Zeit.', 'hatten', 'hatte', 'haben', 'haben: hatten', 'haben: hatten'],
    ['Er ___ nicht kommen.', 'konnte', 'kannte', 'kann', 'können: konnte', 'können: konnte'],
    ['Sie ___ um acht Uhr an. (ankommen)', 'kam', 'kommte', 'kamt', 'kommen: kam', 'kommen: kam'],
  ],
  'adjektiv-endungen': [
    ['Das ist ein ___ Freund. (gut)', 'guter', 'gute', 'gutes', 'ein + مذكر: -er', 'ein + masculine: -er'],
    ['Ich kaufe die ___ Tasche. (rot)', 'rote', 'roten', 'rot', 'die + مؤنث: -e', 'die + feminine: -e'],
    ['Wir wohnen in einem ___ Haus. (klein)', 'kleinen', 'kleine', 'kleines', 'Dativ: -en', 'dative: -en'],
    ['Das Haus ist ___. (groß)', 'groß', 'große', 'großes', 'بعد sein من غير نهاية', 'no ending after sein'],
  ],
  'nebensaetze-weil-dass': [
    ['Ich bleibe hier, weil ich müde ___.', 'bin', 'ich bin', 'bist', 'الفعل في الآخر', 'verb at the end'],
    ['Er sagt, ___ er keine Zeit hat.', 'dass', 'weil', 'ob', 'dass = إن', 'dass = that'],
    ['___ es regnet, bleibe ich zu Hause.', 'Wenn', 'Dass', 'Denn', 'wenn = لو', 'wenn = if'],
    ['Ich bleibe hier, denn ich ___ müde.', 'bin', 'müde bin', 'bist', 'denn: ترتيب عادي', 'denn: normal order'],
  ],
  komparativ: [
    ['Kairo ist ___ als Mansoura. (groß)', 'größer', 'großer', 'am größten', 'groß → größer', 'groß → größer'],
    ['Ich trinke ___ Tee. (gern)', 'lieber', 'gerner', 'besser', 'gern → lieber', 'gern → lieber'],
    ['Das ist der ___ Berg. (hoch)', 'höchste', 'höhste', 'hochste', 'hoch → höchst', 'hoch → höchst'],
    ['Er ist so groß ___ ich.', 'wie', 'als', 'dass', 'so ... wie', 'so ... wie'],
  ],
  'reflexive-verben': [
    ['Ich freue ___ auf das Wochenende.', 'mich', 'dich', 'sich', 'ich → mich', 'ich → mich'],
    ['Wir treffen ___ um acht.', 'uns', 'euch', 'sich', 'wir → uns', 'wir → uns'],
    ['Er interessiert ___ für Musik.', 'sich', 'ihn', 'mich', 'er → sich', 'er → sich'],
    ['Du fühlst ___ gut.', 'dich', 'sich', 'mich', 'du → dich', 'du → dich'],
  ],
  'futur-werden': [
    ['Es ___ morgen regnen.', 'wird', 'werde', 'wirst', 'es wird', 'es wird'],
    ['Ich ___ Ingenieur.', 'werde', 'wird', 'wirst', 'ich werde', 'ich werde'],
    ['___ du mich besuchen?', 'Wirst', 'Werde', 'Werden', 'du wirst', 'du wirst'],
  ],
  'verben-mit-praepositionen': [
    ['Ich warte ___ den Bus.', 'auf', 'an', 'für', 'warten auf', 'warten auf'],
    ['Er träumt ___ einem Haus.', 'von', 'an', 'auf', 'träumen von', 'träumen von'],
    ['Wir sprechen ___ das Wetter.', 'über', 'von', 'auf', 'sprechen über', 'sprechen über'],
    ['Sie interessiert sich ___ Kunst.', 'für', 'auf', 'an', 'sich interessieren für', 'sich interessieren für'],
  ],
  relativsaetze: [
    ['Das ist der Mann, ___ hier wohnt.', 'der', 'den', 'dem', 'فاعل مذكر: der', 'masculine subject: der'],
    ['Das Buch, ___ ich lese, ist spannend.', 'das', 'der', 'dem', 'مفعول محايد: das', 'neuter object: das'],
    ['Die Frau, mit ___ ich arbeite, ist nett.', 'der', 'die', 'den', 'mit + Dativ مؤنث', 'mit + feminine dative'],
  ],
  'konjunktiv-2': [
    ['Wenn ich Zeit ___, würde ich kommen.', 'hätte', 'hatte', 'habe', 'Konjunktiv II', 'Konjunktiv II'],
    ['Ich ___ gern reich.', 'wäre', 'war', 'bin', 'ich wäre', 'ich wäre'],
    ['___ Sie mir helfen? (polite)', 'Könnten', 'Können', 'Konnten', 'طلب مؤدب', 'polite request'],
  ],
  passiv: [
    ['Das Haus ___ gebaut.', 'wird', 'ist', 'hat', 'werden + Partizip II', 'werden + participle II'],
    ['Hier ___ Deutsch gesprochen.', 'wird', 'werden', 'wurde', 'Deutsch مفرد: wird', 'singular: wird'],
    ['Das Auto ___ gestern repariert.', 'wurde', 'wird', 'worden', 'Präteritum', 'past'],
  ],
  genitiv: [
    ['Das ist das Buch ___ Bruders.', 'meines', 'mein', 'meinem', 'Genitiv مذكر', 'masculine genitive'],
    ['___ des Regens bleiben wir hier.', 'Wegen', 'Mit', 'Für', 'wegen + Genitiv', 'wegen + genitive'],
    ['Das Haus ___ Eltern ist groß.', 'der', 'des', 'den', 'جمع Genitiv: der', 'plural genitive: der'],
  ],
  'infinitiv-zu': [
    ['Es ist wichtig, jeden Tag ___ üben.', 'zu', 'um', 'für', 'zu + مصدر', 'zu + infinitive'],
    ['Er spart Geld, ___ ein Auto zu kaufen.', 'um', 'zu', 'damit', 'um ... zu', 'um ... zu'],
    ['Ich vergesse, die Tür ___ schließen.', 'zu', 'um', 'dass', 'zu + مصدر', 'zu + infinitive'],
  ],
  'konnektoren-b1': [
    ['___ er müde ist, arbeitet er weiter.', 'Obwohl', 'Weil', 'Damit', 'obwohl = رغم إن', 'obwohl = although'],
    ['___ du gehst, ruf mich an.', 'Bevor', 'Nachdem', 'Obwohl', 'bevor = قبل ما', 'bevor = before'],
    ['Es ist spät, ___ gehe ich nach Hause.', 'deshalb', 'weil', 'dass', 'deshalb + فعل علطول', 'deshalb + verb directly'],
  ],
  'passiv-erweitert': [
    ['Die Tür ___ geschlossen. (Zustand)', 'ist', 'wird', 'wurde', 'sein = حالة', 'sein = state'],
    ['Das Problem ___ sich leicht lösen.', 'lässt', 'wird', 'ist', 'sich lassen', 'sich lassen'],
  ],
  'konjunktiv-1': [
    ['Er sagt, er ___ zufrieden.', 'sei', 'ist', 'wäre', 'Konjunktiv I', 'Konjunktiv I'],
    ['Sie behauptet, sie ___ nichts gewusst.', 'habe', 'hat', 'hätte', 'Konjunktiv I', 'Konjunktiv I'],
  ],
  partizipialattribute: [
    ['Die ___ Katze liegt auf dem Sofa. (schlafen)', 'schlafende', 'geschlafene', 'schlafte', 'Partizip I + d', 'participle I + d'],
    ['Das ___ Ei ist heiß. (kochen)', 'gekochte', 'kochende', 'kochte', 'Partizip II', 'participle II'],
  ],
  nominalstil: [
    ['___ des Preisanstiegs kaufen weniger Leute.', 'Wegen', 'Weil', 'Damit', 'weil → wegen', 'weil → wegen'],
    ['___ schlechtem Wetter fällt das Fest aus.', 'Bei', 'Wenn', 'Dass', 'wenn → bei', 'wenn → bei'],
  ],
  'subjektive-modalverben': [
    ['Er ___ krank sein. (surely)', 'muss', 'kann', 'soll', 'müssen = أكيد', 'müssen = surely'],
    ['Er ___ sehr reich sein. (it is said)', 'soll', 'muss', 'darf', 'sollen = بيتقال', 'sollen = it is said'],
  ],
  'konjunktiv-2-vergangenheit': [
    ['Wenn ich das gewusst ___, wäre ich geblieben.', 'hätte', 'wäre', 'habe', 'hätte + Partizip II', 'hätte + participle II'],
    ['Du ___ früher anrufen sollen.', 'hättest', 'wärst', 'hast', 'hättest', 'hättest'],
  ],
  funktionsverbgefuege: [
    ['Wir nehmen Ihre Beschwerde zur ___.', 'Kenntnis', 'Verfügung', 'Frage', 'zur Kenntnis nehmen', 'zur Kenntnis nehmen'],
    ['Die Firma steht unter ___.', 'Druck', 'Kenntnis', 'Frage', 'unter Druck stehen', 'unter Druck stehen'],
  ],
  modalpartikeln: [
    ['Komm ___ mit! (come on)', 'doch', 'denn', 'eben', 'doch = بقى', 'doch = come on'],
    ['Wo bist du ___? (curious)', 'denn', 'halt', 'mal', 'denn في الأسئلة', 'denn in questions'],
  ],
  wissenschaftssprache: [
    ['___ steigt die Nachfrage, andererseits sinkt das Angebot.', 'Einerseits', 'Zuerst', 'Trotzdem', 'einerseits ... andererseits', 'einerseits ... andererseits'],
  ],
  'als-ob': [
    ['Er tut so, als ob er alles ___.', 'wüsste', 'weiß', 'wissen', 'Konjunktiv II', 'Konjunktiv II'],
  ],
  stilregister: [
    ['Welcher Satz ist am formellsten?', 'Wir bitten um Ihr Verständnis.', 'Hab Verständnis!', 'Sei nicht so!', 'رسمي', 'formal'],
  ],
  redewendungen: [
    ['"Ich verstehe nur Bahnhof" bedeutet:', 'Ich verstehe nichts.', 'Ich bin am Bahnhof.', 'Ich fahre Zug.', 'مش فاهم حاجة', 'I understand nothing'],
  ],
  'dialekte-umgangssprache': [
    ['Welcher Gruß ist typisch für Bayern und Österreich?', 'Servus', 'Moin', 'Grüezi', 'Servus', 'Servus'],
  ],
};

for (const [k, v] of [...Object.entries(moreA), ...Object.entries(moreB), ...Object.entries(moreC)]) exercises[k] = [...(exercises[k] ?? []), ...v];

import {a2Depth} from './exercises-a2-depth';
for(const [key,rows] of Object.entries(a2Depth))exercises[key]=[...(exercises[key]??[]),...rows];

import {everydayGrammar} from './exercises-everyday';
for(const [key,rows] of Object.entries(everydayGrammar))exercises[key]=[...(exercises[key]??[]),...rows];

import {neighborhoodGrammar} from './exercises-neighborhood';
for(const [key,rows] of Object.entries(neighborhoodGrammar))exercises[key]=[...(exercises[key]??[]),...rows];

import {objectGrammar} from './exercises-objects';
for(const [key,rows] of Object.entries(objectGrammar))exercises[key]=[...(exercises[key]??[]),...rows];

import {packingGrammar} from './exercises-packing';
for(const [key,rows] of Object.entries(packingGrammar))exercises[key]=[...(exercises[key]??[]),...rows];

import {breakGrammar} from './exercises-breaks';
for(const [key,rows]of Object.entries(breakGrammar))exercises[key]=[...(exercises[key]??[]),...rows];

import {borrowingGrammar} from './exercises-borrowing';
for(const [key,rows]of Object.entries(borrowingGrammar))exercises[key]=[...(exercises[key]??[]),...rows];

import {wrappingGrammar} from './exercises-wrapping';
for(const [key,rows]of Object.entries(wrappingGrammar))exercises[key]=[...(exercises[key]??[]),...rows];

import {tablewareGrammar} from './exercises-tableware';
for(const [key,rows]of Object.entries(tablewareGrammar))exercises[key]=[...(exercises[key]??[]),...rows];

import {readingcornerGrammar} from './exercises-readingcorner';
for(const [topic,rows]of Object.entries(readingcornerGrammar))exercises[topic].push(...rows);

import {handarbeitGrammar} from './exercises-handarbeit';
for(const [topic,rows]of Object.entries(handarbeitGrammar))exercises[topic].push(...rows);

import {briefplatzGrammar} from './exercises-briefplatz';
for(const [topic,rows]of Object.entries(briefplatzGrammar))exercises[topic].push(...rows);

import {musikrundeGrammar} from './exercises-musikrunde';
for(const [topic,rows]of Object.entries(musikrundeGrammar))exercises[topic].push(...rows);

import {malrundeGrammar} from './exercises-malrunde';
for(const[topic,rows]of Object.entries(malrundeGrammar))exercises[topic].push(...rows);

import {kuechenprepGrammar} from './exercises-kuechenprep';
for(const[topic,rows]of Object.entries(kuechenprepGrammar))exercises[topic].push(...rows);

import {flurablageGrammar} from './exercises-flurablage';
for(const[topic,rows]of Object.entries(flurablageGrammar))exercises[topic].push(...rows);

import {garteneckeGrammar} from './exercises-gartenecke';
for(const[topic,rows]of Object.entries(garteneckeGrammar))exercises[topic].push(...rows);

import {fahrradeckeGrammar} from './exercises-fahrradecke';
for(const[topic,rows]of Object.entries(fahrradeckeGrammar))exercises[topic].push(...rows);

import {naehboxGrammar} from './exercises-naehbox';
for(const[topic,rows]of Object.entries(naehboxGrammar))exercises[topic].push(...rows);

import {schultascheGrammar} from './exercises-schultasche';
for(const[topic,rows]of Object.entries(schultascheGrammar))exercises[topic].push(...rows);

import {badregalGrammar} from './exercises-badregal';
for(const[topic,rows]of Object.entries(badregalGrammar))exercises[topic].push(...rows);
