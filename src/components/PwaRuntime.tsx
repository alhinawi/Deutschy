'use client';
import { useEffect } from 'react';
// Global, headless PWA behavior: registers the offline worker on every page and keeps
// same-origin navigation working while offline. The visible install/update controls
// live on the settings page (PwaStatus).
export default function PwaRuntime() {
  useEffect(() => {
    const offlineLink = (e: MouseEvent) => {
      if (navigator.onLine || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element)?.closest('a');
      if (!a || a.target || a.hasAttribute('download')) return;
      const u = new URL(a.href);
      if (u.origin === location.origin && u.pathname !== location.pathname) { e.preventDefault(); e.stopPropagation(); location.assign(u.href); }
    };
    document.addEventListener('click', offlineLink, true);
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});
    return () => document.removeEventListener('click', offlineLink, true);
  }, []);
  return null;
}
