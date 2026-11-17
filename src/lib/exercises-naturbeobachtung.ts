import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const naturbeobachtungGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Nistkasten hat ein rundes Loch. (Nistkasten)",
      "Der",
      "Die",
      "Das",
      "Nistkasten مذكر: der.",
      "Nistkasten is masculine: der."
    ],
    [
      "___ Insektenhotel hat viele Öffnungen. (Insektenhotel)",
      "Das",
      "Der",
      "Die",
      "Insektenhotel محايد: das.",
      "Insektenhotel is neuter: das."
    ],
    [
      "___ Blickpunkt ist jetzt gleich. (Blickpunkt)",
      "Der",
      "Die",
      "Das",
      "Blickpunkt مذكر: der.",
      "Blickpunkt is masculine: der."
    ],
    [
      "___ Beobachtung bleibt begrenzt. (Beobachtung)",
      "Die",
      "Der",
      "Das",
      "Beobachtung مؤنث: die.",
      "Beobachtung is feminine: die."
    ]
  ],
  "akkusativ": [
    [
      "Nora nennt ___ Unterschied. (der)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Unterschied.",
      "Masculine direct object: den Unterschied."
    ],
    [
      "Emil beschreibt ___ Dach. (das)",
      "das",
      "dem",
      "den",
      "مفعول مباشر محايد: das Dach.",
      "Neuter direct object: das Dach."
    ],
    [
      "Alina klärt ___ Ortsangabe. (die)",
      "die",
      "der",
      "den",
      "مفعول مباشر مؤنث: die Ortsangabe.",
      "Feminine direct object: die Ortsangabe."
    ],
    [
      "Leon überarbeitet ___ Satz. (der)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Satz.",
      "Masculine direct object: den Satz."
    ]
  ],
  "praesens": [
    [
      "Nora ___ die Karten um. (drehen)",
      "dreht",
      "drehen",
      "drehst",
      "sie مفرد: dreht.",
      "Singular sie takes dreht."
    ],
    [
      "Du ___ auf das richtige Bild. (zeigen)",
      "zeigst",
      "zeigt",
      "zeigen",
      "du: zeigst.",
      "Du takes zeigst."
    ],
    [
      "Sami ___ neben Alina. (sitzen)",
      "sitzt",
      "sitzen",
      "sitze",
      "er: sitzt.",
      "Singular er takes sitzt."
    ],
    [
      "Wir ___ den Satz ein. (grenzen)",
      "grenzen",
      "grenzt",
      "grenze",
      "wir: grenzen.",
      "Wir takes grenzen."
    ]
  ],
  "possessiv": [
    [
      "Nora liest ___ Karte. (Nora; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nora مع مؤنث أكوزاتيف: ihre Karte.",
      "Nora takes ihre with feminine accusative Karte."
    ],
    [
      "Sami erklärt ___ Blickpunkt. (Sami; der)",
      "seinen",
      "sein",
      "seine",
      "Sami مع مذكر أكوزاتيف: seinen Blickpunkt.",
      "Sami takes seinen with masculine accusative Blickpunkt."
    ],
    [
      "Alina ändert ___ Ortsangabe. (Alina; die)",
      "ihre",
      "ihr",
      "ihren",
      "Alina مع مؤنث أكوزاتيف: ihre Ortsangabe.",
      "Alina takes ihre with feminine accusative Ortsangabe."
    ],
    [
      "Wir prüfen ___ Aussagen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Aussagen.",
      "Wir takes unsere with plural accusative Aussagen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karten liegen unter ___ Bildern. (die; Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت مع جمع داتيف: den Bildern.",
      "Fixed location takes plural dative den Bildern."
    ],
    [
      "Nora legt die Karten unter ___ Bilder. (die; Plural; Wohin?)",
      "die",
      "den",
      "der",
      "اتجاه مع جمع أكوزاتيف: die Bilder.",
      "Destination takes plural accusative die Bilder."
    ],
    [
      "Sami sitzt neben ___ Partnerin. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع neben: داتيف der Partnerin.",
      "Fixed location with neben takes dative der Partnerin."
    ],
    [
      "Sami setzt sich neben ___ Partnerin. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع neben: أكوزاتيف die Partnerin.",
      "Destination with neben takes accusative die Partnerin."
    ]
  ],
  "konnektoren-b1": [
    [
      "Sami fragt nach, ___ die Ortsangabe unklar ist. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب: weil.",
      "Reason takes weil."
    ],
    [
      "___ sie keine Tiere erkennen, behaupten sie keine dauerhafte Nichtnutzung. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض: Obwohl.",
      "Contrast takes Obwohl."
    ],
    [
      "Sie setzen sich nebeneinander, ___ sie denselben Blickpunkt haben. (Zweck)",
      "damit",
      "obwohl",
      "weil",
      "هدف: damit.",
      "Purpose takes damit."
    ],
    [
      "___ Leon schreibt, prüft er die Reichweite seiner Aussage. (davor)",
      "Bevor",
      "Nachdem",
      "Obwohl",
      "قبل الكتابة: Bevor.",
      "Before writing takes Bevor."
    ]
  ]
};
