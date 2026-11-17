import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const bildanordnungGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Sparschwein ist hier rosa. (Sparschwein)",
      "Das",
      "Der",
      "Die",
      "Sparschwein محايد: das.",
      "Sparschwein is neuter: das."
    ],
    [
      "___ Federball steht auf dem Kopf. (Federball)",
      "Der",
      "Die",
      "Das",
      "Federball مذكر: der.",
      "Federball is masculine: der."
    ],
    [
      "___ Schlitz ist schmal. (Schlitz)",
      "Der",
      "Die",
      "Das",
      "Schlitz مذكر: der.",
      "Schlitz is masculine: der."
    ],
    [
      "___ Anordnung ist sichtbar. (Anordnung)",
      "Die",
      "Der",
      "Das",
      "Anordnung مؤنث: die.",
      "Anordnung is feminine: die."
    ]
  ],
  "akkusativ": [
    [
      "Yara verdeckt ___ Namen. (der; Singular)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Namen.",
      "Masculine direct object: den Namen."
    ],
    [
      "Tim beschreibt ___ Ball. (der)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Ball.",
      "Masculine direct object: den Ball."
    ],
    [
      "Mara wiederholt ___ Wort. (das)",
      "das",
      "dem",
      "den",
      "مفعول مباشر محايد: das Wort.",
      "Neuter direct object: das Wort."
    ],
    [
      "Karim prüft ___ Aussage. (die)",
      "die",
      "der",
      "den",
      "مفعول مباشر مؤنث: die Aussage.",
      "Feminine direct object: die Aussage."
    ]
  ],
  "praesens": [
    [
      "Tim ___ auf die Karte. (sehen)",
      "sieht",
      "sehe",
      "sehen",
      "er مع sehen: sieht.",
      "Singular er takes sieht."
    ],
    [
      "Du ___ das Wort vor. (lesen)",
      "liest",
      "lest",
      "lesen",
      "du مع lesen: liest.",
      "Du takes liest."
    ],
    [
      "Mara ___ langsamer. (sprechen)",
      "spricht",
      "sprechen",
      "sprecht",
      "sie مفرد مع sprechen: spricht.",
      "Singular sie takes spricht."
    ],
    [
      "Wir ___ die Silben. (trennen)",
      "trennen",
      "trennt",
      "trenne",
      "wir: trennen.",
      "Wir takes trennen."
    ]
  ],
  "possessiv": [
    [
      "Tim ergänzt ___ Notiz. (Tim; die)",
      "seine",
      "sein",
      "seinen",
      "Tim مع مؤنث أكوزاتيف: seine Notiz.",
      "Tim takes seine with feminine accusative Notiz."
    ],
    [
      "Mara liest ___ Satz. (Mara; der)",
      "ihren",
      "ihr",
      "ihre",
      "Mara مع مذكر أكوزاتيف: ihren Satz.",
      "Mara takes ihren with masculine accusative Satz."
    ],
    [
      "Karim ändert ___ Text. (Karim; der)",
      "seinen",
      "sein",
      "seine",
      "Karim مع مذكر أكوزاتيف: seinen Text.",
      "Karim takes seinen with masculine accusative Text."
    ],
    [
      "Wir zeigen ___ Karten. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Karten.",
      "Wir takes unsere with plural accusative Karten."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt neben ___ Bild. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem.",
      "Fixed location with neben takes dative dem."
    ],
    [
      "Yara legt die Karte neben ___ Bild. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das.",
      "Destination with neben takes accusative das."
    ],
    [
      "Die Namen stehen auf ___ Karten. (die; Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت مع auf وجمع داتيف: den Karten.",
      "Fixed location with auf takes plural dative den Karten."
    ],
    [
      "Tim schreibt die Namen auf ___ Karten. (die; Plural; Wohin?)",
      "die",
      "den",
      "der",
      "اتجاه مع auf وجمع أكوزاتيف: die Karten.",
      "Destination with auf takes plural accusative die Karten."
    ]
  ],
  "konnektoren-b1": [
    [
      "Jonas fragt nach, ___ ein Wort unklar ist. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب: weil.",
      "Reason takes weil."
    ],
    [
      "___ Jonas fast alles versteht, braucht er ein Wort noch einmal. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض: Obwohl.",
      "Contrast takes Obwohl."
    ],
    [
      "Mara spricht langsamer, ___ Jonas den Vokal hören kann. (Zweck)",
      "damit",
      "obwohl",
      "weil",
      "هدف: damit.",
      "Purpose takes damit."
    ],
    [
      "___ sie den Inhalt nennen, brauchen sie einen Beleg. (davor)",
      "Bevor",
      "Nachdem",
      "Obwohl",
      "قبل تسمية المحتوى: Bevor.",
      "Before naming the contents takes Bevor."
    ]
  ]
};
