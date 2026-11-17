import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const obstkartenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Nektarine liegt in der Schale. (Nektarine)",
      "Die",
      "Das",
      "Der",
      "Nektarine مؤنث: die.",
      "Nektarine is feminine: die."
    ],
    [
      "___ Stachelbeere hat helle Streifen. (Stachelbeere)",
      "Die",
      "Der",
      "Das",
      "Stachelbeere مؤنث: die.",
      "Stachelbeere is feminine: die."
    ],
    [
      "___ Übergang ist klar. (Übergang)",
      "Der",
      "Die",
      "Das",
      "Übergang مذكر: der.",
      "Übergang is masculine: der."
    ],
    [
      "___ Zeichen hilft Liv. (Zeichen)",
      "Das",
      "Der",
      "Die",
      "Zeichen محايد: das.",
      "Zeichen is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Mara hilft ___ Partner. (der)",
      "dem",
      "den",
      "der",
      "helfen مع داتيف: dem Partner.",
      "Helfen takes dative dem Partner."
    ],
    [
      "Emil antwortet ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "antworten مع داتيف: der Partnerin.",
      "Antworten takes dative der Partnerin."
    ],
    [
      "Die Karte gehört zu ___ Beispiel. (das)",
      "dem",
      "das",
      "den",
      "zu مع داتيف: dem Beispiel.",
      "Zu takes dative dem Beispiel."
    ],
    [
      "Liv erklärt es ___ Teilnehmenden. (die; Plural)",
      "den",
      "die",
      "der",
      "متلقي جمع داتيف: den Teilnehmenden.",
      "Plural dative recipient: den Teilnehmenden."
    ]
  ],
  "praesens": [
    [
      "Mara ___ die Karte. (suchen)",
      "sucht",
      "suchst",
      "suchen",
      "sie مفرد: sucht.",
      "Singular sie takes sucht."
    ],
    [
      "Du ___ die Teile. (verbinden)",
      "verbindest",
      "verbindet",
      "verbinden",
      "du: verbindest.",
      "Du takes verbindest."
    ],
    [
      "Emil ___ nach dem Artikel. (fragen)",
      "fragt",
      "fragst",
      "fragen",
      "er: fragt.",
      "Singular er takes fragt."
    ],
    [
      "Wir ___ die Aufgaben. (tauschen)",
      "tauschen",
      "tauscht",
      "tauschst",
      "wir: tauschen.",
      "Wir takes tauschen."
    ]
  ],
  "possessiv": [
    [
      "Mara sucht ___ Wortkarte. (Mara; die)",
      "ihre",
      "ihr",
      "ihren",
      "Mara مع مؤنث أكوزاتيف: ihre.",
      "Mara takes ihre with feminine accusative Wortkarte."
    ],
    [
      "Adam beendet ___ Abschnitt. (Adam; der)",
      "seinen",
      "sein",
      "seinem",
      "Adam مع مذكر أكوزاتيف: seinen.",
      "Adam takes seinen with masculine accusative Abschnitt."
    ],
    [
      "Liv ergänzt ___ Zeichen. (Liv; das)",
      "ihr",
      "ihre",
      "ihren",
      "Liv مع محايد أكوزاتيف: ihr.",
      "Liv takes ihr with neuter accusative Zeichen."
    ],
    [
      "Wir vergleichen ___ Notizen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere.",
      "Wir takes unsere with plural accusative Notizen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt unter ___ Heft. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت: داتيف dem Heft.",
      "Fixed location takes dative dem Heft."
    ],
    [
      "Sami legt die Karte unter ___ Heft. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه الحركة: أكوزاتيف das Heft.",
      "Destination takes accusative das Heft."
    ],
    [
      "Das Heft liegt neben ___ Schale. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت: داتيف der Schale.",
      "Fixed location takes dative der Schale."
    ],
    [
      "Mara legt das Heft neben ___ Schale. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه الحركة: أكوزاتيف die Schale.",
      "Destination takes accusative die Schale."
    ]
  ],
  "negation": [
    [
      "Auf dem Blatt fehlt ___ Wort mehr. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "فاعل محايد: kein Wort.",
      "Neuter subject takes kein Wort."
    ],
    [
      "Das ist ___ Rückmeldung des Publikums. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "اسم مؤنث بعد ist: keine.",
      "Feminine predicate noun takes keine."
    ],
    [
      "Wir planen ___ Einkauf. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Einkauf.",
      "Masculine direct object takes keinen Einkauf."
    ],
    [
      "Liv beginnt ___ sofort. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي sofort: nicht.",
      "Negate sofort with nicht."
    ]
  ]
};
