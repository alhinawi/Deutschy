# Account storage 186

## What changed

- All new study data, drafts, review cards, check results, timed sessions, weekly plans, last-page state, language, appearance and voice/effect preferences use tab memory. There are no localStorage, sessionStorage or IndexedDB accesses in application source.
- Signed-in users load a complete private account snapshot before study components mount. Edits are saved to `/api/me/state` with a 500 ms debounce. Only a successful server acknowledgement displays "Saved to your account".
- Guests use memory only. Reload, closing the tab or authentication navigation discards new guest work. Sign in before starting work that needs saving. Navigation within the application keeps the tab memory.
- Existing server-side progress seeds the fuller account snapshot without resetting its XP, streak, best, name or answer history. The old progress table remains intact.
- Historical browser records are left untouched: no read, write, deletion or automatic import. They are not shown as current guest work. A future controlled import must explain conflicts and confirm the destination account; this release does not promise that import has occurred.
- Static PWA caches remain enabled. The worker excludes API/account/admin requests, query strings and RSC requests. Only the static shell, public pages, fonts and images are cached. API state and identity fetches and responses use `no-store`.
- The necessary HttpOnly, Secure session cookie and short-lived OAuth state cookie remain. Authentication cannot work without session state. No study data is put in a cookie.

## Safety and failure behavior

- Server identity is authoritative. A snapshot write includes its account ID, checked against the signed session. A caller cannot select another account by changing the payload. Score writes also carry the current account ID.
- Revision-based compare-and-swap prevents stale tabs/devices from overwriting a newer snapshot. Concurrent first inserts are also protected. Conflict retains the current tab's edits, stops writes and asks the learner to copy important text and reload.
- A failed load blocks the study interface rather than loading an empty account and writing it back. Temporary guest practice is an explicit alternative.
- Network errors retain edits in the current tab. Retry and the browser online event can retry a failed save. Failure, conflict and pending saves warn before unloading. Sign-out checks saving before dropping the session.
- A save uses a 20-second timeout. Unknown save outcomes can require a conflict reload; the client does not assume an unacknowledged request failed to reach the server.
- The API requires same-origin writes, validates key names/string values and limits snapshots to 400 entries, 250,000 characters per value and 1,000,000 encoded bytes overall. Request bodies above 1,500,000 bytes are rejected.
- The old partial progress endpoint refuses writes after the new account state exists. It cannot overwrite the authoritative snapshot. Public rankings and admin totals read the fuller snapshot with legacy fallback; damaged JSON in one record cannot break rankings.
- This is not a collaborative merge engine. Opening/editing multiple tabs can produce a safe conflict. No background last-writer-wins merge is attempted.

## Deployment order

The maintainer owns deployment. No production database change has been made by this PR.

1. Export/backup the production D1 database using the existing deployment account and confirmed DB binding.
2. Apply `migrations/0003_account_state.sql` to that database. It is additive and idempotent; it does not delete existing user/progress data.
3. Deploy the Pages API and static frontend from this same revision. Do not deploy the frontend against an API without `/api/me/state` or a database without the table.
4. With a test account, confirm old server XP/answers appear, write a draft, wait for acknowledgement, then reload. Confirm it comes from the account. Confirm another test account cannot see it.
5. Confirm guest reload resets new work, failure is visible, and a stale tab conflicts without overwriting. Verify the static worker still excludes private endpoints.

Do not remove the new table or historical local records during rollback. If rolling back the frontend, keep the new account API and authoritative data available; the old partial sync is intentionally not permitted to overwrite it. Reconcile any rollback strategy before reopening writes.

## Verification

- API/client model: 48 checks covering signed identity, same-origin enforcement, malformed/oversized/prototype keys, account isolation, legacy server seeding, concurrent inserts, stale revisions, damaged rankings, single-flight initialization, pending edits, network errors/retry, no overwrite after conflict, account reload and guest reload reset.
- Browser: 96 checks across 320/390 px in Arabic/English, fourteen axe snapshots. Persistent browser storage is blocked and any access is recorded as a failure. Real typing exercises acknowledged drafts/reload, automatic completion and once-only XP, theme/language reload, weekly-plan save/reload, timed-session resume and review-card saving.
- Existing type checks, production build, study/review checks, speech model, interaction-effects model, 20-theme/140-pair contrast model, PWA tests, content/photo/animal verification, export link checks and progress bundle budget pass.
- Screens inspected: Arabic/English draft, guest notice and server-failure state at 390 px. The save strip is in document flow, not an overlay.
- These are local fixtures, not a claim of production deployment or a real-user account test. Native language and real-phone approval remain pending.

## Follow-up

The all-level relevant-photo request is still next. No new photographs are included in this storage PR.
