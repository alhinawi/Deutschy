import type {Ex} from './exercises';
// Always append after all earlier banks; preserve saved topic/index identities.
export const tablewareGrammar:Record<string,Ex[]>={
 akkusativ:[
 ['Tom nimmt ___ Untersetzer aus der Schublade. (ein)','einen','einem','einer','Untersetzer مذكر ومفعول به: einen.','Untersetzer is masculine and the direct object: einen.'],
 ['Lena holt ___ fehlende Glas. (das)','das','dem','des','Glas محايد وأكوزاتيف: das.','Glas is neuter accusative: das.'],
 ['Farah legt ___ Trichter zurück. (der)','den','dem','des','Trichter مذكر ومفعول به: den.','Trichter is masculine and the direct object: den.'],
 ['Omar prüft ___ neuen Weg. (der)','den','dem','des','Weg مذكر ومفعول به: den neuen Weg.','Weg is masculine accusative: den neuen Weg.'],
 ],
 possessiv:[
 ['Tom sagt: Ich decke ___ kleinen Tisch. (ich)','meinen','meinem','meiner','Tisch مذكر أكوزاتيف وصاحب الحاجة ich: meinen.','Tisch is masculine accusative with possessor ich: meinen.'],
 ['Farah zeigt ___ Mitbewohner die Schale. (sie, Singular)','ihrem','ihren','ihr','الشخص اللي بتوريه الحاجة داتيف: ihrem Mitbewohner.','The person shown something is dative: ihrem Mitbewohner.'],
 ['Wir legen ___ Servietten neben die Teller. (wir)','unsere','unseren','unserem','Servietten جمع أكوزاتيف: unsere.','Servietten is plural accusative: unsere.'],
 ['Ihr sucht ___ Flaschenöffner. (ihr)','euren','eurem','eurer','Flaschenöffner مذكر أكوزاتيف: euren.','Flaschenöffner is masculine accusative: euren.'],
 ],
 modalverben:[
 ['Lena ___ noch ein Glas holen. (müssen)','muss','müsst','müssen','Lena مفرد: muss.','Singular Lena takes muss.'],
 ['___ ihr den Weg noch einmal testen? (können)','Könnt','Kann','Können','können مع ihr: könnt.','Können with ihr is könnt.'],
 ['Wir ___ nur einen Teil bereitstellen. (wollen)','wollen','wollt','will','wollen مع wir: wollen.','Wollen with wir is wollen.'],
 ['Ich ___ den Trichter benutzen. (dürfen)','darf','dürft','dürfen','dürfen مع ich: darf.','Dürfen with ich is darf.'],
 ],
 imperativ:[
 ['___ bitte die Servietten neben die Teller! (legen, ihr)','Legt','Leg','Legen','الأمر مع ihr: Legt.','The ihr imperative is Legt.'],
 ['___ das fehlende Glas! (holen, du)','Hol','Holt','Holen','الأمر مع du هنا Hol؛ Hole برضه صحيح.','The du imperative here is Hol; Hole is also valid.'],
 ['___ Sie den Weg noch einmal! (prüfen)','Prüfen','Prüft','Prüfe','الأمر الرسمي: Prüfen Sie.','The formal imperative is Prüfen Sie.'],
 ['___ den Flaschenöffner in die Schale! (legen, du)','Leg','Legt','Legen','الأمر مع du هنا Leg؛ Lege برضه صحيح.','The du imperative here is Leg; Lege is also valid.'],
 ],
 komparativ:[
 ['Der Weg ist jetzt ___ als vorher. (breit)','breiter','breiteste','breitesten','المقارنة من breit: breiter.','The comparative of breit is breiter.'],
 ['Das Regal ist ___ als der Tisch. (schmal)','schmaler','schmalste','schmalsten','المقارنة من schmal: schmaler؛ schmäler كمان صحيحة.','The comparative is schmaler; schmäler is also valid.'],
 ['Dieses Tablett ist ___ als das andere. (leicht)','leichter','leichteste','leichtesten','المقارنة من leicht: leichter.','The comparative of leicht is leichter.'],
 ['Die kleine Vase ist ___ als die große. (niedrig)','niedriger','niedrigste','niedrigsten','المقارنة من niedrig: niedriger.','The comparative of niedrig is niedriger.'],
 ],
 'dativ-praepositionen':[
 ['Tom nimmt die Untersetzer aus ___ Schublade. (die)','der','die','den','aus داتيف؛ المؤنث der Schublade.','Aus takes the dative: der Schublade.'],
 ['Farah spricht mit ___ Mitbewohner. (der)','dem','den','des','mit داتيف؛ المذكر dem Mitbewohner.','Mit takes the dative: dem Mitbewohner.'],
 ['Nach ___ Abend räumen sie auf. (der)','dem','den','des','nach داتيف: nach dem Abend.','Nach takes the dative: nach dem Abend.'],
 ['Die Flasche steht seit ___ Woche dort. (eine)','einer','eine','einen','seit داتيف؛ المؤنث einer Woche.','Seit takes the dative: einer Woche.'],
 ]
};
