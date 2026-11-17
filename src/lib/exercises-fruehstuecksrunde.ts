import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const fruehstuecksrundeGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Butterdose steht neben dem Korb. (Butterdose)",
      "Die",
      "Der",
      "Das",
      "Butterdose مؤنث: die.",
      "Butterdose is feminine: die."
    ],
    [
      "___ Milchkännchen steht in der Mitte. (Milchkännchen)",
      "Das",
      "Der",
      "Die",
      "Milchkännchen محايد: das.",
      "Milchkännchen is neuter: das."
    ],
    [
      "___ Brotkorb ist leer. (Brotkorb)",
      "Der",
      "Die",
      "Das",
      "Brotkorb مذكر: der.",
      "Brotkorb is masculine: der."
    ],
    [
      "___ Serviette liegt neben dem Teller. (Serviette)",
      "Die",
      "Der",
      "Das",
      "Serviette مؤنث: die.",
      "Serviette is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Die Tasse gehört ___. (ich)",
      "mir",
      "mich",
      "mein",
      "gehören داتيف؛ ich: mir.",
      "Gehören takes dative; ich becomes mir."
    ],
    [
      "Nora gibt ___ den Korb. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er: ihm.",
      "The recipient is dative; er becomes ihm."
    ],
    [
      "Omar hilft ___ beim Abräumen. (sie, مفرد / singular)",
      "ihr",
      "sie",
      "ihre",
      "helfen داتيف؛ sie مفرد: ihr.",
      "Helfen takes dative; singular sie becomes ihr."
    ],
    [
      "Ben zeigt ___ den Zettel. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ]
  ],
  "trennbare-verben": [
    [
      "Sami bringt den Eierbecher ___. (zurückbringen)",
      "zurück",
      "aus",
      "mit",
      "zurückbringen بيتفصل: bringt ... zurück.",
      "Zurückbringen separates: bringt ... zurück."
    ],
    [
      "Lea räumt den Tisch ___. (abräumen)",
      "ab",
      "an",
      "ein",
      "abräumen بيتفصل: räumt ... ab.",
      "Abräumen separates: räumt ... ab."
    ],
    [
      "Nora stellt die Tassen ___. (hinstellen)",
      "hin",
      "aus",
      "zu",
      "hinstellen بيتفصل: stellt ... hin.",
      "Hinstellen separates: stellt ... hin."
    ],
    [
      "Omar sieht im Kühlschrank ___. (nachsehen)",
      "nach",
      "auf",
      "ein",
      "nachsehen بيتفصل: sieht ... nach.",
      "Nachsehen separates: sieht ... nach."
    ]
  ],
  "praesens": [
    [
      "Nina ___ Milch in ihre Tasse. (gießen)",
      "gießt",
      "gieße",
      "gießen",
      "sie مفرد مع gießen: gießt.",
      "Singular sie takes gießt."
    ],
    [
      "Sami ___ Kaffee ohne Milch. (trinken)",
      "trinkt",
      "trinke",
      "trinkst",
      "er مع trinken: trinkt.",
      "Er takes trinkt."
    ],
    [
      "Du ___ drei Tassen. (sehen)",
      "siehst",
      "seht",
      "sehe",
      "du مع sehen: siehst.",
      "Du takes siehst."
    ],
    [
      "Wir ___ den Vorrat. (prüfen)",
      "prüfen",
      "prüft",
      "prüfst",
      "wir مع prüfen: prüfen.",
      "Wir takes prüfen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Butterdose steht neben ___ Korb. (der; Wo?)",
      "dem",
      "den",
      "des",
      "مكان ثابت بعد neben: داتيف، dem Korb.",
      "Fixed location after neben takes dative: dem Korb."
    ],
    [
      "Nora stellt die Butterdose neben ___ Korb. (der; Wohin?)",
      "den",
      "dem",
      "des",
      "اتجاه لمكان جديد بعد neben: أكوزاتيف، den Korb.",
      "Destination after neben takes accusative: den Korb."
    ],
    [
      "Der Eierbecher steht in ___ Schrank. (der; Wo?)",
      "dem",
      "den",
      "des",
      "مكان ثابت بعد in: داتيف، dem Schrank.",
      "Fixed location after in takes dative: dem Schrank."
    ],
    [
      "Ben spricht mit ___ Mitbewohnerin. (seine)",
      "seiner",
      "seine",
      "seinen",
      "mit داتيف؛ مؤنث: seiner.",
      "Mit takes dative; feminine: seiner."
    ]
  ],
  "negation": [
    [
      "Der Toaster ist ___ an. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي an هنا بـ nicht.",
      "Negate an with nicht here."
    ],
    [
      "Heute kommen ___ Gäste. (Plural)",
      "keine",
      "kein",
      "keinen",
      "نوميناتيف جمع: keine Gäste.",
      "Nominative plural: keine Gäste."
    ],
    [
      "Das ist ___ neue Tasse. (eine)",
      "keine",
      "kein",
      "keinen",
      "Tasse مؤنث نوميناتيف: keine.",
      "Tasse is feminine nominative: keine."
    ],
    [
      "Omar bestellt ___ Milchkännchen. (ein)",
      "kein",
      "keinen",
      "keine",
      "Milchkännchen محايد أكوزاتيف: kein.",
      "Milchkännchen is neuter accusative: kein."
    ]
  ]
};
