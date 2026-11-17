import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const spielerundeGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Dominostein liegt unter dem Tisch. (Dominostein)",
      "Der",
      "Die",
      "Das",
      "Dominostein مذكر: der.",
      "Dominostein is masculine: der."
    ],
    [
      "___ Spielkarte liegt oben. (Spielkarte)",
      "Die",
      "Der",
      "Das",
      "Spielkarte مؤنث: die.",
      "Spielkarte is feminine: die."
    ],
    [
      "___ Puzzle liegt auf dem Tisch. (Puzzle)",
      "Das",
      "Der",
      "Die",
      "Puzzle محايد: das.",
      "Puzzle is neuter: das."
    ],
    [
      "___ Sanduhr steht im Regal. (Sanduhr)",
      "Die",
      "Der",
      "Das",
      "Sanduhr مؤنث: die.",
      "Sanduhr is feminine: die."
    ]
  ],
  "dativ": [
    [
      "Der Würfel gehört ___. (ich)",
      "mir",
      "mich",
      "mein",
      "gehören داتيف؛ ich: mir.",
      "Gehören takes dative; ich becomes mir."
    ],
    [
      "Mia gibt ___ den Stein. (er)",
      "ihm",
      "ihn",
      "sein",
      "المستلم داتيف؛ er: ihm.",
      "The recipient is dative; er becomes ihm."
    ],
    [
      "Omar hilft ___. (sie, مفرد / singular)",
      "ihr",
      "sie",
      "ihre",
      "helfen داتيف؛ sie مفرد: ihr.",
      "Helfen takes dative; singular sie becomes ihr."
    ],
    [
      "Nora zeigt ___ die Karten. (wir)",
      "uns",
      "unser",
      "wir",
      "المستلم داتيف؛ wir: uns.",
      "The recipient is dative; wir becomes uns."
    ]
  ],
  "praesens": [
    [
      "Mia ___ den Stein auf. (heben)",
      "hebt",
      "hebe",
      "hebst",
      "sie مفرد مع heben: hebt.",
      "Singular sie takes hebt."
    ],
    [
      "Tarek ___ den Würfel. (suchen)",
      "sucht",
      "suchst",
      "suchen",
      "er مع suchen: sucht.",
      "Er takes sucht."
    ],
    [
      "Du ___ die Karten. (sehen)",
      "siehst",
      "seht",
      "sehe",
      "du مع sehen: siehst.",
      "Du takes siehst."
    ],
    [
      "Wir ___ auf Nina. (warten)",
      "warten",
      "wartet",
      "wartest",
      "wir مع warten: warten.",
      "Wir takes warten."
    ]
  ],
  "trennbare-verben": [
    [
      "Mia hebt den Stein ___. (aufheben)",
      "auf",
      "aus",
      "zu",
      "aufheben بيتفصل: hebt ... auf.",
      "Aufheben separates: hebt ... auf."
    ],
    [
      "Omar schreibt keine Punkte ___. (aufschreiben)",
      "auf",
      "an",
      "mit",
      "aufschreiben بيتفصل: schreibt ... auf.",
      "Aufschreiben separates: schreibt ... auf."
    ],
    [
      "Lea räumt die Karten ___. (einräumen)",
      "ein",
      "aus",
      "mit",
      "einräumen بيتفصل: räumt ... ein.",
      "Einräumen separates: räumt ... ein."
    ],
    [
      "Nora sieht in der Anleitung ___. (nachsehen)",
      "nach",
      "auf",
      "zu",
      "nachsehen بيتفصل: sieht ... nach.",
      "Nachsehen separates: sieht ... nach."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Der Stein liegt unter ___ Tisch. (der; Wo?)",
      "dem",
      "den",
      "des",
      "مكان ثابت بعد unter: داتيف، dem Tisch.",
      "Fixed location after unter takes dative: dem Tisch."
    ],
    [
      "Mia legt den Stein in ___ Schachtel. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه لمكان جديد: أكوزاتيف، die Schachtel.",
      "Destination takes accusative: die Schachtel."
    ],
    [
      "Die Sanduhr steht neben ___ Puzzle. (das; Wo?)",
      "dem",
      "das",
      "den",
      "مكان ثابت بعد neben: داتيف، dem Puzzle.",
      "Fixed location after neben takes dative: dem Puzzle."
    ],
    [
      "Nina spielt mit ___ Freunden. (ihre, جمع / plural)",
      "ihren",
      "ihre",
      "ihrer",
      "mit داتيف جمع: ihren Freunden.",
      "Mit takes dative plural: ihren Freunden."
    ]
  ],
  "negation": [
    [
      "Das ist ___ Spielkarte. (eine)",
      "keine",
      "kein",
      "keinen",
      "Spielkarte مؤنث نوميناتيف: keine.",
      "Spielkarte is feminine nominative: keine."
    ],
    [
      "Heute beginnen wir ___ neue Runde. (eine)",
      "keine",
      "kein",
      "keinen",
      "Runde مؤنث أكوزاتيف: keine.",
      "Runde is feminine accusative: keine."
    ],
    [
      "Der Stein liegt ___ im Regal. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي عبارة المكان بـ nicht.",
      "Negate the location phrase with nicht."
    ],
    [
      "Omar verteilt noch ___ Karten. (Plural)",
      "keine",
      "kein",
      "keinen",
      "Karten جمع أكوزاتيف: keine.",
      "Karten is plural accusative: keine."
    ]
  ]
};
