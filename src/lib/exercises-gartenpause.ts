import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const gartenpauseGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Sonnenschirm steht neben dem Tisch. (Sonnenschirm)",
      "Der",
      "Die",
      "Das",
      "Sonnenschirm مذكر: der.",
      "Sonnenschirm is masculine: der."
    ],
    [
      "___ Liegestuhl steht links. (Liegestuhl)",
      "Der",
      "Die",
      "Das",
      "Liegestuhl مذكر: der.",
      "Liegestuhl is masculine: der."
    ],
    [
      "___ Gespräch beginnt. (Gespräch)",
      "Das",
      "Der",
      "Die",
      "Gespräch محايد: das.",
      "Gespräch is neuter: das."
    ],
    [
      "___ Hauptfigur ist eine Lehrerin. (Hauptfigur)",
      "Die",
      "Der",
      "Das",
      "Hauptfigur مؤنث: die.",
      "Hauptfigur is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Ava liest ___ eine Stelle vor. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er: ihm.",
      "The recipient is dative; er becomes ihm."
    ],
    [
      "Der nähere Platz hilft ___. (sie; Singular)",
      "ihr",
      "sie",
      "ihre",
      "helfen داتيف؛ sie مفرد: ihr.",
      "Helfen takes dative; singular sie becomes ihr."
    ],
    [
      "Levin zeigt ___ den Tisch. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ],
    [
      "Till bringt ___ ein Glas. (du)",
      "dir",
      "dich",
      "dein",
      "المستلم داتيف؛ du: dir.",
      "The recipient is dative; du becomes dir."
    ]
  ],
  "praesens": [
    [
      "Ava ___ ein Buch. (lesen)",
      "liest",
      "lest",
      "lesen",
      "sie مفرد مع lesen: liest.",
      "Singular sie takes liest."
    ],
    [
      "Du ___ auf den Zaun. (zeigen)",
      "zeigst",
      "zeigt",
      "zeigen",
      "du مع zeigen: zeigst.",
      "Du takes zeigst."
    ],
    [
      "Wir ___ im Garten. (sitzen)",
      "sitzen",
      "sitzt",
      "sitze",
      "wir مع sitzen: sitzen.",
      "Wir takes sitzen."
    ],
    [
      "Till ___ den Baum. (zeichnen)",
      "zeichnet",
      "zeichnest",
      "zeichnen",
      "er مع zeichnen: zeichnet.",
      "Er takes zeichnet."
    ]
  ],
  "trennbare-verben": [
    [
      "Ava liest die Stelle ___. (vorlesen)",
      "vor",
      "ein",
      "ab",
      "vorlesen بيتفصل: liest ... vor.",
      "Vorlesen separates: liest ... vor."
    ],
    [
      "Tessa hört Niko ___. (zuhören)",
      "zu",
      "auf",
      "an",
      "zuhören بيتفصل: hört ... zu.",
      "Zuhören separates: hört ... zu."
    ],
    [
      "Fina liest nach dem Gespräch ___. (weiterlesen)",
      "weiter",
      "mit",
      "ein",
      "weiterlesen بيتفصل: liest ... weiter.",
      "Weiterlesen separates: liest ... weiter."
    ],
    [
      "Emil rückt den Stuhl ___. (zurechtrücken)",
      "zurecht",
      "vor",
      "mit",
      "zurechtrücken بيتفصل: rückt ... zurecht.",
      "Zurechtrücken separates: rückt ... zurecht."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Gläser stehen auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت بعد auf: داتيف، dem Tisch.",
      "Fixed location after auf takes dative: dem Tisch."
    ],
    [
      "Niko setzt sich auf ___ Stuhl. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه لمكان جديد: أكوزاتيف، den Stuhl.",
      "Destination takes accusative: den Stuhl."
    ],
    [
      "Der Liegestuhl steht unter ___ Sonnenschirm. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت بعد unter: داتيف، dem Sonnenschirm.",
      "Fixed location after unter takes dative: dem Sonnenschirm."
    ],
    [
      "Sie gehen auf ___ Terrasse. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه لمكان جديد: أكوزاتيف، die Terrasse.",
      "Destination takes accusative: die Terrasse."
    ]
  ],
  "negation": [
    [
      "Till zeichnet ___ Vogel. (ein)",
      "keinen",
      "kein",
      "keine",
      "Vogel مذكر أكوزاتيف: keinen.",
      "Vogel is masculine accusative: keinen."
    ],
    [
      "Das ist ___ neue Hausordnung. (eine)",
      "keine",
      "kein",
      "keinen",
      "Hausordnung مؤنث نوميناتيف: keine.",
      "Hausordnung is feminine nominative: keine."
    ],
    [
      "Emil möchte jetzt ___ weiterlesen. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل هنا بـ nicht.",
      "Use nicht to negate the action here."
    ],
    [
      "Ava sucht ___ neues Buch. (ein)",
      "kein",
      "keinen",
      "keine",
      "Buch محايد أكوزاتيف: kein.",
      "Buch is neuter accusative: kein."
    ]
  ]
};
