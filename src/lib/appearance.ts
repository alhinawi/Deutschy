export const appearanceThemes=[
 {id:'papier',ar:'دفتر ورق',en:'Paper journal',dark:false},
 {id:'nacht',ar:'حبر ودهب',en:'Ink and gold',dark:true},
 {id:'salbei',ar:'مريمية',en:'Sage leaf',dark:false},
 {id:'terrakotta',ar:'فخار',en:'Terracotta',dark:false},
 {id:'nile',ar:'ضفة النيل',en:'Nile bank',dark:false},
 {id:'cobalt',ar:'أزرق كوبالت',en:'Cobalt blue',dark:false},
 {id:'rose',ar:'ورق وردي',en:'Rose paper',dark:false},
 {id:'plum',ar:'برقوق',en:'Plum ink',dark:false},
 {id:'olive',ar:'غصن زيتون',en:'Olive branch',dark:false},
 {id:'saffron',ar:'زعفران',en:'Saffron',dark:false},
 {id:'slate',ar:'رصاصي بارد',en:'Cool slate',dark:false},
 {id:'lilac',ar:'ليلك',en:'Lilac',dark:false},
 {id:'midnight',ar:'ليل النيل',en:'Nile at night',dark:true},
 {id:'forest',ar:'غابة بالليل',en:'Forest at night',dark:true},
 {id:'aubergine',ar:'بنفسجي غامق',en:'Deep aubergine',dark:true},
 {id:'espresso',ar:'قهوة سادة',en:'Espresso',dark:true},
 {id:'copper',ar:'نحاس',en:'Copper',dark:true},
 {id:'ocean',ar:'موج غامق',en:'Deep ocean',dark:true},
 {id:'charcoal',ar:'فحم ونعناع',en:'Charcoal and mint',dark:true},
 {id:'cherry',ar:'كرز بالليل',en:'Cherry at night',dark:true},
] as const;
export const APPEARANCE_KEY='deutschy:appearance';
export function validAppearance(value:unknown):value is string{return typeof value==='string'&&appearanceThemes.some(t=>t.id===value)}
export function readAppearance(legacy='papier'){try{const saved=localStorage.getItem(APPEARANCE_KEY);return validAppearance(saved)?saved:validAppearance(legacy)?legacy:'papier'}catch{return validAppearance(legacy)?legacy:'papier'}}
export function applyAppearance(value:string){const theme=appearanceThemes.find(t=>t.id===value)??appearanceThemes[0];document.documentElement.dataset.theme=theme.id;document.documentElement.style.colorScheme=theme.dark?'dark':'light'}
export function saveAppearance(value:string){if(!validAppearance(value))return false;try{localStorage.setItem(APPEARANCE_KEY,value);applyAppearance(value);window.dispatchEvent(new Event('deutschy:appearance'));return true}catch{return false}}
