# Twelfth integration QA

Checked 2026-11-16 against content commit `44065a6a9d4f779380df9c056c7e19f8a70129a7` and its production export.

## Content and behavior shipped

- Qualified A2 dative plural, definite adjective accusative and Perfekt explanations, with extra examples.
- Appended 18 A2 contrast questions after existing extension banks. Existing saved question indices remain unchanged. Each affected topic now has 15 questions.
- Added wheelchair, crutch and hot-water bottle with reviewed dictionary forms and real, credited photos. Health now has 10 words; total is 669 nouns in 58 topics.
- Content-keyed six-way grammar answer ordering in lesson practice and review. Lesson retries vary positions. Input guard and disabled answered choices prevent repeated answers; feedback includes text as well as the SVG symbol.
- Repaired an existing yes/no prompt that repeated its verb, without changing its answer or saved identity.

## Checks

- Typecheck, content verification (669 words, 58 topics, zero problems), study, speech and PWA regression suites pass. Production build passed at milestone 4.
- Static export: 534 pages; internal links, sitemap targets and OG image pass. 527 ordinary routes reachable with no dead ends. This does not validate any external certification.
- 2136 fresh navigations: 534 routes × Arabic/English × 390/1280px. No failed navigation, page errors, broken loaded main images, undefined links or horizontal document overflow. See `twelfth-route-qa.json`.
- 28 focused page states: dative, adjective endings, Perfekt, word order, medical vocabulary, review and credits × Arabic/English × 320/390px. No axe WCAG A/AA violations or horizontal overflow detected.
- Four answer-feedback states (Arabic/English × 320/390px) pass axe; 15 answers each tested with two synchronous clicks per question. One history answer per saved ID, all choices disabled after answering, different option order after retry.
- All 669 credit rows checked across 17 pages. Source search reduced correctly to one matching word and passed axe. The default long-table offline screenshot and filtered mobile screenshot were inspected: Word and File stay first in the LTR scroll region.
- Offline: dictation, dative, Perfekt, flashcards, medical vocabulary and credits render after a visit. Injected cache pressure respects the 80-page limit and preserves shell/assets; unvisited route shows the offline fallback.
- Visual checks: Arabic and English quiz feedback, A2 explanations, medical photos/cards, default credits and filtered credits. No clipped controls or overlapping text in the inspected states.

## Limits

Automated accessibility checks do not replace assistive-technology testing. Grammar and Egyptian Arabic copy still need native editorial review. Speech uses browser/device voices, not human recordings; offline voice availability varies. Progress, study history and schedules are device-local, not synced. The content labels are study organization, not an official CEFR/Goethe assessment or certification. Local export QA is not a claim about deployment state; deployment remains a separate step.
