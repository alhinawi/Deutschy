# List 158: Timed-practice answer re-entry guard

## Reproduced defect
The actual React answer handler in the pre158 browser build was invoked twice synchronously before feedback rendered. Device-local active.answers changed from 0 to 2, with the same answer string assigned to two distinct question keys even though only one prompt had been displayed. This deterministic handler re-entry test is not a claim that every physical double-click reproduces the issue; ordinary browser event flushing can hide the race.

## Fix
- A synchronous ref lock covers each submitted prompt before state changes or persistence. A repeated answer handler call cannot append another answer while feedback is pending.
- The handler additionally verifies active session ID and displayed answer position against current session state. A retired callback cannot answer a later prompt or a different session after the UI moves forward.
- Starting while a session is already current is ignored. Finishing locks the session before writing its result, and Next only clears feedback/unlocks when a current locked session exists. Existing deadline check, correct-answer comparison, source links, shuffled options, result/history caps, scoring rules and local-only storage remain unchanged.
- No content, question identity, XP or account/backend changes. This protects device-local timed records, not official test results.

## QA
- 24 variants: all six levels A1-C2, Arabic/English, 320/390 px. 532 assertions cover repeat start retains one ID, triple synchronous answer appends exactly one, disabled feedback choices, Next re-entry does not skip questions, original prompt callback ignored after Next, next prompt appends one, reload resumes without recounting, repeat finish records one result, old session callback ignored in a new session, expiry rejects a late answer and caps elapsed time, no global learner-history writes, no page errors or horizontal overflow. Four WCAG A/AA/2.1 AA axe snapshots pass.
- Test deliberately uses actual mounted React handlers for synchronous/stale callback checks, not a parallel mock implementation. Initial reload harness mistakenly cleared localStorage on every document load; changed initialization to once per isolated tab so the persistence test exercises real saved state. Final regression passes all variants.
- Inspected actual 390 px Arabic and English feedback screenshots: one recorded answer, disabled choices, readable prompt/correction/source/Next, no clipping.
- Repeatable scripts/test-timed-browser.mjs uses a fresh local browser and loopback static server. Run npm run build then CHROME_BIN=/path/to/chrome npm run test:timed:browser; default /usr/bin/google-chrome. Optional TIMED_SCREENSHOT_DIR saves 390 px feedback snapshots. Existing dev-only test dependencies reused, no added package dependency.
- Search regression passes six variants/120 assertions/six axe plus cold import. Mobile navigation passes four variants/436 assertions/four axe.
- Typecheck/content/full study/speech/dependency regressions, full production build, PWA/export and progress budget pass. npm audit 0 at check time. 1088 HTML/1073 sitemap, worker3mv3swt-KqAifu6RC-bBM, progress initial JS396125 bytes below500000.

## Contribution
Real source contribution: https://github.com/3mrdiab/Deutschy/commit/4c0bb0c190a50f56c732eb51ae8f7e507e145055 . Verified author 3mrdiab/account ID 356948613, exact main157 parent d470954f038601c68f22cfafa8ef3ee556e8de45. One substantive edit of the existing compressed component line, 1 addition/1 deletion; source byte-identical to tested component. Original commit integrated unchanged. Hinawi contributes repeatable browser/source regressions, test command and QA/manual-review records, with exact trailer for genuine contribution only. No empty commit, history rewrite or count-only split.

## Limits
Actual-device input/voice/screen-reader and native content-editorial checks remain manual. No native review/certification claim. Device-local data can be lost when browser storage is cleared or unavailable. Deployment owned separately.
