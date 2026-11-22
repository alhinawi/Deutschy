import assert from 'node:assert/strict';
import fs from 'node:fs';

const first = JSON.parse(fs.readFileSync('data/word-examples.json', 'utf8'));
const second = JSON.parse(fs.readFileSync('data/word-examples2.json', 'utf8'));

// Protect reviewed distinctions that the structural coverage test cannot detect.
// Location: river, swimming pool, puddle and pond are different places.
assert(first.kieselstein.ar.includes('النهر'));
assert(!first.kieselstein.ar.includes('البحر'));
assert(first.schwimmring.ar.includes('حمام السباحة'));
assert(first.papierschiffchen.ar.includes('بركة ميه'));
assert(!first.papierschiffchen.ar.includes('الطين'));
for (const entry of [first.molch, second.kroete]) assert(entry.ar.includes('البركة'));

// An ignition is not a fall; easily is not slightly; evening is not night.
assert(first.streichholz.ar.includes('بيولع'));
assert(first.muschel.ar.includes('بسهولة'));
for (const entry of [first.amsel, second.gecko]) assert(entry.ar.includes('المسا'));

// A maraca rattles when shaken. It is not a squeeze toy.
assert(second.rumbakugel.de.includes('rasselt'));
assert(second.rumbakugel.de.includes('Schütteln'));
assert(second.rumbakugel.ar.includes('بتخشخش'));
assert(first.rumbakugel.de.includes('schüttle'));

// Keep the German subject and the Egyptian Arabic meaning aligned.
assert(first.schneckenhaus.de.startsWith('Die Schnecke'));
assert(first.schneckenhaus.ar.includes('الحلزون شايل'));
assert(first.skorpion.ar.includes('إبرة سامة'));
assert(first.quitte.ar.includes('بتتاكل'));
assert(first.brotfrucht.ar.includes('بتتاكل'));
assert(second.naehgarn.ar.includes('علبة الخياطة'));
// Units 9-11: do not substitute a different tool, vessel, food or material.
assert(second.schuessel.ar.includes('السلطانية'));
assert(second.backpinsel.ar.includes('فرشة المعجنات'));
assert(second.schraubzwinge.ar.includes('القمطة'));
assert(first.nussknacker.ar.includes('عين الجمل'));
assert(second.tuerklopfer.ar.includes('النحاس الأصفر'));
assert(first.bilderrahmen.ar.includes('الطرقة'));
assert(second.haarbuerste.ar.includes('خزانة الأدراج'));
assert(second.kuechenwaage.ar.includes('خمسمية جرام'));
assert(first.essstaebchen.de.startsWith('Mit den Essstäbchen'));
assert(first.essstaebchen.ar.startsWith('باكل الرز'));
assert(second.liegestuhl.de.startsWith('Den Liegestuhl'));
// Units 6-8: preserve object identity and the learner's action.
assert(second.pflanzkelle.ar.includes('الجاروف'));
assert(second.palette.ar.includes('البالتة'));
assert(first.schneidebrett.ar.includes('لوح التقطيع'));
assert(first.wanduhr.ar.includes('بتدق'));
assert(first.vorratsglas.ar.includes('طازة'));
assert(first.schuhschrank.ar.includes('الطرقة'));
assert(second.briefbeschwerer.ar.includes('الإزاز'));
assert(first.waschbrett.de.startsWith('Mit dem Waschbrett'));
assert(first.tastatur.de.startsWith('Mit der Tastatur'));
// Topics 37-42: distinguish animals and plants, and avoid unsafe generalities.
assert(second.muecke.ar.includes('الناموسة'));
assert(!second.muecke.ar.includes('الناموسية'));
assert(second.fliege.ar.includes('بتضايقنا'));
assert(second.schnecke.ar.includes('الحلزون'));
assert(second.mohn.ar.includes('الخشخاش'));
assert(first.eiche.ar.includes('شجرة البلوط'));
assert(second.rollstuhl.de.includes('diese Tür'));
assert(second.sonnenfinsternis.de.includes('verdeckt der Mond'));
// Topics 43-48: do not silently change the device, fruit, bread or garden part.
assert(second.kopierer.ar.includes('ماكينة التصوير'));
assert(second.tablet.ar.includes('كابل شحن'));
assert(second.akkuschrauber.ar.includes('المفك الكهربا'));
assert(second.vollkornbrot.ar.includes('الحبوب الكاملة'));
assert(second.johannisbeere.ar.includes('الكشمش'));
assert(second.brombeere.ar.includes('التوت الأسود'));
assert(first.gartenschlauch.ar.includes('حوض الزرع'));
assert(second.weinglas.ar.includes('النبيذ'));
assert(first.rohrzange.ar.includes('مفتاح المواسير'));
assert(second.spielkonsole.ar.includes('جهاز الألعاب'));
// Topics 49-54: German case and consistent food/animal names.
assert(second.buntstift.de.startsWith('Den Buntstift'));
assert(second.falafel.de.includes('die Falafel'));
assert(second.baklava.de.includes('die Baklava'));
assert(first.spargel.de.startsWith('Spargel gibt es'));
assert(second.tamburin.ar.includes('الدف'));
assert(second.leberwurst.ar.includes('سجق الكبدة'));
assert(second.marder.ar.includes('الدلق'));
assert(second.hecht.ar.includes('الكراكي'));
assert(second.hummel.ar.includes('النحلة الطنانة'));
// Topics 55-60: preserve the object, tense and avoid unsourced road rules.
assert(second.muellwagen.ar.includes('بتفضي'));
assert(second.waescheklammer.ar.includes('مشبك الغسيل'));
assert(second.giesskanne.ar.includes('إبريق الري'));
assert(second.blumentopf.ar.includes('تربة جديدة'));
assert(second.schneeflocke.ar.includes('ندفة التلج'));
assert(first.feder.ar.includes('بتقع'));
assert(second.moped.de.includes('gehört meiner Schwester'));
// Topics 25-30: keep the landmark, time of day, tense and food precise.
assert(first.leuchtturm.ar.includes('بتوضح الطريق'));
assert(second.leuchtturm.ar.includes('المنارة'));
assert(first.hafen.ar.includes('المسا'));
assert(second.schaukel.ar.includes('بتصر'));
assert(second.wuerfel.ar.includes('بيقع'));
assert(first.haehnchen.ar.includes('بتتشوي'));
assert(second.lauch.ar.includes('الكراث'));
assert(first.lebkuchen.de.startsWith('Lebkuchen gibt es'));
// Topics 31-36: do not turn material, tool, socket or garden bed into another noun.
assert(first.kakao.ar.includes('المسا'));
assert(first.schmied.ar.includes('معدن'));
assert(second.schlagzeug.ar.includes('طقم الدرامز'));
assert(second.steckdose.ar.includes('البريزة'));
assert(second.kommode.ar.includes('دولاب الأدراج'));
assert(second.rechen.ar.includes('مشط الجنينة'));
assert(second.spaten.ar.includes('حوض الزرع'));
assert(first.badewanne.de.includes('mit warmem Wasser'));
assert(second.handtuch.ar.includes('بتنشف'));
// Topics 13-18: preserve present tense, direction and sold-out meaning.
assert(first.biene.de.includes('Nektar'));
assert(first.biene.ar.includes('رحيق'));
assert(first.ball.ar.includes('بتتدحرج'));
assert(second.loeffel.ar.includes('بتقع'));
assert(second.stadion.ar.includes('تذاكر'));
assert(second.stadion.ar.includes('اتباعت'));
assert(second.ananas.ar.includes('الجنوب'));
assert(first.pflaume.ar.includes('أزرق غامق'));
// Topics 19-24: distinguish the shore, downhill direction, layers and glacier.
assert(first.zelt.ar.includes('جنب البحيرة'));
assert(second.fass.ar.includes('نازل من التل'));
assert(second.torte.ar.includes('طبقات'));
assert(second.gletscher.ar.includes('النهر الجليدي'));
assert(second.schlittschuh.ar.includes('حذاء التزلج'));
assert(second.schlittschuh.ar.includes('شفرة حادة'));
assert(second.blitz.ar.includes('بيضرب'));
assert(second.muenze.ar.includes('بتقع'));
// Topics 1-6: retain steepness, present tense and the track/platform distinction.
assert(first.treppe.ar.includes('انحداره شديد'));
assert(first.lampe.ar.includes('منورة'));
assert(second.schule.ar.includes('بتخلص'));
assert(second.zug.ar.includes('السكة رقم تلاتة'));
assert(second.flugzeug.ar.includes('بتطير'));
assert(second.apotheke.ar.includes('الناصية'));
// Topics 7-12: brown is not hazel, hay is not straw, forgetting is not ignoring.
assert(first.auge.ar.includes('بني'));
assert(second.pferd.ar.includes('دريس'));
assert(second.muetze.ar.includes('مبنساش'));
assert(second.regen.ar.includes('المسا'));
assert(second.koch.ar.includes('بيتبل'));
assert(first.pferd.ar.includes('بيجري'));
console.log('PASS 120 bilingual meaning regressions for reviewed vocabulary examples');
