import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const vorratsrundeGrammar:Record<string,Ex[]>={
  "akkusativ": [
    [
      "Lea nimmt ___ Vorratsglas. (das)",
      "das",
      "dem",
      "der",
      "Vorratsglas محايد أكوزاتيف: das.",
      "Vorratsglas is neuter accusative: das."
    ],
    [
      "Omar sucht ___ Trichter. (der)",
      "den",
      "dem",
      "der",
      "Trichter مذكر أكوزاتيف: den.",
      "Trichter is masculine accusative: den."
    ],
    [
      "Dalia zeichnet ___ Skizze. (eine)",
      "eine",
      "einer",
      "einen",
      "Skizze مؤنث أكوزاتيف: eine.",
      "Skizze is feminine accusative: eine."
    ],
    [
      "Ben liest ___ Zettel. (der)",
      "den",
      "dem",
      "der",
      "Zettel مذكر أكوزاتيف: den.",
      "Zettel is masculine accusative: den."
    ]
  ],
  "possessiv": [
    [
      "Dalia holt ___ Dose. (sie, مفرد / singular)",
      "ihre",
      "ihren",
      "ihr",
      "Dose مؤنث أكوزاتيف؛ sie: ihre.",
      "Dose is feminine accusative; singular sie takes ihre."
    ],
    [
      "Jonas sucht ___ Zettel. (er)",
      "seinen",
      "sein",
      "seinem",
      "Zettel مذكر أكوزاتيف؛ er: seinen.",
      "Zettel is masculine accusative; er takes seinen."
    ],
    [
      "Wir zeichnen ___ Regal. (wir)",
      "unser",
      "unseren",
      "unsere",
      "Regal محايد أكوزاتيف: unser.",
      "Regal is neuter accusative: unser."
    ],
    [
      "Nina liest ___ Liste. (du)",
      "deine",
      "deinen",
      "dein",
      "Liste مؤنث أكوزاتيف: deine.",
      "Liste is feminine accusative: deine."
    ]
  ],
  "modalverben": [
    [
      "Lea ___ zuerst die Zutatenliste lesen. (wollen)",
      "will",
      "wollen",
      "wollt",
      "sie مفرد مع wollen: will.",
      "Singular sie takes will."
    ],
    [
      "Du ___ die anderen fragen. (können)",
      "kannst",
      "kann",
      "könnt",
      "du مع können: kannst.",
      "Du takes kannst."
    ],
    [
      "Wir ___ die Dose hier lassen. (möchten)",
      "möchten",
      "möchtet",
      "möchte",
      "wir مع möchten: möchten.",
      "Wir takes möchten."
    ],
    [
      "Omar ___ den Trichter nicht holen. (müssen)",
      "muss",
      "müsst",
      "müssen",
      "er مع müssen: muss.",
      "Er takes muss."
    ]
  ],
  "imperativ": [
    [
      "___ bitte die Zutatenliste! (lesen; du)",
      "Lies",
      "Lese",
      "Liest",
      "أمر du من lesen: Lies.",
      "Du imperative of lesen: Lies."
    ],
    [
      "___ den Zettel daneben! (legen; du)",
      "Leg",
      "Legt",
      "Legst",
      "أمر du من legen: Leg.",
      "Du imperative of legen: Leg."
    ],
    [
      "___ zuerst die anderen! (fragen; ihr)",
      "Fragt",
      "Frage",
      "Fragst",
      "أمر ihr من fragen: Fragt.",
      "Ihr imperative of fragen: Fragt."
    ],
    [
      "___ Sie bitte kurz! (warten; Sie)",
      "Warten",
      "Wartet",
      "Warte",
      "أمر Sie: المصدر + Sie.",
      "Formal imperative: infinitive + Sie."
    ]
  ],
  "komparativ": [
    [
      "Dieses Glas ist ___ als das andere. (groß)",
      "größer",
      "großer",
      "am größten",
      "مقارنة groß: größer.",
      "Comparative of groß: größer."
    ],
    [
      "Die Dose ist ___ als das Glas. (klein)",
      "kleiner",
      "klein",
      "am kleinsten",
      "مقارنة klein: kleiner.",
      "Comparative of klein: kleiner."
    ],
    [
      "Die neue Liste ist ___ als die alte. (kurz)",
      "kürzer",
      "kurzer",
      "am kürzesten",
      "مقارنة kurz: kürzer.",
      "Comparative of kurz: kürzer."
    ],
    [
      "Das obere Brett ist ___ als das untere. (hoch)",
      "höher",
      "hocher",
      "am höchsten",
      "مقارنة hoch: höher.",
      "Comparative of hoch: höher."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Glas steht auf ___ Brett. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد auf: داتيف، dem Brett.",
      "Fixed location after auf takes dative: dem Brett."
    ],
    [
      "Lea stellt das Glas auf ___ Brett. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه لمكان جديد: أكوزاتيف، das Brett.",
      "Destination takes accusative: das Brett."
    ],
    [
      "Der Zettel liegt neben ___ Dose. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت بعد neben: داتيف، der Dose.",
      "Fixed location after neben takes dative: der Dose."
    ],
    [
      "Jonas spricht mit ___ Besucher. (der)",
      "dem",
      "den",
      "des",
      "mit داتيف؛ مذكر: dem.",
      "Mit takes dative; masculine: dem."
    ]
  ]
};
