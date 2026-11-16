# Fifteenth integration QA

Checked 2026-11-16 against content commit `2fb0f35b5daa5166367ef3b3b9e17782b3b8a807` and its production export. Deployment is separate.

## Delivered

- `a26bc46`: two original fictional A2/B1 reading/listening scenarios, eight exact-evidence questions, matched Egyptian Arabic paragraphs and glosses. Appended IDs preserve existing history. The readings also enter the existing dictation source sets.
- `2fb0f35`: synchronous answer locks across grammar mistakes, daily review and spaced-word review; mobile wrapping, text feedback and daily explanation/source access. Daily noun prompts no longer expose the German lemma. Existing schedule/history keys unchanged.
- Final handoff updates pending native editorial targets and inventory. Five-page PDF plus editable Markdown delivered separately, all pages visually inspected. No reviewer sign-off claimed.

## Integration checks

- Typecheck, content verify (669 nouns / 58 topics / 0 problems), study tests, speech tests, PWA tests and production build pass.
- 538 export pages, 523 sitemap targets, internal links and OG checks pass. 531 ordinary routes reachable with no dead ends, excluding 404/admin and six state-gated certificate routes.
- **2152 fresh route navigations**: 538 routes × Arabic/English × 390/1280px. No failed navigation, page errors, broken loaded main images, undefined links or horizontal document overflow. Batch summary in `fifteenth-route-qa.json`. Test-browser history fixtures are not shipped learner data.
- Both new texts × Arabic/English × 320/390 × reading/listening: 16 completed sessions / 64 answers. Hidden/reveal/hide listening transcript, four exact evidence answers, 4/4 result, one history award despite same-event double input and retry ordering pass. Eight feedback axe states pass.
- Three review routes × Arabic/English × 320/390 × correct/miss: 24 sessions. Same-event double input records one answer and at most one 5-XP award. Daily and word cards grade once; grammar refresh unlocks its new list. Correct/miss textual feedback and no overflow verified. Twelve miss-feedback axe states pass. A repeated run additionally checks next-card unlock and one saved answer on the second daily-review card in all eight daily cases.
- Review source tests check every noun prompt uses its Arabic/English meaning, each correct article+noun is preserved and all review bank options remain three-way. Existing due-date, malformed-data preservation, history filtering and local-midnight tests still pass.
- Offline: both new reading pages, grammar mistakes, daily review, word review and credits render after visiting. Synthetic 90-page pressure leaves the 80-page limit intact and retains protected shell/assets; unvisited routes show the offline fallback. Empty review states in this offline test do not establish every interactive state offline.
- Visually inspected mobile Arabic reading evidence/grammar review/word review, English reading evidence/daily feedback, and all five PDF pages. No clipping in inspected views. PDF continued tables repeat their headers.

## Current inventory and limits

71 readings / 237 reading questions; reading distribution A1 7, A2 18, B1 16, B2 12, C1 9, C2 9. Unchanged: 669 nouns / 58 topics, 41 core grammar topics / 382 questions, 11 dialogues, 72 present-focus cells, 48 separate B1 specialist items.

Native German/Egyptian Arabic editorial review remains pending. Practice grouping is not official CEFR/Goethe alignment or certification. New events/service details are fictional, not policy or technical instructions. Browser speech is synthetic/device-dependent; this list does not claim audible pronunciation review. Progress remains device-local; no backend/account/purchase changes. Automated accessibility checks are not a complete assistive-technology audit. Local export QA does not establish live deployment state.
