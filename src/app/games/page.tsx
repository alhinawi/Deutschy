import Link from 'next/link';
import { T } from '@/lib/i18n';

export const metadata = { title: 'Games – Deutschy' };

const games = [
  { id: 'flashcards', t: 'Karteikarten', ar: 'كروت المراجعة', en: 'Flashcards', d: 'اقلب الكارت وقول لنفسك عرفتها ولا لأ. +2 XP للي تعرفه.', de: 'Flip the card and tell yourself if you knew it. +2 XP for each known word.' },
  { id: 'quiz', t: 'Bild-Quiz', ar: 'اختبار الصور', en: 'Picture quiz', d: 'صورة وأربع اختيارات. 10 أسئلة، +10 XP لكل إجابة صح.', de: 'One photo and four choices. 10 questions, +10 XP per correct answer.' },
  { id: 'article', t: 'der · die · das', ar: 'اختار الأداة', en: 'Pick the article', d: 'كلمة وتلات أدوات. الأداة الصح هي اللي بتفرق. +10 XP.', de: 'One word and three articles. The right article is what matters. +10 XP.' },
  { id: 'spelling', t: 'Buchstabieren', ar: 'اكتب الكلمة', en: 'Spell it', d: 'صورة وتكتب الكلمة بالألماني. +15 XP لكل كلمة صح.', de: 'See a photo and type the German word. +15 XP per correct word.' },
  { id: 'memory', t: 'Memory', ar: 'لعبة الذاكرة', en: 'Memory', d: 'طابق الصورة بالكلمة. كل ما قلّت المحاولات زاد السكور.', de: 'Match the photo to the word. Fewer tries means a higher score.' },
  { id: 'build', t: 'Satzbau', ar: 'رتّب الجملة', en: 'Build the sentence', d: 'رتّب كلمات الجملة بالألماني من الترجمة. +12 XP لكل جملة.', de: 'Put the German words in order from the translation. +12 XP per sentence.' },
  { id: 'dictation', t: 'Diktat', ar: 'املا واسمع', en: 'Dictation', d: 'اسمع الجملة واكتبها. +15 XP لكل جملة.', de: 'Listen to the sentence and type it. +15 XP per sentence.' },
  { id: 'listening', t: 'Hören', ar: 'اسمع واختار', en: 'Listening', d: 'اسمع الجملة واختار معناها الصح. +10 XP لكل جملة.', de: 'Listen to the sentence and pick its meaning. +10 XP per sentence.' },
];

export default function Games() {
  return (
    <div className="space-y-6">
      <h1 className="ar-title text-4xl font-bold"><T ar="ألعاب" en="Games" /></h1>
      <p className="text-muted"><T ar="كل لعبة بتجمّع XP وبتدخل في المتصدرين. الأصوات بتشتغل بس لما تضغط عليها." en="Every game earns XP and counts on the leaderboard. Sounds only play when you tap them." /></p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((g) => (
          <Link key={g.id} href={`/games/${g.id}/`} className="rounded-2xl border border-line bg-card p-6 hover:border-accent">
            <p className="de text-2xl font-semibold">{g.t}</p>
            <p className="ar-title text-xl text-accent"><T ar={g.ar} en={g.en} /></p>
            <p className="mt-2 text-muted"><T ar={g.d} en={g.de} /></p>
          </Link>
        ))}
      </div>
    </div>
  );
}
