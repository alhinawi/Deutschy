# Game academy: 23 real practice modes

Adds 23 working modes to the existing 9-game catalog, 32 total, without removing prior games or changing their progress identifiers.

## Included

- 657 challenges across vocabulary, grammar, listening and reading. Plurals, present forms and participles reuse the existing checked content banks. Twenty focused banks contain 12 authored challenges each.
- Searchable, categorized AR/EN catalog with available challenge counts and approximate practice-level filters.
- Typed answers with German character buttons, contextual choices, one-token error correction, constrained word/paragraph ordering, reading evidence questions and supported endings.
- Once-per-challenge XP for unaided correct work. Immediate submission and Next guards; replay cannot farm points. No manual completion toggle.
- Listening completion gate, assisted-text path, visible unavailable-audio state and cancellation. No invented pronunciation scores or multiplayer.
- Existing server-account progress and guest tab-memory behavior preserved. Visible save failure handling. No client persistent storage, new paid services or generated audio purchase.
- Relevant existing noun/verb photographs reused where they teach the target item.

## Verified

- Production Next.js export: 1137 pages, internal links and 1097 sitemap targets checked.
- 11,763 bank/model assertions.
- 199 gameplay/browser checks and 17 clean accessibility snapshots, including Arabic/English mobile layout, 320px wrapping, all 23 modes, duplicate submit/Next guards, full rounds, replay deduplication, account persistence, guest storage blocking, save failures and audio control fixtures.
- Existing study/review regression suite.
- Existing account-state browser regression: 48 checks and 7 clean accessibility snapshots.
- Actual screenshots inspected. Corrected pre-answer reading-translation leaks, Arabic progress direction and a token-bank accessible-name issue.
- Native editorial packet updated, no reviewer sign-off added.

## Limits

Practice bands are not official CEFR mapping. Model-order tasks explicitly ask for the supplied model rather than claiming to accept every correct German sentence. Similar-sounding listening pairs are not all strict minimal pairs. Audio fixtures test controls, not real-device voice quality or full recording coverage. Native German/Egyptian Arabic review remains open.

The separate 7000-sentence library and paused photograph pass are not included.

## Grammar references

Original examples, with rule checks against:

- https://deutsch.lingolia.com/de/grammatik/zeitformen/perfekt
- https://deutsch.lingolia.com/de/grammatik/verben/passiv
- https://deutsch.lingolia.com/de/grammatik/verben/konjunktiv
- https://deutsch.lingolia.com/de/grammatik/nomen/faelle

Deployment is separate from this PR.
