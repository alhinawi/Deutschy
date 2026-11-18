# Shared audio fallback, disabled build

Server-only fallback for Deutschy and Henglish. No D1 is used. One SQLite-backed Durable Object serializes the shared ledger, cache and conservative generation reservations. This source has no credentials and no deployed endpoint.

## Hard launch gates

- Deploy ONLY after the operator verifies Workers Free, with no billing upgrade. SQLite Durable Objects are documented on Workers Free. Do not assume a paid account is cost-free because usage is small.
- `FALLBACK_ENABLED=false`, `POOL_ROTATION_ENABLED=false`, empty `ELIGIBLE_SLOTS` and `SINGLE_SLOT` ship in config. Both site flags must also remain off.
- The text allowlists ship empty. Builders must provide reviewed exact-text arrays with source commit, count and SHA-256. Merge each into `src/allowlist.json` and retest. Never authorize arbitrary browser-supplied text.
- All 14 credential reads were inconclusive from the audit network. None is validated as a working API key, distinct account, free/no-overage account, or remaining-quota source. Do NOT mark slots eligible from the saved-entry count.
- Multiple free-account rotation must remain off pending permission review. Published provider rules currently permit one free account per user/IP; free outputs require attribution and non-commercial use unless an applicable agreement changes that.
- No production real-generation canary was performed. Mock tests do not establish provider success.

## Interface

See `VOICE-CONTRACT.md` and `src/voice-roster.json`. Site server binding name: `AUDIO_FALLBACK`. Call `POST https://audio-fallback.internal/v1/speech` with bearer service token, X-Audio-Site header, and `{text,language,voice,fallbackReason}`. Only site handlers call this service. No browser endpoint or CORS is supplied. Service route is private by default (`workers_dev=false`, no routes).

On success, raw audio/mpeg with X-Audio-Cache HIT/MISS. All errors are JSON `{ok:false,code,retryable:false}`, never provider bodies. Status codes: 400 invalid_request/voice_not_allowed, 401 unauthorized, 403 site_not_allowed, 404 text_not_allowed, 409 generation_in_progress, 429 daily_cap/rate_limited, 502 provider_failed/ambiguous_result, 503 disabled/no_eligible_key/quota_unavailable/storage_unavailable, 507 storage_cap.

## Secret installation, operator only

Provider credentials map to ELEVENLABS_KEY_1 through ELEVENLABS_KEY_14. The private operator handoff owns the exact account-to-slot mapping; account labels and credential audit records do not belong in this repository.

Write each only to the matching Worker secret from an approved vault file, without printing it or putting it on a command line. The shared bearer `AUDIO_FALLBACK_SERVICE_TOKEN` must also be generated securely and installed in the service plus both site handlers. Its length must be at least 32 characters. Never reuse a provider key as the service bearer. Site handlers must never return it to clients. The deployer owns actual binding installation and checks, not this source archive.

`scripts/audit-credentials.py --input DESCRIPTOR.json --output AUDIT.json` performs only subscription/user READs, with bounded timeouts. Descriptor rows are `{name,path}` where path is an approved private vault file. It hashes key/account identity locally, prints no secret values, and deletes the temporary secret files. Dependencies: Python requests. Do not submit the descriptor or secret files to version control.

## Safety behavior

Static/free/browser playback comes first in each site. This service cannot prove that browser playback failed; trusted site handlers/builders enforce that gate. Stops, AbortError, autoplay denial, stale navigation and superseded requests must not call it.

The shared daily ceiling is at most 1000 codepoints, across both sites. Each attempted generation is debited before the request, including a failed or ambiguous attempt. There are at most six cache-miss attempts per site/minute. Cache capacity is 64 MB, reserving a maximum 512 KB clip before generation. Same-text requests serialize; a successful cached response never generates again.

Before generation, the selected account's subscription must confirm free tier, disabled overage and enough remaining characters. Unknown/paid/overage-enabled accounts fail closed. If rotation is off, only the explicitly eligible SINGLE_SLOT can run. With rotation enabled after approval, eligible slots rotate by request. No same-request retry or key cycling follows quota/auth/abuse/rate/network errors. Failure parks the key; ambiguous timeouts retain a pending text marker indefinitely for manual provider-history reconciliation. No automatic reset guesses, refunds, deletion of pending markers, retries or scheduler are included.

Inspect the SQLite ledger before any manual recovery. `daily` has debit counts, `pending` has unresolved request fingerprints/slot/time, `parked` has slot/error category, and `audio` has exact text-profile hash/bytes. These are private operational records, not a public status endpoint.

## Verification

Node 22: `npm ci`, `npm test`, `npm run typecheck`, `npm run test:runtime`. The runtime smoke uses a local Worker and SQLite Durable Object, denies all outbound calls and verifies the empty allowlist fails closed. `npm run check` is a build-only dry run, not a deployment.

Tests cover disabled/auth gates, canonical allowlists, voice IDs, 14-slot eligibility, one-slot mode, persistent cache, concurrent deduplication, conservative debit, quota/auth/rate errors, ambiguous timeout markers, free/no-overage subscription checks, and daily/storage caps.

## Remaining handoff

Deployer must confirm Workers Free and available SQLite Durable Object support; install service/site bindings and shared authentication; repeat account READs from a permitted network; verify identity/account distinctness and provider rights; accept allowlist/voice artifacts from builders; deploy disabled. Only after the owner/main authorizes the eligible slots and activation may any real fallback generation occur. No deployment or paid purchase was done here.

Reviewed allowlists now contain 37,533 Deutschy strings and 48,489 Henglish strings. Original artifact hashes and source commits are in src/allowlist-provenance.json. All execution gates remain disabled.
