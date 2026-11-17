import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const naturmusterGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Kieselstein ist rötlich-braun. (Kieselstein)",
      "Der",
      "Die",
      "Das",
      "Kieselstein مذكر: der.",
      "Kieselstein is masculine: der."
    ],
    [
      "___ Baumstumpf hat Risse. (Baumstumpf)",
      "Der",
      "Die",
      "Das",
      "Baumstumpf مذكر: der.",
      "Baumstumpf is masculine: der."
    ],
    [
      "___ Herkunft bleibt offen. (Herkunft)",
      "Die",
      "Der",
      "Das",
      "Herkunft مؤنث: die.",
      "Herkunft is feminine: die."
    ],
    [
      "___ Muster ist sichtbar. (Muster)",
      "Das",
      "Der",
      "Die",
      "Muster محايد: das.",
      "Muster is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Lea beschreibt ___ Stein. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Stein.",
      "Masculine direct object: den Stein."
    ],
    [
      "Karim öffnet ___ Heft. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Heft.",
      "Neuter direct object: das Heft."
    ],
    [
      "Nele prüft ___ Endung. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Endung.",
      "Feminine direct object: die Endung."
    ],
    [
      "Tarek streicht ___ Ortsnamen. (die; Plural)",
      "die",
      "der",
      "den",
      "مفعول جمع: die Ortsnamen.",
      "Plural direct object: die Ortsnamen."
    ]
  ],
  "praesens": [
    [
      "Lea ___ auf den Stein. (zeigen)",
      "zeigt",
      "zeigen",
      "zeigst",
      "sie مفرد: zeigt.",
      "Singular sie takes zeigt."
    ],
    [
      "Du ___ die Formen. (vergleichen)",
      "vergleichst",
      "vergleicht",
      "vergleichen",
      "du: vergleichst.",
      "Du takes vergleichst."
    ],
    [
      "Karim ___ die Notiz vor. (lesen)",
      "liest",
      "lest",
      "lesen",
      "er: liest.",
      "Singular er takes liest."
    ],
    [
      "Wir ___ keine Pflanzen. (verändern)",
      "verändern",
      "verändert",
      "verändere",
      "wir: verändern.",
      "Wir takes verändern."
    ]
  ],
  "possessiv": [
    [
      "Lea liest ___ Notiz. (Lea; die)",
      "ihre",
      "ihr",
      "ihren",
      "Lea مع مؤنث أكوزاتيف: ihre Notiz.",
      "Lea takes ihre with feminine accusative Notiz."
    ],
    [
      "Karim öffnet ___ Heft. (Karim; das)",
      "sein",
      "seine",
      "seinen",
      "Karim مع محايد أكوزاتيف: sein Heft.",
      "Karim takes sein with neuter accusative Heft."
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
      "Wir prüfen ___ Angaben. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Angaben.",
      "Wir takes unsere with plural accusative Angaben."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Notiz steht neben ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem Foto.",
      "Fixed location with neben takes dative dem Foto."
    ],
    [
      "Nele schreibt die Notiz neben ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das Foto.",
      "Destination with neben takes accusative das Foto."
    ],
    [
      "Das Wort steht auf ___ Karte. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع auf: داتيف der Karte.",
      "Fixed location with auf takes dative der Karte."
    ],
    [
      "Amir schreibt das Wort auf ___ Karte. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع auf: أكوزاتيف die Karte.",
      "Destination with auf takes accusative die Karte."
    ]
  ],
  "negation": [
    [
      "Das Foto liefert ___ Maßstab. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Maßstab.",
      "Masculine direct object: keinen Maßstab."
    ],
    [
      "Das ist ___ Fachgutachten. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "محايد بعد ist: kein Fachgutachten.",
      "Neuter predicate noun: kein Fachgutachten."
    ],
    [
      "Wir nennen ___ Jahreszahl. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Jahreszahl.",
      "Feminine direct object: keine Jahreszahl."
    ],
    [
      "Die Herkunft ist ___ bekannt. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي bekannt: nicht.",
      "Negate bekannt with nicht."
    ]
  ]
};
