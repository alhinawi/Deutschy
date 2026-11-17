import type {Ex} from './exercises';
// Append only; earlier saved topic/index identities stay stable.
export const malrundeGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Mila holt ___ Palette. (die)','die','der','den','Palette مؤنث أكوزاتيف: die.','Palette is feminine accusative: die.'],
 ['Tom nimmt ___ leeres Reststück. (ein)','ein','einen','einem','Reststück محايد أكوزاتيف: ein.','Reststück is neuter accusative: ein.'],
 ['Salma sieht ___ unfertige Bild. (das)','das','dem','des','Bild محايد أكوزاتيف: das.','Bild is neuter accusative: das.'],
 ['Karim beschreibt ___ hellen Bereich. (der)','den','dem','des','Bereich مذكر أكوزاتيف: den hellen Bereich.','Bereich is masculine accusative: den hellen Bereich.'],
 ],
 possessiv:[
 ['Mila sagt: Ich hole ___ Palette. (ich)','meine','meinen','meinem','Palette مؤنث أكوزاتيف وصاحب الحاجة ich: meine.','Palette is feminine accusative with possessor ich: meine.'],
 ['Tom zeigt ___ Freundin die Probe. (er)','seiner','seine','seinen','المستلم داتيف؛ Freundin مؤنث: seiner.','The recipient is dative; Freundin is feminine: seiner.'],
 ['Wir behalten ___ Notizen. (wir)','unsere','unseren','unserem','Notizen جمع أكوزاتيف: unsere.','Notizen is plural accusative: unsere.'],
 ['Ihr sucht ___ großen Pinsel. (ihr)','euren','eurem','eurer','Pinsel مذكر أكوزاتيف: euren.','Pinsel is masculine accusative: euren.'],
 ],
 modalverben:[
 ['Mila ___ heute malen. (wollen)','will','wollt','wollen','wollen مع Mila المفرد: will.','Wollen with singular Mila is will.'],
 ['___ ihr die Formen beschreiben? (können)','Könnt','Kann','Können','können مع ihr: könnt.','Können with ihr is könnt.'],
 ['Wir ___ vor dem Foto fragen. (müssen)','müssen','müsst','muss','müssen مع wir: müssen.','Müssen with wir is müssen.'],
 ['Ich ___ die Probe behalten. (dürfen)','darf','dürft','dürfen','dürfen مع ich: darf.','Dürfen with ich is darf.'],
 ],
 imperativ:[
 ['___ bitte die Palette! (holen, ihr)','Holt','Hol','Holen','الأمر مع ihr: Holt.','The ihr imperative is Holt.'],
 ['___ das Bild bitte dort! (lassen, du)','Lass','Lasst','Lassen','الأمر من lassen مع du: Lass.','The du imperative of lassen is Lass.'],
 ['___ Sie zuerst die Formen! (beschreiben)','Beschreiben','Beschreibt','Beschreibe','الأمر الرسمي: Beschreiben Sie.','The formal imperative is Beschreiben Sie.'],
 ['___ mich bitte vor dem Foto! (fragen, du)','Frag','Fragt','Fragen','الأمر مع du هنا Frag؛ Frage برضه صحيحة.','The du imperative here is Frag; Frage is also valid.'],
 ],
 komparativ:[
 ['Diese Fläche ist ___ als die andere. (hell)','heller','hellste','hellsten','المقارنة من hell: heller.','The comparative of hell is heller.'],
 ['Der große Pinsel ist ___ als der kleine. (breit)','breiter','breiteste','breitesten','المقارنة من breit: breiter.','The comparative of breit is breiter.'],
 ['Der zweite Versuch ist ___ als der erste. (dunkel)','dunkler','dunkelste','dunkelsten','المقارنة من dunkel: dunkler.','The comparative of dunkel is dunkler.'],
 ['Der kleine Tisch ist ___ als der große. (niedrig)','niedriger','niedrigste','niedrigsten','المقارنة من niedrig: niedriger.','The comparative of niedrig is niedriger.'],
 ],
 'dativ-praepositionen':[
 ['Mila holt die Palette aus ___ Regal. (das)','dem','das','des','aus داتيف؛ Regal محايد: dem.','Aus takes dative; Regal is neuter: dem.'],
 ['Nach ___ Probe machen sie eine Notiz. (die)','der','die','den','nach داتيف؛ Probe مؤنث: der.','Nach takes dative; Probe is feminine: der.'],
 ['Karim spricht mit ___ Malerin. (die)','der','die','den','mit داتيف؛ Malerin مؤنث: der.','Mit takes dative; Malerin is feminine: der.'],
 ['Die Staffelei steht seit ___ Woche dort. (eine)','einer','eine','einen','seit داتيف؛ Woche مؤنث: einer.','Seit takes dative; Woche is feminine: einer.'],
 ]
};
