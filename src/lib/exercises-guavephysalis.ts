import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const guavephysalisGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Guave hängt am Zweig. (Guave)",
      "Die",
      "Der",
      "Das",
      "Guave مؤنث: die.",
      "Guave is feminine: die."
    ],
    [
      "___ Physalis hat eine Hülle. (Physalis)",
      "Die",
      "Der",
      "Das",
      "Physalis مؤنث: die.",
      "Physalis is feminine: die."
    ],
    [
      "___ Vergleich bleibt im Text. (Vergleich)",
      "Der",
      "Die",
      "Das",
      "Vergleich مذكر: der.",
      "Vergleich is masculine: der."
    ],
    [
      "___ Rätsel beginnt gleich. (Rätsel)",
      "Das",
      "Der",
      "Die",
      "Rätsel محايد: das.",
      "Rätsel is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Sami liest ___ Namen vor. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Namen.",
      "Masculine direct object: den Namen."
    ],
    [
      "Lea dreht ___ Karte um. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Karte.",
      "Feminine direct object: die Karte."
    ],
    [
      "Omar prüft ___ Satz. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Satz.",
      "Masculine direct object: den Satz."
    ],
    [
      "Jana ergänzt ___ Hinweis. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Hinweis.",
      "Masculine direct object: den Hinweis."
    ]
  ],
  "praesens": [
    [
      "Sami ___ die grüne Frucht. (beschreiben)",
      "beschreibt",
      "beschreiben",
      "beschreibe",
      "er: beschreibt.",
      "Er takes beschreibt."
    ],
    [
      "Du ___ deine Karte um. (drehen)",
      "drehst",
      "dreht",
      "drehen",
      "du: drehst.",
      "Du takes drehst."
    ],
    [
      "Wir ___ beide Varianten. (erkennen)",
      "erkennen",
      "erkennt",
      "erkenne",
      "wir: erkennen.",
      "Wir takes erkennen."
    ],
    [
      "Ihr ___ die Sätze noch einmal. (lesen)",
      "lest",
      "liest",
      "lese",
      "ihr: lest.",
      "Ihr takes lest."
    ]
  ],
  "possessiv": [
    [
      "Karim öffnet ___ Fotoheft. (Karim; das)",
      "sein",
      "seine",
      "seinen",
      "مفعول محايد: sein Fotoheft.",
      "Neuter direct object: sein Fotoheft."
    ],
    [
      "Jana überprüft ___ Notizen. (Jana; die; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "مفعول جمع: ihre Notizen.",
      "Plural direct object: ihre Notizen."
    ],
    [
      "Lea liest ___ Beschreibung vor. (Lea; die)",
      "ihre",
      "ihr",
      "ihren",
      "مفعول مؤنث: ihre Beschreibung.",
      "Feminine direct object: ihre Beschreibung."
    ],
    [
      "Omar überarbeitet ___ Text. (Omar; der)",
      "seinen",
      "sein",
      "seinem",
      "مفعول مذكر: seinen Text.",
      "Masculine direct object: seinen Text."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karten liegen auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت وداتيف مذكر: dem Tisch.",
      "Fixed location, masculine dative: dem Tisch."
    ],
    [
      "Lea legt die Karte auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه وأكوزاتيف مذكر: den Tisch.",
      "Direction, masculine accusative: den Tisch."
    ],
    [
      "Das Foto hängt an ___ Wand. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت وداتيف مؤنث: der Wand.",
      "Fixed location, feminine dative: der Wand."
    ],
    [
      "Nele hängt den Text an ___ Wand. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه وأكوزاتيف مؤنث: die Wand.",
      "Direction, feminine accusative: die Wand."
    ]
  ],
  "negation": [
    [
      "Die Hülle ist ___ gebaute Laterne. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "خبر مؤنث: keine gebaute Laterne.",
      "Feminine predicate: keine gebaute Laterne."
    ],
    [
      "Karim findet ___ Fehler im Namen. (kein; der)",
      "keinen",
      "kein",
      "keinem",
      "مفعول مذكر: keinen Fehler.",
      "Masculine direct object: keinen Fehler."
    ],
    [
      "Das ist ___ echter Einkauf. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "خبر مذكر: kein echter Einkauf.",
      "Masculine predicate: kein echter Einkauf."
    ],
    [
      "Sie probieren ___ Früchte. (kein; die; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine Früchte.",
      "Plural direct object: keine Früchte."
    ]
  ]
};
