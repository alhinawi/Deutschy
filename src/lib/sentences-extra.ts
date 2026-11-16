import type { Lvl } from './grammar-types';

// Curated sentences for the build and dictation games: [German, Egyptian Arabic, English]
const L = (level: Lvl, rows: [string, string, string][]) => rows.map(([de, ar, en]) => ({ de, ar, en, level, topic: 'extra' }));

export const extraSentences = [
  ...L('A1', [
    ['Ich trinke jeden Morgen einen Kaffee.', 'بشرب قهوة كل صبح.', 'I drink a coffee every morning.'],
    ['Wir wohnen in einer kleinen Wohnung.', 'إحنا ساكنين في شقة صغيرة.', 'We live in a small flat.'],
    ['Der Bus kommt um acht Uhr.', 'الأتوبيس بييجي الساعة تمانية.', 'The bus comes at eight.'],
    ['Meine Schwester hat einen Hund.', 'أختي عندها كلب.', 'My sister has a dog.'],
    ['Heute ist das Wetter sehr schön.', 'النهارده الجو حلو قوي.', 'The weather is very nice today.'],
    ['Kannst du mir bitte helfen?', 'ممكن تساعدني لو سمحت؟', 'Can you help me, please?'],
  ]),
  ...L('A2', [
    ['Gestern habe ich den ganzen Tag gelernt.', 'امبارح ذاكرت اليوم كله.', 'Yesterday I studied all day.'],
    ['Ich möchte einen Tisch für vier Personen reservieren.', 'عايز أحجز ترابيزة لأربع أشخاص.', 'I would like to reserve a table for four people.'],
    ['Weil es regnet, bleiben wir zu Hause.', 'علشان بتمطر، هنفضل في البيت.', 'Because it is raining, we are staying at home.'],
    ['Er ist mit dem Zug nach München gefahren.', 'راح ميونخ بالقطر.', 'He went to Munich by train.'],
    ['Ich muss morgen früh aufstehen.', 'لازم أصحى بدري بكرة.', 'I have to get up early tomorrow.'],
    ['Hast du Lust, am Samstag ins Kino zu gehen?', 'عندك مزاج تروح السينما السبت؟', 'Do you feel like going to the cinema on Saturday?'],
    ['Die Wohnung ist größer als meine alte.', 'الشقة أكبر من القديمة بتاعتي.', 'The flat is bigger than my old one.'],
    ['Wir haben uns im Park getroffen.', 'اتقابلنا في الحديقة.', 'We met in the park.'],
  ]),
  ...L('B1', [
    ['Obwohl es spät war, hat er noch gearbeitet.', 'مع إن الوقت كان متأخر، فضل يشتغل.', 'Although it was late, he kept working.'],
    ['Wenn ich mehr Zeit hätte, würde ich öfter reisen.', 'لو كان عندي وقت أكتر، كنت هسافر أكتر.', 'If I had more time, I would travel more often.'],
    ['Der Film, den wir gestern gesehen haben, war spannend.', 'الفيلم اللي شوفناه امبارح كان مشوّق.', 'The film we watched yesterday was exciting.'],
    ['Ich habe mich daran gewöhnt, früh aufzustehen.', 'اتعودت إني أصحى بدري.', 'I have got used to getting up early.'],
    ['Er sagte, dass er keine Zeit habe.', 'قال إنه مش عنده وقت.', 'He said that he had no time.'],
    ['Nachdem sie gegessen hatten, gingen sie spazieren.', 'بعد ما أكلوا، راحوا يتمشوا.', 'After they had eaten, they went for a walk.'],
    ['Ich freue mich darauf, dich bald wiederzusehen.', 'مستني أشوفك تاني قريب.', 'I am looking forward to seeing you again soon.'],
    ['Sie interessiert sich sehr für moderne Kunst.', 'مهتمة قوي بالفن الحديث.', 'She is very interested in modern art.'],
  ]),
  ...L('B2', [
    ['Die Preise sind in den letzten Jahren deutlich gestiegen.', 'الأسعار زادت بشكل واضح في السنين الأخيرة.', 'Prices have risen significantly in recent years.'],
    ['Hätte ich das gewusst, wäre ich früher gekommen.', 'لو كنت عرفت ده، كنت جيت بدري.', 'Had I known that, I would have come earlier.'],
    ['Der Vertrag soll nächste Woche unterschrieben werden.', 'العقد المفروض يتمضي الأسبوع الجاي.', 'The contract is to be signed next week.'],
    ['Je mehr man übt, desto sicherer wird man.', 'كل ما تتمرن أكتر، كل ما تبقى واثق أكتر.', 'The more you practise, the more confident you become.'],
    ['Er tat so, als ob er nichts bemerkt hätte.', 'عمل نفسه إنه ملاحظش حاجة.', 'He acted as if he had noticed nothing.'],
    ['Trotz der Verspätung kamen wir pünktlich zum Termin.', 'رغم التأخير وصلنا للميعاد في وقته.', 'Despite the delay we arrived on time for the appointment.'],
    ['Die Entscheidung muss gründlich überlegt werden.', 'القرار لازم يتفكر فيه كويس.', 'The decision has to be considered thoroughly.'],
    ['Man sollte Kritik nicht persönlich nehmen.', 'المفروض متاخدش النقد على نفسك.', 'One should not take criticism personally.'],
  ]),
  ...L('C1', [
    ['Der Bericht legt nahe, dass die Maßnahmen kaum Wirkung zeigen.', 'التقرير بيلمّح إن الإجراءات تأثيرها قليل.', 'The report suggests that the measures have little effect.'],
    ['Angesichts der aktuellen Lage ist Vorsicht geboten.', 'في ضوء الوضع الحالي لازم نحترس.', 'Given the current situation, caution is called for.'],
    ['Er bestritt, von den Plänen gewusst zu haben.', 'أنكر إنه كان عارف بالخطط.', 'He denied having known about the plans.'],
    ['Wer sich ernsthaft bemüht, wird früher oder später Erfolg haben.', 'اللي بيحاول بجد هينجح عاجلاً أو آجلاً.', 'Whoever tries seriously will succeed sooner or later.'],
    ['Die Verhandlungen scheiterten an unüberbrückbaren Differenzen.', 'المفاوضات فشلت بسبب خلافات مفيش حل لها.', 'The negotiations failed because of irreconcilable differences.'],
    ['Es empfiehlt sich, die Unterlagen rechtzeitig einzureichen.', 'يُنصح بتقديم الأوراق في وقتها.', 'It is advisable to submit the documents in good time.'],
    ['Seine Äußerungen stießen auf breite Zustimmung.', 'كلامه لقى قبول واسع.', 'His remarks met with broad approval.'],
    ['Das Projekt wurde ungeachtet aller Bedenken fortgesetzt.', 'المشروع كمل بغض النظر عن كل التحفظات.', 'The project was continued regardless of all reservations.'],
  ]),
  ...L('C2', [
    ['Was auf den ersten Blick wie ein Nachteil wirkt, erweist sich oft als Vorteil.', 'اللي بيبان في الأول ضعف، بيطلع في الغالب ميزة.', 'What looks like a disadvantage at first often turns out to be an advantage.'],
    ['Es bedarf keiner großen Worte, um Vertrauen zu schaffen.', 'مش محتاج كلام كبير علشان تبني الثقة.', 'No grand words are needed to create trust.'],
    ['Selbst wer widerspricht, kommt an dieser Tatsache nicht vorbei.', 'حتى اللي بيعترض مش هيقدر يتجاهل الحقيقة دي.', 'Even those who object cannot get around this fact.'],
    ['Die Frage, inwieweit Sprache das Denken prägt, bleibt umstritten.', 'سؤال إلى أي مدى اللغة بتشكل التفكير لسه مختلف عليه.', 'The question of how far language shapes thought remains disputed.'],
    ['Wäre er nicht so stur gewesen, hätte sich vieles vermeiden lassen.', 'لو مكانش عنيد قوي، كان كتير اتجنب.', 'Had he not been so stubborn, much could have been avoided.'],
    ['Dem ist nichts hinzuzufügen.', 'مفيش حاجة تتضاف على ده.', 'There is nothing to add to that.'],
    ['Gerade in schwierigen Zeiten zeigt sich, worauf es wirklich ankommt.', 'في الأوقات الصعبة بالذات بيبان إيه المهم فعلاً.', 'It is precisely in difficult times that it becomes clear what really matters.'],
    ['Wer wagt, gewinnt nicht immer, aber wer nie wagt, verliert bestimmt.', 'اللي بيجازف مش دايماً بيكسب، بس اللي عمره ما جازف أكيد بيخسر.', 'He who dares does not always win, but he who never dares certainly loses.'],
  ]),
];
