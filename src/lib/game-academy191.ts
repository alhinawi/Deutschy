import type {Lvl} from './grammar-types';
export type GameCategory191='vocabulary'|'grammar'|'listening'|'reading';
export type Mode191={id:string;de:string;ar:string;en:string;category:GameCategory191;mechanic:'choice'|'type'|'order'|'error';description:[string,string];audio?:boolean};
const M=(id:string,de:string,ar:string,en:string,category:GameCategory191,mechanic:Mode191['mechanic'],description:[string,string],audio=false):Mode191=>({id,de,ar,en,category,mechanic,description,audio});
export const modes191:Mode191[]=[
 M('plural-lab','Pluralwerkstatt','معمل الجمع','Plural lab','vocabulary','type',['اكتب جمع الاسم من غير الأداة. الحروف الكبيرة والأوملاوت مهمين.','Type the plural noun without its article. Case and umlauts matter.']),
 M('synonym-trail','Ähnliche Wörter','كلمات قريبة في المعنى','Synonym trail','vocabulary','choice',['اختار كلمة قريبة في المعنى جوه جملة محددة.','Choose a word with a similar meaning in a specific sentence.']),
 M('opposite-pairs','Gegensätze','المعنى العكس','Opposite pairs','vocabulary','choice',['اختار عكس الكلمة في السياق المعروض.','Choose the opposite of the word in the given context.']),
 M('collocation','Wörter im Team','كلمات بتيجي مع بعض','Collocations','vocabulary','choice',['كمّل تعبير شائع بالفعل المناسب.','Complete a common expression with the right verb.']),
 M('compound-builder','Wortbausteine','ركّب الكلمة','Compound builder','vocabulary','type',['اكتب الاسم المركب بالأداة. آخر اسم بيساعدك تحدد الأداة.','Type the compound noun with its article. The final noun helps determine the article.']),
 M('verb-partner','Verb und Präposition','الفعل وحرف الجر','Verb partners','vocabulary','choice',['كمّل الجملة بحرف الجر اللي ماشي مع الفعل.','Complete the sentence with the preposition that goes with the verb.']),
 M('present-forms','Präsensrunde','جولة المضارع','Present forms','grammar','type',['اكتب تصريف الفعل للشخص اللي قدامك.','Type the present form for the displayed person.']),
 M('participle-lab','Partizip II','كوّن التصريف التالت','Participle lab','grammar','type',['من المصدر اكتب Partizip II مضبوط.','Type the correct past participle from the infinitive.']),
 M('perfect-helper','Haben oder sein?','مساعد الماضي','Perfect helpers','grammar','choice',['اختار haben أو sein حسب الجملة الكاملة.','Choose haben or sein from the complete sentence.']),
 M('case-detective','Kasusdetektiv','محقق الحالة','Case detective','grammar','choice',['اعرف حالة الجزء المحدد من وظيفته في الجملة.','Identify the marked phrase\'s case from its role in the sentence.']),
 M('preposition-lab','Präpositionslabor','معمل حروف الجر','Preposition lab','grammar','choice',['فرّق بين المكان والاتجاه وتعبيرات الوقت.','Distinguish location, direction and time expressions.']),
 M('adjective-puzzle','Adjektivpuzzle','كمّل نهاية الصفة','Adjective puzzle','grammar','type',['اكتب الصفة كاملة بالأداة والحالة المعروضة في الجملة.','Type the complete adjective for the article and case in the sentence.']),
 M('tense-switch','Zeitenwechsel','غيّر الزمن','Tense switch','grammar','order',['رتب كلمات نفس المعنى في الزمن المطلوب.','Arrange the words to express the same meaning in the requested tense.']),
 M('passive-builder','Passivwerkstatt','كوّن المبني للمجهول','Passive builder','grammar','order',['حوّل جملة واضحة للمبني للمجهول بالكلمات المعطاة.','Turn a clear active sentence into the passive using the supplied words.']),
 M('conditional-builder','Wenn-Werkstatt','كوّن شرط افتراضي','Conditional builder','grammar','order',['رتب الشرط والنتيجة في Konjunktiv II.','Arrange a hypothetical condition and result in Konjunktiv II.']),
 M('error-hunt','Fehlerjagd','اصطاد الغلطة','Error hunt','grammar','error',['اختار الكلمة الغلط وبعدين شوف التصحيح والسبب.','Pick the incorrect word, then see the correction and reason.']),
 M('prefix-split','Trennbare Verben','افصل البادئة','Split the prefix','grammar','order',['حط جزأي الفعل المنفصل في مكانهم في الجملة الرئيسية.','Place both parts of a separable verb in a main clause.']),
 M('listening-gap','Hörlücke','اسمع وكمّل','Listening gap','listening','type',['اسمع الجملة واكتب الكلمة الناقصة. النص متاح لو الصوت مش شغال.','Listen and type the missing word. The text is available if audio fails.'],true),
 M('sound-pairs','Klangpaare','فرّق بين صوتين','Sound pairs','listening','choice',['اسمع كلمة واختار كتابتها من كلمتين متشابهتين.','Hear a word and choose its spelling from a similar-sounding pair.'],true),
 M('spelling-repair','Schreibwerkstatt','صلّح كتابة الكلمة','Spelling repair','vocabulary','type',['شوف كلمة مكتوبة غلط واكتب الشكل الصحيح من المعنى.','See a misspelled word and type its correct form from the meaning.']),
 M('reading-detail','Genau lesen','اقرا التفاصيل','Reading details','reading','choice',['اقرا نص قصير واختار معلومة منه، من غير عداد إجباري.','Read a short text and find a detail, without a forced timer.']),
 M('paragraph-order','Textpuzzle','رتب الفقرة','Paragraph order','reading','order',['رتب جمل قصيرة عشان تعمل فقرة مترابطة.','Arrange short sentences into a connected paragraph.']),
 M('story-ending','Wie geht es weiter?','كمّل الحكاية','Story endings','reading','choice',['اختار نهاية متوافقة مع التفاصيل، مش نهاية مخمّنة من بره النص.','Choose an ending supported by the details, not a guess from outside the text.']),
];
export type Challenge191={id:string;mode:string;level:Lvl;prompt:string;ar:string;en:string;answer:string;options?:string[];tokens?:string[];reading?:string;audio?:string;explanation:[string,string];errorIndex?:number;model?:string;photo?:string};
export const modeOf191=(id:string)=>modes191.find(mode=>mode.id===id);
