import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const stiftundklammerGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Wachsmalstift liegt unten. (Wachsmalstift)",
      "Der",
      "Die",
      "Das",
      "Wachsmalstift مذكر: der.",
      "Wachsmalstift is masculine: der."
    ],
    [
      "___ Heftklammer gehört zum Streifen. (Heftklammer)",
      "Die",
      "Der",
      "Das",
      "Heftklammer مؤنث: die.",
      "Heftklammer is feminine: die."
    ],
    [
      "___ Streifen glänzt silbern. (Streifen)",
      "Der",
      "Die",
      "Das",
      "Streifen مذكر: der.",
      "Streifen is masculine: der."
    ],
    [
      "___ Gerät wird nicht getestet. (Gerät)",
      "Das",
      "Der",
      "Die",
      "Gerät محايد: das.",
      "Gerät is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Nele folgt ___ Beschreibung. (die)",
      "der",
      "die",
      "den",
      "داتيف مؤنث: der Beschreibung.",
      "Feminine dative: der Beschreibung."
    ],
    [
      "Amir hilft ___ Partner. (der)",
      "dem",
      "den",
      "der",
      "داتيف مذكر: dem Partner.",
      "Masculine dative: dem Partner."
    ],
    [
      "Jule antwortet ___ Team. (das)",
      "dem",
      "das",
      "den",
      "داتيف محايد: dem Team.",
      "Neuter dative: dem Team."
    ],
    [
      "Die Hefte gehören ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "داتيف جمع: den Lernenden.",
      "Plural dative: den Lernenden."
    ]
  ],
  "praesens": [
    [
      "Karim ___ die Farben. (nennen)",
      "nennt",
      "nennst",
      "nennen",
      "er: nennt.",
      "Singular er takes nennt."
    ],
    [
      "Du ___ die Endungen. (prüfen)",
      "prüfst",
      "prüft",
      "prüfen",
      "du: prüfst.",
      "Du takes prüfst."
    ],
    [
      "Nele ___ die Notiz. (ändern)",
      "ändert",
      "änderst",
      "ändern",
      "sie مفرد: ändert.",
      "Singular sie takes ändert."
    ],
    [
      "Wir ___ keine Geräte. (testen)",
      "testen",
      "testet",
      "teste",
      "wir: testen.",
      "Wir takes testen."
    ]
  ],
  "possessiv": [
    [
      "Nele ändert ___ Überschrift. (Nele; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nele مع مؤنث أكوزاتيف: ihre Überschrift.",
      "Nele takes ihre with feminine accusative Überschrift."
    ],
    [
      "Amir öffnet ___ Heft. (Amir; das)",
      "sein",
      "seine",
      "seinen",
      "Amir مع محايد أكوزاتيف: sein Heft.",
      "Amir takes sein with neuter accusative Heft."
    ],
    [
      "Tarek prüft ___ Entwurf. (Tarek; der)",
      "seinen",
      "sein",
      "seinem",
      "Tarek مع مذكر أكوزاتيف: seinen Entwurf.",
      "Tarek takes seinen with masculine accusative Entwurf."
    ],
    [
      "Wir nennen ___ Beobachtungen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Beobachtungen.",
      "Wir takes unsere with plural accusative Beobachtungen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Text steht unter ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع unter: داتيف dem Foto.",
      "Fixed location with unter takes dative dem Foto."
    ],
    [
      "Nele schreibt den Text unter ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع unter: أكوزاتيف das Foto.",
      "Destination with unter takes accusative das Foto."
    ],
    [
      "Die Notiz steht neben ___ Tabelle. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع neben: داتيف der Tabelle.",
      "Fixed location with neben takes dative der Tabelle."
    ],
    [
      "Amir schreibt die Notiz neben ___ Tabelle. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع neben: أكوزاتيف die Tabelle.",
      "Destination with neben takes accusative die Tabelle."
    ]
  ],
  "negation": [
    [
      "Wir testen ___ Farbauftrag. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Farbauftrag.",
      "Masculine direct object: keinen Farbauftrag."
    ],
    [
      "Das ist ___ Produkttest. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "مذكر بعد ist: kein Produkttest.",
      "Masculine predicate noun: kein Produkttest."
    ],
    [
      "Jule gibt ___ Kaufempfehlung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Kaufempfehlung.",
      "Feminine direct object: keine Kaufempfehlung."
    ],
    [
      "Die Passform ist ___ geprüft. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي geprüft: nicht.",
      "Negate geprüft with nicht."
    ]
  ]
};
