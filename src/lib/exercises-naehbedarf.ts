import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const naehbedarfGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Nähnadel steckt im Stoff. (Nähnadel)",
      "Die",
      "Der",
      "Das",
      "Nähnadel مؤنث: die.",
      "Nähnadel is feminine: die."
    ],
    [
      "___ Nähgarn ist weiß. (Nähgarn)",
      "Das",
      "Die",
      "Der",
      "Nähgarn محايد: das.",
      "Nähgarn is neuter: das."
    ],
    [
      "___ Faden ist auf dem Foto. (Faden)",
      "Der",
      "Das",
      "Die",
      "Faden مذكر: der.",
      "Faden is masculine: der."
    ],
    [
      "___ Öhr bleibt sichtbar. (Öhr)",
      "Das",
      "Die",
      "Der",
      "Öhr محايد: das.",
      "Öhr is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Mia betrachtet ___ Nähnadel. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Nähnadel.",
      "Feminine direct object: die Nähnadel."
    ],
    [
      "Paul sieht ___ Faden. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Faden.",
      "Masculine direct object: den Faden."
    ],
    [
      "Lena beschreibt ___ Nähgarn. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Nähgarn.",
      "Neuter direct object: das Nähgarn."
    ],
    [
      "Farid vergleicht ___ Nähnadeln. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Nähnadeln.",
      "Plural direct object: die Nähnadeln."
    ]
  ],
  "praesens": [
    [
      "Du ___ zuerst das Nomen. (lesen)",
      "liest",
      "lest",
      "lese",
      "du مع lesen: liest.",
      "Du with lesen takes liest."
    ],
    [
      "Mia ___ die Spulen nicht. (zählen)",
      "zählt",
      "zähle",
      "zählen",
      "sie مفرد: zählt.",
      "Singular sie takes zählt."
    ],
    [
      "Wir ___ beim Text. (bleiben)",
      "bleiben",
      "bleibt",
      "bleibe",
      "wir: bleiben.",
      "Wir takes bleiben."
    ],
    [
      "Ihr ___ das Pronomen. (prüfen)",
      "prüft",
      "prüfen",
      "prüfe",
      "ihr: prüft.",
      "Ihr takes prüft."
    ]
  ],
  "possessiv": [
    [
      "Paul liest ___ Satz. (Paul; der)",
      "seinen",
      "sein",
      "seine",
      "Paul مع مذكر أكوزاتيف: seinen.",
      "Paul takes seinen with masculine accusative Satz."
    ],
    [
      "Lena notiert ___ Frage. (Lena; die)",
      "ihre",
      "ihr",
      "ihren",
      "Lena مع مؤنث أكوزاتيف: ihre.",
      "Lena takes ihre with feminine accusative Frage."
    ],
    [
      "Wir betrachten ___ Foto. (wir; das)",
      "unser",
      "unsere",
      "unseren",
      "wir مع محايد أكوزاتيف: unser.",
      "Wir takes unser with neuter accusative Foto."
    ],
    [
      "Mia ergänzt ___ Beispiele. (Mia; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "Mia مع جمع أكوزاتيف: ihre.",
      "Mia takes ihre with plural accusative Beispiele."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Blatt liegt zwischen ___ Fotos. (die; Wo?; Plural)",
      "den",
      "die",
      "der",
      "مكان ثابت مع جمع داتيف: den Fotos.",
      "Fixed location takes plural dative den Fotos."
    ],
    [
      "Paul legt das Blatt zwischen ___ Fotos. (die; Wohin?; Plural)",
      "die",
      "den",
      "der",
      "اتجاه مع جمع أكوزاتيف: die Fotos.",
      "Destination takes plural accusative die Fotos."
    ],
    [
      "Die Karte liegt neben ___ Text. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع مذكر داتيف: dem Text.",
      "Fixed location takes masculine dative dem Text."
    ],
    [
      "Lena legt die Karte neben ___ Text. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع مذكر أكوزاتيف: den Text.",
      "Destination takes masculine accusative den Text."
    ]
  ],
  "negation": [
    [
      "Das Foto zeigt ___ geprüfte Garnstärke. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Das ist ___ Materialtest. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "خبر مذكر: kein.",
      "Masculine predicate noun takes kein."
    ],
    [
      "Die Karte enthält ___ Maßangaben. (kein; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine.",
      "Plural direct object takes keine."
    ],
    [
      "Die beiden nähen heute ___. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Negate the verb with nicht."
    ]
  ]
};
