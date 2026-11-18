import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const rotkehlchenamselGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Rotkehlchen steht auf dem Boden. (Rotkehlchen)",
      "Das",
      "Der",
      "Die",
      "Rotkehlchen محايد: das.",
      "Rotkehlchen is neuter: das."
    ],
    [
      "___ Amsel steht auf dem Pfosten. (Amsel)",
      "Die",
      "Der",
      "Das",
      "Amsel مؤنث: die.",
      "Amsel is feminine: die."
    ],
    [
      "___ Entwurfsblatt liegt daneben. (Entwurfsblatt)",
      "Das",
      "Die",
      "Der",
      "Entwurfsblatt محايد: das.",
      "Entwurfsblatt is neuter: das."
    ],
    [
      "___ Artikel ist zu klein. (Artikel)",
      "Der",
      "Die",
      "Das",
      "Artikel مذكر: der.",
      "Artikel is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "Lina zeigt ___ Rotkehlchen. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Rotkehlchen.",
      "Neuter direct object: das Rotkehlchen."
    ],
    [
      "Omar nimmt ___ Stift. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Stift.",
      "Masculine direct object: den Stift."
    ],
    [
      "Jana wiederholt ___ Nomen. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Nomen.",
      "Neuter direct object: das Nomen."
    ],
    [
      "Tom behält ___ Beobachtungen. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Beobachtungen.",
      "Plural direct object: die Beobachtungen."
    ]
  ],
  "praesens": [
    [
      "Lina ___ den Namen vor. (lesen)",
      "liest",
      "lest",
      "lesen",
      "sie: liest.",
      "Sie takes liest."
    ],
    [
      "Du ___ die Mappe geschlossen. (lassen)",
      "lässt",
      "lasst",
      "lassen",
      "du: lässt.",
      "Du takes lässt."
    ],
    [
      "Wir ___ das Nomen. (wiederholen)",
      "wiederholen",
      "wiederholt",
      "wiederhole",
      "wir: wiederholen.",
      "Wir takes wiederholen."
    ],
    [
      "Ihr ___ die Beschreibungen. (prüfen)",
      "prüft",
      "prüfen",
      "prüfst",
      "ihr: prüft.",
      "Ihr takes prüft."
    ]
  ],
  "possessiv": [
    [
      "Lina überarbeitet ___ Liste. (Lina; die)",
      "ihre",
      "ihr",
      "ihren",
      "مفعول مؤنث: ihre Liste.",
      "Feminine direct object: ihre Liste."
    ],
    [
      "Rami erklärt ___ Entwurf. (Rami; der)",
      "seinen",
      "sein",
      "seinem",
      "مفعول مذكر: seinen Entwurf.",
      "Masculine direct object: seinen Entwurf."
    ],
    [
      "Jana zeigt ___ Entwurfsblatt. (Jana; das)",
      "ihr",
      "ihre",
      "ihren",
      "مفعول محايد: ihr Entwurfsblatt.",
      "Neuter direct object: ihr Entwurfsblatt."
    ],
    [
      "Tom behält ___ Notizen. (Tom; die; Plural)",
      "seine",
      "sein",
      "seinen",
      "مفعول جمع: seine Notizen.",
      "Plural direct object: seine Notizen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Liste liegt auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت وداتيف مذكر: dem Tisch.",
      "Fixed location, masculine dative: dem Tisch."
    ],
    [
      "Lina legt die Liste auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه وأكوزاتيف مذكر: den Tisch.",
      "Direction, masculine accusative: den Tisch."
    ],
    [
      "Die Karte liegt neben ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت وداتيف مؤنث: der Mappe.",
      "Fixed location, feminine dative: der Mappe."
    ],
    [
      "Rami legt die Karte neben ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه وأكوزاتيف مؤنث: die Mappe.",
      "Direction, feminine accusative: die Mappe."
    ]
  ],
  "negation": [
    [
      "Sie brauchen ___ echten Vögel. (kein; die; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine echten Vögel.",
      "Plural direct object: keine echten Vögel."
    ],
    [
      "Die Gruppe kauft ___ Stift. (kein; der)",
      "keinen",
      "kein",
      "keinem",
      "مفعول مذكر: keinen Stift.",
      "Masculine direct object: keinen Stift."
    ],
    [
      "Das ist ___ feste Regel für jedes Foto. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "خبر مؤنث: keine feste Regel.",
      "Feminine predicate: keine feste Regel."
    ],
    [
      "Das ist ___ neues Entwurfsblatt. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "خبر محايد: kein neues Entwurfsblatt.",
      "Neuter predicate: kein neues Entwurfsblatt."
    ]
  ]
};
