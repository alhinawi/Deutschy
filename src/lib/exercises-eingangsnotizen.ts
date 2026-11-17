import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const eingangsnotizenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Türklopfer ist auf dem Foto. (Türklopfer)",
      "Der",
      "Die",
      "Das",
      "Türklopfer مذكر: der.",
      "Türklopfer is masculine: der."
    ],
    [
      "___ Briefkasten ist geschlossen. (Briefkasten)",
      "Der",
      "Die",
      "Das",
      "Briefkasten مذكر: der.",
      "Briefkasten is masculine: der."
    ],
    [
      "___ Beobachtung ist vorsichtig formuliert. (Beobachtung)",
      "Die",
      "Der",
      "Das",
      "Beobachtung مؤنث: die.",
      "Beobachtung is feminine: die."
    ],
    [
      "___ Umschlag bleibt hier. (Umschlag)",
      "Der",
      "Die",
      "Das",
      "Umschlag مذكر: der.",
      "Umschlag is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Rosa spricht mit ___ Nachbarin. (die)",
      "der",
      "die",
      "den",
      "mit بياخد داتيف: der Nachbarin.",
      "Mit takes dative: der Nachbarin."
    ],
    [
      "Tim hilft ___ Schwester. (die)",
      "der",
      "die",
      "den",
      "helfen بياخد داتيف: der Schwester.",
      "Helfen takes dative: der Schwester."
    ],
    [
      "Das Bild gehört ___ Bruder. (der)",
      "dem",
      "den",
      "der",
      "gehören بياخد داتيف: dem Bruder.",
      "Gehören takes dative: dem Bruder."
    ],
    [
      "Nele antwortet ___ Mitbewohner. (der)",
      "dem",
      "den",
      "der",
      "antworten بياخد داتيف: dem Mitbewohner.",
      "Antworten takes dative: dem Mitbewohner."
    ]
  ],
  "praesens": [
    [
      "Rosa ___ die Wörter vor. (vorlesen)",
      "liest",
      "lese",
      "lesen",
      "sie مفرد مع vorlesen: liest ... vor.",
      "Singular sie takes liest ... vor."
    ],
    [
      "Du ___ den Umschlag geschlossen. (lassen)",
      "lässt",
      "lasst",
      "lassen",
      "du مع lassen: lässt.",
      "Du takes lässt."
    ],
    [
      "Wir ___ die Rollen. (wechseln)",
      "wechseln",
      "wechselt",
      "wechselst",
      "wir مع wechseln: wechseln.",
      "Wir takes wechseln."
    ],
    [
      "Jonas ___ den Satz. (streichen)",
      "streicht",
      "streichst",
      "streichen",
      "er مفرد مع streichen: streicht.",
      "Singular er takes streicht."
    ]
  ],
  "possessiv": [
    [
      "Tim öffnet ___ Heft. (Tim; das)",
      "sein",
      "seinen",
      "seine",
      "ملكية Tim مع محايد أكوزاتيف: sein Heft.",
      "Tim takes sein with neuter accusative Heft."
    ],
    [
      "Rosa sucht ___ Tasche. (Rosa; die)",
      "ihre",
      "ihr",
      "ihren",
      "ملكية Rosa مع مؤنث أكوزاتيف: ihre Tasche.",
      "Rosa takes ihre with feminine accusative Tasche."
    ],
    [
      "Amir holt ___ Karten. (Amir; Plural)",
      "seine",
      "sein",
      "seinen",
      "ملكية Amir مع جمع أكوزاتيف: seine Karten.",
      "Amir takes seine with plural accusative Karten."
    ],
    [
      "Wir vergleichen ___ Texte. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "ملكية wir مع جمع أكوزاتيف: unsere Texte.",
      "Wir takes unsere with plural accusative Texte."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Umschlag liegt auf ___ Bank. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت مع auf: داتيف der.",
      "Fixed location with auf takes dative: der."
    ],
    [
      "Rosa legt den Umschlag auf ___ Bank. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه مع auf: أكوزاتيف die.",
      "Destination with auf takes accusative: die."
    ],
    [
      "Die Karten liegen in ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative: der."
    ],
    [
      "Nele legt die Karten in ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative: die."
    ]
  ],
  "negation": [
    [
      "Die Bilder belegen ___ gemeinsame Adresse. (eine)",
      "keine",
      "kein",
      "keinen",
      "Adresse مؤنث أكوزاتيف: keine.",
      "Adresse is feminine accusative: keine."
    ],
    [
      "Sie öffnen den Umschlag ___. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل هنا: nicht.",
      "Use nicht to negate the action here."
    ],
    [
      "Jonas hat ___ Beleg dafür. (ein)",
      "keinen",
      "kein",
      "keine",
      "Beleg مذكر أكوزاتيف: keinen.",
      "Beleg is masculine accusative: keinen."
    ],
    [
      "Die Wortprobe ist ___ Besuch. (ein)",
      "kein",
      "keinen",
      "keine",
      "Besuch مذكر نوميناتيف: kein.",
      "Besuch is masculine nominative: kein."
    ]
  ]
};
