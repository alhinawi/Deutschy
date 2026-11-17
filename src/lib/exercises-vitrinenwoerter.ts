import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const vitrinenwoerterGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Zuckerdose steht oben. (Zuckerdose)",
      "Die",
      "Der",
      "Das",
      "Zuckerdose مؤنث: die.",
      "Zuckerdose is feminine: die."
    ],
    [
      "___ Nussknacker liegt unten. (Nussknacker)",
      "Der",
      "Die",
      "Das",
      "Nussknacker مذكر: der.",
      "Nussknacker is masculine: der."
    ],
    [
      "___ Fundort ist bekannt. (Fundort)",
      "Der",
      "Die",
      "Das",
      "Fundort مذكر: der.",
      "Fundort is masculine: der."
    ],
    [
      "___ Exemplar sieht anders aus. (Exemplar)",
      "Das",
      "Die",
      "Der",
      "Exemplar محايد: das.",
      "Exemplar is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Ben zeigt ___ Nussknacker. (der)",
      "den",
      "dem",
      "der",
      "Nussknacker مذكر أكوزاتيف: den.",
      "Nussknacker is masculine accusative: den."
    ],
    [
      "Selin beschreibt ___ Zuckerdose. (die)",
      "die",
      "der",
      "dem",
      "Zuckerdose مؤنث أكوزاتيف: die.",
      "Zuckerdose is feminine accusative: die."
    ],
    [
      "Marek behält ___ Zettel. (der)",
      "den",
      "dem",
      "der",
      "Zettel مذكر أكوزاتيف: den.",
      "Zettel is masculine accusative: den."
    ],
    [
      "Ada ergänzt ___ Blatt. (das)",
      "das",
      "dem",
      "der",
      "Blatt محايد أكوزاتيف: das.",
      "Blatt is neuter accusative: das."
    ]
  ],
  "praesens": [
    [
      "Ben ___ die Karte heraus. (nehmen)",
      "nimmt",
      "nimmst",
      "nehmen",
      "er مفرد مع nehmen: nimmt.",
      "Singular er takes nimmt."
    ],
    [
      "Du ___ das Wort laut. (lesen)",
      "liest",
      "lest",
      "lese",
      "du مع lesen: liest.",
      "Du takes liest."
    ],
    [
      "Wir ___ sichere Angaben und Fragen. (trennen)",
      "trennen",
      "trennt",
      "trennst",
      "wir مع trennen: trennen.",
      "Wir takes trennen."
    ],
    [
      "Selin ___ den Namen nicht. (bestätigen)",
      "bestätigt",
      "bestätigst",
      "bestätigen",
      "sie مفرد مع bestätigen: bestätigt.",
      "Singular sie takes bestätigt."
    ]
  ],
  "konnektoren-b1": [
    [
      "Marek ändert die Beschriftung, ___ die Eigentümerin nicht bestätigt ist. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب في جملة فرعية: weil.",
      "Weil introduces a reason in a dependent clause."
    ],
    [
      "___ die Dose anders aussieht, passt das Wort. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض مع بقاء النتيجة: obwohl.",
      "Obwohl introduces a contrast that does not prevent the result."
    ],
    [
      "Ben zeigt die Karte, ___ Anja das Wort lesen kann. (Zweck)",
      "damit",
      "obwohl",
      "weil",
      "غرض بفاعل مختلف: damit.",
      "Purpose with a different subject takes damit."
    ],
    [
      "Selin fragt, ___ ihre Tante die Sachen kennt. (Ja/Nein-Frage)",
      "ob",
      "weil",
      "damit",
      "سؤال غير مباشر بنعم أو لأ: ob.",
      "Use ob for an indirect yes/no question."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Dose steht über ___ Nussknacker. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع über: داتيف dem.",
      "Fixed location with über takes dative: dem."
    ],
    [
      "Ben legt die Karte neben ___ Nussknacker. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع neben: أكوزاتيف den.",
      "Destination with neben takes accusative: den."
    ],
    [
      "Der Zettel liegt in ___ Schachtel. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative: der."
    ],
    [
      "Marek legt den Zettel in ___ Schachtel. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative: die."
    ]
  ],
  "negation": [
    [
      "Die Vermutung ist noch ___ bestätigt. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي التأكيد هنا: nicht.",
      "Use nicht to negate confirmation here."
    ],
    [
      "Die Sammlung ist ___ vollständige Formenliste. (eine)",
      "keine",
      "kein",
      "keinen",
      "Formenliste مؤنث نوميناتيف: keine.",
      "Formenliste is feminine nominative: keine."
    ],
    [
      "Sie nennen ___ bestätigte Besitzerin. (eine)",
      "keine",
      "kein",
      "keinen",
      "Besitzerin مؤنث أكوزاتيف: keine.",
      "Besitzerin is feminine accusative: keine."
    ],
    [
      "Das Blatt enthält ___ Baujahr. (ein)",
      "kein",
      "keinen",
      "keine",
      "Baujahr محايد أكوزاتيف: kein.",
      "Baujahr is neuter accusative: kein."
    ]
  ]
};
