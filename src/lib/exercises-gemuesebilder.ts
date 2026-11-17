import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const gemuesebilderGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Artischocke liegt auf dem Teller. (Artischocke)",
      "Die",
      "Der",
      "Das",
      "Artischocke مؤنث: die.",
      "Artischocke is feminine: die."
    ],
    [
      "___ Kohlrabi steht auf der Karte. (Kohlrabi)",
      "Der",
      "Die",
      "Das",
      "Kohlrabi مذكر: der.",
      "Kohlrabi is masculine: der."
    ],
    [
      "___ Reihenfolge hilft Elif. (Reihenfolge)",
      "Die",
      "Der",
      "Das",
      "Reihenfolge مؤنث: die.",
      "Reihenfolge is feminine: die."
    ],
    [
      "___ Maßstab fehlt im Bild. (Maßstab)",
      "Der",
      "Die",
      "Das",
      "Maßstab مذكر: der.",
      "Maßstab is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Jonas hilft ___ Partnerin. (die)",
      "der",
      "die",
      "den",
      "helfen بياخد داتيف: der Partnerin.",
      "Helfen takes dative: der Partnerin."
    ],
    [
      "Elif antwortet ___ Lehrer. (der)",
      "dem",
      "den",
      "der",
      "antworten بياخد داتيف: dem Lehrer.",
      "Antworten takes dative: dem Lehrer."
    ],
    [
      "Die Karte gehört ___ Freundin. (die)",
      "der",
      "die",
      "den",
      "gehören بياخد داتيف: der Freundin.",
      "Gehören takes dative: der Freundin."
    ],
    [
      "Nora zeigt ___ Partner das Foto. (der)",
      "dem",
      "den",
      "der",
      "المتلقي داتيف: dem Partner.",
      "The recipient takes dative: dem Partner."
    ]
  ],
  "modalverben": [
    [
      "Elif ___ allein sprechen. (möchten)",
      "möchte",
      "möchtest",
      "möchten",
      "sie مفرد: möchte.",
      "Singular sie takes möchte."
    ],
    [
      "Du ___ kurz warten. (sollen)",
      "sollst",
      "soll",
      "sollen",
      "du: sollst.",
      "Du takes sollst."
    ],
    [
      "Wir ___ die Namen nennen. (können)",
      "können",
      "könnt",
      "kann",
      "wir: können.",
      "Wir takes können."
    ],
    [
      "Tom ___ die Karte noch ansehen. (müssen)",
      "muss",
      "musst",
      "müssen",
      "er: muss.",
      "Er takes muss."
    ]
  ],
  "possessiv": [
    [
      "Dalia nimmt ___ Karte. (Dalia; die)",
      "ihre",
      "ihr",
      "ihren",
      "Dalia مع مؤنث أكوزاتيف: ihre Karte.",
      "Dalia takes ihre with feminine accusative Karte."
    ],
    [
      "Tom öffnet ___ Umschlag. (Tom; der)",
      "seinen",
      "sein",
      "seine",
      "Tom مع مذكر أكوزاتيف: seinen Umschlag.",
      "Tom takes seinen with masculine accusative Umschlag."
    ],
    [
      "Nora beschreibt ___ Foto. (Nora; das)",
      "ihr",
      "ihren",
      "ihre",
      "Nora مع محايد أكوزاتيف: ihr Foto.",
      "Nora takes ihr with neuter accusative Foto."
    ],
    [
      "Wir vergleichen ___ Sätze. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Sätze.",
      "Wir takes unsere with plural accusative Sätze."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Fotos liegen auf ___ Blatt. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع auf: داتيف dem.",
      "Fixed location with auf takes dative dem."
    ],
    [
      "Dalia legt das Foto auf ___ Blatt. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع auf: أكوزاتيف das.",
      "Destination with auf takes accusative das."
    ],
    [
      "Die Karte liegt unter ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع unter: داتيف dem.",
      "Fixed location with unter takes dative dem."
    ],
    [
      "Tom legt die Karte unter ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع unter: أكوزاتيف das.",
      "Destination with unter takes accusative das."
    ]
  ],
  "negation": [
    [
      "Im Bild sieht man ___ Maßstab. (einen)",
      "keinen",
      "kein",
      "keine",
      "Maßstab مذكر أكوزاتيف: keinen.",
      "Maßstab is masculine accusative: keinen."
    ],
    [
      "Das ist ___ Messung. (eine)",
      "keine",
      "kein",
      "keinen",
      "Messung مؤنث نوميناتيف: keine.",
      "Messung is feminine nominative: keine."
    ],
    [
      "Jonas sagt die Antwort ___ vor. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Use nicht to negate the action."
    ],
    [
      "Die Übung gibt ___ Frischegarantie. (eine)",
      "keine",
      "kein",
      "keinen",
      "Frischegarantie مؤنث أكوزاتيف: keine.",
      "Frischegarantie is feminine accusative: keine."
    ]
  ]
};
