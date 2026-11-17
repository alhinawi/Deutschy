import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const kaffeeformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Espressokanne hat einen Griff. (Espressokanne)",
      "Die",
      "Der",
      "Das",
      "Espressokanne مؤنث: die.",
      "Espressokanne is feminine: die."
    ],
    [
      "___ Kaffeetasse steht auf dem Bild. (Kaffeetasse)",
      "Die",
      "Das",
      "Der",
      "Kaffeetasse مؤنث: die.",
      "Kaffeetasse is feminine: die."
    ],
    [
      "___ Bildnachweis bleibt erreichbar. (Bildnachweis)",
      "Der",
      "Die",
      "Das",
      "Bildnachweis مذكر: der.",
      "Bildnachweis is masculine: der."
    ],
    [
      "___ Quellenverzeichnis ist vollständig. (Quellenverzeichnis)",
      "Das",
      "Der",
      "Die",
      "Quellenverzeichnis محايد: das.",
      "Quellenverzeichnis is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Mira erklärt ___ Partner die Zuordnung. (der)",
      "dem",
      "den",
      "der",
      "مفعول غير مباشر مذكر داتيف: dem Partner.",
      "Masculine indirect object takes dem Partner."
    ],
    [
      "Emil folgt ___ Verweis. (der)",
      "dem",
      "den",
      "das",
      "folgen بياخد داتيف: dem Verweis.",
      "Folgen takes dative: dem Verweis."
    ],
    [
      "Tom hilft ___ Lernerin. (die)",
      "der",
      "die",
      "den",
      "helfen بياخد داتيف: der Lernerin.",
      "Helfen takes dative: der Lernerin."
    ],
    [
      "Die Notizen gehören ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "gehören بياخد داتيف وجمع: den Lernenden.",
      "Gehören takes dative; plural den Lernenden."
    ]
  ],
  "praesens": [
    [
      "Lea ___ die Mehrzahl auf. (schreiben)",
      "schreibt",
      "schreibst",
      "schreiben",
      "sie مفرد: schreibt.",
      "Singular sie takes schreibt."
    ],
    [
      "Du ___ die Rollen. (tauschen)",
      "tauschst",
      "tauscht",
      "tauschen",
      "du: tauschst.",
      "Du takes tauschst."
    ],
    [
      "Mira ___ nur die Fotos. (vertauschen)",
      "vertauscht",
      "vertauschst",
      "vertauschen",
      "sie مفرد: vertauscht.",
      "Singular sie takes vertauscht."
    ],
    [
      "Wir ___ die Quellenangaben. (bewahren)",
      "bewahren",
      "bewahrt",
      "bewahrst",
      "wir: bewahren.",
      "Wir takes bewahren."
    ]
  ],
  "possessiv": [
    [
      "Jan verschiebt ___ Wortkarten. (Jan; Plural)",
      "seine",
      "sein",
      "seinen",
      "Jan مع جمع أكوزاتيف: seine.",
      "Jan takes seine with plural accusative Wortkarten."
    ],
    [
      "Nora prüft ___ Verzeichnis. (Nora; das)",
      "ihr",
      "ihre",
      "ihren",
      "Nora مع محايد أكوزاتيف: ihr.",
      "Nora takes ihr with neuter accusative Verzeichnis."
    ],
    [
      "Wir behalten ___ Verweis. (wir; der)",
      "unseren",
      "unser",
      "unsere",
      "wir مع مذكر أكوزاتيف: unseren.",
      "Wir takes unseren with masculine accusative Verweis."
    ],
    [
      "Lea liest ___ Antwort vor. (Lea; die)",
      "ihre",
      "ihr",
      "ihren",
      "Lea مع مؤنث أكوزاتيف: ihre.",
      "Lea takes ihre with feminine accusative Antwort."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Wortkarte liegt unter ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع محايد داتيف: dem Foto.",
      "Fixed location takes neuter dative dem Foto."
    ],
    [
      "Jan legt die Wortkarte unter ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه الحركة مع محايد أكوزاتيف: das Foto.",
      "Destination takes neuter accusative das Foto."
    ],
    [
      "Die Notiz steht neben ___ Bild. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع محايد داتيف: dem Bild.",
      "Fixed location takes neuter dative dem Bild."
    ],
    [
      "Emil schreibt das Wort neben ___ Bild. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه الكتابة مع محايد أكوزاتيف: das Bild.",
      "Destination takes neuter accusative das Bild."
    ]
  ],
  "negation": [
    [
      "Die Übung ist ___ rechtliche Prüfung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "خبر مؤنث: keine.",
      "Feminine predicate noun takes keine."
    ],
    [
      "Tom macht ___ Kaffee. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen.",
      "Masculine direct object takes keinen."
    ],
    [
      "Jan braucht ___ Ortsregel. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Die Quellenangabe verschwindet ___. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Negate the verb with nicht."
    ]
  ]
};
