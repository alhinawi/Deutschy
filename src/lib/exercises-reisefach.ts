import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const reisefachGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Haarbürste kommt mit. (Haarbürste)",
      "Die",
      "Der",
      "Das",
      "Haarbürste مؤنث: die.",
      "Haarbürste is feminine: die."
    ],
    [
      "___ Haartrockner bleibt zu Hause. (Haartrockner)",
      "Der",
      "Die",
      "Das",
      "Haartrockner مذكر: der.",
      "Haartrockner is masculine: der."
    ],
    [
      "___ Innenfach ist klein. (Innenfach)",
      "Das",
      "Der",
      "Die",
      "Innenfach محايد: das.",
      "Innenfach is neuter: das."
    ],
    [
      "___ Rückseite enthält einen Hinweis. (Rückseite)",
      "Die",
      "Der",
      "Das",
      "Rückseite مؤنث: die.",
      "Rückseite is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Joris bringt ___ die Bürste. (sie; Singular)",
      "ihr",
      "sie",
      "ihre",
      "المستلم داتيف؛ sie مفرد: ihr.",
      "The recipient is dative; singular sie becomes ihr."
    ],
    [
      "Ivo zeigt ___ die Rückseite. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ],
    [
      "Das Gerät gehört ___. (er)",
      "ihm",
      "ihn",
      "sein",
      "gehören داتيف؛ er: ihm.",
      "Gehören takes dative; er becomes ihm."
    ],
    [
      "Daria gibt ___ die Bürste. (du)",
      "dir",
      "dich",
      "dein",
      "المستلم داتيف؛ du: dir.",
      "The recipient is dative; du becomes dir."
    ]
  ],
  "praesens": [
    [
      "Nele ___ ihre Tasche. (packen)",
      "packt",
      "packst",
      "packen",
      "sie مفرد مع packen: packt.",
      "Singular sie takes packt."
    ],
    [
      "Du ___ den Zettel. (lesen)",
      "liest",
      "lest",
      "lesen",
      "du مع lesen: liest.",
      "Du takes liest."
    ],
    [
      "Wir ___ das Buch mit. (nehmen)",
      "nehmen",
      "nimmt",
      "nehmt",
      "wir مع nehmen: nehmen.",
      "Wir takes nehmen."
    ],
    [
      "Milan ___ ein Foto. (sehen)",
      "sieht",
      "siehst",
      "sehen",
      "er مع sehen: sieht.",
      "Er takes sieht."
    ]
  ],
  "trennbare-verben": [
    [
      "Nele packt die Haarbürste ___. (einpacken)",
      "ein",
      "vor",
      "ab",
      "einpacken بيتفصل: packt ... ein.",
      "Einpacken separates: packt ... ein."
    ],
    [
      "Der Haartrockner bleibt ___. (zurückbleiben)",
      "zurück",
      "mit",
      "an",
      "zurückbleiben بيتفصل: bleibt ... zurück.",
      "Zurückbleiben separates: bleibt ... zurück."
    ],
    [
      "Daria nimmt den neuen Zettel ___. (mitnehmen)",
      "mit",
      "auf",
      "zu",
      "mitnehmen بيتفصل: nimmt ... mit.",
      "Mitnehmen separates: nimmt ... mit."
    ],
    [
      "Nele macht die Tasche ___. (zumachen)",
      "zu",
      "vor",
      "ab",
      "zumachen بيتفصل: macht ... zu.",
      "Zumachen separates: macht ... zu."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Bürste liegt auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت بعد auf: داتيف، dem Tisch.",
      "Fixed location after auf takes dative: dem Tisch."
    ],
    [
      "Runa legt das Gerät in ___ Schrank. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه لمكان جديد: أكوزاتيف، den Schrank.",
      "Destination takes accusative: den Schrank."
    ],
    [
      "Das Buch liegt unter ___ T-Shirt. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد unter: داتيف، dem T-Shirt.",
      "Fixed location after unter takes dative: dem T-Shirt."
    ],
    [
      "Nele stellt die Tasche neben ___ Tür. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه لمكان جديد: أكوزاتيف، die Tür.",
      "Destination takes accusative: die Tür."
    ]
  ],
  "negation": [
    [
      "Milan erkennt ___ Besitzer. (ein)",
      "keinen",
      "kein",
      "keine",
      "Besitzer مذكر أكوزاتيف: keinen.",
      "Besitzer is masculine accusative: keinen."
    ],
    [
      "Es gibt ___ neue Bitte. (eine)",
      "keine",
      "kein",
      "keinen",
      "Bitte مؤنث أكوزاتيف: keine.",
      "Bitte is feminine accusative: keine."
    ],
    [
      "Die Eigentumsfrage ist noch ___ geklärt. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الحالة هنا بـ nicht.",
      "Use nicht to negate the state here."
    ],
    [
      "Daria verschickt ___ Foto. (ein)",
      "kein",
      "keinen",
      "keine",
      "Foto محايد أكوزاتيف: kein.",
      "Foto is neuter accusative: kein."
    ]
  ]
};
