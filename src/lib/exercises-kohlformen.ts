import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const kohlformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Kohlkopf ist grün. (Kohlkopf)",
      "Der",
      "Die",
      "Das",
      "Kohlkopf مذكر: der.",
      "Kohlkopf is masculine: der."
    ],
    [
      "___ Rosenkohl liegt auf dem Foto. (Rosenkohl)",
      "Der",
      "Das",
      "Die",
      "Rosenkohl مذكر: der.",
      "Rosenkohl is masculine: der."
    ],
    [
      "___ Portion ist ein Sprachbeispiel. (Portion)",
      "Die",
      "Der",
      "Das",
      "Portion مؤنث: die.",
      "Portion is feminine: die."
    ],
    [
      "___ Bildfeld bleibt gleich groß. (Bildfeld)",
      "Das",
      "Die",
      "Der",
      "Bildfeld محايد: das.",
      "Bildfeld is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Die Erklärung hilft ___ Bruder. (der)",
      "dem",
      "den",
      "der",
      "helfen بياخد داتيف: dem Bruder.",
      "Helfen takes dative: dem Bruder."
    ],
    [
      "Lea spricht mit ___ Lernerin. (die)",
      "der",
      "die",
      "den",
      "mit بياخد داتيف: der Lernerin.",
      "Mit takes dative: der Lernerin."
    ],
    [
      "Wir üben mit ___ Beispielen. (die; Plural)",
      "den",
      "die",
      "der",
      "mit بياخد داتيف وجمع: den Beispielen.",
      "Mit takes dative; plural den Beispielen."
    ],
    [
      "Die Notiz gehört zu ___ Foto. (das)",
      "dem",
      "das",
      "den",
      "zu بياخد داتيف: dem Foto.",
      "Zu takes dative: dem Foto."
    ]
  ],
  "praesens": [
    [
      "Ben ___ die Zeile frei. (lassen)",
      "lässt",
      "lassen",
      "lasst",
      "er مفرد مع lassen: lässt.",
      "Singular er with lassen takes lässt."
    ],
    [
      "Du ___ das Nomen. (markieren)",
      "markierst",
      "markiert",
      "markieren",
      "du: markierst.",
      "Du takes markierst."
    ],
    [
      "Wir ___ nur Beispielsätze. (vergleichen)",
      "vergleichen",
      "vergleicht",
      "vergleiche",
      "wir: vergleichen.",
      "Wir takes vergleichen."
    ],
    [
      "Ihr ___ keine Größenangabe. (erfinden)",
      "erfindet",
      "erfinden",
      "erfinde",
      "ihr: erfindet.",
      "Ihr takes erfindet."
    ]
  ],
  "possessiv": [
    [
      "Ben ergänzt ___ Karte. (Ben; die)",
      "seine",
      "sein",
      "seinen",
      "Ben مع مؤنث أكوزاتيف: seine.",
      "Ben takes seine with feminine accusative Karte."
    ],
    [
      "Lea liest ___ Eintrag. (Lea; der)",
      "ihren",
      "ihr",
      "ihre",
      "Lea مع مذكر أكوزاتيف: ihren.",
      "Lea takes ihren with masculine accusative Eintrag."
    ],
    [
      "Wir prüfen ___ Arbeitsblatt. (wir; das)",
      "unser",
      "unsere",
      "unseren",
      "wir مع محايد أكوزاتيف: unser.",
      "Wir takes unser with neuter accusative Arbeitsblatt."
    ],
    [
      "Nina ordnet ___ Fotos. (Nina; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "Nina مع جمع أكوزاتيف: ihre.",
      "Nina takes ihre with plural accusative Fotos."
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
      "Lea legt das Foto unter ___ Karte. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع مؤنث أكوزاتيف: die Karte.",
      "Destination takes feminine accusative die Karte."
    ],
    [
      "Die Notiz steht neben ___ Beispiel. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع محايد داتيف: dem Beispiel.",
      "Fixed location takes neuter dative dem Beispiel."
    ],
    [
      "Ben schreibt die Notiz neben ___ Beispiel. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه مع محايد أكوزاتيف: das Beispiel.",
      "Destination takes neuter accusative das Beispiel."
    ]
  ],
  "negation": [
    [
      "Das Foto enthält ___ Maßstab. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen.",
      "Masculine direct object takes keinen."
    ],
    [
      "Das ist ___ Größenmessung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "خبر مؤنث: keine.",
      "Feminine predicate noun takes keine."
    ],
    [
      "Nina nennt ___ erfundenen Maße. (kein; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine.",
      "Plural direct object takes keine."
    ],
    [
      "Sie wiegen das Gemüse ___. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Negate the verb with nicht."
    ]
  ]
};
