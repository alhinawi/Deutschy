import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const computerrundeGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Tastatur liegt vor dem Laptop. (Tastatur)",
      "Die",
      "Der",
      "Das",
      "Tastatur مؤنث: die.",
      "Tastatur is feminine: die."
    ],
    [
      "___ Computermaus liegt rechts. (Computermaus)",
      "Die",
      "Der",
      "Das",
      "Computermaus مؤنث: die.",
      "Computermaus is feminine: die."
    ],
    [
      "___ Kabel liegt in der Kiste. (Kabel)",
      "Das",
      "Der",
      "Die",
      "Kabel محايد: das.",
      "Kabel is neuter: das."
    ],
    [
      "___ Schreibtisch ist frei. (Schreibtisch)",
      "Der",
      "Die",
      "Das",
      "Schreibtisch مذكر: der.",
      "Schreibtisch is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Die Maus gehört ___. (ich)",
      "mir",
      "mich",
      "mein",
      "gehören داتيف؛ ich: mir.",
      "Gehören takes dative; ich becomes mir."
    ],
    [
      "Mira gibt ___ die Tastatur. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er: ihm.",
      "The recipient is dative; er becomes ihm."
    ],
    [
      "Jonas hilft ___. (sie, مفرد / singular)",
      "ihr",
      "sie",
      "ihre",
      "helfen داتيف؛ sie مفرد: ihr.",
      "Helfen takes dative; singular sie becomes ihr."
    ],
    [
      "Sara zeigt ___ die Tasche. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ]
  ],
  "praesens": [
    [
      "Lina ___ ein Dokument. (öffnen)",
      "öffnet",
      "öffne",
      "öffnest",
      "sie مفرد مع öffnen: öffnet.",
      "Singular sie takes öffnet."
    ],
    [
      "Sami ___ kein Kabel. (nehmen)",
      "nimmt",
      "nehmt",
      "nehme",
      "er مع nehmen: nimmt.",
      "Er takes nimmt."
    ],
    [
      "Du ___ die Maus. (finden)",
      "findest",
      "findet",
      "finden",
      "du مع finden: findest.",
      "Du takes findest."
    ],
    [
      "Wir ___ zuerst. (fragen)",
      "fragen",
      "fragt",
      "fragst",
      "wir مع fragen: fragen.",
      "Wir takes fragen."
    ]
  ],
  "trennbare-verben": [
    [
      "Emil sieht in der Tasche ___. (nachsehen)",
      "nach",
      "auf",
      "ein",
      "nachsehen بيتفصل: sieht ... nach.",
      "Nachsehen separates: sieht ... nach."
    ],
    [
      "Sara kommt später ___. (zurückkommen)",
      "zurück",
      "aus",
      "mit",
      "zurückkommen بيتفصل: kommt ... zurück.",
      "Zurückkommen separates: kommt ... zurück."
    ],
    [
      "Sami nimmt kein Kabel ___. (mitnehmen)",
      "mit",
      "auf",
      "zu",
      "mitnehmen بيتفصل: nimmt ... mit.",
      "Mitnehmen separates: nimmt ... mit."
    ],
    [
      "Lina räumt den Tisch ___. (aufräumen)",
      "auf",
      "an",
      "zu",
      "aufräumen بيتفصل: räumt ... auf.",
      "Aufräumen separates: räumt ... auf."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Maus liegt neben ___ Tastatur. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت بعد neben: داتيف، der Tastatur.",
      "Fixed location after neben takes dative: der Tastatur."
    ],
    [
      "Lina legt die Maus neben ___ Tastatur. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه لمكان جديد: أكوزاتيف، die Tastatur.",
      "Destination takes accusative: die Tastatur."
    ],
    [
      "Das Kabel liegt in ___ Kiste. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت بعد in: داتيف، der Kiste.",
      "Fixed location after in takes dative: der Kiste."
    ],
    [
      "Jonas spricht mit ___ Mitbewohnerin. (seine)",
      "seiner",
      "seine",
      "seinen",
      "mit داتيف؛ مؤنث: seiner.",
      "Mit takes dative; feminine: seiner."
    ]
  ],
  "negation": [
    [
      "Das Dokument ist ___ aktuell. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الصفة بـ nicht.",
      "Negate the adjective with nicht."
    ],
    [
      "Emil nimmt ___ fremde Maus. (eine)",
      "keine",
      "kein",
      "keinen",
      "Maus مؤنث أكوزاتيف: keine.",
      "Maus is feminine accusative: keine."
    ],
    [
      "Das ist ___ neues Kabel. (ein)",
      "kein",
      "keine",
      "keinen",
      "Kabel محايد نوميناتيف: kein.",
      "Kabel is neuter nominative: kein."
    ],
    [
      "Hier liegen ___ Kopfhörer. (Plural)",
      "keine",
      "kein",
      "keinen",
      "نوميناتيف جمع: keine.",
      "Nominative plural: keine."
    ]
  ]
};
