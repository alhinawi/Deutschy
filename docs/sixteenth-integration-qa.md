# Sixteenth integration QA

Checked 2026-11-16 against content commit `f3eb42440cd3545dec6a4e8dff083bb2e6963b67` and its production export. Deployment is separate.

## Delivered

- `e474e33`: photo, article and spelling games keep corrections visible until Next/Result, disable answered choices, synchronously reject duplicate input and save one score in an effect. Unicode-equivalent spelling input accepted, with honest case/umlaut copy. Existing word IDs/XP amounts unchanged.
- `f3eb424`: memory uses explicit pair continuation, synchronous open/matched state and once-only effect completion; named/disabled cards and taller wrapping cards. Invalid topics show a clear empty state across all five vocabulary games without recording activity.
- Final handoff updates pending editorial targets for practice copy and accessible labels. Five-page printable PDF and editable Markdown delivered separately; all pages visually inspected. No reviewer sign-off.

## Checks

- Typecheck, study tests, content verification (669 nouns / 58 topics / 0 problems), speech/PWA tests and production build pass.
- 538 export pages, 523 sitemap targets, internal links and OG checks pass; 531 ordinary reachable routes, no dead ends. Excludes 404/admin and six state-gated certificate routes.
- **2152 fresh route navigations**: 538 routes × Arabic/English × 390/1280px. No failed navigation, page errors, broken loaded main images, undefined links or horizontal document overflow. Summary in `sixteenth-route-qa.json`.
- Photo/article/spelling: 12 completed AR/EN × 320/390 sessions, 120 alternating correct/miss answers. Double input gives one award, correction remains beyond 1.2 seconds, manual next advances one card, exactly 5/10 and expected 50/75 XP, one completion score. Twelve feedback axe states pass. Repeated after memory integration.
- Memory: four AR/EN × 320/390 rounds, 44 pairs. Rapid same-card/third-card taps and double Continue do not lose the first card, duplicate attempts or completion. Feedback stays beyond 1.3 seconds. Exactly one 60-XP completion and computed score each. Four mismatch-feedback axe states pass.
- Twenty invalid-topic page states leave prior XP/scores unchanged. Empty state explicitly identifies the unavailable selection.
- Twelve longest real noun labels × AR/EN × 320/390 = 48 layout fixtures. No card text clipping or document overflow. Layout fixtures only replace test DOM text; nothing is written to production content or learner history.
- Offline: visited photo quiz, article, spelling, memory, flashcards and credits routes render after synthetic 90-page cache pressure. Page budget stays at 80 and shell/assets survive; unvisited routes show the offline fallback. This is route/render coverage, not completion of every game offline. Device speech may still need internet.
- Visually inspected Arabic 320 spelling, English 390 article, both-language memory feedback, longest-label 320px layout and all five PDF pages. No clipping in inspected final views. Long words can wrap over several lines on narrow memory cards.

## Inventory and limits

No noun, grammar or reading content was added. Inventory stays 669 nouns / 58 topics, 71 readings / 237 questions, 41 core grammar topics / 382 core questions, 11 dialogues, 72 present-focus cells and 48 separate B1 specialist items.

Native German/Egyptian Arabic editorial review remains pending. Case-insensitive spelling practice is not an assessment of German capitalization; memory remains visual matching, not an equivalent nonvisual assessment. Practice labels/scores are not official CEFR/Goethe alignment or certification. Progress is device-local. Automated accessibility checks do not replace a full assistive-technology audit. No backend/accounts/purchases. Local export QA does not verify live deployment.
