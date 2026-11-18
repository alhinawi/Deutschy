# 173: Clear noun photos, reviewed-file guard and license links

## User-visible change

- Screened 965 noun thumbnails, expanded 8 uncertain originals, replaced 3 with clearer licensed real photos: Pflaster, Adventskranz and Spielplatz. Kept 962. This is a relevance screen, not native-language or blanket legal approval.
- The bandage image uses disclosed neutral padding so all unused bandages remain visible in the card crop. No wounds, people or branded healing claims in its new photo.
- Exact supported CC BY/BY-SA 2.0/2.5/3.0/4.0 and CC0 labels now link to license terms. Unknown, localized and mixed labels remain plain text rather than being guessed.
- All noun text, articles, plurals, word IDs, topic order and learner storage remain unchanged. Data tuple comparison against main passed. Public paid-provider audio remains off and untouched.

## Sources and review record

See `docs/photo173-audit.md` for the three verified original-file URLs, author/license details, retained uncertain images and scope. `data/noun-photo-audit173.json` pins 965 reviewed image SHA-256s, before hashes and file/source/license/author/padding fields. The guard is part of `npm run verify`; changing a reviewed image or credit needs a deliberate recheck and ledger update. It cannot prove semantic correctness from hashes.

Genuine 3mrdiab helper contribution preserved as an original ancestor, moved byte-identically from the fork root into the application library:
https://github.com/3mrdiab/Deutschy/commit/446d01fb657531cc7e226d157decb8d864bdb129

The primary implementation commit is by Hinawi with accurate coauthor credit. No upstream-main push, rewrite, empty PR split or badge-tier claim.

## Passed checks

- Typecheck, study regressions and production build. Three prior source-string license assertions were upgraded to helper-value checks plus component wiring checks; their original license expectations remain intact.
- Noun-photo model guard: 6781 assertions for 965 hashes, metadata and exact supported/unsupported license inputs.
- Noun-photo browser: 72 assertions, AR/EN at 320/390px, 12 lesson image checks, 12 original-photo/license link pairs, 16 clean axe snapshots, no progress mutation.
- Word discovery regression: 3990 assertions, 4 AR/EN320/390 variants, 3 routes, 12 clean axe snapshots. File/author search and translated discovery unchanged.
- Navigation: 476 assertions, 4 AR/EN320/390 variants, 4 clean axe snapshots.
- Dependency/PostCSS checks, content verification, PWA safeguards, export/internal links, sitemap and progress budget. 1105 HTML pages, 1089 sitemap targets; progress initial JS 396347 bytes.
- Production dependency audit: 0 vulnerabilities.

## Pixel checks and caveats

Inspected actual 390px AR and EN screenshots for all three cards and credits. First bandage rendering cropped edge examples; added neutral padding, rebuilt and re-ran the complete image/browser guard, then inspected updated pixels. Wreath shows four candles and playground shows equipment without people. No horizontal document overflow in the 4 responsive variants. Credits retain source links, correct author, license links and existing notices.

Updated native-review Markdown/PDF: 147 pages; inspected pages 145-147, including the entire new section and final inventory/sign-off page. Native German/Egyptian Arabic editorial review and real-device/audio checks remain pending. Automated tests and desktop-emulated mobile screenshots do not establish those approvals.
