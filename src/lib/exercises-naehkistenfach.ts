import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const naehkistenfachGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Spule liegt neben der Dose. (Spule)",
      "Die",
      "Der",
      "Das",
      "Spule مؤنث: die.",
      "Spule is feminine: die."
    ],
    [
      "___ Stecknadel hat einen roten Kopf. (Stecknadel)",
      "Die",
      "Das",
      "Der",
      "Stecknadel مؤنث: die.",
      "Stecknadel is feminine: die."
    ],
    [
      "___ Heft bleibt auf dem Tisch. (Heft)",
      "Das",
      "Die",
      "Der",
      "Heft محايد: das.",
      "Heft is neuter: das."
    ],
    [
      "___ Termin steht noch nicht fest. (Termin)",
      "Der",
      "Die",
      "Das",
      "Termin مذكر: der.",
      "Termin is masculine: der."
    ]
  ],
  "dativ": [
    [
      "Lea hilft ___ Bruder beim Lernen. (der)",
      "dem",
      "den",
      "der",
      "helfen بياخد داتيف: dem Bruder.",
      "Helfen takes dative: dem Bruder."
    ],
    [
      "Die Kiste gehört ___ Mutter. (die)",
      "der",
      "die",
      "den",
      "gehören بياخد داتيف: der Mutter.",
      "Gehören takes dative: der Mutter."
    ],
    [
      "Nora antwortet ___ Freundin. (die)",
      "der",
      "die",
      "das",
      "antworten بياخد داتيف: der Freundin.",
      "Antworten takes dative: der Freundin."
    ],
    [
      "Karim dankt ___ Gast für die Erklärung. (der)",
      "dem",
      "den",
      "der",
      "danken بياخد داتيف: dem Gast.",
      "Danken takes dative: dem Gast."
    ]
  ],
  "praesens": [
    [
      "Sami ___ das zweite Wort. (wiederholen)",
      "wiederholt",
      "wiederholst",
      "wiederholen",
      "er مفرد مع wiederholen: wiederholt.",
      "Singular er takes wiederholt."
    ],
    [
      "Du ___ die Nachricht. (bestätigen)",
      "bestätigst",
      "bestätigt",
      "bestätigen",
      "du مع bestätigen: bestätigst.",
      "Du takes bestätigst."
    ],
    [
      "Nora ___ den alten Eintrag. (streichen)",
      "streicht",
      "streichst",
      "streichen",
      "sie مفرد مع streichen: streicht.",
      "Singular sie takes streicht."
    ],
    [
      "Wir ___ die Sachen getrennt auf. (bewahren)",
      "bewahren",
      "bewahrt",
      "bewahrst",
      "wir مع bewahren: bewahren.",
      "Wir takes bewahren."
    ]
  ],
  "possessiv": [
    [
      "Ich lege ___ Heft auf den Tisch. (mein)",
      "mein",
      "meinen",
      "meinem",
      "Heft محايد أكوزاتيف: mein.",
      "Heft is neuter accusative: mein."
    ],
    [
      "Du bestätigst ___ Termin. (dein)",
      "deinen",
      "deinem",
      "deine",
      "Termin مذكر أكوزاتيف: deinen.",
      "Termin is masculine accusative: deinen."
    ],
    [
      "Nora ändert ___ Eintrag. (ihr)",
      "ihren",
      "ihrem",
      "ihre",
      "Eintrag مذكر أكوزاتيف: ihren.",
      "Eintrag is masculine accusative: ihren."
    ],
    [
      "Wir behalten ___ Sachen. (unser)",
      "unsere",
      "unseren",
      "unserem",
      "Sachen جمع أكوزاتيف: unsere.",
      "Sachen is plural accusative: unsere."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Das Bilderheft liegt neben ___ Kiste. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع neben: داتيف der Kiste.",
      "Fixed location with neben takes dative: der Kiste."
    ],
    [
      "Lea legt das Bilderheft neben ___ Kiste. (die; Wohin?)",
      "die",
      "der",
      "dem",
      "اتجاه مع neben: أكوزاتيف die Kiste.",
      "Destination with neben takes accusative: die Kiste."
    ],
    [
      "Die Kiste steht vor ___ Stuhl. (der; Wo?)",
      "dem",
      "den",
      "der",
      "مكان ثابت مع vor: داتيف dem Stuhl.",
      "Fixed location with vor takes dative: dem Stuhl."
    ],
    [
      "Eva stellt die Kiste vor ___ Stuhl. (der; Wohin?)",
      "den",
      "dem",
      "der",
      "اتجاه مع vor: أكوزاتيف den Stuhl.",
      "Destination with vor takes accusative: den Stuhl."
    ]
  ],
  "negation": [
    [
      "Heute kommen ___ neuen Wörter dazu. (Plural)",
      "keine",
      "kein",
      "keinen",
      "Wörter جمع نوميناتيف: keine.",
      "Wörter is plural nominative: keine."
    ],
    [
      "Die Rückgabe ist noch ___ erledigt. (nicht / kein)",
      "nicht",
      "kein",
      "keine",
      "نفي الحالة: nicht.",
      "Use nicht to negate the state."
    ],
    [
      "Die Leihgabe ist ___ Geschenk. (ein)",
      "kein",
      "keine",
      "keinen",
      "Geschenk محايد نوميناتيف: kein.",
      "Geschenk is neuter nominative: kein."
    ],
    [
      "Sie haben noch ___ genauen Termin. (ein)",
      "keinen",
      "kein",
      "keinem",
      "Termin مذكر أكوزاتيف: keinen.",
      "Termin is masculine accusative: keinen."
    ]
  ]
};
