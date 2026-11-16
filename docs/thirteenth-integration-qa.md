# Thirteenth integration QA

Checked 2026-11-16. Content milestones: `36ba05f`, `62037fc`, `e78857e`, `d31c486`. Final integration adds long-noun quiz layout protection and this record.

## Delivered

- Two original fictional everyday reading/listening texts, eight exact-evidence comprehension questions, matched Egyptian Arabic paragraphs and glosses. Existing text identities unchanged.
- Reading answer locking, disabled answered choices, status text, six-way option ordering and retry variation.
- Six new source-checked present-tense verbs: 12 total / 72 forms. Specific contrast notes, next-person reset and honest unsaved-practice limit.
- Exact accessible seven-day local XP history. Current streak expires in display if last activity is older than yesterday or future-dated. Historical persisted data is unchanged. Device clock, no-sync, zero-XP activity and XP-level limits explained.
- Native-language editorial review checklist in versioned Markdown. An inspected four-page printable PDF and editable Markdown were delivered separately. No reviewer sign-off is claimed.

## Regression and visual checks

- Typecheck, 669-word/58-topic verification, study, speech, PWA and production build pass.
- Static export: 536 pages, 521 sitemap targets, internal links/OG image checks pass. 529 ordinary routes reachable with no dead ends. Six certificate routes remain state-gated; no official qualification is claimed.
- Fresh final-build sweep: **2144 navigations**, 536 routes × Arabic/English × 390/1280px. No remaining page errors, failed navigation, broken loaded main images, undefined links or document overflow. Batch summary in `thirteenth-route-qa.json`.
- New texts: Arabic/English × 320/390px × two texts × reading/listening = 16 completed sessions / 64 answers. Two synchronous clicks still save one answer; exact evidence appears; 4/4 scores are reachable; retry changes option order. Listening transcript starts hidden and can be shown/hidden. Separate reading/listening history prefixes retained.
- Present forms: all 36 new cells accepted in each language (72 checks), input/result clears for next person, missing-umlaut answer shows the correct form.
- Progress: 12 Arabic/English × 320/390 × today/yesterday/three-days-ago states. Seven exact XP rows, expected current streak, unchanged saved streak/best and no horizontal overflow. Unit tests also cover year boundary, empty/future activity dates and nonmutation.
- Axe WCAG A/AA checks: 8 reading-feedback, 2 present-focus, 12 progress and 4 quiz states = 26 focused states with no violations detected. This is not a full assistive-technology audit.
- Offline: both new reading texts, conjugation, progress, photo quiz and credits render after a visit. Synthetic 90-page cache pressure retains the bounded 80-page budget and protected shell/assets. Unvisited route shows the offline fallback. Browser voice availability remains device-dependent and is not guaranteed offline.
- Visually inspected Arabic/English reading evidence, present-form correction, seven-day table, 320px long-choice quiz, default offline credits and all four PDF pages. QA-only injected history/long-label fixtures are not learner data and are not shipped.

## Defect found and fixed during QA

A random English photo-quiz choice containing a long German noun widened a 390px page to 420px. Choices now use a single column below 480px and allow wrapping; article-game noun headings also wrap. Testing the 12 longest actual noun labels in all four Arabic/English × 320/390 combinations (48 fixture states), plus 32 random reloads, found no remaining overflow. The first two-column wrap-only attempt was visually awkward at 320px, so it was replaced with the readable mobile single column before completion.

One local sweep also reported a transient lesson chunk-load error, while the source server logged HTTP 200 for the chunk. A full fresh batch and the complete final-build sweeps did not reproduce it. No missing chunk remains in export checks; this is retained as a test-environment observation rather than hidden or called a product fix.

## Limits

Native German and Egyptian Arabic editorial review is pending, with specific targets in `native-language-review-checklist.md`. Practice grouping is not an official CEFR/Goethe claim. Progress is device-local; browser synthetic speech is not a human recording. Automated checks cannot establish fluency, pedagogy or complete accessibility. No purchases, backend or account changes. Local export QA does not establish deployment state.
