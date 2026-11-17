import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const kleinebilderGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Korken sitzt oben. (Korken)",
      "Der",
      "Die",
      "Das",
      "Korken مذكر: der.",
      "Korken is masculine: der."
    ],
    [
      "___ Streichholz hat einen grünen Kopf. (Streichholz)",
      "Das",
      "Der",
      "Die",
      "Streichholz محايد: das.",
      "Streichholz is neuter: das."
    ],
    [
      "___ Schachtel liegt schräg. (Schachtel)",
      "Die",
      "Der",
      "Das",
      "Schachtel مؤنث: die.",
      "Schachtel is feminine: die."
    ],
    [
      "___ Schatten zeigt nach rechts. (Schatten)",
      "Der",
      "Das",
      "Die",
      "Schatten مذكر: der.",
      "Schatten is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "Lea beschreibt ___ Korken. (der)",
      "den",
      "der",
      "dem",
      "مفعول مذكر: den Korken.",
      "Masculine direct object: den Korken."
    ],
    [
      "Karim sieht ___ Streichholz. (das)",
      "das",
      "dem",
      "der",
      "مفعول محايد: das Streichholz.",
      "Neuter direct object: das Streichholz."
    ],
    [
      "Nele betrachtet ___ Schachtel. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Schachtel.",
      "Feminine direct object: die Schachtel."
    ],
    [
      "Amir vergleicht ___ Karten. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Karten.",
      "Plural direct object: die Karten."
    ]
  ],
  "praesens": [
    [
      "Lea ___ die Öffnung. (zeigen)",
      "zeigt",
      "zeigst",
      "zeigen",
      "sie مفرد: zeigt.",
      "Singular sie takes zeigt."
    ],
    [
      "Du ___ das Wort. (lesen)",
      "liest",
      "lest",
      "lese",
      "du: liest.",
      "Du takes liest."
    ],
    [
      "Karim ___ einen Satz. (schreiben)",
      "schreibt",
      "schreibst",
      "schreiben",
      "er: schreibt.",
      "Singular er takes schreibt."
    ],
    [
      "Wir ___ die Aufgabe. (klären)",
      "klären",
      "klärt",
      "klärst",
      "wir: klären.",
      "Wir takes klären."
    ]
  ],
  "possessiv": [
    [
      "Nele ergänzt ___ Karte. (Nele; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nele مع مؤنث أكوزاتيف: ihre Karte.",
      "Nele takes ihre with feminine accusative Karte."
    ],
    [
      "Amir liest ___ Auftrag. (Amir; der)",
      "seinen",
      "sein",
      "seinem",
      "Amir مع مذكر أكوزاتيف: seinen Auftrag.",
      "Amir takes seinen with masculine accusative Auftrag."
    ],
    [
      "Jule beschreibt ___ Foto. (Jule; das)",
      "ihr",
      "ihre",
      "ihren",
      "Jule مع محايد أكوزاتيف: ihr Foto.",
      "Jule takes ihr with neuter accusative Foto."
    ],
    [
      "Wir ordnen ___ Wörter. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Wörter.",
      "Wir takes unsere with plural accusative Wörter."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt neben ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem Foto.",
      "Fixed location with neben takes dative dem Foto."
    ],
    [
      "Lea legt die Karte neben ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das Foto.",
      "Destination with neben takes accusative das Foto."
    ],
    [
      "Die Wörter stehen auf ___ Karte. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع auf: داتيف der Karte.",
      "Fixed location with auf takes dative der Karte."
    ],
    [
      "Karim schreibt die Wörter auf ___ Karte. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع auf: أكوزاتيف die Karte.",
      "Destination with auf takes accusative die Karte."
    ]
  ],
  "negation": [
    [
      "Das Foto zeigt ___ Inhalt. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Inhalt.",
      "Masculine direct object: keinen Inhalt."
    ],
    [
      "Das ist ___ echter Auftrag. (kein; der)",
      "kein",
      "keinen",
      "keine",
      "مذكر بعد ist: kein echter Auftrag.",
      "Masculine predicate noun: kein echter Auftrag."
    ],
    [
      "Wir brauchen ___ Gegenstände. (kein; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine Gegenstände.",
      "Plural direct object: keine Gegenstände."
    ],
    [
      "Die Gesamtzahl ist ___ bekannt. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي bekannt: nicht.",
      "Negate bekannt with nicht."
    ]
  ]
};
