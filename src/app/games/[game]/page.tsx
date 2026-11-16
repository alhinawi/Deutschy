import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import GameRunner from '@/components/GameRunner';
import SentenceGames from '@/components/SentenceGames';

const ids = ['flashcards', 'quiz', 'article', 'spelling', 'memory', 'build', 'dictation'];
export const dynamicParams = false;
export const generateStaticParams = () => ids.map((game) => ({ game }));

export default async function GamePage({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params;
  if (!ids.includes(game)) notFound();
  if (game === 'build' || game === 'dictation') return <SentenceGames game={game} />;
  return <Suspense fallback={null}><GameRunner game={game} /></Suspense>;
}
