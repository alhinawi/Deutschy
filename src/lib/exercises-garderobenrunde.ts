import type {Ex} from './exercises';
// Append only: previous topic/index identities remain unchanged.
export const garderobenrundeGrammar:Record<string,Ex[]>={
 'artikel-genus':[
 ['___ Schuhschrank steht unter dem Spiegel. (der)','Der','Den','Dem','Schuhschrank فاعل مذكر نوميناتيف: der.','Schuhschrank is the masculine nominative subject: der.'],
 ['___ Handschuhe liegen auf der Ablage. (Plural)','Die','Der','Das','Handschuhe فاعل جمع نوميناتيف: die.','Handschuhe is the plural nominative subject: die.'],
 ['___ Hut gehört Mila. (der)','Der','Den','Des','Hut فاعل مذكر نوميناتيف: der.','Hut is the masculine nominative subject: der.'],
 ['Das ist ___ Kleiderbügel. (ein)','ein','einen','einem','بعد ist هنا خبر مذكر نوميناتيف: ein.','After ist, the masculine predicate noun is nominative: ein.'],
 ],
 dativ:[
 ['Mila gibt ___ Bruder die Handschuhe. (der)','dem','den','des','المتلقي داتيف؛ der Bruder: dem Bruder.','The recipient is dative: dem Bruder.'],
 ['Der Hut gehört ___. (ich)','mir','mich','mein','gehören بياخد داتيف؛ ich: mir.','Gehören takes dative; ich becomes mir.'],
 ['Nora hilft ___ Freundin beim Aufräumen. (die)','der','die','den','helfen داتيف؛ die Freundin: der Freundin.','Helfen takes dative: der Freundin.'],
 ['Ben zeigt ___ den Handschuh. (wir)','uns','unser','wir','المتلقي داتيف؛ wir: uns.','The recipient is dative; wir becomes uns.'],
 ],
 'trennbare-verben':[
 ['Mila setzt den Hut ___. (aufsetzen)','auf','an','aus','aufsetzen: auf بتنفصل في آخر الجملة.','Aufsetzen separates auf to the end.'],
 ['Ben räumt den Schuhschrank ___. (aufräumen)','auf','zu','ab','aufräumen: auf في الآخر.','Aufräumen separates auf to the end.'],
 ['Sami zieht seine Jacke ___. (anziehen)','an','auf','um','anziehen: an بتنفصل.','Anziehen separates an to the end.'],
 ['Nora hängt den Schal ___. (aufhängen)','auf','zu','ein','aufhängen: auf بتنفصل.','Aufhängen separates auf to the end.'],
 ],
 praesens:[
 ['Der Hut ___ Mila. (gehören)','gehört','gehören','gehörst','Hut مفرد غائب: gehört.','Singular Hut takes gehört.'],
 ['Die Handschuhe ___ auf dem Schrank. (liegen)','liegen','liegt','liegst','Handschuhe جمع: liegen.','Plural Handschuhe takes liegen.'],
 ['Du ___ deinen Schal. (suchen)','suchst','sucht','suchen','du مع suchen: suchst.','Du takes suchst.'],
 ['Ihr ___ die Schranktür. (öffnen)','öffnet','öffnest','öffnen','ihr مع öffnen: öffnet.','Ihr takes öffnet.'],
 ],
 'dativ-praepositionen':[
 ['Der Spiegel hängt an ___ Wand. (die; Wo?)','der','die','den','مكان ثابت؛ an مع داتيف مؤنث: der Wand.','Fixed location: an takes feminine dative, der Wand.'],
 ['Mila stellt die Schuhe in ___ Schrank. (der; Wohin?)','den','dem','des','اتجاه لمكان جديد؛ in مع أكوزاتيف مذكر: den Schrank.','Destination: in takes masculine accusative, den Schrank.'],
 ['Die Handschuhe liegen auf ___ Ablage. (die; Wo?)','der','die','das','مكان ثابت؛ auf مع داتيف مؤنث: der Ablage.','Fixed location: auf takes feminine dative, der Ablage.'],
 ['Ben legt den Hut in ___ obere Fach. (das; Wohin?)','das','dem','der','اتجاه؛ in مع أكوزاتيف محايد: das Fach.','Destination: in takes neuter accusative, das Fach.'],
 ],
 negation:[
 ['Wir werfen ___ Handschuhe weg. (keine, Plural)','keine','keinen','keinem','Handschuhe جمع أكوزاتيف مع kein: keine.','Accusative plural Handschuhe takes keine.'],
 ['Der Schal liegt ___ im Schuhschrank. (nicht / kein)','nicht','kein','keine','نفي المكان هنا بـ nicht.','The location is negated with nicht.'],
 ['Das ist ___ Paar. (kein, das Paar)','kein','keinen','keiner','Paar محايد نوميناتيف بعد ist: kein.','Neuter nominative Paar after ist takes kein.'],
 ['Heute kaufen wir ___ Hut. (kein, der Hut)','keinen','kein','keinem','Hut مفعول مذكر أكوزاتيف: keinen.','Hut is masculine accusative: keinen.'],
 ],
};
