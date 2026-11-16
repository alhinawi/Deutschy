import ThemeView from '@/components/ThemeView';
import { c2Themes } from '@/lib/c2-themes';
export const metadata = { title: 'C2 vocabulary themes - Deutschy', description: 'Eight photographed noun themes as starting points for C2 discussion, with Egyptian Arabic meanings, articles, plurals and mini-quizzes.', alternates: { canonical: '/c2/wortschatz/' }, openGraph: { title: 'C2 vocabulary themes - Deutschy', url: '/c2/wortschatz/', images: ['/og.png'] } };
export default function Page() { return <ThemeView groups={c2Themes} a2 practiceLevel="C2" />; }
