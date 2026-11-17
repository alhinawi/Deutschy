import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const instrumentenformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Rumbakugel hat einen Griff. (Rumbakugel)",
      "Die",
      "Der",
      "Das",
      "Rumbakugel مؤنث: die.",
      "Rumbakugel is feminine: die."
    ],
    [
      "___ Klangschale steht auf einem Kissen. (Klangschale)",
      "Die",
      "Der",
      "Das",
      "Klangschale مؤنث: die.",
      "Klangschale is feminine: die."
    ],
    [
      "___ Griff ist schwarz. (Griff)",
      "Der",
      "Die",
      "Das",
      "Griff مذكر: der.",
      "Griff is masculine: der."
    ],
    [
      "___ Kissen ist blau. (Kissen)",
      "Das",
      "Der",
      "Die",
      "Kissen محايد: das.",
      "Kissen is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "David nimmt ___ Bleistift. (der)",
      "den",
      "dem",
      "der",
      "مفعول مباشر مذكر: den Bleistift.",
      "Masculine direct object takes den Bleistift."
    ],
    [
      "Inas öffnet ___ Mappe. (die)",
      "die",
      "der",
      "den",
      "مفعول مباشر مؤنث: die Mappe.",
      "Feminine direct object takes die Mappe."
    ],
    [
      "Omar beschreibt ___ Griff. (der)",
      "den",
      "dem",
      "der",
      "مفعول مباشر مذكر: den Griff.",
      "Masculine direct object takes den Griff."
    ],
    [
      "Lina ergänzt ___ Wortheft. (das)",
      "das",
      "dem",
      "den",
      "مفعول مباشر محايد: das Wortheft.",
      "Neuter direct object takes das Wortheft."
    ]
  ],
  "perfekt": [
    [
      "Ben hat die Musik ___. (ausstellen)",
      "ausgestellt",
      "ausstellen",
      "ausgestellen",
      "التصريف التالت: ausgestellt.",
      "Past participle: ausgestellt."
    ],
    [
      "Sara ist an die Tür ___. (kommen)",
      "gekommen",
      "gekommt",
      "kommen",
      "التصريف التالت: gekommen مع ist.",
      "Past participle: gekommen with ist."
    ],
    [
      "David hat die Formen ___. (notieren)",
      "notiert",
      "genotiert",
      "notieren",
      "فعل آخره ieren: notiert من غير ge.",
      "A verb ending in ieren takes notiert without ge."
    ],
    [
      "Lina hat noch keine Aufnahme ___. (auswählen)",
      "ausgewählt",
      "auswählen",
      "gewähltet",
      "التصريف التالت: ausgewählt.",
      "Past participle: ausgewählt."
    ]
  ],
  "modalverben": [
    [
      "Sara ___ sich konzentrieren. (möchten; sie)",
      "möchte",
      "möchtest",
      "möchten",
      "sie مفرد: möchte.",
      "Singular sie takes möchte."
    ],
    [
      "Du ___ die Artikel markieren. (können)",
      "kannst",
      "kann",
      "könnt",
      "du: kannst.",
      "Du takes kannst."
    ],
    [
      "Wir ___ die Bilder nicht bemalen. (sollen)",
      "sollen",
      "soll",
      "sollt",
      "wir: sollen.",
      "Wir takes sollen."
    ],
    [
      "Ihr ___ die Musik ausstellen. (können)",
      "könnt",
      "kann",
      "kannst",
      "ihr: könnt.",
      "Ihr takes könnt."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Klangschale steht auf ___ Kissen. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع auf: داتيف dem.",
      "Fixed location with auf takes dative dem."
    ],
    [
      "David legt das Heft auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع auf: أكوزاتيف den.",
      "Destination with auf takes accusative den."
    ],
    [
      "Die Fotos liegen in ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative der."
    ],
    [
      "Inas steckt die Fotos in ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative die."
    ]
  ],
  "konnektoren-b1": [
    [
      "Ben stellt die Musik aus, ___ Sara arbeiten möchte. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب مع الفعل في الآخر: weil.",
      "A reason with the verb last takes weil."
    ],
    [
      "___ sie eine Aufnahme auswählen, bleibt das Hörfeld frei. (Zeitgrenze)",
      "Bis",
      "Obwohl",
      "Weil",
      "لحد وقت معين: bis.",
      "Until a future point takes bis."
    ],
    [
      "___ sie nur Fotos haben, können sie die Namen üben. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض مع فعل في الآخر: obwohl.",
      "A contrast with the verb last takes obwohl."
    ],
    [
      "Omar lässt Platz, ___ er später eine Hörnotiz ergänzen kann. (Zweck)",
      "damit",
      "obwohl",
      "bevor",
      "غرض مع فعل في الآخر: damit.",
      "A purpose with the verb last takes damit."
    ]
  ]
};
