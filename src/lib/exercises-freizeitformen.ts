import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const freizeitformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Basketball liegt auf dem Boden. (Ball)",
      "Der",
      "Die",
      "Das",
      "Basketball كورة مذكر: der.",
      "Basketball as a ball is masculine: der."
    ],
    [
      "___ Schwimmring hat eine Öffnung. (Schwimmring)",
      "Der",
      "Das",
      "Die",
      "Schwimmring مذكر: der.",
      "Schwimmring is masculine: der."
    ],
    [
      "___ Motiv zeigt eine Banane. (Motiv)",
      "Das",
      "Der",
      "Die",
      "Motiv محايد: das.",
      "Motiv is neuter: das."
    ],
    [
      "___ Linie verläuft links. (Linie)",
      "Die",
      "Der",
      "Das",
      "Linie مؤنث: die.",
      "Linie is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Mara antwortet ___ Partner. (der)",
      "dem",
      "den",
      "der",
      "antworten مع داتيف: dem Partner.",
      "Antworten takes dative: dem Partner."
    ],
    [
      "Sami spricht mit ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "بعد mit داتيف: der Partnerin.",
      "Mit takes dative: der Partnerin."
    ],
    [
      "Die Bildkarte gehört zu ___ Beispiel. (das)",
      "dem",
      "das",
      "den",
      "بعد zu داتيف: dem Beispiel.",
      "Zu takes dative: dem Beispiel."
    ],
    [
      "Nora erklärt es ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "متلقي جمع داتيف: den Lernenden.",
      "Plural dative recipient: den Lernenden."
    ]
  ],
  "praesens": [
    [
      "Mara ___ auf die Öffnung. (zeigen)",
      "zeigt",
      "zeigst",
      "zeigen",
      "sie مفرد: zeigt.",
      "Singular sie takes zeigt."
    ],
    [
      "Du ___ das Muster. (beschreiben)",
      "beschreibst",
      "beschreibt",
      "beschreiben",
      "du: beschreibst.",
      "Du takes beschreibst."
    ],
    [
      "Emil ___ den Unterschied. (erklären)",
      "erklärt",
      "erklärst",
      "erklären",
      "er: erklärt.",
      "Singular er takes erklärt."
    ],
    [
      "Wir ___ die Sätze. (vergleichen)",
      "vergleichen",
      "vergleicht",
      "vergleichst",
      "wir: vergleichen.",
      "Wir takes vergleichen."
    ]
  ],
  "possessiv": [
    [
      "Nora liest ___ Bildkarte. (Nora; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nora مع مؤنث أكوزاتيف: ihre Bildkarte.",
      "Nora takes ihre with feminine accusative Bildkarte."
    ],
    [
      "Emil ergänzt ___ Vergleich. (Emil; der)",
      "seinen",
      "sein",
      "seinem",
      "Emil مع مذكر أكوزاتيف: seinen Vergleich.",
      "Emil takes seinen with masculine accusative Vergleich."
    ],
    [
      "Liv korrigiert ___ Beispiel. (Liv; das)",
      "ihr",
      "ihre",
      "ihren",
      "Liv مع محايد أكوزاتيف: ihr Beispiel.",
      "Liv takes ihr with neuter accusative Beispiel."
    ],
    [
      "Wir prüfen ___ Entwürfe. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Entwürfe.",
      "Wir takes unsere with plural accusative Entwürfe."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt unter ___ Bild. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع unter: داتيف dem Bild.",
      "Fixed location with unter takes dative dem Bild."
    ],
    [
      "Mara legt die Karte unter ___ Bild. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع unter: أكوزاتيف das Bild.",
      "Destination with unter takes accusative das Bild."
    ],
    [
      "Das Wort steht auf ___ Tafel. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع auf: داتيف der Tafel.",
      "Fixed location with auf takes dative der Tafel."
    ],
    [
      "Sami schreibt das Wort auf ___ Tafel. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع auf: أكوزاتيف die Tafel.",
      "Destination with auf takes accusative die Tafel."
    ]
  ],
  "negation": [
    [
      "Die Karte nennt ___ Preis. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Preis.",
      "Masculine direct object: keinen Preis."
    ],
    [
      "Das ist ___ echter Kauf. (kein; der)",
      "kein",
      "keinen",
      "keine",
      "مذكر بعد ist: kein echter Kauf.",
      "Masculine predicate noun: kein echter Kauf."
    ],
    [
      "Wir ergänzen ___ Gewichtsangabe. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Gewichtsangabe.",
      "Feminine direct object: keine Gewichtsangabe."
    ],
    [
      "Die Uhrzeit ist ___ bekannt. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي bekannt: nicht.",
      "Negate bekannt with nicht."
    ]
  ]
};
