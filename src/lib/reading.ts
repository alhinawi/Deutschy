export type ReadingText = {
  id: string; level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'; title: [string, string];
  de: string[]; ar: string[]; gloss?: [string, string][];
  // question, correct answer first, then two wrong answers
  q: [string, string, string, string][];
};

export const readings: ReadingText[] = [
  { id: 'ich-heisse-lina', level: 'A1', title: ['Ich heiße Lina', 'اسمي لينا'],
    de: ['Hallo! Ich heiße Lina. Ich bin 24 Jahre alt und komme aus Wien. Ich wohne in Berlin.', 'Ich bin Studentin. Ich lerne Medizin. Meine Hobbys sind Lesen und Schwimmen.'],
    ar: ['أهلاً! اسمي لينا. عندي 24 سنة وجاية من فيينا. ساكنة في برلين.', 'أنا طالبة. بدرس الطب. هواياتي القراءة والسباحة.'],
    q: [['Woher kommt Lina?', 'Aus Wien.', 'Aus Berlin.', 'Aus Medizin.'], ['Was ist Lina?', 'Studentin.', 'Ärztin.', 'Lehrerin.'], ['Was ist ihr Hobby?', 'Lesen und Schwimmen.', 'Kochen und Tanzen.', 'Malen und Singen.']] },
  { id: 'meine-familie', level: 'A1', title: ['Meine Familie', 'عيلتي'],
    de: ['Ich habe eine kleine Familie. Mein Vater heißt Karim und meine Mutter heißt Sara. Ich habe einen Bruder und eine Schwester.', 'Mein Bruder ist 15 Jahre alt. Meine Schwester ist erst 6. Sie geht noch in den Kindergarten. Am Sonntag essen wir alle zusammen bei meiner Oma.'],
    ar: ['عندي عيلة صغيرة. أبويا اسمه كريم وأمي اسمها سارة. عندي أخ وأخت.', 'أخويا عنده 15 سنة. أختي لسه 6 سنين وبتروح الحضانة. يوم الأحد بناكل كلنا مع جدتي.'],
    q: [['Wie viele Geschwister hat der Erzähler?', 'Zwei.', 'Eins.', 'Drei.'], ['Wo ist die Schwester am Tag?', 'Im Kindergarten.', 'In der Schule.', 'Bei der Oma.'], ['Wann essen sie bei der Oma?', 'Am Sonntag.', 'Am Montag.', 'Am Freitag.']] },
  { id: 'im-supermarkt', level: 'A1', title: ['Im Supermarkt', 'في السوبر ماركت'],
    de: ['Tom geht heute in den Supermarkt. Er braucht Brot, Milch, Eier und Äpfel. Das Brot kostet 2 Euro. Die Milch kostet 1 Euro.', 'An der Kasse bezahlt er mit Karte. Dann geht er nach Hause und macht ein Frühstück.'],
    ar: ['توم رايح السوبر ماركت النهارده. محتاج عيش ولبن وبيض وتفاح. العيش بـ 2 يورو واللبن بـ 1 يورو.', 'عند الكاشير بيدفع بالكارت. بعدين بيروح البيت ويعمل فطار.'],
    q: [['Was kostet das Brot?', '2 Euro.', '1 Euro.', '5 Euro.'], ['Wie bezahlt Tom?', 'Mit Karte.', 'Bar.', 'Mit dem Handy.'], ['Was macht er zu Hause?', 'Ein Frühstück.', 'Das Mittagessen.', 'Hausaufgaben.']] },
  { id: 'mein-tag', level: 'A1', title: ['Mein Tag', 'يومي'],
    de: ['Ich stehe um sieben Uhr auf. Zuerst dusche ich, dann frühstücke ich. Um acht Uhr fahre ich mit dem Bus zur Arbeit.', 'Ich arbeite bis fünf Uhr. Am Abend koche ich und sehe fern. Um elf Uhr gehe ich ins Bett.'],
    ar: ['بصحى الساعة سبعة. الأول باخد دش وبعدين بفطر. الساعة تمانية بركب الأتوبيس للشغل.', 'بشتغل لحد خمسة. بالليل بطبخ وبتفرج على التلفزيون. الساعة إحداشر بنام.'],
    q: [['Wann steht er auf?', 'Um sieben Uhr.', 'Um acht Uhr.', 'Um fünf Uhr.'], ['Wie fährt er zur Arbeit?', 'Mit dem Bus.', 'Mit dem Auto.', 'Mit dem Zug.'], ['Was macht er am Abend?', 'Er kocht und sieht fern.', 'Er geht ins Kino.', 'Er arbeitet.']] },
  { id: 'das-wetter', level: 'A1', title: ['Das Wetter in Deutschland', 'الجو في ألمانيا'],
    de: ['Im Frühling ist es mild und es regnet oft. Im Sommer ist es warm, manchmal sogar heiß. Im Herbst sind die Tage kühl und windig.', 'Im Winter ist es kalt. Dann schneit es oft. Viele Menschen mögen den Sommer am liebsten.'],
    ar: ['في الربيع الجو معتدل وبتمطر كتير. في الصيف دافي وساعات حر. في الخريف الأيام باردة شوية وفيها رياح.', 'في الشتا الجو بارد وبتتلج كتير. ناس كتير بتحب الصيف أكتر.'],
    q: [['Wie ist das Wetter im Winter?', 'Kalt.', 'Heiß.', 'Warm.'], ['Wann regnet es oft?', 'Im Frühling.', 'Im Sommer.', 'Im Winter.'], ['Welche Jahreszeit mögen viele Menschen am liebsten?', 'Den Sommer.', 'Den Winter.', 'Den Herbst.']] },
  { id: 'beim-arzt', level: 'A2', title: ['Beim Arzt', 'عند الدكتور'],
    de: ['Seit drei Tagen hat Murat Kopfschmerzen und Fieber. Deshalb ruft er in der Praxis an und bekommt einen Termin für Dienstag um zehn Uhr.', 'Der Arzt untersucht ihn und sagt: Sie haben eine Grippe. Murat soll viel trinken, im Bett bleiben und eine Woche nicht arbeiten. Er bekommt auch ein Rezept für die Apotheke.'],
    ar: ['من تلات أيام مراد عنده صداع وحرارة. عشان كده بيتصل بالعيادة وياخد ميعاد الثلاثاء الساعة عشرة.', 'الدكتور بيكشف عليه ويقول: عندك إنفلونزا. لازم يشرب كتير ويفضل في السرير وميشتغلش أسبوع. وبياخد كمان روشتة للصيدلية.'],
    q: [['Seit wann ist Murat krank?', 'Seit drei Tagen.', 'Seit einer Woche.', 'Seit gestern.'], ['Was hat Murat?', 'Eine Grippe.', 'Einen Husten.', 'Bauchschmerzen.'], ['Wohin geht er mit dem Rezept?', 'In die Apotheke.', 'Zur Arbeit.', 'In die Praxis.']] },
  { id: 'wohnungssuche', level: 'A2', title: ['Die Wohnungssuche', 'البحث عن شقة'],
    de: ['Anna sucht eine neue Wohnung. Ihre jetzige Wohnung ist zu klein und zu laut. Sie möchte zwei Zimmer, einen Balkon und eine Küche.', 'Im Internet findet sie eine Wohnung in der Nähe vom Park. Die Miete beträgt 750 Euro im Monat. Am Samstag besichtigt sie die Wohnung. Sie gefällt ihr sofort, aber sie muss noch mit dem Vermieter über die Kaution sprechen.'],
    ar: ['آنا بتدور على شقة جديدة. شقتها الحالية صغيرة قوي ومزعجة. عايزة أوضتين وبلكونة ومطبخ.', 'على الإنترنت لقت شقة قريبة من الحديقة. الإيجار 750 يورو في الشهر. يوم السبت هتعاين الشقة. عجبتها على طول بس لازم تتكلم مع المالك عن التأمين.'],
    q: [['Warum sucht Anna eine neue Wohnung?', 'Die Wohnung ist zu klein und zu laut.', 'Die Miete ist zu hoch.', 'Sie zieht in eine andere Stadt.'], ['Was kostet die neue Wohnung?', '750 Euro im Monat.', '570 Euro im Monat.', '1000 Euro im Monat.'], ['Worüber muss sie noch sprechen?', 'Über die Kaution.', 'Über den Balkon.', 'Über den Park.']] },
  { id: 'die-reise-nach-hamburg', level: 'A2', title: ['Die Reise nach Hamburg', 'السفر إلى هامبورغ'],
    de: ['Im Sommer fahren Jonas und seine Freundin nach Hamburg. Sie nehmen den Zug, weil das Fliegen teurer ist. Die Fahrt dauert vier Stunden.', 'In Hamburg besuchen sie den Hafen und machen eine Bootstour. Abends essen sie Fisch in einem kleinen Restaurant. Nach drei Tagen fahren sie müde, aber glücklich zurück.'],
    ar: ['في الصيف يوناس وصاحبته رايحين هامبورغ. هياخدوا القطر لأن الطيران أغلى. الرحلة أربع ساعات.', 'في هامبورغ هيزوروا الميناء ويعملوا جولة بالمركب. بالليل ياكلوا سمك في مطعم صغير. بعد تلات أيام يرجعوا تعبانين بس مبسوطين.'],
    q: [['Warum nehmen sie den Zug?', 'Fliegen ist teurer.', 'Der Zug ist schneller.', 'Sie haben kein Auto.'], ['Wie lange dauert die Fahrt?', 'Vier Stunden.', 'Drei Stunden.', 'Einen Tag.'], ['Was essen sie abends?', 'Fisch.', 'Pizza.', 'Fleisch.']] },
  { id: 'ein-neuer-job', level: 'B1', title: ['Ein neuer Job', 'شغل جديد'],
    de: ['Nach fünf Jahren in derselben Firma hat Clara beschlossen, den Job zu wechseln. Obwohl ihr Chef nett war, hatte sie keine Möglichkeit mehr, sich weiterzuentwickeln.', 'Sie hat sich bei drei Unternehmen beworben und wurde zu zwei Vorstellungsgesprächen eingeladen. Das zweite Gespräch lief besonders gut. Nächste Woche beginnt sie in ihrer neuen Stelle, die besser bezahlt ist und mehr Verantwortung bringt.'],
    ar: ['بعد خمس سنين في نفس الشركة كلارا قررت تغير شغلها. مع إن مديرها كان لطيف، ما كانش عندها فرصة تتطور أكتر.', 'قدمت في تلات شركات واتدعت لمقابلتين. المقابلة التانية كانت كويسة قوي. الأسبوع الجاي بتبدأ في وظيفتها الجديدة اللي مرتبها أحسن وفيها مسؤولية أكبر.'],
    q: [['Warum wechselt Clara den Job?', 'Sie kann sich nicht weiterentwickeln.', 'Ihr Chef war unfreundlich.', 'Sie zieht um.'], ['Bei wie vielen Firmen hat sie sich beworben?', 'Bei drei.', 'Bei zwei.', 'Bei fünf.'], ['Was ist an der neuen Stelle besser?', 'Die Bezahlung und die Verantwortung.', 'Die Arbeitszeit.', 'Der Weg zur Arbeit.']] },
  { id: 'umweltschutz', level: 'B1', title: ['Umweltschutz im Alltag', 'حماية البيئة في الحياة اليومية'],
    de: ['Immer mehr Menschen versuchen, im Alltag Müll zu vermeiden. Sie benutzen Stofftaschen statt Plastiktüten und kaufen Obst und Gemüse auf dem Markt.', 'Außerdem fahren viele mit dem Fahrrad, damit weniger Abgase in die Luft kommen. Experten sagen, dass schon kleine Veränderungen helfen, wenn viele Menschen mitmachen.'],
    ar: ['ناس أكتر وأكتر بتحاول تقلل الزبالة في حياتها اليومية. بيستخدموا شنط قماش بدل البلاستيك وبيشتروا الفاكهة والخضار من السوق.', 'كمان كتير بيركبوا العجلة عشان الغازات تقل في الهواء. الخبرا بيقولوا إن حتى التغييرات الصغيرة بتفرق لو ناس كتير شاركت.'],
    q: [['Was benutzen viele statt Plastiktüten?', 'Stofftaschen.', 'Papiertüten.', 'Kartons.'], ['Warum fahren viele Fahrrad?', 'Damit weniger Abgase entstehen.', 'Weil es schneller ist.', 'Weil Benzin teuer ist.'], ['Was sagen Experten?', 'Kleine Veränderungen helfen.', 'Nur die Politik kann helfen.', 'Es ist zu spät.']] },
];
import { readingsAdv } from './reading-adv';
import { readingsMore } from './reading-adv2';
import { readingsHigh } from './reading-adv3';
readings.push(...readingsAdv, ...readingsMore, ...readingsHigh);
import { a2Texts } from './reading-a2';
readings.push(...a2Texts);
import { b1Texts } from './reading-b1';
readings.push(...b1Texts);
import { b2Texts } from './reading-b2';
readings.push(...b2Texts);
import { c1Texts } from './reading-c1';
readings.push(...c1Texts);
import { c2Texts } from './reading-c2';
readings.push(...c2Texts);
import {microTexts} from './reading-micro';
readings.push(...microTexts);
import {everydayTexts} from './reading-everyday';
readings.push(...everydayTexts);
import {neighborhoodTexts} from './reading-neighborhood';
readings.push(...neighborhoodTexts);
import {objectTexts} from './reading-objects';
readings.push(...objectTexts);
import {packingTexts} from './reading-packing';
readings.push(...packingTexts);
import {breakTexts} from './reading-breaks';
readings.push(...breakTexts);
import {borrowingTexts} from './reading-borrowing';
readings.push(...borrowingTexts);
import {wrappingTexts} from './reading-wrapping';
readings.push(...wrappingTexts);
import {tablewareTexts} from './reading-tableware';
readings.push(...tablewareTexts);
import {readingcornerTexts} from './reading-readingcorner';
readings.push(...readingcornerTexts);
const LV = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
readings.sort((a, b) => LV.indexOf(a.level) - LV.indexOf(b.level));
export const readingOf = (id: string) => readings.find((r) => r.id === id);

import {handarbeitTexts} from './reading-handarbeit';
readings.push(...handarbeitTexts);

import {briefplatzTexts} from './reading-briefplatz';
readings.push(...briefplatzTexts);

import {musikrundeTexts} from './reading-musikrunde';
readings.push(...musikrundeTexts);

import {malrundeTexts} from './reading-malrunde';
readings.push(...malrundeTexts);

import {kuechenprepTexts} from './reading-kuechenprep';
readings.push(...kuechenprepTexts);

import {flurablageTexts} from './reading-flurablage';
readings.push(...flurablageTexts);

import {garteneckeTexts} from './reading-gartenecke';
readings.push(...garteneckeTexts);

import {fahrradeckeTexts} from './reading-fahrradecke';
readings.push(...fahrradeckeTexts);

import {naehboxTexts} from './reading-naehbox';
readings.push(...naehboxTexts);

import {schultascheTexts} from './reading-schultasche';
readings.push(...schultascheTexts);

import {badregalTexts} from './reading-badregal';
readings.push(...badregalTexts);

import {kuechenschubladeTexts} from './reading-kuechenschublade';
readings.push(...kuechenschubladeTexts);

import {schuhplatzTexts} from './reading-schuhplatz';
readings.push(...schuhplatzTexts);

import {waescheregalTexts} from './reading-waescheregal';
readings.push(...waescheregalTexts);

import {hauseingangTexts} from './reading-hauseingang';
readings.push(...hauseingangTexts);

import {balkonrundeTexts} from './reading-balkonrunde';
readings.push(...balkonrundeTexts);

import {garderobenrundeTexts} from './reading-garderobenrunde';
readings.push(...garderobenrundeTexts);

import {badrundeTexts} from './reading-badrunde';
readings.push(...badrundeTexts);

import {kochrundeTexts} from './reading-kochrunde';
readings.push(...kochrundeTexts);

import {schlafzimmerTexts} from './reading-schlafzimmer';
readings.push(...schlafzimmerTexts);

import {wohnzimmerTexts} from './reading-wohnzimmer';
readings.push(...wohnzimmerTexts);

import {fruehstuecksrundeTexts} from './reading-fruehstuecksrunde';
readings.push(...fruehstuecksrundeTexts);

import {computerrundeTexts} from './reading-computerrunde';
readings.push(...computerrundeTexts);

import {vorratsrundeTexts} from './reading-vorratsrunde';
readings.push(...vorratsrundeTexts);

import {spielerundeTexts} from './reading-spielerunde';
readings.push(...spielerundeTexts);

import {picknickrundeTexts} from './reading-picknickrunde';
readings.push(...picknickrundeTexts);

import {hundeeckeTexts} from './reading-hundeecke';
readings.push(...hundeeckeTexts);

import {reisegepaeckTexts} from './reading-reisegepaeck';
readings.push(...reisegepaeckTexts);

import {haushaltsfachTexts} from './reading-haushaltsfach';
readings.push(...haushaltsfachTexts);

import {kuechentextilienTexts} from './reading-kuechentextilien';
readings.push(...kuechentextilienTexts);

import {besteckrundeTexts} from './reading-besteckrunde';
readings.push(...besteckrundeTexts);

import {schreibplatzTexts} from './reading-schreibplatz';
readings.push(...schreibplatzTexts);

import {planungsplatzTexts} from './reading-planungsplatz';
readings.push(...planungsplatzTexts);

import {teeregalTexts} from './reading-teeregal';
readings.push(...teeregalTexts);

import {backablageTexts} from './reading-backablage';
readings.push(...backablageTexts);

import {dekorundeTexts} from './reading-dekorunde';
readings.push(...dekorundeTexts);

import {technikablageTexts} from './reading-technikablage';
readings.push(...technikablageTexts);

import {reisefachTexts} from './reading-reisefach';
readings.push(...reisefachTexts);

import {gartenpauseTexts} from './reading-gartenpause';
readings.push(...gartenpauseTexts);

import {musikzimmerTexts} from './reading-musikzimmer';
readings.push(...musikzimmerTexts);

import {messtischTexts} from './reading-messtisch';
readings.push(...messtischTexts);

import {tischmitteTexts} from './reading-tischmitte';
readings.push(...tischmitteTexts);

import {naehablageTexts} from './reading-naehablage';
readings.push(...naehablageTexts);

import {teeschrankTexts} from './reading-teeschrank';
readings.push(...teeschrankTexts);

import {werkstattalbumTexts} from './reading-werkstattalbum';
readings.push(...werkstattalbumTexts);

import {naehkistenfachTexts} from './reading-naehkistenfach';
readings.push(...naehkistenfachTexts);

import {fruehstuecksplatzTexts} from './reading-fruehstuecksplatz';
readings.push(...fruehstuecksplatzTexts);

import {vitrinenwoerterTexts} from './reading-vitrinenwoerter';
readings.push(...vitrinenwoerterTexts);

import {wortteilefachTexts} from './reading-wortteilefach';
readings.push(...wortteilefachTexts);

import {bildausschnittTexts} from './reading-bildausschnitt';
readings.push(...bildausschnittTexts);

import {wortkontrolleTexts} from './reading-wortkontrolle';
readings.push(...wortkontrolleTexts);

import {eingangsnotizenTexts} from './reading-eingangsnotizen';
readings.push(...eingangsnotizenTexts);

import {bildregisterTexts} from './reading-bildregister';
readings.push(...bildregisterTexts);

import {tischbittenTexts} from './reading-tischbitten';
readings.push(...tischbittenTexts);

import {lesestellenTexts} from './reading-lesestellen';
readings.push(...lesestellenTexts);

import {tischaufgabenTexts} from './reading-tischaufgaben';
readings.push(...tischaufgabenTexts);

import {mengenangabenTexts} from './reading-mengenangaben';
readings.push(...mengenangabenTexts);

import {klangwoerterTexts} from './reading-klangwoerter';
readings.push(...klangwoerterTexts);

import {malerwoerterTexts} from './reading-malerwoerter';
readings.push(...malerwoerterTexts);

import {signalwoerterTexts} from './reading-signalwoerter';
readings.push(...signalwoerterTexts);

import {kuechenhelferTexts} from './reading-kuechenhelfer';
readings.push(...kuechenhelferTexts);

import {werkzeugnamenTexts} from './reading-werkzeugnamen';
readings.push(...werkzeugnamenTexts);

import {denkobjekteTexts} from './reading-denkobjekte';
readings.push(...denkobjekteTexts);

import {instrumentenformenTexts} from './reading-instrumentenformen';
readings.push(...instrumentenformenTexts);

import {loeffelformenTexts} from './reading-loeffelformen';
readings.push(...loeffelformenTexts);

import {pinnwoerterTexts} from './reading-pinnwoerter';
readings.push(...pinnwoerterTexts);

import {klangnamenTexts} from './reading-klangnamen';
readings.push(...klangnamenTexts);

import {raumfotosTexts} from './reading-raumfotos';
readings.push(...raumfotosTexts);

import {beerennamenTexts} from './reading-beerennamen';
readings.push(...beerennamenTexts);

import {gemuesebilderTexts} from './reading-gemuesebilder';
readings.push(...gemuesebilderTexts);

import {fruchtformenTexts} from './reading-fruchtformen';
readings.push(...fruchtformenTexts);

import {instrumentenblickTexts} from './reading-instrumentenblick';
readings.push(...instrumentenblickTexts);

import {spielablageTexts} from './reading-spielablage';
readings.push(...spielablageTexts);

import {freizeitfarbenTexts} from './reading-freizeitfarben';
readings.push(...freizeitfarbenTexts);

import {bildanordnungTexts} from './reading-bildanordnung';
readings.push(...bildanordnungTexts);

import {spielteileTexts} from './reading-spielteile';
readings.push(...spielteileTexts);

import {sportdetailsTexts} from './reading-sportdetails';
readings.push(...sportdetailsTexts);

import {gartenbilderTexts} from './reading-gartenbilder';
readings.push(...gartenbilderTexts);

import {naturbeobachtungTexts} from './reading-naturbeobachtung';
readings.push(...naturbeobachtungTexts);

import {papierformenTexts} from './reading-papierformen';
readings.push(...papierformenTexts);

import {sportoberflaechenTexts} from './reading-sportoberflaechen';
readings.push(...sportoberflaechenTexts);

import {badbilderTexts} from './reading-badbilder';
readings.push(...badbilderTexts);

import {naturmusterTexts} from './reading-naturmuster';
readings.push(...naturmusterTexts);

import {stiftundklammerTexts} from './reading-stiftundklammer';
readings.push(...stiftundklammerTexts);

import {alltagsformenTexts} from './reading-alltagsformen';
readings.push(...alltagsformenTexts);

import {wasserbilderTexts} from './reading-wasserbilder';
readings.push(...wasserbilderTexts);

import {knollenbilderTexts} from './reading-knollenbilder';
readings.push(...knollenbilderTexts);

import {obstansichtenTexts} from './reading-obstansichten';
readings.push(...obstansichtenTexts);

import {saitenbilderTexts} from './reading-saitenbilder';
readings.push(...saitenbilderTexts);

import {gebaeckformenTexts} from './reading-gebaeckformen';
readings.push(...gebaeckformenTexts);

import {gebaeckkartenTexts} from './reading-gebaeckkarten';
readings.push(...gebaeckkartenTexts);

import {kleidermusterTexts} from './reading-kleidermuster';
readings.push(...kleidermusterTexts);

import {kleinebilderTexts} from './reading-kleinebilder';
readings.push(...kleinebilderTexts);

import {freizeitformenTexts} from './reading-freizeitformen';
readings.push(...freizeitformenTexts);

import {grueneformenTexts} from './reading-grueneformen';
readings.push(...grueneformenTexts);

import {obstkartenTexts} from './reading-obstkarten';
readings.push(...obstkartenTexts);

import {kleinefruechteTexts} from './reading-kleinefruechte';
readings.push(...kleinefruechteTexts);

import {zweigfruechteTexts} from './reading-zweigfruechte';
readings.push(...zweigfruechteTexts);

import {kernkartenTexts} from './reading-kernkarten';
readings.push(...kernkartenTexts);

import {gewuerzbilderTexts} from './reading-gewuerzbilder';
readings.push(...gewuerzbilderTexts);

import {gewuerzkartenTexts} from './reading-gewuerzkarten';
readings.push(...gewuerzkartenTexts);

import {kaffeebilderTexts} from './reading-kaffeebilder';
readings.push(...kaffeebilderTexts);

import {suessbilderTexts} from './reading-suessbilder';
readings.push(...suessbilderTexts);

import {kaffeeformenTexts} from './reading-kaffeeformen';
readings.push(...kaffeeformenTexts);

import {gewuerzformenTexts} from './reading-gewuerzformen';
readings.push(...gewuerzformenTexts);
