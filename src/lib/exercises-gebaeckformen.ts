import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const gebaeckformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Brezel liegt auf dem Teller. (Brezel)",
      "Die",
      "Der",
      "Das",
      "Brezel مؤنث: die.",
      "Brezel is feminine: die."
    ],
    [
      "___ Bagel ist aufgeschnitten. (Bagel)",
      "Der",
      "Die",
      "Das",
      "Bagel مذكر: der.",
      "Bagel is masculine: der."
    ],
    [
      "___ Hälfte liegt oben. (Hälfte)",
      "Die",
      "Der",
      "Das",
      "Hälfte مؤنث: die.",
      "Hälfte is feminine: die."
    ],
    [
      "___ Gebäck liegt in der Mitte. (Gebäck)",
      "Das",
      "Der",
      "Die",
      "Gebäck محايد: das.",
      "Gebäck is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Die Karte liegt neben ___ Teller. (der)",
      "dem",
      "den",
      "der",
      "مكان ثابت بعد neben: داتيف dem Teller.",
      "Fixed location after neben takes dative dem Teller."
    ],
    [
      "Lea hilft ___ Freund. (der)",
      "dem",
      "den",
      "des",
      "helfen مع داتيف: dem Freund.",
      "Helfen takes dative: dem Freund."
    ],
    [
      "Die Frage gehört zu ___ Übung. (die)",
      "der",
      "die",
      "den",
      "بعد zu داتيف: der Übung.",
      "Zu takes dative: der Übung."
    ],
    [
      "Karim spricht mit ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "بعد mit جمع داتيف: den Lernenden.",
      "Mit takes plural dative: den Lernenden."
    ]
  ],
  "praesens": [
    [
      "Lea ___ nach dem Namen. (fragen)",
      "fragt",
      "fragst",
      "fragen",
      "sie مفرد: fragt.",
      "Singular sie takes fragt."
    ],
    [
      "Du ___ zwei Hälften. (sehen)",
      "siehst",
      "sieht",
      "sehen",
      "du: siehst.",
      "Du takes siehst."
    ],
    [
      "Karim ___ beide Formen. (notieren)",
      "notiert",
      "notierst",
      "notieren",
      "er: notiert.",
      "Singular er takes notiert."
    ],
    [
      "Wir ___ keine Zutaten. (erraten)",
      "erraten",
      "errät",
      "erratet",
      "wir: erraten.",
      "Wir takes erraten."
    ]
  ],
  "possessiv": [
    [
      "Nele liest ___ Notiz. (Nele; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nele مع مؤنث أكوزاتيف: ihre Notiz.",
      "Nele takes ihre with feminine accusative Notiz."
    ],
    [
      "Amir prüft ___ Satz. (Amir; der)",
      "seinen",
      "sein",
      "seinem",
      "Amir مع مذكر أكوزاتيف: seinen Satz.",
      "Amir takes seinen with masculine accusative Satz."
    ],
    [
      "Jule öffnet ___ Heft. (Jule; das)",
      "ihr",
      "ihre",
      "ihren",
      "Jule مع محايد أكوزاتيف: ihr Heft.",
      "Jule takes ihr with neuter accusative Heft."
    ],
    [
      "Wir präzisieren ___ Fragen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Fragen.",
      "Wir takes unsere with plural accusative Fragen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Wortkarte liegt neben ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem Foto.",
      "Fixed location with neben takes dative dem Foto."
    ],
    [
      "Lea legt die Wortkarte neben ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das Foto.",
      "Destination with neben takes accusative das Foto."
    ],
    [
      "Die Brezel liegt auf ___ Teller. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع auf: داتيف dem Teller.",
      "Fixed location with auf takes dative dem Teller."
    ],
    [
      "Karim legt die Karte auf ___ Teller. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع auf: أكوزاتيف den Teller.",
      "Destination with auf takes accusative den Teller."
    ]
  ],
  "negation": [
    [
      "Der Text enthält ___ Preis. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Preis.",
      "Masculine direct object: keinen Preis."
    ],
    [
      "Das ist ___ Angebot. (kein; das)",
      "kein",
      "keinen",
      "keine",
      "محايد بعد ist: kein Angebot.",
      "Neuter predicate noun: kein Angebot."
    ],
    [
      "Wir erfinden ___ Antwort. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Antwort.",
      "Feminine direct object: keine Antwort."
    ],
    [
      "Die Frage ist noch ___ beantwortet. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي beantwortet: nicht.",
      "Negate beantwortet with nicht."
    ]
  ]
};
