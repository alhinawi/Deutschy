# Sixth learner-tool integration QA

November 16, 2026. Existing tools inspected first: case practice extends the
preposition trainer, micro-readings reuse the reader, dictation improves the
existing page. Word formation and weekly planning add distinct functions.

## Integration corrections

- Search indexes case groups and formation lessons. Micro-readings enter the
  existing reading search, dictation and shadowing pipeline automatically.
- Direct case/formation links select the correct group/lesson; dictation accepts
  level or source-item hash links. Actual search click opens the suffix lesson.
- Legacy preposition text now distinguishes local destination from movement
  within a location, agreeing with the new contrast drill. Fixed-case prepositions
  do not change case merely because travel is involved.
- Weekly planner warns on unsaved internal link navigation, not just page unload
  or week change. Cancel/accept both tested. Planner removed from the sitemap and
  marked noindex; cached page shell has no entered user plan.
- Dictation diff no longer truncates long allowed input at 350 words; a 400-word
  inserted input retains every difference. Input remains capped at 1500 characters.

## Checks

- Unit study assertions, TypeScript, production build, export integrity, PWA
  tests and dictionary verifier pass. 534 exported pages, 519 sitemap targets;
  unchanged 662 photo-dictionary entries in 58 topics.
- 534 routes x two languages x two widths = 2,136 navigations. No persistent
  route errors, horizontal overflow or broken main images. One concurrent local
  chunk failure on legacy /lessons/dinge2/ passed five serial network-idle reloads.
  A timed-out test batch was rerun in smaller complete batches, not counted as
  evidence of an application failure.
- 14 bilingual entry-page WCAG A/AA axe states pass, including the preserved
  preposition page. Feature tests cover 12 case feedback states, 24 reading
  question reveals/results, aligned dictation insertion, four formation lessons
  and actual planner persistence, isolation, deletion and blocked storage.
- Three hash selections, actual global search target and unsaved internal-link
  cancel/accept verified in the browser.
- Six visited new/changed routes work after stopping the server and going offline.
  Synthetic pressure respects 80-page cache, protects shell/assets and shows an
  honest fallback for unvisited pages. Tap-only PWA update flow passes.
- New micro-readings preserve original editorial groupings without official
  claims; all three displayed compound noun articles/plurals checked live.

## Limits

Independent native-speaker proofreading, real-device German speech quality,
physical-device installation and actual Anki application import remain unverified.
No accounts/backend/migrations/purchases or new photos. Planner goals/checks are
entered by the person using the device, not measured learning. No seeded goals,
streaks, scheduled reminders or official score promises.
