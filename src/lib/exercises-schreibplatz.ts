import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const schreibplatzGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Klemmbrett liegt auf dem Tisch. (Klemmbrett)",
      "Das",
      "Der",
      "Die",
      "Klemmbrett محايد: das.",
      "Klemmbrett is neuter: das."
    ],
    [
      "___ Textmarker ist gelb. (Textmarker)",
      "Der",
      "Die",
      "Das",
      "Textmarker مذكر: der.",
      "Textmarker is masculine: der."
    ],
    [
      "___ Kappe liegt neben dem Stift. (Kappe)",
      "Die",
      "Der",
      "Das",
      "Kappe مؤنث: die.",
      "Kappe is feminine: die."
    ],
    [
      "___ Vorschlag ist noch offen. (Vorschlag)",
      "Der",
      "Die",
      "Das",
      "Vorschlag مذكر: der.",
      "Vorschlag is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Jule gibt ___ ein Blatt. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er: ihm.",
      "The recipient is dative; er becomes ihm."
    ],
    [
      "Das Klemmbrett gehört ___. (ich)",
      "mir",
      "mich",
      "mein",
      "gehören داتيف؛ ich: mir.",
      "Gehören takes dative; ich becomes mir."
    ],
    [
      "Sina erklärt ___ die Markierung. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ],
    [
      "Emil hilft ___ beim Vergleichen. (du)",
      "dir",
      "dich",
      "dein",
      "helfen داتيف؛ du: dir.",
      "Helfen takes dative; du becomes dir."
    ]
  ],
  "praesens": [
    [
      "Jule ___ ein Wort. (markieren)",
      "markiert",
      "markierst",
      "markieren",
      "sie مفرد مع markieren: markiert.",
      "Singular sie takes markiert."
    ],
    [
      "Du ___ das Blatt. (lesen)",
      "liest",
      "lest",
      "lesen",
      "du مع lesen: liest.",
      "Du takes liest."
    ],
    [
      "Leon ___ einen Vorschlag. (notieren)",
      "notiert",
      "notierst",
      "notieren",
      "er مع notieren: notiert.",
      "Er takes notiert."
    ],
    [
      "Wir ___ die Fassungen. (vergleichen)",
      "vergleichen",
      "vergleicht",
      "vergleichst",
      "wir مع vergleichen: vergleichen.",
      "Wir takes vergleichen."
    ]
  ],
  "trennbare-verben": [
    [
      "Amir nimmt ein leeres Blatt ___. (mitnehmen)",
      "mit",
      "zu",
      "ein",
      "mitnehmen بيتفصل: nimmt ... mit.",
      "Mitnehmen separates: nimmt ... mit."
    ],
    [
      "Farah fragt bei dem Wort ___. (nachfragen)",
      "nach",
      "an",
      "zu",
      "nachfragen بيتفصل: fragt ... nach.",
      "Nachfragen separates: fragt ... nach."
    ],
    [
      "Sina heftet das Blatt ___. (anheften)",
      "an",
      "mit",
      "vor",
      "anheften بيتفصل: heftet ... an.",
      "Anheften separates: heftet ... an."
    ],
    [
      "Emil steckt den Stift ___. (einstecken)",
      "ein",
      "vor",
      "zu",
      "einstecken بيتفصل: steckt ... ein.",
      "Einstecken separates: steckt ... ein."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Blatt steckt an ___ Klemmbrett. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد an: داتيف، dem Klemmbrett.",
      "Fixed location after an takes dative: dem Klemmbrett."
    ],
    [
      "Jule legt den Stift auf ___ Tisch. (der; Wohin?)",
      "den",
      "dem",
      "des",
      "اتجاه لمكان جديد: أكوزاتيف، den Tisch.",
      "Destination takes accusative: den Tisch."
    ],
    [
      "Der Textmarker liegt neben ___ Hand. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت بعد neben: داتيف، der Hand.",
      "Fixed location after neben takes dative: der Hand."
    ],
    [
      "Emil schreibt mit ___ Bleistift. (der)",
      "dem",
      "den",
      "des",
      "mit داتيف مذكر: dem Bleistift.",
      "Mit takes masculine dative: dem Bleistift."
    ]
  ],
  "negation": [
    [
      "Das ist ___ Klemmbrett. (ein)",
      "kein",
      "keine",
      "keinen",
      "Klemmbrett محايد نوميناتيف: kein.",
      "Klemmbrett is neuter nominative: kein."
    ],
    [
      "Jule findet ___ Textmarker in der Tasche. (einen)",
      "keinen",
      "kein",
      "keine",
      "Textmarker مذكر أكوزاتيف: keinen.",
      "Textmarker is masculine accusative: keinen."
    ],
    [
      "Die ursprüngliche Liste wird ___ verändert. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الفعل هنا بـ nicht.",
      "Use nicht to negate the verb here."
    ],
    [
      "Die Farbe ist ___ Bestätigung. (eine)",
      "keine",
      "kein",
      "keinen",
      "Bestätigung مؤنث نوميناتيف: keine.",
      "Bestätigung is feminine nominative: keine."
    ]
  ]
};
