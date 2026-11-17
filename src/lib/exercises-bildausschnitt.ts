import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const bildausschnittGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Schaukelstuhl ist auf dem Foto. (Schaukelstuhl)",
      "Der",
      "Die",
      "Das",
      "Schaukelstuhl مذكر: der.",
      "Schaukelstuhl is masculine: der."
    ],
    [
      "___ Hängematte ist leer. (Hängematte)",
      "Die",
      "Der",
      "Das",
      "Hängematte مؤنث: die.",
      "Hängematte is feminine: die."
    ],
    [
      "___ Bildausschnitt ist begrenzt. (Bildausschnitt)",
      "Der",
      "Das",
      "Die",
      "Bildausschnitt مذكر: der.",
      "Bildausschnitt is masculine: der."
    ],
    [
      "___ Eindruck ist persönlich. (Eindruck)",
      "Der",
      "Die",
      "Das",
      "Eindruck مذكر: der.",
      "Eindruck is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "Elif wählt ___ Schaukelstuhl auf dem Foto. (der)",
      "den",
      "dem",
      "der",
      "Schaukelstuhl مذكر أكوزاتيف: den.",
      "Schaukelstuhl is masculine accusative: den."
    ],
    [
      "Nils sieht ___ Hängematte. (die)",
      "die",
      "der",
      "dem",
      "Hängematte مؤنث أكوزاتيف: die.",
      "Hängematte is feminine accusative: die."
    ],
    [
      "Mira beschreibt ___ Ausschnitt. (der)",
      "den",
      "dem",
      "der",
      "Ausschnitt مذكر أكوزاتيف: den.",
      "Ausschnitt is masculine accusative: den."
    ],
    [
      "Jens nimmt ___ Blatt. (das)",
      "das",
      "dem",
      "der",
      "Blatt محايد أكوزاتيف: das.",
      "Blatt is neuter accusative: das."
    ]
  ],
  "praesens": [
    [
      "Elif ___ ihre Mutter. (fragen)",
      "fragt",
      "fragst",
      "fragen",
      "sie مفرد مع fragen: fragt.",
      "Singular sie takes fragt."
    ],
    [
      "Du ___ das Bild. (beschreiben)",
      "beschreibst",
      "beschreibt",
      "beschreiben",
      "du مع beschreiben: beschreibst.",
      "Du takes beschreibst."
    ],
    [
      "Wir ___ die Texte. (ändern)",
      "ändern",
      "ändert",
      "änderst",
      "wir مع ändern: ändern.",
      "Wir takes ändern."
    ],
    [
      "Nils ___ zwei Rahmen. (holen)",
      "holt",
      "holst",
      "holen",
      "er مفرد مع holen: holt.",
      "Singular er takes holt."
    ]
  ],
  "konnektoren-b1": [
    [
      "Elif wartet, ___ ihre Mutter nicht zu Hause ist. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب في جملة فرعية: weil.",
      "Weil introduces a reason in a dependent clause."
    ],
    [
      "___ das Bild ruhig wirkt, bleibt die Umgebung unbekannt. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض مع بقاء النتيجة: obwohl.",
      "Obwohl introduces a contrast that does not prevent the result."
    ],
    [
      "Cem verschiebt das Foto, ___ daneben Platz für das Wort bleibt. (Zweck)",
      "damit",
      "obwohl",
      "weil",
      "غرض أو هدف: damit.",
      "Damit introduces a purpose."
    ],
    [
      "Die Freundin fragt, ___ die Hängematte schon hängt. (Ja/Nein-Frage)",
      "ob",
      "weil",
      "damit",
      "سؤال غير مباشر بنعم أو لأ: ob.",
      "Use ob for an indirect yes/no question."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Rahmen stehen auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع auf: داتيف dem.",
      "Fixed location with auf takes dative: dem."
    ],
    [
      "Elif stellt die Rahmen auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع auf: أكوزاتيف den.",
      "Destination with auf takes accusative: den."
    ],
    [
      "Das Bild liegt in ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative: der."
    ],
    [
      "Cem legt das Blatt in ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative: die."
    ]
  ],
  "negation": [
    [
      "Das Bild ist ___ Nutzungserlaubnis. (eine)",
      "keine",
      "kein",
      "keinen",
      "Nutzungserlaubnis مؤنث نوميناتيف: keine.",
      "Nutzungserlaubnis is feminine nominative: keine."
    ],
    [
      "Der Plan ist ___ maßstabsgetreu. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الصفة هنا: nicht.",
      "Use nicht to negate the adjective here."
    ],
    [
      "Sie haben ___ Aufbau vereinbart. (ein)",
      "keinen",
      "kein",
      "keine",
      "Aufbau مذكر أكوزاتيف: keinen.",
      "Aufbau is masculine accusative: keinen."
    ],
    [
      "An der Wand hängt noch ___ Bild. (ein)",
      "kein",
      "keinen",
      "keine",
      "Bild محايد نوميناتيف: kein.",
      "Bild is neuter nominative: kein."
    ]
  ]
};
