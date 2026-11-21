'use client';
import { useEffect } from 'react';
// Global, headless PWA behavior: registers the offline worker on every page and keeps
// same-origin navigation working while offline. The visible install/update controls
// live on the settings page (PwaStatus).
export default function PwaRuntime() {
  useEffect(() => {
    let updateTimer: number | undefined;
    let onVisible: (() => void) | undefined;
    let onController: (() => void) | undefined;
    let reloaded = false;
    const offlineLink = (e: MouseEvent) => {
      if (navigator.onLine || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element)?.closest('a');
      if (!a || a.target || a.hasAttribute('download')) return;
      const u = new URL(a.href);
      if (u.origin === location.origin && u.pathname !== location.pathname) { e.preventDefault(); e.stopPropagation(); location.assign(u.href); }
    };
    document.addEventListener('click', offlineLink, true);
    if ('serviceWorker' in navigator) {
      // Fresh-deploy propagation: bypass HTTP cache when checking for a new
      // worker and re-check on a timer and when the tab returns, so new
      // content and images reach users within minutes, not a day.
      navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' }).then((reg) => {
        const check = () => { reg.update().catch(() => {}); };
        check();
        updateTimer = window.setInterval(check, 30 * 60 * 1000);
        onVisible = () => { if (document.visibilityState === 'visible') check(); };
        document.addEventListener('visibilitychange', onVisible);
        // A controller change means a new version took over: reload once to
        // use it. Applies to both the settings-page button and auto-apply.
        onController = () => { if (!reloaded) { reloaded = true; location.reload(); } };
        navigator.serviceWorker.addEventListener('controllerchange', onController);
        // Auto-apply only while the page is brand new (nothing typed yet);
        // later updates wait for the settings page's update button.
        const startedAt = performance.now();
        reg.addEventListener('updatefound', () => {
          const worker = reg.installing;
          worker?.addEventListener('statechange', () => {
            if (worker.state === 'installed' && navigator.serviceWorker.controller && performance.now() - startedAt < 10000) worker.postMessage('APPLY_UPDATE');
          });
        });
      }).catch(() => {});
    }
    return () => {
      document.removeEventListener('click', offlineLink, true);
      if (updateTimer) window.clearInterval(updateTimer);
      if (onVisible) document.removeEventListener('visibilitychange', onVisible);
      if (onController) navigator.serviceWorker?.removeEventListener('controllerchange', onController);
    };
  }, []);
  return null;
}
