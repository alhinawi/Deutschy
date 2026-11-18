import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const rambutanchirimoyaGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Rambutan hat dünne Fortsätze. (Rambutan)",
      "Die",
      "Der",
      "Das",
      "Rambutan مؤنث: die.",
      "Rambutan is feminine: die."
    ],
    [
      "___ Chirimoya liegt auf dem Tablett. (Chirimoya)",
      "Die",
      "Der",
      "Das",
      "Chirimoya مؤنث: die.",
      "Chirimoya is feminine: die."
    ],
    [
      "___ Umschlag liegt im Regal. (Umschlag)",
      "Der",
      "Die",
      "Das",
      "Umschlag مذكر: der.",
      "Umschlag is masculine: der."
    ],
    [
      "___ Signal beendet die Beschreibung. (Signal)",
      "Das",
      "Der",
      "Die",
      "Signal محايد: das.",
      "Signal is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Amina packt ___ Umschlag. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Umschlag.",
      "Masculine direct object: den Umschlag."
    ],
    [
      "Ben öffnet ___ Mappe. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Mappe.",
      "Feminine direct object: die Mappe."
    ],
    [
      "Elisa beschreibt ___ Foto. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Foto.",
      "Neuter direct object: das Foto."
    ],
    [
      "Die Gruppe vergleicht ___ Entwürfe. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Entwürfe.",
      "Plural direct object: die Entwürfe."
    ]
  ],
  "praesens": [
    [
      "Ben ___ sich die Bilder an. (sehen)",
      "sieht",
      "seht",
      "sehen",
      "er: sieht.",
      "Er takes sieht."
    ],
    [
      "Du ___ auf das Signal. (warten)",
      "wartest",
      "wartet",
      "warten",
      "du: wartest.",
      "Du takes wartest."
    ],
    [
      "Wir ___ unsere Wahl. (begründen)",
      "begründen",
      "begründet",
      "begründe",
      "wir: begründen.",
      "Wir takes begründen."
    ],
    [
      "Ihr ___ eine Reihenfolge. (wählen)",
      "wählt",
      "wählen",
      "wähle",
      "ihr: wählt.",
      "Ihr takes wählt."
    ]
  ],
  "possessiv": [
    [
      "Amina schreibt ___ Nachricht. (Amina; die)",
      "ihre",
      "ihr",
      "ihren",
      "مفعول مؤنث: ihre Nachricht.",
      "Feminine direct object: ihre Nachricht."
    ],
    [
      "Ben liest ___ Karten. (Ben; die; Plural)",
      "seine",
      "sein",
      "seinen",
      "مفعول جمع: seine Karten.",
      "Plural direct object: seine Karten."
    ],
    [
      "Paula erklärt ___ Vorschlag. (Paula; der)",
      "ihren",
      "ihr",
      "ihrem",
      "مفعول مذكر: ihren Vorschlag.",
      "Masculine direct object: ihren Vorschlag."
    ],
    [
      "Deniz zeigt ___ Heft. (Deniz; das)",
      "sein",
      "seine",
      "seinen",
      "مفعول محايد: sein Heft.",
      "Neuter direct object: sein Heft."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Umschlag liegt in ___ Regal. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت وداتيف محايد: dem Regal.",
      "Fixed location, neuter dative: dem Regal."
    ],
    [
      "Amina legt den Umschlag in ___ Regal. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه وأكوزاتيف محايد: das Regal.",
      "Direction, neuter accusative: das Regal."
    ],
    [
      "Die Karten liegen in ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت وداتيف مؤنث: der Mappe.",
      "Fixed location, feminine dative: der Mappe."
    ],
    [
      "Ben legt die Karten in ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه وأكوزاتيف مؤنث: die Mappe.",
      "Direction, feminine accusative: die Mappe."
    ]
  ],
  "negation": [
    [
      "Ben braucht ___ echten Früchte. (kein; die; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine echten Früchte.",
      "Plural direct object: keine echten Früchte."
    ],
    [
      "Elisa nennt ___ Fruchtnamen. (kein; der; Singular)",
      "keinen",
      "kein",
      "keinem",
      "مفعول مذكر: keinen Fruchtnamen.",
      "Masculine direct object: keinen Fruchtnamen."
    ],
    [
      "Die Vorliebe ist ___ verbindliche Regel. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "خبر مؤنث: keine verbindliche Regel.",
      "Feminine predicate: keine verbindliche Regel."
    ],
    [
      "Das ist ___ leeres Tablett. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "خبر محايد: kein leeres Tablett.",
      "Neuter predicate: kein leeres Tablett."
    ]
  ]
};
