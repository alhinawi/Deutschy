import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const spielablageGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Schachbrett liegt auf dem Tisch. (Schachbrett)",
      "Das",
      "Der",
      "Die",
      "Schachbrett محايد: das.",
      "Schachbrett is neuter: das."
    ],
    [
      "___ Springseil liegt im Korb. (Springseil)",
      "Das",
      "Der",
      "Die",
      "Springseil محايد: das.",
      "Springseil is neuter: das."
    ],
    [
      "___ Griff ist schwarz. (Griff)",
      "Der",
      "Die",
      "Das",
      "Griff مذكر: der.",
      "Griff is masculine: der."
    ],
    [
      "___ Anordnung ist sichtbar. (Anordnung)",
      "Die",
      "Der",
      "Das",
      "Anordnung مؤنث: die.",
      "Anordnung is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Dalia hilft ___ Partner. (der)",
      "dem",
      "den",
      "der",
      "helfen بياخد داتيف مذكر: dem Partner.",
      "Helfen takes masculine dative: dem Partner."
    ],
    [
      "Das Brett gehört ___ Kursgruppe. (die)",
      "der",
      "die",
      "den",
      "gehören بياخد داتيف مؤنث: der Kursgruppe.",
      "Gehören takes feminine dative: der Kursgruppe."
    ],
    [
      "Jonas antwortet ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "antworten بياخد داتيف مؤنث: der Partnerin.",
      "Antworten takes feminine dative: der Partnerin."
    ],
    [
      "Die Überschrift hilft ___ Lesern. (die; Plural)",
      "den",
      "die",
      "der",
      "helfen بياخد داتيف جمع: den Lesern.",
      "Helfen takes plural dative: den Lesern."
    ]
  ],
  "praesens": [
    [
      "Dalia ___ das Seil zurück. (legen)",
      "legt",
      "legen",
      "legst",
      "sie مفرد: legt.",
      "Singular sie takes legt."
    ],
    [
      "Du ___ kurz nach. (fragen)",
      "fragst",
      "fragt",
      "fragen",
      "du: fragst.",
      "Du takes fragst."
    ],
    [
      "Jonas ___ die Karten ein. (sammeln)",
      "sammelt",
      "sammeln",
      "sammelst",
      "er: sammelt.",
      "Er takes sammelt."
    ],
    [
      "Wir ___ beide Abschnitte. (trennen)",
      "trennen",
      "trennt",
      "trenne",
      "wir: trennen.",
      "Wir takes trennen."
    ]
  ],
  "possessiv": [
    [
      "Oskar öffnet ___ Heft. (Oskar; das)",
      "sein",
      "seine",
      "seinen",
      "Oskar مع محايد أكوزاتيف: sein Heft.",
      "Oskar takes sein with neuter accusative Heft."
    ],
    [
      "Hanan beendet ___ Beschreibung. (Hanan; die)",
      "ihre",
      "ihr",
      "ihren",
      "Hanan مع مؤنث أكوزاتيف: ihre Beschreibung.",
      "Hanan takes ihre with feminine accusative Beschreibung."
    ],
    [
      "Karim ändert ___ Entwurf. (Karim; der)",
      "seinen",
      "sein",
      "seine",
      "Karim مع مذكر أكوزاتيف: seinen Entwurf.",
      "Karim takes seinen with masculine accusative Entwurf."
    ],
    [
      "Wir sammeln ___ Karten ein. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Karten.",
      "Wir takes unsere with plural accusative Karten."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Seil liegt in ___ Korb. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع in: داتيف dem.",
      "Fixed location with in takes dative dem."
    ],
    [
      "Dalia legt das Seil in ___ Korb. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع in: أكوزاتيف den.",
      "Destination with in takes accusative den."
    ],
    [
      "Die Karte liegt vor ___ Brett. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع vor: داتيف dem.",
      "Fixed location with vor takes dative dem."
    ],
    [
      "Oskar legt die Karte vor ___ Brett. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع vor: أكوزاتيف das.",
      "Destination with vor takes accusative das."
    ]
  ],
  "negation": [
    [
      "Hanan ist ___ fertig. (noch nicht abgeschlossen)",
      "noch nicht",
      "noch kein",
      "niemand",
      "لسه ماخلصتش: noch nicht.",
      "Not finished yet takes noch nicht."
    ],
    [
      "Das ist ___ bestätigte Reihenfolge. (eine)",
      "keine",
      "nicht",
      "keinen",
      "نفي eine Reihenfolge: keine.",
      "Negating eine Reihenfolge takes keine."
    ],
    [
      "Oskar springt heute ___. (die Tätigkeit verneinen)",
      "nicht",
      "kein",
      "keinen",
      "نفي الفعل من غير اسم بعده: nicht.",
      "Negating the verb without a following noun takes nicht."
    ],
    [
      "Im Text steht ___ Überschrift über diesem Abschnitt. (eine)",
      "keine",
      "kein",
      "keinen",
      "نفي اسم مؤنث فاعل: keine Überschrift.",
      "Negating feminine subject takes keine Überschrift."
    ]
  ]
};
