import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const kleinefruechteGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Kumquat liegt neben dem Glas. (Kumquat)",
      "Die",
      "Das",
      "Der",
      "Kumquat مؤنث: die.",
      "Kumquat is feminine: die."
    ],
    [
      "___ Litschi hat eine rötliche Schale. (Litschi)",
      "Die",
      "Der",
      "Das",
      "Litschi مؤنث: die.",
      "Litschi is feminine: die."
    ],
    [
      "___ Standpunkt ist wichtig. (Standpunkt)",
      "Der",
      "Die",
      "Das",
      "Standpunkt مذكر: der.",
      "Standpunkt is masculine: der."
    ],
    [
      "___ Verständnis wird bestätigt. (Verständnis)",
      "Das",
      "Der",
      "Die",
      "Verständnis محايد: das.",
      "Verständnis is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Mara verschiebt ___ Karte. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Karte.",
      "Feminine direct object takes die Karte."
    ],
    [
      "Adam erklärt ___ Standpunkt. (der)",
      "den",
      "der",
      "dem",
      "مفعول مذكر: den Standpunkt.",
      "Masculine direct object takes den Standpunkt."
    ],
    [
      "Liv prüft ___ Ergebnis. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Ergebnis.",
      "Neuter direct object takes das Ergebnis."
    ],
    [
      "Emil vergleicht ___ Buchstaben. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Buchstaben.",
      "Plural direct object takes die Buchstaben."
    ]
  ],
  "praesens": [
    [
      "Mara ___ auf das Foto. (zeigen)",
      "zeigt",
      "zeigst",
      "zeigen",
      "sie مفرد: zeigt.",
      "Singular sie takes zeigt."
    ],
    [
      "Du ___ die Aufgabe. (verstehen)",
      "verstehst",
      "versteht",
      "verstehen",
      "du: verstehst.",
      "Du takes verstehst."
    ],
    [
      "Adam ___ die Anweisung. (wiederholen)",
      "wiederholt",
      "wiederholst",
      "wiederholen",
      "er: wiederholt.",
      "Singular er takes wiederholt."
    ],
    [
      "Wir ___ die Perspektive. (klären)",
      "klären",
      "klärt",
      "klärst",
      "wir: klären.",
      "Wir takes klären."
    ]
  ],
  "possessiv": [
    [
      "Liv erklärt ___ Sicht. (Liv; die)",
      "ihre",
      "ihr",
      "ihren",
      "Liv مع مؤنث أكوزاتيف: ihre.",
      "Liv takes ihre with feminine accusative Sicht."
    ],
    [
      "Adam beschreibt ___ Standpunkt. (Adam; der)",
      "seinen",
      "sein",
      "seinem",
      "Adam مع مذكر أكوزاتيف: seinen.",
      "Adam takes seinen with masculine accusative Standpunkt."
    ],
    [
      "Nora ergänzt ___ Blatt. (Nora; das)",
      "ihr",
      "ihre",
      "ihren",
      "Nora مع محايد أكوزاتيف: ihr.",
      "Nora takes ihr with neuter accusative Blatt."
    ],
    [
      "Wir sortieren ___ Karten. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere.",
      "Wir takes unsere with plural accusative Karten."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Wortkarte liegt zwischen ___ Fotos. (die; Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت مع جمع داتيف: den Fotos.",
      "Fixed location takes plural dative den Fotos."
    ],
    [
      "Mara legt die Wortkarte zwischen ___ Fotos. (die; Plural; Wohin?)",
      "die",
      "den",
      "der",
      "اتجاه الحركة مع جمع أكوزاتيف: die Fotos.",
      "Destination takes plural accusative die Fotos."
    ],
    [
      "Das Foto liegt neben ___ Karte. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت: داتيف der Karte.",
      "Fixed location takes dative der Karte."
    ],
    [
      "Emil legt das Foto neben ___ Karte. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه الحركة: أكوزاتيف die Karte.",
      "Destination takes accusative die Karte."
    ]
  ],
  "negation": [
    [
      "Die Aufgabe nennt ___ gemeinsame Perspektive. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Das ist ___ persönliches Urteil. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "اسم محايد بعد ist: kein.",
      "Neuter predicate noun takes kein."
    ],
    [
      "Wir planen ___ Kauf. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Kauf.",
      "Masculine direct object takes keinen Kauf."
    ],
    [
      "Die Bilder sind noch ___ sichtbar. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي sichtbar: nicht.",
      "Negate sichtbar with nicht."
    ]
  ]
};
