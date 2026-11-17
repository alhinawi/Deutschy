import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const raumfotosGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Pizzaschneider hat ein Schneidrad. (Pizzaschneider)",
      "Der",
      "Die",
      "Das",
      "Pizzaschneider مذكر: der.",
      "Pizzaschneider is masculine: der."
    ],
    [
      "___ Duschkopf ist an der Wand befestigt. (Duschkopf)",
      "Der",
      "Die",
      "Das",
      "Duschkopf مذكر: der.",
      "Duschkopf is masculine: der."
    ],
    [
      "___ Bildnummer stimmt jetzt. (Bildnummer)",
      "Die",
      "Der",
      "Das",
      "Bildnummer مؤنث: die.",
      "Bildnummer is feminine: die."
    ],
    [
      "___ Schneidrad liegt am Teig an. (Schneidrad)",
      "Das",
      "Der",
      "Die",
      "Schneidrad محايد: das.",
      "Schneidrad is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Yara hilft ___ Freund. (der)",
      "dem",
      "den",
      "der",
      "helfen بياخد داتيف: dem Freund.",
      "Helfen takes dative: dem Freund."
    ],
    [
      "Leon antwortet ___ Freundin. (die)",
      "der",
      "die",
      "den",
      "antworten بياخد داتيف: der Freundin.",
      "Antworten takes dative: der Freundin."
    ],
    [
      "Mona zeigt ___ Bruder die Notiz. (der)",
      "dem",
      "den",
      "der",
      "المتلقي داتيف: dem Bruder.",
      "The recipient takes dative: dem Bruder."
    ],
    [
      "Das Wortheft gehört ___ Schwester. (die)",
      "der",
      "die",
      "den",
      "gehören بياخد داتيف: der Schwester.",
      "Gehören takes dative: der Schwester."
    ]
  ],
  "praesens": [
    [
      "Yara ___ die Fotos. (sortieren)",
      "sortiert",
      "sortieren",
      "sortierst",
      "sie مفرد: sortiert.",
      "Singular sie takes sortiert."
    ],
    [
      "Du ___ die Nummern. (vertauschen)",
      "vertauschst",
      "vertauscht",
      "vertauschen",
      "du: vertauschst.",
      "Du takes vertauschst."
    ],
    [
      "David ___ den Entwurf. (prüfen)",
      "prüft",
      "prüfen",
      "prüfst",
      "er مفرد: prüft.",
      "Singular er takes prüft."
    ],
    [
      "Wir ___ nur das Sichtbare. (beschreiben)",
      "beschreiben",
      "beschreibt",
      "beschreibe",
      "wir: beschreiben.",
      "Wir takes beschreiben."
    ]
  ],
  "possessiv": [
    [
      "Mona korrigiert ___ Notiz. (Mona; die)",
      "ihre",
      "ihr",
      "ihren",
      "ملكية Mona مع مؤنث أكوزاتيف: ihre Notiz.",
      "Mona takes ihre with feminine accusative Notiz."
    ],
    [
      "David prüft ___ Entwurf. (David; der)",
      "seinen",
      "sein",
      "seine",
      "ملكية David مع مذكر أكوزاتيف: seinen Entwurf.",
      "David takes seinen with masculine accusative Entwurf."
    ],
    [
      "Yara öffnet ___ Heft. (Yara; das)",
      "ihr",
      "ihren",
      "ihre",
      "ملكية Yara مع محايد أكوزاتيف: ihr Heft.",
      "Yara takes ihr with neuter accusative Heft."
    ],
    [
      "Wir vergleichen ___ Sätze. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "ملكية wir مع جمع أكوزاتيف: unsere Sätze.",
      "Wir takes unsere with plural accusative Sätze."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Foto liegt unter ___ Überschrift. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع unter: داتيف der.",
      "Fixed location with unter takes dative der."
    ],
    [
      "Leon legt das Foto unter ___ Überschrift. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع unter: أكوزاتيف die.",
      "Destination with unter takes accusative die."
    ],
    [
      "Die Notiz liegt neben ___ Heft. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem.",
      "Fixed location with neben takes dative dem."
    ],
    [
      "Mona legt die Notiz neben ___ Heft. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das.",
      "Destination with neben takes accusative das."
    ]
  ],
  "negation": [
    [
      "Das Foto ist ___ Funktionstest. (ein)",
      "kein",
      "keine",
      "keinen",
      "Funktionstest مذكر نوميناتيف: kein.",
      "Funktionstest is masculine nominative: kein."
    ],
    [
      "Sie geben ___ Kaufempfehlung. (eine)",
      "keine",
      "kein",
      "keinen",
      "Kaufempfehlung مؤنث أكوزاتيف: keine.",
      "Kaufempfehlung is feminine accusative: keine."
    ],
    [
      "Die Gruppe hat den Entwurf noch ___ erhalten. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Use nicht to negate the action."
    ],
    [
      "Die Aufnahme zeigt ___ Wasserstrahl. (einen)",
      "keinen",
      "kein",
      "keine",
      "Wasserstrahl مذكر أكوزاتيف: keinen.",
      "Wasserstrahl is masculine accusative: keinen."
    ]
  ]
};
