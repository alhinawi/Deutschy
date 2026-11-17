import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const zweigfruechteGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Hagebutte ist auf dem Foto rot. (Hagebutte)",
      "Die",
      "Der",
      "Das",
      "Hagebutte مؤنث: die.",
      "Hagebutte is feminine: die."
    ],
    [
      "___ Mirabelle hängt am Zweig. (Mirabelle)",
      "Die",
      "Das",
      "Der",
      "Mirabelle مؤنث: die.",
      "Mirabelle is feminine: die."
    ],
    [
      "___ Ausschnitt zeigt Blätter. (Ausschnitt)",
      "Der",
      "Die",
      "Das",
      "Ausschnitt مذكر: der.",
      "Ausschnitt is masculine: der."
    ],
    [
      "___ Bild zeigt keine Zeitfolge. (Bild)",
      "Das",
      "Die",
      "Der",
      "Bild محايد: das.",
      "Bild is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Oskar hilft ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "helfen مع مؤنث داتيف: der Partnerin.",
      "Helfen takes feminine dative der Partnerin."
    ],
    [
      "Lea antwortet ___ Partner. (der)",
      "dem",
      "den",
      "der",
      "antworten مع مذكر داتيف: dem Partner.",
      "Antworten takes masculine dative dem Partner."
    ],
    [
      "Das Blatt gehört ___ Kind. (das)",
      "dem",
      "das",
      "den",
      "gehören مع محايد داتيف: dem Kind.",
      "Gehören takes neuter dative dem Kind."
    ],
    [
      "Jule erklärt es ___ Teilnehmenden. (die; Plural)",
      "den",
      "die",
      "der",
      "متلقي جمع داتيف: den Teilnehmenden.",
      "Plural indirect object takes den Teilnehmenden."
    ]
  ],
  "praesens": [
    [
      "Lea ___ die rechte Spalte zu. (zudecken)",
      "deckt",
      "deckst",
      "decken",
      "sie مفرد: deckt ... zu.",
      "Singular sie takes deckt ... zu."
    ],
    [
      "Du ___ die Endung. (unterstreichen)",
      "unterstreichst",
      "unterstreicht",
      "unterstreichen",
      "du: unterstreichst.",
      "Du takes unterstreichst."
    ],
    [
      "Wir ___ Beobachtung und Erklärung. (trennen)",
      "trennen",
      "trennt",
      "trennst",
      "wir: trennen.",
      "Wir takes trennen."
    ],
    [
      "Rami ___ die Behauptung. (prüfen)",
      "prüft",
      "prüfst",
      "prüfen",
      "er: prüft.",
      "Singular er takes prüft."
    ]
  ],
  "possessiv": [
    [
      "Lea deckt ___ Spalte zu. (Lea; die)",
      "ihre",
      "ihr",
      "ihren",
      "Lea مع مؤنث أكوزاتيف: ihre.",
      "Lea takes ihre with feminine accusative Spalte."
    ],
    [
      "Ben liest ___ Satz vor. (Ben; der)",
      "seinen",
      "sein",
      "seinem",
      "Ben مع مذكر أكوزاتيف: seinen.",
      "Ben takes seinen with masculine accusative Satz."
    ],
    [
      "Jule überarbeitet ___ Blatt. (Jule; das)",
      "ihr",
      "ihre",
      "ihren",
      "Jule مع محايد أكوزاتيف: ihr.",
      "Jule takes ihr with neuter accusative Blatt."
    ],
    [
      "Wir vergleichen ___ Beschreibungen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere.",
      "Wir takes unsere with plural accusative Beschreibungen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Fotos liegen in ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت: داتيف der Mappe.",
      "Fixed location takes dative der Mappe."
    ],
    [
      "Lea legt die Fotos in ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه الحركة: أكوزاتيف die Mappe.",
      "Destination takes accusative die Mappe."
    ],
    [
      "Das Blatt liegt auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت: داتيف dem Tisch.",
      "Fixed location takes dative dem Tisch."
    ],
    [
      "Ben legt das Blatt auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه الحركة: أكوزاتيف den Tisch.",
      "Destination takes accusative den Tisch."
    ]
  ],
  "negation": [
    [
      "Das Foto belegt ___ Ursache. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Das ist ___ vollständiger Gartenplan. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "مذكر بعد ist: kein.",
      "Masculine predicate noun takes kein."
    ],
    [
      "Wir sehen ___ Zaun. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Zaun.",
      "Masculine direct object takes keinen Zaun."
    ],
    [
      "Die Zeitfolge ist ___ erkennbar. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي erkennbar: nicht.",
      "Negate erkennbar with nicht."
    ]
  ]
};
