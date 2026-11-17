import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const wohnzimmerGrammar:Record<string,Ex[]>={
  "akkusativ": [
    [
      "Salma sucht ___ Couchtisch. (der)",
      "den",
      "dem",
      "des",
      "Couchtisch مذكر مفعول مباشر: den.",
      "Masculine direct object: den Couchtisch."
    ],
    [
      "Noah nimmt ___ Buch. (das)",
      "das",
      "dem",
      "der",
      "Buch محايد أكوزاتيف: das.",
      "Neuter accusative: das Buch."
    ],
    [
      "Mira sieht ___ Wanduhr. (die)",
      "die",
      "der",
      "den",
      "Wanduhr مؤنث أكوزاتيف: die.",
      "Feminine accusative: die Wanduhr."
    ],
    [
      "David sucht ___ Teppich. (ein)",
      "einen",
      "einem",
      "eines",
      "Teppich مذكر أكوزاتيف: einen.",
      "Masculine accusative: einen Teppich."
    ]
  ],
  "possessiv": [
    [
      "Ich suche ___ Brille. (die)",
      "meine",
      "mein",
      "meinen",
      "ich مع مؤنث أكوزاتيف: meine.",
      "Ich with feminine accusative: meine."
    ],
    [
      "Du hast ___ Buch gefunden. (das)",
      "dein",
      "deine",
      "deinen",
      "du مع محايد أكوزاتيف: dein.",
      "Du with neuter accusative: dein."
    ],
    [
      "Wir mögen ___ Sofa. (das)",
      "unser",
      "unsere",
      "unseren",
      "wir مع محايد أكوزاتيف: unser.",
      "Wir with neuter accusative: unser."
    ],
    [
      "Lina öffnet ___ Kiste. (ihre eigene; die)",
      "ihre",
      "ihr",
      "ihren",
      "sie مفرد مع مؤنث أكوزاتيف: ihre.",
      "Singular sie with feminine accusative: ihre."
    ]
  ],
  "modalverben": [
    [
      "David ___ die Zeit prüfen. (müssen)",
      "muss",
      "musst",
      "müsst",
      "er مع müssen: muss.",
      "Er takes muss."
    ],
    [
      "Wir ___ noch keinen Film wählen. (wollen)",
      "wollen",
      "will",
      "wollt",
      "wir مع wollen: wollen.",
      "Wir takes wollen."
    ],
    [
      "Du ___ zuerst fragen. (sollen)",
      "sollst",
      "soll",
      "sollen",
      "du مع sollen: sollst.",
      "Du takes sollst."
    ],
    [
      "Mira ___ die Uhr sehen. (können)",
      "kann",
      "kannst",
      "könnt",
      "sie مفرد مع können: kann.",
      "Singular sie takes kann."
    ]
  ],
  "imperativ": [
    [
      "___ bitte zuerst! (fragen; du)",
      "Frag",
      "Fragt",
      "Fragen",
      "أمر du من fragen: Frag.",
      "Du imperative of fragen: Frag."
    ],
    [
      "___ euch aufs Sofa! (setzen; ihr)",
      "Setzt",
      "Setz",
      "Setzen",
      "أمر ihr من setzen: Setzt.",
      "Ihr imperative of setzen: Setzt."
    ],
    [
      "___ Sie bitte hier! (warten)",
      "Warten",
      "Wartet",
      "Warte",
      "الأمر الرسمي: Warten Sie.",
      "Formal imperative: Warten Sie."
    ],
    [
      "___ bitte das Buch! (nehmen; du)",
      "Nimm",
      "Nehmt",
      "Nehmen",
      "أمر du من nehmen: Nimm.",
      "Du imperative of nehmen: Nimm."
    ]
  ],
  "komparativ": [
    [
      "Dieser Tisch ist ___ als der andere. (niedrig)",
      "niedriger",
      "niedrigste",
      "niedrig",
      "المقارنة من niedrig: niedriger.",
      "Comparative of niedrig: niedriger."
    ],
    [
      "Das Regal ist ___ als die Kiste. (hoch)",
      "höher",
      "hocher",
      "höchste",
      "المقارنة من hoch غير منتظمة: höher.",
      "Hoch has the irregular comparative höher."
    ],
    [
      "Das Sofa ist ___ als der Stuhl. (breit)",
      "breiter",
      "breitste",
      "breit",
      "المقارنة من breit: breiter.",
      "Comparative of breit: breiter."
    ],
    [
      "Die neue Uhr ist ___ als die alte. (klein)",
      "kleiner",
      "kleinste",
      "klein",
      "المقارنة من klein: kleiner.",
      "Comparative of klein: kleiner."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Fernbedienung liegt auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "des",
      "مكان ثابت مع auf: داتيف، dem Tisch.",
      "Fixed location after auf takes dative: dem Tisch."
    ],
    [
      "David legt sie auf ___ Fernsehschrank. (der; Wohin?)",
      "den",
      "dem",
      "des",
      "اتجاه لمكان جديد مع auf: أكوزاتيف، den.",
      "Destination after auf takes accusative: den."
    ],
    [
      "Die Wanduhr hängt über ___ Regal. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع über: داتيف، dem Regal.",
      "Fixed location after über takes dative: dem Regal."
    ],
    [
      "Lina spricht mit ___ Mitbewohner. (ihr)",
      "ihrem",
      "ihren",
      "ihr",
      "mit داتيف، مذكر: ihrem Mitbewohner.",
      "Mit takes dative; masculine: ihrem Mitbewohner."
    ]
  ]
};
