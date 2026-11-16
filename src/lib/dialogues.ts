import type { Lvl } from './grammar-types';
// lines: [speaker, German, Egyptian Arabic]; q: [question, correct answer, wrong, wrong]
export type Dialogue = { id: string; level: Lvl; title: [string, string]; lines: [string, string, string][]; q: [string, string, string, string][] };

export const dialogues: Dialogue[] = [
  { id: 'im-cafe', level: 'A1', title: ['Im Café', 'في الكافيه'], lines: [
    ['Kellner', 'Guten Tag! Was möchten Sie trinken?', 'يوم سعيد! تحب تشرب إيه؟'],
    ['Gast', 'Einen Kaffee mit Milch, bitte.', 'قهوة بلبن لو سمحت.'],
    ['Kellner', 'Gern. Möchten Sie auch etwas essen?', 'حاضر. تحب تاكل حاجة كمان؟'],
    ['Gast', 'Ja, ein Stück Kuchen. Was haben Sie?', 'أيوه، حتة جاتوه. عندكم إيه؟'],
    ['Kellner', 'Wir haben Apfelkuchen und Schokoladenkuchen.', 'عندنا جاتوه تفاح وجاتوه شوكولاتة.'],
    ['Gast', 'Dann nehme ich den Apfelkuchen. Was kostet das?', 'يبقى هاخد جاتوه التفاح. بكام؟'],
    ['Kellner', 'Der Kaffee kostet drei Euro und der Kuchen vier Euro. Das macht sieben Euro.', 'القهوة بتلاتة يورو والجاتوه بأربعة. يعني سبعة يورو.'],
  ], q: [['Was trinkt der Gast?', 'Einen Kaffee mit Milch.', 'Einen Tee.', 'Ein Wasser.'], ['Welchen Kuchen nimmt der Gast?', 'Den Apfelkuchen.', 'Den Schokoladenkuchen.', 'Keinen Kuchen.'], ['Wie viel kostet alles zusammen?', 'Sieben Euro.', 'Vier Euro.', 'Drei Euro.']] },
  { id: 'kennenlernen', level: 'A1', title: ['Kennenlernen', 'التعارف'], lines: [
    ['Lena', 'Hallo, ich bin Lena. Wie heißt du?', 'أهلاً، أنا لينا. اسمك إيه؟'],
    ['Omar', 'Hallo Lena, ich heiße Omar. Ich komme aus Ägypten.', 'أهلاً لينا، اسمي عمر. أنا من مصر.'],
    ['Lena', 'Wirklich? Ich war letztes Jahr in Kairo. Und was machst du hier?', 'بجد؟ أنا كنت في القاهرة السنة اللي فاتت. وإنت بتعمل إيه هنا؟'],
    ['Omar', 'Ich lerne Deutsch und ich arbeite in einem Restaurant.', 'بتعلم ألماني وبشتغل في مطعم.'],
    ['Lena', 'Das ist toll! Ich bin Studentin. Ich studiere Medizin.', 'جميل! أنا طالبة. بدرس طب.'],
    ['Omar', 'Wie schön. Wohnst du in Berlin?', 'جميل. إنتي ساكنة في برلين؟'],
    ['Lena', 'Ja, seit zwei Jahren.', 'أيوه، بقالي سنتين.'],
  ], q: [['Woher kommt Omar?', 'Aus Ägypten.', 'Aus Berlin.', 'Aus Deutschland.'], ['Was macht Omar beruflich?', 'Er arbeitet in einem Restaurant.', 'Er studiert Medizin.', 'Er ist Lehrer.'], ['Seit wann wohnt Lena in Berlin?', 'Seit zwei Jahren.', 'Seit einem Jahr.', 'Seit drei Jahren.']] },
  { id: 'nach-dem-weg', level: 'A1', title: ['Nach dem Weg fragen', 'السؤال عن الطريق'], lines: [
    ['Touristin', 'Entschuldigung, wo ist der Bahnhof?', 'لو سمحت، فين محطة القطر؟'],
    ['Passant', 'Gehen Sie hier geradeaus bis zur Ampel.', 'امشي من هنا على طول لحد الإشارة.'],
    ['Touristin', 'Und dann?', 'وبعدين؟'],
    ['Passant', 'Dann biegen Sie links ab. Der Bahnhof ist neben der Post.', 'بعدين لف شمال. المحطة جنب مكتب البريد.'],
    ['Touristin', 'Ist es weit?', 'هو بعيد؟'],
    ['Passant', 'Nein, nur fünf Minuten zu Fuß.', 'لأ، خمس دقايق مشي بس.'],
    ['Touristin', 'Vielen Dank!', 'شكراً جزيلاً!'],
  ], q: [['Wohin will die Touristin?', 'Zum Bahnhof.', 'Zur Post.', 'Zur Ampel.'], ['Wo muss sie links abbiegen?', 'Nach der Ampel.', 'Vor der Ampel.', 'An der Post.'], ['Wie weit ist es?', 'Fünf Minuten zu Fuß.', 'Zehn Minuten mit dem Bus.', 'Eine Stunde.']] },
  { id: 'tisch-reservieren', level: 'A2', title: ['Einen Tisch reservieren', 'حجز ترابيزة'], lines: [
    ['Kellner', 'Restaurant Sonne, guten Abend.', 'مطعم سونه، مساء الخير.'],
    ['Gast', 'Guten Abend. Ich möchte für Samstag einen Tisch reservieren.', 'مساء الخير. عايز أحجز ترابيزة يوم السبت.'],
    ['Kellner', 'Für wie viele Personen?', 'لكام شخص؟'],
    ['Gast', 'Für vier Personen, um 19 Uhr.', 'لأربعة أشخاص، الساعة سبعة.'],
    ['Kellner', 'Um 19 Uhr ist leider alles besetzt. Um 20 Uhr hätten wir noch einen Tisch.', 'الساعة سبعة للأسف كله محجوز. الساعة تمانية لسه عندنا ترابيزة.'],
    ['Gast', 'Das passt auch. Können wir draußen sitzen?', 'ده مناسب كمان. ينفع نقعد بره؟'],
    ['Kellner', 'Ja, kein Problem. Auf welchen Namen darf ich reservieren?', 'أيوه، مفيش مشكلة. أحجز على اسم مين؟'],
    ['Gast', 'Auf den Namen Hassan.', 'على اسم حسن.'],
  ], q: [['Für welchen Tag reserviert der Gast?', 'Für Samstag.', 'Für Sonntag.', 'Für Freitag.'], ['Warum nimmt er nicht 19 Uhr?', 'Um 19 Uhr ist alles besetzt.', 'Er hat keine Zeit.', 'Das Restaurant ist zu.'], ['Wo möchte er sitzen?', 'Draußen.', 'Drinnen.', 'An der Bar.']] },
  { id: 'im-kleidergeschaeft', level: 'A2', title: ['Im Kleidergeschäft', 'في محل الهدوم'], lines: [
    ['Verkäuferin', 'Kann ich Ihnen helfen?', 'أقدر أساعدك؟'],
    ['Kunde', 'Ja, ich suche eine Jacke für den Winter.', 'أيوه، بدور على جاكت للشتا.'],
    ['Verkäuferin', 'Welche Größe haben Sie?', 'مقاسك كام؟'],
    ['Kunde', 'Größe L. Haben Sie die Jacke auch in Schwarz?', 'مقاس لارج. عندكم الجاكت ده أسود كمان؟'],
    ['Verkäuferin', 'Einen Moment. Ja, hier. Die Umkleidekabine ist dort hinten.', 'لحظة. أيوه، اتفضل. غرفة القياس هناك ورا.'],
    ['Kunde', 'Sie passt gut, aber sie ist ein bisschen teuer. Was kostet sie?', 'مقاسها حلو بس غالية شوية. بكام؟'],
    ['Verkäuferin', 'Sie kostet 89 Euro, aber diese Woche gibt es zehn Prozent Rabatt.', 'بـ 89 يورو، بس الأسبوع ده فيه خصم عشرة في المية.'],
    ['Kunde', 'Dann nehme ich sie.', 'يبقى هاخدها.'],
  ], q: [['Was sucht der Kunde?', 'Eine Winterjacke.', 'Eine Hose.', 'Schuhe.'], ['Welche Farbe möchte er?', 'Schwarz.', 'Blau.', 'Grau.'], ['Warum nimmt er die Jacke?', 'Sie passt gut und es gibt Rabatt.', 'Sie ist sehr billig.', 'Sie ist zu klein.']] },
  { id: 'beim-arzt-termin', level: 'A2', title: ['Beim Arzt', 'عند الدكتور'], lines: [
    ['Ärztin', 'Guten Tag. Was fehlt Ihnen denn?', 'يوم سعيد. إيه اللي تاعبك؟'],
    ['Patient', 'Ich habe seit drei Tagen Halsschmerzen und Fieber.', 'عندي ألم في الزور وسخونية بقالهم تلات أيام.'],
    ['Ärztin', 'Haben Sie auch Husten?', 'عندك كحة كمان؟'],
    ['Patient', 'Ja, ein bisschen, besonders nachts.', 'أيوه، شوية، خصوصاً بالليل.'],
    ['Ärztin', 'Ich untersuche Sie kurz. Machen Sie bitte den Mund auf.', 'هكشف عليك بسرعة. افتح بوقك لو سمحت.'],
    ['Patient', 'Ist es etwas Ernstes?', 'هل ده حاجة خطيرة؟'],
    ['Ärztin', 'Nein, es ist eine Erkältung. Trinken Sie viel Tee und bleiben Sie drei Tage zu Hause.', 'لأ، ده برد. اشرب شاي كتير وفضل في البيت تلات أيام.'],
  ], q: [['Seit wann ist der Patient krank?', 'Seit drei Tagen.', 'Seit einer Woche.', 'Seit gestern.'], ['Wann hustet er besonders?', 'Nachts.', 'Morgens.', 'Beim Essen.'], ['Was rät die Ärztin?', 'Viel Tee trinken und zu Hause bleiben.', 'Sofort arbeiten gehen.', 'Eine Operation machen.']] },
  { id: 'wohnungsbesichtigung', level: 'B1', title: ['Wohnungsbesichtigung', 'معاينة شقة'], lines: [
    ['Maklerin', 'Willkommen! Die Wohnung hat drei Zimmer und liegt im zweiten Stock.', 'أهلاً! الشقة فيها تلات أوض وفي الدور التاني.'],
    ['Interessent', 'Gibt es einen Aufzug? Meine Frau hat Probleme mit den Treppen.', 'فيه أسانسير؟ مراتي عندها مشكلة مع السلم.'],
    ['Maklerin', 'Leider nicht, aber das Haus ist ruhig und die Nachbarn sind sehr freundlich.', 'للأسف لأ، بس البيت هادي والجيران لطاف قوي.'],
    ['Interessent', 'Wie hoch ist die Miete?', 'الإيجار كام؟'],
    ['Maklerin', 'Die Kaltmiete beträgt 850 Euro. Dazu kommen etwa 150 Euro Nebenkosten.', 'الإيجار من غير مصاريف 850 يورو. ويتضاف حوالي 150 يورو مصاريف إضافية.'],
    ['Interessent', 'Das ist etwas mehr, als wir geplant haben. Ist die Miete verhandelbar?', 'ده أكتر شوية من اللي خططنا له. الإيجار ممكن يتفاوض فيه؟'],
    ['Maklerin', 'Das muss ich mit dem Vermieter besprechen. Ich rufe Sie morgen an.', 'لازم أتكلم مع المالك. هكلمك بكرة.'],
  ], q: [['Warum fragt der Mann nach einem Aufzug?', 'Seine Frau hat Probleme mit den Treppen.', 'Er hat viele Koffer.', 'Die Wohnung ist im Keller.'], ['Wie hoch ist die Kaltmiete?', '850 Euro.', '150 Euro.', '1000 Euro.'], ['Was macht die Maklerin morgen?', 'Sie ruft den Interessenten an.', 'Sie zeigt eine neue Wohnung.', 'Sie senkt die Miete.']] },
  { id: 'vorstellungsgespraech', level: 'B1', title: ['Das Vorstellungsgespräch', 'مقابلة التوظيف'], lines: [
    ['Chefin', 'Erzählen Sie uns bitte etwas über Ihre Berufserfahrung.', 'احكيلنا لو سمحت عن خبرتك المهنية.'],
    ['Bewerber', 'Ich habe fünf Jahre als Verkäufer gearbeitet und zuletzt ein kleines Team geleitet.', 'اشتغلت خمس سنين بايع وآخر حاجة قدت فريق صغير.'],
    ['Chefin', 'Warum möchten Sie die Stelle wechseln?', 'ليه عايز تغيّر الوظيفة؟'],
    ['Bewerber', 'Ich suche eine neue Herausforderung und möchte mich weiterentwickeln.', 'بدور على تحدي جديد وعايز أتطور.'],
    ['Chefin', 'Was sind Ihre größten Stärken?', 'إيه أكبر نقاط قوتك؟'],
    ['Bewerber', 'Ich bin zuverlässig, arbeite gern im Team und lerne schnell.', 'أنا موثوق وبحب الشغل في فريق وبتعلم بسرعة.'],
    ['Chefin', 'Wann könnten Sie bei uns anfangen?', 'إمتى تقدر تبدأ عندنا؟'],
    ['Bewerber', 'Ich habe eine Kündigungsfrist von vier Wochen.', 'مهلة الإنذار عندي أربع أسابيع.'],
  ], q: [['Wie lange hat der Bewerber als Verkäufer gearbeitet?', 'Fünf Jahre.', 'Zwei Jahre.', 'Zehn Jahre.'], ['Warum will er wechseln?', 'Er sucht eine neue Herausforderung.', 'Er wurde entlassen.', 'Er verdient zu viel.'], ['Wann kann er anfangen?', 'Nach vier Wochen Kündigungsfrist.', 'Sofort.', 'Erst in einem Jahr.']] },
  { id: 'reklamation-im-geschaeft', level: 'B1', title: ['Eine Reklamation', 'شكوى في المحل'], lines: [
    ['Kundin', 'Guten Tag, ich habe diesen Mixer vor zwei Wochen bei Ihnen gekauft, aber er funktioniert nicht richtig.', 'يوم سعيد، اشتريت الخلاط ده من عندكم من أسبوعين بس مش شغال كويس.'],
    ['Verkäufer', 'Was genau ist das Problem?', 'إيه بالظبط المشكلة؟'],
    ['Kundin', 'Er wird sehr heiß und macht komische Geräusche.', 'بيسخن قوي وبيطلع أصوات غريبة.'],
    ['Verkäufer', 'Haben Sie den Kassenbon dabei?', 'معاكي الفاتورة؟'],
    ['Kundin', 'Ja, hier. Ich hätte gern mein Geld zurück oder ein neues Gerät.', 'أيوه، اتفضل. عايزة فلوسي ترجع أو جهاز جديد.'],
    ['Verkäufer', 'Das ist kein Problem, Sie haben zwei Jahre Garantie. Ich gebe Ihnen ein neues Gerät.', 'مفيش مشكلة، عندك سنتين ضمان. هديكي جهاز جديد.'],
    ['Kundin', 'Vielen Dank für die schnelle Hilfe.', 'شكراً على المساعدة السريعة.'],
  ], q: [['Wann hat die Kundin den Mixer gekauft?', 'Vor zwei Wochen.', 'Gestern.', 'Vor zwei Jahren.'], ['Was ist das Problem?', 'Er wird heiß und macht komische Geräusche.', 'Er ist zu laut verpackt.', 'Er ist zu groß.'], ['Was bekommt die Kundin?', 'Ein neues Gerät.', 'Einen Gutschein.', 'Nichts.']] },
];

import {everydayDialogues} from './dialogues-everyday';
dialogues.push(...everydayDialogues);
