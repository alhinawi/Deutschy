# Deutschy speech deployment

## Status and publication gate

Dynamic provider path remains prepared, not enabled. Static speech publication178is separate and approved for noncommercial free use, with attribution; see static-speech178.md. `TTS_ENABLED` is absent/false by default. Both generation and cached provider audio are unavailable while disabled. Do not switch it on until the owner approves voice/publication use and the applicable ElevenLabs license and attribution requirements are satisfied. Free-plan commercial rights are not included. No paid upgrade or billing activation is authorized.

The private approval preview used 208 characters across all21 premade voices, plus an earlier83-character Alice clip. Neither clip is a public site asset. All21 succeeded on the free dedicated12 key with German `eleven_multilingual_v2`. This proves successful generation, not native German accents or editorial approval.

Sources checked November18,2026:
- https://elevenlabs.io/docs/overview/capabilities/text-to-speech
- https://elevenlabs.io/docs/api-reference/voices/search
- https://developers.cloudflare.com/api/resources/d1/subresources/database/methods/export/

## Audio order and settings

Reviewed human recording when one exists, then manifest-only site proxy, then an identified German Microsoft/Edge browser voice. There are currently no human-recorded speech assets. The empty recording index must not be filled with synthesized files mislabeled as human recordings. Google/Android/unknown/default voices never qualify. Microphone recognition is a separate pre-existing browser feature, not a TTS provider selection.

`/settings/` offers Varied(default) or one of21 fixed premade voices. Varied chooses a stable voice using the first8 hex digits of SHA256(canonical German text),modulo the pinned roster length. Same canonical noun+article keeps the same voice across keys and visits. Different words can share a voice. Do not reorder/change the roster without a deliberate profile version change. The selected voice ID is included in the cache profile. No arbitrary provider voice ID is accepted.

Preference keys are separate for each authenticated numeric user ID and for guests in localStorage. The setting is local to this browser, not cloud-synced. Failed identity/storage reads do not write a replacement;failed saves do not report success. Auth changes use the site's existing full-page navigation. Recording/Edge voice selection is not changed by this setting.

## Provisioning after publication clearance

1. Revalidate the Pages project `deutschy`,production branch `main`,and its existing `DB` binding to `deutschy-db`.
2. Export D1 before applying anything. Download the SQL privately and verify a local isolated restore. A pre-TTS backup was made November18 before any production schema write and retained privately;it is not checked into this repository. Take a fresh export if applying at a later time. Export can briefly block D1 queries,so poll its returned bookmark until complete.
3. Apply `migrations/0002_tts.sql` to the bound database. It creates only six new `tts_*` tables. Existing users/progress tables are not modified. Rerunning the migration preserves data.
4. Run `npm run tts:manifest`. Deploy generated `data/tts-manifest.sql` in bounded batches to D1. These are exact content-derived normalized strings and bounded forms already offered by site exercises,not fabricated filler. Additive UPSERT only,no DELETE/REPLACE of old content. Generated deployment files are ignored by git. The current generator emits29872 unique strings/1913006characters;342overlong whole readings/dialogues are excluded by the1000-character endpoint limit. Their shorter real paragraphs/sentences remain eligible. Do not describe the manifest as complete coverage of arbitrary user text or every dynamic price.
5. Put each permitted key into server-side Pages/Worker secrets only:`ELEVENLABS_KEY_1`through`ELEVENLABS_KEY_9`,then`ELEVENLABS_KEY_12`. Never put values in source,public files,logs,command arguments or browser JavaScript. Use secure stdin from an approved private credential file with the relevant Wrangler secret command. Keys10/11/13/14belong to other sites and must not be copied here. No secret installation has been claimed by this batch.
6. Use `TTS_DAILY_CHAR_CAP=1000` or a smaller positive integer. The code rejects larger overrides back to1000. This is a per-site limit,not a cross-site shared-pool quota. Only after all checks and owner clearance,set `TTS_ENABLED=true`.
7. Smoke-test one known noun in varied and fixed mode. Verify cached repeat does not change usage. Test a nonmanifest string is rejected without provider usage. Observe quota/storage tables without exposing credentials. No automatic bulk-generation script is included.

## Safeguards

- Exact canonical text plus SHA256 manifest match before vendor access. Cross-origin browser requests refused,no open CORS.
- D1 audio cache,not R2. No billing activation. Cached audio is served only after the enable gate and manifest check.
- Same-profile/text D1 lease prevents ordinary concurrent duplicate calls;cache is written before release. Vendor calls have8-second timeout;ten sequential slots cannot exceed the180-second lock lease under normal fetch timing. Unknown-timeout outcomes never retry another key. Crash/storage-outage exactly-once billing is not claimed.
- One conditional atomic SQLite statement reserves each attempted call against the UTC-day cap. Failed/unknown calls are conservatively not refunded. Quota-fallback attempts also consume reservations.
- Pool1-9 before dedicated12. Only explicit `quota_exceeded` parks a key;rate limits/auth/abuse/unknown failures stop instead of cycling accounts. Quota-exhausted keys remain parked until an operator verifies vendor reset,then explicitly clears/updates only that TTS key-state row. No guessed calendar reset.
- Atomic512000-byte storage reservation before a new generation;64MB ceiling for this new cache. Accepted clips must be valid audio MIME,nonempty,and at most512000bytes. Release unused reservation after cache success or known failure. Crashes can leak reservations and reduce available capacity,not silently remove the ceiling. Existing database growth remains separate.
- Varied/fixed profiles can create separate clips and consume separate credits. Changing the dropdown itself makes no generation request. No claim of all-account/global quota coordination.

## Rollback

First set `TTS_ENABLED=false`;leave secrets and new tables unused. If needed,redeploy the prior application version. The new schema is additive and can remain in place. Do not restore an old whole-database backup over newer users/progress simply to undo speech. Keep the private export for recovery;any destructive cleanup or whole-DB restore needs a separate reviewed plan. No rollback SQL deletes are shipped.

## Verification

`npm run test:tts` uses isolated real SQLite with mocked vendor responses. It checks cap boundaries,manifest refusal,cache reuse,in-flight locks,quota-only parking,pool order,storage budget and additive migration. `npm run test:speech` checks client order,cancellation and Edge exclusion. `node scripts/test-audio-browser.mjs` checks provider-first playback and per-account settings on320/390px Arabic/English pages without production credits. These do not prove deployment or native pronunciation quality.
