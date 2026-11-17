import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const musikzimmerGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Schellenkranz liegt auf dem Teppich. (Schellenkranz)",
      "Der",
      "Die",
      "Das",
      "Schellenkranz مذكر: der.",
      "Schellenkranz is masculine: der."
    ],
    [
      "___ Metronom ist still. (Metronom)",
      "Das",
      "Der",
      "Die",
      "Metronom محايد: das.",
      "Metronom is neuter: das."
    ],
    [
      "___ Eindruck ist persönlich. (Eindruck)",
      "Der",
      "Die",
      "Das",
      "Eindruck مذكر: der.",
      "Eindruck is masculine: der."
    ],
    [
      "___ Vorführung endet. (Vorführung)",
      "Die",
      "Der",
      "Das",
      "Vorführung مؤنث: die.",
      "Vorführung is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Ole spielt ___ etwas vor. (sie; Singular)",
      "ihr",
      "sie",
      "ihre",
      "المستلم داتيف؛ sie مفرد: ihr.",
      "The recipient is dative; singular sie becomes ihr."
    ],
    [
      "Senta hört ___ zu. (wir)",
      "uns",
      "unser",
      "wir",
      "zuhören داتيف؛ wir: uns.",
      "Zuhören takes dative; wir becomes uns."
    ],
    [
      "Ramin zeigt ___ den Bericht. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er: ihm.",
      "The recipient is dative; er becomes ihm."
    ],
    [
      "Die Erklärung hilft ___. (du)",
      "dir",
      "dich",
      "dein",
      "helfen داتيف؛ du: dir.",
      "Helfen takes dative; du becomes dir."
    ]
  ],
  "praesens": [
    [
      "Lina ___ den Unterschied. (beschreiben)",
      "beschreibt",
      "beschreibst",
      "beschreiben",
      "sie مفرد مع beschreiben: beschreibt.",
      "Singular sie takes beschreibt."
    ],
    [
      "Du ___ genau zu. (hören)",
      "hörst",
      "hört",
      "hören",
      "du مع hören: hörst.",
      "Du takes hörst."
    ],
    [
      "Wir ___ unsere Eindrücke. (vergleichen)",
      "vergleichen",
      "vergleicht",
      "vergleichst",
      "wir مع vergleichen: vergleichen.",
      "Wir takes vergleichen."
    ],
    [
      "Das Metronom ___ gleichmäßig. (ticken)",
      "tickt",
      "tickst",
      "ticken",
      "es مع ticken: tickt.",
      "Es takes tickt."
    ]
  ],
  "trennbare-verben": [
    [
      "Lina hört bis zum Ende ___. (zuhören)",
      "zu",
      "auf",
      "ein",
      "zuhören بيتفصل: hört ... zu.",
      "Zuhören separates: hört ... zu."
    ],
    [
      "Senta fasst die Eindrücke ___. (zusammenfassen)",
      "zusammen",
      "an",
      "aus",
      "zusammenfassen بيتفصل: fasst ... zusammen.",
      "Zusammenfassen separates: fasst ... zusammen."
    ],
    [
      "Ramin hält das Gespräch ___. (festhalten)",
      "fest",
      "mit",
      "ein",
      "festhalten بيتفصل: hält ... fest.",
      "Festhalten separates: hält ... fest."
    ],
    [
      "Der Klang fällt Karim ___. (auffallen)",
      "auf",
      "zu",
      "vor",
      "auffallen بيتفصل: fällt ... auf.",
      "Auffallen separates: fällt ... auf."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Schellenkranz liegt auf ___ Teppich. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت بعد auf: داتيف، dem Teppich.",
      "Fixed location after auf takes dative: dem Teppich."
    ],
    [
      "Lina setzt sich auf ___ Sofa. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه لمكان جديد: أكوزاتيف، das Sofa.",
      "Destination takes accusative: das Sofa."
    ],
    [
      "Das Metronom steht neben ___ Buch. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد neben: داتيف، dem Buch.",
      "Fixed location after neben takes dative: dem Buch."
    ],
    [
      "Ole legt das Instrument unter ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه لمكان جديد: أكوزاتيف، den Tisch.",
      "Destination takes accusative: den Tisch."
    ]
  ],
  "negation": [
    [
      "Ramin hat ___ Messung. (eine)",
      "keine",
      "kein",
      "keinen",
      "Messung مؤنث أكوزاتيف: keine.",
      "Messung is feminine accusative: keine."
    ],
    [
      "Das ist ___ gemessenes Tempo. (ein)",
      "kein",
      "keine",
      "keinen",
      "Tempo محايد نوميناتيف: kein.",
      "Tempo is neuter nominative: kein."
    ],
    [
      "Der nächste Durchgang ist noch ___ gespielt. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الحالة هنا بـ nicht.",
      "Use nicht to negate the state here."
    ],
    [
      "Sie vergeben ___ allgemeine Note. (eine)",
      "keine",
      "kein",
      "keinen",
      "Note مؤنث أكوزاتيف: keine.",
      "Note is feminine accusative: keine."
    ]
  ]
};
