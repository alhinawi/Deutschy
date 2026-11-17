import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const technikablageGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Batterie liegt in der Schachtel. (Batterie)",
      "Die",
      "Der",
      "Das",
      "Batterie مؤنث: die.",
      "Batterie is feminine: die."
    ],
    [
      "___ Ladegerät gehört Alva. (Ladegerät)",
      "Das",
      "Der",
      "Die",
      "Ladegerät محايد: das.",
      "Ladegerät is neuter: das."
    ],
    [
      "___ Aufkleber zeigt einen Namen. (Aufkleber)",
      "Der",
      "Die",
      "Das",
      "Aufkleber مذكر: der.",
      "Aufkleber is masculine: der."
    ],
    [
      "___ Nachfrage ist beantwortet. (Nachfrage)",
      "Die",
      "Der",
      "Das",
      "Nachfrage مؤنث: die.",
      "Nachfrage is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Das Ladegerät gehört ___. (sie; Singular)",
      "ihr",
      "sie",
      "ihre",
      "gehören داتيف؛ sie مفرد: ihr.",
      "Gehören takes dative; singular sie becomes ihr."
    ],
    [
      "Ove zeigt ___ die Schachtel. (ich)",
      "mir",
      "mich",
      "mein",
      "المستلم داتيف؛ ich: mir.",
      "The recipient is dative; ich becomes mir."
    ],
    [
      "Alva liest ___ die Sätze vor. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ],
    [
      "Kira gibt ___ das Ladegerät zurück. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er: ihm.",
      "The recipient is dative; er becomes ihm."
    ]
  ],
  "praesens": [
    [
      "Tom ___ die blaue Schachtel. (suchen)",
      "sucht",
      "suchst",
      "suchen",
      "er مع suchen: sucht.",
      "Er takes sucht."
    ],
    [
      "Du ___ kurze Sätze. (schreiben)",
      "schreibst",
      "schreibt",
      "schreiben",
      "du مع schreiben: schreibst.",
      "Du takes schreibst."
    ],
    [
      "Alva ___ ihm. (helfen)",
      "hilft",
      "helfst",
      "helfen",
      "sie مفرد مع helfen: hilft.",
      "Singular sie takes hilft."
    ],
    [
      "Wir ___ die Antwort. (notieren)",
      "notieren",
      "notiert",
      "notierst",
      "wir مع notieren: notieren.",
      "Wir takes notieren."
    ]
  ],
  "trennbare-verben": [
    [
      "Alva liest die Sätze ___. (vorlesen)",
      "vor",
      "ein",
      "mit",
      "vorlesen بيتفصل: liest ... vor.",
      "Vorlesen separates: liest ... vor."
    ],
    [
      "Kira bringt das Ladegerät ___. (zurückbringen)",
      "zurück",
      "an",
      "zu",
      "zurückbringen بيتفصل: bringt ... zurück.",
      "Zurückbringen separates: bringt ... zurück."
    ],
    [
      "Ove nimmt es ___. (entgegennehmen)",
      "entgegen",
      "ein",
      "vor",
      "entgegennehmen بيتفصل: nimmt ... entgegen.",
      "Entgegennehmen separates: nimmt ... entgegen."
    ],
    [
      "Silas schreibt keine Menge ___. (aufschreiben)",
      "auf",
      "mit",
      "aus",
      "aufschreiben بيتفصل: schreibt ... auf.",
      "Aufschreiben separates: schreibt ... auf."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Batterien liegen in ___ Schachtel. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت بعد in: داتيف، der Schachtel.",
      "Fixed location after in takes dative: der Schachtel."
    ],
    [
      "Alva legt das Ladegerät in ___ Tasche. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه لمكان جديد: أكوزاتيف، die Tasche.",
      "Destination takes accusative: die Tasche."
    ],
    [
      "Die Schachtel steht zwischen ___ Büchern. (Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت وداتيف جمع: den Büchern.",
      "Fixed location takes plural dative: den Büchern."
    ],
    [
      "Der Aufkleber klebt auf ___ Ladegerät. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد auf: داتيف، dem Ladegerät.",
      "Fixed location after auf takes dative: dem Ladegerät."
    ]
  ],
  "negation": [
    [
      "Das ist ___ Gerätetyp. (ein)",
      "kein",
      "keine",
      "keinen",
      "Gerätetyp مذكر نوميناتيف: kein.",
      "Gerätetyp is masculine nominative: kein."
    ],
    [
      "Kira hat ___ Batterien übernommen. (Plural)",
      "keine",
      "kein",
      "keinen",
      "جمع أكوزاتيف: keine Batterien.",
      "Plural accusative: keine Batterien."
    ],
    [
      "Ein Ersatz ist ___ bestellt. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الحالة هنا بـ nicht.",
      "Use nicht to negate the state here."
    ],
    [
      "Sie schreiben ___ Stückzahl auf. (eine)",
      "keine",
      "kein",
      "keinen",
      "Stückzahl مؤنث أكوزاتيف: keine.",
      "Stückzahl is feminine accusative: keine."
    ]
  ]
};
