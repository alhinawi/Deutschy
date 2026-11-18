import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const papiermodelleGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Papierflieger liegt auf dem Foto. (Papierflieger)",
      "Der",
      "Die",
      "Das",
      "Papierflieger مذكر: der.",
      "Papierflieger is masculine: der."
    ],
    [
      "___ Papierschiffchen ist orange. (Papierschiffchen)",
      "Das",
      "Der",
      "Die",
      "Papierschiffchen محايد: das.",
      "Papierschiffchen is neuter: das."
    ],
    [
      "___ Faltlinie ist sichtbar. (Faltlinie)",
      "Die",
      "Das",
      "Der",
      "Faltlinie مؤنث: die.",
      "Faltlinie is feminine: die."
    ],
    [
      "___ Modell bleibt auf dem Tisch. (Modell)",
      "Das",
      "Die",
      "Der",
      "Modell محايد: das.",
      "Modell is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Die Bildnotiz hilft ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "helfen بياخد داتيف ومؤنث: der Partnerin.",
      "Helfen takes dative; feminine der Partnerin."
    ],
    [
      "Das Modell gehört ___ Lerner. (der)",
      "dem",
      "den",
      "der",
      "gehören بياخد داتيف: dem Lerner.",
      "Gehören takes dative: dem Lerner."
    ],
    [
      "Mia zeigt ___ Kollegen das Foto. (der)",
      "dem",
      "den",
      "der",
      "مفعول غير مباشر مذكر: dem Kollegen.",
      "Masculine indirect object takes dem Kollegen."
    ],
    [
      "Die Liste hilft ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "helfen بياخد داتيف وجمع: den Lernenden.",
      "Helfen takes dative; plural den Lernenden."
    ]
  ],
  "praesens": [
    [
      "Mia ___ die Einzahl. (nennen)",
      "nennt",
      "nenne",
      "nennen",
      "sie مفرد: nennt.",
      "Singular sie takes nennt."
    ],
    [
      "Du ___ die gleiche Form. (hören)",
      "hörst",
      "hört",
      "hören",
      "du: hörst.",
      "Du takes hörst."
    ],
    [
      "Paul ___ den Artikel. (vergleichen)",
      "vergleicht",
      "vergleichen",
      "vergleichst",
      "er مفرد: vergleicht.",
      "Singular er takes vergleicht."
    ],
    [
      "Wir ___ keine Leistung. (messen)",
      "messen",
      "misst",
      "messt",
      "wir: messen.",
      "Wir takes messen."
    ]
  ],
  "possessiv": [
    [
      "Paul liest ___ Satz vor. (Paul; der)",
      "seinen",
      "sein",
      "seine",
      "Paul مع مذكر أكوزاتيف: seinen.",
      "Paul takes seinen with masculine accusative Satz."
    ],
    [
      "Mia prüft ___ Liste. (Mia; die)",
      "ihre",
      "ihr",
      "ihren",
      "Mia مع مؤنث أكوزاتيف: ihre.",
      "Mia takes ihre with feminine accusative Liste."
    ],
    [
      "Wir betrachten ___ Modelle. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere.",
      "Wir takes unsere with plural accusative Modelle."
    ],
    [
      "Lena beschreibt ___ Foto. (Lena; das)",
      "ihr",
      "ihre",
      "ihren",
      "Lena مع محايد أكوزاتيف: ihr.",
      "Lena takes ihr with neuter accusative Foto."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Foto liegt unter ___ Karte. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع مؤنث داتيف: der Karte.",
      "Fixed location takes feminine dative der Karte."
    ],
    [
      "Mia legt das Foto unter ___ Karte. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع مؤنث أكوزاتيف: die Karte.",
      "Destination takes feminine accusative die Karte."
    ],
    [
      "Das Modell steht auf ___ Brett. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع محايد داتيف: dem Brett.",
      "Fixed location takes neuter dative dem Brett."
    ],
    [
      "Paul stellt das Modell auf ___ Brett. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه مع محايد أكوزاتيف: das Brett.",
      "Destination takes neuter accusative das Brett."
    ]
  ],
  "negation": [
    [
      "Das Foto zeigt ___ Flugleistung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Das ist ___ echter Flugversuch. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "خبر مذكر: kein.",
      "Masculine predicate noun takes kein."
    ],
    [
      "Paul findet ___ zusätzlichen Buchstaben. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen.",
      "Masculine direct object takes keinen."
    ],
    [
      "Die Modelle bewegen sich ___. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Negate the verb with nicht."
    ]
  ]
};
