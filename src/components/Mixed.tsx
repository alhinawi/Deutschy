import type { ReactNode } from 'react';
// Wraps Latin runs (German words, examples) in isolated LTR spans so they do not scramble inside Arabic sentences.
const RUN = /[A-Za-zÄÖÜäöüß][A-Za-zÄÖÜäöüß0-9'’\-/.,!?:;+ ]*[A-Za-zÄÖÜäöüß0-9.!?]|[A-Za-zÄÖÜäöüß]/g;
export default function Mixed({ text: raw }: { text: string }) {
  const text = raw.replace(/([A-Za-zÄÖÜäöüß0-9.])،\s*(?=[A-Za-zÄÖÜ])/g, '$1, ');
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  for (const m of text.matchAll(RUN)) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    out.push(<span key={k++} className="de num" dir="ltr" lang="de">{m[0]}</span>);
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
