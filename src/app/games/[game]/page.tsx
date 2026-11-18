import GameAcademy191 from '@/components/GameAcademy191';
import {modes191} from '@/lib/game-academy191';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import GameRunner from '@/components/GameRunner';
import SatzbauGame from '@/components/SatzbauGame';
import SentenceGames from '@/components/SentenceGames';

const ids = ['flashcards', 'quiz', 'article', 'spelling', 'memory', 'build', 'dictation', 'listening', 'satzbau',...modes191.map(m=>m.id)];
export const dynamicParams = false;
export const generateStaticParams = () => ids.map((game) => ({ game }));

export default async function GamePage({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params;
  if (!ids.includes(game)) notFound();
  if (modes191.some(m=>m.id===game)) return <GameAcademy191 game={game} />;
  if (game === 'satzbau') return <SatzbauGame />;
  if (game === 'build' || game === 'dictation' || game === 'listening') return <SentenceGames game={game} />;
  return <Suspense fallback={null}><GameRunner game={game} /></Suspense>;
}
