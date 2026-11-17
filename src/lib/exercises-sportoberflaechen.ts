import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const sportoberflaechenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Tischtennisschläger hat einen Griff. (Tischtennisschläger)",
      "Der",
      "Die",
      "Das",
      "Tischtennisschläger مذكر: der.",
      "Tischtennisschläger is masculine: der."
    ],
    [
      "___ Golfball hat Vertiefungen. (Golfball)",
      "Der",
      "Die",
      "Das",
      "Golfball مذكر: der.",
      "Golfball is masculine: der."
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
      "___ Licht wirkt hier blau. (Licht)",
      "Das",
      "Der",
      "Die",
      "Licht محايد: das.",
      "Licht is neuter: das."
    ]
  ],
  "akkusativ": [
    [
      "Lea nennt ___ Namen. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Namen.",
      "Masculine direct object: den Namen."
    ],
    [
      "Karim öffnet ___ Heft. (das)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Heft.",
      "Neuter direct object: das Heft."
    ],
    [
      "Nele prüft ___ Form. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Form.",
      "Feminine direct object: die Form."
    ],
    [
      "Tarek streicht ___ Zahlen. (die; Plural)",
      "die",
      "der",
      "den",
      "مفعول جمع: die Zahlen.",
      "Plural direct object: die Zahlen."
    ]
  ],
  "praesens": [
    [
      "Lea ___ das Wort. (nennen)",
      "nennt",
      "nennen",
      "nennst",
      "sie مفرد: nennt.",
      "Singular sie takes nennt."
    ],
    [
      "Du ___ die Formen. (lernen)",
      "lernst",
      "lernt",
      "lernen",
      "du: lernst.",
      "Du takes lernst."
    ],
    [
      "Amir ___ beide Einträge nach. (schlagen)",
      "schlägt",
      "schlagt",
      "schlagen",
      "er: schlägt.",
      "Singular er takes schlägt."
    ],
    [
      "Wir ___ keine Größe. (berechnen)",
      "berechnen",
      "berechnet",
      "berechne",
      "wir: berechnen.",
      "Wir takes berechnen."
    ]
  ],
  "possessiv": [
    [
      "Lea deckt ___ Notiz ab. (Lea; die)",
      "ihre",
      "ihr",
      "ihren",
      "Lea مع مؤنث أكوزاتيف: ihre Notiz.",
      "Lea takes ihre with feminine accusative Notiz."
    ],
    [
      "Karim öffnet ___ Heft. (Karim; das)",
      "sein",
      "seine",
      "seinen",
      "Karim مع محايد أكوزاتيف: sein Heft.",
      "Karim takes sein with neuter accusative Heft."
    ],
    [
      "Tarek ändert ___ Entwurf. (Tarek; der)",
      "seinen",
      "sein",
      "seinem",
      "Tarek مع مذكر أكوزاتيف: seinen Entwurf.",
      "Tarek takes seinen with masculine accusative Entwurf."
    ],
    [
      "Wir prüfen ___ Beispiele. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Beispiele.",
      "Wir takes unsere with plural accusative Beispiele."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Notiz steht neben ___ Foto. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem Foto.",
      "Fixed location with neben takes dative dem Foto."
    ],
    [
      "Nele schreibt die Notiz neben ___ Foto. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das Foto.",
      "Destination with neben takes accusative das Foto."
    ],
    [
      "Das Wort steht auf ___ Karte. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع auf: داتيف der Karte.",
      "Fixed location with auf takes dative der Karte."
    ],
    [
      "Amir schreibt das Wort auf ___ Karte. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع auf: أكوزاتيف die Karte.",
      "Destination with auf takes accusative die Karte."
    ]
  ],
  "negation": [
    [
      "Die Fotos haben ___ gemeinsamen Maßstab. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Maßstab.",
      "Masculine direct object: keinen Maßstab."
    ],
    [
      "Das ist ___ Messversuch. (kein; der)",
      "kein",
      "keine",
      "keinen",
      "مذكر بعد ist: kein Messversuch.",
      "Masculine predicate noun: kein Messversuch."
    ],
    [
      "Wir geben ___ Empfehlung ab. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Empfehlung.",
      "Feminine direct object: keine Empfehlung."
    ],
    [
      "Die Bilder zeigen ___ dieselbe Szene. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي dieselbe Szene هنا: nicht.",
      "Negate dieselbe Szene here with nicht."
    ]
  ]
};
