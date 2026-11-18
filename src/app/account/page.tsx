'use client';
import { useEffect, useState } from 'react';
import {flushAccountState,stateStatus} from '@/lib/account-memory';
import { useT } from '@/lib/i18n';

type U = { email: string; name: string; picture: string; isAdmin: boolean };
const errs: Record<string, [string, string]> = {
  bad_email: ['الإيميل مش مظبوط', 'That email does not look right'],
  weak_password: ['الباسورد لازم يكون 8 حروف على الأقل', 'Password must be at least 8 characters'],
  email_taken: ['الإيميل ده متسجل قبل كده. ادخل بيه.', 'This email is already registered. Sign in instead.'],
  bad_credentials: ['الإيميل أو الباسورد غلط', 'Wrong email or password'],
  use_google: ['الحساب ده متسجل بجوجل. استخدم زرار جوجل.', 'This account uses Google. Use the Google button.'],
  not_configured: ['الحسابات مش شغالة دلوقتي', 'Accounts are not available right now'],
};

export default function Account() {
  const t = useT();
  const [user, setUser] = useState<U | null | undefined>(undefined);
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    fetch('/api/auth/me', { cache: 'no-store' }).then((r) => r.json()).then((j) => setUser(j.user ?? null)).catch(() => setUser(null));
    if (new URLSearchParams(location.search).get('login') === 'failed') setErr('google');
  }, []);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(''); setBusy(true);
    try {
      const r = await fetch(`/api/auth/${mode}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email, password, name }) });
      const j = await r.json();
      if (!r.ok) { setErr(j.error ?? 'bad_credentials'); return; }
      location.href = '/';
    } catch { setErr('not_configured'); } finally { setBusy(false); }
  }
  const field = 'w-full rounded-xl border border-line bg-card px-4 py-3 text-base outline-none focus:border-accent';
  if (user === undefined) return <p className="text-muted">…</p>;
  if (user) {
    return (
      <div className="mx-auto max-w-md space-y-6">
        <h1 className="ar-title text-4xl font-bold">{t('حسابي', 'My account')}</h1>
        <div className="space-y-1 rounded-2xl border border-line bg-card p-5">
          <p className="text-xl font-bold">{user.name}</p>
          <p className="num text-muted" dir="ltr">{user.email}</p>
          <p className="pt-2 text-sm text-muted">{t('تقدمك بيتحفظ على حسابك وتقدر تكمل من أي جهاز.', 'Your progress is saved to your account, so you can continue on any device.')}</p>
        </div>
        <button onClick={async () => { await flushAccountState(); if(['saving','error','conflict'].includes(stateStatus().status)&&!window.confirm(t('فيه تغييرات لسه متحفظتش في الحساب. انسخ شغلك الأول. تخرج من غير حفظ؟','Some changes are not saved to the account. Copy your work first. Sign out without saving?')))return;const r=await fetch('/api/auth/logout', { method: 'POST' });if(r.ok)location.href = '/';else window.alert(t('الخروج مكملش. جرّب تاني.','Sign-out did not finish. Try again.')); }} className="rounded-full border border-line px-5 py-2.5 font-bold hover:bg-card">{t('تسجيل الخروج', 'Sign out')}</button>
      </div>
    );
  }
  const msg = err === 'google' ? t('تسجيل الدخول بجوجل ماكملش. جرّب تاني.', 'Google sign-in did not finish. Please try again.') : err && errs[err] ? t(...errs[err]) : err ? t('حصلت مشكلة. جرّب تاني.', 'Something went wrong. Try again.') : '';
  return (
    <div className="mx-auto max-w-md space-y-6">
      <h1 className="ar-title text-4xl font-bold">{mode === 'login' ? t('تسجيل الدخول', 'Sign in') : t('حساب جديد', 'Create account')}</h1>
      <p className="text-sm text-muted">{t('سجّل دخول قبل ما تبدأ لو عايز حفظ. تدريب الضيف في التبويب بس وبيتمسح عند إعادة التحميل، بما فيها تسجيل الدخول. أي سجل قديم على الجهاز متساب من غير تعديل.','Sign in before starting if you want saving. Guest work is only in this tab and clears on reload, including sign-in. Any older device record is left untouched.')}</p>
      <a href="/api/auth/google" className="flex items-center justify-center gap-3 rounded-full border border-line bg-card px-5 py-3 font-bold hover:border-accent">
        <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.700 2.400 30.200 0 24 0 14.600 0 6.500 5.400 2.600 13.200l7.800 6.100C12.300 13.600 17.700 9.500 24 9.500z" /><path fill="#4285F4" d="M46.500 24.500c0-1.600-.1-3.100-.4-4.500H24v9h12.700c-.6 3-2.300 5.500-4.800 7.200l7.500 5.800c4.400-4.100 7.100-10.100 7.100-17.500z" /><path fill="#FBBC05" d="M10.400 28.700c-.5-1.400-.8-3-.8-4.700s.3-3.300.8-4.700l-7.800-6.100C.9 16.400 0 20.100 0 24s.9 7.600 2.600 10.800l7.800-6.100z" /><path fill="#34A853" d="M24 48c6.200 0 11.400-2 15.200-5.500l-7.500-5.800c-2.100 1.400-4.700 2.300-7.700 2.300-6.300 0-11.700-4.100-13.600-9.800l-7.800 6.100C6.500 42.600 14.600 48 24 48z" /></svg>
        {t('كمّل بجوجل', 'Continue with Google')}
      </a>
      <p className="text-center text-sm text-muted">{t('أو بالإيميل', 'or with email')}</p>
      <form onSubmit={submit} className="space-y-3">
        {mode === 'register' && <input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder={t('الاسم', 'Name')} autoComplete="name" maxLength={40} />}
        <input className={field} dir="ltr" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" autoComplete="email" />
        <input className={field} dir="ltr" type="password" required minLength={mode === 'register' ? 8 : 1} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t('الباسورد', 'Password')} autoComplete={mode === 'login' ? 'current-password' : 'new-password'} />
        {msg && <p role="alert" className="text-sm font-semibold text-bad">{msg}</p>}
        <button disabled={busy} className="w-full rounded-full bg-accent py-3 font-bold text-accent-ink disabled:opacity-60">{mode === 'login' ? t('دخول', 'Sign in') : t('إنشاء الحساب', 'Create account')}</button>
      </form>
      <button onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setErr(''); }} className="w-full text-center text-sm font-bold text-accent">
        {mode === 'login' ? t('معندكش حساب؟ سجّل دلوقتي', 'No account yet? Register') : t('عندك حساب؟ ادخل', 'Already have an account? Sign in')}
      </button>
    </div>
  );
}
