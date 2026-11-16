import type {ReadingText} from './reading';
// Original fictional scenarios. Approximate study grouping, not a tested level.
export const everydayTexts:ReadingText[]=[
 {id:'alltag-a2-paket',level:'A2',title:['Ein Paket für Nora','طرد لنورا'],de:[
  'Nora wartet auf ein Paket mit einem neuen Wörterbuch. Als sie am Mittwoch vom Sprachkurs nach Hause kommt, findet sie eine Nachricht im Briefkasten. Darauf steht: Ihr Paket liegt bei Frau Winter im zweiten Stock. Bitte holen Sie es heute nach 18 Uhr ab. Nora kennt die Nachbarin noch nicht. Sie schreibt die Uhrzeit auf einen Zettel, damit sie den Besuch nicht vergisst.',
  'Um halb sieben klingelt Nora bei Frau Winter. Die Nachbarin gibt ihr das Paket. Nora bedankt sich und fragt, ob sie beim nächsten Mal auch ein Paket für Frau Winter annehmen kann. Beide finden die Idee gut. Zu Hause öffnet Nora das Paket. Das Wörterbuch ist da, aber die Rechnung fehlt. Deshalb schreibt sie dem Buchladen eine kurze E-Mail.'
 ],ar:[
  'نورا مستنية طرد فيه قاموس جديد. لما بترجع من كورس اللغة يوم الأربعاء بتلاقي رسالة في صندوق الجوابات. مكتوب فيها إن الطرد عند مدام فينتر في الدور التاني، وتستلمه النهارده بعد الساعة 18. نورا لسه ماتعرفش جارتها. بتكتب الميعاد على ورقة عشان ماتنساش الزيارة.',
  'الساعة 18:30 نورا بترن جرس مدام فينتر. الجارة بتديها الطرد. نورا بتشكرها وبتسألها لو ينفع هي كمان تستلم لها طرد المرة الجاية. الفكرة بتعجبهم هما الاتنين. في البيت نورا بتفتح الطرد. القاموس موجود، بس الفاتورة مش موجودة. عشان كده بتبعت إيميل قصير للمكتبة.'
 ],gloss:[['der Briefkasten','صندوق الجوابات'],['annehmen','يستلم لحد تاني'],['die Rechnung','الفاتورة']],q:[
  ['Wo findet Nora die Nachricht?','Im Briefkasten.','Im Wörterbuch.','An der Wohnungstür.'],
  ['Wann klingelt Nora bei Frau Winter?','Um 18:30 Uhr.','Um 17:30 Uhr.','Um 18 Uhr.'],
  ['Was bietet Nora der Nachbarin an?','Auch ein Paket für sie anzunehmen.','Ihr das Wörterbuch zu schenken.','Für sie eine Rechnung zu bezahlen.'],
  ['Warum schreibt Nora dem Buchladen?','Die Rechnung fehlt.','Das Wörterbuch fehlt.','Die Nachbarin ist nicht zu Hause.']
 ]},
 {id:'alltag-b1-schicht',level:'B1',title:['Ein Tausch mit klarer Absprache','تبديل باتفاق واضح'],de:[
  'Samir arbeitet in einem kleinen Café. Am Donnerstag hat er normalerweise die Frühschicht. Weil er an diesem Morgen einen Termin bei seiner Sprachschule hat, fragt er seine Kollegin Lea, ob sie die Schichten tauschen können. Lea würde ihm gern helfen, kann aber erst ab 10 Uhr kommen. Das Café öffnet schon um 8 Uhr. Ein einfacher Tausch würde das Problem deshalb nicht lösen.',
  'Statt sofort abzusagen, sprechen die beiden mit ihrer Chefin. Sie vereinbaren, dass Samir die ersten zwei Stunden arbeitet und Lea danach übernimmt. Samir übernimmt dafür am Freitag Leas letzte zwei Stunden. Die Chefin trägt beide Änderungen in den Plan ein. Samir prüft noch einmal, ob er seine Schule rechtzeitig erreichen kann. Erst danach bestätigt er die Absprache. Für ihn war nicht nur wichtig, Hilfe zu bekommen, sondern auch genau zu wissen, wer wann arbeitet.'
 ],ar:[
  'سمير بيشتغل في كافيه صغير. يوم الخميس بيبقى عنده عادة وردية الصبح. عشان عنده ميعاد في مدرسة اللغة الصبح ده، بيسأل زميلته ليا لو يقدروا يبدلوا الورديات. ليا حابة تساعده بس مش هتقدر تيجي قبل الساعة 10. الكافيه بيفتح الساعة 8، فالتبديل العادي مش هيحل المشكلة.',
  'بدل ما يرفضوا على طول، بيتكلموا مع مديرتهم. بيتفقوا إن سمير يشتغل أول ساعتين وليا تكمل بعده. في المقابل سمير هياخد آخر ساعتين من وردية ليا يوم الجمعة. المديرة بتسجل التعديلين في الجدول. سمير بيتأكد تاني إنه هيلحق يوصل المدرسة. وبعد كده بس بيأكد الاتفاق. المهم بالنسباله مش بس إنه يلاقي مساعدة، لكن يعرف بالضبط مين هيشتغل إمتى.'
 ],gloss:[['die Frühschicht','وردية الصبح'],['übernehmen','يتولى / ياخد مكان حد'],['die Absprache','الاتفاق']],q:[
  ['Warum reicht ein einfacher Schichttausch nicht?','Lea kann nicht zur Öffnung kommen.','Samir möchte am Freitag gar nicht arbeiten.','Die Chefin verbietet jeden Tausch.'],
  ['Wer arbeitet am Donnerstag von 8 bis 10 Uhr?','Samir.','Lea.','Niemand.'],
  ['Wie gleicht Samir Leas Hilfe aus?','Er arbeitet am Freitag ihre letzten zwei Stunden.','Er bezahlt ihr einen Sprachkurs.','Er arbeitet am Donnerstag bis zum Abend.'],
  ['Was prüft Samir vor seiner Bestätigung?','Ob er die Schule rechtzeitig erreichen kann.','Ob das Café am Freitag geschlossen ist.','Ob Lea die ganze Woche frei hat.']
 ]}
];

// Appended to preserve all existing reading and comprehension identities.
everydayTexts.push(
 {id:'alltag-a2-bibliothek',level:'A2',title:['Eine Tasche in der Bibliothek','شنطة في المكتبة'],de:[
  'Mina lernt am Dienstag in der Bibliothek für einen Deutschtest. Sie sitzt an einem Tisch neben dem Fenster. Um 16 Uhr fährt sie mit dem Bus nach Hause. Erst an der Haustür merkt sie, dass ihre Stofftasche fehlt. In der Tasche sind ein Heft und eine leere Brotdose, aber kein Geld und keine Schlüssel. Mina ruft in der Bibliothek an und beschreibt die Tasche. Sie ist grün und hat eine kleine gelbe Blume.',
  'Ein Mitarbeiter findet die Tasche unter dem Tisch am Fenster. Mina möchte sofort zurückfahren, aber die Bibliothek schließt in zehn Minuten. Deshalb vereinbart sie mit dem Mitarbeiter, die Tasche am nächsten Morgen abzuholen. Sie schreibt sich seinen Namen und die Uhrzeit auf. Am Mittwoch ist die Tasche noch da. Mina bedankt sich und schaut vor dem Heimweg noch einmal unter ihren Stuhl.'
 ],ar:[
  'مينا بتذاكر يوم التلات في المكتبة لامتحان ألماني. قاعدة على ترابيزة جنب الشباك. الساعة 16 بتروح البيت بالأتوبيس. عند باب البيت بس بتاخد بالها إن شنطتها القماش مش معاها. في الشنطة كشكول وعلبة أكل فاضية، بس مفيهاش فلوس ولا مفاتيح. مينا بتتصل بالمكتبة وبتوصف الشنطة. لونها أخضر وعليها وردة صفرا صغيرة.',
  'موظف بيلاقي الشنطة تحت الترابيزة اللي جنب الشباك. مينا عايزة ترجع حالا، بس المكتبة هتقفل كمان 10 دقايق. عشان كده بتتفق مع الموظف إنها تستلمها تاني يوم الصبح. بتكتب اسمه والميعاد. يوم الأربعاء الشنطة لسه موجودة. مينا بتشكره وبتبص تاني تحت كرسيها قبل ما تروح.'
 ],gloss:[['die Stofftasche','شنطة قماش'],['die Brotdose','علبة الأكل'],['abholen','يروح يستلم']],q:[
  ['Wann bemerkt Mina, dass ihre Tasche fehlt?','Erst an der Haustür.','Schon an der Bushaltestelle.','Beim Lernen am Fenster.'],
  ['Was ist in der Tasche?','Ein Heft und eine leere Brotdose.','Geld und Schlüssel.','Eine Fahrkarte und ein Buch.'],
  ['Warum fährt Mina nicht sofort zurück?','Die Bibliothek schließt in zehn Minuten.','Der Mitarbeiter hat die Tasche nicht gefunden.','Sie hat die Uhrzeit vergessen.'],
  ['Wo findet der Mitarbeiter die Tasche?','Unter dem Tisch am Fenster.','Im Bus.','Neben der Haustür.']
 ]},
 {id:'alltag-b1-reparatur',level:'B1',title:['Reparieren statt gleich ersetzen','نصلح بدل ما نبدل على طول'],de:[
  'Als Jonas einen Bericht drucken will, zieht sein Drucker das Papier nicht mehr ein. Zuerst denkt er daran, sofort ein neues Gerät zu kaufen. Seine Freundin Nila schlägt jedoch vor, den Drucker zu einem Reparaturtreffen im Stadtteilzentrum mitzunehmen. Dort helfen Freiwillige bei einfachen technischen Problemen. Eine erfolgreiche Reparatur können sie nicht versprechen. Jonas meldet sich an und fragt vorher, ob er auch das Stromkabel mitbringen soll. Die Antwort lautet ja.',
  'Beim Treffen untersucht eine Helferin das Gerät gemeinsam mit Jonas. Sie entdecken ein kleines Stück Papier, das den Einzug blockiert. Nachdem sie es vorsichtig entfernt haben, funktioniert der Drucker wieder. Jonas freut sich, aber er muss den Bericht noch an diesem Abend abgeben. Deshalb druckt er zuerst eine Testseite und danach den ganzen Bericht. Nila findet besonders gut, dass er beim nächsten Problem nicht mehr sofort ans Wegwerfen denken wird.'
 ],ar:[
  'لما يوناس بيحاول يطبع تقرير، الطابعة مش بتسحب الورق. في الأول بيفكر يشتري جهاز جديد على طول. بس صاحبته نيلا بتقترح ياخد الطابعة لورشة تصليح في مركز الحي. هناك متطوعين بيساعدوا في المشاكل التقنية البسيطة. مش بيقدروا يوعدوا إن التصليح هينجح. يوناس بيسجل وبيسأل قبلها لو يجيب كابل الكهربا كمان. الرد آه.',
  'في الورشة متطوعة بتفحص الجهاز مع يوناس. بيلاقوا حتة ورق صغيرة قافلة مكان سحب الورق. بعد ما بيشيلوها بحرص، الطابعة بتشتغل تاني. يوناس فرحان، بس لسه لازم يسلم التقرير نفس الليلة. عشان كده بيطبع صفحة تجربة الأول وبعدين التقرير كله. نيلا عاجبها خصوصا إنه المرة الجاية لما تحصل مشكلة مش هيفكر في الرمي على طول.'
 ],gloss:[['der Einzug','مكان سحب الورق'],['blockieren','يقفل / يعطل'],['wegwerfen','يرمي']],q:[
  ['Was überlegt Jonas zuerst?','Einen neuen Drucker zu kaufen.','Den Bericht ohne Prüfung abzugeben.','Selbst ein Reparaturtreffen zu organisieren.'],
  ['Was versprechen die Freiwilligen nicht?','Dass die Reparatur gelingt.','Dass Jonas ein Stromkabel braucht.','Dass sie technische Probleme ansehen.'],
  ['Was verursacht das Problem?','Ein kleines Stück Papier im Einzug.','Ein fehlendes Stromkabel.','Ein leerer Computerakku.'],
  ['Warum druckt Jonas zuerst eine Testseite?','Er prüft den Drucker vor dem ganzen Bericht.','Er möchte den Bericht erst nächste Woche abgeben.','Er will einen neuen Drucker bestellen.']
 ]}
);
everydayTexts.push(
{id:'alltag-a2-lerntandem',level:'A2',title:['Ein erstes Lerntandem','أول مقابلة لتبادل اللغة'],de:[
 'Rana möchte öfter Deutsch sprechen. Im Sprachkurs findet sie einen Aushang für ein Lerntandem. Sie schreibt David, der Arabisch lernt. Die beiden verabreden sich für Samstag um 11 Uhr in einem Café neben der Bibliothek. Rana bringt ein Heft mit drei Fragen mit. Sie möchte über Hobbys, Essen und den Alltag sprechen. David schlägt vor, zuerst zwanzig Minuten Deutsch und danach zwanzig Minuten Arabisch zu sprechen.',
 'Am Samstag ist das Café sehr laut. Rana kann David schlecht verstehen. Deshalb gehen sie in den ruhigen Hof hinter der Bibliothek. Dort sprechen sie wie geplant in beiden Sprachen. Wenn Rana ein Wort nicht kennt, beschreibt sie es zuerst. David hilft ihr erst danach. Am Ende schreiben beide zwei neue Wörter auf. Sie möchten sich nächste Woche wieder treffen, haben aber noch keinen genauen Termin vereinbart.'
],ar:[
 'رنا عايزة تتكلم ألماني أكتر. في كورس اللغة بتلاقي إعلان عن تبادل لغة. بتكتب لدافيد اللي بيتعلم عربي. بيتفقوا يتقابلوا يوم السبت الساعة 11 في كافيه جنب المكتبة. رنا بتجيب كشكول فيه تلات أسئلة. عايزة تتكلم عن الهوايات والأكل والحياة اليومية. دافيد بيقترح يتكلموا ألماني أول 20 دقيقة، وبعدها عربي 20 دقيقة.',
 'يوم السبت الكافيه دوشة قوي. رنا مش سامعة دافيد كويس. عشان كده بيروحوا الحوش الهادي ورا المكتبة. هناك بيتكلموا باللغتين زي ما خططوا. لما رنا ماتعرفش كلمة، بتوصفها الأول. دافيد بيساعدها بعد كده بس. في الآخر كل واحد بيكتب كلمتين جداد. عايزين يتقابلوا الأسبوع الجاي، بس لسه ماتفقوش على ميعاد محدد.'
],gloss:[['der Aushang','إعلان متعلّق'],['beschreiben','يوصف'],['vereinbaren','يتفق على']],q:[['Welche Sprache üben sie zuerst?','Deutsch.','Arabisch.','Englisch.'],['Warum wechseln sie den Ort?','Das Café ist zu laut.','Die Bibliothek ist geschlossen.','David hat sein Heft vergessen.'],['Was macht Rana bei einem unbekannten Wort zuerst?','Sie beschreibt es.','Sie beendet das Treffen.','Sie wechselt sofort das Thema.'],['Was steht am Ende noch nicht fest?','Der genaue Termin für das nächste Treffen.','Die Reihenfolge der Sprachen.','Der Ort des ersten Treffens.']]},
{id:'alltag-b1-tauschregal',level:'B1',title:['Ein Regal mit klaren Regeln','رف بقواعد واضحة'],de:[
 'Im Haus von Farid und Lina steht ein unbenutztes Regal im Eingangsbereich. Lina schlägt vor, es als Tauschregal für Bücher zu nutzen. Farid findet die Idee gut, befürchtet aber, dass bald auch kaputte Geräte oder alte Kleidung dort liegen könnten. Bevor sie etwas hineinstellen, fragen sie deshalb die Hausverwaltung. Diese erlaubt das Regal, solange der Durchgang frei bleibt. Die beiden schreiben einen kurzen Hinweis: Nur saubere, vollständige Bücher, keine Kartons und keine anderen Gegenstände.',
 'Nach zwei Wochen ist das Regal fast voll. Einige Nachbarn haben Bücher gebracht, aber nur wenige haben welche mitgenommen. Farid möchte sofort ein zweites Regal aufstellen. Lina schlägt stattdessen vor, zunächst mit den Nachbarn zu sprechen. Dabei erfahren sie, dass viele den Hinweis für eine Büchersammlung ohne Mitnahmemöglichkeit gehalten haben. Sie ergänzen deshalb einen Satz: Sie dürfen auch ein Buch mitnehmen, ohne selbst eines mitzubringen. Eine Woche später ist wieder Platz im Regal.'
],ar:[
 'في بيت فريد ولينا فيه رف مش مستخدم عند المدخل. لينا بتقترح يستخدموه لتبادل الكتب. فريد عاجباه الفكرة بس خايف الناس تحط أجهزة بايظة أو هدوم قديمة كمان. قبل ما يحطوا حاجة، بيسألوا إدارة العقار. الإدارة بتسمح بالرف بشرط الممر يفضل فاضي. بيكتبوا تنبيه قصير: كتب نضيفة وكاملة بس، من غير كراتين ولا حاجات تانية.',
 'بعد أسبوعين الرف قرب يتملي. شوية جيران جابوا كتب، بس قليل خدوا كتب. فريد عايز يحط رف تاني على طول. لينا بتقترح بدل كده يتكلموا مع الجيران الأول. بيعرفوا إن كتير فهموا التنبيه على إنه تجميع كتب من غير ما ينفع ياخدوا منها. عشان كده بيضيفوا جملة: ينفع تاخد كتاب حتى لو مش جايب كتاب معاك. بعد أسبوع بقى فيه مكان تاني على الرف.'
],gloss:[['der Durchgang','الممر'],['etwas für etwas halten','يفتكر حاجة على إنها حاجة تانية'],['ergänzen','يضيف / يكمل']],q:[['Unter welcher Bedingung ist das Regal erlaubt?','Der Durchgang muss frei bleiben.','Es muss jede Woche leer sein.','Es darf nur Lina benutzen.'],['Was darf laut Hinweis ins Regal?','Saubere, vollständige Bücher.','Alte Kleidung.','Kaputte Geräte.'],['Warum nehmen zunächst nur wenige Nachbarn Bücher mit?','Viele verstehen den Hinweis als reine Sammlung.','Die Bücher sind alle beschädigt.','Die Hausverwaltung verbietet die Mitnahme.'],['Wie lösen Lina und Farid das Problem?','Sie erklären die Mitnahme im Hinweis deutlicher.','Sie kaufen sofort ein zweites Regal.','Sie schließen das Regal ab.']]}
);
