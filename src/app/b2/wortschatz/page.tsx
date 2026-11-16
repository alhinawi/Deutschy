import ThemeView from '@/components/ThemeView';
import { b2Themes } from '@/lib/b2-themes';
export const metadata = { title: 'B2 vocabulary themes - Deutschy', description: 'Eight photographed noun themes as starting points for B2 discussion, with Egyptian Arabic meanings, articles, plurals and mini-quizzes.', alternates: { canonical: '/b2/wortschatz/' }, openGraph: { title: 'B2 vocabulary themes - Deutschy', url: '/b2/wortschatz/', images: ['/og.png'] } };
export default function Page() { return <ThemeView groups={b2Themes} a2 practiceLevel="B2" />; }
