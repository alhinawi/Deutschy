import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const luftformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Seifenblase ist gut zu erkennen. (Seifenblase)",
      "Die",
      "Der",
      "Das",
      "Seifenblase مؤنث: die.",
      "Seifenblase is feminine: die."
    ],
    [
      "___ Luftballon ist goldfarben. (Luftballon)",
      "Der",
      "Die",
      "Das",
      "Luftballon مذكر: der.",
      "Luftballon is masculine: der."
    ],
    [
      "___ Band ist unten sichtbar. (Band)",
      "Das",
      "Der",
      "Die",
      "Band بمعنى شريط محايد: das.",
      "Band meaning ribbon is neuter: das."
    ],
    [
      "___ Aussprache steht im Eintrag. (Aussprache)",
      "Die",
      "Der",
      "Das",
      "Aussprache مؤنث: die.",
      "Aussprache is feminine: die."
    ]
  ],
  "akkusativ": [
    [
      "Nora erkennt ___ Seifenblase. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Seifenblase.",
      "Feminine direct object: die Seifenblase."
    ],
    [
      "Ali beschreibt ___ Luftballon. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Luftballon.",
      "Masculine direct object: den Luftballon."
    ],
    [
      "Mara markiert ___ Band. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Band.",
      "Neuter direct object: das Band."
    ],
    [
      "Tarek vergleicht ___ Endungen. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Endungen.",
      "Plural direct object: die Endungen."
    ]
  ],
  "praesens": [
    [
      "Du ___ beide Formen laut. (sprechen)",
      "sprichst",
      "spricht",
      "spreche",
      "du مع sprechen: sprichst.",
      "Du with sprechen takes sprichst."
    ],
    [
      "Nora ___ die Namen ab. (decken)",
      "deckt",
      "decken",
      "deckst",
      "sie مفرد: deckt.",
      "Singular sie takes deckt."
    ],
    [
      "Wir ___ bei der belegten Form. (bleiben)",
      "bleiben",
      "bleibt",
      "bleibe",
      "wir: bleiben.",
      "Wir takes bleiben."
    ],
    [
      "Ihr ___ keine Dauer. (messen)",
      "messt",
      "misst",
      "messen",
      "ihr: messt.",
      "Ihr takes messt."
    ]
  ],
  "possessiv": [
    [
      "Ali öffnet ___ Heft. (Ali; das)",
      "sein",
      "seine",
      "seinen",
      "Ali مع محايد أكوزاتيف: sein.",
      "Ali takes sein with neuter accusative Heft."
    ],
    [
      "Nora dreht ___ Karte um. (Nora; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nora مع مؤنث أكوزاتيف: ihre.",
      "Nora takes ihre with feminine accusative Karte."
    ],
    [
      "Wir lesen ___ Eintrag. (wir; der)",
      "unseren",
      "unser",
      "unsere",
      "wir مع مذكر أكوزاتيف: unseren.",
      "Wir takes unseren with masculine accusative Eintrag."
    ],
    [
      "Mara prüft ___ Formen. (Mara; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "Mara مع جمع أكوزاتيف: ihre.",
      "Mara takes ihre with plural accusative Formen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt vor ___ Heft. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع محايد داتيف: dem Heft.",
      "Fixed location takes neuter dative dem Heft."
    ],
    [
      "Ali legt die Karte vor ___ Heft. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه مع محايد أكوزاتيف: das Heft.",
      "Destination takes neuter accusative das Heft."
    ],
    [
      "Das Foto liegt hinter ___ Eintrag. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع مذكر داتيف: dem Eintrag.",
      "Fixed location takes masculine dative dem Eintrag."
    ],
    [
      "Mara legt das Foto hinter ___ Eintrag. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع مذكر أكوزاتيف: den Eintrag.",
      "Destination takes masculine accusative den Eintrag."
    ]
  ],
  "negation": [
    [
      "Das Foto belegt ___ Zeitangabe. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Das ist ___ gemeinsamer Versuch. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "خبر مذكر: kein.",
      "Masculine predicate noun takes kein."
    ],
    [
      "David nennt ___ gemessenen Zeiten. (kein; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine.",
      "Plural direct object takes keine."
    ],
    [
      "Sie stellen heute ___ Mischung her. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ]
  ]
};
