# Eighth list: audit-led A1-B1 improvements

Overlap audit: reading passages, adjective tables/random quiz, modal grammar, B1 Konjunktiv, eight writing frames and two review tools already existed. Extended each instead of creating duplicate pages.

1. #132 case/article focus and explicit scope in adjective drills.
2. #133 six bilingual modal meaning contrasts within existing modal lesson, plus focusable legacy table region.
3. #134 purpose/person/form guidance using existing Konjunktiv questions.
4. #135 exact answer evidence for 18 existing A1-B1 micro-reading questions; fixed dimmed-option contrast and verified final evidence placement visually.
5. #136 temporary draft export and best-effort leaving warning in existing writing frames, with exact downloaded text tests.
6. This PR fixes misleading /review/ promise: one correct answer adds to correct count, not erases all mistakes. Shows real saved counts, allows fresh round snapshots, and links broader daily review. Existing progress/history semantics retained. Test seeded 0 correct/2 wrong, answered correctly twice with refreshes: retained after first, removed at equality after second. No new diagnostic/proficiency claim.

Final QA 2026-11-16:
- Typecheck/study/build pass; 534 exported pages/519 sitemap targets, all internal links/assets pass.
- All 534 routes × 390px/1280px × Arabic/English = 2,136 completed browser navigations, zero final page exceptions, broken images, overflow or invalid-link observations.
- 14 bilingual mobile axe/overflow entry checks pass, plus exercised per-feature states.
- Six affected visited pages work offline after server shutdown; cache pressure respects page cap without shell/assets eviction; unknown URL gets fallback.
- Mobile screenshots inspected including final reading evidence, saved-count review and offline state. Search includes modal contrast/guided Konjunktiv entries.
- No new backend/accounts/payments/photos or noun data. No official assessment claims. Native proofread, physical-device download/install and actual German voice output remain unverified. The writing exit warning is best effort, and download success must be checked by the learner.
