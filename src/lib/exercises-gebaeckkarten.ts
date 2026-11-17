import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const gebaeckkartenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Muffin steht im Papierförmchen. (Muffin)",
      "Der",
      "Die",
      "Das",
      "Muffin مذكر: der.",
      "Muffin is masculine: der."
    ],
    [
      "___ Donut liegt auf dem Teller. (Donut)",
      "Der",
      "Die",
      "Das",
      "Donut مذكر: der.",
      "Donut is masculine: der."
    ],
    [
      "___ Buch liegt offen. (Buch)",
      "Das",
      "Der",
      "Die",
      "Buch محايد: das.",
      "Buch is neuter: das."
    ],
    [
      "___ Karte gehört zum Foto. (Karte)",
      "Die",
      "Der",
      "Das",
      "Karte مؤنث: die.",
      "Karte is feminine: die."
    ]
  ],
  "akkusativ": [
    [
      "Lea tauscht ___ Karte. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Karte.",
      "Feminine direct object: die Karte."
    ],
    [
      "Karim nennt ___ Donut. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Donut.",
      "Masculine direct object: den Donut."
    ],
    [
      "Jule beschreibt ___ Förmchen. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Förmchen.",
      "Neuter direct object: das Förmchen."
    ],
    [
      "Tarek vergleicht ___ Schreibweisen. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Schreibweisen.",
      "Plural direct object: die Schreibweisen."
    ]
  ],
  "praesens": [
    [
      "Lea ___ die Karten. (tauschen)",
      "tauscht",
      "tauschst",
      "tauschen",
      "sie مفرد: tauscht.",
      "Singular sie takes tauscht."
    ],
    [
      "Du ___ die Form vor. (lesen)",
      "liest",
      "lest",
      "lesen",
      "du: liest.",
      "Du takes liest."
    ],
    [
      "Karim ___ zwei Buchstaben. (ergänzen)",
      "ergänzt",
      "ergänzen",
      "ergänze",
      "er: ergänzt.",
      "Singular er takes ergänzt."
    ],
    [
      "Wir ___ den Bezug. (klären)",
      "klären",
      "klärt",
      "kläre",
      "wir: klären.",
      "Wir takes klären."
    ]
  ],
  "possessiv": [
    [
      "Nele prüft ___ Karte. (Nele; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nele مع مؤنث أكوزاتيف: ihre Karte.",
      "Nele takes ihre with feminine accusative Karte."
    ],
    [
      "Amir verbessert ___ Fehler. (Amir; der)",
      "seinen",
      "sein",
      "seinem",
      "Amir مع مذكر أكوزاتيف: seinen Fehler.",
      "Amir takes seinen with masculine accusative Fehler."
    ],
    [
      "Jule beginnt ___ Rollenspiel. (Jule; das)",
      "ihr",
      "ihre",
      "ihren",
      "Jule مع محايد أكوزاتيف: ihr Rollenspiel.",
      "Jule takes ihr with neuter accusative Rollenspiel."
    ],
    [
      "Wir lesen ___ Wörter. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Wörter.",
      "Wir takes unsere with plural accusative Wörter."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt unter ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع unter: داتيف dem Foto.",
      "Fixed location with unter takes dative dem Foto."
    ],
    [
      "Lea legt die Karte unter ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع unter: أكوزاتيف das Foto.",
      "Destination with unter takes accusative das Foto."
    ],
    [
      "Das Buch liegt hinter ___ Teller. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع hinter: داتيف dem Teller.",
      "Fixed location with hinter takes dative dem Teller."
    ],
    [
      "Karim legt die Karte hinter ___ Teller. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع hinter: أكوزاتيف den Teller.",
      "Destination with hinter takes accusative den Teller."
    ]
  ],
  "negation": [
    [
      "Die Karte nennt ___ Preis. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Preis.",
      "Masculine direct object: keinen Preis."
    ],
    [
      "Das Foto ist ___ Rezept. (kein; das)",
      "kein",
      "keinen",
      "keine",
      "محايد بعد ist: kein Rezept.",
      "Neuter predicate noun: kein Rezept."
    ],
    [
      "Wir bestätigen ___ Verfügbarkeit. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Verfügbarkeit.",
      "Feminine direct object: keine Verfügbarkeit."
    ],
    [
      "Der Bezug ist noch ___ klar. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي klar: nicht.",
      "Negate klar with nicht."
    ]
  ]
};
