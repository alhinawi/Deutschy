import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const blaetterzweigeGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Lorbeerblatt ist auf dem Foto zu sehen. (Lorbeerblatt)",
      "Das",
      "Der",
      "Die",
      "Lorbeerblatt محايد: das.",
      "Lorbeerblatt is neuter: das."
    ],
    [
      "___ Rosmarinzweig liegt vor rotem Hintergrund. (Rosmarinzweig)",
      "Der",
      "Die",
      "Das",
      "Rosmarinzweig مذكر: der.",
      "Rosmarinzweig is masculine: der."
    ],
    [
      "___ Vierteldrehung ist notiert. (Vierteldrehung)",
      "Die",
      "Das",
      "Der",
      "Vierteldrehung مؤنث: die.",
      "Vierteldrehung is feminine: die."
    ],
    [
      "___ Bildfeld ist rechteckig. (Bildfeld)",
      "Das",
      "Der",
      "Die",
      "Bildfeld محايد: das.",
      "Bildfeld is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Oskar zeigt ___ Partnerin den Wortteil. (die)",
      "der",
      "die",
      "den",
      "مفعول غير مباشر مؤنث داتيف: der Partnerin.",
      "Feminine indirect object takes der Partnerin."
    ],
    [
      "Die Notiz hilft ___ Lerner. (der)",
      "dem",
      "den",
      "der",
      "helfen بياخد داتيف: dem Lerner.",
      "Helfen takes dative: dem Lerner."
    ],
    [
      "Greta widerspricht ___ Kollegen. (der)",
      "dem",
      "den",
      "der",
      "widersprechen بياخد داتيف: dem Kollegen.",
      "Widersprechen takes dative: dem Kollegen."
    ],
    [
      "Die Fotos gehören ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "gehören بياخد داتيف وجمع: den Lernenden.",
      "Gehören takes dative; plural den Lernenden."
    ]
  ],
  "praesens": [
    [
      "Nina ___ den letzten Wortteil. (lesen)",
      "liest",
      "lese",
      "lest",
      "sie مفرد: liest.",
      "Singular sie takes liest."
    ],
    [
      "Du ___ auf meine Antwort. (warten)",
      "wartest",
      "wartet",
      "warten",
      "du: wartest.",
      "Du takes wartest."
    ],
    [
      "Elif ___ die Lösung später vor. (vorlesen)",
      "liest",
      "lese",
      "lest",
      "sie مفرد: liest ... vor.",
      "Singular sie takes liest ... vor."
    ],
    [
      "Wir ___ die Bildnotiz. (prüfen)",
      "prüfen",
      "prüft",
      "prüfst",
      "wir: prüfen.",
      "Wir takes prüfen."
    ]
  ],
  "possessiv": [
    [
      "Ben erklärt ___ Einwand. (Ben; der)",
      "seinen",
      "sein",
      "seine",
      "Ben مع مذكر أكوزاتيف: seinen.",
      "Ben takes seinen with masculine accusative Einwand."
    ],
    [
      "Elif ändert ___ Notiz. (Elif; die)",
      "ihre",
      "ihr",
      "ihren",
      "Elif مع مؤنث أكوزاتيف: ihre.",
      "Elif takes ihre with feminine accusative Notiz."
    ],
    [
      "Wir drehen ___ Foto. (wir; das)",
      "unser",
      "unsere",
      "unseren",
      "wir مع محايد أكوزاتيف: unser.",
      "Wir takes unser with neuter accusative Foto."
    ],
    [
      "Nina liest ___ Karten vor. (Nina; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "Nina مع جمع أكوزاتيف: ihre.",
      "Nina takes ihre with plural accusative Karten."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Lösung steht hinter ___ Abdeckung. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع مؤنث داتيف: der Abdeckung.",
      "Fixed location takes feminine dative der Abdeckung."
    ],
    [
      "Oskar legt die Lösung hinter ___ Abdeckung. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه الحركة مع مؤنث أكوزاتيف: die Abdeckung.",
      "Destination takes feminine accusative die Abdeckung."
    ],
    [
      "Die Karten liegen neben ___ Blatt. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع محايد داتيف: dem Blatt.",
      "Fixed location takes neuter dative dem Blatt."
    ],
    [
      "Nina legt die Karten neben ___ Blatt. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه الحركة مع محايد أكوزاتيف: das Blatt.",
      "Destination takes neuter accusative das Blatt."
    ]
  ],
  "negation": [
    [
      "Das Foto beweist ___ Wachstumsrichtung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Das ist ___ neuer Naturfund. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "خبر مذكر: kein.",
      "Masculine predicate noun takes kein."
    ],
    [
      "Milan ergänzt ___ künstlichen Rand. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen.",
      "Masculine direct object takes keinen."
    ],
    [
      "Die Wortliste ersetzt den eigenen Versuch ___. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Negate the verb with nicht."
    ]
  ]
};
