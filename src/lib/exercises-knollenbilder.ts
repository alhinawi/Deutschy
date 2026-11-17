import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const knollenbilderGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Süßkartoffel hat eine violette Schale. (Süßkartoffel)",
      "Die",
      "Der",
      "Das",
      "Süßkartoffel مؤنث: die.",
      "Süßkartoffel is feminine: die."
    ],
    [
      "___ Ingwer liegt auf dem Teller. (Ingwer)",
      "Der",
      "Die",
      "Das",
      "Ingwer مذكر: der.",
      "Ingwer is masculine: der."
    ],
    [
      "___ Stück liegt vorn. (Stück)",
      "Das",
      "Der",
      "Die",
      "Stück محايد: das.",
      "Stück is neuter: das."
    ],
    [
      "___ Schale ist violett. (Schale)",
      "Die",
      "Der",
      "Das",
      "Schale مؤنث: die.",
      "Schale is feminine: die."
    ]
  ],
  "akkusativ": [
    [
      "Lea beschreibt ___ Hintergrund. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر: den Hintergrund.",
      "Masculine direct object: den Hintergrund."
    ],
    [
      "Karim nennt ___ Lebensmittel. (das; Singular)",
      "das",
      "dem",
      "den",
      "مفعول محايد: das Lebensmittel.",
      "Neuter direct object: das Lebensmittel."
    ],
    [
      "Jule prüft ___ Behauptung. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث: die Behauptung.",
      "Feminine direct object: die Behauptung."
    ],
    [
      "Tarek streicht ___ Qualitätswörter. (die; Plural)",
      "die",
      "der",
      "den",
      "مفعول جمع: die Qualitätswörter.",
      "Plural direct object: die Qualitätswörter."
    ]
  ],
  "praesens": [
    [
      "Lea ___ die Formen nach. (sprechen)",
      "spricht",
      "sprecht",
      "sprechen",
      "sie مفرد: spricht.",
      "Singular sie takes spricht."
    ],
    [
      "Du ___ die Zeile frei. (lassen)",
      "lässt",
      "lasst",
      "lassen",
      "du: lässt.",
      "Du takes lässt."
    ],
    [
      "Karim ___ auf ein Stück. (zeigen)",
      "zeigt",
      "zeigen",
      "zeigst",
      "er: zeigt.",
      "Singular er takes zeigt."
    ],
    [
      "Wir ___ keine Lebensmittel. (prüfen)",
      "prüfen",
      "prüft",
      "prüfe",
      "wir: prüfen.",
      "Wir takes prüfen."
    ]
  ],
  "possessiv": [
    [
      "Nele ergänzt ___ Wortnotiz. (Nele; die)",
      "ihre",
      "ihr",
      "ihren",
      "Nele مع مؤنث أكوزاتيف: ihre Wortnotiz.",
      "Nele takes ihre with feminine accusative Wortnotiz."
    ],
    [
      "Amir öffnet ___ Lernblatt. (Amir; das)",
      "sein",
      "seine",
      "seinen",
      "Amir مع محايد أكوزاتيف: sein Lernblatt.",
      "Amir takes sein with neuter accusative Lernblatt."
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
      "Wir prüfen ___ Formulierungen. (wir; Plural)",
      "unsere",
      "unser",
      "unseren",
      "wir مع جمع أكوزاتيف: unsere Formulierungen.",
      "Wir takes unsere with plural accusative Formulierungen."
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
      "Lea schreibt die Notiz neben ___ Foto. (das; Wohin?)",
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
      "Karim schreibt das Wort auf ___ Karte. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع auf: أكوزاتيف die Karte.",
      "Destination with auf takes accusative die Karte."
    ]
  ],
  "negation": [
    [
      "Das Foto liefert ___ Qualitätsnachweis. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen Qualitätsnachweis.",
      "Masculine direct object: keinen Qualitätsnachweis."
    ],
    [
      "Das ist ___ Gütesiegel. (kein; das)",
      "kein",
      "keine",
      "keinen",
      "محايد بعد ist: kein Gütesiegel.",
      "Neuter predicate noun: kein Gütesiegel."
    ],
    [
      "Wir geben ___ Dosierung an. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine Dosierung.",
      "Feminine direct object: keine Dosierung."
    ],
    [
      "Die Herkunft ist ___ belegt. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي belegt: nicht.",
      "Negate belegt with nicht."
    ]
  ]
};
