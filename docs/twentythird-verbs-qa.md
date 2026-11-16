# Twenty-third list: verb-index usability

2026-11-17. Existing verb index search depended on a placeholder, did not trim or normalize queries, lacked a reset or explicit empty state and did not expose selected filter state. Added a visible associated search label, NFC/case-insensitive trimmed matching, minimum 44px filter targets, aria-pressed buttons, live result count, clear-all and empty guidance. All 143 default verb links remain, no learner-record writes.

AR/EN × 320/390/1280: default 143 links, padded/case/decomposed-umlaut search, empty-state recovery to identical links, A1 selected state, combined Arabic/English meaning search, no record writes or document overflow. Six representative axe states pass selected WCAG A/AA tags. Arabic 390px pixels inspected. Initial QA used füllen, which is not in the current 143-verb inventory; corrected the test to existing hören, not a product behavior change. Not native proofreading or a full accessibility certification.
