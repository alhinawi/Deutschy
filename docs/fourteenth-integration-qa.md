# Fourteenth integration QA

Checked 2026-11-16 against content commit `3c682c821290bd9592cb9db444963158fc5ef274` and its production export. Deployment is separate.

## Milestones

- `66bb28b`: 16 original source-checked B1 indirect-question and connector contrasts. Six specialist sets / 48 items. Dynamic total; old prompt-based keys unchanged. Shared MiniQuiz synchronous lock closes same-event duplicate-answer gap.
- `0a62663`: two appended original A2/B1 everyday dialogues, six questions with exact line evidence. 11 dialogues total. Existing role-practice/discovery/filter reused. Dialogue answer lock, disabled choices, six-way order/retry, text status and localized 44px audio targets.
- `3c682c8`: source-reading selector for existing dictation, exact counts/order, preserved sentence-hash addressing, clear wrap/unsaved/device-voice limits and reset/cancellation on set changes.
- Final handoff extends native-language review checklist with pending new sets/dialogues/dictation segmentation. Five-page printable PDF and editable Markdown delivered separately. No native reviewer or sign-off claimed.

## Checks

- Typecheck, content verify (669 nouns / 58 topics / 0 problems), study, speech, PWA and production build pass.
- Static export: 536 pages, 521 sitemap targets; internal links and OG checks pass. 529 ordinary routes reachable with no dead ends, excluding admin/404 and six state-gated certificate routes.
- **2144 fresh route navigations**, 536 routes × Arabic/English × 390/1280px. No page errors, failed navigation, broken loaded main images, undefined links or horizontal document overflow in final results. See `fourteenth-route-qa.json`.
- B1: Arabic/English × 320/390px × 16 items = 64 answer interactions. Two synchronous clicks produce one saved answer per key, all choices disable and old/new totals match. Four feedback states per width/language combination (8 total) pass axe.
- Dialogues: both new dialogues × Arabic/English × 320/390px, 24 answers. Correct 3/3 results, exact evidence, one history update despite double input, retry variation and no overflow. Eight feedback states pass axe.
- Dictation: Arabic/English × 320/390px. Exact sentence hash selects the correct source/level/position; source and level changes reset prior input/comparison. Mock German speech receives original sentence. Stale completion callbacks cannot restore status after a set change. Exact comparison works. Thirteen next-sentence steps wrap the chosen B1 story to its first sentence. Four states pass axe.
- Existing voice/rate regression browser checks pass both languages, including alternate German voice, speed changes, stale callback and unavailable-German-voice fallback. These use mocked speech wiring, not an audible pronunciation review.
- Source-set unit checks partition each of six levels by reading, preserve IDs/order and verify both latest extended stories. No dictation scores/progress are saved.
- Offline: B1, dialogues, conversation, dictation, photo quiz and credits render after a visit. Ninety synthetic cache entries exercise the 80-page cap; protected shell/assets survive, and unvisited pages show the offline fallback. Offline device speech remains unguaranteed.
- Visually inspected both-language B1 examples, dialogue evidence, source-set selectors, and all five updated checklist PDF pages. No clipped content or layout defect in inspected views. The PDF includes repeated table headers after a page break.

## Limits

Native German/Egyptian Arabic editorial review remains pending. Practice groups are not official CEFR/Goethe alignment or certification. Fictional dialogue prices/services/deadlines are not vendor policy. Browser speech is synthetic and varies by device. Progress remains local-only; no backend/account/purchase changes. Automated accessibility checks are not a full assistive-technology audit. Export QA is not a claim that a deployment is live.
