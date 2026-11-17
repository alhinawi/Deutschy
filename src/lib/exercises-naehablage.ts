import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const naehablageGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Knopf auf dem Foto ist weiß. (Knopf)",
      "Der",
      "Die",
      "Das",
      "Knopf مذكر: der.",
      "Knopf is masculine: der."
    ],
    [
      "___ Nadelkissen liegt auf dem Stoff. (Nadelkissen)",
      "Das",
      "Der",
      "Die",
      "Nadelkissen محايد: das.",
      "Nadelkissen is neuter: das."
    ],
    [
      "___ Überschrift beschreibt den Bereich. (Überschrift)",
      "Die",
      "Der",
      "Das",
      "Überschrift مؤنث: die.",
      "Überschrift is feminine: die."
    ],
    [
      "___ Merkmal verbindet die Beispiele. (Merkmal)",
      "Das",
      "Die",
      "Der",
      "Merkmal محايد: das.",
      "Merkmal is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Mara verdeckt ___ Namen. (der; Singular)",
      "den",
      "dem",
      "der",
      "مفعول مباشر مذكر مفرد: den Namen.",
      "Masculine singular direct object: den Namen."
    ],
    [
      "Luis sieht ___ Knopf. (ein)",
      "einen",
      "einem",
      "einer",
      "Knopf مذكر أكوزاتيف: einen.",
      "Knopf is masculine accusative: einen."
    ],
    [
      "Sina ändert ___ Überschrift. (die)",
      "die",
      "der",
      "den",
      "Überschrift مؤنث أكوزاتيف: die.",
      "Überschrift is feminine accusative: die."
    ],
    [
      "Keno notiert ___ Vorschlag. (sein)",
      "seinen",
      "seinem",
      "seiner",
      "Vorschlag مذكر أكوزاتيف: seinen.",
      "Vorschlag is masculine accusative: seinen."
    ]
  ],
  "praesens": [
    [
      "Mara ___ ein Blatt über die Namen. (legen)",
      "legt",
      "legst",
      "legen",
      "sie مفرد مع legen: legt.",
      "Singular sie takes legt."
    ],
    [
      "Du ___ den letzten Teil. (sagen)",
      "sagst",
      "sagt",
      "sagen",
      "du مع sagen: sagst.",
      "Du takes sagst."
    ],
    [
      "Wir ___ die Formen. (vergleichen)",
      "vergleichen",
      "vergleicht",
      "vergleichst",
      "wir مع vergleichen: vergleichen.",
      "Wir takes vergleichen."
    ],
    [
      "Milan ___ die Verwendung. (verstehen)",
      "versteht",
      "verstehst",
      "verstehen",
      "er مع verstehen: versteht.",
      "Er takes versteht."
    ]
  ],
  "konnektoren-b1": [
    [
      "Milan fragt nach, ___ er nur eine Verwendung kennt. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب بجملة فرعية: weil.",
      "Weil introduces the reason."
    ],
    [
      "___ die Fotos verschieden sind, verwenden sie dasselbe Wort. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض مع استمرار النتيجة: obwohl.",
      "Obwohl introduces a contrast that does not prevent the result."
    ],
    [
      "Sina nennt das Merkmal, ___ andere die Auswahl verstehen können. (Zweck)",
      "damit",
      "obwohl",
      "seitdem",
      "غرض والفاعل مختلف: damit.",
      "Damit introduces the purpose with a different subject."
    ],
    [
      "Sie schreibt den Vorschlag getrennt auf, ___ er nicht zur jetzigen Aufgabe gehört. (Grund)",
      "weil",
      "damit",
      "obwohl",
      "الجزء التاني بيوضح السبب: weil.",
      "The second clause gives the reason: weil."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Blatt liegt über ___ Namen. (die; Plural, Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت مع über: داتيف جمع den Namen.",
      "Fixed position with über takes dative plural: den Namen."
    ],
    [
      "Mara legt das Blatt über ___ Namen. (die; Plural, Wohin?)",
      "die",
      "den",
      "der",
      "اتجاه مع über: أكوزاتيف جمع die Namen.",
      "Destination with über takes accusative plural: die Namen."
    ],
    [
      "Der Knopf ist an ___ Hemd. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد an: داتيف dem Hemd.",
      "Fixed location after an takes dative: dem Hemd."
    ],
    [
      "Milan legt die Karte neben ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه بعد neben: أكوزاتيف das Foto.",
      "Destination after neben takes accusative: das Foto."
    ]
  ],
  "negation": [
    [
      "Das Nadelkissen ist ___ dritte Bedeutung von Knopf. (eine)",
      "keine",
      "kein",
      "keinen",
      "Bedeutung مؤنث نوميناتيف: keine.",
      "Bedeutung is feminine nominative: keine."
    ],
    [
      "Sie haben ___ Materialprüfung durchgeführt. (eine)",
      "keine",
      "kein",
      "keinen",
      "Materialprüfung مؤنث أكوزاتيف: keine.",
      "Materialprüfung is feminine accusative: keine."
    ],
    [
      "Der Gruppenname passt ___ zu allen Fotos. (nicht / kein)",
      "nicht",
      "keinen",
      "keine",
      "نفي الفعل مع شبه الجملة: nicht.",
      "Use nicht to negate the verb phrase here."
    ],
    [
      "Luis hat ___ echtes Nadelkissen auf dem Tisch. (ein)",
      "kein",
      "keine",
      "keinen",
      "Nadelkissen محايد أكوزاتيف: kein.",
      "Nadelkissen is neuter accusative: kein."
    ]
  ]
};
