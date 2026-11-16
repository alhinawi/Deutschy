import { notFound } from 'next/navigation';
import GrammarView from '@/components/GrammarView';
import { grammar, grammarOf } from '@/lib/grammar';

export const dynamicParams = false;
export const generateStaticParams = () => grammar.map((g) => ({ id: g.id }));
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const g = grammarOf(id);
  return { title: g ? `${g.title[1]} – Deutschy` : 'Deutschy' };
}
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const g = grammarOf(id);
  if (!g) notFound();
  return <GrammarView g={g} />;
}
