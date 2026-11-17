import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const hundeeckeGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Hundebett steht in der Ecke. (Hundebett)",
      "Das",
      "Der",
      "Die",
      "Hundebett محايد: das.",
      "Hundebett is neuter: das."
    ],
    [
      "___ Fressnapf steht auf dem Tisch. (Fressnapf)",
      "Der",
      "Die",
      "Das",
      "Fressnapf مذكر: der.",
      "Fressnapf is masculine: der."
    ],
    [
      "___ Handtuch liegt im Regal. (Handtuch)",
      "Das",
      "Der",
      "Die",
      "Handtuch محايد: das.",
      "Handtuch is neuter: das."
    ],
    [
      "___ Tasche steht vor der Tür. (Tasche)",
      "Die",
      "Der",
      "Das",
      "Tasche مؤنث: die.",
      "Tasche is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Der Napf gehört ___. (er)",
      "ihm",
      "ihn",
      "sein",
      "gehören داتيف؛ er: ihm.",
      "Gehören takes dative; er becomes ihm."
    ],
    [
      "Nora hilft ___. (ich)",
      "mir",
      "mich",
      "mein",
      "helfen داتيف؛ ich: mir.",
      "Helfen takes dative; ich becomes mir."
    ],
    [
      "Ben gibt ___ das Handtuch. (sie, مفرد / singular)",
      "ihr",
      "sie",
      "ihre",
      "المستلم داتيف؛ sie مفرد: ihr.",
      "The recipient is dative; singular sie becomes ihr."
    ],
    [
      "Mila zeigt ___ den Karton. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ]
  ],
  "praesens": [
    [
      "Mila ___ den Napf. (suchen)",
      "sucht",
      "suchst",
      "suchen",
      "sie مفرد مع suchen: sucht.",
      "Singular sie takes sucht."
    ],
    [
      "Du ___ den Ball auf. (heben)",
      "hebst",
      "hebt",
      "hebe",
      "du مع heben: hebst.",
      "Du takes hebst."
    ],
    [
      "Ben ___ auf die Küche. (zeigen)",
      "zeigt",
      "zeigst",
      "zeigen",
      "er مع zeigen: zeigt.",
      "Er takes zeigt."
    ],
    [
      "Wir ___ die Nachricht. (lesen)",
      "lesen",
      "lest",
      "liest",
      "wir مع lesen: lesen.",
      "Wir takes lesen."
    ]
  ],
  "trennbare-verben": [
    [
      "Ben hebt den Ball ___. (aufheben)",
      "auf",
      "aus",
      "zu",
      "aufheben بيتفصل: hebt ... auf.",
      "Aufheben separates: hebt ... auf."
    ],
    [
      "Nora packt den Napf noch nicht ___. (einpacken)",
      "ein",
      "an",
      "mit",
      "einpacken بيتفصل: packt ... ein.",
      "Einpacken separates: packt ... ein."
    ],
    [
      "Lea räumt ihre Tasche ___. (wegräumen)",
      "weg",
      "an",
      "vor",
      "wegräumen بيتفصل: räumt ... weg.",
      "Wegräumen separates: räumt ... weg."
    ],
    [
      "Omar holt seine Sachen ___. (abholen)",
      "ab",
      "an",
      "aus",
      "abholen بيتفصل: holt ... ab.",
      "Abholen separates: holt ... ab."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Ball liegt neben ___ Hundebett. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد neben: داتيف، dem Hundebett.",
      "Fixed location after neben takes dative: dem Hundebett."
    ],
    [
      "Ben legt den Ball in ___ Korb. (der; Wohin?)",
      "den",
      "dem",
      "des",
      "اتجاه لمكان جديد: أكوزاتيف، den Korb.",
      "Destination takes accusative: den Korb."
    ],
    [
      "Die Tasche steht vor ___ Tür. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت بعد vor: داتيف، der Tür.",
      "Fixed location after vor takes dative: der Tür."
    ],
    [
      "Nora spricht mit ___ Bruder. (ihr)",
      "ihrem",
      "ihren",
      "ihr",
      "mit داتيف مذكر: ihrem Bruder.",
      "Mit takes masculine dative: ihrem Bruder."
    ]
  ],
  "negation": [
    [
      "Das ist ___ Hundebett. (ein)",
      "kein",
      "keine",
      "keinen",
      "Hundebett محايد نوميناتيف: kein.",
      "Hundebett is neuter nominative: kein."
    ],
    [
      "Heute kaufen wir ___ neuen Napf. (ein)",
      "keinen",
      "kein",
      "keine",
      "Napf مذكر أكوزاتيف: keinen.",
      "Napf is masculine accusative: keinen."
    ],
    [
      "Der Napf steht ___ im Karton. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي عبارة المكان بـ nicht.",
      "Negate the location phrase with nicht."
    ],
    [
      "Lea packt ___ Sachen ein. (Plural)",
      "keine",
      "kein",
      "keinen",
      "Sachen جمع أكوزاتيف: keine.",
      "Sachen is plural accusative: keine."
    ]
  ]
};
