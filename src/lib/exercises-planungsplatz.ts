import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const planungsplatzGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Kalender liegt auf dem Tisch. (Kalender)",
      "Der",
      "Die",
      "Das",
      "Kalender مذكر: der.",
      "Kalender is masculine: der."
    ],
    [
      "___ Notizbuch ist offen. (Notizbuch)",
      "Das",
      "Der",
      "Die",
      "Notizbuch محايد: das.",
      "Notizbuch is neuter: das."
    ],
    [
      "___ Erinnerung ist noch aktiv. (Erinnerung)",
      "Die",
      "Der",
      "Das",
      "Erinnerung مؤنث: die.",
      "Erinnerung is feminine: die."
    ],
    [
      "___ Beginn ist jetzt um 18 Uhr. (Beginn)",
      "Der",
      "Die",
      "Das",
      "Beginn مذكر: der.",
      "Beginn is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Lara zeigt ___ ihr Notizbuch. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er: ihm.",
      "The recipient is dative; er becomes ihm."
    ],
    [
      "Das Notizbuch gehört ___. (ich)",
      "mir",
      "mich",
      "mein",
      "gehören داتيف؛ ich: mir.",
      "Gehören takes dative; ich becomes mir."
    ],
    [
      "Nora erklärt ___ die Vorschläge. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ],
    [
      "Der Kalender hilft ___ beim Planen. (du)",
      "dir",
      "dich",
      "dein",
      "helfen داتيف؛ du: dir.",
      "Helfen takes dative; du becomes dir."
    ]
  ],
  "praesens": [
    [
      "Lara ___ einen Namen. (notieren)",
      "notiert",
      "notierst",
      "notieren",
      "sie مفرد مع notieren: notiert.",
      "Singular sie takes notiert."
    ],
    [
      "Du ___ die neue Zeit. (lesen)",
      "liest",
      "lest",
      "lesen",
      "du مع lesen: liest.",
      "Du takes liest."
    ],
    [
      "Oskar ___ die Erinnerung. (ändern)",
      "ändert",
      "änderst",
      "ändern",
      "er مع ändern: ändert.",
      "Er takes ändert."
    ],
    [
      "Wir ___ den Beginn. (bestätigen)",
      "bestätigen",
      "bestätigt",
      "bestätigst",
      "wir مع bestätigen: bestätigen.",
      "Wir takes bestätigen."
    ]
  ],
  "trennbare-verben": [
    [
      "Timo trägt den Termin ___. (eintragen)",
      "ein",
      "zu",
      "mit",
      "eintragen بيتفصل: trägt ... ein.",
      "Eintragen separates: trägt ... ein."
    ],
    [
      "Ben schaut zu Hause ___. (nachschauen)",
      "nach",
      "an",
      "zu",
      "nachschauen بيتفصل: schaut ... nach.",
      "Nachschauen separates: schaut ... nach."
    ],
    [
      "Die Probe fängt später ___. (anfangen)",
      "an",
      "mit",
      "vor",
      "anfangen بيتفصل: fängt ... an.",
      "Anfangen separates: fängt ... an."
    ],
    [
      "Lara nimmt das Notizbuch ___. (mitnehmen)",
      "mit",
      "vor",
      "zu",
      "mitnehmen بيتفصل: nimmt ... mit.",
      "Mitnehmen separates: nimmt ... mit."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Stift liegt neben ___ Notizbuch. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد neben: داتيف، dem Notizbuch.",
      "Fixed location after neben takes dative: dem Notizbuch."
    ],
    [
      "Lara legt den Kalender auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "des",
      "اتجاه لمكان جديد: أكوزاتيف، den Tisch.",
      "Destination takes accusative: den Tisch."
    ],
    [
      "Die Uhrzeit steht in ___ Kalender. (der; Wo?)",
      "dem",
      "den",
      "des",
      "مكان ثابت بعد in: داتيف، dem Kalender.",
      "Fixed location after in takes dative: dem Kalender."
    ],
    [
      "Nora schreibt mit ___ Stift. (der)",
      "dem",
      "den",
      "des",
      "mit داتيف مذكر: dem Stift.",
      "Mit takes masculine dative: dem Stift."
    ]
  ],
  "negation": [
    [
      "Das ist ___ Notizbuch. (ein)",
      "kein",
      "keine",
      "keinen",
      "Notizbuch محايد نوميناتيف: kein.",
      "Notizbuch is neuter nominative: kein."
    ],
    [
      "Ben hat ___ Kalender dabei. (einen)",
      "keinen",
      "kein",
      "keine",
      "Kalender مذكر أكوزاتيف: keinen.",
      "Kalender is masculine accusative: keinen."
    ],
    [
      "Der Treffpunkt ändert sich ___. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل هنا بـ nicht.",
      "Use nicht to negate the verb here."
    ],
    [
      "Das ist ___ feste Zusage. (eine)",
      "keine",
      "kein",
      "keinen",
      "Zusage مؤنث نوميناتيف: keine.",
      "Zusage is feminine nominative: keine."
    ]
  ]
};
