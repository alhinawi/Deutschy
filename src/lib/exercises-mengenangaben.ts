import type {Ex} from './exercises';
// Append only: earlier saved identities remain unchanged.
export const mengenangabenGrammar:Record<string,Ex[]>={
  "artikel-genus": [
    [
      "___ Messlöffel liegt auf dem Tablett. (Messlöffel)",
      "Der",
      "Die",
      "Das",
      "Messlöffel مذكر: der.",
      "Messlöffel is masculine: der."
    ],
    [
      "___ Küchenwaage bleibt aus. (Küchenwaage)",
      "Die",
      "Der",
      "Das",
      "Küchenwaage مؤنث: die.",
      "Küchenwaage is feminine: die."
    ],
    [
      "___ Einheit fehlt. (Einheit)",
      "Die",
      "Der",
      "Das",
      "Einheit مؤنث: die.",
      "Einheit is feminine: die."
    ],
    [
      "___ Wortlaut bleibt erhalten. (Wortlaut)",
      "Der",
      "Die",
      "Das",
      "Wortlaut مذكر: der.",
      "Wortlaut is masculine: der."
    ]
  ],
  "akkusativ": [
    [
      "Tarek nimmt ___ Messlöffel. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر أكوزاتيف: den.",
      "A masculine direct object takes den."
    ],
    [
      "Paula öffnet ___ Mappe. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث أكوزاتيف: die.",
      "A feminine direct object takes die."
    ],
    [
      "Leni liest ___ Rezeptkarte. (die)",
      "die",
      "der",
      "den",
      "مفعول مؤنث أكوزاتيف: die.",
      "A feminine direct object takes die."
    ],
    [
      "Cem notiert ___ Wortlaut. (der)",
      "den",
      "dem",
      "der",
      "مفعول مذكر أكوزاتيف: den.",
      "A masculine direct object takes den."
    ]
  ],
  "perfekt": [
    [
      "Tarek hat die Namen ___. (notieren)",
      "notiert",
      "genotiert",
      "notieren",
      "الأفعال في -ieren من غير ge-: notiert.",
      "Verbs ending in -ieren omit ge-: notiert."
    ],
    [
      "Leni hat die Karte ___. (lesen)",
      "gelesen",
      "gelest",
      "lesen",
      "اسم المفعول من lesen: gelesen.",
      "The past participle of lesen is gelesen."
    ],
    [
      "Paula hat die Vorbereitung ___. (unterbrechen)",
      "unterbrochen",
      "geunterbrochen",
      "unterbrecht",
      "unterbrechen هنا غير منفصل: unterbrochen.",
      "Unterbrechen is inseparable here: unterbrochen."
    ],
    [
      "Cem hat die Einheit ___. (übernehmen)",
      "übernommen",
      "geübernommen",
      "übernehmt",
      "übernehmen غير منفصل: übernommen.",
      "Übernehmen is inseparable: übernommen."
    ]
  ],
  "modalverben": [
    [
      "Du ___ die Einheit nicht weglassen. (dürfen)",
      "darfst",
      "darf",
      "dürfen",
      "dürfen مع du: darfst.",
      "Dürfen takes darfst with du."
    ],
    [
      "Paula ___ später wiegen. (wollen)",
      "will",
      "wollen",
      "willst",
      "wollen مع sie مفرد: will.",
      "Wollen takes will with singular sie."
    ],
    [
      "Wir ___ die Herkunft nennen. (müssen)",
      "müssen",
      "muss",
      "müsst",
      "müssen مع wir: müssen.",
      "Müssen takes müssen with wir."
    ],
    [
      "Ihr ___ die Geräte vergleichen. (können)",
      "könnt",
      "können",
      "kann",
      "können مع ihr: könnt.",
      "Können takes könnt with ihr."
    ]
  ],
  "dativ-praepositionen": [
    [
      "Die Waage steht neben ___ Tablett. (das; Wo?)",
      "dem",
      "das",
      "der",
      "مكان ثابت مع neben: داتيف dem.",
      "Fixed location with neben takes dative dem."
    ],
    [
      "Leni stellt die Waage neben ___ Tablett. (das; Wohin?)",
      "das",
      "dem",
      "der",
      "اتجاه مع neben: أكوزاتيف das.",
      "Destination with neben takes accusative das."
    ],
    [
      "Das Blatt liegt in ___ Mappe. (die; Wo?)",
      "der",
      "die",
      "den",
      "مكان ثابت مع in: داتيف der.",
      "Fixed location with in takes dative der."
    ],
    [
      "Paula schiebt das Blatt in ___ Mappe. (die; Wohin?)",
      "die",
      "der",
      "den",
      "اتجاه مع in: أكوزاتيف die.",
      "Destination with in takes accusative die."
    ]
  ],
  "konnektoren-b1": [
    [
      "Das Feld bleibt leer, ___ noch keine Messung vorliegt. (Grund)",
      "weil",
      "obwohl",
      "bevor",
      "سبب الفراغ مع فعل في الآخر: weil.",
      "Weil gives the reason and sends the verb to the end."
    ],
    [
      "___ Tarek sucht, liest Leni die Karte. (gleichzeitig)",
      "Während",
      "Nachdem",
      "Damit",
      "حاجتين في نفس الوقت: während.",
      "Während links simultaneous actions."
    ],
    [
      "___ das Blatt ordentlich aussieht, ist es noch keine geprüfte Anleitung. (Gegensatz)",
      "Obwohl",
      "Weil",
      "Sodass",
      "عكس المتوقع: obwohl.",
      "Obwohl introduces a concession."
    ],
    [
      "Alina erhält die Einheiten, ___ die Angaben nicht verwechselt werden. (Zweck)",
      "damit",
      "obwohl",
      "nachdem",
      "هدف الحفاظ على الوحدات: damit.",
      "Damit introduces the purpose."
    ]
  ]
};
