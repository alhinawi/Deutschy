# Learner tools integration QA

Fourth learner-tool pass, November 16, 2026. Covers pitfalls, sound contrasts,
writing frames, context packs and deck export. The original pronunciation and
writing pages remain available.

## Changes

- Search indexes individual drills, sound pairs, writing plans and context packs
  in Arabic, English and German. Results link to the relevant section.
- Hash links open the right drill level, writing task/level and context pack.
- The Perfekt word-order drill now explicitly asks for neutral written order
  with a sentence bracket. Marked alternatives can be grammatical in context.

## Checks

- Study assertions, TypeScript, production build, export integrity, PWA regression
  and dictionary validation pass. Export has 517 pages, 503 sitemap targets;
  dictionary validation covers 662 entries and 58 topics.
- All 517 routes visited in Arabic and English at 390px and 1280px: 2,068
  navigations. No persistent overflow, broken main images or bad links found.
  Two transient concurrent chunk-loading failures occurred on legacy grammar/verb
  routes. Each route passed five subsequent serial network-idle reloads.
- 14 bilingual WCAG A/AA states pass axe: the five tools and the preserved
  pronunciation/writing guides. Automated checks do not prove full accessibility.
- Browser interaction tests cover all drill levels and feedback, sound voice
  selection/error behavior using a mock, writing draft/checklist/model state,
  all context groups and actual local-review save/reload, deck selection,
  empty saved words, and real UTF-8 text download.
- Search click reaches the bekommen drill with B1 selected. Three cross-filter
  hash targets select their matching level/task/pack. Mobile screenshots reviewed.
- All five visited tool routes work with the local server stopped and browser
  offline. Synthetic cache pressure respects the 80-page budget and preserves
  protected shell/assets; unvisited routes show the offline fallback.
- Actual six-card A4 PDF was rendered and inspected in the deck-export pass.
  Arabic/umlauts and six TSV rows were inspected in the downloaded file.

## Limits

No actual Anki application import, native-speaker proofreading, real German
speech-output quality or physical-device installation was verified. Speech
availability depends on browser/device. Drafts stay in the tab; saved progress
is device-local, not an account-sync promise. These are practice groupings,
not certified CEFR placement or official Goethe materials. No purchases,
new accounts, backend or migrations were introduced.
