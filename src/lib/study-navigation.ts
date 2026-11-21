import {sidebar,type NavItem} from './nav';
export type StudyNavSection={id:string;ar:string;en:string;items:NavItem[];groups?:{id:string;ar:string;en:string;items:NavItem[]}[]};
const all=sidebar.flatMap(g=>g.items),used=new Set<string>();
function take(paths:string[]){return paths.flatMap(href=>{const item=all.find(i=>i.href===href);if(!item||used.has(href))return[];used.add(href);return[item]})}
const dashboard=take(['/']);const courses=take(['/levels/','/lernpfad/','/start/','/weekly-plan/',...all.filter(i=>/^\/levels\/|^\/(a2|b1|b2|c1|c2)\//.test(i.href)).map(i=>i.href)]);
const academies=[
 {id:'grammar',ar:'أكاديمية الجرامر',en:'Grammar academy',paths:['/grammar/','/grammar-map/','/learn/','/verbs/','/conjugation/','/praesens/','/verbs/trainer/','/perfekt/','/trennbare-verben/','/zahlen/','/adjektivendungen/','/kasus/','/case-lab/','/praepositionen/','/negation/','/word-formation/','/pitfalls/']},
 {id:'words',ar:'أكاديمية الكلمات',en:'Vocabulary academy',paths:['/lessons/','/woerter/','/animals/','/food/','/drinks/','/wortschatz/','/practical-words/','/context-packs/']},
 {id:'conversation',ar:'أكاديمية المحادثة',en:'Conversation academy',paths:['/conversation/','/speaking-cards/','/egypt-dialogues/','/dialogues/']},
 {id:'listening',ar:'أكاديمية الاستماع',en:'Listening academy',paths:['/dictation/','/shadowing/']},
 {id:'reading',ar:'أكاديمية القراءة',en:'Reading academy',paths:['/reading/','/micro-reading/']},
 {id:'writing',ar:'أكاديمية الكتابة',en:'Writing academy',paths:['/writing/','/writing-frames/']},
 {id:'pronunciation',ar:'أكاديمية النطق',en:'Pronunciation academy',paths:['/pronunciation/','/speaking/','/sound-contrasts/']},
].map(g=>({...g,items:take(g.paths)}));
const phrases=take(['/sentences/','/redewendungen/']);const practice=take(['/games/','/exam/','/level-check/','/review/daily/','/review/words/','/timed-practice/','/verbs/quiz/','/daily/']);const leaderboard=take(['/leaderboard/']);
export const studyNavigation:StudyNavSection[]=[{id:'dashboard',ar:'الرئيسية',en:'Home',items:dashboard},{id:'courses',ar:'الكورسات الشاملة',en:'Courses',items:courses},...academies.map(g=>({id:'academy-'+g.id,ar:g.ar,en:g.en,items:g.items})),{id:'phrases',ar:'بنوك العبارات',en:'Phrase banks',items:phrases},{id:'practice',ar:'التدريبات',en:'Practice',items:practice},{id:'leaderboard',ar:'لوحة المتصدرين',en:'Leaderboard',items:leaderboard}];
export const personalNavigation=take(['/progress/','/badges/','/helper/','/settings/','/account/','/admin/']);
export const unmappedNavigation=all.filter(i=>!used.has(i.href));
