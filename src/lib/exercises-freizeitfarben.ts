import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const freizeitfarbenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Yogamatte ist hier blau. (Yogamatte)",
      "Die",
      "Der",
      "Das",
      "Yogamatte مؤنث: die.",
      "Yogamatte is feminine: die."
    ],
    [
      "___ Billardkugel ist hier rot. (Billardkugel)",
      "Die",
      "Der",
      "Das",
      "Billardkugel مؤنث: die.",
      "Billardkugel is feminine: die."
    ],
    [
      "___ Maßstab fehlt. (Maßstab)",
      "Der",
      "Die",
      "Das",
      "Maßstab مذكر: der.",
      "Maßstab is masculine: der."
    ],
    [
      "___ Gewicht ist nicht angegeben. (Gewicht)",
      "Das",
      "Der",
      "Die",
      "Gewicht محايد: das.",
      "Gewicht is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Amina deckt ___ Namen ab. (der; Singular)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Namen.",
      "Masculine direct object: den Namen."
    ],
    [
      "Leo liest ___ Form vor. (die)",
      "die",
      "der",
      "den",
      "مفعول مباشر مؤنث: die Form.",
      "Feminine direct object: die Form."
    ],
    [
      "Nora nennt ___ Beispiel. (das)",
      "das",
      "dem",
      "den",
      "مفعول مباشر محايد: das Beispiel.",
      "Neuter direct object: das Beispiel."
    ],
    [
      "Dana prüft ___ Vergleich. (der)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Vergleich.",
      "Masculine direct object: den Vergleich."
    ]
  ],
  "praesens": [
    [
      "Amina ___ im Heft nach. (lesen)",
      "liest",
      "lesen",
      "lese",
      "sie مفرد مع lesen: liest.",
      "Singular sie takes liest."
    ],
    [
      "Du ___ ein Beispiel. (nennen)",
      "nennst",
      "nennt",
      "nennen",
      "du: nennst.",
      "Du takes nennst."
    ],
    [
      "Elias ___ den Satz. (teilen)",
      "teilt",
      "teilen",
      "teilst",
      "er: teilt.",
      "Er takes teilt."
    ],
    [
      "Wir ___ die Maße. (prüfen)",
      "prüfen",
      "prüft",
      "prüfe",
      "wir: prüfen.",
      "Wir takes prüfen."
    ]
  ],
  "possessiv": [
    [
      "Elias ändert ___ Satz. (Elias; der)",
      "seinen",
      "sein",
      "seine",
      "Elias مع مذكر أكوزاتيف: seinen Satz.",
      "Elias takes seinen with masculine accusative Satz."
    ],
    [
      "Nora begründet ___ Rückmeldung. (Nora; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nora مع مؤنث أكوزاتيف: ihre Rückmeldung.",
      "Nora takes ihre with feminine accusative Rückmeldung."
    ],
    [
      "Dana prüft ___ Vermutung. (Dana; die)",
      "ihre",
      "ihr",
      "ihren",
      "Dana مع مؤنث أكوزاتيف: ihre Vermutung.",
      "Dana takes ihre with feminine accusative Vermutung."
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
      "Die Karte liegt unter ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع unter: داتيف dem.",
      "Fixed location with unter takes dative dem."
    ],
    [
      "Amina legt die Karte unter ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع unter: أكوزاتيف das.",
      "Destination with unter takes accusative das."
    ],
    [
      "Die Notiz steht in ___ Heft. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع in: داتيف dem.",
      "Fixed location with in takes dative dem."
    ],
    [
      "Elias schreibt die Notiz in ___ Heft. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع in: أكوزاتيف das.",
      "Destination with in takes accusative das."
    ]
  ],
  "konnektoren-b1": [
    [
      "Elias fragt nach, ___ ihm ein konkretes Beispiel fehlt. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب: weil.",
      "Reason takes weil."
    ],
    [
      "___ die Kugel groß wirkt, fehlen die tatsächlichen Maße. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض: Obwohl.",
      "Contrast takes Obwohl."
    ],
    [
      "Nora zeigt die Stelle, ___ Elias sie überarbeiten kann. (Zweck)",
      "damit",
      "obwohl",
      "weil",
      "هدف: damit.",
      "Purpose takes damit."
    ],
    [
      "___ sie Gewichte vergleichen, brauchen sie verlässliche Angaben. (davor)",
      "Bevor",
      "Nachdem",
      "Obwohl",
      "قبل المقارنة: Bevor.",
      "Before comparing takes Bevor."
    ]
  ]
};
