import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const denkobjekteGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Abakus hat farbige Kugeln. (Abakus)",
      "Der",
      "Die",
      "Das",
      "Abakus مذكر: der.",
      "Abakus is masculine: der."
    ],
    [
      "___ Schachfigur ist dunkel. (Schachfigur)",
      "Die",
      "Der",
      "Das",
      "Schachfigur مؤنث: die.",
      "Schachfigur is feminine: die."
    ],
    [
      "___ Spiegelbild ist kein zweiter Gegenstand. (Spiegelbild)",
      "Das",
      "Der",
      "Die",
      "Spiegelbild محايد: das.",
      "Spiegelbild is neuter: das."
    ],
    [
      "___ Rahmen gehört zum Abakus. (Rahmen)",
      "Der",
      "Die",
      "Das",
      "Rahmen مذكر: der.",
      "Rahmen is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Leila hilft ___ Freund. (der)",
      "dem",
      "den",
      "der",
      "helfen بياخد داتيف: dem Freund.",
      "Helfen takes dative: dem Freund."
    ],
    [
      "Das Heft gehört ___ Bruder. (der)",
      "dem",
      "den",
      "der",
      "gehören بياخد داتيف: dem Bruder.",
      "Gehören takes dative: dem Bruder."
    ],
    [
      "Sami zeigt ___ Schwester den Zettel. (die)",
      "der",
      "die",
      "den",
      "المتلقي داتيف: der Schwester.",
      "The recipient takes dative: der Schwester."
    ],
    [
      "Karim antwortet ___ Freundin. (die)",
      "der",
      "die",
      "den",
      "antworten بياخد داتيف: der Freundin.",
      "Antworten takes dative: der Freundin."
    ]
  ],
  "praesens": [
    [
      "Tom ___ das Wort. (wiederholen)",
      "wiederholt",
      "wiederholen",
      "wiederholst",
      "er مفرد: wiederholt.",
      "Singular er takes wiederholt."
    ],
    [
      "Du ___ auf den Rahmen. (zeigen)",
      "zeigst",
      "zeigt",
      "zeigen",
      "du: zeigst.",
      "Du takes zeigst."
    ],
    [
      "Sami ___ den Punkt ab. (abhaken)",
      "hakt",
      "haken",
      "hakst",
      "er: hakt ... ab.",
      "Er takes hakt ... ab."
    ],
    [
      "Wir ___ die Beschreibung. (korrigieren)",
      "korrigieren",
      "korrigiert",
      "korrigiere",
      "wir: korrigieren.",
      "Wir takes korrigieren."
    ]
  ],
  "possessiv": [
    [
      "Tom öffnet ___ Heft. (Tom; das)",
      "sein",
      "seinen",
      "seine",
      "ملكية Tom مع محايد أكوزاتيف: sein Heft.",
      "Tom takes sein with neuter accusative Heft."
    ],
    [
      "Nora liest ___ Liste. (Nora; die)",
      "ihre",
      "ihr",
      "ihren",
      "ملكية Nora مع مؤنث أكوزاتيف: ihre Liste.",
      "Nora takes ihre with feminine accusative Liste."
    ],
    [
      "Karim verbessert ___ Satz. (Karim; der)",
      "seinen",
      "sein",
      "seine",
      "ملكية Karim مع مذكر أكوزاتيف: seinen Satz.",
      "Karim takes seinen with masculine accusative Satz."
    ],
    [
      "Wir ordnen ___ Notizen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "ملكية wir مع جمع أكوزاتيف: unsere Notizen.",
      "Wir takes unsere with plural accusative Notizen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Fotos liegen auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع auf: داتيف dem.",
      "Fixed location with auf takes dative dem."
    ],
    [
      "Leila legt die Fotos auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع auf: أكوزاتيف den.",
      "Destination with auf takes accusative den."
    ],
    [
      "Das Heft ist in ___ Tasche. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative der."
    ],
    [
      "Tom steckt das Heft in ___ Tasche. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative die."
    ]
  ],
  "negation": [
    [
      "Sie spielen ___ Schachpartie. (eine)",
      "keine",
      "kein",
      "keinen",
      "Schachpartie مؤنث أكوزاتيف: keine.",
      "Schachpartie is feminine accusative: keine."
    ],
    [
      "Sami hat noch ___ vorgelesen. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Use nicht to negate the action."
    ],
    [
      "Die Spiegelung ist ___ zweiter Gegenstand. (ein)",
      "kein",
      "keine",
      "keinen",
      "Gegenstand مذكر نوميناتيف: kein.",
      "Gegenstand is masculine nominative: kein."
    ],
    [
      "Sie kennen ___ letzten Zug. (der)",
      "keinen",
      "kein",
      "keine",
      "Zug مذكر أكوزاتيف: keinen.",
      "Zug is masculine accusative: keinen."
    ]
  ]
};
