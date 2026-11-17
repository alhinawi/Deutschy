import type {Dialogue} from './dialogues';
export const everydayDialogues:Dialogue[]=[
{id:'fahrrad-abholen',level:'A2',title:['Das Fahrrad abholen','استلام العجلة'],lines:[
 ['Kundin','Guten Tag. Ich möchte mein Fahrrad abholen. Mein Name ist Nora Ali.','صباح الخير. عايزة أستلم عجلتي. اسمي نورا علي.'],
 ['Mitarbeiter','Guten Tag. Einen Moment, bitte. Haben Sie den Abholschein dabei?','صباح الخير. لحظة لو سمحتي. معاكي ورقة الاستلام؟'],
 ['Kundin','Ja, hier ist er. Ist die Bremse jetzt in Ordnung?','أيوه، اتفضل. الفرامل بقت كويسة دلوقتي؟'],
 ['Mitarbeiter','Ja. Wir haben die Bremse repariert. Der Vorderreifen war auch leer, deshalb haben wir ihn aufgepumpt.','أيوه. صلحنا الفرامل. الكاوتش الأمامي كان فاضي كمان، فنفخناه.'],
 ['Kundin','Danke. Wie viel muss ich bezahlen?','شكراً. هدفع كام؟'],
 ['Mitarbeiter','Für die Reparatur sind es 24 Euro. Das Aufpumpen kostet nichts extra.','التصليح بـ 24 يورو. نفخ الكاوتش من غير تكلفة إضافية.'],
 ['Kundin','Gut. Kann ich mit Karte bezahlen?','تمام. ينفع أدفع بالكارت؟'],
 ['Mitarbeiter','Ja, natürlich. Danach können Sie das Fahrrad draußen abholen.','أيوه طبعاً. بعدها تقدري تستلمي العجلة من بره.'],
 ],q:[['Was wurde repariert?','Die Bremse.','Der Sattel.','Das Licht.'],['Wie viel kostet das Aufpumpen zusätzlich?','Nichts.','4 Euro.','24 Euro.'],['Wo kann Nora das Fahrrad abholen?','Draußen.','Im Keller.','Am Bahnhof.']]},
{id:'kurs-gruppenarbeit',level:'B1',title:['Eine Aufgabe gemeinsam planen','تخطيط مهمة سوا'],lines:[
 ['Lea','Für unser Kursprojekt sollen wir drei Lernorte vergleichen. Wollen wir sofort mit den Texten anfangen?','في مشروع الكورس مطلوب نقارن تلات أماكن للمذاكرة. نبدأ نكتب النصوص على طول؟'],
 ['Samir','Lieber nicht. Zuerst sollten wir entscheiden, welche Informationen wir brauchen. Sonst schreiben wir vielleicht über ganz verschiedene Dinge.','الأفضل لأ. الأول نحدد محتاجين أنهي معلومات، وإلا ممكن نكتب عن حاجات مختلفة تماماً.'],
 ['Lea','Stimmt. Wir könnten Öffnungszeiten, Ruhe und Kosten vergleichen. Ich übernehme die Bibliothek.','صح. ممكن نقارن مواعيد الفتح والهدوء والتكلفة. أنا هتولى المكتبة.'],
 ['Samir','Dann kümmere ich mich um das Lerncafé. Wer fragt im Nachbarschaftszentrum nach?','يبقى أنا هتولى كافيه المذاكرة. مين هيسأل في مركز الحي؟'],
 ['Lea','Das kann ich auch machen. Dafür könntest du die gemeinsame Tabelle vorbereiten.','أقدر أعمل ده كمان. وفي المقابل ممكن تجهز الجدول المشترك.'],
 ['Samir','Einverstanden. Bis Mittwoch sammeln wir die Informationen. Am Donnerstag prüfen wir zusammen, ob etwas fehlt.','موافق. لحد الأربعاء نجمع المعلومات. والخميس نراجع سوا لو فيه حاجة ناقصة.'],
 ['Lea','Gut. Die Texte schreiben wir erst danach. Ich notiere unsere Aufgaben, damit wir nichts verwechseln.','تمام. نكتب النصوص بعد كده بس. هكتب مهامنا عشان مانلخبطش.'],
 ],q:[['Warum wollen sie nicht sofort Texte schreiben?','Sie müssen zuerst gemeinsame Vergleichspunkte festlegen.','Sie dürfen keine Texte schreiben.','Das Projekt wurde abgesagt.'],['Was bereitet Samir zusätzlich vor?','Die gemeinsame Tabelle.','Das Essen im Café.','Die Öffnungszeiten der Bibliothek.'],['Was machen sie am Donnerstag?','Sie prüfen gemeinsam, ob Informationen fehlen.','Sie beginnen mit dem Sammeln der Informationen.','Sie geben das Projekt ohne Prüfung ab.']]}
];
export const dialogueEvidence:Record<string,string[]>={
 'fahrrad-abholen':['Ja. Wir haben die Bremse repariert. Der Vorderreifen war auch leer, deshalb haben wir ihn aufgepumpt.','Für die Reparatur sind es 24 Euro. Das Aufpumpen kostet nichts extra.','Ja, natürlich. Danach können Sie das Fahrrad draußen abholen.'],
 'kurs-gruppenarbeit':['Zuerst sollten wir entscheiden, welche Informationen wir brauchen.','Das kann ich auch machen. Dafür könntest du die gemeinsame Tabelle vorbereiten.','Am Donnerstag prüfen wir zusammen, ob etwas fehlt.'],
};
everydayDialogues.push(
{id:'lerntandem-ort',level:'A2',title:['Einen ruhigeren Ort finden','نلاقي مكان أهدى'],lines:[
 ['Rana','Hier ist es ziemlich laut. Kannst du mich gut hören?','هنا دوشة شوية. سامعني كويس؟'],
 ['David','Nicht besonders gut. Sollen wir draußen einen Platz suchen?','مش قوي. ندور على مكان بره؟'],
 ['Rana','Ja. Hinter der Bibliothek gibt es einen ruhigen Hof.','آه. فيه حوش هادي ورا المكتبة.'],
 ['David','Gut. Wollen wir dort zuerst Deutsch sprechen?','تمام. نتكلم هناك ألماني الأول؟'],
 ['Rana','Genau, zwanzig Minuten. Danach sprechen wir Arabisch.','بالضبط، 20 دقيقة. وبعدها نتكلم عربي.'],
 ['David','Wenn dir ein Wort fehlt, versuch es erst zu beschreiben.','لو فيه كلمة مش عارفاها، حاولي توصفيها الأول.'],
 ['Rana','Gern. Und am Ende schreiben wir neue Wörter auf.','حاضر. وفي الآخر نكتب كلمات جديدة.']
],q:[['Wohin möchten sie gehen?','In den Hof hinter der Bibliothek.','In einen lauten Kursraum.','Zum Bahnhof.'],['Wie lange sprechen sie zuerst Deutsch?','Zwanzig Minuten.','Zehn Minuten.','Eine Stunde.'],['Was machen sie am Ende?','Sie schreiben neue Wörter auf.','Sie kaufen ein Wörterbuch.','Sie sagen das Treffen ab.']]},
{id:'tauschregal-hinweis',level:'B1',title:['Einen Hinweis klarer schreiben','نكتب تنبيه أوضح'],lines:[
 ['Farid','Das Regal ist fast voll. Vielleicht brauchen wir ein zweites.','الرف قرب يتملي. يمكن محتاجين رف تاني.'],
 ['Lina','Bevor wir eines aufstellen, sollten wir herausfinden, warum so wenig mitgenommen wird.','قبل ما نحط واحد، لازم نعرف ليه الناس مش بتاخد كتب كتير.'],
 ['Nachbarin','Ich dachte, die Bücher werden nur gesammelt. Darf ich wirklich eines mitnehmen?','كنت فاكرة إنكم بتجمعوا الكتب بس. ينفع فعلا آخد كتاب؟'],
 ['Farid','Ja, auch wenn Sie selbst keines mitbringen. Das steht wohl nicht deutlich genug da.','آه، حتى لو حضرتك مش جايبة كتاب. واضح إن ده مش مكتوب بشكل كفاية.'],
 ['Lina','Dann ergänzen wir genau diesen Satz. Am Platz des Regals ändern wir nichts.','يبقى نضيف الجملة دي بالضبط. ومش هنغير مكان الرف.'],
 ['Nachbarin','Gut. Und welche Sachen darf ich hineinstellen?','تمام. وينفع أحط فيه حاجات إيه؟'],
 ['Lina','Nur saubere, vollständige Bücher. Der Durchgang muss frei bleiben.','كتب نضيفة وكاملة بس. والممر لازم يفضل فاضي.']
],q:[['Was möchte Lina zuerst herausfinden?','Warum so wenig mitgenommen wird.','Wo sie ein zweites Regal kaufen kann.','Wer die Bücher geschrieben hat.'],['Muss die Nachbarin ein Buch mitbringen, um eines mitzunehmen?','Nein.','Ja, immer zwei.','Nur am Wochenende.'],['Was ändern Lina und Farid?','Sie ergänzen den Hinweis.','Sie stellen das Regal in den Durchgang.','Sie erlauben alte Geräte.']]}
);
Object.assign(dialogueEvidence,{
'lerntandem-ort':['Hinter der Bibliothek gibt es einen ruhigen Hof.','Genau, zwanzig Minuten. Danach sprechen wir Arabisch.','Und am Ende schreiben wir neue Wörter auf.'],
'tauschregal-hinweis':['Bevor wir eines aufstellen, sollten wir herausfinden, warum so wenig mitgenommen wird.','Ja, auch wenn Sie selbst keines mitbringen.','Dann ergänzen wir genau diesen Satz.']
});

everydayDialogues.push(...([
 {
  "id": "waschraum-absprache",
  "level": "A2",
  "title": [
   "An der Waschmaschine",
   "عند الغسالة"
  ],
  "lines": [
   [
    "Dalia",
    "Guten Morgen. Ich habe mich für 10 Uhr eingetragen.",
    "صباح الخير. أنا كاتبة اسمي الساعة 10."
   ],
   [
    "Ben",
    "Oh, entschuldige. Ich habe die Liste nicht gesehen.",
    "آه، معلش. ماشفتش الجدول."
   ],
   [
    "Dalia",
    "Wie lange dauert dein Programm noch?",
    "برنامجك لسه فاضله قد إيه؟"
   ],
   [
    "Ben",
    "Noch ungefähr eine halbe Stunde. Musst du gleich weg?",
    "حوالي نص ساعة كمان. لازم تخرجي حالا؟"
   ],
   [
    "Dalia",
    "Nein, erst am Nachmittag. Ich kann warten.",
    "لأ، بعد الضهر بس. أقدر أستنى."
   ],
   [
    "Ben",
    "Ich sage dir Bescheid, sobald die Maschine frei ist.",
    "هقول لك أول ما الغسالة تفضى."
   ],
   [
    "Dalia",
    "Danke. Hängen wir die Liste direkt an die Tür?",
    "شكرا. نعلق الجدول على الباب نفسه؟"
   ],
   [
    "Ben",
    "Gute Idee. Dann sieht man sie früher.",
    "فكرة كويسة. كده أي حد يشوفه بدري."
   ]
  ],
  "q": [
   [
    "Wie lange dauert Bens Programm noch?",
    "Ungefähr eine halbe Stunde.",
    "Zwei Stunden.",
    "Nur eine Minute."
   ],
   [
    "Muss Dalia sofort weg?",
    "Nein, erst am Nachmittag.",
    "Ja, sofort.",
    "Sie fährt am Morgen ab."
   ],
   [
    "Was wollen sie an die Tür hängen?",
    "Die Liste.",
    "Die Wäsche.",
    "Einen Schlüssel."
   ]
  ]
 },
 {
  "id": "protokoll-rueckfrage",
  "level": "B1",
  "title": [
   "Vorschlag oder Beschluss?",
   "اقتراح ولا قرار؟"
  ],
  "lines": [
   [
    "Mariam",
    "Im Protokoll steht, dass wir den großen Raum nehmen. Ist er denn schon bestätigt?",
    "في المحضر مكتوب إننا هناخد القاعة الكبيرة. هي اتأكدت خلاص؟"
   ],
   [
    "Jonas",
    "Nein. Ich dachte, wir hätten das schon beschlossen.",
    "لأ. كنت فاكر إننا قررنا ده خلاص."
   ],
   [
    "Mariam",
    "Wir haben den Raum nur vorgeschlagen. Ob er frei ist, wissen wir noch nicht.",
    "إحنا بس اقترحنا القاعة. لسه مانعرفش إذا كانت فاضية."
   ],
   [
    "Jonas",
    "Dann ändere ich das. Ich schreibe: Verfügbarkeit noch prüfen.",
    "يبقى هعدل ده. هكتب: لسه لازم نتأكد من توافرها."
   ],
   [
    "Mariam",
    "Danke. Wer kümmert sich um die Anfrage?",
    "شكرا. مين هيتولى السؤال؟"
   ],
   [
    "Jonas",
    "Das mache ich. Bis Dienstag gebe ich euch Bescheid.",
    "أنا هعمل ده. لحد يوم التلات هبلغكم."
   ],
   [
    "Mariam",
    "Der Beginn um 18 Uhr bleibt aber stehen. Darüber waren wir uns einig.",
    "بس البداية الساعة 18 تفضل مكتوبة. إحنا كنا متفقين عليها."
   ],
   [
    "Jonas",
    "Genau. Die Einladung schicken wir erst nach der Raumbestätigung.",
    "بالضبط. مش هنبعت الدعوة غير بعد تأكيد القاعة."
   ]
  ],
  "q": [
   [
    "Was weiß die Gruppe noch nicht?",
    "Ob der Raum frei ist.",
    "Wann der Abend beginnen soll.",
    "Wer das Protokoll geschrieben hat."
   ],
   [
    "Bis wann will Jonas Bescheid geben?",
    "Bis Dienstag.",
    "Bis Freitag.",
    "Erst nach dem Übungsabend."
   ],
   [
    "Worüber war sich die Gruppe einig?",
    "Über den Beginn um 18 Uhr.",
    "Über eine bestätigte Raumbuchung.",
    "Über die Absage des Abends."
   ]
  ]
 }
] satisfies Dialogue[]));
Object.assign(dialogueEvidence,{
 "waschraum-absprache": [
  "Noch ungefähr eine halbe Stunde. Musst du gleich weg?",
  "Nein, erst am Nachmittag. Ich kann warten.",
  "Danke. Hängen wir die Liste direkt an die Tür?"
 ],
 "protokoll-rueckfrage": [
  "Wir haben den Raum nur vorgeschlagen. Ob er frei ist, wissen wir noch nicht.",
  "Das mache ich. Bis Dienstag gebe ich euch Bescheid.",
  "Der Beginn um 18 Uhr bleibt aber stehen. Darüber waren wir uns einig."
 ]
});

everydayDialogues.push(...([
 {
  "id": "pflanzen-am-fenster",
  "level": "A1",
  "title": [
   "Wo ist die Kanne?",
   "فين كنكة الري؟"
  ],
  "lines": [
   [
    "Nina",
    "Wo ist die kleine Gießkanne?",
    "فين الكنكة الصغيرة بتاعة الري؟"
   ],
   [
    "Tom",
    "Sie steht unter dem Tisch.",
    "تحت الترابيزة."
   ],
   [
    "Nina",
    "Ist sie blau?",
    "هي زرقا؟"
   ],
   [
    "Tom",
    "Nein, sie ist grün.",
    "لأ، خضرا."
   ],
   [
    "Nina",
    "Danke. Die Pflanze hier braucht Wasser.",
    "شكرا. النبتة دي محتاجة مية."
   ],
   [
    "Tom",
    "Ich mache jetzt Tee. Möchtest du auch eine Tasse?",
    "هعمل شاي دلوقتي. تحبي كوباية كمان؟"
   ],
   [
    "Nina",
    "Ja, bitte. Ohne Zucker.",
    "آه لو سمحت. من غير سكر."
   ]
  ],
  "q": [
   [
    "Wo steht die Kanne?",
    "Unter dem Tisch.",
    "Auf dem Sofa.",
    "Neben dem Bett."
   ],
   [
    "Welche Farbe hat sie?",
    "Grün.",
    "Blau.",
    "Gelb."
   ],
   [
    "Wie möchte Nina den Tee?",
    "Ohne Zucker.",
    "Mit viel Zucker.",
    "Mit Milch."
   ]
  ]
 },
 {
  "id": "spieleabend-nachfrage",
  "level": "A2",
  "title": [
   "Was soll ich mitbringen?",
   "أجيب إيه معايا؟"
  ],
  "lines": [
   [
    "Lea",
    "Hallo Omar. Spielen wir am Freitag bei dir zu Hause?",
    "أهلا يا عمر. هنلعب الجمعة عندك في البيت؟"
   ],
   [
    "Omar",
    "Ja. Ich schicke dir gleich die Adresse.",
    "آه. هبعت لك العنوان حالا."
   ],
   [
    "Lea",
    "Soll ich etwas zu essen mitbringen?",
    "أجيب حاجة تتاكل معايا؟"
   ],
   [
    "Omar",
    "Nein, ich bereite Brot und Suppe vor. Wasser und Saft habe ich auch.",
    "لأ، هجهز عيش وشوربة. وعندي مية وعصير كمان."
   ],
   [
    "Lea",
    "Dann bringe ich mein Kartenspiel mit. Ben kommt erst um halb acht.",
    "يبقى هجيب لعبة الكروت بتاعتي. بن مش هييجي غير الساعة 19:30."
   ],
   [
    "Omar",
    "Kein Problem. Wir essen zuerst. Mit dem Spiel warten wir auf ihn.",
    "مفيش مشكلة. هناكل الأول. وهنستناه عشان نبدأ اللعب."
   ],
   [
    "Lea",
    "Gut. Ich antworte gleich auf deine zweite Nachricht.",
    "تمام. هرد حالا على رسالتك التانية."
   ]
  ],
  "q": [
   [
    "Was will Omar noch schicken?",
    "Die Adresse.",
    "Ein Kartenspiel.",
    "Einen Schlüssel."
   ],
   [
    "Was bringt Lea mit?",
    "Ihr Kartenspiel.",
    "Wasser und Saft.",
    "Brot und Suppe."
   ],
   [
    "Womit warten sie auf Ben?",
    "Mit dem Spiel.",
    "Mit dem Einkauf der Getränke.",
    "Mit dem Schreiben der Adresse."
   ]
  ]
 },
 {
  "id": "garten-verantwortung",
  "level": "B1",
  "title": [
   "Erst die Verantwortung klären",
   "نحدد المسؤولية الأول"
  ],
  "lines": [
   [
    "Sara",
    "Bevor wir Pflanzen kaufen, sollten wir das Gießen planen.",
    "قبل ما نشتري نباتات، لازم نخطط للري."
   ],
   [
    "Ali",
    "Von Montag bis Donnerstag sind schon Leute eingetragen.",
    "من الاتنين للخميس فيه ناس سجلت أساميها خلاص."
   ],
   [
    "Sara",
    "Und wer kommt am Wochenende?",
    "ومين هييجي آخر الأسبوع؟"
   ],
   [
    "Ali",
    "Bisher niemand. Ich könnte noch Jana fragen.",
    "لحد دلوقتي مفيش حد. ممكن أسأل يانا."
   ],
   [
    "Sara",
    "Gut. Wir müssen außerdem prüfen, wie viel Sonne das Beet bekommt.",
    "تمام. ولازم كمان نتأكد حوض الزرع بتوصله شمس قد إيه."
   ],
   [
    "Ali",
    "Ich frage die Gartenleitung nach geeigneten Pflanzen. Dann vergleichen wir Blumen und Kräuter.",
    "هسأل إدارة الجنينة عن نباتات مناسبة. وبعدها نقارن الورد بالأعشاب."
   ],
   [
    "Sara",
    "Einverstanden. Bis dahin bleibt die Entscheidung offen.",
    "موافقة. لحد ساعتها القرار يفضل مفتوح."
   ]
  ],
  "q": [
   [
    "Wen möchte Ali noch fragen?",
    "Jana.",
    "Seinen Arzt.",
    "Den Verkäufer eines Autos."
   ],
   [
    "Was soll am Beet geprüft werden?",
    "Wie viel Sonne es bekommt.",
    "Wie viel ein Auto kostet.",
    "Wer das Gartentor gestrichen hat."
   ],
   [
    "Was ist am Ende noch offen?",
    "Die Entscheidung über die Pflanzen.",
    "Ob Montag auf Sonntag folgt.",
    "Ob schon Pflanzen gekauft wurden."
   ]
  ]
 }
] satisfies Dialogue[]));
Object.assign(dialogueEvidence,{
 "pflanzen-am-fenster": [
  "Sie steht unter dem Tisch.",
  "Nein, sie ist grün.",
  "Ja, bitte. Ohne Zucker."
 ],
 "spieleabend-nachfrage": [
  "Ja. Ich schicke dir gleich die Adresse.",
  "Dann bringe ich mein Kartenspiel mit. Ben kommt erst um halb acht.",
  "Kein Problem. Wir essen zuerst. Mit dem Spiel warten wir auf ihn."
 ],
 "garten-verantwortung": [
  "Bisher niemand. Ich könnte noch Jana fragen.",
  "Gut. Wir müssen außerdem prüfen, wie viel Sonne das Beet bekommt.",
  "Einverstanden. Bis dahin bleibt die Entscheidung offen."
 ]
});

everydayDialogues.push(...([
 {
  "id": "knopf-aussuchen",
  "level": "A1",
  "title": [
   "Ein Knopf für die Jacke",
   "زرار للجاكيت"
  ],
  "lines": [
   [
    "Schwester",
    "Hast du einen Knopf für meine Jacke?",
    "عندك زرار لجاكيتي؟"
   ],
   [
    "Mira",
    "Ja. Hier ist ein schwarzer Knopf.",
    "أيوه. أهو زرار أسود."
   ],
   [
    "Schwester",
    "Danke, aber er ist zu klein.",
    "شكراً، بس صغير زيادة."
   ],
   [
    "Mira",
    "Dann schauen wir in die blaue Dose.",
    "طيب نبص في العلبة الزرقا."
   ],
   [
    "Schwester",
    "Da unten ist ein großer brauner Knopf.",
    "تحت أهو فيه زرار بني كبير."
   ],
   [
    "Mira",
    "Passt er?",
    "مناسب؟"
   ],
   [
    "Schwester",
    "Ja, den nehme ich. Vielen Dank!",
    "أيوه، هاخد ده. شكراً جداً!"
   ]
  ],
  "q": [
   [
    "Wofür sucht die Schwester einen Knopf?",
    "Für ihre Jacke.",
    "Für ihre Schuhe.",
    "Für eine Dose."
   ],
   [
    "Warum passt der schwarze Knopf nicht?",
    "Er ist zu klein.",
    "Er ist zu groß.",
    "Er ist kaputt."
   ],
   [
    "Welche Farbe hat der passende Knopf?",
    "Braun.",
    "Blau.",
    "Weiß."
   ]
  ]
 },
 {
  "id": "schirm-zurueckgeben",
  "level": "A2",
  "title": [
   "Den Schirm ausleihen",
   "استلاف الشمسية"
  ],
  "lines": [
   [
    "Yasmin",
    "Gehört dir der schwarze Schirm am Eingang?",
    "الشمسية السودا عند المدخل بتاعتك؟"
   ],
   [
    "Daniel",
    "Ja. Hast du deinen vergessen?",
    "أيوه. نسيتي بتاعتك؟"
   ],
   [
    "Yasmin",
    "Leider ja. Könnte ich deinen bis Donnerstag ausleihen?",
    "للأسف أيوه. ممكن أستلف بتاعتك لحد الخميس؟"
   ],
   [
    "Daniel",
    "Gern. Ich wohne direkt nebenan. Bring ihn bitte vor dem Unterricht zurück.",
    "طبعاً. أنا ساكن جنبنا على طول. رجعيها قبل الدرس لو سمحتي."
   ],
   [
    "Yasmin",
    "Gut. Soll ich am Eingang auf dich warten?",
    "تمام. أستناك عند المدخل؟"
   ],
   [
    "Daniel",
    "Ja, dort treffen wir uns.",
    "أيوه، نتقابل هناك."
   ],
   [
    "Yasmin",
    "Danke. Ich schreibe mir gleich eine Erinnerung.",
    "شكراً. هكتب لنفسي تذكير حالاً."
   ]
  ],
  "q": [
   [
    "Bis wann möchte Yasmin den Schirm ausleihen?",
    "Bis Donnerstag.",
    "Bis Sonntag.",
    "Bis heute Abend."
   ],
   [
    "Wann soll sie den Schirm zurückbringen?",
    "Vor dem Unterricht.",
    "Während des Unterrichts.",
    "Nach dem letzten Zug."
   ],
   [
    "Wo wollen sie sich treffen?",
    "Am Eingang.",
    "Im Supermarkt.",
    "An Daniels Arbeitsplatz."
   ]
  ]
 },
 {
  "id": "reparatur-keine-zusage",
  "level": "B1",
  "title": [
   "Was kann der Treff versprechen?",
   "المركز يقدر يوعد بإيه؟"
  ],
  "lines": [
   [
    "Besucherin",
    "Der Reißverschluss meines Mantels schließt nicht mehr. Wird er heute repariert?",
    "سوستة البالطو مابقتش بتقفل. هتتصلح النهارده؟"
   ],
   [
    "Paula",
    "Das können wir erst nach dem gemeinsamen Ansehen sagen.",
    "مانقدرش نقول غير بعد ما نبص عليه سوا."
   ],
   [
    "Besucherin",
    "Soll ich vorher einen neuen Reißverschluss kaufen?",
    "أشتري سوستة جديدة الأول؟"
   ],
   [
    "Paula",
    "Bitte noch nicht. Wir müssen zuerst klären, was genau gebraucht wird.",
    "لأ، لسه. لازم نعرف الأول إيه المطلوب بالظبط."
   ],
   [
    "Besucherin",
    "Verstehe. Ich kann den Mantel also mitbringen, aber eine fertige Reparatur ist nicht sicher.",
    "فهمت. أقدر أجيب البالطو، بس مش أكيد التصليح هيخلص."
   ],
   [
    "Paula",
    "Genau. Wir versprechen kein fertiges Ergebnis am selben Tag.",
    "بالظبط. مش بنوعد بنتيجة جاهزة في نفس اليوم."
   ],
   [
    "Besucherin",
    "Danke für die klare Erklärung. Dann komme ich mit dieser Erwartung.",
    "شكراً على التوضيح. هاجي وأنا فاهمة ده."
   ]
  ],
  "q": [
   [
    "Wann ist eine Einschätzung möglich?",
    "Nach dem gemeinsamen Ansehen.",
    "Ohne den Mantel zu sehen.",
    "Erst nach einem Kauf."
   ],
   [
    "Was rät Paula zum Kauf?",
    "Noch nichts kaufen.",
    "Sofort zwei Reißverschlüsse kaufen.",
    "Einen neuen Mantel bestellen."
   ],
   [
    "Was wird nicht versprochen?",
    "Ein fertiges Ergebnis am selben Tag.",
    "Ein gemeinsames Gespräch.",
    "Eine Erklärung des Ablaufs."
   ]
  ]
 }
] satisfies Dialogue[]));
Object.assign(dialogueEvidence,{
 "knopf-aussuchen": [
  "Hast du einen Knopf für meine Jacke?",
  "Danke, aber er ist zu klein.",
  "Da unten ist ein großer brauner Knopf."
 ],
 "schirm-zurueckgeben": [
  "Leider ja. Könnte ich deinen bis Donnerstag ausleihen?",
  "Gern. Ich wohne direkt nebenan. Bring ihn bitte vor dem Unterricht zurück.",
  "Gut. Soll ich am Eingang auf dich warten?"
 ],
 "reparatur-keine-zusage": [
  "Das können wir erst nach dem gemeinsamen Ansehen sagen.",
  "Bitte noch nicht. Wir müssen zuerst klären, was genau gebraucht wird.",
  "Genau. Wir versprechen kein fertiges Ergebnis am selben Tag."
 ]
});

everydayDialogues.push(...([
  {
    "id": "nach-dem-basteln",
    "level": "A1",
    "title": [
      "Zusammen aufräumen",
      "نروق سوا"
    ],
    "lines": [
      [
        "Lea",
        "Wir sind fertig. Aber auf dem Boden liegt viel Papier.",
        "إحنا خلصنا، بس فيه ورق كتير على الأرض."
      ],
      [
        "Amir",
        "Ich hole den Handfeger und das Kehrblech.",
        "هجيب المقشة اليد والجاروف."
      ],
      [
        "Lea",
        "Gut. Ich räume zuerst die Schere in die Schublade.",
        "تمام. هحط المقص في الدرج الأول."
      ],
      [
        "Amir",
        "Kannst du dann das Kehrblech festhalten?",
        "ممكن بعدها تمسكي الجاروف ثابت؟"
      ],
      [
        "Lea",
        "Ja. Danach wische ich den Tisch ab.",
        "أيوه. بعدها همسح الترابيزة."
      ],
      [
        "Amir",
        "Der Schwamm liegt neben dem Waschbecken.",
        "الإسفنجة جنب الحوض."
      ],
      [
        "Lea",
        "Danke. Die Papierhäuser kommen zum Schluss auf das Regal.",
        "شكراً. بيوت الورق هتتحط على الرف في الآخر."
      ]
    ],
    "q": [
      [
        "Was holt Amir?",
        "Handfeger und Kehrblech.",
        "Zwei neue Scheren.",
        "Ein großes Buch."
      ],
      [
        "Wo liegt der Schwamm?",
        "Neben dem Waschbecken.",
        "Unter dem Regal.",
        "In Amirs Jacke."
      ],
      [
        "Was kommt auf das Regal?",
        "Die Papierhäuser.",
        "Das Kehrblech.",
        "Die nasse Schere."
      ]
    ]
  },
  {
    "id": "koffer-unterscheiden",
    "level": "A2",
    "title": [
      "Welcher Koffer ist deiner?",
      "أنهي شنطة بتاعتك؟"
    ],
    "lines": [
      [
        "Emil",
        "Unsere Koffer sehen fast gleich aus. Wie unterscheiden wir sie?",
        "شنطنا شبه بعض تقريباً. هنفرق بينهم إزاي؟"
      ],
      [
        "Noura",
        "Ich habe zwei Anhänger. Deiner hat einen grünen Stern.",
        "عندي بطاقتين. بتاعتك عليها نجمة خضرا."
      ],
      [
        "Emil",
        "Gut. Meiner ist jetzt aber sehr schwer. Ich habe ein großes Buch eingepackt.",
        "تمام. بس شنطتي بقت تقيلة قوي. حطيت كتاب كبير."
      ],
      [
        "Noura",
        "Wir können ihn mit meiner Gepäckwaage wiegen.",
        "نقدر نوزنها بميزان الشنط بتاعي."
      ],
      [
        "Emil",
        "Lieber nehme ich nur das dünne Heft mit. Das Buch bleibt hier.",
        "أفضل آخد الكراسة الرفيعة بس. الكتاب يفضل هنا."
      ],
      [
        "Noura",
        "Und wo ist der Schlüssel für dein Vorhängeschloss?",
        "وفين مفتاح القفل بتاعك؟"
      ],
      [
        "Emil",
        "In meiner Jackentasche. Dort kann ich ihn gleich finden.",
        "في جيب الجاكيت. أقدر ألاقيه بسرعة هناك."
      ]
    ],
    "q": [
      [
        "Welches Zeichen hat Emils Anhänger?",
        "Einen grünen Stern.",
        "Einen blauen Kreis.",
        "Eine gelbe Sonne."
      ],
      [
        "Was möchte Emil statt des Buches mitnehmen?",
        "Das dünne Heft.",
        "Eine zweite Waage.",
        "Eine große Decke."
      ],
      [
        "Wo ist der Schlüssel?",
        "In Emils Jackentasche.",
        "In Nouras Koffer.",
        "Auf dem Bahnhofsboden."
      ]
    ]
  },
  {
    "id": "packliste-aufteilen",
    "level": "B1",
    "title": [
      "Wer bringt die Becher mit?",
      "مين هيجيب الكوبايات؟"
    ],
    "lines": [
      [
        "Farid",
        "Vier Personen bieten eine Decke an, aber niemand hat Becher eingetragen.",
        "4 أشخاص عارضين يجيبوا بطاطين، بس محدش كاتب كوبايات."
      ],
      [
        "Marta",
        "Dann sollten wir den Bedarf und die Namen getrennt aufschreiben.",
        "يبقى نكتب المطلوب والأسماء كل واحد لوحده."
      ],
      [
        "Farid",
        "Genau. Für jeden Gegenstand brauchen wir eine verantwortliche Person.",
        "بالظبط. محتاجين شخص مسؤول عن كل حاجة."
      ],
      [
        "Marta",
        "Die schwere Kanne möchte ich nicht im Bus tragen. Ich bringe lieber die Becher mit.",
        "مش عايزة أشيل الترمس التقيل في الأوتوبيس. أفضل أجيب الكوبايات."
      ],
      [
        "Farid",
        "Gut. Zwei Leute aus der Nähe übernehmen den Tee. Kannst du auch Obst vorbereiten?",
        "تمام. اتنين ساكنين قريب هيتولوا الشاي. تقدري تجهزي فاكهة كمان؟"
      ],
      [
        "Marta",
        "Ja, das schneide ich zu Hause. Wann prüfen wir die Liste noch einmal?",
        "أيوه، هقطعها في البيت. هنراجع القايمة تاني إمتى؟"
      ],
      [
        "Farid",
        "Am Abend vor dem Ausflug. Dann können wir fehlende Dinge noch neu verteilen.",
        "بالليل قبل الخروجة. ساعتها نقدر نوزع أي حاجات ناقصة من جديد."
      ]
    ],
    "q": [
      [
        "Was fehlt in den ersten Einträgen?",
        "Becher.",
        "Deckenangebote.",
        "Namen für vier neue Gruppen."
      ],
      [
        "Warum möchte Marta die Kanne nicht übernehmen?",
        "Sie möchte sie nicht im Bus tragen.",
        "Sie kennt den Treffpunkt nicht.",
        "Sie kommt erst nach dem Ausflug."
      ],
      [
        "Wann wird die Liste noch einmal geprüft?",
        "Am Abend vor dem Ausflug.",
        "Erst am See.",
        "Eine Woche nach dem Ausflug."
      ]
    ]
  }
] satisfies Dialogue[]));
Object.assign(dialogueEvidence,{
  "nach-dem-basteln": [
    "Ich hole den Handfeger und das Kehrblech.",
    "Der Schwamm liegt neben dem Waschbecken.",
    "Danke. Die Papierhäuser kommen zum Schluss auf das Regal."
  ],
  "koffer-unterscheiden": [
    "Ich habe zwei Anhänger. Deiner hat einen grünen Stern.",
    "Lieber nehme ich nur das dünne Heft mit. Das Buch bleibt hier.",
    "In meiner Jackentasche. Dort kann ich ihn gleich finden."
  ],
  "packliste-aufteilen": [
    "Vier Personen bieten eine Decke an, aber niemand hat Becher eingetragen.",
    "Die schwere Kanne möchte ich nicht im Bus tragen. Ich bringe lieber die Becher mit.",
    "Am Abend vor dem Ausflug. Dann können wir fehlende Dinge noch neu verteilen."
  ]
});

everydayDialogues.push(...([
  {
    "id": "pause-einpacken",
    "level": "A1",
    "title": [
      "Was kommt in den Rucksack?",
      "إيه يدخل شنطة الضهر؟"
    ],
    "lines": [
      [
        "Lina",
        "Ich mache heute einen langen Spaziergang.",
        "هتمشى مشوار طويل النهارده."
      ],
      [
        "Ben",
        "Nimmst du etwas zu essen mit?",
        "هتاخدي حاجة تاكليها؟"
      ],
      [
        "Lina",
        "Ja, zwei Brote und einen Apfel in meiner Brotdose.",
        "أيوه، ساندوتشين وتفاحة في علبة الأكل."
      ],
      [
        "Ben",
        "Deine Trinkflasche steht noch auf dem Tisch.",
        "زجاجة الشرب لسه على الترابيزة."
      ],
      [
        "Lina",
        "Danke. Ich fülle sie mit Wasser.",
        "شكراً. هملاها مية."
      ],
      [
        "Ben",
        "Wo machst du eine Pause?",
        "هتاخدي استراحة فين؟"
      ],
      [
        "Lina",
        "Auf einer Bank im Park. Den Apfel esse ich später.",
        "على دكة في الجنينة. التفاحة هاكلها بعدين."
      ]
    ],
    "q": [
      [
        "Was nimmt Lina zu essen mit?",
        "Zwei Brote und einen Apfel.",
        "Nur eine Suppe.",
        "Vier leere Becher."
      ],
      [
        "Wo steht die Flasche zuerst?",
        "Auf dem Tisch.",
        "Im Park.",
        "Unter der Bank."
      ],
      [
        "Wann möchte Lina den Apfel essen?",
        "Später.",
        "Vor dem Einpacken.",
        "Gar nicht."
      ]
    ]
  },
  {
    "id": "seiten-befestigen",
    "level": "A2",
    "title": [
      "Heften oder klammern?",
      "ندبس ولا نحط مشبك؟"
    ],
    "lines": [
      [
        "Sami",
        "Gestern hat die zweite Seite gefehlt. Heute habe ich alle drei.",
        "إمبارح الصفحة التانية كانت ناقصة. النهارده التلاتة معايا."
      ],
      [
        "Eva",
        "Willst du sie mit dem Heftgerät zusammenheften?",
        "عايز تدبسهم بالدباسة؟"
      ],
      [
        "Sami",
        "Ich möchte sie später einzeln in meinen Ordner legen.",
        "عايز أحطهم في الكلاسير كل واحدة لوحدها بعدين."
      ],
      [
        "Eva",
        "Dann nimm lieber eine Büroklammer. Die kannst du leicht wieder entfernen.",
        "يبقى خد مشبك ورق أحسن. تقدر تشيله بسهولة تاني."
      ],
      [
        "Sami",
        "Gute Idee. Das Heftgerät kommt zurück in die Schublade.",
        "فكرة كويسة. الدباسة ترجع الدرج."
      ],
      [
        "Eva",
        "Und wofür brauchst du das Klebeband?",
        "ومحتاج الشريط اللاصق لإيه؟"
      ],
      [
        "Sami",
        "Für diesen gerissenen Umschlag, nicht für die Seiten.",
        "للظرف المقطوع ده، مش للصفحات."
      ]
    ],
    "q": [
      [
        "Warum möchte Sami die Seiten später trennen können?",
        "Er möchte sie einzeln einordnen.",
        "Er möchte sie verbrennen.",
        "Er braucht nur die erste Zeile."
      ],
      [
        "Was empfiehlt Eva?",
        "Eine Büroklammer.",
        "Einen neuen Rucksack.",
        "Zwei Heftgeräte."
      ],
      [
        "Wofür ist das Klebeband?",
        "Für einen gerissenen Umschlag.",
        "Für die Trinkflasche.",
        "Für Evas Schuhe."
      ]
    ]
  },
  {
    "id": "becher-hinweis",
    "level": "B1",
    "title": [
      "Eine Bitte ist keine Bedingung",
      "الطلب مش شرط"
    ],
    "lines": [
      [
        "Nora",
        "Der Satz mit dem eigenen Becher klingt für manche wie eine Teilnahmebedingung.",
        "الجملة عن الكوباية الشخصية ناس فاهماها كأنها شرط للحضور."
      ],
      [
        "Tom",
        "Das wollten wir nicht. Ohne Becher darf man natürlich trotzdem kommen.",
        "إحنا مش قصدنا كده. طبعاً ينفع الناس تيجي من غير كوباية."
      ],
      [
        "Nora",
        "Dann erklären wir, dass wir einige Mehrwegbecher bereithalten. Die genaue Zahl ist noch offen.",
        "يبقى نوضح إننا هنجهز شوية كوبايات تتستخدم تاني. العدد بالظبط لسه مش معروف."
      ],
      [
        "Tom",
        "Ich prüfe den Bestand vor dem Versand der Einladung.",
        "هراجع الموجود قبل ما الدعوة تتبعت."
      ],
      [
        "Nora",
        "Gut. Welche Getränke können wir schon nennen?",
        "تمام. نقدر نذكر أنهي مشروبات دلوقتي؟"
      ],
      [
        "Tom",
        "Tee und Wasser. Die zusätzliche Sorte ist noch nicht bestätigt.",
        "الشاي والمية. النوع الإضافي لسه مش مؤكد."
      ],
      [
        "Nora",
        "Dann bleiben wir bei diesen beiden. Jemand ohne Vorwissen liest den Text noch einmal.",
        "يبقى نكتفي بالاتنين دول. حد من غير معلومات سابقة يقرا النص تاني."
      ]
    ],
    "q": [
      [
        "Was soll kein Teilnahmehindernis sein?",
        "Keinen eigenen Becher dabeizuhaben.",
        "Den Text gelesen zu haben.",
        "Wasser trinken zu wollen."
      ],
      [
        "Was übernimmt Tom vor dem Versand?",
        "Den Bestand prüfen.",
        "Neue Regeln erfinden.",
        "Alle Einladungen vernichten."
      ],
      [
        "Was ist noch nicht bestätigt?",
        "Eine zusätzliche Getränkesorte.",
        "Dass Tee genannt werden darf.",
        "Dass die Einladung einen Text hat."
      ]
    ]
  }
] satisfies Dialogue[]));
Object.assign(dialogueEvidence,{
  "pause-einpacken": [
    "Ja, zwei Brote und einen Apfel in meiner Brotdose.",
    "Deine Trinkflasche steht noch auf dem Tisch.",
    "Auf einer Bank im Park. Den Apfel esse ich später."
  ],
  "seiten-befestigen": [
    "Ich möchte sie später einzeln in meinen Ordner legen.",
    "Dann nimm lieber eine Büroklammer. Die kannst du leicht wieder entfernen.",
    "Für diesen gerissenen Umschlag, nicht für die Seiten."
  ],
  "becher-hinweis": [
    "Das wollten wir nicht. Ohne Becher darf man natürlich trotzdem kommen.",
    "Ich prüfe den Bestand vor dem Versand der Einladung.",
    "Tee und Wasser. Die zusätzliche Sorte ist noch nicht bestätigt."
  ]
});

everydayDialogues.push(...([
  {
    "id": "sterne-ausstechen",
    "level": "A1",
    "title": [
      "Welche Form brauchen wir?",
      "محتاجين أنهي قالب؟"
    ],
    "lines": [
      [
        "Mila",
        "Wo ist die kleine Ausstechform?",
        "فين قطّاعة العجين الصغيرة؟"
      ],
      [
        "Ben",
        "Auf dem Tisch. Sie hat die Form eines Sterns.",
        "على الترابيزة. شكلها نجمة."
      ],
      [
        "Mila",
        "Gut. Ich steche die Sterne aus. Legst du sie auf das Blech?",
        "تمام. هقطع النجوم. تحطها إنت على الصينية؟"
      ],
      [
        "Ben",
        "Ja. Brauchen wir auch die runde Backform?",
        "أيوه. محتاجين كمان قالب الفرن المدوّر؟"
      ],
      [
        "Mila",
        "Nein, sie bleibt heute im Schrank.",
        "لأ، يفضل النهارده في الدولاب."
      ],
      [
        "Ben",
        "Unsere Freundin kommt am Nachmittag.",
        "صاحبتنا جاية بعد الضهر."
      ],
      [
        "Mila",
        "Dann legen wir drei fertige Sterne für sie auf einen Teller.",
        "يبقى نحط لها 3 نجوم مستويين في طبق."
      ]
    ],
    "q": [
      [
        "Wo liegt die Ausstechform?",
        "Auf dem Tisch.",
        "Im Bus.",
        "Unter dem Bett."
      ],
      [
        "Welche Form brauchen sie heute nicht?",
        "Die runde Backform.",
        "Die Sternform.",
        "Beide Formen."
      ],
      [
        "Für wen sind die drei fertigen Sterne?",
        "Für ihre Freundin.",
        "Für einen Verkäufer.",
        "Für die Nachbarin im Urlaub."
      ]
    ]
  },
  {
    "id": "schale-zurueck",
    "level": "A2",
    "title": [
      "Mitgenommen oder geschenkt?",
      "اتاخدت ولا هدية؟"
    ],
    "lines": [
      [
        "Dalia",
        "Ich habe deine kleine Seifenschale in meiner Tasche gefunden. War sie für mich?",
        "لقيت طبق الصابون الصغير بتاعك في شنطتي. هو كان ليا؟"
      ],
      [
        "Sara",
        "Nein, die Schale brauche ich noch für das Gästebad.",
        "لأ، لسه محتاجة الطبق لحمام الضيوف."
      ],
      [
        "Dalia",
        "Dann bringe ich sie beim nächsten Besuch zurück.",
        "يبقى أرجعه في الزيارة الجاية."
      ],
      [
        "Sara",
        "Den leeren Seifenspender kannst du behalten. Den hatte ich für dich zur Seite gestellt.",
        "موزّع الصابون الفاضي ينفع تحتفظي بيه. ده كنت حاطاه لك على جنب."
      ],
      [
        "Dalia",
        "Danke. Ich schreibe mir den Unterschied auf.",
        "شكراً. هكتب الفرق عشان أفتكره."
      ],
      [
        "Sara",
        "Und die Nagelschere?",
        "ومقص الضوافر؟"
      ],
      [
        "Dalia",
        "Die gehört mir. Sie kommt in mein Etui, die Schale getrennt in eine Schachtel.",
        "ده بتاعي أنا. هحطه في الجراب، والطبق لوحده في علبة."
      ]
    ],
    "q": [
      [
        "Warum braucht Sara die Schale zurück?",
        "Sie braucht sie für das Gästebad.",
        "Sie möchte sie sofort wegwerfen.",
        "Sie braucht sie zum Backen."
      ],
      [
        "Welchen Gegenstand darf Dalia behalten?",
        "Den leeren Seifenspender.",
        "Die Seifenschale.",
        "Saras ganze Tasche."
      ],
      [
        "Wem gehört die Nagelschere?",
        "Dalia.",
        "Einem unbekannten Gast.",
        "Einer Lehrerin."
      ]
    ]
  },
  {
    "id": "form-weiterleihen",
    "level": "B1",
    "title": [
      "Erst fragen, dann zusagen",
      "نسأل الأول وبعدين نوعد"
    ],
    "lines": [
      [
        "Paul",
        "Darf ich eine der geliehenen Backformen bis Dienstag mitnehmen?",
        "ينفع آخد قالب من المستعارين لحد التلات؟"
      ],
      [
        "Jonas",
        "Ich soll beide am Sonntagabend zurückbringen. Ich kann das nicht allein ändern.",
        "المفروض أرجع الاتنين الأحد بالليل. مايصحش أغير ده لوحدي."
      ],
      [
        "Paul",
        "Kannst du deine Nachbarin fragen?",
        "تقدر تسأل جارتك؟"
      ],
      [
        "Jonas",
        "Ja. Bis sie antwortet, bleibt der bisherige Termin bestehen.",
        "أيوه. لحد ما ترد، الميعاد القديم زي ما هو."
      ],
      [
        "Paul",
        "Und wenn sie nicht antwortet?",
        "ولو مردتش؟"
      ],
      [
        "Jonas",
        "Dann ist das keine Zustimmung. Wir suchen vorsichtshalber auch nach einer eigenen Form.",
        "ده مش معناه موافقة. ندور احتياطي كمان على قالب بتاعنا."
      ],
      [
        "Paul",
        "Gut. Falls sie zustimmt, klären wir auch, wer die Form zurückbringt.",
        "تمام. لو وافقت، نحدد كمان مين هيرجع القالب."
      ]
    ],
    "q": [
      [
        "Wann sollen die Formen ursprünglich zurück?",
        "Am Sonntagabend.",
        "Erst im nächsten Monat.",
        "Am Mittwochmorgen."
      ],
      [
        "Was bedeutet eine ausbleibende Antwort für Jonas?",
        "Keine Zustimmung zur Änderung.",
        "Eine automatische Verlängerung.",
        "Ein Geschenk."
      ],
      [
        "Was wollen sie bei einer Zustimmung zusätzlich klären?",
        "Wer die Form zurückbringt.",
        "Wie man alle Termine löscht.",
        "Wer die Nachbarin ersetzt."
      ]
    ]
  }
] satisfies Dialogue[]));
Object.assign(dialogueEvidence,{
  "sterne-ausstechen": [
    "Auf dem Tisch. Sie hat die Form eines Sterns.",
    "Nein, sie bleibt heute im Schrank.",
    "Dann legen wir drei fertige Sterne für sie auf einen Teller."
  ],
  "schale-zurueck": [
    "Nein, die Schale brauche ich noch für das Gästebad.",
    "Den leeren Seifenspender kannst du behalten. Den hatte ich für dich zur Seite gestellt.",
    "Die gehört mir. Sie kommt in mein Etui, die Schale getrennt in eine Schachtel."
  ],
  "form-weiterleihen": [
    "Ich soll beide am Sonntagabend zurückbringen. Ich kann das nicht allein ändern.",
    "Dann ist das keine Zustimmung. Wir suchen vorsichtshalber auch nach einer eigenen Form.",
    "Gut. Falls sie zustimmt, klären wir auch, wer die Form zurückbringt."
  ]
});

everydayDialogues.push(...([
  {
    "id": "buch-einpacken",
    "level": "A1",
    "title": [
      "Passt das Buch hinein?",
      "الكتاب يدخل فيه؟"
    ],
    "lines": [
      [
        "Nils",
        "Heute hat Lea Geburtstag. Ich habe ein Buch für sie.",
        "النهارده عيد ميلاد ليا. جبت لها كتاب."
      ],
      [
        "Mara",
        "Hier ist eine kleine Geschenktüte. Passt das Buch hinein?",
        "أهو كيس هدايا صغير. الكتاب يدخل فيه؟"
      ],
      [
        "Nils",
        "Nein, das Buch ist zu groß. Ich nehme Geschenkpapier.",
        "لأ، الكتاب كبير عليه. هاخد ورق هدايا."
      ],
      [
        "Mara",
        "Und welches Band möchtest du?",
        "وعايز أنهي شريطة؟"
      ],
      [
        "Nils",
        "Das rote. Die Karte kommt unter das Band.",
        "الحمرا. الكارت يتحط تحت الشريطة."
      ],
      [
        "Mara",
        "Nimmst du das Geschenk heute mit?",
        "هتاخد الهدية معاك النهارده؟"
      ],
      [
        "Nils",
        "Ja, am Abend. Die kleine Tüte bleibt hier.",
        "أيوه، بالليل. الكيس الصغير يفضل هنا."
      ]
    ],
    "q": [
      [
        "Was möchte Nils verschenken?",
        "Ein Buch.",
        "Ein Paar Schuhe.",
        "Eine leere Kiste."
      ],
      [
        "Warum nimmt er Geschenkpapier statt der Tüte?",
        "Das Buch ist zu groß für die Tüte.",
        "Die Tüte ist nass.",
        "Er hat keine Karte."
      ],
      [
        "Welche Farbe hat das ausgewählte Band?",
        "Rot.",
        "Grün.",
        "Schwarz."
      ]
    ]
  },
  {
    "id": "schuhloeffel-haken",
    "level": "A2",
    "title": [
      "Nicht mehr hinter dem Stiefel",
      "مش ورا البوت تاني"
    ],
    "lines": [
      [
        "Karim",
        "Hast du meinen Schuhlöffel gesehen?",
        "شفتي ملعقة الجزم بتاعتي؟"
      ],
      [
        "Amira",
        "Ja. Er lag hinter einem Stiefel. Jetzt hängt er neben der Tür.",
        "أيوه. كان ورا بوت. دلوقتي متعلق جنب الباب."
      ],
      [
        "Karim",
        "Das ist praktischer. Wo stehen meine Alltagsschuhe?",
        "كده عملي أكتر. جزمتي اليومية فين؟"
      ],
      [
        "Amira",
        "Im unteren Fach, immer die passenden Schuhe nebeneinander.",
        "في الخانة اللي تحت، كل فردة جنب فردتها."
      ],
      [
        "Karim",
        "Und die Bürste auf dem Boden?",
        "والفرشة اللي على الأرض؟"
      ],
      [
        "Amira",
        "Die habe ich gerade benutzt. Ich lege sie gleich in die kleine Kiste.",
        "لسه مستخدماها حالاً. هحطها دلوقتي في الصندوق الصغير."
      ],
      [
        "Karim",
        "Gut. Dann bleibt der Boden vor dem Regal frei.",
        "تمام. كده الأرض قدام الرف تفضل فاضية."
      ]
    ],
    "q": [
      [
        "Wo war der Schuhlöffel vorher?",
        "Hinter einem Stiefel.",
        "Im Briefkasten.",
        "In der Küche."
      ],
      [
        "Wo stehen die Alltagsschuhe jetzt?",
        "Im unteren Fach.",
        "Vor der Haustür auf der Straße.",
        "Auf dem Fensterbrett."
      ],
      [
        "Wohin möchte Amira die Bürste legen?",
        "In die kleine Kiste.",
        "Unter den Teppich.",
        "In Karims Tasche."
      ]
    ]
  },
  {
    "id": "papierreste-sortieren",
    "level": "B1",
    "title": [
      "Ordnen, aber nicht den ganzen Tag",
      "نرتب، بس مش اليوم كله"
    ],
    "lines": [
      [
        "Deniz",
        "Ich finde kein langes Band zwischen all diesen Resten.",
        "مش لاقي شريطة طويلة وسط البواقي دي كلها."
      ],
      [
        "Aylin",
        "Wir könnten lange und kurze Bänder trennen.",
        "ممكن نفصل الشرايط الطويلة عن القصيرة."
      ],
      [
        "Deniz",
        "Einverstanden, aber wir müssen heute noch drei Geschenke einpacken.",
        "موافق، بس لسه لازم نلف 3 هدايا النهارده."
      ],
      [
        "Aylin",
        "Dann reicht eine einfache Ordnung: lange Bänder in die Schachtel, kurze in den Umschlag.",
        "يبقى ترتيب بسيط يكفي: الطويل في العلبة، والقصير في الظرف."
      ],
      [
        "Deniz",
        "Dieses gemusterte Papier sieht schön aus, reicht aber nicht um das dritte Geschenk.",
        "الورق المنقوش ده شكله حلو، بس مش بيكفي يلف الهدية التالتة."
      ],
      [
        "Aylin",
        "Nimm das größere, schlichte Stück. Das Muster ist nicht das einzige Kriterium.",
        "خد الحتة الأكبر السادة. الرسمة مش المعيار الوحيد."
      ],
      [
        "Deniz",
        "Ich lege einen Zettel mit unserer Ordnung dazu. Nächstes Mal schaue ich zuerst in die Kiste.",
        "هحط ورقة فيها نظام ترتيبنا. المرة الجاية هبص في الصندوق الأول."
      ]
    ],
    "q": [
      [
        "Worauf einigen sich Deniz und Aylin?",
        "Auf eine einfache Trennung langer und kurzer Bänder.",
        "Darauf, jedes Band zu verkaufen.",
        "Darauf, heute keine Geschenke einzupacken."
      ],
      [
        "Was ist mit dem gemusterten Papier?",
        "Es ist für das dritte Geschenk zu klein.",
        "Es liegt noch im Laden.",
        "Es ist schon um alle Geschenke gewickelt."
      ],
      [
        "Wozu legt Deniz einen Zettel dazu?",
        "Um die neue Ordnung festzuhalten.",
        "Um die Feier abzusagen.",
        "Um alle Preise zu vergleichen."
      ]
    ]
  }
] satisfies Dialogue[]));
Object.assign(dialogueEvidence,{
  "buch-einpacken": [
    "Heute hat Lea Geburtstag. Ich habe ein Buch für sie.",
    "Nein, das Buch ist zu groß. Ich nehme Geschenkpapier.",
    "Das rote. Die Karte kommt unter das Band."
  ],
  "schuhloeffel-haken": [
    "Ja. Er lag hinter einem Stiefel. Jetzt hängt er neben der Tür.",
    "Im unteren Fach, immer die passenden Schuhe nebeneinander.",
    "Die habe ich gerade benutzt. Ich lege sie gleich in die kleine Kiste."
  ],
  "papierreste-sortieren": [
    "Dann reicht eine einfache Ordnung: lange Bänder in die Schachtel, kurze in den Umschlag.",
    "Dieses gemusterte Papier sieht schön aus, reicht aber nicht um das dritte Geschenk.",
    "Ich lege einen Zettel mit unserer Ordnung dazu. Nächstes Mal schaue ich zuerst in die Kiste."
  ]
});

everydayDialogues.push(...([
  {
    "id": "vier-plaetze-decken",
    "level": "A1",
    "title": [
      "Noch ein Glas fehlt",
      "لسه كوباية ناقصة"
    ],
    "lines": [
      [
        "Tom",
        "Ich habe vier Teller auf den Tisch gestellt.",
        "حطيت 4 أطباق على الترابيزة."
      ],
      [
        "Lena",
        "Gut. Hier sind vier gelbe Servietten.",
        "تمام. أهي 4 مناديل سفرة صفرا."
      ],
      [
        "Tom",
        "Für die Gläser nehme ich die Untersetzer. Ein Glas fehlt noch.",
        "هاخد القواعد للكوبايات. لسه كوباية ناقصة."
      ],
      [
        "Lena",
        "Ich hole es aus der Küche. Wohin kommt das Tablett?",
        "هجيبها من المطبخ. الصينية تروح فين؟"
      ],
      [
        "Tom",
        "Auf den Stuhl neben dem Tisch. Dann haben wir Platz für das Essen.",
        "على الكرسي جنب الترابيزة. كده يبقى عندنا مكان للأكل."
      ],
      [
        "Lena",
        "Und wann kommen unsere Freunde?",
        "وأصحابنا جايين إمتى؟"
      ],
      [
        "Tom",
        "Um sechs Uhr. Bis dahin ist alles fertig.",
        "الساعة 6. لحد ساعتها كل حاجة تبقى جاهزة."
      ]
    ],
    "q": [
      [
        "Welche Farbe haben die Servietten?",
        "Gelb.",
        "Lila.",
        "Schwarz."
      ],
      [
        "Was holt Lena aus der Küche?",
        "Das fehlende Glas.",
        "Alle vier Teller.",
        "Einen Schuhspanner."
      ],
      [
        "Warum kommt das Tablett auf den Stuhl?",
        "Damit auf dem Tisch Platz für das Essen ist.",
        "Damit niemand sitzen darf.",
        "Damit die Freunde später kommen."
      ]
    ]
  },
  {
    "id": "oeffner-fester-platz",
    "level": "A2",
    "title": [
      "Jetzt liegt er in der Schale",
      "دلوقتي في الطبق الصغير"
    ],
    "lines": [
      [
        "Yusuf",
        "Suchst du auch den Flaschenöffner?",
        "إنتي كمان بتدوري على فتّاحة الإزازات؟"
      ],
      [
        "Farah",
        "Nein, ich habe ihn in diese kleine Schale gelegt.",
        "لأ، حطيتها في الطبق الصغير ده."
      ],
      [
        "Yusuf",
        "Endlich ein fester Platz. Und wohin gehört der Trichter?",
        "أخيراً مكان ثابت. والقمع مكانه فين؟"
      ],
      [
        "Farah",
        "In die Küchenschublade. Ich lege ihn gleich zurück.",
        "في درج المطبخ. هرجعه دلوقتي."
      ],
      [
        "Yusuf",
        "Was hast du mit den beiden leeren Flaschen gemacht?",
        "عملتي إيه بالإزازتين الفاضيين؟"
      ],
      [
        "Farah",
        "Eine steht beim Altglas. Die andere möchte ich später als Vase benutzen.",
        "واحدة مع الإزاز القديم. التانية عايزة أستخدمها فازة بعدين."
      ],
      [
        "Yusuf",
        "Dann lasse ich die Flasche neben den Blumen stehen.",
        "يبقى أسيب الإزازة اللي جنب الورد مكانها."
      ]
    ],
    "q": [
      [
        "Wo liegt der Flaschenöffner jetzt?",
        "In einer kleinen Schale.",
        "Im Altglas.",
        "Unter dem Tablett."
      ],
      [
        "Wohin gehört der Trichter?",
        "In die Küchenschublade.",
        "In die Blumenvase.",
        "Auf den Schuhschrank."
      ],
      [
        "Welche Flasche soll Yusuf stehen lassen?",
        "Die neben den Blumen.",
        "Eine neue volle Saftflasche.",
        "Alle Flaschen im Altglas."
      ]
    ]
  },
  {
    "id": "getraenke-andere-wand",
    "level": "B1",
    "title": [
      "Erst ausprobieren, dann beurteilen",
      "نجرب الأول وبعدين نحكم"
    ],
    "lines": [
      [
        "Omar",
        "Am Getränketisch wird der Weg zur Tür zu schmal.",
        "عند ترابيزة المشروبات السكة للباب بتضيق قوي."
      ],
      [
        "Mina",
        "Die Getränke könnten auf das Regal an der anderen Wand. Dort liegen aber noch die Anleitungen.",
        "ممكن المشروبات تتحط على الرف عند الحيطة التانية. بس التعليمات لسه هناك."
      ],
      [
        "Omar",
        "Die passen in eine flache Kiste unter dem Spieltisch.",
        "دي تنفع في صندوق مسطح تحت ترابيزة اللعب."
      ],
      [
        "Mina",
        "Für alle Becher ist auf dem Regal kein Platz.",
        "مش فيه مكان على الرف لكل الكوبايات."
      ],
      [
        "Omar",
        "Wir stellen einen Teil bereit. Ich fülle bei Bedarf aus der Küche nach.",
        "نحط جزء. وأنا أزوّد من المطبخ لما نحتاج."
      ],
      [
        "Mina",
        "Dann testen wir den Weg noch einmal, während jemand am Regal steht.",
        "يبقى نجرب السكة تاني وحد واقف عند الرف."
      ],
      [
        "Omar",
        "Genau. Was heute passt, ist nicht automatisch für jedes Zimmer ideal.",
        "بالظبط. اللي يناسب النهارده مش تلقائي مثالي لكل أوضة."
      ]
    ],
    "q": [
      [
        "Warum sollen die Getränke einen anderen Platz bekommen?",
        "Der bisherige Platz verengt den Weg zur Tür.",
        "Alle Getränke sind zu warm.",
        "Die Anleitungen sind verschwunden."
      ],
      [
        "Wer bietet an, bei Bedarf nachzufüllen?",
        "Omar.",
        "Alle Gäste gleichzeitig.",
        "Eine Person aus einem anderen Haus."
      ],
      [
        "Was wollen sie noch einmal testen?",
        "Den Weg, während jemand am Regal steht.",
        "Die Farbe aller Becher.",
        "Die Länge jeder Spielanleitung."
      ]
    ]
  }
] satisfies Dialogue[]));
Object.assign(dialogueEvidence,{
  "vier-plaetze-decken": [
    "Gut. Hier sind vier gelbe Servietten.",
    "Ich hole es aus der Küche. Wohin kommt das Tablett?",
    "Auf den Stuhl neben dem Tisch. Dann haben wir Platz für das Essen."
  ],
  "oeffner-fester-platz": [
    "Nein, ich habe ihn in diese kleine Schale gelegt.",
    "In die Küchenschublade. Ich lege ihn gleich zurück.",
    "Dann lasse ich die Flasche neben den Blumen stehen."
  ],
  "getraenke-andere-wand": [
    "Am Getränketisch wird der Weg zur Tür zu schmal.",
    "Wir stellen einen Teil bereit. Ich fülle bei Bedarf aus der Küche nach.",
    "Dann testen wir den Weg noch einmal, während jemand am Regal steht."
  ]
});

everydayDialogues.push(...([
  {
    "id": "buch-morgen-abend",
    "level": "A1",
    "title": [
      "Du bekommst es morgen Abend",
      "هتاخده بكرة بالليل"
    ],
    "lines": [
      [
        "Nora",
        "Ich lege das rote Lesezeichen ins Buch.",
        "بحط علامة الكتاب الحمرا جوه الكتاب."
      ],
      [
        "Sami",
        "Kann ich das Buch morgen lesen?",
        "ممكن أقرا الكتاب بكرة؟"
      ],
      [
        "Nora",
        "Ja, aber erst am Abend. Am Nachmittag brauche ich es noch.",
        "آه، بس بالليل. بعد الضهر لسه محتاجاه."
      ],
      [
        "Sami",
        "Dann nehme ich heute ein anderes Buch.",
        "يبقى آخد النهارده كتاب تاني."
      ],
      [
        "Nora",
        "Im Regal steht ein Buch über Züge.",
        "في الرف كتاب عن القطارات."
      ],
      [
        "Sami",
        "Das nehme ich. Wo ist deine Brille?",
        "هاخد ده. نضارتك فين؟"
      ],
      [
        "Nora",
        "Im Etui auf dem Tisch.",
        "في الجراب على الترابيزة."
      ]
    ],
    "q": [
      [
        "Welche Farbe hat das Lesezeichen?",
        "Rot.",
        "Weiß.",
        "Grün."
      ],
      [
        "Wann kann Sami Noras Buch bekommen?",
        "Morgen am Abend.",
        "Heute sofort.",
        "Morgen am Nachmittag."
      ],
      [
        "Welches Buch nimmt Sami heute?",
        "Ein Buch über Züge.",
        "Ein Buch über Pflanzen.",
        "Noras angefangenes Buch."
      ]
    ]
  },
  {
    "id": "lupe-schublade",
    "level": "A2",
    "title": [
      "Erst fragen, dann umräumen",
      "نسأل الأول وبعدين ننقل"
    ],
    "lines": [
      [
        "Yusuf",
        "Ich habe die großen Bücher auf das untere Regalbrett gestellt.",
        "حطيت الكتب الكبيرة على الرف السفلي."
      ],
      [
        "Mutter",
        "Und wo sind die kleinen Hefte?",
        "والكراسات الصغيرة فين؟"
      ],
      [
        "Yusuf",
        "In der offenen Schachtel. Für die anderen Bücher nehme ich zwei Buchstützen.",
        "في العلبة المفتوحة. هستخدم سنادتين لباقي الكتب."
      ],
      [
        "Mutter",
        "Gut. Hast du auch meine Lupe gefunden?",
        "تمام. لقيت كمان العدسة المكبرة بتاعتي؟"
      ],
      [
        "Yusuf",
        "Ja. Kann ich sie in deine Schreibtischschublade legen?",
        "آه. ممكن أحطها في درج مكتبك؟"
      ],
      [
        "Mutter",
        "Ja, das passt. Lass die losen Blätter bitte liegen; daran arbeite ich noch.",
        "آه مناسب. سيب الورق السايب مكانه لو سمحت؛ لسه بشتغل عليه."
      ],
      [
        "Yusuf",
        "Dann bleibt auch der Briefbeschwerer darauf.",
        "يبقى ثقالة الورق كمان تفضل فوقه."
      ]
    ],
    "q": [
      [
        "Wo stehen die großen Bücher jetzt?",
        "Auf dem unteren Regalbrett.",
        "In der Schreibtischschublade.",
        "Unter dem Sofa."
      ],
      [
        "Was fragt Yusuf über die Lupe?",
        "Ob er sie in die Schreibtischschublade legen kann.",
        "Ob er sie verschenken darf.",
        "Ob sie im Bus liegt."
      ],
      [
        "Warum sollen die losen Blätter liegen bleiben?",
        "Die Mutter arbeitet noch daran.",
        "Yusuf hat sie schon entsorgt.",
        "Sie sind festgeklebt."
      ]
    ]
  },
  {
    "id": "leseecke-pausenzettel",
    "level": "B1",
    "title": [
      "Was bedeutet gleich zurück?",
      "راجع حالاً يعني إمتى؟"
    ],
    "lines": [
      [
        "Hana",
        "Die Lampe steht gut, aber dieser Pausenzettel hilft mir nicht.",
        "مكان اللمبة كويس، بس ورقة البريك دي مش بتساعدني."
      ],
      [
        "Karim",
        "Darauf steht gleich zurück. Fehlt dir eine ungefähre Zeit?",
        "مكتوب عليها راجع حالاً. ناقصك وقت تقريبي؟"
      ],
      [
        "Hana",
        "Ja. Ein Lesezeichen soll den Platz nicht den ganzen Tag reservieren.",
        "آه. علامة كتاب مش المفروض تحجز المكان طول اليوم."
      ],
      [
        "Karim",
        "Dann schreiben wir künftig eine ungefähre Rückkehrzeit dazu.",
        "يبقى نكتب بعد كده وقت رجوع تقريبي معاها."
      ],
      [
        "Hana",
        "Und Gespräche über Entwürfe kündigen wir weiter vorher an.",
        "ونفضل نبلغ قبل مناقشات المسودات."
      ],
      [
        "Karim",
        "Wenn möglich, setzen wir uns dafür an den großen Tisch.",
        "لو أمكن، نقعد عشانها على الترابيزة الكبيرة."
      ],
      [
        "Hana",
        "Am Ende der zwei Wochen prüfen wir, ob das für uns funktioniert.",
        "في آخر الأسبوعين نشوف إذا كان ده مناسب لينا."
      ]
    ],
    "q": [
      [
        "Was fehlt Hana auf dem Zettel?",
        "Eine ungefähre Rückkehrzeit.",
        "Der Preis der Lampe.",
        "Eine Liste aller Entwürfe."
      ],
      [
        "Wohin sollen Gespräche möglichst verlegt werden?",
        "An den großen Tisch.",
        "In den Hausflur ohne Ankündigung.",
        "Direkt neben jede lesende Person."
      ],
      [
        "Wann wollen sie ihre Abmachung erneut prüfen?",
        "Am Ende der zwei Wochen.",
        "Erst nach einem Jahr.",
        "Gar nicht mehr."
      ]
    ]
  }
] satisfies Dialogue[]));
Object.assign(dialogueEvidence,{
  "buch-morgen-abend": [
    "Ich lege das rote Lesezeichen ins Buch.",
    "Ja, aber erst am Abend. Am Nachmittag brauche ich es noch.",
    "Im Regal steht ein Buch über Züge."
  ],
  "lupe-schublade": [
    "Ich habe die großen Bücher auf das untere Regalbrett gestellt.",
    "Ja. Kann ich sie in deine Schreibtischschublade legen?",
    "Ja, das passt. Lass die losen Blätter bitte liegen; daran arbeite ich noch."
  ],
  "leseecke-pausenzettel": [
    "Darauf steht gleich zurück. Fehlt dir eine ungefähre Zeit?",
    "Wenn möglich, setzen wir uns dafür an den großen Tisch.",
    "Am Ende der zwei Wochen prüfen wir, ob das für uns funktioniert."
  ]
});

everydayDialogues.push(...[
  {
    "id": "haekeln-erster-schritt",
    "level": "A1",
    "title": [
      "Erst ein kleines Stück",
      "حتة صغيرة الأول"
    ],
    "lines": [
      [
        "Mila",
        "Kannst du mir morgen das Häkeln zeigen?",
        "ممكن توريني الكروشيه بكرة؟"
      ],
      [
        "Sara",
        "Ja, am Samstag. Hast du schon Wolle und eine Häkelnadel?",
        "آه، يوم السبت. عندك صوف وإبرة كروشيه؟"
      ],
      [
        "Mila",
        "Ja. Die Wolle ist gelb, der Griff an der Nadel grau.",
        "آه. الصوف أصفر ومقبض الإبرة رمادي."
      ],
      [
        "Sara",
        "Was möchtest du machen?",
        "عايزة تعملي إيه؟"
      ],
      [
        "Mila",
        "Zuerst nur ein kleines Stück, keine Tasche.",
        "في الأول حتة صغيرة بس، مش شنطة."
      ],
      [
        "Sara",
        "Gut. Leg die Sachen in den Korb, dann finden wir sie morgen.",
        "تمام. حطي الحاجات في الباسكت عشان نلاقيها بكرة."
      ],
      [
        "Mila",
        "Der Korb steht neben dem Sofa.",
        "الباسكت جنب الكنبة."
      ]
    ],
    "q": [
      [
        "Wann hilft Sara?",
        "Am Samstag.",
        "Am Freitag.",
        "Am Sonntag."
      ],
      [
        "Was ist grau?",
        "Der Griff an der Nadel.",
        "Die Wolle.",
        "Das Sofa."
      ],
      [
        "Was möchte Mila zuerst machen?",
        "Ein kleines Stück.",
        "Eine Tasche.",
        "Einen Mantel."
      ]
    ]
  },
  {
    "id": "kleinen-rahmen-leihen",
    "level": "A2",
    "title": [
      "Nur den kleinen Rahmen",
      "الطارة الصغيرة بس"
    ],
    "lines": [
      [
        "Nabil",
        "Kann ich einen deiner Stickrahmen ausleihen?",
        "ممكن أستلف طارة تطريز من عندك؟"
      ],
      [
        "Eva",
        "Den kleinen gern. Den großen brauche ich für meine Tischdecke.",
        "الصغيرة طبعاً. الكبيرة محتاجاها لمفرش الترابيزة."
      ],
      [
        "Nabil",
        "Danke. Ich bringe ihn am Montagabend zurück.",
        "شكراً. هرجعهالك يوم الاتنين بالليل."
      ],
      [
        "Eva",
        "Falls du länger brauchst, frag bitte vorher.",
        "لو محتاج وقت أطول، اسأل قبلها لو سمحت."
      ],
      [
        "Nabil",
        "Darf meine Schwester den Rahmen danach nehmen?",
        "ينفع أختي تاخد الطارة بعدي؟"
      ],
      [
        "Eva",
        "Sie soll mich selbst fragen. Ich weiß noch nicht, wann ich ihn wieder brauche.",
        "هي تسألني بنفسها. لسه مش عارفة هحتاجها تاني إمتى."
      ],
      [
        "Nabil",
        "Gut, ich sage ihr Bescheid.",
        "تمام، هبلغها."
      ]
    ],
    "q": [
      [
        "Welchen Rahmen verleiht Eva?",
        "Den kleinen.",
        "Den großen.",
        "Keinen."
      ],
      [
        "Wann will Nabil ihn zurückbringen?",
        "Am Montagabend.",
        "Am Montagmorgen.",
        "Am Sonntagabend."
      ],
      [
        "Was soll seine Schwester tun?",
        "Eva selbst fragen.",
        "Den Rahmen einfach mitnehmen.",
        "Nabil einen neuen Rahmen kaufen."
      ]
    ]
  },
  {
    "id": "handarbeit-ohne-frist",
    "level": "B1",
    "title": [
      "Ein Ziel ist keine Pflicht",
      "الهدف مش إلزام"
    ],
    "lines": [
      [
        "Leila",
        "Müssen wir wirklich bei jedem Treffen etwas Fertiges zeigen?",
        "لازم فعلاً نعرض حاجة كاملة في كل مقابلة؟"
      ],
      [
        "Tom",
        "Mich würde das motivieren. Aber ich möchte niemanden unter Druck setzen.",
        "ده هيشجعني. بس مش عايز أضغط على حد."
      ],
      [
        "Leila",
        "Dann lass uns persönliche Ziele freiwillig lassen. Auch Fragen und misslungene Versuche gehören dazu.",
        "يبقى نخلي الأهداف الشخصية اختيارية. والأسئلة والمحاولات اللي مانجحتش ليها مكان كمان."
      ],
      [
        "Tom",
        "Können wir wenigstens Projekttitel sammeln? Dann sehe ich, woran die anderen arbeiten.",
        "ممكن على الأقل نجمع عناوين المشاريع؟ كده أعرف الباقيين بيشتغلوا على إيه."
      ],
      [
        "Leila",
        "Ja, freiwillig und ohne Fristen. Wir probieren die Liste aus und sprechen später noch einmal darüber.",
        "آه، اختياري ومن غير مواعيد نهائية. نجرب القايمة ونتكلم عنها تاني بعدين."
      ],
      [
        "Tom",
        "Einverstanden. Die ausgeliehenen Werkzeuge bleiben aber bei ihren bisherigen Besitzern, richtig?",
        "موافق. بس الأدوات المستلفة بتفضل ملك أصحابها، صح؟"
      ],
      [
        "Leila",
        "Genau. Die Liste macht daraus keinen gemeinsamen Vorrat.",
        "بالضبط. القايمة مش بتحولها لمخزون مشترك."
      ]
    ],
    "q": [
      [
        "Was soll freiwillig bleiben?",
        "Persönliche Ziele.",
        "Die Rückgabe fremder Werkzeuge.",
        "Die Beachtung aller Absprachen."
      ],
      [
        "Wozu möchte Tom Projekttitel sammeln?",
        "Um zu sehen, woran andere arbeiten.",
        "Um allen Fristen zu setzen.",
        "Um Werkzeuge zu verkaufen."
      ],
      [
        "Was ändert die Liste nicht?",
        "Die Zuordnung der geliehenen Werkzeuge.",
        "Die Zahl aller Projekte.",
        "Den Ort der nächsten Reise."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "haekeln-erster-schritt": [
    "Ja, am Samstag. Hast du schon Wolle und eine Häkelnadel?",
    "Die Wolle ist gelb, der Griff an der Nadel grau.",
    "Zuerst nur ein kleines Stück, keine Tasche."
  ],
  "kleinen-rahmen-leihen": [
    "Den kleinen gern. Den großen brauche ich für meine Tischdecke.",
    "Ich bringe ihn am Montagabend zurück.",
    "Sie soll mich selbst fragen. Ich weiß noch nicht, wann ich ihn wieder brauche."
  ],
  "handarbeit-ohne-frist": [
    "Dann lass uns persönliche Ziele freiwillig lassen. Auch Fragen und misslungene Versuche gehören dazu.",
    "Dann sehe ich, woran die anderen arbeiten.",
    "Die Liste macht daraus keinen gemeinsamen Vorrat."
  ]
});

everydayDialogues.push(...[
  {
    "id": "karte-noch-nicht-einpacken",
    "level": "A1",
    "title": [
      "Noch Platz für einen Gruß",
      "لسه فيه مكان لكلمتين"
    ],
    "lines": [
      [
        "Lina",
        "Ich habe eine Karte für unsere Tante geschrieben.",
        "كتبت كارت لخالتنا."
      ],
      [
        "Sami",
        "Kann ich auch etwas darauf schreiben?",
        "ينفع أكتب عليه حاجة كمان؟"
      ],
      [
        "Lina",
        "Ja. Die Karte liegt neben dem braunen Briefumschlag.",
        "آه. الكارت جنب الظرف البني."
      ],
      [
        "Sami",
        "Gut. Ich komme heute um sechs Uhr nach Hause.",
        "تمام. هرجع البيت النهارده الساعة 6."
      ],
      [
        "Lina",
        "Ich lege dir einen Stift dazu. Die Karte bleibt bis dahin draußen.",
        "هحطلك قلم جنبها. الكارت هيفضل بره لحد ساعتها."
      ],
      [
        "Sami",
        "Hast du die Adresse schon aufgeschrieben?",
        "كتبتي العنوان خلاص؟"
      ],
      [
        "Lina",
        "Noch nicht. Sie steht im kleinen Heft in der Schublade.",
        "لسه. هو في الكراسة الصغيرة اللي في الدرج."
      ]
    ],
    "q": [
      [
        "Wo liegt die Karte?",
        "Neben dem braunen Briefumschlag.",
        "Im geschlossenen Umschlag.",
        "Unter dem Sofa."
      ],
      [
        "Wann kommt Sami nach Hause?",
        "Heute um sechs Uhr.",
        "Morgen um sechs Uhr.",
        "Heute um sieben Uhr."
      ],
      [
        "Was hat Lina noch nicht aufgeschrieben?",
        "Die Adresse.",
        "Den Gruß auf der Karte.",
        "Den Namen ihres Bruders."
      ]
    ]
  },
  {
    "id": "leere-umschlaege-fragen",
    "level": "A2",
    "title": [
      "Welche Umschläge sind frei?",
      "أنهي ظروف أقدر أستخدمها؟"
    ],
    "lines": [
      [
        "Omar",
        "Kann ich einen dieser Umschläge nehmen?",
        "ينفع آخد ظرف من دول؟"
      ],
      [
        "Dina",
        "Aus der flachen Schachtel gern. Die beschrifteten lässt du bitte hier.",
        "من العلبة المسطحة طبعاً. اللي مكتوب عليهم سيبهم هنا لو سمحت."
      ],
      [
        "Omar",
        "Gut, diesen lege ich zurück. Ich habe ihn nicht geöffnet.",
        "تمام، هرجع ده مكانه. أنا مافتحتوش."
      ],
      [
        "Dina",
        "Danke. Meine privaten Briefe sortiere ich selbst.",
        "شكراً. جواباتي الخاصة هرتبها بنفسي."
      ],
      [
        "Omar",
        "Soll ich die Schachtel mit den leeren Umschlägen beschriften?",
        "أكتب علامة على علبة الظروف الفاضية؟"
      ],
      [
        "Dina",
        "Ja. Den Brieföffner lege ich in das obere Fach.",
        "آه. وفتاحة الجوابات هحطها في الخانة اللي فوق."
      ],
      [
        "Omar",
        "Dann prüfen wir nächste Woche, ob wir alles besser finden.",
        "يبقى نشوف الأسبوع الجاي إذا كنا بنلاقي كل حاجة أسهل."
      ]
    ],
    "q": [
      [
        "Woher darf Omar einen Umschlag nehmen?",
        "Aus der flachen Schachtel.",
        "Aus dem Stapel privater Briefe.",
        "Aus Dinas Tasche."
      ],
      [
        "Hat Omar den beschrifteten Umschlag geöffnet?",
        "Nein.",
        "Ja, sofort.",
        "Nur zur Hälfte."
      ],
      [
        "Wer sortiert Dinas private Briefe?",
        "Dina selbst.",
        "Omar.",
        "Beide Nachbarn."
      ]
    ]
  },
  {
    "id": "blattmotiv-keine-zusage",
    "level": "B1",
    "title": [
      "Nur ein Muster, keine Zusage",
      "ده شكل للزينة مش موافقة"
    ],
    "lines": [
      [
        "Helfer",
        "Bedeutet der Stempel neben Anmeldung, dass mein Platz bestätigt ist?",
        "الختم اللي جنب التسجيل معناه إن مكاني اتأكد؟"
      ],
      [
        "Gestalterin",
        "Nein, er soll nur verzieren. Aber so kann man ihn offenbar falsch verstehen.",
        "لأ، هو للزينة بس. بس واضح إنه كده ممكن يتفهم غلط."
      ],
      [
        "Helfer",
        "Dann würde ich das Blattmotiv auf die Rückseite setzen.",
        "يبقى أنا شايف نحط شكل الورقة على الضهر."
      ],
      [
        "Gestalterin",
        "Ja. Vorn schreiben wir ausdrücklich, dass die Karte keine Zusage enthält.",
        "آه. وقدام نكتب بوضوح إن الكارت مش موافقة مؤكدة."
      ],
      [
        "Helfer",
        "Öffnen wir dafür alle schon verschlossenen Umschläge?",
        "هنفتح عشان كده كل الظروف اللي اتقفلت خلاص؟"
      ],
      [
        "Gestalterin",
        "Nicht einfach so. Einige enthalten private Grüße. Jede Person prüft ihre eigenen Karten.",
        "مش كده وخلاص. بعضها فيه تحيات خاصة. كل واحد يراجع كروته بنفسه."
      ],
      [
        "Helfer",
        "Und die Kontaktmöglichkeit bleibt für Rückfragen stehen.",
        "ووسيلة التواصل تفضل موجودة لو فيه أسئلة."
      ]
    ],
    "q": [
      [
        "Was sollte der Stempel ursprünglich tun?",
        "Nur verzieren.",
        "Einen Platz bestätigen.",
        "Einen Preis festlegen."
      ],
      [
        "Was schreiben sie auf die Vorderseite?",
        "Dass die Karte keine Zusage enthält.",
        "Dass alle Plätze bestätigt sind.",
        "Dass Rückfragen verboten sind."
      ],
      [
        "Wer prüft die bereits verpackten Karten?",
        "Jede Person ihre eigenen Karten.",
        "Der Helfer alle privaten Briefe.",
        "Niemand."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "karte-noch-nicht-einpacken": [
    "Die Karte liegt neben dem braunen Briefumschlag.",
    "Ich komme heute um sechs Uhr nach Hause.",
    "Noch nicht. Sie steht im kleinen Heft in der Schublade."
  ],
  "leere-umschlaege-fragen": [
    "Aus der flachen Schachtel gern. Die beschrifteten lässt du bitte hier.",
    "Ich habe ihn nicht geöffnet.",
    "Meine privaten Briefe sortiere ich selbst."
  ],
  "blattmotiv-keine-zusage": [
    "Nein, er soll nur verzieren.",
    "Vorn schreiben wir ausdrücklich, dass die Karte keine Zusage enthält.",
    "Jede Person prüft ihre eigenen Karten."
  ]
});

everydayDialogues.push(...[
  {
    "id": "plektrum-zurueckgeben",
    "level": "A1",
    "title": [
      "Das Plektrum zurückgeben",
      "ترجيع ريشة الجيتار"
    ],
    "lines": [
      [
        "Nora",
        "Ich suche mein Plektrum. Hast du es gesehen?",
        "بدور على ريشة الجيتار بتاعتي. شوفتها؟"
      ],
      [
        "Ben",
        "Ja, ich habe es gestern benutzt. Entschuldigung.",
        "آه، استخدمتها امبارح. معلش."
      ],
      [
        "Nora",
        "Liegt es auf dem Tisch?",
        "هي على الترابيزة؟"
      ],
      [
        "Ben",
        "Nein, in meinem grünen Beutel. Hier, bitte.",
        "لأ، في الكيس الأخضر بتاعي. اتفضلي."
      ],
      [
        "Nora",
        "Danke. Ich möchte jetzt Gitarre spielen.",
        "شكراً. عايزة أعزف جيتار دلوقتي."
      ],
      [
        "Ben",
        "Brauchst du auch das Buch vom Tisch?",
        "محتاجة كمان الكتاب اللي على الترابيزة؟"
      ],
      [
        "Nora",
        "Nein, heute spiele ich ohne Buch.",
        "لأ، النهارده هعزف من غير كتاب."
      ]
    ],
    "q": [
      [
        "Wann hat Ben das Plektrum benutzt?",
        "Gestern.",
        "Heute Morgen.",
        "Letzte Woche."
      ],
      [
        "Woher holt Ben das Plektrum?",
        "Aus seinem grünen Beutel.",
        "Aus dem Buch.",
        "Aus der Küche."
      ],
      [
        "Braucht Nora das Buch heute?",
        "Nein.",
        "Ja.",
        "Erst am Abend."
      ]
    ]
  },
  {
    "id": "klaenge-nacheinander",
    "level": "A2",
    "title": [
      "Nicht alles auf einmal",
      "مش كله في نفس الوقت"
    ],
    "lines": [
      [
        "Lea",
        "Wenn wir gleichzeitig spielen, höre ich die einzelnen Klänge kaum.",
        "لما بنعزف مع بعض، مش بسمع كل صوت لوحده كويس."
      ],
      [
        "Sami",
        "Dann probieren wir die Sachen nacheinander aus.",
        "يبقى نجرب الحاجات واحدة ورا التانية."
      ],
      [
        "Lea",
        "Ich lege die Stimmgabel zur ersten Karte.",
        "هحط الشوكة الرنانة عند أول كارت."
      ],
      [
        "Sami",
        "Gut. Danach die Trommel und zuletzt das Tamburin?",
        "تمام. وبعدها الطبلة وفي الآخر الرق؟"
      ],
      [
        "Lea",
        "Ja, und nach jedem Klang machen wir eine Pause.",
        "آه، وبعد كل صوت ناخد وقفة."
      ],
      [
        "Sami",
        "Soll ich entscheiden, welche Beschreibung richtig ist?",
        "أحكم أنهي وصف صح؟"
      ],
      [
        "Lea",
        "Nein, schreib unsere verschiedenen Eindrücke auf.",
        "لأ، اكتب انطباعاتنا المختلفة."
      ]
    ],
    "q": [
      [
        "Wie wollen sie die Klänge hören?",
        "Nacheinander.",
        "Alle gleichzeitig.",
        "Nur über eine Aufnahme."
      ],
      [
        "Was machen sie nach jedem Klang?",
        "Eine Pause.",
        "Sie gehen nach Hause.",
        "Sie wechseln den Raum."
      ],
      [
        "Was soll Sami notieren?",
        "Die verschiedenen Eindrücke.",
        "Nur Leas Fehler.",
        "Die Instrumentenpreise."
      ]
    ]
  },
  {
    "id": "pause-sichtbar-machen",
    "level": "B1",
    "title": [
      "Wer zeigt die nächste Runde?",
      "مين هيشاور في الجولة الجاية؟"
    ],
    "lines": [
      [
        "Jonas",
        "Wenn ich die ganze Zeit auf die Zeichen zeige, spiele ich gar nicht mit.",
        "لو طول الوقت بشاور على العلامات، مش بعزف معاكم خالص."
      ],
      [
        "Mira",
        "Stimmt. Möchtest du in der nächsten Runde das Tamburin übernehmen?",
        "صح. تحب تمسك الرق في الجولة الجاية؟"
      ],
      [
        "Jonas",
        "Ja, gern. Aber wer zeigt dann auf die Karte?",
        "آه طبعاً. بس مين هيشاور على الكارت وقتها؟"
      ],
      [
        "Mira",
        "Das mache ich. Danach können wir wieder wechseln.",
        "أنا هعمل كده. وبعدها نقدر نبدل تاني."
      ],
      [
        "Jonas",
        "Und die Pause bleibt ein eigenes Feld?",
        "والوقفة تفضل ليها خانة لوحدها؟"
      ],
      [
        "Mira",
        "Ja. Sonst übersehen wir sie leicht. Das ist nur unsere Merkhilfe.",
        "آه. غير كده ممكن ماناخدش بالنا منها. دي بس طريقتنا عشان نفتكر."
      ],
      [
        "Jonas",
        "Dann versuchen wir es noch einmal, aber etwas langsamer.",
        "يبقى نجرب تاني، بس أبطأ شوية."
      ]
    ],
    "q": [
      [
        "Was möchte Jonas ändern?",
        "Er möchte auch mitspielen.",
        "Er möchte die Karte wegwerfen.",
        "Er möchte sofort öffentlich auftreten."
      ],
      [
        "Wer zeigt in der nächsten Runde auf die Karte?",
        "Mira.",
        "Jonas.",
        "Niemand."
      ],
      [
        "Wie wollen sie den nächsten Versuch spielen?",
        "Etwas langsamer.",
        "Viel schneller.",
        "Ganz ohne Pause."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "plektrum-zurueckgeben": [
    "Ja, ich habe es gestern benutzt.",
    "Nein, in meinem grünen Beutel. Hier, bitte.",
    "Nein, heute spiele ich ohne Buch."
  ],
  "klaenge-nacheinander": [
    "Dann probieren wir die Sachen nacheinander aus.",
    "Ja, und nach jedem Klang machen wir eine Pause.",
    "Nein, schreib unsere verschiedenen Eindrücke auf."
  ],
  "pause-sichtbar-machen": [
    "Wenn ich die ganze Zeit auf die Zeichen zeige, spiele ich gar nicht mit.",
    "Das mache ich. Danach können wir wieder wechseln.",
    "Dann versuchen wir es noch einmal, aber etwas langsamer."
  ]
});

everydayDialogues.push(...[
  {
    "id": "palette-aus-dem-regal",
    "level": "A1",
    "title": [
      "Kannst du mir die Palette geben?",
      "ممكن تديني البالتة؟"
    ],
    "lines": [
      [
        "Mila",
        "Ich male am kleinen Tisch. Brauchst du den großen noch?",
        "هرسم على الترابيزة الصغيرة. لسه محتاج الكبيرة؟"
      ],
      [
        "Ben",
        "Ja, ich mache meine Hausaufgaben fertig.",
        "آه، بخلص واجبي."
      ],
      [
        "Mila",
        "Dann bleibe ich hier am Fenster.",
        "يبقى أفضل هنا جنب الشباك."
      ],
      [
        "Ben",
        "Brauchst du die Palette aus dem Regal?",
        "محتاجة البالتة اللي على الرف؟"
      ],
      [
        "Mila",
        "Ja, bitte. Die Pinsel liegen schon hier.",
        "آه لو سمحت. الفرش موجودة هنا خلاص."
      ],
      [
        "Ben",
        "Hier. Darf ich später mitmalen?",
        "اتفضلي. ينفع أرسم معاكي بعدين؟"
      ],
      [
        "Mila",
        "Gern, nach deinen Hausaufgaben.",
        "طبعاً، بعد واجبك."
      ]
    ],
    "q": [
      [
        "Wo malt Mila?",
        "Am kleinen Tisch am Fenster.",
        "Im Flur.",
        "Auf dem Balkon."
      ],
      [
        "Woher kommt die Palette?",
        "Aus dem Regal.",
        "Aus dem Rucksack.",
        "Aus der Küche."
      ],
      [
        "Wann kann Ben mitmalen?",
        "Nach seinen Hausaufgaben.",
        "Vor dem Frühstück.",
        "Erst nächste Woche."
      ]
    ]
  },
  {
    "id": "farbprobe-nicht-wegwerfen",
    "level": "A2",
    "title": [
      "Das ist noch keine Unterlage",
      "دي لسه مش ورقة للشغل عليها"
    ],
    "lines": [
      [
        "Tom",
        "Kann ich dieses kleine Blatt unter meine Arbeit legen?",
        "ينفع أحط الورقة الصغيرة دي تحت شغلي؟"
      ],
      [
        "Yara",
        "Das möchte ich behalten. Auf der Rückseite steht meine Farbmischung.",
        "عايزة أحتفظ بيها. على الضهر مكتوب خلطة اللون بتاعتي."
      ],
      [
        "Tom",
        "Gut, dann nehme ich das leere Reststück daneben.",
        "تمام، يبقى آخد القصاصة الفاضية اللي جنبها."
      ],
      [
        "Yara",
        "Danke fürs Fragen. Hast du deine Mischung auch notiert?",
        "شكراً إنك سألت. سجلت خلطتك إنت كمان؟"
      ],
      [
        "Tom",
        "Nur ungefähr: mehr Blau als Gelb. Die genaue Menge weiß ich nicht mehr.",
        "تقريباً بس: أزرق أكتر من أصفر. المقدار بالظبط مش فاكره."
      ],
      [
        "Yara",
        "Dann schreiben wir es als Erinnerung auf, nicht als genaues Rezept.",
        "يبقى نكتبها للتذكر، مش كوصفة دقيقة."
      ],
      [
        "Tom",
        "Und morgen fangen wir mit den großen Bildern an.",
        "وبكرة نبدأ الصور الكبيرة."
      ]
    ],
    "q": [
      [
        "Warum möchte Yara das kleine Blatt behalten?",
        "Darauf steht ihre Farbmischung.",
        "Es gehört dem Nachbarn.",
        "Es ist ein Brief."
      ],
      [
        "Was weiß Tom noch?",
        "Er hat mehr Blau als Gelb genommen.",
        "Er hat nur Rot benutzt.",
        "Die genauen Mengen."
      ],
      [
        "Wie verstehen sie Toms Notiz?",
        "Als ungefähre Erinnerung.",
        "Als genaues Rezept.",
        "Als Bewertung von Yaras Bild."
      ]
    ]
  },
  {
    "id": "bild-am-platz-lassen",
    "level": "B1",
    "title": [
      "Erst fragen, dann bewegen",
      "الأول نسأل وبعدين نحرك"
    ],
    "lines": [
      [
        "Salma",
        "Darf ich dein unfertiges Bild für den Vergleich auf den Tisch legen?",
        "ينفع أحط صورتك اللي لسه مش كاملة على الترابيزة للمقارنة؟"
      ],
      [
        "Nina",
        "Bitte lass es auf der Staffelei. Dort möchte ich es noch ansehen.",
        "سيبيها على الحامل لو سمحتي. عايزة أبص عليها هناك لسه."
      ],
      [
        "Salma",
        "Gut, dann kommen wir zu dir.",
        "تمام، يبقى نيجي عندك."
      ],
      [
        "Karim",
        "Mir fällt zuerst die große helle Fläche auf.",
        "أول حاجة بتلفت نظري المساحة الفاتحة الكبيرة."
      ],
      [
        "Nina",
        "Möchtest du wissen, was ich damit ausprobieren wollte?",
        "تحب تعرف كنت عايزة أجرب بيها إيه؟"
      ],
      [
        "Karim",
        "Ja. Meine Beschreibung war keine Vermutung über deine Absicht.",
        "آه. وصفي مش تخمين للي إنتي كنتي قاصداه."
      ],
      [
        "Salma",
        "Und bevor jemand fotografiert, fragen wir dich noch einmal.",
        "وقبل ما حد يصور، هنسألك تاني."
      ]
    ],
    "q": [
      [
        "Wo bleibt das Bild?",
        "Auf der Staffelei.",
        "Unter dem Tisch.",
        "Im Flur."
      ],
      [
        "Was fällt Karim zuerst auf?",
        "Die große helle Fläche.",
        "Der Preis der Farben.",
        "Ein grüner Beutel."
      ],
      [
        "Was tun sie vor einem Foto?",
        "Nina noch einmal fragen.",
        "Das Bild automatisch veröffentlichen.",
        "Den Rahmen wegwerfen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "palette-aus-dem-regal": [
    "Dann bleibe ich hier am Fenster.",
    "Brauchst du die Palette aus dem Regal?",
    "Gern, nach deinen Hausaufgaben."
  ],
  "farbprobe-nicht-wegwerfen": [
    "Auf der Rückseite steht meine Farbmischung.",
    "Nur ungefähr: mehr Blau als Gelb.",
    "Dann schreiben wir es als Erinnerung auf, nicht als genaues Rezept."
  ],
  "bild-am-platz-lassen": [
    "Bitte lass es auf der Staffelei.",
    "Mir fällt zuerst die große helle Fläche auf.",
    "Und bevor jemand fotografiert, fragen wir dich noch einmal."
  ]
});

everydayDialogues.push(...[
  {
    "id": "saft-extra-lassen",
    "level": "A1",
    "title": [
      "Den Saft bitte extra",
      "العصير لوحده لو سمحتي"
    ],
    "lines": [
      [
        "Lena",
        "Wo ist die Zitronenpresse? In der Schublade liegt sie nicht.",
        "عصارة الليمون فين؟ مش في الدرج."
      ],
      [
        "Omar",
        "Im oberen Regal, neben der Tasse.",
        "على الرف اللي فوق، جنب الفنجان."
      ],
      [
        "Lena",
        "Danke, ich habe sie. Soll ich den Saft über den Salat gießen?",
        "شكراً، لقيتها. أصب العصير على السلطة؟"
      ],
      [
        "Omar",
        "Bitte noch nicht. Ich esse meinen Teil lieber ohne.",
        "لسه لو سمحتي. أفضل آكل نصيبي من غيره."
      ],
      [
        "Lena",
        "Dann stelle ich ihn in einer kleinen Schale auf den Tisch.",
        "يبقى أحطه في طبق صغير على الترابيزة."
      ],
      [
        "Omar",
        "Gut. Du kannst dir dann selbst etwas nehmen.",
        "تمام. تقدري تاخدي لنفسك شوية بعدين."
      ],
      [
        "Lena",
        "Ja, so machen wir es.",
        "آه، نعمل كده."
      ]
    ],
    "q": [
      [
        "Wo ist die Zitronenpresse?",
        "Im oberen Regal.",
        "In der Schublade.",
        "Im Rucksack."
      ],
      [
        "Was möchte Omar?",
        "Salat ohne Zitronensaft.",
        "Mehr Saft im ganzen Salat.",
        "Gar keinen Salat."
      ],
      [
        "Wohin stellt Lena den Saft?",
        "In einer kleinen Schale auf den Tisch.",
        "Zurück in die Zitrone.",
        "Unter das Sofa."
      ]
    ]
  },
  {
    "id": "zweiter-loeffel",
    "level": "A2",
    "title": [
      "Nicht mit demselben Löffel",
      "مش بنفس المعلقة"
    ],
    "lines": [
      [
        "Ben",
        "Ich habe die erste Schale beschriftet. Was kommt auf die zweite Karte?",
        "كتبت كارت أول طبق. أكتب إيه على الكارت التاني؟"
      ],
      [
        "Nora",
        "Die Zutaten, die wir tatsächlich benutzt haben.",
        "المكونات اللي استخدمناها فعلاً."
      ],
      [
        "Ben",
        "Gut. Dann nehme ich denselben Löffel für beide Schalen.",
        "تمام. يبقى أستخدم نفس المعلقة للطبقين."
      ],
      [
        "Nora",
        "Bitte einen zweiten. Ich möchte die Mischungen getrennt lassen.",
        "واحدة تانية لو سمحت. عايزة الخلطات تفضل منفصلة."
      ],
      [
        "Ben",
        "Verstanden. Schreiben wir auch besser auf eine Karte?",
        "فهمت. نكتب كمان أحسن على كارت؟"
      ],
      [
        "Nora",
        "Nein. Unsere Gäste sollen nach ihrem eigenen Geschmack wählen.",
        "لأ. ضيوفنا يختاروا حسب ذوقهم هم."
      ],
      [
        "Ben",
        "Und bei Fragen können sie uns vor dem Probieren ansprechen.",
        "ولو عندهم أسئلة يقدروا يسألونا قبل ما يدوقوا."
      ]
    ],
    "q": [
      [
        "Was steht auf der zweiten Karte?",
        "Die tatsächlich verwendeten Zutaten.",
        "Nur das Wort besser.",
        "Der Preis des Tisches."
      ],
      [
        "Warum braucht Ben einen zweiten Löffel?",
        "Die Mischungen sollen getrennt bleiben.",
        "Er hat den ersten verkauft.",
        "Die Gäste bringen keine Teller."
      ],
      [
        "Wer entscheidet nach dem eigenen Geschmack?",
        "Die Gäste.",
        "Nur Ben.",
        "Nur Nora."
      ]
    ]
  },
  {
    "id": "vorlieben-neu-fragen",
    "level": "B1",
    "title": [
      "Der leere Becher beweist das nicht",
      "الكوباية الفاضية مش دليل على ده"
    ],
    "lines": [
      [
        "Tarek",
        "Ich schreibe auf: Alle mögen Zitronensaft im Salat.",
        "هكتب: كلهم بيحبوا عصير الليمون في السلطة."
      ],
      [
        "Dalia",
        "Das wissen wir nicht. Eine Person hat gar keinen benutzt.",
        "إحنا مانعرفش كده. فيه حد ماستخدموش خالص."
      ],
      [
        "Tarek",
        "Aber die kleine Schale ist leer.",
        "بس الطبق الصغير فاضي."
      ],
      [
        "Dalia",
        "Daraus folgt nicht, dass alle dasselbe genommen haben.",
        "ده مش معناه إن كلهم خدوا نفس الحاجة."
      ],
      [
        "Tarek",
        "Dann notiere ich: Zutaten getrennt anzubieten war heute praktisch.",
        "يبقى أكتب: تقديم المكونات منفصلة كان عملي النهارده."
      ],
      [
        "Dalia",
        "Genau. Und vor dem nächsten Treffen fragen wir wieder nach Wünschen.",
        "بالظبط. وقبل المقابلة الجاية نسأل تاني عن الرغبات."
      ],
      [
        "Tarek",
        "Die alte Notiz hilft uns nur bei der Vorbereitung.",
        "الملاحظة القديمة تساعدنا في التجهيز بس."
      ]
    ],
    "q": [
      [
        "Was beweist die leere Schale nicht?",
        "Dass alle dieselbe Vorliebe haben.",
        "Dass eine Schale benutzt wurde.",
        "Dass die Freunde zusammen gegessen haben."
      ],
      [
        "Welche Notiz bleibt am Ende?",
        "Getrennte Zutaten waren heute praktisch.",
        "Alle müssen Zitronensaft nehmen.",
        "Wünsche werden nicht mehr erfragt."
      ],
      [
        "Was tun sie vor dem nächsten Treffen?",
        "Wieder nach Wünschen fragen.",
        "Die alte Liste als feste Regel benutzen.",
        "Die Schalen wegwerfen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "saft-extra-lassen": [
    "Im oberen Regal, neben der Tasse.",
    "Ich esse meinen Teil lieber ohne.",
    "Dann stelle ich ihn in einer kleinen Schale auf den Tisch."
  ],
  "zweiter-loeffel": [
    "Die Zutaten, die wir tatsächlich benutzt haben.",
    "Ich möchte die Mischungen getrennt lassen.",
    "Unsere Gäste sollen nach ihrem eigenen Geschmack wählen."
  ],
  "vorlieben-neu-fragen": [
    "Daraus folgt nicht, dass alle dasselbe genommen haben.",
    "Zutaten getrennt anzubieten war heute praktisch.",
    "Und vor dem nächsten Treffen fragen wir wieder nach Wünschen."
  ]
});
