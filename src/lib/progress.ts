import {checkpointState} from './completion';
import { grammar } from './grammar';
import { exercises } from './exercises';
import { readings } from './reading';
import { words, topics } from './data';
import type { State } from './store';
import type { Lvl } from './grammar-types';

export const LEVELS: Lvl[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
export const PASS = 0.8;

// Share of a level's practice questions answered correctly at least once.
export function levelProgress(s: State, l: Lvl) {
  let total = 0, got = 0;
  for (const g of grammar.filter((x) => x.level === l)) {
    const n = (exercises[g.id] ?? []).length;
    total += n;
    for (let i = 0; i < n; i++) if ((s.seen[`g:${g.id}:${i}`]?.ok ?? 0) > 0) got++;
  }
  return { total, got, ratio: total ? got / total : 0, passed: total > 0 && got / total >= PASS };
}
export function wordProgress(s: State) {
  const known = words.filter((w) => (s.seen[w.id]?.ok ?? 0) > 0).length;
  return { known, total: words.length };
}
export function readingProgress(s: State) {
  let total = 0, got = 0;
  for (const r of readings) for (let i = 0; i < r.q.length; i++) { total++; if ((s.seen[`r:${r.id}:${i}`]?.ok ?? 0) > 0) got++; }
  return { total, got };
}
export { accuracy, cardsKnown, challengeDays } from './progress-lite';
export const topicCount = topics.length;

import { dialogues } from './dialogues';
import { writingTasks } from './writing';

const frac = (got: number, total: number) => ({ got, total });
// Skills covered per level, from device data only
export function skills(s: State, l: Lvl) {
  const g = levelProgress(s, l);
  let rg = 0, rt = 0;
  for (const r of readings.filter((x) => x.level === l)) for (let i = 0; i < r.q.length; i++) { rt++; if ((s.seen[`r:${r.id}:${i}`]?.ok ?? 0) > 0) rg++; }
  let dg = 0, dt = 0;
  for (const d of dialogues.filter((x) => x.level === l)) for (let i = 0; i < d.q.length; i++) { dt++; if ((s.seen[`d:${d.id}:${i}`]?.ok ?? 0) > 0) dg++; }
  const wt = writingTasks.filter((x) => x.level === l);
  const wg = wt.filter((x) => (s.seen[`w:${x.id}`]?.ok ?? 0) > 0).length;
  return { grammar: frac(g.got, g.total), reading: frac(rg, rt), dialogue: frac(dg, dt), writing: frac(wg, wt.length), exam: s.exams?.[l] };
}

// Lernpfad: ordered A1 roadmap. Progress comes only from device data.
export type Step = { id: string; href: string; ar: string; en: string; kind: 'count' | 'ratio' | 'checkpoint'; goal?: number };
export const PATH: Step[] = [
  { id: 'pron', href: '/pronunciation/', ar: 'النطق والحروف', en: 'Pronunciation and letters', kind: 'checkpoint' },
  { id: 'learn', href: '/learn/', ar: 'الأساسيات', en: 'Basics', kind: 'checkpoint' },
  { id: 'vocab', href: '/lessons/', ar: 'كلمات الحياة اليومية (200 كلمة)', en: 'Everyday vocabulary (200 words)', kind: 'count', goal: 200 },
  { id: 'zahlen', href: '/zahlen/', ar: 'الأرقام والساعة والتاريخ', en: 'Numbers, time, dates', kind: 'count', goal: 15 },
  { id: 'praesens', href: '/praesens/', ar: 'تصريف الأفعال الأساسية', en: 'Core verbs (Präsens)', kind: 'count', goal: 10 },
  { id: 'kasus', href: '/kasus/', ar: 'الحالات (Kasus)', en: 'Cases (Kasus)', kind: 'count', goal: 9 },
  { id: 'neg', href: '/negation/', ar: 'النفي والأسئلة', en: 'Negation and questions', kind: 'count', goal: 15 },
  { id: 'praep', href: '/praepositionen/', ar: 'حروف الجر', en: 'Prepositions', kind: 'count', goal: 12 },
  { id: 'trenn', href: '/trennbare-verben/', ar: 'الأفعال المنفصلة', en: 'Separable verbs', kind: 'count', goal: 12 },
  { id: 'grammar', href: '/levels/A1/', ar: 'قواعد A1 (80% من التمارين)', en: 'A1 grammar (80% of exercises)', kind: 'ratio' },
  { id: 'dialog', href: '/dialogues/', ar: 'حوارات A1', en: 'A1 dialogues', kind: 'ratio' },
  { id: 'read', href: '/reading/', ar: 'قراءة A1', en: 'A1 reading', kind: 'ratio' },
  { id: 'write', href: '/writing/', ar: 'كتابة A1', en: 'A1 writing', kind: 'ratio' },
  { id: 'exam', href: '/exam/', ar: 'امتحان A1 (80% أو أكتر)', en: 'A1 exam (80% or more)', kind: 'ratio' },
];
const PREFIX: Record<string, string[]> = { zahlen: ['z:', 't:', 'dt:'], praesens: ['pr:'], kasus: ['kas:'], neg: ['neg:', 'wf:'], praep: ['pp:', 'pw:', 'pk:'], trenn: ['sv:'] };
export function stepState(s: State, st: Step): { got: number; total: number; done: boolean } {
  if (st.kind === 'checkpoint') { const c=checkpointState(s,st.id as 'pron'|'learn');return {got:c.done?1:0,total:1,done:c.done}; }
  if (st.id === 'vocab') { const k = wordProgress(s).known; return { got: Math.min(k, st.goal!), total: st.goal!, done: k >= st.goal! }; }
  if (st.kind === 'count') {
    const pre = PREFIX[st.id] ?? [];
    const n = Object.entries(s.seen).filter(([k, v]) => v.ok > 0 && pre.some((p) => k.startsWith(p))).length;
    return { got: Math.min(n, st.goal!), total: st.goal!, done: n >= st.goal! };
  }
  const k = skills(s, 'A1');
  if (st.id === 'exam') { const e = k.exam ?? 0; return { got: Math.min(e, 80), total: 80, done: e >= 80 }; }
  const f = st.id === 'grammar' ? k.grammar : st.id === 'dialog' ? k.dialogue : st.id === 'read' ? k.reading : k.writing;
  const need = Math.max(1, Math.ceil(f.total * PASS));
  return { got: Math.min(f.got, need), total: need, done: f.total > 0 && f.got >= need };
}

// These are practice-completion rules, not proficiency or pronunciation grades.
export function stepRule(st:Step):[string,string]{
 if(st.kind==='checkpoint'&&st.id==='learn')return ['تلقائي بعد إنهاء مراجعة آخر الدرس بـ 8 من 8. مراجعة قصيرة للأمثلة، مش إثبات إتقان كل الأساسيات.','Automatic after finishing the end-of-lesson review with 8 of 8. A short example review, not proof of all the basics.'];
 if(st.kind==='checkpoint')return ['تلقائي بعد إنهاء مراجعة آخر الدرس بـ 8 من 8. مراجعة مكتوبة، مش تقييم للنطق.','Automatic after finishing the end-of-lesson review with 8 of 8. Written review, not a pronunciation assessment.'];
 if(st.id==='vocab')return [`${st.goal} كلمة مختلفة بإجابة صح مرة على الأقل في ألعاب الكلمات.`,`${st.goal} distinct words answered correctly at least once in word games.`];
 if(st.kind==='count')return [`${st.goal} سؤال مختلف من تدريبات الخطوة بإجابة صح مرة على الأقل.`,`${st.goal} distinct items in this step answered correctly at least once.`];
 if(st.id==='exam')return ['أفضل نتيجة امتحان A1 محفوظة على الجهاز: 80% أو أكتر.','A saved A1 exam best of at least 80% on this device.'];
 if(st.id==='write')return ['80% من مهام كتابة A1 تحقق حد الكلمات والعبارات المطلوبة. ده فحص آلي محدود، مش تصحيح كامل.','80% of A1 writing tasks meet their word-count and required-phrase checks. Limited automatic checks, not full correction.'];
 return ['80% من أسئلة القسم في A1 بإجابة صح مرة على الأقل لكل سؤال، حتى لو على أكتر من محاولة.','80% of this A1 section\'s questions answered correctly at least once each, possibly across attempts.'];
}
