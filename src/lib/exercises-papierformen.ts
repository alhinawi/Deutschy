import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const papierformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Karteikarte hat Linien. (Karteikarte)",
      "Die",
      "Der",
      "Das",
      "Karteikarte مؤنث: die.",
      "Karteikarte is feminine: die."
    ],
    [
      "___ Etikett ist hier leer. (Etikett)",
      "Das",
      "Der",
      "Die",
      "Etikett محايد: das.",
      "Etikett is neuter: das."
    ],
    [
      "___ Variante bleibt gültig. (Variante)",
      "Die",
      "Der",
      "Das",
      "Variante مؤنث: die.",
      "Variante is feminine: die."
    ],
    [
      "___ Ring ist schwarz. (Ring)",
      "Der",
      "Die",
      "Das",
      "Ring مذكر: der.",
      "Ring is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Lea zeigt ___ Partner die Karte. (der)",
      "dem",
      "den",
      "der",
      "متلقي مذكر داتيف: dem Partner.",
      "Masculine dative recipient: dem Partner."
    ],
    [
      "Amir antwortet ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "antworten مع داتيف مؤنث: der Partnerin.",
      "Antworten takes feminine dative der Partnerin."
    ],
    [
      "Jule hilft ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "helfen مع جمع داتيف: den Lernenden.",
      "Helfen takes plural dative den Lernenden."
    ],
    [
      "Das Heft gehört ___ Kind. (das)",
      "dem",
      "das",
      "den",
      "gehören مع محايد داتيف: dem Kind.",
      "Gehören takes neuter dative dem Kind."
    ]
  ],
  "praesens": [
    [
      "Lea ___ die Namen ab. (decken)",
      "deckt",
      "decken",
      "deckst",
      "sie مفرد: deckt.",
      "Singular sie takes deckt."
    ],
    [
      "Du ___ die Frage. (ändern)",
      "änderst",
      "ändert",
      "ändern",
      "du: änderst.",
      "Du takes änderst."
    ],
    [
      "Amir ___ die Formen. (vergleichen)",
      "vergleicht",
      "vergleichen",
      "vergleichst",
      "er: vergleicht.",
      "Singular er takes vergleicht."
    ],
    [
      "Wir ___ keine Preise. (erfinden)",
      "erfinden",
      "erfindet",
      "erfinde",
      "wir: erfinden.",
      "Wir takes erfinden."
    ]
  ],
  "possessiv": [
    [
      "Lea öffnet ___ Heft. (Lea; das)",
      "ihr",
      "ihre",
      "ihren",
      "Lea مع محايد أكوزاتيف: ihr Heft.",
      "Lea takes ihr with neuter accusative Heft."
    ],
    [
      "Karim liest ___ Blatt. (Karim; das)",
      "sein",
      "seine",
      "seinen",
      "Karim مع محايد أكوزاتيف: sein Blatt.",
      "Karim takes sein with neuter accusative Blatt."
    ],
    [
      "Nele ändert ___ Frage. (Nele; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nele مع مؤنث أكوزاتيف: ihre Frage.",
      "Nele takes ihre with feminine accusative Frage."
    ],
    [
      "Wir überarbeiten ___ Beschreibung. (wir; die)",
      "unsere",
      "unser",
      "unseren",
      "wir مع مؤنث أكوزاتيف: unsere Beschreibung.",
      "Wir takes unsere with feminine accusative Beschreibung."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Wörterbuch liegt neben ___ Vorlage. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع neben: داتيف der Vorlage.",
      "Fixed location with neben takes dative der Vorlage."
    ],
    [
      "Nele legt das Wörterbuch neben ___ Vorlage. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع neben: أكوزاتيف die Vorlage.",
      "Destination with neben takes accusative die Vorlage."
    ],
    [
      "Die Frage steht auf ___ Blatt. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع auf: داتيف dem Blatt.",
      "Fixed location with auf takes dative dem Blatt."
    ],
    [
      "Nele schreibt die Frage auf ___ Blatt. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع auf: أكوزاتيف das Blatt.",
      "Destination with auf takes accusative das Blatt."
    ]
  ],
  "negation": [
    [
      "Auf dem Etikett steht ___ Name. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "فاعل مذكر: kein Name.",
      "Masculine subject: kein Name."
    ],
    [
      "Das ist ___ Bestandsprüfung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مؤنث: keine Bestandsprüfung.",
      "Feminine predicate noun: keine Bestandsprüfung."
    ],
    [
      "Wir erfinden ___ Preis. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Preis.",
      "Masculine direct object: keinen Preis."
    ],
    [
      "Die Rückseite ist ___ sichtbar. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي sichtbar: nicht.",
      "Negate sichtbar with nicht."
    ]
  ]
};
