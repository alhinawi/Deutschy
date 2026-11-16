import ThemeView from '@/components/ThemeView';
import { b1Themes } from '@/lib/b1-themes';
export const metadata = { title: 'B1 vocabulary themes - Deutschy', description: 'Eight photographed noun themes for B1 practice with Egyptian Arabic meanings, articles, plurals and mini-quizzes. Includes revision, not an official exam list.', alternates: { canonical: '/b1/wortschatz/' }, openGraph: { title: 'B1 vocabulary themes - Deutschy', images: ['/og.png'] } };
export default function Page() { return <ThemeView groups={b1Themes} a2 practiceLevel="B1" />; }
