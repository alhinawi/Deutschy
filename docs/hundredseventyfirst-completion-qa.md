# 171: Automatic learning-path completion

## Change

Removes the two manual lesson-completion controls from the learning path. Pronunciation/letters and basics now each have an original 8-question written review based on their existing lesson examples. A finished 8/8 round records completion and 20 XP once. A visit, scroll, partial round or failed round does not count. Repeat passes and reloads do not award more XP. This is practice completion, not spoken-pronunciation assessment or CEFR certification. Audio is optional.

All 14 step rules are documented in docs/completion171-rules.md and explained on the path. The other 12 steps keep their existing activity rules. Temporary speaking/writing/shadowing self-review, planner-goal and deck-selection checkboxes do not award path completion and remain available.

## Compatibility

Existing deutschy:v1 data and pfad flags are preserved without schema changes, resets or migrations. Old true flags remain explicitly labeled prior records, not quiz results, and do not generate new XP. New earned markers use the existing seen map. The new awardOnce helper re-reads current progress and checks the earned marker before crediting. Existing award behavior is preserved. Failed storage or unreadable JSON does not overwrite saved data; a passing result offers retry saving.

## QA

- Typecheck, study checks, full production build, content verification, dependency/PWA/export/progress checks and npm audit passed. Content: 965 words / 199 topics / 0 problems. Static output: 1105 HTML files / 1089 sitemap entries. Progress bundle: 396347 bytes.
- New completion browser suite: 404 assertions, 4 AR/EN 320/390 variants, 8 axe snapshots. Covers failed/partial/passing rounds, repeat/reload/double-Next guards, storage quota plus retry, malformed JSON preserved, legacy true/false, and existing seen/SRS/scores/exam/pfad data retained.
- Writing regression: all 24 AR/EN 320/390 variants across A1-C2, 484 assertions / 4 axe. Run in three level-pair batches because the full suite exceeds the execution window. No product failure observed in these completed runs.
- Navigation: 476 assertions / 4 axe passed in isolation. One earlier concurrent run failed the first home-to-lessons transition before the route changed; retained as a timing-sensitive test observation, not silently reported as a pass.
- Search: 120 assertions / 6 axe passed.
- Actual 390px AR/EN path and successful-review screenshots inspected: English digits, no clipping, readable rules, clear legacy provenance. Path screenshots use synthetic fixture progress, not a real learner account.
- Native-review MD/PDF updated to 171. PDF pages 144-146 inspected. All 16 new prompts/distractors/explanations and completion wording are explicitly queued for German/Egyptian Arabic editorial review. Automated QA is not native or real-device sign-off.

## Genuine contribution

Original contribution: https://github.com/3mrdiab/Deutschy/commit/faf55e998215a5c138c754a180900f89fd2acc53

Verified GitHub author ID 356948613, direct parent 28f8158b99f52b5a129a501e363d7f300312574e, one new completion.ts module. Original commit preserved without rewriting. Hinawi moves the byte-identical module into src/lib and adds the lesson UI, rules, storage wiring, tests and docs. Correct coauthor trailer only for this actual contribution. No purchases or public audio activation. Deployment is separate.
