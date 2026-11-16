import CertificateView from '@/components/CertificateView';
export const dynamicParams = false;
export const generateStaticParams = () => ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level) => ({ level }));
export default async function Page({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  return <CertificateView level={level} />;
}
