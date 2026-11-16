import { notFound } from 'next/navigation';
import { readings, readingOf } from '@/lib/reading';
import ReadingView from '@/components/ReadingView';

export const dynamicParams = false;
export const generateStaticParams = () => readings.map((r) => ({ id: r.id }));
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const r = readingOf(id);
  if (!r) notFound();
  return <ReadingView r={r} />;
}
