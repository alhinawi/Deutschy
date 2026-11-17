import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const gewuerzbilderGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Zimtstange liegt auf dem Bild links. (Zimtstange)",
      "Die",
      "Der",
      "Das",
      "Zimtstange مؤنث: die.",
      "Zimtstange is feminine: die."
    ],
    [
      "___ Muskatnuss ist braun. (Muskatnuss)",
      "Die",
      "Das",
      "Der",
      "Muskatnuss مؤنث: die.",
      "Muskatnuss is feminine: die."
    ],
    [
      "___ Hinweis ist sichtbar. (Hinweis)",
      "Der",
      "Die",
      "Das",
      "Hinweis مذكر: der.",
      "Hinweis is masculine: der."
    ],
    [
      "___ Behalten wird später geprüft. (Behalten)",
      "Das",
      "Die",
      "Der",
      "Behalten اسم محايد: das.",
      "Nominalized Behalten is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Eva hilft ___ Partner. (der)",
      "dem",
      "den",
      "der",
      "helfen مع مذكر داتيف: dem Partner.",
      "Helfen takes masculine dative dem Partner."
    ],
    [
      "Mats antwortet ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "antworten مع مؤنث داتيف: der Partnerin.",
      "Antworten takes feminine dative der Partnerin."
    ],
    [
      "Das Blatt gehört ___ Kind. (das)",
      "dem",
      "das",
      "den",
      "gehören مع محايد داتيف: dem Kind.",
      "Gehören takes neuter dative dem Kind."
    ],
    [
      "Dana erklärt es ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "متلقي جمع داتيف: den Lernenden.",
      "Plural indirect object takes den Lernenden."
    ]
  ],
  "praesens": [
    [
      "Felix ___ die Vorlagen ab. (abdecken)",
      "deckt",
      "deckst",
      "decken",
      "er: deckt ... ab.",
      "Singular er takes deckt ... ab."
    ],
    [
      "Du ___ das ü. (markieren)",
      "markierst",
      "markiert",
      "markieren",
      "du: markierst.",
      "Du takes markierst."
    ],
    [
      "Wir ___ die Unterstützung. (notieren)",
      "notieren",
      "notiert",
      "notierst",
      "wir: notieren.",
      "Wir takes notieren."
    ],
    [
      "Lina ___ die Oberfläche. (beschreiben)",
      "beschreibt",
      "beschreibst",
      "beschreiben",
      "sie مفرد: beschreibt.",
      "Singular sie takes beschreibt."
    ]
  ],
  "possessiv": [
    [
      "Eva kontrolliert ___ Wörter. (Eva; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "Eva مع جمع أكوزاتيف: ihre.",
      "Eva takes ihre with plural accusative Wörter."
    ],
    [
      "Felix liest ___ Satz vor. (Felix; der)",
      "seinen",
      "sein",
      "seinem",
      "Felix مع مذكر أكوزاتيف: seinen.",
      "Felix takes seinen with masculine accusative Satz."
    ],
    [
      "Dana ergänzt ___ Protokoll. (Dana; das)",
      "ihr",
      "ihre",
      "ihren",
      "Dana مع محايد أكوزاتيف: ihr.",
      "Dana takes ihr with neuter accusative Protokoll."
    ],
    [
      "Wir wiederholen ___ Aufgabe. (wir; die)",
      "unsere",
      "unser",
      "unseren",
      "wir مع مؤنث أكوزاتيف: unsere.",
      "Wir takes unsere with feminine accusative Aufgabe."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Wörter stehen unter ___ Bildern. (die; Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت مع جمع داتيف: den Bildern.",
      "Fixed location takes plural dative den Bildern."
    ],
    [
      "Eva legt die Karten unter ___ Bilder. (die; Plural; Wohin?)",
      "die",
      "den",
      "der",
      "اتجاه الحركة مع جمع أكوزاتيف: die Bilder.",
      "Destination takes plural accusative die Bilder."
    ],
    [
      "Das Blatt liegt in ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت: داتيف der Mappe.",
      "Fixed location takes dative der Mappe."
    ],
    [
      "Felix legt das Blatt in ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه الحركة: أكوزاتيف die Mappe.",
      "Destination takes accusative die Mappe."
    ]
  ],
  "negation": [
    [
      "Die Beschreibung nennt ___ Geruchsstärke. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Das ist ___ standardisierter Test. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "مذكر بعد ist: kein.",
      "Masculine predicate noun takes kein."
    ],
    [
      "Wir zeigen ___ Hinweis. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Hinweis.",
      "Masculine direct object takes keinen Hinweis."
    ],
    [
      "Die spätere Wiederholung ist noch ___ erfolgt. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Negate the verb with nicht."
    ]
  ]
};
