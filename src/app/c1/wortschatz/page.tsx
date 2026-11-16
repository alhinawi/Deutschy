import ThemeView from '@/components/ThemeView';
import { c1Themes } from '@/lib/c1-themes';
export const metadata = { title: 'C1 vocabulary themes - Deutschy', description: 'Eight photographed noun themes as starting points for C1 discussion, with Egyptian Arabic meanings, articles, plurals and mini-quizzes.', alternates: { canonical: '/c1/wortschatz/' }, openGraph: { title: 'C1 vocabulary themes - Deutschy', url: '/c1/wortschatz/', images: ['/og.png'] } };
export default function Page() { return <ThemeView groups={c1Themes} a2 practiceLevel="C1" />; }
