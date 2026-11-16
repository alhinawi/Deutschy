import { notFound } from 'next/navigation';
import VerbView from '@/components/VerbView';
import { verbs, slug } from '@/lib/verbs';

export const dynamicParams = false;
export const generateStaticParams = () => verbs.map((v) => ({ id: slug(v.inf) }));
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const v = verbs.find((x) => slug(x.inf) === id);
  return { title: v ? `${v.inf} – Deutschy` : 'Deutschy' };
}
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const v = verbs.find((x) => slug(x.inf) === id);
  if (!v) notFound();
  return <VerbView v={v} />;
}
