import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const besteckrundeGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Gabel liegt neben dem Teller. (Gabel)",
      "Die",
      "Der",
      "Das",
      "Gabel مؤنث: die.",
      "Gabel is feminine: die."
    ],
    [
      "___ Schüssel steht in der Mitte. (Schüssel)",
      "Die",
      "Der",
      "Das",
      "Schüssel مؤنث: die.",
      "Schüssel is feminine: die."
    ],
    [
      "___ Besteck liegt in der Schublade. (Besteck)",
      "Das",
      "Der",
      "Die",
      "Besteck محايد: das.",
      "Besteck is neuter: das."
    ],
    [
      "___ Tischplatz ist noch frei. (Tischplatz)",
      "Der",
      "Die",
      "Das",
      "Tischplatz مذكر: der.",
      "Tischplatz is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Eva reicht ___ eine Gabel. (ich)",
      "mir",
      "mich",
      "mein",
      "المستلم داتيف؛ ich: mir.",
      "The recipient is dative; ich becomes mir."
    ],
    [
      "Paul hilft ___ beim Tischdecken. (sie, singular)",
      "ihr",
      "sie",
      "ihre",
      "helfen داتيف؛ sie مفرد: ihr.",
      "Helfen takes dative; singular sie becomes ihr."
    ],
    [
      "Die blaue Schüssel gehört ___. (wir)",
      "uns",
      "unser",
      "wir",
      "gehören داتيف؛ wir: uns.",
      "Gehören takes dative; wir becomes uns."
    ],
    [
      "Mira zeigt ___ die Liste. (du)",
      "dir",
      "dich",
      "dein",
      "المستلم داتيف؛ du: dir.",
      "The recipient is dative; du becomes dir."
    ]
  ],
  "praesens": [
    [
      "Rami ___ die Gabeln. (zählen)",
      "zählt",
      "zählst",
      "zählen",
      "er مع zählen: zählt.",
      "Er takes zählt."
    ],
    [
      "Du ___ eine weitere Schüssel. (nehmen)",
      "nimmst",
      "nehmt",
      "nehmen",
      "du مع nehmen: nimmst.",
      "Du takes nimmst."
    ],
    [
      "Die kleine Schüssel ___ im Regal. (bleiben)",
      "bleibt",
      "bleibst",
      "bleiben",
      "sie مفرد مع bleiben: bleibt.",
      "Singular sie takes bleibt."
    ],
    [
      "Wir ___ den Tisch. (decken)",
      "decken",
      "deckt",
      "deckst",
      "wir مع decken: decken.",
      "Wir takes decken."
    ]
  ],
  "trennbare-verben": [
    [
      "Rami nimmt die Gabel ___. (herausnehmen)",
      "heraus",
      "an",
      "zu",
      "herausnehmen بيتفصل: nimmt ... heraus.",
      "Herausnehmen separates: nimmt ... heraus."
    ],
    [
      "Paul stellt die kleine Schüssel ___. (zurückstellen)",
      "zurück",
      "ein",
      "mit",
      "zurückstellen بيتفصل: stellt ... zurück.",
      "Zurückstellen separates: stellt ... zurück."
    ],
    [
      "Mira räumt den Teller ___. (wegräumen)",
      "weg",
      "zu",
      "an",
      "wegräumen بيتفصل: räumt ... weg.",
      "Wegräumen separates: räumt ... weg."
    ],
    [
      "Der Bruder isst heute nicht ___. (mitessen)",
      "mit",
      "auf",
      "ein",
      "mitessen بيتفصل: isst ... mit.",
      "Mitessen separates: isst ... mit."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Gabel liegt neben ___ Teller. (der; Wo?)",
      "dem",
      "den",
      "des",
      "مكان ثابت بعد neben: داتيف، dem Teller.",
      "Fixed location after neben takes dative: dem Teller."
    ],
    [
      "Eva stellt die Schüssel auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "des",
      "اتجاه لمكان جديد: أكوزاتيف، den Tisch.",
      "Destination takes accusative: den Tisch."
    ],
    [
      "Die Gabeln liegen in ___ Schublade. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت بعد in: داتيف، der Schublade.",
      "Fixed location after in takes dative: der Schublade."
    ],
    [
      "David spricht mit ___ Freundin. (die)",
      "der",
      "die",
      "den",
      "mit داتيف مؤنث: der Freundin.",
      "Mit takes feminine dative: der Freundin."
    ]
  ],
  "negation": [
    [
      "Im Regal steht ___ blaue Schüssel. (eine)",
      "keine",
      "kein",
      "keinen",
      "Schüssel مؤنث نوميناتيف: keine.",
      "Schüssel is feminine nominative: keine."
    ],
    [
      "Wir brauchen ___ vierten Teller. (einen)",
      "keinen",
      "kein",
      "keine",
      "Teller مذكر أكوزاتيف: keinen.",
      "Teller is masculine accusative: keinen."
    ],
    [
      "Paul nimmt ___ die kleine Schüssel, sondern die große.",
      "nicht",
      "kein",
      "keine",
      "التصحيح هنا بين حاجتين معرفتين: nicht ... sondern.",
      "Use nicht ... sondern to contrast the two definite objects."
    ],
    [
      "Das ist ___ bestätigte Gästeliste. (eine)",
      "keine",
      "kein",
      "keinen",
      "Gästeliste مؤنث نوميناتيف: keine.",
      "Gästeliste is feminine nominative: keine."
    ]
  ]
};
