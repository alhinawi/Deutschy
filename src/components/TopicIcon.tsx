// Small themed SVG icons for idiom topics. No photos; one line icon per topic.
const ICONS: Record<string, string> = {
  alltag: 'M4 7h16M4 12h16M4 17h10',
  essen: 'M5 3v7a3 3 0 003 3 3 3 0 003-3V3M8 3v18M17 3c-2 1.5-3 4-3 7v3h3v8',
  koerper: 'M12 21C7 16.5 3 13 3 8.8 3 6 5 4 7.5 4c1.8 0 3.4 1 4.5 2.6C13.1 5 14.7 4 16.5 4 19 4 21 6 21 8.8c0 4.2-4 7.7-9 12.2z',
  liebe: 'M12 20s-7-4.6-9.2-9C1.3 8 3 5 6 5c2 0 3.4 1.1 4.1 2.3h1.8C12.6 6.1 14 5 16 5c3 0 4.7 3 3.2 6-2.2 4.4-7.2 9-7.2 9z',
  arbeit: 'M4 8h16v12H4zM9 8V6a3 3 0 013-3 3 3 0 013 3v2M4 13h16',
  gefuehle: 'M12 3a9 9 0 109 9M8 10h.01M16 10h.01M8 15c1.2 1.2 2.6 2 4 2s2.8-.8 4-2',
  tiere: 'M6 18c0-4 3-7 8-7 2 0 4 1 4 3s-1 3-3 3h-2l-2 3M7 11c0-2 1-4 3-4m4 1c1-2 3-3 5-2',
  geld: 'M12 3v18M17 7c0-2-2.2-3-5-3s-5 1-5 3 2 3 5 3 5 1 5 3-2.2 3-5 3-5-1-5-3',
  sport: 'M12 3a9 9 0 109 9 9 9 0 10-9-9zM12 7l3 2-1 3h-4l-1-3zM5 9l4 1M19 9l-4 1M9 19l1-4M15 19l-1-4',
  bildung: 'M2 9l10-5 10 5-10 5zM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6',
  zeit: 'M12 3a9 9 0 109 9 9 9 0 10-9-9zM12 7v5l3 3',
  natur: 'M12 21V9M12 9c0-4 3-6 7-6 0 4-3 6-7 6zm0 4c0-3-2.5-5-6-5 0 3.5 2.5 5 6 5z',
  kleidung: 'M9 4L4 7l2 4 2-1v10h8V10l2 1 2-4-5-3a3 3 0 01-6 0z',
  wetter: 'M7 18a4 4 0 01-.5-8A6 6 0 0118 8a4.5 4.5 0 01-.5 9zM8 21h.01M12 21h.01M16 21h.01',
  kunst: 'M12 3a9 9 0 100 18c1.5 0 2-1 1.5-2S13 17.5 14.5 17H18a3 3 0 003-3c0-6-4-11-9-11zM7.5 10.5h.01M12 7.5h.01M16.5 10.5h.01',
};
export default function TopicIcon({ topic, className = '' }: { topic: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICONS[topic] ?? ICONS.alltag} />
    </svg>
  );
}
