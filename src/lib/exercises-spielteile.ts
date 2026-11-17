import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const spielteileGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Spielzeugauto ist hier gelb. (Spielzeugauto)",
      "Das",
      "Der",
      "Die",
      "Spielzeugauto محايد: das.",
      "Spielzeugauto is neuter: das."
    ],
    [
      "___ Puzzleteil ist hier weiß. (Puzzleteil)",
      "Das",
      "Der",
      "Die",
      "Puzzleteil محايد: das.",
      "Puzzleteil is neuter: das."
    ],
    [
      "___ Hintergrund ist gelb. (Hintergrund)",
      "Der",
      "Die",
      "Das",
      "Hintergrund مذكر: der.",
      "Hintergrund is masculine: der."
    ],
    [
      "___ Holzfigur steht davor. (Holzfigur)",
      "Die",
      "Der",
      "Das",
      "Holzfigur مؤنث: die.",
      "Holzfigur is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Rania hilft ___ Partner. (der)",
      "dem",
      "den",
      "der",
      "helfen بياخد داتيف: dem Partner.",
      "Helfen takes dative dem Partner."
    ],
    [
      "Oskar antwortet ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "antworten بياخد داتيف: der Partnerin.",
      "Antworten takes dative der Partnerin."
    ],
    [
      "Salma zeigt ___ Kind die Karte. (das)",
      "dem",
      "das",
      "den",
      "المستلم داتيف: dem Kind.",
      "Recipient takes dative dem Kind."
    ],
    [
      "Emil erklärt ___ Kindern das Wort. (die; Plural)",
      "den",
      "die",
      "der",
      "جمع داتيف: den Kindern.",
      "Plural dative takes den Kindern."
    ]
  ],
  "praesens": [
    [
      "Nils ___ einen Hinweis. (nehmen)",
      "nimmt",
      "nehmt",
      "nehmen",
      "er مع nehmen: nimmt.",
      "Singular er takes nimmt."
    ],
    [
      "Du ___ den Artikel. (wissen)",
      "weißt",
      "weiß",
      "wissen",
      "du مع wissen: weißt.",
      "Du takes weißt."
    ],
    [
      "Salma ___ auf die Karte. (zeigen)",
      "zeigt",
      "zeigen",
      "zeigst",
      "sie مفرد: zeigt.",
      "Singular sie takes zeigt."
    ],
    [
      "Wir ___ die Rollen. (tauschen)",
      "tauschen",
      "tauscht",
      "tausche",
      "wir: tauschen.",
      "Wir takes tauschen."
    ]
  ],
  "possessiv": [
    [
      "Emil liest ___ Notiz. (Emil; die)",
      "seine",
      "sein",
      "seinen",
      "Emil مع مؤنث أكوزاتيف: seine Notiz.",
      "Emil takes seine with feminine accusative Notiz."
    ],
    [
      "Salma zeigt ___ Karte. (Salma; die)",
      "ihre",
      "ihr",
      "ihren",
      "Salma مع مؤنث أكوزاتيف: ihre Karte.",
      "Salma takes ihre with feminine accusative Karte."
    ],
    [
      "Oskar prüft ___ Entwurf. (Oskar; der)",
      "seinen",
      "sein",
      "seine",
      "Oskar مع مذكر أكوزاتيف: seinen Entwurf.",
      "Oskar takes seinen with masculine accusative Entwurf."
    ],
    [
      "Wir ändern ___ Beschreibung. (wir; die)",
      "unsere",
      "unser",
      "unseren",
      "wir مع مؤنث أكوزاتيف: unsere Beschreibung.",
      "Wir takes unsere with feminine accusative Beschreibung."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Figur steht vor ___ Auto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع vor: داتيف dem.",
      "Fixed location with vor takes dative dem."
    ],
    [
      "Emil stellt die Figur vor ___ Auto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع vor: أكوزاتيف das.",
      "Destination with vor takes accusative das."
    ],
    [
      "Das Heft liegt hinter ___ Karten. (die; Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت وجمع داتيف: den Karten.",
      "Fixed location takes plural dative den Karten."
    ],
    [
      "Salma legt das Heft hinter ___ Karten. (die; Plural; Wohin?)",
      "die",
      "den",
      "der",
      "اتجاه وجمع أكوزاتيف: die Karten.",
      "Destination takes plural accusative die Karten."
    ]
  ],
  "negation": [
    [
      "Das ist ___ vollständiges Puzzle, sondern ein einzelnes Teil. (kein)",
      "kein",
      "keine",
      "keinen",
      "محايد نوميناتيف: kein Puzzle.",
      "Neuter nominative takes kein Puzzle."
    ],
    [
      "Hier steht ___ rotes Auto. (kein)",
      "kein",
      "keine",
      "keinen",
      "محايد نوميناتيف: kein Auto.",
      "Neuter nominative takes kein Auto."
    ],
    [
      "Nils braucht jetzt ___ ganze Lösung, sondern einen Hinweis. (kein)",
      "keine",
      "kein",
      "keinen",
      "مؤنث أكوزاتيف: keine Lösung.",
      "Feminine accusative takes keine Lösung."
    ],
    [
      "Die beiden kennen den Zusammenhang ___. (nicht)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل هنا: nicht.",
      "Negate the verb here with nicht."
    ]
  ]
};
