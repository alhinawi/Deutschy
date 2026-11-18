import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const schachfigurenartenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Schachbauer steht allein. (Schachbauer)",
      "Der",
      "Die",
      "Das",
      "Schachbauer مذكر: der.",
      "Schachbauer is masculine: der."
    ],
    [
      "___ Schachspringer hat einen Pferdekopf. (Schachspringer)",
      "Der",
      "Das",
      "Die",
      "Schachspringer مذكر: der.",
      "Schachspringer is masculine: der."
    ],
    [
      "___ Kopf ist rund. (Kopf)",
      "Der",
      "Die",
      "Das",
      "Kopf مذكر: der.",
      "Kopf is masculine: der."
    ],
    [
      "___ Figur ist weiß. (Figur)",
      "Die",
      "Das",
      "Der",
      "Figur مؤنث: die.",
      "Figur is feminine: die."
    ]
  ],
  "akkusativ": [
    [
      "Mia sieht ___ Schachbauern. (der)",
      "den",
      "der",
      "dem",
      "مفعول مذكر: den Schachbauern، والاسم ضعيف بياخد n.",
      "Masculine direct object: den Schachbauern; weak noun adds n."
    ],
    [
      "Paul beschreibt ___ Schachspringer. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den.",
      "Masculine direct object takes den."
    ],
    [
      "Lena prüft ___ Zuordnung. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die.",
      "Feminine direct object takes die."
    ],
    [
      "Farid betrachtet ___ Foto. (das)",
      "das",
      "dem",
      "der",
      "مفعول محايد: das.",
      "Neuter direct object takes das."
    ]
  ],
  "praesens": [
    [
      "Mia ___ den Namen. (lesen)",
      "liest",
      "lesen",
      "lese",
      "sie مفرد: liest.",
      "Singular sie takes liest."
    ],
    [
      "Du ___ den Kopf. (beschreiben)",
      "beschreibst",
      "beschreibt",
      "beschreiben",
      "du: beschreibst.",
      "Du takes beschreibst."
    ],
    [
      "Paul ___ seine Antwort. (verbessern)",
      "verbessert",
      "verbessern",
      "verbesserst",
      "er مفرد: verbessert.",
      "Singular er takes verbessert."
    ],
    [
      "Wir ___ keine Partie. (analysieren)",
      "analysieren",
      "analysiert",
      "analysierst",
      "wir: analysieren.",
      "Wir takes analysieren."
    ]
  ],
  "possessiv": [
    [
      "Paul prüft ___ Antwort. (Paul; die)",
      "seine",
      "sein",
      "seinen",
      "Paul مع مؤنث أكوزاتيف: seine.",
      "Paul takes seine with feminine accusative Antwort."
    ],
    [
      "Mia liest ___ Beispielsatz. (Mia; der)",
      "ihren",
      "ihr",
      "ihre",
      "Mia مع مذكر أكوزاتيف: ihren.",
      "Mia takes ihren with masculine accusative Beispielsatz."
    ],
    [
      "Wir vergleichen ___ Karten. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere.",
      "Wir takes unsere with plural accusative Karten."
    ],
    [
      "Lena prüft ___ Bild. (Lena; das)",
      "ihr",
      "ihre",
      "ihren",
      "Lena مع محايد أكوزاتيف: ihr.",
      "Lena takes ihr with neuter accusative Bild."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt neben ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع محايد داتيف: dem Foto.",
      "Fixed location takes neuter dative dem Foto."
    ],
    [
      "Mia legt die Karte neben ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه مع محايد أكوزاتيف: das Foto.",
      "Destination takes neuter accusative das Foto."
    ],
    [
      "Die Figur steht vor ___ Wand. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع مؤنث داتيف: der Wand.",
      "Fixed location takes feminine dative der Wand."
    ],
    [
      "Paul stellt die Figur vor ___ Wand. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع مؤنث أكوزاتيف: die Wand.",
      "Destination takes feminine accusative die Wand."
    ]
  ],
  "negation": [
    [
      "Das Foto zeigt ___ gemeinsame Brettstellung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Das ist ___ Beweis für einen Angriff. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "خبر مذكر: kein.",
      "Masculine predicate noun takes kein."
    ],
    [
      "Nils ergänzt ___ erfundenen Maßstab. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen.",
      "Masculine direct object takes keinen."
    ],
    [
      "Die beiden spielen ___. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Negate the verb with nicht."
    ]
  ]
};
