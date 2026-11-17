import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const wasserbilderGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Tauchmaske hat gelbe Ränder. (Tauchmaske)",
      "Die",
      "Der",
      "Das",
      "Tauchmaske مؤنث: die.",
      "Tauchmaske is feminine: die."
    ],
    [
      "___ Schwimmbrille hängt am Band. (Schwimmbrille)",
      "Die",
      "Der",
      "Das",
      "Schwimmbrille مؤنث: die.",
      "Schwimmbrille is feminine: die."
    ],
    [
      "___ Hintergrund ist blau. (Hintergrund)",
      "Der",
      "Die",
      "Das",
      "Hintergrund مذكر: der.",
      "Hintergrund is masculine: der."
    ],
    [
      "___ Band ist sichtbar. (Band)",
      "Das",
      "Der",
      "Die",
      "Band محايد: das.",
      "Band is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Nele folgt ___ Erklärung. (die)",
      "der",
      "die",
      "den",
      "داتيف مؤنث: der Erklärung.",
      "Feminine dative: der Erklärung."
    ],
    [
      "Amir hilft ___ Partner. (der)",
      "dem",
      "den",
      "der",
      "داتيف مذكر: dem Partner.",
      "Masculine dative: dem Partner."
    ],
    [
      "Jule antwortet ___ Team. (das)",
      "dem",
      "das",
      "den",
      "داتيف محايد: dem Team.",
      "Neuter dative: dem Team."
    ],
    [
      "Die Karten gehören ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "داتيف جمع: den Lernenden.",
      "Plural dative: den Lernenden."
    ]
  ],
  "praesens": [
    [
      "Lea ___ den Namen. (wiederholen)",
      "wiederholt",
      "wiederholen",
      "wiederholst",
      "sie مفرد: wiederholt.",
      "Singular sie takes wiederholt."
    ],
    [
      "Du ___ die Teile. (zählen)",
      "zählst",
      "zählt",
      "zählen",
      "du: zählst.",
      "Du takes zählst."
    ],
    [
      "Karim ___ auf das Band. (zeigen)",
      "zeigt",
      "zeigen",
      "zeigst",
      "er: zeigt.",
      "Singular er takes zeigt."
    ],
    [
      "Wir ___ keine Ausrüstung. (empfehlen)",
      "empfehlen",
      "empfiehlt",
      "empfehlt",
      "wir: empfehlen.",
      "Wir takes empfehlen."
    ]
  ],
  "possessiv": [
    [
      "Nele liest ___ Erklärung. (Nele; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nele مع مؤنث أكوزاتيف: ihre Erklärung.",
      "Nele takes ihre with feminine accusative Erklärung."
    ],
    [
      "Amir öffnet ___ Heft. (Amir; das)",
      "sein",
      "seine",
      "seinen",
      "Amir مع محايد أكوزاتيف: sein Heft.",
      "Amir takes sein with neuter accusative Heft."
    ],
    [
      "Tarek ändert ___ Bildtext. (Tarek; der)",
      "seinen",
      "sein",
      "seinem",
      "Tarek مع مذكر أكوزاتيف: seinen Bildtext.",
      "Tarek takes seinen with masculine accusative Bildtext."
    ],
    [
      "Wir prüfen ___ Beschriftungen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Beschriftungen.",
      "Wir takes unsere with plural accusative Beschriftungen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Wort steht unter ___ Bild. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع unter: داتيف dem Bild.",
      "Fixed location with unter takes dative dem Bild."
    ],
    [
      "Lea schreibt das Wort unter ___ Bild. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع unter: أكوزاتيف das Bild.",
      "Destination with unter takes accusative das Bild."
    ],
    [
      "Die Endung steht auf ___ Karte. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع auf: داتيف der Karte.",
      "Fixed location with auf takes dative der Karte."
    ],
    [
      "Karim schreibt die Endung auf ___ Karte. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع auf: أكوزاتيف die Karte.",
      "Destination with auf takes accusative die Karte."
    ]
  ],
  "negation": [
    [
      "Das Bild ersetzt ___ Dichtigkeitstest. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Dichtigkeitstest.",
      "Masculine direct object: keinen Dichtigkeitstest."
    ],
    [
      "Das ist ___ Prüfzeugnis. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "محايد بعد ist: kein Prüfzeugnis.",
      "Neuter predicate noun: kein Prüfzeugnis."
    ],
    [
      "Wir geben ___ Kaufempfehlung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Kaufempfehlung.",
      "Feminine direct object: keine Kaufempfehlung."
    ],
    [
      "Die Passform ist ___ geprüft. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي geprüft: nicht.",
      "Negate geprüft with nicht."
    ]
  ]
};
