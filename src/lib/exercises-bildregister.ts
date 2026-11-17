import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const bildregisterGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Glocke ist auf dem Bild. (Glocke)",
      "Die",
      "Der",
      "Das",
      "Glocke مؤنث: die.",
      "Glocke is feminine: die."
    ],
    [
      "___ Kerzenständer steht rechts. (Kerzenständer)",
      "Der",
      "Die",
      "Das",
      "Kerzenständer مذكر: der.",
      "Kerzenständer is masculine: der."
    ],
    [
      "___ Zählblatt bleibt leer. (Zählblatt)",
      "Das",
      "Der",
      "Die",
      "Zählblatt محايد: das.",
      "Zählblatt is neuter: das."
    ],
    [
      "___ Reihenfolge ist klar. (Reihenfolge)",
      "Die",
      "Der",
      "Das",
      "Reihenfolge مؤنث: die.",
      "Reihenfolge is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Oskar hilft ___ Cousine. (die)",
      "der",
      "die",
      "den",
      "helfen بياخد داتيف: der Cousine.",
      "Helfen takes dative: der Cousine."
    ],
    [
      "Anja erklärt ___ Freund die Notiz. (der)",
      "dem",
      "den",
      "der",
      "المتلقي داتيف: dem Freund.",
      "The recipient takes dative: dem Freund."
    ],
    [
      "Die Karten gehören ___ Bruder. (der)",
      "dem",
      "den",
      "der",
      "gehören بياخد داتيف: dem Bruder.",
      "Gehören takes dative: dem Bruder."
    ],
    [
      "Farah spricht mit ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "mit بياخد داتيف: der Partnerin.",
      "Mit takes dative: der Partnerin."
    ]
  ],
  "praesens": [
    [
      "Lina ___ die Karten laut. (lesen)",
      "liest",
      "lese",
      "lesen",
      "sie مفرد: liest.",
      "Singular sie takes liest."
    ],
    [
      "Du ___ das Blatt leer. (lassen)",
      "lässt",
      "lasst",
      "lassen",
      "du مع lassen: lässt.",
      "Du takes lässt."
    ],
    [
      "Wir ___ die Bilder. (ordnen)",
      "ordnen",
      "ordnet",
      "ordnest",
      "wir مع ordnen: ordnen.",
      "Wir takes ordnen."
    ],
    [
      "Malte ___ die Erklärung hilfreich. (finden)",
      "findet",
      "findest",
      "finden",
      "er مفرد: findet.",
      "Singular er takes findet."
    ]
  ],
  "possessiv": [
    [
      "Lina öffnet ___ Album. (Lina; das)",
      "ihr",
      "ihren",
      "ihre",
      "ملكية Lina مع محايد أكوزاتيف: ihr Album.",
      "Lina takes ihr with neuter accusative Album."
    ],
    [
      "Oskar nimmt ___ Stift. (Oskar; der)",
      "seinen",
      "sein",
      "seine",
      "ملكية Oskar مع مذكر أكوزاتيف: seinen Stift.",
      "Oskar takes seinen with masculine accusative Stift."
    ],
    [
      "Anja ergänzt ___ Notizen. (Anja; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "ملكية Anja مع جمع أكوزاتيف: ihre Notizen.",
      "Anja takes ihre with plural accusative Notizen."
    ],
    [
      "Wir lesen ___ Liste. (wir; die)",
      "unsere",
      "unser",
      "unseren",
      "ملكية wir مع مؤنث أكوزاتيف: unsere Liste.",
      "Wir takes unsere with feminine accusative Liste."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Fotos liegen auf ___ Sofa. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع auf: داتيف dem.",
      "Fixed location with auf takes dative: dem."
    ],
    [
      "Oskar legt die Fotos auf ___ Sofa. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع auf: أكوزاتيف das.",
      "Destination with auf takes accusative: das."
    ],
    [
      "Die Karten liegen in ___ Schachtel. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative: der."
    ],
    [
      "Farah legt die Karten in ___ Schachtel. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative: die."
    ]
  ],
  "negation": [
    [
      "Die Notiz enthält ___ Uhrzeit. (eine)",
      "keine",
      "kein",
      "keinen",
      "Uhrzeit مؤنث أكوزاتيف: keine.",
      "Uhrzeit is feminine accusative: keine."
    ],
    [
      "Sie kleben die Fotos heute ___ ein. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل هنا: nicht.",
      "Use nicht to negate the action here."
    ],
    [
      "Das Etikett nennt ___ Preis. (ein)",
      "keinen",
      "kein",
      "keine",
      "Preis مذكر أكوزاتيف: keinen.",
      "Preis is masculine accusative: keinen."
    ],
    [
      "Die Nummer ist ___ Uhrzeit. (eine)",
      "keine",
      "kein",
      "keinen",
      "Uhrzeit مؤنث نوميناتيف: keine.",
      "Uhrzeit is feminine nominative: keine."
    ]
  ]
};
