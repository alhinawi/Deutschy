import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const picknickrundeGrammar:Record<string,Ex[]>={
  "akkusativ": [
    [
      "Lina trägt ___ Picknickkorb. (der)",
      "den",
      "dem",
      "der",
      "Picknickkorb مذكر مفعول مباشر: den.",
      "Picknickkorb is masculine accusative: den."
    ],
    [
      "Adam holt ___ Thermosflasche. (die)",
      "die",
      "der",
      "den",
      "Thermosflasche مؤنث أكوزاتيف: die.",
      "Thermosflasche is feminine accusative: die."
    ],
    [
      "Nora braucht ___ Becher. (ein)",
      "einen",
      "einem",
      "einer",
      "Becher مذكر أكوزاتيف: einen.",
      "Becher is masculine accusative: einen."
    ],
    [
      "Sami prüft ___ Liste. (die)",
      "die",
      "der",
      "den",
      "Liste مؤنث أكوزاتيف: die.",
      "Liste is feminine accusative: die."
    ]
  ],
  "possessiv": [
    [
      "Ich bringe ___ Decke mit. (ich)",
      "meine",
      "mein",
      "meinen",
      "Decke مؤنث أكوزاتيف: meine.",
      "Decke is feminine accusative: meine."
    ],
    [
      "Du trägst ___ Korb. (du)",
      "deinen",
      "deinem",
      "dein",
      "Korb مذكر أكوزاتيف مع du: deinen.",
      "Korb is masculine accusative; du takes deinen."
    ],
    [
      "Mina sucht ___ Flasche. (Mina)",
      "ihre",
      "ihr",
      "ihren",
      "Flasche مؤنث أكوزاتيف مع sie: ihre.",
      "Flasche is feminine accusative; sie takes ihre."
    ],
    [
      "Wir prüfen ___ Liste. (wir)",
      "unsere",
      "unser",
      "unseren",
      "Liste مؤنث أكوزاتيف مع wir: unsere.",
      "Liste is feminine accusative; wir takes unsere."
    ]
  ],
  "modalverben": [
    [
      "Lina ___ den Korb tragen. (können)",
      "kann",
      "kannst",
      "können",
      "sie مفرد مع können: kann.",
      "Singular sie takes kann."
    ],
    [
      "Du ___ die Decke mitbringen. (wollen)",
      "willst",
      "will",
      "wollen",
      "du مع wollen: willst.",
      "Du takes willst."
    ],
    [
      "Wir ___ zuerst die Liste prüfen. (müssen)",
      "müssen",
      "müsst",
      "muss",
      "wir مع müssen: müssen.",
      "Wir takes müssen."
    ],
    [
      "Ihr ___ hier warten. (können)",
      "könnt",
      "können",
      "kannst",
      "ihr مع können: könnt.",
      "Ihr takes könnt."
    ]
  ],
  "imperativ": [
    [
      "___ bitte die Decke! (holen; du)",
      "Hol",
      "Holt",
      "Holen",
      "أمر du من holen: Hol.",
      "Du imperative of holen: Hol."
    ],
    [
      "___ bitte die Liste! (prüfen; ihr)",
      "Prüft",
      "Prüfe",
      "Prüfen",
      "أمر ihr من prüfen: Prüft.",
      "Ihr imperative of prüfen: Prüft."
    ],
    [
      "___ bitte auf die Antwort! (warten; du)",
      "Warte",
      "Wartet",
      "Warten",
      "أمر du من warten: Warte.",
      "Du imperative of warten: Warte."
    ],
    [
      "___ Sie bitte den Korb! (nehmen; Sie)",
      "Nehmen",
      "Nimm",
      "Nehmt",
      "أمر الاحترام: Nehmen Sie.",
      "Formal imperative: Nehmen Sie."
    ]
  ],
  "komparativ": [
    [
      "Dieser Korb ist ___ als der andere. (leicht)",
      "leichter",
      "leichteste",
      "leichten",
      "مقارنة leicht: leichter؛ بعدها als.",
      "Comparative of leicht: leichter, followed by als."
    ],
    [
      "Die neue Liste ist ___ als die alte. (kurz)",
      "kürzer",
      "kurz",
      "kürzeste",
      "مقارنة kurz: kürzer.",
      "Comparative of kurz: kürzer."
    ],
    [
      "Heute gehen wir ___ los als gestern. (früh)",
      "früher",
      "früheste",
      "frühen",
      "مقارنة früh: früher.",
      "Comparative of früh: früher."
    ],
    [
      "Der große Korb ist ___ als der kleine. (schwer)",
      "schwerer",
      "schwerste",
      "schweren",
      "مقارنة schwer: schwerer.",
      "Comparative of schwer: schwerer."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Decke liegt neben ___ Korb. (der; Wo?)",
      "dem",
      "den",
      "des",
      "مكان ثابت بعد neben: داتيف، dem Korb.",
      "Fixed location after neben takes dative: dem Korb."
    ],
    [
      "Lina legt die Servietten in ___ Korb. (der; Wohin?)",
      "den",
      "dem",
      "des",
      "اتجاه لمكان جديد: أكوزاتيف، den Korb.",
      "Destination takes accusative: den Korb."
    ],
    [
      "Die Flasche steht neben ___ Fenster. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد neben: داتيف، dem Fenster.",
      "Fixed location after neben takes dative: dem Fenster."
    ],
    [
      "Die Freunde treffen sich an ___ Tor. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان المقابلة بعد an: داتيف، dem Tor.",
      "Meeting location after an takes dative: dem Tor."
    ]
  ]
};
