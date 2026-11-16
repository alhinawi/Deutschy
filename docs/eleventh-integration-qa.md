# Eleventh integration QA - 2026-11-16

## Delivered scope

1. Verb audit: 143 records with present/principal-part fields and separate trainer. See eleventh-verb-audit. Morphology matched; contextual modal/lassen explanations improved, not invented correction counts.
2. Four real-photo toy nouns: 666 total nouns / 58 topics. See eleventh-photo-additions. Rejected irrelevant balloon and medical-scan candidates rather than padding topics. Teddy neutral side padding is disclosed in credits.
3. Existing dictation: German voice and speed selection, cancellation, stale-callback handling and honest synthesized-speech limits. See eleventh-listening.
4. Four beginner grammar lessons: qualified word order/article/negation/imperative claims, Egyptian Arabic and English explanations, six extra examples. See eleventh-grammar.
5. Flashcards: bounded single retries; first-pass schedule/XP/history; unique initial-card denominator and box label instead of mastery claim. See eleventh-srs.

## Final fixes

- 320px global header: hide only its small XP/streak summary below 361px; detailed progress remains available elsewhere. No saved data change.
- Hidden skip-link padding moved to the focused state so an invisible 1px link does not create horizontal overflow.
- English game topic selector constrained to available width.
- Flashcard audio gets a localized accessible name; grammar example audio labels localized with 44px targets and explicit LTR examples.

## QA evidence

- Typecheck, content verification (666 words, 58 topics, 0 problems), study, speech and PWA tests; production build.
- Export audit: 534 exported routes, 519 sitemap targets; 527 ordinary routes reachable, no dead ends.
- 2136 full route navigations: 534 routes x Arabic/English x 390/1280px. No overflow, broken completed images, undefined links, page errors or non-200 ordinary exports. Machine summary: eleventh-route-qa.json. This scan checks rendered DOM, not manual pixel review of every page.
- 36 focused Arabic/English x 320/390px axe WCAG A/AA/2.1-AA and overflow entry states: dictation, four grammar lessons, toys, word review, revealed flashcard and default credits. Zero violations after fixes. Automated checks do not prove all accessibility behavior.
- All 666 credit rows traversed in 17 pages, search and filtered-state axe pass. Default 390px Word/File columns visually checked.
- Listening UI: selected German voice/lang/rate, cancellation, stale callback, answer reset, no-voice fallback. Tests use mock speech voices; actual sound quality and user's installed voices not asserted.
- Flashcards: six Arabic/English wrong/wrong, wrong/right, right scenarios check bounded termination, first-pass counters, saved history, XP and due days.
- Six visited learning routes (dictation, word order, negation, flashcards, toys, credits) loaded with the server stopped; uncached fallback and bounded cache pressure pass. Flashcard route has no h1 in its existing layout, so offline test checks loaded main content rather than assuming every route has that heading.
- Local unknown path returns status 404 and the custom Arabic not-found screen. Live deployment check belongs to release owner.
- Pixels inspected: 390px modal verb, toy photos/full teddy frame, dictation AR/EN, four grammar rules, flashcard retry/results, default credits, plus 320px header.

## Limits

No purchases, backend, account changes or new subscriptions. No official CEFR/Goethe validation or native-language proofread claim. Learner history remains device-local and may be lost when browser data is cleared. Only visited/cached routes are available offline, and browser voices may need internet. Existing dates/schedules are not rewritten. Changes from item 2 onward are direct substantive commits to main under the user's latest no-PR instruction; no empty commits or history rewrites.
