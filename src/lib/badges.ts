import type { State } from './store';
export type Badge = { id: string; ar: string; en: string; got: number; target: number; unit: 'XP' | 'days' | 'answers'; earned: boolean };
export function badges(s: State): Badge[] {
  const right = Object.values(s.seen).reduce((n, v) => n + v.ok, 0);
  const best = Math.max(s.best, s.streak);
  const groups: { key: string; got: number; goals: number[]; unit: Badge['unit']; ar: string; en: string }[] = [
    { key: 'xp', got: s.xp, goals: [100, 500, 2000], unit: 'XP', ar: 'نقط خبرة', en: 'Experience points' },
    { key: 'streak', got: best, goals: [3, 7, 30], unit: 'days', ar: 'أيام ورا بعض', en: 'Consecutive days' },
    { key: 'answers', got: right, goals: [10, 100], unit: 'answers', ar: 'إجابات صح', en: 'Correct answers' },
  ];
  return groups.flatMap((g) => g.goals.map((target) => ({ id: `${g.key}-${target}`, ar: g.ar, en: g.en, got: g.got, target, unit: g.unit, earned: g.got >= target })));
}
export function currentStreak(s: State, date = new Date()) {
  const key = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const yesterday = new Date(date); yesterday.setDate(yesterday.getDate() - 1);
  return s.lastDay === key(date) || s.lastDay === key(yesterday) ? s.streak : 0;
}
