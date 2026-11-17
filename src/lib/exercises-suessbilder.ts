import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const suessbilderGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Zuckerwürfel ist weiß. (Zuckerwürfel)",
      "Der",
      "Die",
      "Das",
      "Zuckerwürfel مذكر: der.",
      "Zuckerwürfel is masculine: der."
    ],
    [
      "___ Honigglas hat einen Deckel. (Honigglas)",
      "Das",
      "Der",
      "Die",
      "Honigglas محايد: das.",
      "Honigglas is neuter: das."
    ],
    [
      "___ Fassung gilt jetzt. (Fassung)",
      "Die",
      "Das",
      "Der",
      "Fassung مؤنث: die.",
      "Fassung is feminine: die."
    ],
    [
      "___ Füllstand ist sichtbar. (Füllstand)",
      "Der",
      "Die",
      "Das",
      "Füllstand مذكر: der.",
      "Füllstand is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "David streicht ___ Buchstaben durch. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر أكوزاتيف: den Buchstaben.",
      "Masculine direct object: den Buchstaben."
    ],
    [
      "Rita prüft ___ Korrektur. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث أكوزاتيف: die Korrektur.",
      "Feminine direct object: die Korrektur."
    ],
    [
      "Maja beschreibt ___ Glas. (das)",
      "das",
      "dem",
      "der",
      "مفعول محايد أكوزاتيف: das Glas.",
      "Neuter direct object: das Glas."
    ],
    [
      "Sven liest ___ Formen vor. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع أكوزاتيف: die Formen.",
      "Plural direct object: die Formen."
    ]
  ],
  "praesens": [
    [
      "David ___ das n durch. (durchstreichen)",
      "streicht",
      "streichst",
      "streichen",
      "er: streicht ... durch.",
      "Singular er takes streicht ... durch."
    ],
    [
      "Du ___ die Korrektur. (markieren)",
      "markierst",
      "markiert",
      "markieren",
      "du: markierst.",
      "Du takes markierst."
    ],
    [
      "Wir ___ die Höhe. (beschreiben)",
      "beschreiben",
      "beschreibt",
      "beschreibst",
      "wir: beschreiben.",
      "Wir takes beschreiben."
    ],
    [
      "Ines ___ die Zeilen ab. (abdecken)",
      "deckt",
      "deckst",
      "decken",
      "sie مفرد: deckt ... ab.",
      "Singular sie takes deckt ... ab."
    ]
  ],
  "possessiv": [
    [
      "Ines vergleicht ___ Karten. (Ines; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "Ines مع جمع أكوزاتيف: ihre.",
      "Ines takes ihre with plural accusative Karten."
    ],
    [
      "David korrigiert ___ Wort. (David; das)",
      "sein",
      "seine",
      "seinen",
      "David مع محايد أكوزاتيف: sein.",
      "David takes sein with neuter accusative Wort."
    ],
    [
      "Rita erklärt ___ Änderung. (Rita; die)",
      "ihre",
      "ihr",
      "ihren",
      "Rita مع مؤنث أكوزاتيف: ihre.",
      "Rita takes ihre with feminine accusative Änderung."
    ],
    [
      "Wir ersetzen ___ Bildtext. (wir; der)",
      "unseren",
      "unser",
      "unserem",
      "wir مع مذكر أكوزاتيف: unseren.",
      "Wir takes unseren with masculine accusative Bildtext."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Korrektur steht neben ___ Wort. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع محايد داتيف: dem Wort.",
      "Fixed location takes neuter dative dem Wort."
    ],
    [
      "Sven legt den Hinweis neben ___ Wort. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه الحركة مع محايد أكوزاتيف: das Wort.",
      "Destination takes neuter accusative das Wort."
    ],
    [
      "Die Karten liegen auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع مذكر داتيف: dem Tisch.",
      "Fixed location takes masculine dative dem Tisch."
    ],
    [
      "Ines legt die Karten auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه الحركة مع مذكر أكوزاتيف: den Tisch.",
      "Destination takes masculine accusative den Tisch."
    ]
  ],
  "negation": [
    [
      "Das Bild zeigt ___ Skala. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Das ist ___ Messwert. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "خبر مذكر: kein.",
      "Masculine predicate noun takes kein."
    ],
    [
      "Wir nennen ___ genauen Wert. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Wert.",
      "Masculine direct object takes keinen Wert."
    ],
    [
      "Die Gruppe misst das Volumen ___. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Negate the verb with nicht."
    ]
  ]
};
