# Seventh list integration QA

Reused existing tools in all five areas rather than adding competing pages. PRs #126-130 add present-focus, context-sensitive Perfekt, verified word-order guidance, dialogue listening/access and typed numeric answers. This integration adds searchable entry points and includes prices in the numbers navigation label.

Verified 2026-11-16:
- Study suite and TypeScript pass. Static export: 534 pages, 519 sitemap targets, all internal links/assets and OG checks pass.
- All 534 routes at 390px/1280px, Arabic/English: 2,136 browser navigations, zero page exceptions, broken images, invalid links or overflow observations.
- Seven affected/legacy entries in both languages: 14 mobile WCAG axe/overflow checks pass.
- Actual global search selection reaches /zahlen/#typed-zahlen; English price self-check accepts 3.50.
- Six affected visited routes load offline after server shutdown and offline mode; bounded page-cache pressure does not evict core shell/assets; unvisited URL gets offline fallback.
- Earlier feature QA covers 36 present cells, six contextual Perfekt answers, all 42 tap-built word-order models and 16 correct plus 16 wrong typed numeric answers.
- Inspected mobile Arabic, English and offline screenshots. No physical-device installation or real-device speech-output claim. Voices may need network and are unavailable in this headless test environment. No new accounts/backend/purchase, no official assessment claim, no native proofread.

One oversized first sweep command timed out and lost its browser run, so none of that run was counted. Completed three independent bounded chunks per language; result files contain the full 2,136 checks. No final-sweep defects.
