import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const vogelportraetsGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Flamingo hat einen gebogenen Hals. (Flamingo)",
      "Der",
      "Die",
      "Das",
      "Flamingo طائر مذكر: der.",
      "The bird noun Flamingo is masculine: der."
    ],
    [
      "___ Kakadu ist auf dem rechten Foto. (Kakadu)",
      "Der",
      "Die",
      "Das",
      "Kakadu مذكر: der.",
      "Kakadu is masculine: der."
    ],
    [
      "___ Tonaufnahme fehlt. (Tonaufnahme)",
      "Die",
      "Der",
      "Das",
      "Tonaufnahme مؤنث: die.",
      "Tonaufnahme is feminine: die."
    ],
    [
      "___ Foto zeigt nur einen Ausschnitt. (Foto)",
      "Das",
      "Der",
      "Die",
      "Foto محايد: das.",
      "Foto is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Lina sieht ___ Flamingo im Foto. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Flamingo.",
      "Masculine direct object: den Flamingo."
    ],
    [
      "Omar nimmt ___ Wortkarte. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Wortkarte.",
      "Feminine direct object: die Wortkarte."
    ],
    [
      "Hamid beschreibt ___ Foto. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Foto.",
      "Neuter direct object: das Foto."
    ],
    [
      "Samira liest ___ Wortgruppen. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع: die Wortgruppen.",
      "Plural direct object: die Wortgruppen."
    ]
  ],
  "praesens": [
    [
      "Du ___ die Karten um. (drehen)",
      "drehst",
      "dreht",
      "drehen",
      "du: drehst.",
      "Du takes drehst."
    ],
    [
      "Lina ___ auf den Schopf. (zeigen)",
      "zeigt",
      "zeigen",
      "zeige",
      "sie مفرد: zeigt.",
      "Singular sie takes zeigt."
    ],
    [
      "Wir ___ die Vogelnamen. (wiederholen)",
      "wiederholen",
      "wiederholt",
      "wiederhole",
      "wir: wiederholen.",
      "Wir takes wiederholen."
    ],
    [
      "Ihr ___ keine Geräusche. (erfinden)",
      "erfindet",
      "erfinden",
      "erfinde",
      "ihr: erfindet.",
      "Ihr takes erfindet."
    ]
  ],
  "possessiv": [
    [
      "Omar liest ___ Karte vor. (Omar; die)",
      "seine",
      "sein",
      "seinen",
      "مفعول مؤنث: seine Karte.",
      "Feminine accusative: seine Karte."
    ],
    [
      "Samira ergänzt ___ Artikel. (Samira; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "مفعول جمع: ihre Artikel.",
      "Plural accusative: ihre Artikel."
    ],
    [
      "Wir prüfen ___ Beschreibung. (wir; die)",
      "unsere",
      "unser",
      "unseren",
      "مفعول مؤنث: unsere Beschreibung.",
      "Feminine accusative: unsere Beschreibung."
    ],
    [
      "Hamid kürzt ___ Entwurf. (Hamid; der)",
      "seinen",
      "sein",
      "seine",
      "مفعول مذكر: seinen Entwurf.",
      "Masculine accusative: seinen Entwurf."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Fotos hängen an ___ Wand. (die; Wo?)",
      "der",
      "die",
      "dem",
      "مكان ثابت وداتيف مؤنث: der Wand.",
      "Fixed location, feminine dative: der Wand."
    ],
    [
      "Lina hängt das Foto an ___ Wand. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه وأكوزاتيف مؤنث: die Wand.",
      "Destination, feminine accusative: die Wand."
    ],
    [
      "Die Karte liegt unter ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت وداتيف محايد: dem Foto.",
      "Fixed location, neuter dative: dem Foto."
    ],
    [
      "Omar legt die Karte unter ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه وأكوزاتيف محايد: das Foto.",
      "Destination, neuter accusative: das Foto."
    ]
  ],
  "negation": [
    [
      "Das ist ___ Tonaufnahme. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "خبر مؤنث: keine Tonaufnahme.",
      "Feminine predicate: keine Tonaufnahme."
    ],
    [
      "Jule erfindet ___ lauten Ruf. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen lauten Ruf.",
      "Masculine direct object: keinen lauten Ruf."
    ],
    [
      "Hamid braucht ___ zweites Foto. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "مفعول محايد: kein zweites Foto.",
      "Neuter direct object: kein zweites Foto."
    ],
    [
      "Sie machen ___ Aussagen über die Tierhaltung. (kein; Plural)",
      "keine",
      "kein",
      "keinen",
      "مفعول جمع: keine Aussagen.",
      "Plural direct object: keine Aussagen."
    ]
  ]
};
