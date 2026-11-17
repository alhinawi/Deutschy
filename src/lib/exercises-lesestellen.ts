import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const lesestellenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Lesezeichen ist blau. (Lesezeichen)",
      "Das",
      "Der",
      "Die",
      "Lesezeichen محايد: das.",
      "Lesezeichen is neuter: das."
    ],
    [
      "___ Scharnier ist auf dem Foto. (Scharnier)",
      "Das",
      "Die",
      "Der",
      "Scharnier محايد: das.",
      "Scharnier is neuter: das."
    ],
    [
      "___ Abschnitt ist kurz. (Abschnitt)",
      "Der",
      "Die",
      "Das",
      "Abschnitt مذكر: der.",
      "Abschnitt is masculine: der."
    ],
    [
      "___ Überschrift bleibt getrennt. (Überschrift)",
      "Die",
      "Der",
      "Das",
      "Überschrift مؤنث: die.",
      "Überschrift is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Jule zeigt ___ Bruder das Bild. (der)",
      "dem",
      "den",
      "der",
      "المتلقي داتيف: dem Bruder.",
      "The recipient takes dative: dem Bruder."
    ],
    [
      "Nora hilft ___ Schwester. (die)",
      "der",
      "die",
      "den",
      "helfen بياخد داتيف: der Schwester.",
      "Helfen takes dative: der Schwester."
    ],
    [
      "Das Heft gehört ___ Freund. (der)",
      "dem",
      "den",
      "der",
      "gehören بياخد داتيف: dem Freund.",
      "Gehören takes dative: dem Freund."
    ],
    [
      "Tom antwortet ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "antworten بياخد داتيف: der Partnerin.",
      "Antworten takes dative: der Partnerin."
    ]
  ],
  "praesens": [
    [
      "Jule ___ den Abschnitt zu Ende. (lesen)",
      "liest",
      "lese",
      "lesen",
      "sie مفرد: liest.",
      "Singular sie takes liest."
    ],
    [
      "Du ___ den Artikel. (ergänzen)",
      "ergänzt",
      "ergänzen",
      "ergänze",
      "du مع ergänzen: ergänzt.",
      "Du takes ergänzt."
    ],
    [
      "Karim ___ eine Tür. (zeichnen)",
      "zeichnet",
      "zeichnen",
      "zeichnest",
      "er مفرد: zeichnet.",
      "Singular er takes zeichnet."
    ],
    [
      "Wir ___ die Überschriften bei. (beibehalten)",
      "behalten",
      "behält",
      "behaltet",
      "wir مع beibehalten: behalten ... bei.",
      "Wir takes behalten ... bei."
    ]
  ],
  "possessiv": [
    [
      "Jule schließt ___ Wortheft. (Jule; das)",
      "ihr",
      "ihren",
      "ihre",
      "ملكية Jule مع محايد أكوزاتيف: ihr Wortheft.",
      "Jule takes ihr with neuter accusative Wortheft."
    ],
    [
      "Karim nimmt ___ Zettel. (Karim; der)",
      "seinen",
      "sein",
      "seine",
      "ملكية Karim مع مذكر أكوزاتيف: seinen Zettel.",
      "Karim takes seinen with masculine accusative Zettel."
    ],
    [
      "Seda ordnet ___ Beispiele. (Seda; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "ملكية Seda مع جمع أكوزاتيف: ihre Beispiele.",
      "Seda takes ihre with plural accusative Beispiele."
    ],
    [
      "Wir ergänzen ___ Liste. (wir; die)",
      "unsere",
      "unser",
      "unseren",
      "ملكية wir مع مؤنث أكوزاتيف: unsere Liste.",
      "Wir takes unsere with feminine accusative Liste."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Lesezeichen liegt zwischen ___ Seiten. (die; Plural; Wo?)",
      "den",
      "die",
      "der",
      "جمع داتيف مع مكان ثابت: den Seiten.",
      "Fixed location takes plural dative: den Seiten."
    ],
    [
      "Jule legt das Lesezeichen zwischen ___ Seiten. (die; Plural; Wohin?)",
      "die",
      "den",
      "der",
      "اتجاه مع zwischen: جمع أكوزاتيف die Seiten.",
      "Destination with zwischen takes plural accusative: die Seiten."
    ],
    [
      "Das Heft liegt auf ___ Schreibtisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع auf: داتيف dem.",
      "Fixed location with auf takes dative: dem."
    ],
    [
      "Sie legt das Heft auf ___ Schreibtisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع auf: أكوزاتيف den.",
      "Destination with auf takes accusative: den."
    ]
  ],
  "negation": [
    [
      "Jule liest heute ___ ganzes Buch. (ein)",
      "kein",
      "keinen",
      "keine",
      "Buch محايد أكوزاتيف: kein ganzes Buch.",
      "Buch is neuter accusative: kein ganzes Buch."
    ],
    [
      "Sie ändern die Browserdaten ___. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل هنا: nicht.",
      "Use nicht to negate the action here."
    ],
    [
      "Das Foto ist ___ Funktionstest. (ein)",
      "kein",
      "keinen",
      "keine",
      "Funktionstest مذكر نوميناتيف: kein.",
      "Funktionstest is masculine nominative: kein."
    ],
    [
      "Nora nennt ___ feste Uhrzeit. (eine)",
      "keine",
      "kein",
      "keinen",
      "Uhrzeit مؤنث أكوزاتيف: keine.",
      "Uhrzeit is feminine accusative: keine."
    ]
  ]
};
