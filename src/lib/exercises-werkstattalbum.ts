import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const werkstattalbumGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Schraubzwinge ist auf dem Foto zu sehen. (Schraubzwinge)",
      "Die",
      "Der",
      "Das",
      "Schraubzwinge مؤنث: die.",
      "Schraubzwinge is feminine: die."
    ],
    [
      "___ Hobel hat einen Holzgriff. (Hobel)",
      "Der",
      "Die",
      "Das",
      "Hobel مذكر: der.",
      "Hobel is masculine: der."
    ],
    [
      "___ Bildfolge steht noch nicht fest. (Bildfolge)",
      "Die",
      "Das",
      "Der",
      "Bildfolge مؤنث: die.",
      "Bildfolge is feminine: die."
    ],
    [
      "___ Beleg fehlt noch. (Beleg)",
      "Der",
      "Die",
      "Das",
      "Beleg مذكر: der.",
      "Beleg is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "Paul liest ___ Brief. (der)",
      "den",
      "dem",
      "der",
      "Brief مذكر مفعول مباشر: den.",
      "Brief is a masculine direct object: den."
    ],
    [
      "Ines nennt ___ Gegenstand. (ein)",
      "einen",
      "einem",
      "einer",
      "Gegenstand مذكر أكوزاتيف: einen.",
      "Gegenstand is masculine accusative: einen."
    ],
    [
      "Arne entfernt ___ Absatz. (der)",
      "den",
      "dem",
      "der",
      "Absatz مذكر أكوزاتيف: den.",
      "Absatz is masculine accusative: den."
    ],
    [
      "Dima prüft ___ Zuordnung. (die)",
      "die",
      "der",
      "den",
      "Zuordnung مؤنث أكوزاتيف: die.",
      "Zuordnung is feminine accusative: die."
    ]
  ],
  "praesens": [
    [
      "Paul ___ den Brief auf. (heben)",
      "hebt",
      "hebst",
      "heben",
      "er مفرد مع heben: hebt.",
      "Singular er takes hebt."
    ],
    [
      "Du ___ die Bildfolge. (speichern)",
      "speicherst",
      "speichert",
      "speichern",
      "du مع speichern: speicherst.",
      "Du takes speicherst."
    ],
    [
      "Wir ___ beide Originale. (behalten)",
      "behalten",
      "behält",
      "behaltet",
      "wir مع behalten: behalten.",
      "Wir takes behalten."
    ],
    [
      "Dima ___ die Wörter vor. (lesen)",
      "liest",
      "lest",
      "lese",
      "sie مفرد مع lesen: liest.",
      "Singular sie takes liest."
    ]
  ],
  "konnektoren-b1": [
    [
      "Paul schreibt auf ein extra Blatt, ___ das Foto unverändert bleibt. (Zweck)",
      "damit",
      "obwohl",
      "weil",
      "غرض بفاعل مختلف: damit.",
      "Purpose with a different subject takes damit."
    ],
    [
      "___ die Zahlen geordnet sind, beweisen sie keine Aufnahmefolge. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض مع استمرار النتيجة: obwohl.",
      "Obwohl introduces a contrast that does not prevent the result."
    ],
    [
      "Denis streicht den Satz, ___ der Ablauf nicht belegt ist. (Grund)",
      "weil",
      "damit",
      "obwohl",
      "السبب في جملة فرعية: weil.",
      "Weil introduces the reason in a dependent clause."
    ],
    [
      "Dima fragt, ___ die Namen zu den Fotos passen. (Ja/Nein-Frage)",
      "ob",
      "weil",
      "damit",
      "سؤال غير مباشر بنعم أو لأ: ob.",
      "Use ob for an indirect yes/no question."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Foto liegt in ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع in: داتيف der Mappe.",
      "Fixed location with in takes dative: der Mappe."
    ],
    [
      "Paul legt das Foto in ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع in: أكوزاتيف die Mappe.",
      "Destination with in takes accusative: die Mappe."
    ],
    [
      "Die Beschriftung steht unter ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع unter: داتيف dem Foto.",
      "Fixed location with unter takes dative: dem Foto."
    ],
    [
      "Rika legt das neue Blatt neben ___ Brief. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع neben: أكوزاتيف den Brief.",
      "Destination with neben takes accusative: den Brief."
    ]
  ],
  "negation": [
    [
      "Der Brief enthält ___ aktuellen Bericht. (ein)",
      "keinen",
      "kein",
      "keine",
      "Bericht مذكر أكوزاتيف: keinen.",
      "Bericht is masculine accusative: keinen."
    ],
    [
      "Die Zahlen beweisen ___ zeitliche Reihenfolge. (eine)",
      "keine",
      "kein",
      "keinen",
      "Reihenfolge مؤنث أكوزاتيف: keine.",
      "Reihenfolge is feminine accusative: keine."
    ],
    [
      "Eine fachliche Prüfung ist noch ___ vereinbart. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الحالة هنا: nicht.",
      "Use nicht to negate the state here."
    ],
    [
      "Die Seite ist ___ Anleitung. (eine)",
      "keine",
      "kein",
      "keinen",
      "Anleitung مؤنث نوميناتيف: keine.",
      "Anleitung is feminine nominative: keine."
    ]
  ]
};
