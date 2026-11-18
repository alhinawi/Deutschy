/** Curated existing food vocabulary,not an exhaustive cuisine or nutrition taxonomy. */
export const foodGroups = [
  {
    "id": "fruit",
    "ar": "فاكهة",
    "en": "Fruit",
    "ids": [
      "apfel",
      "banane",
      "orange",
      "erdbeere",
      "traube",
      "zitrone",
      "wassermelone",
      "birne",
      "kirsche",
      "pfirsich",
      "mandarine",
      "kiwi",
      "ananas",
      "melone",
      "granatapfel",
      "feige",
      "pflaume",
      "mango",
      "kokosnuss",
      "avocado",
      "grapefruit",
      "aprikose",
      "dattel",
      "johannisbeere",
      "brombeere",
      "wassermelonenscheibe",
      "himbeere",
      "heidelbeere",
      "drachenfrucht",
      "passionsfrucht",
      "papaya",
      "quitte",
      "limette",
      "nektarine",
      "stachelbeere",
      "kumquat",
      "litschi",
      "hagebutte",
      "mirabelle",
      "zitronenscheibe",
      "orangenscheibe",
      "kaki",
      "karambole",
      "durian",
      "jackfrucht",
      "guave",
      "physalis",
      "rambutan",
      "chirimoya",
      "mangostane",
      "brotfrucht"
    ]
  },
  {
    "id": "veg",
    "ar": "خضار وبقول",
    "en": "Vegetables and pulses",
    "ids": [
      "tomate",
      "kartoffel",
      "zwiebel",
      "gurke",
      "karotte",
      "pilz",
      "knoblauch",
      "paprika",
      "brokkoli",
      "spinat",
      "blumenkohl",
      "mais",
      "olive",
      "erbse",
      "kuerbis",
      "bohne",
      "lauch",
      "radieschen",
      "aubergine",
      "linse",
      "kichererbse",
      "spargel",
      "fenchel",
      "rhabarber",
      "artischocke",
      "kohlrabi",
      "suesskartoffel",
      "ingwer",
      "zucchini",
      "kohlkopf",
      "rosenkohl",
      "rote-bete",
      "rettich",
      "okra",
      "mangold"
    ]
  },
  {
    "id": "nuts",
    "ar": "مكسرات وبذور",
    "en": "Nuts and seeds",
    "ids": [
      "walnuss",
      "erdnuss",
      "mandel",
      "haselnuss",
      "kastanie",
      "kuerbiskern",
      "pistazie",
      "cashewkern",
      "pinienkern"
    ]
  },
  {
    "id": "staples",
    "ar": "عيش وحبوب ومكرونة",
    "en": "Bread, grains and pasta",
    "ids": [
      "brot",
      "reis",
      "nudel",
      "broetchen",
      "muesli",
      "spaghetti",
      "toast",
      "croissant",
      "cornflakes",
      "fladenbrot",
      "vollkornbrot",
      "semmel",
      "schwarzbrot",
      "brezel",
      "bagel"
    ]
  },
  {
    "id": "protein",
    "ar": "لحمة وسمك وبيض",
    "en": "Meat, fish and eggs",
    "ids": [
      "ei",
      "fleisch",
      "huhn",
      "fisch",
      "steak",
      "haehnchen",
      "garnele",
      "lachs",
      "auster",
      "bratwurst",
      "ruehrei",
      "spiegelei",
      "kaviar",
      "bockwurst",
      "salami",
      "leberwurst"
    ]
  },
  {
    "id": "dairy",
    "ar": "جبنة وزبدة",
    "en": "Cheese and butter",
    "ids": [
      "butter",
      "kaese",
      "mozzarella"
    ]
  },
  {
    "id": "dishes",
    "ar": "أطباق وأكل جاهز",
    "en": "Dishes and prepared food",
    "ids": [
      "salat",
      "suppe",
      "pizza",
      "burger",
      "sushi",
      "pfannkuchen",
      "sandwich",
      "doener",
      "schnitzel",
      "lasagne",
      "currywurst",
      "falafel"
    ]
  },
  {
    "id": "sweets",
    "ar": "حلويات",
    "en": "Sweets",
    "ids": [
      "kuchen",
      "schokolade",
      "eis",
      "torte",
      "waffel",
      "lebkuchen",
      "eiscreme",
      "baklava",
      "zuckerwatte",
      "muffin",
      "donut",
      "feigenmarmelade"
    ]
  },
  {
    "id": "seasoning",
    "ar": "توابل وتحلية",
    "en": "Seasoning and sweeteners",
    "ids": [
      "kaffeebohne",
      "zucker",
      "salz",
      "honig",
      "zimtstange",
      "muskatnuss",
      "vanilleschote",
      "gewuerznelke",
      "zuckerwuerfel",
      "sternanis",
      "pfefferkorn",
      "lorbeerblatt",
      "rosmarinzweig"
    ]
  }
] as const;
export const drinkGroups = [
  {
    "id": "basics",
    "ar": "مية ولبن وعصير",
    "en": "Water, milk and juice",
    "ids": [
      "wasser",
      "milch",
      "saft",
      "orangensaft",
      "granatapfelsaft"
    ]
  },
  {
    "id": "hot",
    "ar": "مشروبات سخنة",
    "en": "Hot drinks",
    "ids": [
      "kaffee",
      "tee",
      "kakao",
      "cappuccino",
      "pfefferminztee"
    ]
  },
  {
    "id": "other",
    "ar": "مشروبات تانية",
    "en": "Other drinks",
    "ids": [
      "cola",
      "bier"
    ]
  }
] as const;
export const foodIds=new Set<string>(foodGroups.flatMap(g=>[...g.ids]));
export const drinkIds=new Set<string>(drinkGroups.flatMap(g=>[...g.ids]));
