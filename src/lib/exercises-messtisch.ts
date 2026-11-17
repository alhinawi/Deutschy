import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const messtischGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Wasserwaage liegt neben dem Tuch. (Wasserwaage)",
      "Die",
      "Der",
      "Das",
      "Wasserwaage مؤنث: die.",
      "Wasserwaage is feminine: die."
    ],
    [
      "___ Messschieber bleibt hier. (Messschieber)",
      "Der",
      "Die",
      "Das",
      "Messschieber مذكر: der.",
      "Messschieber is masculine: der."
    ],
    [
      "___ Zuordnung ist jetzt richtig. (Zuordnung)",
      "Die",
      "Der",
      "Das",
      "Zuordnung مؤنث: die.",
      "Zuordnung is feminine: die."
    ],
    [
      "___ Foto zeigt einen Gegenstand. (Foto)",
      "Das",
      "Der",
      "Die",
      "Foto محايد: das.",
      "Foto is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Nils zeigt ___ den Messschieber. (sie; Singular)",
      "ihr",
      "sie",
      "ihre",
      "المستلم داتيف؛ sie مفرد: ihr.",
      "The recipient is dative; singular sie becomes ihr."
    ],
    [
      "Salma erklärt ___ den Unterschied. (ich)",
      "mir",
      "mich",
      "mein",
      "المستلم داتيف؛ ich: mir.",
      "The recipient is dative; ich becomes mir."
    ],
    [
      "Das Foto hilft ___. (wir)",
      "uns",
      "unser",
      "wir",
      "helfen داتيف؛ wir: uns.",
      "Helfen takes dative; wir becomes uns."
    ],
    [
      "Finn hört ___ zu. (du)",
      "dir",
      "dich",
      "dein",
      "zuhören داتيف؛ du: dir.",
      "Zuhören takes dative; du becomes dir."
    ]
  ],
  "praesens": [
    [
      "Eva ___ das Wort. (kennen)",
      "kennt",
      "kennst",
      "kennen",
      "sie مفرد مع kennen: kennt.",
      "Singular sie takes kennt."
    ],
    [
      "Du ___ auf das Foto. (zeigen)",
      "zeigst",
      "zeigt",
      "zeigen",
      "du مع zeigen: zeigst.",
      "Du takes zeigst."
    ],
    [
      "Wir ___ die Namen. (tauschen)",
      "tauschen",
      "tauscht",
      "tauschst",
      "wir مع tauschen: tauschen.",
      "Wir takes tauschen."
    ],
    [
      "Joris ___ den Satz. (streichen)",
      "streicht",
      "streichst",
      "streichen",
      "er مع streichen: streicht.",
      "Er takes streicht."
    ]
  ],
  "trennbare-verben": [
    [
      "Eva spricht das Wort ___. (nachsprechen)",
      "nach",
      "auf",
      "aus",
      "nachsprechen بيتفصل: spricht ... nach.",
      "Nachsprechen separates: spricht ... nach."
    ],
    [
      "Finn liest die Namen ___. (vorlesen)",
      "vor",
      "mit",
      "ein",
      "vorlesen بيتفصل: liest ... vor.",
      "Vorlesen separates: liest ... vor."
    ],
    [
      "Dalia schaut auf der nächsten Seite ___. (nachschauen)",
      "nach",
      "vor",
      "zu",
      "nachschauen بيتفصل: schaut ... nach.",
      "Nachschauen separates: schaut ... nach."
    ],
    [
      "Eva schreibt zwei Wörter ___. (aufschreiben)",
      "auf",
      "an",
      "aus",
      "aufschreiben بيتفصل: schreibt ... auf.",
      "Aufschreiben separates: schreibt ... auf."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Messschieber liegt auf ___ Tuch. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد auf: داتيف، dem Tuch.",
      "Fixed location after auf takes dative: dem Tuch."
    ],
    [
      "Nils legt die Wasserwaage in ___ Fach. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه لمكان جديد: أكوزاتيف، das Fach.",
      "Destination takes accusative: das Fach."
    ],
    [
      "Der Name steht unter ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد unter: داتيف، dem Foto.",
      "Fixed location after unter takes dative: dem Foto."
    ],
    [
      "Dalia legt die Karte neben ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه لمكان جديد: أكوزاتيف، die Mappe.",
      "Destination takes accusative: die Mappe."
    ]
  ],
  "negation": [
    [
      "Joris hat ___ Prüfbericht. (ein)",
      "keinen",
      "kein",
      "keine",
      "Prüfbericht مذكر أكوزاتيف: keinen.",
      "Prüfbericht is masculine accusative: keinen."
    ],
    [
      "Das ist ___ technische Anleitung. (eine)",
      "keine",
      "kein",
      "keinen",
      "Anleitung مؤنث نوميناتيف: keine.",
      "Anleitung is feminine nominative: keine."
    ],
    [
      "Die übrigen Fotos sind noch ___ geprüft. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الحالة هنا بـ nicht.",
      "Use nicht to negate the state here."
    ],
    [
      "Eva nimmt ___ Gerät mit. (ein)",
      "kein",
      "keine",
      "keinen",
      "Gerät محايد أكوزاتيف: kein.",
      "Gerät is neuter accusative: kein."
    ]
  ]
};
