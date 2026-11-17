import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const tischmitteGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Pfeffermühle steht neben der Vase. (Pfeffermühle)",
      "Die",
      "Der",
      "Das",
      "Pfeffermühle مؤنث: die.",
      "Pfeffermühle is feminine: die."
    ],
    [
      "___ Salzstreuer steht hier. (Salzstreuer)",
      "Der",
      "Die",
      "Das",
      "Salzstreuer مذكر: der.",
      "Salzstreuer is masculine: der."
    ],
    [
      "___ Rückseite ist leer. (Rückseite)",
      "Die",
      "Der",
      "Das",
      "Rückseite مؤنث: die.",
      "Rückseite is feminine: die."
    ],
    [
      "___ Wort fehlt noch. (Wort)",
      "Das",
      "Der",
      "Die",
      "Wort محايد: das.",
      "Wort is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Nele reicht ___ den Salzstreuer. (sie; Singular)",
      "ihr",
      "sie",
      "ihre",
      "المستلم داتيف؛ sie مفرد: ihr.",
      "The recipient is dative; singular sie becomes ihr."
    ],
    [
      "Tarek gibt ___ einen Hinweis. (ich)",
      "mir",
      "mich",
      "mein",
      "المستلم داتيف؛ ich: mir.",
      "The recipient is dative; ich becomes mir."
    ],
    [
      "Der Wortanfang hilft ___. (wir)",
      "uns",
      "unser",
      "wir",
      "helfen داتيف؛ wir: uns.",
      "Helfen takes dative; wir becomes uns."
    ],
    [
      "Anja hört ___ zu. (du)",
      "dir",
      "dich",
      "dein",
      "zuhören داتيف؛ du: dir.",
      "Zuhören takes dative; du becomes dir."
    ]
  ],
  "praesens": [
    [
      "Rika ___ den Namen. (kennen)",
      "kennt",
      "kennst",
      "kennen",
      "sie مفرد مع kennen: kennt.",
      "Singular sie takes kennt."
    ],
    [
      "Du ___ auf den Salzstreuer. (zeigen)",
      "zeigst",
      "zeigt",
      "zeigen",
      "du مع zeigen: zeigst.",
      "Du takes zeigst."
    ],
    [
      "Wir ___ die Karten. (tauschen)",
      "tauschen",
      "tauscht",
      "tauschst",
      "wir مع tauschen: tauschen.",
      "Wir takes tauschen."
    ],
    [
      "Anja ___ das Lob. (streichen)",
      "streicht",
      "streichst",
      "streichen",
      "er مع streichen: streicht.",
      "Er takes streicht."
    ]
  ],
  "trennbare-verben": [
    [
      "Sami spricht den Namen ___. (nachsprechen)",
      "nach",
      "auf",
      "aus",
      "nachsprechen بيتفصل: spricht ... nach.",
      "Nachsprechen separates: spricht ... nach."
    ],
    [
      "Nele liest die Karten ___. (vorlesen)",
      "vor",
      "mit",
      "ein",
      "vorlesen بيتفصل: liest ... vor.",
      "Vorlesen separates: liest ... vor."
    ],
    [
      "Rika schaut auf der Rückseite ___. (nachschauen)",
      "nach",
      "vor",
      "zu",
      "nachschauen بيتفصل: schaut ... nach.",
      "Nachschauen separates: schaut ... nach."
    ],
    [
      "Anja schreibt einen Hinweis ___. (aufschreiben)",
      "auf",
      "an",
      "aus",
      "aufschreiben بيتفصل: schreibt ... auf.",
      "Aufschreiben separates: schreibt ... auf."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Salzstreuer steht neben ___ Vase. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت بعد neben: داتيف، der Vase.",
      "Fixed location after neben takes dative: der Vase."
    ],
    [
      "Sami legt die Karte auf ___ Heft. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه لمكان جديد: أكوزاتيف، das Heft.",
      "Destination takes accusative: das Heft."
    ],
    [
      "Die Pfeffermühle steht auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت بعد auf: داتيف، dem Tisch.",
      "Fixed location after auf takes dative: dem Tisch."
    ],
    [
      "Elif legt die Schachtel neben ___ Vase. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه لمكان جديد: أكوزاتيف، die Vase.",
      "Destination takes accusative: die Vase."
    ]
  ],
  "negation": [
    [
      "Tarek gibt ___ ganzen Satz vor. (ein)",
      "keinen",
      "kein",
      "keine",
      "Satz مذكر أكوزاتيف: keinen.",
      "Satz is masculine accusative: keinen."
    ],
    [
      "Das ist ___ allgemeine Bewertung. (eine)",
      "keine",
      "kein",
      "keinen",
      "Bewertung مؤنث نوميناتيف: keine.",
      "Bewertung is feminine nominative: keine."
    ],
    [
      "Die zweite Übung hat noch ___ stattgefunden. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الحالة هنا بـ nicht.",
      "Use nicht to negate the state here."
    ],
    [
      "Sami braucht ___ neues Heft. (ein)",
      "kein",
      "keine",
      "keinen",
      "Heft محايد أكوزاتيف: kein.",
      "Heft is neuter accusative: kein."
    ]
  ]
};
