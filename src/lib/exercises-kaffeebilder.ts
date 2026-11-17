import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const kaffeebilderGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Filtertüte hat einen hellen Rand. (Filtertüte)",
      "Die",
      "Der",
      "Das",
      "Filtertüte مؤنث: die.",
      "Filtertüte is feminine: die."
    ],
    [
      "___ Kaffeebohne ist braun. (Kaffeebohne)",
      "Die",
      "Der",
      "Das",
      "Kaffeebohne مؤنث: die.",
      "Kaffeebohne is feminine: die."
    ],
    [
      "___ Ausschnitt zeigt die Mitte. (Ausschnitt)",
      "Der",
      "Die",
      "Das",
      "Ausschnitt مذكر: der.",
      "Ausschnitt is masculine: der."
    ],
    [
      "___ Papier ist hell. (Papier)",
      "Das",
      "Der",
      "Die",
      "Papier محايد: das.",
      "Papier is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Elena hilft ___ Partner. (der)",
      "dem",
      "den",
      "der",
      "helfen مع مذكر داتيف: dem Partner.",
      "Helfen takes masculine dative dem Partner."
    ],
    [
      "Anton antwortet ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "antworten مع مؤنث داتيف: der Partnerin.",
      "Antworten takes feminine dative der Partnerin."
    ],
    [
      "Die Mappe gehört ___ Kind. (das)",
      "dem",
      "den",
      "das",
      "gehören مع محايد داتيف: dem Kind.",
      "Gehören takes neuter dative dem Kind."
    ],
    [
      "Aylin erklärt es ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "متلقي جمع داتيف: den Lernenden.",
      "Plural indirect object takes den Lernenden."
    ]
  ],
  "praesens": [
    [
      "Paul ___ beide Zeilen vor. (vorlesen)",
      "liest",
      "lesen",
      "lest",
      "er: liest ... vor.",
      "Singular er takes liest ... vor."
    ],
    [
      "Du ___ die Wörter. (trennen)",
      "trennst",
      "trennt",
      "trennen",
      "du: trennst.",
      "Du takes trennst."
    ],
    [
      "Wir ___ die Herkunft. (nennen)",
      "nennen",
      "nennt",
      "nennst",
      "wir: nennen.",
      "Wir takes nennen."
    ],
    [
      "Aylin ___ auf den Rand. (zeigen)",
      "zeigt",
      "zeigen",
      "zeigst",
      "sie مفرد: zeigt.",
      "Singular sie takes zeigt."
    ]
  ],
  "possessiv": [
    [
      "Elena ergänzt ___ Wortkarte. (Elena; die)",
      "ihre",
      "ihr",
      "ihren",
      "Elena مع مؤنث أكوزاتيف: ihre.",
      "Elena takes ihre with feminine accusative Wortkarte."
    ],
    [
      "Paul liest ___ Satz. (Paul; der)",
      "seinen",
      "sein",
      "seinem",
      "Paul مع مذكر أكوزاتيف: seinen.",
      "Paul takes seinen with masculine accusative Satz."
    ],
    [
      "Aylin zeigt ___ Foto. (Aylin; das)",
      "ihr",
      "ihre",
      "ihren",
      "Aylin مع محايد أكوزاتيف: ihr.",
      "Aylin takes ihr with neuter accusative Foto."
    ],
    [
      "Wir vergleichen ___ Ansichten. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere.",
      "Wir takes unsere with plural accusative Ansichten."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karten liegen in ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع مؤنث داتيف: der Mappe.",
      "Fixed location takes feminine dative der Mappe."
    ],
    [
      "Paul legt die Karten in ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه الحركة مع مؤنث أكوزاتيف: die Mappe.",
      "Destination takes feminine accusative die Mappe."
    ],
    [
      "Der Hinweis steht unter ___ Bild. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع محايد داتيف: dem Bild.",
      "Fixed location takes neuter dative dem Bild."
    ],
    [
      "Elena legt den Hinweis unter ___ Bild. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه الحركة مع محايد أكوزاتيف: das Bild.",
      "Destination takes neuter accusative das Bild."
    ]
  ],
  "negation": [
    [
      "Das Foto nennt ___ Temperatur. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Das ist ___ Zählergebnis. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "خبر محايد: kein.",
      "Neuter predicate noun takes kein."
    ],
    [
      "Wir sehen ___ vollständigen Rand. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Rand.",
      "Masculine direct object takes keinen Rand."
    ],
    [
      "Die Gruppe zählt die Bohnen ___. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Negate the verb with nicht."
    ]
  ]
};
