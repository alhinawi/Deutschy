import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const badbilderGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Wattestäbchen liegt auf dem Löffel. (Wattestäbchen)",
      "Das",
      "Der",
      "Die",
      "Wattestäbchen محايد: das.",
      "Wattestäbchen is neuter: das."
    ],
    [
      "___ Badeente trägt einen Hut. (Badeente)",
      "Die",
      "Der",
      "Das",
      "Badeente مؤنث: die.",
      "Badeente is feminine: die."
    ],
    [
      "___ Schnabel ist orange-rot. (Schnabel)",
      "Der",
      "Die",
      "Das",
      "Schnabel مذكر: der.",
      "Schnabel is masculine: der."
    ],
    [
      "___ Spielzeug steht am Poolrand. (Spielzeug)",
      "Das",
      "Der",
      "Die",
      "Spielzeug محايد: das.",
      "Spielzeug is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Lea zeigt ___ Partner das Foto. (der)",
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
      "Der Hut gehört ___ Spielzeug. (das)",
      "dem",
      "das",
      "den",
      "gehören مع محايد داتيف: dem Spielzeug.",
      "Gehören takes neuter dative dem Spielzeug."
    ]
  ],
  "praesens": [
    [
      "Lea ___ den Namen. (wiederholen)",
      "wiederholt",
      "wiederholen",
      "wiederholst",
      "sie مفرد: wiederholt.",
      "Singular sie takes wiederholt."
    ],
    [
      "Du ___ den Ort. (beschreiben)",
      "beschreibst",
      "beschreibt",
      "beschreiben",
      "du: beschreibst.",
      "Du takes beschreibst."
    ],
    [
      "Die linke Ente ___ einen Hut. (tragen)",
      "trägt",
      "tragt",
      "tragen",
      "مفرد: trägt.",
      "Singular subject takes trägt."
    ],
    [
      "Wir ___ die Beobachtungen. (trennen)",
      "trennen",
      "trennt",
      "trenne",
      "wir: trennen.",
      "Wir takes trennen."
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
      "Karim liest ___ Notiz. (Karim; die)",
      "seine",
      "sein",
      "seinen",
      "Karim مع مؤنث أكوزاتيف: seine Notiz.",
      "Karim takes seine with feminine accusative Notiz."
    ],
    [
      "Nele ändert ___ Satz. (Nele; der)",
      "ihren",
      "ihr",
      "ihre",
      "Nele مع مذكر أكوزاتيف: ihren Satz.",
      "Nele takes ihren with masculine accusative Satz."
    ],
    [
      "Wir prüfen ___ Beschreibung. (wir; die)",
      "unsere",
      "unser",
      "unseren",
      "wir مع مؤنث أكوزاتيف: unsere Beschreibung.",
      "Wir takes unsere with feminine accusative Beschreibung."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Wort steht in ___ Spalte. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع in: داتيف der Spalte.",
      "Fixed location with in takes dative der Spalte."
    ],
    [
      "Amir schreibt das Wort in ___ Spalte. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع in: أكوزاتيف die Spalte.",
      "Destination with in takes accusative die Spalte."
    ],
    [
      "Die Notiz steht auf ___ Blatt. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع auf: داتيف dem Blatt.",
      "Fixed location with auf takes dative dem Blatt."
    ],
    [
      "Nele schreibt die Notiz auf ___ Blatt. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع auf: أكوزاتيف das Blatt.",
      "Destination with auf takes accusative das Blatt."
    ]
  ],
  "negation": [
    [
      "Die rechte Ente trägt ___ Hut. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Hut.",
      "Masculine direct object: keinen Hut."
    ],
    [
      "Das Foto ist ___ Testbericht. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "مذكر بعد ist: kein Testbericht.",
      "Masculine predicate noun: kein Testbericht."
    ],
    [
      "Wir geben ___ Kaufempfehlung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Kaufempfehlung.",
      "Feminine direct object: keine Kaufempfehlung."
    ],
    [
      "Die Enten stehen ___ in einer Badewanne. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي المكان هنا: nicht.",
      "Negate this location with nicht."
    ]
  ]
};
