import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const dekorundeGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Bilderrahmen steht im Regal. (Bilderrahmen)",
      "Der",
      "Die",
      "Das",
      "Bilderrahmen مذكر: der.",
      "Bilderrahmen is masculine: der."
    ],
    [
      "___ Vase ist leer. (Vase)",
      "Die",
      "Der",
      "Das",
      "Vase مؤنث: die.",
      "Vase is feminine: die."
    ],
    [
      "___ Ausdruck liegt neben dem Rahmen. (Ausdruck)",
      "Der",
      "Die",
      "Das",
      "Ausdruck مذكر: der.",
      "Ausdruck is masculine: der."
    ],
    [
      "___ Foto zeigt einen See. (Foto)",
      "Das",
      "Der",
      "Die",
      "Foto محايد: das.",
      "Foto is neuter: das."
    ]
  ],
  "dativ": [
    [
      "Jona zeigt ___ das Foto. (sie; Singular)",
      "ihr",
      "sie",
      "ihre",
      "المستلم داتيف؛ sie مفرد: ihr.",
      "The recipient is dative; singular sie becomes ihr."
    ],
    [
      "Die Vase gehört ___. (ich)",
      "mir",
      "mich",
      "mein",
      "gehören داتيف؛ ich: mir.",
      "Gehören takes dative; ich becomes mir."
    ],
    [
      "Lotte leiht ___ den Rahmen. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ],
    [
      "Finn gibt ___ den Rahmen zurück. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er: ihm.",
      "The recipient is dative; er becomes ihm."
    ]
  ],
  "praesens": [
    [
      "Nele ___ die Vase ins Regal. (stellen)",
      "stellt",
      "stellst",
      "stellen",
      "sie مفرد مع stellen: stellt.",
      "Singular sie takes stellt."
    ],
    [
      "Du ___ das Buch auf den Tisch. (legen)",
      "legst",
      "legt",
      "legen",
      "du مع legen: legst.",
      "Du takes legst."
    ],
    [
      "Ruben ___ den Ausdruck. (vergleichen)",
      "vergleicht",
      "vergleichst",
      "vergleichen",
      "er مع vergleichen: vergleicht.",
      "Er takes vergleicht."
    ],
    [
      "Wir ___ Lotte erneut. (fragen)",
      "fragen",
      "fragt",
      "fragst",
      "wir مع fragen: fragen.",
      "Wir takes fragen."
    ]
  ],
  "trennbare-verben": [
    [
      "Ruben setzt den Ausdruck später ___. (einsetzen)",
      "ein",
      "zu",
      "mit",
      "einsetzen بيتفصل: setzt ... ein.",
      "Einsetzen separates: setzt ... ein."
    ],
    [
      "Finn bringt den Rahmen ___. (zurückbringen)",
      "zurück",
      "an",
      "zu",
      "zurückbringen بيتفصل: bringt ... zurück.",
      "Zurückbringen separates: bringt ... zurück."
    ],
    [
      "Esma holt den Rahmen ___. (abholen)",
      "ab",
      "ein",
      "vor",
      "abholen بيتفصل: holt ... ab.",
      "Abholen separates: holt ... ab."
    ],
    [
      "Lotte sagt für den ersten Abend ___. (zusagen)",
      "zu",
      "mit",
      "aus",
      "zusagen بيتفصل: sagt ... zu.",
      "Zusagen separates: sagt ... zu."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Foto bleibt in ___ Rahmen. (der; Wo?)",
      "dem",
      "den",
      "des",
      "مكان ثابت بعد in: داتيف، dem Rahmen.",
      "Fixed location after in takes dative: dem Rahmen."
    ],
    [
      "Nele stellt die Vase auf ___ Brett. (das; Wohin?)",
      "das",
      "dem",
      "den",
      "اتجاه لمكان جديد: أكوزاتيف، das Brett.",
      "Destination takes accusative: das Brett."
    ],
    [
      "Das Buch liegt auf ___ Couchtisch. (der; Wo?)",
      "dem",
      "den",
      "des",
      "مكان ثابت بعد auf: داتيف، dem Couchtisch.",
      "Fixed location after auf takes dative: dem Couchtisch."
    ],
    [
      "Der Rahmen steht neben ___ Schachteln. (Plural; Wo?)",
      "den",
      "die",
      "der",
      "مكان ثابت وداتيف جمع: den Schachteln.",
      "Fixed location takes plural dative: den Schachteln."
    ]
  ],
  "negation": [
    [
      "Die Vase ist ___ voll. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الصفة هنا بـ nicht.",
      "Use nicht to negate the adjective here."
    ],
    [
      "Lotte leiht ihnen ___ Vase. (eine)",
      "keine",
      "kein",
      "keinen",
      "Vase مؤنث أكوزاتيف: keine.",
      "Vase is feminine accusative: keine."
    ],
    [
      "Das ist ___ Ersatz für die erste Kopie. (ein)",
      "kein",
      "keine",
      "keinen",
      "Ersatz مذكر نوميناتيف: kein.",
      "Ersatz is masculine nominative: kein."
    ],
    [
      "Finn nimmt ___ privaten Bilder mit. (Plural)",
      "keine",
      "kein",
      "keinen",
      "جمع أكوزاتيف: keine Bilder.",
      "Plural accusative: keine Bilder."
    ]
  ]
};
