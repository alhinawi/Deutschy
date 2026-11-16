export default function PrepDiagram({ p }: { p: string }) {
  const box = <rect x="30" y="42" width="60" height="34" rx="4" fill="#e0d5c1" stroke="currentColor" strokeWidth="2" />;
  const ball = (x: number, y: number) => <circle cx={x} cy={y} r="9" fill="#b4432c" />;
  let inner;
  switch (p) {
    case 'auf': inner = <>{box}{ball(60, 33)}</>; break;
    case 'unter': inner = <><rect x="30" y="20" width="60" height="22" rx="4" fill="#e0d5c1" stroke="currentColor" strokeWidth="2" />{ball(60, 62)}</>; break;
    case 'neben': inner = <>{box}{ball(106, 59)}</>; break;
    case 'vor': inner = <>{box}{ball(62, 70)}</>; break;
    case 'hinter': inner = <>{ball(62, 38)}{box}</>; break;
    case 'über': inner = <>{box}{ball(60, 16)}</>; break;
    case 'in': inner = <><path d="M30 38v38h60V38" fill="none" stroke="currentColor" strokeWidth="2" />{ball(60, 62)}</>; break;
    case 'an': inner = <><rect x="30" y="14" width="10" height="64" fill="#e0d5c1" stroke="currentColor" strokeWidth="2" />{ball(49, 42)}</>; break;
    default: inner = <><rect x="12" y="42" width="34" height="34" rx="4" fill="#e0d5c1" stroke="currentColor" strokeWidth="2" /><rect x="74" y="42" width="34" height="34" rx="4" fill="#e0d5c1" stroke="currentColor" strokeWidth="2" />{ball(60, 66)}</>;
  }
  return <svg viewBox="0 0 120 90" className="h-20 w-28 shrink-0 text-ink" role="img" aria-label={p}>{inner}<path d="M6 80h108" stroke="currentColor" strokeWidth="2" /></svg>;
}
