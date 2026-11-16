# Daily practice and PWA integration QA

Verified against the production export on 2026-11-16. Production deployment is a separate step.

## Coverage

- 433 exported routes at 390px and 1280px in Arabic and English: 1,732 page checks. No missing local images, invalid internal links or horizontal-overflow findings. One transient chunk-load failure on /verbs/hoeren/ in the Arabic desktop sweep; four fresh direct reloads then passed with no page errors. The English sweep had no page exceptions.
- Export audit: 433 pages, 419 sitemap targets, canonical/OG targets and local links resolve.
- Ten full-document WCAG A/AA automated axe states: home, daily review, speaking, progress and writing in both interface languages. No violations found. Automated checks do not replace a manual accessibility review.
- Review: truly empty history stays empty; saving a word adds it; correct answers delay its next due day; misses remain due; reload preserves local review history; recoverable mistakes from all six level banks are eligible. Unknown legacy keys are excluded rather than made into invented cards.
- Global search: Arabic, English and German terms, reading and writing hit types, C2 writing deep link. Returning to the task list clears the hash so a later visit does not reopen the task unexpectedly.
- Speaking: unsupported recognition state, level selector and voice-unavailable state. Mocked browser recognition verifies explicit-tap start, result text, permission denial and no transcript persistence after reload. This is control-flow testing, not proof of actual microphone or pronunciation quality.
- PWA: service worker controls the page; cached visited C2 reload works with the static server stopped; an internal home link also navigates offline; an uncached route shows the honest offline fallback. New worker remains waiting, displays the save-work warning, activates only after the update button and reloads deliberately.
- Mobile screenshots inspected: review, global search, speaking, offline status, six-level home paths, local dashboard and update warning.

## Integration fixes

- Offline same-origin page links use full navigation so the worker can serve cached HTML without depending on uncached Next navigation payloads.
- Writing task back action clears the fragment.
- Review question-bank assembly is cached, avoiding repeated all-bank construction during dashboard/review rendering.
- Study test loader targets ES2020 so Map iteration behaves like the app build.

## Checks

`npm run verify`, `npm run test:study`, `npm run typecheck`, `npm run build`, `npm run qa:export` pass. Content audit: 662 vocabulary entries, 58 topics, zero validator findings.

## Limits

Progress/review/saved words are device-local, not account-synced. Offline storage is bounded and may be evicted; this is not a full-library download. External voice services and sign-in may need internet. Actual phone installation, German voice availability and real microphone quality require device testing. German/Egyptian Arabic content has not had native human proofreading. Level labels are practice organization, not official CEFR certification.
