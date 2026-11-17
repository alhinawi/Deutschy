import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const saitenbilderGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Harfe steht vor den Büchern. (Harfe)",
      "Die",
      "Der",
      "Das",
      "Harfe مؤنث: die.",
      "Harfe is feminine: die."
    ],
    [
      "___ Mandoline hat zwei dunkle Öffnungen. (Mandoline)",
      "Die",
      "Der",
      "Das",
      "Mandoline مؤنث: die.",
      "Mandoline is feminine: die."
    ],
    [
      "___ Hals führt nach oben. (Hals)",
      "Der",
      "Die",
      "Das",
      "Hals مذكر: der.",
      "Hals is masculine: der."
    ],
    [
      "___ Instrument ist teilweise sichtbar. (Instrument)",
      "Das",
      "Der",
      "Die",
      "Instrument محايد: das.",
      "Instrument is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Lea beschreibt ___ Rahmen. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Rahmen.",
      "Masculine direct object: den Rahmen."
    ],
    [
      "Karim nennt ___ Instrument. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Instrument.",
      "Neuter direct object: das Instrument."
    ],
    [
      "Jule prüft ___ Wortkarte. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Wortkarte.",
      "Feminine direct object: die Wortkarte."
    ],
    [
      "Tarek streicht ___ Klangurteile. (die; Plural)",
      "die",
      "der",
      "den",
      "مفعول جمع: die Klangurteile.",
      "Plural direct object: die Klangurteile."
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
      "Du ___ auf den Rahmen. (zeigen)",
      "zeigst",
      "zeigt",
      "zeigen",
      "du: zeigst.",
      "Du takes zeigst."
    ],
    [
      "Karim ___ den Ausschnitt. (beschreiben)",
      "beschreibt",
      "beschreiben",
      "beschreibst",
      "er: beschreibt.",
      "Singular er takes beschreibt."
    ],
    [
      "Wir ___ keine Instrumente. (reparieren)",
      "reparieren",
      "repariert",
      "repariere",
      "wir: reparieren.",
      "Wir takes reparieren."
    ]
  ],
  "possessiv": [
    [
      "Nele ergänzt ___ Bildnotiz. (Nele; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nele مع مؤنث أكوزاتيف: ihre Bildnotiz.",
      "Nele takes ihre with feminine accusative Bildnotiz."
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
      "Tarek ändert ___ Entwurf. (Tarek; der)",
      "seinen",
      "sein",
      "seinem",
      "Tarek مع مذكر أكوزاتيف: seinen Entwurf.",
      "Tarek takes seinen with masculine accusative Entwurf."
    ],
    [
      "Wir prüfen ___ Namen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Namen.",
      "Wir takes unsere with plural accusative Namen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Erklärung steht unter ___ Bild. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع unter: داتيف dem Bild.",
      "Fixed location with unter takes dative dem Bild."
    ],
    [
      "Lea schreibt die Erklärung unter ___ Bild. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع unter: أكوزاتيف das Bild.",
      "Destination with unter takes accusative das Bild."
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
      "Das Foto ersetzt ___ Stimmungstest. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Stimmungstest.",
      "Masculine direct object: keinen Stimmungstest."
    ],
    [
      "Das ist ___ Klangversprechen. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "محايد بعد ist: kein Klangversprechen.",
      "Neuter predicate noun: kein Klangversprechen."
    ],
    [
      "Wir geben ___ Spielanleitung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Spielanleitung.",
      "Feminine direct object: keine Spielanleitung."
    ],
    [
      "Die Stimmung ist ___ geprüft. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي geprüft: nicht.",
      "Negate geprüft with nicht."
    ]
  ]
};
