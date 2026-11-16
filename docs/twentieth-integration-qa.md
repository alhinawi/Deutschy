# Twentieth list: integration check

2026-11-17. Content additions are in e56d224, 928ae32 and 4143dde. No backend, account, purchase or deployment change in this batch.

## Content and identity

- 676 photo nouns / 60 topics. Existing 673 nouns and 59 topics remain unchanged exact prefixes.
- 78 readings / 265 comprehension questions. Distribution: A1 8, A2 21, B1 19, B2 12, C1 9, C2 9. These are content counts and approximate practice labels, not evidence of complete level coverage.
- 18 general dialogues, plus 16 separate Egyptian-context dialogues.
- 41 core grammar topics / 430 core questions. Existing 406 question rows and positional IDs remain unchanged; 24 items appended.
- New linked readings/dialogues concern window plants, a games-night invitation and shared garden responsibility. The readings add 40 focused dictation sentences. Three checked garden-care photos add watering can, flowerpot and wheelbarrow.

## Build and routes

Typecheck, study, content verification, shared-speech, PWA and static-export checks pass. Build exports 547 HTML pages with 532 sitemap targets. Static route graph reaches 540 ordinary routes without dead ends, excluding the 404/admin routes and six gated record routes.

Targeted browser sweep: 19 affected routes and hubs × Arabic/English × 390/1280px = 76 navigations. No navigation error, page error, broken loaded image, undefined link or document overflow found. Exact scope is in `twentieth-route-qa.json`. This is not a full-site browser sweep; unloaded lazy images are outside the image check.

## Focused browser checks

Arabic/English × 320/390px:

- 24 reading/listening sessions / 96 answers: exact support text, hidden/revealed transcript, single history, retry and double-input locks.
- 12 dialogue sessions / 36 answers: exact evidence, retry/history behavior and role practice.
- 24 grammar sessions / 312 answers, including 96 new-question answers: stable-ID history, once-only XP and duplicate input.
- Four full garden photo quizzes / 12 answers and four loaded lesson/credit layouts.
- All 40 new dictation sentences selected in each language/width combination: 160 utterance-text, exact-match comparison and source-link checks. German speech APIs were mocked for deterministic checking; this does not verify audible pronunciation. No dictation score was stored. Initial harness failures were fixed by mocking the utterance object as well as the voice API, with no product change.

Total: 456 reading/dialogue/grammar/photo answer checks plus 160 dictation exact-match checks. 60 representative axe states pass selected WCAG A/AA tags; this is automated subset checking, not an accessibility certification. Actual Arabic/English mobile screenshots inspected, including the dictation comparison and garden topic.

## Offline and review

After 90 synthetic cache-pressure requests, the three new readings, garden lesson and dialogue index rendered offline, within the 80-page budget (four shell entries and 53 assets observed). This checks route rendering, not every exercise, query parameter or speech voice offline.

The native editorial review checklist now includes this batch and current inventory. Its seven-page PDF was visually inspected; the findings template stays with its heading and no reviewer/sign-off is invented. German and Egyptian Arabic editorial review remains pending. Device voices vary and may need internet; there are no human recordings or pronunciation assessment. Learner records remain device-local, not account-synced. Test activity is private QA, never earned learner progress. Parent handles deployment separately.
