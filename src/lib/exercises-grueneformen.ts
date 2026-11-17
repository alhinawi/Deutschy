import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const grueneformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Zucchini liegt auf der Karte. (übliche feminine Form)",
      "Die",
      "Der",
      "Das",
      "الصيغة المؤنثة المعتادة: die Zucchini.",
      "The usual feminine form is die Zucchini."
    ],
    [
      "___ Limette ist rund. (Limette)",
      "Die",
      "Das",
      "Der",
      "Limette مؤنث: die.",
      "Limette is feminine: die."
    ],
    [
      "___ Hinweis ist zu kurz. (Hinweis)",
      "Der",
      "Die",
      "Das",
      "Hinweis مذكر: der.",
      "Hinweis is masculine: der."
    ],
    [
      "___ Merkmal fehlt. (Merkmal)",
      "Das",
      "Der",
      "Die",
      "Merkmal محايد: das.",
      "Merkmal is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Mara beschreibt ___ Karte. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Karte.",
      "Feminine direct object: die Karte."
    ],
    [
      "Sami nennt ___ Hinweis. (der)",
      "den",
      "der",
      "dem",
      "مفعول مذكر: den Hinweis.",
      "Masculine direct object: den Hinweis."
    ],
    [
      "Nora ergänzt ___ Beispiel. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Beispiel.",
      "Neuter direct object: das Beispiel."
    ],
    [
      "Emil prüft ___ Antworten. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Antworten.",
      "Plural direct object: die Antworten."
    ]
  ],
  "praesens": [
    [
      "Mara ___ die Form. (nennen)",
      "nennt",
      "nennst",
      "nennen",
      "sie مفرد: nennt.",
      "Singular sie takes nennt."
    ],
    [
      "Du ___ die Regel. (lesen)",
      "liest",
      "lest",
      "lesen",
      "du مع lesen: liest.",
      "Du takes liest."
    ],
    [
      "Emil ___ die Karte. (drehen)",
      "dreht",
      "drehst",
      "drehen",
      "er: dreht.",
      "Singular er takes dreht."
    ],
    [
      "Wir ___ das Ergebnis. (berichtigen)",
      "berichtigen",
      "berichtigt",
      "berichtigst",
      "wir: berichtigen.",
      "Wir takes berichtigen."
    ]
  ],
  "possessiv": [
    [
      "Mara zeigt ___ Karte. (Mara; die)",
      "ihre",
      "ihr",
      "ihren",
      "Mara مع مؤنث أكوزاتيف: ihre.",
      "Mara takes ihre with feminine accusative Karte."
    ],
    [
      "Emil liest ___ Entwurf. (Emil; der)",
      "seinen",
      "sein",
      "seinem",
      "Emil مع مذكر أكوزاتيف: seinen.",
      "Emil takes seinen with masculine accusative Entwurf."
    ],
    [
      "Nora korrigiert ___ Beispiel. (Nora; das)",
      "ihr",
      "ihre",
      "ihren",
      "Nora مع محايد أكوزاتيف: ihr.",
      "Nora takes ihr with neuter accusative Beispiel."
    ],
    [
      "Wir erklären ___ Regeln. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere.",
      "Wir takes unsere with plural accusative Regeln."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Wort steht unter ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت: داتيف dem Foto.",
      "Fixed location takes dative dem Foto."
    ],
    [
      "Mara schreibt das Wort unter ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه الكتابة: أكوزاتيف das Foto.",
      "Destination of writing takes accusative das Foto."
    ],
    [
      "Die Karte liegt neben ___ Liste. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت: داتيف der Liste.",
      "Fixed location takes dative der Liste."
    ],
    [
      "Emil legt die Karte neben ___ Liste. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه الحركة: أكوزاتيف die Liste.",
      "Destination takes accusative die Liste."
    ]
  ],
  "negation": [
    [
      "Die Karte nennt ___ Preis. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Preis.",
      "Masculine direct object: keinen Preis."
    ],
    [
      "Das ist ___ offizielle Prüfung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "اسم مؤنث بعد ist: keine.",
      "Feminine predicate noun takes keine."
    ],
    [
      "Wir ändern ___ altes Ergebnis heimlich. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "مفعول محايد: kein altes Ergebnis.",
      "Neuter direct object: kein altes Ergebnis."
    ],
    [
      "Die Runde beginnt ___ sofort. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي sofort: nicht.",
      "Negate sofort with nicht."
    ]
  ]
};
