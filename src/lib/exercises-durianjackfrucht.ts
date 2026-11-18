import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const durianjackfruchtGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Durian hängt am Zweig. (Durian)",
      "Die",
      "Der",
      "Das",
      "Durian مؤنث: die.",
      "Durian is feminine: die."
    ],
    [
      "___ Jackfrucht liegt auf dem Foto. (Jackfrucht)",
      "Die",
      "Der",
      "Das",
      "Jackfrucht مؤنث: die.",
      "Jackfrucht is feminine: die."
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
      "___ Plakat bekommt eine Notiz. (Plakat)",
      "Das",
      "Der",
      "Die",
      "Plakat محايد: das.",
      "Plakat is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Milan wiederholt ___ Namen. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Namen.",
      "Masculine direct object: den Namen."
    ],
    [
      "Nora ergänzt ___ Artikel. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Artikel.",
      "Masculine direct object: den Artikel."
    ],
    [
      "Salma beschreibt ___ Foto. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Foto.",
      "Neuter direct object: das Foto."
    ],
    [
      "Amira ordnet ___ Namen zu. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Namen.",
      "Plural direct object: die Namen."
    ]
  ],
  "praesens": [
    [
      "Du ___ um eine Wiederholung. (bitten)",
      "bittest",
      "bittet",
      "bitten",
      "du: bittest.",
      "Du takes bittest."
    ],
    [
      "Milan ___ den ersten Buchstaben. (bestätigen)",
      "bestätigt",
      "bestätigen",
      "bestätige",
      "er: bestätigt.",
      "Er takes bestätigt."
    ],
    [
      "Wir ___ die Überschriften. (vergleichen)",
      "vergleichen",
      "vergleicht",
      "vergleiche",
      "wir: vergleichen.",
      "Wir takes vergleichen."
    ],
    [
      "Ihr ___ den Pfeil. (entfernen)",
      "entfernt",
      "entfernen",
      "entferne",
      "ihr: entfernt.",
      "Ihr takes entfernt."
    ]
  ],
  "possessiv": [
    [
      "Nora schließt ___ Heft. (Nora; das)",
      "ihr",
      "ihre",
      "ihren",
      "مفعول محايد: ihr Heft.",
      "Neuter direct object: ihr Heft."
    ],
    [
      "Felix liest ___ Wortliste vor. (Felix; die)",
      "seine",
      "sein",
      "seinen",
      "مفعول مؤنث: seine Wortliste.",
      "Feminine accusative: seine Wortliste."
    ],
    [
      "Wir ändern ___ Bildfelder. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "مفعول جمع: unsere Bildfelder.",
      "Plural direct object: unsere Bildfelder."
    ],
    [
      "Tom ergänzt ___ Entwurf. (Tom; der)",
      "seinen",
      "sein",
      "seine",
      "مفعول مذكر: seinen Entwurf.",
      "Masculine direct object: seinen Entwurf."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Fotos liegen auf ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت وداتيف مذكر: dem Tisch.",
      "Fixed location, masculine dative: dem Tisch."
    ],
    [
      "Milan legt die Fotos auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه وأكوزاتيف مذكر: den Tisch.",
      "Destination, masculine accusative: den Tisch."
    ],
    [
      "Die Wortliste hängt neben ___ Plakat. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت وداتيف محايد: dem Plakat.",
      "Fixed location, neuter dative: dem Plakat."
    ],
    [
      "Amira hängt die Wortliste neben ___ Plakat. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه وأكوزاتيف محايد: das Plakat.",
      "Destination, neuter accusative: das Plakat."
    ]
  ],
  "negation": [
    [
      "Das ist ___ echte Bestellung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "خبر مؤنث: keine echte Bestellung.",
      "Feminine predicate: keine echte Bestellung."
    ],
    [
      "Nora kennt ___ sicheren Namen. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen sicheren Namen.",
      "Masculine direct object: keinen sicheren Namen."
    ],
    [
      "Tom braucht ___ weiteres Bildfeld. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "مفعول محايد: kein weiteres Bildfeld.",
      "Neuter direct object: kein weiteres Bildfeld."
    ],
    [
      "Sie verwenden ___ erfundenen Messwerte. (kein; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine erfundenen Messwerte.",
      "Plural direct object: keine erfundenen Messwerte."
    ]
  ]
};
