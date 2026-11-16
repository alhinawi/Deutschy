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
