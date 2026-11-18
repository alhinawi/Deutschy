import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const kleinteileGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Unterlegscheibe liegt auf Grün. (Unterlegscheibe)",
      "Die",
      "Der",
      "Das",
      "Unterlegscheibe مؤنث: die.",
      "Unterlegscheibe is feminine: die."
    ],
    [
      "___ Schraubenmutter hat ein Gewinde. (Schraubenmutter)",
      "Die",
      "Der",
      "Das",
      "Schraubenmutter مؤنث: die.",
      "Schraubenmutter is feminine: die."
    ],
    [
      "___ Gewinde ist innen sichtbar. (Gewinde)",
      "Das",
      "Der",
      "Die",
      "Gewinde محايد: das.",
      "Gewinde is neuter: das."
    ],
    [
      "___ Untergrund ist grün. (Untergrund)",
      "Der",
      "Die",
      "Das",
      "Untergrund مذكر: der.",
      "Untergrund is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "Mia erkennt ___ Unterlegscheibe. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Unterlegscheibe.",
      "Feminine direct object: die Unterlegscheibe."
    ],
    [
      "Samir beschreibt ___ Untergrund. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Untergrund.",
      "Masculine direct object: den Untergrund."
    ],
    [
      "Eva sieht ___ Gewinde. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Gewinde.",
      "Neuter direct object: das Gewinde."
    ],
    [
      "Nabil vergleicht ___ Fotos. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Fotos.",
      "Plural direct object: die Fotos."
    ]
  ],
  "praesens": [
    [
      "Du ___ das Wort langsam. (lesen)",
      "liest",
      "lest",
      "lese",
      "du مع lesen: liest.",
      "Du with lesen takes liest."
    ],
    [
      "Mia ___ die Karten zu. (ordnen)",
      "ordnet",
      "ordnen",
      "ordnest",
      "sie مفرد: ordnet.",
      "Singular sie takes ordnet."
    ],
    [
      "Wir ___ die Endungen. (kontrollieren)",
      "kontrollieren",
      "kontrolliert",
      "kontrolliere",
      "wir: kontrollieren.",
      "Wir takes kontrollieren."
    ],
    [
      "Ihr ___ keine Teile zusammen. (bauen)",
      "baut",
      "bauen",
      "baue",
      "ihr: baut.",
      "Ihr takes baut."
    ]
  ],
  "possessiv": [
    [
      "Samir öffnet ___ Heft. (Samir; das)",
      "sein",
      "seine",
      "seinen",
      "أكوزاتيف محايد: sein Heft.",
      "Neuter accusative takes sein Heft."
    ],
    [
      "Mia liest ___ Karte. (Mia; die)",
      "ihre",
      "ihr",
      "ihren",
      "أكوزاتيف مؤنث: ihre Karte.",
      "Feminine accusative takes ihre Karte."
    ],
    [
      "Wir prüfen ___ Entwurf. (wir; der)",
      "unseren",
      "unser",
      "unsere",
      "أكوزاتيف مذكر: unseren Entwurf.",
      "Masculine accusative takes unseren Entwurf."
    ],
    [
      "Leonie vergleicht ___ Einträge. (Leonie; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "أكوزاتيف جمع: ihre Einträge.",
      "Plural accusative takes ihre Einträge."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt unter ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع محايد داتيف: dem Foto.",
      "Fixed location takes neuter dative dem Foto."
    ],
    [
      "Mia legt die Karte unter ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه مع محايد أكوزاتيف: das Foto.",
      "Destination takes neuter accusative das Foto."
    ],
    [
      "Das Heft liegt neben ___ Entwurf. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع مذكر داتيف: dem Entwurf.",
      "Fixed location takes masculine dative dem Entwurf."
    ],
    [
      "Nabil legt das Heft neben ___ Entwurf. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع مذكر أكوزاتيف: den Entwurf.",
      "Destination takes masculine accusative den Entwurf."
    ]
  ],
  "negation": [
    [
      "Das Foto ist ___ Datenblatt. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "خبر محايد: kein.",
      "Neuter predicate noun takes kein."
    ],
    [
      "Eva nennt ___ Legierung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Nabil schreibt ___ Montageplan. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen.",
      "Masculine direct object takes keinen."
    ],
    [
      "Sie haben ___ gemeinsamen Maße. (kein; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine.",
      "Plural direct object takes keine."
    ]
  ]
};
