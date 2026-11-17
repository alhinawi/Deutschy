import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const pinnwoerterGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Reißzwecke hat eine Spitze. (Reißzwecke)",
      "Die",
      "Der",
      "Das",
      "Reißzwecke مؤنث: die.",
      "Reißzwecke is feminine: die."
    ],
    [
      "___ Pinnwand hat einen hellen Rahmen. (Pinnwand)",
      "Die",
      "Der",
      "Das",
      "Pinnwand مؤنث: die.",
      "Pinnwand is feminine: die."
    ],
    [
      "___ Vorschlag steht auf dem Zettel. (Vorschlag)",
      "Der",
      "Die",
      "Das",
      "Vorschlag مذكر: der.",
      "Vorschlag is masculine: der."
    ],
    [
      "___ Kalenderfeld bleibt frei. (Kalenderfeld)",
      "Das",
      "Der",
      "Die",
      "Kalenderfeld محايد: das.",
      "Kalenderfeld is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Paul antwortet ___ Freundin. (die)",
      "der",
      "die",
      "den",
      "antworten بياخد داتيف: der Freundin.",
      "Antworten takes dative: der Freundin."
    ],
    [
      "Die Pinnwand gehört ___ Schwester. (die)",
      "der",
      "die",
      "den",
      "gehören بياخد داتيف: der Schwester.",
      "Gehören takes dative: der Schwester."
    ],
    [
      "Nora zeigt ___ Bruder den Zettel. (der)",
      "dem",
      "den",
      "der",
      "المتلقي داتيف: dem Bruder.",
      "The recipient takes dative: dem Bruder."
    ],
    [
      "Karim hilft ___ Freund. (der)",
      "dem",
      "den",
      "der",
      "helfen بياخد داتيف: dem Freund.",
      "Helfen takes dative: dem Freund."
    ]
  ],
  "praesens": [
    [
      "Amina ___ auf den Punkt. (zeigen)",
      "zeigt",
      "zeigen",
      "zeigst",
      "sie مفرد: zeigt.",
      "Singular sie takes zeigt."
    ],
    [
      "Du ___ die Frage. (lesen)",
      "liest",
      "lest",
      "lesen",
      "du: liest.",
      "Du takes liest."
    ],
    [
      "Eva ___ am Nachmittag helfen. (können)",
      "kann",
      "könnt",
      "können",
      "sie مفرد: kann.",
      "Singular sie takes kann."
    ],
    [
      "Wir ___ die Farben. (beschreiben)",
      "beschreiben",
      "beschreibt",
      "beschreibe",
      "wir: beschreiben.",
      "Wir takes beschreiben."
    ]
  ],
  "possessiv": [
    [
      "Nora zeigt ___ Vorschlag. (Nora; der)",
      "ihren",
      "ihr",
      "ihre",
      "ملكية Nora مع مذكر أكوزاتيف: ihren Vorschlag.",
      "Nora takes ihren with masculine accusative Vorschlag."
    ],
    [
      "Paul öffnet ___ Heft. (Paul; das)",
      "sein",
      "seinen",
      "seine",
      "ملكية Paul مع محايد أكوزاتيف: sein Heft.",
      "Paul takes sein with neuter accusative Heft."
    ],
    [
      "Julia überarbeitet ___ Notiz. (Julia; die)",
      "ihre",
      "ihr",
      "ihren",
      "ملكية Julia مع مؤنث أكوزاتيف: ihre Notiz.",
      "Julia takes ihre with feminine accusative Notiz."
    ],
    [
      "Wir vergleichen ___ Beschreibungen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "ملكية wir مع جمع أكوزاتيف: unsere Beschreibungen.",
      "Wir takes unsere with plural accusative Beschreibungen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Zettel hängt an ___ Pinnwand. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع an: داتيف der.",
      "Fixed location with an takes dative der."
    ],
    [
      "Nora hängt den Zettel an ___ Pinnwand. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع an: أكوزاتيف die.",
      "Destination with an takes accusative die."
    ],
    [
      "Die Schachtel liegt auf ___ Schreibtisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع auf: داتيف dem.",
      "Fixed location with auf takes dative dem."
    ],
    [
      "Paul legt das Heft auf ___ Schreibtisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع auf: أكوزاتيف den.",
      "Destination with auf takes accusative den."
    ]
  ],
  "negation": [
    [
      "Das Foto enthält ___ Legende. (eine)",
      "keine",
      "kein",
      "keinen",
      "Legende مؤنث أكوزاتيف: keine.",
      "Legende is feminine accusative: keine."
    ],
    [
      "Sie erstellen ___ Arbeitsplan. (einen)",
      "keinen",
      "kein",
      "keine",
      "Arbeitsplan مذكر أكوزاتيف: keinen.",
      "Arbeitsplan is masculine accusative: keinen."
    ],
    [
      "Eva hat den Vorschlag noch ___ gelesen. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Use nicht to negate the action."
    ],
    [
      "Ein Vorschlag ist ___ Zusage. (eine)",
      "keine",
      "kein",
      "keinen",
      "Zusage مؤنث نوميناتيف: keine.",
      "Zusage is feminine nominative: keine."
    ]
  ]
};
