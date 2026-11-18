# List165: Ascending navigation and icon-only close control

Preview and QA complete. Deployment is handled separately after the merged PR is verified.

The mobile drawer uses an SVG X with a localized accessible name and a 44px minimum touch target. The SVG is hidden from assistive technology to avoid duplicate names. Existing native dialog lifecycle and close/focus behavior remain unchanged.

Start contains general entry points. Each level has its own group in A1, A2, B1, B2, C1, C2 order. A1 retains overview/path; A2-C2 each retain overview/practice/vocabulary/writing. Past tenses moves to Encyclopedia. All 80 prior hrefs match the pre-change inventory exactly, including admin-only navigation. No invented routes, removed content, or full-coverage claims.

## Checks

- Typecheck, production build, study tests and content verification pass: 965 words / 199 topics / 0 structural problems.
- Navigation: 4 Arabic/English 320px/390px variants, 476 assertions and 4 axe snapshots. Explicit checks cover icon-only rendering, accessible name, ascending groups and exact per-level link order, plus existing focus trap, modal/backdrop, Escape, route, resize, search and storage guards.
- Search: cold delayed import plus 6 Arabic/English 320px/390px/1280px variants, 120 assertions, 6 axe snapshots.
- PWA, export, progress bundle, dependency tests pass. 1089 exported pages and 1073 sitemap targets. Progress bundle 396125 bytes. npm audit reports 0 vulnerabilities.
- Actual 390px Arabic and English screenshots inspected: X visible and focused, text readable, no clipping or horizontal overflow. Full navigation order also asserted in rendered DOM.
- Native-language checklist updated; no native/editor sign-off claimed. No language-learning content added in this batch.

Public ElevenLabs remains disabled. No production migration, manifest installation, credential installation, or audio bulk generation in this batch.

## Genuine contribution

The reusable decorative CloseIcon was committed through the 3mrdiab account on its navigation-close165 branch: https://github.com/3mrdiab/Deutschy/commit/da56069b7ae16af7475aef2cfe20792851117ea7 . Verified author identity, exact parent and one-file contents against the local reviewed component; integrated the original commit unchanged. Hinawi wires the component, reorders the existing links and adds regression checks in the same focused PR. No direct upstream-main push, history rewrite or empty PR split.
