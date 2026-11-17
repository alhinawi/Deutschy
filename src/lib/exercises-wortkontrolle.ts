import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const wortkontrolleGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Rettungsring ist orange. (Rettungsring)",
      "Der",
      "Die",
      "Das",
      "Rettungsring مذكر: der.",
      "Rettungsring is masculine: der."
    ],
    [
      "___ Fernrohr ist auf dem Foto. (Fernrohr)",
      "Das",
      "Der",
      "Die",
      "Fernrohr محايد: das.",
      "Fernrohr is neuter: das."
    ],
    [
      "___ Abschrift ist vollständig. (Abschrift)",
      "Die",
      "Der",
      "Das",
      "Abschrift مؤنث: die.",
      "Abschrift is feminine: die."
    ],
    [
      "___ Stapel liegt hier. (Stapel)",
      "Der",
      "Die",
      "Das",
      "Stapel مذكر: der.",
      "Stapel is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "Eva benennt ___ Rettungsring. (der)",
      "den",
      "dem",
      "der",
      "Rettungsring مذكر أكوزاتيف: den.",
      "Rettungsring is masculine accusative: den."
    ],
    [
      "Sami beschreibt ___ Fernrohr. (das)",
      "das",
      "dem",
      "der",
      "Fernrohr محايد أكوزاتيف: das.",
      "Fernrohr is neuter accusative: das."
    ],
    [
      "Lea zählt ___ Stapel. (der)",
      "den",
      "dem",
      "der",
      "Stapel مذكر أكوزاتيف: den.",
      "Stapel is masculine accusative: den."
    ],
    [
      "Paul ergänzt ___ Namen. (der)",
      "den",
      "dem",
      "der",
      "Name مذكر أكوزاتيف: den Namen.",
      "Name is masculine accusative: den Namen."
    ]
  ],
  "praesens": [
    [
      "Lea ___ die Blätter. (zählen)",
      "zählt",
      "zählst",
      "zählen",
      "sie مفرد مع zählen: zählt.",
      "Singular sie takes zählt."
    ],
    [
      "Du ___ die Wörter. (kontrollieren)",
      "kontrollierst",
      "kontrolliert",
      "kontrollieren",
      "du مع kontrollieren: kontrollierst.",
      "Du takes kontrollierst."
    ],
    [
      "Wir ___ die Antworten. (besprechen)",
      "besprechen",
      "bespricht",
      "besprecht",
      "wir مع besprechen: besprechen.",
      "Wir takes besprechen."
    ],
    [
      "Paul ___ seinen Namen ein. (eintragen)",
      "trägt",
      "trägst",
      "tragen",
      "er مع eintragen: trägt ... ein.",
      "Singular er takes trägt ... ein."
    ]
  ],
  "konnektoren-b1": [
    [
      "Lea sucht weiter, ___ ein Blatt fehlt. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب: weil.",
      "Weil introduces a reason."
    ],
    [
      "___ alle Blätter zurück sind, sind nicht automatisch alle Antworten richtig. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض: obwohl.",
      "Obwohl introduces a contrast."
    ],
    [
      "Sie ergänzen die Überschrift, ___ die Häkchen verständlich sind. (Zweck)",
      "damit",
      "obwohl",
      "weil",
      "غرض: damit.",
      "Damit introduces a purpose."
    ],
    [
      "Jule fragt, ___ Karim die Geräte geprüft hat. (Ja/Nein-Frage)",
      "ob",
      "weil",
      "damit",
      "سؤال غير مباشر بنعم أو لأ: ob.",
      "Ob introduces an indirect yes/no question."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Blatt liegt unter ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت مع unter: داتيف der.",
      "Fixed location with unter takes dative: der."
    ],
    [
      "Paul legt das Blatt unter ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه مع unter: أكوزاتيف die.",
      "Destination with unter takes accusative: die."
    ],
    [
      "Die Hefte liegen auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع auf: داتيف dem.",
      "Fixed location with auf takes dative: dem."
    ],
    [
      "Eva legt die Hefte auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع auf: أكوزاتيف den.",
      "Destination with auf takes accusative: den."
    ]
  ],
  "negation": [
    [
      "Die Wortliste ist ___ Prüfbericht. (ein)",
      "kein",
      "keinen",
      "keine",
      "Prüfbericht مذكر نوميناتيف: kein.",
      "Prüfbericht is masculine nominative: kein."
    ],
    [
      "Sie drucken ___ Ersatzblatt. (ein)",
      "kein",
      "keinen",
      "keine",
      "Ersatzblatt محايد أكوزاتيف: kein.",
      "Ersatzblatt is neuter accusative: kein."
    ],
    [
      "Die Geräte sind ___ untersucht. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي هنا بـ nicht.",
      "Use nicht here."
    ],
    [
      "Paul hat ___ Namen eingetragen. (ein)",
      "keinen",
      "kein",
      "keine",
      "Name مذكر أكوزاتيف: keinen Namen.",
      "Name is masculine accusative: keinen Namen."
    ]
  ]
};
