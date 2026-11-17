import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const klangnamenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Glockenspiel hat bunte Platten. (Glockenspiel)",
      "Das",
      "Der",
      "Die",
      "Glockenspiel محايد: das.",
      "Glockenspiel is neuter: das."
    ],
    [
      "___ Cabasa wird mit den Händen gehalten. (Cabasa)",
      "Die",
      "Der",
      "Das",
      "Cabasa مؤنث: die.",
      "Cabasa is feminine: die."
    ],
    [
      "___ Hinweis kommt zu früh. (Hinweis)",
      "Der",
      "Die",
      "Das",
      "Hinweis مذكر: der.",
      "Hinweis is masculine: der."
    ],
    [
      "___ Wortkarte liegt auf dem Tisch. (Wortkarte)",
      "Die",
      "Der",
      "Das",
      "Wortkarte مؤنث: die.",
      "Wortkarte is feminine: die."
    ]
  ],
  "akkusativ": [
    [
      "Rana mischt ___ Wortkarten. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول مباشر جمع: die Wortkarten.",
      "Plural direct object takes die Wortkarten."
    ],
    [
      "Tim ergänzt ___ Buchstaben. (der; Singular)",
      "den",
      "dem",
      "der",
      "مفعول مباشر مذكر: den Buchstaben.",
      "Masculine direct object takes den Buchstaben."
    ],
    [
      "Alex gibt ___ Hinweis. (ein)",
      "einen",
      "einem",
      "einer",
      "مفعول مباشر مذكر: einen Hinweis.",
      "Masculine direct object takes einen Hinweis."
    ],
    [
      "Leila ändert ___ Überschrift. (die)",
      "die",
      "der",
      "den",
      "مفعول مباشر مؤنث: die Überschrift.",
      "Feminine direct object takes die Überschrift."
    ]
  ],
  "perfekt": [
    [
      "Rana hat die Karten ___. (mischen)",
      "gemischt",
      "gemischen",
      "mischen",
      "Partizip II: gemischt.",
      "The past participle is gemischt."
    ],
    [
      "Tim hat den Buchstaben ___. (ergänzen)",
      "ergänzt",
      "geergänzt",
      "ergänzen",
      "er- من غير ge-: ergänzt.",
      "The inseparable prefix er- takes no ge-: ergänzt."
    ],
    [
      "Dina hat nach einem Hinweis ___. (fragen)",
      "gefragt",
      "gefragen",
      "fragen",
      "Partizip II: gefragt.",
      "The past participle is gefragt."
    ],
    [
      "Ben hat die Namen ___. (zuordnen)",
      "zugeordnet",
      "gezuordnet",
      "zuordnen",
      "zuordnen فعل قابل للفصل: zugeordnet.",
      "The separable verb zuordnen forms zugeordnet."
    ]
  ],
  "modalverben": [
    [
      "Du ___ zuerst selbst antworten. (können)",
      "kannst",
      "könnt",
      "kann",
      "du: kannst وبعدها مصدر.",
      "Du takes kannst, followed by an infinitive."
    ],
    [
      "Alex ___ auf die Frage warten. (sollen)",
      "soll",
      "sollst",
      "sollen",
      "er مفرد: soll.",
      "Singular er takes soll."
    ],
    [
      "Wir ___ nur die Wörter üben. (wollen)",
      "wollen",
      "wollt",
      "will",
      "wir: wollen.",
      "Wir takes wollen."
    ],
    [
      "Ihr ___ einen Hinweis geben. (dürfen)",
      "dürft",
      "darf",
      "darfst",
      "ihr: dürft.",
      "Ihr takes dürft."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt neben ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem.",
      "Fixed location with neben takes dative dem."
    ],
    [
      "Tim legt die Karte neben ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das.",
      "Destination with neben takes accusative das."
    ],
    [
      "Die Namen stehen in ___ Tabelle. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative der."
    ],
    [
      "Leila schreibt die Namen in ___ Tabelle. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative die."
    ]
  ],
  "konnektoren-b1": [
    [
      "Alex wartet, ___ Dina ausdrücklich um Hilfe bittet. (Zeitgrenze)",
      "bis",
      "obwohl",
      "damit",
      "لحد وقت معين: bis.",
      "Until a point in time takes bis."
    ],
    [
      "___ das Wort kürzer ist, findet Leila es schwer. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض مع الفعل في الآخر: obwohl.",
      "A contrast with the verb last takes obwohl."
    ],
    [
      "Ben kennt den Namen, ___ er ihn früher gehört hat. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب مع الفعل في الآخر: weil.",
      "A reason with the verb last takes weil."
    ],
    [
      "Rana verdeckt die Karten, ___ Tim selbst antworten kann. (Zweck)",
      "damit",
      "obwohl",
      "bevor",
      "غرض مع الفعل في الآخر: damit.",
      "A purpose with the verb last takes damit."
    ]
  ]
};
