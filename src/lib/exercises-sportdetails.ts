import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const sportdetailsGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Rollschuh ist hier weiß. (Rollschuh)",
      "Der",
      "Die",
      "Das",
      "Rollschuh مذكر: der.",
      "Rollschuh is masculine: der."
    ],
    [
      "___ Schwimmflosse ist hier grün und schwarz. (Schwimmflosse)",
      "Die",
      "Der",
      "Das",
      "Schwimmflosse مؤنث: die.",
      "Schwimmflosse is feminine: die."
    ],
    [
      "___ Oberfläche ist sichtbar. (Oberfläche)",
      "Die",
      "Der",
      "Das",
      "Oberfläche مؤنث: die.",
      "Oberfläche is feminine: die."
    ],
    [
      "___ Zustand bleibt ungeprüft. (Zustand)",
      "Der",
      "Die",
      "Das",
      "Zustand مذكر: der.",
      "Zustand is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "Bela nennt ___ Gegenstand. (der)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Gegenstand.",
      "Masculine direct object: den Gegenstand."
    ],
    [
      "Laila beschreibt ___ Flosse. (die)",
      "die",
      "der",
      "den",
      "مفعول مباشر مؤنث: die Flosse.",
      "Feminine direct object: die Flosse."
    ],
    [
      "David ergänzt ___ Wort. (das)",
      "das",
      "dem",
      "den",
      "مفعول مباشر محايد: das Wort.",
      "Neuter direct object: das Wort."
    ],
    [
      "Luis ändert ___ Text. (der)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Text.",
      "Masculine direct object: den Text."
    ]
  ],
  "praesens": [
    [
      "Bela ___ nach den Farben. (fragen)",
      "fragt",
      "fragen",
      "fragst",
      "er: fragt.",
      "Singular er takes fragt."
    ],
    [
      "Du ___ ein Wort. (ergänzen)",
      "ergänzt",
      "ergänzen",
      "ergänze",
      "du: ergänzt.",
      "Du takes ergänzt."
    ],
    [
      "Sina ___ einen Satz vor. (lesen)",
      "liest",
      "lesen",
      "lest",
      "sie مفرد: liest.",
      "Singular sie takes liest."
    ],
    [
      "Wir ___ nur die Oberfläche. (sehen)",
      "sehen",
      "sieht",
      "sehe",
      "wir: sehen.",
      "Wir takes sehen."
    ]
  ],
  "possessiv": [
    [
      "Bela zeigt ___ Karte. (Bela; der Mann; die)",
      "seine",
      "sein",
      "seinen",
      "Bela راجل هنا مع مؤنث أكوزاتيف: seine Karte.",
      "Bela is a man here: feminine accusative seine Karte."
    ],
    [
      "Sina erklärt ___ Grenze. (Sina; die)",
      "ihre",
      "ihr",
      "ihren",
      "Sina مع مؤنث أكوزاتيف: ihre Grenze.",
      "Sina takes ihre with feminine accusative Grenze."
    ],
    [
      "Luis überarbeitet ___ Text. (Luis; der)",
      "seinen",
      "sein",
      "seine",
      "Luis مع مذكر أكوزاتيف: seinen Text.",
      "Luis takes seinen with masculine accusative Text."
    ],
    [
      "Wir vergleichen ___ Notizen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Notizen.",
      "Wir takes unsere with plural accusative Notizen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt neben ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem.",
      "Fixed location with neben takes dative dem."
    ],
    [
      "Bela legt die Karte neben ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das.",
      "Destination with neben takes accusative das."
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
      "David schreibt die Notiz in ___ Heft. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع in: أكوزاتيف das.",
      "Destination with in takes accusative das."
    ]
  ],
  "konnektoren-b1": [
    [
      "David fragt nach, ___ er den Satz notieren möchte. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب: weil.",
      "Reason takes weil."
    ],
    [
      "___ die Oberfläche sichtbar ist, bleibt die Funktion ungeprüft. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض: Obwohl.",
      "Contrast takes Obwohl."
    ],
    [
      "David liest die Notiz vor, ___ Sina sie prüfen kann. (Zweck)",
      "damit",
      "obwohl",
      "weil",
      "هدف: damit.",
      "Purpose takes damit."
    ],
    [
      "___ David die Notiz weitergibt, muss er erneut fragen. (davor)",
      "Bevor",
      "Nachdem",
      "Obwohl",
      "قبل المشاركة: Bevor.",
      "Before sharing takes Bevor."
    ]
  ]
};
