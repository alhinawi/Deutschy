import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const malerwoerterGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Farbrolle hat einen roten Griff. (Farbrolle)",
      "Die",
      "Der",
      "Das",
      "Farbrolle مؤنث: die.",
      "Farbrolle is feminine: die."
    ],
    [
      "___ Farbwanne ist orange. (Farbwanne)",
      "Die",
      "Der",
      "Das",
      "Farbwanne مؤنث: die.",
      "Farbwanne is feminine: die."
    ],
    [
      "___ Griff ist rot. (Griff)",
      "Der",
      "Die",
      "Das",
      "Griff مذكر: der.",
      "Griff is masculine: der."
    ],
    [
      "___ Hintergrund ist neutral. (Hintergrund)",
      "Der",
      "Die",
      "Das",
      "Hintergrund مذكر: der.",
      "Hintergrund is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "Lea beschreibt ___ Griff. (der)",
      "den",
      "dem",
      "der",
      "مفعول به مذكر: den Griff.",
      "Masculine direct object: den Griff."
    ],
    [
      "Sami sucht ___ Pinsel. (ein)",
      "einen",
      "einem",
      "einer",
      "مفعول به مذكر: einen Pinsel.",
      "Masculine direct object: einen Pinsel."
    ],
    [
      "Nora notiert ___ Plan. (der)",
      "den",
      "dem",
      "der",
      "مفعول به مذكر: den Plan.",
      "Masculine direct object: den Plan."
    ],
    [
      "Paul ändert ___ Satz. (ein)",
      "einen",
      "einem",
      "einer",
      "مفعول به مذكر: einen Satz.",
      "Masculine direct object: einen Satz."
    ]
  ],
  "perfekt": [
    [
      "Lea hat die Wörter ___. (vorlesen)",
      "vorgelesen",
      "vorlesen",
      "vorgelest",
      "Partizip II: vorgelesen.",
      "The past participle is vorgelesen."
    ],
    [
      "Ben hat die Frage ___. (stellen)",
      "gestellt",
      "gestellen",
      "stellen",
      "Partizip II: gestellt.",
      "The past participle is gestellt."
    ],
    [
      "Nora hat den Plan ___. (bestätigen)",
      "bestätigt",
      "gebestätigt",
      "bestätigen",
      "فعل بـ be- من غير ge-: bestätigt.",
      "The be- prefix takes no ge-: bestätigt."
    ],
    [
      "Paul hat den Satz ___. (ersetzen)",
      "ersetzt",
      "geersetzt",
      "ersetzen",
      "فعل بـ er- من غير ge-: ersetzt.",
      "The er- prefix takes no ge-: ersetzt."
    ]
  ],
  "modalverben": [
    [
      "Du ___ nur die Wanne fotografieren. (wollen)",
      "willst",
      "wollt",
      "wollen",
      "du: willst.",
      "Du takes willst."
    ],
    [
      "Ben ___ nichts mehr bringen. (müssen)",
      "muss",
      "müsst",
      "müssen",
      "er مفرد: muss.",
      "Singular er takes muss."
    ],
    [
      "Wir ___ die Art nicht bestimmen. (können)",
      "können",
      "kann",
      "könnt",
      "wir: können.",
      "Wir takes können."
    ],
    [
      "Ihr ___ erst nachfragen. (sollen)",
      "sollt",
      "soll",
      "sollen",
      "ihr: sollt.",
      "Ihr takes sollt."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Heft liegt in ___ Tasche. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative der."
    ],
    [
      "Sami steckt das Heft in ___ Tasche. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative die."
    ],
    [
      "Die Wanne steht neben ___ Tasche. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع neben: داتيف der.",
      "Fixed location with neben takes dative der."
    ],
    [
      "Ben stellt die Wanne neben ___ Tasche. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع neben: أكوزاتيف die.",
      "Destination with neben takes accusative die."
    ]
  ],
  "konnektoren-b1": [
    [
      "Ben fragt nach, ___ die Bitte unklar ist. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب: weil.",
      "Use weil for the reason."
    ],
    [
      "___ Ben etwas einpackt, fragt er nach. (zeitlich davor)",
      "Bevor",
      "Obwohl",
      "Damit",
      "حاجة قبل حاجة: bevor.",
      "Use bevor for before another action."
    ],
    [
      "Paul ändert den Satz, ___ die Beschreibung genau bleibt. (Ziel)",
      "damit",
      "obwohl",
      "bevor",
      "هدف: damit.",
      "Use damit for the purpose."
    ],
    [
      "___ die Farbe hell wirkt, bleibt ihre Art unbekannt. (Gegensatz)",
      "Obwohl",
      "Damit",
      "Weil",
      "تعارض: obwohl.",
      "Use obwohl for the contrast."
    ]
  ]
};
