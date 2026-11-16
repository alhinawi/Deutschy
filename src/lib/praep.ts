// [preposition, Arabic, English, example, Arabic example]
export type Prep = [string, string, string, string, string];
export const akk: Prep[] = [
  ['durch', 'من خلال', 'through', 'Wir gehen durch den Park.', 'بنمشي من خلال الحديقة.'],
  ['für', 'لـ، عشان', 'for', 'Das Geschenk ist für dich.', 'الهدية دي ليك.'],
  ['gegen', 'ضد، على', 'against', 'Er spielt gegen die Mannschaft.', 'هو بيلعب ضد الفريق.'],
  ['ohne', 'من غير', 'without', 'Wir fahren ohne den Hund.', 'هنسافر من غير الكلب.'],
  ['um', 'حوالين، الساعة', 'around, at (time)', 'Wir sitzen um den Tisch. Der Film beginnt um acht Uhr.', 'قاعدين حوالين الترابيزة. الفيلم بيبدأ الساعة تمانية.'],
  ['bis', 'لحد', 'until', 'Ich warte bis morgen.', 'هستنى لحد بكرة.'],
  ['entlang', 'على طول', 'along', 'Wir gehen die Straße entlang.', 'بنمشي على طول الشارع.'],
];
export const dat: Prep[] = [
  ['aus', 'من (جوه)', 'out of, from', 'Er kommt aus der Schweiz.', 'هو جاي من سويسرا.'],
  ['bei', 'عند، مع', 'at, with (a person)', 'Ich wohne bei meiner Tante.', 'أنا ساكن عند عمتي.'],
  ['mit', 'مع، بـ', 'with, by (transport)', 'Ich fahre mit dem Bus.', 'بروح بالأتوبيس.'],
  ['nach', 'بعد، إلى (بلد)', 'after, to (a city)', 'Nach dem Essen gehen wir spazieren.', 'بعد الأكل بنتمشى.'],
  ['seit', 'من (مدة)', 'since, for (time)', 'Ich lerne seit einem Jahr Deutsch.', 'بتعلم ألماني من سنة.'],
  ['von', 'من، بتاع', 'from, of', 'Das Geschenk ist von meinem Vater.', 'الهدية دي من أبويا.'],
  ['zu', 'إلى، عند', 'to', 'Ich gehe zu dem Arzt.', 'رايح للدكتور.'],
  ['gegenüber', 'قدّام، مقابل', 'opposite', 'Die Bank ist dem Bahnhof gegenüber.', 'البنك قدام المحطة.'],
];
export const wechsel: { p: string; ar: string; en: string; wo: [string, string]; wohin: [string, string] }[] = [
  { p: 'an', ar: 'على (جنب، ملاصق)', en: 'on (the side), at', wo: ['Das Bild hängt an der Wand.', 'الصورة متعلقة على الحيطة.'], wohin: ['Ich hänge das Bild an die Wand.', 'بعلّق الصورة على الحيطة.'] },
  { p: 'auf', ar: 'فوق (على السطح)', en: 'on top of', wo: ['Das Buch liegt auf dem Tisch.', 'الكتاب على الترابيزة.'], wohin: ['Ich lege das Buch auf den Tisch.', 'بحط الكتاب على الترابيزة.'] },
  { p: 'hinter', ar: 'ورا', en: 'behind', wo: ['Die Tasche steht hinter dem Stuhl.', 'الشنطة ورا الكرسي.'], wohin: ['Ich stelle die Tasche hinter den Stuhl.', 'بحط الشنطة ورا الكرسي.'] },
  { p: 'in', ar: 'في، جوه', en: 'in', wo: ['Die Milch steht in dem Kühlschrank.', 'اللبن في التلاجة.'], wohin: ['Ich stelle die Milch in den Kühlschrank.', 'بحط اللبن في التلاجة.'] },
  { p: 'neben', ar: 'جنب', en: 'next to', wo: ['Die Lampe steht neben dem Bett.', 'الأباجورة جنب السرير.'], wohin: ['Ich stelle die Lampe neben das Bett.', 'بحط الأباجورة جنب السرير.'] },
  { p: 'über', ar: 'فوق (من غير لمس)', en: 'above, over', wo: ['Die Lampe hängt über dem Tisch.', 'الأباجورة متعلقة فوق الترابيزة.'], wohin: ['Ich hänge die Lampe über den Tisch.', 'بعلّق الأباجورة فوق الترابيزة.'] },
  { p: 'unter', ar: 'تحت', en: 'under', wo: ['Die Katze schläft unter dem Tisch.', 'القطة نايمة تحت الترابيزة.'], wohin: ['Die Katze läuft unter den Tisch.', 'القطة بتجري تحت الترابيزة.'] },
  { p: 'vor', ar: 'قدّام', en: 'in front of', wo: ['Das Auto steht vor dem Haus.', 'العربية واقفة قدام البيت.'], wohin: ['Ich fahre das Auto vor das Haus.', 'بوقف العربية قدام البيت.'] },
  { p: 'zwischen', ar: 'بين', en: 'between', wo: ['Der Stuhl steht zwischen dem Tisch und dem Bett.', 'الكرسي بين الترابيزة والسرير.'], wohin: ['Ich stelle den Stuhl zwischen den Tisch und das Bett.', 'بحط الكرسي بين الترابيزة والسرير.'] },
];
// sentence, answer, group the answer belongs to (distractors come from the other case group)
export const fills: [string, string, 'akk' | 'dat'][] = [
  ['Wir gehen ___ den Park.', 'durch', 'akk'],
  ['Das Geschenk ist ___ dich.', 'für', 'akk'],
  ['Er spielt ___ die Mannschaft.', 'gegen', 'akk'],
  ['Wir fahren ___ den Hund.', 'ohne', 'akk'],
  ['Wir sitzen ___ den Tisch.', 'um', 'akk'],
  ['Ich fahre ___ dem Bus.', 'mit', 'dat'],
  ['Er kommt ___ der Schweiz.', 'aus', 'dat'],
  ['Ich wohne ___ meiner Tante.', 'bei', 'dat'],
  ['___ dem Essen gehen wir spazieren.', 'Nach', 'dat'],
  ['Ich lerne ___ einem Jahr Deutsch.', 'seit', 'dat'],
  ['Das Geschenk ist ___ meinem Vater.', 'von', 'dat'],
  ['Ich gehe ___ dem Arzt.', 'zu', 'dat'],
];
