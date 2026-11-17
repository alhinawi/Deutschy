import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const gewuerzformenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Sternanis ist auf dem Foto zu sehen. (Sternanis)",
      "Der",
      "Die",
      "Das",
      "Sternanis مذكر: der.",
      "Sternanis is masculine: der."
    ],
    [
      "___ Pfefferkorn liegt auf dem Löffel. (Pfefferkorn)",
      "Das",
      "Der",
      "Die",
      "Pfefferkorn محايد: das.",
      "Pfefferkorn is neuter: das."
    ],
    [
      "___ Reihenfolge bleibt gleich. (Reihenfolge)",
      "Die",
      "Das",
      "Der",
      "Reihenfolge مؤنث: die.",
      "Reihenfolge is feminine: die."
    ],
    [
      "___ Geruchsprobe fehlt. (Geruchsprobe)",
      "Die",
      "Der",
      "Das",
      "Geruchsprobe مؤنث: die.",
      "Geruchsprobe is feminine: die."
    ]
  ],
  "akkusativ": [
    [
      "Paul ergänzt ___ eigene Form. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث أكوزاتيف: keine Form.",
      "Feminine direct object takes keine Form."
    ],
    [
      "Anna nennt ___ Artikel. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر أكوزاتيف: den Artikel.",
      "Masculine direct object takes den Artikel."
    ],
    [
      "Felix liest ___ Nomen. (das)",
      "das",
      "dem",
      "der",
      "مفعول محايد أكوزاتيف: das Nomen.",
      "Neuter direct object takes das Nomen."
    ],
    [
      "Jule prüft ___ Bildtexte. (die; Plural)",
      "die",
      "den",
      "der",
      "مفعول جمع أكوزاتيف: die Bildtexte.",
      "Plural direct object takes die Bildtexte."
    ]
  ],
  "praesens": [
    [
      "Paul ___ die Artikel. (nennen)",
      "nennt",
      "nennst",
      "nennen",
      "er: nennt.",
      "Singular er takes nennt."
    ],
    [
      "Du ___ die Karten. (mischen)",
      "mischst",
      "mischt",
      "mischen",
      "du: mischst.",
      "Du takes mischst."
    ],
    [
      "Daria ___ beide Karten um. (umdrehen)",
      "dreht",
      "drehst",
      "drehen",
      "sie مفرد: dreht ... um.",
      "Singular sie takes dreht ... um."
    ],
    [
      "Wir ___ nur sichtbare Merkmale. (beschreiben)",
      "beschreiben",
      "beschreibt",
      "beschreibst",
      "wir: beschreiben.",
      "Wir takes beschreiben."
    ]
  ],
  "possessiv": [
    [
      "Karim erklärt ___ Erinnerung. (Karim; die)",
      "seine",
      "sein",
      "seinen",
      "Karim مع مؤنث أكوزاتيف: seine.",
      "Karim takes seine with feminine accusative Erinnerung."
    ],
    [
      "Anna deckt ___ Wörter ab. (Anna; Plural)",
      "ihre",
      "ihr",
      "ihren",
      "Anna مع جمع أكوزاتيف: ihre.",
      "Anna takes ihre with plural accusative Wörter."
    ],
    [
      "Wir prüfen ___ Entwurf. (wir; der)",
      "unseren",
      "unser",
      "unsere",
      "wir مع مذكر أكوزاتيف: unseren.",
      "Wir takes unseren with masculine accusative Entwurf."
    ],
    [
      "Felix öffnet ___ Mappe. (Felix; die)",
      "seine",
      "sein",
      "seinen",
      "Felix مع مؤنث أكوزاتيف: seine.",
      "Felix takes seine with feminine accusative Mappe."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Erinnerung steht auf ___ Mappendeckel. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع مذكر داتيف: dem Mappendeckel.",
      "Fixed location takes masculine dative dem Mappendeckel."
    ],
    [
      "Daria schreibt die Regel auf ___ Mappendeckel. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه الكتابة مع مذكر أكوزاتيف: den Mappendeckel.",
      "Destination takes masculine accusative den Mappendeckel."
    ],
    [
      "Das Blatt liegt über ___ Wörtern. (die; Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت مع جمع داتيف: den Wörtern.",
      "Fixed location takes plural dative den Wörtern."
    ],
    [
      "Anna legt das Blatt über ___ Wörter. (die; Plural; Wohin?)",
      "die",
      "den",
      "der",
      "اتجاه الحركة مع جمع أكوزاتيف: die Wörter.",
      "Destination takes plural accusative die Wörter."
    ]
  ],
  "negation": [
    [
      "Eine Erinnerung ist ___ Geruchsprobe. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "خبر مؤنث: keine.",
      "Feminine predicate noun takes keine."
    ],
    [
      "Karim nennt ___ Alterswert. (kein; der)",
      "keinen",
      "kein",
      "keine",
      "مفعول مذكر: keinen.",
      "Masculine direct object takes keinen."
    ],
    [
      "Die beiden öffnen ___ Packung. (kein; die)",
      "keine",
      "kein",
      "keinen",
      "مفعول مؤنث: keine.",
      "Feminine direct object takes keine."
    ],
    [
      "Die Bildfarbe entscheidet hier ___. (Satzverneinung)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل: nicht.",
      "Negate the verb with nicht."
    ]
  ]
};
