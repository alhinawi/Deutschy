# Tenth list integration QA - 2026-11-16

## Landed work

1. Noun pass (#144): 662 unique records, A2 reuses 47. 652 dictionary parser matches and 10 labelled manual reviews. One corrected record: plural headword normalized to `der Laufschuh` / `Laufschuhe`, stable ID retained. One article field, one headword and one plural field changed, not three distinct noun errors. Proper names/compound reviews are explicitly not fabricated exact dictionary hits. See `tenth-noun-audit.md/json`.
2. Photo pass (#145): all 662 files exist and were visually screened. 21 changed: 10 replacements and 11 face-excluding crops. Illustration, wrong cone, spider prey, specimen/raw imagery and recognizable-face problems fixed, with source/license metadata retained. See `tenth-photo-audit.md/json`.
3. Copy pass (#146): 20 high-visibility pages, not falsely labelled most-visited without analytics. Clearer Egyptian phrasing, proper counted nouns, practice/audio caveats, no unsupported Goethe-theme claim, no repeated A1 bank totals on higher paths. See `tenth-copy-audit.md/json`.
4. Performance (#147): 410 photos optimized, 25,173,141 bytes saved. Searchable 40-row credits pagination keeps all 662 records accessible. Five isolated cold 390px slow-network before/after tests documented, including routes with no material improvement. These are local single-sample measurements, not production performance claims. See `tenth-performance.md/json` and `tenth-image-performance.json`.
5. Search/recovery (#148): direct trilingual entries for 58 lesson topics; all 527 ordinary exported routes reachable with exits. Custom bilingual 404 tested through exported artifact with real HTTP 404 and successful global-search recovery to a lesson. See `tenth-navigation.md`.
6. Live-review follow-up (#149): main caught credits opening at the wrong end in RTL. Fixed the scroll container to LTR, then checked the actual default 662-result 390px page so Word/File and their headers are visible first, not just a short search result.

## Final automated and browser checks

- Typecheck and static production export pass.
- Study regression suite passes, including all 58 lesson topics searchable by German/Arabic/English title and 3-10 / 11+ counted-noun fixtures.
- Speech regressions pass: German-only voice, explicit cancellation and no stale async playback.
- PWA regressions pass: bounded page cache, protected shell, safe quota failures, account/API/admin/query/RSC exclusions and old-cache cleanup.
- 662 noun/image/credit records, 58 topics, no missing photo metadata/files.
- 534 exported pages' internal links/images and 519 sitemap targets pass.
- 527 ordinary pages reachable from home/hubs, with no dead ends. Only admin, 404 and six state-gated certificates excluded from this graph assertion, not learning pages.
- Full Arabic + English sweep of all 534 pages at 390px and 1280px: 2,136 navigations. No broken loaded images, JavaScript page errors, invalid undefined links, failed navigation statuses or page-level horizontal overflows. Six chunk summaries in `tenth-route-qa.json`.
- 14 bilingual core entry-state axe checks pass, plus the new credits search result state. Credits pagination traversed all 17 pages and exactly 662 records; search for Laufschuh returns the corrected singular headword.
- Six visited learner routes work offline after synthetic cache pressure; page cache stays at 80, shell/assets survive, and a never-visited route shows the offline fallback.
- Visual checks: all noun-photo contact sheets, changed-photo second pass, largest-eight compression before/after, actual 390px noun cards, copy page, default credits Word/File start, and custom 404. The first photo crop and table-caption overflow checks found defects that were fixed and rechecked before merge.

## Honest limits

- Production deployment and live unknown-path 404 routing are owned by the deployment check. Local artifact tests do not prove the host has deployed or routes unknown URLs correctly.
- No traffic analytics were available. The 20 pages are selected high-visibility learning/entry pages.
- The 652 matches are a source consistency pass, not external native-editor certification. Ten exceptions have distinct manual methods. All noun topics currently carry an A1 code grouping, which does not prove every noun is pedagogically A1.
- Photo review is a manual screen, not a biometric guarantee about every distant figure. Silhouettes, mannequins, masked workers and relevant cooked dishes remain. No irrelevant photos were added to text-only tools; useful SVG diagrams/icons remain.
- Egyptian Arabic/German editorial changes have not had an external native proofread. No official CEFR/Goethe endorsement or full-syllabus claim is made.
- Progress remains browser/device-local, not synced. Browser voice/recognition availability varies; no score is claimed for pronunciation. Offline support covers cached visited content, not all routes/media or recognition services.
- No purchases, new account/backend work or external communication introduced.
