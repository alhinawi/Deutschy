// Pronunciation sections. words: [German, Arabic, English]
export type PronSection = { id: string; t: string; ar: string; en: string; words: [string, string, string][] };

export const pron: PronSection[] = [
  { id: 'umlaut-a', t: 'ä', ar: 'ä زي "إي" مفتوحة، قريبة من حرف "أ" لما تتقال بإمالة (زي "إيه" في كلمة "إيه ده").', en: 'ä sounds like the "e" in "bed", with an open mouth.',
    words: [['Mädchen', 'بنت', 'girl'], ['Bäcker', 'خباز', 'baker'], ['Käse', 'جبنة', 'cheese'], ['Äpfel', 'تفاح (جمع)', 'apples'], ['spät', 'متأخر', 'late'], ['Zähne', 'أسنان', 'teeth']] },
  { id: 'umlaut-o', t: 'ö', ar: 'ö صوت بين "أو" و"إي". قول "إي" وفي نفس الوقت دوّر شفايفك زي ما بتقول "أو".', en: 'ö: say "e" while rounding your lips as for "o".',
    words: [['schön', 'جميل', 'beautiful'], ['Öl', 'زيت', 'oil'], ['Löffel', 'معلقة', 'spoon'], ['können', 'يقدر', 'can'], ['möchten', 'عايز (بأدب)', 'would like'], ['Köln', 'كولن', 'Cologne']] },
  { id: 'umlaut-u', t: 'ü', ar: 'ü قول "إي" وشفايفك مدورة زي "أو". مفيش صوت زيه في العربي.', en: 'ü: say "ee" while rounding your lips. There is no Arabic equivalent.',
    words: [['über', 'فوق', 'over'], ['Tür', 'باب', 'door'], ['Küche', 'مطبخ', 'kitchen'], ['Bücher', 'كتب', 'books'], ['müde', 'تعبان', 'tired'], ['für', 'لـ', 'for']] },
  { id: 'eszett', t: 'ß', ar: 'ß بتتنطق "س" طويلة ومش مجهورة، زي السين في "سيف". بتيجي بعد صوت طويل.', en: 'ß is a sharp "ss" sound, as in "kiss".',
    words: [['Straße', 'شارع', 'street'], ['heiß', 'سخن', 'hot'], ['Fuß', 'رجل (قدم)', 'foot'], ['weiß', 'أبيض', 'white'], ['groß', 'كبير', 'big'], ['Spaß', 'متعة', 'fun']] },
  { id: 'ich', t: 'ch (ich)', ar: 'بعد e وi وä وö وü وl وn وr: صوت خفيف زي "ش" بس من غير ما تحرك شفايفك، زي همسة طالعة من اللسان.', en: 'After e, i, ä, ö, ü, l, n, r: a soft hissing sound, like "h" in "huge".',
    words: [['ich', 'أنا', 'I'], ['nicht', 'مش', 'not'], ['Küche', 'مطبخ', 'kitchen'], ['Milch', 'لبن', 'milk'], ['Mädchen', 'بنت', 'girl'], ['welche', 'أنهي', 'which']] },
  { id: 'ach', t: 'ch (ach)', ar: 'بعد a وo وu وau: صوت خشن من الحلق زي "خ" في "خروف".', en: 'After a, o, u, au: a rough sound from the throat, like "ch" in Scottish "loch".',
    words: [['Buch', 'كتاب', 'book'], ['Bach', 'جدول مية', 'stream'], ['machen', 'يعمل', 'to make'], ['noch', 'لسه', 'still'], ['auch', 'كمان', 'also'], ['Nacht', 'ليل', 'night']] },
  { id: 'sch', t: 'sch, st, sp', ar: 'sch = "ش". وst وsp في أول الكلمة بيتقروا "شت" و"شب": Stadt = "شتات"، Sport = "شبورت".', en: 'sch = "sh". At the start of a word st sounds like "sht" and sp like "shp".',
    words: [['Schule', 'مدرسة', 'school'], ['Tisch', 'ترابيزة', 'table'], ['Schwester', 'أخت', 'sister'], ['Stadt', 'مدينة', 'city'], ['Sport', 'رياضة', 'sport'], ['sprechen', 'يتكلم', 'to speak']] },
  { id: 'ei-ie', t: 'ei, ie', ar: 'ei = "آي" (nein). ie = "ي" طويلة (Liebe). خلي بالك: الاتنين بيتكتبوا بالعكس عن نطقهم.', en: 'ei sounds like "eye". ie is a long "ee". They look reversed compared with English.',
    words: [['nein', 'لأ', 'no'], ['Eis', 'آيس كريم', 'ice cream'], ['Zeit', 'وقت', 'time'], ['Liebe', 'حب', 'love'], ['Bier', 'بيرة', 'beer'], ['viel', 'كتير', 'a lot']] },
  { id: 'eu', t: 'eu, äu', ar: 'eu وäu الاتنين = "أوي" (زي "أوي" في "حلو أوي").', en: 'eu and äu both sound like "oy" in "boy".',
    words: [['Euro', 'يورو', 'euro'], ['neun', 'تسعة', 'nine'], ['Freund', 'صاحب', 'friend'], ['heute', 'النهارده', 'today'], ['Häuser', 'بيوت', 'houses'], ['träumen', 'يحلم', 'to dream']] },
  { id: 'z', t: 'z', ar: 'z دايماً = "تس" (Zeit = "تسايت"). مش زي الزاي العربي.', en: 'z is always "ts", as in "cats".',
    words: [['Zeit', 'وقت', 'time'], ['Zahl', 'رقم', 'number'], ['Zug', 'قطر', 'train'], ['Zimmer', 'أوضة', 'room'], ['ziehen', 'يسحب', 'to pull'], ['Platz', 'مكان', 'place']] },
  { id: 'v-w', t: 'v, w', ar: 'v في الكلمات الألماني = "ف" (Vater). وw = "في" الإنجليزي (Wasser).', en: 'German v is usually "f" (Vater). German w is "v" (Wasser).',
    words: [['Vater', 'أب', 'father'], ['viel', 'كتير', 'a lot'], ['Vogel', 'عصفور', 'bird'], ['Wasser', 'مية', 'water'], ['Wein', 'نبيذ', 'wine'], ['Wohnung', 'شقة', 'flat']] },
  { id: 'r', t: 'r, -er', ar: 'r بيتنطق من الحلق قريب من الغين الخفيفة. وفي آخر الكلمة -er بيتحول لصوت زي "آ" قصيرة (Lehrer).', en: 'r is made at the back of the throat. A final -er sounds like a short "a" (Lehrer).',
    words: [['rot', 'أحمر', 'red'], ['Reis', 'رز', 'rice'], ['Bruder', 'أخ', 'brother'], ['Berg', 'جبل', 'mountain'], ['Lehrer', 'مدرس', 'teacher'], ['Wasser', 'مية', 'water']] },
];

export const pairs: [string, string, string, string][] = [
  ['schon', 'بالفعل', 'schön', 'جميل'],
  ['Bar', 'بار', 'Bär', 'دب'],
  ['lesen', 'يقرأ', 'lösen', 'يحل'],
  ['musste', 'اضطر', 'müsste', 'كان لازم'],
];
