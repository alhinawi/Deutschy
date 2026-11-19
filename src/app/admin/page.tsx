'use client';
import { useT } from '@/lib/i18n';
import { useEffect, useState } from 'react';
import { useAuth, useStore } from '@/lib/store';
import { words, topics } from '@/lib/data';
import Link from 'next/link';



export default function Admin() {
  const user = useAuth();
  const { s, patch } = useStore();
  const [ok, setOk] = useState<boolean | null>(null);
  const [st, setSt] = useState<any>(null);
  useEffect(() => {
    if (user === undefined) return;
    if (!user) { setOk(false); return; }
    fetch('/api/admin/ping', { cache: 'no-store' }).then((r) => { setOk(r.ok); if (r.ok) fetch('/api/admin/stats', { cache: 'no-store' }).then((x) => x.json()).then(setSt).catch(() => {}); }).catch(() => setOk(false));
  }, [user]);

  const t = useT();
  if (user === undefined || ok === null) return <p className="text-muted">…</p>;
  if (!ok) {
    return (
      <div className="mx-auto max-w-md space-y-3 rounded-2xl border border-line bg-card p-8 text-center">
        <h1 className="ar-title text-2xl font-bold">{t('الصفحة دي مش متاحة', 'This page is not available')}</h1>
        {!user && <a href="/account/" className="inline-block rounded-full bg-accent px-5 py-2.5 font-bold text-accent-ink">{t('دخول', 'Sign in')}</a>}
      </div>
    );
  }
  return (
    <div className="space-y-8">
      <h1 className="ar-title text-4xl font-bold">{t('لوحة التحكم', 'Admin dashboard')}</h1>
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-line bg-card p-5"><p className="text-sm text-muted">{t('كلمات بصور', 'Words with photos')}</p><p className="num text-4xl font-bold">{words.length}</p></div>
        <div className="rounded-2xl border border-line bg-card p-5"><p className="text-sm text-muted">{t('دروس', 'Lessons')}</p><p className="num text-4xl font-bold">{topics.length}</p></div>
        <div className="rounded-2xl border border-line bg-card p-5"><p className="text-sm text-muted">{t('XP عندك', 'Your XP')}</p><p className="num text-4xl font-bold">{s.xp}</p></div>
      </section>
      {st && (
        <section className="space-y-4">
          <h2 className="ar-title text-2xl font-bold">{t('المستخدمين', 'Users')}</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[[t('حسابات', 'Accounts'), st.users], [t('جوجل', 'Google'), st.google], [t('آخر 7 أيام', 'Last 7 days'), st.week], [t('إجمالي XP', 'Total XP'), st.xp], [t('نتايج ألعاب', 'Game scores'), st.games]].map(([l, v]) => (
              <div key={String(l)} className="rounded-2xl border border-line bg-card p-4"><p className="text-xs text-muted">{l}</p><p className="num text-3xl font-bold">{v}</p></div>
            ))}
          </div>
          <div className="rounded-2xl border border-line bg-card p-4">
            <p className="mb-2 text-sm font-bold">{t('آخر المسجلين', 'Recent sign-ups')}</p>
            {st.recent.length === 0 && <p className="text-sm text-muted">{t('لسه مفيش', 'None yet')}</p>}
            <ul className="space-y-1 text-sm">
              {st.recent.map((r: any, i: number) => (
                <li key={i} className="flex justify-between gap-2"><span dir="ltr" className="truncate">{r.name} · {r.email}</span><span className="num shrink-0 text-muted">{new Date(r.created_at).toISOString().slice(0, 10)}</span></li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <section>
        <h2 className="ar-title mb-3 text-2xl font-bold">{t('الثيمات', 'Themes')}</h2>
        <Link href="/settings/" className="inline-flex min-h-12 items-center rounded-xl border border-line px-4 font-bold underline">{t('اختار شكل الموقع من الإعدادات','Choose the site theme in settings')}</Link>
        <p className="mt-3 text-sm text-muted">{t('الثيمات متاحة لكل الناس. اختيارك على المتصفح ده بس، من غير تغيير تقدم المذاكرة.','Themes are available to everyone. Your choice stays in this browser without changing study progress.')}</p>
      </section>
    </div>
  );
}
