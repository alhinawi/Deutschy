import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const tischaufgabenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Teigschaber liegt auf dem Tablett. (Teigschaber)",
      "Der",
      "Die",
      "Das",
      "Teigschaber مذكر: der.",
      "Teigschaber is masculine: der."
    ],
    [
      "___ Platzdeckchen ist rund. (Platzdeckchen)",
      "Das",
      "Der",
      "Die",
      "Platzdeckchen محايد: das.",
      "Platzdeckchen is neuter: das."
    ],
    [
      "___ Aufteilung ist deutlich. (Aufteilung)",
      "Die",
      "Der",
      "Das",
      "Aufteilung مؤنث: die.",
      "Aufteilung is feminine: die."
    ],
    [
      "___ Vorrat reicht aus. (Vorrat)",
      "Der",
      "Die",
      "Das",
      "Vorrat مذكر: der.",
      "Vorrat is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "Mira nimmt ___ Teigschaber. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر أكوزاتيف: den.",
      "A masculine direct object takes den."
    ],
    [
      "Ben legt ___ Pinsel zurück. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر أكوزاتيف: den.",
      "A masculine direct object takes den."
    ],
    [
      "Lea schließt ___ Tasche. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث أكوزاتيف: die.",
      "A feminine direct object takes die."
    ],
    [
      "Eva legt ___ Platzdeckchen hin. (das)",
      "das",
      "dem",
      "der",
      "مفعول محايد أكوزاتيف: das.",
      "A neuter direct object takes das."
    ]
  ],
  "perfekt": [
    [
      "Nils hat die Deckchen ___. (zählen)",
      "gezählt",
      "zählen",
      "gezählen",
      "اسم المفعول من zählen: gezählt.",
      "The past participle of zählen is gezählt."
    ],
    [
      "Lea hat die Tasche ___. (packen)",
      "gepackt",
      "gepacken",
      "packt",
      "اسم المفعول من packen: gepackt.",
      "The past participle of packen is gepackt."
    ],
    [
      "Ben hat den Pinsel ___. (zurücklegen)",
      "zurückgelegt",
      "gezurücklegt",
      "zurücklegen",
      "الفعل المنفصل: zurückgelegt.",
      "The separable verb forms zurückgelegt."
    ],
    [
      "Eva hat die Bitte ___. (verstehen)",
      "verstanden",
      "geverstanden",
      "versteht",
      "verstehen غير منفصل: verstanden من غير ge-.",
      "Verstehen is inseparable: verstanden without ge-."
    ]
  ],
  "modalverben": [
    [
      "Du ___ nur die Deckchen zählen. (sollen)",
      "sollst",
      "soll",
      "sollen",
      "sollen مع du: sollst.",
      "Sollen takes sollst with du."
    ],
    [
      "Lea ___ selbst packen. (wollen)",
      "will",
      "wollen",
      "willst",
      "wollen مع sie مفرد: will.",
      "Wollen takes will with singular sie."
    ],
    [
      "Wir ___ die Aufgabe genauer nennen. (müssen)",
      "müssen",
      "muss",
      "müsst",
      "müssen مع wir: müssen.",
      "Müssen takes müssen with wir."
    ],
    [
      "Ihr ___ mit dem zweiten Teller warten. (können)",
      "könnt",
      "können",
      "kann",
      "können مع ihr: könnt.",
      "Können takes könnt with ihr."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Deckchen liegt auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع auf: داتيف dem.",
      "Fixed location with auf takes dative dem."
    ],
    [
      "Eva legt das Deckchen auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع auf: أكوزاتيف den.",
      "Destination with auf takes accusative den."
    ],
    [
      "Die Schachtel liegt in ___ Tasche. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative der."
    ],
    [
      "Lea legt die Schachtel in ___ Tasche. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative die."
    ]
  ],
  "konnektoren-b1": [
    [
      "Lea nimmt vier Deckchen mit, ___ ihre Tante zwei eigene verwendet. (Grund)",
      "weil",
      "obwohl",
      "bevor",
      "السبب مع فعل في الآخر: weil.",
      "Weil gives the reason and sends the verb to the end."
    ],
    [
      "___ Nils zählt, packt Lea die Schachtel ein. (gleichzeitig)",
      "Während",
      "Nachdem",
      "Damit",
      "حاجتين في نفس الوقت: während.",
      "Während links simultaneous actions."
    ],
    [
      "Eva fragt nach, ___ die Notiz nicht eindeutig ist. (Grund)",
      "weil",
      "sodass",
      "obwohl",
      "سبب السؤال: weil.",
      "Weil introduces the reason for asking."
    ],
    [
      "___ Eva die Deckchen hingelegt hat, ist ihr Teil erledigt. (danach)",
      "Nachdem",
      "Bevor",
      "Damit",
      "بعد اكتمال الخطوة: nachdem.",
      "Nachdem places completion of the action first."
    ]
  ]
};
