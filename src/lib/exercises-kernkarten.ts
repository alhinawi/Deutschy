import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const kernkartenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Cashewkern ist auf dem Foto gebogen. (Cashewkern)",
      "Der",
      "Die",
      "Das",
      "Cashewkern مذكر: der.",
      "Cashewkern is masculine: der."
    ],
    [
      "___ Pinienkern liegt in der Schale. (Pinienkern)",
      "Der",
      "Das",
      "Die",
      "Pinienkern مذكر: der.",
      "Pinienkern is masculine: der."
    ],
    [
      "___ Bezug ist unklar. (Bezug)",
      "Der",
      "Die",
      "Das",
      "Bezug مذكر: der.",
      "Bezug is masculine: der."
    ],
    [
      "___ Protokoll nennt die Änderung. (Protokoll)",
      "Das",
      "Der",
      "Die",
      "Protokoll محايد: das.",
      "Protokoll is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Jana markiert ___ Wortteil. (der)",
      "den",
      "der",
      "dem",
      "مفعول مذكر: den Wortteil.",
      "Masculine direct object takes den Wortteil."
    ],
    [
      "Tim liest ___ Karte. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Karte.",
      "Feminine direct object takes die Karte."
    ],
    [
      "Sora prüft ___ Ergebnis. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Ergebnis.",
      "Neuter direct object takes das Ergebnis."
    ],
    [
      "Nils vergleicht ___ Versuche. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Versuche.",
      "Plural direct object takes die Versuche."
    ]
  ],
  "praesens": [
    [
      "Jana ___ den Wortteil. (markieren)",
      "markiert",
      "markierst",
      "markieren",
      "sie مفرد: markiert.",
      "Singular sie takes markiert."
    ],
    [
      "Du ___ den Auftrag. (wiederholen)",
      "wiederholst",
      "wiederholt",
      "wiederholen",
      "du: wiederholst.",
      "Du takes wiederholst."
    ],
    [
      "Wir ___ die Änderung fest. (festhalten)",
      "halten",
      "haltet",
      "hältst",
      "wir: halten ... fest.",
      "Wir takes halten ... fest."
    ],
    [
      "Paul ___ den Bezug. (verstehen)",
      "versteht",
      "verstehst",
      "verstehen",
      "er: versteht.",
      "Singular er takes versteht."
    ]
  ],
  "possessiv": [
    [
      "Jana markiert ___ Karte. (Jana; die)",
      "ihre",
      "ihr",
      "ihren",
      "Jana مع مؤنث أكوزاتيف: ihre.",
      "Jana takes ihre with feminine accusative Karte."
    ],
    [
      "Tim liest ___ Satz vor. (Tim; der)",
      "seinen",
      "sein",
      "seinem",
      "Tim مع مذكر أكوزاتيف: seinen.",
      "Tim takes seinen with masculine accusative Satz."
    ],
    [
      "Sora ergänzt ___ Protokoll. (Sora; das)",
      "ihr",
      "ihre",
      "ihren",
      "Sora مع محايد أكوزاتيف: ihr.",
      "Sora takes ihr with neuter accusative Protokoll."
    ],
    [
      "Wir prüfen ___ Anweisungen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere.",
      "Wir takes unsere with plural accusative Anweisungen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt unter ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت: داتيف dem Foto.",
      "Fixed location takes dative dem Foto."
    ],
    [
      "Paul legt die Karte unter ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه الحركة: أكوزاتيف das Foto.",
      "Destination takes accusative das Foto."
    ],
    [
      "Das Blatt liegt zwischen ___ Karten. (die; Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت مع جمع داتيف: den Karten.",
      "Fixed location takes plural dative den Karten."
    ],
    [
      "Jana legt das Blatt zwischen ___ Karten. (die; Plural; Wohin?)",
      "die",
      "den",
      "der",
      "اتجاه الحركة مع جمع أكوزاتيف: die Karten.",
      "Destination takes plural accusative die Karten."
    ]
  ],
  "negation": [
    [
      "Die Anweisung nennt ___ eindeutigen Bezug. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Bezug.",
      "Masculine direct object takes keinen Bezug."
    ],
    [
      "Das ist ___ Prüfung der Intelligenz. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مؤنث بعد ist: keine.",
      "Feminine predicate noun takes keine."
    ],
    [
      "Wir haben ___ freies Abrufen geprüft. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "مفعول محايد: kein freies Abrufen.",
      "Neuter direct object takes kein freies Abrufen."
    ],
    [
      "Die Wortkarten sind ___ neu. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي neu: nicht.",
      "Negate neu with nicht."
    ]
  ]
};
