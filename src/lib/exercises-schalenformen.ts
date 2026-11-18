import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const schalenformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Muschelschale liegt auf Sand. (Muschelschale)",
      "Die",
      "Der",
      "Das",
      "Muschelschale مؤنث: die.",
      "Muschelschale is feminine: die."
    ],
    [
      "___ Schneckenhaus liegt zwischen Blättern. (Schneckenhaus)",
      "Das",
      "Der",
      "Die",
      "Schneckenhaus محايد: das.",
      "Schneckenhaus is neuter: das."
    ],
    [
      "___ Umriss bleibt sichtbar. (Umriss)",
      "Der",
      "Die",
      "Das",
      "Umriss مذكر: der.",
      "Umriss is masculine: der."
    ],
    [
      "___ Oberfläche hat Linien. (Oberfläche)",
      "Die",
      "Der",
      "Das",
      "Oberfläche مؤنث: die.",
      "Oberfläche is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Das Wort steht unter ___ Bild. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت ومحايد داتيف: dem Bild.",
      "Fixed location, neuter dative: dem Bild."
    ],
    [
      "Der Satz fehlt auf ___ Karte. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت ومؤنث داتيف: der Karte.",
      "Fixed location, feminine dative: der Karte."
    ],
    [
      "Sie arbeitet mit ___ Entwurf. (der)",
      "dem",
      "den",
      "der",
      "mit مع داتيف مذكر: dem Entwurf.",
      "Mit takes masculine dative: dem Entwurf."
    ],
    [
      "Er sucht in ___ Notizen. (die; Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت وداتيف جمع: den Notizen.",
      "Fixed location, plural dative: den Notizen."
    ]
  ],
  "praesens": [
    [
      "Du ___ die Rückseite ab. (decken)",
      "deckst",
      "deckt",
      "decke",
      "du: deckst.",
      "Du takes deckst."
    ],
    [
      "Sofia ___ zwei Karten. (vergleichen)",
      "vergleicht",
      "vergleichst",
      "vergleichen",
      "sie مفرد: vergleicht.",
      "Singular sie takes vergleicht."
    ],
    [
      "Wir ___ bei den sichtbaren Formen. (bleiben)",
      "bleiben",
      "bleibt",
      "bleibe",
      "wir: bleiben.",
      "Wir takes bleiben."
    ],
    [
      "Ihr ___ die Überschrift aus. (blenden)",
      "blendet",
      "blenden",
      "blendest",
      "ihr: blendet.",
      "Ihr takes blendet."
    ]
  ],
  "possessiv": [
    [
      "Lara verbessert ___ Einleitung. (Lara; die)",
      "ihre",
      "ihr",
      "ihren",
      "مفعول مؤنث: ihre Einleitung.",
      "Feminine accusative: ihre Einleitung."
    ],
    [
      "Youssef öffnet ___ Entwurf. (Youssef; der)",
      "seinen",
      "sein",
      "seine",
      "مفعول مذكر: seinen Entwurf.",
      "Masculine accusative: seinen Entwurf."
    ],
    [
      "Wir speichern ___ Bild. (wir; das)",
      "unser",
      "unsere",
      "unseren",
      "مفعول محايد: unser Bild.",
      "Neuter accusative: unser Bild."
    ],
    [
      "Die beiden prüfen ___ Quellen. (die beiden; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "مفعول جمع: ihre Quellen.",
      "Plural accusative: ihre Quellen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Karte liegt vor ___ Bildschirm. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت وداتيف مذكر: dem Bildschirm.",
      "Fixed location, masculine dative: dem Bildschirm."
    ],
    [
      "Rana legt die Karte vor ___ Bildschirm. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه وأكوزاتيف مذكر: den Bildschirm.",
      "Destination, masculine accusative: den Bildschirm."
    ],
    [
      "Die Notiz liegt neben ___ Liste. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت وداتيف مؤنث: der Liste.",
      "Fixed location, feminine dative: der Liste."
    ],
    [
      "Paul legt die Notiz neben ___ Liste. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه وأكوزاتيف مؤنث: die Liste.",
      "Destination, feminine accusative: die Liste."
    ]
  ],
  "negation": [
    [
      "Das ist ___ eigenes Foto. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "خبر محايد: kein eigenes Foto.",
      "Neuter predicate: kein eigenes Foto."
    ],
    [
      "Lara nennt ___ Funddatum. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "مفعول محايد: kein Funddatum.",
      "Neuter direct object: kein Funddatum."
    ],
    [
      "Youssef behauptet ___ gemeinsamen Fundort. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen gemeinsamen Fundort.",
      "Masculine direct object: keinen gemeinsamen Fundort."
    ],
    [
      "Sie schreiben ___ Reiseerinnerung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Reiseerinnerung.",
      "Feminine direct object: keine Reiseerinnerung."
    ]
  ]
};
