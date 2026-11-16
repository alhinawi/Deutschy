import WritingView from '@/components/WritingView';
export const metadata = { title: 'B2 writing practice - Deutschy', description: 'Seven guided B2 tasks for balanced arguments, proposals and formal feedback, with Egyptian tips and model answers.', alternates: { canonical: '/b2/writing/' }, openGraph: { title: 'B2 writing practice - Deutschy', url: '/b2/writing/', images: ['/og.png'] } };
export default function Page() { return <WritingView onlyLevel="B2" />; }
