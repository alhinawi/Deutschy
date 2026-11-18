import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const zitrusscheibenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Zitronenscheibe ist gelb. (Zitronenscheibe)",
      "Die",
      "Der",
      "Das",
      "Zitronenscheibe مؤنث: die.",
      "Zitronenscheibe is feminine: die."
    ],
    [
      "___ Orangenscheibe ist auf dem Foto. (Orangenscheibe)",
      "Die",
      "Das",
      "Der",
      "Orangenscheibe مؤنث: die.",
      "Orangenscheibe is feminine: die."
    ],
    [
      "___ Abstand bleibt frei. (Abstand)",
      "Der",
      "Das",
      "Die",
      "Abstand مذكر: der.",
      "Abstand is masculine: der."
    ],
    [
      "___ Paar liegt links. (Paar)",
      "Das",
      "Die",
      "Der",
      "Paar محايد: das.",
      "Paar is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Mara sucht ___ passenden Bildtitel. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر أكوزاتيف: den.",
      "Masculine direct object takes den."
    ],
    [
      "Tim zeigt ___ neue Karte. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث أكوزاتيف: die.",
      "Feminine direct object takes die."
    ],
    [
      "Lea prüft ___ Ergebnis. (das)",
      "das",
      "dem",
      "der",
      "مفعول محايد أكوزاتيف: das.",
      "Neuter direct object takes das."
    ],
    [
      "Wir vergleichen ___ beiden Fotos. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع أكوزاتيف: die.",
      "Plural direct object takes die."
    ]
  ],
  "praesens": [
    [
      "Tim ___ eine Lücke. (lassen)",
      "lässt",
      "lasse",
      "lasst",
      "er مفرد: lässt.",
      "Singular er takes lässt."
    ],
    [
      "Du ___ die Reihenfolge. (ändern)",
      "änderst",
      "ändert",
      "ändern",
      "du: änderst.",
      "Du takes änderst."
    ],
    [
      "Lea ___ die Karten zusammen. (legen)",
      "legt",
      "lege",
      "legen",
      "sie مفرد: legt.",
      "Singular sie takes legt."
    ],
    [
      "Wir ___ die Namen. (vergleichen)",
      "vergleichen",
      "vergleicht",
      "vergleichst",
      "wir: vergleichen.",
      "Wir takes vergleichen."
    ]
  ],
  "possessiv": [
    [
      "Mara prüft ___ Zuordnung. (Mara; die)",
      "ihre",
      "ihr",
      "ihren",
      "Mara مع مؤنث أكوزاتيف: ihre.",
      "Mara takes ihre with feminine accusative Zuordnung."
    ],
    [
      "Tim korrigiert ___ Satz. (Tim; der)",
      "seinen",
      "sein",
      "seine",
      "Tim مع مذكر أكوزاتيف: seinen.",
      "Tim takes seinen with masculine accusative Satz."
    ],
    [
      "Wir vergleichen ___ Fotos. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere.",
      "Wir takes unsere with plural accusative Fotos."
    ],
    [
      "Lea liest ___ Wort vor. (Lea; das)",
      "ihr",
      "ihre",
      "ihren",
      "Lea مع محايد أكوزاتيف: ihr.",
      "Lea takes ihr with neuter accusative Wort."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karten liegen vor ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع مؤنث داتيف: der Mappe.",
      "Fixed location takes feminine dative der Mappe."
    ],
    [
      "Mara legt die Karten vor ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع مؤنث أكوزاتيف: die Mappe.",
      "Destination takes feminine accusative die Mappe."
    ],
    [
      "Das Foto liegt neben ___ Stapel. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع مذكر داتيف: dem Stapel.",
      "Fixed location takes masculine dative dem Stapel."
    ],
    [
      "Tim legt das Foto neben ___ Stapel. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع مذكر أكوزاتيف: den Stapel.",
      "Destination takes masculine accusative den Stapel."
    ]
  ],
  "negation": [
    [
      "Die neue Reihenfolge ist ___ neuer Inhalt. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "خبر مذكر: kein.",
      "Masculine predicate noun takes kein."
    ],
    [
      "Mara findet ___ Fehler. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen.",
      "Masculine direct object takes keinen."
    ],
    [
      "Das Foto zeigt ___ ganze Frucht. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Die Karten berühren sich ___. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Negate the verb with nicht."
    ]
  ]
};
