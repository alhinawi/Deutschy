import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const tinteundfederGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Tintenfass steht auf dem Buch. (Tintenfass)",
      "Das",
      "Der",
      "Die",
      "Tintenfass محايد: das.",
      "Tintenfass is neuter: das."
    ],
    [
      "___ Federhalter liegt auf dem Papier. (Federhalter)",
      "Der",
      "Die",
      "Das",
      "Federhalter مذكر: der.",
      "Federhalter is masculine: der."
    ],
    [
      "___ Spitze bleibt sichtbar. (Spitze)",
      "Die",
      "Der",
      "Das",
      "Spitze مؤنث: die.",
      "Spitze is feminine: die."
    ],
    [
      "___ Gefäß ist klein. (Gefäß)",
      "Das",
      "Die",
      "Der",
      "Gefäß محايد: das.",
      "Gefäß is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Die Notiz hilft ___ Lernerin. (die)",
      "der",
      "die",
      "den",
      "helfen بياخد داتيف ومؤنث: der Lernerin.",
      "Helfen takes dative; feminine der Lernerin."
    ],
    [
      "Das Foto gehört ___ Kollegen. (der)",
      "dem",
      "den",
      "der",
      "gehören بياخد داتيف: dem Kollegen.",
      "Gehören takes dative: dem Kollegen."
    ],
    [
      "Lena übt mit ___ Federhaltern. (die; Plural)",
      "den",
      "die",
      "der",
      "mit بياخد داتيف وجمع: den Federhaltern.",
      "Mit takes dative; plural den Federhaltern."
    ],
    [
      "Farid spricht von ___ Tintenfass. (das)",
      "dem",
      "das",
      "den",
      "von بياخد داتيف: dem Tintenfass.",
      "Von takes dative: dem Tintenfass."
    ]
  ],
  "praesens": [
    [
      "Mia ___ die Karten um. (drehen)",
      "dreht",
      "drehen",
      "drehst",
      "sie مفرد: dreht.",
      "Singular sie takes dreht."
    ],
    [
      "Du ___ das Gefäß. (erkennen)",
      "erkennst",
      "erkennt",
      "erkennen",
      "du: erkennst.",
      "Du takes erkennst."
    ],
    [
      "Paul ___ die Mehrzahl vor. (lesen)",
      "liest",
      "lesen",
      "lese",
      "er مفرد: liest.",
      "Singular er takes liest."
    ],
    [
      "Wir ___ keine Jahreszahl. (ergänzen)",
      "ergänzen",
      "ergänzt",
      "ergänze",
      "wir: ergänzen.",
      "Wir takes ergänzen."
    ]
  ],
  "possessiv": [
    [
      "Paul dreht ___ Karte um. (Paul; die)",
      "seine",
      "sein",
      "seinen",
      "Paul مع مؤنث أكوزاتيف: seine.",
      "Paul takes seine with feminine accusative Karte."
    ],
    [
      "Mia prüft ___ Ausdruck. (Mia; der)",
      "ihren",
      "ihr",
      "ihre",
      "Mia مع مذكر أكوزاتيف: ihren.",
      "Mia takes ihren with masculine accusative Ausdruck."
    ],
    [
      "Wir lesen ___ Notizen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere.",
      "Wir takes unsere with plural accusative Notizen."
    ],
    [
      "Lena betrachtet ___ Foto. (Lena; das)",
      "ihr",
      "ihre",
      "ihren",
      "Lena مع محايد أكوزاتيف: ihr.",
      "Lena takes ihr with neuter accusative Foto."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt hinter ___ Gefäß. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع محايد داتيف: dem Gefäß.",
      "Fixed location takes neuter dative dem Gefäß."
    ],
    [
      "Mia legt die Karte hinter ___ Gefäß. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه مع محايد أكوزاتيف: das Gefäß.",
      "Destination takes neuter accusative das Gefäß."
    ],
    [
      "Der Halter liegt neben ___ Liste. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع مؤنث داتيف: der Liste.",
      "Fixed location takes feminine dative der Liste."
    ],
    [
      "Paul legt den Halter neben ___ Liste. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع مؤنث أكوزاتيف: die Liste.",
      "Destination takes feminine accusative die Liste."
    ]
  ],
  "negation": [
    [
      "Das Foto belegt ___ Herstellungsdatum. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "مفعول محايد: kein.",
      "Neuter direct object takes kein."
    ],
    [
      "Das ist ___ ausreichender Nachweis. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "خبر مذكر: kein.",
      "Masculine predicate noun takes kein."
    ],
    [
      "Nils ergänzt ___ erfundene Herkunft. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Die beiden datieren das Gefäß ___. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Negate the verb with nicht."
    ]
  ]
};
