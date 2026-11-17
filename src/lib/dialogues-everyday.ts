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
      "Die leere Schale beweist das nicht",
      "الطبق الفاضي مش دليل على ده"
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

everydayDialogues.push(...[
  {
    "id": "den-leeren-ring",
    "level": "A1",
    "title": [
      "Nur den Ring, bitte",
      "الحلقة بس لو سمحتي"
    ],
    "lines": [
      [
        "Sami",
        "Brauchst du den leeren Schlüsselring noch?",
        "لسه محتاجة حلقة المفاتيح الفاضية؟"
      ],
      [
        "Mila",
        "Nein. Meinen Schlüssel lege ich in meine Tasche.",
        "لأ. هحط مفتاحي في شنطتي."
      ],
      [
        "Sami",
        "Kann ich den Ring haben? Er ist für meinen Schlüssel.",
        "ممكن آخد الحلقة؟ لمفتاحي أنا."
      ],
      [
        "Mila",
        "Ja. Hier ist der Ring.",
        "آه. اتفضل الحلقة."
      ],
      [
        "Sami",
        "Danke. Die blaue Schale bleibt hier, oder?",
        "شكراً. الطبق الأزرق هيفضل هنا، صح؟"
      ],
      [
        "Mila",
        "Ja, auf der Kommode.",
        "آه، على الكومود."
      ],
      [
        "Sami",
        "Gut. Ich nehme nur den Ring.",
        "تمام. هاخد الحلقة بس."
      ]
    ],
    "q": [
      [
        "Was möchte Sami haben?",
        "Den leeren Schlüsselring.",
        "Milas Tasche.",
        "Die blaue Schale."
      ],
      [
        "Wohin legt Mila ihren Schlüssel?",
        "In ihre Tasche.",
        "In den Kühlschrank.",
        "Unter den Schuh."
      ],
      [
        "Was bleibt auf der Kommode?",
        "Die blaue Schale.",
        "Samis Fahrrad.",
        "Eine volle Einkaufstüte."
      ]
    ]
  },
  {
    "id": "holzkeil-wegraeumen",
    "level": "A2",
    "title": [
      "Wohin gehört das Holzstück?",
      "القطعة الخشب مكانها فين؟"
    ],
    "lines": [
      [
        "Amir",
        "Die Kiste steht jetzt im Flur. Sind wir fertig?",
        "الصندوق دلوقتي في المدخل. إحنا كده خلصنا؟"
      ],
      [
        "Lea",
        "Mit dem Tragen ja. Den Türstopper räumen wir noch weg.",
        "النقل آه. لسه هنشيل مصد الباب."
      ],
      [
        "Amir",
        "Soll ich ihn neben die Tür legen?",
        "أحطه جنب الباب؟"
      ],
      [
        "Lea",
        "Bitte nicht. Er gehört in das unterste Fach der Kommode.",
        "لأ لو سمحت. مكانه في الرف اللي تحت خالص في الكومود."
      ],
      [
        "Amir",
        "Gut, das wusste ich noch nicht.",
        "تمام، مكنتش أعرف ده."
      ],
      [
        "Lea",
        "Und die leere Kiste nehmen wir wieder mit hinein.",
        "والصندوق الفاضي ندخله تاني جوه."
      ],
      [
        "Amir",
        "Dann steht hier nichts mehr im Weg.",
        "كده مش هيفضل هنا حاجة في السكة."
      ]
    ],
    "q": [
      [
        "Was muss noch weggeräumt werden?",
        "Der Türstopper.",
        "Ein Fahrrad.",
        "Ein Teller mit Salat."
      ],
      [
        "Wo ist sein Platz?",
        "Im untersten Fach der Kommode.",
        "Neben der Tür auf dem Boden.",
        "Im Briefkasten."
      ],
      [
        "Was machen sie mit der leeren Kiste?",
        "Sie nehmen sie wieder mit hinein.",
        "Sie lassen sie im Weg stehen.",
        "Sie geben sie einem unbekannten Gast."
      ]
    ]
  },
  {
    "id": "ablage-keine-erlaubnis",
    "level": "B1",
    "title": [
      "Eine Skizze ist noch keine Zusage",
      "الرسمة لسه مش موافقة"
    ],
    "lines": [
      [
        "Jana",
        "Auf meiner Skizze passen zwei Schalen auf die Ablage.",
        "في رسمتي الطبقين ليهم مكان على سطح التخزين."
      ],
      [
        "Moritz",
        "Hast du den freien Platz schon gemessen?",
        "قستي المساحة الفاضية خلاص؟"
      ],
      [
        "Jana",
        "Noch nicht. Die Zeichnung sieht größer aus als die echte Ablage.",
        "لسه. الرسمة باينة أكبر من السطح الحقيقي."
      ],
      [
        "Ela",
        "Dann bleiben wir vorerst bei einer Schale und prüfen den Platz.",
        "يبقى نفضل مؤقتاً على طبق واحد ونراجع المساحة."
      ],
      [
        "Moritz",
        "Und mein Ring dort ist nicht automatisch zum Ausleihen da.",
        "وحلقتي اللي هناك مش متاحة للاستعارة تلقائي."
      ],
      [
        "Jana",
        "Klar. Wenn uns etwas nicht gehört, fragen wir die Person zuerst.",
        "أكيد. لو حاجة مش بتاعتنا، نسأل صاحبها الأول."
      ],
      [
        "Ela",
        "Wir schreiben nur auf, was wir wirklich vereinbart haben.",
        "نكتب اللي اتفقنا عليه فعلاً بس."
      ]
    ],
    "q": [
      [
        "Was hat Jana noch nicht getan?",
        "Den freien Platz gemessen.",
        "Eine Skizze gemacht.",
        "Über die Ablage gesprochen."
      ],
      [
        "Wie viele Schalen sind vorerst vorgesehen?",
        "Eine.",
        "Zehn.",
        "Keine einzige."
      ],
      [
        "Was tun sie vor dem Benutzen fremder Dinge?",
        "Zuerst die betreffende Person fragen.",
        "Die Skizze als Erlaubnis benutzen.",
        "Die Dinge ungefragt weitergeben."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "den-leeren-ring": [
    "Kann ich den Ring haben? Er ist für meinen Schlüssel.",
    "Meinen Schlüssel lege ich in meine Tasche.",
    "Ja, auf der Kommode."
  ],
  "holzkeil-wegraeumen": [
    "Den Türstopper räumen wir noch weg.",
    "Er gehört in das unterste Fach der Kommode.",
    "Und die leere Kiste nehmen wir wieder mit hinein."
  ],
  "ablage-keine-erlaubnis": [
    "Noch nicht. Die Zeichnung sieht größer aus als die echte Ablage.",
    "Dann bleiben wir vorerst bei einer Schale und prüfen den Platz.",
    "Wenn uns etwas nicht gehört, fragen wir die Person zuerst."
  ]
});

everydayDialogues.push(...[
  {
    "id": "kelle-aus-eimer",
    "level": "A1",
    "title": [
      "Im Eimer, nicht auf dem Tisch",
      "في الجردل مش على الترابيزة"
    ],
    "lines": [
      [
        "Rana",
        "Siehst du die kleine Pflanzkelle?",
        "شايف الجاروف الصغير للزرع؟"
      ],
      [
        "Tim",
        "Auf dem Tisch liegt sie nicht. Hier sind nur Karten.",
        "مش على الترابيزة. هنا كروت بس."
      ],
      [
        "Rana",
        "Schau bitte in den Eimer unter der Bank.",
        "بص في الجردل اللي تحت الدكة لو سمحت."
      ],
      [
        "Tim",
        "Ja, da ist sie. Ich bringe dir den ganzen Eimer.",
        "آه، موجودة. هجيب لك الجردل كله."
      ],
      [
        "Rana",
        "Danke. Die Kelle nehme ich heraus.",
        "شكراً. هطلع الجاروف."
      ],
      [
        "Tim",
        "Soll ich meinen Namen auf eine Karte schreiben?",
        "أكتب اسمي على كارت؟"
      ],
      [
        "Rana",
        "Ja. Die dritte Karte lassen wir aber leer.",
        "آه. بس نسيب الكارت التالت فاضي."
      ]
    ],
    "q": [
      [
        "Wo soll Tim nachsehen?",
        "Im Eimer unter der Bank.",
        "Im Kühlschrank.",
        "Im Briefkasten."
      ],
      [
        "Was bringt Tim Rana?",
        "Den ganzen Eimer.",
        "Nur den Tisch.",
        "Einen vollen Blumentopf."
      ],
      [
        "Welche Karte bleibt leer?",
        "Die dritte.",
        "Alle Karten.",
        "Tims Karte."
      ]
    ]
  },
  {
    "id": "werkzeug-ganz-zeigen",
    "level": "A2",
    "title": [
      "Noch ein Stück zurück",
      "لسه خطوة لورا"
    ],
    "lines": [
      [
        "Yusuf",
        "Ist die Sprühflasche auf dem Foto gut zu erkennen?",
        "إزازة البخاخ باينة كويس في الصورة؟"
      ],
      [
        "Mara",
        "Der untere Teil ja, aber der Kopf fehlt.",
        "الجزء اللي تحت آه، بس الرأس مش باينة."
      ],
      [
        "Yusuf",
        "Dann gehe ich noch ein Stück zurück.",
        "يبقى أرجع لورا شوية كمان."
      ],
      [
        "Mara",
        "So ist die ganze Flasche zu sehen.",
        "كده الإزازة كلها باينة."
      ],
      [
        "Yusuf",
        "Schreiben wir den Namen direkt aus dem Gedächtnis dazu?",
        "نكتب الاسم من الذاكرة على طول؟"
      ],
      [
        "Mara",
        "Lieber erst nachschlagen. Wir sind uns noch nicht sicher.",
        "الأفضل ندور عليه الأول. لسه مش متأكدين."
      ],
      [
        "Yusuf",
        "Gut. Danach kommt die Karte in die Mappe.",
        "تمام. بعد كده الكارت يتحط في الملف."
      ]
    ],
    "q": [
      [
        "Was fehlt zuerst auf dem Foto?",
        "Der Kopf der Flasche.",
        "Der ganze Tisch.",
        "Die ganze Wand."
      ],
      [
        "Was macht Yusuf für das zweite Foto?",
        "Er geht etwas zurück.",
        "Er schneidet den Flaschenkopf ab.",
        "Er nimmt die Flasche auseinander."
      ],
      [
        "Warum wollen sie den Namen nachschlagen?",
        "Sie sind sich noch nicht sicher.",
        "Die Mappe ist zu klein.",
        "Sie wollen einen Preis berechnen."
      ]
    ]
  },
  {
    "id": "foto-kein-nachweis",
    "level": "B1",
    "title": [
      "Das Licht könnte anders sein",
      "ممكن الإضاءة تكون مختلفة"
    ],
    "lines": [
      [
        "Jonas",
        "Ich habe geschrieben: Die Pflanze wächst am neuen Platz besser.",
        "كتبت: النبتة بتنمو أحسن في المكان الجديد."
      ],
      [
        "Amina",
        "Woran erkennst du das nach einem Nachmittag?",
        "عرفت ده من إيه بعد ضهر واحد؟"
      ],
      [
        "Jonas",
        "Auf meinem Foto wirken die Blätter heller.",
        "في صورتي الورق باين أفتح."
      ],
      [
        "Amina",
        "Das Licht könnte anders sein. Beschreiben wir erst nur das Bild.",
        "ممكن الإضاءة تكون مختلفة. نوصف الصورة بس الأول."
      ],
      [
        "Jonas",
        "Dann bleibt die Frage nach dem besseren Standort offen.",
        "يبقى سؤال المكان الأفضل لسه مفتوح."
      ],
      [
        "Amina",
        "Genau. Und Leas Kelle legen wir wieder an ihren Platz.",
        "بالظبط. وجاروف ليا نرجعه مكانه تاني."
      ],
      [
        "Jonas",
        "Vor einer weiteren Nutzung fragen wir sie.",
        "قبل ما نستخدمه تاني نسألها."
      ]
    ],
    "q": [
      [
        "Worauf stützt Jonas seine erste Aussage?",
        "Auf heller wirkende Blätter im Foto.",
        "Auf eine fachliche Untersuchung.",
        "Auf Leas schriftliche Pflegeanleitung."
      ],
      [
        "Was schlägt Amina vor?",
        "Zunächst nur das Bild beschreiben.",
        "Den Standort sofort als ideal bezeichnen.",
        "Die Fotos als Beweis für alles benutzen."
      ],
      [
        "Was tun sie vor einer weiteren Nutzung der Kelle?",
        "Lea fragen.",
        "Jonas entscheidet für Lea.",
        "Die Kelle ohne Rückfrage verleihen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "kelle-aus-eimer": [
    "Schau bitte in den Eimer unter der Bank.",
    "Ich bringe dir den ganzen Eimer.",
    "Die dritte Karte lassen wir aber leer."
  ],
  "werkzeug-ganz-zeigen": [
    "Der untere Teil ja, aber der Kopf fehlt.",
    "Dann gehe ich noch ein Stück zurück.",
    "Wir sind uns noch nicht sicher."
  ],
  "foto-kein-nachweis": [
    "Auf meinem Foto wirken die Blätter heller.",
    "Beschreiben wir erst nur das Bild.",
    "Vor einer weiteren Nutzung fragen wir sie."
  ]
});

everydayDialogues.push(...[
  {
    "id": "pumpe-laengere-tasche",
    "level": "A1",
    "title": [
      "Der Beutel ist zu kurz",
      "الكيس قصير"
    ],
    "lines": [
      [
        "Emil",
        "Ich suche meine kleine Luftpumpe. Ist sie im roten Beutel?",
        "بدور على منفاخ العجلة الصغير بتاعي. هو في الكيس الأحمر؟"
      ],
      [
        "Salma",
        "Nein, da liegt nur ein Tuch.",
        "لأ، فيه فوطة بس."
      ],
      [
        "Emil",
        "Dann schaue ich noch einmal auf das Regal.",
        "يبقى أبص على الرف تاني."
      ],
      [
        "Salma",
        "Hier ist sie, unter der grauen Jacke.",
        "أهي، تحت الجاكيت الرمادي."
      ],
      [
        "Emil",
        "Gut. Aber sie passt nicht in den kurzen Beutel.",
        "تمام. بس مش داخلة في الكيس القصير."
      ],
      [
        "Salma",
        "Ich hole die längere Tasche.",
        "هجيب الشنطة الأطول."
      ],
      [
        "Emil",
        "Danke. Das Tuch kann im roten Beutel bleiben.",
        "شكراً. الفوطة ممكن تفضل في الكيس الأحمر."
      ]
    ],
    "q": [
      [
        "Was sucht Emil?",
        "Seine kleine Luftpumpe.",
        "Eine blaue Tasse.",
        "Salmas Schuhe."
      ],
      [
        "Wo liegt sie?",
        "Unter der grauen Jacke.",
        "Im roten Beutel.",
        "Unter dem Fahrradreifen."
      ],
      [
        "Was holt Salma am Ende?",
        "Die längere Tasche.",
        "Noch eine Jacke.",
        "Einen neuen Reifen."
      ]
    ]
  },
  {
    "id": "reifenheber-nachzaehlen",
    "level": "A2",
    "title": [
      "Zählen wir noch einmal nach",
      "نعدهم تاني"
    ],
    "lines": [
      [
        "Karim",
        "Auf der alten Liste stehen zwei Reifenheber.",
        "القايمة القديمة مكتوب فيها عتلتين لفك الكاوتش."
      ],
      [
        "Nele",
        "In der Kiste liegen aber drei. Zählen wir noch einmal nach.",
        "بس في الصندوق فيه 3. نعدهم تاني."
      ],
      [
        "Karim",
        "Eins, zwei, drei. Du hast recht.",
        "1، 2، 3. عندك حق."
      ],
      [
        "Nele",
        "Schreib bitte dazu, wann wir gezählt haben.",
        "اكتب كمان إحنا عدينا إمتى لو سمحت."
      ],
      [
        "Karim",
        "Ja. Die Luftpumpe bleibt auf dem Tisch?",
        "آه. المنفاخ يفضل على الترابيزة؟"
      ],
      [
        "Nele",
        "Für den Moment ja. Für die kleine Tasche ist sie zu lang.",
        "دلوقتي آه. طويل على الشنطة الصغيرة."
      ],
      [
        "Karim",
        "Dann entscheiden wir über die Tasche später.",
        "يبقى نقرر موضوع الشنطة بعدين."
      ]
    ],
    "q": [
      [
        "Wie viele Reifenheber zählen sie?",
        "Drei.",
        "Zwei.",
        "Fünf."
      ],
      [
        "Welche zusätzliche Information soll Karim notieren?",
        "Wann sie gezählt haben.",
        "Den Namen einer Werkstatt.",
        "Eine erfundene Reparaturdauer."
      ],
      [
        "Warum bleibt die Pumpe zunächst auf dem Tisch?",
        "Sie ist zu lang für die kleine Tasche.",
        "Sie gehört zum Tisch.",
        "Es gibt keinen Reifenheber."
      ]
    ]
  },
  {
    "id": "geraeusch-beschreiben",
    "level": "B1",
    "title": [
      "Noch keine Diagnose",
      "لسه مش تشخيص"
    ],
    "lines": [
      [
        "Paula",
        "Ich habe nur geschrieben: Das Rad ist kaputt.",
        "كتبت بس: العجلة بايظة."
      ],
      [
        "Deniz",
        "Was hast du denn genau bemerkt?",
        "إيه بالظبط اللي لاحظتيه؟"
      ],
      [
        "Paula",
        "Beim Schieben habe ich ein Geräusch gehört, das sich wiederholt.",
        "وأنا بزقها سمعت صوت بيتكرر."
      ],
      [
        "Deniz",
        "Das können wir so notieren. Die Ursache ist noch offen.",
        "نقدر نكتب كده. السبب لسه مش معروف."
      ],
      [
        "Paula",
        "Ich frage die Werkstatt zuerst, ob jemand das Fahrrad ansehen kann.",
        "هسأل الورشة الأول إذا فيه حد يقدر يبص على العجلة."
      ],
      [
        "Deniz",
        "Dann schreib noch keinen festen Termin oder Preis dazu.",
        "يبقى لسه ماتكتبيش معاد ولا سعر ثابت."
      ],
      [
        "Paula",
        "Genau. Ich nehme die Beschreibung mit, keine erfundene Diagnose.",
        "بالظبط. هاخد الوصف معايا، مش تشخيص من عندي."
      ]
    ],
    "q": [
      [
        "Was hat Paula beim Schieben gehört?",
        "Ein sich wiederholendes Geräusch.",
        "Eine bestätigte Preiszusage.",
        "Eine Wettervorhersage."
      ],
      [
        "Was bleibt offen?",
        "Die Ursache des Geräuschs.",
        "Ob Paula schreiben kann.",
        "Ob Deniz zugehört hat."
      ],
      [
        "Was möchte Paula zuerst von der Werkstatt wissen?",
        "Ob jemand das Fahrrad ansehen kann.",
        "Ob Deniz die Pumpe fotografiert hat.",
        "Wo ihre rote Jacke ist."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "pumpe-laengere-tasche": [
    "Ich suche meine kleine Luftpumpe.",
    "Hier ist sie, unter der grauen Jacke.",
    "Ich hole die längere Tasche."
  ],
  "reifenheber-nachzaehlen": [
    "Eins, zwei, drei. Du hast recht.",
    "Schreib bitte dazu, wann wir gezählt haben.",
    "Für die kleine Tasche ist sie zu lang."
  ],
  "geraeusch-beschreiben": [
    "Beim Schieben habe ich ein Geräusch gehört, das sich wiederholt.",
    "Die Ursache ist noch offen.",
    "Ich frage die Werkstatt zuerst, ob jemand das Fahrrad ansehen kann."
  ]
});

everydayDialogues.push(...[
  {
    "id": "garnrolle-bleibt",
    "level": "A1",
    "title": [
      "Bitte noch nicht wegräumen",
      "لسه ماتشيلهاش"
    ],
    "lines": [
      [
        "Sami",
        "Soll ich die blaue Garnrolle wegräumen?",
        "أشيل بكرة الخيط الزرقا مكانها؟"
      ],
      [
        "Mira",
        "Bitte noch nicht. Sie gehört zu meinem blauen Beutel.",
        "لسه لو سمحت. دي مخصوص للكيس الأزرق بتاعي."
      ],
      [
        "Sami",
        "Ist der Beutel schon fertig?",
        "الكيس خلص خلاص؟"
      ],
      [
        "Mira",
        "Nein. Lass die Rolle bitte neben dem Zettel liegen.",
        "لأ. سيب البكرة جنب الورقة لو سمحت."
      ],
      [
        "Sami",
        "Dann lege ich nur die leere weiße Rolle nach unten.",
        "يبقى أحط البكرة البيضا الفاضية بس تحت."
      ],
      [
        "Mira",
        "Danke. Morgen zeige ich den Beutel meiner Schwester.",
        "شكراً. بكرة هوري الكيس لأختي."
      ],
      [
        "Sami",
        "Gut, die blaue Rolle bleibt hier.",
        "تمام، البكرة الزرقا تفضل هنا."
      ]
    ],
    "q": [
      [
        "Welche Rolle soll liegen bleiben?",
        "Die blaue Garnrolle.",
        "Die leere weiße Rolle.",
        "Eine grüne Rolle."
      ],
      [
        "Wo soll sie liegen bleiben?",
        "Neben dem Zettel.",
        "Im Kühlschrank.",
        "Unter dem Tisch."
      ],
      [
        "Wem möchte Mira den Beutel zeigen?",
        "Ihrer Schwester.",
        "Einem Verkäufer.",
        "Samis Nachbarn."
      ]
    ]
  },
  {
    "id": "nahttrenner-karte",
    "level": "A2",
    "title": [
      "Die Karte gehört zur Schere",
      "الكارت ده بتاع المقص"
    ],
    "lines": [
      [
        "Jonas",
        "Hier liegt die Karte mit dem Wort Schere.",
        "أهو الكارت اللي عليه كلمة مقص."
      ],
      [
        "Hala",
        "Aber das kleine Werkzeug daneben ist ein Nahttrenner.",
        "بس الأداة الصغيرة اللي جنبه دي أداة لفك الغرز."
      ],
      [
        "Jonas",
        "Dann bringe ich die Karte zur Schere zurück.",
        "يبقى أرجع الكارت جنب المقص."
      ],
      [
        "Hala",
        "Ich schreibe inzwischen eine passende Karte.",
        "وأنا في الوقت ده أكتب كارت مناسب."
      ],
      [
        "Jonas",
        "Fotografieren wir beide Werkzeuge zusammen?",
        "نصور الأداتين مع بعض؟"
      ],
      [
        "Hala",
        "Lieber getrennt, jeweils mit der passenden Karte.",
        "الأفضل كل واحدة لوحدها مع الكارت المناسب."
      ],
      [
        "Jonas",
        "Gut. Die Kappe bleibt beim Nahttrenner.",
        "تمام. الغطا يفضل مع أداة فك الغرز."
      ]
    ],
    "q": [
      [
        "Welches Wort steht auf der falschen Karte?",
        "Schere.",
        "Garnrolle.",
        "Fenster."
      ],
      [
        "Wie möchten sie die Werkzeuge fotografieren?",
        "Getrennt mit der passenden Karte.",
        "Ohne Karte in einer Tasche.",
        "Zusammen im dunklen Schrank."
      ],
      [
        "Was bleibt beim Nahttrenner?",
        "Die Kappe.",
        "Jonas' Jacke.",
        "Ein leerer Koffer."
      ]
    ]
  },
  {
    "id": "stoffreste-erlaubnis",
    "level": "B1",
    "title": [
      "Nur die grünen Stücke",
      "القطع الخضرا بس"
    ],
    "lines": [
      [
        "Malek",
        "Darf ich Stoffreste aus dieser Mappe nehmen?",
        "ينفع آخد بواقي قماش من الحافظة دي؟"
      ],
      [
        "Daria",
        "Die zwei kleinen grünen Stücke kannst du für dein Übungsprojekt haben.",
        "ممكن تاخد القطعتين الخضر الصغيرين لمشروع التدريب بتاعك."
      ],
      [
        "Malek",
        "Und die blauen?",
        "والزرق؟"
      ],
      [
        "Daria",
        "Die sind schon für ein Geschenk vorgesehen.",
        "دول مخصصين لهدية من الأول."
      ],
      [
        "Malek",
        "Dann frage ich nach der Garnrolle lieber auch noch einmal.",
        "يبقى أسأل عن بكرة الخيط لوحدها برضه أحسن."
      ],
      [
        "Daria",
        "Die möchte ich noch behalten. In die kleine Schachtel kommen nur freigegebene Reste.",
        "دي لسه عايزة أحتفظ بيها. العلبة الصغيرة يتحط فيها البواقي المسموح باستخدامها بس."
      ],
      [
        "Malek",
        "Verstanden. Der Zettel gilt also nicht für das ganze Regal.",
        "فهمت. يبقى الورقة مش خاصة بالرف كله."
      ]
    ],
    "q": [
      [
        "Welche Stücke bekommt Malek für sein Projekt?",
        "Die zwei kleinen grünen Stücke.",
        "Alle blauen Stoffe.",
        "Keine Stoffstücke."
      ],
      [
        "Wofür sind die blauen Stücke vorgesehen?",
        "Für ein Geschenk.",
        "Für den Müll.",
        "Für Maleks Übungsprojekt."
      ],
      [
        "Was darf Malek aus dem Zettel nicht ableiten?",
        "Dass das ganze Regal freigegeben ist.",
        "Dass es eine kleine Schachtel gibt.",
        "Dass Daria eine Garnrolle behalten möchte."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "garnrolle-bleibt": [
    "Soll ich die blaue Garnrolle wegräumen?",
    "Lass die Rolle bitte neben dem Zettel liegen.",
    "Morgen zeige ich den Beutel meiner Schwester."
  ],
  "nahttrenner-karte": [
    "Hier liegt die Karte mit dem Wort Schere.",
    "Lieber getrennt, jeweils mit der passenden Karte.",
    "Die Kappe bleibt beim Nahttrenner."
  ],
  "stoffreste-erlaubnis": [
    "Die zwei kleinen grünen Stücke kannst du für dein Übungsprojekt haben.",
    "Die sind schon für ein Geschenk vorgesehen.",
    "Der Zettel gilt also nicht für das ganze Regal."
  ]
});

everydayDialogues.push(...[
  {
    "id": "maeppchen-schon-da",
    "level": "A1",
    "title": [
      "Schau ins kleine Fach",
      "بصي في الخانة الصغيرة"
    ],
    "lines": [
      [
        "Lea",
        "Ich finde mein Federmäppchen nicht.",
        "مش لاقية المقلمة بتاعتي."
      ],
      [
        "Tarek",
        "Hast du schon in die Tasche geschaut?",
        "بصيتي في الشنطة؟"
      ],
      [
        "Lea",
        "Nein, ich suche noch auf dem Stuhl.",
        "لأ، لسه بدور على الكرسي."
      ],
      [
        "Tarek",
        "Da liegt nur dein Schal. Schau ins kleine Fach der Tasche.",
        "هناك الشال بتاعك بس. بصي في الخانة الصغيرة بتاعة الشنطة."
      ],
      [
        "Lea",
        "Ach ja! Ich habe es gestern Abend eingepackt.",
        "آه صح! أنا حطيته امبارح بالليل."
      ],
      [
        "Tarek",
        "Dann fehlen nur noch die Stifte.",
        "يبقى ناقص الأقلام بس."
      ],
      [
        "Lea",
        "Die stecke ich jetzt hinein. Danke!",
        "هحطهم جواها دلوقتي. شكراً!"
      ]
    ],
    "q": [
      [
        "Was sucht Lea?",
        "Ihr Federmäppchen.",
        "Tareks Jacke.",
        "Einen neuen Stuhl."
      ],
      [
        "Wohin soll sie schauen?",
        "Ins kleine Fach der Tasche.",
        "Auf das Dach.",
        "Hinter den Kühlschrank."
      ],
      [
        "Was steckt Lea am Ende hinein?",
        "Die Stifte.",
        "Den Schal.",
        "Den Stuhl."
      ]
    ]
  },
  {
    "id": "karten-getrennt",
    "level": "A2",
    "title": [
      "Das lose Band, bitte",
      "الأستك السايب لو سمحتي"
    ],
    "lines": [
      [
        "Nils",
        "Ich möchte die beiden Kartengruppen getrennt mitbringen.",
        "عايز أجيب مجموعتين الكروت منفصلين."
      ],
      [
        "Hana",
        "Hier ist ein Gummiband um die alten Notizen.",
        "فيه أستك هنا حوالين ورق الملاحظات القديم."
      ],
      [
        "Nils",
        "Das lass bitte dort. Neben dem Mäppchen liegt noch eines.",
        "سيبيه هناك لو سمحتي. جنب المقلمة فيه واحد تاني."
      ],
      [
        "Hana",
        "Ja, das liegt lose. Hier, bitte.",
        "آه، ده سايب. اتفضل."
      ],
      [
        "Nils",
        "Die Küchen-Karten kommen in den kleinen Umschlag.",
        "كروت المطبخ هتتحط في الظرف الصغير."
      ],
      [
        "Hana",
        "Prüfen wir vor dem Mischen noch einmal, ob alle sechs Karten da sind?",
        "نتأكد تاني قبل الخلط إن الكروت الـ6 موجودين؟"
      ],
      [
        "Nils",
        "Gern. Erst zeigen wir die Gruppen, danach mischen wir.",
        "ماشي. نوري المجموعتين الأول، وبعدين نخلط."
      ]
    ],
    "q": [
      [
        "Welches Band soll Hana nehmen?",
        "Das lose neben dem Mäppchen.",
        "Das um die alten Notizen.",
        "Ein Band aus dem Umschlag."
      ],
      [
        "Was kommt in den Umschlag?",
        "Die Küchen-Karten.",
        "Alle alten Notizen.",
        "Das Federmäppchen."
      ],
      [
        "Was möchten sie vor dem Mischen prüfen?",
        "Ob alle sechs Karten da sind.",
        "Ob ein Prüfungspreis feststeht.",
        "Ob das Regal verkauft ist."
      ]
    ]
  },
  {
    "id": "maeppchen-zuordnen",
    "level": "B1",
    "title": [
      "Welche Farbe hat der Reißverschluss?",
      "السوستة لونها إيه؟"
    ],
    "lines": [
      [
        "Jan",
        "Du hast ein braunes Federmäppchen gefunden? Meines ist auch braun.",
        "إنتي لقيتي مقلمة بنية؟ بتاعتي بنية برضه."
      ],
      [
        "Esra",
        "Ja, aber die Farbe allein reicht noch nicht. Kannst du deines genauer beschreiben?",
        "آه، بس اللون لوحده لسه مش كفاية. تقدر توصف بتاعتك بدقة أكتر؟"
      ],
      [
        "Jan",
        "Es hat einen blauen Reißverschluss.",
        "سوستتها زرقا."
      ],
      [
        "Esra",
        "Bei diesem hier ist der Reißverschluss schwarz.",
        "دي هنا سوستتها سودة."
      ],
      [
        "Jan",
        "Dann ist meine Vermutung wohl nicht bestätigt.",
        "يبقى تخميني لسه مش مؤكد."
      ],
      [
        "Esra",
        "Genau. Eine Übergabe haben wir noch nicht vereinbart.",
        "بالظبط. لسه متفقناش على تسليم."
      ],
      [
        "Jan",
        "Dann klären wir erst mit der Gruppe, wie die Suche weitergeht.",
        "يبقى نتفق الأول مع الجروب البحث هيكمل إزاي."
      ]
    ],
    "q": [
      [
        "Was haben beide Mäppchen nach Jans Aussage gemeinsam?",
        "Sie sind braun.",
        "Sie haben einen blauen Reißverschluss.",
        "Sie gehören sicher Jan."
      ],
      [
        "Welche Farbe hat der Reißverschluss am Fundstück?",
        "Schwarz.",
        "Blau.",
        "Grün."
      ],
      [
        "Was wollen sie zuerst klären?",
        "Wie die Suche mit der Gruppe weitergeht.",
        "Einen bereits bestätigten Verkaufspreis.",
        "Jans geplante Reparatur."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "maeppchen-schon-da": [
    "Ich finde mein Federmäppchen nicht.",
    "Schau ins kleine Fach der Tasche.",
    "Die stecke ich jetzt hinein. Danke!"
  ],
  "karten-getrennt": [
    "Neben dem Mäppchen liegt noch eines.",
    "Die Küchen-Karten kommen in den kleinen Umschlag.",
    "Prüfen wir vor dem Mischen noch einmal, ob alle sechs Karten da sind?"
  ],
  "maeppchen-zuordnen": [
    "Meines ist auch braun.",
    "Bei diesem hier ist der Reißverschluss schwarz.",
    "Dann klären wir erst mit der Gruppe, wie die Suche weitergeht."
  ]
});

everydayDialogues.push(...[
  {
    "id": "kamm-links",
    "level": "A1",
    "title": [
      "Der Kamm liegt links",
      "المشط على الشمال"
    ],
    "lines": [
      [
        "Sami",
        "Mira, wo liegt mein Kamm?",
        "ميرا، المشط بتاعي فين؟"
      ],
      [
        "Mira",
        "Auf dem unteren Brett, links neben der Nagelbürste.",
        "على الرف اللي تحت، على شمال فرشة الأظافر."
      ],
      [
        "Sami",
        "Hier ist er. Hast du das Regal aufgeräumt?",
        "أهو. إنتي رتبتي الرف؟"
      ],
      [
        "Mira",
        "Ja. Die Bürste steht jetzt rechts.",
        "آه. الفرشة دلوقتي على اليمين."
      ],
      [
        "Sami",
        "Brauchst du die Handtücher oben?",
        "محتاجة الفوط اللي فوق؟"
      ],
      [
        "Mira",
        "Nein, ich stelle nur noch diese leere Schale hin.",
        "لأ، هحط الطبق الفاضي ده بس."
      ],
      [
        "Sami",
        "Gut, ich nehme nur meinen Kamm mit.",
        "تمام، هاخد المشط بتاعي بس."
      ]
    ],
    "q": [
      [
        "Wo liegt Samis Kamm?",
        "Links neben der Nagelbürste.",
        "In der leeren Schale.",
        "Auf dem oberen Brett."
      ],
      [
        "Was stellt Mira noch hin?",
        "Eine leere Schale.",
        "Einen neuen Schrank.",
        "Einen Teller mit Obst."
      ],
      [
        "Was nimmt Sami mit?",
        "Nur seinen Kamm.",
        "Beide Handtücher.",
        "Die Nagelbürste."
      ]
    ]
  },
  {
    "id": "fach-fuer-dalia",
    "level": "A2",
    "title": [
      "Das Fach mit deinem Namen",
      "الخانة اللي عليها اسمك"
    ],
    "lines": [
      [
        "Lina",
        "Hier ist das freie Fach für deine Sachen.",
        "دي الخانة الفاضية لحاجتك."
      ],
      [
        "Dalia",
        "Danke. Ist der Waschlappen am Haken auch für mich?",
        "شكراً. الفوطة الصغيرة اللي على الخطاف ليا برضه؟"
      ],
      [
        "Lina",
        "Nein, das ist meiner. Deiner liegt hier beim Handtuch.",
        "لأ، دي بتاعتي. بتاعتك هنا جنب الفوطة."
      ],
      [
        "Dalia",
        "Sie haben ja dieselbe Farbe. Gut, dass du mir das zeigst.",
        "دول نفس اللون فعلاً. كويس إنك بتوريني."
      ],
      [
        "Lina",
        "Die kleine Karte mit deinem Namen bleibt im trockenen Fach.",
        "الكارت الصغير اللي عليه اسمك بيفضل في الخانة الناشفة."
      ],
      [
        "Dalia",
        "Und wohin lege ich meinen Lappen, wenn ich ihn benutzt habe?",
        "وأحط الفوطة الصغيرة بتاعتي فين لما أكون استخدمتها؟"
      ],
      [
        "Lina",
        "In den leeren Korb unter dem Regal, bitte.",
        "في الباسكت الفاضي تحت الرف لو سمحتي."
      ]
    ],
    "q": [
      [
        "Wo liegt Dalias frischer Waschlappen?",
        "Beim Handtuch im Fach.",
        "Am Haken neben dem Waschbecken.",
        "Unter dem leeren Korb."
      ],
      [
        "Wo bleibt die Namenskarte?",
        "Im trockenen Fach.",
        "Im Waschbecken.",
        "Im nassen Lappen."
      ],
      [
        "Wohin kommt der benutzte Lappen?",
        "In den Korb unter dem Regal.",
        "Zu den frischen Sachen.",
        "Auf Linas Kamm."
      ]
    ]
  },
  {
    "id": "altes-regalfoto",
    "level": "A2",
    "title": [
      "Rechts, nicht mehr links",
      "على اليمين، مش على الشمال زي الأول"
    ],
    "lines": [
      [
        "Ben",
        "Auf deinem Foto steht die Nagelbürste links. Da finde ich nur einen Kamm.",
        "في صورتك فرشة الأظافر على الشمال. مش لاقي هناك غير مشط."
      ],
      [
        "Nora",
        "Warte, ich schaue nach. Ach, das Foto ist von letzter Woche.",
        "استنى أبص. آه، الصورة دي من الأسبوع اللي فات."
      ],
      [
        "Ben",
        "Hast du das Regal seitdem anders eingeräumt?",
        "رتبتي الرف بشكل مختلف من وقتها؟"
      ],
      [
        "Nora",
        "Ja. Die Bürste steht jetzt rechts neben der Schale.",
        "آه. الفرشة دلوقتي على يمين الطبق."
      ],
      [
        "Ben",
        "Jetzt sehe ich sie. Und die frischen Waschlappen?",
        "شايفها دلوقتي. والفوط الصغيرة النضيفة؟"
      ],
      [
        "Nora",
        "Im unteren Fach. Ich schicke dir gleich ein neues Foto.",
        "في الخانة اللي تحت. هبعتلك صورة جديدة حالاً."
      ],
      [
        "Ben",
        "Danke. Dann war die erste Angabe einfach nicht mehr aktuell.",
        "شكراً. يبقى المعلومة الأولى بس ماعدتش حديثة."
      ]
    ],
    "q": [
      [
        "Warum sucht Ben zuerst am falschen Platz?",
        "Das Foto zeigt die alte Anordnung.",
        "Er hat kein Foto bekommen.",
        "Nora hat die Bürste verkauft."
      ],
      [
        "Wo steht die Bürste jetzt?",
        "Rechts neben der Schale.",
        "Links neben dem Kamm.",
        "Im unteren Fach unter den Lappen."
      ],
      [
        "Was möchte Nora schicken?",
        "Ein neues Foto.",
        "Einen Kaufvertrag.",
        "Ein altes Handtuch."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "kamm-links": [
    "Auf dem unteren Brett, links neben der Nagelbürste.",
    "Nein, ich stelle nur noch diese leere Schale hin.",
    "Gut, ich nehme nur meinen Kamm mit."
  ],
  "fach-fuer-dalia": [
    "Deiner liegt hier beim Handtuch.",
    "Die kleine Karte mit deinem Namen bleibt im trockenen Fach.",
    "In den leeren Korb unter dem Regal, bitte."
  ],
  "altes-regalfoto": [
    "Warte, ich schaue nach. Ach, das Foto ist von letzter Woche.",
    "Die Bürste steht jetzt rechts neben der Schale.",
    "Ich schicke dir gleich ein neues Foto."
  ]
});

everydayDialogues.push(...[
  {
    "id": "schaeler-vorne",
    "level": "A1",
    "title": [
      "In der schmalen Schublade",
      "في الدرج الرفيع"
    ],
    "lines": [
      [
        "Jana",
        "Amir, ist der Sparschäler bei den Kochlöffeln?",
        "أمير، مقشرة الخضار مع معالق الطبخ؟"
      ],
      [
        "Amir",
        "Nein, schau in die schmale Schublade daneben.",
        "لأ، بصي في الدرج الرفيع اللي جنبه."
      ],
      [
        "Jana",
        "Hier vorne liegt er. Dahinter sind drei kleine Löffel.",
        "أهو قدام هنا. وراه 3 معالق صغيرة."
      ],
      [
        "Amir",
        "Gut. Ich hole noch die Schüssel aus dem Schrank.",
        "تمام. هجيب كمان الطبق الغويط من الدولاب."
      ],
      [
        "Jana",
        "Die Kartoffeln liegen schon auf dem Tisch.",
        "البطاطس على الترابيزة خلاص."
      ],
      [
        "Amir",
        "Räumen wir den Tisch erst frei?",
        "نفضي الترابيزة الأول؟"
      ],
      [
        "Jana",
        "Ja. Danach haben wir mehr Platz.",
        "آه. بعد كده يبقى عندنا مكان أكتر."
      ]
    ],
    "q": [
      [
        "Wo soll Jana nachsehen?",
        "In der schmalen Schublade.",
        "Auf dem Balkon.",
        "Im Backofen."
      ],
      [
        "Was holt Amir?",
        "Eine Schüssel.",
        "Drei neue Schäler.",
        "Einen Tisch."
      ],
      [
        "Warum räumen sie zuerst auf?",
        "Danach haben sie mehr Platz.",
        "Die Kartoffeln sind verschwunden.",
        "Sie wollen die Küche verkaufen."
      ]
    ]
  },
  {
    "id": "nur-stampfer-leihen",
    "level": "A2",
    "title": [
      "Die Schüssel bleibt hier",
      "الطبق هيفضل هنا"
    ],
    "lines": [
      [
        "Malik",
        "Danke, dass du mir den Kartoffelstampfer leihst.",
        "شكراً إنك بتسلفيني هراسة البطاطس."
      ],
      [
        "Eva",
        "Gern. Ich bringe ihn dir heute Nachmittag an die Tür.",
        "العفو. هجيبهالك النهارده بعد الضهر عند الباب."
      ],
      [
        "Malik",
        "Auf deinem Foto steht auch eine Schüssel daneben. Kann ich die auch haben?",
        "في صورتك فيه طبق غويط جنبها برضه. ينفع آخده هو كمان؟"
      ],
      [
        "Eva",
        "Die brauche ich heute Abend selbst.",
        "ده محتاجاه بنفسي الليلة."
      ],
      [
        "Malik",
        "Kein Problem, ich habe eine passende. Dann nur den Stampfer.",
        "مفيش مشكلة، عندي واحد مناسب. يبقى الهراسة بس."
      ],
      [
        "Eva",
        "Bringst du ihn am Montagabend zurück?",
        "هترجعهالي مساء الاتنين؟"
      ],
      [
        "Malik",
        "Ja, Montagabend. Das passt.",
        "آه، مساء الاتنين. مناسب."
      ]
    ],
    "q": [
      [
        "Wohin bringt Eva den Stampfer?",
        "An Maliks Tür.",
        "Zum Supermarkt.",
        "In Maliks Keller."
      ],
      [
        "Was bleibt bei Eva?",
        "Die Schüssel.",
        "Maliks Schlüssel.",
        "Maliks Kartoffeln."
      ],
      [
        "Welche Rückgabe bestätigt Malik?",
        "Montagabend.",
        "Dienstagmorgen.",
        "Erst nach einem Monat."
      ]
    ]
  },
  {
    "id": "karten-richtig-zuordnen",
    "level": "A2",
    "title": [
      "Der Name passt nicht zum Bild",
      "الاسم مش راكب على الصورة"
    ],
    "lines": [
      [
        "Ronja",
        "Hier steht zweimal Sparschäler. Sind das wirklich zwei gleiche Bilder?",
        "هنا مكتوب مقشرة خضار مرتين. دول فعلاً صورتين زي بعض؟"
      ],
      [
        "Karim",
        "Moment, ich vergrößere sie. Nein, auf dem zweiten Foto ist der Kartoffelstampfer.",
        "لحظة أكبرهم. لأ، الصورة التانية فيها هراسة البطاطس."
      ],
      [
        "Ronja",
        "Dann ist das Foto richtig, aber der Name darunter nicht.",
        "يبقى الصورة صح، بس الاسم اللي تحتها لأ."
      ],
      [
        "Karim",
        "Genau. Ich ändere nur diesen Namen.",
        "بالظبط. هغير الاسم ده بس."
      ],
      [
        "Ronja",
        "Legen wir die Karten noch einmal neben die Gegenstände?",
        "نحط الكروت تاني جنب الحاجات؟"
      ],
      [
        "Karim",
        "Ja. Wir prüfen beide Zuordnungen, bevor wir die Karten anbringen.",
        "آه. نتأكد من الربطين قبل ما نحط الكروت."
      ],
      [
        "Ronja",
        "Gut. Die Anleitung zur Benutzung ist das aber nicht.",
        "تمام. بس ده مش دليل طريقة الاستخدام."
      ]
    ],
    "q": [
      [
        "Was zeigt das zweite Foto?",
        "Den Kartoffelstampfer.",
        "Zwei gleiche Schäler.",
        "Einen leeren Tisch."
      ],
      [
        "Was ist falsch?",
        "Der Name unter dem zweiten Bild.",
        "Das zweite Foto selbst.",
        "Die Farbe der Gegenstände."
      ],
      [
        "Was prüfen sie vor dem Anbringen?",
        "Beide Zuordnungen von Karten und Gegenständen.",
        "Die Preise neuer Schubladen.",
        "Die Namen aller Hausbewohner."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "schaeler-vorne": [
    "Nein, schau in die schmale Schublade daneben.",
    "Ich hole noch die Schüssel aus dem Schrank.",
    "Danach haben wir mehr Platz."
  ],
  "nur-stampfer-leihen": [
    "Ich bringe ihn dir heute Nachmittag an die Tür.",
    "Die brauche ich heute Abend selbst.",
    "Ja, Montagabend. Das passt."
  ],
  "karten-richtig-zuordnen": [
    "auf dem zweiten Foto ist der Kartoffelstampfer.",
    "Dann ist das Foto richtig, aber der Name darunter nicht.",
    "Wir prüfen beide Zuordnungen, bevor wir die Karten anbringen."
  ]
});

everydayDialogues.push(...[
  {
    "id": "braunes-paar-unten",
    "level": "A1",
    "title": [
      "Nicht das graue Paar",
      "مش الجوز الرمادي"
    ],
    "lines": [
      [
        "Rana",
        "Wo sind meine Hausschuhe? Hier steht nur das graue Paar.",
        "شبشب البيت بتاعي فين؟ هنا فيه الجوز الرمادي بس."
      ],
      [
        "Emil",
        "Das ist meins. Dein braunes Paar steht unten im Regal.",
        "ده بتاعي. الجوز البني بتاعك تحت في الجزامة."
      ],
      [
        "Rana",
        "Ach, jetzt sehe ich es. Ich lasse deine Schuhe hier.",
        "آه، شايفاه دلوقتي. هسيب شبشبك هنا."
      ],
      [
        "Emil",
        "Danke. Wohin legst du deine Tasche?",
        "شكراً. هتحطي شنطتك فين؟"
      ],
      [
        "Rana",
        "Auf die Bank neben der Tür.",
        "على الدكة اللي جنب الباب."
      ],
      [
        "Emil",
        "Und der Schlüssel?",
        "والمفتاح؟"
      ],
      [
        "Rana",
        "Der kommt in die kleine Schale daneben.",
        "ده هيتحط في الطبق الصغير اللي جنبها."
      ]
    ],
    "q": [
      [
        "Welches Paar gehört Rana?",
        "Das braune.",
        "Das graue.",
        "Beide Paare."
      ],
      [
        "Wo bleibt Emils Paar?",
        "An seinem bisherigen Platz.",
        "In Ranas Tasche.",
        "Im Wohnzimmer."
      ],
      [
        "Wohin kommt der Schlüssel?",
        "In die kleine Schale.",
        "Unter das Regal.",
        "In Emils Jacke."
      ]
    ]
  },
  {
    "id": "senkel-zwei-merkmale",
    "level": "A2",
    "title": [
      "Kurz und mit grauen Enden",
      "قصير وطرفيه رمادي"
    ],
    "lines": [
      [
        "Jonas",
        "Ich habe hier zwei schwarze Schnürsenkel gefunden. Ist einer deiner?",
        "لقيت هنا رباطين جزم سُود. واحد فيهم بتاعك؟"
      ],
      [
        "Hala",
        "Meiner ist kurz und hat graue Enden.",
        "بتاعي قصير وطرفيه رمادي."
      ],
      [
        "Jonas",
        "Der kurze hier hat schwarze Enden. Nur der lange hat graue.",
        "القصير هنا طرفيه سُود. الطويل بس اللي طرفيه رمادي."
      ],
      [
        "Hala",
        "Dann passt keiner zu beiden Merkmalen.",
        "يبقى ولا واحد مطابق للصفتين."
      ],
      [
        "Jonas",
        "Soll ich sie zurück in die Schachtel legen?",
        "أرجعهم للعلبة؟"
      ],
      [
        "Hala",
        "Ja, bitte. Ich suche später noch in meiner Sporttasche.",
        "آه لو سمحت. هدور بعدين كمان في شنطة الرياضة بتاعتي."
      ],
      [
        "Jonas",
        "Gut. Einen Ersatz haben wir also noch nicht ausgewählt.",
        "تمام. يبقى لسه ماخترناش بديل."
      ]
    ],
    "q": [
      [
        "Welche Enden hat der kurze Senkel auf der Bank?",
        "Schwarze.",
        "Graue.",
        "Weiße."
      ],
      [
        "Was soll Jonas mit beiden Senkeln machen?",
        "Sie zurück in die Schachtel legen.",
        "Sie sofort wegwerfen.",
        "Sie als Halas Eigentum beschriften."
      ],
      [
        "Was ist noch nicht ausgewählt?",
        "Ein Ersatz.",
        "Halas Sporttasche.",
        "Der Platz der Bank."
      ]
    ]
  },
  {
    "id": "kiste-erst-fragen",
    "level": "A2",
    "title": [
      "Die Kiste ist noch nicht fertig",
      "الصندوق لسه ماتفرزش"
    ],
    "lines": [
      [
        "Niko",
        "Sind die Hausschuhe in der Kiste zum Verschenken?",
        "شباشب البيت اللي في الصندوق عشان تتوهب؟"
      ],
      [
        "Esma",
        "Nein. Ich habe noch nicht entschieden, ob ich sie behalte.",
        "لأ. لسه ماقررتش إذا كنت هحتفظ بيهم."
      ],
      [
        "Niko",
        "Gut, dass ich frage. Ich wollte sie einer Freundin anbieten.",
        "كويس إني بسأل. كنت هعرضهم على صاحبة ليا."
      ],
      [
        "Esma",
        "Bitte noch nicht. Die Kiste ist noch nicht fertig sortiert.",
        "لسه لو سمحت. الصندوق لسه ماخلصش فرز."
      ],
      [
        "Niko",
        "Dann schreibe ich dazu, dass man vorher fragen soll.",
        "يبقى أكتب معاها إن الواحد يسأل الأول."
      ],
      [
        "Esma",
        "Ja. Es ist noch nichts verschenkt oder reserviert.",
        "آه. لسه مفيش حاجة اتوهبت ولا اتحجزت."
      ],
      [
        "Niko",
        "Verstanden. Ich verspreche niemandem etwas daraus.",
        "فهمت. مش هوعد حد بحاجة من جواه."
      ]
    ],
    "q": [
      [
        "Was hat Esma noch nicht entschieden?",
        "Ob sie die Hausschuhe behält.",
        "Wo Niko wohnt.",
        "Wann ihre Freundin Geburtstag hat."
      ],
      [
        "Was soll die neue Notiz deutlich machen?",
        "Man soll vorher fragen.",
        "Niko darf alles verteilen.",
        "Die Schuhe sind schon reserviert."
      ],
      [
        "Was verspricht Niko am Ende?",
        "Niemandem etwas aus der Kiste zu versprechen.",
        "Die Schuhe sofort zu verkaufen.",
        "Die Kiste wegzuwerfen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "braunes-paar-unten": [
    "Dein braunes Paar steht unten im Regal.",
    "Ich lasse deine Schuhe hier.",
    "Der kommt in die kleine Schale daneben."
  ],
  "senkel-zwei-merkmale": [
    "Der kurze hier hat schwarze Enden.",
    "Soll ich sie zurück in die Schachtel legen?",
    "Einen Ersatz haben wir also noch nicht ausgewählt."
  ],
  "kiste-erst-fragen": [
    "Ich habe noch nicht entschieden, ob ich sie behalte.",
    "dass man vorher fragen soll.",
    "Ich verspreche niemandem etwas daraus."
  ]
});

everydayDialogues.push(...[
  {
    "id": "rolle-im-korb",
    "level": "A1",
    "title": [
      "Unter dem Regal",
      "تحت الرف"
    ],
    "lines": [
      [
        "Mila",
        "Ich suche die Fusselrolle. Liegt sie neben der Bürste?",
        "بدور على رول الوبر. هو جنب الفرشة؟"
      ],
      [
        "Sami",
        "Nein, schau in den kleinen Korb unter dem Regal.",
        "لأ، بصي في السلة الصغيرة تحت الرف."
      ],
      [
        "Mila",
        "Hier sind zwei Handtücher. Ah, die Rolle liegt dazwischen.",
        "هنا فيه فوطتين. آه، الرول بينهم."
      ],
      [
        "Sami",
        "Genau, die mit dem grünen Griff.",
        "بالظبط، اللي إيده خضرا."
      ],
      [
        "Mila",
        "Ich lege sie nachher wieder in den Korb.",
        "هرجعه للسلة بعدين."
      ],
      [
        "Sami",
        "Danke. Die Bürste nehme ich mit in mein Zimmer.",
        "شكراً. هاخد الفرشة معايا أوضتي."
      ],
      [
        "Mila",
        "Gut, das weiße Tuch lasse ich oben liegen.",
        "تمام، هسيب الفوطة البيضا فوق."
      ]
    ],
    "q": [
      [
        "Wo soll Mila suchen?",
        "Im Korb unter dem Regal.",
        "In einem Schrank im Bad.",
        "Unter ihrem Bett."
      ],
      [
        "Was hat einen grünen Griff?",
        "Die Fusselrolle.",
        "Die Bürste.",
        "Der Korb."
      ],
      [
        "Was bleibt oben auf dem Regal?",
        "Das weiße Tuch.",
        "Der Pullover.",
        "Samis Tasche."
      ]
    ]
  },
  {
    "id": "waschbrett-ganz-im-bild",
    "level": "A2",
    "title": [
      "Noch einmal ohne das Tuch",
      "تاني من غير الفوطة"
    ],
    "lines": [
      [
        "Leyla",
        "Ist das ein Waschbrett?",
        "ده لوح غسيل؟"
      ],
      [
        "Vater",
        "Ja, es gehört deiner Großmutter. Sie hat früher damit gewaschen.",
        "آه، بتاع جدتك. كانت بتغسل عليه زمان."
      ],
      [
        "Leyla",
        "Ich mache ein Foto für unser Familienalbum.",
        "هصور صورة لألبوم العيلة."
      ],
      [
        "Vater",
        "Das Tuch verdeckt den unteren Rand. Nimm es bitte weg.",
        "الفوطة مغطية الحافة اللي تحت. شيليها لو سمحتي."
      ],
      [
        "Leyla",
        "Jetzt sieht man das ganze Brett. Wie alt ist es?",
        "دلوقتي اللوح كله باين. عمره قد إيه؟"
      ],
      [
        "Vater",
        "Das weiß ich nicht genau. Wir fragen deine Großmutter später.",
        "مش عارف بالظبط. نسأل جدتك بعدين."
      ],
      [
        "Leyla",
        "Dann schreibe ich erst einmal keine Jahreszahl dazu.",
        "يبقى مش هكتب معاه سنة دلوقتي."
      ]
    ],
    "q": [
      [
        "Wofür macht Leyla das Foto?",
        "Für das Familienalbum.",
        "Für eine Verkaufsanzeige.",
        "Für einen Reisepass."
      ],
      [
        "Was soll sie vor dem zweiten Foto entfernen?",
        "Das Tuch.",
        "Den Griff des Brettes.",
        "Das ganze Regal."
      ],
      [
        "Warum schreibt sie keine Jahreszahl?",
        "Das genaue Alter ist noch unklar.",
        "Sie kann keine Zahlen schreiben.",
        "Das Brett hat kein Muster."
      ]
    ]
  },
  {
    "id": "hemd-erst-naehen",
    "level": "A2",
    "title": [
      "Das mit dem fehlenden Knopf",
      "اللي ناقصه زرار"
    ],
    "lines": [
      [
        "Karim",
        "Ich lege die beiden blauen Hemden in den Korb.",
        "هحط القميصين الزرق في السلة."
      ],
      [
        "Ines",
        "Warte, das mit dem fehlenden Knopf möchte ich erst reparieren.",
        "استنى، اللي ناقصه زرار عايزة أصلحه الأول."
      ],
      [
        "Karim",
        "Ach, deshalb liegt der Zettel darauf.",
        "آه، عشان كده عليه الورقة."
      ],
      [
        "Ines",
        "Ja. Bitte leg dieses Hemd getrennt auf den Tisch.",
        "آه. حط القميص ده لوحده على الترابيزة لو سمحت."
      ],
      [
        "Karim",
        "Das andere bleibt also im Korb.",
        "يبقى التاني يفضل في السلة."
      ],
      [
        "Ines",
        "Genau. Ich ergänze noch: fehlender Knopf am linken Ärmel.",
        "بالظبط. هضيف كمان: ناقصه زرار في الكم الشمال."
      ],
      [
        "Karim",
        "Gut, nur blau wäre bei zwei blauen Hemden nicht eindeutig.",
        "تمام، أزرق بس مش هتبقى واضحة مع قميصين زرق."
      ]
    ],
    "q": [
      [
        "Was soll zuerst mit einem Hemd passieren?",
        "Es soll repariert werden.",
        "Es soll verkauft werden.",
        "Es soll jemand abholen."
      ],
      [
        "Wohin legt Karim dieses Hemd?",
        "Getrennt auf den Tisch.",
        "Zurück zu beiden Hemden im Korb.",
        "Auf das Waschbrett."
      ],
      [
        "Was ergänzt Ines?",
        "Fehlender Knopf am linken Ärmel.",
        "Weiße Streifen am Kragen.",
        "Eine fertige Waschtemperatur."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "rolle-im-korb": [
    "schau in den kleinen Korb unter dem Regal.",
    "die mit dem grünen Griff.",
    "das weiße Tuch lasse ich oben liegen."
  ],
  "waschbrett-ganz-im-bild": [
    "für unser Familienalbum.",
    "Das Tuch verdeckt den unteren Rand. Nimm es bitte weg.",
    "Das weiß ich nicht genau."
  ],
  "hemd-erst-naehen": [
    "möchte ich erst reparieren.",
    "Bitte leg dieses Hemd getrennt auf den Tisch.",
    "fehlender Knopf am linken Ärmel."
  ]
});

everydayDialogues.push(...[
  {
    "id": "linker-haken",
    "level": "A1",
    "title": [
      "Nicht an den freien Haken",
      "مش في العلاقة الفاضية"
    ],
    "lines": [
      [
        "Noah",
        "An welchen Haken hängst du deinen Schlüssel?",
        "هتعلقي مفتاحك في أنهي علاقة؟"
      ],
      [
        "Dina",
        "An den linken. Am mittleren hängt schon der blaue Ring.",
        "في اللي شمال. الحلقة الزرقا متعلقة في اللي في النص خلاص."
      ],
      [
        "Noah",
        "Der rechte ist noch frei.",
        "اللي يمين لسه فاضية."
      ],
      [
        "Dina",
        "Ja, aber ich nehme wie immer den linken.",
        "آه، بس هاخد اللي شمال زي كل مرة."
      ],
      [
        "Noah",
        "Ich lege meine Mütze auf die Bank und stelle die Schuhe ins Regal.",
        "هحط طاقيتي على الدكة وأحط الجزمة في الجزامة."
      ],
      [
        "Dina",
        "Gut. Die braune Matte bleibt draußen vor der Tür.",
        "تمام. الدواسة البنية تفضل بره قدام الباب."
      ],
      [
        "Noah",
        "Es klingelt. Ich schaue erst nach, wer da ist.",
        "الجرس بيرن. هشوف الأول مين موجود."
      ]
    ],
    "q": [
      [
        "Welchen Haken nimmt Dina?",
        "Den linken.",
        "Den rechten.",
        "Den mittleren."
      ],
      [
        "Wohin legt Noah seine Mütze?",
        "Auf die Bank.",
        "Auf die Fußmatte.",
        "In den Briefkasten."
      ],
      [
        "Was macht Noah beim Klingeln zuerst?",
        "Er schaut nach, wer da ist.",
        "Er hängt alle Schlüssel um.",
        "Er nimmt einen fremden Schirm."
      ]
    ]
  },
  {
    "id": "schirm-erst-zuordnen",
    "level": "A2",
    "title": [
      "Der andere ist noch nicht meiner",
      "التانية مش أكيد بتاعتي"
    ],
    "lines": [
      [
        "Mona",
        "Gehört dir einer der schwarzen Schirme im Ständer?",
        "واحدة من الشماسي السُود اللي في الحامل بتاعتك؟"
      ],
      [
        "Felix",
        "Ja, der mit dem grünen Band. Den habe ich heute früh abgestellt.",
        "آه، اللي فيها الشريط الأخضر. حطيتها النهارده الصبح."
      ],
      [
        "Mona",
        "Dann bleibt der mit dem grauen Anhänger. Aber ich bin nicht sicher, ob er meiner ist.",
        "يبقى فاضلة اللي فيها العلامة الرمادي. بس مش متأكدة إذا كانت بتاعتي."
      ],
      [
        "Felix",
        "Du erinnerst dich nur an den gebogenen Griff?",
        "إنتي فاكرة الإيد المعقوفة بس؟"
      ],
      [
        "Mona",
        "Ja. Ich frage erst meine Mitbewohnerin.",
        "آه. هسأل الأول اللي ساكنة معايا."
      ],
      [
        "Felix",
        "Gut, ich nehme jetzt nur meinen mit.",
        "تمام، هاخد بتاعتي بس دلوقتي."
      ],
      [
        "Mona",
        "Den anderen lasse ich hier, bis ich eine Antwort habe.",
        "هسيب التانية هنا لحد ما يبقى معايا رد."
      ]
    ],
    "q": [
      [
        "Was kennzeichnet der Schirm von Felix?",
        "Das grüne Band.",
        "Der graue Anhänger.",
        "Ein roter Griff."
      ],
      [
        "Woran erinnert sich Mona sicher?",
        "An den gebogenen Griff.",
        "An eine rote Hülle.",
        "An ein gelbes Band."
      ],
      [
        "Was macht Mona mit dem anderen Schirm?",
        "Sie lässt ihn bis zur Klärung stehen.",
        "Sie nimmt ihn als Geschenk mit.",
        "Sie verkauft ihn sofort."
      ]
    ]
  },
  {
    "id": "nur-das-schild",
    "level": "A2",
    "title": [
      "Die Briefe bleiben an ihrem Platz",
      "الجوابات تفضل مكانها"
    ],
    "lines": [
      [
        "Rafi",
        "Ich habe deinen Namen auf dem Zettel gesehen. Soll deine Post aufs Schuhregal?",
        "شفت اسمك على الورقة. بريدك يتحط على الجزامة؟"
      ],
      [
        "Nora",
        "Nein. Nur das Namensschild am Briefkasten ist locker.",
        "لأ. لوحة الاسم على صندوق البريد بس هي اللي مفكوكة."
      ],
      [
        "Rafi",
        "Dann lasse ich die Briefe an ihrem Platz.",
        "يبقى أسيب الجوابات مكانها."
      ],
      [
        "Nora",
        "Danke. Ich möchte keine andere Zustellung.",
        "شكراً. مش عايزة طريقة توصيل تانية."
      ],
      [
        "Rafi",
        "Hast du die Reparatur schon vereinbart?",
        "اتفقتي على التصليح خلاص؟"
      ],
      [
        "Nora",
        "Noch nicht. Ich frage erst die zuständige Person im Haus.",
        "لسه. هسأل الأول الشخص المسؤول في العمارة."
      ],
      [
        "Rafi",
        "Verstanden. Der Zettel beschreibt nur das Problem mit dem Schild.",
        "فهمت. الورقة بتوصف بس مشكلة لوحة الاسم."
      ]
    ],
    "q": [
      [
        "Was ist locker?",
        "Das Namensschild am Briefkasten.",
        "Das ganze Schuhregal.",
        "Der Schirmständer."
      ],
      [
        "Was macht Rafi mit den Briefen?",
        "Er lässt sie an ihrem Platz.",
        "Er legt sie auf das Regal.",
        "Er öffnet sie für Nora."
      ],
      [
        "Welcher nächste Schritt ist noch offen?",
        "Nora fragt nach der Reparatur.",
        "Rafi hat alle Namen geändert.",
        "Nora hat den Briefkasten verkauft."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "linker-haken": [
    "ich nehme wie immer den linken.",
    "Ich lege meine Mütze auf die Bank",
    "Ich schaue erst nach, wer da ist."
  ],
  "schirm-erst-zuordnen": [
    "der mit dem grünen Band.",
    "Du erinnerst dich nur an den gebogenen Griff?",
    "Den anderen lasse ich hier, bis ich eine Antwort habe."
  ],
  "nur-das-schild": [
    "Nur das Namensschild am Briefkasten ist locker.",
    "Dann lasse ich die Briefe an ihrem Platz.",
    "Ich frage erst die zuständige Person im Haus."
  ]
});

everydayDialogues.push(...[
  {
    "id": "kanne-hinter-tisch",
    "level": "A1",
    "title": [
      "Hinter dem kleinen Tisch",
      "ورا الترابيزة الصغيرة"
    ],
    "lines": [
      [
        "Timo",
        "Wo ist die Gießkanne? Im Zimmer sehe ich sie nicht.",
        "كنكة سقي الزرع فين؟ مش شايفها جوه الأوضة."
      ],
      [
        "Lina",
        "Sie steht hinter dem kleinen Tisch auf dem Balkon.",
        "ورا الترابيزة الصغيرة في البلكونة."
      ],
      [
        "Timo",
        "Danke. Ich stelle sie neben den Blumentopf.",
        "شكراً. هحطها جنب قصيص الزرع."
      ],
      [
        "Lina",
        "Gut. Unter dem Topf bleibt der braune Untersetzer.",
        "تمام. الطبق البني يفضل تحت القصيص."
      ],
      [
        "Timo",
        "Soll der Klappstuhl neben der Tür bleiben?",
        "الكرسي يفضل جنب الباب؟"
      ],
      [
        "Lina",
        "Nein, ich stelle ihn an die Wand und lege mein Buch darauf.",
        "لأ، هحطه عند الحيطة وأحط كتابي عليه."
      ],
      [
        "Timo",
        "Der Wäscheständer bleibt auf der anderen Seite.",
        "والمنشر يفضل في الناحية التانية."
      ]
    ],
    "q": [
      [
        "Wo steht die Kanne?",
        "Hinter dem kleinen Tisch.",
        "Im Zimmer.",
        "Auf dem Stuhl."
      ],
      [
        "Was bleibt unter dem Topf?",
        "Der braune Untersetzer.",
        "Das Buch.",
        "Das blaue Tuch."
      ],
      [
        "Wohin kommt Linas Buch?",
        "Auf den Klappstuhl.",
        "Unter den Topf.",
        "An das Geländer."
      ]
    ]
  },
  {
    "id": "kasten-noch-am-boden",
    "level": "A2",
    "title": [
      "Erst Fragen sammeln",
      "الأول نجمع الأسئلة"
    ],
    "lines": [
      [
        "Eva",
        "Vielleicht könnten wir den Blumenkasten am Geländer aufhängen.",
        "يمكن نقدر نعلّق صندوق الزرع على السور."
      ],
      [
        "Nabil",
        "Wir haben aber noch keine passenden Halterungen.",
        "بس لسه معندناش حوامل مناسبة."
      ],
      [
        "Eva",
        "Stimmt. Dann bleibt er erst einmal auf dem Boden.",
        "صح. يبقى يفضل على الأرض دلوقتي."
      ],
      [
        "Nabil",
        "Wir müssen zuerst klären, was für diesen Balkon geeignet ist.",
        "لازم نعرف الأول إيه المناسب للبلكونة دي."
      ],
      [
        "Eva",
        "Ich schreibe die Länge des Kastens auf.",
        "هكتب طول الصندوق."
      ],
      [
        "Nabil",
        "Und wir sammeln Fragen, statt eine Befestigung zu erraten.",
        "ونجمع أسئلة بدل ما نخمن طريقة تثبيت."
      ],
      [
        "Eva",
        "Genau. Ausgewählt oder gekauft haben wir noch nichts.",
        "بالظبط. لسه ماخترناش ولا اشترينا حاجة."
      ]
    ],
    "q": [
      [
        "Wo bleibt der Kasten zunächst?",
        "Auf dem Boden.",
        "Außen am Geländer.",
        "Auf dem Wäscheständer."
      ],
      [
        "Was möchten sie zuerst klären?",
        "Welche Lösung für diesen Balkon geeignet ist.",
        "Wer den Stuhl schon gekauft hat.",
        "Ob Eva einen Reisepass braucht."
      ],
      [
        "Welcher Stand gilt am Ende?",
        "Es ist noch nichts ausgewählt oder gekauft.",
        "Die Halterung ist schon gekauft.",
        "Der Kasten hängt bereits außen."
      ]
    ]
  },
  {
    "id": "schale-zum-topf",
    "level": "A2",
    "title": [
      "Der gehört zur Pflanze",
      "ده بتاع الزرعة"
    ],
    "lines": [
      [
        "Leon",
        "Soll ich diesen runden Untersetzer als Teller auf den Tisch stellen?",
        "أحط طبق القصيص المدور ده على الترابيزة كطبق أكل؟"
      ],
      [
        "Sara",
        "Nein, der gehört zum Blumentopf und ist nicht fürs Essen gedacht.",
        "لأ، ده بتاع قصيص الزرع ومش للأكل."
      ],
      [
        "Leon",
        "Dann lasse ich ihn unter dem Topf.",
        "يبقى أسيبه تحت القصيص."
      ],
      [
        "Sara",
        "Danke. Der saubere Teller liegt schon auf dem Tisch.",
        "شكراً. طبق الأكل النضيف على الترابيزة خلاص."
      ],
      [
        "Leon",
        "Ich klappe noch den Wäscheständer zusammen und stelle ihn ins Zimmer.",
        "هطبق كمان المنشر وأحطه جوه الأوضة."
      ],
      [
        "Sara",
        "Gut. Ich rücke den Klappstuhl näher an den Tisch.",
        "تمام. هقرب الكرسي من الترابيزة."
      ],
      [
        "Leon",
        "Und bevor ich etwas anderes umstelle, frage ich nach.",
        "وقبل ما أغير مكان حاجة تانية، هسأل."
      ]
    ],
    "q": [
      [
        "Wozu gehört der Untersetzer?",
        "Zum Blumentopf.",
        "Zum Teegeschirr.",
        "Zu Leons Rucksack."
      ],
      [
        "Wo liegt der saubere Teller?",
        "Auf dem Tisch.",
        "Unter der Pflanze.",
        "Auf dem Geländer."
      ],
      [
        "Was will Leon vor weiterem Umstellen tun?",
        "Nachfragen.",
        "Einen Kauf abschließen.",
        "Den Untersetzer wegwerfen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "kanne-hinter-tisch": [
    "hinter dem kleinen Tisch auf dem Balkon.",
    "Unter dem Topf bleibt der braune Untersetzer.",
    "ich stelle ihn an die Wand und lege mein Buch darauf."
  ],
  "kasten-noch-am-boden": [
    "Dann bleibt er erst einmal auf dem Boden.",
    "was für diesen Balkon geeignet ist.",
    "Ausgewählt oder gekauft haben wir noch nichts."
  ],
  "schale-zum-topf": [
    "der gehört zum Blumentopf",
    "Der saubere Teller liegt schon auf dem Tisch.",
    "bevor ich etwas anderes umstelle, frage ich nach."
  ]
});

everydayDialogues.push(...[
  {
    "id": "schal-am-buegel",
    "level": "A1",
    "title": [
      "Neben der Jacke",
      "جنب الجاكيت"
    ],
    "lines": [
      [
        "Sami",
        "Ich finde meinen grauen Schal nicht.",
        "مش لاقي الكوفية الرمادي بتاعتي."
      ],
      [
        "Mila",
        "Er hängt am Kleiderbügel neben deiner Jacke.",
        "متعلقة على الشماعة جنب جاكيتك."
      ],
      [
        "Sami",
        "Ah, danke. Und wo sind meine Handschuhe?",
        "آه، شكراً. والجوانتيات بتاعتي فين؟"
      ],
      [
        "Mila",
        "Auf der oberen Ablage. Ich gebe sie dir.",
        "على الرف اللي فوق. هديهالك."
      ],
      [
        "Sami",
        "Gehört der braune Hut am Kleiderständer dir?",
        "القبعة البني على الشماعة الواقفة دي بتاعتك؟"
      ],
      [
        "Mila",
        "Ja. Ich setze ihn kurz vor dem Wandspiegel auf.",
        "آه. هلبسها قدام مراية الحيطة بسرعة."
      ],
      [
        "Sami",
        "Gut, dann können wir gleich losgehen.",
        "تمام، يبقى نقدر نمشي حالاً."
      ]
    ],
    "q": [
      [
        "Wo hängt Samis Schal?",
        "Neben seiner Jacke.",
        "Im Bad.",
        "Unter dem Schuhschrank."
      ],
      [
        "Wo liegen die Handschuhe?",
        "Auf der oberen Ablage.",
        "In Milas Tasche.",
        "Auf dem Boden."
      ],
      [
        "Was möchte Mila vor dem Spiegel tun?",
        "Den Hut aufsetzen.",
        "Den Schrank kaufen.",
        "Die Schuhe putzen."
      ]
    ]
  },
  {
    "id": "kein-sicheres-paar",
    "level": "A2",
    "title": [
      "Erst genauer hinsehen",
      "الأول نبص كويس"
    ],
    "lines": [
      [
        "Ben",
        "Die beiden schwarzen Handschuhe lege ich als Paar zusammen.",
        "هحط فرد الجوانتي السود مع بعض كزوج."
      ],
      [
        "Nora",
        "Warte bitte. Einer ist viel kleiner als der andere.",
        "استنى لو سمحت. واحدة أصغر بكتير من التانية."
      ],
      [
        "Ben",
        "Stimmt, die ähnliche Farbe reicht nicht.",
        "صح، تشابه اللون مش كفاية."
      ],
      [
        "Nora",
        "Meinen zweiten blauen habe ich in der Jackentasche gefunden.",
        "لقيت الفردة الكحلي التانية بتاعتي في جيب الجاكيت."
      ],
      [
        "Ben",
        "Und was machen wir mit den schwarzen?",
        "ونعمل إيه بالسود؟"
      ],
      [
        "Nora",
        "Wir lassen sie einzeln liegen und fragen später nach.",
        "نسيبهم منفصلين ونسأل بعدين."
      ],
      [
        "Ben",
        "Dann schreiben wir keinen Namen dazu und werfen nichts weg.",
        "يبقى مانكتبش اسم جنبهم ومانرميش حاجة."
      ]
    ],
    "q": [
      [
        "Was fällt Nora an den schwarzen Handschuhen auf?",
        "Sie sind unterschiedlich groß.",
        "Sie sind beide rot.",
        "Sie fehlen beide."
      ],
      [
        "Wo war Noras zweiter blauer Handschuh?",
        "In der Jackentasche.",
        "Im Schuh.",
        "Auf dem Balkon."
      ],
      [
        "Was passiert mit den schwarzen Handschuhen?",
        "Sie bleiben einzeln liegen.",
        "Sie werden weggeworfen.",
        "Sie werden Ben zugeordnet."
      ]
    ]
  },
  {
    "id": "staender-zurueckstellen",
    "level": "A2",
    "title": [
      "Noch keine feste Änderung",
      "لسه مفيش تغيير نهائي"
    ],
    "lines": [
      [
        "Leon",
        "Sollen wir den Kleiderständer an die andere Wand stellen?",
        "ننقل الشماعة الواقفة للحيطة التانية؟"
      ],
      [
        "Yara",
        "Dort hängt der Wandspiegel. Lass uns erst den freien Bereich ausmessen.",
        "هناك مراية الحيطة. خلينا الأول نقيس المساحة الفاضية."
      ],
      [
        "Leon",
        "Ich hänge die Jacken vorübergehend in den Kleiderschrank.",
        "هعلق الجواكيت مؤقتاً في دولاب الهدوم."
      ],
      [
        "Yara",
        "Gut. Ich prüfe, ob sich die Tür des Schuhschranks öffnen lässt.",
        "تمام. هشوف إذا باب الجزامة بيتفتح."
      ],
      [
        "Leon",
        "Nehmen wir den Spiegel dafür ab?",
        "نفك المراية عشان كده؟"
      ],
      [
        "Yara",
        "Nein. Wir ändern heute nichts dauerhaft und bohren nicht.",
        "لأ. النهارده مش هنغير حاجة بشكل دائم ومش هنخرم."
      ],
      [
        "Leon",
        "Dann kommt der Ständer danach wieder an seinen bisherigen Platz.",
        "يبقى الشماعة ترجع بعد كده لمكانها القديم."
      ]
    ],
    "q": [
      [
        "Was wollen sie zuerst tun?",
        "Den freien Bereich ausmessen.",
        "Einen neuen Spiegel kaufen.",
        "Löcher bohren."
      ],
      [
        "Wohin kommen die Jacken vorübergehend?",
        "In den Kleiderschrank.",
        "Ins Treppenhaus.",
        "Auf die Schuhe."
      ],
      [
        "Was wird heute nicht gemacht?",
        "Eine dauerhafte Änderung.",
        "Die Schranktür geprüft.",
        "Der freie Bereich gemessen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "schal-am-buegel": [
    "am Kleiderbügel neben deiner Jacke.",
    "Auf der oberen Ablage.",
    "Ich setze ihn kurz vor dem Wandspiegel auf."
  ],
  "kein-sicheres-paar": [
    "Einer ist viel kleiner als der andere.",
    "in der Jackentasche gefunden.",
    "Wir lassen sie einzeln liegen"
  ],
  "staender-zurueckstellen": [
    "erst den freien Bereich ausmessen.",
    "vorübergehend in den Kleiderschrank.",
    "Wir ändern heute nichts dauerhaft"
  ]
});

everydayDialogues.push(...[
  {
    "id": "mittlerer-haken",
    "level": "A1",
    "title": [
      "Der rechte bleibt frei",
      "اليمين يفضل فاضي"
    ],
    "lines": [
      [
        "Paul",
        "Wohin kommt das blaue Handtuch?",
        "الفوطة الزرقا تتحط فين؟"
      ],
      [
        "Mina",
        "An den mittleren Handtuchhaken, bitte.",
        "على خطاف الفوط اللي في النص لو سمحت."
      ],
      [
        "Paul",
        "Dann bleibt der rechte Haken frei.",
        "يبقى الخطاف اليمين يفضل فاضي."
      ],
      [
        "Mina",
        "Genau. Der Zahnputzbecher steht links neben dem Waschbecken.",
        "بالظبط. كوباية فرش السنان على شمال الحوض."
      ],
      [
        "Paul",
        "Ich lege die Seife in die Schale auf der rechten Seite.",
        "هحط الصابونة في الصبانة في الناحية اليمين."
      ],
      [
        "Mina",
        "Und ich suche die leere Flasche hinter dem Duschvorhang.",
        "وأنا هدور على الإزازة الفاضية ورا ستارة الدش."
      ],
      [
        "Paul",
        "Den Deckel setze ich wieder auf den Wäschekorb.",
        "وهرجع الغطا على سبت الغسيل."
      ]
    ],
    "q": [
      [
        "An welchen Haken kommt das Handtuch?",
        "An den mittleren.",
        "An den rechten.",
        "An keinen."
      ],
      [
        "Wo steht der Zahnputzbecher?",
        "Links neben dem Waschbecken.",
        "Im Wäschekorb.",
        "Auf der Badematte."
      ],
      [
        "Wohin kommt der Deckel?",
        "Wieder auf den Wäschekorb.",
        "Unter die Seifenschale.",
        "In den Becher."
      ]
    ]
  },
  {
    "id": "kein-tablett-im-bad",
    "level": "A2",
    "title": [
      "Nicht als Ablage gedacht",
      "مش معمول كرف"
    ],
    "lines": [
      [
        "Lea",
        "Kann ich diese Flaschen auf das runde Tablett stellen?",
        "ممكن أحط الإزازات دي على الصينية المدورة؟"
      ],
      [
        "Amir",
        "Das ist der Deckel vom Wäschekorb, kein Tablett.",
        "ده غطا سبت الغسيل، مش صينية."
      ],
      [
        "Lea",
        "Ach so. Dann stelle ich sie auf das freie Regal.",
        "آه فهمت. يبقى أحطهم على الرف الفاضي."
      ],
      [
        "Amir",
        "Danke. Ich setze den Deckel wieder auf den Korb.",
        "شكراً. هرجع الغطا على السبت."
      ],
      [
        "Lea",
        "Der rechte Handtuchhaken bleibt für dich frei.",
        "خطاف الفوط اليمين يفضل فاضي ليك."
      ],
      [
        "Amir",
        "Gut. Unsere Zahnbürsten tauschen wir nicht.",
        "تمام. فرش السنان بتاعتنا مانبدلهاش."
      ],
      [
        "Lea",
        "Und bei unbekannten Dingen frage ich erst nach dem Zweck.",
        "ولما ألاقي حاجة مش عارفاها هسأل الأول هي معمولة لإيه."
      ]
    ],
    "q": [
      [
        "Was ist das runde Teil?",
        "Der Deckel des Wäschekorbs.",
        "Ein Tablett.",
        "Eine Seifenschale."
      ],
      [
        "Wo stellt Lea die Flaschen hin?",
        "Auf das freie Regal.",
        "Auf den Deckel.",
        "In den Zahnputzbecher."
      ],
      [
        "Was will Lea bei unbekannten Dingen tun?",
        "Zuerst nach dem Zweck fragen.",
        "Sofort alles wegwerfen.",
        "Den Preis erraten."
      ]
    ]
  },
  {
    "id": "ring-getrennt-lassen",
    "level": "A2",
    "title": [
      "Passt der wirklich dazu?",
      "هو فعلاً مناسب ليها؟"
    ],
    "lines": [
      [
        "Tom",
        "Neben dem Wäschekorb liegt ein ähnlicher Ring. Nehmen wir den?",
        "جنب سبت الغسيل فيه حلقة شبههم. ناخدها؟"
      ],
      [
        "Nina",
        "Ich weiß noch nicht, ob er zu diesem Vorhang passt.",
        "لسه مش عارفة إذا كانت مناسبة للستارة دي."
      ],
      [
        "Tom",
        "Dann lege ich ihn getrennt neben die anderen Ringe.",
        "يبقى أحطها منفصلة جنب باقي الحلقات."
      ],
      [
        "Nina",
        "Ja. Wir sehen später die Angaben zum Vorhang nach.",
        "آه. نراجع معلومات الستارة بعدين."
      ],
      [
        "Tom",
        "Bestellen wir jetzt schon Ersatz?",
        "نطلب بديل من دلوقتي؟"
      ],
      [
        "Nina",
        "Nein, wir haben noch nichts ausgewählt.",
        "لأ، لسه ماخترناش حاجة."
      ],
      [
        "Tom",
        "Der Vorhang bleibt bis dahin zusammengelegt auf der Ablage.",
        "الستارة تفضل لحد وقتها متطبقة على الرف."
      ]
    ],
    "q": [
      [
        "Was ist über den gefundenen Ring noch unklar?",
        "Ob er zum Vorhang passt.",
        "Ob er neben dem Korb lag.",
        "Ob Tom ihn gesehen hat."
      ],
      [
        "Was wollen sie später nachsehen?",
        "Die Angaben zum Vorhang.",
        "Den Fahrplan.",
        "Die Größe der Zahnbürste."
      ],
      [
        "Wie bleibt der Vorhang zunächst?",
        "Zusammengelegt auf der Ablage.",
        "Fertig montiert.",
        "Im Wäschekorb versteckt."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "mittlerer-haken": [
    "An den mittleren Handtuchhaken",
    "links neben dem Waschbecken.",
    "wieder auf den Wäschekorb."
  ],
  "kein-tablett-im-bad": [
    "der Deckel vom Wäschekorb",
    "auf das freie Regal.",
    "frage ich erst nach dem Zweck."
  ],
  "ring-getrennt-lassen": [
    "ob er zu diesem Vorhang passt.",
    "die Angaben zum Vorhang nach.",
    "zusammengelegt auf der Ablage."
  ]
});

everydayDialogues.push(...[
  {
    "id": "kelle-am-haken",
    "level": "A1",
    "title": [
      "Noch ist alles aus",
      "لسه كله مطفي"
    ],
    "lines": [
      [
        "Karim",
        "Wo ist die Schöpfkelle?",
        "الكبشة فين؟"
      ],
      [
        "Lara",
        "Sie hängt neben der Tür am Haken.",
        "متعلقة على الخطاف جنب الباب."
      ],
      [
        "Karim",
        "Und das Sieb steht noch im Schrank, richtig?",
        "والمصفاة لسه في الدولاب، صح؟"
      ],
      [
        "Lara",
        "Ja. Stell es bitte neben die große Schüssel.",
        "آه. حطها جنب الطبق الغويط الكبير لو سمحت."
      ],
      [
        "Karim",
        "Ist der Wasserkocher schon an?",
        "الكاتل شغال خلاص؟"
      ],
      [
        "Lara",
        "Nein. Auch der Herd ist noch aus. Wir stellen zuerst alles bereit.",
        "لأ. البوتاجاز كمان لسه مطفي. الأول نجهز كل حاجة."
      ],
      [
        "Karim",
        "Dann lege ich den Pfannenwender neben die Pfanne.",
        "يبقى أحط مقلب الطاسة جنب الطاسة."
      ]
    ],
    "q": [
      [
        "Wo ist die Kelle?",
        "Am Haken neben der Tür.",
        "In der Schüssel.",
        "Im Kühlschrank."
      ],
      [
        "Wohin soll das Sieb?",
        "Neben die große Schüssel.",
        "Unter den Tisch.",
        "Auf den Herd."
      ],
      [
        "Was tun sie zuerst?",
        "Alles bereitstellen.",
        "Den Herd einschalten.",
        "Den Wasserkocher kaufen."
      ]
    ]
  },
  {
    "id": "bruehe-nicht-weg",
    "level": "A2",
    "title": [
      "Was soll mit der Flüssigkeit passieren?",
      "نعمل إيه في السائل؟"
    ],
    "lines": [
      [
        "Ben",
        "Ich nehme das Sieb und gieße alles aus.",
        "هاخد المصفاة وأصفي كل اللي موجود."
      ],
      [
        "Dalia",
        "Warte. Möchtest du die Brühe behalten oder wegschütten?",
        "استنى. عايز تحتفظ بالشوربة السايلة ولا ترميها؟"
      ],
      [
        "Ben",
        "Behalten. Sie soll später wieder zum Gemüse kommen.",
        "أحتفظ بيها. هترجع للخضار بعدين."
      ],
      [
        "Dalia",
        "Dann stellen wir zuerst eine zweite Schüssel bereit.",
        "يبقى نجهز الأول طبق غويط تاني."
      ],
      [
        "Ben",
        "Die Kelle liegt neben dem Topf. Das Sieb bleibt erst einmal hier.",
        "الكبشة جنب الحلة. والمصفاة تفضل هنا دلوقتي."
      ],
      [
        "Dalia",
        "Genau. Wir klären erst, welche Teile wir getrennt brauchen.",
        "بالظبط. نحدد الأول أنهي أجزاء محتاجينها منفصلة."
      ],
      [
        "Ben",
        "Gemüsestücke und Brühe sollen beide erhalten bleiben.",
        "قطع الخضار والشوربة السايلة الاتنين يفضلوا موجودين."
      ]
    ],
    "q": [
      [
        "Was möchte Ben mit der Brühe tun?",
        "Sie behalten.",
        "Sie wegschütten.",
        "Sie durch Wasser ersetzen."
      ],
      [
        "Was wird zuerst bereitgestellt?",
        "Eine zweite Schüssel.",
        "Eine neue Pfanne.",
        "Eine Einkaufsliste."
      ],
      [
        "Was soll erhalten bleiben?",
        "Gemüsestücke und Brühe.",
        "Nur das Gemüse.",
        "Nur die Brühe."
      ]
    ]
  },
  {
    "id": "kaese-in-eigene-schale",
    "level": "A2",
    "title": [
      "Nicht gleich über alles",
      "مش على الأكل كله فوراً"
    ],
    "lines": [
      [
        "Nora",
        "Soll ich den Käse gleich über das ganze Essen geben?",
        "أحط الجبنة على الأكل كله فوراً؟"
      ],
      [
        "Elias",
        "Bitte noch nicht. Wir wissen nicht, ob alle Käse möchten.",
        "لسه لو سمحتي. إحنا مش عارفين إذا كلهم عايزين جبنة."
      ],
      [
        "Nora",
        "Dann stelle ich ihn in einer eigenen Schale auf den Tisch.",
        "يبقى أحطها في طبق لوحدها على الترابيزة."
      ],
      [
        "Elias",
        "Mit einem eigenen Löffel dazu, bitte.",
        "ومعاها معلقة خاصة بيها لو سمحتي."
      ],
      [
        "Nora",
        "Die Reibe bleibt in der Küche.",
        "المبشرة تفضل في المطبخ."
      ],
      [
        "Elias",
        "Und vor dem nächsten Essen fragen wir wieder nach Wünschen.",
        "وقبل الأكلة الجاية نسأل تاني عن الرغبات."
      ],
      [
        "Nora",
        "Ja. Die heutige Lösung ist keine feste Regel für alle.",
        "آه. حل النهارده مش قاعدة ثابتة لكل الناس."
      ]
    ],
    "q": [
      [
        "Warum bleibt der Käse zunächst getrennt?",
        "Nicht alle Wünsche sind bekannt.",
        "Es gibt keinen Löffel.",
        "Nora möchte nichts essen."
      ],
      [
        "Wo bleibt die Reibe?",
        "In der Küche.",
        "Im Wasserkocher.",
        "Unter dem Tisch."
      ],
      [
        "Was tun sie vor dem nächsten Essen?",
        "Wieder nach Wünschen fragen.",
        "Nichts mehr besprechen.",
        "Immer dieselbe Vorliebe annehmen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "kelle-am-haken": [
    "neben der Tür am Haken.",
    "neben die große Schüssel.",
    "Wir stellen zuerst alles bereit."
  ],
  "bruehe-nicht-weg": [
    "Behalten.",
    "zuerst eine zweite Schüssel bereit.",
    "Gemüsestücke und Brühe sollen beide erhalten bleiben."
  ],
  "kaese-in-eigene-schale": [
    "Wir wissen nicht, ob alle Käse möchten.",
    "Die Reibe bleibt in der Küche.",
    "vor dem nächsten Essen fragen wir wieder nach Wünschen."
  ]
});

everydayDialogues.push(...[
  {
    "id": "graues-kissen-sessel",
    "level": "A1",
    "title": [
      "Das graue kommt auf den Sessel",
      "الرمادي يتحط على الكرسي الكبير"
    ],
    "lines": [
      [
        "Sami",
        "Welches Kissen kommt an das Kopfende?",
        "أنهي مخدة تتحط عند راس السرير؟"
      ],
      [
        "Emma",
        "Das weiße mit dem braunen Muster.",
        "البيضا اللي عليها النقشة البني."
      ],
      [
        "Sami",
        "Dann lege ich das graue auf den Sessel.",
        "يبقى أحط الرمادي على الكرسي الكبير."
      ],
      [
        "Emma",
        "Der Wecker steht rechts neben der Nachttischlampe.",
        "المنبّه على يمين الأباجورة."
      ],
      [
        "Sami",
        "Gut. Ich lege mein Buch daneben.",
        "تمام. هحط كتابي جنبه."
      ],
      [
        "Emma",
        "Ich ziehe den Vorhang zur Seite. Die Lampe bleibt aus.",
        "هزيح الستارة على جنب. الأباجورة تفضل مطفية."
      ],
      [
        "Sami",
        "Die Decke kommt kurz auf den Sessel. Ich ziehe noch das Laken glatt.",
        "البطانية تتحط شوية على الكرسي الكبير. لسه هفرد الملاية."
      ]
    ],
    "q": [
      [
        "Wohin kommt das graue Kissen?",
        "Auf den Sessel.",
        "Unter die Matratze.",
        "Auf die Lampe."
      ],
      [
        "Wo steht der Wecker?",
        "Rechts neben der Nachttischlampe.",
        "Im Schrank.",
        "Am Fußende."
      ],
      [
        "Was macht Sami noch mit dem Laken?",
        "Er zieht es glatt.",
        "Er verkauft es.",
        "Er schneidet es durch."
      ]
    ]
  },
  {
    "id": "neue-weckzeit",
    "level": "A2",
    "title": [
      "Der alte Zettel gilt heute nicht",
      "الورقة القديمة مش سارية النهارده"
    ],
    "lines": [
      [
        "Malik",
        "Auf dem Zettel steht sechs Uhr. Soll ich den Wecker so stellen?",
        "مكتوب على الورقة الساعة 6. أظبط المنبّه كده؟"
      ],
      [
        "Jana",
        "Nein, diesmal bitte sieben Uhr. Der Zettel ist vom letzten Besuch.",
        "لأ، المرة دي الساعة 7 لو سمحت. الورقة من الزيارة اللي فاتت."
      ],
      [
        "Malik",
        "Gut. Hier ist die Einstellung. Schau bitte noch einmal nach.",
        "تمام. أهو الإعداد. راجعيه مرة كمان لو سمحتي."
      ],
      [
        "Jana",
        "Ja, sieben Uhr. Das stimmt.",
        "آه، الساعة 7. كده صح."
      ],
      [
        "Malik",
        "Brauchst du später die Nachttischlampe?",
        "هتحتاجي الأباجورة بعدين؟"
      ],
      [
        "Jana",
        "Darum kümmere ich mich selbst. Den Vorhang lasse ich jetzt noch offen.",
        "هتصرف في ده بنفسي. الستارة هسيبها مفتوحة دلوقتي."
      ],
      [
        "Malik",
        "Den alten Zettel lege ich zu meinen anderen Notizen.",
        "هحط الورقة القديمة مع باقي ملاحظاتي."
      ]
    ],
    "q": [
      [
        "Welche Zeit gilt diesmal?",
        "Sieben Uhr.",
        "Sechs Uhr.",
        "Fünf Uhr."
      ],
      [
        "Was soll Jana prüfen?",
        "Die Einstellung des Weckers.",
        "Den Preis der Matratze.",
        "Die Farbe der Decke."
      ],
      [
        "Wohin kommt der alte Zettel?",
        "Zu Maliks anderen Notizen.",
        "Unter Janas Kissen.",
        "An den Vorhang."
      ]
    ]
  },
  {
    "id": "breiten-nicht-mischen",
    "level": "A2",
    "title": [
      "Die Zahlen bleiben erst getrennt",
      "الأرقام تفضل منفصلة الأول"
    ],
    "lines": [
      [
        "Omar",
        "Auf dem Einkaufszettel stehen neunzig Zentimeter.",
        "على ورقة المشتريات مكتوب 90 سنتيمتر."
      ],
      [
        "Lea",
        "Auf dem Etikett dieser Matratze stehen hundert.",
        "على بطاقة المرتبة دي مكتوب 100."
      ],
      [
        "Omar",
        "Soll ich die Zahl auf dem Zettel ändern?",
        "أغيّر الرقم اللي على الورقة؟"
      ],
      [
        "Lea",
        "Noch nicht. Wir wissen nicht, ob die Notiz zu dieser Matratze gehört.",
        "لسه. إحنا مش عارفين إذا الملاحظة تخص المرتبة دي."
      ],
      [
        "Omar",
        "Dann halte ich fest, woher die beiden Angaben kommen.",
        "يبقى أسجل المعلومتين جايين منين."
      ],
      [
        "Lea",
        "Genau. Wir wählen jetzt keine neue Matratze aus.",
        "بالظبط. مش هنختار مرتبة جديدة دلوقتي."
      ],
      [
        "Omar",
        "Die Unterlagen vergleichen wir später in Ruhe.",
        "نقارن الورق بعدين بهدوء."
      ]
    ],
    "q": [
      [
        "Welche Zahl steht auf dem Einkaufszettel?",
        "Neunzig Zentimeter.",
        "Hundert Zentimeter.",
        "Siebzig Zentimeter."
      ],
      [
        "Warum wird die Zahl noch nicht geändert?",
        "Die Zuordnung der Notiz ist unklar.",
        "Es gibt keine Matratze.",
        "Omar hat schon bestellt."
      ],
      [
        "Was wollen sie später vergleichen?",
        "Die Unterlagen.",
        "Die Preise aller Lampen.",
        "Die Farbe des Vorhangs."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "graues-kissen-sessel": [
    "das graue auf den Sessel.",
    "rechts neben der Nachttischlampe.",
    "Ich ziehe noch das Laken glatt."
  ],
  "neue-weckzeit": [
    "diesmal bitte sieben Uhr.",
    "Hier ist die Einstellung. Schau bitte noch einmal nach.",
    "zu meinen anderen Notizen."
  ],
  "breiten-nicht-mischen": [
    "Auf dem Einkaufszettel stehen neunzig Zentimeter.",
    "Wir wissen nicht, ob die Notiz zu dieser Matratze gehört.",
    "Die Unterlagen vergleichen wir später in Ruhe."
  ]
});

everydayDialogues.push(...[
  {
    "id": "brille-neben-kissen",
    "level": "A1",
    "title": [
      "Nicht auf dem Couchtisch",
      "مش على ترابيزة الأنترية"
    ],
    "lines": [
      [
        "Noah",
        "Liegt meine Brille auf dem Couchtisch?",
        "نضارتي على ترابيزة الأنترية؟"
      ],
      [
        "Salma",
        "Nein. Da liegen nur das Buch und die Fernbedienung.",
        "لأ. هناك الكتاب والريموت بس."
      ],
      [
        "Noah",
        "Wo soll ich dann suchen?",
        "أدور فين طيب؟"
      ],
      [
        "Salma",
        "Auf dem Sofa, neben dem blauen Kissen.",
        "على الكنبة، جنب المخدة الزرقا."
      ],
      [
        "Noah",
        "Danke, da ist sie. Wohin kommt das Buch?",
        "شكراً، أهي. الكتاب يتحط فين؟"
      ],
      [
        "Salma",
        "Ins Bücherregal neben der Tür. Ich stelle es hinein.",
        "في مكتبة الكتب جنب الباب. هحطه فيها."
      ],
      [
        "Noah",
        "Die Fernbedienung lassen wir auf dem Tisch.",
        "الريموت نسيبه على الترابيزة."
      ]
    ],
    "q": [
      [
        "Wo liegt die Brille?",
        "Neben dem blauen Kissen.",
        "Auf dem Couchtisch.",
        "In der Tür."
      ],
      [
        "Wohin kommt das Buch?",
        "Ins Bücherregal.",
        "Unter den Teppich.",
        "Hinter die Uhr."
      ],
      [
        "Was bleibt auf dem Tisch?",
        "Die Fernbedienung.",
        "Die Brille.",
        "Das Kissen."
      ]
    ]
  },
  {
    "id": "uhr-geht-nach",
    "level": "A2",
    "title": [
      "Nicht nach dieser Uhr planen",
      "مش نخطط على الساعة دي"
    ],
    "lines": [
      [
        "David",
        "Nach der Wanduhr haben wir noch viel Zeit.",
        "حسب ساعة الحيطة لسه معانا وقت كتير."
      ],
      [
        "Mira",
        "Sie geht seit einigen Tagen nach. Schau bitte aufs Handy.",
        "هي متأخرة من كام يوم. بص على الموبايل لو سمحت."
      ],
      [
        "David",
        "Stimmt. Die Wanduhr müssen wir später überprüfen.",
        "صح. ساعة الحيطة محتاجين نراجعها بعدين."
      ],
      [
        "Mira",
        "Jetzt bleibt sie an ihrem Platz. Wir steigen auf keine Möbel.",
        "دلوقتي تفضل مكانها. مش هنطلع على أي عفش."
      ],
      [
        "David",
        "Ich lege die Fernbedienung auf den Fernsehschrank.",
        "هحط الريموت على وحدة التلفزيون."
      ],
      [
        "Mira",
        "Mit der Filmauswahl warten wir noch auf unsere Freundin.",
        "نستنى صاحبتنا لسه قبل اختيار الفيلم."
      ],
      [
        "David",
        "Ja. Sie möchte heute mitentscheiden.",
        "آه. هي عايزة تشارك في الاختيار النهارده."
      ]
    ],
    "q": [
      [
        "Was stimmt mit der Wanduhr nicht?",
        "Sie geht nach.",
        "Sie fehlt.",
        "Sie liegt im Regal."
      ],
      [
        "Wo soll David die Zeit prüfen?",
        "Auf dem Handy.",
        "Auf dem Teppich.",
        "Im Buch."
      ],
      [
        "Warum warten sie mit der Auswahl?",
        "Die Freundin möchte mitentscheiden.",
        "Der Film wurde schon gewählt.",
        "David muss den Tisch reparieren."
      ]
    ]
  },
  {
    "id": "fach-noch-offen",
    "level": "A2",
    "title": [
      "Leer heißt nicht zugeteilt",
      "فاضي مش معناها متقسم لحد"
    ],
    "lines": [
      [
        "Elias",
        "Das Fach ist leer. Ich stelle meine Spiele hinein.",
        "الرف فاضي. هحط ألعابي فيه."
      ],
      [
        "Lina",
        "Bitte erst absprechen. Wir haben die Nutzung noch nicht geklärt.",
        "نتفق الأول لو سمحت. لسه ماحددناش الاستخدام."
      ],
      [
        "Elias",
        "Dann bleiben die Spiele vorerst in meiner Kiste.",
        "يبقى الألعاب تفضل مؤقتاً في الصندوق بتاعي."
      ],
      [
        "Lina",
        "Ich hätte gern ein Fach für unsere aktuellen Bücher.",
        "أنا عايزة رف للكتب اللي بنقراها حالياً."
      ],
      [
        "Elias",
        "Und ich wünsche mir einen Platz für Spiele.",
        "وأنا عايز مكان للألعاب."
      ],
      [
        "Lina",
        "Wir notieren beide Wünsche als noch offen.",
        "نسجل الرغبتين إنهم لسه مفتوحين للنقاش."
      ],
      [
        "Elias",
        "Genau. Eine fertige Vereinbarung haben wir noch nicht.",
        "بالظبط. لسه ماعندناش اتفاق نهائي."
      ]
    ],
    "q": [
      [
        "Warum werden die Spiele noch nicht ins Fach gestellt?",
        "Die Nutzung ist noch nicht geklärt.",
        "Die Kiste fehlt.",
        "Lina hat das Regal verschenkt."
      ],
      [
        "Was möchte Lina?",
        "Ein Fach für aktuelle Bücher.",
        "Einen neuen Fernseher.",
        "Einen zweiten Teppich."
      ],
      [
        "Welchen Status haben die Wünsche?",
        "Noch offen.",
        "Endgültig vereinbart.",
        "Schon bestellt."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "brille-neben-kissen": [
    "neben dem blauen Kissen.",
    "Ins Bücherregal neben der Tür.",
    "Die Fernbedienung lassen wir auf dem Tisch."
  ],
  "uhr-geht-nach": [
    "Sie geht seit einigen Tagen nach.",
    "Schau bitte aufs Handy.",
    "Sie möchte heute mitentscheiden."
  ],
  "fach-noch-offen": [
    "Wir haben die Nutzung noch nicht geklärt.",
    "ein Fach für unsere aktuellen Bücher.",
    "Wir notieren beide Wünsche als noch offen."
  ]
});

everydayDialogues.push(...[
  {
    "id": "kaffee-ohne-milch",
    "level": "A1",
    "title": [
      "Heute ohne Milch",
      "النهارده من غير لبن"
    ],
    "lines": [
      [
        "Nina",
        "Soll ich Milch in deinen Kaffee gießen?",
        "أصب لبن في قهوتك؟"
      ],
      [
        "Sami",
        "Heute bitte nicht. Ich trinke ihn ohne Milch.",
        "النهارده لأ لو سمحتي. هشربه من غير لبن."
      ],
      [
        "Nina",
        "Dann bleibt das Milchkännchen hier in der Mitte.",
        "يبقى كنكة اللبن تفضل هنا في النص."
      ],
      [
        "Sami",
        "Und der Toaster?",
        "والتوستر؟"
      ],
      [
        "Nina",
        "Er bleibt aus. Ich möchte das Brot nicht toasten.",
        "يفضل مطفي. مش عايزة أحمص العيش."
      ],
      [
        "Sami",
        "Ich auch nicht. Den leeren Eierbecher bringe ich zurück.",
        "وأنا كمان. هرجع كاس البيض الفاضي."
      ],
      [
        "Nina",
        "Danke. Die Butterdose lassen wir auf dem Tisch.",
        "شكراً. علبة الزبدة نسيبها على الترابيزة."
      ]
    ],
    "q": [
      [
        "Was möchte Sami nicht im Kaffee?",
        "Milch.",
        "Kaffee.",
        "Eine Tasse."
      ],
      [
        "Was bleibt aus?",
        "Der Toaster.",
        "Die Butterdose.",
        "Der Korb."
      ],
      [
        "Was bleibt auf dem Tisch?",
        "Die Butterdose.",
        "Der leere Eierbecher.",
        "Der Schrank."
      ]
    ]
  },
  {
    "id": "drei-tassen-zwei-personen",
    "level": "A2",
    "title": [
      "Drei Tassen für uns beide",
      "3 فناجين لينا إحنا الاتنين"
    ],
    "lines": [
      [
        "Nora",
        "Kommt noch jemand? Ich sehe drei Tassen.",
        "فيه حد تاني جاي؟ أنا شايفة 3 فناجين."
      ],
      [
        "Ben",
        "Nein. Eine ist für meinen Tee, eine für meinen Kaffee.",
        "لأ. واحد للشاي بتاعي وواحد للقهوة بتاعتي."
      ],
      [
        "Nora",
        "Und die dritte ist für mich. Jetzt verstehe ich es.",
        "والتالت ليا. كده فهمت."
      ],
      [
        "Ben",
        "Möchtest du heute Milch in deinen Tee?",
        "عايزة لبن في الشاي النهارده؟"
      ],
      [
        "Nora",
        "Nein, heute ohne Milch.",
        "لأ، النهارده من غير لبن."
      ],
      [
        "Ben",
        "Gut, ich lasse deine Tasse so.",
        "تمام، هسيب فنجانك كده."
      ],
      [
        "Nora",
        "Die Butterdose stelle ich neben den Brotkorb.",
        "هحط علبة الزبدة جنب سبت العيش."
      ]
    ],
    "q": [
      [
        "Wie viele Personen frühstücken hier?",
        "Zwei.",
        "Drei.",
        "Vier."
      ],
      [
        "Was möchte Ben trinken?",
        "Tee und Kaffee nacheinander.",
        "Nur Wasser.",
        "Noras Tee."
      ],
      [
        "Wie bleibt Noras Tee heute?",
        "Ohne Milch.",
        "Mit viel Milch.",
        "Im Brotkorb."
      ]
    ]
  },
  {
    "id": "gefaess-nicht-inhalt",
    "level": "A2",
    "title": [
      "Erst nachsehen, dann streichen",
      "نبص الأول وبعدين نشطب"
    ],
    "lines": [
      [
        "Lea",
        "Butter und Milch können wir von der Liste streichen.",
        "نقدر نشطب الزبدة واللبن من القائمة."
      ],
      [
        "Omar",
        "Warum?",
        "ليه؟"
      ],
      [
        "Lea",
        "Die Butterdose und das Milchkännchen stehen doch hier.",
        "ما علبة الزبدة وكنكة اللبن هنا أهو."
      ],
      [
        "Omar",
        "Das sagt noch nichts über den übrigen Vorrat.",
        "ده لسه مش بيقول حاجة عن باقي الموجود."
      ],
      [
        "Lea",
        "Dann sehe ich zuerst in der Butterdose nach.",
        "يبقى أبص الأول في علبة الزبدة."
      ],
      [
        "Omar",
        "Und ich prüfe den Kühlschrank. Bestellt haben wir noch nichts.",
        "وأنا أراجع التلاجة. إحنا لسه ماطلبناش حاجة."
      ],
      [
        "Lea",
        "Die Liste lassen wir vorerst unverändert.",
        "نسيب القائمة مؤقتاً زي ما هي."
      ]
    ],
    "q": [
      [
        "Warum sollen sie zuerst nachsehen?",
        "Gefäße allein zeigen den Vorrat nicht.",
        "Die Liste ist schon bestellt.",
        "Die Tassen fehlen."
      ],
      [
        "Wer prüft den Kühlschrank?",
        "Omar.",
        "Lea.",
        "Ein Lieferant."
      ],
      [
        "Was wurde schon bestellt?",
        "Noch nichts.",
        "Milch.",
        "Eine Butterdose."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "kaffee-ohne-milch": [
    "Ich trinke ihn ohne Milch.",
    "Er bleibt aus.",
    "Die Butterdose lassen wir auf dem Tisch."
  ],
  "drei-tassen-zwei-personen": [
    "Und die dritte ist für mich.",
    "Eine ist für meinen Tee, eine für meinen Kaffee.",
    "Nein, heute ohne Milch."
  ],
  "gefaess-nicht-inhalt": [
    "Das sagt noch nichts über den übrigen Vorrat.",
    "Und ich prüfe den Kühlschrank.",
    "Bestellt haben wir noch nichts."
  ]
});

everydayDialogues.push(...[
  {
    "id": "kabel-erst-klaeren",
    "level": "A1",
    "title": [
      "Welches Kabel brauchst du?",
      "محتاج أنهي كابل؟"
    ],
    "lines": [
      [
        "Sami",
        "Wo liegen die Kabel?",
        "الكابلات فين؟"
      ],
      [
        "Lina",
        "In der kleinen Kiste im Regal.",
        "في الصندوق الصغير على الرف."
      ],
      [
        "Sami",
        "Hier liegen zwei. Ich weiß noch nicht, welches ich brauche.",
        "هنا فيه اتنين. لسه مش عارف محتاج أنهي واحد."
      ],
      [
        "Lina",
        "Dann klär das zuerst.",
        "يبقى حدد ده الأول."
      ],
      [
        "Sami",
        "Gut, ich nehme noch keines mit.",
        "تمام، لسه مش هاخد أي واحد."
      ],
      [
        "Lina",
        "Ich suche jetzt das richtige Dokument für meine Hörübung.",
        "أنا هدور دلوقتي على المستند الصح لتدريب السمع."
      ],
      [
        "Sami",
        "Deine Computermaus liegt rechts neben der Tastatur.",
        "الماوس بتاعك على يمين الكيبورد."
      ]
    ],
    "q": [
      [
        "Wo sind die Kabel?",
        "In einer Kiste im Regal.",
        "Unter dem Laptop.",
        "In der Jacke."
      ],
      [
        "Was nimmt Sami zunächst mit?",
        "Kein Kabel.",
        "Beide Kabel.",
        "Die Tastatur."
      ],
      [
        "Was sucht Lina?",
        "Das richtige Dokument.",
        "Einen neuen Tisch.",
        "Samis Jacke."
      ]
    ]
  },
  {
    "id": "alter-entwurf-adresse",
    "level": "A2",
    "title": [
      "Nicht aus dem alten Entwurf übernehmen",
      "مش ننقل من المسودة القديمة"
    ],
    "lines": [
      [
        "Jonas",
        "Ich nehme die Adresse aus dem offenen Dokument.",
        "هاخد العنوان من المستند المفتوح."
      ],
      [
        "Mira",
        "Bitte warte. Das ist ein älterer Entwurf.",
        "استنى لو سمحت. دي مسودة قديمة."
      ],
      [
        "Jonas",
        "Dann wissen wir noch nicht, ob die Angabe aktuell ist.",
        "يبقى لسه مش عارفين إذا المعلومة محدثة."
      ],
      [
        "Mira",
        "Genau. Offen bedeutet nicht automatisch bestätigt.",
        "بالظبط. مفتوح مش معناها تلقائياً متأكد."
      ],
      [
        "Jonas",
        "Ich notiere die offene Frage und verschicke noch nichts.",
        "هسجل السؤال اللي لسه مفتوح ومش هبعت حاجة دلوقتي."
      ],
      [
        "Mira",
        "Die Kopfhörer lasse ich vorerst in der Schublade.",
        "هسيب السماعة مؤقتاً في الدرج."
      ],
      [
        "Jonas",
        "Gut. An den Einstellungen ändern wir nichts.",
        "تمام. مش هنغير حاجة في الإعدادات."
      ]
    ],
    "q": [
      [
        "Woraus wollte Jonas die Adresse nehmen?",
        "Aus einem offenen alten Entwurf.",
        "Aus einem neuen bestätigten Brief.",
        "Von der Tastatur."
      ],
      [
        "Was verschickt Jonas jetzt?",
        "Noch nichts.",
        "Den Brief sofort.",
        "Die Kopfhörer."
      ],
      [
        "Was ändern sie an den Einstellungen?",
        "Nichts.",
        "Alle Passwörter.",
        "Die Adresse im Gerät."
      ]
    ]
  },
  {
    "id": "maus-bis-rueckkehr",
    "level": "A2",
    "title": [
      "Nur bis zu meiner Rückkehr",
      "لحد ما أرجع بس"
    ],
    "lines": [
      [
        "Emil",
        "Kann ich deine Computermaus heute Nachmittag ausleihen?",
        "ينفع أستلف الماوس بتاعك بعد الضهر النهارده؟"
      ],
      [
        "Sara",
        "Nur bis zu meiner Rückkehr. Danach brauche ich sie selbst.",
        "لحد ما أرجع بس. بعدها محتاجاه أنا."
      ],
      [
        "Emil",
        "Wann kommst du zurück? Das weiß ich noch nicht genau.",
        "هترجعي إمتى؟ لسه مش عارف ده بالظبط."
      ],
      [
        "Sara",
        "Dann klären wir das zuerst. Die Maus bleibt vorerst hier.",
        "يبقى نحدد ده الأول. الماوس يفضل هنا مؤقتاً."
      ],
      [
        "Emil",
        "Ich suche lieber noch einmal nach meiner eigenen.",
        "أفضل أدور تاني على بتاعي."
      ],
      [
        "Sara",
        "Hast du in deiner Laptoptasche nachgesehen?",
        "بصيت في شنطة اللابتوب بتاعتك؟"
      ],
      [
        "Emil",
        "Da ist sie. Ich nehme nur meine eigene Maus.",
        "أهي. هاخد الماوس بتاعي أنا بس."
      ]
    ],
    "q": [
      [
        "Welche Grenze nennt Sara?",
        "Bis zu ihrer Rückkehr.",
        "Ohne Zeitgrenze.",
        "Nur nach einer Zahlung."
      ],
      [
        "Was bleibt zunächst hier?",
        "Saras Maus.",
        "Emils Tasche.",
        "Der Laptop eines Gastes."
      ],
      [
        "Welche Maus nimmt Emil am Ende?",
        "Seine eigene.",
        "Saras Maus.",
        "Eine neu bestellte."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "kabel-erst-klaeren": [
    "In der kleinen Kiste im Regal.",
    "ich nehme noch keines mit.",
    "Ich suche jetzt das richtige Dokument für meine Hörübung."
  ],
  "alter-entwurf-adresse": [
    "Das ist ein älterer Entwurf.",
    "Ich notiere die offene Frage und verschicke noch nichts.",
    "An den Einstellungen ändern wir nichts."
  ],
  "maus-bis-rueckkehr": [
    "Nur bis zu meiner Rückkehr.",
    "Die Maus bleibt vorerst hier.",
    "Ich nehme nur meine eigene Maus."
  ]
});

everydayDialogues.push(...[
  {
    "id": "reisglas-unten",
    "level": "A1",
    "title": [
      "Nur das Glas mit Reis",
      "برطمان الرز بس"
    ],
    "lines": [
      [
        "Lea",
        "Ich suche den Reis. Siehst du das Vorratsglas?",
        "بدور على الرز. شايف برطمان التخزين؟"
      ],
      [
        "Omar",
        "Ja, unten im Küchenschrank. Neben der kleinen Dose.",
        "آه، تحت في دولاب المطبخ. جنب العلبة الصغيرة."
      ],
      [
        "Lea",
        "Auf der Dose steht Kaffee. Die bleibt hier.",
        "مكتوب على العلبة قهوة. دي تفضل هنا."
      ],
      [
        "Omar",
        "Soll ich den Trichter holen?",
        "أجيب القمع؟"
      ],
      [
        "Lea",
        "Für die Schüssel brauchen wir ihn nicht.",
        "مش محتاجينه للطبق الغويط."
      ],
      [
        "Omar",
        "Dann lasse ich ihn in der Schublade.",
        "يبقى أسيبه في الدرج."
      ],
      [
        "Lea",
        "Ich lese jetzt erst die Zutatenliste.",
        "هقرأ دلوقتي قائمة المكونات الأول."
      ]
    ],
    "q": [
      [
        "Was sucht Lea?",
        "Den Reis.",
        "Den Kaffee.",
        "Die Tassen."
      ],
      [
        "Was bleibt im Schrank?",
        "Die kleine Dose.",
        "Die Schüssel.",
        "Der Bleistift."
      ],
      [
        "Was liest Lea als Nächstes?",
        "Die Zutatenliste.",
        "Eine Rechnung.",
        "Eine Zeitung."
      ]
    ]
  },
  {
    "id": "deckel-vertauscht",
    "level": "A2",
    "title": [
      "Nicht auf den falschen Deckel",
      "مش على الغطا الغلط"
    ],
    "lines": [
      [
        "Nina",
        "Ich klebe den Zettel auf diesen Deckel.",
        "هلزق الورقة على الغطا ده."
      ],
      [
        "Ben",
        "Warte bitte. Ich habe die beiden Deckel vertauscht.",
        "استني لو سمحتي. أنا بدلت الغطاين مكان بعض."
      ],
      [
        "Nina",
        "Dann gehört der Zettel vielleicht zum anderen Glas?",
        "يبقى الورقة ممكن تبقى تبع البرطمان التاني؟"
      ],
      [
        "Ben",
        "Er gehört zu diesem Glas hier. Ich lege ihn erst daneben.",
        "هي تبع البرطمان ده هنا. هحطها جنبه الأول."
      ],
      [
        "Nina",
        "Beide Gläser sind noch leer. Ich schreibe nur auf, welches wir meinen.",
        "البرطمانين لسه فاضيين. هكتب بس أنهي واحد قصدنا عليه."
      ],
      [
        "Ben",
        "Die Dose oben lassen wir unverändert. Sie gehört unserer Mitbewohnerin.",
        "العلبة اللي فوق نسيبها زي ما هي. دي بتاعة زميلتنا في السكن."
      ],
      [
        "Nina",
        "Nach dem freien Platz daneben fragen wir sie später.",
        "هنسألها بعدين عن المكان الفاضي اللي جنبها."
      ]
    ],
    "q": [
      [
        "Was hat Ben vertauscht?",
        "Die Deckel.",
        "Die Schränke.",
        "Die Bleistifte."
      ],
      [
        "Wo legt Ben den Zettel zunächst hin?",
        "Neben das zugehörige Glas.",
        "In den Kaffee.",
        "Unter den Herd."
      ],
      [
        "Was geschieht mit der fremden Dose?",
        "Sie bleibt unverändert.",
        "Sie bekommt sofort einen neuen Zettel.",
        "Sie wird verschenkt."
      ]
    ]
  },
  {
    "id": "regal-skizze",
    "level": "A2",
    "title": [
      "Erst ein Vorschlag auf Papier",
      "اقتراح على الورق الأول"
    ],
    "lines": [
      [
        "Dalia",
        "Dieses Brett könnten wir für gemeinsame Vorräte nutzen.",
        "ممكن نستخدم الرف ده للتموين المشترك."
      ],
      [
        "Jonas",
        "Die Idee gefällt mir. Fragen wir zuerst die anderen beiden.",
        "الفكرة عجباني. نسأل الاتنين التانيين الأول."
      ],
      [
        "Dalia",
        "Ich zeichne nur eine Skizze. Noch räume ich nichts Fremdes um.",
        "هرسم رسمة تخطيطية بس. لسه مش هغير مكان حاجة مش بتاعتي."
      ],
      [
        "Jonas",
        "Und die Tasche neben dem Schrank?",
        "والشنطة اللي جنب الدولاب؟"
      ],
      [
        "Dalia",
        "Die gehört unserem Besucher. Sie bleibt, wie sie ist.",
        "دي بتاعة ضيفنا. تفضل زي ما هي."
      ],
      [
        "Jonas",
        "Gut. Die Skizze lege ich zu unserem Notizbuch.",
        "تمام. هحط الرسمة مع النوتة بتاعتنا."
      ],
      [
        "Dalia",
        "Meine Dose stelle ich jetzt wieder zurück.",
        "هرجع دلوقتي علبتي مكانها تاني."
      ]
    ],
    "q": [
      [
        "Was zeichnet Dalia?",
        "Eine Skizze.",
        "Eine Rechnung.",
        "Einen Fahrplan."
      ],
      [
        "Wem gehört die Tasche?",
        "Dem Besucher.",
        "Dem Händler.",
        "Jonas allein."
      ],
      [
        "Was stellt Dalia am Ende zurück?",
        "Ihre Dose.",
        "Den neuen Schrank.",
        "Die fremde Tasche."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "reisglas-unten": [
    "Ich suche den Reis.",
    "Die bleibt hier.",
    "Ich lese jetzt erst die Zutatenliste."
  ],
  "deckel-vertauscht": [
    "Ich habe die beiden Deckel vertauscht.",
    "Ich lege ihn erst daneben.",
    "Die Dose oben lassen wir unverändert."
  ],
  "regal-skizze": [
    "Ich zeichne nur eine Skizze.",
    "Die gehört unserem Besucher.",
    "Meine Dose stelle ich jetzt wieder zurück."
  ]
});

everydayDialogues.push(...[
  {
    "id": "dominostein-gefunden",
    "level": "A1",
    "title": [
      "Hier ist der fehlende Stein",
      "أهو الحجر اللي بندور عليه"
    ],
    "lines": [
      [
        "Tarek",
        "Ich suche einen Dominostein. In der Schachtel liegt er nicht.",
        "بدور على حجر دومينو. مش موجود في العلبة."
      ],
      [
        "Mia",
        "Ich sehe einen unter dem Tisch, neben dem Stuhl.",
        "شايفة واحد تحت الترابيزة جنب الكرسي."
      ],
      [
        "Tarek",
        "Kannst du ihn mir geben?",
        "ممكن تديهولي؟"
      ],
      [
        "Mia",
        "Hier, bitte. Die Spielkarten lasse ich noch auf dem Tisch.",
        "اتفضل أهو. هسيب ورق الكوتشينة على الترابيزة لسه."
      ],
      [
        "Tarek",
        "Der Würfel gehört zu einem anderen Spiel.",
        "الزهر تبع لعبة تانية."
      ],
      [
        "Mia",
        "Dann kommt er nicht in diese Schachtel.",
        "يبقى مش يتحط في العلبة دي."
      ],
      [
        "Tarek",
        "Gut. Heute räumen wir nur auf.",
        "تمام. النهارده بنرتب بس."
      ]
    ],
    "q": [
      [
        "Was sucht Tarek?",
        "Einen Dominostein.",
        "Eine Tasse.",
        "Einen Schlüssel."
      ],
      [
        "Wo lässt Mia die Spielkarten?",
        "Auf dem Tisch.",
        "Unter dem Sofa.",
        "In der Küche."
      ],
      [
        "Was machen die beiden heute?",
        "Nur aufräumen.",
        "Ein Spiel kaufen.",
        "Eine neue Runde beginnen."
      ]
    ]
  },
  {
    "id": "karten-nicht-mischen",
    "level": "A2",
    "title": [
      "Erst die Vorderseiten ansehen",
      "نبص على الوش الأول"
    ],
    "lines": [
      [
        "Sami",
        "Die Rückseiten sehen gleich aus. Ich lege alles zusammen.",
        "ضهر الورق شكله واحد. هحط كله مع بعض."
      ],
      [
        "Nora",
        "Bitte schau zuerst auf die Vorderseiten.",
        "بص على وش الورق الأول لو سمحت."
      ],
      [
        "Sami",
        "Du hast recht. Einige Karten gehören zu einem anderen Spiel.",
        "عندك حق. بعض الورق تبع لعبة تانية."
      ],
      [
        "Nora",
        "Die Anleitung liegt im Regal. Wir können nachsehen.",
        "التعليمات موجودة في الرف. نقدر نبص فيها."
      ],
      [
        "Sami",
        "Und die Karten, die wir noch nicht zuordnen können?",
        "والورق اللي لسه مش عارفين نحدده؟"
      ],
      [
        "Nora",
        "Die lassen wir als eigenen Stapel liegen.",
        "نسيبه رصة لوحده."
      ],
      [
        "Sami",
        "Dann schreiben wir die offenen Fragen auf den Zettel.",
        "يبقى نكتب الأسئلة اللي لسه مفتوحة في الورقة."
      ]
    ],
    "q": [
      [
        "Was soll Sami zuerst ansehen?",
        "Die Vorderseiten.",
        "Die Schranktür.",
        "Den Kassenzettel."
      ],
      [
        "Wo liegt die Anleitung?",
        "Im Regal.",
        "Im Briefkasten.",
        "Im Garten."
      ],
      [
        "Was bleibt ein eigener Stapel?",
        "Die noch nicht zugeordneten Karten.",
        "Alle Dominosteine im Haus.",
        "Die neuen Rechnungen."
      ]
    ]
  },
  {
    "id": "nina-mitentscheiden",
    "level": "A2",
    "title": [
      "Wir warten mit der Entscheidung",
      "نستنى عشان نقرر"
    ],
    "lines": [
      [
        "Lea",
        "Ich habe die Dominosteine geholt.",
        "جبت حجارة الدومينو."
      ],
      [
        "Omar",
        "Und ich habe Spielkarten. Aber Nina ist noch in der Küche.",
        "وأنا معايا ورق كوتشينة. بس نينا لسه في المطبخ."
      ],
      [
        "Lea",
        "Dann warten wir mit der Entscheidung.",
        "يبقى نستنى عشان نقرر."
      ],
      [
        "Omar",
        "Gut. Ich verteile noch keine Karten.",
        "تمام. لسه مش هوزع ورق."
      ],
      [
        "Nina",
        "Da bin ich. Können wir heute lieber ein Puzzle zusammenlegen?",
        "أنا جيت. ينفع نركب بازل مع بعض النهارده بدل كده؟"
      ],
      [
        "Lea",
        "Ja, gern. Wir räumen die anderen Sachen wieder ein.",
        "آه، نحب كده. هنلم الحاجات التانية تاني."
      ],
      [
        "Omar",
        "Die Sanduhr brauchen wir dafür gerade nicht.",
        "مش محتاجين الساعة الرملية لده دلوقتي."
      ]
    ],
    "q": [
      [
        "Wo ist Nina zuerst?",
        "In der Küche.",
        "Am Bahnhof.",
        "Im Garten."
      ],
      [
        "Was verteilt Omar zunächst?",
        "Noch keine Karten.",
        "Alle Karten sofort.",
        "Geld."
      ],
      [
        "Was möchten die drei schließlich machen?",
        "Ein Puzzle zusammenlegen.",
        "Ein neues Spiel bestellen.",
        "Punkte für Domino zählen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "dominostein-gefunden": [
    "Ich suche einen Dominostein.",
    "Die Spielkarten lasse ich noch auf dem Tisch.",
    "Heute räumen wir nur auf."
  ],
  "karten-nicht-mischen": [
    "Bitte schau zuerst auf die Vorderseiten.",
    "Die Anleitung liegt im Regal.",
    "Die lassen wir als eigenen Stapel liegen."
  ],
  "nina-mitentscheiden": [
    "Nina ist noch in der Küche.",
    "Ich verteile noch keine Karten.",
    "Können wir heute lieber ein Puzzle zusammenlegen?"
  ]
});

everydayDialogues.push(...[
  {
    "id": "becher-zur-flasche",
    "level": "A1",
    "title": [
      "Der Becher liegt noch im Schrank",
      "الكوباية لسه في الدولاب"
    ],
    "lines": [
      [
        "Adam",
        "Der Picknickkorb ist an der Tür. Wo ist die Decke?",
        "سبت البيكنيك عند الباب. البطانية فين؟"
      ],
      [
        "Lina",
        "Noch auf dem Sofa. Kannst du sie holen?",
        "لسه على الكنبة. ممكن تجيبها؟"
      ],
      [
        "Adam",
        "Ja. Und die Thermosflasche?",
        "آه. وترمس المشروبات؟"
      ],
      [
        "Lina",
        "In der Küche neben dem Fenster. Aber der kleine Becher fehlt noch.",
        "في المطبخ جنب الشباك. بس الكوباية الصغيرة لسه ناقصة."
      ],
      [
        "Adam",
        "Der liegt im Schrank. Ich habe ihn gesehen.",
        "موجودة في الدولاب. أنا شفتها."
      ],
      [
        "Lina",
        "Danke. Die leeren Brotdosen nehmen wir heute nicht mit.",
        "شكراً. علب الأكل الفاضية مش هناخدها النهارده."
      ],
      [
        "Adam",
        "Gut. Ich stelle sie zurück ins Regal.",
        "تمام. هرجعها للرف."
      ]
    ],
    "q": [
      [
        "Wo liegt die Decke?",
        "Auf dem Sofa.",
        "In der Flasche.",
        "Unter dem Bett."
      ],
      [
        "Wo liegt der kleine Becher?",
        "Im Schrank.",
        "Im Garten.",
        "In Adams Jacke."
      ],
      [
        "Was nehmen sie heute nicht mit?",
        "Die leeren Brotdosen.",
        "Den Picknickkorb.",
        "Die Decke."
      ]
    ]
  },
  {
    "id": "treffpunkt-noch-offen",
    "level": "A2",
    "title": [
      "Ich frage lieber noch einmal",
      "أفضل أسأل تاني"
    ],
    "lines": [
      [
        "Sami",
        "Auf meinem Zettel steht das große Parktor.",
        "في ورقتي مكتوب بوابة الجنينة الكبيرة."
      ],
      [
        "Nora",
        "Danach hat Lea einen anderen Eingang vorgeschlagen.",
        "بعد كده ليا اقترحت مدخل تاني."
      ],
      [
        "Sami",
        "Dann ist der neue Eingang unser Treffpunkt?",
        "يبقى المدخل الجديد هو مكان مقابلتنا؟"
      ],
      [
        "Nora",
        "Noch nicht sicher. Es fehlen Antworten. Ich frage lieber noch einmal.",
        "لسه مش أكيد. فيه ردود ناقصة. أفضل أسأل تاني."
      ],
      [
        "Sami",
        "In Ordnung. Die Decke habe ich schon im Rucksack.",
        "تمام. البطانية معايا في شنطة الضهر خلاص."
      ],
      [
        "Nora",
        "Lea hat jetzt geantwortet: Alle haben sich auf das große Parktor geeinigt.",
        "ليا ردت دلوقتي: الكل اتفق على بوابة الجنينة الكبيرة."
      ],
      [
        "Sami",
        "Gut, dann ergänze ich meinen Zettel.",
        "تمام، يبقى أكمل الورقة بتاعتي."
      ]
    ],
    "q": [
      [
        "Was hat Lea später vorgeschlagen?",
        "Einen anderen Eingang.",
        "Ein neues Fahrrad.",
        "Ein Essen im Restaurant."
      ],
      [
        "Warum fragt Nora noch einmal?",
        "Es fehlen noch Antworten.",
        "Sie hat die Decke verloren.",
        "Der Korb ist leer."
      ],
      [
        "Wo hat Sami die Decke?",
        "Im Rucksack.",
        "Im Park.",
        "Im Auto von Lea."
      ]
    ]
  },
  {
    "id": "aufgaben-neu-bestaetigen",
    "level": "B1",
    "title": [
      "Nicht einfach die Namen kopieren",
      "ماننقلش الأسماء وخلاص"
    ],
    "lines": [
      [
        "Mina",
        "Letztes Mal hatte ich die Thermosflasche. Diesmal braucht meine Schwester sie.",
        "المرة اللي فاتت أنا جبت الترمس. المرة دي أختي محتاجاه."
      ],
      [
        "Omar",
        "Ich habe deinen Namen zu schnell aus der alten Liste übernommen.",
        "نقلت اسمك من القائمة القديمة بسرعة زيادة."
      ],
      [
        "Tarek",
        "Ich kann meine eigene Flasche mitbringen.",
        "أقدر أجيب الترمس بتاعي أنا."
      ],
      [
        "Mina",
        "Und ich übernehme stattdessen die Decke.",
        "وأنا همسك البطانية بدل كده."
      ],
      [
        "Omar",
        "Bei den Bechern fehlen uns noch Angaben. Das bleibt erst einmal offen.",
        "بالنسبة للكوبايات لسه ناقصانا معلومات. دي تفضل مفتوحة مؤقتاً."
      ],
      [
        "Tarek",
        "Gut. Ein Eintrag heißt noch nicht, dass alles schon eingepackt ist.",
        "تمام. إن الحاجة مكتوبة مش معناه إن كله اتحط في الشنط خلاص."
      ],
      [
        "Omar",
        "Dann vergleichen wir die Sachen vor dem Losgehen mit der Liste.",
        "يبقى نقارن الحاجات بالقائمة قبل ما نخرج."
      ]
    ],
    "q": [
      [
        "Wer bietet seine eigene Flasche an?",
        "Tarek.",
        "Minas Schwester.",
        "Niemand."
      ],
      [
        "Was bleibt zunächst offen?",
        "Die Angaben zu den Bechern.",
        "Ob Mina die Decke übernimmt.",
        "Ob Tarek seine Flasche anbietet."
      ],
      [
        "Was wollen sie vor dem Losgehen tun?",
        "Sachen und Liste vergleichen.",
        "Alle Aufgaben unverändert kopieren.",
        "Neue Becher bestellen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "becher-zur-flasche": [
    "Noch auf dem Sofa.",
    "Der liegt im Schrank.",
    "Die leeren Brotdosen nehmen wir heute nicht mit."
  ],
  "treffpunkt-noch-offen": [
    "Danach hat Lea einen anderen Eingang vorgeschlagen.",
    "Es fehlen Antworten.",
    "Die Decke habe ich schon im Rucksack."
  ],
  "aufgaben-neu-bestaetigen": [
    "Ich kann meine eigene Flasche mitbringen.",
    "Bei den Bechern fehlen uns noch Angaben.",
    "Dann vergleichen wir die Sachen vor dem Losgehen mit der Liste."
  ]
});

everydayDialogues.push(...[
  {
    "id": "napf-in-der-kueche",
    "level": "A1",
    "title": [
      "Schau neben dem Schrank",
      "بصي جنب الدولاب"
    ],
    "lines": [
      [
        "Mila",
        "Ich suche den Fressnapf. Im Karton ist er nicht.",
        "بدور على طبق أكل الحيوان. مش في الكرتونة."
      ],
      [
        "Ben",
        "Er steht in der Küche neben dem Schrank.",
        "موجود في المطبخ جنب الدولاب."
      ],
      [
        "Mila",
        "Danke. Ich stelle ihn erst einmal auf den Tisch.",
        "شكراً. هحطه على الترابيزة مؤقتاً."
      ],
      [
        "Ben",
        "Der Ball liegt jetzt im kleinen Korb.",
        "الكورة دلوقتي في السبت الصغير."
      ],
      [
        "Mila",
        "Und das blaue Handtuch?",
        "والفوطة الزرقا؟"
      ],
      [
        "Ben",
        "Das lege ich auf das untere Regal.",
        "هحطها على الرف اللي تحت."
      ],
      [
        "Mila",
        "Gut. Das Hundebett lassen wir an seinem Platz.",
        "تمام. هنسيب سرير الكلب في مكانه."
      ]
    ],
    "q": [
      [
        "Wo steht der Napf zuerst?",
        "In der Küche.",
        "Im Karton.",
        "Auf dem Balkon."
      ],
      [
        "Wo liegt der Ball jetzt?",
        "Im kleinen Korb.",
        "Im Napf.",
        "Unter dem Schrank."
      ],
      [
        "Wohin legt Ben das blaue Handtuch?",
        "Auf das untere Regal.",
        "In den Napf.",
        "Vor die Haustür."
      ]
    ]
  },
  {
    "id": "napf-noch-zurueck",
    "level": "A2",
    "title": [
      "Der Aufkleber ist unten",
      "الاستيكر من تحت"
    ],
    "lines": [
      [
        "Nora",
        "Die beiden Näpfe sehen fast gleich aus. Ich packe sie zusammen ein.",
        "الطبقين شكلهم واحد تقريباً. هحطهم مع بعض في الشنطة."
      ],
      [
        "Sami",
        "Warte bitte. Einer gehört unserer Nachbarin.",
        "استني لو سمحتي. واحد بتاع جارتنا."
      ],
      [
        "Nora",
        "Weißt du, welcher?",
        "عارف أنهي واحد؟"
      ],
      [
        "Sami",
        "In ihrer Nachricht steht etwas von einem Aufkleber an der Unterseite.",
        "في رسالتها فيه كلام عن استيكر من تحت."
      ],
      [
        "Nora",
        "Hier ist er. Diesen Napf stelle ich getrennt hin.",
        "أهو. هحط الطبق ده منفصل."
      ],
      [
        "Sami",
        "Gut. Einen Abholzeitpunkt hat sie noch nicht genannt.",
        "تمام. لسه ماحددتش وقت تاخده فيه."
      ],
      [
        "Nora",
        "Dann bleibt die Rückgabe auf unserer Liste offen.",
        "يبقى ترجيع الطبق يفضل مفتوح في قايمتنا."
      ]
    ],
    "q": [
      [
        "Wem gehört einer der Näpfe?",
        "Der Nachbarin.",
        "Noras Lehrerin.",
        "Niemandem."
      ],
      [
        "Wo ist der Aufkleber?",
        "An der Unterseite.",
        "Im Hundebett.",
        "Auf der Haustür."
      ],
      [
        "Was ist noch nicht vereinbart?",
        "Ein Abholzeitpunkt.",
        "Die Farbe der Tasche.",
        "Ein neuer Kauf."
      ]
    ]
  },
  {
    "id": "hundesachen-selbst-holen",
    "level": "B1",
    "title": [
      "Ich kann erst am Abend",
      "أنا أقدر بالليل بس"
    ],
    "lines": [
      [
        "Omar",
        "Kannst du meine Hundesachen am Nachmittag in den Flur stellen?",
        "تقدري تحطي حاجات كلبي في الطرقة بعد الضهر؟"
      ],
      [
        "Lea",
        "Ich könnte das erst am Abend machen. Passt dir das?",
        "أقدر أعمل ده بالليل بس. ينفع معاك؟"
      ],
      [
        "Omar",
        "Leider nicht. Ich möchte sie schon vorher abholen.",
        "للأسف لأ. عايز آخدها قبل كده."
      ],
      [
        "Lea",
        "Dann holst du sie lieber selbst aus dem Wohnzimmer.",
        "يبقى الأفضل تاخدها بنفسك من أوضة المعيشة."
      ],
      [
        "Omar",
        "Einverstanden. Lass das Hundebett und den Napf bitte dort.",
        "متفقين. سيبي سرير الكلب والطبق هناك لو سمحتي."
      ],
      [
        "Lea",
        "Meine Tasche vor der Tür räume ich weg.",
        "هشيل شنطتي من قدام الباب."
      ],
      [
        "Omar",
        "Danke. Dann ist klar, wer was übernimmt.",
        "شكراً. كده واضح مين هيعمل إيه."
      ]
    ],
    "q": [
      [
        "Wann könnte Lea die erste Aufgabe übernehmen?",
        "Erst am Abend.",
        "Sofort am Morgen.",
        "Gar nicht mehr."
      ],
      [
        "Was soll Lea mit Hundebett und Napf tun?",
        "Sie dort lassen.",
        "Sie verkaufen.",
        "Sie in den Garten stellen."
      ],
      [
        "Was räumt Lea weg?",
        "Ihre Tasche vor der Tür.",
        "Omars Hundebett.",
        "Alle Möbel."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "napf-in-der-kueche": [
    "Er steht in der Küche neben dem Schrank.",
    "Der Ball liegt jetzt im kleinen Korb.",
    "Das lege ich auf das untere Regal."
  ],
  "napf-noch-zurueck": [
    "Einer gehört unserer Nachbarin.",
    "einem Aufkleber an der Unterseite.",
    "Einen Abholzeitpunkt hat sie noch nicht genannt."
  ],
  "hundesachen-selbst-holen": [
    "Ich könnte das erst am Abend machen.",
    "Lass das Hundebett und den Napf bitte dort.",
    "Meine Tasche vor der Tür räume ich weg."
  ]
});

everydayDialogues.push(...[
  {
    "id": "maske-im-reisefach",
    "level": "A1",
    "title": [
      "Noch nicht zur Tür",
      "لسه مش للباب"
    ],
    "lines": [
      [
        "Bruder",
        "Soll ich deine Tasche schon zur Tür tragen?",
        "أشيل شنطتك للباب خلاص؟"
      ],
      [
        "Sara",
        "Noch nicht, bitte. Ich suche meine Schlafmaske.",
        "لسه لو سمحت. بدور على ماسك النوم."
      ],
      [
        "Bruder",
        "Vielleicht im kleinen Fach deiner alten Reisetasche?",
        "يمكن في الجيب الصغير في شنطة سفرك القديمة؟"
      ],
      [
        "Sara",
        "Ja, hier ist sie. Den Kulturbeutel habe ich schon eingepackt.",
        "آه، أهو. شنطة أدوات الحمام حطيتها خلاص."
      ],
      [
        "Bruder",
        "Und die Brille auf dem Nachttisch?",
        "والنضارة اللي على الكومود؟"
      ],
      [
        "Sara",
        "Die brauche ich später noch zum Lesen. Jetzt hole ich meine Jacke.",
        "لسه محتاجاها للقراية بعدين. دلوقتي هجيب جاكيتي."
      ],
      [
        "Bruder",
        "Gut. Dann warte ich mit der Tasche.",
        "تمام. يبقى أستنى بالشنطة."
      ]
    ],
    "q": [
      [
        "Was sucht Sara?",
        "Ihre Schlafmaske.",
        "Einen neuen Pullover.",
        "Den Haustürschlüssel."
      ],
      [
        "Was ist schon eingepackt?",
        "Der Kulturbeutel.",
        "Die Jacke.",
        "Die Brille."
      ],
      [
        "Wozu braucht Sara die Brille später noch?",
        "Zum Lesen.",
        "Zum Kochen.",
        "Zum Packen des Autos."
      ]
    ]
  },
  {
    "id": "gruenes-band-am-griff",
    "level": "A2",
    "title": [
      "Ich stecke sie selbst ein",
      "أنا هحطها بنفسي"
    ],
    "lines": [
      [
        "Tarek",
        "Dieser Kulturbeutel steht neben meiner Jacke. Ist er meiner?",
        "شنطة أدوات الحمام دي جنب جاكيتي. هي بتاعتي؟"
      ],
      [
        "Dalia",
        "Nicht unbedingt. Wir haben die Taschen vorhin verschoben.",
        "مش شرط. إحنا نقلنا الشنط من شوية."
      ],
      [
        "Tarek",
        "Woran erkennst du deinen Beutel?",
        "بتعرفي شنطتك من إيه؟"
      ],
      [
        "Dalia",
        "An dem grünen Band am Griff. Da ist er.",
        "من الشريط الأخضر في المسكة. أهو هناك."
      ],
      [
        "Tarek",
        "Deine Schlafmaske liegt auf dem Sofa. Soll ich sie einpacken?",
        "ماسك نومك على الكنبة. أحطه في الشنطة؟"
      ],
      [
        "Dalia",
        "Gib sie mir bitte. Ich stecke sie selbst in die Seitentasche.",
        "ناولني إياه لو سمحت. هحطه بنفسي في الجيب الجانبي."
      ],
      [
        "Tarek",
        "Hier, bitte. Den fremden Kamm lassen wir hier.",
        "اتفضلي. المشط اللي مش بتاعنا نسيبه هنا."
      ]
    ],
    "q": [
      [
        "Was wurde vorhin verschoben?",
        "Die Taschen.",
        "Die Haustür.",
        "Das Fenster."
      ],
      [
        "Wo ist das grüne Band?",
        "Am Griff von Dalias Beutel.",
        "An Tareks Jacke.",
        "Unter dem Sofa."
      ],
      [
        "Was möchte Dalia selbst einstecken?",
        "Ihre Schlafmaske.",
        "Den fremden Kamm.",
        "Tareks Jacke."
      ]
    ]
  },
  {
    "id": "nur-die-grosse-tasche",
    "level": "B1",
    "title": [
      "Gilt unsere Absprache noch?",
      "اتفاقنا لسه زي ما هو؟"
    ],
    "lines": [
      [
        "Omar",
        "Ich nehme die große Tasche und den kleinen Stoffbeutel, wie besprochen.",
        "هاخد الشنطة الكبيرة والشنطة القماش الصغيرة زي ما اتفقنا."
      ],
      [
        "Lea",
        "Warte bitte kurz. Ich packe noch etwas um.",
        "استنى شوية لو سمحت. لسه هنقل شوية حاجات."
      ],
      [
        "Omar",
        "Der Kulturbeutel kommt in die große Tasche?",
        "شنطة أدوات الحمام هتتحط في الكبيرة؟"
      ],
      [
        "Lea",
        "Genau. Das Buch und die Schlafmaske kommen in den Stoffbeutel.",
        "بالظبط. الكتاب وماسك النوم هيتحطوا في الشنطة القماش."
      ],
      [
        "Omar",
        "Soll ich den dann trotzdem tragen?",
        "أشيلها برضه بعد كده؟"
      ],
      [
        "Lea",
        "Nein, die kleine Tasche bleibt bei mir. Nimm bitte nur die große.",
        "لأ، الشنطة الصغيرة تفضل معايا. خد الكبيرة بس لو سمحت."
      ],
      [
        "Omar",
        "Verstanden: Ich trage nur die große Reisetasche zur Tür.",
        "فهمت: هشيل شنطة السفر الكبيرة بس للباب."
      ]
    ],
    "q": [
      [
        "Was macht Lea noch?",
        "Sie packt etwas um.",
        "Sie kauft einen neuen Koffer.",
        "Sie sucht Omars Schuhe."
      ],
      [
        "Welche Tasche bleibt bei Lea?",
        "Der kleine Stoffbeutel.",
        "Die große Reisetasche.",
        "Keine."
      ],
      [
        "Was bestätigt Omar am Ende?",
        "Er trägt nur die große Reisetasche zur Tür.",
        "Er nimmt weiterhin beide Taschen.",
        "Er trägt den Kulturbeutel allein."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "maske-im-reisefach": [
    "Ich suche meine Schlafmaske.",
    "Den Kulturbeutel habe ich schon eingepackt.",
    "Die brauche ich später noch zum Lesen."
  ],
  "gruenes-band-am-griff": [
    "Wir haben die Taschen vorhin verschoben.",
    "An dem grünen Band am Griff.",
    "Deine Schlafmaske liegt auf dem Sofa."
  ],
  "nur-die-grosse-tasche": [
    "Ich packe noch etwas um.",
    "die kleine Tasche bleibt bei mir.",
    "Ich trage nur die große Reisetasche zur Tür."
  ]
});

everydayDialogues.push(...[
  {
    "id": "rolle-unten-im-schrank",
    "level": "A1",
    "title": [
      "Schau auf das untere Brett",
      "بصّي على الرف اللي تحت"
    ],
    "lines": [
      [
        "Jana",
        "Weißt du, wo die neue Toilettenpapierrolle ist?",
        "تعرف رول ورق التواليت الجديد فين؟"
      ],
      [
        "Max",
        "Im Schrank, auf dem unteren Brett.",
        "في الدولاب على الرف اللي تحت."
      ],
      [
        "Jana",
        "Danke, hier ist sie. Die Handtücher bleiben oben.",
        "شكرًا، أهو. الفوط تفضل فوق."
      ],
      [
        "Max",
        "Soll ich den Mülleimer mitnehmen?",
        "آخد باسكت الزبالة؟"
      ],
      [
        "Jana",
        "Nein, den leere ich später selbst.",
        "لأ، هفضيه بنفسي بعدين."
      ],
      [
        "Max",
        "Dann mache ich den Schrank wieder zu.",
        "يبقى أقفل الدولاب تاني."
      ],
      [
        "Jana",
        "Gut. Die Liste liegt auf dem Küchentisch.",
        "تمام. القايمة على ترابيزة المطبخ."
      ]
    ],
    "q": [
      [
        "Wo soll Jana nachsehen?",
        "Auf dem unteren Brett im Schrank.",
        "Im Kühlschrank.",
        "Unter dem Küchentisch."
      ],
      [
        "Was bleibt oben?",
        "Die Handtücher.",
        "Der Mülleimer.",
        "Die Liste."
      ],
      [
        "Was macht Max mit dem Schrank?",
        "Er macht ihn wieder zu.",
        "Er trägt ihn in die Küche.",
        "Er kauft einen neuen."
      ]
    ]
  },
  {
    "id": "nicht-alles-auf-die-liste",
    "level": "A2",
    "title": [
      "Wir haben noch sechs Rollen",
      "لسه عندنا ست رولات"
    ],
    "lines": [
      [
        "Ben",
        "Ich schreibe Toilettenpapier auf. Im Bad steht nur eine Rolle.",
        "هكتب ورق تواليت. في الحمام فيه رول واحد بس."
      ],
      [
        "Hana",
        "Schauen wir erst in den Vorratsschrank.",
        "نبص الأول في دولاب المخزون."
      ],
      [
        "Ben",
        "Stimmt, hier ist noch eine Packung mit sechs Rollen.",
        "صح، لسه فيه باكت هنا فيه ست رولات."
      ],
      [
        "Hana",
        "Und der Mülleimer neben dem Schreibtisch?",
        "وباسكت الزبالة اللي جنب المكتب؟"
      ],
      [
        "Ben",
        "Den habe ich hinter den Stuhl gestellt. Ich stelle ihn zurück.",
        "أنا حطيته ورا الكرسي. هرجعه مكانه."
      ],
      [
        "Hana",
        "Dann brauchen wir dafür nichts aufzuschreiben.",
        "يبقى مش محتاجين نكتب حاجة بخصوصه."
      ],
      [
        "Ben",
        "Die anderen Schrankfächer haben wir aber noch nicht geprüft.",
        "بس باقي أجزاء الدولاب لسه ماراجعناهاش."
      ]
    ],
    "q": [
      [
        "Wohin schauen sie zuerst?",
        "In den Vorratsschrank.",
        "In den Briefkasten.",
        "Unter das Bett."
      ],
      [
        "Wo steht der Mülleimer gerade?",
        "Hinter dem Stuhl.",
        "Im Auto.",
        "Auf dem Schrank."
      ],
      [
        "Was wurde noch nicht geprüft?",
        "Die anderen Schrankfächer.",
        "Die Packung mit sechs Rollen.",
        "Der Platz hinter dem Stuhl."
      ]
    ]
  },
  {
    "id": "welches-papier-welcher-eimer",
    "level": "B1",
    "title": [
      "Was meinst du mit Papier?",
      "تقصد إيه بالورق؟"
    ],
    "lines": [
      [
        "Mina",
        "Auf dem Zettel steht nur: Papier besorgen. Meinst du Toilettenpapier?",
        "مكتوب في الورقة نجيب ورق بس. تقصد ورق تواليت؟"
      ],
      [
        "Felix",
        "Ich dachte an Druckerpapier. Gut, dass du fragst.",
        "أنا كنت فاكر ورق طابعة. كويس إنك بتسألي."
      ],
      [
        "Mina",
        "Dann prüfe ich zuerst den Vorrat im Schrank. Und welchen Eimer meinst du?",
        "يبقى أبص الأول على المخزون في الدولاب. وتقصد أنهي جردل؟"
      ],
      [
        "Felix",
        "Den kleinen Mülleimer im Keller, nicht den Putzeimer. Den hole ich.",
        "باسكت الزبالة الصغير اللي في البدروم، مش جردل التنضيف. أنا هجيبه."
      ],
      [
        "Mina",
        "Ich schreibe unsere Namen neben die Aufgaben.",
        "هكتب أسامينا جنب المهمات."
      ],
      [
        "Felix",
        "Und das Ergebnis deiner Prüfung tragen wir später ein.",
        "ونتيجة مراجعتك نكتبها بعدين."
      ],
      [
        "Mina",
        "Genau. Die Namen allein bedeuten noch nicht, dass alles erledigt ist.",
        "بالظبط. الأسامي لوحدها مش معناها إن كل حاجة اتعملت."
      ]
    ],
    "q": [
      [
        "Woran hatte Felix bei Papier gedacht?",
        "An Druckerpapier.",
        "An Geschenkband.",
        "An Servietten."
      ],
      [
        "Wer holt den Mülleimer?",
        "Felix.",
        "Mina.",
        "Niemand, sie kaufen einen neuen."
      ],
      [
        "Was tragen sie später ein?",
        "Das Ergebnis der Vorratsprüfung.",
        "Eine schon bezahlte Rechnung.",
        "Den Namen des Vermieters."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "rolle-unten-im-schrank": [
    "Im Schrank, auf dem unteren Brett.",
    "Die Handtücher bleiben oben.",
    "Dann mache ich den Schrank wieder zu."
  ],
  "nicht-alles-auf-die-liste": [
    "Schauen wir erst in den Vorratsschrank.",
    "Den habe ich hinter den Stuhl gestellt.",
    "Die anderen Schrankfächer haben wir aber noch nicht geprüft."
  ],
  "welches-papier-welcher-eimer": [
    "Ich dachte an Druckerpapier.",
    "Den kleinen Mülleimer im Keller, nicht den Putzeimer. Den hole ich.",
    "das Ergebnis deiner Prüfung tragen wir später ein."
  ]
});

everydayDialogues.push(...[
  {
    "id": "schuerze-am-tuerhaken",
    "level": "A1",
    "title": [
      "Das Buch bleibt hier",
      "الكتاب يفضل هنا"
    ],
    "lines": [
      [
        "Nela",
        "Wo ist meine Schürze?",
        "مريلتي فين؟"
      ],
      [
        "Tom",
        "Sie hängt am Haken neben der Tür.",
        "متعلقة على الشماعة جنب الباب."
      ],
      [
        "Nela",
        "Danke. Und das gestreifte Geschirrtuch nehme ich auch mit.",
        "شكرًا. وهاخد فوطة المطبخ المخططة كمان."
      ],
      [
        "Tom",
        "Das weiße lege ich in die obere Schublade.",
        "البيضا هحطها في الدرج اللي فوق."
      ],
      [
        "Nela",
        "Gehört das Kochbuch dir?",
        "كتاب الطبخ ده بتاعك؟"
      ],
      [
        "Tom",
        "Ja, das bleibt hier in der Küche.",
        "آه، ده يفضل هنا في المطبخ."
      ],
      [
        "Nela",
        "Gut. Meine Schürze ist schon in der Tasche.",
        "تمام. مريلتي في الشنطة خلاص."
      ]
    ],
    "q": [
      [
        "Was nimmt Nela außer der Schürze mit?",
        "Das gestreifte Geschirrtuch.",
        "Das Kochbuch.",
        "Den Stuhl."
      ],
      [
        "Wohin kommt das weiße Tuch?",
        "In die obere Schublade.",
        "In Nelas Tasche.",
        "Auf den Boden."
      ],
      [
        "Wo bleibt das Buch?",
        "In der Küche.",
        "Im Auto.",
        "Im Bad."
      ]
    ]
  },
  {
    "id": "gelber-faden-in-der-ecke",
    "level": "A2",
    "title": [
      "Warte, das ist mein Tuch",
      "استنى، دي فوطتي"
    ],
    "lines": [
      [
        "Jonas",
        "Ich nehme das obere Geschirrtuch mit.",
        "هاخد فوطة المطبخ اللي فوق."
      ],
      [
        "Salma",
        "Warte bitte. Mein Tuch hat einen gelben Faden in einer Ecke.",
        "استنى لو سمحت. فوطتي فيها خيط أصفر في ركن."
      ],
      [
        "Jonas",
        "Hier ist der Faden. Dann gehört dieses Tuch dir.",
        "أهو الخيط. يبقى الفوطة دي بتاعتك."
      ],
      [
        "Salma",
        "Genau. Das andere ist deins.",
        "بالظبط. التانية بتاعتك."
      ],
      [
        "Jonas",
        "Soll ich dir deine Schürze von der Tür reichen?",
        "أناولك مريلتك من على الباب؟"
      ],
      [
        "Salma",
        "Ja, bitte. Ich packe sie selbst ein. Zuerst nehme ich deinen Teller heraus.",
        "آه لو سمحت. هحطها بنفسي. الأول أطلع طبقك."
      ],
      [
        "Jonas",
        "Danke. Den Teller kannst du auf die Arbeitsfläche stellen.",
        "شكرًا. ممكن تحطي الطبق على الرخامة."
      ]
    ],
    "q": [
      [
        "Wo ist der gelbe Faden?",
        "In einer Ecke von Salmas Tuch.",
        "An Jonas Tasche.",
        "Am Teller."
      ],
      [
        "Was möchte Salma selbst einpacken?",
        "Ihre Schürze.",
        "Jonas Teller.",
        "Beide Tücher."
      ],
      [
        "Wohin kann Salma den Teller stellen?",
        "Auf die Arbeitsfläche.",
        "In den Mülleimer.",
        "Unter den Stuhl."
      ]
    ]
  },
  {
    "id": "graue-schuerze-ausleihen",
    "level": "B1",
    "title": [
      "Nur die graue Schürze",
      "المريلة الرمادي بس"
    ],
    "lines": [
      [
        "Malik",
        "Kann ich ein Set von der Bank nehmen?",
        "ممكن آخد طقم من على الدكة؟"
      ],
      [
        "Nora",
        "Lass uns erst schauen. Zwei Schürzen gehören meiner Nachbarin.",
        "نشوف الأول. فيه مريلتين بتوع جارتي."
      ],
      [
        "Malik",
        "Ich brauche ohnehin nur eine Schürze. Tücher habe ich zu Hause.",
        "أنا أصلًا محتاج مريلة بس. عندي فوط في البيت."
      ],
      [
        "Nora",
        "Du kannst meine graue ausleihen. Die schwarze behalte ich.",
        "ممكن تستلف الرمادي بتاعتي. السودا هخليها معايا."
      ],
      [
        "Malik",
        "Wann soll ich sie zurückbringen?",
        "أرجعها إمتى؟"
      ],
      [
        "Nora",
        "Das vereinbaren wir später. Bitte leg sie nicht einfach vor die Tür.",
        "نتفق بعدين. لو سمحت ماتسيبهاش قدام الباب وخلاص."
      ],
      [
        "Malik",
        "Gut. Ich bewahre sie auf, bis wir einen Zeitpunkt vereinbart haben.",
        "تمام. هحتفظ بيها لحد ما نتفق على وقت."
      ]
    ],
    "q": [
      [
        "Was braucht Malik?",
        "Nur eine Schürze.",
        "Ein ganzes Set.",
        "Zwei Geschirrtücher."
      ],
      [
        "Welche Schürze behält Nora?",
        "Die schwarze.",
        "Die graue.",
        "Keine."
      ],
      [
        "Was soll Malik nicht ohne Absprache tun?",
        "Die Schürze vor die Tür legen.",
        "Sie bei sich aufbewahren.",
        "Nach einem Zeitpunkt fragen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "schuerze-am-tuerhaken": [
    "das gestreifte Geschirrtuch nehme ich auch mit.",
    "Das weiße lege ich in die obere Schublade.",
    "das bleibt hier in der Küche."
  ],
  "gelber-faden-in-der-ecke": [
    "Mein Tuch hat einen gelben Faden in einer Ecke.",
    "Ich packe sie selbst ein.",
    "auf die Arbeitsfläche stellen."
  ],
  "graue-schuerze-ausleihen": [
    "Ich brauche ohnehin nur eine Schürze.",
    "Die schwarze behalte ich.",
    "Bitte leg sie nicht einfach vor die Tür."
  ]
});

everydayDialogues.push(...[
  {
    "id": "die-dritte-gabel",
    "level": "A1",
    "title": [
      "Jetzt sind es drei",
      "دلوقتي بقوا تلاتة"
    ],
    "lines": [
      [
        "Eva",
        "Wir sind heute zu dritt. Wie viele Gabeln liegen da?",
        "إحنا النهارده تلاتة. فيه كام شوكة هناك؟"
      ],
      [
        "Rami",
        "Zwei. Ich hole noch eine aus der Schublade.",
        "اتنين. هجيب واحدة كمان من الدرج."
      ],
      [
        "Eva",
        "Danke. Dann hat jeder Platz eine.",
        "شكرًا. كده كل مكان فيه واحدة."
      ],
      [
        "Rami",
        "Soll ich auch die kleinen Schüsseln holen?",
        "أجيب السلطانيات الصغيرة كمان؟"
      ],
      [
        "Eva",
        "Nein, die bleiben im Schrank. Ich nehme die große für den Salat.",
        "لأ، دول يفضلوا في الدولاب. هاخد الكبيرة للسلطة."
      ],
      [
        "Rami",
        "Das Brot lege ich auf einen eigenen Teller.",
        "العيش هحطه في طبق لوحده."
      ],
      [
        "Eva",
        "Gut. Der Salat kommt später.",
        "تمام. السلطة هتيجي بعدين."
      ]
    ],
    "q": [
      [
        "Wie viele Personen essen zusammen?",
        "Drei.",
        "Zwei.",
        "Vier."
      ],
      [
        "Welche Schüssel nimmt Eva?",
        "Die große.",
        "Die kleinste.",
        "Keine."
      ],
      [
        "Worauf kommt das Brot?",
        "Auf einen eigenen Teller.",
        "In die Schublade.",
        "Auf eine Serviette im Schrank."
      ]
    ]
  },
  {
    "id": "die-groessere-mit-salat",
    "level": "A2",
    "title": [
      "Welche blaue Schüssel?",
      "أنهي سلطانية زرقا؟"
    ],
    "lines": [
      [
        "Paul",
        "Meinst du die kleine blaue Schüssel im Regal?",
        "تقصدّي السلطانية الزرقا الصغيرة على الرف؟"
      ],
      [
        "Leila",
        "Nein, die größere auf der Arbeitsfläche. Da ist der Salat drin.",
        "لأ، الكبيرة اللي على الرخامة. السلطة جواها."
      ],
      [
        "Paul",
        "Gut. Vier Gabeln liegen schon auf dem Tisch.",
        "تمام. فيه أربع شوك على الترابيزة خلاص."
      ],
      [
        "Leila",
        "Unsere Freundin kommt aber allein. Ihr Bruder isst nicht mit.",
        "بس صاحبتنا جاية لوحدها. أخوها مش هياكل معانا."
      ],
      [
        "Paul",
        "Dann nehme ich einen Teller und eine Gabel wieder weg.",
        "يبقى أشيل طبق وشوكة تاني."
      ],
      [
        "Leila",
        "Ja. Die Salatschüssel bleibt in der Mitte.",
        "آه. سلطانية السلطة تفضل في النص."
      ],
      [
        "Paul",
        "Über die Portionen sprechen wir später.",
        "نتكلم عن الكميات لكل واحد بعدين."
      ]
    ],
    "q": [
      [
        "Wo ist der Salat?",
        "In der größeren Schüssel auf der Arbeitsfläche.",
        "In der kleinen Schüssel im Regal.",
        "Auf dem vierten Teller."
      ],
      [
        "Wie viele Gabeln bleiben auf dem Tisch?",
        "Drei.",
        "Vier.",
        "Zwei."
      ],
      [
        "Was bleibt in der Mitte?",
        "Die Salatschüssel.",
        "Die kleine leere Schüssel.",
        "Der vierte Teller."
      ]
    ]
  },
  {
    "id": "drei-bestaetigt-eine-offen",
    "level": "B1",
    "title": [
      "Geschirr ist keine Gästeliste",
      "أدوات السفرة مش قايمة ضيوف"
    ],
    "lines": [
      [
        "David",
        "Du hast vier Gabeln notiert. Kommen also vier Gäste?",
        "إنتِ كاتبة أربع شوك. يعني فيه أربع ضيوف جايين؟"
      ],
      [
        "Mira",
        "Nein, das war nur der geplante Tischaufbau. Eine Freundin hat zugesagt.",
        "لأ، ده كان شكل السفرة اللي مخططاله بس. صاحبة واحدة أكدت."
      ],
      [
        "David",
        "Mit uns sind es dann drei bestätigte Personen.",
        "يبقى معانا فيه تلات أشخاص مؤكدين."
      ],
      [
        "Mira",
        "Genau. Eine weitere Antwort steht noch aus.",
        "بالظبط. لسه مستنيين رد واحد كمان."
      ],
      [
        "David",
        "Ich halte den vierten Teller und eine Gabel im Schrank bereit.",
        "هخلي الطبق الرابع وشوكة جاهزين في الدولاب."
      ],
      [
        "Mira",
        "Die große Schüssel brauchen wir in jedem Fall für den Salat.",
        "السلطانية الكبيرة محتاجينها في كل الأحوال للسلطة."
      ],
      [
        "David",
        "Die Menge entscheiden wir nach der letzten Antwort.",
        "الكمية نقررها بعد آخر رد."
      ]
    ],
    "q": [
      [
        "Wie viele Personen sind einschließlich Mira und David bestätigt?",
        "Drei.",
        "Vier.",
        "Eine."
      ],
      [
        "Wo hält David den zusätzlichen Teller bereit?",
        "Im Schrank.",
        "Im Keller.",
        "Vor der Tür."
      ],
      [
        "Wofür brauchen sie die große Schüssel?",
        "Für den gemeinsamen Salat.",
        "Für die Gästeliste.",
        "Für die Gabeln im Schrank."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "die-dritte-gabel": [
    "Wir sind heute zu dritt.",
    "Ich nehme die große für den Salat.",
    "Das Brot lege ich auf einen eigenen Teller."
  ],
  "die-groessere-mit-salat": [
    "die größere auf der Arbeitsfläche. Da ist der Salat drin.",
    "Vier Gabeln liegen schon auf dem Tisch.",
    "Die Salatschüssel bleibt in der Mitte."
  ],
  "drei-bestaetigt-eine-offen": [
    "Mit uns sind es dann drei bestätigte Personen.",
    "Ich halte den vierten Teller und eine Gabel im Schrank bereit.",
    "für den Salat."
  ]
});

everydayDialogues.push(...[
  {
    "id": "blatt-statt-klemmbrett",
    "level": "A1",
    "title": [
      "Du kannst ein Blatt haben",
      "ممكن تاخد ورقة"
    ],
    "lines": [
      [
        "Jule",
        "Wo ist mein gelber Textmarker?",
        "قلم التحديد الأصفر بتاعي فين؟"
      ],
      [
        "Amir",
        "Im Regal, neben dem Wörterbuch.",
        "على الرف جنب القاموس."
      ],
      [
        "Jule",
        "Danke. Ich markiere nur dieses eine Wort.",
        "شكرًا. هحدد الكلمة دي بس."
      ],
      [
        "Amir",
        "Kann ich das Klemmbrett mitnehmen?",
        "ممكن آخد اللوحة اللي بمشبك؟"
      ],
      [
        "Jule",
        "Ich brauche es noch. Aber du kannst ein leeres Blatt haben.",
        "لسه محتاجاها. بس ممكن تاخد ورقة فاضية."
      ],
      [
        "Amir",
        "Gut, das lege ich in meinen Ordner.",
        "تمام، هحطها في الملف بتاعي."
      ],
      [
        "Jule",
        "Das Klemmbrett bleibt dann hier.",
        "يبقى اللوحة تفضل هنا."
      ]
    ],
    "q": [
      [
        "Welche Farbe hat der Textmarker?",
        "Gelb.",
        "Blau.",
        "Rot."
      ],
      [
        "Was braucht Jule noch?",
        "Das Klemmbrett.",
        "Amirs Ordner.",
        "Ein neues Regal."
      ],
      [
        "Wohin legt Amir das Blatt?",
        "In seinen Ordner.",
        "Auf den Boden.",
        "Ins Wörterbuch."
      ]
    ]
  },
  {
    "id": "nicht-direkt-ins-blatt",
    "level": "A2",
    "title": [
      "Frag bitte erst nach",
      "اسأل الأول لو سمحت"
    ],
    "lines": [
      [
        "Emil",
        "Die gelben Stellen hast du also schon verstanden?",
        "يعني الأماكن الصفرا فهمتيها خلاص؟"
      ],
      [
        "Farah",
        "Nein. Gelb heißt heute: Hier möchte ich noch nachfragen.",
        "لأ. الأصفر النهارده معناه: هنا لسه عايزة أسأل."
      ],
      [
        "Emil",
        "Ich habe einen grünen Textmarker. Darf ich etwas ergänzen?",
        "معايا قلم تحديد أخضر. ينفع أضيف حاجة؟"
      ],
      [
        "Farah",
        "Bitte nicht direkt auf dem Übungsblatt. Schreib deine Vorschläge auf ein leeres Blatt.",
        "لو سمحت مش على ورقة التدريب مباشرة. اكتب اقتراحاتك على ورقة فاضية."
      ],
      [
        "Emil",
        "Dann vergleichen wir die Blätter danach.",
        "يبقى نقارن الورق بعد كده."
      ],
      [
        "Farah",
        "Genau. Der Übungstext bleibt vorn am Klemmbrett.",
        "بالظبط. نص التدريب يفضل قدام على اللوحة."
      ],
      [
        "Emil",
        "Die Farben für das nächste Treffen besprechen wir später.",
        "نتكلم عن ألوان المقابلة الجاية بعدين."
      ]
    ],
    "q": [
      [
        "Was hatte Emil zuerst angenommen?",
        "Die gelben Stellen seien schon verstanden.",
        "Das Klemmbrett sei leer.",
        "Farah habe keinen Übungstext."
      ],
      [
        "Welche Farbe hat Emils Textmarker?",
        "Grün.",
        "Gelb.",
        "Blau."
      ],
      [
        "Wann wollen sie die Blätter vergleichen?",
        "Nach dem Notieren der Vorschläge.",
        "Gar nicht.",
        "Erst nach dem nächsten Treffen."
      ]
    ]
  },
  {
    "id": "vorschlag-keine-auswahl",
    "level": "B1",
    "title": [
      "Die Liste bleibt unverändert",
      "القايمة تفضل زي ما هي"
    ],
    "lines": [
      [
        "Leon",
        "Ist der gelb markierte Titel schon ausgewählt?",
        "العنوان المتعلم بالأصفر اتختار خلاص؟"
      ],
      [
        "Sina",
        "Nein. Dazu habe ich noch eine Frage. Die Auswahl ist offen.",
        "لأ. عندي سؤال عنه لسه. الاختيار لسه مفتوح."
      ],
      [
        "Leon",
        "Dann schreibe ich meine Vorschläge auf die ursprüngliche Liste.",
        "يبقى أكتب اقتراحاتي على القايمة الأصلية."
      ],
      [
        "Sina",
        "Bitte auf ein eigenes Blatt. Die ursprüngliche Liste bleibt unverändert.",
        "لو سمحت في ورقة لوحدها. القايمة الأصلية تفضل زي ما هي."
      ],
      [
        "Leon",
        "Gut. Ich schreibe meinen Namen dazu, damit die Herkunft klar ist.",
        "تمام. هكتب اسمي معاهم عشان يبقى المصدر واضح."
      ],
      [
        "Sina",
        "Das ist keine Zustimmung der ganzen Gruppe.",
        "ده مش موافقة المجموعة كلها."
      ],
      [
        "Leon",
        "Genau. Über die Auswahl sprechen wir erst gemeinsam.",
        "بالظبط. الاختيار نتكلم عنه مع بعض الأول."
      ]
    ],
    "q": [
      [
        "Was erklärt die gelbe Markierung hier?",
        "Eine offene Frage.",
        "Eine endgültige Auswahl.",
        "Einen bezahlten Kauf."
      ],
      [
        "Worauf schreibt Leon seine Vorschläge?",
        "Auf ein eigenes Blatt.",
        "Auf die ursprüngliche Liste.",
        "Auf das Mäppchen."
      ],
      [
        "Wofür steht sein Name?",
        "Für die Herkunft der Vorschläge.",
        "Für die Zustimmung aller.",
        "Für den Preis der Bücher."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "blatt-statt-klemmbrett": [
    "mein gelber Textmarker",
    "Ich brauche es noch.",
    "das lege ich in meinen Ordner."
  ],
  "nicht-direkt-ins-blatt": [
    "Die gelben Stellen hast du also schon verstanden?",
    "einen grünen Textmarker",
    "Dann vergleichen wir die Blätter danach."
  ],
  "vorschlag-keine-auswahl": [
    "Dazu habe ich noch eine Frage.",
    "Bitte auf ein eigenes Blatt.",
    "damit die Herkunft klar ist."
  ]
});

everydayDialogues.push(...[
  {
    "id": "ben-erst-fragen",
    "level": "A1",
    "title": [
      "Schau erst zu Hause nach",
      "بص الأول في البيت"
    ],
    "lines": [
      [
        "Lara",
        "Ich möchte mit dir lernen. Wann hast du Zeit?",
        "عايزة أذاكر معاك. إنت فاضي إمتى؟"
      ],
      [
        "Ben",
        "Ich muss erst in meinen Kalender schauen.",
        "لازم أبص الأول في التقويم بتاعي."
      ],
      [
        "Lara",
        "Hast du ihn dabei?",
        "هو معاك؟"
      ],
      [
        "Ben",
        "Nein, er liegt zu Hause. Ich schreibe dir am Abend.",
        "لأ، هو في البيت. هبعتلك بالليل."
      ],
      [
        "Lara",
        "Dann schreibe ich noch keine Uhrzeit auf.",
        "يبقى لسه مش هكتب ساعة."
      ],
      [
        "Ben",
        "Was steht in deinem Notizbuch?",
        "إيه المكتوب في نوتتك؟"
      ],
      [
        "Lara",
        "Nur eine Erinnerung: Ben fragen.",
        "تذكير بس: أسأل بن."
      ]
    ],
    "q": [
      [
        "Wo liegt Bens Kalender?",
        "Zu Hause.",
        "In Laras Tasche.",
        "Im Wohnzimmer."
      ],
      [
        "Wann möchte Ben schreiben?",
        "Am Abend.",
        "Sofort.",
        "Erst im nächsten Jahr."
      ],
      [
        "Was ist der Eintrag im Notizbuch?",
        "Eine Erinnerung.",
        "Eine feste Uhrzeit.",
        "Eine Absage."
      ]
    ]
  },
  {
    "id": "eine-zeit-auswaehlen",
    "level": "A2",
    "title": [
      "Wir meinen ein Treffen",
      "إحنا قصدنا مقابلة واحدة"
    ],
    "lines": [
      [
        "Timo",
        "16 Uhr und 18 Uhr: Treffen wir uns zweimal?",
        "الساعة 16 والساعة 18: هنتقابل مرتين؟"
      ],
      [
        "Nora",
        "Nein, das sind zwei Vorschläge für ein Treffen.",
        "لأ، دول اقتراحين لمقابلة واحدة."
      ],
      [
        "Timo",
        "Um 16 Uhr arbeite ich noch. 18 Uhr passt.",
        "الساعة 16 لسه بشتغل. الساعة 18 مناسبة."
      ],
      [
        "Nora",
        "Mir auch. Dann fangen wir um 18 Uhr in meiner Küche an.",
        "ليا كمان. يبقى نبدأ الساعة 18 في مطبخي."
      ],
      [
        "Timo",
        "Ich trage das in meinen Kalender ein.",
        "هكتب ده في التقويم بتاعي."
      ],
      [
        "Nora",
        "Ich streiche die andere Zeit im Notizbuch durch.",
        "هشطب الوقت التاني في النوتة."
      ],
      [
        "Timo",
        "Wie lange arbeiten wir? Das müssen wir noch besprechen.",
        "هنشتغل قد إيه؟ لسه لازم نتكلم في ده."
      ]
    ],
    "q": [
      [
        "Wie viele Treffen wollen sie?",
        "Eines.",
        "Zwei.",
        "Keines."
      ],
      [
        "Welche Zeit passt beiden?",
        "18 Uhr.",
        "16 Uhr.",
        "12 Uhr."
      ],
      [
        "Was müssen sie noch besprechen?",
        "Die Dauer.",
        "Noras Namen.",
        "Ob Timo einen Kalender hat."
      ]
    ]
  },
  {
    "id": "nur-ein-neuer-beginn",
    "level": "B1",
    "title": [
      "Auch die Erinnerung ändern",
      "نغير التذكير كمان"
    ],
    "lines": [
      [
        "Oskar",
        "Dann gilt jetzt 18 Uhr statt 17 Uhr, richtig?",
        "يبقى دلوقتي الساعة 18 بدل الساعة 17، صح؟"
      ],
      [
        "Mila",
        "Ja, das haben wir beide bestätigt. Der Ort bleibt mein Wohnzimmer.",
        "أيوه، إحنا الاتنين أكدنا ده. المكان لسه أوضة المعيشة عندي."
      ],
      [
        "Oskar",
        "Mein Kalender ist angepasst. Aber die alte Erinnerung ist noch aktiv.",
        "التقويم اتعدل. بس التذكير القديم لسه شغال."
      ],
      [
        "Mila",
        "Die musst du getrennt ändern. Mein Papierkalender macht das nicht.",
        "لازم تغيره لوحده. التقويم الورقي بتاعي مش بيعمل ده."
      ],
      [
        "Oskar",
        "Erledigt. Die Erinnerung passt jetzt zum neuen Beginn.",
        "اتعمل. التذكير دلوقتي موافق البداية الجديدة."
      ],
      [
        "Mila",
        "Über die Reihenfolge der Texte sprechen wir erst bei der Probe.",
        "ترتيب النصوص نتكلم فيه وقت التمرين الأول."
      ],
      [
        "Oskar",
        "Gut. Eine Probe, um 18 Uhr, bei dir im Wohnzimmer.",
        "تمام. تمرين واحد، الساعة 18، عندك في أوضة المعيشة."
      ]
    ],
    "q": [
      [
        "Was bleibt gleich?",
        "Der Treffpunkt.",
        "Die alte Anfangszeit.",
        "Die alte Handy-Erinnerung."
      ],
      [
        "Was musste Oskar getrennt ändern?",
        "Die Erinnerung.",
        "Milas Papierkalender.",
        "Den Namen der Mitbewohnerin."
      ],
      [
        "Wann besprechen sie die Textreihenfolge?",
        "Bei der Probe.",
        "Das haben sie bereits abgeschlossen.",
        "Gar nicht."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "ben-erst-fragen": [
    "er liegt zu Hause.",
    "Ich schreibe dir am Abend.",
    "Nur eine Erinnerung: Ben fragen."
  ],
  "eine-zeit-auswaehlen": [
    "zwei Vorschläge für ein Treffen.",
    "Dann fangen wir um 18 Uhr",
    "Wie lange arbeiten wir?"
  ],
  "nur-ein-neuer-beginn": [
    "Der Ort bleibt mein Wohnzimmer.",
    "Die musst du getrennt ändern.",
    "erst bei der Probe."
  ]
});

everydayDialogues.push(...[
  {
    "id": "beutel-in-der-dose",
    "level": "A1",
    "title": [
      "Schau in die blaue Dose",
      "بصي في العلبة الزرقا"
    ],
    "lines": [
      [
        "Ella",
        "Liegt ein Teebeutel in der Tasse?",
        "فيه كيس شاي في الفنجان؟"
      ],
      [
        "Jonas",
        "Nein, die ist leer. Die Beutel sind in der blauen Dose.",
        "لأ، هو فاضي. الأكياس في العلبة الزرقا."
      ],
      [
        "Ella",
        "Dann nehme ich einen und lege ihn auf den Teller.",
        "يبقى آخد واحد وأحطه على الطبق."
      ],
      [
        "Jonas",
        "Brauchst du auch das Tee-Ei?",
        "محتاجة كمان مصفاة الشاي الكروية؟"
      ],
      [
        "Ella",
        "Nein, das lasse ich hier.",
        "لأ، هسيبها هنا."
      ],
      [
        "Jonas",
        "Ich lege es in die kleine Schachtel.",
        "هحطها في العلبة الصغيرة."
      ],
      [
        "Ella",
        "Gut. Danach möchte ich mein Buch weiterlesen.",
        "تمام. بعد كده عايزة أكمل قراية كتابي."
      ]
    ],
    "q": [
      [
        "Was ist leer?",
        "Die Tasse.",
        "Die blaue Dose.",
        "Das Regal."
      ],
      [
        "Was nimmt Ella?",
        "Einen Teebeutel.",
        "Das Tee-Ei.",
        "Die Schachtel."
      ],
      [
        "Was möchte Ella danach tun?",
        "Ihr Buch weiterlesen.",
        "Eine Dose kaufen.",
        "Das Regal tragen."
      ]
    ]
  },
  {
    "id": "gegenstand-oder-sorte",
    "level": "A2",
    "title": [
      "Ich meine das Tee-Ei",
      "قصدي المصفاة الكروية"
    ],
    "lines": [
      [
        "Malik",
        "Wo ist das kleine Ding für den Tee?",
        "فين الحاجة الصغيرة بتاعة الشاي؟"
      ],
      [
        "Pia",
        "Meinst du einen Teebeutel? Die Packung steht im Regal.",
        "تقصد كيس شاي؟ العبوة على الرف."
      ],
      [
        "Malik",
        "Nein, das Tee-Ei aus Metall, mit der Kette.",
        "لأ، مصفاة الشاي الكروية المعدن، اللي بسلسلة."
      ],
      [
        "Pia",
        "Ach so. Das liegt in der Schachtel neben den Tassen.",
        "آه فهمت. هي في العلبة الصغيرة جنب الفناجين."
      ],
      [
        "Malik",
        "Danke. Welche Sorten haben wir? Ich lese erst die Namen.",
        "شكرًا. عندنا أنواع إيه؟ أقرا الأسامي الأول."
      ],
      [
        "Pia",
        "Dann hole ich noch keine Packung heraus.",
        "يبقى لسه مش هطلع عبوة."
      ],
      [
        "Malik",
        "Genau. Den Gegenstand haben wir, die Sorte wählen wir noch.",
        "بالظبط. لقينا الأداة، ولسه هنختار النوع."
      ]
    ],
    "q": [
      [
        "Was hatte Pia zuerst verstanden?",
        "Einen Teebeutel.",
        "Ein Tee-Ei.",
        "Einen Untersetzer."
      ],
      [
        "Was nennt Malik zur Beschreibung?",
        "Metall und Kette.",
        "Rot und Papier.",
        "Holz und Griff."
      ],
      [
        "Was wählen sie noch?",
        "Die Teesorte.",
        "Den Tisch.",
        "Die Schachtel."
      ]
    ]
  },
  {
    "id": "bis-zum-naechsten-treffen",
    "level": "B1",
    "title": [
      "Ich bringe es wieder mit",
      "هجيبه معايا تاني"
    ],
    "lines": [
      [
        "Runa",
        "Soll das Tee-Ei in unserer gemeinsamen Schublade bleiben?",
        "مصفاة الشاي الكروية تفضل في الدرج المشترك بتاعنا؟"
      ],
      [
        "David",
        "Nur bis zu unserem nächsten Treffen. Ich leihe es dir.",
        "لحد مقابلتنا الجاية بس. أنا مسلفهالك."
      ],
      [
        "Runa",
        "Also kein Geschenk. Ich lege es in eine Schachtel mit deinem Namen.",
        "يعني مش هدية. هحطها في علبة صغيرة عليها اسمك."
      ],
      [
        "David",
        "Genau. Dann ist klar, wem es gehört.",
        "بالظبط. كده يبقى واضح هي بتاعة مين."
      ],
      [
        "Runa",
        "Zum nächsten Treffen bringe ich es mit. Welcher Tag passt?",
        "هجيبها معايا المقابلة الجاية. أنهي يوم مناسب؟"
      ],
      [
        "David",
        "Ich muss erst in meinen Kalender schauen.",
        "لازم أبص الأول في التقويم بتاعي."
      ],
      [
        "Runa",
        "Dann notiere ich nur die Rückgabe, noch keinen festen Tag.",
        "يبقى أسجل الترجيع بس، ولسه مش يوم ثابت."
      ]
    ],
    "q": [
      [
        "Ist das Tee-Ei ein Geschenk?",
        "Nein, es ist geliehen.",
        "Ja, für alle Mitbewohner.",
        "Ja, für David."
      ],
      [
        "Warum steht Davids Name auf der Schachtel?",
        "Damit klar ist, wem es gehört.",
        "Weil er die Teekasse verwaltet.",
        "Weil die Schachtel verkauft wird."
      ],
      [
        "Was ist noch nicht fest?",
        "Der Tag des nächsten Treffens.",
        "Die Rückgabe beim nächsten Treffen.",
        "Die Eigentümerschaft."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "beutel-in-der-dose": [
    "die ist leer.",
    "Dann nehme ich einen",
    "mein Buch weiterlesen."
  ],
  "gegenstand-oder-sorte": [
    "Meinst du einen Teebeutel?",
    "aus Metall, mit der Kette.",
    "die Sorte wählen wir noch."
  ],
  "bis-zum-naechsten-treffen": [
    "Ich leihe es dir.",
    "Dann ist klar, wem es gehört.",
    "noch keinen festen Tag."
  ]
});

everydayDialogues.push(...[
  {
    "id": "pinsel-auf-dem-tablett",
    "level": "A1",
    "title": [
      "Lass ihn auf dem Tablett",
      "سيبه على الصينية"
    ],
    "lines": [
      [
        "Mira",
        "Wo steht der Messbecher? Bei den Tassen?",
        "كوباية المعيار فين؟ عند الفناجين؟"
      ],
      [
        "Nils",
        "Nein, im Regal hinter der Schüssel.",
        "لأ، على الرف ورا السلطانية."
      ],
      [
        "Mira",
        "Danke. Ich stelle ihn auf den Tisch.",
        "شكرًا. هحطها على الترابيزة."
      ],
      [
        "Nils",
        "Und den Backpinsel lege ich in die Schublade.",
        "وفرشة المعجنات هحطها في الدرج."
      ],
      [
        "Mira",
        "Die ist voll. Lass ihn bitte auf dem Tablett.",
        "هو مليان. سيبها على الصينية لو سمحت."
      ],
      [
        "Nils",
        "Für die Löffel habe ich eine kleine Schachtel gefunden.",
        "لقيت علبة صغيرة للمعلقتين."
      ],
      [
        "Mira",
        "Gut, die Löffel kommen hinein.",
        "تمام، المعلقتين يتحطوا جواها."
      ]
    ],
    "q": [
      [
        "Wo findet Mira den Messbecher?",
        "Hinter der Schüssel.",
        "Unter dem Tablett.",
        "Bei den Tassen."
      ],
      [
        "Was ist voll?",
        "Die Schublade.",
        "Der Messbecher.",
        "Die Schachtel."
      ],
      [
        "Wofür ist die Schachtel?",
        "Für die Löffel.",
        "Für den Pinsel.",
        "Für das Regal."
      ]
    ]
  },
  {
    "id": "keine-aktuelle-einkaufsliste",
    "level": "A2",
    "title": [
      "Die Notiz gehört zum Rezept",
      "الملحوظة تخص الوصفة"
    ],
    "lines": [
      [
        "Paul",
        "Die Menge Milch auf dem Zettel soll ich also kaufen?",
        "يعني أشتري كمية اللبن اللي مكتوبة في الورقة؟"
      ],
      [
        "Enna",
        "Nein, das ist eine ältere Rezeptnotiz, keine Einkaufsliste.",
        "لأ، دي ملحوظة وصفة قديمة، مش قايمة مشتريات."
      ],
      [
        "Paul",
        "Dann gehe ich noch nicht los. Und brauchen wir einen neuen Backpinsel?",
        "يبقى لسه مش هنزل. ومحتاجين فرشة معجنات جديدة؟"
      ],
      [
        "Enna",
        "Nein. Der hier bekommt nur einen anderen Platz.",
        "لأ. دي مكانها هيتغير بس."
      ],
      [
        "Paul",
        "In das freie Fach neben den Backformen?",
        "في الخانة الفاضية جنب قوالب الخبيز؟"
      ],
      [
        "Enna",
        "Genau. Danach schauen wir erst in den Kühlschrank.",
        "بالظبط. بعد كده نبص الأول في التلاجة."
      ],
      [
        "Paul",
        "Die Zutaten prüfen wir später mit dem ausgewählten Rezept.",
        "نراجع المكونات بعدين مع الوصفة اللي نختارها."
      ]
    ],
    "q": [
      [
        "Ist der Zettel eine aktuelle Einkaufsliste?",
        "Nein, eine ältere Rezeptnotiz.",
        "Ja, für Paul.",
        "Ja, für Ennas Besuch."
      ],
      [
        "Was passiert mit dem vorhandenen Pinsel?",
        "Er bekommt einen anderen Platz.",
        "Er wird verkauft.",
        "Er wird weggeworfen."
      ],
      [
        "Womit prüfen sie später die Zutaten?",
        "Mit dem ausgewählten Rezept.",
        "Mit Pauls Tasche.",
        "Mit einem Kalender."
      ]
    ]
  },
  {
    "id": "erst-zurueck-dann-pruefen",
    "level": "B1",
    "title": [
      "Die Rückgabe ist erledigt",
      "الترجيع خلص"
    ],
    "lines": [
      [
        "Liv",
        "Karims Name heißt: Er soll die Sachen noch mitbringen?",
        "اسم كريم معناه إنه لسه هيجيب الحاجات؟"
      ],
      [
        "Ada",
        "Nein, ich habe sie von ihm geliehen und möchte sie zurückgeben.",
        "لأ، أنا واخداهم منه سلفة وعايزة أرجعهم."
      ],
      [
        "Liv",
        "Die Einkaufsideen schreibe ich dann auf ein anderes Blatt.",
        "يبقى أكتب أفكار المشتريات في ورقة تانية."
      ],
      [
        "Karim",
        "Ich kann Messbecher und Backpinsel jetzt mitnehmen.",
        "أقدر آخد كوباية المعيار وفرشة المعجنات دلوقتي."
      ],
      [
        "Ada",
        "Hier sind beide. Ich notiere die Rückgabe.",
        "الاتنين أهو. هسجل الترجيع."
      ],
      [
        "Liv",
        "Brauchen wir später einen eigenen Messbecher?",
        "هنحتاج كوباية معيار بتاعتنا بعدين؟"
      ],
      [
        "Ada",
        "Das prüfen wir erst. Die Rückgabe ist erledigt, ein Kauf nicht beschlossen.",
        "نبص على ده الأول. الترجيع خلص، والشراء ماتقررش."
      ]
    ],
    "q": [
      [
        "Was kommt auf das andere Blatt?",
        "Die Einkaufsideen.",
        "Karims Rechnung.",
        "Eine feste Bestellung."
      ],
      [
        "Wer nimmt die beiden Gegenstände mit?",
        "Karim.",
        "Liv.",
        "Niemand."
      ],
      [
        "Was ist bereits erledigt?",
        "Die Rückgabe.",
        "Ein neuer Einkauf.",
        "Die Prüfung des gesamten Vorrats."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "pinsel-auf-dem-tablett": [
    "im Regal hinter der Schüssel.",
    "Die ist voll.",
    "Für die Löffel"
  ],
  "keine-aktuelle-einkaufsliste": [
    "eine ältere Rezeptnotiz",
    "nur einen anderen Platz.",
    "mit dem ausgewählten Rezept."
  ],
  "erst-zurueck-dann-pruefen": [
    "Die Einkaufsideen",
    "jetzt mitnehmen.",
    "Die Rückgabe ist erledigt"
  ]
});

everydayDialogues.push(...[
  {
    "id": "platz-links-neben-dem-rahmen",
    "level": "A1",
    "title": [
      "Das Buch kommt auf den Tisch",
      "الكتاب يتحط على الترابيزة"
    ],
    "lines": [
      [
        "Nele",
        "Die Vase soll links neben den Bilderrahmen.",
        "الفازة تتحط شمال البرواز."
      ],
      [
        "Jona",
        "Dort liegt noch mein Buch. Ich lege es auf den Couchtisch.",
        "لسه كتابي هناك. هحطه على ترابيزة الصالون."
      ],
      [
        "Nele",
        "Jetzt ist genug Platz. Soll das Foto im Rahmen bleiben?",
        "دلوقتي فيه مكان كفاية. الصورة تفضل في البرواز؟"
      ],
      [
        "Jona",
        "Ja. Das Foto vom See gefällt mir.",
        "أيوه. صورة البحيرة عاجباني."
      ],
      [
        "Nele",
        "Blumen haben wir heute nicht. Die Vase bleibt leer.",
        "معندناش ورد النهارده. الفازة تفضل فاضية."
      ],
      [
        "Jona",
        "Das ist in Ordnung. Die zwei Schachteln lassen wir unten.",
        "عادي. نسيب العلبتين تحت."
      ],
      [
        "Nele",
        "Dann setzen wir uns aufs Sofa. Erzähl mir von dem See.",
        "يبقى نقعد على الكنبة. احكي لي عن البحيرة."
      ]
    ],
    "q": [
      [
        "Wohin soll die Vase?",
        "Links neben den Bilderrahmen.",
        "Unter das Sofa.",
        "In eine Schachtel."
      ],
      [
        "Was gefällt Jona?",
        "Das Foto vom See.",
        "Ein neues Buch im Rahmen.",
        "Die kaputte Vase."
      ],
      [
        "Was lassen sie unten?",
        "Die zwei Schachteln.",
        "Die Blumen.",
        "Das Foto."
      ]
    ]
  },
  {
    "id": "zwei-kopien-zwei-plaetze",
    "level": "A2",
    "title": [
      "Die erste Kopie bleibt",
      "النسخة الأولى تفضل"
    ],
    "lines": [
      [
        "Daria",
        "Soll die neue Kopie das Foto auf deinem Schreibtisch ersetzen?",
        "النسخة الجديدة هتبدل الصورة اللي على مكتبك؟"
      ],
      [
        "Ruben",
        "Nein. Eine bleibt in meiner Mappe, die andere kommt in den Flur.",
        "لأ. واحدة تفضل في الملف بتاعي والتانية تبقى في الطرقة."
      ],
      [
        "Daria",
        "Der Ausdruck passt in den Bilderrahmen.",
        "مقاس النسخة المطبوعة مناسب للبرواز."
      ],
      [
        "Ruben",
        "Danke. Ich setze ihn später ein.",
        "شكرًا. هدخله فيه بعدين."
      ],
      [
        "Daria",
        "Und die Vase stellen wir auf die freie Ecke deines Schreibtischs?",
        "والفازة نحطها على الركن الفاضي في مكتبك؟"
      ],
      [
        "Ruben",
        "Ja, nur die Vase. Alles andere im Flur bleibt stehen.",
        "أيوه، الفازة بس. باقي الحاجات اللي في الطرقة تفضل مكانها."
      ],
      [
        "Daria",
        "Gut. Der Ausdruck liegt bis später neben dem Rahmen.",
        "تمام. النسخة المطبوعة تفضل جنب البرواز لبعدين."
      ]
    ],
    "q": [
      [
        "Was wird nicht ersetzt?",
        "Die erste Kopie.",
        "Eine kaputte Scheibe.",
        "Ein verlorener Rahmen."
      ],
      [
        "Wann setzt Ruben den Ausdruck ein?",
        "Später.",
        "Noch vor dem Gespräch.",
        "Gar nicht, er wirft ihn weg."
      ],
      [
        "Was bekommt einen neuen Platz?",
        "Nur die Vase.",
        "Alle Flurmöbel.",
        "Die Mappe."
      ]
    ]
  },
  {
    "id": "nur-der-leere-rahmen",
    "level": "B1",
    "title": [
      "Die Vase bleibt bei mir",
      "الفازة تفضل عندي"
    ],
    "lines": [
      [
        "Finn",
        "Dürfen wir Bilderrahmen und Vase für den Leseabend mitnehmen?",
        "ينفع ناخد البرواز والفازة لليلة القراية؟"
      ],
      [
        "Lotte",
        "Nur den leeren Rahmen, und nur für diesen Abend. Die Vase bleibt bei mir.",
        "البرواز الفاضي بس ولليلة دي بس. الفازة تفضل عندي."
      ],
      [
        "Esma",
        "Wir möchten unseren eigenen Begrüßungstext darin zeigen.",
        "عايزين نعرض جواه كلمة الترحيب اللي إحنا كاتبينها."
      ],
      [
        "Lotte",
        "Damit bin ich einverstanden. Meine privaten Fotos bleiben hier.",
        "موافقة على ده. صوري الخاصة تفضل هنا."
      ],
      [
        "Finn",
        "Nach dem Abend bringe ich den Rahmen ohne den Text zurück.",
        "بعد الليلة هرجع البرواز من غير النص."
      ],
      [
        "Esma",
        "Für einen weiteren Abend fragen wir dich wieder.",
        "ولليلة تانية نسألك من جديد."
      ],
      [
        "Lotte",
        "Genau. Für später habe ich noch nichts zugesagt.",
        "بالظبط. لسه ماوافقتش على حاجة لبعدين."
      ]
    ],
    "q": [
      [
        "Wo bleibt die Vase?",
        "Bei Lotte.",
        "Im Leseraum.",
        "Bei Finn auf dem Schreibtisch."
      ],
      [
        "Welche Bilder dürfen sie auswählen?",
        "Keine privaten Fotos von Lotte.",
        "Alle Fotos aus Lottes Wohnung.",
        "Ein Foto, das Finn heimlich mitnimmt."
      ],
      [
        "Was sagt Lotte über später?",
        "Sie hat noch nichts zugesagt.",
        "Sie leiht den Rahmen dauerhaft.",
        "Die Vase ist automatisch dabei."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "platz-links-neben-dem-rahmen": [
    "links neben den Bilderrahmen.",
    "Das Foto vom See gefällt mir.",
    "Die zwei Schachteln lassen wir unten."
  ],
  "zwei-kopien-zwei-plaetze": [
    "Nein. Eine bleibt in meiner Mappe",
    "Ich setze ihn später ein.",
    "Ja, nur die Vase."
  ],
  "nur-der-leere-rahmen": [
    "Die Vase bleibt bei mir.",
    "Meine privaten Fotos bleiben hier.",
    "Für später habe ich noch nichts zugesagt."
  ]
});

everydayDialogues.push(...[
  {
    "id": "schachtel-statt-ladegeraet",
    "level": "A1",
    "title": [
      "Ich suche die blaue Schachtel",
      "بدور على العلبة الزرقا"
    ],
    "lines": [
      [
        "Alva",
        "Suchst du dieses Ladegerät?",
        "بتدور على الشاحن ده؟"
      ],
      [
        "Tom",
        "Nein, die blaue Schachtel mit den Batterien.",
        "لأ، العلبة الزرقا اللي فيها البطاريات."
      ],
      [
        "Alva",
        "Die steht im Regal zwischen den Büchern.",
        "هي على الرف بين الكتب."
      ],
      [
        "Tom",
        "Danke. Die Batterien bleiben darin.",
        "شكرًا. البطاريات تفضل جواها."
      ],
      [
        "Alva",
        "Das Ladegerät nehme ich in meiner Tasche mit. Es gehört mir.",
        "هاخد الشاحن معايا في شنطتي. هو بتاعي."
      ],
      [
        "Tom",
        "Dann ist der Tisch frei für mein Deutschheft.",
        "كده المكتب فاضي لكراسة الألماني بتاعتي."
      ],
      [
        "Alva",
        "Du schreibst Sätze, und ich lese sie vor.",
        "إنت تكتب جمل وأنا أقراها بصوت عالي."
      ]
    ],
    "q": [
      [
        "Welche Farbe hat die gesuchte Schachtel?",
        "Blau.",
        "Rot.",
        "Gelb."
      ],
      [
        "Was nimmt Alva mit?",
        "Ihr Ladegerät.",
        "Toms Heft.",
        "Die blaue Schachtel."
      ],
      [
        "Was liest Alva vor?",
        "Toms Sätze.",
        "Eine Rechnung.",
        "Die Namen auf einer Tasche."
      ]
    ]
  },
  {
    "id": "nur-ein-besitzername",
    "level": "A2",
    "title": [
      "Mara ist mein Vorname",
      "مارا ده اسمي"
    ],
    "lines": [
      [
        "Silas",
        "Ist Mara auf dem Aufkleber ein Gerätetyp?",
        "مارا اللي على الاستيكر ده نوع جهاز؟"
      ],
      [
        "Mara",
        "Nein, mein Vorname. Das Ladegerät gehört mir.",
        "لأ، اسمي الأول. الشاحن بتاعي."
      ],
      [
        "Silas",
        "Dann sagt der Name nicht, für welche Geräte es geeignet ist.",
        "يبقى الاسم مش بيقول مناسب لأنهي أجهزة."
      ],
      [
        "Mara",
        "Genau. Das haben wir nicht geprüft.",
        "بالظبط. إحنا مافحصناش ده."
      ],
      [
        "Silas",
        "Bei der blauen Schachtel notiere ich nur den Ort und Bens Namen.",
        "وبالنسبة للعلبة الزرقا هسجل مكانها واسم بن بس."
      ],
      [
        "Mara",
        "Den Inhalt kennt Ben besser. Frag ihn später selbst.",
        "بن عارف اللي جواها أكتر. اسأله بنفسك بعدين."
      ],
      [
        "Silas",
        "Gut. Unsere Liste ordnet die Sachen nur den Besitzern zu.",
        "تمام. القايمة بتاعتنا بتحدد الحاجات بتاعة مين بس."
      ]
    ],
    "q": [
      [
        "Wem gehört das Ladegerät?",
        "Mara.",
        "Silas.",
        "Ben."
      ],
      [
        "Was wurde nicht geprüft?",
        "Die Eignung für bestimmte Geräte.",
        "Der Name Mara.",
        "Die Farbe der Schachtel."
      ],
      [
        "Wen soll Silas nach dem Inhalt fragen?",
        "Ben.",
        "Eine Verkäuferin.",
        "Niemanden, er kennt ihn schon."
      ]
    ]
  },
  {
    "id": "rueckgabe-frage-idee",
    "level": "B1",
    "title": [
      "Drei verschiedene Einträge",
      "تلات تسجيلات مختلفة"
    ],
    "lines": [
      [
        "Leon",
        "Du hast das Ladegerät zurückgegeben. Ist also ein neues bestellt?",
        "رجعتي الشاحن. يعني اتطلب واحد جديد؟"
      ],
      [
        "Kira",
        "Nein. Die Rückgabe ist erledigt, der Kauf nur eine ungeprüfte Idee.",
        "لأ. الترجيع خلص والشراء فكرة لسه ماتراجعتش بس."
      ],
      [
        "Leon",
        "Und die Batterien auf derselben Liste?",
        "والبطاريات اللي في نفس القايمة؟"
      ],
      [
        "Kira",
        "Ich frage Ove nur, ob die Schachtel noch bei ihm steht.",
        "بسأل أوفه بس إذا كانت العلبة لسه عنده."
      ],
      [
        "Ove",
        "Ja, die Schachtel steht noch hier.",
        "أيوه، العلبة لسه هنا."
      ],
      [
        "Kira",
        "Danke. Damit ist die Nachfrage beantwortet.",
        "شكرًا. كده السؤال اتجاوب."
      ],
      [
        "Leon",
        "Und über einen Kauf ist damit weiterhin nichts entschieden.",
        "وكده برضه لسه مفيش قرار عن شراء."
      ]
    ],
    "q": [
      [
        "Was ist der Kauf am Anfang?",
        "Nur eine ungeprüfte Idee.",
        "Eine bezahlte Bestellung.",
        "Eine abgeschlossene Rückgabe."
      ],
      [
        "Was fragt Kira Ove?",
        "Ob die Schachtel noch bei ihm steht.",
        "Wie viele Batterien sie gekauft hat.",
        "Wann er ein neues Gerät bestellt."
      ],
      [
        "Was ist nach Oves Antwort erledigt?",
        "Die Nachfrage.",
        "Der Kauf.",
        "Die technische Prüfung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "schachtel-statt-ladegeraet": [
    "die blaue Schachtel",
    "Das Ladegerät nehme ich",
    "ich lese sie vor."
  ],
  "nur-ein-besitzername": [
    "Das Ladegerät gehört mir.",
    "Das haben wir nicht geprüft.",
    "Den Inhalt kennt Ben besser."
  ],
  "rueckgabe-frage-idee": [
    "der Kauf nur eine ungeprüfte Idee.",
    "ob die Schachtel noch bei ihm steht.",
    "Damit ist die Nachfrage beantwortet."
  ]
});

everydayDialogues.push(...[
  {
    "id": "buerste-vorderes-fach",
    "level": "A1",
    "title": [
      "Nur die Bürste und das Buch",
      "الفرشة والكتاب بس"
    ],
    "lines": [
      [
        "Joris",
        "Hier ist deine Haarbürste vom Tisch am Fenster.",
        "دي فرشة شعرك من على الترابيزة جنب الشباك."
      ],
      [
        "Nele",
        "Danke. Sie kommt in das vordere Fach.",
        "شكرًا. هحطها في الجيب اللي قدام."
      ],
      [
        "Joris",
        "Und der Haartrockner im Schrank?",
        "والسيشوار اللي في الدولاب؟"
      ],
      [
        "Nele",
        "Der bleibt hier. Ich brauche nur noch mein Buch.",
        "هيفضل هنا. فاضل بس كتابي."
      ],
      [
        "Joris",
        "Es liegt unter dem T-Shirt auf dem Bett.",
        "هو تحت التيشيرت اللي على السرير."
      ],
      [
        "Nele",
        "Jetzt ist es in der Tasche. Den Zettel lasse ich auf dem Tisch.",
        "دلوقتي بقى في الشنطة. هسيب الورقة على الترابيزة."
      ],
      [
        "Joris",
        "Dann können wir jetzt frühstücken.",
        "يبقى نقدر نفطر دلوقتي."
      ]
    ],
    "q": [
      [
        "In welches Fach kommt die Haarbürste?",
        "In das vordere Fach.",
        "In das hintere Fach.",
        "In kein Fach."
      ],
      [
        "Wo liegt das Buch zuerst?",
        "Unter dem T-Shirt.",
        "Im Schrank.",
        "Auf dem Küchenstuhl."
      ],
      [
        "Was machen sie danach?",
        "Frühstücken.",
        "Einen Haartrockner kaufen.",
        "Zur Tante fahren."
      ]
    ]
  },
  {
    "id": "auch-hinten-steht-etwas",
    "level": "A2",
    "title": [
      "Der Hinweis steht hinten",
      "التنبيه مكتوب ورا"
    ],
    "lines": [
      [
        "Runa",
        "Ich habe Kleidung, Buch und Haarbürste auf das Sofa gelegt.",
        "حطيت الهدوم والكتاب وفرشة الشعر على الكنبة."
      ],
      [
        "Ivo",
        "Danke. Hinten steht noch: Der Haartrockner bleibt zu Hause.",
        "شكرًا. ورا مكتوب كمان: السيشوار يفضل في البيت."
      ],
      [
        "Runa",
        "Das hatte ich nicht gesehen. Ich lege ihn in den Schrank zurück.",
        "ماكنتش شفت ده. هرجعه في الدولاب."
      ],
      [
        "Ivo",
        "Die Bürste kommt in das kleine Innenfach.",
        "الفرشة تتحط في الجيب الداخلي الصغير."
      ],
      [
        "Runa",
        "Schreib vorne einen Hinweis auf die Rückseite.",
        "اكتب قدام تنبيه لضهر الورقة."
      ],
      [
        "Ivo",
        "Mache ich. Das Buch möchte ich erst noch lesen.",
        "هعمل كده. عايز بس أقرا الكتاب الأول."
      ],
      [
        "Runa",
        "Dann bleibt die Tasche dafür noch offen.",
        "يبقى الشنطة تفضل مفتوحة عشان ده."
      ]
    ],
    "q": [
      [
        "Was hatte Runa nicht gesehen?",
        "Die Notiz auf der Rückseite.",
        "Das Sofa.",
        "Die Kleidung."
      ],
      [
        "Wohin kommt die Bürste?",
        "In das kleine Innenfach.",
        "Auf den Küchentisch.",
        "Zurück in den Schrank."
      ],
      [
        "Was macht Ivo vor dem Einpacken des Buches?",
        "Er liest es noch.",
        "Er verkauft es.",
        "Er bringt es zu Runa."
      ]
    ]
  },
  {
    "id": "alter-zettel-neue-frage",
    "level": "B1",
    "title": [
      "Die Bürste ist längst angekommen",
      "الفرشة وصلت من زمان"
    ],
    "lines": [
      [
        "Milan",
        "Auf diesem Zettel steht eine Haarbürste für deine Schwester.",
        "مكتوب في الورقة دي فرشة شعر لأختك."
      ],
      [
        "Daria",
        "Der ist von letzter Woche. Die Bürste habe ich ihr schon gegeben.",
        "دي من الأسبوع اللي فات. أنا اديتها الفرشة خلاص."
      ],
      [
        "Milan",
        "Und die heutige Frage nach dem Haartrockner?",
        "وسؤال النهارده عن السيشوار؟"
      ],
      [
        "Daria",
        "Ich möchte wissen, ob das Gerät bei meiner Schwester dir gehört.",
        "عايزة أعرف الجهاز اللي عند أختي بتاعك ولا لأ."
      ],
      [
        "Milan",
        "Nach der Beschreibung bin ich unsicher. Ich würde gern erst ein Foto sehen.",
        "مش متأكد من الوصف. أحب أشوف صورة الأول."
      ],
      [
        "Daria",
        "Dann notiere ich noch keinen Besitzer. Die Frage bleibt offen.",
        "يبقى لسه مش هسجل صاحب للحاجة. السؤال يفضل مفتوح."
      ],
      [
        "Milan",
        "Mit Datum und Anlass lassen sich die beiden Zettel besser unterscheiden.",
        "بالتاريخ والمناسبة نقدر نفرق بين الورقتين أسهل."
      ]
    ],
    "q": [
      [
        "Wann hat Daria die Haarbürste übergeben?",
        "Schon beim letzten Besuch.",
        "Erst nach diesem Gespräch.",
        "Noch gar nicht."
      ],
      [
        "Was möchte Milan zuerst sehen?",
        "Ein Foto.",
        "Eine bezahlte Rechnung.",
        "Einen Fahrplan."
      ],
      [
        "Was notiert Daria noch nicht?",
        "Einen Besitzer des Haartrockners.",
        "Dass die Frage offen bleibt.",
        "Dass der alte Zettel von letzter Woche ist."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "buerste-vorderes-fach": [
    "Sie kommt in das vordere Fach.",
    "Es liegt unter dem T-Shirt",
    "Dann können wir jetzt frühstücken."
  ],
  "auch-hinten-steht-etwas": [
    "Hinten steht noch",
    "Die Bürste kommt in das kleine Innenfach.",
    "Das Buch möchte ich erst noch lesen."
  ],
  "alter-zettel-neue-frage": [
    "Die Bürste habe ich ihr schon gegeben.",
    "erst ein Foto sehen.",
    "Dann notiere ich noch keinen Besitzer."
  ]
});

everydayDialogues.push(...[
  {
    "id": "vogel-nicht-mehr-am-zaun",
    "level": "A1",
    "title": [
      "Schau mal zum Zaun",
      "بصي على السور"
    ],
    "lines": [
      [
        "Till",
        "Hier sind die Gläser. Dein Liegestuhl steht links.",
        "دي الكوبايات. كرسي الاسترخاء بتاعك على الشمال."
      ],
      [
        "Ava",
        "Danke. Unter dem Sonnenschirm kann ich schön lesen.",
        "شكرًا. حلو إني أقرا تحت الشمسية."
      ],
      [
        "Till",
        "Schau mal zum Zaun. Dort sitzt ein Vogel.",
        "بصي على السور. فيه عصفور واقف هناك."
      ],
      [
        "Ava",
        "Jetzt sehe ich nur den Zaun. Der Vogel ist schon im Baum.",
        "دلوقتي شايفة السور بس. العصفور بقى في الشجرة خلاص."
      ],
      [
        "Till",
        "Dann hole ich meinen Zeichenblock. Ich zeichne den Baum.",
        "يبقى أجيب كراسة الرسم. هرسم الشجرة."
      ],
      [
        "Ava",
        "Danach lese ich dir eine kurze Stelle vor.",
        "بعد كده هقرا لك جزء قصير بصوت عالي."
      ],
      [
        "Till",
        "Gut. Die Gläser bleiben auf dem Tisch.",
        "تمام. الكوبايات تفضل على الترابيزة."
      ]
    ],
    "q": [
      [
        "Wo steht Avas Liegestuhl?",
        "Links.",
        "Rechts.",
        "Im Haus."
      ],
      [
        "Wo ist der Vogel, als Ava hinschaut?",
        "Im Baum.",
        "Auf dem Tisch.",
        "Noch auf dem Zaun."
      ],
      [
        "Was möchte Ava später machen?",
        "Eine kurze Stelle vorlesen.",
        "Den Vogel zeichnen.",
        "Den Schirm kaufen."
      ]
    ]
  },
  {
    "id": "neben-dir-hoere-ich-besser",
    "level": "A2",
    "title": [
      "Der nähere Stuhl",
      "الكرسي الأقرب"
    ],
    "lines": [
      [
        "Tessa",
        "Vom Liegestuhl aus sehe ich die Blumen gut, aber ich verstehe dich schlecht.",
        "من كرسي الاسترخاء شايفة الورد كويس بس مش سامعاك كويس."
      ],
      [
        "Niko",
        "Der Brunnen ist genau zwischen uns. Ich setze mich neben dich.",
        "النافورة بينا بالظبط. هقعد جنبك."
      ],
      [
        "Tessa",
        "Der Stuhl dort ist frei. Dann musst du nicht lauter sprechen.",
        "الكرسي اللي هناك فاضي. كده مش هتضطر تعلي صوتك."
      ],
      [
        "Niko",
        "Den Sonnenschirm lassen wir so stehen.",
        "نسيب الشمسية زي ما هي."
      ],
      [
        "Tessa",
        "Jetzt kann ich dir von meinem Buch erzählen.",
        "دلوقتي أقدر أحكي لك عن كتابي."
      ],
      [
        "Niko",
        "Wer ist die Hauptfigur?",
        "مين الشخصية الرئيسية؟"
      ],
      [
        "Tessa",
        "Eine junge Lehrerin. Später gehen wir zum Tee auf die Terrasse.",
        "مدرسة شابة. بعدين نروح نشرب شاي على التراس."
      ]
    ],
    "q": [
      [
        "Was steht zwischen den beiden?",
        "Der Brunnen.",
        "Ein Bücherregal.",
        "Ein geschlossener Schirm."
      ],
      [
        "Was machen sie mit dem Sonnenschirm?",
        "Sie lassen ihn unverändert stehen.",
        "Sie kaufen einen neuen.",
        "Sie tragen ihn ins Haus."
      ],
      [
        "Wovon erzählt Tessa?",
        "Von ihrem Buch.",
        "Von einer neuen Teemaschine.",
        "Von einem verkauften Garten."
      ]
    ]
  },
  {
    "id": "lesen-und-reden-nebeneinander",
    "level": "B1",
    "title": [
      "Zwei Gruppen, kein fester Plan",
      "مجموعتين مش خطة ثابتة"
    ],
    "lines": [
      [
        "Fina",
        "Ich verliere bei eurem Gespräch oft die Zeile. Ihr müsst deshalb aber nicht schweigen.",
        "السطر بيضيع مني كتير مع كلامكم. بس مش لازم تسكتوا عشان كده."
      ],
      [
        "Levin",
        "Dann probieren wir zwei Gruppen. Die Liegestühle können hinten stehen.",
        "يبقى نجرب مجموعتين. كراسي الاسترخاء ممكن تبقى ورا."
      ],
      [
        "Emil",
        "Ich lese erst mit Fina. Später möchte ich vielleicht zu euch kommen.",
        "هقرا مع فينا الأول. يمكن بعدين أحب أجي أقعد معاكم."
      ],
      [
        "Levin",
        "Natürlich. Der Platz ist keine Verpflichtung für den ganzen Nachmittag.",
        "طبعًا. المكان مش التزام لطول بعد الضهر."
      ],
      [
        "Fina",
        "Der Sonnenschirm bleibt also bei eurem Tisch.",
        "يبقى الشمسية تفضل عند ترابيزتكم."
      ],
      [
        "Levin",
        "Ja. Wir schauen später, ob uns die Anordnung gefällt.",
        "أيوه. نبص بعدين إذا كان الترتيب عاجبنا."
      ],
      [
        "Emil",
        "Und wir machen daraus keine Regel für das ganze Haus.",
        "ومش هنعمل من ده قاعدة للبيت كله."
      ]
    ],
    "q": [
      [
        "Was schlägt Levin vor?",
        "Zwei Gruppen auszuprobieren.",
        "Ein Sprechverbot einzuführen.",
        "Alle Bücher wegzuräumen."
      ],
      [
        "Muss Emil den ganzen Nachmittag lesen?",
        "Nein, er kann später zur Gesprächsgruppe wechseln.",
        "Ja, der Platz verpflichtet ihn dazu.",
        "Nur wenn er den Schirm kauft."
      ],
      [
        "Was entsteht daraus nicht?",
        "Eine Regel für das ganze Haus.",
        "Ein Vorschlag für zwei Gruppen.",
        "Eine spätere Prüfung der Anordnung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "vogel-nicht-mehr-am-zaun": [
    "Dein Liegestuhl steht links.",
    "Der Vogel ist schon im Baum.",
    "lese ich dir eine kurze Stelle vor."
  ],
  "neben-dir-hoere-ich-besser": [
    "Der Brunnen ist genau zwischen uns.",
    "Den Sonnenschirm lassen wir so stehen.",
    "von meinem Buch erzählen."
  ],
  "lesen-und-reden-nebeneinander": [
    "Dann probieren wir zwei Gruppen.",
    "Der Platz ist keine Verpflichtung",
    "keine Regel für das ganze Haus."
  ]
});

everydayDialogues.push(...[
  {
    "id": "welches-instrument-klingt",
    "level": "A1",
    "title": [
      "Das Metronom ist still",
      "المترونوم ساكت"
    ],
    "lines": [
      [
        "Lina",
        "Liegt der gelbe Schellenkranz auf dem Teppich?",
        "حلقة الشخاليل الصفرا على السجادة؟"
      ],
      [
        "Ole",
        "Ja. Ich spiele eine kurze Folge. Hör erst einmal zu.",
        "أيوه. هعزف تتابع قصير. اسمعي الأول."
      ],
      [
        "Lina",
        "Jetzt ist es wieder still. Kam der Klang vom Metronom?",
        "دلوقتي هديت تاني. الصوت كان من المترونوم؟"
      ],
      [
        "Ole",
        "Nein, das Metronom war die ganze Zeit still.",
        "لأ، المترونوم كان ساكت طول الوقت."
      ],
      [
        "Lina",
        "Dann war es der Schellenkranz. Ich habe ein helles Klingeln gehört.",
        "يبقى كانت حلقة الشخاليل. سمعت رنة حادة."
      ],
      [
        "Ole",
        "Jetzt spiele ich etwas länger. Eine genaue Zahl brauchst du nicht.",
        "دلوقتي هعزف أطول شوية. مش محتاجة عدد محدد."
      ],
      [
        "Lina",
        "Gut. Danach beschreibe ich den Unterschied.",
        "تمام. بعد كده أوصف الفرق."
      ]
    ],
    "q": [
      [
        "Was spielt Ole zuerst?",
        "Eine kurze Folge.",
        "Ein langes Konzert.",
        "Gar nichts."
      ],
      [
        "Was war die ganze Zeit still?",
        "Das Metronom.",
        "Der Schellenkranz.",
        "Lina und Ole ohne Gespräch."
      ],
      [
        "Was soll Lina danach beschreiben?",
        "Den Unterschied.",
        "Eine Reparatur.",
        "Den Preis."
      ]
    ]
  },
  {
    "id": "schnell-und-hell",
    "level": "A2",
    "title": [
      "Welche Eigenschaft meinst du?",
      "تقصد أنهي صفة؟"
    ],
    "lines": [
      [
        "Jule",
        "Für mich war die Vorführung schnell.",
        "بالنسبة لي العرض كان سريع."
      ],
      [
        "Karim",
        "Ich hätte zuerst hell gesagt. Besonders der Schellenkranz fiel mir auf.",
        "أنا كنت هقول حاد الأول. حلقة الشخاليل لفتت نظري خصوصًا."
      ],
      [
        "Senta",
        "Jule, meinst du das Ticken des Metronoms?",
        "يوله، تقصدي تكة المترونوم؟"
      ],
      [
        "Jule",
        "Ja. Darauf habe ich besonders geachtet.",
        "أيوه. ده اللي ركزت عليه خصوصًا."
      ],
      [
        "Senta",
        "Dann beschreiben eure Wörter verschiedene Eigenschaften.",
        "يبقى كلماتكم بتوصف صفات مختلفة."
      ],
      [
        "Karim",
        "Beim nächsten Durchgang achten wir beide auf den Beginn.",
        "في الجولة الجاية نركز إحنا الاتنين على البداية."
      ],
      [
        "Jule",
        "Danach vergleichen wir unsere Eindrücke noch einmal.",
        "بعد كده نقارن انطباعاتنا تاني."
      ]
    ],
    "q": [
      [
        "Worauf hat Karim besonders geachtet?",
        "Auf den Schellenkranz.",
        "Auf einen Preiszettel.",
        "Auf eine Aufnahme."
      ],
      [
        "Was meint Jule mit ihrem Eindruck?",
        "Das Ticken des Metronoms.",
        "Die Farbe des Tisches.",
        "Die Größe des Raumes."
      ],
      [
        "Wann vergleichen sie die Eindrücke erneut?",
        "Nach dem nächsten Durchgang.",
        "Vor jeder Vorführung überhaupt.",
        "Gar nicht mehr."
      ]
    ]
  },
  {
    "id": "ruhiger-ist-nicht-gemessen",
    "level": "B1",
    "title": [
      "Was kannst du wirklich sagen?",
      "تقدر تقول إيه فعلًا؟"
    ],
    "lines": [
      [
        "Enna",
        "Du schreibst genauer. Hast du etwas gemessen?",
        "إنت كاتب أدق. قست حاجة؟"
      ],
      [
        "Ramin",
        "Nein. Das Zusammenspiel von Metronom und Schellenkranz kam mir ruhiger vor.",
        "لأ. العزف مع بعض بين المترونوم وحلقة الشخاليل حسيته أهدى."
      ],
      [
        "Enna",
        "Dann beschreibe lieber, dass du leichter folgen konntest.",
        "يبقى الأفضل توصف إنك قدرت تتابع أسهل."
      ],
      [
        "Ramin",
        "Gut. Deine andere Einschätzung lasse ich ebenfalls stehen.",
        "تمام. وهسيب تقييمك المختلف برضه."
      ],
      [
        "Lotte",
        "Ich habe vor allem auf den Schellenkranz gehört. Zum Metronom allein kann ich wenig sagen.",
        "أنا سمعت مركزة خصوصًا على حلقة الشخاليل. عن المترونوم لوحده مش هقدر أقول كتير."
      ],
      [
        "Enna",
        "Bei einer späteren Probe wählen wir zuerst eine gemeinsame Frage.",
        "في بروفة بعدين نختار الأول سؤال مشترك."
      ],
      [
        "Ramin",
        "Welche das wird, entscheiden wir noch nicht. Heute halten wir unsere Eindrücke fest.",
        "هيبقى أنهي سؤال لسه مش هنقرر. النهارده بنسجل انطباعاتنا."
      ]
    ],
    "q": [
      [
        "Was hat Ramin gemessen?",
        "Nichts.",
        "Die Lautstärke exakt.",
        "Das Tempo exakt."
      ],
      [
        "Was lässt Ramin im Text stehen?",
        "Ennas andere Einschätzung.",
        "Eine erfundene Messung.",
        "Eine allgemeine Note."
      ],
      [
        "Worauf hat Lotte vor allem gehört?",
        "Auf den Schellenkranz.",
        "Nur auf das Metronom.",
        "Auf eine Aufnahme vom Vortag."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "welches-instrument-klingt": [
    "Ich spiele eine kurze Folge.",
    "das Metronom war die ganze Zeit still.",
    "beschreibe ich den Unterschied."
  ],
  "schnell-und-hell": [
    "Besonders der Schellenkranz fiel mir auf.",
    "meinst du das Ticken des Metronoms?",
    "Danach vergleichen wir unsere Eindrücke"
  ],
  "ruhiger-ist-nicht-gemessen": [
    "Nein. Das Zusammenspiel",
    "Deine andere Einschätzung lasse ich ebenfalls stehen.",
    "vor allem auf den Schellenkranz gehört."
  ]
});

everydayDialogues.push(...[
  {
    "id": "wie-heisst-das-auf-dem-tuch",
    "level": "A1",
    "title": [
      "Sag das Wort noch einmal",
      "قول الكلمة تاني"
    ],
    "lines": [
      [
        "Eva",
        "Wie heißt der Gegenstand auf dem blauen Tuch?",
        "اسم الحاجة اللي على القماشة الزرقا إيه؟"
      ],
      [
        "Nils",
        "Das ist ein Messschieber. Ich sage es noch einmal langsam.",
        "دي قدمة ذات ورنية. هقولها تاني براحة."
      ],
      [
        "Eva",
        "Danke. Und die Wasserwaage kenne ich schon.",
        "شكرًا. وميزان الميه عارفاه من قبل."
      ],
      [
        "Nils",
        "Die lege ich jetzt in das lange Fach.",
        "ده هحطه دلوقتي في الجزء الطويل."
      ],
      [
        "Eva",
        "Lass den Messschieber bitte noch kurz hier. Ich schreibe das Wort auf.",
        "سيب القدمة هنا شوية لو سمحت. هكتب الكلمة."
      ],
      [
        "Nils",
        "Gut. Heute messen wir nichts.",
        "تمام. النهارده مش هنقيس حاجة."
      ],
      [
        "Eva",
        "Ich nehme danach nur mein Heft mit.",
        "بعد كده هاخد كشكولي بس."
      ]
    ],
    "q": [
      [
        "Was sagt Nils noch einmal langsam?",
        "Das Wort Messschieber.",
        "Eine Adresse.",
        "Eine gemessene Zahl."
      ],
      [
        "Wohin legt Nils die Wasserwaage?",
        "In das lange Fach.",
        "Auf Evas Stuhl.",
        "In eine Tasche."
      ],
      [
        "Warum bleibt der Messschieber kurz liegen?",
        "Eva möchte das Wort aufschreiben.",
        "Er ist festgeklebt.",
        "Nils misst damit die Zeit."
      ]
    ]
  },
  {
    "id": "zwei-vertauschte-namen",
    "level": "A2",
    "title": [
      "Erst die zweite Seite ansehen",
      "نبص الأول على الصفحة التانية"
    ],
    "lines": [
      [
        "Dalia",
        "Unter diesem Foto steht Messschieber. Ich sehe aber eine Wasserwaage.",
        "تحت الصورة دي مكتوب قدمة ذات ورنية. بس أنا شايفة ميزان ميه."
      ],
      [
        "Finn",
        "Vielleicht gehört der Name zur nächsten Seite. Schauen wir nach.",
        "يمكن الاسم يخص الصفحة الجاية. نبص."
      ],
      [
        "Dalia",
        "Dort ist es umgekehrt. Die beiden Namen sind vertauscht.",
        "هناك العكس. الاسمين متبدلين."
      ],
      [
        "Finn",
        "Dann lege ich jeden Namen unter das passende Foto.",
        "يبقى أحط كل اسم تحت الصورة المناسبة."
      ],
      [
        "Dalia",
        "Lies bitte vor. Ich zeige auf das Bild.",
        "اقرا بصوت مسموع لو سمحت. أنا هشاور على الصورة."
      ],
      [
        "Finn",
        "Damit prüfen wir diese zwei Seiten, nicht die ganze Mappe.",
        "بكده بنراجع الصفحتين دول، مش الملف كله."
      ],
      [
        "Dalia",
        "Die übrigen Fotos nehmen wir uns später vor.",
        "باقي الصور نراجعها بعدين."
      ]
    ],
    "q": [
      [
        "Was sehen sie auf der nächsten Seite?",
        "Die umgekehrte falsche Zuordnung.",
        "Ein neues Gerät im Karton.",
        "Eine leere Einkaufsliste."
      ],
      [
        "Wer liest die Namen vor?",
        "Finn.",
        "Dalia.",
        "Eine Lehrerin."
      ],
      [
        "Was prüfen sie in diesem Gespräch?",
        "Nur die zwei Seiten.",
        "Die ganze Mappe.",
        "Die Geräte auf einem Arbeitstisch."
      ]
    ]
  },
  {
    "id": "das-foto-ist-kein-pruefbericht",
    "level": "B1",
    "title": [
      "Was zeigt das Bild wirklich?",
      "الصورة بتبين إيه فعلًا؟"
    ],
    "lines": [
      [
        "Salma",
        "Du schreibst, die Geräte arbeiten genau. Woher weißt du das?",
        "إنت كاتب إن الأجهزة شغالة بدقة. عرفت ده منين؟"
      ],
      [
        "Joris",
        "Eigentlich erkenne ich auf den Fotos nur Wasserwaage und Messschieber.",
        "في الحقيقة أنا بتعرف في الصور بس على ميزان الميه والقدمة."
      ],
      [
        "Salma",
        "Dann beschreibe das Sichtbare. Die Bilder sind kein Prüfbericht.",
        "يبقى اوصف اللي باين. الصور مش تقرير فحص."
      ],
      [
        "Joris",
        "Die Zahlen übernehme ich auch nicht als eigene Messung.",
        "ومش هاخد الأرقام كنتيجة قياس عملته أنا برضه."
      ],
      [
        "Salma",
        "Für dein Wörterheft können die Fotos trotzdem passen.",
        "الصور مع كده ممكن تناسب كشكول كلماتك."
      ],
      [
        "Joris",
        "Ich lasse noch prüfen, ob jemand die beiden Gegenstände unterscheiden kann.",
        "هخلي حد يراجع كمان إذا كان يقدر يفرق بين الحاجتين."
      ],
      [
        "Salma",
        "Das prüft dann die Verständlichkeit, nicht die technische Eignung.",
        "ده كده بيراجع الوضوح، مش الصلاحية الفنية."
      ]
    ],
    "q": [
      [
        "Was erkennt Joris sicher auf den Fotos?",
        "Die zwei Gegenstände.",
        "Eine bestandene technische Prüfung.",
        "Die Genauigkeit aller Geräte."
      ],
      [
        "Wie behandelt er die sichtbaren Zahlen?",
        "Er übernimmt sie nicht als eigene Messung.",
        "Er bescheinigt damit die Genauigkeit.",
        "Er trägt sie als seine Messergebnisse ein."
      ],
      [
        "Was soll eine weitere Person beurteilen?",
        "Ob sie die beiden Gegenstände unterscheiden kann.",
        "Ob die Geräte technisch geeignet sind.",
        "Ob alle Ausführungen gleich aussehen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "wie-heisst-das-auf-dem-tuch": [
    "Das ist ein Messschieber. Ich sage es noch einmal langsam.",
    "Die lege ich jetzt in das lange Fach.",
    "Ich schreibe das Wort auf."
  ],
  "zwei-vertauschte-namen": [
    "Dort ist es umgekehrt. Die beiden Namen sind vertauscht.",
    "Lies bitte vor.",
    "diese zwei Seiten, nicht die ganze Mappe."
  ],
  "das-foto-ist-kein-pruefbericht": [
    "erkenne ich auf den Fotos nur Wasserwaage und Messschieber.",
    "Die Zahlen übernehme ich auch nicht als eigene Messung.",
    "ob jemand die beiden Gegenstände unterscheiden kann."
  ]
});

everydayDialogues.push(...[
  {
    "id": "wort-auf-der-rueckseite",
    "level": "A1",
    "title": [
      "Erst sagen, dann umdrehen",
      "قول الأول وبعدين اقلب"
    ],
    "lines": [
      [
        "Sami",
        "Wie heißt der Gegenstand neben der Vase?",
        "اسم الحاجة اللي جنب الفازة إيه؟"
      ],
      [
        "Nele",
        "Pfeffermühle. Schreib das Wort auf die Karte.",
        "مطحنة فلفل. اكتب الكلمة على الكارت."
      ],
      [
        "Sami",
        "Die Bedeutung kommt auf die Rückseite.",
        "المعنى ييجي على الضهر."
      ],
      [
        "Nele",
        "Genau. Und auf diese Karte schreibe ich Salzstreuer.",
        "بالظبط. وعلى الكارت ده هكتب ملاحة."
      ],
      [
        "Sami",
        "Dieses Wort kenne ich schon.",
        "الكلمة دي عارفها من قبل."
      ],
      [
        "Nele",
        "Sag die Wörter zuerst. Danach drehst du die Karten um.",
        "قول الكلمات الأول. بعد كده اقلب الكروت."
      ],
      [
        "Sami",
        "Bei Pfeffermühle brauche ich noch den Anfang als Hilfe.",
        "مع مطحنة الفلفل لسه محتاج أول الكلمة كمساعدة."
      ]
    ],
    "q": [
      [
        "Wohin schreibt Sami die Bedeutung?",
        "Auf die Rückseite.",
        "Auf den Tisch.",
        "Unter die Vase."
      ],
      [
        "Welches Wort kennt Sami schon?",
        "Salzstreuer.",
        "Pfeffermühle.",
        "Beide, ohne Hilfe."
      ],
      [
        "Wann soll er die Karten umdrehen?",
        "Nachdem er die Wörter gesagt hat.",
        "Bevor er ein Wort sagt.",
        "Er soll sie wegwerfen."
      ]
    ]
  },
  {
    "id": "nicht-nur-das-kleine-ding",
    "level": "A2",
    "title": [
      "Welchen Gegenstand meinst du?",
      "تقصد أنهي حاجة؟"
    ],
    "lines": [
      [
        "Elif",
        "Gibst du mir bitte das kleine Ding dort?",
        "ممكن تديني الحاجة الصغيرة هناك؟"
      ],
      [
        "Mats",
        "Meinst du diese Schachtel?",
        "تقصدي العلبة دي؟"
      ],
      [
        "Elif",
        "Nein, ich meine den Salzstreuer. Meine Beschreibung war ungenau.",
        "لأ، أقصد الملاحة. وصفي ماكانش دقيق."
      ],
      [
        "Mats",
        "Hier, bitte. Von hier aus lag die Schachtel näher an deiner Hand.",
        "اتفضلي. من هنا العلبة كانت أقرب لإيدك."
      ],
      [
        "Elif",
        "Nächstes Mal nenne ich das Wort oder beschreibe den Platz genauer.",
        "المرة الجاية أقول الكلمة أو أوصف المكان بدقة أكتر."
      ],
      [
        "Mats",
        "Zum Beispiel die Pfeffermühle links neben der Vase.",
        "مثلًا مطحنة الفلفل اللي شمال الفازة."
      ],
      [
        "Elif",
        "Ja. Jetzt setzen wir erst unser Wortspiel fort.",
        "أيوه. دلوقتي نكمل لعبة الكلمات الأول."
      ]
    ],
    "q": [
      [
        "Was bietet Mats zuerst an?",
        "Die Schachtel.",
        "Die Vase.",
        "Den Stuhl."
      ],
      [
        "Wie beschreibt Elif ihre erste Bitte?",
        "Als ungenau.",
        "Als völlig eindeutig.",
        "Als schon erledigte neue Aufgabe."
      ],
      [
        "Was machen sie jetzt?",
        "Sie setzen das Wortspiel fort.",
        "Sie bestellen neue Gegenstände.",
        "Sie schreiben eine allgemeine Regel für alle Gäste."
      ]
    ]
  },
  {
    "id": "mit-hinweis-ist-auch-eine-information",
    "level": "B1",
    "title": [
      "Schreib den Hinweis dazu",
      "اكتبي التلميح كمان"
    ],
    "lines": [
      [
        "Anja",
        "Ich habe geschrieben, dass du die Wörter sicher beherrschst.",
        "أنا كتبت إنك متمكنة من الكلمات بثقة."
      ],
      [
        "Rika",
        "Beim Salzstreuer brauchte ich keine Hilfe. Bei Pfeffermühle schon.",
        "مع الملاحة ماحتجتش مساعدة. مع مطحنة الفلفل احتجت."
      ],
      [
        "Tarek",
        "Dann beschreiben wir beide Antworten getrennt.",
        "يبقى نوصف الإجابتين كل واحدة لوحدها."
      ],
      [
        "Anja",
        "Ich schreibe den Hinweis dazu, ohne ihn als Scheitern zu bewerten.",
        "هكتب التلميح كمان، من غير ما أعتبره فشل."
      ],
      [
        "Rika",
        "Das beschreibt die Runde genauer als ein allgemeines Lob.",
        "ده بيوصف الجولة أدق من مدح عام."
      ],
      [
        "Tarek",
        "Später könnten wir die Wörter in einem Gespräch verwenden.",
        "بعدين ممكن نستخدم الكلمات في حوار."
      ],
      [
        "Anja",
        "Wann, bleibt noch offen. Die zweite Übung hat noch nicht stattgefunden.",
        "إمتى، لسه مفتوح. التدريب التاني لسه ماحصلش."
      ]
    ],
    "q": [
      [
        "Welches Wort nennt Rika ohne Hilfe?",
        "Salzstreuer.",
        "Pfeffermühle.",
        "Keines."
      ],
      [
        "Was ergänzt Anja in der Notiz?",
        "Dass ein Hinweis gegeben wurde.",
        "Eine allgemeine Sprachnote.",
        "Eine erfundene zweite Runde."
      ],
      [
        "Hat die spätere Gesprächsübung schon stattgefunden?",
        "Nein.",
        "Ja, vor der ersten Runde.",
        "Ja, direkt nach dem Hinweis."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "wort-auf-der-rueckseite": [
    "Die Bedeutung kommt auf die Rückseite.",
    "Dieses Wort kenne ich schon.",
    "Sag die Wörter zuerst. Danach drehst du die Karten um."
  ],
  "nicht-nur-das-kleine-ding": [
    "Meinst du diese Schachtel?",
    "Meine Beschreibung war ungenau.",
    "Jetzt setzen wir erst unser Wortspiel fort."
  ],
  "mit-hinweis-ist-auch-eine-information": [
    "Beim Salzstreuer brauchte ich keine Hilfe.",
    "Ich schreibe den Hinweis dazu",
    "Die zweite Übung hat noch nicht stattgefunden."
  ]
});

everydayDialogues.push(...[
  {
    "id": "namen-unter-den-fotos",
    "level": "A1",
    "title": [
      "Die Fotos bleiben sichtbar",
      "الصور تفضل باينة"
    ],
    "lines": [
      [
        "Mara",
        "Auf dieser Seite sind Knöpfe. Auf der nächsten ist ein Nadelkissen.",
        "في الصفحة دي زراير. في اللي بعدها مخدة دبابيس."
      ],
      [
        "Luis",
        "Lies die Namen bitte noch einmal vor.",
        "اقري الأسامي تاني لو سمحتي."
      ],
      [
        "Mara",
        "Gern. Danach decke ich nur die Namen ab.",
        "حاضر. بعد كده هغطي الأسامي بس."
      ],
      [
        "Luis",
        "Die Fotos kann ich also weiter sehen.",
        "يعني هقدر أفضل أشوف الصور."
      ],
      [
        "Mara",
        "Ja. Versuch dann, die Wörter selbst zu sagen.",
        "أيوه. حاول بعد كده تقول الكلمات بنفسك."
      ],
      [
        "Luis",
        "Bei Nadelkissen brauche ich noch den letzten Teil.",
        "مع مخدة دبابيس لسه محتاج الجزء الأخير."
      ],
      [
        "Mara",
        "Kissen. Das ganze Wort sagst du danach selbst.",
        "كيسن. الكلمة كلها تقولها بعد كده بنفسك."
      ]
    ],
    "q": [
      [
        "Was deckt Mara ab?",
        "Nur die Namen.",
        "Nur die Fotos.",
        "Beide Seiten vollständig."
      ],
      [
        "Worum bittet Luis zuerst?",
        "Die Namen noch einmal vorzulesen.",
        "Das Heft mitnehmen zu dürfen.",
        "Echte Nadeln zu holen."
      ],
      [
        "Welchen Teil sagt Mara als Hilfe?",
        "Kissen.",
        "Nadel.",
        "Das ganze Wort."
      ]
    ]
  },
  {
    "id": "kleidung-oder-bedienung",
    "level": "A2",
    "title": [
      "Hier passt das Wort auch",
      "هنا الكلمة تنفع برضه"
    ],
    "lines": [
      [
        "Milan",
        "Beim Hemd verstehe ich Knopf. Ist das Wort beim Radio ein Fehler?",
        "مع القميص فاهم زرار. الكلمة مع الراديو غلطة؟"
      ],
      [
        "Oda",
        "Nein, hier hat Knopf eine andere Verwendung.",
        "لأ، هنا زرار ليها استخدام تاني."
      ],
      [
        "Milan",
        "Dann brauche ich den Zusammenhang, nicht nur das einzelne Wort.",
        "يبقى محتاج السياق، مش الكلمة لوحدها بس."
      ],
      [
        "Oda",
        "Genau. Das Nadelkissen ist dagegen ein zusätzlicher Gegenstand.",
        "بالظبط. مخدة الدبابيس على العكس حاجة إضافية مختلفة."
      ],
      [
        "Milan",
        "Ich lege die beiden Knopf-Fotos zusammen.",
        "هحط صورتي الزرار جنب بعض."
      ],
      [
        "Oda",
        "Weitere Bedeutungen suchen wir heute noch nicht.",
        "لسه مش هندور على معاني تانية النهارده."
      ],
      [
        "Milan",
        "Gut. Wir halten nur die zwei besprochenen Verwendungen fest.",
        "تمام. نسجل بس الاستخدامين اللي اتكلمنا عنهم."
      ]
    ],
    "q": [
      [
        "Was ist laut Oda kein Fehler?",
        "Das Wort Knopf beim Radio.",
        "Eine fehlende Karte.",
        "Das Wort Nadelkissen als Radiofunktion."
      ],
      [
        "Welche Rolle hat das Nadelkissen hier?",
        "Es ist ein zusätzlicher Gegenstand.",
        "Es ist eine dritte Bedeutung von Knopf.",
        "Es ersetzt das Radiofoto."
      ],
      [
        "Was halten sie fest?",
        "Nur die zwei besprochenen Verwendungen.",
        "Alle möglichen Bedeutungen des Wortes.",
        "Eine Anleitung zum Bedienen des Radios."
      ]
    ]
  },
  {
    "id": "nicht-jede-gruppe-ist-eine-form",
    "level": "B1",
    "title": [
      "Nach welchem Merkmal sortieren wir?",
      "بنرتب على أساس إيه؟"
    ],
    "lines": [
      [
        "Sina",
        "Ich habe die Gruppe kleine runde Dinge genannt.",
        "أنا سميت المجموعة حاجات صغيرة مدورة."
      ],
      [
        "Keno",
        "Das Nadelkissen ist auf diesem Foto rechteckig. Nicht alle Knöpfe sind rund.",
        "مخدة الدبابيس في الصورة دي مستطيلة. ومش كل الزراير مدورة."
      ],
      [
        "Sina",
        "Dann passt der Name nicht zu allen Beispielen. Ich möchte Wörter aus einem Bereich sammeln.",
        "يبقى الاسم مش مناسب لكل الأمثلة. أنا عايزة أجمع كلمات من مجال واحد."
      ],
      [
        "Keno",
        "Dafür wäre Nähzubehör eine passendere Überschrift.",
        "لده أدوات خياطة تبقى عنوان أنسب."
      ],
      [
        "Sina",
        "Ich ändere sie und schreibe unser Merkmal dazu.",
        "هغيره وأكتب المعيار بتاعنا كمان."
      ],
      [
        "Keno",
        "Nach Material könnten wir auf einer späteren Seite sortieren.",
        "ممكن نرتب حسب الخامة في صفحة بعدين."
      ],
      [
        "Sina",
        "Das bleibt erst einmal ein Vorschlag. Diese Seite ordnen wir nach dem Wortbereich.",
        "ده يفضل اقتراح دلوقتي. الصفحة دي نرتبها حسب مجال الكلمات."
      ]
    ],
    "q": [
      [
        "Welche Form hat das Nadelkissen auf dem besprochenen Foto?",
        "Rechteckig.",
        "Rund.",
        "Dreieckig."
      ],
      [
        "Welche Überschrift schlägt Keno vor?",
        "Nähzubehör.",
        "Nur runde Knöpfe.",
        "Alles aus demselben Material."
      ],
      [
        "Wie wird die jetzige Seite geordnet?",
        "Nach dem Wortbereich.",
        "Nach sicher gemessenem Gewicht.",
        "Nach einer schon durchgeführten Materialprüfung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "namen-unter-den-fotos": [
    "decke ich nur die Namen ab.",
    "Lies die Namen bitte noch einmal vor.",
    "Kissen. Das ganze Wort sagst du danach selbst."
  ],
  "kleidung-oder-bedienung": [
    "hier hat Knopf eine andere Verwendung.",
    "Das Nadelkissen ist dagegen ein zusätzlicher Gegenstand.",
    "nur die zwei besprochenen Verwendungen"
  ],
  "nicht-jede-gruppe-ist-eine-form": [
    "Das Nadelkissen ist auf diesem Foto rechteckig.",
    "Dafür wäre Nähzubehör eine passendere Überschrift.",
    "Diese Seite ordnen wir nach dem Wortbereich."
  ]
});

everydayDialogues.push(...[
  {
    "id": "zettel-vor-der-schachtel",
    "level": "A1",
    "title": [
      "Der Name soll sichtbar sein",
      "الاسم يبقى باين"
    ],
    "lines": [
      [
        "Emil",
        "Wohin soll der leere Teekessel?",
        "البراد الفاضي يتحط فين؟"
      ],
      [
        "Nora",
        "Links in das freie Fach. Die Schachtel kommt rechts daneben.",
        "على الشمال في الجزء الفاضي. العلبة تيجي على اليمين جنبه."
      ],
      [
        "Emil",
        "Ist das Teesieb in der Schachtel?",
        "مصفاة الشاي في العلبة؟"
      ],
      [
        "Nora",
        "Ja. Ich lege einen Zettel mit dem Namen hinein.",
        "أيوه. هحط جواها ورقة عليها الاسم."
      ],
      [
        "Emil",
        "Dann kann ich den Namen bei geschlossener Schachtel nicht sehen.",
        "كده مش هقدر أشوف الاسم والعلبة مقفولة."
      ],
      [
        "Nora",
        "Stimmt. Ich lege den Zettel vor die Schachtel.",
        "صح. هحط الورقة قدام العلبة."
      ],
      [
        "Emil",
        "Gut. Die Tassen stehen jetzt oben und fehlen auf diesem Foto.",
        "تمام. الفناجين دلوقتي فوق ومش في الصورة دي."
      ]
    ],
    "q": [
      [
        "Wo steht die Schachtel?",
        "Rechts neben dem Teekessel.",
        "Links vor der Tür.",
        "Auf dem Herd."
      ],
      [
        "Was ist in der Schachtel?",
        "Das Teesieb.",
        "Die beiden Tassen.",
        "Der Teekessel."
      ],
      [
        "Wohin legt Nora den Zettel zuletzt?",
        "Vor die Schachtel.",
        "Hinter den Schrank.",
        "Unter den Kessel."
      ]
    ]
  },
  {
    "id": "nicht-nur-nach-dem-standort",
    "level": "A2",
    "title": [
      "Erst die Fotos vergleichen",
      "نقارن الصور الأول"
    ],
    "lines": [
      [
        "Ole",
        "Vielleicht ist der Karton an der Tür deiner.",
        "يمكن الكرتونة اللي عند الباب بتاعتك."
      ],
      [
        "Jasmin",
        "Lass uns zuerst die Kessel mit unseren älteren Fotos vergleichen.",
        "خلينا الأول نقارن البرادين بصورنا الأقدم."
      ],
      [
        "Ole",
        "Deiner hat diese helle Stelle unter dem Griff.",
        "بتاعك فيه العلامة الفاتحة دي تحت اليد."
      ],
      [
        "Jasmin",
        "Ja, sie ist auf meinem Foto zu sehen. Dann gehört der zweite Karton mir.",
        "أيوه، هي باينة في صورتي. يبقى الكرتونة التانية بتاعتي."
      ],
      [
        "Ole",
        "Ich klebe meinen Namen auf den anderen Karton.",
        "هلزق اسمي على الكرتونة التانية."
      ],
      [
        "Jasmin",
        "Und das Teesieb auf dem Tisch, ist das deins?",
        "ومصفاة الشاي اللي على الترابيزة دي بتاعتك؟"
      ],
      [
        "Ole",
        "Ja, danke fürs Nachfragen. Ich lege es zu meinen Sachen.",
        "أيوه، شكرًا إنك سألتي. هحطها مع حاجتي."
      ]
    ],
    "q": [
      [
        "Was wollen sie zuerst vergleichen?",
        "Die Kessel mit älteren Fotos.",
        "Die Preise neuer Kessel.",
        "Die Größe ihrer Wohnungen."
      ],
      [
        "Welcher Karton gehört nach dem Vergleich Jasmin?",
        "Der zweite Karton.",
        "Der Karton an der Tür.",
        "Keiner der beiden."
      ],
      [
        "Was macht Ole mit dem Teesieb?",
        "Er legt es zu seinen Sachen.",
        "Er gibt es Jasmin als Geschenk.",
        "Er lässt es im Flur liegen."
      ]
    ]
  },
  {
    "id": "sichtbar-erinnert-noch-offen",
    "level": "B1",
    "title": [
      "Was zeigt die Aufnahme wirklich?",
      "الصورة بتبين إيه فعلًا؟"
    ],
    "lines": [
      [
        "Tariq",
        "Woher weißt du, dass das der letzte Tee im Sommerhaus war?",
        "عرفتي منين إن ده كان آخر شاي في بيت الصيف؟"
      ],
      [
        "Lene",
        "Eigentlich weiß ich nur, dass ich das Foto am Ende unseres Besuchs gemacht habe.",
        "في الحقيقة أنا عارفة بس إني صورت الصورة في نهاية زيارتنا."
      ],
      [
        "Tariq",
        "Dann sollten wir Erinnerung und sichtbare Einzelheiten trennen.",
        "يبقى المفروض نفصل الذكرى عن التفاصيل اللي باينة."
      ],
      [
        "Lene",
        "Den alten Titel behalte ich als persönliche Notiz. Unter das Bild kommt Teekessel auf dem Herd.",
        "هحتفظ بالعنوان القديم كملحوظة شخصية. تحت الصورة نكتب براد على البوتاجاز."
      ],
      [
        "Tariq",
        "Und beim Teesieb kennen wir die genaue Sorte der Blätter nicht.",
        "ومع مصفاة الشاي مش عارفين نوع الورق بالظبط."
      ],
      [
        "Lene",
        "Also bleibt der Sortenname offen. Nach weiteren Erinnerungen können wir später fragen.",
        "يبقى اسم النوع يفضل مفتوح. ممكن نسأل على ذكريات تانية بعدين."
      ],
      [
        "Tariq",
        "Gut. Diese Frage haben wir bisher noch niemandem gestellt.",
        "تمام. السؤال ده لحد دلوقتي لسه ماسألناهوش لحد."
      ]
    ],
    "q": [
      [
        "Warum wird der alte Titel nicht als neutrale Bildunterschrift verwendet?",
        "Er enthält eine nicht gesicherte Erinnerung.",
        "Der Kessel ist auf dem Bild unsichtbar.",
        "Alle persönlichen Notizen sind verboten."
      ],
      [
        "Was bleibt beim Teesieb offen?",
        "Der genaue Sortenname der Blätter.",
        "Ob ein Sieb auf dem Bild ist.",
        "Ob die Notiz schon gelöscht wurde."
      ],
      [
        "Wurde schon nach weiteren Erinnerungen gefragt?",
        "Nein, das ist nur für später vorgeschlagen.",
        "Ja, alle Antworten sind bestätigt.",
        "Ja, aber niemand durfte antworten."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "zettel-vor-der-schachtel": [
    "Die Schachtel kommt rechts daneben.",
    "Ist das Teesieb in der Schachtel?",
    "Ich lege den Zettel vor die Schachtel."
  ],
  "nicht-nur-nach-dem-standort": [
    "die Kessel mit unseren älteren Fotos vergleichen",
    "Dann gehört der zweite Karton mir.",
    "Ich lege es zu meinen Sachen."
  ],
  "sichtbar-erinnert-noch-offen": [
    "Erinnerung und sichtbare Einzelheiten trennen.",
    "die genaue Sorte der Blätter nicht.",
    "Diese Frage haben wir bisher noch niemandem gestellt."
  ]
});

everydayDialogues.push(...[
  {
    "id": "die-woerter-auf-ein-extra-blatt",
    "level": "A1",
    "title": [
      "Schreib nicht auf das Foto",
      "ماتكتبش على الصورة"
    ],
    "lines": [
      [
        "Paul",
        "Danke für den Brief. Wie heißt der Gegenstand vorn auf dem Foto?",
        "شكرًا على الجواب. اسم الحاجة اللي قدام في الصورة إيه؟"
      ],
      [
        "Ines",
        "Das ist ein Hobel. Der andere Gegenstand heißt Schraubzwinge.",
        "دي فارة نجارة. الحاجة التانية اسمها قمطة نجارة."
      ],
      [
        "Paul",
        "Ich schreibe die Wörter auf ein extra Blatt. Das Foto bleibt unverändert.",
        "هكتب الكلمات على ورقة لوحدها. الصورة تفضل زي ما هي."
      ],
      [
        "Ines",
        "Gut. Das Foto habe ich erst gestern in einer Schublade gefunden.",
        "تمام. أنا لقيت الصورة امبارح بس في درج."
      ],
      [
        "Paul",
        "Mila fragt, ob die Werkstatt noch offen ist.",
        "ميلا بتسأل إذا الورشة لسه مفتوحة."
      ],
      [
        "Ines",
        "Das steht nicht in meinem Brief. Frag deinen Großvater später danach.",
        "ده مش مكتوب في جوابي. اسأل جدك عن ده بعدين."
      ],
      [
        "Paul",
        "Das mache ich später. Heute lege ich erst alles in die Mappe.",
        "هعمل ده بعدين. النهارده أحط الأول كل حاجة في الملف."
      ]
    ],
    "q": [
      [
        "Worauf schreibt Paul die Wörter?",
        "Auf ein extra Blatt.",
        "Auf das alte Foto.",
        "Auf den Briefumschlag."
      ],
      [
        "Wann hat Ines das Foto gefunden?",
        "Erst gestern.",
        "Schon vor zehn Jahren.",
        "Morgen."
      ],
      [
        "Was möchte Paul heute zuerst machen?",
        "Alles in die Mappe legen.",
        "Die Werkstatt öffnen.",
        "Neue Werkzeuge kaufen."
      ]
    ]
  },
  {
    "id": "nummer-ist-nicht-aufnahmezeit",
    "level": "A2",
    "title": [
      "Zwei Ansichten, keine Arbeitsfolge",
      "منظرين، مش ترتيب شغل"
    ],
    "lines": [
      [
        "Denis",
        "Werkstatt eins muss doch vor Werkstatt zwei aufgenommen worden sein.",
        "ورشة واحد أكيد اتصورت قبل ورشة اتنين."
      ],
      [
        "Rika",
        "Nein, die Zahlen habe ich erst beim Kopieren vergeben.",
        "لأ، الأرقام أنا اديتها لما نسختهم."
      ],
      [
        "Denis",
        "Dann zeigen wir die Bilder lieber als zwei Ansichten derselben Werkbank.",
        "يبقى الأفضل نعرض الصور كمنظرين لنفس ترابيزة الشغل."
      ],
      [
        "Rika",
        "Ja. Für den Abend kommt der Hobel zuerst, die Schraubzwinge danach.",
        "أيوه. بالنسبة لليلة فارة النجارة الأول، والقمطة بعدها."
      ],
      [
        "Denis",
        "Den Satz Danach ging die Arbeit weiter streiche ich. Dafür fehlt uns ein Beleg.",
        "هشطب جملة بعد كده الشغل كمل. مش عندنا دليل على ده."
      ],
      [
        "Rika",
        "Die Originale behalten wir. Die neue Bildfolge speichere ich extra.",
        "نحتفظ بالصور الأصلية. ترتيب العرض الجديد هحفظه لوحده."
      ],
      [
        "Denis",
        "Und nach Erinnerungen fragen wir erst am Abend. Antworten haben wir noch nicht.",
        "وعلى الذكريات نسأل بالليل. لسه مش عندنا إجابات."
      ]
    ],
    "q": [
      [
        "Wann hat Rika die Zahlen vergeben?",
        "Beim Kopieren.",
        "Sicher direkt bei der Aufnahme.",
        "Nach einer bestätigten Arbeitsfolge."
      ],
      [
        "Was kommt in der gewählten Bildfolge danach?",
        "Die Schraubzwinge.",
        "Der Hobel.",
        "Ein Foto des Gartens."
      ],
      [
        "Wie speichert Rika die neue Bildfolge?",
        "Extra, die Originale bleiben erhalten.",
        "Über allen Originalen ohne Sicherung.",
        "Sie speichert gar nichts."
      ]
    ]
  },
  {
    "id": "wortkenntnis-und-fachkenntnis",
    "level": "B1",
    "title": [
      "Nur die Namen auf dieser Seite",
      "الأسامي بس في الصفحة دي"
    ],
    "lines": [
      [
        "Dima",
        "Sollen wir unter die Fotos auch eine Anleitung schreiben?",
        "نكتب تعليمات استخدام تحت الصور كمان؟"
      ],
      [
        "Arne",
        "Ich kenne nur die Namen. Selbst verwendet habe ich die Werkzeuge noch nie.",
        "أنا عارف الأسامي بس. عمري ماستخدمت الأدوات بنفسي."
      ],
      [
        "Dima",
        "Dann ist eine Wortübung der passendere Rahmen.",
        "يبقى تدريب كلمات هو الإطار الأنسب."
      ],
      [
        "Arne",
        "Den Absatz mit vermuteten Schritten nehme ich heraus, ohne eine kurze Anleitung nachzuschieben.",
        "هشيل الفقرة اللي فيها خطوات متخمنة، من غير ما أضيف تعليمات قصيرة بدلها."
      ],
      [
        "Dima",
        "Eine fachliche Erklärung müsste später eine qualifizierte Person prüfen.",
        "الشرح المهني لازم شخص مؤهل يراجعه بعدين."
      ],
      [
        "Arne",
        "Das ist bisher noch nicht vereinbart. Heute bleiben wir bei den Namen.",
        "ده لحد دلوقتي لسه مش متفق عليه. النهارده نكتفي بالأسامي."
      ],
      [
        "Dima",
        "Ich prüfe nur, ob Hobel und Schraubzwinge den richtigen Fotos zugeordnet sind.",
        "هراجع بس إذا فارة النجارة وقمطة النجارة متوصلين بالصور الصح."
      ]
    ],
    "q": [
      [
        "Welche Erfahrung nennt Arne?",
        "Er hat die Werkzeuge selbst noch nie verwendet.",
        "Er hat die Anwendung beruflich geprüft.",
        "Er hat die Werkzeuge für Dima gebaut."
      ],
      [
        "Was ersetzt den entfernten Absatz?",
        "Keine neue Anleitung, sie bleiben bei den Namen.",
        "Eine ungeprüfte Kurzfassung der Schritte.",
        "Ein verbindlich gebuchter Kurs."
      ],
      [
        "Was prüft Dima?",
        "Nur die Zuordnung von Namen und Fotos.",
        "Die sichere Anwendung aller Werkzeuge.",
        "Die Qualifikation eines schon beauftragten Prüfers."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "die-woerter-auf-ein-extra-blatt": [
    "Ich schreibe die Wörter auf ein extra Blatt.",
    "erst gestern in einer Schublade gefunden.",
    "Heute lege ich erst alles in die Mappe."
  ],
  "nummer-ist-nicht-aufnahmezeit": [
    "die Zahlen habe ich erst beim Kopieren vergeben.",
    "die Schraubzwinge danach.",
    "Die Originale behalten wir. Die neue Bildfolge speichere ich extra."
  ],
  "wortkenntnis-und-fachkenntnis": [
    "Selbst verwendet habe ich die Werkzeuge noch nie.",
    "Heute bleiben wir bei den Namen.",
    "Ich prüfe nur, ob Hobel und Schraubzwinge den richtigen Fotos zugeordnet sind."
  ]
});

everydayDialogues.push(...[
  {
    "id": "nur-mit-den-bildern",
    "level": "A1",
    "title": [
      "Das zweite Wort noch einmal",
      "الكلمة التانية كمان مرة"
    ],
    "lines": [
      [
        "Lea",
        "Auf dem ersten Bild ist eine Spule. Der Plural heißt die Spulen.",
        "في الصورة الأولى فيه بكرة خيط. الجمع بالألماني die Spulen."
      ],
      [
        "Sami",
        "Spule, Spulen. Und was ist auf dem zweiten Bild?",
        "Spule, Spulen. وإيه في الصورة التانية؟"
      ],
      [
        "Lea",
        "Eine Stecknadel. Der rote Kopf ist gut zu sehen.",
        "دبوس خياطة. الراس الحمرا باينة كويس."
      ],
      [
        "Sami",
        "Sag das zweite Wort bitte noch einmal langsam.",
        "قولي الكلمة التانية بالراحة كمان مرة."
      ],
      [
        "Lea",
        "Stecknadel. Wir üben nur mit den Bildern und nehmen nichts aus der Kiste.",
        "Stecknadel. بنتدرب بالصور بس ومش بناخد حاجة من العلبة."
      ],
      [
        "Sami",
        "Gut. Mein Heft bleibt hier vor meinem Stuhl liegen.",
        "تمام. كراستي تفضل هنا قدام كرسيي."
      ],
      [
        "Lea",
        "Das Bilderheft lege ich links neben die Kiste. Morgen machen wir weiter.",
        "كراسة الصور هحطها على شمال العلبة. بكرة نكمل."
      ]
    ],
    "q": [
      [
        "Was ist auf dem ersten Bild?",
        "Eine Spule.",
        "Ein Stuhl.",
        "Eine Schere."
      ],
      [
        "Was soll Lea wiederholen?",
        "Das zweite Wort langsam.",
        "Alle Wörter sehr schnell.",
        "Den Namen ihrer Mutter."
      ],
      [
        "Was nehmen sie aus der Kiste?",
        "Nichts.",
        "Alle Spulen.",
        "Eine Stecknadel."
      ]
    ]
  },
  {
    "id": "samstag-um-elf-bestaetigt",
    "level": "A2",
    "title": [
      "Nicht Freitag, sondern Samstag",
      "مش الجمعة، السبت"
    ],
    "lines": [
      [
        "Eva",
        "Ich muss am Freitag länger arbeiten. Kann ich die Nähkiste am Samstagvormittag zurückbringen?",
        "لازم أشتغل وقت أطول يوم الجمعة. ينفع أرجع علبة الخياطة السبت الصبح؟"
      ],
      [
        "Nora",
        "Ich schaue kurz nach. Samstag um elf bin ich zu Hause. Passt dir das?",
        "هبص بسرعة. السبت الساعة حداشر هبقى في البيت. يناسبك؟"
      ],
      [
        "Eva",
        "Ja, Samstag um elf passt. Die geschlossene Kiste steht schon neben meiner Tasche.",
        "أيوه، السبت حداشر مناسب. العلبة المقفولة موجودة جنب شنطتي من دلوقتي."
      ],
      [
        "Nora",
        "Dann streiche ich Freitag und trage Samstag ein.",
        "يبقى أشطب الجمعة وأسجل السبت."
      ],
      [
        "Eva",
        "Die Kiste ist also bis Samstag noch bei mir.",
        "يعني العلبة لحد السبت لسه عندي."
      ],
      [
        "Nora",
        "Genau. Ob alles drin ist, sehen wir uns bei der Rückgabe gemeinsam an.",
        "بالظبط. إذا كل حاجة جواها نبص عليه مع بعض وقت الترجيع."
      ],
      [
        "Eva",
        "Einverstanden. Schick mir bitte die Hausnummer noch einmal.",
        "متفقين. ابعتيلي رقم البيت تاني لو سمحتي."
      ]
    ],
    "q": [
      [
        "Welchen Termin bestätigt Eva?",
        "Samstag um elf.",
        "Freitagabend.",
        "Sonntag um elf."
      ],
      [
        "Wo steht die Kiste?",
        "Neben Evas Tasche.",
        "Vor Noras Tür.",
        "Bei Noras Schwester."
      ],
      [
        "Wann wollen sie den Inhalt gemeinsam ansehen?",
        "Bei der Rückgabe.",
        "Sie haben ihn gestern schon geprüft.",
        "Erst nach einem Verkauf."
      ]
    ]
  },
  {
    "id": "nur-fuer-den-naechsten-abend",
    "level": "B1",
    "title": [
      "Was heißt hier Für dich?",
      "هنا ليك معناها إيه؟"
    ],
    "lines": [
      [
        "Karim",
        "Auf dem Zettel steht Für dich. Meinst du die Spulen und die Dose als Geschenk?",
        "على الورقة مكتوب ليك. تقصدي البكر والعلبة هدية؟"
      ],
      [
        "Jule",
        "Nein, ich möchte sie nach unserem nächsten Abend wieder mitnehmen.",
        "لأ، عايزة آخدهم تاني بعد القعدة المشتركة الجاية."
      ],
      [
        "Karim",
        "Dann sollten wir die Begrenzung dazuschreiben. Aus Für dich konnte ich das nicht erkennen.",
        "يبقى نكتب الحد ده كمان. من كلمة ليك مكنتش أقدر أفهمه."
      ],
      [
        "Jule",
        "Stimmt. Ich schreibe Leihgabe für unseren nächsten Abend, danach zurück an Jule.",
        "صح. هكتب إعارة للقعدة المشتركة الجاية، وبعدها ترجع ليوله."
      ],
      [
        "Karim",
        "Den genauen Termin haben wir noch nicht. Das Datum lassen wir deshalb offen.",
        "لسه مش عندنا المعاد المحدد. عشان كده نسيب التاريخ مش محدد."
      ],
      [
        "Jule",
        "Wir ergänzen ihn, sobald wir uns auf einen Abend geeinigt haben.",
        "نضيفه أول ما نتفق على ليلة."
      ],
      [
        "Karim",
        "Bis dahin bewahre ich deine Sachen getrennt von meinen auf.",
        "لحد وقتها هحتفظ بحاجتك منفصلة عن حاجتي."
      ]
    ],
    "q": [
      [
        "Was meint Jule mit den Sachen?",
        "Eine Leihgabe, kein Geschenk.",
        "Einen bereits bezahlten Verkauf.",
        "Eine erledigte Rückgabe."
      ],
      [
        "Was bleibt zunächst offen?",
        "Das genaue Datum des nächsten Abends.",
        "Wem die Sachen gehören.",
        "Ob Karim eine eigene Sammlung hat."
      ],
      [
        "Wie bewahrt Karim die Sachen auf?",
        "Getrennt von seinen eigenen Sachen.",
        "Er wirft sie sofort weg.",
        "Er schickt sie ohne Absprache weiter."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "nur-mit-den-bildern": [
    "Auf dem ersten Bild ist eine Spule.",
    "Sag das zweite Wort bitte noch einmal langsam.",
    "nehmen nichts aus der Kiste."
  ],
  "samstag-um-elf-bestaetigt": [
    "Ja, Samstag um elf passt.",
    "Die geschlossene Kiste steht schon neben meiner Tasche.",
    "bei der Rückgabe gemeinsam an."
  ],
  "nur-fuer-den-naechsten-abend": [
    "Leihgabe für unseren nächsten Abend",
    "Den genauen Termin haben wir noch nicht.",
    "getrennt von meinen auf."
  ]
});

everydayDialogues.push(...[
  {
    "id": "in-der-mitte-ist-noch-kein-platz",
    "level": "A1",
    "title": [
      "Erst die Bücher weg",
      "نشيل الكتب الأول"
    ],
    "lines": [
      [
        "Rosa",
        "Der Brotkorb steht links neben den Tellern. Wohin kommt die Obstschale?",
        "سبت العيش على شمال الأطباق. طبق الفاكهة يتحط فين؟"
      ],
      [
        "Emil",
        "In die Mitte. Aber da liegen noch zwei Bücher.",
        "في النص. بس لسه فيه هناك كتابين."
      ],
      [
        "Rosa",
        "Die lege ich auf das Regal. Dann ist dort Platz.",
        "هحطهم على الرف. كده يبقى فيه مكان."
      ],
      [
        "Emil",
        "Wir haben vier Teller, aber erst drei Gläser.",
        "عندنا أربع أطباق، بس لسه تلات كوبايات."
      ],
      [
        "Rosa",
        "Hol bitte noch ein Glas aus dem Schrank.",
        "هات كوباية كمان من الدولاب لو سمحت."
      ],
      [
        "Emil",
        "Hier ist das vierte. Jetzt klingelt es an der Tür.",
        "أهي الرابعة. دلوقتي الجرس بيرن على الباب."
      ],
      [
        "Rosa",
        "Ich bleibe am Tisch. Geh du bitte zur Tür.",
        "هفضل عند الترابيزة. روح إنت للباب لو سمحت."
      ]
    ],
    "q": [
      [
        "Was soll in die Mitte?",
        "Die Obstschale.",
        "Der Schrank.",
        "Ein Stuhl."
      ],
      [
        "Wohin legt Rosa die Bücher?",
        "Auf das Regal.",
        "In den Brotkorb.",
        "Vor die Tür."
      ],
      [
        "Wie viele Gläser gibt es nach Emils Rückkehr?",
        "Vier.",
        "Zwei.",
        "Sechs."
      ]
    ]
  },
  {
    "id": "nur-der-tisch-wechselt",
    "level": "A2",
    "title": [
      "Die Einladung bleibt gleich",
      "الدعوة زي ما هي"
    ],
    "lines": [
      [
        "Luis",
        "Mit vier Stühlen wird es am Küchentisch zu eng. Nehmen wir den Tisch im Wohnzimmer?",
        "بأربع كراسي ترابيزة المطبخ هتبقى زحمة قوي. نستخدم ترابيزة المعيشة؟"
      ],
      [
        "Tessa",
        "Ja. Tag und Uhrzeit ändern sich dadurch nicht.",
        "أيوه. اليوم والمعاد مش بيتغيروا بكده."
      ],
      [
        "Luis",
        "Den leeren Brotkorb stelle ich schon hin. Die Obstschale bleibt erst in der Küche.",
        "هحط سبت العيش الفاضي من دلوقتي. طبق الفاكهة يفضل في المطبخ الأول."
      ],
      [
        "Tessa",
        "Ich bringe zuerst die vier Teller. Danach sehe ich, ob die Schale noch Platz hat.",
        "هجيب الأول الأربع أطباق. بعد كده أبص إذا لسه فيه مكان للطبق الكبير."
      ],
      [
        "Luis",
        "Auf meinen Zettel kommen nur die Sachen, die jetzt im Wohnzimmer stehen.",
        "في ورقتي هكتب بس الحاجات اللي موجودة دلوقتي في أوضة المعيشة."
      ],
      [
        "Tessa",
        "Das ist also keine neue Einladung und keine Einkaufsliste.",
        "يعني دي مش دعوة جديدة ولا قايمة مشتريات."
      ],
      [
        "Luis",
        "Genau. Brot und Getränke holen wir gleich noch aus der Küche.",
        "بالظبط. العيش والمشروبات هنجيبهم كمان شوية من المطبخ."
      ]
    ],
    "q": [
      [
        "Was ändern sie?",
        "Den Tisch innerhalb derselben Wohnung.",
        "Den Tag des Frühstücks.",
        "Die Adresse."
      ],
      [
        "Was bleibt zuerst in der Küche?",
        "Die Obstschale.",
        "Der leere Brotkorb.",
        "Luis selbst bis zum Abend."
      ],
      [
        "Was steht auf Luis Zettel?",
        "Nur die nun im Wohnzimmer stehenden Sachen.",
        "Eine neue Einladung.",
        "Eine bezahlte Bestellung."
      ]
    ]
  },
  {
    "id": "aus-glas-gibt-den-zusammenhang",
    "level": "B1",
    "title": [
      "Lies den ganzen Satz",
      "اقرا الجملة كاملة"
    ],
    "lines": [
      [
        "Farid",
        "Bei Obstschale denke ich zuerst an die Hülle einer Frucht.",
        "مع كلمة Obstschale بفكر الأول في قشر الفاكهة."
      ],
      [
        "Pia",
        "Das Wort kann auch ein Gefäß für Obst bezeichnen. Lies den ganzen Satz.",
        "الكلمة ممكن تسمي إناء للفاكهة كمان. اقرا الجملة كاملة."
      ],
      [
        "Farid",
        "Hier steht: Neben dem Brotkorb steht eine große Obstschale aus Glas.",
        "هنا مكتوب: جنب سبت العيش فيه طبق فاكهة كبير من إزاز."
      ],
      [
        "Pia",
        "Dann ist hier das Gefäß gemeint. Entscheidend ist der Zusammenhang.",
        "يبقى المقصود هنا الإناء. السياق هو اللي بيحدد."
      ],
      [
        "Farid",
        "Ich ergänze den Beispielsatz auf meiner Karte, statt eine Bedeutung ganz zu streichen.",
        "هضيف جملة المثال على الكارت بدل ما أشطب معنى خالص."
      ],
      [
        "Pia",
        "Und aus Glas beschreibt nur dieses Beispiel, nicht alle Obstschalen.",
        "ومن إزاز بتوصف المثال ده بس، مش كل أطباق الفاكهة."
      ],
      [
        "Farid",
        "Genau. Ich notiere, was das Wort hier bedeutet, und behalte beide Möglichkeiten.",
        "بالظبط. هكتب الكلمة معناها إيه هنا، وأحتفظ بالاحتمالين."
      ]
    ],
    "q": [
      [
        "Was soll Farid lesen?",
        "Den ganzen Satz.",
        "Nur den ersten Buchstaben.",
        "Eine Einkaufsliste."
      ],
      [
        "Was beschreibt aus Glas?",
        "Nur das Gefäß in diesem Beispiel.",
        "Das Material aller Obstschalen.",
        "Die äußere Hülle jeder Frucht."
      ],
      [
        "Wie behandelt Farid die beiden Bedeutungen?",
        "Er behält beide und markiert die hier gemeinte.",
        "Er streicht die ihm schon bekannte ganz.",
        "Er erklärt beide für falsch."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "in-der-mitte-ist-noch-kein-platz": [
    "Wohin kommt die Obstschale?",
    "Die lege ich auf das Regal.",
    "Hier ist das vierte."
  ],
  "nur-der-tisch-wechselt": [
    "Nehmen wir den Tisch im Wohnzimmer?",
    "Die Obstschale bleibt erst in der Küche.",
    "nur die Sachen, die jetzt im Wohnzimmer stehen."
  ],
  "aus-glas-gibt-den-zusammenhang": [
    "Lies den ganzen Satz.",
    "nur dieses Beispiel, nicht alle Obstschalen.",
    "behalte beide Möglichkeiten."
  ]
});

everydayDialogues.push(...[
  {
    "id": "die-zweite-karte-im-heft",
    "level": "A1",
    "title": [
      "Wo ist die zweite Karte?",
      "الكارت التاني فين؟"
    ],
    "lines": [
      [
        "Anja",
        "Wie heißt die Dose auf dem oberen Brett?",
        "اسم السكرية اللي على الرف اللي فوق إيه؟"
      ],
      [
        "Ben",
        "Zuckerdose. Die Karte liegt direkt darunter.",
        "Zuckerdose. الكارت موجود تحتها على طول."
      ],
      [
        "Anja",
        "Und unter dem Nussknacker liegt noch keine Karte.",
        "وتحت كسارة البندق لسه مفيش كارت."
      ],
      [
        "Ben",
        "Die steckt noch in meinem Heft. Ich lege sie auf das untere Brett.",
        "لسه جوه كراستي. هحطها على الرف اللي تحت."
      ],
      [
        "Anja",
        "Machen wir heute Fotos von beiden Sachen?",
        "نصور الحاجتين النهارده؟"
      ],
      [
        "Ben",
        "Nein, die Bilder auf meinem Computer passen schon. Ausdrucken möchte ich sie später.",
        "لأ، الصور اللي على الكمبيوتر مناسبة من قبل كده. عايز أطبعها بعدين."
      ],
      [
        "Anja",
        "Dann schreibe ich jetzt nur die Wörter in mein Heft.",
        "يبقى دلوقتي أكتب الكلمات بس في كراستي."
      ]
    ],
    "q": [
      [
        "Wo liegt die erste Karte?",
        "Direkt unter der Zuckerdose.",
        "Im Computer.",
        "Bei Anja zu Hause."
      ],
      [
        "Was holt Ben aus seinem Heft?",
        "Die zweite Karte.",
        "Eine neue Zuckerdose.",
        "Einen Teller."
      ],
      [
        "Was möchte Ben später machen?",
        "Die vorhandenen Bilder ausdrucken.",
        "Neue Sachen kaufen.",
        "Alle Karten wegwerfen."
      ]
    ]
  },
  {
    "id": "fundort-und-eigentum-trennen",
    "level": "A2",
    "title": [
      "Das wissen wir noch nicht",
      "ده لسه مانعرفوش"
    ],
    "lines": [
      [
        "Marek",
        "Auf dem Zettel steht der Name deiner Großmutter. Waren die Sachen also ihre?",
        "على الورقة اسم جدتك. يبقى الحاجات كانت بتاعتها؟"
      ],
      [
        "Selin",
        "Das vermuten wir nur. Wir wissen nicht, worauf sich der Name bezieht.",
        "ده تخمين بس. مش عارفين الاسم متعلق بإيه."
      ],
      [
        "Marek",
        "Dann schreibe ich unter die Fotos nur Zuckerdose und Nussknacker und den Fundort.",
        "يبقى أكتب تحت الصور Zuckerdose وNussknacker بس ومكان اللقيا."
      ],
      [
        "Selin",
        "Die Frage nach der früheren Besitzerin kommt auf ein eigenes Blatt.",
        "السؤال عن المالكة القديمة يتحط على ورقة لوحده."
      ],
      [
        "Marek",
        "Heißt das, dass deine Großmutter sicher nicht die Besitzerin war?",
        "ده معناه إن جدتك أكيد مكنتش المالكة؟"
      ],
      [
        "Selin",
        "Nein. Es ist weder bestätigt noch widerlegt. Ich frage meine Tante bei einem späteren Besuch.",
        "لأ. ده لا اتأكد ولا اتثبت غلط. هسأل خالتي في زيارة بعدين."
      ],
      [
        "Marek",
        "Einen Termin dafür haben wir noch nicht. Den alten Zettel behalten wir.",
        "لسه مش عندنا معاد لكده. نحتفظ بالورقة القديمة."
      ]
    ],
    "q": [
      [
        "Wie sicher ist die Eigentumsvermutung?",
        "Weder bestätigt noch widerlegt.",
        "Bereits bewiesen.",
        "Sicher falsch."
      ],
      [
        "Wohin kommt die Frage nach der Besitzerin?",
        "Auf ein eigenes Blatt.",
        "Als bestätigte Tatsache unter jedes Foto.",
        "In eine schon gesendete Bestellung."
      ],
      [
        "Was behalten sie?",
        "Den alten Zettel.",
        "Nur eine neu erfundene Jahreszahl.",
        "Nichts aus der Schachtel."
      ]
    ]
  },
  {
    "id": "beispiel-ist-keine-formenliste",
    "level": "B1",
    "title": [
      "Nicht alle sehen gleich aus",
      "مش كلهم شكل واحد"
    ],
    "lines": [
      [
        "Ada",
        "Meine Zuckerdose sieht anders aus. Ist das Foto trotzdem ein passendes Beispiel?",
        "السكرية عندي شكلها مختلف. الصورة برضه مثال مناسب؟"
      ],
      [
        "Leon",
        "Ja. Das Wort verlangt nicht, dass jede Dose dieselbe Farbe oder dieselben Henkel hat.",
        "أيوه. الكلمة مش بتشترط إن كل سكرية ليها نفس اللون أو نفس الودان."
      ],
      [
        "Ada",
        "Und beim Nussknacker kenne ich auch die bemalte Holzfigur.",
        "وبالنسبة لكسارة البندق عارفة كمان الشخصية الخشب المتلونة."
      ],
      [
        "Leon",
        "Wir zeigen heute das zangenähnliche Gerät. Die andere Form kommt als Hinweis auf ein extra Blatt.",
        "النهارده بنعرض الأداة اللي شبه الزرادية. الشكل التاني يتحط كملحوظة على ورقة لوحده."
      ],
      [
        "Ada",
        "Damit bestätigen wir aber nicht, dass jede Dekorationsfigur funktioniert.",
        "بس كده مش بنأكد إن كل شخصية زينة بتشتغل."
      ],
      [
        "Leon",
        "Genau. Heute prüfen wir nur die Zuordnung von Wort und Bild.",
        "بالظبط. النهارده بنراجع بس توصيل الكلمة بالصورة."
      ],
      [
        "Ada",
        "Dann nenne ich die Sammlung Beispiele, keine vollständige Formenliste.",
        "يبقى أسمي المجموعة أمثلة، مش قايمة كاملة للأشكال."
      ]
    ],
    "q": [
      [
        "Was zeigt die Sammlung?",
        "Beispiele, keine vollständige Formenliste.",
        "Eine geprüfte Bedienungsanleitung.",
        "Alle möglichen Materialien."
      ],
      [
        "Welche Nussknackerform zeigen sie heute?",
        "Das zangenähnliche Gerät.",
        "Ausschließlich die Holzfigur.",
        "Keine der genannten Formen."
      ],
      [
        "Was prüfen sie heute?",
        "Nur die Zuordnung von Wort und Bild.",
        "Die Funktion jeder Dekorationsfigur.",
        "Die Materialien aller Gegenstände."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "die-zweite-karte-im-heft": [
    "Die Karte liegt direkt darunter.",
    "Die steckt noch in meinem Heft.",
    "Ausdrucken möchte ich sie später."
  ],
  "fundort-und-eigentum-trennen": [
    "Es ist weder bestätigt noch widerlegt.",
    "kommt auf ein eigenes Blatt.",
    "Den alten Zettel behalten wir."
  ],
  "beispiel-ist-keine-formenliste": [
    "Beispiele, keine vollständige Formenliste.",
    "Wir zeigen heute das zangenähnliche Gerät.",
    "Heute prüfen wir nur die Zuordnung von Wort und Bild."
  ]
});

everydayDialogues.push(...[
  {
    "id": "foto-vorne-in-der-mappe",
    "level": "A1",
    "title": [
      "Wo ist das Bild mit der Mühle?",
      "صورة المطحنة فين؟"
    ],
    "lines": [
      [
        "Rita",
        "Ich suche das Foto mit der Kaffeemühle.",
        "بدور على صورة مطحنة البن."
      ],
      [
        "Tom",
        "Hier, hinter dem Glasfoto. Ich lege es nach vorn.",
        "أهو، ورا صورة الكوباية. هحطه قدام."
      ],
      [
        "Rita",
        "Das Bild mit dem Korkenzieher liegt schon neben der Mappe.",
        "صورة فتاحة الفلين موجودة أصلًا جنب الملف."
      ],
      [
        "Tom",
        "Achte beim Schreiben auf das h nach dem ü in Kaffeemühle.",
        "خدي بالك وإنتي بتكتبي من حرف h بعد ü في Kaffeemühle."
      ],
      [
        "Rita",
        "Danke, ich verbessere das Wort. Kleben wir die Bilder jetzt ein?",
        "شكرًا، هصحح الكلمة. نلزق الصور دلوقتي؟"
      ],
      [
        "Tom",
        "Der Kleber liegt noch bei deiner Schwester.",
        "اللزق لسه عند أختك."
      ],
      [
        "Rita",
        "Dann kommen beide Bilder und das Blatt erst einmal zurück in die Mappe.",
        "يبقى الصورتين والورقة يرجعوا في الملف مؤقتًا."
      ]
    ],
    "q": [
      [
        "Wo liegt das Korkenzieherbild?",
        "Neben der Mappe.",
        "Im Bad.",
        "Unter dem Kleber."
      ],
      [
        "Worauf weist Tom hin?",
        "Auf das h nach dem ü.",
        "Auf ein fehlendes Bild mit einem Haus.",
        "Auf einen neuen Klebestift."
      ],
      [
        "Was kommt vorerst in die Mappe zurück?",
        "Beide Bilder und das Blatt.",
        "Nur ein leerer Umschlag.",
        "Eine echte Kaffeemühle."
      ]
    ]
  },
  {
    "id": "rueckseiten-einzeln-abgleichen",
    "level": "A2",
    "title": [
      "Nicht nach der Kartengröße",
      "مش حسب حجم الكارت"
    ],
    "lines": [
      [
        "Omar",
        "Die beiden Rückseitenkarten liegen lose hier. Welche gehört zu welchem Bild?",
        "كارتين الضهر سايبين هنا. أنهي واحد تابع لأنهي صورة؟"
      ],
      [
        "Jule",
        "Lesen wir die Beschreibungen ganz. Nach der Größe geht es nicht.",
        "نقرا الوصف كامل. مش هينفع حسب الحجم."
      ],
      [
        "Omar",
        "Stimmt, beide Karten haben dasselbe Format. Hier steht etwas über Kaffeebohnen.",
        "صح، الكارتين نفس المقاس. هنا مكتوب حاجة عن حبوب البن."
      ],
      [
        "Jule",
        "Das passt zum Foto der Kaffeemühle. Die Karte mit dem spiralförmigen Teil gehört zum Korkenzieher.",
        "ده مناسب لصورة مطحنة البن. الكارت اللي فيه الجزء الحلزوني تابع لفتاحة الفلين."
      ],
      [
        "Omar",
        "Jetzt lege ich jede Karte zum passenden Foto. Stimmen auch die Umschlagwörter?",
        "دلوقتي أحط كل كارت مع الصورة المناسبة. الكلمات على الأظرف متفقة برضه؟"
      ],
      [
        "Jule",
        "Ja. Ob die Geräte funktionieren, haben wir damit aber nicht geprüft.",
        "أيوه. بس كده مش نكون راجعنا إذا الأجهزة بتشتغل."
      ],
      [
        "Omar",
        "Dann kommen die Umschläge in die Schublade. Wir verschicken sie heute nicht.",
        "يبقى الأظرف تتحط في الدرج. مش هنبعتها النهارده."
      ]
    ],
    "q": [
      [
        "Warum sortieren sie nicht nach Größe?",
        "Beide Karten sind gleich groß.",
        "Alle Karten sind verschwunden.",
        "Die Bilder sind zu teuer."
      ],
      [
        "Welche Karte passt zur Kaffeemühle?",
        "Die mit der Beschreibung der Kaffeebohnen.",
        "Die mit einem Fahrplan.",
        "Die mit einem Straßennamen."
      ],
      [
        "Was geschieht heute nicht?",
        "Sie verschicken die Umschläge nicht.",
        "Sie lesen die Beschreibungen nicht.",
        "Sie prüfen die Umschlagwörter nicht."
      ]
    ]
  },
  {
    "id": "erst-das-gesamtwort-pruefen",
    "level": "B1",
    "title": [
      "Ein Teil ist nicht das ganze Wort",
      "الجزء مش الكلمة كلها"
    ],
    "lines": [
      [
        "David",
        "In Kaffeemühle steckt Mühle. Könnten wir also auch eine Windmühle zeigen?",
        "في Kaffeemühle فيه Mühle. يبقى ممكن نعرض طاحونة هوا برضه؟"
      ],
      [
        "Aylin",
        "Nicht für diese Karte. Das ganze Wort bezeichnet eine Mühle für Kaffeebohnen.",
        "مش للكارت ده. الكلمة كاملة بتسمي مطحنة لحبوب البن."
      ],
      [
        "David",
        "Und bei Korkenzieher ist keine Person gemeint, obwohl ich an jemanden denke, der zieht.",
        "وفي Korkenzieher المقصود مش شخص، رغم إني بفكر في حد بيشد."
      ],
      [
        "Aylin",
        "Genau. Wir prüfen zuerst die Gesamtbedeutung und markieren danach hilfreiche Teile.",
        "بالظبط. نراجع الأول المعنى الكامل وبعدين نعلم على أجزاء مفيدة."
      ],
      [
        "David",
        "Bei einer unklaren Zerlegung lassen wir eine Frage stehen. Wir erfinden keine Erklärung.",
        "لو التقسيم مش واضح نسيب سؤال. مانألفش شرح."
      ],
      [
        "Aylin",
        "Das ist eine Merkhilfe, keine allgemeine Regel über alle deutschen Wörter.",
        "دي مساعدة للحفظ، مش قاعدة عامة عن كل الكلمات الألماني."
      ],
      [
        "David",
        "Und über die Wortgeschichte behaupten wir heute nichts. Dazu haben wir nicht recherchiert.",
        "ومش هنقول معلومات عن تاريخ الكلمة النهارده. مابحثناش ده."
      ]
    ],
    "q": [
      [
        "Was wird zuerst geprüft?",
        "Die Gesamtbedeutung.",
        "Eine erfundene Wortgeschichte.",
        "Nur die Länge der Karte."
      ],
      [
        "Was ist die Wortteilmarkierung hier?",
        "Eine Merkhilfe, keine allgemeine Regel.",
        "Eine vollständige etymologische Studie.",
        "Eine Bedienungsanleitung."
      ],
      [
        "Was behaupten sie heute nicht?",
        "Etwas über die Wortgeschichte.",
        "Dass sie zwei Wörter vergleichen.",
        "Dass Korkenzieher hier ein Gerät bezeichnet."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "foto-vorne-in-der-mappe": [
    "Das Bild mit dem Korkenzieher liegt schon neben der Mappe.",
    "Achte beim Schreiben auf das h nach dem ü",
    "Dann kommen beide Bilder und das Blatt erst einmal zurück in die Mappe."
  ],
  "rueckseiten-einzeln-abgleichen": [
    "beide Karten haben dasselbe Format.",
    "Hier steht etwas über Kaffeebohnen.",
    "Wir verschicken sie heute nicht."
  ],
  "erst-das-gesamtwort-pruefen": [
    "Wir prüfen zuerst die Gesamtbedeutung",
    "Das ist eine Merkhilfe, keine allgemeine Regel",
    "über die Wortgeschichte behaupten wir heute nichts."
  ]
});

everydayDialogues.push(...[
  {
    "id": "rahmen-bleiben-auf-dem-tisch",
    "level": "A1",
    "title": [
      "Noch nicht an die Wand",
      "لسه مش على الحيطة"
    ],
    "lines": [
      [
        "Elif",
        "Welches Bild nehmen wir: das Fenster oder den Schaukelstuhl?",
        "ناخد أنهي صورة: الشباك ولا الكرسي الهزاز؟"
      ],
      [
        "Nils",
        "Den Schaukelstuhl und dazu die Hängematte. Das Fensterbild legen wir zurück.",
        "الكرسي الهزاز ومعاه الأرجوحة الشبك. صورة الشباك نرجعها."
      ],
      [
        "Elif",
        "Ich nehme für den Schaukelstuhl den weißen Rahmen.",
        "هاخد للكرسي الهزاز البرواز الأبيض."
      ],
      [
        "Nils",
        "Dann kommt die Hängematte in den braunen Rahmen.",
        "يبقى الأرجوحة الشبك تتحط في البرواز البني."
      ],
      [
        "Elif",
        "Aber wir hängen noch nichts auf. Ich möchte erst Mama nach dem Platz fragen.",
        "بس لسه مش هنعلق حاجة. عايزة أسأل ماما الأول عن المكان."
      ],
      [
        "Nils",
        "Gut, beide Rahmen bleiben auf dem Tisch. Die Mappe räume ich weg.",
        "تمام، البروازين يفضلوا على الترابيزة. هشيل الملف."
      ],
      [
        "Elif",
        "Die Wortkarten lege ich daneben.",
        "هحط كروت الكلمات جنبهم."
      ]
    ],
    "q": [
      [
        "Welche Bilder wählen sie?",
        "Schaukelstuhl und Hängematte.",
        "Nur das Fenster.",
        "Fenster und Haustür."
      ],
      [
        "Welcher Rahmen gehört zum Hängemattenbild?",
        "Der braune.",
        "Der weiße.",
        "Ein gelber."
      ],
      [
        "Was machen sie noch nicht?",
        "Bilder aufhängen.",
        "Die Mappe wegräumen.",
        "Wortkarten danebenlegen."
      ]
    ]
  },
  {
    "id": "nur-eine-bilduebung",
    "level": "A2",
    "title": [
      "Das ist kein Aufbauplan",
      "ده مش رسم تركيب"
    ],
    "lines": [
      [
        "Freundin",
        "Hängt die Hängematte schon rechts im Garten?",
        "الأرجوحة الشبك متعلقة خلاص على يمين الجنينة؟"
      ],
      [
        "Cem",
        "Nein, das hier ist nur eine Bildübung für einen erfundenen Garten.",
        "لأ، ده هنا تدريب صور بس لجنينة خيالية."
      ],
      [
        "Nora",
        "Die Abstände sind nicht gemessen. Ich schreibe nicht maßstabsgetreu dazu.",
        "المسافات مش مقاسة. هضيف مش بمقياس رسم."
      ],
      [
        "Cem",
        "Ich schiebe das Hängemattenbild in die Mitte, damit das Wort daneben passt.",
        "هحرك صورة الأرجوحة الشبك للنص عشان الكلمة ينفع تتحط جنبها."
      ],
      [
        "Freundin",
        "Und der Schaukelstuhl bleibt neben dem gezeichneten Haus?",
        "والكرسي الهزاز يفضل جنب البيت المرسوم؟"
      ],
      [
        "Nora",
        "Ja. Auf die Rückseite kommt nur das Datum unserer Wortübung.",
        "أيوه. على الضهر يتحط بس تاريخ تدريب الكلمات بتاعنا."
      ],
      [
        "Cem",
        "Wir haben keinen Aufbau und keinen Gartentermin vereinbart.",
        "مفيش تركيب ولا معاد شغل جنينة اتفقنا عليهم."
      ]
    ],
    "q": [
      [
        "Sind die Abstände gemessen?",
        "Nein.",
        "Ja, alle genau.",
        "Nur die des wirklichen Gartens."
      ],
      [
        "Wohin schiebt Cem das Hängemattenbild?",
        "In die Mitte.",
        "In den Kühlschrank.",
        "An einen echten Baum."
      ],
      [
        "Was wurde nicht vereinbart?",
        "Ein Aufbau oder Gartentermin.",
        "Eine Wortübung.",
        "Das Beschriften mit Wörtern."
      ]
    ]
  },
  {
    "id": "eindruck-getrennt-notieren",
    "level": "B1",
    "title": [
      "Ruhig wirkt es auf mich",
      "أنا حاسه هادي"
    ],
    "lines": [
      [
        "Jens",
        "Die leere Hängematte sieht ruhig aus. Schreiben wir, dass dort nie jemand vorbeikommt?",
        "الأرجوحة الشبك الفاضية شكلها هادي. نكتب إن عمر ما حد بيعدي هناك؟"
      ],
      [
        "Mira",
        "Nein. Das Bild zeigt nur einen Ausschnitt in einem Moment.",
        "لأ. الصورة بتبين جزء من المشهد في لحظة بس."
      ],
      [
        "Jens",
        "Dann beschreibe ich nur die leere Hängematte und den Schaukelstuhl auf der Veranda.",
        "يبقى أوصف بس الأرجوحة الشبك الفاضية والكرسي الهزاز على الفرندا."
      ],
      [
        "Mira",
        "Deinen Eindruck von Ruhe kannst du getrennt aufschreiben.",
        "انطباعك عن الهدوء ممكن تكتبه لوحده."
      ],
      [
        "Jens",
        "Also: Die Aufnahmen wirken auf mich ruhig. Das ist mein Eindruck, keine Aussage über den ganzen Ort.",
        "يعني الصور بتديني إحساس بالهدوء. ده انطباعي، مش كلام عن المكان كله."
      ],
      [
        "Mira",
        "Genau. Auch Eigentum oder Nutzungserlaubnis sind aus diesen Bildern nicht geklärt.",
        "بالظبط. الملكية أو الإذن بالاستخدام برضه مش واضحين من الصور دي."
      ],
      [
        "Jens",
        "Und wir haben weder Stabilität noch Belastbarkeit geprüft.",
        "وكمان ماراجعناش الثبات ولا قدرة التحمل."
      ]
    ],
    "q": [
      [
        "Was darf Jens getrennt notieren?",
        "Seinen persönlichen Eindruck.",
        "Eine erfundene Nutzungserlaubnis.",
        "Eine bestätigte Traglast."
      ],
      [
        "Was bleibt aus den Bildern ungeklärt?",
        "Eigentum und Nutzungserlaubnis.",
        "Dass es zwei Fotos gibt.",
        "Dass ein Schaukelstuhl abgebildet ist."
      ],
      [
        "Welche Prüfung haben sie nicht vorgenommen?",
        "Stabilität und Belastbarkeit.",
        "Ihre Texte zu lesen.",
        "Eine Eindrucksnotiz zu schreiben."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "rahmen-bleiben-auf-dem-tisch": [
    "Den Schaukelstuhl und dazu die Hängematte.",
    "Dann kommt die Hängematte in den braunen Rahmen.",
    "wir hängen noch nichts auf."
  ],
  "nur-eine-bilduebung": [
    "Die Abstände sind nicht gemessen.",
    "Ich schiebe das Hängemattenbild in die Mitte",
    "Wir haben keinen Aufbau und keinen Gartentermin vereinbart."
  ],
  "eindruck-getrennt-notieren": [
    "Deinen Eindruck von Ruhe kannst du getrennt aufschreiben.",
    "Auch Eigentum oder Nutzungserlaubnis sind aus diesen Bildern nicht geklärt.",
    "wir haben weder Stabilität noch Belastbarkeit geprüft."
  ]
});

everydayDialogues.push(...[
  {
    "id": "ganze-woerter-mit-artikel",
    "level": "A1",
    "title": [
      "Nicht nur Ring und Rohr",
      "مش حلقة وماسورة بس"
    ],
    "lines": [
      [
        "Sami",
        "Ich nehme die Karten Ring und Rohr.",
        "هاخد كروت حلقة وماسورة."
      ],
      [
        "Eva",
        "Schau, hier stehen die vollständigen Wörter mit Artikel.",
        "بص، هنا الكلمات كاملة بأداة التعريف."
      ],
      [
        "Sami",
        "Stimmt: der Rettungsring und das Fernrohr.",
        "صح: طوق نجاة وتليسكوب بالألماني وبأدوات التعريف."
      ],
      [
        "Eva",
        "Schreiben wir beide in die Hefte.",
        "نكتب الاتنين في الكراسات."
      ],
      [
        "Sami",
        "Bei Fernrohr fehlt mir noch das. Das ergänze ich.",
        "ناقص عندي أداة التعريف بتاعة تليسكوب. هضيفها."
      ],
      [
        "Eva",
        "Die Fotos kommen danach in den blauen Umschlag.",
        "بعد كده الصور تتحط في الظرف الأزرق."
      ],
      [
        "Sami",
        "Und die vier Karten in den weißen. Die Hefte lassen wir hier.",
        "والأربع كروت في الأبيض. نسيب الكراسات هنا."
      ]
    ],
    "q": [
      [
        "Welche Wörter wählen sie?",
        "Rettungsring und Fernrohr mit Artikel.",
        "Nur Ring und Rohr.",
        "Nur zwei Personennamen."
      ],
      [
        "Was fehlt Sami zuerst?",
        "Der Artikel das.",
        "Das ganze Heft.",
        "Ein roter Umschlag."
      ],
      [
        "Wo bleiben die Hefte?",
        "Hier auf dem Tisch.",
        "Im blauen Umschlag.",
        "Im weißen Umschlag."
      ]
    ]
  },
  {
    "id": "acht-blaetter-zurueck",
    "level": "A2",
    "title": [
      "Erst noch einmal zählen",
      "نعد تاني الأول"
    ],
    "lines": [
      [
        "Lea",
        "Ich habe sieben Arbeitsblätter. Wir erwarten acht.",
        "معايا سبع ورقات تدريب. المفروض تمانية."
      ],
      [
        "Deniz",
        "Drucken wir ein neues Blatt?",
        "نطبع ورقة جديدة؟"
      ],
      [
        "Lea",
        "Noch nicht. Ich sehe zuerst auf den anderen Tischen nach.",
        "لسه لأ. أبص الأول على الترابيزات التانية."
      ],
      [
        "Paul",
        "Meins liegt hier unter der durchsichtigen Mappe. Mein Name fehlt noch.",
        "ورقتي هنا تحت الملف الشفاف. لسه اسمي ناقص."
      ],
      [
        "Lea",
        "Trag ihn bitte oben rechts ein. Dann zähle ich noch einmal.",
        "اكتبه فوق على اليمين لو سمحت. بعد كده أعد تاني."
      ],
      [
        "Deniz",
        "Jetzt sind alle acht zurück. Das notiere ich.",
        "دلوقتي كل التمان ورقات رجعوا. هكتب ده."
      ],
      [
        "Lea",
        "Die Antworten besprechen wir später. Zurückgegeben heißt nicht automatisch richtig.",
        "نتناقش في الإجابات بعدين. رجعت مش معناها تلقائيًا صح."
      ]
    ],
    "q": [
      [
        "Wie viele Blätter fehlen am Anfang auf Leas Stapel?",
        "Eines.",
        "Drei.",
        "Acht."
      ],
      [
        "Was trägt Paul ein?",
        "Seinen Namen.",
        "Einen Gerätepreis.",
        "Einen Druckauftrag."
      ],
      [
        "Was wird erst später besprochen?",
        "Die Antworten.",
        "Die Zahl acht.",
        "Die Farbe der durchsichtigen Mappe."
      ]
    ]
  },
  {
    "id": "haekchen-betrifft-nur-abschrift",
    "level": "B1",
    "title": [
      "Was bestätigt das Häkchen?",
      "علامة الصح بتأكد إيه؟"
    ],
    "lines": [
      [
        "Jule",
        "Bedeutet das Häkchen, dass du den Rettungsring geprüft hast?",
        "علامة الصح معناها إنك فحصت طوق النجاة؟"
      ],
      [
        "Karim",
        "Nein. Ich habe nur die vollständige Abschrift des Worts mit Artikel kontrolliert.",
        "لأ. راجعت بس نقل الكلمة كاملة بأداة التعريف."
      ],
      [
        "Jule",
        "Dann fehlt der Tabelle eine klare Überschrift.",
        "يبقى الجدول ناقصه عنوان واضح."
      ],
      [
        "Karim",
        "Ich schreibe Wortabschrift kontrolliert direkt darüber. Die Geräte habe ich nicht untersucht.",
        "هكتب نقل الكلمات اتراجع فوقها على طول. أنا مافحصتش الأجهزة."
      ],
      [
        "Jule",
        "Und die Notiz zur Pluralform von Fernrohr?",
        "وملحوظة جمع كلمة تليسكوب؟"
      ],
      [
        "Karim",
        "Die kommt in eine eigene Spalte für offene Sprachfragen. Das ist eine andere Aufgabe.",
        "تتحط في عمود لوحده لأسئلة اللغة المفتوحة. دي مهمة تانية."
      ],
      [
        "Jule",
        "Gut. So verwechselt niemand die Wortliste mit einem technischen Prüfbericht.",
        "تمام. كده محدش يخلط قايمة الكلمات بتقرير فحص فني."
      ]
    ],
    "q": [
      [
        "Was betrifft das Häkchen?",
        "Die Abschrift mit Artikel.",
        "Die Tragfähigkeit des Rings.",
        "Den Preis des Fernrohrs."
      ],
      [
        "Wohin kommt die offene Pluralfrage?",
        "In eine eigene Spalte.",
        "In die Fotodatei.",
        "Auf eine Rechnung."
      ],
      [
        "Was ist die Liste nicht?",
        "Ein technischer Prüfbericht.",
        "Eine Sammlung von Wörtern.",
        "Eine Tabelle mit Fotos."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "ganze-woerter-mit-artikel": [
    "der Rettungsring und das Fernrohr.",
    "Bei Fernrohr fehlt mir noch das.",
    "Die Hefte lassen wir hier."
  ],
  "acht-blaetter-zurueck": [
    "Ich habe sieben Arbeitsblätter. Wir erwarten acht.",
    "Mein Name fehlt noch.",
    "Die Antworten besprechen wir später."
  ],
  "haekchen-betrifft-nur-abschrift": [
    "nur die vollständige Abschrift des Worts mit Artikel",
    "in eine eigene Spalte für offene Sprachfragen",
    "mit einem technischen Prüfbericht."
  ]
});

everydayDialogues.push(...[
  {
    "id": "erst-frau-berg-fragen",
    "level": "A1",
    "title": [
      "Wir kennen ihren Kasten nicht",
      "مش عارفين صندوقها"
    ],
    "lines": [
      [
        "Tim",
        "Der Umschlag ist für Frau Berg. Ich habe ihn hier auf der Bank gefunden.",
        "الظرف للست بيرج. أنا لقيته هنا على الدكة."
      ],
      [
        "Rosa",
        "Wir lassen ihn geschlossen. Welcher Briefkasten ist ihrer?",
        "نسيبه مقفول. أنهي صندوق بريد بتاعها؟"
      ],
      [
        "Tim",
        "Das weiß ich nicht. Die Namen sind nicht lesbar.",
        "مش عارف. الأسامي مش مقروءة."
      ],
      [
        "Rosa",
        "Dann frage ich sie später direkt. Der Umschlag bleibt erst hier.",
        "يبقى أسألها بنفسها بعدين. الظرف يفضل هنا مؤقتًا."
      ],
      [
        "Tim",
        "In meinem Heft habe ich auch ein Bild von einem Briefkasten. Daneben ist ein Türklopfer.",
        "في كراستي كمان صورة صندوق بريد. جنبها دقّاقة باب."
      ],
      [
        "Rosa",
        "Ich lese dir beide Wörter mit Artikel vor.",
        "هقرالك الكلمتين بأداة التعريف."
      ],
      [
        "Tim",
        "Danke. Ich schreibe sie unter die Bilder und mache das Heft zu.",
        "شكرًا. هكتبهم تحت الصور وأقفل الكراسة."
      ]
    ],
    "q": [
      [
        "Warum bleibt der Umschlag zunächst hier?",
        "Der richtige Briefkasten ist ihnen nicht bekannt.",
        "Tim möchte ihn lesen.",
        "Rosa hat ihn schon verschickt."
      ],
      [
        "Welche Gegenstände zeigen die Heftbilder?",
        "Briefkasten und Türklopfer.",
        "Kühlschrank und Herd.",
        "Zwei offene Umschläge."
      ],
      [
        "Was macht Tim nach dem Schreiben?",
        "Er macht das Heft zu.",
        "Er öffnet den Umschlag.",
        "Er liest die privaten Briefe."
      ]
    ]
  },
  {
    "id": "erst-essen-dann-woerter",
    "level": "A2",
    "title": [
      "Die Karten auf die Kommode",
      "الكروت على الكومود"
    ],
    "lines": [
      [
        "Nele",
        "Das Essen steht schon auf dem Tisch. Üben wir die Wörter lieber danach?",
        "الأكل على الترابيزة خلاص. نتدرب على الكلمات بعده أحسن؟"
      ],
      [
        "Amir",
        "Gern. Ich hole die Karten vom Schreibtisch und lege sie auf die Kommode.",
        "ماشي. أجيب الكروت من المكتب وأحطهم على الكومود."
      ],
      [
        "Nele",
        "Ich ändere den Zettel: nach dem Abendessen. Eine Uhrzeit brauchen wir hier nicht.",
        "هغير الورقة: بعد العشا. مش محتاجين ساعة معينة هنا."
      ],
      [
        "Amir",
        "Wir üben nur zu Hause. Einen Besuch haben wir nicht verabredet.",
        "إحنا بنتدرب في البيت بس. مش متفقين على زيارة."
      ],
      [
        "Nele",
        "Ich lese zuerst vor, und du nennst die Bedeutung. Dann wechseln wir.",
        "أقرا الأول بصوت مسموع وإنت تقول المعنى. بعد كده نبدل."
      ],
      [
        "Amir",
        "Bitte wiederhole Türklopfer noch einmal.",
        "ممكن تعيدي كلمة دقّاقة باب بالألماني مرة كمان؟"
      ],
      [
        "Nele",
        "Mache ich. Danach kommen beide Karten zurück in die Mappe.",
        "حاضر. بعد كده الكارتين يرجعوا في الملف."
      ]
    ],
    "q": [
      [
        "Wann wollen sie üben?",
        "Nach dem Abendessen.",
        "Bei der nächsten Lieferung.",
        "Vor dem Frühstück."
      ],
      [
        "Woher holt Amir die Karten?",
        "Vom Schreibtisch.",
        "Aus dem Briefkasten.",
        "Aus einer Einkaufstasche."
      ],
      [
        "Was machen sie nach dem Vorlesen und Nennen der Bedeutung?",
        "Sie wechseln die Rollen.",
        "Sie verschicken die Karten.",
        "Sie rufen einen Lieferdienst."
      ]
    ]
  },
  {
    "id": "nebeneinander-ist-kein-beleg",
    "level": "B1",
    "title": [
      "Nicht automatisch dasselbe Haus",
      "مش تلقائيًا نفس البيت"
    ],
    "lines": [
      [
        "Jonas",
        "Ich habe geschrieben, dass Türklopfer und Briefkasten zum selben Haus gehören.",
        "كتبت إن دقّاقة الباب وصندوق البريد تابعين لنفس البيت."
      ],
      [
        "Selma",
        "Woher weißt du das? Auf den Fotos sehe ich keine gemeinsame Adresse.",
        "عرفت منين؟ مش شايفة عنوان مشترك في الصور."
      ],
      [
        "Jonas",
        "Eigentlich liegen die Bilder nur nebeneinander in meiner Mappe.",
        "في الحقيقة الصور بس جنب بعض في ملفي."
      ],
      [
        "Selma",
        "Dann ist die Verbindung nicht belegt. Beschreibe sie als getrennte Aufnahmen.",
        "يبقى العلاقة مش مثبتة. اوصفهم كصورتين منفصلتين."
      ],
      [
        "Jonas",
        "Ich streiche den Satz über dasselbe Haus. Den Zusammenhang kenne ich nicht.",
        "هشطب جملة نفس البيت. مش عارف العلاقة."
      ],
      [
        "Selma",
        "Jetzt ist es genauer. Diesen langen Satz würde ich noch in zwei kurze teilen.",
        "دلوقتي أدق. الجملة الطويلة دي أقسمها كمان لاتنين قصيرين."
      ],
      [
        "Jonas",
        "Das ändere ich sprachlich. Über den heutigen Standort wissen wir dadurch nichts Neues.",
        "هغير ده لغويًا. كده مش بنعرف حاجة جديدة عن مكانهم النهارده."
      ]
    ],
    "q": [
      [
        "Was war Jonas einziger Anlass für die Verbindung?",
        "Die Bilder lagen nebeneinander in seiner Mappe.",
        "Eine bestätigte Adresse.",
        "Ein Bewohner hatte es erklärt."
      ],
      [
        "Was streicht er?",
        "Den Satz über dasselbe Haus.",
        "Alle deutschen Wörter.",
        "Selmas ganzen Text."
      ],
      [
        "Was bringt die Teilung des langen Satzes nicht?",
        "Neue Informationen über den heutigen Standort.",
        "Eine sprachliche Änderung.",
        "Zwei kürzere Sätze."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "erst-frau-berg-fragen": [
    "Das weiß ich nicht. Die Namen sind nicht lesbar.",
    "ein Bild von einem Briefkasten. Daneben ist ein Türklopfer.",
    "mache das Heft zu."
  ],
  "erst-essen-dann-woerter": [
    "nach dem Abendessen.",
    "vom Schreibtisch",
    "Dann wechseln wir."
  ],
  "nebeneinander-ist-kein-beleg": [
    "nur nebeneinander in meiner Mappe.",
    "den Satz über dasselbe Haus.",
    "Über den heutigen Standort wissen wir dadurch nichts Neues."
  ]
});

everydayDialogues.push(...[
  {
    "id": "links-die-glocke",
    "level": "A1",
    "title": [
      "Noch nicht einkleben",
      "لسه مانلزقش"
    ],
    "lines": [
      [
        "Lina",
        "Das Glockenbild kommt links hin. Das andere legen wir rechts daneben.",
        "صورة الجرس تتحط على الشمال. التانية نحطها على يمينها."
      ],
      [
        "Oskar",
        "Ich lese die Karten: die Glocke, der Kerzenständer.",
        "هقرا الكروت: الجرس وحامل الشمع بالألماني وبأدوات التعريف."
      ],
      [
        "Lina",
        "Kleben wir sie schon ein?",
        "نلزقهم خلاص؟"
      ],
      [
        "Oskar",
        "Noch nicht. Vergleichen wir erst die Schreibweise mit der Wortliste.",
        "لسه لأ. نقارن الأول الكتابة بقايمة الكلمات."
      ],
      [
        "Lina",
        "Beide Wörter stehen hier.",
        "الكلمتين مكتوبين هنا."
      ],
      [
        "Oskar",
        "Ich ergänze Glocken auf meiner Notiz. Das ist die Pluralform.",
        "هضيف جمع جرس بالألماني على ملحوظتي. دي صيغة الجمع."
      ],
      [
        "Lina",
        "Gut. Nach der Pause lesen wir die Karten noch einmal.",
        "تمام. بعد الاستراحة نقرا الكروت تاني."
      ]
    ],
    "q": [
      [
        "Welches Bild liegt links?",
        "Das Glockenbild.",
        "Das Bild mit den Kerzenständern.",
        "Ein Stiftbild."
      ],
      [
        "Warum warten sie mit dem Einkleben?",
        "Sie vergleichen zuerst die Schreibweise.",
        "Der echte Kerzenständer ist heiß.",
        "Sie erwarten einen Lieferdienst."
      ],
      [
        "Wann wollen sie die Karten erneut lesen?",
        "Nach der Pause.",
        "Vor dem Aufstehen am Morgen.",
        "Erst im nächsten Monat."
      ]
    ]
  },
  {
    "id": "danach-ist-keine-uhrzeit",
    "level": "A2",
    "title": [
      "Drei Schritte, keine Termine",
      "تلات خطوات مش مواعيد"
    ],
    "lines": [
      [
        "Farah",
        "Du hast danach neben Schritt zwei geschrieben. Meinst du eine Uhrzeit?",
        "إنت كاتب بعد كده جنب الخطوة التانية. تقصد ساعة معينة؟"
      ],
      [
        "Lukas",
        "Nein, nur die Reihenfolge: erst ordnen, dann vorlesen, zuletzt vergleichen.",
        "لأ، الترتيب بس: الأول نرتب، بعد كده نقرا، وفي الآخر نقارن."
      ],
      [
        "Farah",
        "Dann schreiben wir darunter, dass keine Uhrzeiten festgelegt sind.",
        "يبقى نكتب تحت إن مفيش ساعات محددة."
      ],
      [
        "Lukas",
        "Gut. Ich zeige die deutsche Seite der Karten erst nach dem Ordnen.",
        "تمام. أوري الناحية الألماني بتاعة الكروت بعد الترتيب بس."
      ],
      [
        "Farah",
        "Bei mir steht Glocken als Plural.",
        "عندي مكتوب جمع جرس بالألماني."
      ],
      [
        "Lukas",
        "Und ich habe die unveränderte Form Kerzenständer markiert.",
        "وأنا معلم على إن حامل الشمع بالألماني نفس الشكل في الجمع."
      ],
      [
        "Farah",
        "Zum Schluss legen wir den Zettel oben in die Schachtel.",
        "في الآخر نحط الورقة فوق في العلبة."
      ]
    ],
    "q": [
      [
        "Welche Aufgabe kommt zuerst?",
        "Bilder ordnen.",
        "Notizen vergleichen.",
        "Einen Termin buchen."
      ],
      [
        "Wann zeigt Lukas die deutsche Seite?",
        "Nach dem Ordnen.",
        "Schon vor jedem Bild.",
        "Erst in einem Monat."
      ],
      [
        "Was ist nicht festgelegt?",
        "Uhrzeiten.",
        "Die Aufgabenreihenfolge.",
        "Der Platz für den Zettel am Ende."
      ]
    ]
  },
  {
    "id": "singular-als-worteintrag",
    "level": "B1",
    "title": [
      "Benennen ist nicht zählen",
      "التسمية مش عد"
    ],
    "lines": [
      [
        "Malte",
        "Auf dem Foto sehe ich mehrere Kerzenständer. Warum steht darunter der Kerzenständer?",
        "شايف كذا حامل شمع في الصورة. ليه مكتوب تحتها المفرد بالألماني؟"
      ],
      [
        "Anja",
        "Ich übe die Wortform im Singular. Das Etikett benennt den Typ und zählt nicht.",
        "بتدرب على صيغة الكلمة بالمفرد. الكارت بيسمي النوع مش بيعد."
      ],
      [
        "Malte",
        "Schreib diesen Hinweis bitte direkt über die Bilder.",
        "اكتبي التوضيح ده فوق الصور على طول."
      ],
      [
        "Anja",
        "Mache ich. Ein eigenes Zählblatt lege ich für später an. Es bleibt jetzt leer.",
        "حاضر. هجهز ورقة عد لوحدها لبعدين. تفضل فاضية دلوقتي."
      ],
      [
        "Malte",
        "Die Pluralformen sind die Glocken und die Kerzenständer.",
        "صيغ الجمع هي الأجراس وحوامل الشمع بالألماني."
      ],
      [
        "Anja",
        "Genau. Bei Kerzenständer bleibt das Nomen gleich, aber der Artikel im Plural ist die.",
        "بالظبط. في جمع حامل الشمع بالألماني الاسم نفسه ثابت بس أداة التعريف بتتغير."
      ],
      [
        "Malte",
        "Dann ergänzt die Pluralnotiz die Singularangabe, ohne eine Stückzahl zu behaupten.",
        "يبقى ملحوظة الجمع بتكمل المفرد من غير ما تقول عدد القطع."
      ]
    ],
    "q": [
      [
        "Was macht das Etikett laut Anja?",
        "Es benennt den Typ.",
        "Es bestätigt einen Preis.",
        "Es zählt die ganze Sammlung."
      ],
      [
        "Was bleibt zunächst leer?",
        "Das Zählblatt.",
        "Beide Bildkarten.",
        "Die gesamte Wortliste."
      ],
      [
        "Was ändert sich bei der Kerzenständer zur Pluralform?",
        "Der bestimmte Artikel wird die.",
        "Das Nomen bekommt immer -n.",
        "Die Bilddatei wird ersetzt."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "links-die-glocke": [
    "Das Glockenbild kommt links hin.",
    "Vergleichen wir erst die Schreibweise",
    "Nach der Pause lesen wir die Karten noch einmal."
  ],
  "danach-ist-keine-uhrzeit": [
    "erst ordnen",
    "erst nach dem Ordnen.",
    "keine Uhrzeiten festgelegt sind."
  ],
  "singular-als-worteintrag": [
    "Das Etikett benennt den Typ",
    "Es bleibt jetzt leer.",
    "der Artikel im Plural ist die."
  ]
});

everydayDialogues.push(...[
  {
    "id": "zum-saft-oder-zum-essen",
    "level": "A1",
    "title": [
      "Für mein Glas",
      "للكوباية بتاعتي"
    ],
    "lines": [
      [
        "Mona",
        "Ich brauche auch so etwas wie die Stäbchen neben deiner Schale.",
        "محتاجة أنا كمان حاجة زي العيدان اللي جنب طبقك."
      ],
      [
        "Paul",
        "Meinst du Essstäbchen zum Essen oder einen Trinkhalm für deinen Saft?",
        "تقصدِي عيدان أكل ولا شفاطة للعصير بتاعك؟"
      ],
      [
        "Mona",
        "Für meinen Saft. Mir fehlt gerade das Wort.",
        "للعصير بتاعي. الكلمة مش جاية في بالي دلوقتي."
      ],
      [
        "Paul",
        "Das heißt der Trinkhalm. Ein einzelnes Essstäbchen heißt das Essstäbchen.",
        "دي اسمها شفاطة بالألماني وبأداة التعريف المذكر. وعود الأكل الواحد اسمه بالألماني بأداة التعريف المحايد."
      ],
      [
        "Mona",
        "Danke. Ich schreibe beide Wörter auf meine Karte.",
        "شكرًا. هكتب الكلمتين على الكارت بتاعي."
      ],
      [
        "Paul",
        "Frag genauer: Haben Sie einen Trinkhalm für meinen Saft?",
        "اسألي بشكل أوضح إذا عندهم شفاطة للعصير بتاعك."
      ],
      [
        "Mona",
        "Das übe ich erst mit dir. Ob das Café welche hat, weiß ich noch nicht.",
        "هتدرب على ده الأول معاك. لسه معرفش إذا الكافيه عنده."
      ]
    ],
    "q": [
      [
        "Wofür sucht Mona etwas?",
        "Für den Saft.",
        "Für eine Reparatur.",
        "Für die Rechnung."
      ],
      [
        "Wohin schreibt sie die Wörter?",
        "Auf ihre Karte.",
        "Auf Pauls Schale.",
        "In den Kalender des Cafés."
      ],
      [
        "Mit wem übt sie zuerst?",
        "Mit Paul.",
        "Mit einer bestätigten Bedienung.",
        "Mit dem Lieferdienst."
      ]
    ]
  },
  {
    "id": "kein-weg-wegen-des-etuis",
    "level": "A2",
    "title": [
      "Lass es bitte dort",
      "سيبه هناك لو سمحت"
    ],
    "lines": [
      [
        "Noel",
        "Dein Etui liegt auf der Kommode im Flur. Ich habe es nicht geöffnet.",
        "الجراب بتاعك على الكومود في الطرقة. مافتحتوش."
      ],
      [
        "Daria",
        "Danke fürs Nachsehen. Lass es bitte zu Hause.",
        "شكرًا إنك بصيت. سيبه في البيت لو سمحت."
      ],
      [
        "Noel",
        "Soll ich es später mitbringen?",
        "أجيبه معايا بعدين؟"
      ],
      [
        "Daria",
        "Nein, du brauchst es nicht zu bringen. Ich frage hier nur nach einer Gabel.",
        "لأ، مش محتاج تجيبه. هطلب هنا شوكة بس."
      ],
      [
        "Noel",
        "Dann bleibt es weiterhin dort.",
        "يبقى يفضل هناك."
      ],
      [
        "Daria",
        "Ich ergänze meine Packliste: vor dem Losgehen den Inhalt der Tasche prüfen.",
        "هكمل قايمة تجهيز شنطتي: أراجع اللي في الشنطة قبل ما أمشي."
      ],
      [
        "Noel",
        "Das ist eine Erinnerung für später, keine Bestätigung, dass du das Etui jetzt hast.",
        "ده تذكير لبعدين مش تأكيد إن الجراب معاكي دلوقتي."
      ]
    ],
    "q": [
      [
        "Was hat Noel nicht gemacht?",
        "Das Etui geöffnet.",
        "Zu Hause nachgesehen.",
        "Den Standort genannt."
      ],
      [
        "Was antwortet Daria auf das Angebot, es zu bringen?",
        "Sie lehnt es ab.",
        "Sie bestellt sofort eine Fahrt.",
        "Sie nennt eine Übergabezeit."
      ],
      [
        "Was ist der neue Listeneintrag?",
        "Eine Erinnerung für später.",
        "Eine erledigte Übergabe.",
        "Eine bezahlte Bestellung."
      ]
    ]
  },
  {
    "id": "hoeflich-ist-kein-materialtest",
    "level": "B1",
    "title": [
      "Sprache und Sache trennen",
      "نفصل اللغة عن المعلومة"
    ],
    "lines": [
      [
        "Erik",
        "In meinem Beispielsatz bitte ich um Essstäbchen und frage gleichzeitig nach dem Material.",
        "في جملة المثال بتاعتي بطلب عيدان أكل وبسأل في نفس الوقت عن الخامة."
      ],
      [
        "Iman",
        "Trennen wir die Anliegen. Erst die klare Bitte, dann bei Bedarf die zusätzliche Frage.",
        "نفصل النقطتين. الأول الطلب الواضح وبعده السؤال الزيادة لو محتاجينه."
      ],
      [
        "Erik",
        "Eine höfliche Bitte sagt aber noch nichts über das tatsächliche Material.",
        "بس الطلب المؤدب لسه مابيقولش حاجة عن الخامة الفعلية."
      ],
      [
        "Iman",
        "Genau. Wir bewerten hier Verständlichkeit und Höflichkeit, nicht die Gegenstände.",
        "بالظبط. هنا بنقيم سهولة الفهم والأدب مش الحاجات نفسها."
      ],
      [
        "Erik",
        "Also keine Spalte für Hygiene oder Umweltwirkung ohne Prüfung.",
        "يبقى مفيش عمود للنضافة أو التأثير البيئي من غير فحص."
      ],
      [
        "Iman",
        "Ich speichere die überarbeiteten Sätze als Übungsversionen.",
        "هحفظ الجمل بعد التعديل كنسخ تدريب."
      ],
      [
        "Erik",
        "Damit haben wir nichts bestellt und keine Verfügbarkeit bestätigt.",
        "كده ماطلبناش حاجة ومأكدناش إن حاجة متاحة."
      ]
    ],
    "q": [
      [
        "Was soll zuerst kommen?",
        "Die klare Bitte.",
        "Ein erfundener Testbericht.",
        "Eine bestätigte Lieferung."
      ],
      [
        "Was bewerten sie?",
        "Verständlichkeit und Höflichkeit.",
        "Das tatsächliche Material.",
        "Die Hygiene des Cafés."
      ],
      [
        "Was wird durch das Speichern nicht bestätigt?",
        "Die Verfügbarkeit.",
        "Dass Übungssätze gespeichert werden.",
        "Dass Iman Sätze überarbeitet."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "zum-saft-oder-zum-essen": [
    "Für meinen Saft.",
    "auf meine Karte.",
    "Das übe ich erst mit dir."
  ],
  "kein-weg-wegen-des-etuis": [
    "Ich habe es nicht geöffnet.",
    "Nein, du brauchst es nicht zu bringen.",
    "eine Erinnerung für später"
  ],
  "hoeflich-ist-kein-materialtest": [
    "Erst die klare Bitte",
    "Wir bewerten hier Verständlichkeit und Höflichkeit",
    "keine Verfügbarkeit bestätigt."
  ]
});

everydayDialogues.push(...[
  {
    "id": "das-blaue-zeichen-im-buch",
    "level": "A1",
    "title": [
      "Hier lese ich weiter",
      "هكمل قراية هنا"
    ],
    "lines": [
      [
        "Jule",
        "Unter dem Detailbild steht Scharnier. Was ist damit gemeint?",
        "تحت صورة التفصيلة مكتوب مفصلة بالألماني. المقصود إيه؟"
      ],
      [
        "Karim",
        "Dieses Teil zwischen der Tür und dem Rahmen im Bild. Das Wort heißt das Scharnier.",
        "الجزء ده بين الباب والإطار في الصورة. الكلمة مفصلة بالألماني بأداة التعريف المحايد."
      ],
      [
        "Jule",
        "Ich schreibe es ins Wortheft. Dann mache ich eine Pause.",
        "هكتبها في كراسة الكلمات. بعد كده آخد استراحة."
      ],
      [
        "Karim",
        "Leg dein blaues Lesezeichen zwischen die Seiten.",
        "حطي علامة الكتاب الزرقا بين الصفحات."
      ],
      [
        "Jule",
        "Gut, dann finde ich den Abschnitt wieder.",
        "تمام، كده ألاقي الجزء تاني."
      ],
      [
        "Karim",
        "Ich notiere Scharniere als Plural auf diesem Zettel.",
        "هكتب جمع مفصلة بالألماني على الورقة دي."
      ],
      [
        "Jule",
        "Nach der Pause lese ich nur hier weiter, nicht das ganze Buch.",
        "بعد الاستراحة هكمل هنا بس مش الكتاب كله."
      ]
    ],
    "q": [
      [
        "Worauf zeigt Karim?",
        "Auf ein Teil im Türbild.",
        "Auf ein echtes beschädigtes Fenster.",
        "Auf einen Computerlink."
      ],
      [
        "Was legt Jule zwischen die Seiten?",
        "Ein blaues Lesezeichen.",
        "Karims ganzes Heft.",
        "Einen Türgriff."
      ],
      [
        "Wann liest sie weiter?",
        "Nach der Pause.",
        "Während einer Reparatur.",
        "Erst nach einer Buchbestellung."
      ]
    ]
  },
  {
    "id": "erst-den-abschnitt-beenden",
    "level": "A2",
    "title": [
      "Noch einen Gedanken lesen",
      "أكمل الفكرة بس"
    ],
    "lines": [
      [
        "Nora",
        "Warte bitte kurz. Ich möchte diesen Gedanken noch zu Ende lesen.",
        "استنى شوية لو سمحت. عايزة أكمل الفكرة دي للآخر."
      ],
      [
        "Levin",
        "Kein Problem. Ich schaue inzwischen meine Notizen durch.",
        "مفيش مشكلة. هبص في ملحوظاتي في الوقت ده."
      ],
      [
        "Nora",
        "Jetzt lege ich das Lesezeichen hierhin und schließe das Buch.",
        "دلوقتي أحط علامة الكتاب هنا وأقفل الكتاب."
      ],
      [
        "Levin",
        "Bei Lesezeichen fehlt dir noch das. Bei mir fehlt der Plural von Scharnier.",
        "عند كلمة علامة كتاب بالألماني ناقصك أداة التعريف المحايد. وعندي ناقص جمع مفصلة."
      ],
      [
        "Nora",
        "Der Plural ist Scharniere. Dann tauschen wir die Rollen.",
        "الجمع مفصلات بالألماني. بعد كده نبدل الأدوار."
      ],
      [
        "Levin",
        "Unsere Aufgaben bleiben also in derselben Reihenfolge.",
        "يبقى المهمات بتاعتنا تفضل بنفس الترتيب."
      ],
      [
        "Nora",
        "Genau. Wir haben nur etwas später angefangen, ohne feste Uhrzeit.",
        "بالظبط. بدأنا متأخر شوية بس من غير ساعة ثابتة."
      ]
    ],
    "q": [
      [
        "Was macht Levin während des Wartens?",
        "Er schaut seine Notizen durch.",
        "Er fährt wieder nach Hause.",
        "Er untersucht ein Scharnier."
      ],
      [
        "Welche Form fehlt in Levins Liste?",
        "Die Pluralform von Scharnier.",
        "Der Artikel bei Lesezeichen.",
        "Noras Adresse."
      ],
      [
        "Was ist unverändert?",
        "Die Reihenfolge der Aufgaben.",
        "Der tatsächliche Beginn.",
        "Die leeren Einträge in beiden Listen."
      ]
    ]
  },
  {
    "id": "band-im-buch-oder-browser",
    "level": "B1",
    "title": [
      "Der Zusammenhang entscheidet",
      "السياق هو اللي بيوضح"
    ],
    "lines": [
      [
        "Seda",
        "Beim Wort Lesezeichen denke ich hier an ein Band im Buch.",
        "عند كلمة علامة كتاب بالألماني بفكر هنا في شريط جوه كتاب."
      ],
      [
        "Tom",
        "Ich habe zuerst an einen gespeicherten Verweis im Browser gedacht.",
        "أنا فكرت الأول في رابط محفوظ في المتصفح."
      ],
      [
        "Seda",
        "Wir ergänzen für beide Bedeutungen einen Beispielsatz. Keine davon ist allein deshalb falsch.",
        "نضيف جملة مثال للمعنيين. ولا واحد فيهم غلط لمجرد الاختلاف ده."
      ],
      [
        "Tom",
        "Den digitalen Satz sprechen wir nur durch. Wir ändern keine Browserdaten.",
        "الجملة الرقمية بنتكلم عنها بس. مش بنغير بيانات المتصفح."
      ],
      [
        "Seda",
        "Und Scharnier bekommt ein eigenes Blatt, außerhalb dieser Gegenüberstellung.",
        "وكلمة مفصلة يبقالها ورقة لوحدها بره المقارنة دي."
      ],
      [
        "Tom",
        "Auch wenn später alles in derselben Mappe liegt, bleiben die Überschriften getrennt.",
        "حتى لو كله اتحط بعدين في نفس الملف، العناوين تفضل منفصلة."
      ],
      [
        "Seda",
        "Für weitere Wörter suchen wir beim nächsten Mal. Noch ist keines ausgewählt.",
        "الكلمات الزيادة ندور عليها المرة الجاية. لسه ماختارناش حاجة."
      ]
    ],
    "q": [
      [
        "Was wollen sie zu beiden Bedeutungen hinzufügen?",
        "Einen passenden Beispielsatz.",
        "Eine bestätigte Browserbuchung.",
        "Eine Reparaturanleitung."
      ],
      [
        "Was verändern sie nicht?",
        "Browserdaten.",
        "Ihre handschriftlichen Beispiele.",
        "Die Ordnung ihrer Blätter."
      ],
      [
        "Was ist für das nächste Mal noch offen?",
        "Welche weiteren Wörter sie wählen.",
        "Ob zwei Lesezeichenbedeutungen besprochen wurden.",
        "Wo die Blätter am Ende liegen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "das-blaue-zeichen-im-buch": [
    "zwischen der Tür und dem Rahmen im Bild.",
    "dein blaues Lesezeichen",
    "Nach der Pause"
  ],
  "erst-den-abschnitt-beenden": [
    "meine Notizen durch.",
    "Bei mir fehlt der Plural von Scharnier.",
    "in derselben Reihenfolge."
  ],
  "band-im-buch-oder-browser": [
    "für beide Bedeutungen einen Beispielsatz.",
    "Wir ändern keine Browserdaten.",
    "Noch ist keines ausgewählt."
  ]
});

everydayDialogues.push(...[
  {
    "id": "das-andere-schwarze-geraet",
    "level": "A1",
    "title": [
      "Das andere schwarze Gerät",
      "الأداة السودا التانية"
    ],
    "lines": [
      [
        "Mira",
        "Gib mir bitte den Teigschaber. Ich brauche ihn für den Rest in der Schüssel.",
        "اديني كاشطة العجين لو سمحت. محتاجاها للباقي اللي في الطبق."
      ],
      [
        "Ben",
        "Meinst du diesen schwarzen Pinsel?",
        "قصدك الفرشة السودا دي؟"
      ],
      [
        "Mira",
        "Nein, das andere Gerät mit dem flachen Kopf.",
        "لأ، الأداة التانية اللي راسها مسطحة."
      ],
      [
        "Ben",
        "Hier bitte. Den Pinsel lege ich zurück.",
        "اتفضلي. هرجع الفرشة مكانها."
      ],
      [
        "Mira",
        "Danke. Danach lege ich den Teigschaber auf das Tablett.",
        "شكرًا. بعد كده هحط الكاشطة على الصينية."
      ],
      [
        "Ben",
        "Ich lege inzwischen ein Platzdeckchen auf den Tisch und stelle einen Teller darauf.",
        "في الوقت ده هحط مفرش فردي على الترابيزة وأحط طبق عليه."
      ],
      [
        "Mira",
        "Gut. Mit dem zweiten Teller kannst du noch auf mich warten.",
        "تمام. ممكن تستناني بالطبق التاني."
      ]
    ],
    "q": [
      [
        "Welches Merkmal nennt Mira?",
        "Den flachen Kopf.",
        "Einen roten Stiel.",
        "Eine goldene Schrift."
      ],
      [
        "Was legt Ben zurück?",
        "Den Backpinsel.",
        "Den benutzten Teigschaber.",
        "Den gefüllten Teller."
      ],
      [
        "Worauf stellt Ben einen Teller?",
        "Auf ein Platzdeckchen.",
        "Auf die Form.",
        "Auf Miras Tablett."
      ]
    ]
  },
  {
    "id": "zaehlen-ist-nicht-einpacken",
    "level": "A2",
    "title": [
      "Zählen ist nicht Einpacken",
      "العد مش تحضير الشنطة"
    ],
    "lines": [
      [
        "Nils",
        "Soll ich dir die ganze Tasche packen?",
        "أحضّر لك الشنطة كلها؟"
      ],
      [
        "Lea",
        "Danke, aber ich ordne die Sachen selbst ein. Zähl bitte nur die Platzdeckchen im Schrank.",
        "شكرًا بس هرتب الحاجات بنفسي. عد المفارش الفردية في الدولاب بس لو سمحت."
      ],
      [
        "Nils",
        "Hier liegen sechs. Soll ich alle herausnehmen?",
        "هنا 6. أطلعهم كلهم؟"
      ],
      [
        "Lea",
        "Nein, lass sie noch liegen. Ich nehme selbst vier. Unsere Tante verwendet zwei eigene.",
        "لأ سيبهم مكانهم دلوقتي. هاخد 4 بنفسي. خالتنا هتستخدم مفرشين عندها."
      ],
      [
        "Nils",
        "Und der Teigschaber?",
        "وكاشطة العجين؟"
      ],
      [
        "Lea",
        "Den habe ich schon in die Schachtel gepackt. Hak bitte nur die vier Deckchen ab.",
        "حطيتها خلاص في العلبة. حط علامة صح عند الـ4 مفارش بس لو سمحت."
      ],
      [
        "Nils",
        "Gut. Zwei Deckchen bleiben also im Schrank.",
        "تمام. يبقى مفرشين هيفضلوا في الدولاب."
      ]
    ],
    "q": [
      [
        "Was lehnt Lea ab?",
        "Dass Nils die ganze Tasche packt.",
        "Dass Nils die Deckchen zählt.",
        "Dass ihre Tante eigene Deckchen verwendet."
      ],
      [
        "Wie viele Deckchen nimmt Lea mit?",
        "Vier.",
        "Sechs.",
        "Zwei."
      ],
      [
        "Welchen Punkt soll Nils abhaken?",
        "Die vier Platzdeckchen.",
        "Den Teigschaber.",
        "Die Abholung an der Tür."
      ]
    ]
  },
  {
    "id": "vier-deckchen-mehr-nicht",
    "level": "B1",
    "title": [
      "Vier Deckchen, mehr nicht",
      "4 مفارش وبس"
    ],
    "lines": [
      [
        "Rami",
        "Mit Tisch meinte ich den Esstisch. Meine Notiz war nicht eindeutig.",
        "كنت أقصد ترابيزة الأكل. الملحوظة بتاعتي ماكانتش واضحة."
      ],
      [
        "Eva",
        "Ich dachte an die Arbeitsfläche für den Teig. Deshalb liegen hier die Schüssel und der Teigschaber.",
        "افتكرت قصدك سطح الشغل للعجين. عشان كده هنا الطبق الغويط والكاشطة."
      ],
      [
        "Rami",
        "Leg bitte nur vier Platzdeckchen auf den Esstisch. Teller und Besteck übernehme ich.",
        "حطي 4 مفارش فردية بس على ترابيزة الأكل لو سمحتي. أنا هتولى الأطباق وأدوات الأكل."
      ],
      [
        "Eva",
        "Einverstanden. Dann ist mein Teil mit den vier Deckchen erledigt.",
        "موافقة. يبقى دوري يخلص بالـ4 مفارش."
      ],
      [
        "Rami",
        "Genau. Ich schreibe die Aufteilung für ein anderes Mal deutlicher auf.",
        "بالظبط. هكتب التقسيم أوضح لمرة تانية."
      ],
      [
        "Eva",
        "Wer die Backgeräte später spült, haben wir damit noch nicht festgelegt.",
        "كده لسه ماحددناش مين هيغسل أدوات الخَبز بعدين."
      ],
      [
        "Rami",
        "Das besprechen wir im Anschluss. Die Notiz ist kein vollständiger Haushaltsplan.",
        "نتكلم في ده بعد كده. الملحوظة مش خطة كاملة لشغل البيت."
      ]
    ],
    "q": [
      [
        "Was übernimmt Rami ausdrücklich?",
        "Teller und Besteck.",
        "Evas vier Platzdeckchen.",
        "Garantiert alle späteren Spülarbeiten."
      ],
      [
        "Welcher Aufgabe stimmt Eva zu?",
        "Vier Platzdeckchen auf den Esstisch zu legen.",
        "Den ganzen Haushalt allein zu führen.",
        "Sofort alle Backgeräte zu spülen."
      ],
      [
        "Was wollen sie erst anschließend besprechen?",
        "Wer später die Backgeräte spült.",
        "Ob mit Tisch der Esstisch gemeint war.",
        "Wer Teller und Besteck übernimmt."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "das-andere-schwarze-geraet": [
    "mit dem flachen Kopf.",
    "Den Pinsel lege ich zurück.",
    "ein Platzdeckchen auf den Tisch"
  ],
  "zaehlen-ist-nicht-einpacken": [
    "ich ordne die Sachen selbst ein.",
    "Ich nehme selbst vier.",
    "nur die vier Deckchen ab."
  ],
  "vier-deckchen-mehr-nicht": [
    "Teller und Besteck übernehme ich.",
    "mein Teil mit den vier Deckchen erledigt.",
    "Das besprechen wir im Anschluss."
  ]
});

everydayDialogues.push(...[
  {
    "id": "der-loeffel-mit-der-angabe",
    "level": "A1",
    "title": [
      "Der Löffel mit der Angabe",
      "المعلقة اللي عليها بيان"
    ],
    "lines": [
      [
        "Tarek",
        "Brauchst du diesen Esslöffel?",
        "محتاجة معلقة الأكل دي؟"
      ],
      [
        "Leni",
        "Nein, bitte den kleineren Messlöffel mit der Mengenangabe am Griff.",
        "لأ، المعلقة المعيارية الأصغر اللي على إيدها بيان كمية لو سمحت."
      ],
      [
        "Tarek",
        "Gut. Ich lege ihn auf das saubere Tablett.",
        "تمام. هحطها على الصينية النضيفة."
      ],
      [
        "Leni",
        "Die Küchenwaage stelle ich daneben. Sie bleibt noch aus.",
        "هحط ميزان المطبخ جنبها. هيفضل مطفي دلوقتي."
      ],
      [
        "Tarek",
        "Ich notiere der Messlöffel und die Küchenwaage.",
        "هكتب المعلقة المعيارية بأداة التعريف المذكر وميزان المطبخ بأداة التعريف المؤنث بالألماني."
      ],
      [
        "Leni",
        "Heute vergleichen wir erst einmal nur die Wörter und Geräte.",
        "النهارده الأول نقارن الكلمات والأدوات بس."
      ],
      [
        "Tarek",
        "Also noch nichts abwiegen und den Löffel nicht füllen.",
        "يبقى لسه مانوزنش حاجة ولانملأ المعلقة."
      ]
    ],
    "q": [
      [
        "Welchen Löffel meint Leni?",
        "Den kleineren mit der Mengenangabe.",
        "Den normalen Esslöffel ohne weitere Angabe.",
        "Einen bereits gefüllten Suppenlöffel."
      ],
      [
        "Wie bleibt die Küchenwaage zunächst?",
        "Ausgeschaltet.",
        "Mit Teig gefüllt.",
        "Im geschlossenen Rucksack."
      ],
      [
        "Worauf beschränken sie sich heute zunächst?",
        "Auf Wörter und Geräte.",
        "Auf bestätigte Messergebnisse.",
        "Auf einen Einkauf im Geschäft."
      ]
    ]
  },
  {
    "id": "nicht-als-ergebnis-abschreiben",
    "level": "A2",
    "title": [
      "Nicht als Ergebnis abschreiben",
      "مش ننقله كأنه نتيجة"
    ],
    "lines": [
      [
        "Jonas",
        "Auf der alten Karte steht eine Zahl für das Mehl. Ich schreibe sie ins Ergebnisfeld.",
        "على الكارت القديم رقم للدقيق. هكتبه في خانة النتيجة."
      ],
      [
        "Paula",
        "Warte bitte. Das ist die Vorgabe, noch keine Messung von heute.",
        "استنى لو سمحت. دي القيمة المطلوبة مش قياس من النهارده."
      ],
      [
        "Jonas",
        "Und entspricht ein voller Messlöffel dieser Menge?",
        "ومعلقة معيارية مليانة تساوي الكمية دي؟"
      ],
      [
        "Paula",
        "Das wissen wir daraus nicht. Wir tragen keine Umrechnung ein.",
        "مانعرفش ده من الكلام ده. مش هنسجل تحويل وحدات."
      ],
      [
        "Jonas",
        "Dann legen wir später das Mehl auf die Küchenwaage.",
        "يبقى نحط الدقيق على ميزان المطبخ بعدين."
      ],
      [
        "Paula",
        "Genau. Jetzt klingelt es. Das Ergebnisfeld bleibt erst einmal leer.",
        "بالظبط. دلوقتي الجرس بيرن. خانة النتيجة تفضل فاضية دلوقتي."
      ],
      [
        "Jonas",
        "Ich stelle die Geräte unbenutzt beiseite.",
        "هحط الأدوات على جنب من غير ما نستخدمها."
      ]
    ],
    "q": [
      [
        "Was korrigiert Paula?",
        "Die Einordnung der alten Zahl als heutiges Ergebnis.",
        "Ein tatsächlich gemessenes Gewicht.",
        "Die Schreibweise ihres eigenen Namens."
      ],
      [
        "Was wissen sie über die Gleichheit der Mengen?",
        "Sie ist aus diesen Angaben nicht bekannt.",
        "Sie ist durch ihren Versuch bestätigt.",
        "Sie gilt sicher für jeden Messlöffel."
      ],
      [
        "Was ist die spätere Messung am Ende?",
        "Geplant, aber noch nicht erfolgt.",
        "Bereits vollständig abgeschlossen.",
        "Durch einen Haken bestätigt."
      ]
    ]
  },
  {
    "id": "die-einheit-bleibt-dabei",
    "level": "B1",
    "title": [
      "Die Einheit bleibt dabei",
      "الوحدة تفضل مع الرقم"
    ],
    "lines": [
      [
        "Cem",
        "Ich könnte alle Zahlen allein in diese Spalte schreiben.",
        "ممكن أكتب كل الأرقام لوحدها في العمود ده."
      ],
      [
        "Alina",
        "Bitte nicht ohne Einheit, Zutat und Herkunft. Sonst werden unterschiedliche Angaben scheinbar vergleichbar.",
        "بلاش من غير وحدة ومكون ومصدر لو سمحت. وإلا بيانات مختلفة ممكن تبان قابلة للمقارنة."
      ],
      [
        "Cem",
        "Die Küchenwaage und der Messlöffel helfen uns also nur beim Erklären?",
        "يبقى الميزان والمعلقة المعيارية بيساعدونا في الشرح بس؟"
      ],
      [
        "Alina",
        "Ja, wir messen heute nichts und behaupten keine feste Umrechnung.",
        "أيوه، مش بنقيس النهارده ومش بندعي تحويل ثابت."
      ],
      [
        "Cem",
        "Wo nur Löffel steht, lasse ich die fehlende Erklärung offen.",
        "المكان اللي مكتوب فيه معالق بس هسيب التوضيح الناقص مفتوح."
      ],
      [
        "Alina",
        "Genau. Eine schönere Abschrift ist noch keine geprüfte Anleitung.",
        "بالظبط. نسخة منقولة شكلها أحلى لسه مش تعليمات متراجعة ومؤكدة."
      ],
      [
        "Cem",
        "Wir wollen später nachfragen. Antworten haben wir noch nicht.",
        "ناويين نسأل بعدين. لسه ماعندناش ردود."
      ]
    ],
    "q": [
      [
        "Was soll bei den Zahlen bleiben?",
        "Einheit, Zutat und Herkunft.",
        "Nur eine dekorative Farbe.",
        "Eine erfundene Bestätigung."
      ],
      [
        "Welche Behauptung vermeiden sie?",
        "Eine feste Umrechnung zwischen den Angaben.",
        "Dass Fragen noch offen sind.",
        "Dass die Abschrift lesbarer werden soll."
      ],
      [
        "Was liegt am Ende noch nicht vor?",
        "Antworten auf ihre geplanten Rückfragen.",
        "Die alten Notizen.",
        "Die beiden Anschauungsgeräte."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "der-loeffel-mit-der-angabe": [
    "mit der Mengenangabe am Griff.",
    "Sie bleibt noch aus.",
    "nur die Wörter und Geräte."
  ],
  "nicht-als-ergebnis-abschreiben": [
    "noch keine Messung von heute.",
    "Das wissen wir daraus nicht.",
    "bleibt erst einmal leer."
  ],
  "die-einheit-bleibt-dabei": [
    "nicht ohne Einheit, Zutat und Herkunft.",
    "behaupten keine feste Umrechnung.",
    "Antworten haben wir noch nicht."
  ]
});

everydayDialogues.push(...[
  {
    "id": "zeigen-statt-spielen",
    "level": "A1",
    "title": [
      "Zeigen statt spielen",
      "نشاور بدل ما نعزف"
    ],
    "lines": [
      [
        "Mara",
        "Wie heißen diese Stäbe mit den runden Köpfen?",
        "اسم العصايات اللي راسها مدورة دي إيه؟"
      ],
      [
        "Emil",
        "Das sind Schlägel. Im Wörterbuch steht der Schlägel.",
        "دي عصايات ضرب لآلة إيقاع. في القاموس الكلمة بأداة التعريف المذكر بالألماني."
      ],
      [
        "Mara",
        "Und in der Kiste liegt eine Kastagnette mit zwei Schalen.",
        "وفي الصندوق كاستنيت فيه صدفتين."
      ],
      [
        "Emil",
        "Genau. Wir lesen die Wörter und zeigen nur auf die Gegenstände.",
        "بالظبط. نقرا الكلمات ونشاور على الحاجات بس."
      ],
      [
        "Mara",
        "Dann lege ich die Kastagnette wieder in die Kiste.",
        "يبقى أرجع الكاستنيت للصندوق."
      ],
      [
        "Emil",
        "Die Schlägel bleiben hier auf der Decke. Danach tauschen wir die Rollen.",
        "العصايات تفضل هنا على البطانية. بعد كده نبدل الأدوار."
      ],
      [
        "Mara",
        "Gut. Heute spielen wir damit keine Musik.",
        "تمام. النهارده مش هنعزف بيهم موسيقى."
      ]
    ],
    "q": [
      [
        "Was steht im Wörterbucheintrag zu Schlägel?",
        "Der Schlägel.",
        "Die Schlägel als Singular.",
        "Das Schlägel als Singular."
      ],
      [
        "Was tun sie mit den Gegenständen heute?",
        "Nur beim Wörterlesen darauf zeigen.",
        "Ein fertiges Konzert aufnehmen.",
        "Sie an einen Nachbarn verkaufen."
      ],
      [
        "Wohin kommt die Kastagnette?",
        "Wieder in die Kiste.",
        "Auf ein laufendes Aufnahmegerät.",
        "In Maras geschlossenes Heft."
      ]
    ]
  },
  {
    "id": "heute-war-luis-zuerst",
    "level": "A2",
    "title": [
      "Heute war Luis zuerst",
      "النهارده لويس كان الأول"
    ],
    "lines": [
      [
        "Jana",
        "Mir fehlt noch das Wort für die Schnur. Kannst du mit den Schlägeln anfangen?",
        "لسه ناقصاني كلمة الخيط. ممكن تبدأ بالعصايات؟"
      ],
      [
        "Luis",
        "Ja. Ich nenne den Namen und die runden Köpfe, ohne etwas zu spielen.",
        "أيوه. هقول الاسم والراسين المدورين من غير ما أعزف حاجة."
      ],
      [
        "Jana",
        "Danach beschreibe ich die Kastagnette.",
        "بعد كده أوصف الكاستنيت."
      ],
      [
        "Luis",
        "Auf unserem Zettel stehst du aber noch zuerst.",
        "بس على ورقتنا إنتي لسه الأول."
      ],
      [
        "Jana",
        "Lass die Planung stehen und ergänze den tatsächlichen Ablauf darunter.",
        "سيب الخطة زي ما هي وضيف اللي حصل فعليًا تحتها."
      ],
      [
        "Luis",
        "Also heute Luis zuerst, Jana danach. Das ist keine neue Dauerregel.",
        "يبقى النهارده لويس الأول ويانا بعده. دي مش قاعدة ثابتة جديدة."
      ],
      [
        "Jana",
        "Genau. Wer beim nächsten Mal anfängt, ist noch offen.",
        "بالظبط. مين يبدأ المرة الجاية لسه مفتوح."
      ]
    ],
    "q": [
      [
        "Was bittet Jana Luis zu tun?",
        "Mit seinen Schlägeln anzufangen.",
        "Die ursprüngliche Planung zu löschen.",
        "Sofort eine Musikaufnahme zu starten."
      ],
      [
        "Was soll mit der Planung geschehen?",
        "Sie bleibt stehen und wird um den tatsächlichen Ablauf ergänzt.",
        "Sie wird als unverändert ausgeführt bezeichnet.",
        "Sie wird heimlich entfernt."
      ],
      [
        "Was beschreibt die neue Zeile?",
        "Diese eine Runde.",
        "Eine feste Regel für alle künftigen Runden.",
        "Eine bereits bestätigte Konzertbuchung."
      ]
    ]
  },
  {
    "id": "was-wird-hier-gezaehlt",
    "level": "B1",
    "title": [
      "Was wird hier gezählt?",
      "هنا بنعد إيه؟"
    ],
    "lines": [
      [
        "Noah",
        "Die Kastagnette hat auf dem Foto zwei Schalen. Soll ich zwei Instrumente schreiben?",
        "الكاستنيت في الصورة فيه صدفتين. أكتب آلتين؟"
      ],
      [
        "Selma",
        "Nein. Die Schalen gehören hier zu einer Kastagnette. Wir müssen die Zähleinheit nennen.",
        "لأ. الصدفتين هنا تابعين لكاستنيت واحد. لازم نقول وحدة العد."
      ],
      [
        "Noah",
        "Bei den Schlägeln ist dagegen jeder vollständige Stab mit Kopf ein Gegenstand.",
        "لكن عند العصايات كل عصاية كاملة براسها حاجة واحدة."
      ],
      [
        "Selma",
        "Genau. Und der Wörterbucheintrag bleibt im Singular, auch wenn das Bild mehrere zeigt.",
        "بالظبط. وعنوان القاموس يفضل بالمفرد حتى لو الصورة فيها أكتر من واحد."
      ],
      [
        "Noah",
        "Die Zeile zur Funktionsprüfung bleibt leer. Einen Klang haben wir nicht geprüft.",
        "سطر فحص الوظيفة يفضل فاضي. إحنا مافحصناش أي صوت."
      ],
      [
        "Selma",
        "Unsere Kartei ordnet Wörter und Beschreibungen, keinen Prüfbericht.",
        "القصاصات بتنظم كلمات وأوصاف مش تقرير فحص."
      ],
      [
        "Noah",
        "Weitere Fotos haben wir noch nicht ausgewählt.",
        "لسه ماختارناش صور زيادة."
      ]
    ],
    "q": [
      [
        "Welche Einheit muss ausdrücklich unterschieden werden?",
        "Instrumente gegenüber sichtbaren Teilen.",
        "Nur die Farbe der Überschriften.",
        "Künftige Termine gegenüber Ticketpreisen."
      ],
      [
        "Was bleibt ungeprüft?",
        "Der Klang.",
        "Ob eine neue Überschrift notiert wurde.",
        "Ob zwei sichtbare Schalen besprochen wurden."
      ],
      [
        "Was ist noch offen?",
        "Die Auswahl weiterer Fotos.",
        "Ob die beiden Schalen zusammengehören.",
        "Ob Schlägel als Wort im Singular notiert wurde."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "zeigen-statt-spielen": [
    "der Schlägel.",
    "zeigen nur auf die Gegenstände.",
    "wieder in die Kiste."
  ],
  "heute-war-luis-zuerst": [
    "mit den Schlägeln anfangen?",
    "Lass die Planung stehen",
    "heute Luis zuerst, Jana danach."
  ],
  "was-wird-hier-gezaehlt": [
    "Wir müssen die Zähleinheit nennen.",
    "Einen Klang haben wir nicht geprüft.",
    "noch nicht ausgewählt."
  ]
});

everydayDialogues.push(...[
  {
    "id": "auf-das-foto-zeigen",
    "level": "A1",
    "title": [
      "Auf das Foto zeigen",
      "نشاور على الصورة"
    ],
    "lines": [
      [
        "Lea",
        "Die Farbrolle auf dem ersten Foto hat einen roten Griff.",
        "رول الدهان في الصورة الأولى ليه إيد حمرا."
      ],
      [
        "Sami",
        "Und auf dem zweiten Foto sehe ich eine orange Farbwanne.",
        "وفي الصورة التانية شايف صينية دهان برتقاني."
      ],
      [
        "Lea",
        "Suchst du dort einen Pinsel?",
        "بتدور هناك على فرشة؟"
      ],
      [
        "Sami",
        "Ja, aber auf diesem Foto ist keiner zu sehen.",
        "أيوه بس مفيش فرشة ظاهرة في الصورة دي."
      ],
      [
        "Lea",
        "Wir lesen die Wörter und zeigen auf die Bilder. Danach wechseln wir.",
        "هنقرا الكلمات ونشاور على الصور. بعد كده نبدل."
      ],
      [
        "Sami",
        "Gut. Mein Heft stecke ich danach in meine Tasche.",
        "تمام. كراستي هحطها بعد كده في شنطتي."
      ],
      [
        "Lea",
        "Die Fotos lassen wir auf dem Tisch.",
        "هنسيب الصور على الترابيزة."
      ]
    ],
    "q": [
      [
        "Was ist am Griff der Farbrolle auffällig?",
        "Er ist rot.",
        "Er ist orange.",
        "Er fehlt auf dem Foto."
      ],
      [
        "Was ist auf dem zweiten Foto nicht zu sehen?",
        "Ein Pinsel.",
        "Eine Farbwanne.",
        "Die orange Wanne."
      ],
      [
        "Was machen sie nach der ersten Runde?",
        "Sie wechseln.",
        "Sie streichen sofort eine Wand.",
        "Sie werfen die Fotos weg."
      ]
    ]
  },
  {
    "id": "nichts-mitnehmen",
    "level": "A2",
    "title": [
      "Nichts mitnehmen",
      "مش هناخد حاجة"
    ],
    "lines": [
      [
        "Ben",
        "Mit Farbsachen meinst du auch meine Farbrolle und die Pinsel?",
        "تقصدّي بحاجات الدهان الرول والفرش كمان؟"
      ],
      [
        "Nora",
        "Nein, nur die leere Farbwanne. Ich möchte sie fotografieren, nicht streichen.",
        "لأ صينية الدهان الفاضية بس. عايزة أصورها مش أدهن."
      ],
      [
        "Ben",
        "Dann könnte ich die Wanne vorbeibringen.",
        "يبقى ممكن أجيب الصينية عندك."
      ],
      [
        "Nora",
        "Ich komme lieber am Samstag zu dir und mache das Foto dort.",
        "أفضل أجي لك يوم السبت وأصور هناك."
      ],
      [
        "Ben",
        "Gut. Dann bleibt alles hier. Eine Uhrzeit fehlt uns noch.",
        "تمام. يبقى كل حاجة تفضل هنا. لسه ناقصنا نتفق على ساعة."
      ],
      [
        "Nora",
        "Ich notiere den neuen Plan deutlich: Foto bei Ben, nichts mitnehmen.",
        "هكتب الخطة الجديدة بوضوح: الصورة عند بن ومش هناخد حاجة."
      ],
      [
        "Ben",
        "Ich räume die Wanne bis dahin wieder zu meinen Farbsachen.",
        "هرجع الصينية وسط حاجات الدهان بتاعتي لحد وقتها."
      ]
    ],
    "q": [
      [
        "Was will Nora mit der Wanne tun?",
        "Sie fotografieren.",
        "Damit eine Wand streichen.",
        "Sie zusammen mit allen Pinseln abholen."
      ],
      [
        "Wo soll das Foto entstehen?",
        "Bei Ben.",
        "In einem Paketlager.",
        "Am selben Abend bei Nora."
      ],
      [
        "Was ist noch nicht vereinbart?",
        "Eine Uhrzeit.",
        "Dass alles bei Ben bleibt.",
        "Dass Nora nur die Wanne fotografieren will."
      ]
    ]
  },
  {
    "id": "die-art-bleibt-unbekannt",
    "level": "B1",
    "title": [
      "Die Art bleibt unbekannt",
      "النوع لسه مش معروف"
    ],
    "lines": [
      [
        "Paul",
        "Ich habe geschrieben, dass beide Fotos dieselbe Farbe zeigen.",
        "كتبت إن الصورتين بيبينوا نفس الدهان."
      ],
      [
        "Daria",
        "Können wir aus dem sichtbaren Farbton wirklich auf dieselbe Zusammensetzung schließen?",
        "نقدر فعلًا نستنتج من درجة اللون الظاهرة إن التركيبة واحدة؟"
      ],
      [
        "Paul",
        "Nein. Ich trenne die Beschreibungen und notiere die Art als unbekannt.",
        "لأ. هفصل الوصفين وأكتب إن النوع مش معروف."
      ],
      [
        "Daria",
        "Und der Zustand der Farbrolle ist damit auch nicht geprüft.",
        "وكده حالة رول الدهان ماتعملهاش فحص برضه."
      ],
      [
        "Paul",
        "Unser Heft bleibt eine Sprachhilfe, kein Materialbericht.",
        "كراستنا تفضل مساعدة للغة مش تقرير عن المادة."
      ],
      [
        "Daria",
        "Genau. Die Formen Farbrollen und Farbwannen sagen auch nicht, wie viele Dinge jedes Foto zeigt.",
        "بالظبط. وصيغ الجمع بالألماني مش بتقول كل صورة فيها كام حاجة."
      ],
      [
        "Paul",
        "Weitere Bilder suchen wir später aus.",
        "هنختار صور تانية بعدين."
      ]
    ],
    "q": [
      [
        "Was wird als unbekannt notiert?",
        "Die Art des Farbmittels.",
        "Ob das Heft deutsche Wörter enthält.",
        "Ob Paul seine Beschreibung ändert."
      ],
      [
        "Was wurde nicht geprüft?",
        "Der Zustand der Farbrolle.",
        "Ob zwei getrennte Beschreibungen geplant sind.",
        "Ob die Formen Farbrollen und Farbwannen genannt wurden."
      ],
      [
        "Was bleibt das Heft?",
        "Eine Sprachhilfe.",
        "Ein fertiger Materialbericht.",
        "Ein verbindlicher Arbeitsauftrag zum Streichen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "auf-das-foto-zeigen": [
    "Die Farbrolle auf dem ersten Foto hat einen roten Griff.",
    "Ja, aber auf diesem Foto ist keiner zu sehen.",
    "Danach wechseln wir."
  ],
  "nichts-mitnehmen": [
    "Ich möchte sie fotografieren, nicht streichen.",
    "Ich komme lieber am Samstag zu dir und mache das Foto dort.",
    "Eine Uhrzeit fehlt uns noch."
  ],
  "die-art-bleibt-unbekannt": [
    "Ich trenne die Beschreibungen und notiere die Art als unbekannt.",
    "Und der Zustand der Farbrolle ist damit auch nicht geprüft.",
    "Unser Heft bleibt eine Sprachhilfe, kein Materialbericht."
  ]
});

everydayDialogues.push(...[
  {
    "id": "nicht-der-kegel",
    "level": "A1",
    "title": [
      "Nicht der Kegel",
      "مش المخروط"
    ],
    "lines": [
      [
        "Yusuf",
        "Ich lese Megafon. Ist das der Gegenstand auf dem rechten Foto?",
        "بقرا ميجافون بالألماني. دي الحاجة اللي في الصورة على اليمين؟"
      ],
      [
        "Sofia",
        "Nein. Schau links auf die breite Öffnung und den Griff.",
        "لأ. بص على الشمال على الفتحة الواسعة والمقبض."
      ],
      [
        "Yusuf",
        "Jetzt sehe ich es. Das Megafon ist weiß und rot.",
        "دلوقتي شايفه. الميجافون أبيض وأحمر."
      ],
      [
        "Sofia",
        "Rechts steht der orange und weiße Leitkegel auf seiner Grundplatte.",
        "وعلى اليمين مخروط المرور البرتقاني والأبيض على قاعدته."
      ],
      [
        "Yusuf",
        "Ich schreibe beide Namen mit Artikel in mein Heft.",
        "هكتب الاسمين بأداة التعريف في كراستي."
      ],
      [
        "Sofia",
        "Gut. Danach lesen wir noch einmal und zeigen auf die Fotos.",
        "تمام. بعد كده نقرا تاني ونشاور على الصور."
      ],
      [
        "Yusuf",
        "Zum Schluss lege ich mein Heft links neben die Bilder.",
        "وفي الآخر هحط كراستي على شمال الصور."
      ]
    ],
    "q": [
      [
        "Wo sieht Yusuf das Megafon nach Sofias Hinweis?",
        "Auf dem linken Foto.",
        "Auf dem rechten Foto.",
        "Auf keinem der beiden Fotos."
      ],
      [
        "Was steht auf einer Grundplatte?",
        "Der Leitkegel.",
        "Yusufs Heft.",
        "Das Megafon."
      ],
      [
        "Was schreibt Yusuf auf?",
        "Beide Namen mit Artikel.",
        "Eine fertige Durchsage.",
        "Eine Wegbeschreibung durch die Küche."
      ]
    ]
  },
  {
    "id": "klarer-heisst-nicht-zugesagt",
    "level": "A2",
    "title": [
      "Klarer heißt nicht zugesagt",
      "أوضح مش معناها موافقة"
    ],
    "lines": [
      [
        "Timo",
        "Warum soll ich ein Megafon und einen Leitkegel mitbringen?",
        "ليه أجيب معايا ميجافون ومخروط مرور؟"
      ],
      [
        "Mina",
        "Ich meine nur Fotos. Wir wollen Wörter beschreiben, keine Durchsage machen.",
        "قصدي صور بس. هنوصف كلمات مش هنعمل إعلان بمكبر صوت."
      ],
      [
        "Timo",
        "Dann schreib das bitte so. Wir könnten die vorhandenen Bilder nehmen.",
        "يبقى اكتبي ده كده. ممكن ناخد الصور اللي موجودة."
      ],
      [
        "Mina",
        "Ist die neue Einladung jetzt klar genug?",
        "الدعوة الجديدة كده واضحة كفاية؟"
      ],
      [
        "Timo",
        "Ja, aber zugesagt habe ich noch nicht. Ich prüfe erst meinen Wochenendplan.",
        "أيوه بس لسه موافقتش. هراجع خطة الويك إند الأول."
      ],
      [
        "Mina",
        "Gut. Ich lasse sie als Entwurf stehen und verschicke noch nichts.",
        "تمام. هسيبها مسودة ومش هبعت حاجة لسه."
      ],
      [
        "Timo",
        "Morgen antworte ich dir. Über Ort und Uhrzeit haben wir noch nicht gesprochen.",
        "هرد عليكي بكرة. لسه ماتكلمناش على المكان والساعة."
      ]
    ],
    "q": [
      [
        "Welche Bilder könnten sie nutzen?",
        "Die vorhandenen Bilder.",
        "Bilder, die Timo verbindlich besorgen muss.",
        "Eine schon fertig geprüfte Tonaufnahme."
      ],
      [
        "Hat Timo schon zugesagt?",
        "Nein, er prüft erst seinen Wochenendplan.",
        "Ja, für einen festen Termin.",
        "Ja, für eine Durchsage draußen."
      ],
      [
        "Was macht Mina vorerst nicht?",
        "Die Einladung verschicken.",
        "Den Text als Entwurf stehen lassen.",
        "Über die Formulierung nachdenken."
      ]
    ]
  },
  {
    "id": "was-das-bild-nicht-belegt",
    "level": "B1",
    "title": [
      "Was das Bild nicht belegt",
      "الصورة مش بتثبت إيه"
    ],
    "lines": [
      [
        "Karim",
        "Ich wollte unter den Leitkegel schreiben: Die Straße ist gesperrt.",
        "كنت عايز أكتب تحت مخروط المرور: الشارع مقفول."
      ],
      [
        "Nora",
        "Das Bild zeigt den Gegenstand, aber nicht sicher den Anlass oder die geltenden Regeln.",
        "الصورة بتبين الحاجة بس مش بتثبت السبب ولا القواعد المطبقة."
      ],
      [
        "Karim",
        "Dann kennzeichne ich die Sperrung als unbestätigte Annahme.",
        "يبقى هعلم على قفل الشارع إنه افتراض مش مؤكد."
      ],
      [
        "Nora",
        "Auch die Hand am Megafon beweist noch keine laufende Durchsage.",
        "وكمان الإيد على الميجافون مش دليل على إعلان بيتقال دلوقتي."
      ],
      [
        "Karim",
        "Wir prüfen weder Funktion noch Lautstärke des Geräts.",
        "مش بنفحص وظيفة الجهاز ولا علو صوته."
      ],
      [
        "Nora",
        "Die Wortformen notieren wir getrennt: Megafone und Leitkegel.",
        "هنكتب صيغ الجمع لوحدها بالألماني."
      ],
      [
        "Karim",
        "Unser Heft übt Benennungen. Es erteilt uns keine Befugnis für einen Einsatz.",
        "كراستنا بتدرب على التسمية. مش بتدينا صلاحية نستخدم الحاجات."
      ]
    ],
    "q": [
      [
        "Wie wird die vermutete Sperrung behandelt?",
        "Als unbestätigte Annahme.",
        "Als sicherer Auftrag.",
        "Als aktuelle Verkehrsfreigabe."
      ],
      [
        "Was prüfen sie nicht?",
        "Funktion und Lautstärke des Megafons.",
        "Ob sie die Wortformen aufschreiben.",
        "Ob das Bild einen Gegenstand zeigt."
      ],
      [
        "Was erteilt das Heft nicht?",
        "Eine Befugnis für einen Einsatz.",
        "Eine Möglichkeit zum Üben der Benennungen.",
        "Zwei aufgeschriebene Pluralformen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "nicht-der-kegel": [
    "Schau links auf die breite Öffnung und den Griff.",
    "Rechts steht der orange und weiße Leitkegel auf seiner Grundplatte.",
    "Ich schreibe beide Namen mit Artikel in mein Heft."
  ],
  "klarer-heisst-nicht-zugesagt": [
    "Wir könnten die vorhandenen Bilder nehmen.",
    "Ja, aber zugesagt habe ich noch nicht.",
    "Ich lasse sie als Entwurf stehen und verschicke noch nichts."
  ],
  "was-das-bild-nicht-belegt": [
    "Dann kennzeichne ich die Sperrung als unbestätigte Annahme.",
    "Wir prüfen weder Funktion noch Lautstärke des Geräts.",
    "Es erteilt uns keine Befugnis für einen Einsatz."
  ]
});

everydayDialogues.push(...[
  {
    "id": "nur-den-artikel-aendern",
    "level": "A1",
    "title": [
      "Nur den Artikel ändern",
      "نغير أداة التعريف بس"
    ],
    "lines": [
      [
        "Paul",
        "Wie heißt das Ding mit den kleinen Löchern?",
        "اسم الحاجة اللي فيها الخرم الصغير ده إيه؟"
      ],
      [
        "Amina",
        "Die Knoblauchpresse. Auf dem Foto ist sie gebogen.",
        "هراسة التوم. في الصورة شكلها منحني."
      ],
      [
        "Paul",
        "Und der lila Beutel in der Schüssel?",
        "والكيس الموف اللي في الطبق الغويط؟"
      ],
      [
        "Amina",
        "Das ist ein Spritzbeutel. Schreib bitte der Spritzbeutel.",
        "ده كيس تزيين حلويات. اكتبه بأداة التعريف المذكر."
      ],
      [
        "Paul",
        "Ich habe die geschrieben. Ist auch das Nomen falsch?",
        "أنا كتبت أداة التعريف المؤنث. هو الاسم كمان غلط؟"
      ],
      [
        "Amina",
        "Nein. Streiche nur den Artikel durch und schreibe der darüber.",
        "لأ. اشطب على أداة التعريف بس واكتب أداة التعريف المذكر فوقها."
      ],
      [
        "Paul",
        "Gut. Dann lese ich beide Namen noch einmal vor.",
        "تمام. يبقى هقرا الاسمين بصوت تاني."
      ]
    ],
    "q": [
      [
        "Welche Form hat die Presse auf dem Foto?",
        "Sie ist gebogen.",
        "Sie ist eine Kugel.",
        "Sie hat eine lange Stofftasche."
      ],
      [
        "Was ist an Pauls Notiz zu Spritzbeutel falsch?",
        "Nur der Artikel.",
        "Das ganze Nomen.",
        "Die Reihenfolge beider Fotos."
      ],
      [
        "Was macht Paul danach?",
        "Er liest beide Namen noch einmal vor.",
        "Er kocht sofort ein Gericht.",
        "Er wirft das Blatt weg."
      ]
    ]
  },
  {
    "id": "das-foto-nicht-die-karte",
    "level": "A2",
    "title": [
      "Das Foto, nicht die Karte",
      "الصورة مش الكارت"
    ],
    "lines": [
      [
        "Rami",
        "Leg die bitte nach oben.",
        "حطي دي فوق لو سمحتي."
      ],
      [
        "Jana",
        "Meinst du die Karte zur Knoblauchpresse?",
        "قصدك كارت هراسة التوم؟"
      ],
      [
        "Rami",
        "Nein, das Foto. Meine Bitte war zu ungenau.",
        "لأ الصورة. طلبي كان مش محدد كفاية."
      ],
      [
        "Jana",
        "Dann nenne das Motiv bitte noch einmal.",
        "يبقى قول الحاجة اللي في الصورة تاني لو سمحت."
      ],
      [
        "Rami",
        "Lege bitte das Foto mit der gebogenen Knoblauchpresse über das andere Foto.",
        "حطي صورة هراسة التوم المنحنية فوق الصورة التانية لو سمحتي."
      ],
      [
        "Jana",
        "Jetzt ist es klar. Erst bewege ich das Bild, danach tausche ich die Karten.",
        "دلوقتي واضح. هحرك الصورة الأول وبعد كده هبدل الكروت."
      ],
      [
        "Rami",
        "Danach lese ich vor und du zeigst auf das passende Motiv.",
        "وبعد كده هقرا بصوت وإنتي تشاوري على الحاجة المناسبة."
      ]
    ],
    "q": [
      [
        "Was will Jana zuerst klären?",
        "Ob Rami die Karte meint.",
        "Ob Rami Knoblauch essen möchte.",
        "Ob alle Bilder weggeworfen werden."
      ],
      [
        "Wie verbessert Rami seine Bitte?",
        "Er nennt das Foto und das Motiv genau.",
        "Er wiederholt nur die.",
        "Er nimmt beide Karten weg."
      ],
      [
        "Was folgt nach dem Bewegen des Bildes?",
        "Jana tauscht die Karten.",
        "Rami kocht mit der Presse.",
        "Jana schließt das Wortheft ungeprüft."
      ]
    ]
  },
  {
    "id": "was-steckt-im-beutel",
    "level": "B1",
    "title": [
      "Was steckt im Beutel?",
      "إيه اللي جوه الكيس؟"
    ],
    "lines": [
      [
        "Nabil",
        "Ich habe eine Creme aus Beeren notiert, weil die Füllung lila ist.",
        "كتبت كريمة من التوت عشان الحشو موف."
      ],
      [
        "Lea",
        "Die Farbe sehen wir. Die Zutaten kennen wir deshalb noch nicht.",
        "إحنا شايفين اللون. ده مش معناه إننا عرفنا المكونات."
      ],
      [
        "Nabil",
        "Dann streiche ich die Beeren und schreibe Zusammensetzung unbekannt.",
        "يبقى هشطب التوت وأكتب المكونات مش معروفة."
      ],
      [
        "Lea",
        "Behaupte auch nicht einfach, dass Lebensmittelfarbe enthalten ist.",
        "وبرضه ماتقولش من عندك إن فيه لون أكل."
      ],
      [
        "Nabil",
        "Bei der Presse beweist der Knoblauch daneben keine frühere Benutzung.",
        "ومع الهراسة التوم اللي جنبها مش دليل على استخدامها قبل كده."
      ],
      [
        "Lea",
        "Genau. Wir beschreiben die Form, nicht den Reinigungszustand oder die Vorgeschichte.",
        "بالضبط. بنوصف الشكل مش حالة النضافة ولا تاريخ الاستخدام."
      ],
      [
        "Nabil",
        "Unsere Notizen bleiben Sprachübungen und ergeben kein geprüftes Rezept.",
        "ملحوظاتنا بتفضل تدريبات لغة ومش بتطلع وصفة متراجعة."
      ]
    ],
    "q": [
      [
        "Was kennen beide trotz der sichtbaren Farbe nicht?",
        "Die Zutaten.",
        "Die Farbe selbst.",
        "Den notierten deutschen Namen."
      ],
      [
        "Welche neue Behauptung soll Nabil vermeiden?",
        "Dass sicher Lebensmittelfarbe enthalten ist.",
        "Dass die Zusammensetzung unbekannt bleibt.",
        "Dass sie keine Zutatenliste haben."
      ],
      [
        "Was entsteht aus den Notizen nicht?",
        "Ein geprüftes Rezept.",
        "Eine Sprachübung.",
        "Eine Beschreibung der Form."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "nur-den-artikel-aendern": [
    "Auf dem Foto ist sie gebogen.",
    "Streiche nur den Artikel durch und schreibe der darüber.",
    "Dann lese ich beide Namen noch einmal vor."
  ],
  "das-foto-nicht-die-karte": [
    "Meinst du die Karte zur Knoblauchpresse?",
    "Lege bitte das Foto mit der gebogenen Knoblauchpresse über das andere Foto.",
    "Erst bewege ich das Bild, danach tausche ich die Karten."
  ],
  "was-steckt-im-beutel": [
    "Die Zutaten kennen wir deshalb noch nicht.",
    "Behaupte auch nicht einfach, dass Lebensmittelfarbe enthalten ist.",
    "Unsere Notizen bleiben Sprachübungen und ergeben kein geprüftes Rezept."
  ]
});

everydayDialogues.push(...[
  {
    "id": "zwei-punkte-fehlen",
    "level": "A1",
    "title": [
      "Zwei Punkte fehlen",
      "ناقص نقطتين"
    ],
    "lines": [
      [
        "Samir",
        "Wie lautet der Plural von Nagel?",
        "جمع مسمار بالألماني إيه؟"
      ],
      [
        "Dana",
        "Ich habe die Nagel geschrieben.",
        "كتبت أداة التعريف للجمع مع نفس الاسم من غير تغيير."
      ],
      [
        "Samir",
        "In der Wortliste steht Nägel. Über dem a fehlen noch zwei Punkte.",
        "في قايمة الكلمات الجمع بأوملاوت. لسه ناقص نقطتين فوق الحرف."
      ],
      [
        "Dana",
        "Danke. Ich ergänze den Umlaut auf der Karte.",
        "شكرا. هضيف الأوملاوت على الكارت."
      ],
      [
        "Samir",
        "Bei Schraubendreher bleibt die Form dagegen gleich.",
        "لكن مع كلمة مفك الشكل بيفضل زي ما هو."
      ],
      [
        "Dana",
        "Dann lese bitte beide Formen vor. Ich höre zu.",
        "يبقى اقرا الصيغتين بصوت لو سمحت. هسمع."
      ],
      [
        "Samir",
        "Danach legen wir jede Karte neben das passende Foto.",
        "وبعد كده نحط كل كارت جنب الصورة المناسبة."
      ]
    ],
    "q": [
      [
        "Was ergänzt Dana?",
        "Den Umlaut.",
        "Eine neue Schraube.",
        "Einen anderen Griff."
      ],
      [
        "Was gilt für den Plural Schraubendreher?",
        "Er hat dieselbe Form wie der Singular.",
        "Er bekommt immer einen Umlaut.",
        "Er endet auf en."
      ],
      [
        "Was machen sie nach dem Vorlesen?",
        "Die Karten neben die passenden Fotos legen.",
        "Mit den Werkzeugen arbeiten.",
        "Die Bilder wegwerfen."
      ]
    ]
  },
  {
    "id": "ueberschrift-oder-bildsatz",
    "level": "A2",
    "title": [
      "Überschrift oder Bildsatz?",
      "عنوان ولا جملة عن الصورة؟"
    ],
    "lines": [
      [
        "Leon",
        "Hier steht der Nagel. Auf dem Bild sehe ich aber mehrere.",
        "هنا الكلمة بالمفرد. بس أنا شايف كذا مسمار في الصورة."
      ],
      [
        "Mira",
        "Die Überschrift nennt das Wort im Singular. Das habe ich noch nicht deutlich gemacht.",
        "العنوان بيسمي الكلمة بالمفرد. لسه موضحتش ده."
      ],
      [
        "Leon",
        "Dann braucht das Foto einen eigenen Satz.",
        "يبقى الصورة محتاجة جملة لوحدها."
      ],
      [
        "Mira",
        "Ich schreibe: Auf dem Bild liegen mehrere Nägel. Eine genaue Zahl lasse ich offen.",
        "هكتب إن فيه كذا مسمار في الصورة. هسيب العدد الدقيق مفتوح."
      ],
      [
        "Leon",
        "Und bei Schraubendreher sieht der Plural wie der Singular aus?",
        "ومع كلمة مفك الجمع شكله زي المفرد؟"
      ],
      [
        "Mira",
        "Ja. Ich ergänze gleiche Form, damit das nicht wie eine Lücke aussieht.",
        "أيوه. هضيف ملحوظة إن الشكل واحد عشان مايبانش كأنه ناقص."
      ],
      [
        "Leon",
        "Jetzt unterscheiden wir Wortform und Bildbeschreibung klar.",
        "دلوقتي فرقنا بين صيغة الكلمة ووصف الصورة بوضوح."
      ]
    ],
    "q": [
      [
        "Was beschreibt der zusätzliche Satz?",
        "Die sichtbaren Beispiele im Foto.",
        "Den Kaufpreis des Hefts.",
        "Eine geplante Reparatur."
      ],
      [
        "Welche Zahl nennt Mira?",
        "Keine genaue Zahl.",
        "Genau zwei.",
        "Genau zehn."
      ],
      [
        "Was wird durch die Überarbeitung klar?",
        "Der Unterschied zwischen Wortform und Bildbeschreibung.",
        "Die Belastbarkeit aller Gegenstände.",
        "Die Anzahl außerhalb des Bildes."
      ]
    ]
  },
  {
    "id": "wortwahl-ist-kein-eignungstest",
    "level": "B1",
    "title": [
      "Wortwahl ist kein Eignungstest",
      "اختيار الاسم مش اختبار ملاءمة"
    ],
    "lines": [
      [
        "Jonas",
        "Ich dachte, Schraubenzieher müsse ein anderes Werkzeug sein.",
        "كنت فاكر الاسم التاني للمفك لازم يبقى أداة تانية."
      ],
      [
        "Selma",
        "Das Wörterbuch ordnet beide Wörter demselben Werkzeugtyp zu. Der Sprachgebrauch ist unterschiedlich.",
        "القاموس بيربط الاسمين بنفس نوع الأداة. استعمالهم في اللغة مختلف."
      ],
      [
        "Jonas",
        "Dann genügt ein Verweis. Eine zweite Bildkarte brauchen wir dafür nicht.",
        "يبقى إحالة تكفي. مش محتاجين كارت صورة تاني عشان ده."
      ],
      [
        "Selma",
        "Ob unser kurzer Schraubendreher passt, ist damit aber nicht geprüft.",
        "لكن كده لسه مافحصناش إذا كان المفك القصير عندنا مناسب."
      ],
      [
        "Jonas",
        "Bei Nagel müssen wir dagegen die gemeinte Bedeutung aus dem Kontext klären.",
        "لكن مع كلمة مسمار بالألماني محتاجين نوضح المعنى المقصود من السياق."
      ],
      [
        "Selma",
        "Genau. Unsere Karte zeigt den Gegenstand mit Kopf und spitzem Schaft.",
        "بالضبط. كارتنا بيبين الحاجة اللي ليها راس وساق مدببة."
      ],
      [
        "Jonas",
        "Wir ordnen Wörter, ohne daraus einen technischen Eignungstest zu machen.",
        "بنرتب كلمات من غير ما نحول ده لاختبار ملاءمة فنية."
      ]
    ],
    "q": [
      [
        "Was ersetzt die zweite Bildkarte?",
        "Ein Verweis im vorhandenen Eintrag.",
        "Ein zweites Werkzeug.",
        "Ein Auftrag zur Reparatur."
      ],
      [
        "Was ist durch die Wortklärung nicht geprüft?",
        "Ob der kurze Schraubendreher zu einer bestimmten Schraube passt.",
        "Ob das Wörterbuch beide Namen erwähnt.",
        "Ob sie einen Verweis ergänzen wollen."
      ],
      [
        "Wobei hilft der Kontext bei Nagel?",
        "Bei der gemeinten Bedeutung.",
        "Bei der sicheren Materialbestimmung.",
        "Bei einer genauen Zählung aller verdeckten Nägel."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "zwei-punkte-fehlen": [
    "Ich ergänze den Umlaut auf der Karte.",
    "Bei Schraubendreher bleibt die Form dagegen gleich.",
    "Danach legen wir jede Karte neben das passende Foto."
  ],
  "ueberschrift-oder-bildsatz": [
    "Dann braucht das Foto einen eigenen Satz.",
    "Eine genaue Zahl lasse ich offen.",
    "Jetzt unterscheiden wir Wortform und Bildbeschreibung klar."
  ],
  "wortwahl-ist-kein-eignungstest": [
    "Dann genügt ein Verweis.",
    "Ob unser kurzer Schraubendreher passt, ist damit aber nicht geprüft.",
    "Bei Nagel müssen wir dagegen die gemeinte Bedeutung aus dem Kontext klären."
  ]
});

everydayDialogues.push(...[
  {
    "id": "nicht-nur-eine-kugel",
    "level": "A1",
    "title": [
      "Nicht nur eine Kugel",
      "مش خرزة واحدة بس"
    ],
    "lines": [
      [
        "Tom",
        "Ist diese einzelne Kugel der Abakus?",
        "هي الخرزة الواحدة دي عداد الخرز؟"
      ],
      [
        "Leila",
        "Nein. Die Kugel ist nur ein Teil davon.",
        "لأ. الخرزة جزء منه بس."
      ],
      [
        "Tom",
        "Meinst du den ganzen Gegenstand mit dem Rahmen?",
        "قصدك الحاجة كلها بالإطار؟"
      ],
      [
        "Leila",
        "Ja, mit den Stangen und allen Kugeln.",
        "أيوه بالقضبان وكل الخرز."
      ],
      [
        "Tom",
        "Dann zeige ich einmal um den Rahmen herum.",
        "يبقى همشي بصباعي مرة حوالين الإطار."
      ],
      [
        "Leila",
        "Gut. Auf dem anderen Bild steht die Schachfigur.",
        "تمام. وفي الصورة التانية قطعة الشطرنج."
      ],
      [
        "Tom",
        "Ich schreibe beide Namen auf und stecke danach das Heft in meine Tasche.",
        "هكتب الاسمين وبعد كده أحط الكراسة في شنطتي."
      ]
    ],
    "q": [
      [
        "Was ist die einzelne Kugel?",
        "Ein Teil des Abakus.",
        "Der ganze Abakus.",
        "Die Schachfigur."
      ],
      [
        "Was gehört zum ganzen Abakus?",
        "Rahmen, Stangen und Kugeln.",
        "Nur ein Pferdekopf.",
        "Toms Tasche und das Heft."
      ],
      [
        "Was macht Tom nach dem Aufschreiben?",
        "Er steckt das Heft in seine Tasche.",
        "Er beginnt eine Schachpartie.",
        "Er wirft beide Fotos weg."
      ]
    ]
  },
  {
    "id": "ein-haken-muss-warten",
    "level": "A2",
    "title": [
      "Ein Haken muss warten",
      "علامة صح لازم تستنى"
    ],
    "lines": [
      [
        "Sami",
        "Die Liste ist vollständig. Dann sind wir fertig.",
        "القايمة كاملة. يبقى إحنا خلصنا."
      ],
      [
        "Nora",
        "Die Liste nennt unseren Plan. Vorgelesen hast du noch nicht.",
        "القايمة بتقول خطتنا. إنت لسه ماقريتش بصوت."
      ],
      [
        "Sami",
        "Stimmt. Ich habe nur die Bilder angesehen und die Namen notiert.",
        "صح. أنا بصيت على الصور وكتبت الأسامي بس."
      ],
      [
        "Nora",
        "Dann hake vorerst nur diese beiden Schritte ab.",
        "يبقى دلوقتي علم على الخطوتين دول بس."
      ],
      [
        "Sami",
        "Jetzt lese ich vor. Zeigst du jeweils auf das passende Bild?",
        "هقرا دلوقتي بصوت. تشاوري كل مرة على الصورة المناسبة؟"
      ],
      [
        "Nora",
        "Ja. Danach kannst du den letzten Punkt abhaken.",
        "أيوه. بعد كده تقدر تعلم على آخر نقطة."
      ],
      [
        "Sami",
        "Gut. Eine Rechnung oder eine Schachpartie gehört nicht zu dieser Übung.",
        "تمام. مافيش عملية حساب أو جيم شطرنج ضمن التدريب ده."
      ]
    ],
    "q": [
      [
        "Was fehlt anfangs noch?",
        "Das Vorlesen.",
        "Das Aufschreiben der Namen.",
        "Das Ansehen der Bilder."
      ],
      [
        "Was soll Nora beim Vorlesen tun?",
        "Auf das passende Bild zeigen.",
        "Die Bilder verstecken.",
        "Einen neuen Abakus besorgen."
      ],
      [
        "Was gehört nicht zu dieser Übung?",
        "Eine Rechnung oder eine Schachpartie.",
        "Das Notieren der Namen.",
        "Das Zuordnen zu Bildern."
      ]
    ]
  },
  {
    "id": "darstellung-und-gegenstand",
    "level": "B1",
    "title": [
      "Darstellung und Gegenstand",
      "الظهور والحاجة نفسها"
    ],
    "lines": [
      [
        "Karim",
        "Unter dem Sockel habe ich eine zweite Figur gezählt.",
        "عديت تحت القاعدة قطعة تانية."
      ],
      [
        "Julia",
        "Das ist die Spiegelung auf der glänzenden Fläche, kein eigener Gegenstand.",
        "ده الانعكاس على السطح اللامع مش حاجة لوحدها."
      ],
      [
        "Karim",
        "Dann korrigiere ich den Satz. Über Figuren außerhalb des Bildes wissen wir nichts.",
        "يبقى هصلح الجملة. مانعرفش حاجة عن القطع اللي بره الصورة."
      ],
      [
        "Julia",
        "Auch ein Ergebnis der Partie ist damit nicht belegt.",
        "وبرضه نتيجة الجيم مش مثبتة بكده."
      ],
      [
        "Karim",
        "Und beim Abakus fehlt uns die erklärte Stellenwertzuordnung.",
        "ومع عداد الخرز ناقصنا شرح قيمة الخانات."
      ],
      [
        "Julia",
        "Deshalb beschreiben wir Teile und Formen, ohne eine Rechnung zu erfinden.",
        "عشان كده بنوصف الأجزاء والأشكال من غير ما نخترع عملية حساب."
      ],
      [
        "Karim",
        "Unsere Zusammenfassung bleibt eine Sprachübung, keine Spielanalyse.",
        "ملخصنا بيفضل تدريب لغة مش تحليل لعب."
      ]
    ],
    "q": [
      [
        "Was ist die Form unter dem Sockel?",
        "Eine Spiegelung.",
        "Eine sicher belegte zweite Figur.",
        "Ein Teil des Abakus."
      ],
      [
        "Worüber wissen sie nach Karims Korrektur weiterhin nichts?",
        "Über Figuren außerhalb des Bildes.",
        "Über die sichtbare Spiegelung.",
        "Über den notierten Namen Schachfigur."
      ],
      [
        "Was wollen sie beim Abakus nicht erfinden?",
        "Eine Rechnung.",
        "Eine Beschreibung seiner Teile.",
        "Einen Eintrag ins Wortheft."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "nicht-nur-eine-kugel": [
    "Die Kugel ist nur ein Teil davon.",
    "Ja, mit den Stangen und allen Kugeln.",
    "Ich schreibe beide Namen auf und stecke danach das Heft in meine Tasche."
  ],
  "ein-haken-muss-warten": [
    "Vorgelesen hast du noch nicht.",
    "Zeigst du jeweils auf das passende Bild?",
    "Eine Rechnung oder eine Schachpartie gehört nicht zu dieser Übung."
  ],
  "darstellung-und-gegenstand": [
    "Das ist die Spiegelung auf der glänzenden Fläche, kein eigener Gegenstand.",
    "Über Figuren außerhalb des Bildes wissen wir nichts.",
    "Deshalb beschreiben wir Teile und Formen, ohne eine Rechnung zu erfinden."
  ]
});

everydayDialogues.push(...[
  {
    "id": "zwei-woerter-mit-die",
    "level": "A1",
    "title": [
      "Zwei Wörter mit die",
      "كلمتين بنفس أداة التعريف"
    ],
    "lines": [
      [
        "David",
        "Hier sehe ich zwei Rumbakugeln. Wie heißt eine allein?",
        "هنا شايف شخشيختين موسيقى. اسم الواحدة إيه؟"
      ],
      [
        "Inas",
        "Die Rumbakugel. Den Plural schreibst du mit n am Ende.",
        "المفرد بالألماني مؤنث. وفي الجمع تزود حرف إن في الآخر."
      ],
      [
        "David",
        "Und die Schale auf dem blauen Kissen?",
        "والطبق اللي على المخدة الزرقا؟"
      ],
      [
        "Inas",
        "Die Klangschale, im Plural die Klangschalen.",
        "ده الطبق الرنان بالألماني ومع الجمع تزود إن."
      ],
      [
        "David",
        "Dann markiere ich in meinem Heft zweimal den Artikel die.",
        "يبقى هعلم في كراستي مرتين على أداة التعريف المؤنث."
      ],
      [
        "Inas",
        "Gut. Lass die Fotos bitte ohne Markierungen.",
        "تمام. سيب الصور من غير علامات لو سمحت."
      ],
      [
        "David",
        "Ja. Danach kommen sie wieder in die Mappe.",
        "أيوه. وبعد كده هترجع في الملف."
      ]
    ],
    "q": [
      [
        "Wie endet der Plural Rumbakugeln?",
        "Mit n.",
        "Mit s.",
        "Ohne Endung."
      ],
      [
        "Welche Farbe hat das Kissen im Gespräch?",
        "Blau.",
        "Schwarz.",
        "Rot."
      ],
      [
        "Was soll ohne Markierungen bleiben?",
        "Die Fotos.",
        "Davids Wortheft.",
        "Die Artikel im Heft."
      ]
    ]
  },
  {
    "id": "nur-die-musik-leiser",
    "level": "A2",
    "title": [
      "Nur die Musik",
      "الموسيقى بس"
    ],
    "lines": [
      [
        "Sara",
        "Könnt ihr die Musik bitte leiser machen? Ich arbeite gegenüber.",
        "ممكن توطوا الموسيقى لو سمحتوا؟ أنا بشتغل قصادكم."
      ],
      [
        "Ben",
        "Sollen wir die Fotos einpacken und ganz aufhören?",
        "نلم الصور ونوقف خالص؟"
      ],
      [
        "Sara",
        "Nein, ich meine die Musik aus deinem Handy.",
        "لأ، قصدي الموسيقى اللي من موبايلك."
      ],
      [
        "Dalia",
        "Können wir die Wörter weiter leise vorlesen?",
        "نقدر نكمل نقرا الكلمات بصوت واطي؟"
      ],
      [
        "Sara",
        "Ja, das stört mich gerade nicht.",
        "أيوه، ده مش مضايقني دلوقتي."
      ],
      [
        "Ben",
        "Dann stelle ich die Musik ganz aus. Die Mappe bleibt hier.",
        "يبقى هقفل الموسيقى خالص. الملف يفضل هنا."
      ],
      [
        "Dalia",
        "Gut, wir machen mit den beiden Namen weiter.",
        "تمام، نكمل بالاسمين."
      ]
    ],
    "q": [
      [
        "Was meint Sara?",
        "Die Musik aus Bens Handy.",
        "Die Farbe der Fotos.",
        "Das Kissen auf dem Foto."
      ],
      [
        "Was darf jetzt weitergehen?",
        "Das leise Vorlesen der Wörter.",
        "Laute Musik am Handy.",
        "Ein Instrumentenkonzert."
      ],
      [
        "Wo bleibt die Mappe?",
        "Hier bei Ben und Dalia.",
        "Bei Sara am Schreibtisch.",
        "Im Keller."
      ]
    ]
  },
  {
    "id": "das-leere-hoerfeld",
    "level": "B1",
    "title": [
      "Das leere Hörfeld",
      "خانة الصوت الفاضية"
    ],
    "lines": [
      [
        "Omar",
        "Ich wollte einen gehörten Klang neben jedes Foto schreiben.",
        "كنت عايز أكتب صوت سمعته جنب كل صورة."
      ],
      [
        "Lina",
        "Du hast bisher nur Bilddateien geöffnet, keine Tonaufnahme.",
        "إنت لحد دلوقتي فتحت ملفات صور بس مش تسجيل صوت."
      ],
      [
        "Omar",
        "Dann beschreibe ich zuerst Köpfe, Griffe und den Schalenrand.",
        "يبقى أوصف الأول الرؤوس والمقابض وحافة الطبق."
      ],
      [
        "Lina",
        "Die genaue Füllung der Rumbakugeln bleibt dabei unbekannt.",
        "الحشو المحدد للشخشيختين يفضل مش معروف بكده."
      ],
      [
        "Omar",
        "Und das Hörfeld lassen wir bis zur Auswahl einer Aufnahme frei.",
        "ونسيب خانة الصوت فاضية لحد اختيار تسجيل."
      ],
      [
        "Lina",
        "Ja. Leer heißt hier noch nicht bearbeitet, nicht nachweislich still.",
        "أيوه. فاضي هنا معناه لسه ماتعملش مش هادي بشكل مثبت."
      ],
      [
        "Omar",
        "Die beiden Pluralformen üben wir trotzdem schon jetzt.",
        "بس نتدرب على صيغتين الجمع دلوقتي عادي."
      ]
    ],
    "q": [
      [
        "Was hat Omar bisher geöffnet?",
        "Nur Bilddateien.",
        "Eine zugeordnete Tonaufnahme.",
        "Eine fertige Höranalyse."
      ],
      [
        "Was bleibt bei den Rumbakugeln unbekannt?",
        "Die genaue Füllung.",
        "Die sichtbare Form der Köpfe.",
        "Dass Griffe auf dem Foto zu sehen sind."
      ],
      [
        "Was heißt das leere Hörfeld hier?",
        "Noch nicht bearbeitet.",
        "Nachweislich still.",
        "Schon vollständig ausgewertet."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "zwei-woerter-mit-die": [
    "Den Plural schreibst du mit n am Ende.",
    "Und die Schale auf dem blauen Kissen?",
    "Lass die Fotos bitte ohne Markierungen."
  ],
  "nur-die-musik-leiser": [
    "ich meine die Musik aus deinem Handy.",
    "Ja, das stört mich gerade nicht.",
    "Die Mappe bleibt hier."
  ],
  "das-leere-hoerfeld": [
    "Du hast bisher nur Bilddateien geöffnet, keine Tonaufnahme.",
    "Die genaue Füllung der Rumbakugeln bleibt dabei unbekannt.",
    "Leer heißt hier noch nicht bearbeitet, nicht nachweislich still."
  ]
});

everydayDialogues.push(...[
  {
    "id": "eine-karte-fuer-jedes-foto",
    "level": "A1",
    "title": [
      "Eine Karte für jedes Foto",
      "كارت لكل صورة"
    ],
    "lines": [
      [
        "Lukas",
        "Ich habe beide Karten unter dieses Foto gelegt.",
        "حطيت الكارتين تحت الصورة دي."
      ],
      [
        "Hana",
        "Dann fehlt dem Foto mit dem Glas noch ein Name.",
        "يبقى صورة البرطمان لسه ناقصها اسم."
      ],
      [
        "Lukas",
        "Stimmt. Die Karte mit Honiglöffel kommt dorthin.",
        "صح. كارت معلقة العسل يتحط هناك."
      ],
      [
        "Hana",
        "Und hier bleibt der Kochlöffel. Beide Wörter sind maskulin.",
        "وهنا تفضل معلقة الطبخ. الكلمتين بالألماني مذكر."
      ],
      [
        "Lukas",
        "Ändert sich die Wortform im Plural?",
        "شكل الكلمة بيتغير في الجمع؟"
      ],
      [
        "Hana",
        "Nein. Wir schreiben die Kochlöffel und die Honiglöffel.",
        "لأ. بنكتب نفس الشكل مع أداة تعريف الجمع."
      ],
      [
        "Lukas",
        "Gut. Die Karten stecke ich in die kleine Hülle.",
        "تمام. هحط الكارتين في الغلاف الصغير."
      ]
    ],
    "q": [
      [
        "Welchem Foto fehlt noch ein Name?",
        "Dem Foto mit dem Glas.",
        "Dem Foto mit dem großen Kochlöffel.",
        "Einem Foto ohne Gegenstände."
      ],
      [
        "Welches Genus haben beide Wörter?",
        "Maskulinum.",
        "Femininum.",
        "Neutrum."
      ],
      [
        "Was ändert sich bei diesen Pluralformen nicht?",
        "Die Wortform.",
        "Der Artikel.",
        "Die Zahl der gemeinten Gegenstände."
      ]
    ]
  },
  {
    "id": "welche-runde-ist-jetzt",
    "level": "A2",
    "title": [
      "Welche Runde ist jetzt?",
      "إحنا في أنهي جولة دلوقتي؟"
    ],
    "lines": [
      [
        "Rami",
        "Soll ich jetzt schon den Artikel nennen?",
        "أقول أداة التعريف من دلوقتي؟"
      ],
      [
        "Mira",
        "Noch nicht. In der ersten Runde geht es nur um den Namen.",
        "لسه لأ. في الجولة الأولى المطلوب الاسم بس."
      ],
      [
        "Rami",
        "Honiglöffel.",
        "معلقة عسل."
      ],
      [
        "Mira",
        "Richtig. Jetzt beginnt Runde zwei. Bitte mit Artikel.",
        "صح. دلوقتي الجولة التانية بتبدأ. بأداة التعريف لو سمحت."
      ],
      [
        "Rami",
        "Das Honiglöffel?",
        "أداة التعريف المحايد مع معلقة عسل؟"
      ],
      [
        "Mira",
        "Der Honiglöffel. Den Namen hattest du schon richtig.",
        "أداة التعريف المذكر. الاسم كنت قايله صح أصلًا."
      ],
      [
        "Rami",
        "Dann wiederhole ich später nur die Artikel.",
        "يبقى أكرر أدوات التعريف بس بعدين."
      ]
    ],
    "q": [
      [
        "Worum geht es in der ersten Runde?",
        "Nur um den Namen.",
        "Nur um einen Preis.",
        "Um ein Rezept."
      ],
      [
        "Was korrigiert Mira?",
        "Den Artikel beim Honiglöffel.",
        "Den schon richtigen Namen.",
        "Die Farbe des Fotos."
      ],
      [
        "Was möchte Rami später wiederholen?",
        "Nur die Artikel.",
        "Ein Kochrezept.",
        "Eine Einkaufsliste."
      ]
    ]
  },
  {
    "id": "keine-grammzahl-aus-dem-foto",
    "level": "B1",
    "title": [
      "Keine Grammzahl aus dem Foto",
      "مافيش عدد جرامات من الصورة"
    ],
    "lines": [
      [
        "Selma",
        "Ich habe eine genaue Portion Honig notiert. Das war zu bestimmt.",
        "كتبت مقدار معلقة عسل بالظبط. ده كان تحديد زيادة."
      ],
      [
        "Jonas",
        "Wir sehen weder den Anfang noch das Ende des Vorgangs.",
        "إحنا مش شايفين لا بداية العملية ولا نهايتها."
      ],
      [
        "Selma",
        "Also beschreibe ich den gerillten Kopf und den Faden über dem Glas.",
        "يبقى أوصف الراس المحززة والخيط فوق البرطمان."
      ],
      [
        "Jonas",
        "Genau. Der Name allein ist keine genormte Mengenangabe.",
        "بالظبط. الاسم لوحده مش قياس كمية بمعيار محدد."
      ],
      [
        "Selma",
        "Beim anderen Foto zähle ich auch nicht jede Form als Kochlöffel.",
        "وفي الصورة التانية مش هعد كل شكل معلقة طبخ برضه."
      ],
      [
        "Jonas",
        "Die Gabelzinken helfen uns, die Formen zu unterscheiden.",
        "سنون الشوكة بتساعدنا نفرق بين الأشكال."
      ],
      [
        "Selma",
        "Die Wortübung ist damit genauer, aber noch keine Materialprüfung.",
        "كده تدريب الكلمات أدق بس لسه مش فحص خامة."
      ]
    ],
    "q": [
      [
        "Was sehen beide nicht?",
        "Den Anfang und das Ende des Vorgangs.",
        "Den sichtbaren Faden.",
        "Den gerillten Kopf."
      ],
      [
        "Was ist der Name allein nicht?",
        "Eine genormte Mengenangabe.",
        "Eine Bezeichnung im Wortheft.",
        "Ein Wort mit Artikel."
      ],
      [
        "Was hilft beim Unterscheiden der Formen?",
        "Die Gabelzinken.",
        "Eine Grammzahl auf dem Foto.",
        "Ein Materialzertifikat."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "eine-karte-fuer-jedes-foto": [
    "Dann fehlt dem Foto mit dem Glas noch ein Name.",
    "Beide Wörter sind maskulin.",
    "Nein. Wir schreiben die Kochlöffel und die Honiglöffel."
  ],
  "welche-runde-ist-jetzt": [
    "In der ersten Runde geht es nur um den Namen.",
    "Der Honiglöffel. Den Namen hattest du schon richtig.",
    "Dann wiederhole ich später nur die Artikel."
  ],
  "keine-grammzahl-aus-dem-foto": [
    "Wir sehen weder den Anfang noch das Ende des Vorgangs.",
    "Der Name allein ist keine genormte Mengenangabe.",
    "Die Gabelzinken helfen uns, die Formen zu unterscheiden."
  ]
});

everydayDialogues.push(...[
  {
    "id": "welchen-punkt-meinst-du",
    "level": "A1",
    "title": [
      "Welchen Punkt meinst du?",
      "تقصد أنهي نقطة؟"
    ],
    "lines": [
      [
        "Paul",
        "Wie heißt das hier?",
        "اللي هنا ده اسمه إيه؟"
      ],
      [
        "Amina",
        "Meinst du die ganze Pinnwand?",
        "تقصد لوحة الدبابيس كلها؟"
      ],
      [
        "Paul",
        "Nein, den kleinen Punkt am runden weißen Zettel.",
        "لأ، النقطة الصغيرة عند الورقة البيضا المدورة."
      ],
      [
        "Amina",
        "Für das neue Wort zeige ich dir dieses andere Foto: die Reißzwecke.",
        "عشان الكلمة الجديدة هوريك الصورة التانية دي: دبوس الرسم."
      ],
      [
        "Paul",
        "Danke. Und der Plural heißt Reißzwecken?",
        "شكرًا. والجمع بالألماني بيزود إن؟"
      ],
      [
        "Amina",
        "Ja. Bei Pinnwand heißt er Pinnwände, mit ä.",
        "أيوه. واسم اللوحة جمعه بالألماني فيه آي أوملاوت."
      ],
      [
        "Paul",
        "Dann decken wir die Wörter ab und ich probiere es allein.",
        "يبقى نغطي الكلمات وأجرب لوحدي."
      ]
    ],
    "q": [
      [
        "Worauf zeigt Paul?",
        "Auf den kleinen Punkt am runden weißen Zettel.",
        "Auf die ganze Pinnwand.",
        "Auf eine grüne Pflanze."
      ],
      [
        "Welches Foto zeigt Amina für das neue Wort?",
        "Das Foto der einzelnen Reißzwecke.",
        "Ein Foto von einem Fahrrad.",
        "Ein Foto von einer Uhr."
      ],
      [
        "Welcher Plural enthält ä?",
        "Pinnwände.",
        "Reißzwecken.",
        "Zettel."
      ]
    ]
  },
  {
    "id": "geschrieben-aber-noch-nicht-gelesen",
    "level": "A2",
    "title": [
      "Geschrieben, aber noch nicht gelesen",
      "اتكتب بس لسه ماتقراش"
    ],
    "lines": [
      [
        "Sami",
        "Habt ihr für Samstag schon alles vereinbart?",
        "اتفقتوا على كل حاجة للسبت خلاص؟"
      ],
      [
        "Nora",
        "Mein Vorschlag hängt an der Pinnwand. Aber Eva hat ihn noch nicht gelesen.",
        "اقتراحي على لوحة الدبابيس. بس إيفا لسه ماقرتوش."
      ],
      [
        "Sami",
        "Dann ist das noch keine gemeinsame Zusage.",
        "يبقى ده لسه مش موافقة منكم مع بعض."
      ],
      [
        "Nora",
        "Stimmt. Die Pinnwand steht ja nur in meinem Zimmer.",
        "صح. اللوحة أصلًا في أوضتي أنا بس."
      ],
      [
        "Sami",
        "Zeig ihr zuerst die Frage und warte auf ihre Antwort.",
        "وريها السؤال الأول واستني ردها."
      ],
      [
        "Nora",
        "Bis dahin lasse ich das Kalenderfeld frei.",
        "لحد وقتها هسيب خانة التقويم فاضية."
      ],
      [
        "Sami",
        "Genau. Ein fertiger Zettel ist noch kein vereinbarter Termin.",
        "بالظبط. الورقة الجاهزة لسه مش ميعاد متفق عليه."
      ]
    ],
    "q": [
      [
        "Was hat Eva noch nicht getan?",
        "Den Vorschlag gelesen.",
        "Die neue Uhrzeit eingetragen.",
        "Den Bruder angerufen."
      ],
      [
        "Wo steht Noras Pinnwand?",
        "Nur in Noras Zimmer.",
        "In der gemeinsamen Küche.",
        "Im Garten."
      ],
      [
        "Was bleibt bis zur Antwort frei?",
        "Das Kalenderfeld.",
        "Die ganze Küchenschublade.",
        "Die Schachtel mit Reißzwecken."
      ]
    ]
  },
  {
    "id": "die-farbe-reicht-nicht",
    "level": "B1",
    "title": [
      "Die Farbe reicht nicht",
      "اللون مش كفاية"
    ],
    "lines": [
      [
        "Karim",
        "Ich habe Grün als erledigt und Weiß als offen gelesen.",
        "فهمت الأخضر خلص والأبيض لسه مفتوح."
      ],
      [
        "Julia",
        "Dafür fehlt uns auf diesem Foto eine Legende.",
        "ناقصنا في الصورة دي مفتاح يشرح المعنى ده."
      ],
      [
        "Karim",
        "Dann nenne ich nur Farben und Formen.",
        "يبقى أقول الألوان والأشكال بس."
      ],
      [
        "Julia",
        "Und die Hand zeigt keinen vollständigen Ablauf.",
        "والإيد مش بتبين تسلسل كامل."
      ],
      [
        "Karim",
        "Das Nahfoto der Reißzwecke hat auch keinen gemeinsamen Maßstab mit der Pinnwand.",
        "وبرضه صورة الدبوس القريبة مالهاش مقياس مشترك مع اللوحة."
      ],
      [
        "Julia",
        "Genau. Es sind zwei getrennte Wortbeispiele.",
        "بالظبط. هما مثالين كلمات منفصلين."
      ],
      [
        "Karim",
        "Dann ist unser Heft kein Aufgabenplan für die Person im Bild.",
        "يبقى كراستنا مش خطة مهام للشخص اللي في الصورة."
      ]
    ],
    "q": [
      [
        "Was fehlt für Karims Farbdeutung?",
        "Eine Legende.",
        "Ein grüner Zettel.",
        "Ein weißer Zettel."
      ],
      [
        "Was zeigt die Hand nicht?",
        "Einen vollständigen Ablauf.",
        "Eine sichtbare Haltung.",
        "Eine Verbindung zum Blatt."
      ],
      [
        "Wie behandeln beide die Fotos für das Wortheft?",
        "Als zwei getrennte Wortbeispiele.",
        "Als geprüfte Bilder derselben Reißzwecke.",
        "Als gemeinsamen maßstabsgetreuen Bauplan."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "welchen-punkt-meinst-du": [
    "den kleinen Punkt am runden weißen Zettel.",
    "dieses andere Foto: die Reißzwecke.",
    "Bei Pinnwand heißt er Pinnwände, mit ä."
  ],
  "geschrieben-aber-noch-nicht-gelesen": [
    "Eva hat ihn noch nicht gelesen.",
    "Die Pinnwand steht ja nur in meinem Zimmer.",
    "Bis dahin lasse ich das Kalenderfeld frei."
  ],
  "die-farbe-reicht-nicht": [
    "Dafür fehlt uns auf diesem Foto eine Legende.",
    "die Hand zeigt keinen vollständigen Ablauf.",
    "Es sind zwei getrennte Wortbeispiele."
  ]
});

everydayDialogues.push(...[
  {
    "id": "wohin-kommt-die-karte",
    "level": "A1",
    "title": [
      "Wohin kommt die Karte?",
      "الكارت ييجي فين؟"
    ],
    "lines": [
      [
        "Rana",
        "Lies bitte zuerst die Karte mit Glockenspiel.",
        "اقرا الأول الكارت اللي عليه اسم الجلوكنشبيل."
      ],
      [
        "Tim",
        "Die kommt zum bunten Instrument mit den Metallplatten.",
        "دي تيجي عند الآلة الملونة اللي فيها شرائح معدن."
      ],
      [
        "Rana",
        "Und welcher Artikel gehört dazu?",
        "وأداة التعريف اللي معاها إيه؟"
      ],
      [
        "Tim",
        "Das. Bei Cabasa heißt es die.",
        "داس. ومع كاباسا تبقى دي."
      ],
      [
        "Rana",
        "Schau auch auf die beiden Pluralformen.",
        "بص كمان على صيغتين الجمع."
      ],
      [
        "Tim",
        "Glockenspiele mit e am Ende und Cabasas mit s.",
        "جمع الجلوكنشبيل بإي في الآخر وجمع الكاباسا بإس."
      ],
      [
        "Rana",
        "Gut. Jetzt mische ich die Karten noch einmal.",
        "تمام. دلوقتي هلخبط الكروت تاني."
      ]
    ],
    "q": [
      [
        "Welches Bild bekommt die erste Karte?",
        "Das bunte Instrument mit Metallplatten.",
        "Das Bild mit einem Fahrrad.",
        "Das Foto mit dem Meer."
      ],
      [
        "Welchen Artikel nennt Tim für Cabasa?",
        "Die.",
        "Das.",
        "Der."
      ],
      [
        "Was macht Rana am Ende?",
        "Sie mischt die Karten noch einmal.",
        "Sie hängt die Fotos auf.",
        "Sie schreibt ein Lied."
      ]
    ]
  },
  {
    "id": "warte-bis-ich-frage",
    "level": "A2",
    "title": [
      "Warte, bis ich frage",
      "استنى لحد ما أسأل"
    ],
    "lines": [
      [
        "Dina",
        "Ich kenne den Namen. Beim Artikel überlege ich noch.",
        "أنا عارفة الاسم. لسه بفكر في أداة التعريف."
      ],
      [
        "Alex",
        "Das! Oh, ich habe zu früh geholfen.",
        "داس! آه أنا ساعدت بدري."
      ],
      [
        "Dina",
        "Ich wollte es erst selbst versuchen.",
        "كنت عايزة أجرب بنفسي الأول."
      ],
      [
        "Alex",
        "Sollen wir deshalb die ganze Runde neu starten?",
        "نبدأ الجولة كلها من جديد بسبب كده؟"
      ],
      [
        "Dina",
        "Nein. Nur diese Karte kommt zur Wiederholung.",
        "لأ. الكارت ده بس يروح للمراجعة."
      ],
      [
        "Alex",
        "Und beim nächsten Mal warte ich auf deine Frage.",
        "والمرة الجاية هستنى سؤالك."
      ],
      [
        "Dina",
        "Genau. Eine kurze Pause ist noch keine Bitte um Hilfe.",
        "بالظبط. الوقفة الصغيرة لسه مش طلب مساعدة."
      ]
    ],
    "q": [
      [
        "Wobei überlegt Dina noch?",
        "Beim Artikel.",
        "Beim Namen ihrer Freundin.",
        "Bei der Uhrzeit des Konzerts."
      ],
      [
        "Was kommt zur Wiederholung?",
        "Nur die betroffene Karte.",
        "Alle früheren richtigen Karten.",
        "Die ganze Musikschule."
      ],
      [
        "Worauf will Alex beim nächsten Mal warten?",
        "Auf Dinas Frage.",
        "Auf ein Signal vom Instrument.",
        "Auf einen Anruf."
      ]
    ]
  },
  {
    "id": "welche-schwierigkeit-meinst-du",
    "level": "B1",
    "title": [
      "Welche Schwierigkeit meinst du?",
      "تقصد أنهي صعوبة؟"
    ],
    "lines": [
      [
        "Ben",
        "Unsere Überschrift Schwierigkeit der Instrumente stimmt so nicht.",
        "عنواننا صعوبة الآلات مش مظبوط بالشكل ده."
      ],
      [
        "Leila",
        "Richtig. Wir haben nur die Namen den Fotos zugeordnet.",
        "صح. إحنا وصلنا الأسامي بالصور بس."
      ],
      [
        "Ben",
        "Und ich kannte Cabasa schon vorher.",
        "وأنا كنت عارف اسم الكاباسا من قبل كده."
      ],
      [
        "Leila",
        "Dann schreiben wir persönliche Schwierigkeit beim Erinnern dazu.",
        "يبقى نكتب معاها الصعوبة الشخصية في الافتكار."
      ],
      [
        "Ben",
        "Außerdem notiere ich, ob ich einen Hinweis gebraucht habe.",
        "وكمان هكتب إذا كنت احتجت تلميح."
      ],
      [
        "Leila",
        "Das ist genauer, aber noch kein Maßstab für alle.",
        "ده أدق بس لسه مش مقياس للكل."
      ],
      [
        "Ben",
        "Und daraus wird keine Empfehlung zum Instrumentenkauf.",
        "ومش هيطلع منه توصية بشراء آلة."
      ]
    ],
    "q": [
      [
        "Was haben beide tatsächlich gemacht?",
        "Namen den Fotos zugeordnet.",
        "Beide Instrumente gekauft.",
        "Einen Klangvergleich aufgezeichnet."
      ],
      [
        "Welche Vorerfahrung nennt Ben?",
        "Er kannte Cabasa schon vorher.",
        "Er hatte das Glockenspiel selbst gebaut.",
        "Er kannte alle Lernenden."
      ],
      [
        "Wofür gilt die Notiz nicht als Maßstab?",
        "Für alle Lernenden.",
        "Für ihre eigene beschriebene Runde.",
        "Für den vermerkten Hinweisbedarf."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "wohin-kommt-die-karte": [
    "zum bunten Instrument mit den Metallplatten.",
    "Bei Cabasa heißt es die.",
    "Jetzt mische ich die Karten noch einmal."
  ],
  "warte-bis-ich-frage": [
    "Beim Artikel überlege ich noch.",
    "Nur diese Karte kommt zur Wiederholung.",
    "warte ich auf deine Frage."
  ],
  "welche-schwierigkeit-meinst-du": [
    "nur die Namen den Fotos zugeordnet.",
    "ich kannte Cabasa schon vorher.",
    "aber noch kein Maßstab für alle."
  ]
});

everydayDialogues.push(...[
  {
    "id": "kueche-oder-bad",
    "level": "A1",
    "title": [
      "Küche oder Bad?",
      "مطبخ ولا حمام؟"
    ],
    "lines": [
      [
        "Yara",
        "Zu welcher Überschrift gehört das Foto mit dem Pizzaschneider?",
        "صورة قطاعة البيتزا تخص أنهي عنوان؟"
      ],
      [
        "Leon",
        "Zur Küche. Das andere Foto kommt zum Bad.",
        "المطبخ. الصورة التانية تيجي عند الحمام."
      ],
      [
        "Yara",
        "Lies jetzt bitte die beiden Namen mit Artikel.",
        "اقرا دلوقتي الاسمين بأداة التعريف."
      ],
      [
        "Leon",
        "Der Pizzaschneider und der Duschkopf.",
        "دير بيتساشنايدر ودير دوشكوبف."
      ],
      [
        "Yara",
        "Und die Pluralformen?",
        "وصيغ الجمع؟"
      ],
      [
        "Leon",
        "Die Pizzaschneider und die Duschköpfe. Das ö markiere ich.",
        "دي بيتساشنايدر ودي دوشكوبفه. هعلم على الأو أوملاوت."
      ],
      [
        "Yara",
        "Danach üben wir noch einmal ohne die Überschriften.",
        "بعد كده نتدرب تاني من غير العناوين."
      ]
    ],
    "q": [
      [
        "Wohin kommt das andere Foto?",
        "Zum Bad.",
        "Zum Bahnhof.",
        "In eine Schublade."
      ],
      [
        "Welchen Artikel haben beide Namen im Singular hier?",
        "Der.",
        "Die.",
        "Das."
      ],
      [
        "Was wollen sie danach weglassen?",
        "Die Überschriften.",
        "Die Pluralformen für immer.",
        "Alle Fotos und Wörter."
      ]
    ]
  },
  {
    "id": "nur-die-nummern-tauschen",
    "level": "A2",
    "title": [
      "Nur die Nummern tauschen",
      "نبدل الأرقام بس"
    ],
    "lines": [
      [
        "David",
        "Der Satz mit den Fliesen steht beim falschen Bild.",
        "جملة البلاط عند الصورة الغلط."
      ],
      [
        "Mona",
        "Dann prüfen wir zuerst die Bildnummern.",
        "يبقى نراجع الأول أرقام الصور."
      ],
      [
        "David",
        "Sollen wir auch die Wörter ändern?",
        "نغير الكلمات كمان؟"
      ],
      [
        "Mona",
        "Nein, die stimmen. Nur die Zuordnung ist vertauscht.",
        "لأ دي صح. التوصيل بس متبدل."
      ],
      [
        "David",
        "Gut, ich tausche die beiden Nummern aus.",
        "تمام. هبدل الرقمين."
      ],
      [
        "Mona",
        "Danach vergleichen wir jeden Satz mit seinem Foto.",
        "بعد كده نقارن كل جملة بصورتها."
      ],
      [
        "David",
        "Und erst dann gebe ich die aktuelle Fassung weiter.",
        "وبعدها بس أبعت النسخة الحالية."
      ]
    ],
    "q": [
      [
        "Was prüfen sie zuerst?",
        "Die Bildnummern.",
        "Die Gruppengröße.",
        "Den Preis der Gegenstände."
      ],
      [
        "Warum ändern sie die Wörter nicht?",
        "Die Wörter stimmen bereits.",
        "Sie können kein Deutsch lesen.",
        "Die Fotos wurden gelöscht."
      ],
      [
        "Wann gibt David die Notiz weiter?",
        "Erst nach dem Vergleich.",
        "Vor jeder Prüfung.",
        "Gar nicht, die Gruppe existiert nicht."
      ]
    ]
  },
  {
    "id": "wo-ist-der-test",
    "level": "B1",
    "title": [
      "Wo ist der Test?",
      "الاختبار فين؟"
    ],
    "lines": [
      [
        "Hannah",
        "Worauf stützt du schneidet mühelos?",
        "بتستند لإيه في بتقطع بسهولة؟"
      ],
      [
        "Farid",
        "Nur auf den Kontakt zwischen Rad und Teig. Das reicht nicht.",
        "على ملامسة العجلة للعجين بس. ده مش كفاية."
      ],
      [
        "Hannah",
        "Und für spart Wasser fehlt uns eine Messung.",
        "وبالنسبة لبتوفر مية ناقصنا قياس."
      ],
      [
        "Farid",
        "Dann beschreibe ich nur, was ich im Bild erkenne.",
        "يبقى أوصف اللي شايفه في الصورة بس."
      ],
      [
        "Hannah",
        "Ohne Wasserstrahl ist auch kein Defekt nachgewiesen.",
        "ومن غير اندفاع مية برضه مش مثبت إن فيه عطل."
      ],
      [
        "Farid",
        "Benennung, Beschreibung und Funktionsnachweis bleiben getrennt.",
        "التسمية والوصف وإثبات الوظيفة يفضلوا منفصلين."
      ],
      [
        "Hannah",
        "Genau. Wir geben hier keine technische Kaufempfehlung.",
        "بالظبط. إحنا هنا مش بندي توصية شراء فنية."
      ]
    ],
    "q": [
      [
        "Reicht Farids erster Eindruck als Test?",
        "Nein.",
        "Ja, er ersetzt jede Messung.",
        "Ja, wenn das Foto farbig ist."
      ],
      [
        "Was fehlt für die Wassersparaussage?",
        "Eine Messung.",
        "Eine Küchenüberschrift.",
        "Ein Teigstück."
      ],
      [
        "Was geben beide ausdrücklich nicht?",
        "Eine technische Kaufempfehlung.",
        "Eine begrenzte Bildbeschreibung.",
        "Deutsche Namen für die Wortübung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "kueche-oder-bad": [
    "Das andere Foto kommt zum Bad.",
    "Der Pizzaschneider und der Duschkopf.",
    "ohne die Überschriften."
  ],
  "nur-die-nummern-tauschen": [
    "zuerst die Bildnummern.",
    "Nein, die stimmen.",
    "erst dann gebe ich die aktuelle Fassung weiter."
  ],
  "wo-ist-der-test": [
    "Das reicht nicht.",
    "für spart Wasser fehlt uns eine Messung.",
    "keine technische Kaufempfehlung."
  ]
});

everydayDialogues.push(...[
  {
    "id": "das-zweite-e",
    "level": "A1",
    "title": [
      "Da fehlt ein e",
      "ناقص حرف إي"
    ],
    "lines": [
      [
        "Finn",
        "Ist Heidelbere so richtig geschrieben?",
        "هايدلبيره بحرف إي واحد في الجزء الأخير صح كده؟"
      ],
      [
        "Salma",
        "Fast. In Beere stehen zwei e nebeneinander.",
        "قربت. في جزء بيره فيه حرفين إي جنب بعض."
      ],
      [
        "Finn",
        "Danke, ich ergänze das zweite e.",
        "شكرًا. هكمل حرف الإي التاني."
      ],
      [
        "Salma",
        "Lies auch die Mehrzahl.",
        "اقرا الجمع كمان."
      ],
      [
        "Finn",
        "Die Heidelbeeren. Am Ende steht ein n.",
        "دي هايدلبيرن. في الآخر حرف إن."
      ],
      [
        "Salma",
        "Bei Himbeeren ist das genauso.",
        "في هيمبيرن الموضوع زيه."
      ],
      [
        "Finn",
        "Jetzt decke ich die Namen ab. Die Fotos bleiben sichtbar.",
        "دلوقتي هغطي الأسامي. الصور تفضل باينة."
      ]
    ],
    "q": [
      [
        "Was fehlt zuerst?",
        "Das zweite e in Beere.",
        "Der ganze Artikel der.",
        "Der Name Salma."
      ],
      [
        "Wie lautet die Mehrzahl von Heidelbeere?",
        "Heidelbeeren.",
        "Heidelbeeres.",
        "Heidelbeerer."
      ],
      [
        "Was deckt Finn ab?",
        "Die Namen.",
        "Die Fotos.",
        "Den Tisch."
      ]
    ]
  },
  {
    "id": "das-fragezeichen-bleibt",
    "level": "A2",
    "title": [
      "Das Fragezeichen bleibt",
      "علامة الاستفهام تفضل"
    ],
    "lines": [
      [
        "Jana",
        "Soll ich Himbeeren im Rezept jetzt streichen?",
        "أشطب توت العليق من الوصفة دلوقتي؟"
      ],
      [
        "Nils",
        "Noch nicht. Heidelbeeren am Rand war nur mein Vorschlag.",
        "لسه لأ. توت أزرق على الهامش كان اقتراحي بس."
      ],
      [
        "Jana",
        "Dann frage ich die beiden anderen zuerst.",
        "يبقى أسأل الاتنين التانيين الأول."
      ],
      [
        "Nils",
        "Haben wir dafür einen gemeinsamen Chat?",
        "عندنا شات مشترك عشان كده؟"
      ],
      [
        "Jana",
        "Nein, ich werde ihnen später einzeln schreiben.",
        "لأ هبعت لكل واحد لوحده بعدين."
      ],
      [
        "Nils",
        "Dann lasse ich das Fragezeichen stehen.",
        "يبقى أسيب علامة الاستفهام."
      ],
      [
        "Jana",
        "Genau. Die Nachricht ist noch nicht verschickt und die Änderung nicht beschlossen.",
        "بالظبط. الرسالة لسه ماتبعتتش والتغيير لسه ماتقررش."
      ]
    ],
    "q": [
      [
        "Warum soll Jana das Wort noch nicht streichen?",
        "Die Änderung ist noch nicht beschlossen.",
        "Das Rezept wurde schon gekocht.",
        "Niemand kann die Notiz lesen."
      ],
      [
        "Wie will Jana später fragen?",
        "Einzeln per Nachricht.",
        "Über einen schon vorhandenen gemeinsamen Chat.",
        "Gar nicht."
      ],
      [
        "Was lässt Nils stehen?",
        "Das Fragezeichen.",
        "Eine bestätigte Bestellung.",
        "Die Zahl der gekauften Packungen."
      ]
    ]
  },
  {
    "id": "namen-oder-fruechte-zaehlen",
    "level": "B1",
    "title": [
      "Was zählt unsere Liste?",
      "قايمتنا بتعد إيه؟"
    ],
    "lines": [
      [
        "Oskar",
        "Zählst du Blaubeere jetzt als eine weitere Frucht?",
        "هتعدي بلاوبيره دلوقتي كفاكهة زيادة؟"
      ],
      [
        "Rima",
        "Nein. Hier ist es ein alternativer Name zu Heidelbeere.",
        "لأ. هنا ده اسم بديل لهايدلبيره."
      ],
      [
        "Oskar",
        "Dann gehören beide Namen in denselben Eintrag?",
        "يبقى الاسمين يخصوا نفس المدخل؟"
      ],
      [
        "Rima",
        "Für unsere Liste ja. Wir zählen nach Bedeutung, nicht nach Schreibweise.",
        "لقايمتنا أيوه. بنعد حسب المعنى مش حسب شكل الكتابة."
      ],
      [
        "Oskar",
        "Und Himbeere bleibt getrennt?",
        "وهيمبيره تفضل منفصلة؟"
      ],
      [
        "Rima",
        "Ja. Der gemeinsame Teil Beere allein bedeutet nicht, dass die Wörter Synonyme sind.",
        "أيوه. الجزء المشترك بيره لوحده مش معناه إن الكلمات مرادفات."
      ],
      [
        "Oskar",
        "Schreib die Zählregel bitte über die Tabelle. Dann ist unsere Entscheidung verständlich.",
        "اكتبي قاعدة العد فوق الجدول. كده قرارنا يبقى مفهوم."
      ]
    ],
    "q": [
      [
        "Was ist Blaubeere hier?",
        "Ein alternativer Name zu Heidelbeere.",
        "Die Mehrzahl von Himbeere.",
        "Der Name eines Fotoservices."
      ],
      [
        "Wonach zählt diese Liste?",
        "Nach Bedeutung.",
        "Nur nach Wortlänge.",
        "Nach den Farben der Buchstaben."
      ],
      [
        "Was soll Rima über die Tabelle schreiben?",
        "Die Zählregel.",
        "Einen Qualitätsnachweis.",
        "Eine Einkaufsempfehlung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "das-zweite-e": [
    "ich ergänze das zweite e.",
    "Die Heidelbeeren.",
    "Jetzt decke ich die Namen ab."
  ],
  "das-fragezeichen-bleibt": [
    "Heidelbeeren am Rand war nur mein Vorschlag.",
    "ich werde ihnen später einzeln schreiben.",
    "Dann lasse ich das Fragezeichen stehen."
  ],
  "namen-oder-fruechte-zaehlen": [
    "Hier ist es ein alternativer Name zu Heidelbeere.",
    "Wir zählen nach Bedeutung, nicht nach Schreibweise.",
    "Schreib die Zählregel bitte über die Tabelle."
  ]
});

everydayDialogues.push(...[
  {
    "id": "das-foto-bleibt-links",
    "level": "A1",
    "title": [
      "Das Foto bleibt links",
      "الصورة تفضل على الشمال"
    ],
    "lines": [
      [
        "Tom",
        "Soll das Foto mit den Artischocken links bleiben?",
        "صورة الخرشوف تفضل على الشمال؟"
      ],
      [
        "Dalia",
        "Ja. Die Kohlrabis liegen auf unserem Blatt rechts daneben.",
        "أيوه. الكرنب أبو ركبة على ورقتنا على يمينها."
      ],
      [
        "Tom",
        "Dann kommen die Wortkarten darunter.",
        "يبقى كروت الكلمات تيجي تحتهم."
      ],
      [
        "Dalia",
        "Jetzt nehme ich die Karten kurz weg. Sag die Namen.",
        "دلوقتي هشيل الكروت شوية. قول الأسامي."
      ],
      [
        "Tom",
        "Die Artischocke. Beim anderen Wort brauche ich noch Hilfe.",
        "دي أرتيشوكه. محتاج مساعدة لسه في الكلمة التانية."
      ],
      [
        "Dalia",
        "Hier steht der Kohlrabi.",
        "مكتوب هنا دير كولرابي."
      ],
      [
        "Tom",
        "Danke. Danach kommen die Karten in den Umschlag.",
        "شكرًا. بعد كده الكروت تيجي في الظرف."
      ]
    ],
    "q": [
      [
        "Was bleibt links?",
        "Das Foto mit den Artischocken.",
        "Der Umschlag.",
        "Toms Tasche."
      ],
      [
        "Was nimmt Dalia kurz weg?",
        "Die Wortkarten.",
        "Beide Stühle.",
        "Das große Blatt."
      ],
      [
        "Welchen Artikel liest Dalia mit Kohlrabi?",
        "Der.",
        "Die.",
        "Das."
      ]
    ]
  },
  {
    "id": "erst-der-name",
    "level": "A2",
    "title": [
      "Erst der Name",
      "الاسم الأول"
    ],
    "lines": [
      [
        "Elif",
        "Kann ich mit einer kleineren Aufgabe anfangen?",
        "ممكن أبدأ بمهمة أصغر؟"
      ],
      [
        "Jonas",
        "Wir können zuerst nur den Namen mit Artikel sagen.",
        "ممكن نقول الأول الاسم بالأداة بس."
      ],
      [
        "Elif",
        "Danach mache ich einen Satz zur Position.",
        "بعد كده أعمل جملة عن المكان."
      ],
      [
        "Jonas",
        "Ich schreibe die Reihenfolge auf, aber keine fertigen Sätze.",
        "هكتب ترتيب الخطوات بس مش جمل جاهزة."
      ],
      [
        "Elif",
        "Gut. Beim zweiten Foto möchte ich es allein versuchen.",
        "تمام. في الصورة التانية عايزة أجرب لوحدي."
      ],
      [
        "Jonas",
        "Dann lege ich die Karte daneben und sage nichts vor.",
        "يبقى أحط الكارت جنبها ومش ألقنك."
      ],
      [
        "Elif",
        "Danke. Warte bitte, bis ich meinen Satz beendet habe.",
        "شكرًا. استنى من فضلك لحد ما أخلص جملتي."
      ]
    ],
    "q": [
      [
        "Was wollen sie zuerst sagen?",
        "Den Namen mit Artikel.",
        "Eine vollständige Einkaufsliste.",
        "Die endgültige Note."
      ],
      [
        "Was schreibt Jonas nicht auf?",
        "Fertige Sätze.",
        "Die Reihenfolge.",
        "Den ersten Schritt."
      ],
      [
        "Wie soll Jonas beim zweiten Foto helfen?",
        "Warten und nichts vorsagen.",
        "Sofort jeden Satz beenden.",
        "Die Aufgabe ganz streichen."
      ]
    ]
  },
  {
    "id": "groesser-als-im-bild",
    "level": "B1",
    "title": [
      "Größer als im Bild?",
      "أكبر في الصورة؟"
    ],
    "lines": [
      [
        "Nora",
        "Worauf bezieht sich dein größer genau?",
        "أكبر عندك بتشير لإيه بالظبط؟"
      ],
      [
        "Malek",
        "Ich habe nur den Platz im Foto verglichen.",
        "أنا قارنت المساحة في الصورة بس."
      ],
      [
        "Nora",
        "Dann wissen wir noch nichts über die wirklichen Größen. Ein gemeinsamer Maßstab fehlt.",
        "يبقى لسه مانعرفش حاجة عن الحجم الحقيقي. مفيش مقياس مشترك."
      ],
      [
        "Malek",
        "Und für schwerer habe ich gar keine Messung.",
        "وبالنسبة لأتقل أنا معنديش أي قياس."
      ],
      [
        "Nora",
        "Beschreiben wir lieber den sichtbaren Teller und die grünen Stiele.",
        "نوصف أحسن الطبق الظاهر والسيقان الخضرا."
      ],
      [
        "Malek",
        "Die Farbe gilt dabei nur für diesen Bildeindruck, nicht für jeden Kohlrabi.",
        "واللون يخص الانطباع ده في الصورة بس مش كل كرنب أبو ركبة."
      ],
      [
        "Nora",
        "Genau. Wir bewerten hier auch nicht die Frische.",
        "بالظبط. وكمان مش بنقيم الطزاجة هنا."
      ]
    ],
    "q": [
      [
        "Was hat Malek zunächst verglichen?",
        "Den Platz im Foto.",
        "Zwei gemessene Gewichte.",
        "Die Einkaufspreise."
      ],
      [
        "Was fehlt für schwerer?",
        "Eine Messung.",
        "Eine Wortkarte.",
        "Eine zweite Meinung zum Artikel."
      ],
      [
        "Was wollen sie nicht bewerten?",
        "Die Frische.",
        "Den sichtbaren Bildinhalt.",
        "Die Formulierung ihrer Sätze."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "das-foto-bleibt-links": [
    "das Foto mit den Artischocken links bleiben?",
    "Jetzt nehme ich die Karten kurz weg.",
    "Hier steht der Kohlrabi."
  ],
  "erst-der-name": [
    "zuerst nur den Namen mit Artikel sagen.",
    "aber keine fertigen Sätze.",
    "und sage nichts vor."
  ],
  "groesser-als-im-bild": [
    "den Platz im Foto verglichen.",
    "gar keine Messung.",
    "Wir bewerten hier auch nicht die Frische."
  ]
});

everydayDialogues.push(...[
  {
    "id": "die-punkte-fehlen",
    "level": "A1",
    "title": [
      "Die Punkte fehlen",
      "النقط ناقصة"
    ],
    "lines": [
      [
        "Lina",
        "Lies bitte die Mehrzahl von Drachenfrucht.",
        "اقرا جمع دراخنفروخت من فضلك."
      ],
      [
        "Erik",
        "Die Drachenfrüchte. Ich habe die Punkte beim Schreiben vergessen.",
        "دي دراخنفروخته. نسيت النقط وأنا بكتب."
      ],
      [
        "Lina",
        "Schau auf die Vorlage und ergänze sie selbst.",
        "بص على النموذج وكملهم بنفسك."
      ],
      [
        "Erik",
        "Jetzt steht hier ein ü. Und am Ende ein e.",
        "دلوقتي مكتوب هنا أو أوملاوت وفي الآخر إي."
      ],
      [
        "Lina",
        "Genau. Wie ist es bei Passionsfrucht?",
        "بالظبط. وعند باسيونسفروخت؟"
      ],
      [
        "Erik",
        "Die Passionsfrüchte. Der letzte Wortteil ändert sich genauso.",
        "دي باسيونسفروخته. آخر جزء من الكلمة بيتغير بنفس الطريقة."
      ],
      [
        "Lina",
        "Dann lesen wir beide Formen noch einmal.",
        "يبقى نقرا الصيغتين تاني."
      ]
    ],
    "q": [
      [
        "Was hat Erik vergessen?",
        "Die Punkte über dem u.",
        "Das gesamte zweite Wort.",
        "Den Namen des Kurses."
      ],
      [
        "Wer ergänzt die Punkte?",
        "Erik selbst.",
        "Lina ohne Erik.",
        "Niemand."
      ],
      [
        "Was wollen sie danach noch einmal tun?",
        "Die Formen lesen.",
        "Die Früchte kaufen.",
        "Den Geschmack vergleichen."
      ]
    ]
  },
  {
    "id": "wer-handelt-im-text",
    "level": "A2",
    "title": [
      "Wer handelt im Text?",
      "مين اللي بيعمل الفعل في النص؟"
    ],
    "lines": [
      [
        "Paul",
        "Hast du die Drachenfrucht heute wirklich selbst geöffnet?",
        "إنتي فعلًا فتحتي فاكهة التنين بنفسك النهارده؟"
      ],
      [
        "Amira",
        "Nein, ich habe nur den Übungstext in einer Rolle nacherzählt.",
        "لأ. أنا حكيت نص التدريب تاني وأنا متقمصة دور بس."
      ],
      [
        "Paul",
        "Dann nenne die Vorlage am besten gleich am Anfang.",
        "يبقى الأفضل تقولي النموذج من أول الكلام."
      ],
      [
        "Amira",
        "Gut. Im Übungstext öffnet eine Person eine Drachenfrucht.",
        "تمام. في نص التدريب شخص بيفتح فاكهة تنين."
      ],
      [
        "Paul",
        "So ist klar, dass du nicht deinen eigenen Morgen beschreibst.",
        "كده واضح إنك مش بتوصفي صباحك الشخصي."
      ],
      [
        "Amira",
        "Und beim zweiten Text sagst du die Quelle auch zuerst?",
        "وفي النص التاني هتقول المصدر الأول برضه؟"
      ],
      [
        "Paul",
        "Ja. Ich gebe einen Übungstext über eine Passionsfrucht wieder.",
        "أيوه. أنا بنقل نص تدريب عن باشن فروت."
      ]
    ],
    "q": [
      [
        "Hat Amira selbst eine Frucht geöffnet?",
        "Nein, sie hat einen Text nacherzählt.",
        "Ja, heute im Kurs.",
        "Ja, für Pauls Frühstück."
      ],
      [
        "Was soll sie gleich am Anfang nennen?",
        "Die Vorlage.",
        "Eine erfundene Uhrzeit.",
        "Den Kaufpreis."
      ],
      [
        "Worüber gibt Paul einen Text wieder?",
        "Über eine Passionsfrucht.",
        "Über einen Flug.",
        "Über einen neuen Kühlschrank."
      ]
    ]
  },
  {
    "id": "das-war-die-andere-geschichte",
    "level": "B1",
    "title": [
      "Das war die andere Geschichte",
      "دي كانت الحكاية التانية"
    ],
    "lines": [
      [
        "Vera",
        "Woher weißt du, dass die Früchte für ein gemeinsames Frühstück waren?",
        "عرفت منين إن الفاكهة كانت لفطار مشترك؟"
      ],
      [
        "Samir",
        "Jetzt merke ich: Das Frühstück kam in der anderen Geschichte vor.",
        "دلوقتي واخد بالي: الفطار كان في الحكاية التانية."
      ],
      [
        "Vera",
        "Dann ist es für diese Bilder noch nicht belegt.",
        "يبقى ده لسه مش مثبت للصور دي."
      ],
      [
        "Samir",
        "Ich habe beides in meiner Erinnerung verbunden.",
        "أنا وصلت الاتنين ببعض في ذاكرتي."
      ],
      [
        "Vera",
        "Prüfen wir jede Aussage mit ihrer Quelle.",
        "نراجع كل جملة مع مصدرها."
      ],
      [
        "Samir",
        "Den Frühstückssatz streiche ich aus der Bildbeschreibung.",
        "هشطب جملة الفطار من وصف الصورة."
      ],
      [
        "Vera",
        "Und die sichtbaren Merkmale bleiben bildbezogen, ohne neue Geschichte dazu.",
        "والملامح الظاهرة تفضل مرتبطة بالصورة من غير حكاية جديدة معاها."
      ]
    ],
    "q": [
      [
        "Wo kam das Frühstück vor?",
        "In der anderen Geschichte.",
        "Auf einem lesbaren Preisschild.",
        "In Veras eigener Küche."
      ],
      [
        "Was wollen sie prüfen?",
        "Jede Aussage mit ihrer Quelle.",
        "Nur die Länge der Wörter.",
        "Die Gesundheit der Früchte."
      ],
      [
        "Was streicht Samir?",
        "Den Frühstückssatz aus der Bildbeschreibung.",
        "Alle sichtbaren Merkmale.",
        "Die Quellenangabe der Übung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "die-punkte-fehlen": [
    "die Punkte beim Schreiben vergessen.",
    "ergänze sie selbst.",
    "lesen wir beide Formen noch einmal."
  ],
  "wer-handelt-im-text": [
    "nur den Übungstext in einer Rolle nacherzählt.",
    "die Vorlage am besten gleich am Anfang.",
    "einen Übungstext über eine Passionsfrucht wieder."
  ],
  "das-war-die-andere-geschichte": [
    "in der anderen Geschichte vor.",
    "jede Aussage mit ihrer Quelle.",
    "Den Frühstückssatz streiche ich aus der Bildbeschreibung."
  ]
});

everydayDialogues.push(...[
  {
    "id": "das-banjo-nicht-der",
    "level": "A1",
    "title": [
      "Das Banjo",
      "داس بانجو"
    ],
    "lines": [
      [
        "Jan",
        "Wie heißt das Instrument mit dem runden Körper?",
        "اسم الآلة اللي جسمها مدور إيه؟"
      ],
      [
        "Huda",
        "Der Banjo. Moment, ich schaue noch einmal auf die Karte.",
        "دير بانجو. لحظة أبص على الكارت تاني."
      ],
      [
        "Jan",
        "Ich warte.",
        "هستنى."
      ],
      [
        "Huda",
        "Hier steht das Banjo. Das verbessere ich.",
        "مكتوب هنا داس بانجو. هصلح دي."
      ],
      [
        "Jan",
        "Und die Mehrzahl?",
        "والجمع؟"
      ],
      [
        "Huda",
        "Die Banjos. Kalimba bekommt auch ein s: die Kalimbas.",
        "دي بانجوس. كاليمبا كمان بتاخد إس: دي كاليمباس."
      ],
      [
        "Jan",
        "Gut. Jetzt zeige ich dir nur noch die Fotos.",
        "تمام. دلوقتي هوريكي الصور بس."
      ]
    ],
    "q": [
      [
        "Worauf schaut Huda noch einmal?",
        "Auf die Karte.",
        "Auf eine Rechnung.",
        "Auf die Uhr am Bahnhof."
      ],
      [
        "Wie lautet der Artikel von Banjo hier?",
        "Das.",
        "Der.",
        "Die."
      ],
      [
        "Was zeigt Jan danach nur noch?",
        "Die Fotos.",
        "Die Lösungen im Buch.",
        "Eine Preisliste."
      ]
    ]
  },
  {
    "id": "lass-mich-aussprechen",
    "level": "A2",
    "title": [
      "Lass mich bitte aussprechen",
      "سيبني أكمل من فضلك"
    ],
    "lines": [
      [
        "Fatma",
        "Lass mich bitte erst den Satz beenden.",
        "سيبني أخلص الجملة الأول من فضلك."
      ],
      [
        "Ben",
        "Gut. Danach nenne ich dir eine Stelle, bei der ich sicher bin.",
        "تمام. بعدها أقولك على جزء أنا متأكد منه."
      ],
      [
        "Fatma",
        "Frag bitte zuerst, ob ich sie noch einmal hören möchte.",
        "اسأل الأول من فضلك إذا حابة أسمعه تاني."
      ],
      [
        "Ben",
        "Einverstanden. Ich schreibe mir das Wort nur kurz auf.",
        "موافق. هكتب الكلمة عندي بسرعة بس."
      ],
      [
        "Fatma",
        "Bei deiner Beschreibung mache ich es genauso.",
        "في وصفك هعمل نفس الكلام."
      ],
      [
        "Ben",
        "Und wenn du dir bei einer Form nicht sicher bist?",
        "ولو مش متأكدة من صيغة؟"
      ],
      [
        "Fatma",
        "Dann sage ich das und wir fragen die Lehrerin später.",
        "يبقى أقول ده ونسأل المدرسة بعدين."
      ]
    ],
    "q": [
      [
        "Wann soll Ben korrigieren?",
        "Nach dem Satz und nach Rückfrage.",
        "Sofort mitten im Satz.",
        "Gar nicht, auch auf Wunsch nicht."
      ],
      [
        "Was notiert sich Ben?",
        "Das Wort.",
        "Eine Konzertkarte.",
        "Fatmas gesamte Beschreibung als eigene Arbeit."
      ],
      [
        "Was tun sie bei Unsicherheit?",
        "Später die Lehrerin fragen.",
        "Sicherheit vortäuschen.",
        "Jede Frage löschen."
      ]
    ]
  },
  {
    "id": "gehoert-der-ton-zum-foto",
    "level": "B1",
    "title": [
      "Gehört der Ton zum Foto?",
      "النغمة تخص الصورة؟"
    ],
    "lines": [
      [
        "Max",
        "Kannst du aus einem kurzen Ton sicher das Instrument nennen?",
        "تقدري من نغمة قصيرة تسمي الآلة بثقة؟"
      ],
      [
        "Leila",
        "Zuerst müsste ich wissen, ob die Aufnahme zu einem dieser Fotos gehört.",
        "الأول لازم أعرف إذا التسجيل يخص واحدة من الصور دي."
      ],
      [
        "Max",
        "Das haben wir in der erfundenen Aufgabe nicht angegeben.",
        "إحنا ماذكرناش ده في المهمة المتخيلة."
      ],
      [
        "Leila",
        "Dann kann ich nur einen Eindruck vorsichtig beschreiben.",
        "يبقى أقدر بس أوصف انطباع بحذر."
      ],
      [
        "Max",
        "Und die Fotos zeigen zunächst nur den sichtbaren Bau.",
        "والصور مبدئيًا بتبين التركيب الظاهر بس."
      ],
      [
        "Leila",
        "Genau. Ohne belegte Klangquelle bleibt die Zuordnung offen.",
        "بالظبط. من غير مصدر صوت مثبت الربط يفضل مفتوح."
      ],
      [
        "Max",
        "Unsere Vorlesefunktion spricht dabei nur die deutschen Sätze.",
        "وخاصية القراية عندنا هنا بتنطق الجمل الألماني بس."
      ]
    ],
    "q": [
      [
        "Was muss Leila zuerst wissen?",
        "Ob die Aufnahme zu einem der Fotos gehört.",
        "Den Preis beider Instrumente.",
        "Den Namen des Ladens."
      ],
      [
        "Was bleibt ohne belegte Klangquelle offen?",
        "Die Zuordnung.",
        "Dass es einen Dialog gibt.",
        "Die Schreibweise von Max."
      ],
      [
        "Was spricht die Vorlesefunktion?",
        "Die deutschen Sätze.",
        "Ein echtes Kalimbastück.",
        "Den Klang eines Banjoakkords."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "das-banjo-nicht-der": [
    "ich schaue noch einmal auf die Karte.",
    "Hier steht das Banjo.",
    "nur noch die Fotos."
  ],
  "lass-mich-aussprechen": [
    "erst den Satz beenden.",
    "Ich schreibe mir das Wort nur kurz auf.",
    "wir fragen die Lehrerin später."
  ],
  "gehoert-der-ton-zum-foto": [
    "ob die Aufnahme zu einem dieser Fotos gehört.",
    "bleibt die Zuordnung offen.",
    "nur die deutschen Sätze."
  ]
});

everydayDialogues.push(...[
  {
    "id": "nicht-unter-dem-tisch",
    "level": "A1",
    "title": [
      "Nicht unter dem Tisch",
      "مش تحت الترابيزة"
    ],
    "lines": [
      [
        "Dalia",
        "Ich suche das Springseil. Liegt es unter dem Tisch?",
        "بدور على حبل النط. هو تحت الترابيزة؟"
      ],
      [
        "Oskar",
        "Nein, dort stehen nur zwei Taschen. Schau in den Korb neben der Tür.",
        "لأ، هناك شنطتين بس. بصي في السلة جنب الباب."
      ],
      [
        "Dalia",
        "Hier ist es. Es hat zwei schwarze Griffe.",
        "أهو. ليه مسكتين سودا."
      ],
      [
        "Oskar",
        "Und das Schachbrett liegt noch auf dem großen Tisch.",
        "ورقعة الشطرنج لسه على الترابيزة الكبيرة."
      ],
      [
        "Dalia",
        "Ich lege die Wortkarte vor das Brett.",
        "هحط كارت الكلمة قدام الرقعة."
      ],
      [
        "Oskar",
        "Wir spielen heute nicht, wir üben nur die Namen.",
        "النهارده مش هنلعب، هنتدرب على الأسامي بس."
      ],
      [
        "Dalia",
        "Danach lege ich das Seil wieder in den Korb.",
        "بعد كده هرجع الحبل السلة."
      ]
    ],
    "q": [
      [
        "Wo soll Dalia nachsehen?",
        "Im Korb neben der Tür.",
        "Im Kühlschrank.",
        "Auf dem Dach."
      ],
      [
        "Wohin legt sie die Wortkarte?",
        "Vor das Brett.",
        "Unter den Korb.",
        "In eine fremde Tasche."
      ],
      [
        "Was üben sie heute?",
        "Die Namen.",
        "Einen Sprung.",
        "Einen Schachzug."
      ]
    ]
  },
  {
    "id": "brauchst-du-das-brett-noch",
    "level": "A2",
    "title": [
      "Brauchst du das Brett noch?",
      "لسه محتاجة الرقعة؟"
    ],
    "lines": [
      [
        "Jonas",
        "Ich möchte aufräumen. Brauchst du das Brett noch?",
        "عايز أرتب. لسه محتاجة الرقعة؟"
      ],
      [
        "Hanan",
        "Ja, bitte lass es mit diesen beiden Karten noch hier liegen.",
        "أيوه، سيبها مع الكارتين دول هنا شوية من فضلك."
      ],
      [
        "Jonas",
        "Kann das Springseil schon in den Korb zurück?",
        "حبل النط ينفع يرجع السلة خلاص؟"
      ],
      [
        "Hanan",
        "Ja. Das brauche ich für meine Beschreibung nicht.",
        "أيوه. مش محتاجاه في وصفي."
      ],
      [
        "Jonas",
        "Also nur das Seil zurück, das Brett und zwei Karten bleiben. Richtig?",
        "يعني الحبل بس يرجع والرقعة وكارتين يفضلوا. صح؟"
      ],
      [
        "Hanan",
        "Genau. Ich sage dir Bescheid, wenn ich fertig bin.",
        "بالظبط. هقولك لما أخلص."
      ],
      [
        "Jonas",
        "Dann räumen wir den Rest später gemeinsam weg.",
        "يبقى نرجع الباقي بعدين مع بعض."
      ]
    ],
    "q": [
      [
        "Was soll noch liegen bleiben?",
        "Das Brett mit zwei Karten.",
        "Nur das Seil.",
        "Eine volle Einkaufstasche."
      ],
      [
        "Warum braucht Hanan das Seil nicht mehr?",
        "Es gehört nicht zu ihrer Beschreibung.",
        "Es ist sicher kaputt.",
        "Jonas hat ein neues gekauft."
      ],
      [
        "Wann räumen sie den Rest weg?",
        "Später gemeinsam nach Hanans Nachricht.",
        "Ohne Rückfrage während ihrer Arbeit.",
        "Nie mehr."
      ]
    ]
  },
  {
    "id": "beschreibung-oder-erzaehlung",
    "level": "B1",
    "title": [
      "Beschreibung oder Erzählung?",
      "وصف ولا حكاية؟"
    ],
    "lines": [
      [
        "Ella",
        "Du schreibst anschließend. Woher kennst du die Reihenfolge?",
        "إنت كاتب بعد كده. عرفت الترتيب منين؟"
      ],
      [
        "Karim",
        "Die kenne ich nicht. Ich habe aus den Fotos eine Geschichte gemacht.",
        "مش عارفه. أنا عملت من الصور حكاية."
      ],
      [
        "Ella",
        "Für den ersten Auftrag brauchen wir nur die sichtbare Anordnung.",
        "للمهمة الأولى محتاجين الترتيب الظاهر بس."
      ],
      [
        "Karim",
        "Die Geschichte schreibe ich dann in den ausdrücklich erlaubten Zusatzteil.",
        "يبقى أكتب الحكاية في الجزء الإضافي المسموح به بوضوح."
      ],
      [
        "Ella",
        "Mit einer Überschrift, damit die Grenze sichtbar wird.",
        "بعنوان عشان الحد يبقى واضح."
      ],
      [
        "Karim",
        "Dort ist die Reihenfolge meine Entscheidung, kein Bildbeleg.",
        "هناك الترتيب قراري أنا مش دليل من الصورة."
      ],
      [
        "Ella",
        "Und was tatsächlich vorher passiert ist, bleibt ohne weitere Angaben offen.",
        "واللي حصل فعلًا قبل كده يفضل مفتوح من غير معلومات زيادة."
      ]
    ],
    "q": [
      [
        "Was kennt Karim nicht?",
        "Die tatsächliche zeitliche Reihenfolge.",
        "Dass er einen Text geschrieben hat.",
        "Den Unterschied zwischen zwei Überschriften."
      ],
      [
        "Was hilft, die Grenze zu zeigen?",
        "Eine Überschrift für den Zusatzteil.",
        "Ein erfundener Quellenstempel.",
        "Das Löschen aller sichtbaren Details."
      ],
      [
        "Was ist die Reihenfolge im erfundenen Zusatzteil?",
        "Eine Entscheidung des Autors.",
        "Ein bewiesener Ablauf im Bildmaterial.",
        "Eine verbindliche Trainingsanweisung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "nicht-unter-dem-tisch": [
    "Schau in den Korb neben der Tür.",
    "Ich lege die Wortkarte vor das Brett.",
    "wir üben nur die Namen."
  ],
  "brauchst-du-das-brett-noch": [
    "das Brett und zwei Karten bleiben.",
    "Das brauche ich für meine Beschreibung nicht.",
    "den Rest später gemeinsam weg."
  ],
  "beschreibung-oder-erzaehlung": [
    "Die kenne ich nicht.",
    "Mit einer Überschrift, damit die Grenze sichtbar wird.",
    "meine Entscheidung, kein Bildbeleg."
  ]
});

everydayDialogues.push(...[
  {
    "id": "die-matte-auf-diesem-foto",
    "level": "A1",
    "title": [
      "Die Matte auf diesem Foto",
      "المفرش اللي في الصورة دي"
    ],
    "lines": [
      [
        "Leo",
        "Was siehst du auf dem ersten Foto?",
        "شايفة إيه في الصورة الأولى؟"
      ],
      [
        "Amina",
        "Eine Yogamatte. Sie ist hier blau und teilweise aufgerollt.",
        "مفرش يوجا. لونه هنا أزرق وجزء منه ملفوف."
      ],
      [
        "Leo",
        "Und auf dem zweiten Foto?",
        "وفي الصورة التانية؟"
      ],
      [
        "Amina",
        "Eine rote Billardkugel mit der Zahl 3.",
        "كورة بلياردو حمرا عليها رقم 3."
      ],
      [
        "Leo",
        "Wie heißt die Mehrzahl von Billardkugel?",
        "جمع بلياردكوجل إيه؟"
      ],
      [
        "Amina",
        "Die Billardkugeln. Yogamatte bekommt auch ein n: die Yogamatten.",
        "دي بلياردكوجلن. يوجاماتّه كمان بتاخد نون: دي يوجاماتّن."
      ],
      [
        "Leo",
        "Jetzt decke ich die Namen ab und du fragst mich.",
        "دلوقتي هغطي الأسامي وإنتي تسأليني."
      ]
    ],
    "q": [
      [
        "Wie sieht Amina die Matte hier?",
        "Blau und teilweise aufgerollt.",
        "Rot und aus Glas.",
        "Unsichtbar hinter einer Tür."
      ],
      [
        "Wie lautet die Mehrzahl von Billardkugel?",
        "Die Billardkugeln.",
        "Die Billardkugels.",
        "Die Billardkügel."
      ],
      [
        "Was macht Leo am Ende?",
        "Er deckt die Namen ab.",
        "Er kauft eine Matte.",
        "Er spielt eine Partie."
      ]
    ]
  },
  {
    "id": "kannst-du-ein-beispiel-nennen",
    "level": "A2",
    "title": [
      "Kannst du ein Beispiel nennen?",
      "ممكن تقولي مثال؟"
    ],
    "lines": [
      [
        "Nora",
        "Deine Beschreibung ist gut.",
        "وصفك كويس."
      ],
      [
        "Elias",
        "Danke. Kannst du mir ein konkretes Beispiel nennen?",
        "شكرًا. ممكن تقولي مثال محدد؟"
      ],
      [
        "Nora",
        "Du hast die beiden Fotos klar getrennt. Im Vordergrund zeigt genau, welche Kugel du meinst.",
        "إنت فصلت الصورتين بوضوح. في المقدمة بتوضح بالظبط تقصد أنهي كورة."
      ],
      [
        "Elias",
        "Das markiere ich mir. Gibt es eine Stelle zum Überarbeiten?",
        "هعلم على دي عندي. فيه جزء يتعدل؟"
      ],
      [
        "Nora",
        "Im letzten Satz stecken zwei Gedanken. Du könntest sie in zwei Sätze teilen.",
        "آخر جملة فيها فكرتين. ممكن تقسمهم على جملتين."
      ],
      [
        "Elias",
        "Ich probiere das und lese die neue Fassung vor.",
        "هجرب ده وأقرا النسخة الجديدة."
      ],
      [
        "Nora",
        "Dann vergleichen wir nur diese Stelle, nicht dein ganzes Sprachniveau.",
        "يبقى نقارن الجزء ده بس مش مستواك في اللغة كله."
      ]
    ],
    "q": [
      [
        "Worum bittet Elias nach dem Lob?",
        "Um ein konkretes Beispiel.",
        "Um eine Rechnung.",
        "Um einen Trainingsplan."
      ],
      [
        "Was schlägt Nora für den letzten Satz vor?",
        "Die beiden Gedanken auf zwei Sätze zu verteilen.",
        "Alle Wörter zu löschen.",
        "Nur die Farbe zu ändern."
      ],
      [
        "Was wollen sie vergleichen?",
        "Nur die überarbeitete Stelle.",
        "Das ganze Sprachniveau aller Lernenden.",
        "Die Preise zweier Matten."
      ]
    ]
  },
  {
    "id": "bildgroesse-oder-echte-masse",
    "level": "B1",
    "title": [
      "Bildgröße oder echte Maße?",
      "حجم الصورة ولا المقاسات الحقيقية؟"
    ],
    "lines": [
      [
        "Dana",
        "Die Kugel wirkt im Bild groß. Kann ich daraus ihre echte Größe ableiten?",
        "الكورة باينة كبيرة في الصورة. أقدر أستنتج من ده حجمها الحقيقي؟"
      ],
      [
        "Robin",
        "Nicht ohne einen verlässlichen Maßstab oder konkrete Maße.",
        "مش من غير مقياس موثوق أو مقاسات محددة."
      ],
      [
        "Dana",
        "Und eine Gewichtsreihenfolge kann ich hier auch nicht belegen.",
        "وكمان مش هقدر أثبت هنا ترتيب حسب الوزن."
      ],
      [
        "Robin",
        "Genau. Das beweist aber nicht, dass beide gleich schwer sind.",
        "بالظبط. بس ده مش بيثبت إن الاتنين نفس الوزن."
      ],
      [
        "Dana",
        "Ich beschreibe deshalb die sichtbaren Farben und Formen auf diesen Fotos.",
        "عشان كده هوصف الألوان والأشكال الظاهرة في الصور دي."
      ],
      [
        "Robin",
        "Und du benennst, welche Angaben für den Größenvergleich fehlen.",
        "وتذكري إيه المعلومات الناقصة لمقارنة الحجم."
      ],
      [
        "Dana",
        "Die tatsächlichen Relationen bleiben ohne diese Angaben offen.",
        "العلاقات الحقيقية تفضل مفتوحة من غير المعلومات دي."
      ]
    ],
    "q": [
      [
        "Was fehlt für die echte Größe?",
        "Ein verlässlicher Maßstab oder konkrete Maße.",
        "Ein längerer Name.",
        "Eine andere Überschrift."
      ],
      [
        "Was beweist die fehlende Gewichtsreihenfolge nicht?",
        "Dass beide gleich schwer sind.",
        "Dass eine Relation ungeklärt bleibt.",
        "Dass Dana keine Waage benutzt."
      ],
      [
        "Was beschreibt Dana stattdessen?",
        "Sichtbare Farben und Formen auf diesen Fotos.",
        "Eine erfundene Materialanalyse.",
        "Eine gemessene Länge."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "die-matte-auf-diesem-foto": [
    "Sie ist hier blau und teilweise aufgerollt.",
    "Die Billardkugeln.",
    "Jetzt decke ich die Namen ab"
  ],
  "kannst-du-ein-beispiel-nennen": [
    "ein konkretes Beispiel nennen?",
    "in zwei Sätze teilen.",
    "nur diese Stelle, nicht dein ganzes Sprachniveau."
  ],
  "bildgroesse-oder-echte-masse": [
    "Maßstab oder konkrete Maße.",
    "nicht, dass beide gleich schwer sind.",
    "die sichtbaren Farben und Formen auf diesen Fotos."
  ]
});

everydayDialogues.push(...[
  {
    "id": "welches-bild-zeigt-drei",
    "level": "A1",
    "title": [
      "Welches Bild zeigt drei?",
      "أنهي صورة فيها تلاتة؟"
    ],
    "lines": [
      [
        "Tim",
        "Auf diesem Bild sehe ich drei Federbälle.",
        "في الصورة دي شايف تلات كور ريشة."
      ],
      [
        "Yara",
        "Und auf dem anderen steht ein rosa Sparschwein.",
        "وفي التانية فيه حصالة وردي على شكل خنزير."
      ],
      [
        "Tim",
        "Der mittlere Federball steht auf dem Kopf.",
        "كورة الريشة اللي في النص واقفة على راسها."
      ],
      [
        "Yara",
        "Wie lautet die Mehrzahl von Federball?",
        "جمع فيدربال إيه؟"
      ],
      [
        "Tim",
        "Die Federbälle, mit ä.",
        "دي فيدربيلّه بالأيه بنقطتين."
      ],
      [
        "Yara",
        "Richtig. Bei Sparschwein heißt es die Sparschweine.",
        "صح. ومع شبارشفاين بتبقى دي شبارشفاينه."
      ],
      [
        "Tim",
        "Jetzt decken wir die Namen ab und tauschen die Rollen.",
        "دلوقتي نغطي الأسامي ونبدل الأدوار."
      ]
    ],
    "q": [
      [
        "Wie viele Federbälle nennt Tim?",
        "Drei.",
        "Einen.",
        "Zehn."
      ],
      [
        "Welcher Ball steht auf dem Kopf?",
        "Der mittlere.",
        "Nur der linke.",
        "Keiner."
      ],
      [
        "Was tun sie am Ende?",
        "Sie decken die Namen ab und tauschen die Rollen.",
        "Sie zählen Münzen.",
        "Sie kaufen neue Bälle."
      ]
    ]
  },
  {
    "id": "nur-nach-drei",
    "level": "A2",
    "title": [
      "Nur das Wort nach drei",
      "الكلمة اللي بعد تلاتة بس"
    ],
    "lines": [
      [
        "Jonas",
        "Kannst du das bitte noch einmal vorlesen?",
        "ممكن تقري ده تاني؟"
      ],
      [
        "Mara",
        "Gern. Ich beginne wieder beim ersten Satz.",
        "حاضر. هبدأ تاني من أول جملة."
      ],
      [
        "Jonas",
        "Entschuldige, nur das Wort nach drei war unklar.",
        "معلش الكلمة اللي بعد تلاتة بس ماكانتش واضحة."
      ],
      [
        "Mara",
        "Federbälle. Ich sage es noch einmal langsamer.",
        "فيدربيلّه. هقولها تاني أبطأ."
      ],
      [
        "Jonas",
        "Federbälle. Hat die Mehrzahl ein ä?",
        "فيدربيلّه. الجمع فيه أيه بنقطتين؟"
      ],
      [
        "Mara",
        "Ja, hier steht es. Den Rest soll ich normal weiterlesen?",
        "أيوه أهي مكتوبة هنا. أكمل الباقي عادي؟"
      ],
      [
        "Jonas",
        "Ja, den ersten Satz habe ich verstanden.",
        "أيوه أنا فهمت أول جملة."
      ]
    ],
    "q": [
      [
        "Welches Wort braucht Jonas noch einmal?",
        "Federbälle.",
        "Sparschwein.",
        "Zimmer."
      ],
      [
        "Wie sagt Mara das Wort erneut?",
        "Langsamer.",
        "Nur schriftlich ohne zu sprechen.",
        "Mit einem anderen Plural."
      ],
      [
        "Was hat Jonas bereits verstanden?",
        "Den ersten Satz.",
        "Gar nichts.",
        "Eine Preisliste."
      ]
    ]
  },
  {
    "id": "was-zeigt-die-anordnung",
    "level": "B1",
    "title": [
      "Was zeigt die Anordnung?",
      "الترتيب بيبين إيه؟"
    ],
    "lines": [
      [
        "Leonie",
        "Der mittlere Federball steht auf dem Kopf. Ist das eine Empfehlung zur Aufbewahrung?",
        "كورة الريشة اللي في النص واقفة على راسها. دي توصية للتخزين؟"
      ],
      [
        "Karim",
        "Das Foto zeigt eine Position, aber keine belegte Empfehlung.",
        "الصورة بتبين وضع بس مش توصية مثبتة."
      ],
      [
        "Leonie",
        "Dann lasse ich die erfundene Begründung weg.",
        "يبقى أشيل السبب اللي من تأليفي."
      ],
      [
        "Karim",
        "Beim Sparschwein sehen wir auch nicht, wie viele Münzen darin liegen.",
        "وعند الحصالة مش شايفين كام عملة جواها برضه."
      ],
      [
        "Leonie",
        "Wir können weder den Inhalt noch die besitzende Person bestimmen.",
        "مانقدرش نحدد المحتوى ولا صاحب الحاجة."
      ],
      [
        "Karim",
        "Eine Vermutung kann trotzdem stimmen, nur beweist dieses Foto sie nicht.",
        "تخمين ممكن برضه يكون صح بس الصورة دي مش بتثبته."
      ],
      [
        "Leonie",
        "Ich beschreibe deshalb nur die sichtbaren Merkmale und die offenen Fragen.",
        "عشان كده هوصف الصفات الظاهرة والأسئلة المفتوحة بس."
      ]
    ],
    "q": [
      [
        "Was belegt das Foto nicht?",
        "Eine Empfehlung zur Aufbewahrung.",
        "Die Position des mittleren Balls.",
        "Die sichtbare Farbe."
      ],
      [
        "Was bleibt beim Sparschwein unbekannt?",
        "Der Inhalt und wem es gehört.",
        "Dass es rosa erscheint.",
        "Dass es einen sichtbaren Schlitz hat."
      ],
      [
        "Was sagt Karim über eine Vermutung?",
        "Sie kann stimmen, ohne durch dieses Foto bewiesen zu sein.",
        "Sie ist immer falsch.",
        "Sie muss als Tatsache im Text stehen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "welches-bild-zeigt-drei": [
    "drei Federbälle.",
    "Der mittlere Federball steht auf dem Kopf.",
    "die Namen ab und tauschen die Rollen."
  ],
  "nur-nach-drei": [
    "nur das Wort nach drei war unklar.",
    "Ich sage es noch einmal langsamer.",
    "den ersten Satz habe ich verstanden."
  ],
  "was-zeigt-die-anordnung": [
    "aber keine belegte Empfehlung.",
    "weder den Inhalt noch die besitzende Person bestimmen.",
    "kann trotzdem stimmen, nur beweist dieses Foto sie nicht."
  ]
});

everydayDialogues.push(...[
  {
    "id": "das-teil-oder-der-hintergrund",
    "level": "A1",
    "title": [
      "Das Teil oder der Hintergrund?",
      "القطعة ولا الخلفية؟"
    ],
    "lines": [
      [
        "Emil",
        "Ist das Puzzleteil gelb?",
        "قطعة البازل صفرا؟"
      ],
      [
        "Salma",
        "Nein, es ist weiß. Der Hintergrund ist gelb.",
        "لأ بيضا. الخلفية هي اللي صفرا."
      ],
      [
        "Emil",
        "Und welches Spielzeugauto steht vorne?",
        "وأنهي عربية لعبة قدام؟"
      ],
      [
        "Salma",
        "Das gelbe. Das grüne steht dahinter.",
        "الصفرا. الخضرا وراها."
      ],
      [
        "Emil",
        "Wie heißt die Mehrzahl von Spielzeugauto?",
        "جمع شبيلتسويج أوتو إيه؟"
      ],
      [
        "Salma",
        "Die Spielzeugautos. Bei Puzzleteil heißt es die Puzzleteile.",
        "دي شبيلتسويج أوتوس. ومع بوتسل تايل بتبقى دي بوتسل تايله."
      ],
      [
        "Emil",
        "Dann drehen wir die Karten um und üben ohne Bild.",
        "يبقى نقلب الكروت ونتدرب من غير صورة."
      ]
    ],
    "q": [
      [
        "Welche Farbe hat das Puzzleteil?",
        "Weiß.",
        "Gelb.",
        "Grün."
      ],
      [
        "Welches Auto steht dahinter?",
        "Das grüne.",
        "Das gelbe.",
        "Ein blaues."
      ],
      [
        "Was machen sie am Ende?",
        "Sie üben ohne Bild.",
        "Sie zählen alle Teile eines Puzzles.",
        "Sie kaufen ein Auto."
      ]
    ]
  },
  {
    "id": "verrat-es-noch-nicht",
    "level": "A2",
    "title": [
      "Verrat es noch nicht",
      "ماتقوليش الحل لسه"
    ],
    "lines": [
      [
        "Rania",
        "Soll ich dir das ganze Wort sagen?",
        "أقولك الكلمة كلها؟"
      ],
      [
        "Nils",
        "Noch nicht. Kannst du mir zuerst den Artikel nennen?",
        "لسه لأ. ممكن تقولي الأداة الأول؟"
      ],
      [
        "Rania",
        "Das. Möchtest du einen weiteren Hinweis?",
        "داس. عايز تلميح كمان؟"
      ],
      [
        "Nils",
        "Ja, bitte nur den ersten Teil des Wortes.",
        "أيوه الجزء الأول من الكلمة بس لو سمحتي."
      ],
      [
        "Rania",
        "Puzzle. Den Rest lasse ich offen.",
        "بازل. هسيب الباقي مفتوح."
      ],
      [
        "Nils",
        "Jetzt weiß ich es: das Puzzleteil.",
        "دلوقتي عرفتها: داس بوتسل تايل."
      ],
      [
        "Rania",
        "Genau. Beim nächsten Mal frage ich zuerst, welche Hilfe du möchtest.",
        "بالظبط. المرة الجاية هسأل الأول عايز أنهي مساعدة."
      ]
    ],
    "q": [
      [
        "Was möchte Nils zuerst hören?",
        "Den Artikel.",
        "Die vollständige Lösung.",
        "Eine Kaufempfehlung."
      ],
      [
        "Was lässt Rania offen?",
        "Den Rest nach Puzzle.",
        "Den Artikel nach ihrer Antwort.",
        "Den Namen ihrer Partnerin."
      ],
      [
        "Wie endet die Wortsuche?",
        "Nils nennt das Puzzleteil selbst.",
        "Rania nennt sofort beide Wörter.",
        "Das Wort bleibt unbekannt."
      ]
    ]
  },
  {
    "id": "fehlt-es-wirklich",
    "level": "B1",
    "title": [
      "Fehlt es wirklich?",
      "هي ناقصة فعلًا؟"
    ],
    "lines": [
      [
        "Jasmin",
        "Kann ich schreiben, dass dem Puzzle dieses Teil fehlt?",
        "أقدر أكتب إن البازل ناقصاه القطعة دي؟"
      ],
      [
        "Oskar",
        "Wir kennen das zugehörige Puzzle nicht. Das Foto zeigt nur ein einzelnes Teil.",
        "إحنا مش عارفين البازل اللي هي تبعه. الصورة بتبين قطعة لوحدها بس."
      ],
      [
        "Jasmin",
        "Dann ist weder vollständig noch unvollständig hier belegt.",
        "يبقى لا كامل ولا ناقص مثبتة هنا."
      ],
      [
        "Oskar",
        "Genau. Eine mögliche Herkunft aus einem vollständigen Puzzle beweist dessen Vollständigkeit auch nicht.",
        "بالظبط. احتمال إنها من بازل كامل مش بيثبت اكتماله برضه."
      ],
      [
        "Jasmin",
        "Ich beschreibe die sichtbare Form und lasse den Zusammenhang offen.",
        "هوصف الشكل الظاهر وأسيب العلاقة مفتوحة."
      ],
      [
        "Oskar",
        "Beim Auto ist eine verdeckte Seite ebenfalls nicht automatisch ein fehlendes Bauteil.",
        "وفي العربية برضه جانب متغطي مش تلقائيًا جزء ناقص."
      ],
      [
        "Jasmin",
        "Ich trenne also die Darstellung vom tatsächlichen Zustand.",
        "يبقى أفصل طريقة العرض عن الحالة الحقيقية."
      ]
    ],
    "q": [
      [
        "Was kennen die beiden nicht?",
        "Das zugehörige Puzzle.",
        "Die sichtbare Farbe des Teils.",
        "Den gelben Hintergrund."
      ],
      [
        "Was ist eine verdeckte Autoseite nicht automatisch?",
        "Ein fehlendes Bauteil.",
        "Ein nicht sichtbarer Bereich.",
        "Ein Teil der Darstellung."
      ],
      [
        "Wie ändert Jasmin ihre Beschreibung?",
        "Sie beschreibt die Form und lässt den Zusammenhang offen.",
        "Sie behauptet einen sicheren Verlust.",
        "Sie bestätigt ungeprüft ein vollständiges Puzzle."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "das-teil-oder-der-hintergrund": [
    "es ist weiß.",
    "Das grüne steht dahinter.",
    "üben ohne Bild."
  ],
  "verrat-es-noch-nicht": [
    "zuerst den Artikel nennen?",
    "Den Rest lasse ich offen.",
    "Jetzt weiß ich es: das Puzzleteil."
  ],
  "fehlt-es-wirklich": [
    "Wir kennen das zugehörige Puzzle nicht.",
    "nicht automatisch ein fehlendes Bauteil.",
    "die sichtbare Form und lasse den Zusammenhang offen."
  ]
});

everydayDialogues.push(...[
  {
    "id": "welcher-teil-ist-rosa",
    "level": "A1",
    "title": [
      "Welcher Teil ist rosa?",
      "أنهي جزء وردي؟"
    ],
    "lines": [
      [
        "Bela",
        "Welche Farbe haben die Rollschuhe auf dem Foto?",
        "الجزم اللي بعجل في الصورة لونها إيه؟"
      ],
      [
        "Laila",
        "Die Schuhe sind weiß, die Schnürsenkel rosa und die Rollen rot.",
        "الجزم بيضا والرباط وردي والعجل أحمر."
      ],
      [
        "Bela",
        "Wie heißt die Einzahl?",
        "المفرد إيه؟"
      ],
      [
        "Laila",
        "Der Rollschuh. Die Mehrzahl ist die Rollschuhe.",
        "دير رولشوه. والجمع دي رولشوهه."
      ],
      [
        "Bela",
        "Und bei den Flossen?",
        "وعند الزعانف؟"
      ],
      [
        "Laila",
        "Die Schwimmflosse, die Schwimmflossen. Hier sind sie schwarz und grün.",
        "دي شفيمفلوسّه ودي شفيمفلوسّن. هنا لونهم أسود وأخضر."
      ],
      [
        "Bela",
        "Dann decke ich die Namen ab und frage noch einmal.",
        "يبقى أغطي الأسامي وأسأل تاني."
      ]
    ],
    "q": [
      [
        "Was ist auf dem ersten Foto rosa?",
        "Die Schnürsenkel.",
        "Die Rollen.",
        "Das Wasser."
      ],
      [
        "Welcher Artikel gehört zur Einzahl Rollschuh?",
        "Der.",
        "Die.",
        "Das."
      ],
      [
        "Welche Farben nennt Laila bei den Flossen?",
        "Schwarz und grün.",
        "Rosa und rot.",
        "Nur weiß."
      ]
    ]
  },
  {
    "id": "nur-im-eigenen-heft",
    "level": "A2",
    "title": [
      "Nur im eigenen Heft",
      "في كراستي بس"
    ],
    "lines": [
      [
        "David",
        "Darf ich deinen Beispielsatz in mein Heft schreiben?",
        "ينفع أكتب جملة المثال بتاعتك في كراستي؟"
      ],
      [
        "Sina",
        "Ja, aber bitte ohne meinen Namen.",
        "أيوه بس من غير اسمي لو سمحت."
      ],
      [
        "David",
        "Ich lese die Notiz kurz vor. Fehlt etwas?",
        "هقرا الملحوظة بسرعة. ناقص حاجة؟"
      ],
      [
        "Sina",
        "Hier fehlt ein Wort. Ergänze es bitte.",
        "هنا ناقص كلمة. ضيفها لو سمحت."
      ],
      [
        "David",
        "Erledigt. Darf ich die Notiz später meinem anderen Lernpartner zeigen?",
        "خلصت. ينفع أوري الملحوظة بعدين لشريكي التاني في التعلم؟"
      ],
      [
        "Sina",
        "Heute möchte ich das nicht. Bitte nur in deinem eigenen Heft.",
        "النهارده مش عايزة كده. في كراستك إنت بس لو سمحت."
      ],
      [
        "David",
        "In Ordnung. Ich gebe sie nicht weiter und frage vor einer späteren Weitergabe neu.",
        "ماشي. مش هشاركها وهسأل من جديد قبل أي مشاركة بعدين."
      ]
    ],
    "q": [
      [
        "Was erlaubt Sina zuerst?",
        "Eine Notiz ohne ihren Namen.",
        "Eine öffentliche Aufnahme.",
        "Das Teilen mit allen Lernpartnern."
      ],
      [
        "Was ergänzt David?",
        "Ein fehlendes Wort.",
        "Eine Adresse.",
        "Eine Rechnung."
      ],
      [
        "Wie reagiert er auf die Grenze?",
        "Er gibt die Notiz nicht weiter.",
        "Er verschickt sie trotzdem.",
        "Er veröffentlicht sie ohne Namen."
      ]
    ]
  },
  {
    "id": "keine-freigabe-durch-ein-foto",
    "level": "B1",
    "title": [
      "Keine Freigabe durch ein Foto",
      "الصورة مش تصريح استخدام"
    ],
    "lines": [
      [
        "Luis",
        "Die Gegenstände sehen ordentlich aus. Kann ich sie einsatzbereit nennen?",
        "الحاجات شكلها مرتب. أقدر أقول جاهزة للاستخدام؟"
      ],
      [
        "Farah",
        "Wir haben sie nicht geprüft. Sichtbare Oberflächen reichen für diese Zusage nicht.",
        "إحنا مافحصناهمش. الأسطح الظاهرة مش كفاية للضمان ده."
      ],
      [
        "Luis",
        "Dann beschreibe ich nur Farben, Formen und Positionen.",
        "يبقى أوصف الألوان والأشكال والأماكن بس."
      ],
      [
        "Farah",
        "Und wir behaupten umgekehrt auch keinen Defekt.",
        "وبالعكس مانقولش فيه عطل برضه."
      ],
      [
        "Luis",
        "Der Beckenrand auf dem Foto ist also keine Freigabe.",
        "يبقى طرف حمام السباحة في الصورة مش تصريح استخدام."
      ],
      [
        "Farah",
        "Genau. Für eine Bewertung fehlen zusätzliche Informationen und eine passende Prüfung.",
        "بالظبط. للتقييم ناقص معلومات إضافية وفحص مناسب."
      ],
      [
        "Luis",
        "Unsere Bildbeschreibung ersetzt keine Sicherheitskontrolle.",
        "وصف الصور بتاعنا مش بديل لفحص أمان."
      ]
    ],
    "q": [
      [
        "Was fehlt den beiden?",
        "Eine passende Prüfung.",
        "Jede sichtbare Farbe.",
        "Ein Thema für die Beschreibung."
      ],
      [
        "Welche umgekehrte Behauptung vermeiden sie?",
        "Einen Defekt.",
        "Dass sie keine Prüfung vorgenommen haben.",
        "Dass Positionen beschrieben werden können."
      ],
      [
        "Was ersetzt die Bildbeschreibung nicht?",
        "Eine Sicherheitskontrolle.",
        "Die Benennung sichtbarer Formen.",
        "Einen Satz über Farben."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "welcher-teil-ist-rosa": [
    "die Schnürsenkel rosa",
    "Der Rollschuh.",
    "schwarz und grün."
  ],
  "nur-im-eigenen-heft": [
    "Ja, aber bitte ohne meinen Namen.",
    "Hier fehlt ein Wort.",
    "Ich gebe sie nicht weiter"
  ],
  "keine-freigabe-durch-ein-foto": [
    "Wir haben sie nicht geprüft.",
    "auch keinen Defekt.",
    "ersetzt keine Sicherheitskontrolle."
  ]
});

everydayDialogues.push(...[
  {
    "id": "gehalten-oder-hingelegt",
    "level": "A1",
    "title": [
      "Gehalten oder hingelegt?",
      "ممسوك ولا محطوط؟"
    ],
    "lines": [
      [
        "Nabil",
        "Welche Wortkarte gehört zum ersten Bild?",
        "أنهي كارت كلمة تبع الصورة الأولى؟"
      ],
      [
        "Ida",
        "Die Gartenschere. Auf dem Foto ist sie grün.",
        "مقص الجنينة. في الصورة لونه أخضر."
      ],
      [
        "Nabil",
        "Und die kleine Schaufel auf dem Holz?",
        "والجاروف الصغير اللي على الخشب؟"
      ],
      [
        "Ida",
        "Das ist die Gartenschaufel. Ihr Griff ist braun.",
        "ده جاروف الجنينة الصغير. إيده بني."
      ],
      [
        "Nabil",
        "Die Gartenscheren, die Gartenschaufeln. Beide Mehrzahlen enden auf n.",
        "دي جارتنشيرن ودي جارتنشاوفلن. الجمع في الاتنين بينتهي بنون."
      ],
      [
        "Ida",
        "Genau. Die Schere wird gehalten, die Schaufel liegt auf einer Fläche.",
        "بالظبط. المقص ممسوك والجاروف على سطح."
      ],
      [
        "Nabil",
        "Dann schreibe ich diese Beobachtungen unter die Karten.",
        "يبقى أكتب الملاحظات دي تحت الكروت."
      ]
    ],
    "q": [
      [
        "Was liegt auf Holz?",
        "Die Gartenschaufel.",
        "Die Wortkarte auf dem ersten Foto.",
        "Ein blauer Schuh."
      ],
      [
        "Was ist auf dem ersten Bild grün?",
        "Die Gartenschere.",
        "Das Holz.",
        "Die Kette."
      ],
      [
        "Was schreibt Nabil unter die Karten?",
        "Die Beobachtungen zu den Bildern.",
        "Eine Einkaufsliste.",
        "Eine Gartenanleitung."
      ]
    ]
  },
  {
    "id": "zuerst-schere-und-schaufel",
    "level": "A2",
    "title": [
      "Zuerst Schere und Schaufel",
      "الأول مقص وجاروف"
    ],
    "lines": [
      [
        "Jonas",
        "Garten kenne ich, aber die beiden langen Wörter verwechsle ich.",
        "أنا عارف جارتن بس بلخبط بين الكلمتين الطويلين."
      ],
      [
        "Rana",
        "Lies zuerst die letzten Teile: Schere und Schaufel.",
        "اقرا الأجزاء الأخيرة الأول: شيره وشاوفل."
      ],
      [
        "Jonas",
        "Jetzt kann ich sie mit den verschiedenen Formen verbinden.",
        "دلوقتي أقدر أوصلهم بالأشكال المختلفة."
      ],
      [
        "Rana",
        "Schreib den Artikel neben das ganze Wort und die Mehrzahl in eine neue Zeile.",
        "اكتب الأداة جنب الكلمة كلها والجمع في سطر جديد."
      ],
      [
        "Jonas",
        "Das hilft mir bei diesen zwei Beispielen.",
        "ده بيساعدني في المثالين دول."
      ],
      [
        "Rana",
        "Sollen wir deshalb sofort jedes lange Wort so zerlegen?",
        "يبقى نقسم كل كلمة طويلة بالطريقة دي فورًا؟"
      ],
      [
        "Jonas",
        "Lieber nicht. Beim nächsten Beispiel prüfe ich erst die sinnvolle Trennung.",
        "بلاش. في المثال الجاي أبص الأول على التقسيم المناسب."
      ]
    ],
    "q": [
      [
        "Welche Teile liest Jonas zuerst?",
        "Schere und Schaufel.",
        "Nur Garten.",
        "Die Namen der Personen."
      ],
      [
        "Wohin gehört der Artikel in dieser Übung?",
        "Neben das ganze Wort.",
        "Nur neben die Mehrzahl.",
        "In den Dateinamen."
      ],
      [
        "Was will Jonas beim nächsten Beispiel zuerst prüfen?",
        "Die sinnvolle Trennung.",
        "Den Kaufpreis.",
        "Die Uhrzeit des Fotos."
      ]
    ]
  },
  {
    "id": "der-name-ist-kein-nachweis",
    "level": "B1",
    "title": [
      "Der Name ist kein Nachweis",
      "الاسم مش دليل"
    ],
    "lines": [
      [
        "Oskar",
        "Die Datei heißt Werkzeug-fertig. Ist die Arbeit also abgeschlossen?",
        "اسم الملف أداة-خلصت. يبقى الشغل خلص؟"
      ],
      [
        "Mira",
        "Das wissen wir nicht. Wer den Namen vergeben hat, ist uns nicht bekannt.",
        "مانعرفش. إحنا مش عارفين مين سمى الملف."
      ],
      [
        "Oskar",
        "Dann trenne ich den Dateinamen von der Bildbeschreibung.",
        "يبقى أفصل اسم الملف عن وصف الصورة."
      ],
      [
        "Mira",
        "Ja. Beschreibe die sichtbaren Hände, Werkzeuge und Blätter, keinen erfundenen Ablauf.",
        "أيوه. اوصف الإيدين والأدوات وورق الشجر الظاهرين مش تسلسل متخيل."
      ],
      [
        "Oskar",
        "Den ursprünglichen Namen behalte ich nur zum Wiederfinden in einem eigenen Feld.",
        "هسيب الاسم الأصلي عشان ألاقي الملف تاني بس في خانة لوحده."
      ],
      [
        "Mira",
        "Damit sind Herkunft und Aufnahmezeitpunkt aber noch nicht geklärt.",
        "بس كده أصل الصور ووقت التصوير لسه ماتوضحوش."
      ],
      [
        "Oskar",
        "Richtig. Eine Ordnerbezeichnung ersetzt keinen Nachweis über den Bildinhalt.",
        "صح. اسم في الفولدر مش بديل لدليل على محتوى الصورة."
      ]
    ],
    "q": [
      [
        "Was trennt Oskar?",
        "Dateinamen und Bildbeschreibung.",
        "Die Werkzeuge von ihren Griffen.",
        "Zwei gekaufte Pakete."
      ],
      [
        "Was bleibt ungeklärt?",
        "Herkunft und Aufnahmezeitpunkt.",
        "Dass Hände sichtbar sind.",
        "Dass die Datei einen Namen hat."
      ],
      [
        "Wozu behält er den ursprünglichen Namen?",
        "Zum Wiederfinden der Datei.",
        "Als Beweis für abgeschlossene Arbeit.",
        "Als Sicherheitsanleitung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "gehalten-oder-hingelegt": [
    "die kleine Schaufel auf dem Holz",
    "Auf dem Foto ist sie grün.",
    "diese Beobachtungen unter die Karten."
  ],
  "zuerst-schere-und-schaufel": [
    "die letzten Teile: Schere und Schaufel.",
    "den Artikel neben das ganze Wort",
    "die sinnvolle Trennung."
  ],
  "der-name-ist-kein-nachweis": [
    "trenne ich den Dateinamen von der Bildbeschreibung.",
    "Herkunft und Aufnahmezeitpunkt aber noch nicht geklärt.",
    "nur zum Wiederfinden"
  ]
});

everydayDialogues.push(...[
  {
    "id": "das-dach-und-die-oeffnungen",
    "level": "A1",
    "title": [
      "Das Dach und die Öffnungen",
      "السقف والفتحات"
    ],
    "lines": [
      [
        "Nora",
        "Was siehst du auf dem ersten Foto?",
        "شايف إيه في الصورة الأولى؟"
      ],
      [
        "Emil",
        "Einen Nistkasten mit einem runden Loch vorne.",
        "صندوق تعشيش بفتحة مدورة من قدام."
      ],
      [
        "Nora",
        "Wie lautet die Mehrzahl?",
        "الجمع إيه؟"
      ],
      [
        "Emil",
        "Die Nistkästen, mit ä.",
        "دي نيستكستن بحرف أيه عليه نقطتين."
      ],
      [
        "Nora",
        "Und das andere Bild?",
        "والصورة التانية؟"
      ],
      [
        "Emil",
        "Das Insektenhotel hat viele Öffnungen und ein grünes Dach.",
        "بيت الحشرات فيه فتحات كتير وسقف أخضر."
      ],
      [
        "Nora",
        "Gut. Die Mehrzahl ist die Insektenhotels, mit s.",
        "كويس. الجمع دي إنزكتنهوتيلز بإس."
      ]
    ],
    "q": [
      [
        "Was nennt Emil beim Nistkasten?",
        "Das runde Loch vorne.",
        "Eine blaue Tür.",
        "Einen roten Griff."
      ],
      [
        "Welche Mehrzahl nennt Nora zuletzt?",
        "Die Insektenhotels.",
        "Die Nistkästen.",
        "Die Dächer."
      ],
      [
        "Welche Dachfarbe wird genannt?",
        "Grün.",
        "Weiß.",
        "Gelb."
      ]
    ]
  },
  {
    "id": "rechts-von-welchem-platz",
    "level": "A2",
    "title": [
      "Rechts von welchem Platz?",
      "يمين من مكان مين؟"
    ],
    "lines": [
      [
        "Alina",
        "Leg die Wortkarte bitte zum rechten Bild.",
        "حط كارت الكلمة مع الصورة اللي على اليمين لو سمحت."
      ],
      [
        "Sami",
        "Meinst du rechts von meinem Platz aus oder von deinem?",
        "قصدك يمين من مكاني ولا من مكانك؟"
      ],
      [
        "Alina",
        "Von meinem. Wir sitzen ja einander gegenüber.",
        "من مكاني. إحنا قاعدين قصاد بعض فعلًا."
      ],
      [
        "Sami",
        "Beschreib das Foto bitte kurz ohne rechts und links.",
        "اوصفّي الصورة بسرعة من غير يمين وشمال لو سمحتي."
      ],
      [
        "Alina",
        "Ich meine das Insektenhotel mit dem grünen spitzen Dach.",
        "قصدي بيت الحشرات بالسقف الأخضر المدبب."
      ],
      [
        "Sami",
        "Jetzt ist es klar. Setzen wir uns für die nächste Runde nebeneinander?",
        "دلوقتي واضح. نقعد جنب بعض للجولة الجاية؟"
      ],
      [
        "Alina",
        "Ja, dann haben wir denselben Blickpunkt.",
        "أيوه كده يبقى عندنا نفس نقطة النظر."
      ]
    ],
    "q": [
      [
        "Was klärt Sami zuerst?",
        "Von welchem Platz aus rechts gemeint ist.",
        "Wer das Foto gekauft hat.",
        "Wann das Dach gebaut wurde."
      ],
      [
        "Welches Bild meint Alina?",
        "Das Insektenhotel.",
        "Den Nistkasten.",
        "Ein leeres Blatt."
      ],
      [
        "Warum setzen sie sich nebeneinander?",
        "Damit sie denselben Blickpunkt haben.",
        "Damit sie nichts mehr sehen.",
        "Weil die Wörter geändert wurden."
      ]
    ]
  },
  {
    "id": "nicht-erkennbar-ist-nicht-unbenutzt",
    "level": "B1",
    "title": [
      "Nicht erkennbar ist nicht unbenutzt",
      "مش باين مش معناه مش مستخدم"
    ],
    "lines": [
      [
        "Leon",
        "Ich sehe keine Tiere. Soll ich unbenutzt schreiben?",
        "أنا مش شايف حيوانات. أكتب مش مستخدم؟"
      ],
      [
        "Dalia",
        "Nein. Wir haben nur einzelne Fotos und keine längere Beobachtung.",
        "لأ. معانا صور منفصلة بس مش متابعة لمدة أطول."
      ],
      [
        "Leon",
        "Dann schreibe ich, dass für mich auf diesen Bildern keine Tiere erkennbar sind.",
        "يبقى أكتب إني مش قادر أميز حيوانات في الصور دي."
      ],
      [
        "Dalia",
        "Genau. Die Innenräume und die Beobachtungsdauer bleiben unbekannt.",
        "بالظبط. الأجزاء الداخلية ومدة المتابعة لسه مش معروفين."
      ],
      [
        "Leon",
        "Die Namen allein beweisen aber auch keine tatsächliche Belegung.",
        "بس الأسامي لوحدها برضه مش بتثبت وجود ساكنين فعلًا."
      ],
      [
        "Dalia",
        "Richtig. Wir öffnen oder verändern dafür nichts. Es ist eine Schreibübung.",
        "صح. مش هنفتح ولا نغير حاجة عشان كده. ده تدريب كتابة."
      ],
      [
        "Leon",
        "Unser Satz bleibt bei der begrenzten Beobachtung.",
        "جملتنا هتفضل عند الملاحظة المحدودة."
      ]
    ],
    "q": [
      [
        "Was fehlt den beiden?",
        "Eine längere Beobachtung.",
        "Ein Name für das Thema.",
        "Jede sichtbare Öffnung."
      ],
      [
        "Was beweisen die Namen allein nicht?",
        "Eine tatsächliche Belegung.",
        "Dass Gegenstandsarten benannt werden.",
        "Dass es zwei Bilder gibt."
      ],
      [
        "Was machen sie nicht?",
        "Die Unterkünfte öffnen oder verändern.",
        "Eine begrenzte Aussage schreiben.",
        "Ihre Wortwahl prüfen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "das-dach-und-die-oeffnungen": [
    "mit einem runden Loch vorne.",
    "die Insektenhotels, mit s.",
    "ein grünes Dach."
  ],
  "rechts-von-welchem-platz": [
    "rechts von meinem Platz aus oder von deinem?",
    "Ich meine das Insektenhotel",
    "dann haben wir denselben Blickpunkt."
  ],
  "nicht-erkennbar-ist-nicht-unbenutzt": [
    "keine längere Beobachtung.",
    "keine tatsächliche Belegung.",
    "Wir öffnen oder verändern dafür nichts."
  ]
});

everydayDialogues.push(...[
  {
    "id": "welches-bild-hat-linien",
    "level": "A1",
    "title": [
      "Welches Bild hat Linien?",
      "أنهي صورة فيها سطور؟"
    ],
    "lines": [
      [
        "Lea",
        "Wie heißt die Karte mit den Linien?",
        "الكارت اللي فيه سطور اسمه إيه؟"
      ],
      [
        "Karim",
        "Die Karteikarte. Die Mehrzahl ist die Karteikarten.",
        "دي كارتايكارته. الجمع دي كارتايكارتن."
      ],
      [
        "Lea",
        "Und was liegt auf dem grün-weißen Hintergrund?",
        "وإيه اللي على الخلفية الأخضر والأبيض؟"
      ],
      [
        "Karim",
        "Das Etikett mit dem schwarzen Ring am Loch.",
        "التيكيت اللي عند فتحته حلقة سودا."
      ],
      [
        "Lea",
        "Stehen Wörter darauf?",
        "عليه كلمات؟"
      ],
      [
        "Karim",
        "Nein, es ist leer. Die Karteikarten sind auch nicht beschriftet.",
        "لأ فاضي. وكروت الفهرسة مش متكتبة برضه."
      ],
      [
        "Lea",
        "Dann üben wir jetzt nur Namen, Artikel und die Formen auf unserem Blatt.",
        "يبقى نتدرب دلوقتي على الأسامي والأدوات والصيغ اللي على ورقتنا بس."
      ]
    ],
    "q": [
      [
        "Was hat Linien?",
        "Die Karteikarte.",
        "Das Etikett auf diesem Foto.",
        "Der schwarze Ring."
      ],
      [
        "Welche Farbe hat der Ring?",
        "Schwarz.",
        "Rot.",
        "Braun."
      ],
      [
        "Was sagt Karim über die Beschriftung?",
        "Die Gegenstände sind nicht beschriftet.",
        "Auf allem steht sein Name.",
        "Nur die Karten haben Adressen."
      ]
    ]
  },
  {
    "id": "auf-dem-blatt-oder-allgemein",
    "level": "A2",
    "title": [
      "Auf dem Blatt oder allgemein?",
      "على الورقة ولا عمومًا؟"
    ],
    "lines": [
      [
        "Nele",
        "Auf meiner Vorlage steht Etiketten. Ist jede andere Form falsch?",
        "في ورقتي مكتوب إتيكتن. يبقى أي صيغة تانية غلط؟"
      ],
      [
        "Amir",
        "Nein. Das Wörterbuch nennt auch Etiketts und Etikette.",
        "لأ. القاموس بيقول كمان إتيكتس وإتيكته."
      ],
      [
        "Nele",
        "Dann muss ich genauer sagen, wonach ich frage.",
        "يبقى لازم أقول بدقة أكتر أنا بسأل عن إيه."
      ],
      [
        "Amir",
        "Frag nach der Form auf diesem Blatt, wenn du genau diese Auswahl meinst.",
        "اسألي عن الصيغة اللي على الورقة دي لو قصدك الاختيار ده تحديدًا."
      ],
      [
        "Nele",
        "Und andere gültige Varianten bleiben trotzdem gültig.",
        "والصيغ التانية الصحيحة تفضل صحيحة برضه."
      ],
      [
        "Amir",
        "Genau. Die Übungsfrage und die allgemeine Wortnotiz sind nicht dasselbe.",
        "بالظبط. سؤال التدريب وملحوظة الكلمة العامة مش نفس الحاجة."
      ],
      [
        "Nele",
        "Ich lese die neue Frage vor und prüfe, ob die Grenze klar ist.",
        "هقرا السؤال الجديد وأراجع إذا الفرق واضح."
      ]
    ],
    "q": [
      [
        "Welche weiteren Formen nennt Amir?",
        "Etiketts und Etikette.",
        "Karte und Karten.",
        "Nur Etiketten."
      ],
      [
        "Was soll Nele genauer formulieren?",
        "Die Frage.",
        "Eine Lieferadresse.",
        "Den Namen einer Person."
      ],
      [
        "Was bleibt mit anderen gültigen Varianten?",
        "Sie bleiben gültig.",
        "Sie werden automatisch verboten.",
        "Sie gelten immer als Tippfehler."
      ]
    ]
  },
  {
    "id": "nur-die-sichtbare-seite",
    "level": "B1",
    "title": [
      "Nur die sichtbare Seite",
      "الناحية اللي باينة بس"
    ],
    "lines": [
      [
        "Tarek",
        "Alles wirkt ordentlich. Kann ich eindeutig zugeordnet schreiben?",
        "كل حاجة شكلها منظم. أقدر أكتب متوصلة بوضوح باللي يخصها؟"
      ],
      [
        "Jule",
        "Nicht ohne lesbare Angaben oder weitere Informationen.",
        "مش من غير بيانات مقروءة أو معلومات تانية."
      ],
      [
        "Tarek",
        "Dann nenne ich Linien, Überdeckungen und das Loch im Etikett.",
        "يبقى أقول السطور وتغطية الكروت لبعض والفتحة في التيكيت."
      ],
      [
        "Jule",
        "Und leer bezieht sich nur auf die sichtbare Fläche.",
        "وفاضي ترجع للمساحة اللي باينة بس."
      ],
      [
        "Tarek",
        "Über Rückseiten und zugehörige Gegenstände wissen wir nichts Sicheres.",
        "عن الضهر والحاجات اللي تخصها مفيش عندنا حاجة مؤكدة."
      ],
      [
        "Jule",
        "Genau. Wir erfinden weder Preise noch Namen.",
        "بالظبط. مش هنخترع أسعار ولا أسامي."
      ],
      [
        "Tarek",
        "Unsere Bildbeschreibung bleibt von einer Bestandsprüfung getrennt.",
        "وصف الصور عندنا هيفضل منفصل عن مراجعة المخزون."
      ]
    ],
    "q": [
      [
        "Was fehlt für eindeutig zugeordnet?",
        "Lesbare Angaben oder weitere Informationen.",
        "Jede erkennbare Form.",
        "Eine weiße Fläche."
      ],
      [
        "Worauf bezieht sich leer hier?",
        "Nur auf die sichtbare Fläche.",
        "Automatisch auf alle Rückseiten.",
        "Auf einen geprüften Lagerbestand."
      ],
      [
        "Wovon bleibt die Bildbeschreibung getrennt?",
        "Von einer Bestandsprüfung.",
        "Von sichtbaren Linien.",
        "Von den deutschen Wörtern."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "welches-bild-hat-linien": [
    "Die Karteikarte.",
    "mit dem schwarzen Ring",
    "sind auch nicht beschriftet."
  ],
  "auf-dem-blatt-oder-allgemein": [
    "auch Etiketts und Etikette.",
    "genauer sagen, wonach ich frage.",
    "bleiben trotzdem gültig."
  ],
  "nur-die-sichtbare-seite": [
    "Nicht ohne lesbare Angaben oder weitere Informationen.",
    "nur auf die sichtbare Fläche.",
    "von einer Bestandsprüfung getrennt."
  ]
});

everydayDialogues.push(...[
  {
    "id": "das-wort-zum-griff",
    "level": "A1",
    "title": [
      "Das Wort zum Griff",
      "الكلمة اللي ليها إيد"
    ],
    "lines": [
      [
        "Lea",
        "Welches lange Wort gehört zum Griff?",
        "أنهي كلمة طويلة تبع الإيد؟"
      ],
      [
        "Karim",
        "Der Tischtennisschläger. Er liegt auf einem weißen Ball.",
        "دير تيش تنس شليجر. هو على كورة بيضا."
      ],
      [
        "Lea",
        "Und wo sehen wir kleine Vertiefungen?",
        "والحفر الصغيرة بنشوفها فين؟"
      ],
      [
        "Karim",
        "Auf dem Golfball im zweiten Foto.",
        "على كورة الجولف في الصورة التانية."
      ],
      [
        "Lea",
        "Ist das der Ball unter dem Schläger?",
        "هي دي الكورة اللي تحت المضرب؟"
      ],
      [
        "Karim",
        "Nein. Das sind zwei verschiedene Fotos.",
        "لأ. دول صورتين مختلفتين."
      ],
      [
        "Lea",
        "Dann nennen wir zu jedem Foto den passenden Namen.",
        "يبقى نقول مع كل صورة اسمها المناسب."
      ]
    ],
    "q": [
      [
        "Was liegt auf einem weißen Ball?",
        "Der Tischtennisschläger.",
        "Das Heft.",
        "Der Golfball des zweiten Fotos."
      ],
      [
        "Wo sind die kleinen Vertiefungen?",
        "Auf dem Golfball.",
        "Am Griff.",
        "Im Heft."
      ],
      [
        "Was sagt Karim über die Bilder?",
        "Es sind zwei verschiedene Fotos.",
        "Es ist derselbe Ball in einem einzigen Foto.",
        "Es sind Einkaufslisten."
      ]
    ]
  },
  {
    "id": "gleiches-nomen-andere-zahl",
    "level": "A2",
    "title": [
      "Gleiches Nomen, andere Zahl",
      "نفس الاسم وعدد مختلف"
    ],
    "lines": [
      [
        "Nele",
        "Beide Wörter haben der. Bilden sie auch dieselbe Mehrzahl?",
        "الكلمتين ليهم دير. جمعهم بيتعمل بنفس الطريقة برضه؟"
      ],
      [
        "Amir",
        "Nicht hier. Es heißt die Tischtennisschläger, aber die Golfbälle.",
        "مش هنا. بنقول دي تيش تنس شليجر بس دي جولفبيله."
      ],
      [
        "Nele",
        "Beim ersten Wort bleibt das Nomen also gleich.",
        "يعني في الكلمة الأولى الاسم نفسه بيفضل زي ما هو."
      ],
      [
        "Amir",
        "Ja. Im Beispiel helfen Artikel und Zahlwort beim Unterscheiden.",
        "أيوه. في المثال الأداة وكلمة العدد بيساعدوا في التفريق."
      ],
      [
        "Nele",
        "Und beim Golfball sehe ich im Plural den Umlaut und das e.",
        "وفي جولفبال بشوف في الجمع الأوملاوت وحرف إي."
      ],
      [
        "Amir",
        "Unsere Beispiele zählen aber nicht die Gegenstände auf den Fotos.",
        "بس أمثلتنا مش بتعد الحاجات اللي في الصور."
      ],
      [
        "Nele",
        "Ich kennzeichne sie als Sprachübung und lerne beide Formen getrennt.",
        "هوضح إنها تدريب لغوي وهتعلم الصيغتين كل واحدة لوحدها."
      ]
    ],
    "q": [
      [
        "Welche Form nennt Amir?",
        "Die Golfbälle.",
        "Die Golfballs.",
        "Die Golfballen."
      ],
      [
        "Was bleibt bei Tischtennisschläger gleich?",
        "Die Nomenform.",
        "Jedes Zahlwort.",
        "Jeder Artikel in jedem Satz."
      ],
      [
        "Was zählen die Beispiele nicht?",
        "Die Gegenstände auf den Fotos.",
        "Die Silben der Beispielsätze.",
        "Die Buchstaben des Wortes Umlaut."
      ]
    ]
  },
  {
    "id": "kein-gemeinsamer-massstab",
    "level": "B1",
    "title": [
      "Kein gemeinsamer Maßstab",
      "مفيش مقياس مشترك"
    ],
    "lines": [
      [
        "Tarek",
        "Die Bilder sind gleich breit. Kann ich die echte Größe vergleichen?",
        "الصور نفس العرض. أقدر أقارن الحجم الحقيقي؟"
      ],
      [
        "Jule",
        "Nicht allein damit. Die Aufnahmen haben keinen gemeinsamen Maßstab.",
        "مش بكده لوحده. اللقطتين مفيهمش مقياس مشترك."
      ],
      [
        "Tarek",
        "Dann beschreibe ich Griff, Spielfläche und Vertiefungen.",
        "يبقى أوصف الإيد ومساحة اللعب والحفر الصغيرة."
      ],
      [
        "Jule",
        "Ja, und die blaue Lichtwirkung ist kein sicherer Materialnachweis.",
        "أيوه وتأثير الإضاءة الأزرق مش دليل مضمون على الخامة."
      ],
      [
        "Tarek",
        "Hersteller, Alter und Qualität lasse ich offen.",
        "هسيب الشركة والعمر والجودة من غير حكم."
      ],
      [
        "Jule",
        "Eine Produktempfehlung wäre mit diesen Angaben nicht belegt.",
        "توصية بمنتج مش هتبقى مسنودة بالبيانات دي."
      ],
      [
        "Tarek",
        "Unsere Fotos dienen also als Wortbeispiele, nicht als Messversuch.",
        "يبقى صورنا أمثلة للكلمات مش تجربة قياس."
      ]
    ],
    "q": [
      [
        "Was fehlt für den Größenvergleich?",
        "Ein gemeinsamer Maßstab.",
        "Jede erkennbare Form.",
        "Eine gleich breite Darstellung."
      ],
      [
        "Was lässt Tarek offen?",
        "Hersteller, Alter und Qualität.",
        "Dass ein Griff sichtbar ist.",
        "Dass die Fotos Wörter erklären."
      ],
      [
        "Wozu dienen die Fotos hier?",
        "Als Wortbeispiele.",
        "Als geprüfter Messversuch.",
        "Als bestätigte Produktempfehlung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "das-wort-zum-griff": [
    "Er liegt auf einem weißen Ball.",
    "Auf dem Golfball",
    "zwei verschiedene Fotos."
  ],
  "gleiches-nomen-andere-zahl": [
    "die Golfbälle.",
    "bleibt das Nomen also gleich.",
    "zählen aber nicht die Gegenstände auf den Fotos."
  ],
  "kein-gemeinsamer-massstab": [
    "keinen gemeinsamen Maßstab.",
    "Hersteller, Alter und Qualität lasse ich offen.",
    "als Wortbeispiele, nicht als Messversuch."
  ]
});

everydayDialogues.push(...[
  {
    "id": "links-mit-hut",
    "level": "A1",
    "title": [
      "Links mit Hut",
      "على الشمال بقبعة"
    ],
    "lines": [
      [
        "Lea",
        "Was liegt auf dem Holzlöffel?",
        "إيه اللي على المعلقة الخشب؟"
      ],
      [
        "Karim",
        "Wattestäbchen mit weißen Enden und hellen Stielen.",
        "أعواد قطن بأطراف بيضا وسيقان فاتحة."
      ],
      [
        "Lea",
        "Und wo stehen die zwei Badeenten?",
        "والبطتين اللعب واقفين فين؟"
      ],
      [
        "Karim",
        "Auf roten Fliesen am Poolrand.",
        "على بلاط أحمر على طرف حمام السباحة."
      ],
      [
        "Lea",
        "Welche trägt den Hut?",
        "أنهي واحدة لابسة القبعة؟"
      ],
      [
        "Karim",
        "Die linke. Die rechte hat keinen Hut.",
        "اللي على الشمال. اللي على اليمين من غير قبعة."
      ],
      [
        "Lea",
        "Dann üben wir jetzt die Namen und die Artikel zu diesen Bildern.",
        "يبقى نتدرب دلوقتي على الأسامي والأدوات مع الصور دي."
      ]
    ],
    "q": [
      [
        "Welche Enden haben die Wattestäbchen?",
        "Weiße Enden.",
        "Blaue Schnäbel.",
        "Rote Hüte."
      ],
      [
        "Wo stehen die Enten?",
        "Am Poolrand.",
        "Auf einem Schreibtisch.",
        "Im Löffel."
      ],
      [
        "Welche Ente hat keinen Hut?",
        "Die rechte.",
        "Die linke.",
        "Beide tragen einen Hut."
      ]
    ]
  },
  {
    "id": "nicht-automatisch-im-bad",
    "level": "A2",
    "title": [
      "Nicht automatisch im Bad",
      "مش تلقائيًا في الحمام"
    ],
    "lines": [
      [
        "Nele",
        "Ich habe Badewanne geschrieben, weil das Wort Badeente heißt.",
        "أنا كتبت بانيو عشان الكلمة باده إنته."
      ],
      [
        "Amir",
        "Auf diesem Foto stehen die Enten aber am Poolrand.",
        "بس في الصورة دي البط واقف على طرف حمام السباحة."
      ],
      [
        "Nele",
        "Dann muss ich den Namen vom sichtbaren Ort trennen.",
        "يبقى لازم أفصل الاسم عن المكان اللي باين."
      ],
      [
        "Amir",
        "Genau. Auch der Holzlöffel beweist keine Küche.",
        "بالظبط. والمعلقة الخشب برضه مش دليل على مطبخ."
      ],
      [
        "Nele",
        "Ich notiere nur den sichtbaren Untergrund und lasse den Raum offen.",
        "هكتب السطح اللي باين بس وهسيب الأوضة من غير تحديد."
      ],
      [
        "Amir",
        "Und die Wörter mit Artikel stehen in einer eigenen Spalte.",
        "والكلمات بالأداة تبقى في عمود لوحدها."
      ],
      [
        "Nele",
        "So wird aus einer Vermutung keine scheinbare Beobachtung.",
        "كده التخمين مايتحولش لملاحظة شكلها مؤكدة."
      ]
    ],
    "q": [
      [
        "Wo stehen die Enten auf dem Foto?",
        "Am Poolrand.",
        "In einer Badewanne.",
        "In einer Küche."
      ],
      [
        "Was soll getrennt werden?",
        "Name und sichtbarer Ort.",
        "Zwei belegte Eigentümernamen.",
        "Zwei Bestellungen."
      ],
      [
        "Was bleibt offen?",
        "Der nicht erkennbare Raum.",
        "Der sichtbare Holzlöffel.",
        "Die Namen der Wörter."
      ]
    ]
  },
  {
    "id": "keine-eigenschaft-ohne-beleg",
    "level": "B1",
    "title": [
      "Keine Eigenschaft ohne Beleg",
      "مفيش صفة من غير دليل"
    ],
    "lines": [
      [
        "Tarek",
        "Die Enden sind weiß. Kann ich steril schreiben?",
        "الأطراف بيضا. أقدر أكتب معقم؟"
      ],
      [
        "Jule",
        "Nicht aus dem Foto allein. Dafür fehlt ein verlässlicher Nachweis.",
        "مش من الصورة لوحدها. ناقص دليل موثوق على ده."
      ],
      [
        "Tarek",
        "Und die Badeenten sehen wie freundliches Spielzeug aus.",
        "والبط اللعب شكله لطيف."
      ],
      [
        "Jule",
        "Das beweist weder eine Altersfreigabe noch Produktsicherheit.",
        "ده مش دليل على تصنيف سن ولا أمان منتج."
      ],
      [
        "Tarek",
        "Dann bleiben wir bei Namen, sichtbaren Formen und Farben.",
        "يبقى نفضل في الأسامي والأشكال والألوان اللي باينة."
      ],
      [
        "Jule",
        "Und wir geben keine Anleitung zur Verwendung am Körper.",
        "ومش هندي تعليمات استخدام على الجسم."
      ],
      [
        "Tarek",
        "Die Wortübung bleibt also von einer Produktprüfung getrennt.",
        "يبقى تدريب الكلمات يفضل منفصل عن فحص منتج."
      ]
    ],
    "q": [
      [
        "Wofür fehlt ein Nachweis?",
        "Für die Behauptung steril.",
        "Für die sichtbare weiße Farbe.",
        "Für das Vorhandensein eines Fotos."
      ],
      [
        "Was beweist der freundliche Eindruck nicht?",
        "Produktsicherheit.",
        "Dass die Bilder betrachtet werden.",
        "Dass Wörter geübt werden."
      ],
      [
        "Wovon bleibt die Wortübung getrennt?",
        "Von einer Produktprüfung.",
        "Von den Gegenstandsnamen.",
        "Von sichtbaren Farben."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "links-mit-hut": [
    "mit weißen Enden",
    "am Poolrand.",
    "Die rechte hat keinen Hut."
  ],
  "nicht-automatisch-im-bad": [
    "am Poolrand.",
    "den Namen vom sichtbaren Ort trennen.",
    "lasse den Raum offen."
  ],
  "keine-eigenschaft-ohne-beleg": [
    "Dafür fehlt ein verlässlicher Nachweis.",
    "noch Produktsicherheit.",
    "von einer Produktprüfung getrennt."
  ]
});

everydayDialogues.push(...[
  {
    "id": "wo-sind-die-ringe",
    "level": "A1",
    "title": [
      "Wo sind die Ringe?",
      "الحلقات فين؟"
    ],
    "lines": [
      [
        "Lea",
        "Wo siehst du die feinen Ringe?",
        "شايف الحلقات الرفيعة فين؟"
      ],
      [
        "Karim",
        "Auf dem Baumstumpf im zweiten Foto.",
        "على بقية جذع الشجرة في الصورة التانية."
      ],
      [
        "Lea",
        "Und was liegt in der Mitte des ersten Fotos?",
        "وفي نص الصورة الأولى فيه إيه؟"
      ],
      [
        "Karim",
        "Ein rötlich-brauner Kieselstein zwischen anderen Steinen.",
        "حجر حصى بني محمر وسط حجارة تانية."
      ],
      [
        "Lea",
        "Wachsen grüne Pflanzen am Rand des Baumstumpfs?",
        "فيه نباتات خضرا طالعة حوالين طرف بقية الجذع؟"
      ],
      [
        "Karim",
        "Ja. Und auf dem Holz liegen einige braune Blätter.",
        "أيوه وعلى الخشب فيه شوية ورق شجر بني."
      ],
      [
        "Lea",
        "Dann beschreiben wir die Fotos und lesen die Wörter noch einmal.",
        "يبقى نوصف الصور ونقرا الكلمات تاني."
      ]
    ],
    "q": [
      [
        "Wo sind die Ringe?",
        "Auf dem Baumstumpf.",
        "Auf einer Spielkarte.",
        "In einem Heft."
      ],
      [
        "Was liegt zwischen den anderen Steinen?",
        "Ein rötlich-brauner Kieselstein.",
        "Ein gelber Hut.",
        "Eine Holzschüssel."
      ],
      [
        "Welche Blätter liegen auf dem Holz?",
        "Braune Blätter.",
        "Blaue Blätter.",
        "Weiße Papierblätter."
      ]
    ]
  },
  {
    "id": "ein-e-und-ein-umlaut",
    "level": "A2",
    "title": [
      "Ein e und ein Umlaut",
      "حرف إي وأوملاوت"
    ],
    "lines": [
      [
        "Nele",
        "Beide Wörter haben der. Reicht das für die Mehrzahl?",
        "الكلمتين ليهم دير. ده كفاية عشان الجمع؟"
      ],
      [
        "Amir",
        "Nein. Wir lernen Kieselsteine und Baumstümpfe getrennt.",
        "لأ. بنتعلم كيزِلشتاينه وباومشتومفه كل واحدة لوحدها."
      ],
      [
        "Nele",
        "Beide enden auf e, aber Baumstümpfe hat auch einen Umlaut.",
        "الاتنين آخرهم إي بس باومشتومفه فيها أوملاوت كمان."
      ],
      [
        "Amir",
        "Genau. Beim Kieselstein bleibt der Vokal unverändert.",
        "بالظبط. في كيزِلشتاين حرف العلة بيفضل زي ما هو."
      ],
      [
        "Nele",
        "Unsere Sätze mit mehrere sind aber keine Zählung der Fotos.",
        "بس جملنا اللي فيها كذا مش عد للصور."
      ],
      [
        "Amir",
        "Richtig. Beispiele und Bildbeschreibung stehen getrennt.",
        "صح. الأمثلة ووصف الصور منفصلين."
      ],
      [
        "Nele",
        "Dann prüfe ich Artikel, Endung und Umlaut noch einmal.",
        "يبقى أراجع الأداة والنهاية والأوملاوت تاني."
      ]
    ],
    "q": [
      [
        "Welche Mehrzahl hat einen Umlaut?",
        "Baumstümpfe.",
        "Kieselsteine.",
        "Beide haben denselben Umlaut."
      ],
      [
        "Was bleibt bei Kieselstein unverändert?",
        "Der Vokal.",
        "Das gesamte Nomen im Plural.",
        "Jedes Zahlwort."
      ],
      [
        "Was sind die Beispielsätze nicht?",
        "Eine Zählung der Fotos.",
        "Sprachübung.",
        "Eigene Sätze."
      ]
    ]
  },
  {
    "id": "kein-fachgutachten-aus-dem-foto",
    "level": "B1",
    "title": [
      "Kein Fachgutachten aus dem Foto",
      "مش تقرير خبير من الصورة"
    ],
    "lines": [
      [
        "Tarek",
        "Kann ich dem Stein einen bestimmten Fluss zuordnen?",
        "أقدر أنسب الحجر لنهر معين؟"
      ],
      [
        "Jule",
        "Nicht ohne zusätzliche verlässliche Angaben.",
        "مش من غير بيانات إضافية موثوقة."
      ],
      [
        "Tarek",
        "Und die Ringlinien im Holz liefern mir sofort ein genaues Alter?",
        "وخطوط الحلقات في الخشب تديني عمر دقيق فورًا؟"
      ],
      [
        "Jule",
        "Wir haben die Voraussetzungen dafür nicht geprüft.",
        "إحنا ماراجعناش الشروط اللازمة لده."
      ],
      [
        "Tarek",
        "Dann beschreibe ich Muster, Risse und die Pflanzen am Rand.",
        "يبقى أوصف النقشة والشقوق والنباتات على الطرف."
      ],
      [
        "Jule",
        "Ja. Herkunft, genaue Maße und frühere Ereignisse lassen wir offen.",
        "أيوه. المصدر والمقاسات الدقيقة واللي حصل زمان هنسيبهم من غير حكم."
      ],
      [
        "Tarek",
        "Die Sprachübung soll kein Fachgutachten vortäuschen.",
        "تدريب اللغة ماينفعش يدعي إنه تقرير خبير."
      ]
    ],
    "q": [
      [
        "Was braucht die Zuordnung zu einem Fluss?",
        "Zusätzliche verlässliche Angaben.",
        "Nur einen rötlichen Farbton.",
        "Eine gleiche Kartenbreite."
      ],
      [
        "Was wurde nicht geprüft?",
        "Die Voraussetzungen für die Altersbestimmung.",
        "Dass Bilder angezeigt werden.",
        "Dass Wörter gelernt werden."
      ],
      [
        "Was soll die Übung nicht vortäuschen?",
        "Ein Fachgutachten.",
        "Eine Wortübung.",
        "Eine Bildbeschreibung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "wo-sind-die-ringe": [
    "Auf dem Baumstumpf",
    "Ein rötlich-brauner Kieselstein",
    "einige braune Blätter."
  ],
  "ein-e-und-ein-umlaut": [
    "Baumstümpfe hat auch einen Umlaut.",
    "bleibt der Vokal unverändert.",
    "keine Zählung der Fotos."
  ],
  "kein-fachgutachten-aus-dem-foto": [
    "zusätzliche verlässliche Angaben.",
    "die Voraussetzungen dafür nicht geprüft.",
    "kein Fachgutachten vortäuschen."
  ]
});

everydayDialogues.push(...[
  {
    "id": "der-rosa-stift-unten",
    "level": "A1",
    "title": [
      "Der rosa Stift unten",
      "القلم البمبي اللي تحت"
    ],
    "lines": [
      [
        "Lea",
        "Wohin zeigen die Spitzen der Wachsmalstifte?",
        "سنون أقلام الشمع ناحية فين؟"
      ],
      [
        "Karim",
        "Nach rechts. Der rosa Stift liegt unten etwas getrennt.",
        "ناحية اليمين. القلم البمبي تحت بعيد شوية."
      ],
      [
        "Lea",
        "Und was zeigt das andere Foto?",
        "والصورة التانية بتعرض إيه؟"
      ],
      [
        "Karim",
        "Heftklammern in langen Streifen, die übereinanderliegen.",
        "دبابيس دباسة في شرايط طويلة فوق بعض."
      ],
      [
        "Lea",
        "Welche Farben wirken dort besonders deutlich?",
        "أنهي ألوان باينة هناك بوضوح؟"
      ],
      [
        "Karim",
        "Silber und bei einigen Streifen ein goldfarbener Ton.",
        "فضي وفي شوية شرايط درجة لون ذهبي."
      ],
      [
        "Lea",
        "Dann nennen wir jetzt die Wörter mit ihren Artikeln.",
        "يبقى نقول دلوقتي الكلمات بأدواتها."
      ]
    ],
    "q": [
      [
        "Wo liegt der rosa Stift?",
        "Unten etwas getrennt.",
        "Oben auf einem Schrank.",
        "Im Klammerstreifen."
      ],
      [
        "Was liegt übereinander?",
        "Lange Streifen mit Heftklammern.",
        "Zwei Hefte mit Zeichnungen.",
        "Drei Papiertüten."
      ],
      [
        "Was üben sie jetzt?",
        "Die Wörter mit Artikeln.",
        "Einen Einkauf bezahlen.",
        "Die Benutzung einer Maschine."
      ]
    ]
  },
  {
    "id": "was-zaehlst-du-gerade",
    "level": "A2",
    "title": [
      "Was zählst du gerade?",
      "إنت بتعد إيه دلوقتي؟"
    ],
    "lines": [
      [
        "Nele",
        "Ich habe einen Streifen als eine Heftklammer gezählt.",
        "أنا عديت شريط كأنه دبوس دباسة واحد."
      ],
      [
        "Amir",
        "Im Streifen liegen aber viele Klammern aneinander.",
        "بس في الشريط فيه دبابيس كتير ملامسة لبعض."
      ],
      [
        "Nele",
        "Dann muss ich sagen, welche Ebene ich zähle.",
        "يبقى لازم أقول أنا بعد أنهي مستوى."
      ],
      [
        "Amir",
        "Genau. Und verdeckte Teile verhindern hier eine genaue Gesamtzahl.",
        "بالظبط. والأجزاء المتغطية بتمنع هنا إجمالي دقيق."
      ],
      [
        "Nele",
        "Bei den Stiften sehe ich einzelne Gegenstände, aber kein geprüftes vollständiges Set.",
        "في الأقلام شايفة حاجات منفصلة بس مش طقم كامل متراجع."
      ],
      [
        "Amir",
        "Wir beschreiben den Ausschnitt, nicht den ganzen Vorrat.",
        "إحنا بنوصف الجزء اللي باين مش كل المخزون."
      ],
      [
        "Nele",
        "Und die Mehrzahlformen lernen wir daneben getrennt.",
        "وصيغ الجمع نتعلمها جنب ده منفصلة."
      ]
    ],
    "q": [
      [
        "Was liegt im Streifen aneinander?",
        "Viele Klammern.",
        "Nur ein Stift.",
        "Leere Papierblätter."
      ],
      [
        "Was verhindern verdeckte Teile?",
        "Eine genaue Gesamtzahl.",
        "Die Benennung des Wortes.",
        "Jede sichtbare Linie."
      ],
      [
        "Was beschreiben sie?",
        "Den Ausschnitt.",
        "Einen vollständig geprüften Vorrat.",
        "Eine bereits gekaufte Packung."
      ]
    ]
  },
  {
    "id": "passend-ist-nicht-geprueft",
    "level": "B1",
    "title": [
      "Passend ist nicht geprüft",
      "مناسب مش معناها متراجع"
    ],
    "lines": [
      [
        "Tarek",
        "Die Klammern glänzen. Passen sie deshalb in jedes Heftgerät?",
        "الدبابيس بتلمع. كده تنفع لكل دباسة؟"
      ],
      [
        "Jule",
        "Nein. Dafür fehlen Maße und eine geprüfte Zuordnung.",
        "لأ. ناقص مقاسات وربط متراجع."
      ],
      [
        "Tarek",
        "Dann schreibe ich nur silberne und goldfarbene Streifen.",
        "يبقى أكتب شرايط فضية وشكلها ذهبي بس."
      ],
      [
        "Jule",
        "Und nicht aus Gold, denn das wäre eine andere Behauptung.",
        "ومش من دهب عشان ده ادعاء مختلف."
      ],
      [
        "Tarek",
        "Auch die Stifte zeigen im Foto keinen Farbauftrag auf Papier.",
        "والأقلام برضه في الصورة مش بتعرض لون اتفرد على الورق."
      ],
      [
        "Jule",
        "Genau. Wir testen weder Deckkraft noch Kompatibilität.",
        "بالظبط. إحنا مش بنختبر تغطية اللون ولا التوافق."
      ],
      [
        "Tarek",
        "Unsere Beschreibung bleibt von einer Produktempfehlung getrennt.",
        "وصفنا يفضل منفصل عن توصية بمنتج."
      ]
    ],
    "q": [
      [
        "Was fehlt für die Gerätezuordnung?",
        "Maße und eine geprüfte Zuordnung.",
        "Jeder sichtbare Farbton.",
        "Jede erkennbare Form."
      ],
      [
        "Welche Formulierung ist eine andere, unbelegte Behauptung?",
        "Aus Gold.",
        "Goldfarben.",
        "Silbern wirkend."
      ],
      [
        "Was testen sie nicht?",
        "Deckkraft und Kompatibilität.",
        "Ob Fotos angezeigt werden.",
        "Ob Wörter benannt werden."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "der-rosa-stift-unten": [
    "unten etwas getrennt.",
    "langen Streifen, die übereinanderliegen.",
    "die Wörter mit ihren Artikeln."
  ],
  "was-zaehlst-du-gerade": [
    "viele Klammern aneinander.",
    "verhindern hier eine genaue Gesamtzahl.",
    "Wir beschreiben den Ausschnitt"
  ],
  "passend-ist-nicht-geprueft": [
    "Maße und eine geprüfte Zuordnung.",
    "nicht aus Gold",
    "weder Deckkraft noch Kompatibilität."
  ]
});

everydayDialogues.push(...[
  {
    "id": "welches-bild-hat-eine-schale",
    "level": "A1",
    "title": [
      "Welches Bild hat eine Schale?",
      "أنهي صورة فيها طبق؟"
    ],
    "lines": [
      [
        "Lea",
        "Wo siehst du die Schöpfkelle?",
        "شايف المغرفة فين؟"
      ],
      [
        "Karim",
        "Vor der Schale. Ihr Stiel kommt von links oben.",
        "قدام الطبق. إيدها جاية من فوق شمال."
      ],
      [
        "Lea",
        "Und wie erkennst du die Nagelfeile?",
        "وبتعرف مبرد الضوافر إزاي؟"
      ],
      [
        "Karim",
        "Sie ist lang und schmal und hat rechts ein rosa Ende.",
        "طويل ورفيع وفي اليمين ليه طرف بمبي."
      ],
      [
        "Lea",
        "Zeigen beide Fotos denselben Ort?",
        "الصورتين بيعرضوا نفس المكان؟"
      ],
      [
        "Karim",
        "Nein. Wir legen sie nur für unsere Wortübung nebeneinander.",
        "لأ. إحنا حاطينهم جنب بعض عشان تدريب الكلمات بس."
      ],
      [
        "Lea",
        "Dann lesen wir die Namen mit Artikel.",
        "يبقى نقرا الأسامي بالأداة."
      ]
    ],
    "q": [
      [
        "Wo ist die Kelle zu sehen?",
        "Vor der Schale.",
        "Auf der Feile.",
        "In einer Schublade."
      ],
      [
        "Wo hat die Feile ein rosa Ende?",
        "Rechts.",
        "Links.",
        "In der Schale."
      ],
      [
        "Warum liegen die Fotos nebeneinander?",
        "Für die Wortübung.",
        "Als Beweis für denselben Ort.",
        "Als Anleitung zur Körperpflege."
      ]
    ]
  },
  {
    "id": "gleicher-artikel-andere-bedeutung",
    "level": "A2",
    "title": [
      "Gleicher Artikel, andere Bedeutung",
      "نفس الأداة ومعنى مختلف"
    ],
    "lines": [
      [
        "Nele",
        "Beide Wörter haben den Artikel die.",
        "الكلمتين أداتهم دي."
      ],
      [
        "Amir",
        "Und beide bekommen in der Mehrzahl ein n.",
        "والاتنين في الجمع بياخدوا نون."
      ],
      [
        "Nele",
        "Müssen die Gegenstände deshalb zusammen benutzt werden?",
        "كده لازم الحاجتين يتستخدموا مع بعض؟"
      ],
      [
        "Amir",
        "Nein. Gleiche Grammatik bedeutet keine gemeinsame Verwendung.",
        "لأ. نفس النحو مش معناه استخدام مشترك."
      ],
      [
        "Nele",
        "Und mehrere Exemplare im Beispielsatz?",
        "وأكتر من قطعة في جملة المثال؟"
      ],
      [
        "Amir",
        "Das ist eine Sprachübung, keine Zählung der Fotos.",
        "ده تدريب لغة مش عد للحاجات في الصور."
      ],
      [
        "Nele",
        "Dann prüfen wir Wortform und Bild jeweils getrennt.",
        "يبقى نراجع شكل الكلمة والصورة كل واحدة لوحدها."
      ]
    ],
    "q": [
      [
        "Welchen Artikel haben beide Wörter in der Einzahl?",
        "Die.",
        "Der.",
        "Das."
      ],
      [
        "Was bedeutet gleiche Grammatik nicht?",
        "Gemeinsame Verwendung.",
        "Eine lernbare Wortform.",
        "Zwei getrennte Wörter."
      ],
      [
        "Was sind mehrere Exemplare im Beispielsatz hier?",
        "Eine Sprachübung.",
        "Eine bestätigte Fotozählung.",
        "Ein verbindlicher Vorratsplan."
      ]
    ]
  },
  {
    "id": "nur-was-das-foto-traegt",
    "level": "B1",
    "title": [
      "Nur was das Foto trägt",
      "اللي الصورة تثبته بس"
    ],
    "lines": [
      [
        "Tarek",
        "Reicht der schwarze Handschuh als Beweis für einwandfreie Hygiene?",
        "الجوانتي الأسود كفاية كدليل لنظافة سليمة تمامًا؟"
      ],
      [
        "Jule",
        "Nein. Wir sehen einen Handschuh, aber keine geprüften Bedingungen.",
        "لأ. شايفين جوانتي بس مش ظروف متراجعة."
      ],
      [
        "Tarek",
        "Dann nenne ich nur die Kelle, die Schale und die helle Flüssigkeit.",
        "يبقى أسمي المغرفة والطبق والسائل الفاتح بس."
      ],
      [
        "Jule",
        "Bei der Nagelfeile bleiben wir auch bei Form und Farbe.",
        "ومع مبرد الضوافر نفضل برضه في الشكل واللون."
      ],
      [
        "Tarek",
        "Neu und besonders schonend sind also nicht durch das Bild belegt.",
        "يبقى جديد ولطيف جدًا في الاستخدام مش مثبتين بالصورة."
      ],
      [
        "Jule",
        "Genau. Wir geben weder Pflegeanweisungen noch ein Qualitätsurteil.",
        "بالظبط. مش بندي تعليمات عناية ولا حكم جودة."
      ],
      [
        "Tarek",
        "Die Wortkarten verbinden Namen mit Bildern, nicht ungeprüfte Versprechen.",
        "كروت الكلمات بتربط أسامي بصور مش وعود ماتراجعتش."
      ]
    ],
    "q": [
      [
        "Was sehen sie statt geprüfter Bedingungen?",
        "Einen Handschuh.",
        "Eine Zutatenliste.",
        "Einen Prüfbericht."
      ],
      [
        "Was bleibt bei der Nagelfeile im Text?",
        "Form und Farbe.",
        "Eine bestätigte Körnung.",
        "Eine Pflegeanweisung."
      ],
      [
        "Was ist nicht durch das Bild belegt?",
        "Neu und besonders schonend.",
        "Ein rosa Ende.",
        "Ein heller Untergrund."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "welches-bild-hat-eine-schale": [
    "Vor der Schale.",
    "rechts ein rosa Ende.",
    "nur für unsere Wortübung nebeneinander."
  ],
  "gleicher-artikel-andere-bedeutung": [
    "den Artikel die.",
    "keine gemeinsame Verwendung.",
    "eine Sprachübung, keine Zählung der Fotos."
  ],
  "nur-was-das-foto-traegt": [
    "Wir sehen einen Handschuh, aber keine geprüften Bedingungen.",
    "bei Form und Farbe.",
    "Neu und besonders schonend sind also nicht durch das Bild belegt."
  ]
});

everydayDialogues.push(...[
  {
    "id": "die-brille-haengt-am-band",
    "level": "A1",
    "title": [
      "Die Brille hängt am Band",
      "النضارة متعلقة من الرباط"
    ],
    "lines": [
      [
        "Lea",
        "Welche Farben siehst du an der Tauchmaske?",
        "شايف أنهي ألوان في ماسك الغطس؟"
      ],
      [
        "Karim",
        "Gelbe und schwarze Ränder und einen durchsichtigen Bereich.",
        "حواف صفرا وسودا وجزء شفاف."
      ],
      [
        "Lea",
        "Wie wird die Schwimmbrille gehalten?",
        "نضارة السباحة متشالة إزاي؟"
      ],
      [
        "Karim",
        "Eine Hand hält sie am Band. Die Brille hängt nach unten.",
        "إيد ماسكاها من الرباط. النضارة نازلة لتحت."
      ],
      [
        "Lea",
        "Trägt jemand im Ausschnitt die Gegenstände im Gesicht?",
        "فيه حد في الجزء المصور لابس الحاجات على وشه؟"
      ],
      [
        "Karim",
        "Nein. Wir sehen Hände und die Gegenstände.",
        "لأ. شايفين إيدين والحاجات."
      ],
      [
        "Lea",
        "Dann lesen wir jetzt die beiden Namen.",
        "يبقى نقرا دلوقتي الاسمين."
      ]
    ],
    "q": [
      [
        "Was ist an der Maske zu sehen?",
        "Gelbe und schwarze Ränder.",
        "Ein roter Stiel.",
        "Ein brauner Korken."
      ],
      [
        "Wie hängt die Brille?",
        "Nach unten am Band.",
        "Aufrecht auf einem Tisch.",
        "An einer Wand hinter einer Tür."
      ],
      [
        "Was sehen sie im Ausschnitt?",
        "Hände und die Gegenstände.",
        "Zwei Gesichter mit getragenen Brillen.",
        "Eine Schwimmprüfung."
      ]
    ]
  },
  {
    "id": "eine-brille-mit-zwei-bereichen",
    "level": "A2",
    "title": [
      "Eine Brille mit zwei Bereichen",
      "نضارة واحدة بجزئين"
    ],
    "lines": [
      [
        "Amir",
        "Ich habe wegen der zwei Augenteile zwei Brillen geschrieben.",
        "أنا كتبت نضارتين عشان جزئين العينين."
      ],
      [
        "Nele",
        "Hier gehören beide Teile zu einer Schwimmbrille.",
        "هنا الجزئين تابعين لنضارة سباحة واحدة."
      ],
      [
        "Amir",
        "Dann beschrifte ich den ganzen Gegenstand in der Einzahl.",
        "يبقى أسمي الحاجة كاملة بالمفرد."
      ],
      [
        "Nele",
        "Genau. Die Mehrzahl Schwimmbrillen lernen wir getrennt dazu.",
        "بالظبط. الجمع شفيم بريلن نتعلمه جنبها منفصل."
      ],
      [
        "Amir",
        "Und die Tauchmaske bekommt auch ein n: Tauchmasken.",
        "وماسك الغطس برضه بياخد نون: تاوخ ماسكن."
      ],
      [
        "Nele",
        "Die Pluralsätze zählen aber nicht unsere Fotos.",
        "بس جمل الجمع مش بتعد صورنا."
      ],
      [
        "Amir",
        "Wir prüfen jeweils die Wortform und die gemeinte Einheit.",
        "إحنا بنراجع كل مرة شكل الكلمة والوحدة المقصودة."
      ]
    ],
    "q": [
      [
        "Wozu gehören beide Augenteile?",
        "Zu einer Schwimmbrille.",
        "Zu zwei vollständigen Brillen.",
        "Zu einer Verpackung mit drei Masken."
      ],
      [
        "Welche Mehrzahl nennen sie für Tauchmaske?",
        "Tauchmasken.",
        "Tauchmaskes.",
        "Tauchmaske ohne Änderung."
      ],
      [
        "Was zählen die Pluralsätze nicht?",
        "Die Fotos.",
        "Die Endung als Sprachform.",
        "Die Wörter auf einem Lernblatt."
      ]
    ]
  },
  {
    "id": "bilder-sind-kein-pruefzeugnis",
    "level": "B1",
    "title": [
      "Bilder sind kein Prüfzeugnis",
      "الصور مش شهادة اختبار"
    ],
    "lines": [
      [
        "Tarek",
        "Darf ich schreiben, dass die Brille dicht ist und allen passt?",
        "ينفع أكتب إن النضارة مابتسربش ومقاسها مناسب للكل؟"
      ],
      [
        "Jule",
        "Nicht aufgrund dieser Fotos. Ein dokumentierter Test fehlt.",
        "مش على أساس الصور دي. مفيش اختبار موثق."
      ],
      [
        "Tarek",
        "Dann beschreibe ich nur Farbe, Teile und Halteposition.",
        "يبقى أوصف اللون والأجزاء وطريقة المسك بس."
      ],
      [
        "Jule",
        "Die Fotos belegen auch kein gemeinsames Set.",
        "والصور برضه مش بتثبت طقم مشترك."
      ],
      [
        "Tarek",
        "Und für echte Größenverhältnisse fehlt eine gemeinsame Skala.",
        "ولنسبة الحجم الحقيقية ناقص مقياس مشترك."
      ],
      [
        "Jule",
        "Genau. Unsere Wörter sind keine Sicherheitsberatung fürs Wasser.",
        "بالظبط. كلماتنا مش نصيحة أمان للمية."
      ],
      [
        "Tarek",
        "Wir bleiben bei der Sprachübung ohne Ausrüstungsversprechen.",
        "هنفضل في تدريب اللغة من غير وعود عن المعدات."
      ]
    ],
    "q": [
      [
        "Was fehlt für die Behauptung dicht?",
        "Ein dokumentierter Test.",
        "Ein sichtbarer Farbton.",
        "Eine Wortkarte."
      ],
      [
        "Was belegen die Fotos auch nicht?",
        "Ein gemeinsames Set.",
        "Zwei Aufnahmen.",
        "Sichtbare Haltepositionen."
      ],
      [
        "Was sind ihre Wörter nicht?",
        "Sicherheitsberatung fürs Wasser.",
        "Eine Sprachübung.",
        "Eine Möglichkeit zur Benennung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "die-brille-haengt-am-band": [
    "Gelbe und schwarze Ränder",
    "Die Brille hängt nach unten.",
    "Wir sehen Hände und die Gegenstände."
  ],
  "eine-brille-mit-zwei-bereichen": [
    "zu einer Schwimmbrille.",
    "ein n: Tauchmasken.",
    "Die Pluralsätze zählen aber nicht unsere Fotos."
  ],
  "bilder-sind-kein-pruefzeugnis": [
    "Ein dokumentierter Test fehlt.",
    "auch kein gemeinsames Set.",
    "keine Sicherheitsberatung fürs Wasser."
  ]
});

everydayDialogues.push(...[
  {
    "id": "welches-bild-ist-violett",
    "level": "A1",
    "title": [
      "Welches Bild ist violett?",
      "أنهي صورة فيها بنفسجي؟"
    ],
    "lines": [
      [
        "Lea",
        "Was liegt auf der Holzfläche?",
        "إيه اللي على سطح الخشب؟"
      ],
      [
        "Karim",
        "Süßkartoffeln mit violetter Schale. Vorn liegt eine schräg.",
        "بطاطا بقشرة بنفسجي. قدام واحدة بالجنب."
      ],
      [
        "Lea",
        "Und was zeigt das andere Foto?",
        "والصورة التانية بتعرض إيه؟"
      ],
      [
        "Karim",
        "Viele hellbraune Stücke Ingwer auf einem Teller.",
        "قطع جنزبيل بني فاتح كتير على طبق."
      ],
      [
        "Lea",
        "Probieren wir die Lebensmittel?",
        "هندوق الأكل؟"
      ],
      [
        "Karim",
        "Nein. Wir beschreiben nur die Fotos.",
        "لأ. إحنا بنوصف الصور بس."
      ],
      [
        "Lea",
        "Dann nennen wir jetzt die Wörter mit Artikel.",
        "يبقى نقول دلوقتي الكلمات بالأداة."
      ]
    ],
    "q": [
      [
        "Wie liegt eine Süßkartoffel vorn?",
        "Schräg.",
        "In einer Flasche.",
        "Hinter einer Tür."
      ],
      [
        "Welche Farbe haben die Ingwerstücke im Foto?",
        "Hellbraun.",
        "Violett.",
        "Blau."
      ],
      [
        "Was machen sie mit den Fotos?",
        "Sie beschreiben sie.",
        "Sie verkaufen das Essen.",
        "Sie prüfen den Geschmack."
      ]
    ]
  },
  {
    "id": "stuecke-ingwer-ohne-plural",
    "level": "A2",
    "title": [
      "Was wird hier gezählt?",
      "إيه اللي بيتعد هنا؟"
    ],
    "lines": [
      [
        "Amir",
        "Warum ist die Pluralzeile bei Ingwer leer?",
        "ليه سطر الجمع عند إنجفر فاضي؟"
      ],
      [
        "Nele",
        "Wir geben hier keinen Plural an. Ingwer ist in dieser Verwendung ein Stoffname.",
        "إحنا هنا مش بنقدم جمع. إنجفر في الاستخدام ده اسم مادة."
      ],
      [
        "Amir",
        "Für einzelne Teile kann ich mehrere Stücke Ingwer sagen.",
        "للأجزاء المنفصلة أقدر أقول قطع جنزبيل متعددة."
      ],
      [
        "Nele",
        "Genau. Stück wird zu Stücke, Ingwer bleibt unverändert.",
        "بالظبط. شتوك بتبقى شتوكه وإنجفر بتفضل زي ما هي."
      ],
      [
        "Amir",
        "Und Süßkartoffel hat die Mehrzahl Süßkartoffeln.",
        "وزوس كارتوفل جمعها زوس كارتوفلن."
      ],
      [
        "Nele",
        "Unsere Beispielsätze sind aber keine Fotozählung.",
        "بس جمل المثال مش عد للصور."
      ],
      [
        "Amir",
        "Dann trenne ich die Wortnotiz von der Bildbeschreibung.",
        "يبقى أفصل ملحوظة الكلمة عن وصف الصورة."
      ]
    ],
    "q": [
      [
        "Was geben sie bei Ingwer nicht an?",
        "Einen Plural.",
        "Einen Artikel.",
        "Einen Namen."
      ],
      [
        "Was bleibt in Stücke Ingwer unverändert?",
        "Ingwer.",
        "Stück.",
        "Die ganze Mengenangabe."
      ],
      [
        "Was sind die Beispielsätze nicht?",
        "Eine Fotozählung.",
        "Eine Sprachübung.",
        "Beispiele für Wortformen."
      ]
    ]
  },
  {
    "id": "das-bild-liefert-kein-guetesiegel",
    "level": "B1",
    "title": [
      "Das Bild liefert kein Gütesiegel",
      "الصورة مش بتقدم شهادة جودة"
    ],
    "lines": [
      [
        "Tarek",
        "Kann ich frisch und biologisch angebaut unter die Fotos schreiben?",
        "ينفع أكتب طازة وزراعة عضوية تحت الصور؟"
      ],
      [
        "Jule",
        "Dafür haben wir weder ein Erntedatum noch eine Bescheinigung.",
        "معندناش لده تاريخ حصاد ولا شهادة."
      ],
      [
        "Tarek",
        "Dann bleiben violette Schalen und hellbraune Stücke als Beschreibung.",
        "يبقى نسيب القشور البنفسجي والقطع البني الفاتح كوصف."
      ],
      [
        "Jule",
        "Auch ein Gesundheitsversprechen gehört nicht in unsere Wortübung.",
        "ووعد صحي برضه مش مكانه تدريب الكلمات بتاعنا."
      ],
      [
        "Tarek",
        "Ich nenne keine Wirkung und keine Dosierung für Ingwer.",
        "مش هقول مفعول ولا جرعة للجنزبيل."
      ],
      [
        "Jule",
        "Genau. Die Bilder sind auch keine Zubereitungsanleitung.",
        "بالظبط. الصور برضه مش تعليمات تحضير."
      ],
      [
        "Tarek",
        "Wir trennen Namen, Beobachtungen und offene Fragen.",
        "هنفصل الأسامي والملاحظات والأسئلة المفتوحة."
      ]
    ],
    "q": [
      [
        "Was fehlt für frisch und biologisch angebaut?",
        "Erntedatum und Bescheinigung.",
        "Jede sichtbare Farbe.",
        "Jeder deutsche Name."
      ],
      [
        "Was nennt Tarek für Ingwer nicht?",
        "Wirkung und Dosierung.",
        "Den Namen.",
        "Die sichtbare Farbe."
      ],
      [
        "Was sind die Bilder nicht?",
        "Eine Zubereitungsanleitung.",
        "Eine Grundlage für Wortkarten.",
        "Eine sichtbare Anordnung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "welches-bild-ist-violett": [
    "Vorn liegt eine schräg.",
    "Viele hellbraune Stücke Ingwer",
    "Wir beschreiben nur die Fotos."
  ],
  "stuecke-ingwer-ohne-plural": [
    "Wir geben hier keinen Plural an.",
    "Ingwer bleibt unverändert.",
    "keine Fotozählung."
  ],
  "das-bild-liefert-kein-guetesiegel": [
    "weder ein Erntedatum noch eine Bescheinigung.",
    "keine Wirkung und keine Dosierung",
    "keine Zubereitungsanleitung."
  ]
});

everydayDialogues.push(...[
  {
    "id": "papaya-offen-quitte-hinter-blatt",
    "level": "A1",
    "title": [
      "Die Quitte hinter dem Blatt",
      "السفرجلة ورا الورقة"
    ],
    "lines": [
      [
        "Lea",
        "Was sehen wir in der offenen Papaya?",
        "شايفين إيه في البابايا المفتوحة؟"
      ],
      [
        "Karim",
        "Gelbes Fruchtfleisch und viele dunkle Kerne.",
        "لب أصفر وبذور غامقة كتير."
      ],
      [
        "Lea",
        "Und wie viele Quitten zeigt das zweite Foto?",
        "والصورة التانية فيها كام ثمرة سفرجل؟"
      ],
      [
        "Karim",
        "Drei. Die rechte Quitte ist teilweise hinter einem Blatt.",
        "تلاتة. السفرجلة اللي يمين جزء منها ورا ورقة."
      ],
      [
        "Lea",
        "Sehen wir auch ihr Inneres?",
        "شايفين جوهها كمان؟"
      ],
      [
        "Karim",
        "Nein. Die Quitten sind nicht aufgeschnitten.",
        "لأ. السفرجل مش مقطوع."
      ],
      [
        "Lea",
        "Dann beschreiben wir dort nur die sichtbare Außenseite.",
        "يبقى نوصف هناك الجزء الخارجي اللي باين بس."
      ]
    ],
    "q": [
      [
        "Was ist um die Papayakerne herum zu sehen?",
        "Gelbes Fruchtfleisch.",
        "Ein Preisschild.",
        "Ein Holzdeckel."
      ],
      [
        "Welche Quitte ist teilweise verdeckt?",
        "Die rechte.",
        "Keine, alle liegen frei.",
        "Nur eine im Kühlschrank."
      ],
      [
        "Welche Seite der Quitten beschreiben sie?",
        "Die sichtbare Außenseite.",
        "Eine frei erfundene Innenseite.",
        "Nur eine Verpackung."
      ]
    ]
  },
  {
    "id": "papayas-quitten-endungen-nicht-kopieren",
    "level": "A2",
    "title": [
      "Die Endungen nicht kopieren",
      "ماننسخش نهاية الكلمة"
    ],
    "lines": [
      [
        "Amir",
        "Beide Namen haben den Artikel die. Haben sie auch dieselbe Pluralendung?",
        "الاسمين أداتهم دي. جمعهم كمان ليه نفس النهاية؟"
      ],
      [
        "Nele",
        "Nein. Wir lernen die Papaya, die Papayas und die Quitte, die Quitten.",
        "لأ. بنتعلم دي بابايا ودي باباياس ودي كفيته ودي كفيتن."
      ],
      [
        "Amir",
        "Bei Papayas bleibt das y und ein s kommt dazu.",
        "في باباياس الواي بتفضل وبيتضاف إس."
      ],
      [
        "Nele",
        "Bei Quitten kommt ein n an Quitte.",
        "في كفيتن بيتضاف إن لكفيته."
      ],
      [
        "Amir",
        "Daraus machen wir keine Regel für alle femininen Obstnamen.",
        "مش هنعمل من ده قاعدة لكل أسامي الفاكهة المؤنث."
      ],
      [
        "Nele",
        "Und die offene Hälfte zählen wir nicht als zusätzliche ganze Papaya.",
        "ومش هنعد النص المفتوح على إنه بابايا كاملة زيادة."
      ],
      [
        "Amir",
        "Ich trenne die Wortformen von der Beschreibung des Fotos.",
        "هفصل صيغ الكلمات عن وصف الصورة."
      ]
    ],
    "q": [
      [
        "Welche Formen nennt Nele?",
        "Papayas und Quitten.",
        "Papayen und Quittes.",
        "Papaya und Quitte als gleiche Pluralformen."
      ],
      [
        "Was kommt an Quitte hinzu?",
        "Ein n.",
        "Ein s.",
        "Ein y."
      ],
      [
        "Was trennen sie?",
        "Wortformen und Bildbeschreibung.",
        "Zwei bezahlte Bestellungen.",
        "Rezepte und Kochzeiten."
      ]
    ]
  },
  {
    "id": "nicht-jede-ansicht-zeigt-das-innere",
    "level": "B1",
    "title": [
      "Nicht jede Ansicht zeigt das Innere",
      "مش كل منظر بيعرض اللي جوه"
    ],
    "lines": [
      [
        "Tarek",
        "Soll ich bei beiden Fotos das Fruchtfleisch beschreiben?",
        "أوصف اللب في الصورتين؟"
      ],
      [
        "Jule",
        "Nur die Papaya zeigt hier eine offene Schnittfläche.",
        "البابايا بس اللي بتعرض هنا سطح قطع مفتوح."
      ],
      [
        "Tarek",
        "Bei den Quitten bleiben wir bei Schalen, Blättern und Holz.",
        "في السفرجل هنكتفي بالقشرة والورق والخشب."
      ],
      [
        "Jule",
        "Das Blatt vor der rechten Frucht begrenzt unsere Sicht.",
        "الورقة قدام الثمرة اليمين بتحجب جزء من رؤيتنا."
      ],
      [
        "Tarek",
        "Auch die Farbe ersetzt keinen Geschmacks- oder Reifetest.",
        "وكمان اللون مش بديل لاختبار طعم أو نضج."
      ],
      [
        "Jule",
        "Genau. Wir geben keine Essens- oder Zubereitungsempfehlung.",
        "بالظبط. مش بنقدم توصية أكل أو تحضير."
      ],
      [
        "Tarek",
        "Offene Fragen schreibe ich neben den Text, statt sie zu erfinden.",
        "هكتب الأسئلة المفتوحة جنب النص بدل ما أخترع إجاباتها."
      ]
    ],
    "q": [
      [
        "Welches Foto zeigt eine offene Schnittfläche?",
        "Das Papayafoto.",
        "Das Quittenfoto.",
        "Keines von beiden."
      ],
      [
        "Was begrenzt bei der rechten Quitte die Sicht?",
        "Ein Blatt.",
        "Ein Verpackungsetikett.",
        "Ein Preisschild."
      ],
      [
        "Was geben sie nicht?",
        "Eine Essens- oder Zubereitungsempfehlung.",
        "Eine Beschreibung sichtbarer Farben.",
        "Eine Zuordnung zu den Obstnamen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "papaya-offen-quitte-hinter-blatt": [
    "Gelbes Fruchtfleisch und viele dunkle Kerne.",
    "Die rechte Quitte ist teilweise hinter einem Blatt.",
    "die sichtbare Außenseite."
  ],
  "papayas-quitten-endungen-nicht-kopieren": [
    "die Papayas und die Quitte, die Quitten.",
    "Bei Quitten kommt ein n an Quitte.",
    "die Wortformen von der Beschreibung des Fotos."
  ],
  "nicht-jede-ansicht-zeigt-das-innere": [
    "Nur die Papaya zeigt hier eine offene Schnittfläche.",
    "Das Blatt vor der rechten Frucht begrenzt unsere Sicht.",
    "keine Essens- oder Zubereitungsempfehlung."
  ]
});

everydayDialogues.push(...[
  {
    "id": "harfe-buecher-mandoline-stoff",
    "level": "A1",
    "title": [
      "Bücher hinter der Harfe",
      "كتب ورا الهارب"
    ],
    "lines": [
      [
        "Lea",
        "Was sehen wir vor den Bücherregalen?",
        "شايفين إيه قدام رفوف الكتب؟"
      ],
      [
        "Karim",
        "Den oberen Teil einer Harfe mit vielen Saiten.",
        "الجزء اللي فوق من هارب بأوتار كتير."
      ],
      [
        "Lea",
        "Und welches Instrument steht vor dem dunklen Stoff?",
        "وأنهي آلة قدام القماش الغامق؟"
      ],
      [
        "Karim",
        "Eine Mandoline. Ihr Kopf liegt außerhalb des Bildes.",
        "ماندولين. راسها برا الصورة."
      ],
      [
        "Lea",
        "Brennen die zwei Kerzen daneben?",
        "الشمعتين اللي جنبها والعتين؟"
      ],
      [
        "Karim",
        "Nein. Es sind keine Flammen zu sehen.",
        "لأ. مفيش لهب باين."
      ],
      [
        "Lea",
        "Dann beschreiben wir die Instrumente und ihren sichtbaren Hintergrund.",
        "يبقى نوصف الآلات وخلفيتها اللي باينة."
      ]
    ],
    "q": [
      [
        "Welcher Teil der Harfe ist zu sehen?",
        "Der obere Teil.",
        "Nur ein Fußpedal.",
        "Nur eine Tasche."
      ],
      [
        "Was liegt außerhalb des Mandolinenbildes?",
        "Der Kopf des Instruments.",
        "Der ganze Körper.",
        "Jeder Apfel."
      ],
      [
        "Was ist an den Kerzen nicht sichtbar?",
        "Flammen.",
        "Ihre längliche Form.",
        "Ihr Platz neben dem Instrument."
      ]
    ]
  },
  {
    "id": "harfen-mandolinen-saiten-unterscheiden",
    "level": "A2",
    "title": [
      "Ein Instrument mit vielen Saiten",
      "آلة واحدة بأوتار كتير"
    ],
    "lines": [
      [
        "Amir",
        "Das Foto zeigt viele Saiten. Schreiben wir deshalb Harfen darunter?",
        "الصورة فيها أوتار كتير. نكتب عشان كده هارفن تحتها؟"
      ],
      [
        "Nele",
        "Nein. Mehrere Saiten gehören hier zu einer Harfe.",
        "لأ. أوتار متعددة هنا تبع هارب واحدة."
      ],
      [
        "Amir",
        "Die Mehrzahl lernen wir extra: Harfen und Mandolinen.",
        "هنتعلم الجمع لوحده: هارفن وماندولينن."
      ],
      [
        "Nele",
        "Genau. Unter jedem Foto bleibt der Instrumentenname im Singular.",
        "بالظبط. تحت كل صورة اسم الآلة بيفضل بالمفرد."
      ],
      [
        "Amir",
        "Der Kopf der Mandoline ist nicht sichtbar. Fehlt er am Instrument?",
        "راس الماندولين مش باينة. هي ناقصة من الآلة؟"
      ],
      [
        "Nele",
        "Das wissen wir nicht. Die Aufnahme zeigt ihn nicht.",
        "مانعرفش. الصورة مش بتعرضها."
      ],
      [
        "Amir",
        "Dann beschreibe ich die Bildgrenze und behaupte keinen Schaden.",
        "يبقى أوصف حدود الصورة ومش أدعي إن فيه تلف."
      ]
    ],
    "q": [
      [
        "Wozu gehören die mehreren Saiten hier?",
        "Zu einer Harfe.",
        "Zu mehreren fotografierten Harfen.",
        "Zu einem Küchenhobel."
      ],
      [
        "Wo bleibt der Name im Singular?",
        "Unter jedem Foto.",
        "Nirgends, er wird überall ersetzt.",
        "Nur in einer Rechnung."
      ],
      [
        "Was zeigt die Aufnahme der Mandoline nicht?",
        "Ihren Kopf.",
        "Den ganzen Körper.",
        "Den gesamten Hals."
      ]
    ]
  },
  {
    "id": "keine-tonaufnahme-kein-klangurteil",
    "level": "B1",
    "title": [
      "Keine Tonaufnahme, kein Klangurteil",
      "مفيش تسجيل مفيش حكم على الصوت"
    ],
    "lines": [
      [
        "Tarek",
        "Kann ich den Klang der Harfe als weich beschreiben?",
        "أقدر أوصف صوت الهارب إنه ناعم؟"
      ],
      [
        "Jule",
        "Wir haben keine Tonaufnahme genau dieses Instruments.",
        "معندناش تسجيل صوت للآلة دي نفسها."
      ],
      [
        "Tarek",
        "Dann nenne ich die goldfarbene Verzierung und die sichtbaren Saiten.",
        "يبقى أقول الزخرفة اللي لونها دهبي والأوتار اللي باينة."
      ],
      [
        "Jule",
        "Goldfarben bedeutet aber nicht, dass echtes Gold nachgewiesen ist.",
        "بس لون دهبي مش معناه إن دهب حقيقي اتثبت."
      ],
      [
        "Tarek",
        "Bei der Mandoline beschreibe ich Körper, Öffnungen und Hals.",
        "في الماندولين هوصف الجسم والفتحات والرقبة."
      ],
      [
        "Jule",
        "Auch Zustand und Stimmung sind damit nicht geprüft.",
        "وكمان الحالة وضبط الأوتار ماتراجعوش بكده."
      ],
      [
        "Tarek",
        "Unsere Wortkarten bleiben ohne Spiel- oder Reparaturanleitung.",
        "كروت الكلمات بتاعتنا هتفضل من غير تعليمات عزف أو إصلاح."
      ]
    ],
    "q": [
      [
        "Was haben sie nicht?",
        "Eine Tonaufnahme genau dieses Instruments.",
        "Ein Foto mit sichtbaren Saiten.",
        "Eine passende Wortkarte."
      ],
      [
        "Was ist durch goldfarben nicht nachgewiesen?",
        "Echtes Gold.",
        "Eine sichtbare Verzierung.",
        "Eine Farbbeschreibung."
      ],
      [
        "Was ist durch die Bildbeschreibung nicht geprüft?",
        "Zustand und Stimmung.",
        "Der sichtbare Hintergrund.",
        "Die gelernten Namen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "harfe-buecher-mandoline-stoff": [
    "Den oberen Teil einer Harfe",
    "Ihr Kopf liegt außerhalb des Bildes.",
    "Es sind keine Flammen zu sehen."
  ],
  "harfen-mandolinen-saiten-unterscheiden": [
    "Mehrere Saiten gehören hier zu einer Harfe.",
    "Unter jedem Foto bleibt der Instrumentenname im Singular.",
    "Der Kopf der Mandoline ist nicht sichtbar."
  ],
  "keine-tonaufnahme-kein-klangurteil": [
    "keine Tonaufnahme genau dieses Instruments.",
    "nicht, dass echtes Gold nachgewiesen ist.",
    "Zustand und Stimmung sind damit nicht geprüft."
  ]
});

everydayDialogues.push(...[
  {
    "id": "brezel-oder-bagel-erkennen",
    "level": "A1",
    "title": [
      "Welches Gebäck meinst du?",
      "تقصد أنهي مخبوزات؟"
    ],
    "lines": [
      [
        "Lea",
        "Welches Gebäck liegt auf dem hellen Teller?",
        "أنهي مخبوزات على الطبق الفاتح؟"
      ],
      [
        "Karim",
        "Die Brezel. Ihr Teig kreuzt sich vorn.",
        "البريتسل. عجينتها متقاطعة قدام."
      ],
      [
        "Lea",
        "Und was liegt auf dem weißen Teller?",
        "وإيه اللي على الطبق الأبيض؟"
      ],
      [
        "Karim",
        "Zwei Hälften eines Bagels. Eine liegt schräg auf der anderen.",
        "نصين لبيجل واحدة. واحدة مايلة فوق التانية."
      ],
      [
        "Lea",
        "Meinst du also zwei ganze Bagel?",
        "يعني تقصد اتنين بيجل كاملين؟"
      ],
      [
        "Karim",
        "Nein, ich beschreibe die beiden Hälften.",
        "لأ، بوصف النصين."
      ],
      [
        "Lea",
        "Gut. Dann lege ich die passende Wortkarte daneben.",
        "تمام. يبقى أحط كارت الكلمة المناسب جنبها."
      ]
    ],
    "q": [
      [
        "Was kreuzt sich vorn?",
        "Der Teig der Brezel.",
        "Der Rand des Tellers.",
        "Der Henkel einer Tasse."
      ],
      [
        "Was liegt auf dem weißen Teller?",
        "Zwei Hälften eines Bagels.",
        "Zwei ganze Brezeln.",
        "Nur eine Gabel."
      ],
      [
        "Was legt Lea daneben?",
        "Die passende Wortkarte.",
        "Einen neuen Einkaufskorb.",
        "Eine Rechnung."
      ]
    ]
  },
  {
    "id": "bagel-bagels-beide-formen",
    "level": "A2",
    "title": [
      "Beide Pluralformen bleiben richtig",
      "صيغتين الجمع صح"
    ],
    "lines": [
      [
        "Amir",
        "Ich sehe zwei Teile. Sind das zwei Bagels?",
        "شايف جزئين. دول اتنين بيجل؟"
      ],
      [
        "Nele",
        "Nein, hier sehen wir zwei Hälften eines aufgeschnittenen Bagels.",
        "لأ، هنا شايفين نصين لبيجل واحدة مفتوحة."
      ],
      [
        "Amir",
        "Und wie lautet die Mehrzahl des Wortes?",
        "وجمع الكلمة إيه؟"
      ],
      [
        "Nele",
        "Die Bagel und die Bagels sind beide möglich.",
        "دي بيجل ودي بيجلز الاتنين ينفعوا."
      ],
      [
        "Amir",
        "Ich verwende in unserem Text Bagels.",
        "هستخدم في نصنا بيجلز."
      ],
      [
        "Nele",
        "Gut. Die Form Bagel bleibt trotzdem richtig.",
        "تمام. صيغة بيجل بتفضل صح برضه."
      ],
      [
        "Amir",
        "Bei Brezel notiere ich Brezeln und zähle die Randstücke nicht vollständig.",
        "في بريتسل هكتب بريتسلن ومش هعد أجزاء الحافة كأنها كلها باينة."
      ]
    ],
    "q": [
      [
        "Was sehen sie auf dem Foto?",
        "Zwei Hälften eines Bagels.",
        "Zwei ganze Brotkörbe.",
        "Einen leeren Teller."
      ],
      [
        "Welche Form bleibt neben Bagels richtig?",
        "Bagel.",
        "Bägeler.",
        "Bageln als hier gelernter Plural."
      ],
      [
        "Welche Form notiert Amir bei Brezel?",
        "Brezeln.",
        "Brezels.",
        "Brezeler."
      ]
    ]
  },
  {
    "id": "welcher-bagel-welche-information",
    "level": "B1",
    "title": [
      "Erst die Frage genau stellen",
      "خلّي السؤال محدد الأول"
    ],
    "lines": [
      [
        "Tarek",
        "Ist das dort geeignet?",
        "الحاجة دي مناسبة؟"
      ],
      [
        "Jule",
        "Welches Gebäck meinst du, und welche Information brauchst du?",
        "تقصد أنهي مخبوزات ومحتاج أنهي معلومة؟"
      ],
      [
        "Tarek",
        "Ich meine den aufgeschnittenen Bagel auf dem Foto.",
        "أقصد البيجل المفتوحة اللي في الصورة."
      ],
      [
        "Jule",
        "Dann frage gezielt nach der Zutaten- und Allergeninformation zu diesem Produkt.",
        "يبقى اسأل بالتحديد عن معلومات المكونات ومسببات الحساسية للمنتج ده."
      ],
      [
        "Tarek",
        "Das Foto allein beantwortet meine Frage also nicht.",
        "يعني الصورة لوحدها مش بتجاوب سؤالي."
      ],
      [
        "Jule",
        "Genau. Eine bestätigte Auskunft liegt in unserem Dialog noch nicht vor.",
        "بالظبط. لسه مفيش معلومة متأكدة في حوارنا."
      ],
      [
        "Tarek",
        "Dann lasse ich das Antwortfeld offen und erfinde keine Zusage.",
        "يبقى أسيب خانة الإجابة فاضية ومش أخترع تأكيد."
      ]
    ],
    "q": [
      [
        "Welches Gebäck meint Tarek?",
        "Den aufgeschnittenen Bagel auf dem Foto.",
        "Eine unsichtbare Torte.",
        "Alle Brote eines Geschäfts."
      ],
      [
        "Was beantwortet seine Frage nicht allein?",
        "Das Foto.",
        "Eine passende bestätigte Auskunft.",
        "Eine konkrete Produktinformation."
      ],
      [
        "Was macht er mit dem Antwortfeld?",
        "Er lässt es offen.",
        "Er trägt eine erfundene Zusage ein.",
        "Er bestätigt eine Bestellung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "brezel-oder-bagel-erkennen": [
    "Ihr Teig kreuzt sich vorn.",
    "Zwei Hälften eines Bagels.",
    "Dann lege ich die passende Wortkarte daneben."
  ],
  "bagel-bagels-beide-formen": [
    "zwei Hälften eines aufgeschnittenen Bagels.",
    "Die Form Bagel bleibt trotzdem richtig.",
    "Bei Brezel notiere ich Brezeln"
  ],
  "welcher-bagel-welche-information": [
    "Ich meine den aufgeschnittenen Bagel auf dem Foto.",
    "Das Foto allein beantwortet meine Frage also nicht.",
    "Dann lasse ich das Antwortfeld offen"
  ]
});

everydayDialogues.push(...[
  {
    "id": "die-karten-sind-vertauscht",
    "level": "A1",
    "title": [
      "Die Karten sind vertauscht",
      "الكروت متبدلة"
    ],
    "lines": [
      [
        "Lea",
        "Hier liegt die Donutkarte neben dem ersten Foto.",
        "هنا الكارت اللي عليه دير دونات جنب الصورة الأولى."
      ],
      [
        "Karim",
        "Auf dem ersten Foto sehen wir aber Muffins in Papierförmchen.",
        "بس في الصورة الأولى شايفين مافن في قوالب ورق."
      ],
      [
        "Lea",
        "Dann habe ich die Karten vertauscht.",
        "يبقى أنا بدلت الكروت بالغلط."
      ],
      [
        "Karim",
        "Die Donutkarte gehört neben das Foto mit dem offenen Buch.",
        "كارت الدونات مكانه جنب الصورة اللي فيها كتاب مفتوح."
      ],
      [
        "Lea",
        "Gut, ich tausche sie. Jetzt passt es.",
        "تمام، هبدلهم. دلوقتي كده صح."
      ],
      [
        "Karim",
        "Lies bitte beide Namen mit Artikel vor.",
        "اقري لو سمحتي الاسمين بالأداة."
      ],
      [
        "Lea",
        "Der Muffin und der Donut.",
        "دير مافن ودير دونات."
      ]
    ],
    "q": [
      [
        "Was zeigt das erste Foto?",
        "Muffins in Papierförmchen.",
        "Nur einen Donut.",
        "Eine leere Buchseite."
      ],
      [
        "Wohin gehört die Donutkarte?",
        "Neben das Foto mit dem offenen Buch.",
        "In den Kühlschrank.",
        "Neben ein unsichtbares Fenster."
      ],
      [
        "Wie soll Lea die Namen vorlesen?",
        "Mit Artikel.",
        "Nur rückwärts.",
        "Ohne die Wörter zu nennen."
      ]
    ]
  },
  {
    "id": "variante-oder-tippfehler",
    "level": "A2",
    "title": [
      "Variante oder Tippfehler?",
      "صيغة بديلة ولا غلطة كتابة؟"
    ],
    "lines": [
      [
        "Amir",
        "Ich habe auch die Schreibung Doughnut gefunden. Ist sie falsch?",
        "لقيت كمان كتابة دوغنات. هي غلط؟"
      ],
      [
        "Nele",
        "Nein. Donut und Doughnut sind beide mögliche Schreibweisen.",
        "لأ. دونات ودوغنات الاتنين ينفعوا في الكتابة."
      ],
      [
        "Amir",
        "Wir bleiben auf unserer Karte bei Donut und Donuts.",
        "هنفضل على كارتنا مع دونات ودوناتس."
      ],
      [
        "Nele",
        "Gut. Die andere Schreibung notieren wir am Rand.",
        "تمام. الكتابة التانية نسجلها على الجنب."
      ],
      [
        "Amir",
        "Bei Muffin habe ich aber nur ein f geschrieben.",
        "بس في مافن كتبت إف واحدة بس."
      ],
      [
        "Nele",
        "Das verbessern wir. Muffin hat zwei f.",
        "دي نصلحها. مافن فيها اتنين إف."
      ],
      [
        "Amir",
        "Dann ist nicht jede Abweichung automatisch ein Fehler.",
        "يبقى مش كل اختلاف غلطة تلقائيًا."
      ]
    ],
    "q": [
      [
        "Welche zusätzliche Schreibung hat Amir gefunden?",
        "Doughnut.",
        "Dognutten.",
        "Muffine."
      ],
      [
        "Welche Form verwenden sie auf ihrer Karte?",
        "Donut und Donuts.",
        "Nur Donutten.",
        "Nur Doughnutten."
      ],
      [
        "Wie viele f hat Muffin?",
        "Zwei.",
        "Eins.",
        "Keins."
      ]
    ]
  },
  {
    "id": "welches-stueck-meinen-sie",
    "level": "B1",
    "title": [
      "Welches Stück meinen Sie?",
      "تقصد أنهي قطعة؟"
    ],
    "lines": [
      [
        "Tarek",
        "Ich hätte gern den da.",
        "عايز دي لو سمحت."
      ],
      [
        "Jule",
        "Meinen Sie den Muffin im Papierförmchen oder den Donut mit dem rosa Belag?",
        "تقصد المافن في قالب الورق ولا الدونات اللي عليها طبقة بينك؟"
      ],
      [
        "Tarek",
        "In unserem Rollenspiel meine ich den Donut.",
        "في تمثيل الأدوار بتاعنا أقصد الدونات."
      ],
      [
        "Jule",
        "Dann haben wir den Bezug geklärt, aber noch keinen echten Preis.",
        "كده وضحنا المقصود بس لسه مفيش سعر حقيقي."
      ],
      [
        "Tarek",
        "Jetzt tauschen wir die Rollen. Welche Beschreibung ist deutlicher?",
        "دلوقتي نبدل الأدوار. أنهي وصف أوضح؟"
      ],
      [
        "Jule",
        "Ein sichtbares Merkmal hilft mehr als nur rechts oder links.",
        "صفة باينة تساعد أكتر من يمين أو شمال بس."
      ],
      [
        "Tarek",
        "Danach prüfen wir, ob wir dasselbe Stück meinen.",
        "بعد كده نتأكد إننا نقصد نفس القطعة."
      ]
    ],
    "q": [
      [
        "Welches Gebäck meint Tarek im Rollenspiel?",
        "Den Donut.",
        "Eine Torte.",
        "Ein Croissant."
      ],
      [
        "Was ist noch nicht bekannt?",
        "Ein echter Preis.",
        "Der gemeinte Gegenstand.",
        "Die genannte Farbe."
      ],
      [
        "Was prüfen sie danach?",
        "Ob sie dasselbe Stück meinen.",
        "Ob ein Betrieb bezahlt wurde.",
        "Ob die Fotos identisch groß sind."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "die-karten-sind-vertauscht": [
    "Auf dem ersten Foto sehen wir aber Muffins in Papierförmchen.",
    "Die Donutkarte gehört neben das Foto mit dem offenen Buch.",
    "Lies bitte beide Namen mit Artikel vor."
  ],
  "variante-oder-tippfehler": [
    "Ich habe auch die Schreibung Doughnut gefunden.",
    "Wir bleiben auf unserer Karte bei Donut und Donuts.",
    "Muffin hat zwei f."
  ],
  "welches-stueck-meinen-sie": [
    "In unserem Rollenspiel meine ich den Donut.",
    "aber noch keinen echten Preis.",
    "ob wir dasselbe Stück meinen."
  ]
});

everydayDialogues.push(...[
  {
    "id": "krawattenmuster-und-baerengesicht",
    "level": "A1",
    "title": [
      "Welche Karte passt?",
      "أنهي كارت مناسب؟"
    ],
    "lines": [
      [
        "Lea",
        "Welche Krawatte meinst du?",
        "تقصد أنهي كرافتة؟"
      ],
      [
        "Karim",
        "Die rote mit den kleinen Ringen.",
        "الحمرا اللي عليها حلقات صغيرة."
      ],
      [
        "Lea",
        "Und welches Wort gehört zum braunen Handschuh?",
        "وأنهي كلمة تخص الجوانتي البني؟"
      ],
      [
        "Karim",
        "Der Fäustling. Der Daumen hat einen eigenen Teil.",
        "دير فويستلينج. الإبهام ليه جزء لوحده."
      ],
      [
        "Lea",
        "Vorn sehe ich ein Bärengesicht als Verzierung.",
        "قدام شايفة زينة على شكل وش دب."
      ],
      [
        "Karim",
        "Dann lege die zweite Karte neben dieses Foto.",
        "يبقى حطي الكارت التاني جنب الصورة دي."
      ],
      [
        "Lea",
        "Gut. Jetzt lese ich beide Namen mit Artikel.",
        "تمام. دلوقتي هقرا الاسمين بالأداة."
      ]
    ],
    "q": [
      [
        "Welche Krawatte meint Karim?",
        "Die rote mit den kleinen Ringen.",
        "Eine unsichtbare schwarze.",
        "Nur eine blaue Mütze."
      ],
      [
        "Welcher Teil hat einen eigenen Bereich?",
        "Der Daumen.",
        "Jeder einzelne Finger sichtbar.",
        "Ein Schuhabsatz."
      ],
      [
        "Was ist das Bärengesicht hier?",
        "Eine Verzierung.",
        "Ein lebender Bär.",
        "Der Name des Besitzers."
      ]
    ]
  },
  {
    "id": "ein-sichtbarer-faeustling",
    "level": "A2",
    "title": [
      "Wo ist das zweite Stück?",
      "القطعة التانية فين؟"
    ],
    "lines": [
      [
        "Amir",
        "Ich schreibe ein Paar Fäustlinge unter das Foto.",
        "هكتب زوج جوانتيات تحت الصورة."
      ],
      [
        "Nele",
        "Wo siehst du den zweiten Fäustling?",
        "شايف الجوانتي التاني فين؟"
      ],
      [
        "Amir",
        "Im Ausschnitt erkenne ich nur einen.",
        "في الجزء الظاهر شايف واحدة بس."
      ],
      [
        "Nele",
        "Dann beschreibe ein Stück, nicht ein sichtbares Paar.",
        "يبقى اوصف قطعة مش زوج باين."
      ],
      [
        "Amir",
        "Die Person kann trotzdem einen zweiten besitzen.",
        "الشخص ممكن مع كده يكون عنده واحدة تانية."
      ],
      [
        "Nele",
        "Ja. Das Foto beantwortet diese Frage nicht.",
        "أيوه. الصورة مش بتجاوب السؤال ده."
      ],
      [
        "Amir",
        "Die Mehrzahl Fäustlinge bleibt als Wortform auf der Karte.",
        "الجمع فويستلينجه يفضل كصيغة كلمة على الكارت."
      ]
    ],
    "q": [
      [
        "Wie viele Fäustlinge erkennt Amir im Ausschnitt?",
        "Einen.",
        "Vier.",
        "Keinen."
      ],
      [
        "Was kann die Person trotzdem besitzen?",
        "Einen zweiten Fäustling.",
        "Sicher keine Kleidung.",
        "Nur die Wortkarte."
      ],
      [
        "Was bleibt auf der Karte?",
        "Die Mehrzahlform Fäustlinge.",
        "Ein bestätigter Kaufpreis.",
        "Eine genaue Temperaturangabe."
      ]
    ]
  },
  {
    "id": "fundstueck-erst-beschreiben",
    "level": "B1",
    "title": [
      "Ein passendes Bild ist kein Nachweis",
      "الصورة المناسبة مش إثبات"
    ],
    "lines": [
      [
        "Tarek",
        "Ich suche einen braunen Fäustling mit einem Bärengesicht.",
        "بدور على جوانتي بني بصوابع متجمعة وعليه وش دب."
      ],
      [
        "Jule",
        "Welche weiteren Merkmale kann deine Figur aus eigener Erinnerung nennen?",
        "إيه الصفات الزيادة اللي شخصيتك تقدر تقولها من ذاكرتها؟"
      ],
      [
        "Tarek",
        "Eine Marke erfinde ich nicht. Auf dem Foto ist keine lesbar.",
        "مش هخترع ماركة. مفيش واحدة مقروءة في الصورة."
      ],
      [
        "Jule",
        "Ein passendes Bild bestätigt noch keine Rückgabe.",
        "الصورة المناسبة لسه مش بتأكد إرجاع الحاجة."
      ],
      [
        "Tarek",
        "Bei der Krawatte sage ich rot mit kleinen Ringen statt nur bunt.",
        "في الكرافتة هقول حمرا بحلقات صغيرة بدل ملونة بس."
      ],
      [
        "Jule",
        "Auch das beschreibt erst den Gegenstand, nicht seinen Eigentümer.",
        "وده برضه بيوصف الحاجة الأول مش صاحبها."
      ],
      [
        "Tarek",
        "Dann trennen wir Beschreibung, Aussage und offene Zuordnung.",
        "يبقى نفصل الوصف والكلام المتقال وربط الملكية اللي لسه مفتوح."
      ]
    ],
    "q": [
      [
        "Welche Marke nennt Tarek?",
        "Keine, er erfindet keine.",
        "Eine bestätigte aus dem Innenetikett.",
        "Eine aus einem Kaufbeleg."
      ],
      [
        "Was bestätigt ein passendes Bild noch nicht?",
        "Eine Rückgabe.",
        "Eine mögliche Ähnlichkeit.",
        "Eine sichtbare Farbe."
      ],
      [
        "Was beschreibt rot mit kleinen Ringen zunächst?",
        "Den Gegenstand.",
        "Den nachgewiesenen Eigentümer.",
        "Die bestätigte Öffnungszeit."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "krawattenmuster-und-baerengesicht": [
    "Die rote mit den kleinen Ringen.",
    "Der Daumen hat einen eigenen Teil.",
    "ein Bärengesicht als Verzierung."
  ],
  "ein-sichtbarer-faeustling": [
    "Im Ausschnitt erkenne ich nur einen.",
    "Die Person kann trotzdem einen zweiten besitzen.",
    "Die Mehrzahl Fäustlinge bleibt als Wortform auf der Karte."
  ],
  "fundstueck-erst-beschreiben": [
    "Eine Marke erfinde ich nicht.",
    "Ein passendes Bild bestätigt noch keine Rückgabe.",
    "Auch das beschreibt erst den Gegenstand"
  ]
});

everydayDialogues.push(...[
  {
    "id": "korken-oben-schachtel-schraeg",
    "level": "A1",
    "title": [
      "Oben an der Flasche",
      "فوق الإزازة"
    ],
    "lines": [
      [
        "Lea",
        "Wo siehst du den Korken?",
        "شايف سدادة الفلين فين؟"
      ],
      [
        "Karim",
        "Oben in der Öffnung der kleinen Flasche.",
        "فوق في فتحة الإزازة الصغيرة."
      ],
      [
        "Lea",
        "Welche Karte gehört zum zweiten Foto?",
        "أنهي كارت يخص الصورة التانية؟"
      ],
      [
        "Karim",
        "Die Karte mit \"das Streichholz\". Die Köpfe sind grün.",
        "الكارت اللي عليه داس شترايشهولتس. الروس خضرا."
      ],
      [
        "Lea",
        "Liegt die Schachtel gerade?",
        "العلبة مستقيمة؟"
      ],
      [
        "Karim",
        "Nein, sie liegt schräg auf dem Stoff.",
        "لأ، مايلة على القماش."
      ],
      [
        "Lea",
        "Dann ordnen wir die Namen den Fotos zu.",
        "يبقى نوصل الأسامي بالصور."
      ]
    ],
    "q": [
      [
        "Wo ist der Korken zu sehen?",
        "Oben in der Flaschenöffnung.",
        "Unter jedem Streichholz.",
        "In einer Schublade."
      ],
      [
        "Wie sind die Köpfe gefärbt?",
        "Grün.",
        "Blau.",
        "Weiß."
      ],
      [
        "Was ordnen sie zu?",
        "Die Namen zu den Fotos.",
        "Eine echte Lieferung.",
        "Einen unbekannten Preis."
      ]
    ]
  },
  {
    "id": "korken-bleibt-korken",
    "level": "A2",
    "title": [
      "Bleibt das Wort gleich?",
      "الكلمة بتفضل زي ما هي؟"
    ],
    "lines": [
      [
        "Amir",
        "Wie schreibe ich die Mehrzahl von Korken?",
        "أكتب جمع كوركن إزاي؟"
      ],
      [
        "Nele",
        "Die Korken. Das Wort selbst bleibt gleich.",
        "دي كوركن. الكلمة نفسها بتفضل زي ما هي."
      ],
      [
        "Amir",
        "Bei Streichholz ist es anders.",
        "في شترايشهولتس الموضوع مختلف."
      ],
      [
        "Nele",
        "Ja, die Mehrzahl lautet Streichhölzer, mit ö und er.",
        "أيوه، الجمع شترايشهولتسر بأو بنقطتين وإر."
      ],
      [
        "Amir",
        "Ich schreibe aber keine genaue Anzahl unter die Schachtel.",
        "بس مش هكتب عدد دقيق تحت العلبة."
      ],
      [
        "Nele",
        "Richtig. Ein Teil des Bildes fehlt, und die Stiele überlagern sich.",
        "صح. جزء من الصورة مش ظاهر والأجسام متداخلة."
      ],
      [
        "Amir",
        "Die Beispielsätze markieren wir extra als Wortübung.",
        "جمل الأمثلة نعلمها لوحدها إنها تدريب كلمات."
      ]
    ],
    "q": [
      [
        "Was bleibt bei Korken gleich?",
        "Das Wort selbst.",
        "Jeder Artikel in jedem Satz.",
        "Die Zahl der fotografierten Steine."
      ],
      [
        "Was gehört zu Streichhölzer?",
        "ö und die Endung er.",
        "Nur ein zusätzliches s.",
        "Ein a statt o."
      ],
      [
        "Was markieren sie als Wortübung?",
        "Die Beispielsätze.",
        "Eine bezahlte Rechnung.",
        "Einen tatsächlichen Bestand."
      ]
    ]
  },
  {
    "id": "gegenstaende-oder-wortkarten",
    "level": "B1",
    "title": [
      "Geht es um die Karten?",
      "المقصود الكروت؟"
    ],
    "lines": [
      [
        "Tarek",
        "Auf dem Zettel stehen Korken und Streichhölzer. Soll ich Gegenstände mitbringen?",
        "على الورقة مكتوب فلين وكبريت. أجيب حاجات حقيقية؟"
      ],
      [
        "Jule",
        "In unserer Szene sind nur zwei beschriftete Bildkarten gemeint.",
        "في مشهدنا المقصود كارتين صور مكتوب عليهم الأسامي بس."
      ],
      [
        "Tarek",
        "Dann bereite ich die Karte \"Korken\" vor.",
        "يبقى أجهز كارت كوركن."
      ],
      [
        "Jule",
        "Ich übernehme die Karte \"Streichholz\".",
        "أنا أتولى كارت شترايشهولتس."
      ],
      [
        "Tarek",
        "Wir schreiben auch die Handlung und unsere Namen dazu.",
        "نكتب كمان الفعل وأسامينا جنبهم."
      ],
      [
        "Jule",
        "Genau. Echte Gegenstände werden dafür nicht gebraucht.",
        "بالظبط. مش محتاجين حاجات حقيقية للمطلوب ده."
      ],
      [
        "Tarek",
        "So wird aus der unklaren Liste ein eindeutiger Kartenauftrag.",
        "كده القايمة المش واضحة تبقى مهمة كروت محددة."
      ]
    ],
    "q": [
      [
        "Was ist in der Szene gemeint?",
        "Zwei beschriftete Bildkarten.",
        "Ein echter Kauf.",
        "Ein Versuch mit Flammen."
      ],
      [
        "Welche Karte übernimmt Tarek?",
        "Korken.",
        "Streichholz.",
        "Beide ohne Absprache."
      ],
      [
        "Was schreiben sie zusätzlich dazu?",
        "Die Handlung und ihre Namen.",
        "Einen erfundenen Preis.",
        "Eine ungeprüfte Füllmenge."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "korken-oben-schachtel-schraeg": [
    "Oben in der Öffnung der kleinen Flasche.",
    "Die Köpfe sind grün.",
    "Dann ordnen wir die Namen den Fotos zu."
  ],
  "korken-bleibt-korken": [
    "Das Wort selbst bleibt gleich.",
    "mit ö und er.",
    "Die Beispielsätze markieren wir extra als Wortübung."
  ],
  "gegenstaende-oder-wortkarten": [
    "nur zwei beschriftete Bildkarten gemeint.",
    "Dann bereite ich die Karte \"Korken\" vor.",
    "Wir schreiben auch die Handlung und unsere Namen dazu."
  ]
});

everydayDialogues.push(...[
  {
    "id": "ball-ohne-loch-ring-mit-loch",
    "level": "A1",
    "title": [
      "Die Öffnung in der Mitte",
      "الفتحة اللي في النص"
    ],
    "lines": [
      [
        "Mara",
        "Welches Bild gehört zu \"der Basketball\"?",
        "أنهي صورة تخص دير باسكتبال؟"
      ],
      [
        "Sami",
        "Das erste. Der orangebraune Ball liegt auf grauem Boden.",
        "الأولى. الكورة البرتقاني البني على أرض رمادي."
      ],
      [
        "Mara",
        "Und woran erkennst du den Schwimmring?",
        "وبتتعرف على العوامة الدائرية من إيه؟"
      ],
      [
        "Sami",
        "Er hat eine große Öffnung in der Mitte.",
        "فيها فتحة كبيرة في النص."
      ],
      [
        "Mara",
        "Was ist auf der weißen Fläche zu sehen?",
        "إيه اللي باين على السطح الأبيض؟"
      ],
      [
        "Sami",
        "Bunte Früchte, blaue Blätter und schwarze Punkte.",
        "فواكه ملونة وورق أزرق ونقط سودا."
      ],
      [
        "Mara",
        "Jetzt decke ich die Wörter ab, und wir tauschen die Rollen.",
        "دلوقتي هغطي الكلمات ونبدل الأدوار."
      ]
    ],
    "q": [
      [
        "Wo liegt der Ball?",
        "Auf grauem Boden.",
        "Auf Wasser.",
        "Im Schrank."
      ],
      [
        "Was hat der Schwimmring in der Mitte?",
        "Eine große Öffnung.",
        "Einen Griff.",
        "Einen Spiegel."
      ],
      [
        "Was deckt Mara ab?",
        "Die Wörter.",
        "Das Wasser.",
        "Einen Preis."
      ]
    ]
  },
  {
    "id": "sportwort-und-bildwort",
    "level": "A2",
    "title": [
      "Meinst du die Sportart?",
      "تقصد الرياضة؟"
    ],
    "lines": [
      [
        "Emil",
        "Beim Wort Basketball denke ich zuerst an die Sportart.",
        "أول ما بسمع باسكتبال بفكر في الرياضة."
      ],
      [
        "Nora",
        "Auf unserer neuen Fotokarte ist aber der einzelne Ball gemeint.",
        "بس على كارت صورتنا الجديد المقصود الكورة الواحدة."
      ],
      [
        "Emil",
        "Dann notiere ich \"der Basketball\" und \"die Basketbälle\".",
        "يبقى أكتب دير باسكتبال ودي باسكتبيله."
      ],
      [
        "Nora",
        "Genau. Beim Schwimmring lautet die Mehrzahl Schwimmringe.",
        "بالظبط. جمع شفيمرينج شفيمرينجه."
      ],
      [
        "Emil",
        "Ich achte auch auf die beiden m in Schwimmring.",
        "هاخد بالي كمان من حرفين إم في شفيمرينج."
      ],
      [
        "Nora",
        "Die Sportverwendung legen wir als Vergleich daneben.",
        "استخدام الرياضة نحطه جنبهم للمقارنة."
      ],
      [
        "Emil",
        "So bleibt klar, welche Bedeutung wir gerade üben.",
        "كده يفضل واضح أنهي معنى بنتدرب عليه دلوقتي."
      ]
    ],
    "q": [
      [
        "Was ist auf der neuen Fotokarte gemeint?",
        "Der einzelne Ball.",
        "Eine Mannschaft.",
        "Ein Termin."
      ],
      [
        "Welche Mehrzahl nennt Emil?",
        "Basketbälle.",
        "Basketballs.",
        "Basketballen."
      ],
      [
        "Worauf achtet Emil bei Schwimmring?",
        "Auf die beiden m.",
        "Auf ein ä.",
        "Auf einen Bindestrich."
      ]
    ]
  },
  {
    "id": "motiv-und-lage-klar-benennen",
    "level": "B1",
    "title": [
      "Aufgedruckt oder dabei?",
      "مرسوم ولا موجود معاه؟"
    ],
    "lines": [
      [
        "Liv",
        "Der Satz mit Bananen und Erdbeeren ist mir zu ungenau.",
        "الجملة اللي فيها موز وفراولة مش دقيقة كفاية بالنسبالي."
      ],
      [
        "Adam",
        "Du meinst, dass echte Früchte erwartet werden könnten?",
        "تقصد إن ممكن حد يتوقع فواكه حقيقية؟"
      ],
      [
        "Liv",
        "Ja. Wir schreiben ausdrücklich, dass die Motive aufgedruckt sind.",
        "أيوه. نكتب بوضوح إن الرسومات مطبوعة."
      ],
      [
        "Adam",
        "Beim Balltext stimmt außerdem die Lage zur Linie nicht.",
        "في نص الكورة كمان الموقع بالنسبة للخط مش صح."
      ],
      [
        "Liv",
        "Die Linie verläuft links neben dem Ball, nicht umgekehrt.",
        "الخط ماشي شمال الكورة مش العكس."
      ],
      [
        "Adam",
        "Dann korrigieren wir diese Beziehung aus der Bildperspektive.",
        "يبقى نصحح العلاقة دي من منظور الصورة."
      ],
      [
        "Liv",
        "Und wir ergänzen keine ungeprüften Produkteigenschaften.",
        "ومانزودش صفات منتج ماتراجعتش."
      ]
    ],
    "q": [
      [
        "Was soll ausdrücklich im Ringtext stehen?",
        "Dass die Motive aufgedruckt sind.",
        "Dass echte Früchte geliefert werden.",
        "Dass ein Kauf bezahlt ist."
      ],
      [
        "Wo verläuft die weiße Linie?",
        "Links neben dem Ball.",
        "Im Loch des Rings.",
        "Auf einer Tafel."
      ],
      [
        "Was ergänzen sie nicht?",
        "Ungeprüfte Produkteigenschaften.",
        "Eine sprachliche Korrektur.",
        "Die Bildperspektive."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "ball-ohne-loch-ring-mit-loch": [
    "Der orangebraune Ball liegt auf grauem Boden.",
    "Er hat eine große Öffnung in der Mitte.",
    "Jetzt decke ich die Wörter ab, und wir tauschen die Rollen."
  ],
  "sportwort-und-bildwort": [
    "Auf unserer neuen Fotokarte ist aber der einzelne Ball gemeint.",
    "Dann notiere ich \"der Basketball\" und \"die Basketbälle\".",
    "Ich achte auch auf die beiden m in Schwimmring."
  ],
  "motiv-und-lage-klar-benennen": [
    "Wir schreiben ausdrücklich, dass die Motive aufgedruckt sind.",
    "Die Linie verläuft links neben dem Ball, nicht umgekehrt.",
    "Und wir ergänzen keine ungeprüften Produkteigenschaften."
  ]
});

everydayDialogues.push(...[
  {
    "id": "form-statt-nur-farbe",
    "level": "A1",
    "title": [
      "Jetzt bist du dran",
      "دلوقتي دورك"
    ],
    "lines": [
      [
        "Mara",
        "Ich beschreibe eine Karte: Die Früchte sind grün und rund.",
        "هوصف كارت: الثمار خضرا ومدورة."
      ],
      [
        "Sami",
        "Du meinst die Limetten auf dem gelben Grund.",
        "تقصد الليمون الأخضر على الخلفية الصفرا."
      ],
      [
        "Mara",
        "Richtig. Jetzt bist du dran.",
        "صح. دلوقتي دورك."
      ],
      [
        "Sami",
        "Auf meiner Karte sieht man eine Holzbank.",
        "على كارتي فيه دكة خشب."
      ],
      [
        "Mara",
        "Dann sind es die Zucchini.",
        "يبقى دي الكوسة."
      ],
      [
        "Sami",
        "Bei der nächsten Runde nenne ich nur die Farbe.",
        "في الجولة الجاية هقول اللون بس."
      ],
      [
        "Mara",
        "Die reicht hier nicht. Nenne bitte auch die Form.",
        "اللون مش كفاية هنا. قول الشكل كمان."
      ]
    ],
    "q": [
      [
        "Welche Früchte meint Mara?",
        "Die Limetten.",
        "Die Äpfel.",
        "Die Birnen."
      ],
      [
        "Was sieht man auf Samis Karte?",
        "Eine Holzbank.",
        "Eine Treppe.",
        "Einen Spiegel."
      ],
      [
        "Was soll Sami zusätzlich nennen?",
        "Die Form.",
        "Einen Preis.",
        "Eine Telefonnummer."
      ]
    ]
  },
  {
    "id": "beide-zucchini-plurale-gelten",
    "level": "A2",
    "title": [
      "Mit oder ohne s",
      "بحرف إس أو من غيره"
    ],
    "lines": [
      [
        "Emil",
        "Muss die Mehrzahl von Zucchini anders aussehen?",
        "جمع تسوكيني لازم شكله يختلف؟"
      ],
      [
        "Nora",
        "Nein. Zucchini und Zucchinis sind beide möglich.",
        "لأ. تسوكيني وتسوكينيس الاتنين ينفعوا."
      ],
      [
        "Emil",
        "Dann lassen wir beide Formen gelten.",
        "يبقى نقبل الصيغتين."
      ],
      [
        "Nora",
        "Achte beim Schreiben auf cch.",
        "خد بالك في الكتابة من سي سي إتش."
      ],
      [
        "Emil",
        "In meinem ersten Entwurf fehlte ein c.",
        "في مسودتي الأولى كان ناقص سي."
      ],
      [
        "Nora",
        "Und bei Limette lautet die Mehrzahl Limetten.",
        "وفي ليميته الجمع ليميتن."
      ],
      [
        "Emil",
        "Die Einzahl schreiben wir auf die Rückseite.",
        "المفرد نكتبه على الضهر."
      ]
    ],
    "q": [
      [
        "Welche Formen sind im Spiel möglich?",
        "Zucchini und Zucchinis.",
        "Nur Zucchinis.",
        "Nur Zucchini."
      ],
      [
        "Welcher Buchstabe fehlte bei Emil?",
        "Ein c.",
        "Ein m.",
        "Ein t."
      ],
      [
        "Wohin schreiben sie die Einzahl?",
        "Auf die Rückseite.",
        "An die Tür.",
        "In den Kalender."
      ]
    ]
  },
  {
    "id": "neue-regel-ab-runde-zwei",
    "level": "B1",
    "title": [
      "Ab der zweiten Runde",
      "من الجولة التانية"
    ],
    "lines": [
      [
        "Liv",
        "Meine Antwort Zucchini wurde nicht gezählt.",
        "إجابتي تسوكيني ماتحسبتش."
      ],
      [
        "Adam",
        "Unsere Liste war zu eng. Beide Mehrzahlformen sind möglich.",
        "قايمتنا كانت ضيقة. صيغتين الجمع ينفعوا."
      ],
      [
        "Liv",
        "Dann korrigieren wir genau dieses Ergebnis.",
        "يبقى نصحح النتيجة دي بالتحديد."
      ],
      [
        "Adam",
        "Für eine schwierigere Runde könnten wir Hinweise auf den Hintergrund ausschließen.",
        "لجولة أصعب ممكن نستبعد تلميحات الخلفية."
      ],
      [
        "Liv",
        "Sollen wir damit sofort anfangen?",
        "نبدأ بده فورًا؟"
      ],
      [
        "Adam",
        "Erst in Runde zwei, nachdem wir die neue Regel erklärt haben.",
        "في الجولة التانية بس بعد ما نشرح القاعدة الجديدة."
      ],
      [
        "Liv",
        "Gut. Wortformen und Beschreibungsregeln schreiben wir getrennt auf.",
        "تمام. صيغ الكلمات وقواعد الوصف نكتبهم منفصلين."
      ]
    ],
    "q": [
      [
        "Was war zu eng?",
        "Die Lösungsliste.",
        "Der Raum.",
        "Die Holzbank."
      ],
      [
        "Welche Hinweise sollen in der schwierigeren Runde nicht genügen?",
        "Hinweise auf den Hintergrund.",
        "Hinweise auf die Form.",
        "Hinweise auf sichtbare Streifen."
      ],
      [
        "Was passiert vor der zweiten Runde?",
        "Die neue Regel wird erklärt.",
        "Alle alten Ergebnisse werden gelöscht.",
        "Die Karten werden verkauft."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "form-statt-nur-farbe": [
    "Du meinst die Limetten auf dem gelben Grund.",
    "Auf meiner Karte sieht man eine Holzbank.",
    "Nenne bitte auch die Form."
  ],
  "beide-zucchini-plurale-gelten": [
    "Zucchini und Zucchinis sind beide möglich.",
    "In meinem ersten Entwurf fehlte ein c.",
    "Die Einzahl schreiben wir auf die Rückseite."
  ],
  "neue-regel-ab-runde-zwei": [
    "Unsere Liste war zu eng.",
    "Hinweise auf den Hintergrund ausschließen.",
    "nachdem wir die neue Regel erklärt haben."
  ]
});

everydayDialogues.push(...[
  {
    "id": "wortkarte-unter-dem-heft",
    "level": "A1",
    "title": [
      "Such unter dem Heft",
      "دور تحت الكراسة"
    ],
    "lines": [
      [
        "Mara",
        "Die Karte mit Stachelbeere fehlt noch.",
        "كارت شتاخلبيره لسه ناقص."
      ],
      [
        "Sami",
        "Ich sehe nur die grüne Schale auf dem Foto.",
        "أنا شايف الطبق الأخضر في الصورة بس."
      ],
      [
        "Mara",
        "Wir suchen die Papierkarte. Schau bitte unter das Heft.",
        "بندور على كارت الورق. بص تحت الكراسة."
      ],
      [
        "Sami",
        "Hier ist sie. Ich lege sie unter das zweite Bild.",
        "أهي. هحطها تحت الصورة التانية."
      ],
      [
        "Mara",
        "Kannst du auch die Mehrzahl aufschreiben?",
        "ممكن تكتب الجمع كمان؟"
      ],
      [
        "Sami",
        "Ja: Stachelbeeren und Nektarinen.",
        "أيوه: شتاخلبيرن ونكتارينن."
      ],
      [
        "Mara",
        "Gut. Das Heft bleibt rechts neben den Bildern.",
        "تمام. الكراسة تفضل يمين الصور."
      ]
    ],
    "q": [
      [
        "Was suchen die beiden?",
        "Eine Papierkarte.",
        "Eine echte Schale.",
        "Einen Schlüssel."
      ],
      [
        "Wohin legt Sami die Karte?",
        "Unter das zweite Bild.",
        "In die Dose.",
        "Neben die Tür."
      ],
      [
        "Welche Mehrzahl nennt Sami?",
        "Stachelbeeren und Nektarinen.",
        "Stachelbeeres und Nektarines.",
        "Stachelbeer und Nektarin."
      ]
    ]
  },
  {
    "id": "zwei-durchgaenge-mit-rollentausch",
    "level": "A2",
    "title": [
      "Frag nach dem Artikel",
      "اسأل على أداة التعريف"
    ],
    "lines": [
      [
        "Nora",
        "Wollen wir die neuen Wörter mehrmals abschreiben?",
        "ننقل الكلمات الجديدة كذا مرة؟"
      ],
      [
        "Emil",
        "Ich würde lieber erst lesen und dann die Karten umdrehen.",
        "أنا أفضل نقرا الأول وبعد كده نقلب الكروت."
      ],
      [
        "Nora",
        "Gut. Die Fotos bleiben sichtbar, und ich frage zuerst.",
        "تمام. الصور تفضل باينة وأنا أسأل الأول."
      ],
      [
        "Emil",
        "Danach wechseln wir. Bei einem fehlenden Wort machst du nur eine Markierung.",
        "بعد كده نبدل. لو كلمة ناقصة اعملي علامة بس."
      ],
      [
        "Nora",
        "Und wenn ich den Artikel vergesse?",
        "ولو نسيت أداة التعريف؟"
      ],
      [
        "Emil",
        "Dann frage ich gezielt danach. Beide neuen Nomen haben die.",
        "هسأل عليها بالتحديد. الاسمين الجداد أداتهم دي."
      ],
      [
        "Nora",
        "Am Ende vergleichen wir mit der Vorlage.",
        "في الآخر نقارن بالنموذج."
      ]
    ],
    "q": [
      [
        "Was möchte Emil nach dem Lesen machen?",
        "Die Wortkarten umdrehen.",
        "Die Fotos zerreißen.",
        "Sofort neue Früchte kaufen."
      ],
      [
        "Was soll Nora bei einem fehlenden Wort machen?",
        "Eine Markierung.",
        "Die Antwort heimlich ergänzen.",
        "Die ganze Liste löschen."
      ],
      [
        "Womit vergleichen sie am Ende?",
        "Mit der Vorlage.",
        "Mit einer Rechnung.",
        "Mit dem Kalender."
      ]
    ]
  },
  {
    "id": "uebergang-mit-einer-frage",
    "level": "B1",
    "title": [
      "Lass mich erst ausreden",
      "سيبني أكمل الأول"
    ],
    "lines": [
      [
        "Liv",
        "Unsere beiden Einleitungen sagen fast dasselbe.",
        "المقدمتين بتوعنا بيقولوا تقريبًا نفس الكلام."
      ],
      [
        "Adam",
        "Dann benenne ich die Fotos, und du erklärst die Mehrzahl.",
        "يبقى أنا أسمي الصور وإنت تشرحي الجمع."
      ],
      [
        "Liv",
        "Beim Wechsel habe ich dich gerade zu früh unterbrochen.",
        "وقت التبديل أنا قاطعتك بدري من شوية."
      ],
      [
        "Adam",
        "Lass mich erst beide Bilder benennen. Dann frage ich nach mehreren Früchten.",
        "سيبيني أسمي الصورتين الأول. بعد كده أسأل عن كذا ثمرة."
      ],
      [
        "Liv",
        "Diese Frage ist mein Zeichen. Danach beginne ich.",
        "السؤال ده إشارتي. بعده أبدأ."
      ],
      [
        "Adam",
        "Genau. Wir haben bisher nur gemeinsam geprobt.",
        "بالظبط. إحنا لحد دلوقتي عملنا بروفة مع بعض بس."
      ],
      [
        "Liv",
        "Ob andere es verstehen, fragen wir erst nach der Vorstellung.",
        "إذا غيرنا فاهمين ولا لأ نسأل بعد التقديم بس."
      ]
    ],
    "q": [
      [
        "Wer erklärt die Mehrzahl?",
        "Liv.",
        "Adam.",
        "Das Publikum."
      ],
      [
        "Wann beginnt Liv ihren Teil?",
        "Nach Adams vereinbarter Frage.",
        "Bei jeder kleinen Pause.",
        "Bevor Adam das zweite Bild benennt."
      ],
      [
        "Was haben die beiden bisher gemacht?",
        "Gemeinsam geprobt.",
        "Rückmeldungen des Publikums erhalten.",
        "Früchte bestellt."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "wortkarte-unter-dem-heft": [
    "Wir suchen die Papierkarte.",
    "Ich lege sie unter das zweite Bild.",
    "Stachelbeeren und Nektarinen."
  ],
  "zwei-durchgaenge-mit-rollentausch": [
    "erst lesen und dann die Karten umdrehen.",
    "Bei einem fehlenden Wort machst du nur eine Markierung.",
    "Am Ende vergleichen wir mit der Vorlage."
  ],
  "uebergang-mit-einer-frage": [
    "du erklärst die Mehrzahl.",
    "Diese Frage ist mein Zeichen. Danach beginne ich.",
    "Wir haben bisher nur gemeinsam geprobt."
  ]
});

everydayDialogues.push(...[
  {
    "id": "kumquat-links-litschi-rechts",
    "level": "A1",
    "title": [
      "Schreib in die Mitte",
      "اكتب في النص"
    ],
    "lines": [
      [
        "Mara",
        "Links liegt das Kumquatfoto, rechts das Litschifoto.",
        "على الشمال صورة الكمكوات وعلى اليمين صورة الليتشي."
      ],
      [
        "Sami",
        "Und die leere Karte liegt dazwischen.",
        "والكارت الفاضي بينهم."
      ],
      [
        "Mara",
        "Schreib bitte beide Namen auf die Karte.",
        "اكتب الاسمين على الكارت."
      ],
      [
        "Sami",
        "Oben Kumquat und unten Litschi?",
        "فوق كمكوات وتحت ليتشي؟"
      ],
      [
        "Mara",
        "Genau. Ergänze auch die Artikel.",
        "بالظبط. زود أدوات التعريف كمان."
      ],
      [
        "Sami",
        "Beide haben die. Die Mehrzahl schreiben wir auf die Rückseite.",
        "الاتنين أداتهم دي. الجمع نكتبه على الضهر."
      ],
      [
        "Mara",
        "Ja: Kumquats und Litschis, beide mit s am Ende.",
        "أيوه: كمكواتس وليتشيس الاتنين بإس في الآخر."
      ]
    ],
    "q": [
      [
        "Wo liegt die leere Karte?",
        "Zwischen den Fotos.",
        "Im Glas.",
        "Unter dem Stuhl."
      ],
      [
        "Was soll Sami zusätzlich schreiben?",
        "Die Artikel.",
        "Einen Preis.",
        "Seine Adresse."
      ],
      [
        "Welche Mehrzahlformen nennt Mara?",
        "Kumquats und Litschis.",
        "Kumquaten und Litschen.",
        "Kumquat und Litschi."
      ]
    ]
  },
  {
    "id": "k-vor-l-ohne-artikel",
    "level": "A2",
    "title": [
      "Nicht nach die sortieren",
      "مش نرتب على أساس دي"
    ],
    "lines": [
      [
        "Emil",
        "Beide Karten fangen mit die an. Wie soll ich sie sortieren?",
        "الكارتين بيبدأوا بدي. أرتبهم إزاي؟"
      ],
      [
        "Nora",
        "Vergleiche die Nomen selbst: Kumquat und Litschi.",
        "قارن الأسماء نفسها: كمكوات وليتشي."
      ],
      [
        "Emil",
        "Dann kommt Kumquat zuerst, weil K vor L steht.",
        "يبقى كمكوات الأول عشان كي قبل إل."
      ],
      [
        "Nora",
        "Richtig. Die Fotos bleiben zunächst verdeckt.",
        "صح. الصور تفضل مقلوبة في الأول."
      ],
      [
        "Emil",
        "Erst sortieren, dann die Wörter den Bildern zuordnen.",
        "نرتب الأول وبعد كده نوصل الكلمات بالصور."
      ],
      [
        "Nora",
        "Ich schreibe diese beiden Schritte genauer auf.",
        "هكتب الخطوتين دول بشكل أدق."
      ],
      [
        "Emil",
        "Ob das für die andere Gruppe reicht, müssen wir noch ausprobieren.",
        "لسه محتاجين نجرب إذا ده كفاية للمجموعة التانية."
      ]
    ],
    "q": [
      [
        "Was soll Emil vergleichen?",
        "Die Nomen selbst.",
        "Nur den Artikel die.",
        "Die Größe des Papiers."
      ],
      [
        "Was passiert zuerst?",
        "Die Wortkarten werden sortiert.",
        "Die Bilder werden verkauft.",
        "Die Fotos werden umgedreht."
      ],
      [
        "Was bleibt noch zu prüfen?",
        "Ob die Anweisung für die andere Gruppe reicht.",
        "Ob beide Wörter mit die stehen.",
        "Ob Kumquat ein K am Anfang hat."
      ]
    ]
  },
  {
    "id": "perspektive-vor-dem-legen",
    "level": "B1",
    "title": [
      "Aus deiner Sicht",
      "من ناحيتك إنت"
    ],
    "lines": [
      [
        "Liv",
        "Für mich liegt die Kumquatkarte jetzt auf der falschen Seite.",
        "بالنسبالي كارت الكمكوات دلوقتي في الناحية الغلط."
      ],
      [
        "Adam",
        "Ich habe sie aus meiner Sicht nach links gelegt.",
        "أنا حطيته على الشمال من ناحيتي."
      ],
      [
        "Liv",
        "Dann war die Perspektive nicht klar. Wir nehmen zunächst deine Sicht.",
        "يبقى المنظور ماكانش واضح. ناخد ناحيتك الأول."
      ],
      [
        "Adam",
        "Ich wiederhole die Anweisung, bevor ich die Karten verschiebe.",
        "هكرر التعليمات قبل ما أحرك الكروت."
      ],
      [
        "Liv",
        "Ja. So kann ich erst dein Verständnis bestätigen.",
        "أيوه. كده أقدر أأكد فهمك الأول."
      ],
      [
        "Adam",
        "Und das Ergebnis prüfen wir, nachdem die Karten liegen.",
        "والنتيجة نراجعها بعد ما الكروت تتحط."
      ],
      [
        "Liv",
        "Beim Rollentausch sagst du dann ausdrücklich: aus Livs Sicht.",
        "ولما نبدل الأدوار تقول بوضوح من ناحية ليف."
      ]
    ],
    "q": [
      [
        "Aus welcher Sicht hat Adam zuerst gelegt?",
        "Aus seiner eigenen.",
        "Aus Livs.",
        "Aus der eines Zuschauers."
      ],
      [
        "Wann wiederholt Adam die Anweisung?",
        "Vor dem Verschieben der Karten.",
        "Erst nach dem Aufräumen.",
        "Gar nicht."
      ],
      [
        "Wann prüfen sie das Ergebnis?",
        "Nachdem die Karten liegen.",
        "Bevor Adam etwas versteht.",
        "Schon vor der Erklärung der Perspektive."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "kumquat-links-litschi-rechts": [
    "die leere Karte liegt dazwischen.",
    "Ergänze auch die Artikel.",
    "Kumquats und Litschis, beide mit s am Ende."
  ],
  "k-vor-l-ohne-artikel": [
    "Vergleiche die Nomen selbst",
    "Erst sortieren, dann die Wörter den Bildern zuordnen.",
    "müssen wir noch ausprobieren."
  ],
  "perspektive-vor-dem-legen": [
    "aus meiner Sicht nach links gelegt.",
    "bevor ich die Karten verschiebe.",
    "nachdem die Karten liegen."
  ]
});

everydayDialogues.push(...[
  {
    "id": "hagebutten-mirabellen-mit-n",
    "level": "A1",
    "title": [
      "Beide mit n",
      "الاتنين بإن"
    ],
    "lines": [
      [
        "Lea",
        "Hier stehen die Hagebutte und die Mirabelle.",
        "هنا مكتوب دي هاجه بوته ودي ميرابيله."
      ],
      [
        "Ben",
        "Und wie heißen die Mehrzahlformen?",
        "وجمعهم إيه؟"
      ],
      [
        "Lea",
        "Hagebutten und Mirabellen. Bei beiden kommt ein n dazu.",
        "هاجه بوتن وميرابيلن. بنزود إن للاتنين."
      ],
      [
        "Ben",
        "Der Artikel bleibt also die.",
        "يعني أداة التعريف بتفضل دي."
      ],
      [
        "Lea",
        "Ja. Ich decke jetzt die rechte Spalte zu.",
        "أيوه. هغطي العمود اليمين دلوقتي."
      ],
      [
        "Ben",
        "Ich schreibe beide Formen noch einmal ohne Vorlage.",
        "هكتب الصيغتين تاني من غير نموذج قدامي."
      ],
      [
        "Lea",
        "Danach vergleichen wir die Buchstaben.",
        "بعد كده نقارن الحروف."
      ]
    ],
    "q": [
      [
        "Was kommt bei beiden Wörtern dazu?",
        "Ein n.",
        "Ein e.",
        "Ein s."
      ],
      [
        "Was bleibt gleich?",
        "Der Artikel die.",
        "Die Zahl der Buchstaben.",
        "Die ganze Wortform."
      ],
      [
        "Wann vergleichen sie die Buchstaben?",
        "Nach dem Schreiben ohne Vorlage.",
        "Vor jeder Erklärung.",
        "Erst nach einem Einkauf."
      ]
    ]
  },
  {
    "id": "sichtbares-und-vermutetes",
    "level": "A2",
    "title": [
      "Den Ort offenlassen",
      "نسيب المكان مفتوح"
    ],
    "lines": [
      [
        "Mina",
        "Ich sehe Früchte zwischen grünen Blättern.",
        "شايفة ثمار وسط ورق أخضر."
      ],
      [
        "Oskar",
        "Das schreibe ich zu den Beobachtungen.",
        "هكتب ده مع الملاحظات."
      ],
      [
        "Mina",
        "Das ist bestimmt ein großer Garten.",
        "دي أكيد جنينة كبيرة."
      ],
      [
        "Oskar",
        "Vielleicht. Aber der Bildausschnitt zeigt das nicht sicher.",
        "ممكن. بس الكادر مش موضح ده بشكل أكيد."
      ],
      [
        "Mina",
        "Dann kommt dieser Satz in die Spalte für Vermutungen.",
        "يبقى الجملة دي في عمود التخمينات."
      ],
      [
        "Oskar",
        "Genau. Den Ort lassen wir in der Beschreibung offen.",
        "بالظبط. نسيب المكان مفتوح في الوصف."
      ],
      [
        "Mina",
        "Wir arbeiten nur mit den vorbereiteten Bildern am Tisch.",
        "إحنا شغالين بالصور المتحضرة على الترابيزة بس."
      ]
    ],
    "q": [
      [
        "Was ist direkt sichtbar?",
        "Früchte zwischen grünen Blättern.",
        "Die Größe des ganzen Gartens.",
        "Die Adresse des Ortes."
      ],
      [
        "Wohin kommt der Satz über den Garten?",
        "Zu den Vermutungen.",
        "Zu den sicheren Beobachtungen.",
        "In eine Preisliste."
      ],
      [
        "Womit arbeiten sie?",
        "Mit vorbereiteten Bildern am Tisch.",
        "Mit einem echten Ernteauftrag.",
        "Mit einer Pflanzenprüfung draußen."
      ]
    ]
  },
  {
    "id": "farbe-ohne-unbelegte-ursache",
    "level": "B1",
    "title": [
      "Was belegt das Bild?",
      "الصورة بتثبت إيه؟"
    ],
    "lines": [
      [
        "Rami",
        "Ich habe geschrieben: Die Früchte sind rot, weil der Standort sonnig ist.",
        "كتبت: الثمار حمرا عشان المكان مشمس."
      ],
      [
        "Jule",
        "Die Farbe sehe ich. Die Ursache belegt das Foto nicht.",
        "شايفة اللون. الصورة مش بتثبت السبب."
      ],
      [
        "Rami",
        "Reicht es, wenn ich vielleicht ergänze?",
        "كفاية أزود يمكن؟"
      ],
      [
        "Jule",
        "Das zeigt Unsicherheit, aber es schafft keinen Beleg.",
        "ده بيبين عدم التأكد بس مش بيعمل دليل."
      ],
      [
        "Rami",
        "Dann beschreibe ich nur die sichtbaren Früchte am Zweig.",
        "يبقى أوصف الثمار الظاهرة على الفرع بس."
      ],
      [
        "Jule",
        "Und die verschiedenen Farben zeigen hier keine zeitliche Reihenfolge.",
        "واختلاف الألوان هنا مش بيبين ترتيب زمني."
      ],
      [
        "Rami",
        "Genau. Wir haben ein einzelnes Foto und keine Bildserie.",
        "بالظبط. معانا صورة واحدة مش سلسلة صور."
      ]
    ],
    "q": [
      [
        "Was ist am Foto sichtbar?",
        "Die Farbe der Früchte.",
        "Die genaue Ursache der Farbe.",
        "Der gesamte Wachstumsverlauf."
      ],
      [
        "Was bewirkt vielleicht?",
        "Es kennzeichnet Unsicherheit, ohne einen Beleg zu schaffen.",
        "Es beweist automatisch eine Ursache.",
        "Es ersetzt eine ganze Bildserie."
      ],
      [
        "Welches Material haben sie?",
        "Ein einzelnes Foto statt einer Bildserie.",
        "Ein Video über das ganze Jahr.",
        "Eine Prüfung unbekannter Pflanzen."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "hagebutten-mirabellen-mit-n": [
    "Bei beiden kommt ein n dazu.",
    "Der Artikel bleibt also die.",
    "Danach vergleichen wir die Buchstaben."
  ],
  "sichtbares-und-vermutetes": [
    "Ich sehe Früchte zwischen grünen Blättern.",
    "in die Spalte für Vermutungen.",
    "mit den vorbereiteten Bildern am Tisch."
  ],
  "farbe-ohne-unbelegte-ursache": [
    "Die Farbe sehe ich.",
    "Das zeigt Unsicherheit, aber es schafft keinen Beleg.",
    "ein einzelnes Foto und keine Bildserie."
  ]
});

everydayDialogues.push(...[
  {
    "id": "zweimal-kern-am-ende",
    "level": "A1",
    "title": [
      "Zwei Wörter mit Kern",
      "كلمتين آخرهم كيرن"
    ],
    "lines": [
      [
        "Jana",
        "Lies bitte der Cashewkern und der Pinienkern.",
        "اقرا دير كاشو كيرن ودير بينين كيرن."
      ],
      [
        "Tim",
        "Beide Wörter enden mit Kern.",
        "الكلمتين آخرهم كيرن."
      ],
      [
        "Jana",
        "Genau. Und beide haben den Artikel der.",
        "بالظبط. والاتنين أداتهم دير."
      ],
      [
        "Tim",
        "In der Mehrzahl heißt es Cashewkerne und Pinienkerne.",
        "في الجمع كاشو كيرنه وبينين كيرنه."
      ],
      [
        "Jana",
        "Bei beiden kommt ein e dazu. Der Artikel ist dann die.",
        "بنزود إي للاتنين. وأداة التعريف ساعتها دي."
      ],
      [
        "Tim",
        "Ich schreibe die Formen jetzt ohne Vorlage.",
        "هكتب الصيغ دلوقتي من غير نموذج قدامي."
      ],
      [
        "Jana",
        "Danach drehen wir die Karten zum Vergleichen um.",
        "بعد كده نقلب الكروت عشان نقارن."
      ]
    ],
    "q": [
      [
        "Was ist bei beiden Wörtern gleich?",
        "Der letzte Wortteil Kern.",
        "Der erste Wortteil.",
        "Die ganze Schreibweise."
      ],
      [
        "Welcher Artikel gilt in der Einzahl?",
        "Der.",
        "Die.",
        "Das."
      ],
      [
        "Wann drehen sie die Karten um?",
        "Nach dem Schreiben ohne Vorlage.",
        "Vor dem ersten Lesen.",
        "Erst nach einem Einkauf."
      ]
    ]
  },
  {
    "id": "bezug-statt-lautstaerke",
    "level": "A2",
    "title": [
      "Nicht lauter, sondern genauer",
      "أدق مش أعلى"
    ],
    "lines": [
      [
        "Elif",
        "Leg ihn bitte unter das Bild.",
        "حطه تحت الصورة."
      ],
      [
        "Paul",
        "Welchen meinst du? Beide Nomen sind maskulin.",
        "تقصد أنهي واحد؟ الاسمين مذكر."
      ],
      [
        "Elif",
        "Ich sage es noch einmal lauter.",
        "هقولها تاني بصوت أعلى."
      ],
      [
        "Paul",
        "Ich höre dich. Mir fehlt der eindeutige Bezug.",
        "سامعك. ناقصني المرجع الواضح."
      ],
      [
        "Elif",
        "Dann: die Wortkarte Cashewkern unter das Foto mit den gebogenen Kernen.",
        "يبقى كارت كاشو كيرن تحت صورة الحبات المقوسة."
      ],
      [
        "Paul",
        "Jetzt ist die Karte klar. Die andere bleibt erst einmal liegen.",
        "دلوقتي الكارت واضح. التاني يفضل مكانه الأول."
      ],
      [
        "Elif",
        "Bei der zweiten Karte gibst du die genaue Anweisung.",
        "في الكارت التاني إنت تدي التعليمات الدقيقة."
      ]
    ],
    "q": [
      [
        "Was fehlt Paul?",
        "Ein eindeutiger Bezug.",
        "Mehr Lautstärke.",
        "Ein neues Telefon."
      ],
      [
        "Welche Wortkarte nennt Elif genauer?",
        "Cashewkern.",
        "Pinienkern.",
        "Hagebutte."
      ],
      [
        "Wer gibt beim zweiten Auftrag die Anweisung?",
        "Paul.",
        "Nur Elif.",
        "Eine dritte Person."
      ]
    ]
  },
  {
    "id": "erst-die-aufgabe-pruefen",
    "level": "B1",
    "title": [
      "Die Änderung festhalten",
      "نسجل اللي اتغير"
    ],
    "lines": [
      [
        "Nils",
        "Beim ersten Versuch war die Person unsicher. Fehlen ihr die Wörter?",
        "في المحاولة الأولى الشخص كان متردد. ناقصه الكلمات؟"
      ],
      [
        "Sora",
        "Das wissen wir noch nicht. Der Bezug in der Anweisung war unklar.",
        "لسه مانعرفش. المرجع في التعليمات ماكانش واضح."
      ],
      [
        "Nils",
        "Dann nennen wir die Wortkarte im zweiten Versuch vollständig.",
        "يبقى نقول اسم كارت الكلمة بالكامل في المحاولة التانية."
      ],
      [
        "Sora",
        "Ja. Die Wörter und Fotos bleiben gleich.",
        "أيوه. الكلمات والصور زي ما هم."
      ],
      [
        "Nils",
        "Im Protokoll notiere ich auch diese Änderung.",
        "هسجل التغيير ده كمان في المحضر."
      ],
      [
        "Sora",
        "Gut. Die richtige Zuordnung ist noch kein Nachweis für späteren freien Abruf.",
        "كويس. التوصيل الصح مش دليل على افتكار حر بعدين."
      ],
      [
        "Nils",
        "Die Aufgabe ohne Bilder planen wir erst noch.",
        "المهمة من غير صور لسه بنخططلها."
      ]
    ],
    "q": [
      [
        "Was war zuerst unklar?",
        "Der Bezug in der Anweisung.",
        "Die Zahl der Fotos im zweiten Versuch.",
        "Der Ort des Tisches."
      ],
      [
        "Was bleibt im zweiten Versuch gleich?",
        "Die Wörter und Fotos.",
        "Der unklare Wortlaut.",
        "Jede mögliche Schwierigkeit."
      ],
      [
        "Was ist erst geplant?",
        "Die Aufgabe ohne Bilder.",
        "Die neue genaue Anweisung.",
        "Die Notiz über die Änderung."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "zweimal-kern-am-ende": [
    "Beide Wörter enden mit Kern.",
    "beide haben den Artikel der.",
    "Danach drehen wir die Karten zum Vergleichen um."
  ],
  "bezug-statt-lautstaerke": [
    "Mir fehlt der eindeutige Bezug.",
    "die Wortkarte Cashewkern",
    "gibst du die genaue Anweisung."
  ],
  "erst-die-aufgabe-pruefen": [
    "Der Bezug in der Anweisung war unklar.",
    "Die Wörter und Fotos bleiben gleich.",
    "Die Aufgabe ohne Bilder planen wir erst noch."
  ]
});

everydayDialogues.push(...[
  {
    "id": "zimtstangen-muskatnuesse",
    "level": "A1",
    "title": [
      "Das ü nicht vergessen",
      "ماننساش اليو أوملاوت"
    ],
    "lines": [
      [
        "Eva",
        "Beide Wörter haben die. Bekommen beide einfach ein n?",
        "الكلمتين أداتهم دي. نزود إن للاتنين وخلاص؟"
      ],
      [
        "Felix",
        "Nein. Zimtstange wird zu Zimtstangen.",
        "لأ. تسيمت شتانجه بتبقى تسيمت شتانجن."
      ],
      [
        "Eva",
        "Und Muskatnuss?",
        "وموسكات نوس؟"
      ],
      [
        "Felix",
        "Muskatnüsse: mit ü und einem e am Ende.",
        "موسكات نوسه: بيو أوملاوت وإي في الآخر."
      ],
      [
        "Eva",
        "Dann schreibe ich jede Mehrzahlform in ein eigenes Feld.",
        "يبقى أكتب كل جمع في مربع لوحده."
      ],
      [
        "Felix",
        "Danach decke ich die Vorlagen ab.",
        "بعد كده أغطي النماذج."
      ],
      [
        "Eva",
        "Und ich vergleiche meine Wörter erst am Schluss mit den Karten.",
        "وأقارن كلماتي بالكروت في الآخر بس."
      ]
    ],
    "q": [
      [
        "Wie lautet die Mehrzahl von Zimtstange?",
        "Zimtstangen.",
        "Zimtstange.",
        "Zimtstänges."
      ],
      [
        "Was braucht Muskatnüsse?",
        "ü und e.",
        "Nur n.",
        "Nur s."
      ],
      [
        "Wann vergleicht Eva ihre Wörter?",
        "Erst am Schluss.",
        "Vor jeder Erklärung.",
        "Erst nach einem Einkauf."
      ]
    ]
  },
  {
    "id": "sichtbar-oder-nicht-pruefbar",
    "level": "A2",
    "title": [
      "Nicht am Bild prüfbar",
      "مش نقدر نراجعه من الصورة"
    ],
    "lines": [
      [
        "Mats",
        "Auf dem Foto ist der Duft besonders stark.",
        "في الصورة الريحة قوية جدًا."
      ],
      [
        "Lina",
        "Wie willst du die Stärke eines Geruchs am Bild prüfen?",
        "هتراجع قوة الريحة إزاي من الصورة؟"
      ],
      [
        "Mats",
        "Das kann ich nicht. Ich denke an einen bekannten Duft.",
        "مش هقدر. أنا بفكر في ريحة عارفها."
      ],
      [
        "Lina",
        "Die gerollten Formen und die Farbe können wir dagegen sehen.",
        "لكن الأشكال الملفوفة واللون نقدر نشوفهم."
      ],
      [
        "Mats",
        "Dann bleiben diese sichtbaren Merkmale in der Beschreibung.",
        "يبقى الصفات الظاهرة دي تفضل في الوصف."
      ],
      [
        "Lina",
        "Genau. Wir untersuchen keine echten Gewürze.",
        "بالظبط. إحنا مش بنفحص توابل حقيقية."
      ],
      [
        "Mats",
        "Die Wörter ohne Fotos wiederholen wir erst später.",
        "نراجع الكلمات من غير صور بعدين بس."
      ]
    ],
    "q": [
      [
        "Woran denkt Mats?",
        "An einen bekannten Duft.",
        "An einen sichtbaren Preis.",
        "An eine gesprochene Adresse."
      ],
      [
        "Was können beide sehen?",
        "Die gerollten Formen und die Farbe.",
        "Die Stärke eines Geruchs.",
        "Den Geschmack."
      ],
      [
        "Was untersuchen sie nicht?",
        "Echte Gewürze.",
        "Die sichtbaren Fotos.",
        "Die geschriebenen Sätze."
      ]
    ]
  },
  {
    "id": "hilfe-im-protokoll",
    "level": "B1",
    "title": [
      "Die Hilfe gehört dazu",
      "المساعدة تتسجل معاها"
    ],
    "lines": [
      [
        "Karim",
        "Beim zweiten Versuch steht Muskatnüsse richtig da. Ist die Form jetzt sicher gelernt?",
        "في المحاولة التانية موسكات نوسه مكتوبة صح. كده الصيغة اتعلمت أكيد؟"
      ],
      [
        "Dana",
        "Wir haben diesmal zusätzlich ü und e gezeigt.",
        "المرة دي ورينا يو أوملاوت وإي كمان."
      ],
      [
        "Karim",
        "Dann war das keine Antwort ohne Hilfe.",
        "يبقى دي مش إجابة من غير مساعدة."
      ],
      [
        "Dana",
        "Genau. Diese Unterstützung muss im Protokoll stehen.",
        "بالظبط. المساعدة دي لازم تتكتب في المحضر."
      ],
      [
        "Karim",
        "Bei Zimtstange notiere ich auch, ob der letzte Buchstabe sichtbar war.",
        "مع تسيمت شتانجه هسجل كمان إذا آخر حرف كان ظاهر."
      ],
      [
        "Dana",
        "Die spätere Wiederholung ohne Hinweise steht noch aus.",
        "المراجعة بعدين من غير تلميحات لسه ماحصلتش."
      ],
      [
        "Karim",
        "Und ein einzelner Versuch beweist nicht jedes langfristige Behalten.",
        "ومحاولة واحدة مش بتثبت كل حفظ طويل المدى."
      ]
    ],
    "q": [
      [
        "Was wurde zusätzlich gezeigt?",
        "ü und e.",
        "Nur ein Foto.",
        "Eine Adresse."
      ],
      [
        "Was muss im Protokoll stehen?",
        "Die sichtbare Unterstützung.",
        "Ein erfundener späterer Erfolg.",
        "Eine offizielle Zertifizierung."
      ],
      [
        "Was steht noch aus?",
        "Die spätere Wiederholung ohne Hinweise.",
        "Die Antwort mit Hilfskarte.",
        "Das Zeigen von ü und e."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "zimtstangen-muskatnuesse": [
    "Zimtstange wird zu Zimtstangen.",
    "mit ü und einem e am Ende.",
    "erst am Schluss mit den Karten."
  ],
  "sichtbar-oder-nicht-pruefbar": [
    "Ich denke an einen bekannten Duft.",
    "Die gerollten Formen und die Farbe",
    "Wir untersuchen keine echten Gewürze."
  ],
  "hilfe-im-protokoll": [
    "zusätzlich ü und e gezeigt.",
    "Diese Unterstützung muss im Protokoll stehen.",
    "Die spätere Wiederholung ohne Hinweise steht noch aus."
  ]
});

everydayDialogues.push(...[
  {
    "id": "g-v-statt-links-rechts",
    "level": "A1",
    "title": [
      "Die Wörter, nicht die Bilder",
      "الكلمات مش الصور"
    ],
    "lines": [
      [
        "Emil",
        "Das linke Foto zeigt Vanilleschoten. Also kommt Vanilleschote zuerst.",
        "الصورة الشمال فيها قرون فانيليا. يبقى فانيلا شوته الأول."
      ],
      [
        "Nora",
        "Die Aufgabe verlangt die Reihenfolge nach dem Alphabet.",
        "المطلوب ترتيب أبجدي."
      ],
      [
        "Emil",
        "Dann lese ich die Nomen ohne Artikel.",
        "يبقى أقرا الأسماء من غير أداة التعريف."
      ],
      [
        "Nora",
        "Gewürznelke beginnt mit G, Vanilleschote mit V.",
        "جفورتس نيلكه بتبدأ بجي وفانيلا شوته بفاو."
      ],
      [
        "Emil",
        "G kommt vor V. Ich tausche die Wortkarten.",
        "جي قبل فاو. هبدل كروت الكلمات."
      ],
      [
        "Nora",
        "Die Fotos müssen wir dafür nicht verschieben.",
        "مش محتاجين نحرك الصور عشان ده."
      ],
      [
        "Emil",
        "Und beide Mehrzahlformen enden hier auf n.",
        "والجمع بتاع الاتنين هنا آخره إن."
      ]
    ],
    "q": [
      [
        "Welche Reihenfolge verlangt die Aufgabe?",
        "Die alphabetische.",
        "Die räumliche von links nach rechts.",
        "Die Reihenfolge der Aufnahmezeiten."
      ],
      [
        "Was tauscht Emil?",
        "Die Wortkarten.",
        "Die Fotos.",
        "Die Stühle."
      ],
      [
        "Worauf enden die beiden Mehrzahlformen?",
        "Auf n.",
        "Auf s.",
        "Auf er."
      ]
    ]
  },
  {
    "id": "zuordnung-statt-buchstabe",
    "level": "A2",
    "title": [
      "Nicht den Buchstaben ändern",
      "مش نغير الحرف"
    ],
    "lines": [
      [
        "Timo",
        "Auf dieser Rückseite passt etwas nicht. Soll ich einen Buchstaben ändern?",
        "فيه حاجة مش راكبة في الضهر ده. أغير حرف؟"
      ],
      [
        "Jasmin",
        "Die Wörter sind richtig geschrieben. Die Rückseiten wurden vertauscht.",
        "الكلمات مكتوبة صح. الضهرين اتبدلوا."
      ],
      [
        "Timo",
        "Dann lösen wir die Streifen ab.",
        "يبقى نفك الشرايط."
      ],
      [
        "Jasmin",
        "Und legen jeden Streifen neben das passende Foto.",
        "ونحط كل شريط جنب الصورة المناسبة."
      ],
      [
        "Timo",
        "Nach der zweiten Kontrolle klebe ich sie wieder auf.",
        "بعد المراجعة التانية هلزقهم تاني."
      ],
      [
        "Jasmin",
        "Damit prüfen wir das Material, nicht den freien Wortabruf.",
        "بكده بنراجع الخامة مش استدعاء الكلمة من غير نموذج."
      ],
      [
        "Timo",
        "Diese Wortabfrage haben wir noch nicht gemacht.",
        "سؤال الكلمات بالشكل ده لسه ماعملناهوش."
      ]
    ],
    "q": [
      [
        "Was wurde vertauscht?",
        "Die Rückseiten.",
        "Zwei Buchstaben im selben Wort.",
        "Die Sitzplätze."
      ],
      [
        "Was machen sie vor dem erneuten Aufkleben?",
        "Sie kontrollieren die Zuordnung ein zweites Mal.",
        "Sie bestellen neue Karten.",
        "Sie streichen beide Nomen aus der Liste."
      ],
      [
        "Was haben sie noch nicht geprüft?",
        "Den freien Wortabruf.",
        "Die Schreibweise auf den Streifen.",
        "Die korrigierte Zuordnung."
      ]
    ]
  },
  {
    "id": "artikel-einzahl-mehrzahl",
    "level": "B1",
    "title": [
      "Welcher Teil stimmt?",
      "أنهي جزء صح؟"
    ],
    "lines": [
      [
        "Jonas",
        "Ich wollte für jede Antwort nur richtig oder falsch ankreuzen.",
        "كنت هعلم لكل إجابة صح أو غلط بس."
      ],
      [
        "Leila",
        "Bei die Vanilleschote stimmen Artikel und Einzahl, aber Vanilleschotes ist als Mehrzahl falsch.",
        "في دي فانيلا شوته الأداة والمفرد صح بس فانيلا شوتس جمع غلط."
      ],
      [
        "Jonas",
        "Dann trennen wir Artikel, Einzahl und Mehrzahl.",
        "يبقى نفصل الأداة والمفرد والجمع."
      ],
      [
        "Leila",
        "Im zweiten erfundenen Beispiel steht der Gewürznelke. Die Wortformen selbst stimmen.",
        "في المثال التاني المختلق مكتوب دير جفورتس نيلكه. صيغ الكلمة نفسها صح."
      ],
      [
        "Jonas",
        "Dort korrigieren wir nur den Artikel zu die.",
        "هناك نصلح الأداة بس لدي."
      ],
      [
        "Leila",
        "Genau. Die richtigen Teile bleiben als richtig erkennbar.",
        "بالظبط. الأجزاء الصح تفضل واضحة إنها صح."
      ],
      [
        "Jonas",
        "Über den Selbstvergleich der Korrekturen müssen wir noch sprechen.",
        "لسه محتاجين نتكلم عن مقارنة التصحيحات بنفسهم."
      ]
    ],
    "q": [
      [
        "Welche Teile stimmen im ersten Beispiel?",
        "Artikel und Einzahl.",
        "Alle drei Teile.",
        "Nur die Mehrzahl."
      ],
      [
        "Was korrigieren sie beim zweiten Beispiel?",
        "Den Artikel zu die.",
        "Die Mehrzahl zu Gewürznelkes.",
        "Die Einzahl zu Vanilleschote."
      ],
      [
        "Was steht noch aus?",
        "Das Gespräch über den Selbstvergleich.",
        "Das Erfinden der Beispiele.",
        "Das Trennen der drei Spalten."
      ]
    ]
  }
] satisfies Dialogue[]);
Object.assign(dialogueEvidence,{
  "g-v-statt-links-rechts": [
    "Die Aufgabe verlangt die Reihenfolge nach dem Alphabet.",
    "Ich tausche die Wortkarten.",
    "beide Mehrzahlformen enden hier auf n."
  ],
  "zuordnung-statt-buchstabe": [
    "Die Rückseiten wurden vertauscht.",
    "Nach der zweiten Kontrolle klebe ich sie wieder auf.",
    "Diese Wortabfrage haben wir noch nicht gemacht."
  ],
  "artikel-einzahl-mehrzahl": [
    "stimmen Artikel und Einzahl",
    "Dort korrigieren wir nur den Artikel zu die.",
    "Über den Selbstvergleich der Korrekturen müssen wir noch sprechen."
  ]
});
