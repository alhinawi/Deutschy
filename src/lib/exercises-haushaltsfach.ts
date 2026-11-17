import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const haushaltsfachGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Toilettenpapierrolle steht im Vorratsschrank. (Toilettenpapierrolle)",
      "Die",
      "Der",
      "Das",
      "Toilettenpapierrolle مؤنث: die.",
      "Toilettenpapierrolle is feminine: die."
    ],
    [
      "___ Mülleimer steht im Bad. (Mülleimer)",
      "Der",
      "Die",
      "Das",
      "Mülleimer مذكر: der.",
      "Mülleimer is masculine: der."
    ],
    [
      "___ Brett im Schrank ist leer. (Brett)",
      "Das",
      "Der",
      "Die",
      "Brett محايد: das.",
      "Brett is neuter: das."
    ],
    [
      "___ Liste liegt neben dem Schlüssel. (Liste)",
      "Die",
      "Der",
      "Das",
      "Liste مؤنث: die.",
      "Liste is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Der Mülleimer gehört ___. (ich)",
      "mir",
      "mich",
      "mein",
      "gehören داتيف؛ ich: mir.",
      "Gehören takes dative; ich becomes mir."
    ],
    [
      "Max reicht ___ die Rolle. (sie, singular)",
      "ihr",
      "sie",
      "ihre",
      "المستلم داتيف؛ sie مفرد: ihr.",
      "The recipient is dative; singular sie becomes ihr."
    ],
    [
      "Felix hilft ___ beim Tragen. (wir)",
      "uns",
      "unser",
      "wir",
      "helfen داتيف؛ wir: uns.",
      "Helfen takes dative; wir becomes uns."
    ],
    [
      "Mina zeigt ___ die Notiz. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er: ihm.",
      "The recipient is dative; er becomes ihm."
    ]
  ],
  "praesens": [
    [
      "Jana ___ ihre Toilettenpapierrolle. (suchen)",
      "sucht",
      "suchst",
      "suchen",
      "sie مفرد مع suchen: sucht.",
      "Singular sie takes sucht."
    ],
    [
      "Du ___ eine Rolle heraus. (nehmen)",
      "nimmst",
      "nehmt",
      "nehmen",
      "du مع nehmen: nimmst.",
      "Du takes nimmst."
    ],
    [
      "Felix ___ den Mülleimer nach oben. (tragen)",
      "trägt",
      "tragst",
      "tragen",
      "er مع tragen: trägt.",
      "Er takes trägt."
    ],
    [
      "Wir ___ nach dem Vorrat. (fragen)",
      "fragen",
      "fragt",
      "fragst",
      "wir مع fragen: fragen.",
      "Wir takes fragen."
    ]
  ],
  "trennbare-verben": [
    [
      "Mina schreibt die Aufgabe ___. (aufschreiben)",
      "auf",
      "an",
      "vor",
      "aufschreiben بيتفصل: schreibt ... auf.",
      "Aufschreiben separates: schreibt ... auf."
    ],
    [
      "Jana macht den Schrank ___. (zumachen)",
      "zu",
      "mit",
      "ab",
      "zumachen بيتفصل: macht ... zu.",
      "Zumachen separates: macht ... zu."
    ],
    [
      "Mina nimmt die Packung ___. (herausnehmen)",
      "heraus",
      "an",
      "ein",
      "herausnehmen بيتفصل: nimmt ... heraus.",
      "Herausnehmen separates: nimmt ... heraus."
    ],
    [
      "Hana stellt den Eimer ___. (zurückstellen)",
      "zurück",
      "zu",
      "ab",
      "zurückstellen بيتفصل: stellt ... zurück.",
      "Zurückstellen separates: stellt ... zurück."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Packung liegt in ___ Fach. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد in: داتيف، dem Fach.",
      "Fixed location after in takes dative: dem Fach."
    ],
    [
      "Jana legt die Packung in ___ Fach. (das; Wohin?)",
      "das",
      "dem",
      "des",
      "اتجاه لمكان جديد: أكوزاتيف، das Fach.",
      "Destination takes accusative: das Fach."
    ],
    [
      "Der Eimer steht neben ___ Schrank. (der; Wo?)",
      "dem",
      "den",
      "des",
      "مكان ثابت بعد neben: داتيف، dem Schrank.",
      "Fixed location after neben takes dative: dem Schrank."
    ],
    [
      "Felix spricht mit ___ Mitbewohnerin. (seine)",
      "seiner",
      "seine",
      "seinen",
      "mit داتيف مؤنث: seiner Mitbewohnerin.",
      "Mit takes feminine dative: seiner Mitbewohnerin."
    ]
  ],
  "negation": [
    [
      "Das ist ___ Toilettenpapierrolle. (eine)",
      "keine",
      "kein",
      "keinen",
      "Toilettenpapierrolle مؤنث نوميناتيف: keine.",
      "Toilettenpapierrolle is feminine nominative: keine."
    ],
    [
      "Ich brauche ___ zweiten Mülleimer. (ein)",
      "keinen",
      "kein",
      "keine",
      "Mülleimer مذكر أكوزاتيف: keinen.",
      "Mülleimer is masculine accusative: keinen."
    ],
    [
      "Die Packung liegt ___ auf dem Tisch. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي عبارة المكان بـ nicht.",
      "Negate the location phrase with nicht."
    ],
    [
      "Felix kauft ___ neuen Eimer. (Plural)",
      "keine",
      "kein",
      "keinen",
      "Eimer جمع أكوزاتيف: keine.",
      "Eimer is plural accusative: keine."
    ]
  ]
};
