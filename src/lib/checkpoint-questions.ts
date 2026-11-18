import type {CheckpointId} from './completion';
export type CheckpointQuestion={prompt:[string,string];choices:[string,string,string];note:[string,string]};
// Original fixed reviews of the written examples already on /learn and /pronunciation.
// The first choice is correct. These do not claim to assess spoken pronunciation.
export const checkpointQuestions:Record<CheckpointId,CheckpointQuestion[]>={
 pron:[
  {prompt:['أنهي كلمة فيها الحرف ö؟','Which word contains ö?'],choices:['schön','schon','Schule'],note:['النقطتين جزء من الحرف، مش زينة.','The dots are part of the letter, not decoration.']},
  {prompt:['أنهي كلمة فيها الحرف ü؟','Which word contains ü?'],choices:['Tür','Tor','Tier'],note:['الكلمة هنا مكتوبة بحرف ü.','This written word contains ü.']},
  {prompt:['أنهي كلمة فيها الحرف ä؟','Which word contains ä?'],choices:['Bär','Bar','Bier'],note:['قارن ä مع a في الزوج المكتوب.','Compare ä with a in the written pair.']},
  {prompt:['أنهي كلمة فيها الحرف ß؟','Which word contains ß?'],choices:['Straße','Stadt','Schule'],note:['لاحظ شكل الحرف ß في المثال.','Notice the letter ß in this example.']},
  {prompt:['أنهي مجموعة حروف في أول Schule؟','Which letter group starts Schule?'],choices:['sch','ch','st'],note:['المثال بيبدأ بالحروف sch.','This example starts with sch.']},
  {prompt:['أنهي مجموعة حروف موجودة في Liebe؟','Which letter group occurs in Liebe?'],choices:['ie','ei','eu'],note:['ترتيب الحروف في المثال i وبعدها e.','The written order here is i then e.']},
  {prompt:['أنهي مجموعة حروف موجودة في nein؟','Which letter group occurs in nein?'],choices:['ei','ie','eu'],note:['ترتيب الحروف في المثال e وبعدها i.','The written order here is e then i.']},
  {prompt:['أنهي مجموعة حروف موجودة في neun؟','Which letter group occurs in neun?'],choices:['eu','ie','ei'],note:['المثال فيه e وبعدها u.','The written example has e then u.']},
 ],
 learn:[
  {prompt:['اختار تحية الصبح من الدرس.','Choose the morning greeting from the lesson.'],choices:['Guten Morgen!','Gute Nacht!','Auf Wiedersehen!'],note:['دي تحية الصبح في أمثلة الدرس.','This is the morning greeting in the lesson.']},
  {prompt:['اختار كلمة شكر.','Choose a word for thanks.'],choices:['Danke!','Tschüs!','Hallo!'],note:['دي كلمة الشكر في أمثلة الدرس.','This is the thanks example in the lesson.']},
  {prompt:['اختار كتابة الرقم 12.','Choose the spelling of 12.'],choices:['zwölf','zwanzig','zwei'],note:['راجع سطر الرقم 12 فوق.','Review the row for 12 above.']},
  {prompt:['اختار اليوم اللي بعد Montag.','Choose the day after Montag.'],choices:['Dienstag','Sonntag','Freitag'],note:['راجع ترتيب أيام الأسبوع في الدرس.','Review the weekday order in the lesson.']},
  {prompt:['اختار اللون الأحمر.','Choose the word for red.'],choices:['rot','blau','grün'],note:['راجع أمثلة الألوان في الدرس.','Review the colour examples in the lesson.']},
  {prompt:['كمّل من جدول sein: ich ___.','Complete from the sein table: ich ___.'],choices:['bin','bist','ist'],note:['استخدم صيغة ich من الجدول.','Use the ich form from the table.']},
  {prompt:['كمّل من جدول haben: du ___.','Complete from the haben table: du ___.'],choices:['hast','habe','hat'],note:['استخدم صيغة du من الجدول.','Use the du form from the table.']},
  {prompt:['اختار أداة Kind زي المثال.','Choose the article for Kind as in the example.'],choices:['das','der','die'],note:['المثال في الدرس: das Kind.','The lesson example is das Kind.']},
 ],
};
