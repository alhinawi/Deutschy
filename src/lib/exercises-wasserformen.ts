import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const wasserformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Wassertropfen hängt am Blatt. (Wassertropfen)",
      "Der",
      "Die",
      "Das",
      "Wassertropfen مذكر: der.",
      "Wassertropfen is masculine: der."
    ],
    [
      "___ Eiszapfen ist auf dem Foto. (Eiszapfen)",
      "Der",
      "Die",
      "Das",
      "Eiszapfen مذكر: der.",
      "Eiszapfen is masculine: der."
    ],
    [
      "___ Blattspitze ist grün. (Blattspitze)",
      "Die",
      "Der",
      "Das",
      "Blattspitze مؤنث: die.",
      "Blattspitze is feminine: die."
    ],
    [
      "___ Satzpaar steht im Heft. (Satzpaar)",
      "Das",
      "Der",
      "Die",
      "Satzpaar محايد: das.",
      "Satzpaar is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Ben hilft ___ Schwester. (die)",
      "der",
      "die",
      "den",
      "مفعول داتيف مؤنث بعد helfen: der Schwester.",
      "Helfen takes feminine dative der Schwester."
    ],
    [
      "Das Foto gefällt ___ Bruder. (der)",
      "dem",
      "den",
      "der",
      "gefallen مع داتيف مذكر: dem Bruder.",
      "Gefallen takes masculine dative dem Bruder."
    ],
    [
      "Jana antwortet ___ Kind. (das)",
      "dem",
      "das",
      "den",
      "antworten مع داتيف محايد: dem Kind.",
      "Antworten takes neuter dative dem Kind."
    ],
    [
      "Karim zeigt ___ Kindern zwei Fotos. (die; Plural)",
      "den",
      "die",
      "der",
      "الشخص اللي بيتعرض عليه حاجة داتيف جمع: den Kindern.",
      "The recipients take plural dative den Kindern."
    ]
  ],
  "praesens": [
    [
      "Du ___ die Artikel. (vergleichen)",
      "vergleichst",
      "vergleicht",
      "vergleichen",
      "du: vergleichst.",
      "Du takes vergleichst."
    ],
    [
      "Lea ___ auf beide Karten. (schauen)",
      "schaut",
      "schaust",
      "schauen",
      "sie مفرد: schaut.",
      "Singular sie takes schaut."
    ],
    [
      "Wir ___ vollständige Sätze. (lesen)",
      "lesen",
      "lest",
      "liest",
      "wir: lesen.",
      "Wir takes lesen."
    ],
    [
      "Ihr ___ die Felder zu. (ordnen)",
      "ordnet",
      "ordnen",
      "ordne",
      "ihr: ordnet؛ zu في آخر الجملة.",
      "Ihr takes ordnet; separable zu ends the clause."
    ]
  ],
  "possessiv": [
    [
      "Ben zeigt ___ Schwester die Karten. (Ben; die)",
      "seiner",
      "seine",
      "seinen",
      "داتيف مؤنث: seiner Schwester.",
      "Feminine dative takes seiner Schwester."
    ],
    [
      "Jana hilft ___ Bruder. (Jana; der)",
      "ihrem",
      "ihren",
      "ihrer",
      "داتيف مذكر: ihrem Bruder.",
      "Masculine dative takes ihrem Bruder."
    ],
    [
      "Wir antworten ___ Kind. (wir; das)",
      "unserem",
      "unser",
      "unseren",
      "داتيف محايد: unserem Kind.",
      "Neuter dative takes unserem Kind."
    ],
    [
      "Omar zeigt ___ Freunden das Heft. (Omar; Plural)",
      "seinen",
      "seine",
      "seiner",
      "داتيف جمع: seinen Freunden.",
      "Plural dative takes seinen Freunden."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt neben ___ Bild. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع محايد داتيف: dem Bild.",
      "Fixed location takes neuter dative dem Bild."
    ],
    [
      "Lea legt die Karte neben ___ Bild. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه مع محايد أكوزاتيف: das Bild.",
      "Destination takes neuter accusative das Bild."
    ],
    [
      "Das Heft liegt unter ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع مذكر داتيف: dem Tisch.",
      "Fixed location takes masculine dative dem Tisch."
    ],
    [
      "Ben legt das Heft unter ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع مذكر أكوزاتيف: den Tisch.",
      "Destination takes masculine accusative den Tisch."
    ]
  ],
  "negation": [
    [
      "Das Blatt zeigt ___ Wetterbericht. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen.",
      "Masculine direct object takes keinen."
    ],
    [
      "Das ist ___ Zeitreihe. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "خبر مؤنث: keine.",
      "Feminine predicate noun takes keine."
    ],
    [
      "Nina nennt ___ Aufnahmezeitpunkt. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen.",
      "Masculine direct object takes keinen."
    ],
    [
      "Sie messen heute ___ Temperaturen. (kein; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine.",
      "Plural direct object takes keine."
    ]
  ]
};
