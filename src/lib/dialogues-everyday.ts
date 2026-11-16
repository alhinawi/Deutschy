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
