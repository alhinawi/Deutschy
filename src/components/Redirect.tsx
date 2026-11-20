'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
export default function Redirect({ to }: { to: string }) {
  const t = useT();
  useEffect(() => { window.location.replace(to); }, [to]);
  return <p role="status" className="p-6 text-muted">{t('الصفحة اتحدثت. بنحوّلك دلوقتي...','This page was updated. Redirecting...')}{' '}<Link href={to} className="underline">{t('افتحها من هنا لو ما اتحوّلتش','Open it here if nothing happens')}</Link></p>;
}
