# Ninth list: reliability audit and integration

1. #138 shared German-only speech and stale-async stop safety; visible reading-mode fallback.
2. #139 shared quiz result saved once on completion, explicit feedback and no-voice status, answered controls disabled.
3. #140 daily-review shape validation and safe write lock on corrupt original records.
4. #141 main progress shape validation, isolated defaults and visible write/corruption failure; valid history preserved, no silent reset.
5. #142 strict model-spelling comparison in old conjugation trainer, field/listen labels and stated model limitations.
6. This PR wires isolated speech regression command into package scripts, tests default-history isolation and exercises quota-failure state plus final integration.

Tests:
- Typecheck, study regression, isolated speech tests and export build pass. 534 pages/519 sitemap targets; internal links/assets checked.
- Actual browser quota failure after answering: no uncaught exception, original saved bytes unchanged, visible site-wide warning and answered-state axe pass.
- Completed full 534-route sweep in Arabic/English at 390/1280px (2,136 final observations), no unresolved exceptions, overflow, broken images or links.
- Initial English C1 level-check navigation had transient chunk-load error under concurrent sweep. Five serial reloads passed; repeated entire affected 180-route English chunk passed. Earlier failed observation is not represented as first-pass success.
- 14 bilingual mobile entry axe/overflow checks; six visited affected routes work offline after server shutdown, cache pressure preserves shell/assets, unknown-route fallback works.
- Actual malformed-progress and malformed-review paths retain originals. Shared quiz completed eight questions and stored exactly one score before/after restart. No seeded user progress was shipped; all synthetic QA data was confined to test profiles.
- Screenshots inspected for storage-error, offline, quiz completion, no-voice, malformed-review and conjugation feedback states.

Limits: configured remote TTS and real-device German output, physical-device install/download UI and native language proofread remain unverified. Corrupt-history protection is a warning and write lock, not a repair or backup. Larger legacy generated-tense bank wasn't re-audited as part of spelling-check fix. No new backend/accounts/purchases/official-assessment claim.
