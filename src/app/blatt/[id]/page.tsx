import { notFound } from 'next/navigation';
import PrintSheet from '@/components/PrintSheet';
import { sheets, sheetOf } from '@/lib/sheets';

export const dynamicParams = false;
export const generateStaticParams = () => sheets.map((s) => ({ id: s.id }));
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = sheetOf(id);
  return { title: s ? `${s.title[1]} – Deutschy` : 'Deutschy' };
}
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = sheetOf(id);
  if (!s) notFound();
  return <PrintSheet s={s} />;
}
