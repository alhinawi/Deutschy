import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const beerennamenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Himbeere ist rot. (Himbeere)",
      "Die",
      "Der",
      "Das",
      "Himbeere مؤنث: die.",
      "Himbeere is feminine: die."
    ],
    [
      "___ Heidelbeere steht auf der Karte. (Heidelbeere)",
      "Die",
      "Der",
      "Das",
      "Heidelbeere مؤنث: die.",
      "Heidelbeere is feminine: die."
    ],
    [
      "___ Fragezeichen bleibt stehen. (Fragezeichen)",
      "Das",
      "Der",
      "Die",
      "Fragezeichen محايد: das.",
      "Fragezeichen is neuter: das."
    ],
    [
      "___ Eintrag hat zwei Namen. (Eintrag)",
      "Der",
      "Die",
      "Das",
      "Eintrag مذكر: der.",
      "Eintrag is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "Finn ergänzt ___ Buchstaben. (der)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Buchstaben.",
      "Masculine direct object: den Buchstaben."
    ],
    [
      "Salma liest ___ Wort. (das)",
      "das",
      "dem",
      "der",
      "مفعول مباشر محايد: das Wort.",
      "Neuter direct object: das Wort."
    ],
    [
      "Jana liest ___ Nachricht vor. (die)",
      "die",
      "der",
      "den",
      "مفعول مباشر مؤنث: die Nachricht.",
      "Feminine direct object: die Nachricht."
    ],
    [
      "Rima prüft ___ Eintrag. (der)",
      "den",
      "der",
      "dem",
      "مفعول مباشر مذكر: den Eintrag.",
      "Masculine direct object: den Eintrag."
    ]
  ],
  "praesens": [
    [
      "Finn ___ einen Buchstaben. (ergänzen)",
      "ergänzt",
      "ergänzen",
      "ergänzst",
      "er: ergänzt.",
      "Er takes ergänzt."
    ],
    [
      "Du ___ die Namen. (lesen)",
      "liest",
      "lest",
      "lese",
      "du: liest.",
      "Du takes liest."
    ],
    [
      "Rima ___ nach Bedeutung. (zählen)",
      "zählt",
      "zählen",
      "zählst",
      "sie مفرد: zählt.",
      "Singular sie takes zählt."
    ],
    [
      "Wir ___ die Rollen. (tauschen)",
      "tauschen",
      "tauscht",
      "tausche",
      "wir: tauschen.",
      "Wir takes tauschen."
    ]
  ],
  "possessiv": [
    [
      "Rima öffnet ___ Liste. (Rima; die)",
      "ihre",
      "ihr",
      "ihren",
      "Rima مع مؤنث أكوزاتيف: ihre Liste.",
      "Rima takes ihre with feminine accusative Liste."
    ],
    [
      "Nils erklärt ___ Vorschlag. (Nils; der)",
      "seinen",
      "sein",
      "seine",
      "Nils مع مذكر أكوزاتيف: seinen Vorschlag.",
      "Nils takes seinen with masculine accusative Vorschlag."
    ],
    [
      "Finn korrigiert ___ Wort. (Finn; das)",
      "sein",
      "seinen",
      "seine",
      "Finn مع محايد أكوزاتيف: sein Wort.",
      "Finn takes sein with neuter accusative Wort."
    ],
    [
      "Wir zeigen ___ Fotos. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Fotos.",
      "Wir takes unsere with plural accusative Fotos."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Regel steht über ___ Tabelle. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع über: داتيف der.",
      "Fixed location with über takes dative der."
    ],
    [
      "Rima schreibt die Regel über ___ Tabelle. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع über: أكوزاتيف die.",
      "Destination with über takes accusative die."
    ],
    [
      "Die Karten liegen neben ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem.",
      "Fixed location with neben takes dative dem."
    ],
    [
      "Finn legt die Karte neben ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das.",
      "Destination with neben takes accusative das."
    ]
  ],
  "konnektoren-b1": [
    [
      "Rima verbindet die Namen, ___ sie hier dieselbe Bedeutung haben. (Grund)",
      "weil",
      "obwohl",
      "damit",
      "سبب وفعل في الآخر: weil.",
      "Reason with verb at the end: weil."
    ],
    [
      "Die Namen sehen verschieden aus, ___ sie hier Synonyme sind. (Gegensatz)",
      "obwohl",
      "weil",
      "damit",
      "تعارض: obwohl.",
      "Contrast takes obwohl."
    ],
    [
      "Jana liest die Nachricht vor, ___ Nils sie prüfen kann. (Zweck)",
      "damit",
      "obwohl",
      "weil",
      "هدف: damit.",
      "Purpose takes damit."
    ],
    [
      "___ sie den Text ändern, wollen sie die anderen fragen. (davor)",
      "Bevor",
      "Nachdem",
      "Obwohl",
      "قبل التغيير: Bevor.",
      "Before the change takes Bevor."
    ]
  ]
};
