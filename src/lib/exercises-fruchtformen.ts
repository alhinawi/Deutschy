import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const fruchtformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Drachenfrucht steht auf der Karte. (Drachenfrucht)",
      "Die",
      "Der",
      "Das",
      "Drachenfrucht مؤنث: die.",
      "Drachenfrucht is feminine: die."
    ],
    [
      "___ Passionsfrucht ist aufgeschnitten. (Passionsfrucht)",
      "Die",
      "Der",
      "Das",
      "Passionsfrucht مؤنث: die.",
      "Passionsfrucht is feminine: die."
    ],
    [
      "___ Quelle ist jetzt klar. (Quelle)",
      "Die",
      "Der",
      "Das",
      "Quelle مؤنث: die.",
      "Quelle is feminine: die."
    ],
    [
      "___ Detail stammt aus einer anderen Geschichte. (Detail)",
      "Das",
      "Der",
      "Die",
      "Detail محايد: das.",
      "Detail is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Erik ergänzt ___ Punkt. (der)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Punkt.",
      "Masculine direct object: den Punkt."
    ],
    [
      "Lina liest ___ Zeile. (die)",
      "die",
      "der",
      "den",
      "مفعول مباشر مؤنث: die Zeile.",
      "Feminine direct object: die Zeile."
    ],
    [
      "Amira nennt ___ Quelle. (die)",
      "die",
      "der",
      "den",
      "مفعول مباشر مؤنث: die Quelle.",
      "Feminine direct object: die Quelle."
    ],
    [
      "Samir streicht ___ Satz. (der)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Satz.",
      "Masculine direct object: den Satz."
    ]
  ],
  "praesens": [
    [
      "Lina ___ das Wort. (unterstreichen)",
      "unterstreicht",
      "unterstreichen",
      "unterstreichst",
      "sie مفرد: unterstreicht.",
      "Singular sie takes unterstreicht."
    ],
    [
      "Du ___ die Herkunft. (nennen)",
      "nennst",
      "nennt",
      "nennen",
      "du: nennst.",
      "Du takes nennst."
    ],
    [
      "Paul ___ zu. (hören)",
      "hört",
      "hören",
      "hörst",
      "er: hört.",
      "Er takes hört."
    ],
    [
      "Wir ___ die Quellen. (prüfen)",
      "prüfen",
      "prüft",
      "prüfe",
      "wir: prüfen.",
      "Wir takes prüfen."
    ]
  ],
  "possessiv": [
    [
      "Samir korrigiert ___ Beschreibung. (Samir; die)",
      "seine",
      "sein",
      "seinen",
      "Samir مع مؤنث أكوزاتيف: seine Beschreibung.",
      "Samir takes seine with feminine accusative Beschreibung."
    ],
    [
      "Vera prüft ___ Satz. (Vera; der)",
      "ihren",
      "ihr",
      "ihre",
      "Vera مع مذكر أكوزاتيف: ihren Satz.",
      "Vera takes ihren with masculine accusative Satz."
    ],
    [
      "Lina öffnet ___ Heft. (Lina; das)",
      "ihr",
      "ihren",
      "ihre",
      "Lina مع محايد أكوزاتيف: ihr Heft.",
      "Lina takes ihr with neuter accusative Heft."
    ],
    [
      "Wir nennen ___ Quellen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Quellen.",
      "Wir takes unsere with plural accusative Quellen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Fotos liegen neben ___ Heft. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem.",
      "Fixed location with neben takes dative dem."
    ],
    [
      "Lina legt das Foto neben ___ Heft. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das.",
      "Destination with neben takes accusative das."
    ],
    [
      "Die Einleitung steht in ___ Heft. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع in: داتيف dem.",
      "Fixed location with in takes dative dem."
    ],
    [
      "Amira schreibt die Einleitung in ___ Heft. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع in: أكوزاتيف das.",
      "Destination with in takes accusative das."
    ]
  ],
  "konnektoren-b1": [
    [
      "Samir streicht den Satz, ___ er für diese Fotos nicht belegt ist. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب: weil.",
      "Reason takes weil."
    ],
    [
      "___ die Geschichte passend klingt, ist sie kein Bildbeleg. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Damit",
      "تعارض: Obwohl.",
      "Contrast takes Obwohl."
    ],
    [
      "Amira nennt die Quelle, ___ Paul die Erzählung richtig einordnen kann. (Zweck)",
      "damit",
      "obwohl",
      "weil",
      "هدف: damit.",
      "Purpose takes damit."
    ],
    [
      "___ sie den Text abgeben, prüfen sie die Quellen. (davor)",
      "Bevor",
      "Nachdem",
      "Obwohl",
      "قبل التسليم: Bevor.",
      "Before handing in takes Bevor."
    ]
  ]
};
