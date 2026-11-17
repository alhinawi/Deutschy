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
