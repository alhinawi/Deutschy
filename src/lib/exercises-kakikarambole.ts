import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const kakikaramboleGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Kaki liegt vorn. (Kaki; Frucht)",
      "Die",
      "Der",
      "Das",
      "Kaki كفاكهة مؤنث: die.",
      "Kaki as a fruit is feminine: die."
    ],
    [
      "___ Karambole hat sichtbare Kanten. (Karambole; Frucht)",
      "Die",
      "Der",
      "Das",
      "Karambole مؤنث: die.",
      "Karambole is feminine: die."
    ],
    [
      "___ Untergrund ist grau. (Untergrund)",
      "Der",
      "Die",
      "Das",
      "Untergrund مذكر: der.",
      "Untergrund is masculine: der."
    ],
    [
      "___ Ausgangsbild bleibt unverändert. (Ausgangsbild)",
      "Das",
      "Der",
      "Die",
      "Ausgangsbild محايد: das.",
      "Ausgangsbild is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Farah hilft ___ Freund beim Lesen. (der)",
      "dem",
      "den",
      "der",
      "helfen بياخد داتيف: dem Freund.",
      "Helfen takes dative: dem Freund."
    ],
    [
      "Moritz folgt ___ Erklärung. (die)",
      "der",
      "die",
      "dem",
      "folgen بياخد داتيف: der Erklärung.",
      "Folgen takes dative: der Erklärung."
    ],
    [
      "Die Fotos gehören ___ Gruppe. (die)",
      "der",
      "die",
      "den",
      "gehören بياخد داتيف: der Gruppe.",
      "Gehören takes dative: der Gruppe."
    ],
    [
      "Das Beispiel hilft ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "جمع داتيف: den Lernenden.",
      "Dative plural: den Lernenden."
    ]
  ],
  "praesens": [
    [
      "Du ___ genauer hin. (sehen)",
      "siehst",
      "seht",
      "sehen",
      "du مع sehen: siehst.",
      "Du takes siehst."
    ],
    [
      "Leila ___ die Endungen. (prüfen)",
      "prüft",
      "prüfen",
      "prüfst",
      "sie مفرد: prüft.",
      "Singular sie takes prüft."
    ],
    [
      "Wir ___ nach dem Zusammenhang. (fragen)",
      "fragen",
      "fragt",
      "frage",
      "wir: fragen.",
      "Wir takes fragen."
    ],
    [
      "Ihr ___ beide Bedeutungen. (lesen)",
      "lest",
      "liest",
      "lesen",
      "ihr: lest.",
      "Ihr takes lest."
    ]
  ],
  "possessiv": [
    [
      "Tom fotografiert ___ Tafel. (Tom; die)",
      "seine",
      "sein",
      "seinen",
      "مفعول مؤنث: seine Tafel.",
      "Feminine accusative: seine Tafel."
    ],
    [
      "Leila öffnet ___ Wörterbuch. (Leila; das)",
      "ihr",
      "ihre",
      "ihren",
      "مفعول محايد: ihr Wörterbuch.",
      "Neuter accusative: ihr Wörterbuch."
    ],
    [
      "Wir vergleichen ___ Ausschnitte. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "مفعول جمع: unsere Ausschnitte.",
      "Plural accusative: unsere Ausschnitte."
    ],
    [
      "Hatem prüft ___ Entwurf. (Hatem; der)",
      "seinen",
      "sein",
      "seine",
      "مفعول مذكر: seinen Entwurf.",
      "Masculine accusative: seinen Entwurf."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Foto hängt an ___ Tafel. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت وداتيف مؤنث: der Tafel.",
      "Fixed location, feminine dative: der Tafel."
    ],
    [
      "Farah hängt das Foto an ___ Tafel. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه وأكوزاتيف مؤنث: die Tafel.",
      "Destination, feminine accusative: die Tafel."
    ],
    [
      "Die Karte liegt neben ___ Register. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت وداتيف محايد: dem Register.",
      "Fixed location, neuter dative: dem Register."
    ],
    [
      "Moritz legt die Karte neben ___ Register. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه وأكوزاتيف محايد: das Register.",
      "Destination, neuter accusative: das Register."
    ]
  ],
  "negation": [
    [
      "Das ist ___ Stoffmuster. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "خبر محايد: kein Stoffmuster.",
      "Neuter predicate: kein Stoffmuster."
    ],
    [
      "Nora ergänzt ___ künstlichen Rand. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen künstlichen Rand.",
      "Masculine direct object: keinen künstlichen Rand."
    ],
    [
      "Das Bild enthält ___ Größenangabe. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Größenangabe.",
      "Feminine direct object: keine Größenangabe."
    ],
    [
      "Sie machen ___ Aussagen zum Geschmack. (kein; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine Aussagen.",
      "Plural direct object: keine Aussagen."
    ]
  ]
};
