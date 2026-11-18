import {accountMemory} from './account-memory';
export const DEFAULT_APPEARANCE='cobalt';
export const appearanceThemes=[
 {
  "id": "cobalt",
  "ar": "أزرق كوبالت",
  "en": "Cobalt blue",
  "dark": false,
  "className": "[--paper:#f4f7ff] [--card:#ffffff] [--ink:#14213d] [--muted:#4c5d7a] [--line:#c9d4e8] [--accent:#254cbb] [--accent-ink:#ffffff] [--good:#276f48] [--bad:#ac2824] [--display-font:Cairo,system-ui,sans-serif] [--arabic-heading:Cairo,system-ui,sans-serif] scheme-light",
  "fonts": "Cairo",
  "styleAr": "حديث وواضح",
  "styleEn": "Clean modern"
 },
 {
  "id": "papier",
  "ar": "دفتر ورق",
  "en": "Paper journal",
  "dark": false,
  "className": "[--paper:#f6f0e4] [--card:#fffaf0] [--ink:#1d1a16] [--muted:#6d6458] [--line:#e0d5c1] [--accent:#b4432c] [--accent-ink:#fff8ee] [--good:#2f7a52] [--bad:#b3261e] [--display-font:Cairo,system-ui,sans-serif] [--arabic-heading:Cairo,system-ui,sans-serif] scheme-light",
  "fonts": "Cairo",
  "styleAr": "حديث وواضح",
  "styleEn": "Clean modern"
 },
 {
  "id": "nacht",
  "ar": "حبر ودهب",
  "en": "Ink and gold",
  "dark": true,
  "className": "[--paper:#14161c] [--card:#1c1f27] [--ink:#f1ece2] [--muted:#a39d92] [--line:#2c303b] [--accent:#e0a458] [--accent-ink:#1a1405] [--good:#5ec28a] [--bad:#ff7b72] [--display-font:Fraunces,Amiri,Georgia,serif] [--arabic-heading:Amiri,Cairo,serif] scheme-dark",
  "fonts": "Fraunces + Amiri",
  "styleAr": "طابع تحريري",
  "styleEn": "Editorial"
 },
 {
  "id": "salbei",
  "ar": "مريمية",
  "en": "Sage leaf",
  "dark": false,
  "className": "[--paper:#eef1e8] [--card:#f9fbf4] [--ink:#1c2a22] [--muted:#5b6b60] [--line:#d3dac8] [--accent:#3f6b4f] [--accent-ink:#f5fbf0] [--good:#2f7a52] [--bad:#b3261e] [--display-font:Georgia,Amiri,serif] [--arabic-heading:Amiri,Cairo,serif] scheme-light",
  "fonts": "Georgia + Amiri",
  "styleAr": "كلاسيكي هادي",
  "styleEn": "Quiet classic"
 },
 {
  "id": "terrakotta",
  "ar": "فخار",
  "en": "Terracotta",
  "dark": false,
  "className": "[--paper:#f3e6dc] [--card:#fcf3ec] [--ink:#2a1a14] [--muted:#7a5f52] [--line:#e3cfc1] [--accent:#8e3b2a] [--accent-ink:#fff4ec] [--good:#3a7a4f] [--bad:#a8261e] [--display-font:ui-sans-serif,Cairo,sans-serif] [--arabic-heading:Cairo,system-ui,sans-serif] scheme-light",
  "fonts": "System + Cairo",
  "styleAr": "بسيط ومركز",
  "styleEn": "Focused minimal"
 },
 {
  "id": "nile",
  "ar": "ضفة النيل",
  "en": "Nile bank",
  "dark": false,
  "className": "[--paper:#e9f3f0] [--card:#f8fffc] [--ink:#142c29] [--muted:#46635e] [--line:#c4d9d3] [--accent:#17645a] [--accent-ink:#ffffff] [--good:#276f48] [--bad:#ac2824] [--display-font:Fraunces,Amiri,Georgia,serif] [--arabic-heading:Cairo,system-ui,sans-serif] scheme-light",
  "fonts": "Fraunces + Cairo",
  "styleAr": "دافي ومقروء",
  "styleEn": "Warm reading"
 },
 {
  "id": "rose",
  "ar": "ورق وردي",
  "en": "Rose paper",
  "dark": false,
  "className": "[--paper:#f9ecee] [--card:#fff9fa] [--ink:#3b2029] [--muted:#795362] [--line:#e5cbd3] [--accent:#9b3659] [--accent-ink:#ffffff] [--good:#276f48] [--bad:#ac2824] [--display-font:Fraunces,Amiri,Georgia,serif] [--arabic-heading:Amiri,Cairo,serif] scheme-light",
  "fonts": "Fraunces + Amiri",
  "styleAr": "طابع تحريري",
  "styleEn": "Editorial"
 },
 {
  "id": "plum",
  "ar": "برقوق",
  "en": "Plum ink",
  "dark": false,
  "className": "[--paper:#f2edf5] [--card:#fcf9ff] [--ink:#2c2037] [--muted:#6d597b] [--line:#dbcee3] [--accent:#75418c] [--accent-ink:#ffffff] [--good:#276f48] [--bad:#ac2824] [--display-font:Georgia,Amiri,serif] [--arabic-heading:Amiri,Cairo,serif] scheme-light",
  "fonts": "Georgia + Amiri",
  "styleAr": "كلاسيكي هادي",
  "styleEn": "Quiet classic"
 },
 {
  "id": "olive",
  "ar": "غصن زيتون",
  "en": "Olive branch",
  "dark": false,
  "className": "[--paper:#f0f0e3] [--card:#fcfced] [--ink:#282d18] [--muted:#62674b] [--line:#d6d8ba] [--accent:#606b26] [--accent-ink:#ffffff] [--good:#276f48] [--bad:#ac2824] [--display-font:ui-sans-serif,Cairo,sans-serif] [--arabic-heading:Cairo,system-ui,sans-serif] scheme-light",
  "fonts": "System + Cairo",
  "styleAr": "بسيط ومركز",
  "styleEn": "Focused minimal"
 },
 {
  "id": "saffron",
  "ar": "زعفران",
  "en": "Saffron",
  "dark": false,
  "className": "[--paper:#faf0d9] [--card:#fffcf2] [--ink:#3b2b10] [--muted:#79633b] [--line:#e6d3a7] [--accent:#945711] [--accent-ink:#ffffff] [--good:#276f48] [--bad:#ac2824] [--display-font:Fraunces,Amiri,Georgia,serif] [--arabic-heading:Cairo,system-ui,sans-serif] scheme-light",
  "fonts": "Fraunces + Cairo",
  "styleAr": "دافي ومقروء",
  "styleEn": "Warm reading"
 },
 {
  "id": "slate",
  "ar": "رصاصي بارد",
  "en": "Cool slate",
  "dark": false,
  "className": "[--paper:#eef1f4] [--card:#fafcfe] [--ink:#23303b] [--muted:#596875] [--line:#d0d9df] [--accent:#455e73] [--accent-ink:#ffffff] [--good:#276f48] [--bad:#ac2824] [--display-font:Cairo,system-ui,sans-serif] [--arabic-heading:Cairo,system-ui,sans-serif] scheme-light",
  "fonts": "Cairo",
  "styleAr": "حديث وواضح",
  "styleEn": "Clean modern"
 },
 {
  "id": "lilac",
  "ar": "ليلك",
  "en": "Lilac",
  "dark": false,
  "className": "[--paper:#f0edfc] [--card:#fbfaff] [--ink:#292046] [--muted:#6c5b88] [--line:#d6cef0] [--accent:#67449a] [--accent-ink:#ffffff] [--good:#276f48] [--bad:#ac2824] [--display-font:Fraunces,Amiri,Georgia,serif] [--arabic-heading:Amiri,Cairo,serif] scheme-light",
  "fonts": "Fraunces + Amiri",
  "styleAr": "طابع تحريري",
  "styleEn": "Editorial"
 },
 {
  "id": "midnight",
  "ar": "ليل النيل",
  "en": "Nile at night",
  "dark": true,
  "className": "[--paper:#0f1929] [--card:#172438] [--ink:#edf3ff] [--muted:#a3b5cd] [--line:#30435f] [--accent:#8bb8ff] [--accent-ink:#0f1929] [--good:#80c79b] [--bad:#ff9994] [--display-font:Georgia,Amiri,serif] [--arabic-heading:Amiri,Cairo,serif] scheme-dark",
  "fonts": "Georgia + Amiri",
  "styleAr": "كلاسيكي هادي",
  "styleEn": "Quiet classic"
 },
 {
  "id": "forest",
  "ar": "غابة بالليل",
  "en": "Forest at night",
  "dark": true,
  "className": "[--paper:#101f1a] [--card:#192d25] [--ink:#edf7ef] [--muted:#abc2b1] [--line:#365044] [--accent:#8fc6a2] [--accent-ink:#101f1a] [--good:#80c79b] [--bad:#ff9994] [--display-font:ui-sans-serif,Cairo,sans-serif] [--arabic-heading:Cairo,system-ui,sans-serif] scheme-dark",
  "fonts": "System + Cairo",
  "styleAr": "بسيط ومركز",
  "styleEn": "Focused minimal"
 },
 {
  "id": "aubergine",
  "ar": "بنفسجي غامق",
  "en": "Deep aubergine",
  "dark": true,
  "className": "[--paper:#24182b] [--card:#302139] [--ink:#faefff] [--muted:#c6adce] [--line:#533c60] [--accent:#d1a3eb] [--accent-ink:#24182b] [--good:#80c79b] [--bad:#ff9994] [--display-font:Fraunces,Amiri,Georgia,serif] [--arabic-heading:Cairo,system-ui,sans-serif] scheme-dark",
  "fonts": "Fraunces + Cairo",
  "styleAr": "دافي ومقروء",
  "styleEn": "Warm reading"
 },
 {
  "id": "espresso",
  "ar": "قهوة سادة",
  "en": "Espresso",
  "dark": true,
  "className": "[--paper:#211914] [--card:#30241c] [--ink:#fff1de] [--muted:#ccb49a] [--line:#574231] [--accent:#e4b477] [--accent-ink:#211914] [--good:#80c79b] [--bad:#ff9994] [--display-font:Cairo,system-ui,sans-serif] [--arabic-heading:Cairo,system-ui,sans-serif] scheme-dark",
  "fonts": "Cairo",
  "styleAr": "حديث وواضح",
  "styleEn": "Clean modern"
 },
 {
  "id": "copper",
  "ar": "نحاس",
  "en": "Copper",
  "dark": true,
  "className": "[--paper:#291b18] [--card:#392621] [--ink:#ffefe6] [--muted:#d2b4a7] [--line:#62453b] [--accent:#efaa84] [--accent-ink:#291b18] [--good:#80c79b] [--bad:#ff9994] [--display-font:Fraunces,Amiri,Georgia,serif] [--arabic-heading:Amiri,Cairo,serif] scheme-dark",
  "fonts": "Fraunces + Amiri",
  "styleAr": "طابع تحريري",
  "styleEn": "Editorial"
 },
 {
  "id": "ocean",
  "ar": "موج غامق",
  "en": "Deep ocean",
  "dark": true,
  "className": "[--paper:#101f28] [--card:#182f3b] [--ink:#e9f7ff] [--muted:#a4c0cf] [--line:#335362] [--accent:#79c8e7] [--accent-ink:#101f28] [--good:#80c79b] [--bad:#ff9994] [--display-font:Georgia,Amiri,serif] [--arabic-heading:Amiri,Cairo,serif] scheme-dark",
  "fonts": "Georgia + Amiri",
  "styleAr": "كلاسيكي هادي",
  "styleEn": "Quiet classic"
 },
 {
  "id": "charcoal",
  "ar": "فحم ونعناع",
  "en": "Charcoal and mint",
  "dark": true,
  "className": "[--paper:#191e20] [--card:#252e30] [--ink:#eef8f6] [--muted:#b0c5c0] [--line:#455853] [--accent:#86d0b9] [--accent-ink:#191e20] [--good:#80c79b] [--bad:#ff9994] [--display-font:ui-sans-serif,Cairo,sans-serif] [--arabic-heading:Cairo,system-ui,sans-serif] scheme-dark",
  "fonts": "System + Cairo",
  "styleAr": "بسيط ومركز",
  "styleEn": "Focused minimal"
 },
 {
  "id": "cherry",
  "ar": "كرز بالليل",
  "en": "Cherry at night",
  "dark": true,
  "className": "[--paper:#291920] [--card:#3b252e] [--ink:#fff0f5] [--muted:#d1afbd] [--line:#65404f] [--accent:#f2a4c0] [--accent-ink:#291920] [--good:#80c79b] [--bad:#ff9994] [--display-font:Fraunces,Amiri,Georgia,serif] [--arabic-heading:Cairo,system-ui,sans-serif] scheme-dark",
  "fonts": "Fraunces + Cairo",
  "styleAr": "دافي ومقروء",
  "styleEn": "Warm reading"
 }
] as const;
export const APPEARANCE_KEY='deutschy:appearance';
export function validAppearance(value:unknown):value is string{return typeof value==='string'&&appearanceThemes.some(t=>t.id===value)}
export function readAppearance(legacy=DEFAULT_APPEARANCE){try{const saved=accountMemory.getItem(APPEARANCE_KEY);return validAppearance(saved)?saved:validAppearance(legacy)?legacy:DEFAULT_APPEARANCE}catch{return validAppearance(legacy)?legacy:DEFAULT_APPEARANCE}}
export function applyAppearance(value:string){const theme=appearanceThemes.find(t=>t.id===value)??appearanceThemes[0];const root=document.documentElement;root.classList.remove(...appearanceThemes.flatMap(t=>t.className.split(' ')));root.classList.add(...theme.className.split(' '));root.dataset.theme=theme.id}
export function saveAppearance(value:string){if(!validAppearance(value))return false;try{accountMemory.setItem(APPEARANCE_KEY,value);applyAppearance(value);window.dispatchEvent(new Event('deutschy:appearance'));return true}catch{return false}}
