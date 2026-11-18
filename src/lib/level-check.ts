import {accountMemory} from './account-memory';
import { grammar } from './grammar';
import { exercises } from './exercises';
import { readings } from './reading';
import { b1Grammar } from './b1-grammar';
import { b2Grammar } from './b2-grammar';
import { c1Grammar } from './c1-grammar';
import { c2Grammar } from './c2-grammar';
import { sample } from './data';
export const CHECK_LEVELS = ['A1','A2','B1','B2','C1','C2'] as const;
export type CheckLevel = typeof CHECK_LEVELS[number];
export type CheckQuestion = { key: string; kind: 'grammar' | 'reading'; prompt: string; options: string[]; context?: string; explanation?: [string,string]; href: string };
export type CheckResult = { id: string; level: CheckLevel; at: number; correct: number; total: number; grammar: { correct: number; total: number }; reading: { correct: number; total: number } };
export function checkBank(level: CheckLevel): CheckQuestion[] {
 const out: CheckQuestion[] = [];
 for (const g of grammar.filter((g) => g.level === level)) (exercises[g.id] ?? []).forEach((ex,i) => out.push({ key: `g:${g.id}:${i}`, kind: 'grammar', prompt: ex[0], options: ex.slice(1,4), explanation: [ex[4],ex[5]], href: `/grammar/${g.id}/` }));
 const drill = level === 'B1' ? b1Grammar : level === 'B2' ? b2Grammar : level === 'C1' ? c1Grammar : level === 'C2' ? c2Grammar : [];
 for (const d of drill) for (const row of d.rows) out.push({ key: `${level.toLowerCase()}:${d.id}:${row[0]}`, kind: 'grammar', prompt: row[0], options: row.slice(1), explanation: [d.ar,d.en], href: `/${level.toLowerCase()}/` });
 for (const r of readings.filter((r) => r.level === level)) r.q.forEach((q,i) => out.push({ key: `r:${r.id}:${i}`, kind: 'reading', prompt: q[0], options: q.slice(1), context: r.de.join('\n\n'), href: `/reading/${r.id}/` }));
 return out;
}
export function buildCheck(level: CheckLevel): CheckQuestion[] {
 const bank = checkBank(level);
 return sample([...sample(bank.filter((q) => q.kind === 'grammar'),10), ...sample(bank.filter((q) => q.kind === 'reading'),6)],16);
}
export function resultFor(id: string, level: CheckLevel, questions: CheckQuestion[], answers: string[], at = Date.now()): CheckResult {
 const score = (kind: CheckQuestion['kind']) => ({ correct: questions.filter((q,i) => q.kind === kind && answers[i] === q.options[0]).length, total: questions.filter((q) => q.kind === kind).length });
 return { id, level, at, correct: questions.filter((q,i) => answers[i] === q.options[0]).length, total: questions.length, grammar: score('grammar'), reading: score('reading') };
}
export const CHECK_KEY = 'deutschy:level-check:v1';
export function readResults(): CheckResult[] {
 try { const data = JSON.parse(accountMemory.getItem(CHECK_KEY) ?? '[]'); return Array.isArray(data) ? data.filter((r) => r && CHECK_LEVELS.includes(r.level) && typeof r.at === 'number' && r.total > 0 && r.correct >= 0 && r.correct <= r.total).slice(-50) : []; } catch { return []; }
}
export function saveResult(result: CheckResult) {
 const results = readResults();
 if (!results.some((r) => r.id === result.id)) accountMemory.setItem(CHECK_KEY,JSON.stringify([...results,result].slice(-50)));
}
