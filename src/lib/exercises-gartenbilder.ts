import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const gartenbilderGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Gartenschere ist auf diesem Foto grün. (Gartenschere)",
      "Die",
      "Der",
      "Das",
      "Gartenschere مؤنث: die.",
      "Gartenschere is feminine: die."
    ],
    [
      "___ Gartenschaufel liegt auf Holz. (Gartenschaufel)",
      "Die",
      "Der",
      "Das",
      "Gartenschaufel مؤنث: die.",
      "Gartenschaufel is feminine: die."
    ],
    [
      "___ Dateiname bleibt erhalten. (Dateiname)",
      "Der",
      "Die",
      "Das",
      "Dateiname مذكر: der.",
      "Dateiname is masculine: der."
    ],
    [
      "___ Feld enthält nur Beobachtungen. (Feld)",
      "Das",
      "Der",
      "Die",
      "Feld محايد: das.",
      "Feld is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Ida zeigt ___ Partner die Karte. (der)",
      "dem",
      "den",
      "der",
      "متلقي مذكر داتيف: dem Partner.",
      "Masculine dative recipient: dem Partner."
    ],
    [
      "Jonas antwortet ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "antworten مع داتيف مؤنث: der Partnerin.",
      "Antworten takes feminine dative der Partnerin."
    ],
    [
      "Rana hilft ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "helfen مع جمع داتيف: den Lernenden.",
      "Helfen takes plural dative den Lernenden."
    ],
    [
      "Die Notiz gehört ___ Kind. (das)",
      "dem",
      "das",
      "den",
      "gehören مع محايد داتيف: dem Kind.",
      "Gehören takes neuter dative dem Kind."
    ]
  ],
  "praesens": [
    [
      "Ida ___ die Wortkarte. (tauschen)",
      "tauscht",
      "tauschen",
      "tauschst",
      "sie مفرد: tauscht.",
      "Singular sie takes tauscht."
    ],
    [
      "Du ___ beide Wörter. (kennen)",
      "kennst",
      "kennt",
      "kennen",
      "du: kennst.",
      "Du takes kennst."
    ],
    [
      "Jonas ___ kurz. (stocken)",
      "stockt",
      "stocken",
      "stockst",
      "er: stockt.",
      "Singular er takes stockt."
    ],
    [
      "Wir ___ die Felder. (trennen)",
      "trennen",
      "trennt",
      "trenne",
      "wir: trennen.",
      "Wir takes trennen."
    ]
  ],
  "possessiv": [
    [
      "Ida tauscht ___ Karte. (Ida; die)",
      "ihre",
      "ihr",
      "ihren",
      "Ida مع مؤنث أكوزاتيف: ihre Karte.",
      "Ida takes ihre with feminine accusative Karte."
    ],
    [
      "Nabil liest ___ Satz. (Nabil; der)",
      "seinen",
      "sein",
      "seine",
      "Nabil مع مذكر أكوزاتيف: seinen Satz.",
      "Nabil takes seinen with masculine accusative Satz."
    ],
    [
      "Rana entfernt ___ Vorlage. (Rana; die)",
      "ihre",
      "ihr",
      "ihren",
      "Rana مع مؤنث أكوزاتيف: ihre Vorlage.",
      "Rana takes ihre with feminine accusative Vorlage."
    ],
    [
      "Wir vergleichen ___ Beobachtungen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Beobachtungen.",
      "Wir takes unsere with plural accusative Beobachtungen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Schaufel liegt auf ___ Holz. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع auf: داتيف dem.",
      "Fixed location with auf takes dative dem."
    ],
    [
      "Ida legt die Karte auf ___ Holz. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع auf: أكوزاتيف das.",
      "Destination with auf takes accusative das."
    ],
    [
      "Der Name steht in ___ Feld. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع in: داتيف dem.",
      "Fixed location with in takes dative dem."
    ],
    [
      "Oskar schreibt den Namen in ___ Feld. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع in: أكوزاتيف das.",
      "Destination with in takes accusative das."
    ]
  ],
  "negation": [
    [
      "Das Foto zeigt ___ Gesicht. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "مفعول محايد: kein Gesicht.",
      "Neuter direct object: kein Gesicht."
    ],
    [
      "Wir kennen ___ Zeitpunkt. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Zeitpunkt.",
      "Masculine direct object: keinen Zeitpunkt."
    ],
    [
      "Das ist ___ Anleitung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مؤنث: keine Anleitung.",
      "Feminine predicate noun: keine Anleitung."
    ],
    [
      "Die Herkunft ist ___ geklärt. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الجملة مع geklärt: nicht.",
      "Negate geklärt with nicht."
    ]
  ]
};
