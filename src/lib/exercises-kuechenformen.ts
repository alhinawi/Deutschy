import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const kuechenformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Espressokocher steht im Schrank. (Espressokocher)",
      "Der",
      "Die",
      "Das",
      "Espressokocher مذكر: der.",
      "Espressokocher is masculine: der."
    ],
    [
      "___ Eiswürfelform hat mehrere Fächer. (Eiswürfelform)",
      "Die",
      "Der",
      "Das",
      "Eiswürfelform مؤنث: die.",
      "Eiswürfelform is feminine: die."
    ],
    [
      "___ Grundwort steht am Ende. (Grundwort)",
      "Das",
      "Der",
      "Die",
      "Grundwort محايد: das.",
      "Grundwort is neuter: das."
    ],
    [
      "___ Bestandsliste liegt hier. (Bestandsliste)",
      "Die",
      "Der",
      "Das",
      "Bestandsliste مؤنث: die.",
      "Bestandsliste is feminine: die."
    ]
  ],
  "akkusativ": [
    [
      "Jan öffnet ___ Schrank. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Schrank.",
      "Masculine direct object: den Schrank."
    ],
    [
      "Lea nennt ___ Eiswürfelform. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Eiswürfelform.",
      "Feminine direct object: die Eiswürfelform."
    ],
    [
      "Deniz markiert ___ Grundwort. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Grundwort.",
      "Neuter direct object: das Grundwort."
    ],
    [
      "Mira prüft ___ Wortgruppen. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Wortgruppen.",
      "Plural direct object: die Wortgruppen."
    ]
  ],
  "praesens": [
    [
      "Du ___ die Artikel. (unterstreichen)",
      "unterstreichst",
      "unterstreicht",
      "unterstreichen",
      "du: unterstreichst.",
      "Du takes unterstreichst."
    ],
    [
      "Jan ___ auf die Notiz. (zeigen)",
      "zeigt",
      "zeigen",
      "zeige",
      "er: zeigt.",
      "Er takes zeigt."
    ],
    [
      "Wir ___ die Mehrzahlformen. (vergleichen)",
      "vergleichen",
      "vergleicht",
      "vergleiche",
      "wir: vergleichen.",
      "Wir takes vergleichen."
    ],
    [
      "Ihr ___ die Beispiele ab. (decken)",
      "deckt",
      "decken",
      "decke",
      "ihr: deckt.",
      "Ihr takes deckt."
    ]
  ],
  "possessiv": [
    [
      "Lea öffnet ___ Heft. (Lea; das)",
      "ihr",
      "ihre",
      "ihren",
      "مفعول محايد: ihr Heft.",
      "Neuter accusative: ihr Heft."
    ],
    [
      "Jan schließt ___ Schrank. (Jan; der)",
      "seinen",
      "sein",
      "seine",
      "مفعول مذكر: seinen Schrank.",
      "Masculine accusative: seinen Schrank."
    ],
    [
      "Wir ergänzen ___ Liste. (wir; die)",
      "unsere",
      "unser",
      "unseren",
      "مفعول مؤنث: unsere Liste.",
      "Feminine accusative: unsere Liste."
    ],
    [
      "Robin ändert ___ Nachricht. (Robin; die)",
      "seine",
      "sein",
      "seinen",
      "مفعول مؤنث: seine Nachricht.",
      "Feminine accusative: seine Nachricht."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Kocher steht in ___ Schrank. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت وداتيف مذكر: dem Schrank.",
      "Fixed location, masculine dative: dem Schrank."
    ],
    [
      "Jan stellt den Kocher in ___ Schrank. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه وأكوزاتيف مذكر: den Schrank.",
      "Destination, masculine accusative: den Schrank."
    ],
    [
      "Die Form liegt hinter ___ Schüssel. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت وداتيف مؤنث: der Schüssel.",
      "Fixed location, feminine dative: der Schüssel."
    ],
    [
      "Robin legt die Form hinter ___ Schüssel. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه وأكوزاتيف مؤنث: die Schüssel.",
      "Destination, feminine accusative: die Schüssel."
    ]
  ],
  "negation": [
    [
      "Das ist ___ Funktionszusage. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "خبر مؤنث: keine Funktionszusage.",
      "Feminine predicate: keine Funktionszusage."
    ],
    [
      "Lea braucht ___ neuen Stift. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen neuen Stift.",
      "Masculine direct object: keinen neuen Stift."
    ],
    [
      "Mira setzt ___ Leerzeichen in das Wort. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "مفعول محايد: kein Leerzeichen.",
      "Neuter direct object: kein Leerzeichen."
    ],
    [
      "Robin macht ___ sicheren Funktionsangaben. (kein; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine sicheren Funktionsangaben.",
      "Plural direct object: keine sicheren Funktionsangaben."
    ]
  ]
};
