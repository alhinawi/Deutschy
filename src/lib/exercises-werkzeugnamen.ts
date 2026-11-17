import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const werkzeugnamenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Nagel liegt vorne. (Nagel)",
      "Der",
      "Die",
      "Das",
      "Nagel مذكر: der.",
      "Nagel is masculine: der."
    ],
    [
      "___ Schraubendreher hat einen kurzen Griff. (Schraubendreher)",
      "Der",
      "Die",
      "Das",
      "Schraubendreher مذكر: der.",
      "Schraubendreher is masculine: der."
    ],
    [
      "___ Überschrift nennt die Grundform. (Überschrift)",
      "Die",
      "Der",
      "Das",
      "Überschrift مؤنث: die.",
      "Überschrift is feminine: die."
    ],
    [
      "___ Wörterbuch erklärt die Bedeutung. (Wörterbuch)",
      "Das",
      "Der",
      "Die",
      "Wörterbuch محايد: das.",
      "Wörterbuch is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Dana ergänzt ___ Umlaut. (der)",
      "den",
      "dem",
      "der",
      "مفعول مباشر مذكر: den Umlaut.",
      "Masculine direct object: den Umlaut."
    ],
    [
      "Samir liest ___ Karte. (die)",
      "die",
      "der",
      "den",
      "مفعول مباشر مؤنث: die Karte.",
      "Feminine direct object: die Karte."
    ],
    [
      "Mira beschreibt ___ Foto. (das)",
      "das",
      "dem",
      "den",
      "مفعول مباشر محايد: das Foto.",
      "Neuter direct object: das Foto."
    ],
    [
      "Jonas prüft ___ Bedeutung. (die)",
      "die",
      "der",
      "den",
      "مفعول مباشر مؤنث: die Bedeutung.",
      "Feminine direct object: die Bedeutung."
    ]
  ],
  "perfekt": [
    [
      "Dana hat den Umlaut ___. (ergänzen)",
      "ergänzt",
      "geergänzt",
      "ergänzen",
      "ergänzen: Partizip ergänzt من غير ge.",
      "Ergänzen has participle ergänzt, without ge."
    ],
    [
      "Samir hat beide Karten ___. (vorlesen)",
      "vorgelesen",
      "gevorlesen",
      "vorlesen",
      "vorlesen: vorgelesen.",
      "The participle of vorlesen is vorgelesen."
    ],
    [
      "Mira hat die Aufgaben ___. (trennen)",
      "getrennt",
      "getrennen",
      "trennen",
      "trennen: getrennt.",
      "The participle of trennen is getrennt."
    ],
    [
      "Sie haben die Bedeutung ___. (prüfen)",
      "geprüft",
      "geprüfen",
      "prüfen",
      "prüfen: geprüft.",
      "The participle of prüfen is geprüft."
    ]
  ],
  "modalverben": [
    [
      "Dana ___ die Punkte ergänzen. (müssen)",
      "muss",
      "müssen",
      "musst",
      "sie مفرد: muss.",
      "Singular sie takes muss."
    ],
    [
      "Du ___ beide Karten lesen. (können)",
      "kannst",
      "kann",
      "könnt",
      "du: kannst.",
      "Du takes kannst."
    ],
    [
      "Wir ___ die Bedeutungen ordnen. (wollen)",
      "wollen",
      "will",
      "wollt",
      "wir: wollen.",
      "Wir takes wollen."
    ],
    [
      "Ihr ___ nach dem Namen fragen. (dürfen)",
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
      "Dana legt die Karte neben ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das.",
      "Destination with neben takes accusative das."
    ],
    [
      "Die Form steht auf ___ Karte. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع auf: داتيف der.",
      "Fixed location with auf takes dative der."
    ],
    [
      "Sie schreibt die Form auf ___ Karte. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع auf: أكوزاتيف die.",
      "Destination with auf takes accusative die."
    ]
  ],
  "konnektoren-b1": [
    [
      "Leon fragt nach, ___ die Überschrift ihn verwirrt. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "weil لسبب والفعل في الآخر.",
      "Weil introduces a reason with the verb at the end."
    ],
    [
      "Mira ergänzt einen Hinweis, ___ der Unterschied klar wird. (Ziel)",
      "damit",
      "obwohl",
      "weil",
      "damit لهدف: عشان الفرق يبقى واضح.",
      "Damit introduces the purpose: to make the distinction clear."
    ],
    [
      "___ mehrere Nägel sichtbar sind, nennt die Überschrift den Singular. (Gegensatz)",
      "Obwohl",
      "Damit",
      "Weil",
      "obwohl لتناقض متوقع: رغم وجود كذا مسمار.",
      "Obwohl introduces a concession: despite several visible nails."
    ],
    [
      "Jonas prüft, ___ beide Wörter denselben Werkzeugtyp bezeichnen. (indirekte Ja/Nein-Frage)",
      "ob",
      "weil",
      "damit",
      "ob لسؤال غير مباشر إجابته أيوه أو لأ.",
      "Ob introduces an indirect yes/no question."
    ]
  ]
};
