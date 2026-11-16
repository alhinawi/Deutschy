# Fifth learner-tool integration QA

November 16, 2026. Grammar maps, practical words, shadowing, speaking cards and
start guide are integrated with the existing platform. No new accounts,
backend, migrations, purchases, photos, official exam claims or fabricated
learner data.

## Integration changes

- Global search includes 24 new practical terms, 12 speaking cards and five
  study goals. Results open the correct card/group/goal, not an unrelated default.
- Grammar maps accept a selected-level hash; shadowing and speaking cards accept
  either a content ID or level hash. Start-guide links preserve the selected
  grouping for these tools. Existing tools requiring selection say so.
- Practical-term deep links open the matching group and reveal the requested
  sense. Salary search reaches das Gehalt / die Gehälter.

## Evidence

- Study assertions, TypeScript, production build, export integrity, PWA tests
  and dictionary verifier pass. 522 exported pages; 508 sitemap targets.
  Original photo dictionary remains 662 words in 58 topics, plus 24 separate
  text-first practical nouns.
- 522 routes x two languages x two widths = 2,088 browser navigations.
  No persistent route errors, horizontal overflow or broken main images.
  One concurrent local sweep chunk error on the legacy lieben verb page passed
  five serial network-idle reloads. No new-tool route failures.
- 10 bilingual entry-page WCAG A/AA axe states pass. Dedicated feature tests
  also cover six grammar-map selections, four glossary groups, six shadowing
  levels, all 12 speaking models and five start-goal states. Automated tests
  do not prove full accessibility.
- All 70 goal/group/time plans pass unit and browser checks. Actual start-to-
  shadowing navigation retains B2; actual global search click opens the salary
  card. Five direct hash selections checked in the browser.
- All six printed grammar maps remain one A4 page, inspected after separating
  Arabic-only explanations from German examples. No inline conjunction ambiguity.
- All five visited routes work with the local server stopped and browser offline.
  Cache pressure respects the 80-page budget, retains shell/assets, and unvisited
  routes show the fallback. PWA update waits, warns, and applies only after a tap.
- Browser speech lifecycle tested with a mock: German-only selection, completion,
  error and cancellation. No-voice fallback checked. No recording or automatic
  pronunciation score.

## Limits

Real-device German speech quality, physical device installation, independent
native-speaker proofreading and actual Anki application import remain unverified.
Models and examples are explicitly original fictional practice, not biography,
current policy, real vacancies or guaranteed availability. Notes/checks stay
only in the tab; saved review remains device-local. Practice groupings are not
certified placement or official Goethe materials.
