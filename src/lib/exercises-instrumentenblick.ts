import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const instrumentenblickGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Kalimba hat Metallstreifen. (Kalimba)",
      "Die",
      "Der",
      "Das",
      "Kalimba مؤنث: die.",
      "Kalimba is feminine: die."
    ],
    [
      "___ Banjo hat einen runden Körper. (Banjo)",
      "Das",
      "Der",
      "Die",
      "Banjo محايد: das.",
      "Banjo is neuter: das."
    ],
    [
      "___ Endung fehlt. (Endung)",
      "Die",
      "Der",
      "Das",
      "Endung مؤنث: die.",
      "Endung is feminine: die."
    ],
    [
      "___ Höreindruck ist kein Nachweis. (Höreindruck)",
      "Der",
      "Die",
      "Das",
      "Höreindruck مذكر: der.",
      "Höreindruck is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "Huda liest ___ Namen. (der; Singular)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Namen.",
      "Masculine direct object: den Namen."
    ],
    [
      "Jan zeigt ___ Foto. (das)",
      "das",
      "dem",
      "den",
      "مفعول مباشر محايد: das Foto.",
      "Neuter direct object: das Foto."
    ],
    [
      "Fatma beendet ___ Satz. (der)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Satz.",
      "Masculine direct object: den Satz."
    ],
    [
      "Ben wiederholt ___ Stelle. (die)",
      "die",
      "der",
      "den",
      "مفعول مباشر مؤنث: die Stelle.",
      "Feminine direct object: die Stelle."
    ]
  ],
  "praesens": [
    [
      "Huda ___ sich selbst. (verbessern)",
      "verbessert",
      "verbessern",
      "verbesserst",
      "sie مفرد: verbessert.",
      "Singular sie takes verbessert."
    ],
    [
      "Du ___ bis zum Satzende. (warten)",
      "wartest",
      "wartet",
      "warten",
      "du: wartest.",
      "Du takes wartest."
    ],
    [
      "Ben ___ zu. (stimmen)",
      "stimmt",
      "stimmen",
      "stimmst",
      "er: stimmt.",
      "Er takes stimmt."
    ],
    [
      "Wir ___ den Eindruck. (beschreiben)",
      "beschreiben",
      "beschreibt",
      "beschreibe",
      "wir: beschreiben.",
      "Wir takes beschreiben."
    ]
  ],
  "possessiv": [
    [
      "Fatma beendet ___ Satz. (Fatma; der)",
      "ihren",
      "ihr",
      "ihre",
      "Fatma مع مذكر أكوزاتيف: ihren Satz.",
      "Fatma takes ihren with masculine accusative Satz."
    ],
    [
      "Ben öffnet ___ Heft. (Ben; das)",
      "sein",
      "seine",
      "seinen",
      "Ben مع محايد أكوزاتيف: sein Heft.",
      "Ben takes sein with neuter accusative Heft."
    ],
    [
      "Leila nennt ___ Eindruck. (Leila; der)",
      "ihren",
      "ihr",
      "ihre",
      "Leila مع مذكر أكوزاتيف: ihren Eindruck.",
      "Leila takes ihren with masculine accusative Eindruck."
    ],
    [
      "Wir prüfen ___ Annahmen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Annahmen.",
      "Wir takes unsere with plural accusative Annahmen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt neben ___ Blatt. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem.",
      "Fixed location with neben takes dative dem."
    ],
    [
      "Ben legt die Karte neben ___ Blatt. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das.",
      "Destination with neben takes accusative das."
    ],
    [
      "Die Fotos liegen in ___ Heft. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع in: داتيف dem.",
      "Fixed location with in takes dative dem."
    ],
    [
      "Huda legt die Fotos in ___ Heft. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع in: أكوزاتيف das.",
      "Destination with in takes accusative das."
    ]
  ],
  "konnektoren-b1": [
    [
      "Leila fragt nach, ___ die Klangquelle nicht angegeben ist. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب: weil.",
      "Reason takes weil."
    ],
    [
      "___ ein Eindruck deutlich wirkt, ist er noch kein Nachweis. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض: Obwohl.",
      "Contrast takes Obwohl."
    ],
    [
      "Ben wartet, ___ Fatma ihren Gedanken beenden kann. (Zweck)",
      "damit",
      "obwohl",
      "weil",
      "هدف: damit.",
      "Purpose takes damit."
    ],
    [
      "___ sie beginnen, vereinbaren sie die Reihenfolge. (davor)",
      "Bevor",
      "Nachdem",
      "Obwohl",
      "قبل البداية: Bevor.",
      "Before starting takes Bevor."
    ]
  ]
};
