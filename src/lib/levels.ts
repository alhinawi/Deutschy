// Data model for all six CEFR levels. Only levels with status "live" have lessons; the rest are marked as upcoming.
export type LevelId = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type Level = { id: LevelId; status: 'live' | 'soon'; nameAr: string; descAr: string; plannedAr: string[]; nameEn: string; descEn: string; plannedEn: string[] };
const EN: Record<string, { n: string; d: string; p: string[] }> = {"A1": {"n": "Beginner", "d": "The basics: greetings, numbers, family, food, home, transport. You start speaking simple sentences.", "p": []}, "A2": {"n": "Elementary", "d": "Daily routine, shopping, travel, the simple past (Perfekt), talking about health and work.", "p": ["Perfekt (past tense)", "Prepositions with places", "Work and health", "Shopping and travel"]}, "B1": {"n": "Intermediate", "d": "Give opinions, tell experiences, and follow clear news and conversations.", "p": ["Subordinate clauses (weil, dass, wenn)", "Basic Konjunktiv II", "News and media", "Work and study"]}, "B2": {"n": "Upper intermediate", "d": "Complex discussions, articles and abstract topics with good fluency.", "p": ["Passive voice (Passiv)", "Konjunktiv I and reported speech", "Formal writing", "Society topics"]}, "C1": {"n": "Advanced", "d": "Speak and write precisely and with style, and understand long complex texts.", "p": ["Academic style", "Idiomatic expressions", "Literary texts"]}, "C2": {"n": "Mastery", "d": "Near-native level: fine shades of meaning and style.", "p": ["Fine shades of meaning", "Dialects and registers", "Translation and summarising"]}};

const base: Omit<Level, 'nameEn' | 'descEn' | 'plannedEn'>[] = [
  { id: 'A1', status: 'live', nameAr: 'مبتدئ', descAr: 'الأساسيات: التحيات، الأرقام، العيلة، الأكل، البيت، المواصلات. بتبدأ تتكلم جمل بسيطة.', plannedAr: [] },
  { id: 'A2', status: 'live', nameAr: 'أساسي', descAr: 'الروتين اليومي، التسوق، السفر، الماضي البسيط (Perfekt)، الحديث عن الصحة والشغل.', plannedAr: ['الماضي بـ Perfekt', 'حروف الجر مع الأماكن', 'الشغل والصحة', 'التسوق والسفر'] },
  { id: 'B1', status: 'live', nameAr: 'متوسط', descAr: 'تعبّر عن رأيك، تحكي تجارب، وتفهم الأخبار والمحادثات الواضحة.', plannedAr: ['جمل Nebensatz (weil, dass, wenn)', 'Konjunktiv II الأساسي', 'الأخبار والإعلام', 'العمل والدراسة'] },
  { id: 'B2', status: 'live', nameAr: 'فوق المتوسط', descAr: 'نقاشات معقدة، مقالات، ومواضيع مجردة بطلاقة مقبولة.', plannedAr: ['المبني للمجهول (Passiv)', 'Konjunktiv I والكلام المنقول', 'الكتابة الرسمية', 'مواضيع المجتمع'] },
  { id: 'C1', status: 'live', nameAr: 'متقدم', descAr: 'تتكلم وتكتب بدقة وأسلوب، وتفهم نصوص طويلة ومعقدة.', plannedAr: ['الأسلوب الأكاديمي', 'التعبيرات الاصطلاحية', 'النصوص الأدبية'] },
  { id: 'C2', status: 'live', nameAr: 'إتقان', descAr: 'مستوى قريب من الناطق الأصلي: فروق دقيقة في المعنى والأسلوب.', plannedAr: ['فروق المعنى الدقيقة', 'اللهجات والأساليب', 'الترجمة والتلخيص'] },
];
export const levels: Level[] = base.map((l) => ({ ...l, nameEn: EN[l.id].n, descEn: EN[l.id].d, plannedEn: EN[l.id].p }));
export const levelOf = (id: string) => levels.find((l) => l.id === id);
// Every topic in data/vocab.json belongs to a level; for now all existing topics are A1.
export const topicLevel = (_topic: string): LevelId => 'A1';
