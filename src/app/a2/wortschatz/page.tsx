import ThemeView from '@/components/ThemeView';
import { a2Themes } from '@/lib/a2-themes';
export const metadata = { title: 'A2 Wortschatz - Deutschy', description: 'Eight photographed vocabulary themes for A2 practice with articles, plurals, Egyptian Arabic meanings and mini-quizzes.' };
export default function Page() { return <ThemeView groups={a2Themes} a2 />; }
