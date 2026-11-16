import { notFound } from 'next/navigation';
import SheetView from '@/components/SheetView';
import { grammar, grammarOf } from '@/lib/grammar';

export const dynamicParams = false;
export const generateStaticParams = () => grammar.map((g) => ({ id: g.id }));
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const g = grammarOf(id);
  return { title: g ? `${g.title[1]} cheat sheet – Deutschy` : 'Deutschy' };
}
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const g = grammarOf(id);
  if (!g) notFound();
  return <SheetView g={g} />;
}
