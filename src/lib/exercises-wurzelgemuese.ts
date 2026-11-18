import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const wurzelgemueseGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Rote Bete hat rote Stiele. (Rote Bete)",
      "Die",
      "Der",
      "Das",
      "Rote Bete مؤنث: die.",
      "Rote Bete is feminine: die."
    ],
    [
      "___ Rettich liegt im Korb. (Rettich)",
      "Der",
      "Die",
      "Das",
      "Rettich مذكر: der.",
      "Rettich is masculine: der."
    ],
    [
      "___ Stiel ist rot. (Stiel)",
      "Der",
      "Die",
      "Das",
      "Stiel مذكر: der.",
      "Stiel is masculine: der."
    ],
    [
      "___ Gemüse liegt nicht im Kursraum. (Gemüse)",
      "Das",
      "Der",
      "Die",
      "Gemüse محايد: das.",
      "Gemüse is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Amira erkennt ___ Rettich. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Rettich.",
      "Masculine direct object: den Rettich."
    ],
    [
      "Jonas beschreibt ___ Rote Bete. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Rote Bete.",
      "Feminine direct object: die Rote Bete."
    ],
    [
      "Nele liest ___ Vorschlag. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Vorschlag.",
      "Masculine direct object: den Vorschlag."
    ],
    [
      "Karim prüft ___ Zutaten. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Zutaten.",
      "Plural direct object: die Zutaten."
    ]
  ],
  "praesens": [
    [
      "Du ___ die Karten um. (drehen)",
      "drehst",
      "dreht",
      "drehe",
      "du: drehst.",
      "Du takes drehst."
    ],
    [
      "Amira ___ das ganze Wort. (nennen)",
      "nennt",
      "nennen",
      "nennst",
      "sie مفرد: nennt.",
      "Singular sie takes nennt."
    ],
    [
      "Wir ___ beide Endungen. (unterstreichen)",
      "unterstreichen",
      "unterstreicht",
      "unterstreiche",
      "wir: unterstreichen.",
      "Wir takes unterstreichen."
    ],
    [
      "Ihr ___ den Wunsch fest. (halten)",
      "haltet",
      "halten",
      "hältst",
      "ihr: haltet.",
      "Ihr takes haltet."
    ]
  ],
  "possessiv": [
    [
      "Ben ergänzt ___ Tabelle. (Ben; die)",
      "seine",
      "sein",
      "seinen",
      "مفعول مؤنث: seine Tabelle.",
      "Feminine accusative: seine Tabelle."
    ],
    [
      "Dalia liest ___ Beispielsatz. (Dalia; der)",
      "ihren",
      "ihr",
      "ihre",
      "مفعول مذكر: ihren Beispielsatz.",
      "Masculine accusative: ihren Beispielsatz."
    ],
    [
      "Wir ändern ___ Kursplan. (wir; der)",
      "unseren",
      "unser",
      "unsere",
      "مفعول مذكر: unseren Kursplan.",
      "Masculine accusative: unseren Kursplan."
    ],
    [
      "Ines notiert ___ Fragen. (Ines; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "مفعول جمع: ihre Fragen.",
      "Plural accusative: ihre Fragen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Entwurf liegt unter ___ Liste. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت وداتيف مؤنث: der Liste.",
      "Fixed location, feminine dative: der Liste."
    ],
    [
      "Karim legt den Entwurf unter ___ Liste. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه وأكوزاتيف مؤنث: die Liste.",
      "Destination, feminine accusative: die Liste."
    ],
    [
      "Das Blatt liegt neben ___ Wortkarte. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت وداتيف مؤنث: der Wortkarte.",
      "Fixed location, feminine dative: der Wortkarte."
    ],
    [
      "Dalia legt das Blatt neben ___ Wortkarte. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه وأكوزاتيف مؤنث: die Wortkarte.",
      "Destination, feminine accusative: die Wortkarte."
    ]
  ],
  "negation": [
    [
      "Das ist ___ fertiges Rezept. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "خبر محايد: kein fertiges Rezept.",
      "Neuter predicate: kein fertiges Rezept."
    ],
    [
      "Ines verspricht ___ allergenfreie Küche. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine allergenfreie Küche.",
      "Feminine direct object: keine allergenfreie Küche."
    ],
    [
      "Karim nennt ___ festen Termin. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen festen Termin.",
      "Masculine direct object: keinen festen Termin."
    ],
    [
      "Sie haben ___ vereinbarten Mengen. (kein; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine vereinbarten Mengen.",
      "Plural direct object: keine vereinbarten Mengen."
    ]
  ]
};
