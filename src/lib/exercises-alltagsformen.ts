import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const alltagsformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Schöpfkelle steht vor der Schale. (Schöpfkelle)",
      "Die",
      "Der",
      "Das",
      "Schöpfkelle مؤنث: die.",
      "Schöpfkelle is feminine: die."
    ],
    [
      "___ Nagelfeile hat ein rosa Ende. (Nagelfeile)",
      "Die",
      "Der",
      "Das",
      "Nagelfeile مؤنث: die.",
      "Nagelfeile is feminine: die."
    ],
    [
      "___ Handschuh ist schwarz. (Handschuh)",
      "Der",
      "Die",
      "Das",
      "Handschuh مذكر: der.",
      "Handschuh is masculine: der."
    ],
    [
      "___ Adjektiv verspricht zu viel. (Adjektiv)",
      "Das",
      "Der",
      "Die",
      "Adjektiv محايد: das.",
      "Adjektiv is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Lea beschreibt ___ Stiel. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Stiel.",
      "Masculine direct object: den Stiel."
    ],
    [
      "Karim nennt ___ Wort. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Wort.",
      "Neuter direct object: das Wort."
    ],
    [
      "Jule prüft ___ Aussage. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Aussage.",
      "Feminine direct object: die Aussage."
    ],
    [
      "Tarek streicht ___ Bewertungen. (die; Plural)",
      "die",
      "der",
      "den",
      "مفعول جمع: die Bewertungen.",
      "Plural direct object: die Bewertungen."
    ]
  ],
  "praesens": [
    [
      "Lea ___ den Namen vor. (lesen)",
      "liest",
      "lest",
      "lesen",
      "sie مفرد: liest.",
      "Singular sie takes liest."
    ],
    [
      "Du ___ die Zeilen. (prüfen)",
      "prüfst",
      "prüft",
      "prüfen",
      "du: prüfst.",
      "Du takes prüfst."
    ],
    [
      "Karim ___ auf das Bild. (zeigen)",
      "zeigt",
      "zeigen",
      "zeigst",
      "er: zeigt.",
      "Singular er takes zeigt."
    ],
    [
      "Wir ___ keine Person. (identifizieren)",
      "identifizieren",
      "identifiziert",
      "identifiziere",
      "wir: identifizieren.",
      "Wir takes identifizieren."
    ]
  ],
  "possessiv": [
    [
      "Nele liest ___ Wortkarte. (Nele; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nele مع مؤنث أكوزاتيف: ihre Wortkarte.",
      "Nele takes ihre with feminine accusative Wortkarte."
    ],
    [
      "Amir öffnet ___ Heft. (Amir; das)",
      "sein",
      "seine",
      "seinen",
      "Amir مع محايد أكوزاتيف: sein Heft.",
      "Amir takes sein with neuter accusative Heft."
    ],
    [
      "Tarek kürzt ___ Satz. (Tarek; der)",
      "seinen",
      "sein",
      "seinem",
      "Tarek مع مذكر أكوزاتيف: seinen Satz.",
      "Tarek takes seinen with masculine accusative Satz."
    ],
    [
      "Wir prüfen ___ Bildtexte. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Bildtexte.",
      "Wir takes unsere with plural accusative Bildtexte."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Name steht auf ___ Lernblatt. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع auf: داتيف dem Lernblatt.",
      "Fixed location with auf takes dative dem Lernblatt."
    ],
    [
      "Lea schreibt den Namen auf ___ Lernblatt. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع auf: أكوزاتيف das Lernblatt.",
      "Destination with auf takes accusative das Lernblatt."
    ],
    [
      "Die Skizze steht neben ___ Zeile. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع neben: داتيف der Zeile.",
      "Fixed location with neben takes dative der Zeile."
    ],
    [
      "Karim zeichnet die Skizze neben ___ Zeile. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع neben: أكوزاتيف die Zeile.",
      "Destination with neben takes accusative die Zeile."
    ]
  ],
  "negation": [
    [
      "Das Foto liefert ___ Hygienenachweis. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Hygienenachweis.",
      "Masculine direct object: keinen Hygienenachweis."
    ],
    [
      "Das ist ___ Rezept. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "محايد بعد ist: kein Rezept.",
      "Neuter predicate noun: kein Rezept."
    ],
    [
      "Wir geben ___ Pflegeanweisung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Pflegeanweisung.",
      "Feminine direct object: keine Pflegeanweisung."
    ],
    [
      "Die Körnung ist ___ bekannt. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي bekannt: nicht.",
      "Negate bekannt with nicht."
    ]
  ]
};
