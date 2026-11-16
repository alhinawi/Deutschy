import type { Lvl } from './grammar-types';
export type VerbKind = 'regular' | 'strong' | 'irregular' | 'modal' | 'separable' | 'reflexive';
export type Verb = {
  inf: string; ar: string; en: string; level: Lvl; kind: VerbKind; img: string;
  pres: [string, string, string, string, string, string]; pret: string; pp: string; aux: 'haben' | 'sein';
  ex: [string, string, string];
};

const stemOf = (inf: string) => (/(eln|ern)$/.test(inf) ? inf.slice(0, -1) : inf.slice(0, -2));
function presReg(inf: string): Verb['pres'] {
  const s = stemOf(inf);
  const needE = /(t|d|chn|dn|ffn|gn|tm)$/.test(s) && !/eln$|ern$/.test(inf);
  const du = /(s|ß|x|z)$/.test(s) ? s + 't' : s + (needE ? 'est' : 'st');
  const er = s + (needE ? 'et' : 't');
  const e = /(eln)$/.test(inf) ? s.slice(0, -2) + 'le' : s + 'e';
  const wir = inf;
  return [e, du, er, wir, er, wir];
}
const ppReg = (inf: string) => { const s = stemOf(inf); const needE = /(t|d|chn|dn|ffn|gn|tm)$/.test(s) && !/eln$|ern$/.test(inf); const noGe = /^(be|ge|er|ver|zer|ent|emp|miss|über)/.test(inf) || /ieren$/.test(inf); return (noGe ? '' : 'ge') + s + (needE ? 'et' : 't'); };
const pretReg = (inf: string) => { const s = stemOf(inf); const needE = /(t|d|chn|dn|ffn|gn|tm)$/.test(s) && !/eln$|ern$/.test(inf); return s + (needE ? 'ete' : 'te'); };

const V = (inf: string, ar: string, en: string, level: Lvl, kind: VerbKind, img: string, pres: Verb['pres'], pret: string, pp: string, aux: 'haben' | 'sein', ex: [string, string, string]): Verb => ({ inf, ar, en, level, kind, img, pres, pret, pp, aux, ex });
const reg = (inf: string, ar: string, en: string, level: Lvl, img: string, ex: [string, string, string], aux: 'haben' | 'sein' = 'haben') => V(inf, ar, en, level, 'regular', img, presReg(inf), pretReg(inf), ppReg(inf), aux, ex);
// strong: du-form and er-form given only when they differ from the regular pattern
const strong = (inf: string, ar: string, en: string, level: Lvl, img: string, du: string | null, er: string | null, pret: string, pp: string, aux: 'haben' | 'sein', ex: [string, string, string]) => {
  const p = presReg(inf);
  if (du) p[1] = du; if (er) { p[2] = er; p[4] = p[4]; }
  return V(inf, ar, en, level, 'strong', img, p, pret, pp, aux, ex);
};
const sep = (inf: string, ar: string, en: string, level: Lvl, img: string, pre: string, base: V0, ex: [string, string, string]) => {
  const p = base.pres.map((x) => x + ' ' + pre) as Verb['pres'];
  p[3] = base.pres[3] + ' ' + pre; p[5] = base.pres[5] + ' ' + pre;
  const pp = pre + base.pp;
  return V(inf, ar, en, level, 'separable', img, p, base.pret + ' ' + pre, pp, base.aux, ex);
};
type V0 = { pres: Verb['pres']; pret: string; pp: string; aux: 'haben' | 'sein' };
const b = (inf: string, du: string | null, er: string | null, pret: string, pp: string, aux: 'haben' | 'sein' = 'haben'): V0 => { const p = presReg(inf); if (du) p[1] = du; if (er) p[2] = er; return { pres: p, pret, pp, aux }; };
const refl = (inf: string, ar: string, en: string, level: Lvl, img: string, base: V0, ex: [string, string, string], pre = '') => {
  const rp = ['mich', 'dich', 'sich', 'uns', 'euch', 'sich'];
  const p = base.pres.map((x, i) => x + ' ' + rp[i] + (pre ? ' ' + pre : '')) as Verb['pres'];
  return V('sich ' + pre + inf, ar, en, level, 'reflexive', img, p, base.pret + ' sich' + (pre ? ' ' + pre : ''), pre + base.pp, base.aux, ex);
};

const sein = b('sein', null, null, 'war', 'gewesen', 'sein'); sein.pres = ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'];
const haben = b('haben', null, null, 'hatte', 'gehabt'); haben.pres = ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'];
const werden = b('werden', null, null, 'wurde', 'geworden', 'sein'); werden.pres = ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'];
const modal = (inf: string, ar: string, en: string, img: string, sg: [string, string], pl: string, pret: string, pp: string, ex: [string, string, string]) =>
  V(inf, ar, en, 'A1', 'modal', img, [sg[0], sg[1], sg[0], pl, pl.replace(/en$/, 't').replace(/rfen$/, 'rft'), pl], pret, pp, 'haben', ex);

const stehenB = b('stehen', null, null, 'stand', 'gestanden');
const kommenB = b('kommen', null, null, 'kam', 'gekommen', 'sein');
const fahrenB = b('fahren', 'fährst', 'fährt', 'fuhr', 'gefahren', 'sein');
const rufenB = b('rufen', null, null, 'rief', 'gerufen');
const nehmenB = b('nehmen', 'nimmst', 'nimmt', 'nahm', 'genommen');
const sehenB = b('sehen', 'siehst', 'sieht', 'sah', 'gesehen');
const gehenB = b('gehen', null, null, 'ging', 'gegangen', 'sein');
const fangenB = b('fangen', 'fängst', 'fängt', 'fing', 'gefangen');
const ladenB = b('laden', 'lädst', 'lädt', 'lud', 'geladen');
const waschenB = b('waschen', 'wäschst', 'wäscht', 'wusch', 'gewaschen');
const treffenB = b('treffen', 'triffst', 'trifft', 'traf', 'getroffen');
const setzenB = b('setzen', null, null, 'setzte', 'gesetzt');
const ziehenB = b('ziehen', null, null, 'zog', 'gezogen');
const stattB = b('finden', null, null, 'fand', 'gefunden');
const bringenB = b('bringen', null, null, 'brachte', 'gebracht');
const lassenB = b('lassen', 'lässt', 'lässt', 'ließ', 'gelassen');
const schlafenB = b('schlafen', 'schläfst', 'schläft', 'schlief', 'geschlafen');
const sprechenB = b('sprechen', 'sprichst', 'spricht', 'sprach', 'gesprochen');
const nehmenB2 = nehmenB;

export const verbs: Verb[] = [
  // core
  V('sein', 'يكون', 'to be', 'A1', 'irregular', 'herz', sein.pres, 'war', 'gewesen', 'sein', ['Ich bin müde.', 'أنا تعبان.', 'I am tired.']),
  V('haben', 'عنده / يملك', 'to have', 'A1', 'irregular', 'koffer', haben.pres, 'hatte', 'gehabt', 'haben', ['Wir haben ein Haus.', 'عندنا بيت.', 'We have a house.']),
  V('werden', 'يبقى / يصير', 'to become', 'A1', 'irregular', 'baum', werden.pres, 'wurde', 'geworden', 'sein', ['Er wird Arzt.', 'هيبقى دكتور.', 'He is becoming a doctor.']),
  modal('können', 'يقدر', 'can, to be able to', 'klavier', ['kann', 'kannst'], 'können', 'konnte', 'gekonnt', ['Ich kann schwimmen.', 'بعرف أعوم.', 'I can swim.']),
  modal('müssen', 'لازم', 'must, to have to', 'uhr', ['muss', 'musst'], 'müssen', 'musste', 'gemusst', ['Ich muss lernen.', 'لازم أذاكر.', 'I have to study.']),
  modal('wollen', 'يريد / عايز', 'to want', 'himmel', ['will', 'willst'], 'wollen', 'wollte', 'gewollt', ['Er will reisen.', 'عايز يسافر.', 'He wants to travel.']),
  modal('dürfen', 'مسموح له', 'may, to be allowed', 'tuer', ['darf', 'darfst'], 'dürfen', 'durfte', 'gedurft', ['Darf ich hier sitzen?', 'ينفع أقعد هنا؟', 'May I sit here?']),
  modal('sollen', 'المفروض', 'should, to be supposed to', 'polizist', ['soll', 'sollst'], 'sollen', 'sollte', 'gesollt', ['Du sollst mehr schlafen.', 'المفروض تنام أكتر.', 'You should sleep more.']),
  modal('mögen', 'يحب', 'to like', 'herz', ['mag', 'magst'], 'mögen', 'mochte', 'gemocht', ['Ich mag Tee.', 'بحب الشاي.', 'I like tea.']),
  V('wissen', 'يعرف (معلومة)', 'to know (a fact)', 'A1', 'irregular', 'bibliothek', ['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen'], 'wusste', 'gewusst', 'haben', ['Ich weiß es nicht.', 'معرفش.', 'I do not know.']),
  V('tun', 'يعمل', 'to do', 'A1', 'irregular', 'hand', ['tue', 'tust', 'tut', 'tun', 'tut', 'tun'], 'tat', 'getan', 'haben', ['Was tust du da?', 'بتعمل إيه هناك؟', 'What are you doing there?']),
  strong('lassen', 'يسيب / يخلّي', 'to let, to leave', 'A2', 'tuer', 'lässt', 'lässt', 'ließ', 'gelassen', 'haben', ['Lass mich in Ruhe.', 'سيبني في حالي.', 'Leave me alone.']),
  // regular A1
  reg('machen', 'يعمل', 'to make, to do', 'A1', 'heft', ['Was machst du?', 'بتعمل إيه؟', 'What are you doing?']),
  reg('lernen', 'يتعلم', 'to learn', 'A1', 'schule', ['Ich lerne Deutsch.', 'بتعلم ألماني.', 'I am learning German.']),
  reg('spielen', 'يلعب', 'to play', 'A1', 'fussball', ['Die Kinder spielen im Park.', 'الأطفال بيلعبوا في الحديقة.', 'The children play in the park.']),
  reg('wohnen', 'يسكن', 'to live (reside)', 'A1', 'haus', ['Ich wohne in Mansoura.', 'ساكن في المنصورة.', 'I live in Mansoura.']),
  reg('kaufen', 'يشتري', 'to buy', 'A1', 'supermarkt', ['Ich kaufe Brot.', 'بشتري عيش.', 'I buy bread.']),
  reg('kochen', 'يطبخ', 'to cook', 'A1', 'topf', ['Mutter kocht Suppe.', 'ماما بتطبخ شوربة.', 'Mother cooks soup.']),
  reg('arbeiten', 'يشتغل', 'to work', 'A1', 'computer', ['Er arbeitet im Krankenhaus.', 'بيشتغل في مستشفى.', 'He works in a hospital.']),
  reg('sagen', 'يقول', 'to say', 'A1', 'telefon', ['Was sagst du?', 'بتقول إيه؟', 'What do you say?']),
  reg('fragen', 'يسأل', 'to ask', 'A1', 'tafel', ['Ich frage den Lehrer.', 'بسأل المدرس.', 'I ask the teacher.']),
  reg('hören', 'يسمع', 'to hear, to listen', 'A1', 'ohr', ['Ich höre Musik.', 'بسمع موسيقى.', 'I listen to music.']),
  reg('suchen', 'يدوّر على', 'to look for', 'A1', 'schluessel', ['Ich suche meinen Schlüssel.', 'بدور على مفتاحي.', 'I am looking for my key.']),
  reg('brauchen', 'يحتاج', 'to need', 'A1', 'tasche', ['Ich brauche Hilfe.', 'محتاج مساعدة.', 'I need help.']),
  reg('lieben', 'يحب (حب كبير)', 'to love', 'A1', 'herz', ['Ich liebe dich.', 'بحبك.', 'I love you.']),
  reg('besuchen', 'يزور', 'to visit', 'A1', 'hotel', ['Wir besuchen Oma.', 'هنزور تيتة.', 'We are visiting grandma.']),
  reg('bezahlen', 'يدفع', 'to pay', 'A1', 'bank', ['Ich bezahle bar.', 'هدفع كاش.', 'I pay in cash.']),
  reg('antworten', 'يرد', 'to answer', 'A1', 'handy', ['Er antwortet nicht.', 'مش بيرد.', 'He does not answer.']),
  reg('öffnen', 'يفتح', 'to open', 'A1', 'tuer', ['Ich öffne die Tür.', 'بفتح الباب.', 'I open the door.']),
  reg('warten', 'يستنى', 'to wait', 'A1', 'bahnhof', ['Wir warten auf den Zug.', 'بنستنى القطر.', 'We wait for the train.']),
  reg('tanzen', 'يرقص', 'to dance', 'A1', 'gitarre', ['Sie tanzt gern.', 'بتحب ترقص.', 'She likes to dance.']),
  reg('reisen', 'يسافر', 'to travel', 'A1', 'koffer', ['Wir reisen nach Berlin.', 'مسافرين برلين.', 'We travel to Berlin.'], 'sein'),
  reg('leben', 'يعيش', 'to live', 'A1', 'dorf', ['Er lebt in Kairo.', 'عايش في القاهرة.', 'He lives in Cairo.']),
  reg('zeigen', 'يوري', 'to show', 'A2', 'spiegel', ['Zeig mir das Foto.', 'وريني الصورة.', 'Show me the photo.']),
  reg('holen', 'يجيب', 'to fetch', 'A2', 'flasche', ['Ich hole Wasser.', 'هجيب ميه.', 'I will fetch water.']),
  reg('stellen', 'يحط (واقف)', 'to put (upright)', 'A2', 'lampe', ['Ich stelle die Lampe auf den Tisch.', 'بحط الأباجورة على الترابيزة.', 'I put the lamp on the table.']),
  reg('legen', 'يحط (مفرود)', 'to lay down', 'A2', 'buch', ['Ich lege das Buch auf den Tisch.', 'بحط الكتاب على الترابيزة.', 'I lay the book on the table.']),
  reg('putzen', 'ينضف', 'to clean', 'A2', 'besen', ['Sie putzt das Haus.', 'بتنضف البيت.', 'She cleans the house.']),
  reg('duschen', 'ياخد دش', 'to shower', 'A2', 'wasser', ['Ich dusche am Morgen.', 'باخد دش الصبح.', 'I shower in the morning.']),
  reg('glauben', 'يصدق / يعتقد', 'to believe', 'A2', 'kirche', ['Ich glaube dir.', 'مصدقك.', 'I believe you.']),
  reg('kosten', 'تكلف', 'to cost', 'A1', 'markt', ['Das kostet fünf Euro.', 'ده بخمسة يورو.', 'That costs five euros.']),
  reg('schmecken', 'طعمه حلو', 'to taste', 'A1', 'suppe', ['Die Suppe schmeckt gut.', 'الشوربة طعمها حلو.', 'The soup tastes good.']),
  reg('wandern', 'يتمشى مسافات', 'to hike', 'B1', 'wald', ['Wir wandern im Wald.', 'بنتمشى في الغابة.', 'We hike in the forest.'], 'sein'),
  reg('überzeugen', 'يقنع', 'to convince', 'B2', 'rathaus', ['Er überzeugt alle.', 'بيقنع الكل.', 'He convinces everyone.']),
  reg('studieren', 'يدرس في الجامعة', 'to study (at university)', 'A2', 'bibliothek', ['Ich studiere Medizin.', 'بدرس طب.', 'I study medicine.']),
  reg('telefonieren', 'يتكلم في التليفون', 'to phone', 'A2', 'telefon', ['Ich telefoniere mit Mama.', 'بكلم ماما في التليفون.', 'I am phoning Mum.']),
  reg('diskutieren', 'يناقش', 'to discuss', 'B1', 'rathaus', ['Wir diskutieren über Politik.', 'بنناقش السياسة.', 'We discuss politics.']),
  reg('erklären', 'يشرح', 'to explain', 'A2', 'tafel', ['Der Lehrer erklärt die Regel.', 'المدرس بيشرح القاعدة.', 'The teacher explains the rule.']),
  reg('entwickeln', 'يطوّر', 'to develop', 'B2', 'computer', ['Die Firma entwickelt neue Produkte.', 'الشركة بتطور منتجات جديدة.', 'The company develops new products.']),
  reg('verändern', 'يغيّر', 'to change', 'B2', 'regenbogen', ['Die Zeit verändert alles.', 'الوقت بيغير كل حاجة.', 'Time changes everything.']),
  reg('behaupten', 'يدّعي', 'to claim', 'C1', 'schloss', ['Er behauptet, unschuldig zu sein.', 'بيدّعي إنه برىء.', 'He claims to be innocent.']),
  reg('bewältigen', 'يتغلب على', 'to cope with', 'C1', 'berg', ['Sie bewältigt viele Aufgaben.', 'بتتغلب على مهام كتير.', 'She copes with many tasks.']),
  reg('erörtern', 'يناقش بتعمق', 'to discuss in depth', 'C2', 'museum', ['Das Gremium erörtert den Antrag.', 'اللجنة بتناقش الطلب بتعمق.', 'The committee discusses the application in depth.']),
  // strong
  strong('gehen', 'يروح / يمشي', 'to go', 'A1', 'strasse', null, null, 'ging', 'gegangen', 'sein', ['Ich gehe zur Schule.', 'رايح المدرسة.', 'I am going to school.']),
  strong('kommen', 'يجي', 'to come', 'A1', 'taxi', null, null, 'kam', 'gekommen', 'sein', ['Woher kommst du?', 'جاي منين؟', 'Where do you come from?']),
  strong('essen', 'ياكل', 'to eat', 'A1', 'teller', 'isst', 'isst', 'aß', 'gegessen', 'haben', ['Wir essen Reis.', 'بناكل رز.', 'We eat rice.']),
  strong('trinken', 'يشرب', 'to drink', 'A1', 'tee', null, null, 'trank', 'getrunken', 'haben', ['Ich trinke Tee.', 'بشرب شاي.', 'I drink tea.']),
  strong('sehen', 'يشوف', 'to see', 'A1', 'auge', 'siehst', 'sieht', 'sah', 'gesehen', 'haben', ['Ich sehe einen Vogel.', 'شايف عصفور.', 'I see a bird.']),
  strong('lesen', 'يقرا', 'to read', 'A1', 'buch', 'liest', 'liest', 'las', 'gelesen', 'haben', ['Sie liest eine Zeitung.', 'بتقرا جريدة.', 'She reads a newspaper.']),
  strong('schreiben', 'يكتب', 'to write', 'A1', 'stift', null, null, 'schrieb', 'geschrieben', 'haben', ['Ich schreibe einen Brief.', 'بكتب جواب.', 'I write a letter.']),
  strong('sprechen', 'يتكلم', 'to speak', 'A1', 'telefon', 'sprichst', 'spricht', 'sprach', 'gesprochen', 'haben', ['Sprichst du Deutsch?', 'بتتكلم ألماني؟', 'Do you speak German?']),
  strong('nehmen', 'ياخد', 'to take', 'A1', 'tasche', 'nimmst', 'nimmt', 'nahm', 'genommen', 'haben', ['Ich nehme den Bus.', 'باخد الأتوبيس.', 'I take the bus.']),
  strong('geben', 'يدّي', 'to give', 'A1', 'hand', 'gibst', 'gibt', 'gab', 'gegeben', 'haben', ['Gibst du mir das Salz?', 'تديني الملح؟', 'Will you give me the salt?']),
  strong('fahren', 'يسوق / يسافر', 'to drive, to go (by vehicle)', 'A1', 'auto', 'fährst', 'fährt', 'fuhr', 'gefahren', 'sein', ['Er fährt nach Kairo.', 'مسافر القاهرة.', 'He is going to Cairo.']),
  strong('schlafen', 'ينام', 'to sleep', 'A1', 'bett', 'schläfst', 'schläft', 'schlief', 'geschlafen', 'haben', ['Das Baby schläft.', 'البيبي نايم.', 'The baby is sleeping.']),
  strong('laufen', 'يجري / يمشي', 'to run, to walk', 'A1', 'park', 'läufst', 'läuft', 'lief', 'gelaufen', 'sein', ['Ich laufe im Park.', 'بجري في الحديقة.', 'I run in the park.']),
  strong('helfen', 'يساعد', 'to help', 'A1', 'arzt', 'hilfst', 'hilft', 'half', 'geholfen', 'haben', ['Ich helfe dir gern.', 'بساعدك بسرور.', 'I am glad to help you.']),
  strong('finden', 'يلاقي / يجد', 'to find', 'A1', 'schluessel', null, null, 'fand', 'gefunden', 'haben', ['Ich finde den Schlüssel nicht.', 'مش لاقي المفتاح.', 'I cannot find the key.']),
  strong('bleiben', 'يفضل / يقعد', 'to stay', 'A1', 'sofa', null, null, 'blieb', 'geblieben', 'sein', ['Ich bleibe zu Hause.', 'هقعد في البيت.', 'I stay at home.']),
  strong('schwimmen', 'يعوم', 'to swim', 'A1', 'meer', null, null, 'schwamm', 'geschwommen', 'sein', ['Wir schwimmen im Meer.', 'بنعوم في البحر.', 'We swim in the sea.']),
  strong('singen', 'يغني', 'to sing', 'A1', 'klavier', null, null, 'sang', 'gesungen', 'haben', ['Sie singt schön.', 'بتغني حلو.', 'She sings beautifully.']),
  strong('sitzen', 'يقعد (قاعد)', 'to sit', 'A1', 'sofa', null, null, 'saß', 'gesessen', 'haben', ['Er sitzt auf dem Sofa.', 'قاعد على الكنبة.', 'He sits on the sofa.']),
  V('stehen', 'يقف (واقف)', 'to stand', 'A1', 'strong', 'turm', presReg('stehen'), 'stand', 'gestanden', 'haben', ['Der Turm steht dort.', 'البرج واقف هناك.', 'The tower stands there.']),
  strong('liegen', 'يرقد (مفرود)', 'to lie', 'A1', 'bett', null, null, 'lag', 'gelegen', 'haben', ['Das Buch liegt auf dem Tisch.', 'الكتاب على الترابيزة.', 'The book lies on the table.']),
  strong('treffen', 'يقابل', 'to meet', 'A2', 'park', 'triffst', 'trifft', 'traf', 'getroffen', 'haben', ['Ich treffe meinen Freund.', 'هقابل صاحبي.', 'I am meeting my friend.']),
  strong('tragen', 'يشيل / يلبس', 'to carry, to wear', 'A2', 'rucksack', 'trägst', 'trägt', 'trug', 'getragen', 'haben', ['Er trägt einen Mantel.', 'لابس معطف.', 'He is wearing a coat.']),
  strong('waschen', 'يغسل', 'to wash', 'A2', 'waschmaschine', 'wäschst', 'wäscht', 'wusch', 'gewaschen', 'haben', ['Ich wasche meine Hände.', 'بغسل إيديا.', 'I wash my hands.']),
  strong('halten', 'يمسك / يوقف', 'to hold, to stop', 'A2', 'bus', 'hältst', 'hält', 'hielt', 'gehalten', 'haben', ['Der Bus hält hier.', 'الأتوبيس بيوقف هنا.', 'The bus stops here.']),
  strong('fallen', 'يقع', 'to fall', 'A2', 'baum', 'fällst', 'fällt', 'fiel', 'gefallen', 'sein', ['Das Glas fällt auf den Boden.', 'الكوباية بتقع.', 'The glass falls to the floor.']),
  strong('rufen', 'ينادي', 'to call', 'A2', 'telefon', null, null, 'rief', 'gerufen', 'haben', ['Er ruft den Arzt.', 'بينادي الدكتور.', 'He calls the doctor.']),
  V('bringen', 'يجيب / يوصل', 'to bring', 'A2', 'irregular', 'koffer', presReg('bringen'), 'brachte', 'gebracht', 'haben', ['Ich bringe dir einen Tee.', 'هجيبلك شاي.', 'I will bring you a tea.']),
  V('denken', 'يفكر', 'to think', 'A2', 'irregular', 'kerze', presReg('denken'), 'dachte', 'gedacht', 'haben', ['Ich denke an dich.', 'بفكر فيك.', 'I am thinking of you.']),
  V('kennen', 'يعرف (شخص)', 'to know (a person)', 'A2', 'irregular', 'familie', presReg('kennen'), 'kannte', 'gekannt', 'haben', ['Ich kenne ihn gut.', 'أعرفه كويس.', 'I know him well.']),
  V('nennen', 'يسمّي', 'to name', 'A2', 'irregular', 'baby', presReg('nennen'), 'nannte', 'genannt', 'haben', ['Sie nennen ihn Ali.', 'بيسموه علي.', 'They call him Ali.']),
  strong('verstehen', 'يفهم', 'to understand', 'A1', 'tafel', null, null, 'verstand', 'verstanden', 'haben', ['Ich verstehe nicht.', 'مش فاهم.', 'I do not understand.']),
  strong('beginnen', 'يبدأ', 'to begin', 'A2', 'kino', null, null, 'begann', 'begonnen', 'haben', ['Der Film beginnt um acht.', 'الفيلم بيبدأ الساعة 8.', 'The film starts at eight.']),
  strong('gewinnen', 'يكسب', 'to win', 'A2', 'stadion', null, null, 'gewann', 'gewonnen', 'haben', ['Wir gewinnen das Spiel.', 'هنكسب الماتش.', 'We win the match.']),
  strong('vergessen', 'ينسى', 'to forget', 'A2', 'schluessel', 'vergisst', 'vergisst', 'vergaß', 'vergessen', 'haben', ['Ich habe den Schlüssel vergessen.', 'نسيت المفتاح.', 'I forgot the key.']),
  strong('bekommen', 'يستلم / ياخد', 'to get, to receive', 'A2', 'handy', null, null, 'bekam', 'bekommen', 'haben', ['Ich bekomme ein Paket.', 'هستلم طرد.', 'I am getting a parcel.']),
  strong('verlieren', 'يخسر / يضيّع', 'to lose', 'A2', 'ball', null, null, 'verlor', 'verloren', 'haben', ['Er verliert seinen Schlüssel.', 'بيضيع مفتاحه.', 'He loses his key.']),
  strong('ziehen', 'يشد / ينقل سكن', 'to pull, to move', 'A2', 'haus', null, null, 'zog', 'gezogen', 'haben', ['Wir ziehen nach Berlin.', 'بننتقل برلين.', 'We are moving to Berlin.']),
  strong('fliegen', 'يطير / يسافر بالطيارة', 'to fly', 'A2', 'flugzeug', null, null, 'flog', 'geflogen', 'sein', ['Wir fliegen nach München.', 'مسافرين ميونخ بالطيارة.', 'We fly to Munich.']),
  strong('schneiden', 'يقطع', 'to cut', 'A2', 'messer', null, null, 'schnitt', 'geschnitten', 'haben', ['Ich schneide das Brot.', 'بقطع العيش.', 'I cut the bread.']),
  strong('werfen', 'يرمي', 'to throw', 'A2', 'ball', 'wirfst', 'wirft', 'warf', 'geworfen', 'haben', ['Er wirft den Ball.', 'بيرمي الكورة.', 'He throws the ball.']),
  strong('sterben', 'يموت', 'to die', 'B1', 'baum', 'stirbst', 'stirbt', 'starb', 'gestorben', 'sein', ['Die Blume stirbt.', 'الوردة بتموت.', 'The flower is dying.']),
  strong('steigen', 'يطلع / يرتفع', 'to climb, to rise', 'B1', 'treppe', null, null, 'stieg', 'gestiegen', 'sein', ['Die Preise steigen.', 'الأسعار بتزيد.', 'Prices are rising.']),
  strong('wachsen', 'يكبر / ينمو', 'to grow', 'B1', 'blume', 'wächst', 'wächst', 'wuchs', 'gewachsen', 'sein', ['Die Kinder wachsen schnell.', 'الأطفال بيكبروا بسرعة.', 'The children grow quickly.']),
  strong('versprechen', 'يوعد', 'to promise', 'B1', 'hand', 'versprichst', 'verspricht', 'versprach', 'versprochen', 'haben', ['Ich verspreche es dir.', 'بوعدك.', 'I promise you.']),
  strong('empfehlen', 'يرشّح', 'to recommend', 'B1', 'restaurant', 'empfiehlst', 'empfiehlt', 'empfahl', 'empfohlen', 'haben', ['Ich empfehle dieses Restaurant.', 'برشحلك المطعم ده.', 'I recommend this restaurant.']),
  strong('brechen', 'يكسر', 'to break', 'B1', 'glas', 'brichst', 'bricht', 'brach', 'gebrochen', 'haben', ['Er bricht das Glas.', 'بيكسر الكوباية.', 'He breaks the glass.']),
  strong('bieten', 'يعرض', 'to offer', 'B1', 'markt', null, null, 'bot', 'geboten', 'haben', ['Die Firma bietet einen Job.', 'الشركة بتعرض وظيفة.', 'The company offers a job.']),
  strong('scheinen', 'يبان / يشرق', 'to seem, to shine', 'B1', 'sonne', null, null, 'schien', 'geschienen', 'haben', ['Die Sonne scheint.', 'الشمس طالعة.', 'The sun is shining.']),
  strong('entscheiden', 'يقرر', 'to decide', 'B1', 'rathaus', null, null, 'entschied', 'entschieden', 'haben', ['Du musst dich entscheiden.', 'لازم تقرر.', 'You have to decide.']),
  strong('vergleichen', 'يقارن', 'to compare', 'B1', 'markt', null, null, 'verglich', 'verglichen', 'haben', ['Wir vergleichen die Preise.', 'بنقارن الأسعار.', 'We compare the prices.']),
  strong('genießen', 'يستمتع', 'to enjoy', 'B2', 'strand', 'genießt', 'genießt', 'genoss', 'genossen', 'haben', ['Sie genießt den Urlaub.', 'بتستمتع بالإجازة.', 'She enjoys the holiday.']),
  strong('erfinden', 'يخترع', 'to invent', 'B2', 'computer', null, null, 'erfand', 'erfunden', 'haben', ['Er hat das Rad erfunden.', 'هو اخترع العجلة.', 'He invented the wheel.']),
  strong('betreiben', 'يدير', 'to run, to operate', 'C1', 'bauernhof', null, null, 'betrieb', 'betrieben', 'haben', ['Sie betreibt ein Hotel.', 'بتدير فندق.', 'She runs a hotel.']),
  strong('verleihen', 'يمنح / يعير', 'to lend, to award', 'C1', 'museum', null, null, 'verlieh', 'verliehen', 'haben', ['Man verlieh ihm einen Preis.', 'اتمنح جايزة.', 'He was awarded a prize.']),
  sep('abwägen', 'يوازن', 'to weigh up', 'C2', 'museum', 'ab', b('wägen', null, null, 'wog', 'gewogen'), ['Er wägt alle Argumente ab.', 'بيوازن كل الحجج.', 'He weighs up all the arguments.']),
  // separable
  sep('aufstehen', 'يصحى / يقوم', 'to get up', 'A1', 'bett', 'auf', b('stehen', null, null, 'stand', 'gestanden', 'sein'), ['Ich stehe um sechs Uhr auf.', 'بصحى الساعة 6.', 'I get up at six.']),
  sep('anrufen', 'يتصل بـ', 'to call (phone)', 'A1', 'handy', 'an', rufenB, ['Ich rufe dich morgen an.', 'هكلمك بكرة.', 'I will call you tomorrow.']),
  sep('einkaufen', 'يتسوق', 'to shop', 'A1', 'markt', 'ein', b('kaufen', null, null, 'kaufte', 'gekauft'), ['Wir kaufen im Supermarkt ein.', 'بنتسوق من السوبرماركت.', 'We shop at the supermarket.']),
  sep('ankommen', 'يوصل', 'to arrive', 'A1', 'bahnhof', 'an', kommenB, ['Der Zug kommt um acht an.', 'القطر بيوصل الساعة 8.', 'The train arrives at eight.']),
  sep('abfahren', 'يتحرك (بمركبة)', 'to depart', 'A1', 'zug', 'ab', fahrenB, ['Der Bus fährt um neun ab.', 'الأتوبيس بيتحرك الساعة 9.', 'The bus leaves at nine.']),
  sep('einsteigen', 'يركب', 'to get on', 'A1', 'bus', 'ein', b('steigen', null, null, 'stieg', 'gestiegen', 'sein'), ['Wir steigen in den Bus ein.', 'بنركب الأتوبيس.', 'We get on the bus.']),
  sep('aussteigen', 'ينزل (من مركبة)', 'to get off', 'A1', 'u-bahn', 'aus', b('steigen', null, null, 'stieg', 'gestiegen', 'sein'), ['Ich steige an der Haltestelle aus.', 'بنزل عند المحطة.', 'I get off at the stop.']),
  sep('umsteigen', 'يغيّر المواصلة', 'to change (trains)', 'A2', 'u-bahn', 'um', b('steigen', null, null, 'stieg', 'gestiegen', 'sein'), ['Wir müssen in Köln umsteigen.', 'لازم نبدل في كولن.', 'We have to change in Cologne.']),
  sep('mitkommen', 'يجي معاه', 'to come along', 'A1', 'auto', 'mit', kommenB, ['Kommst du mit?', 'جاي معانا؟', 'Are you coming along?']),
  sep('mitbringen', 'يجيب معاه', 'to bring along', 'A1', 'kuchen', 'mit', bringenB, ['Ich bringe Kuchen mit.', 'هجيب كيكة.', 'I will bring cake.']),
  sep('anfangen', 'يبدأ', 'to begin', 'A1', 'schule', 'an', fangenB, ['Der Kurs fängt um neun an.', 'الكورس بيبدأ 9.', 'The course starts at nine.']),
  sep('aufmachen', 'يفتح', 'to open', 'A1', 'fenster', 'auf', b('machen', null, null, 'machte', 'gemacht'), ['Mach bitte das Fenster auf.', 'افتح الشباك لو سمحت.', 'Please open the window.']),
  sep('zumachen', 'يقفل', 'to close', 'A1', 'tuer', 'zu', b('machen', null, null, 'machte', 'gemacht'), ['Ich mache die Tür zu.', 'بقفل الباب.', 'I close the door.']),
  sep('fernsehen', 'يتفرج على التلفزيون', 'to watch TV', 'A1', 'sofa', 'fern', sehenB, ['Wir sehen abends fern.', 'بنتفرج على التلفزيون بالليل.', 'We watch TV in the evening.']),
  sep('aussehen', 'شكله', 'to look (appear)', 'A2', 'spiegel', 'aus', sehenB, ['Du siehst müde aus.', 'شكلك تعبان.', 'You look tired.']),
  sep('aufräumen', 'يرتّب', 'to tidy up', 'A2', 'besen', 'auf', b('räumen', null, null, 'räumte', 'geräumt'), ['Räum dein Zimmer auf!', 'رتب أوضتك!', 'Tidy up your room!']),
  sep('einladen', 'يعزم', 'to invite', 'A2', 'kuchen', 'ein', ladenB, ['Ich lade dich zum Essen ein.', 'بعزمك على الغدا.', 'I invite you for dinner.']),
  sep('teilnehmen', 'يشارك', 'to take part', 'B1', 'stadion', 'teil', nehmenB, ['Ich nehme am Kurs teil.', 'بشارك في الكورس.', 'I take part in the course.']),
  sep('stattfinden', 'يحصل / يتقام', 'to take place', 'B1', 'stadt', 'statt', stattB, ['Das Konzert findet heute statt.', 'الحفلة هتتقام النهاردة.', 'The concert takes place today.']),
  sep('vorbereiten', 'يحضّر', 'to prepare', 'B1', 'heft', 'vor', b('bereiten', null, null, 'bereitete', 'bereitet'), ['Ich bereite die Prüfung vor.', 'بحضر للامتحان.', 'I prepare for the exam.']),
  sep('zurückkommen', 'يرجع', 'to come back', 'A2', 'haus', 'zurück', kommenB, ['Ich komme bald zurück.', 'راجع قريب.', 'I will be back soon.']),
  sep('ausgehen', 'يخرج', 'to go out', 'A2', 'restaurant', 'aus', gehenB, ['Wir gehen am Samstag aus.', 'بنخرج السبت.', 'We go out on Saturday.']),
  // reflexive
  refl('freuen', 'يفرح', 'to be glad', 'A2', 'ball', b('freuen', null, null, 'freute', 'gefreut'), ['Ich freue mich auf das Wochenende.', 'مستني الويك إند.', 'I look forward to the weekend.']),
  refl('treffen', 'يتقابل', 'to meet up', 'A2', 'park', treffenB, ['Wir treffen uns um acht.', 'هنتقابل الساعة 8.', 'We meet at eight.']),
  refl('setzen', 'يقعد', 'to sit down', 'A2', 'sofa', setzenB, ['Setz dich bitte.', 'اقعد لو سمحت.', 'Please sit down.']),
  refl('interessieren', 'يهتم', 'to be interested', 'A2', 'buch', b('interessieren', null, null, 'interessierte', 'interessiert'), ['Ich interessiere mich für Geschichte.', 'بهتم بالتاريخ.', 'I am interested in history.']),
  refl('erinnern', 'يفتكر', 'to remember', 'B1', 'kerze', b('erinnern', null, null, 'erinnerte', 'erinnert'), ['Ich erinnere mich an dich.', 'فاكرك.', 'I remember you.']),
  refl('fühlen', 'يحس', 'to feel', 'A2', 'herz', b('fühlen', null, null, 'fühlte', 'gefühlt'), ['Ich fühle mich gut.', 'حاسس إني كويس.', 'I feel good.']),
  refl('beeilen', 'يستعجل', 'to hurry', 'A2', 'uhr', b('beeilen', null, null, 'beeilte', 'beeilt'), ['Beeil dich!', 'اتعجل!', 'Hurry up!']),
  refl('ruhen', 'يرتاح', 'to rest', 'A2', 'bett', b('ruhen', null, null, 'ruhte', 'geruht'), ['Ich ruhe mich aus.', 'بريح.', 'I am resting.'], 'aus'),
  refl('ärgern', 'يتضايق', 'to be annoyed', 'B1', 'feuer', b('ärgern', null, null, 'ärgerte', 'geärgert'), ['Ich ärgere mich über den Lärm.', 'متضايق من الدوشة.', 'I am annoyed by the noise.']),
  refl('entschuldigen', 'يعتذر', 'to apologise', 'A2', 'hand', b('entschuldigen', null, null, 'entschuldigte', 'entschuldigt'), ['Ich entschuldige mich.', 'بعتذر.', 'I apologise.']),
  refl('stellen', 'يقدّم نفسه / يتخيل', 'to introduce oneself', 'A2', 'hotel', b('stellen', null, null, 'stellte', 'gestellt'), ['Ich stelle mich kurz vor.', 'هعرفكم بنفسي بسرعة.', 'Let me introduce myself briefly.'], 'vor'),
  refl('ziehen', 'يلبس', 'to get dressed', 'A2', 'hemd', b('ziehen', null, null, 'zog', 'gezogen'), ['Ich ziehe mich schnell an.', 'بلبس بسرعة.', 'I get dressed quickly.'], 'an'),
];
export const verbOf = (inf: string) => verbs.find((v) => v.inf === inf);
export const slug = (inf: string) => inf.replace(/^sich /, 'sich-').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
