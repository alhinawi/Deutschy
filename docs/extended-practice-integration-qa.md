# Dictation, conjugation, dialogues, print and timed-practice integration

Checked 2026-11-16 against a local production export. Deployment and live verification are separate.

## Route and accessibility coverage

- 512 exported routes, Arabic/English, 390px/1280px: 2,048 checks on the final build. All returned 200; no page exceptions, broken local images, undefined links or horizontal-overflow findings.
- Export validator: 512 pages, 498 sitemap targets; internal assets/links and canonical/OG paths resolve. Static dynamic dialogue and sheet routes are included.
- 22 new full-document mobile WCAG A/AA axe states across both interface languages: dictation, conjugation, dialogue hub and four level examples, sheet hub, C2/dialogue sheets and timed practice. No violations found. Automated checks do not establish full accessibility compliance.
- Timed empty/active/feedback states separately checked. Existing dialogues and conversation/role-practice hubs preserved and spot-checked.

## Behavior

- Dictation: all six levels have sentences; case and umlaut differences remain meaningful; punctuation is ignored only in positional word comparison. Unsupported/no-German-voice state is honest. Mocked speech controls verify explicit playback, exact comparison, playback-error recovery and reset on level change. No real microphone or recording involved.
- Conjugation: 264 curated cells, correct auxiliary selection, six indicative tenses, Konjunktiv I/II and named würde alternative. Correct-answer mobile path and reference table are present. See source-linked conjugation audit; not a full verb dictionary or native-proofread course.
- Dialogues: 16 original fictional Egyptian-context situations, 64 bilingual turns, 32 glosses and 32 comprehension questions. Existing dialogue IDs/content/history keys untouched. New dialogue text is searchable, and opening its global-search result reaches the correct deep link. Quiz options no longer put the answer in one fixed position.
- Print: 67 sheets, 58 added, derived from current content. Real A4 C2 grammar and dialogue PDFs were rendered and inspected. Mobile sheets have no overflow. Print navigation/status are hidden, backgrounds are white and question blocks stay together. Not every sheet's PDF has had a manual pixel review.
- Timed: empty record stays empty; 10/20-minute deadlines and all six mixed banks tested; actual answer count, reload/resume, wall-clock expiry, single result, history reload, malformed active-session rejection and blocked-local-storage warning verified. Planned duration and actual elapsed time are distinct. No account or XP mutations.

## PWA correction and checks

Found and fixed shared-budget eviction: HTML navigations could previously remove early shared scripts. Shell, pages and assets now use separate caches: protected install shell, at most 80 cached page entries and 500 asset entries. Quota failure while caching does not turn a successful online fetch into a failure. API/account/admin/query/RSC requests remain excluded. Old versions are removed only on activation; deliberate waiting-worker update flow is retained.

`npm run test:pwa` covers bounded page eviction, protected shell, quota-safe online responses, exclusions and old-cache cleanup. Browser pressure test inserted 90 page entries, triggered trimming to 80 and confirmed shell/assets remained intact. After revisiting, seven new routes loaded offline with the static server stopped: dictation, conjugation, dialogue hub/detail, sheet hub/C2 sheet and timed practice. Active timed session resumed offline; an uncached page showed the fallback. Waiting update still warns, waits for a tap and reloads deliberately.

## Build checks and limits

`npm run verify`, `npm run test:study`, `npm run typecheck`, `npm run build`, `npm run test:pwa`, `npm run qa:export` pass. Vocabulary validator reports 662 entries, 58 topics, zero findings; existing article/plural records unchanged.

Device installation and real German speech quality remain device-dependent and unverified here. Offline caches are bounded, may be evicted and are not the full library. External audio/auth can require internet. New session/review data are local, not synced. No official CEFR/Goethe claim, native human proofreading, new backend/account work, paid services or purchases.
