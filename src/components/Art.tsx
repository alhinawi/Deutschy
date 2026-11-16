// Clean illustration tiles for verbs and grammar topics that have no truly fitting photo. No random photos.
const ICONS: Record<string, string> = {
  regular: 'M4 12h16M14 6l6 6-6 6',
  strong: 'M4 18l5-12 4 8 3-5 4 9',
  irregular: 'M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z',
  modal: 'M5 12l4 4 10-10',
  separable: 'M3 12h7M14 12h7M10 7l-3 5 3 5M14 7l3 5-3 5',
  reflexive: 'M5 12a7 7 0 0112-5M19 12a7 7 0 01-12 5M17 3v4h-4M7 21v-4h4',
  grammar: 'M5 5h14v14H5zM9 9h6M9 13h6',
};
export default function Art({ kind, className = '', label }: { kind: string; className?: string; label?: string }) {
  return (
    <div className={`grid place-items-center bg-accent/10 text-accent ${className}`} aria-hidden="true">
      <div className="flex flex-col items-center gap-1">
        <svg viewBox="0 0 24 24" className="h-1/2 w-1/2 min-h-8 min-w-8 max-h-20 max-w-20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={ICONS[kind] ?? ICONS.grammar} /></svg>
        {label && <span className="de num text-xs font-bold opacity-80">{label}</span>}
      </div>
    </div>
  );
}
