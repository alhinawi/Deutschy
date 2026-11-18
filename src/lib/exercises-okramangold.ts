import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const okramangoldGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Okra hat deutliche Kanten. (Okra)",
      "Die",
      "Der",
      "Das",
      "Okra مؤنث: die.",
      "Okra is feminine: die."
    ],
    [
      "___ Mangold hat hier rote Stiele. (Mangold)",
      "Der",
      "Die",
      "Das",
      "Mangold مذكر: der.",
      "Mangold is masculine: der."
    ],
    [
      "___ Bündel liegt im Beispiel auf dem Tisch. (Bündel)",
      "Das",
      "Der",
      "Die",
      "Bündel محايد: das.",
      "Bündel is neuter: das."
    ],
    [
      "___ Rückfrage steht in der Notiz. (Rückfrage)",
      "Die",
      "Der",
      "Das",
      "Rückfrage مؤنث: die.",
      "Rückfrage is feminine: die."
    ]
  ],
  "akkusativ": [
    [
      "Eva dreht ___ Karte um. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Karte.",
      "Feminine direct object: die Karte."
    ],
    [
      "Nabil nennt ___ Mangold zuerst. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Mangold.",
      "Masculine direct object: den Mangold."
    ],
    [
      "David verbessert ___ Wort. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Wort.",
      "Neuter direct object: das Wort."
    ],
    [
      "Selma markiert ___ Fragen. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Fragen.",
      "Plural direct object: die Fragen."
    ]
  ],
  "praesens": [
    [
      "Du ___ dich an die Stiele. (erinnern)",
      "erinnerst",
      "erinnert",
      "erinnern",
      "du: erinnerst.",
      "Du takes erinnerst."
    ],
    [
      "Eva ___ die Mappe. (schließen)",
      "schließt",
      "schließen",
      "schließe",
      "sie مفرد: schließt.",
      "Singular sie takes schließt."
    ],
    [
      "Wir ___ die Rollen. (tauschen)",
      "tauschen",
      "tauscht",
      "tausche",
      "wir: tauschen.",
      "Wir takes tauschen."
    ],
    [
      "Ihr ___ die Wörter getrennt. (prüfen)",
      "prüft",
      "prüfen",
      "prüfe",
      "ihr: prüft.",
      "Ihr takes prüft."
    ]
  ],
  "possessiv": [
    [
      "Nabil öffnet ___ Mappe. (Nabil; die)",
      "seine",
      "sein",
      "seinen",
      "مفعول مؤنث: seine Mappe.",
      "Feminine accusative: seine Mappe."
    ],
    [
      "Paula ändert ___ Übungsliste. (Paula; die)",
      "ihre",
      "ihr",
      "ihren",
      "مفعول مؤنث: ihre Übungsliste.",
      "Feminine accusative: ihre Übungsliste."
    ],
    [
      "Wir lesen ___ Notizen vor. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "مفعول جمع: unsere Notizen.",
      "Plural accusative: unsere Notizen."
    ],
    [
      "David prüft ___ Eintrag. (David; der)",
      "seinen",
      "sein",
      "seine",
      "مفعول مذكر: seinen Eintrag.",
      "Masculine accusative: seinen Eintrag."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karten liegen in ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت وداتيف مؤنث: der Mappe.",
      "Fixed location, feminine dative: der Mappe."
    ],
    [
      "Nabil legt die Karten in ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه وأكوزاتيف مؤنث: die Mappe.",
      "Destination, feminine accusative: die Mappe."
    ],
    [
      "Die Notiz liegt unter ___ Wörterbuch. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت وداتيف محايد: dem Wörterbuch.",
      "Fixed location, neuter dative: dem Wörterbuch."
    ],
    [
      "David legt die Notiz unter ___ Wörterbuch. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه وأكوزاتيف محايد: das Wörterbuch.",
      "Destination, neuter accusative: das Wörterbuch."
    ]
  ],
  "negation": [
    [
      "Das ist ___ bestätigte Bestellung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "خبر مؤنث: keine bestätigte Bestellung.",
      "Feminine predicate: keine bestätigte Bestellung."
    ],
    [
      "David kennt ___ sichere Antwort. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine sichere Antwort.",
      "Feminine direct object: keine sichere Antwort."
    ],
    [
      "Selma nennt ___ Preis. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Preis.",
      "Masculine direct object: keinen Preis."
    ],
    [
      "Sie haben ___ festen Gesprächsregeln für immer. (kein; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine festen Gesprächsregeln.",
      "Plural direct object: keine festen Gesprächsregeln."
    ]
  ]
};
