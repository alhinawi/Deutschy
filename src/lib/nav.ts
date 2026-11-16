export type NavItem = { href: string; ar: string; en: string; tag?: string; admin?: boolean };
export type NavGroup = { id: string; ar: string; en: string; items: NavItem[] };
export const sidebar: NavGroup[] = [
  { id: 'learn', ar: 'ابدأ', en: 'Start', items: [
    { href: '/', ar: 'الرئيسية', en: 'Home' },
    { href: '/levels/', ar: 'كل المستويات', en: 'All levels' },
  ] },
  { id: 'levels', ar: 'المستويات', en: 'Levels', items: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((l) => ({ href: `/levels/${l}/`, ar: `المستوى ${l}`, en: `Level ${l}`, tag: l })) },
  { id: 'content', ar: 'الموسوعة', en: 'Encyclopedia', items: [
    { href: '/grammar/', ar: 'أكاديمية القواعد', en: 'Grammar academy' },
    { href: '/verbs/', ar: 'الأفعال والتصريف', en: 'Verbs' },
    { href: '/verbs/quiz/', ar: 'اختبار الأفعال', en: 'Verb quiz' },
    { href: '/reading/', ar: 'القراءة', en: 'Reading' },
    { href: '/lessons/', ar: 'المفردات بالموضوع', en: 'Vocabulary by topic' },
    { href: '/learn/', ar: 'أساسيات', en: 'Basics' },
  ] },
  { id: 'play', ar: 'العب', en: 'Play', items: [
    { href: '/games/', ar: 'الألعاب', en: 'Games' },
    { href: '/leaderboard/', ar: 'المتصدرين', en: 'Leaderboard' },
  ] },
  { id: 'me', ar: 'حسابي', en: 'Account', items: [
    { href: '/account/', ar: 'الحساب', en: 'Account' },
    { href: '/admin/', ar: 'لوحة التحكم', en: 'Admin', admin: true },
    { href: '/credits/', ar: 'حقوق الصور', en: 'Photo credits' },
  ] },
];
