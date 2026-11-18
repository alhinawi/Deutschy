# Daily review save integrity 174

## Reproduced baseline

Merged 173's AnswerReview persist helper updated React state before attempting `writeReview`. A forced QuotaExceededError for `deutschy:review:v1` left the physical storage empty while the UI displayed Unsave, pressed=true, 1 saved word and 1 due card. An alert existed, but the rest of the screen misrepresented durable state. Grading used the same optimistic helper and could move on after failed scheduling.

## Change

The synchronous commit helper reads current storage, refuses unreadable snapshots, applies a scoped change, then returns a successful next state only after writing. Failure returns the readable prior state. UI word saves/removals use that result, preserving the last durable choice/count and providing retry guidance. Each action reads current storage rather than replacing the whole record from stale component state. A storage event refreshes visible review data. No atomic cross-tab lock is claimed.

An answer's feedback stays visible on schedule failure, but Next is replaced by an explicit Retry saving answer button. The same attempted answer is retried, without answering again. XP/seen updates are delayed until the review schedule write succeeds. A ref locks successful grading so double-click retry cannot advance the box or XP twice. Existing storage keys, scheduling intervals and card format remain unchanged. Unreadable originals are not overwritten.

The general XP record and review schedule remain two separate stores. This does not make them atomic, handle all storage failures across the site, guarantee cross-device sync or protect against clearing browser data.

## Genuine contribution

Original helper authored under 3mrdiab, verified author ID356948613 and parent main173, preserved as ancestor and moved byte-identically into `src/lib/review-commit.ts`:
https://github.com/3mrdiab/Deutschy/commit/651ce25c9785cfca32c5a045cacec0cf4260f55e

## Checks so far

- Typecheck, full study suite, production build.
- Helper test16 assertions: successful writes, quota failure, latest snapshot, unreadable inputs/output, throwing mutation and retained unrelated cards.
- Browser112 assertions, 4AR/EN320/390variants, 4axe snapshots: failed Save and Unsave, retry recovery, latest-state unrelated-card preservation, grading failure, no XP before schedule saved, independent points-store failure and recovery, exact due date, double-click retry schedules/awards once, finished round, newly unreadable raw bytes retained.
- Discovery3990assertions/12axe. Four390pxAR/ENsave/grade error screenshots pixel-inspected. Synthetic QA fixtures only.

Final regression: discovery3990/12axe, navigation476/4axe, content965words/199topics/0problems, noun-photo6781, full study suite, typecheck, production build, PWA, progress396347bytes, dependencies, export1105pages/1089sitemap and production npm audit0. Updated native checklist and its PDF remain explicitly unsigned. Native German/Egyptian Arabic and real-device checks are pending.

Points/history failure is independently tested after a successful date write. The partial-save message is explicit. Its retry only writes points/history, leaving the already saved date and box unchanged. A reload or navigation can discard the unsaved in-memory attempt. The separate records are not an atomic transaction.
