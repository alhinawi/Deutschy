'use client';
import { useT } from '@/lib/i18n';
import GameSoundControl from './GameSoundControl';
import PwaStatus from './PwaStatus';
export default function SoundInstallSettings() {
  const t = useT();
  return (
    <article className="mx-auto max-w-2xl space-y-5">
      <header className="space-y-3">
        <h2 className="ar-title text-4xl font-bold">{t('الصوت والتثبيت', 'Sound and installation')}</h2>
        <p>{t('أصوات التفاعل وتثبيت الموقع والتحديثات من هنا.', 'Interaction sounds, site installation and updates live here.')}</p>
      </header>
      <section className="space-y-4 rounded-2xl border border-line bg-card p-5">
        <GameSoundControl />
        <p className="text-sm text-muted">{t('الصوت المصنّع: ', 'Synthesized speech: ')}<a href="https://elevenlabs.io" className="underline" title="German synthesized speech | elevenlabs.io">elevenlabs.io</a>{t('، مش تسجيل بشري. حسب توفر الكلمة والصوت المختار.', '; not a human recording. Availability depends on the phrase and selected voice.')}</p>
      </section>
      <PwaStatus />
    </article>
  );
}
