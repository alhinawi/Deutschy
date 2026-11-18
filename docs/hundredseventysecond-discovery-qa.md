# 172: Multilingual noun discovery across three entry points

## Finding and fix

Lesson search and saved-review word selection omitted existing English word meanings. Photo credits could find an English term incidentally inside an image filename, but did not search the word's English meaning. Plurals were also absent. All three now use the same wordMatchesSearch helper across the existing 965 nouns. It checks German, article plus German, plural, Egyptian Arabic and English meaning; credits additionally retain file and photographer lookup, and lessons retain the three topic titles. No content/order/ID/photo changes.

Matching is field-local substring search: Unicode NFC, trimmed/collapsed whitespace, case-insensitive and ß/ss-equivalent. It does not strip umlauts, infer synonyms or treat multiword input as an AND query. It does not create phrases across unrelated fields. Empty search restores the full lesson/credit list; saved-review selection stays empty until text is entered. This is discovery only, not relaxed German answer grading.

Saved-review selection now explains the first-15-result limit, reports full count and shown count, and offers Clear search with returned input focus. Saving and unsaving still need explicit clicks. Typing, clearing, changing routes and filtering do not award XP or alter progress/saved cards. Existing review storage and write guards are unchanged.

## QA

- New suite: 3990 assertions, four AR/EN320/390 variants across lessons, credits and daily review, 12 axe snapshots. Model checks every populated German/Arabic/English/plural field of all965nouns with case/whitespace/NFD variations. Browser cases include hedgehog, decomposed Käse, uppercase STRASSE, Mütter, Egyptian Arabic, no results, clear focus, original lesson numbering, first15exactorder, credit photographer/file lookup, unchanged progress/review bytes, and explicit save/unsave persistence.
- Navigation476/4axe, global search120/6axe, automatic completion404/8axe passed. Typecheck/study/full build/content/dependency/PWA/export/progress checks and npm audit passed,0vulnerabilities. 965words/199topics/0problems,1105HTML/1089sitemap,396347byte progress bundle.
- Actual390AR/EN screenshots inspected. Headless full-page RTL capture initially produced a shifted image although viewport/DOM widths were correct; switched screenshot evidence to real viewport captures and lower review crops, then inspected the pixels. No product change was made on the basis of that capture artifact. All three surfaces remain usable within320/390width; credits retain their labeled horizontally scrollable table.
- Native-review MD/PDF updated172,146pages,145-146inspected. New product wording queued for Egyptian Arabic/English editorial review. No new teaching-content or native-editor approval claim. Real devices still pending.

## Actual contribution

https://github.com/3mrdiab/Deutschy/commit/794057c5624737a41e5f9ec5659bd5e8677e5502

Verified author356948613, direct parent519cc7c1f350495e67f6cd741eaed9b9d1ced801, one word-search.ts file. Original commit preserved unchanged, byte-identical module moved to src/lib during Hinawi integration. Hinawi adds all three UI integrations, scope/help/count/focus, tests and docs. Coauthor names actual contribution only. No purchase, secret in product, public audio activation, history rewrite or direct main push. Deploy separate.
