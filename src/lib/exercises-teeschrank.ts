import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const teeschrankGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Teesieb liegt in der Schachtel. (Teesieb)",
      "Das",
      "Der",
      "Die",
      "Teesieb محايد: das.",
      "Teesieb is neuter: das."
    ],
    [
      "___ Teekessel bleibt leer. (Teekessel)",
      "Der",
      "Die",
      "Das",
      "Teekessel مذكر: der.",
      "Teekessel is masculine: der."
    ],
    [
      "___ Bildunterschrift ist jetzt neutral. (Bildunterschrift)",
      "Die",
      "Der",
      "Das",
      "Bildunterschrift مؤنث: die.",
      "Bildunterschrift is feminine: die."
    ],
    [
      "___ Eindruck steht in einer Notiz. (Eindruck)",
      "Der",
      "Das",
      "Die",
      "Eindruck مذكر: der.",
      "Eindruck is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Der zweite Karton gehört ___. (ich)",
      "mir",
      "mich",
      "mein",
      "gehören بياخد داتيف؛ ich تبقى mir.",
      "Gehören takes dative; ich becomes mir."
    ],
    [
      "Ole hilft ___ beim Vergleich. (sie; Singular)",
      "ihr",
      "sie",
      "ihre",
      "helfen بياخد داتيف؛ sie مفرد تبقى ihr.",
      "Helfen takes dative; singular sie becomes ihr."
    ],
    [
      "Nora zeigt ___ das freie Fach. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er تبقى ihm.",
      "The recipient is dative; er becomes ihm."
    ],
    [
      "Die Aufnahme hilft ___. (wir)",
      "uns",
      "unser",
      "wir",
      "helfen بياخد داتيف؛ wir تبقى uns.",
      "Helfen takes dative; wir becomes uns."
    ]
  ],
  "praesens": [
    [
      "Jasmin ___ die Fotos. (vergleichen)",
      "vergleicht",
      "vergleichst",
      "vergleichen",
      "sie مفرد مع vergleichen: vergleicht.",
      "Singular sie takes vergleicht."
    ],
    [
      "Du ___ deinen Namen auf den Karton. (kleben)",
      "klebst",
      "klebt",
      "kleben",
      "du مع kleben: klebst.",
      "Du takes klebst."
    ],
    [
      "Wir ___ die genaue Sorte nicht. (kennen)",
      "kennen",
      "kennt",
      "kennst",
      "wir مع kennen: kennen.",
      "Wir takes kennen."
    ],
    [
      "Lene ___ sich an den Besuch. (erinnern)",
      "erinnert",
      "erinnerst",
      "erinnern",
      "sie مفرد مع erinnern: erinnert.",
      "Singular sie takes erinnert."
    ]
  ],
  "possessiv": [
    [
      "Jasmin nimmt ___ Karton mit. (sie; Singular)",
      "ihren",
      "ihrem",
      "ihrer",
      "Karton مذكر أكوزاتيف، ملكها: ihren.",
      "Karton is masculine accusative; her is ihren."
    ],
    [
      "Ole erkennt ___ Kessel wieder. (er)",
      "seinen",
      "seinem",
      "seiner",
      "Kessel مذكر أكوزاتيف، ملكه: seinen.",
      "Kessel is masculine accusative; his is seinen."
    ],
    [
      "Lene behält ___ Erinnerung. (sie; Singular)",
      "ihre",
      "ihren",
      "ihrem",
      "Erinnerung مؤنث أكوزاتيف، ملكها: ihre.",
      "Erinnerung is feminine accusative; her is ihre."
    ],
    [
      "Wir vergleichen ___ Fotos. (wir)",
      "unsere",
      "unseren",
      "unserem",
      "Fotos جمع أكوزاتيف، ملكنا: unsere.",
      "Fotos is accusative plural; our is unsere."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Zettel liegt vor ___ Schachtel. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت بعد vor: داتيف der Schachtel.",
      "Fixed position after vor takes dative: der Schachtel."
    ],
    [
      "Nora legt den Zettel vor ___ Schachtel. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه بعد vor: أكوزاتيف die Schachtel.",
      "Destination after vor takes accusative: die Schachtel."
    ],
    [
      "Das Teesieb liegt in ___ Karton. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت بعد in: داتيف dem Karton.",
      "Fixed position after in takes dative: dem Karton."
    ],
    [
      "Ole legt das Teesieb in ___ Karton. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه بعد in: أكوزاتيف den Karton.",
      "Destination after in takes accusative: den Karton."
    ]
  ],
  "negation": [
    [
      "Die Geschwister bereiten ___ Tee zu. (ein / kein)",
      "keinen",
      "kein",
      "keine",
      "Tee مذكر أكوزاتيف: keinen.",
      "Tee is masculine accusative: keinen."
    ],
    [
      "Das Bild beweist ___ späteren Ablauf. (ein)",
      "keinen",
      "kein",
      "keine",
      "Ablauf مذكر أكوزاتيف: keinen.",
      "Ablauf is masculine accusative: keinen."
    ],
    [
      "Der genaue Inhalt ist ___ erkennbar. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الصفة هنا: nicht.",
      "Use nicht to negate the adjective here."
    ],
    [
      "Lene hat ___ gesicherte Angabe zur Teesorte. (eine)",
      "keine",
      "kein",
      "keinen",
      "Angabe مؤنث أكوزاتيف: keine.",
      "Angabe is feminine accusative: keine."
    ]
  ]
};
