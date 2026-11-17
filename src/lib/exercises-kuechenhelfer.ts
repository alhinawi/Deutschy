import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const kuechenhelferGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Spritzbeutel hat eine schmale Spitze. (Spritzbeutel)",
      "Der",
      "Die",
      "Das",
      "Spritzbeutel مذكر: der.",
      "Spritzbeutel is masculine: der."
    ],
    [
      "___ Knoblauchpresse ist gebogen. (Knoblauchpresse)",
      "Die",
      "Der",
      "Das",
      "Knoblauchpresse مؤنث: die.",
      "Knoblauchpresse is feminine: die."
    ],
    [
      "___ Füllung ist lila. (Füllung)",
      "Die",
      "Der",
      "Das",
      "Füllung مؤنث: die.",
      "Füllung is feminine: die."
    ],
    [
      "___ Bezug ist nicht klar. (Bezug)",
      "Der",
      "Die",
      "Das",
      "Bezug مذكر: der.",
      "Bezug is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Amina hilft ___ Freund. (der)",
      "dem",
      "den",
      "der",
      "helfen بياخد داتيف: dem Freund.",
      "Helfen takes dative: dem Freund."
    ],
    [
      "Das Blatt gehört ___ Freundin. (die)",
      "der",
      "die",
      "den",
      "gehören بياخد داتيف: der Freundin.",
      "Gehören takes dative: der Freundin."
    ],
    [
      "Jana zeigt ___ Bruder das Foto. (der)",
      "dem",
      "den",
      "der",
      "المتلقي داتيف: dem Bruder.",
      "The recipient takes dative: dem Bruder."
    ],
    [
      "Rami antwortet ___ Freundin. (die)",
      "der",
      "die",
      "den",
      "antworten بياخد داتيف: der Freundin.",
      "Antworten takes dative: der Freundin."
    ]
  ],
  "praesens": [
    [
      "Paul ___ den Artikel durch. (durchstreichen)",
      "streicht",
      "streichen",
      "streichst",
      "er: streicht ... durch.",
      "Er takes streicht ... durch."
    ],
    [
      "Du ___ nach dem Namen. (fragen)",
      "fragst",
      "fragt",
      "fragen",
      "du: fragst.",
      "Du takes fragst."
    ],
    [
      "Jana ___ nur das Foto. (bewegen)",
      "bewegt",
      "bewegen",
      "bewegst",
      "sie مفرد: bewegt.",
      "Singular sie takes bewegt."
    ],
    [
      "Wir ___ die Zutaten nicht. (kennen)",
      "kennen",
      "kennt",
      "kenne",
      "wir: kennen.",
      "Wir takes kennen."
    ]
  ],
  "possessiv": [
    [
      "Paul korrigiert ___ Artikel. (Paul; der)",
      "seinen",
      "sein",
      "seine",
      "ملكية Paul مع مذكر أكوزاتيف: seinen Artikel.",
      "Paul takes seinen with masculine accusative Artikel."
    ],
    [
      "Jana ändert ___ Anordnung. (Jana; die)",
      "ihre",
      "ihr",
      "ihren",
      "ملكية Jana مع مؤنث أكوزاتيف: ihre Anordnung.",
      "Jana takes ihre with feminine accusative Anordnung."
    ],
    [
      "Nabil öffnet ___ Wortheft. (Nabil; das)",
      "sein",
      "seinen",
      "seine",
      "ملكية Nabil مع محايد أكوزاتيف: sein Wortheft.",
      "Nabil takes sein with neuter accusative Wortheft."
    ],
    [
      "Wir prüfen ___ Beschreibungen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "ملكية wir مع جمع أكوزاتيف: unsere Beschreibungen.",
      "Wir takes unsere with plural accusative Beschreibungen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Beutel liegt in ___ Schüssel. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative der."
    ],
    [
      "Sie legt den Beutel in ___ Schüssel. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative die."
    ],
    [
      "Die Karte liegt neben ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem.",
      "Fixed location with neben takes dative dem."
    ],
    [
      "Sie legt die Karte neben ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das.",
      "Destination with neben takes accusative das."
    ]
  ],
  "negation": [
    [
      "Sie haben ___ Zutatenliste. (eine)",
      "keine",
      "kein",
      "keinen",
      "Zutatenliste مؤنث أكوزاتيف: keine.",
      "Zutatenliste is feminine accusative: keine."
    ],
    [
      "Der Bezug ist ___ eindeutig. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الصفة: nicht eindeutig.",
      "Use nicht to negate the adjective eindeutig."
    ],
    [
      "Das Foto ist ___ Rezept. (ein)",
      "kein",
      "keine",
      "keinen",
      "Rezept محايد نوميناتيف: kein.",
      "Rezept is neuter nominative: kein."
    ],
    [
      "Sie kennen ___ Reinigungszustand. (der)",
      "keinen",
      "kein",
      "keine",
      "Reinigungszustand مذكر أكوزاتيف: keinen.",
      "Reinigungszustand is masculine accusative: keinen."
    ]
  ]
};
