import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const loeffelformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Kochlöffel liegt quer. (Kochlöffel)",
      "Der",
      "Die",
      "Das",
      "Kochlöffel مذكر: der.",
      "Kochlöffel is masculine: der."
    ],
    [
      "___ Honiglöffel hat Rillen. (Honiglöffel)",
      "Der",
      "Die",
      "Das",
      "Honiglöffel مذكر: der.",
      "Honiglöffel is masculine: der."
    ],
    [
      "___ Hülle ist klein. (Hülle)",
      "Die",
      "Der",
      "Das",
      "Hülle مؤنث: die.",
      "Hülle is feminine: die."
    ],
    [
      "___ Foto zeigt ein Glas. (Foto)",
      "Das",
      "Der",
      "Die",
      "Foto محايد: das.",
      "Foto is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Lukas hilft ___ Freundin. (die)",
      "der",
      "die",
      "den",
      "helfen بياخد داتيف: der Freundin.",
      "Helfen takes dative: der Freundin."
    ],
    [
      "Das Heft gehört ___ Bruder. (der)",
      "dem",
      "den",
      "der",
      "gehören بياخد داتيف: dem Bruder.",
      "Gehören takes dative: dem Bruder."
    ],
    [
      "Mira zeigt ___ Freund das Foto. (der)",
      "dem",
      "den",
      "der",
      "المتلقي داتيف: dem Freund.",
      "The recipient takes dative: dem Freund."
    ],
    [
      "Selma antwortet ___ Schwester. (die)",
      "der",
      "die",
      "den",
      "antworten بياخد داتيف: der Schwester.",
      "Antworten takes dative: der Schwester."
    ]
  ],
  "praesens": [
    [
      "Hana ___ die Mappe. (öffnen)",
      "öffnet",
      "öffnen",
      "öffnest",
      "sie مفرد: öffnet.",
      "Singular sie takes öffnet."
    ],
    [
      "Du ___ beide Karten. (lesen)",
      "liest",
      "lest",
      "lesen",
      "du: liest.",
      "Du takes liest."
    ],
    [
      "Lukas ___ die Karte unter das Foto. (legen)",
      "legt",
      "legen",
      "legst",
      "er مفرد: legt.",
      "Singular er takes legt."
    ],
    [
      "Wir ___ auf eine Grammzahl. (verzichten)",
      "verzichten",
      "verzichtet",
      "verzichte",
      "wir: verzichten.",
      "Wir takes verzichten."
    ]
  ],
  "possessiv": [
    [
      "Hana öffnet ___ Mappe. (Hana; die)",
      "ihre",
      "ihr",
      "ihren",
      "ملكية Hana مع مؤنث أكوزاتيف: ihre Mappe.",
      "Hana takes ihre with feminine accusative Mappe."
    ],
    [
      "Lukas schließt ___ Heft. (Lukas; das)",
      "sein",
      "seinen",
      "seine",
      "ملكية Lukas مع محايد أكوزاتيف: sein Heft.",
      "Lukas takes sein with neuter accusative Heft."
    ],
    [
      "Selma korrigiert ___ Satz. (Selma; der)",
      "ihren",
      "ihr",
      "ihre",
      "ملكية Selma مع مذكر أكوزاتيف: ihren Satz.",
      "Selma takes ihren with masculine accusative Satz."
    ],
    [
      "Wir vergleichen ___ Notizen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "ملكية wir مع جمع أكوزاتيف: unsere Notizen.",
      "Wir takes unsere with plural accusative Notizen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karten liegen in ___ Hülle. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative der."
    ],
    [
      "Lukas steckt die Karten in ___ Hülle. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative die."
    ],
    [
      "Das Foto liegt neben ___ Heft. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem.",
      "Fixed location with neben takes dative dem."
    ],
    [
      "Hana legt das Foto neben ___ Heft. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das.",
      "Destination with neben takes accusative das."
    ]
  ],
  "negation": [
    [
      "Das Bild ist ___ Messskala. (eine)",
      "keine",
      "kein",
      "keinen",
      "Messskala مؤنث نوميناتيف: keine.",
      "Messskala is feminine nominative: keine."
    ],
    [
      "Sie nennen ___ Grammzahl. (eine)",
      "keine",
      "kein",
      "keinen",
      "Grammzahl مؤنث أكوزاتيف: keine.",
      "Grammzahl is feminine accusative: keine."
    ],
    [
      "Der Name ändert sich im Plural ___. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Use nicht to negate the action."
    ],
    [
      "Sie vereinbaren ___ festen Termin. (ein)",
      "keinen",
      "kein",
      "keine",
      "Termin مذكر أكوزاتيف: keinen.",
      "Termin is masculine accusative: keinen."
    ]
  ]
};
