import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const signalwoerterGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Megafon hat einen Griff. (Megafon)",
      "Das",
      "Der",
      "Die",
      "Megafon محايد: das.",
      "Megafon is neuter: das."
    ],
    [
      "___ Leitkegel hat Streifen. (Leitkegel)",
      "Der",
      "Die",
      "Das",
      "Leitkegel مذكر: der.",
      "Leitkegel is masculine: der."
    ],
    [
      "___ Öffnung ist breit. (Öffnung)",
      "Die",
      "Der",
      "Das",
      "Öffnung مؤنث: die.",
      "Öffnung is feminine: die."
    ],
    [
      "___ Entwurf bleibt im Heft. (Entwurf)",
      "Der",
      "Die",
      "Das",
      "Entwurf مذكر: der.",
      "Entwurf is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Sofia hilft ___ Freund. (der)",
      "dem",
      "den",
      "der",
      "helfen بياخد داتيف: dem Freund.",
      "Helfen takes dative: dem Freund."
    ],
    [
      "Das Heft gehört ___ Freundin. (die)",
      "der",
      "die",
      "den",
      "gehören بياخد داتيف: der Freundin.",
      "Gehören takes dative: der Freundin."
    ],
    [
      "Mina zeigt ___ Bruder den Entwurf. (der)",
      "dem",
      "den",
      "der",
      "المتلقي داتيف: dem Bruder.",
      "The recipient takes dative: dem Bruder."
    ],
    [
      "Timo antwortet ___ Freundin. (die)",
      "der",
      "die",
      "den",
      "antworten بياخد داتيف: der Freundin.",
      "Antworten takes dative: der Freundin."
    ]
  ],
  "praesens": [
    [
      "Yusuf ___ auf das Foto. (zeigen)",
      "zeigt",
      "zeigen",
      "zeigst",
      "er مفرد: zeigt.",
      "Singular er takes zeigt."
    ],
    [
      "Du ___ den Entwurf. (lesen)",
      "liest",
      "lese",
      "lesen",
      "du مع lesen: liest.",
      "Du takes liest with lesen."
    ],
    [
      "Mina ___ auf eine Antwort. (warten)",
      "wartet",
      "warten",
      "warte",
      "sie مفرد: wartet.",
      "Singular sie takes wartet."
    ],
    [
      "Wir ___ keine Geräte aus. (ausprobieren)",
      "probieren",
      "probiert",
      "probiere",
      "wir: probieren ... aus.",
      "Wir takes probieren ... aus."
    ]
  ],
  "possessiv": [
    [
      "Yusuf öffnet ___ Heft. (Yusuf; das)",
      "sein",
      "seinen",
      "seine",
      "ملكية Yusuf مع محايد أكوزاتيف: sein Heft.",
      "Yusuf takes sein with neuter accusative Heft."
    ],
    [
      "Mina überarbeitet ___ Einladung. (Mina; die)",
      "ihre",
      "ihr",
      "ihren",
      "ملكية Mina مع مؤنث أكوزاتيف: ihre Einladung.",
      "Mina takes ihre with feminine accusative Einladung."
    ],
    [
      "Timo prüft ___ Wochenendplan. (Timo; der)",
      "seinen",
      "sein",
      "seine",
      "ملكية Timo مع مذكر أكوزاتيف: seinen Wochenendplan.",
      "Timo takes seinen with masculine accusative Wochenendplan."
    ],
    [
      "Wir beschreiben ___ Bilder. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "ملكية wir مع جمع أكوزاتيف: unsere Bilder.",
      "Wir takes unsere with plural accusative Bilder."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Fotos liegen auf ___ Schreibtisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع auf: داتيف dem.",
      "Fixed location with auf takes dative dem."
    ],
    [
      "Sofia legt die Fotos auf ___ Schreibtisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع auf: أكوزاتيف den.",
      "Destination with auf takes accusative den."
    ],
    [
      "Das Heft liegt neben ___ Fotos. (Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت وجمع داتيف: den Fotos.",
      "Fixed location takes dative plural den Fotos."
    ],
    [
      "Yusuf legt das Heft neben ___ Fotos. (Plural; Wohin?)",
      "die",
      "den",
      "der",
      "اتجاه وجمع أكوزاتيف: die Fotos.",
      "Destination takes accusative plural die Fotos."
    ]
  ],
  "negation": [
    [
      "Sie machen ___ Durchsage. (eine)",
      "keine",
      "kein",
      "keinen",
      "Durchsage مؤنث أكوزاتيف: keine.",
      "Durchsage is feminine accusative: keine."
    ],
    [
      "Timo hat noch ___ zugesagt. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Use nicht to negate the action."
    ],
    [
      "Das Heft ist ___ Erlaubnis. (eine)",
      "keine",
      "kein",
      "keinen",
      "Erlaubnis مؤنث نوميناتيف: keine.",
      "Erlaubnis is feminine nominative: keine."
    ],
    [
      "Sie kennen ___ Aufnahmezeitpunkt. (der)",
      "keinen",
      "kein",
      "keine",
      "Aufnahmezeitpunkt مذكر أكوزاتيف: keinen.",
      "Aufnahmezeitpunkt is masculine accusative: keinen."
    ]
  ]
};
