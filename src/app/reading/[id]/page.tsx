import { notFound } from 'next/navigation';
import { readings, readingOf } from '@/lib/reading';
import ReadingView from '@/components/ReadingView';

export const dynamicParams = false;
export const generateStaticParams = () => readings.map((r) => ({ id: r.id }));
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const r = readingOf(id);
  if (!r) return {};
  const title = `${r.title[0]} - ${r.level} Lesen - Deutschy`;
  const description = r.de[0].slice(0, 155);
  return { title, description, alternates: { canonical: `/reading/${r.id}/` }, openGraph: { title, description, url: `/reading/${r.id}/`, images: ['/og.png'] } };
}
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const r = readingOf(id);
  if (!r) notFound();
  return <ReadingView r={r} />;
}
