import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const klangwoerterGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Schlägel liegt auf der Decke. (Schlägel)",
      "Der",
      "Die",
      "Das",
      "Schlägel مذكر: der.",
      "Schlägel is masculine: der."
    ],
    [
      "___ Kastagnette liegt in der Kiste. (Kastagnette)",
      "Die",
      "Der",
      "Das",
      "Kastagnette مؤنث: die.",
      "Kastagnette is feminine: die."
    ],
    [
      "___ Ablauf ist notiert. (Ablauf)",
      "Der",
      "Die",
      "Das",
      "Ablauf مذكر: der.",
      "Ablauf is masculine: der."
    ],
    [
      "___ Schale gehört dazu. (Schale)",
      "Die",
      "Der",
      "Das",
      "Schale مؤنث: die.",
      "Schale is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Emil hilft ___ Freundin. (die)",
      "der",
      "die",
      "den",
      "helfen بياخد داتيف: der Freundin.",
      "Helfen takes dative: der Freundin."
    ],
    [
      "Mara zeigt ___ Freund die Kiste. (der)",
      "dem",
      "den",
      "der",
      "المتلقي داتيف: dem Freund.",
      "The recipient takes dative: dem Freund."
    ],
    [
      "Die Schlägel gehören ___ Bruder. (der)",
      "dem",
      "den",
      "der",
      "gehören بياخد داتيف: dem Bruder.",
      "Gehören takes dative: dem Bruder."
    ],
    [
      "Luis antwortet ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "antworten بياخد داتيف: der Partnerin.",
      "Antworten takes dative: der Partnerin."
    ]
  ],
  "praesens": [
    [
      "Mara ___ auf die Schlägel. (zeigen)",
      "zeigt",
      "zeigen",
      "zeigst",
      "sie مفرد: zeigt.",
      "Singular sie takes zeigt."
    ],
    [
      "Du ___ die Wörter vor. (lesen)",
      "liest",
      "lesen",
      "lese",
      "du مع lesen: liest.",
      "Du takes liest with lesen."
    ],
    [
      "Luis ___ die neue Zeile. (ergänzen)",
      "ergänzt",
      "ergänzen",
      "ergänze",
      "er مفرد: ergänzt.",
      "Singular er takes ergänzt."
    ],
    [
      "Wir ___ heute nichts aus. (ausprobieren)",
      "probieren",
      "probiert",
      "probiere",
      "wir: probieren ... aus.",
      "Wir takes probieren ... aus."
    ]
  ],
  "possessiv": [
    [
      "Mara schließt ___ Heft. (Mara; das)",
      "ihr",
      "ihren",
      "ihre",
      "ملكية Mara مع محايد أكوزاتيف: ihr Heft.",
      "Mara takes ihr with neuter accusative Heft."
    ],
    [
      "Luis nimmt ___ Schlägel. (Luis; Plural)",
      "seine",
      "sein",
      "seinen",
      "ملكية Luis مع جمع أكوزاتيف: seine Schlägel.",
      "Luis takes seine with plural accusative Schlägel."
    ],
    [
      "Jana öffnet ___ Stoffbeutel. (Jana; der)",
      "ihren",
      "ihr",
      "ihre",
      "ملكية Jana مع مذكر أكوزاتيف: ihren Stoffbeutel.",
      "Jana takes ihren with masculine accusative Stoffbeutel."
    ],
    [
      "Wir behalten ___ Planung. (wir; die)",
      "unsere",
      "unser",
      "unseren",
      "ملكية wir مع مؤنث أكوزاتيف: unsere Planung.",
      "Wir takes unsere with feminine accusative Planung."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Kastagnette liegt in ___ Kiste. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative der."
    ],
    [
      "Mara legt die Kastagnette in ___ Kiste. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative die."
    ],
    [
      "Die Schlägel liegen auf ___ Decke. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع auf: داتيف der.",
      "Fixed location with auf takes dative der."
    ],
    [
      "Emil legt die Schlägel auf ___ Decke. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع auf: أكوزاتيف die.",
      "Destination with auf takes accusative die."
    ]
  ],
  "negation": [
    [
      "Heute spielen sie ___ Musik. (eine)",
      "keine",
      "kein",
      "keinen",
      "Musik مؤنث أكوزاتيف: keine.",
      "Musik is feminine accusative: keine."
    ],
    [
      "Sie löschen die Planung ___. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل هنا: nicht.",
      "Use nicht to negate the action here."
    ],
    [
      "Die Kartei ist ___ Prüfbericht. (ein)",
      "kein",
      "keinen",
      "keine",
      "Prüfbericht مذكر نوميناتيف: kein.",
      "Prüfbericht is masculine nominative: kein."
    ],
    [
      "Sie haben ___ Aufnahme gemacht. (eine)",
      "keine",
      "kein",
      "keinen",
      "Aufnahme مؤنث أكوزاتيف: keine.",
      "Aufnahme is feminine accusative: keine."
    ]
  ]
};
