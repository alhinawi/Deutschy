import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const backablageGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Messbecher steht im Regal. (Messbecher)",
      "Der",
      "Die",
      "Das",
      "Messbecher مذكر: der.",
      "Messbecher is masculine: der."
    ],
    [
      "___ Backpinsel liegt auf dem Tablett. (Backpinsel)",
      "Der",
      "Die",
      "Das",
      "Backpinsel مذكر: der.",
      "Backpinsel is masculine: der."
    ],
    [
      "___ Mengenangabe gehört zum Rezept. (Mengenangabe)",
      "Die",
      "Der",
      "Das",
      "Mengenangabe مؤنث: die.",
      "Mengenangabe is feminine: die."
    ],
    [
      "___ Fach ist frei. (Fach)",
      "Das",
      "Der",
      "Die",
      "Fach محايد: das.",
      "Fach is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Nils zeigt ___ das Regal. (sie; Singular)",
      "ihr",
      "sie",
      "ihre",
      "المستلم داتيف؛ sie مفرد: ihr.",
      "The recipient is dative; singular sie becomes ihr."
    ],
    [
      "Der Backpinsel gehört ___. (er)",
      "ihm",
      "ihn",
      "sein",
      "gehören داتيف؛ er: ihm.",
      "Gehören takes dative; er becomes ihm."
    ],
    [
      "Ada gibt ___ den Messbecher zurück. (ich)",
      "mir",
      "mich",
      "mein",
      "المستلم داتيف؛ ich: mir.",
      "The recipient is dative; ich becomes mir."
    ],
    [
      "Enna erklärt ___ die Notiz. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ]
  ],
  "praesens": [
    [
      "Mira ___ den Messbecher. (suchen)",
      "sucht",
      "suchst",
      "suchen",
      "sie مفرد مع suchen: sucht.",
      "Singular sie takes sucht."
    ],
    [
      "Du ___ den Pinsel. (nehmen)",
      "nimmst",
      "nehmt",
      "nehmen",
      "du مع nehmen: nimmst.",
      "Du takes nimmst."
    ],
    [
      "Karim ___ kurz vorbei. (kommen)",
      "kommt",
      "kommst",
      "kommen",
      "er مع kommen: kommt.",
      "Er takes kommt."
    ],
    [
      "Wir ___ die Zutaten. (prüfen)",
      "prüfen",
      "prüft",
      "prüfst",
      "wir مع prüfen: prüfen.",
      "Wir takes prüfen."
    ]
  ],
  "trennbare-verben": [
    [
      "Mira nimmt den Messbecher ___. (herausnehmen)",
      "heraus",
      "zu",
      "ein",
      "herausnehmen بيتفصل: nimmt ... heraus.",
      "Herausnehmen separates: nimmt ... heraus."
    ],
    [
      "Ada gibt den Pinsel ___. (zurückgeben)",
      "zurück",
      "an",
      "zu",
      "zurückgeben بيتفصل: gibt ... zurück.",
      "Zurückgeben separates: gibt ... zurück."
    ],
    [
      "Paul geht noch nicht ___. (losgehen)",
      "los",
      "ein",
      "vor",
      "losgehen بيتفصل: geht ... los.",
      "Losgehen separates: geht ... los."
    ],
    [
      "Karim nimmt beide Gegenstände ___. (mitnehmen)",
      "mit",
      "vor",
      "zu",
      "mitnehmen بيتفصل: nimmt ... mit.",
      "Mitnehmen separates: nimmt ... mit."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Messbecher steht hinter ___ Schüssel. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت بعد hinter: داتيف، der Schüssel.",
      "Fixed location after hinter takes dative: der Schüssel."
    ],
    [
      "Mira stellt ihn auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "des",
      "اتجاه لمكان جديد: أكوزاتيف، den Tisch.",
      "Destination takes accusative: den Tisch."
    ],
    [
      "Der Pinsel liegt auf ___ Tablett. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد auf: داتيف، dem Tablett.",
      "Fixed location after auf takes dative: dem Tablett."
    ],
    [
      "Das Fach liegt neben ___ Backformen. (Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت وداتيف جمع: den Backformen.",
      "Fixed location takes plural dative: den Backformen."
    ]
  ],
  "negation": [
    [
      "Das ist ___ aktuelle Einkaufsliste. (eine)",
      "keine",
      "kein",
      "keinen",
      "Einkaufsliste مؤنث نوميناتيف: keine.",
      "Einkaufsliste is feminine nominative: keine."
    ],
    [
      "Sie kaufen ___ zweiten Backpinsel. (einen)",
      "keinen",
      "kein",
      "keine",
      "Backpinsel مذكر أكوزاتيف: keinen.",
      "Backpinsel is masculine accusative: keinen."
    ],
    [
      "Der Messbecher ist ___ voll. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الصفة هنا بـ nicht.",
      "Use nicht to negate the adjective here."
    ],
    [
      "Das ist ___ Kaufauftrag. (ein)",
      "kein",
      "keine",
      "keinen",
      "Kaufauftrag مذكر نوميناتيف: kein.",
      "Kaufauftrag is masculine nominative: kein."
    ]
  ]
};
