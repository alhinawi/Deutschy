import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const tischbittenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Trinkhalm liegt hier. (Trinkhalm)",
      "Der",
      "Die",
      "Das",
      "Trinkhalm مذكر: der.",
      "Trinkhalm is masculine: der."
    ],
    [
      "___ Essstäbchen liegt dort. (Essstäbchen; Singular)",
      "Das",
      "Der",
      "Die",
      "Essstäbchen محايد: das.",
      "Essstäbchen is neuter: das."
    ],
    [
      "___ Bitte ist höflich. (Bitte)",
      "Die",
      "Der",
      "Das",
      "Bitte مؤنث: die.",
      "Bitte is feminine: die."
    ],
    [
      "___ Etui bleibt zu. (Etui)",
      "Das",
      "Der",
      "Die",
      "Etui محايد: das.",
      "Etui is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Mona sucht ___ Trinkhalm. (der)",
      "den",
      "der",
      "dem",
      "مفعول مذكر أكوزاتيف: den.",
      "Masculine direct object takes den."
    ],
    [
      "Daria vergisst ___ Etui. (das)",
      "das",
      "dem",
      "der",
      "محايد أكوزاتيف: das.",
      "Neuter accusative takes das."
    ],
    [
      "Noel nennt ___ Standort. (der)",
      "den",
      "dem",
      "der",
      "Standort مفعول مذكر أكوزاتيف: den.",
      "Standort is a masculine direct object: den."
    ],
    [
      "Erik liest ___ Bitte vor. (die)",
      "die",
      "der",
      "dem",
      "مؤنث أكوزاتيف: die.",
      "Feminine accusative takes die."
    ]
  ],
  "praesens": [
    [
      "Paul ___ nach. (nachfragen)",
      "fragt",
      "frage",
      "fragen",
      "er مفرد: fragt ... nach.",
      "Singular er takes fragt ... nach."
    ],
    [
      "Du ___ die Karte. (nehmen)",
      "nimmst",
      "nehmt",
      "nehmen",
      "du مع nehmen: nimmst.",
      "Du takes nimmst."
    ],
    [
      "Daria ___ zu Hause an. (rufen)",
      "ruft",
      "rufen",
      "rufst",
      "sie مفرد: ruft ... an.",
      "Singular sie takes ruft ... an."
    ],
    [
      "Wir ___ die Anliegen. (trennen)",
      "trennen",
      "trennt",
      "trennst",
      "wir مع trennen: trennen.",
      "Wir takes trennen."
    ]
  ],
  "konnektoren-b1": [
    [
      "Mona fragt genauer, ___ Paul ihren Wunsch versteht. (Ziel)",
      "damit",
      "obwohl",
      "bevor",
      "damit للهدف والفعل في الآخر.",
      "Damit introduces purpose with the verb last."
    ],
    [
      "___ Noel das Etui findet, öffnet er es nicht. (Gegensatz)",
      "Obwohl",
      "Damit",
      "Sobald",
      "Obwohl للتعارض.",
      "Obwohl introduces a concession."
    ],
    [
      "Daria prüft die Tasche, ___ sie losgeht. (zeitlich davor)",
      "bevor",
      "obwohl",
      "damit",
      "bevor لحدث بيحصل بعد المراجعة.",
      "Bevor places leaving after the check."
    ],
    [
      "Iman weiß nicht, ___ das Café Trinkhalme hat. (indirekte Ja-Nein-Frage)",
      "ob",
      "damit",
      "bevor",
      "السؤال غير المباشر بنعم أو لأ بياخد ob.",
      "An indirect yes-no question takes ob."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Etui liegt auf ___ Kommode. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت مع auf: داتيف der.",
      "Fixed location with auf takes dative: der."
    ],
    [
      "Noel legt das Etui auf ___ Kommode. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه مع auf: أكوزاتيف die.",
      "Destination with auf takes accusative: die."
    ],
    [
      "Die Gabel liegt neben ___ Teller. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع neben: داتيف dem.",
      "Fixed location with neben takes dative: dem."
    ],
    [
      "Sie legt die Gabel neben ___ Teller. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع neben: أكوزاتيف den.",
      "Destination with neben takes accusative: den."
    ]
  ],
  "negation": [
    [
      "Mona kennt das Wort gerade ___. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل هنا: nicht.",
      "Use nicht to negate the action here."
    ],
    [
      "Noel hat ___ Inhalt geprüft. (ein)",
      "keinen",
      "kein",
      "keine",
      "Inhalt مذكر أكوزاتيف: keinen.",
      "Inhalt is masculine accusative: keinen."
    ],
    [
      "Die Übung ist ___ Bestellung. (eine)",
      "keine",
      "kein",
      "keinen",
      "Bestellung مؤنث نوميناتيف: keine.",
      "Bestellung is feminine nominative: keine."
    ],
    [
      "Sie nennen ___ Lieferzeit. (eine)",
      "keine",
      "kein",
      "keinen",
      "Lieferzeit مؤنث أكوزاتيف: keine.",
      "Lieferzeit is feminine accusative: keine."
    ]
  ]
};
