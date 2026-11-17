import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const obstansichtenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Papaya zeigt dunkle Kerne. (Papaya)",
      "Die",
      "Der",
      "Das",
      "Papaya مؤنث: die.",
      "Papaya is feminine: die."
    ],
    [
      "___ Quitte liegt vorn. (Quitte)",
      "Die",
      "Der",
      "Das",
      "Quitte مؤنث: die.",
      "Quitte is feminine: die."
    ],
    [
      "___ Fruchtfleisch ist gelb. (Fruchtfleisch)",
      "Das",
      "Der",
      "Die",
      "Fruchtfleisch محايد: das.",
      "Fruchtfleisch is neuter: das."
    ],
    [
      "___ Ausschnitt ist sichtbar. (Ausschnitt)",
      "Der",
      "Die",
      "Das",
      "Ausschnitt مذكر: der.",
      "Ausschnitt is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Nele folgt ___ Wortangabe. (die)",
      "der",
      "die",
      "den",
      "داتيف مؤنث: der Wortangabe.",
      "Feminine dative: der Wortangabe."
    ],
    [
      "Amir hilft ___ Lernpartner. (der)",
      "dem",
      "den",
      "der",
      "داتيف مذكر: dem Lernpartner.",
      "Masculine dative: dem Lernpartner."
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
      "Die Wortkarten gehören ___ Lernenden. (die; Plural)",
      "den",
      "die",
      "der",
      "داتيف جمع: den Lernenden.",
      "Plural dative: den Lernenden."
    ]
  ],
  "praesens": [
    [
      "Lea ___ den Namen. (wiederholen)",
      "wiederholt",
      "wiederholen",
      "wiederholst",
      "sie مفرد: wiederholt.",
      "Singular sie takes wiederholt."
    ],
    [
      "Du ___ nur die Endung. (markieren)",
      "markierst",
      "markiert",
      "markieren",
      "du: markierst.",
      "Du takes markierst."
    ],
    [
      "Karim ___ auf das Blatt. (zeigen)",
      "zeigt",
      "zeigen",
      "zeigst",
      "er: zeigt.",
      "Singular er takes zeigt."
    ],
    [
      "Wir ___ keine Früchte. (bestellen)",
      "bestellen",
      "bestellt",
      "bestelle",
      "wir: bestellen.",
      "Wir takes bestellen."
    ]
  ],
  "possessiv": [
    [
      "Nele liest ___ Obstkarte. (Nele; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nele مع مؤنث أكوزاتيف: ihre Obstkarte.",
      "Nele takes ihre with feminine accusative Obstkarte."
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
      "Tarek ändert ___ Bildtext. (Tarek; der)",
      "seinen",
      "sein",
      "seinem",
      "Tarek مع مذكر أكوزاتيف: seinen Bildtext.",
      "Tarek takes seinen with masculine accusative Bildtext."
    ],
    [
      "Wir prüfen ___ Endungen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Endungen.",
      "Wir takes unsere with plural accusative Endungen."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Endung steht auf ___ Karte. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع auf: داتيف der Karte.",
      "Fixed location with auf takes dative der Karte."
    ],
    [
      "Lea schreibt die Endung auf ___ Karte. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع auf: أكوزاتيف die Karte.",
      "Destination with auf takes accusative die Karte."
    ],
    [
      "Die Frage steht neben ___ Bild. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت مع neben: داتيف dem Bild.",
      "Fixed location with neben takes dative dem Bild."
    ],
    [
      "Karim schreibt die Frage neben ___ Bild. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه مع neben: أكوزاتيف das Bild.",
      "Destination with neben takes accusative das Bild."
    ]
  ],
  "negation": [
    [
      "Das Foto ersetzt ___ Reifetest. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Reifetest.",
      "Masculine direct object: keinen Reifetest."
    ],
    [
      "Das ist ___ Rezept. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "محايد بعد ist: kein Rezept.",
      "Neuter predicate noun: kein Rezept."
    ],
    [
      "Wir geben ___ Essensempfehlung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Essensempfehlung.",
      "Feminine direct object: keine Essensempfehlung."
    ],
    [
      "Die Herkunft ist ___ geprüft. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي geprüft: nicht.",
      "Negate geprüft with nicht."
    ]
  ]
};
