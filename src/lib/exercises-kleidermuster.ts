import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const kleidermusterGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Krawatte ist rot. (Krawatte)",
      "Die",
      "Der",
      "Das",
      "Krawatte مؤنث: die.",
      "Krawatte is feminine: die."
    ],
    [
      "___ Fäustling ist braun. (Fäustling)",
      "Der",
      "Die",
      "Das",
      "Fäustling مذكر: der.",
      "Fäustling is masculine: der."
    ],
    [
      "___ Muster zeigt kleine Ringe. (Muster)",
      "Das",
      "Der",
      "Die",
      "Muster محايد: das.",
      "Muster is neuter: das."
    ],
    [
      "___ Daumen hat einen eigenen Teil. (Daumen)",
      "Der",
      "Die",
      "Das",
      "Daumen مذكر: der.",
      "Daumen is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Lea hilft ___ Freund. (der)",
      "dem",
      "den",
      "der",
      "helfen مع داتيف: dem Freund.",
      "Helfen takes dative: dem Freund."
    ],
    [
      "Karim spricht mit ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "بعد mit داتيف: der Partnerin.",
      "Mit takes dative: der Partnerin."
    ],
    [
      "Die Karte gehört zu ___ Bild. (das)",
      "dem",
      "das",
      "den",
      "بعد zu داتيف: dem Bild.",
      "Zu takes dative: dem Bild."
    ],
    [
      "Die Frage hilft ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "helfen مع جمع داتيف: den Lernenden.",
      "Helfen takes plural dative: den Lernenden."
    ]
  ],
  "praesens": [
    [
      "Lea ___ die Krawatte. (beschreiben)",
      "beschreibt",
      "beschreibst",
      "beschreiben",
      "sie مفرد: beschreibt.",
      "Singular sie takes beschreibt."
    ],
    [
      "Du ___ einen Fäustling. (erkennen)",
      "erkennst",
      "erkennt",
      "erkennen",
      "du: erkennst.",
      "Du takes erkennst."
    ],
    [
      "Karim ___ auf das Muster. (zeigen)",
      "zeigt",
      "zeigst",
      "zeigen",
      "er: zeigt.",
      "Singular er takes zeigt."
    ],
    [
      "Wir ___ die Zuordnung offen. (lassen)",
      "lassen",
      "lässt",
      "lasst",
      "wir: lassen.",
      "Wir takes lassen."
    ]
  ],
  "possessiv": [
    [
      "Nele liest ___ Notiz. (Nele; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nele مع مؤنث أكوزاتيف: ihre Notiz.",
      "Nele takes ihre with feminine accusative Notiz."
    ],
    [
      "Amir ergänzt ___ Satz. (Amir; der)",
      "seinen",
      "sein",
      "seinem",
      "Amir مع مذكر أكوزاتيف: seinen Satz.",
      "Amir takes seinen with masculine accusative Satz."
    ],
    [
      "Jule prüft ___ Beispiel. (Jule; das)",
      "ihr",
      "ihre",
      "ihren",
      "Jule مع محايد أكوزاتيف: ihr Beispiel.",
      "Jule takes ihr with neuter accusative Beispiel."
    ],
    [
      "Wir ordnen ___ Karten. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Karten.",
      "Wir takes unsere with plural accusative Karten."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Notiz steht unter ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع unter: داتيف dem Foto.",
      "Fixed location with unter takes dative dem Foto."
    ],
    [
      "Lea schreibt die Notiz unter ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع unter: أكوزاتيف das Foto.",
      "Destination with unter takes accusative das Foto."
    ],
    [
      "Die Form steht auf ___ Karte. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع auf: داتيف der Karte.",
      "Fixed location with auf takes dative der Karte."
    ],
    [
      "Karim schreibt die Form auf ___ Karte. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع auf: أكوزاتيف die Karte.",
      "Destination with auf takes accusative die Karte."
    ]
  ],
  "negation": [
    [
      "Das Bild nennt ___ Eigentümer. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Eigentümer.",
      "Masculine direct object: keinen Eigentümer."
    ],
    [
      "Das ist ___ sichtbares Paar. (kein; das)",
      "kein",
      "keinen",
      "keine",
      "محايد بعد ist: kein sichtbares Paar.",
      "Neuter predicate noun: kein sichtbares Paar."
    ],
    [
      "Wir bestätigen ___ Rückgabe. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Rückgabe.",
      "Feminine direct object: keine Rückgabe."
    ],
    [
      "Die Zuordnung ist noch ___ bestätigt. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي bestätigt: nicht.",
      "Negate bestätigt with nicht."
    ]
  ]
};
