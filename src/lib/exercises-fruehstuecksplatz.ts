import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const fruehstuecksplatzGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Brotkorb steht links. (Brotkorb)",
      "Der",
      "Die",
      "Das",
      "Brotkorb مذكر: der.",
      "Brotkorb is masculine: der."
    ],
    [
      "___ Obstschale steht in der Mitte. (Obstschale)",
      "Die",
      "Der",
      "Das",
      "Obstschale مؤنث: die.",
      "Obstschale is feminine: die."
    ],
    [
      "___ Zusammenhang hilft beim Verstehen. (Zusammenhang)",
      "Der",
      "Das",
      "Die",
      "Zusammenhang مذكر: der.",
      "Zusammenhang is masculine: der."
    ],
    [
      "___ Gefäß ist aus Glas. (Gefäß)",
      "Das",
      "Die",
      "Der",
      "Gefäß محايد: das.",
      "Gefäß is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Emil bringt ___ Brotkorb. (der)",
      "den",
      "dem",
      "der",
      "Brotkorb مذكر أكوزاتيف: den.",
      "Brotkorb is masculine accusative: den."
    ],
    [
      "Tessa holt ___ Obstschale. (die)",
      "die",
      "der",
      "dem",
      "Obstschale مؤنث أكوزاتيف: die.",
      "Obstschale is feminine accusative: die."
    ],
    [
      "Farid ergänzt ___ Beispielsatz. (der)",
      "den",
      "dem",
      "der",
      "Beispielsatz مذكر أكوزاتيف: den.",
      "Beispielsatz is masculine accusative: den."
    ],
    [
      "Rosa nimmt ___ Buch. (das)",
      "das",
      "dem",
      "der",
      "Buch محايد أكوزاتيف: das.",
      "Buch is neuter accusative: das."
    ]
  ],
  "praesens": [
    [
      "Emil ___ vier Gläser. (zählen)",
      "zählt",
      "zählst",
      "zählen",
      "er مفرد مع zählen: zählt.",
      "Singular er takes zählt."
    ],
    [
      "Du ___ den ganzen Satz. (lesen)",
      "liest",
      "lest",
      "lese",
      "du مع lesen: liest.",
      "Du takes liest."
    ],
    [
      "Wir ___ die Einladung nicht. (ändern)",
      "ändern",
      "ändert",
      "änderst",
      "wir مع ändern: ändern.",
      "Wir takes ändern."
    ],
    [
      "Pia ___ den Zusammenhang. (erklären)",
      "erklärt",
      "erklärst",
      "erklären",
      "sie مفرد مع erklären: erklärt.",
      "Singular sie takes erklärt."
    ]
  ],
  "konnektoren-b1": [
    [
      "Emil holt ein Glas, ___ erst drei auf dem Tisch stehen. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "السبب في جملة فرعية: weil.",
      "Weil introduces a reason in a dependent clause."
    ],
    [
      "___ der Tisch wechselt, bleibt die Uhrzeit gleich. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض مع بقاء النتيجة: obwohl.",
      "Obwohl introduces a contrast that does not prevent the result."
    ],
    [
      "Pia liest den Satz vor, ___ Farid den Zusammenhang hört. (Zweck)",
      "damit",
      "obwohl",
      "weil",
      "غرض بفاعل مختلف: damit.",
      "Purpose with a different subject takes damit."
    ],
    [
      "Tessa prüft, ___ die Schale noch Platz hat. (Ja/Nein-Frage)",
      "ob",
      "weil",
      "damit",
      "سؤال غير مباشر بنعم أو لأ: ob.",
      "Use ob for an indirect yes/no question."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Korb steht neben ___ Tellern. (die; Wo?)",
      "den",
      "die",
      "der",
      "جمع داتيف مع مكان ثابت: den Tellern.",
      "Fixed location takes plural dative: den Tellern."
    ],
    [
      "Emil stellt den Korb neben ___ Teller. (die; Wohin?)",
      "die",
      "den",
      "der",
      "جمع أكوزاتيف مع اتجاه: die Teller.",
      "Destination takes plural accusative: die Teller."
    ],
    [
      "Die Bücher liegen auf ___ Regal. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع auf: داتيف dem Regal.",
      "Fixed location with auf takes dative: dem Regal."
    ],
    [
      "Rosa legt die Bücher auf ___ Regal. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه مع auf: أكوزاتيف das Regal.",
      "Destination with auf takes accusative: das Regal."
    ]
  ],
  "negation": [
    [
      "Die Notiz ist ___ Einkaufsliste. (eine)",
      "keine",
      "kein",
      "keinen",
      "Einkaufsliste مؤنث نوميناتيف: keine.",
      "Einkaufsliste is feminine nominative: keine."
    ],
    [
      "Die Freunde sind noch ___ angekommen. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الوصول هنا: nicht.",
      "Use nicht to negate arrival here."
    ],
    [
      "Der Beispielsatz beschreibt ___ allgemeine Materialregel. (eine)",
      "keine",
      "kein",
      "keinen",
      "Materialregel مؤنث أكوزاتيف: keine.",
      "Materialregel is feminine accusative: keine."
    ],
    [
      "Auf der ersten Karte steht ___ vollständiger Satz. (ein)",
      "kein",
      "keinen",
      "keine",
      "Satz مذكر نوميناتيف: kein.",
      "Satz is masculine nominative: kein."
    ]
  ]
};
