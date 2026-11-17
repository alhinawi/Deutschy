import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const reisegepaeckGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Schlafmaske liegt auf dem Bett. (Schlafmaske)",
      "Die",
      "Der",
      "Das",
      "Schlafmaske مؤنث: die.",
      "Schlafmaske is feminine: die."
    ],
    [
      "___ Kulturbeutel steht im Bad. (Kulturbeutel)",
      "Der",
      "Die",
      "Das",
      "Kulturbeutel مذكر: der.",
      "Kulturbeutel is masculine: der."
    ],
    [
      "___ Fach ist noch leer. (Fach)",
      "Das",
      "Der",
      "Die",
      "Fach محايد: das.",
      "Fach is neuter: das."
    ],
    [
      "___ Band ist grün. (Band, ribbon)",
      "Das",
      "Der",
      "Die",
      "Band بمعنى شريط محايد: das.",
      "Band meaning ribbon is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Der Kulturbeutel gehört ___. (ich)",
      "mir",
      "mich",
      "mein",
      "gehören داتيف؛ ich: mir.",
      "Gehören takes dative; ich becomes mir."
    ],
    [
      "Tarek reicht ___ die Maske. (sie, singular)",
      "ihr",
      "sie",
      "ihre",
      "المستلم داتيف؛ sie مفرد: ihr.",
      "The recipient is dative; singular sie becomes ihr."
    ],
    [
      "Omar hilft ___ beim Tragen. (wir)",
      "uns",
      "unser",
      "wir",
      "helfen داتيف؛ wir: uns.",
      "Helfen takes dative; wir becomes uns."
    ],
    [
      "Lea zeigt ___ den Beutel. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er: ihm.",
      "The recipient is dative; er becomes ihm."
    ]
  ],
  "praesens": [
    [
      "Sara ___ ihre Schlafmaske. (suchen)",
      "sucht",
      "suchst",
      "suchen",
      "sie مفرد مع suchen: sucht.",
      "Singular sie takes sucht."
    ],
    [
      "Du ___ das Buch heraus. (nehmen)",
      "nimmst",
      "nehmt",
      "nehmen",
      "du مع nehmen: nimmst.",
      "Du takes nimmst."
    ],
    [
      "Omar ___ die Tasche zur Tür. (tragen)",
      "trägt",
      "tragst",
      "tragen",
      "er مع tragen: trägt.",
      "Er takes trägt."
    ],
    [
      "Wir ___ nach dem Besitzer. (fragen)",
      "fragen",
      "fragt",
      "fragst",
      "wir مع fragen: fragen.",
      "Wir takes fragen."
    ]
  ],
  "trennbare-verben": [
    [
      "Lea packt das Buch ___. (einpacken)",
      "ein",
      "an",
      "vor",
      "einpacken بيتفصل: packt ... ein.",
      "Einpacken separates: packt ... ein."
    ],
    [
      "Sara macht die Tasche ___. (zumachen)",
      "zu",
      "mit",
      "ab",
      "zumachen بيتفصل: macht ... zu.",
      "Zumachen separates: macht ... zu."
    ],
    [
      "Lea nimmt das Buch ___. (herausnehmen)",
      "heraus",
      "an",
      "ein",
      "herausnehmen بيتفصل: nimmt ... heraus.",
      "Herausnehmen separates: nimmt ... heraus."
    ],
    [
      "Dalia steckt die Maske ___. (einstecken)",
      "ein",
      "zu",
      "ab",
      "einstecken بيتفصل: steckt ... ein.",
      "Einstecken separates: steckt ... ein."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Maske liegt in ___ Fach. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد in: داتيف، dem Fach.",
      "Fixed location after in takes dative: dem Fach."
    ],
    [
      "Sara steckt die Maske in ___ Fach. (das; Wohin?)",
      "das",
      "dem",
      "des",
      "اتجاه لمكان جديد: أكوزاتيف، das Fach.",
      "Destination takes accusative: das Fach."
    ],
    [
      "Das Band hängt an ___ Griff. (der; Wo?)",
      "dem",
      "den",
      "des",
      "مكان ثابت بعد an: داتيف، dem Griff.",
      "Fixed location after an takes dative: dem Griff."
    ],
    [
      "Omar spricht mit ___ Freundin. (seine)",
      "seiner",
      "seine",
      "seinen",
      "mit داتيف مؤنث: seiner Freundin.",
      "Mit takes feminine dative: seiner Freundin."
    ]
  ],
  "negation": [
    [
      "Das ist ___ Schlafmaske. (eine)",
      "keine",
      "kein",
      "keinen",
      "Schlafmaske مؤنث نوميناتيف: keine.",
      "Schlafmaske is feminine nominative: keine."
    ],
    [
      "Ich brauche ___ zweiten Kulturbeutel. (ein)",
      "keinen",
      "kein",
      "keine",
      "Kulturbeutel مذكر أكوزاتيف: keinen.",
      "Kulturbeutel is masculine accusative: keinen."
    ],
    [
      "Die Brille liegt ___ im Beutel. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي عبارة المكان بـ nicht.",
      "Negate the location phrase with nicht."
    ],
    [
      "Omar trägt ___ kleinen Taschen. (Plural)",
      "keine",
      "kein",
      "keinen",
      "Taschen جمع أكوزاتيف: keine.",
      "Taschen is plural accusative: keine."
    ]
  ]
};
