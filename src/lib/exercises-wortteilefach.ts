import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const wortteilefachGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Kaffeemühle ist auf dem Foto. (Kaffeemühle)",
      "Die",
      "Der",
      "Das",
      "Kaffeemühle مؤنث: die.",
      "Kaffeemühle is feminine: die."
    ],
    [
      "___ Korkenzieher ist auf dem zweiten Bild. (Korkenzieher)",
      "Der",
      "Die",
      "Das",
      "Korkenzieher مذكر: der.",
      "Korkenzieher is masculine: der."
    ],
    [
      "___ Rückseite enthält das Wort. (Rückseite)",
      "Die",
      "Der",
      "Das",
      "Rückseite مؤنث: die.",
      "Rückseite is feminine: die."
    ],
    [
      "___ Gesamtwort bezeichnet ein Gerät. (Gesamtwort)",
      "Das",
      "Die",
      "Der",
      "Gesamtwort محايد: das.",
      "Gesamtwort is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Tom hilft ___ Freundin. (die)",
      "der",
      "die",
      "dem",
      "helfen بياخد داتيف: der Freundin.",
      "Helfen takes dative: der Freundin."
    ],
    [
      "Die Mappe gehört ___ Bruder. (der)",
      "dem",
      "den",
      "der",
      "gehören بياخد داتيف: dem Bruder.",
      "Gehören takes dative: dem Bruder."
    ],
    [
      "Das Bild entspricht ___ Beschreibung. (die)",
      "der",
      "die",
      "dem",
      "entsprechen بياخد داتيف: der Beschreibung.",
      "Entsprechen takes dative: der Beschreibung."
    ],
    [
      "Rita dankt ___ Freund. (der)",
      "dem",
      "den",
      "der",
      "danken بياخد داتيف: dem Freund.",
      "Danken takes dative: dem Freund."
    ]
  ],
  "praesens": [
    [
      "Rita ___ einen Stift. (nehmen)",
      "nimmt",
      "nimmst",
      "nehmen",
      "sie مفرد مع nehmen: nimmt.",
      "Singular sie takes nimmt."
    ],
    [
      "Du ___ das ganze Wort. (lesen)",
      "liest",
      "lest",
      "lese",
      "du مع lesen: liest.",
      "Du takes liest."
    ],
    [
      "Wir ___ die Karten einzeln. (prüfen)",
      "prüfen",
      "prüft",
      "prüfst",
      "wir مع prüfen: prüfen.",
      "Wir takes prüfen."
    ],
    [
      "Omar ___ beide Umschläge. (behalten)",
      "behält",
      "behältst",
      "behalten",
      "er مفرد مع behalten: behält.",
      "Singular er takes behält."
    ]
  ],
  "possessiv": [
    [
      "Rita nimmt ___ Mappe. (sie)",
      "ihre",
      "ihr",
      "ihren",
      "Mappe مؤنث أكوزاتيف مع sie: ihre.",
      "Feminine accusative Mappe with sie takes ihre."
    ],
    [
      "Tom sucht ___ Stift. (er)",
      "seinen",
      "sein",
      "seinem",
      "Stift مذكر أكوزاتيف مع er: seinen.",
      "Masculine accusative Stift with er takes seinen."
    ],
    [
      "Wir lesen ___ Beschreibungen. (wir)",
      "unsere",
      "unser",
      "unseren",
      "جمع أكوزاتيف مع wir: unsere.",
      "Plural accusative with wir takes unsere."
    ],
    [
      "Du prüfst ___ Bild. (du)",
      "dein",
      "deinen",
      "deinem",
      "Bild محايد أكوزاتيف مع du: dein.",
      "Neuter accusative Bild with du takes dein."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Foto liegt in ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative: der."
    ],
    [
      "Tom legt das Foto in ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative: die."
    ],
    [
      "Die Karte liegt neben ___ Umschlag. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع neben: داتيف dem.",
      "Fixed location with neben takes dative: dem."
    ],
    [
      "Omar legt die Karte neben ___ Umschlag. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع neben: أكوزاتيف den.",
      "Destination with neben takes accusative: den."
    ]
  ],
  "negation": [
    [
      "Die Karte gibt ___ Anleitung. (eine)",
      "keine",
      "kein",
      "keinen",
      "Anleitung مؤنث أكوزاتيف: keine.",
      "Anleitung is feminine accusative: keine."
    ],
    [
      "Sie haben die Funktion ___ geprüft. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي المراجعة هنا: nicht.",
      "Use nicht to negate checking here."
    ],
    [
      "Der gemeinsame Wortteil ist ___ vollständige Erklärung. (eine)",
      "keine",
      "kein",
      "keinen",
      "Erklärung مؤنث نوميناتيف: keine.",
      "Erklärung is feminine nominative: keine."
    ],
    [
      "Im Umschlag liegt ___ neues Gerät. (ein)",
      "kein",
      "keinen",
      "keine",
      "Gerät محايد نوميناتيف: kein.",
      "Gerät is neuter nominative: kein."
    ]
  ]
};
