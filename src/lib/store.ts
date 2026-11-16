'use client';
import { useEffect, useState, useCallback } from 'react';

export type Score = { game: string; score: number; at: number; name: string };
export type State = {
  xp: number; streak: number; best: number; lastDay: string; name: string;
  seen: Record<string, { ok: number; bad: number }>; scores: Score[]; theme: string;
  daily: Record<string, number>; goal: number; srs: Record<string, { b: number; due: number }>;
};
const KEY = 'deutschy:v1';
const empty: State = { xp: 0, streak: 0, best: 0, lastDay: '', name: '', seen: {}, scores: [], theme: 'papier', daily: {}, goal: 50, srs: {} };
const day = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export const load = (): State => {
  try { return { ...empty, ...(JSON.parse(localStorage.getItem(KEY) ?? '{}') as Partial<State>) }; } catch { return empty; }
};
const save = (s: State) => { localStorage.setItem(KEY, JSON.stringify(s)); window.dispatchEvent(new Event('deutschy:update')); };

let loggedIn = false;
export const setLoggedIn = (v: boolean) => { loggedIn = v; };
export function mergeRemote(r: { xp: number; streak: number; best: number; lastDay: string; data?: { seen?: State['seen']; name?: string } }) {
  const cur = load();
  const merged: State = { ...cur, xp: Math.max(cur.xp, r.xp), best: Math.max(cur.best, r.best, cur.streak, r.streak) };
  if ((r.lastDay ?? '') > cur.lastDay) { merged.lastDay = r.lastDay; merged.streak = r.streak; } else merged.streak = cur.streak;
  const seen = { ...(r.data?.seen ?? {}) };
  for (const [k, v] of Object.entries(cur.seen)) { const o = seen[k]; seen[k] = o ? { ok: Math.max(o.ok, v.ok), bad: Math.max(o.bad, v.bad) } : v; }
  merged.seen = seen;
  if (!merged.name && r.data?.name) merged.name = r.data.name;
  save(merged);
}

export const today = () => day();
export const level = (xp: number) => Math.floor(Math.sqrt(xp / 50)) + 1;
export const levelFloor = (l: number) => (l - 1) * (l - 1) * 50;

export function useStore() {
  const [s, setS] = useState<State>(empty);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const r = () => setS(load());
    r(); setReady(true);
    window.addEventListener('deutschy:update', r);
    window.addEventListener('storage', r);
    return () => { window.removeEventListener('deutschy:update', r); window.removeEventListener('storage', r); };
  }, []);
  const award = useCallback((xp: number, wordId?: string, ok?: boolean) => {
    const cur = load();
    const today = day();
    if (cur.lastDay !== today) {
      const y = new Date(); y.setDate(y.getDate() - 1);
      cur.streak = cur.lastDay === day(y) ? cur.streak + 1 : 1;
      cur.best = Math.max(cur.best, cur.streak);
      cur.lastDay = today;
    }
    cur.xp += xp;
    if (xp > 0) { cur.daily = { ...cur.daily, [today]: (cur.daily[today] ?? 0) + xp }; }
    if (wordId && ok !== undefined) {
      const w = cur.seen[wordId] ?? { ok: 0, bad: 0 };
      if (ok) w.ok++; else w.bad++;
      cur.seen[wordId] = w;
    }
    save(cur);
  }, []);
  const addScore = useCallback((game: string, score: number) => {
    const cur = load();
    cur.scores = [...cur.scores, { game, score, at: Date.now(), name: cur.name || 'أنا' }].slice(-200);
    if (loggedIn) fetch('/api/me/score', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ game, score }) }).catch(() => {});
    save(cur);
  }, []);
  const setCard = useCallback((id: string, card: { b: number; due: number }) => {
    const cur = load();
    cur.srs = { ...cur.srs, [id]: card };
    save(cur);
  }, []);
  const patch = useCallback((p: Partial<State>) => { save({ ...load(), ...p }); }, []);
  return { s, ready, award, addScore, patch, setCard };
}

export function useAuth() {
  const [user, setUser] = useState<{ email: string; name: string; picture: string; isAdmin: boolean } | null | undefined>(undefined);
  useEffect(() => {
    fetch('/api/auth/me', { cache: 'no-store' }).then((r) => r.json()).then((j) => setUser(j.user ?? null)).catch(() => setUser(null));
  }, []);
  return user;
}
