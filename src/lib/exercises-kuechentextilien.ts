import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const kuechentextilienGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Schürze hängt an der Tür. (Schürze)",
      "Die",
      "Der",
      "Das",
      "Schürze مؤنث: die.",
      "Schürze is feminine: die."
    ],
    [
      "___ Geschirrtuch ist gestreift. (Geschirrtuch)",
      "Das",
      "Der",
      "Die",
      "Geschirrtuch محايد: das.",
      "Geschirrtuch is neuter: das."
    ],
    [
      "___ Haken ist frei. (Haken)",
      "Der",
      "Die",
      "Das",
      "Haken مذكر: der.",
      "Haken is masculine: der."
    ],
    [
      "___ Rückgabe ist noch offen. (Rückgabe)",
      "Die",
      "Der",
      "Das",
      "Rückgabe مؤنث: die.",
      "Rückgabe is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Die Schürze gehört ___. (sie, singular)",
      "ihr",
      "sie",
      "ihre",
      "gehören داتيف؛ sie مفرد: ihr.",
      "Gehören takes dative; singular sie becomes ihr."
    ],
    [
      "Jonas reicht ___ das Tuch. (ich)",
      "mir",
      "mich",
      "mein",
      "المستلم داتيف؛ ich: mir.",
      "The recipient is dative; ich becomes mir."
    ],
    [
      "Nora hilft ___ beim Falten. (du)",
      "dir",
      "dich",
      "dein",
      "helfen داتيف؛ du: dir.",
      "Helfen takes dative; du becomes dir."
    ],
    [
      "Nela zeigt ___ das Kochbuch. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ]
  ],
  "praesens": [
    [
      "Tom ___ das weiße Tuch. (falten)",
      "faltet",
      "faltest",
      "falten",
      "er مع falten: faltet.",
      "Er takes faltet."
    ],
    [
      "Du ___ die schwarze Schürze. (behalten)",
      "behältst",
      "behaltet",
      "behalten",
      "du مع behalten: behältst.",
      "Du takes behältst."
    ],
    [
      "Nora ___ Malik ihre graue Schürze. (leihen)",
      "leiht",
      "leihst",
      "leihen",
      "sie مفرد مع leihen: leiht.",
      "Singular sie takes leiht."
    ],
    [
      "Wir ___ einen Zeitpunkt. (vereinbaren)",
      "vereinbaren",
      "vereinbart",
      "vereinbarst",
      "wir مع vereinbaren: vereinbaren.",
      "Wir takes vereinbaren."
    ]
  ],
  "trennbare-verben": [
    [
      "Nela nimmt die Schürze ___. (abnehmen)",
      "ab",
      "an",
      "ein",
      "abnehmen بيتفصل: nimmt ... ab.",
      "Abnehmen separates: nimmt ... ab."
    ],
    [
      "Salma packt ihre Schürze ___. (einpacken)",
      "ein",
      "vor",
      "zu",
      "einpacken بيتفصل: packt ... ein.",
      "Einpacken separates: packt ... ein."
    ],
    [
      "Malik bringt die Schürze später ___. (zurückbringen)",
      "zurück",
      "an",
      "auf",
      "zurückbringen بيتفصل: bringt ... zurück.",
      "Zurückbringen separates: bringt ... zurück."
    ],
    [
      "Nora bewahrt die Tücher ___. (aufbewahren)",
      "auf",
      "zu",
      "an",
      "aufbewahren بيتفصل: bewahrt ... auf.",
      "Aufbewahren separates: bewahrt ... auf."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Schürze hängt an ___ Haken. (der; Wo?)",
      "dem",
      "den",
      "des",
      "مكان ثابت بعد an: داتيف، dem Haken.",
      "Fixed location after an takes dative: dem Haken."
    ],
    [
      "Nela legt das Tuch in ___ Tasche. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه لمكان جديد: أكوزاتيف، die Tasche.",
      "Destination takes accusative: die Tasche."
    ],
    [
      "Das Buch liegt neben ___ Tuch. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد neben: داتيف، dem Tuch.",
      "Fixed location after neben takes dative: dem Tuch."
    ],
    [
      "Malik spricht mit ___ Nachbarin. (die)",
      "der",
      "die",
      "den",
      "mit داتيف مؤنث: der Nachbarin.",
      "Mit takes feminine dative: der Nachbarin."
    ]
  ],
  "negation": [
    [
      "Das ist ___ Geschirrtuch. (ein)",
      "kein",
      "keine",
      "keinen",
      "Geschirrtuch محايد نوميناتيف: kein.",
      "Geschirrtuch is neuter nominative: kein."
    ],
    [
      "Malik braucht ___ zweite Schürze. (eine)",
      "keine",
      "kein",
      "keinen",
      "Schürze مؤنث أكوزاتيف: keine.",
      "Schürze is feminine accusative: keine."
    ],
    [
      "Der Teller gehört ___ Salma. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي صاحب الحاجة هنا بـ nicht.",
      "Use nicht to negate the named owner here."
    ],
    [
      "Wir haben ___ festen Rückgabetermin. (ein)",
      "keinen",
      "kein",
      "keine",
      "Termin مذكر أكوزاتيف: keinen.",
      "Termin is masculine accusative: keinen."
    ]
  ]
};
