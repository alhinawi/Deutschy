import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const teeregalGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Teebeutel liegt auf dem Teller. (Teebeutel)",
      "Der",
      "Die",
      "Das",
      "Teebeutel مذكر: der.",
      "Teebeutel is masculine: der."
    ],
    [
      "___ Tee-Ei ist aus Metall. (Tee-Ei)",
      "Das",
      "Der",
      "Die",
      "Tee-Ei محايد: das.",
      "Tee-Ei is neuter: das."
    ],
    [
      "___ Kette ist kurz. (Kette)",
      "Die",
      "Der",
      "Das",
      "Kette مؤنث: die.",
      "Kette is feminine: die."
    ],
    [
      "___ Vorrat gehört Runa. (Vorrat)",
      "Der",
      "Die",
      "Das",
      "Vorrat مذكر: der.",
      "Vorrat is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Jonas zeigt ___ die Dose. (sie; Singular)",
      "ihr",
      "sie",
      "ihre",
      "المستلم داتيف؛ sie مفرد: ihr.",
      "The recipient is dative; singular sie becomes ihr."
    ],
    [
      "Das Tee-Ei gehört ___. (ich)",
      "mir",
      "mich",
      "mein",
      "gehören داتيف؛ ich: mir.",
      "Gehören takes dative; ich becomes mir."
    ],
    [
      "Pia erklärt ___ den Unterschied. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ],
    [
      "Runa gibt ___ das Tee-Ei zurück. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er: ihm.",
      "The recipient is dative; er becomes ihm."
    ]
  ],
  "praesens": [
    [
      "Ella ___ einen Teebeutel. (suchen)",
      "sucht",
      "suchst",
      "suchen",
      "sie مفرد مع suchen: sucht.",
      "Singular sie takes sucht."
    ],
    [
      "Du ___ die Packungsnamen. (lesen)",
      "liest",
      "lest",
      "lesen",
      "du مع lesen: liest.",
      "Du takes liest."
    ],
    [
      "David ___ Runa das Tee-Ei. (leihen)",
      "leiht",
      "leihst",
      "leihen",
      "er مع leihen: leiht.",
      "Er takes leiht."
    ],
    [
      "Wir ___ nach dem Gegenstand. (fragen)",
      "fragen",
      "fragt",
      "fragst",
      "wir مع fragen: fragen.",
      "Wir takes fragen."
    ]
  ],
  "trennbare-verben": [
    [
      "Ella nimmt einen Beutel ___. (herausnehmen)",
      "heraus",
      "zu",
      "ein",
      "herausnehmen بيتفصل: nimmt ... heraus.",
      "Herausnehmen separates: nimmt ... heraus."
    ],
    [
      "Runa bringt das Tee-Ei ___. (zurückbringen)",
      "zurück",
      "an",
      "zu",
      "zurückbringen بيتفصل: bringt ... zurück.",
      "Zurückbringen separates: bringt ... zurück."
    ],
    [
      "Jonas macht die Dose ___. (zumachen)",
      "zu",
      "mit",
      "vor",
      "zumachen بيتفصل: macht ... zu.",
      "Zumachen separates: macht ... zu."
    ],
    [
      "Ella liest ihr Buch ___. (weiterlesen)",
      "weiter",
      "vor",
      "zu",
      "weiterlesen بيتفصل: liest ... weiter.",
      "Weiterlesen separates: liest ... weiter."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Tee-Ei liegt neben ___ Tasse. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت بعد neben: داتيف، der Tasse.",
      "Fixed location after neben takes dative: der Tasse."
    ],
    [
      "Ella legt den Beutel auf ___ Teller. (der; Wohin?)",
      "den",
      "dem",
      "des",
      "اتجاه لمكان جديد: أكوزاتيف، den Teller.",
      "Destination takes accusative: den Teller."
    ],
    [
      "Die Beutel liegen in ___ Dose. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت بعد in: داتيف، der Dose.",
      "Fixed location after in takes dative: der Dose."
    ],
    [
      "Die Schachtel steht bei ___ Tassen. (Plural)",
      "den",
      "die",
      "der",
      "bei داتيف جمع: den Tassen.",
      "Bei takes plural dative: den Tassen."
    ]
  ],
  "negation": [
    [
      "Das ist ___ Tee-Ei. (ein)",
      "kein",
      "keine",
      "keinen",
      "Tee-Ei محايد نوميناتيف: kein.",
      "Tee-Ei is neuter nominative: kein."
    ],
    [
      "David nimmt ___ Teebeutel mit. (einen)",
      "keinen",
      "kein",
      "keine",
      "Teebeutel مذكر أكوزاتيف: keinen.",
      "Teebeutel is masculine accusative: keinen."
    ],
    [
      "Die Dose ist ___ leer. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الصفة هنا بـ nicht.",
      "Use nicht to negate the adjective here."
    ],
    [
      "Das ist ___ Schenkung. (eine)",
      "keine",
      "kein",
      "keinen",
      "Schenkung مؤنث نوميناتيف: keine.",
      "Schenkung is feminine nominative: keine."
    ]
  ]
};
