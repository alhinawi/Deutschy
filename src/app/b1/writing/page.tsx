import WritingView from '@/components/WritingView';
export const metadata = { title: 'B1 writing practice - Deutschy', description: 'Seven guided B1 writing tasks with Egyptian Arabic tips, saved drafts, model answers and phrase checklists, not automatic language grading.', alternates: { canonical: '/b1/writing/' }, openGraph: { url: '/b1/writing/', title: 'B1 writing practice - Deutschy', images: ['/og.png'] } };
export default function Page() { return <WritingView onlyLevel="B1" />; }
