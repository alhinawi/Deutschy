import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const gewuerzkartenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Vanilleschote ist lang. (Vanilleschote)",
      "Die",
      "Der",
      "Das",
      "Vanilleschote مؤنث: die.",
      "Vanilleschote is feminine: die."
    ],
    [
      "___ Gewürznelke steht vor Vanilleschote. (Gewürznelke)",
      "Die",
      "Der",
      "Das",
      "Gewürznelke مؤنث: die.",
      "Gewürznelke is feminine: die."
    ],
    [
      "___ Streifen liegt neben dem Foto. (Streifen)",
      "Der",
      "Die",
      "Das",
      "Streifen مذكر: der.",
      "Streifen is masculine: der."
    ],
    [
      "___ Kästchen ist leer. (Kästchen)",
      "Das",
      "Die",
      "Der",
      "Kästchen محايد: das.",
      "Kästchen is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Emil tauscht ___ Streifen. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر أكوزاتيف: den Streifen.",
      "Masculine direct object: den Streifen."
    ],
    [
      "Nora liest ___ Liste. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث أكوزاتيف: die Liste.",
      "Feminine direct object: die Liste."
    ],
    [
      "Jasmin prüft ___ Foto. (das)",
      "das",
      "dem",
      "der",
      "مفعول محايد أكوزاتيف: das Foto.",
      "Neuter direct object: das Foto."
    ],
    [
      "Timo vergleicht ___ Rückseiten. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع أكوزاتيف: die Rückseiten.",
      "Plural direct object: die Rückseiten."
    ]
  ],
  "praesens": [
    [
      "Nora ___ auf die Aufgabe. (zeigen)",
      "zeigt",
      "zeigst",
      "zeigen",
      "sie مفرد: zeigt.",
      "Singular sie takes zeigt."
    ],
    [
      "Du ___ die Streifen ab. (ablösen)",
      "löst",
      "löse",
      "lösen",
      "du: löst ... ab.",
      "Du takes löst ... ab."
    ],
    [
      "Wir ___ die Zuordnung. (prüfen)",
      "prüfen",
      "prüft",
      "prüfst",
      "wir: prüfen.",
      "Wir takes prüfen."
    ],
    [
      "Jonas ___ drei Spalten. (verwenden)",
      "verwendet",
      "verwendest",
      "verwenden",
      "er: verwendet.",
      "Singular er takes verwendet."
    ]
  ],
  "possessiv": [
    [
      "Nora ordnet ___ Karten. (Nora; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "Nora مع جمع أكوزاتيف: ihre.",
      "Nora takes ihre with plural accusative Karten."
    ],
    [
      "Emil liest ___ Liste. (Emil; die)",
      "seine",
      "sein",
      "seinen",
      "Emil مع مؤنث أكوزاتيف: seine.",
      "Emil takes seine with feminine accusative Liste."
    ],
    [
      "Leila prüft ___ Bogen. (Leila; der)",
      "ihren",
      "ihr",
      "ihrem",
      "Leila مع مذكر أكوزاتيف: ihren.",
      "Leila takes ihren with masculine accusative Bogen."
    ],
    [
      "Wir vergleichen ___ Beispiel. (wir; das)",
      "unser",
      "unsere",
      "unseren",
      "wir مع محايد أكوزاتيف: unser.",
      "Wir takes unser with neuter accusative Beispiel."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Streifen liegen neben ___ Fotos. (die; Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت مع جمع داتيف: den Fotos.",
      "Fixed location takes plural dative den Fotos."
    ],
    [
      "Jasmin legt die Streifen neben ___ Fotos. (die; Plural; Wohin?)",
      "die",
      "den",
      "der",
      "اتجاه الحركة مع جمع أكوزاتيف: die Fotos.",
      "Destination takes plural accusative die Fotos."
    ],
    [
      "Der Bogen liegt auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع مذكر داتيف: dem Tisch.",
      "Fixed location takes masculine dative dem Tisch."
    ],
    [
      "Jonas legt den Bogen auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه الحركة مع مذكر أكوزاتيف: den Tisch.",
      "Destination takes masculine accusative den Tisch."
    ]
  ],
  "negation": [
    [
      "Das Beispiel stammt ___ von einer realen Person. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي المصدر: nicht.",
      "Negate the origin with nicht."
    ],
    [
      "Das ist ___ standardisierte Bewertung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "خبر مؤنث: keine.",
      "Feminine predicate noun takes keine."
    ],
    [
      "Wir ändern ___ Buchstaben. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Buchstaben.",
      "Masculine direct object takes keinen Buchstaben."
    ],
    [
      "Sie sehen ___ neues Foto. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "مفعول محايد: kein.",
      "Neuter direct object takes kein."
    ]
  ]
};
