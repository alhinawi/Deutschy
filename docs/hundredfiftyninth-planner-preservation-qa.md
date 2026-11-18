# List 159: Preserve unreadable weekly-plan data

## Reproduced defect
A saved current week containing one preexisting day instead of seven opened as a blank form with no warning. Typing a replacement and pressing Save replaced the original week and reported success, discarding the preexisting note. Malformed root shapes also appeared as empty plans without an initial warning.

## Fix
- New pure readPlanWeek validates the persisted root and selected week separately from cleanWeek's input normalization. Missing storage or an absent selected week is a valid new empty plan. A present selected week must contain seven day objects with a string goal up to150 characters,integer minutes0-240,boolean done,and no completed empty goal. Invalid JSON,empty string,null,array/scalar roots,partial/malformed days and lossy values are marked unreadable.
- WeeklyPlanner load now shows an explicit localized warning for unreadable current-week data. It states the original is unchanged,that a blank form does not prove no plan was saved,and asks users to copy new notes before closing.
- Save re-reads/validates current stored data immediately before writing. An unreadable root/current week is not silently normalized and overwritten;the original bytes stay unchanged and the user's unsaved draft remains in the tab with an honest failure notice. Storage-denial behavior likewise preserves the draft.
- A valid selected week can still be saved if unrelated weeks use an older/unknown shape;those root values are preserved untouched. Existing explicit confirmed deletion of only the displayed week remains available even when that week is malformed;cancel writes nothing. Invalid root/JSON deletion still fails without replacing it.
- No new recovery/migration feature or cross-tab merge claim. A simultaneous valid edit in another tab is not handled by this scoped validation fix. Existing local-only storage and unload/discard confirmations remain.

## QA
- Pure source tests: absent/full valid week accepted;null/array/scalar/invalid/empty roots rejected;bad-length/current-day/range/noninteger/goal-length/done shapes flagged;raw parsed records retained;unrelated legacy week permitted.
- Four AR/EN320/390 browser variants,184 assertions: six damaged-root/week fixtures preserved byte-for-byte after attempted Save,new draft remains visible,initial/failure warnings,valid save+reload,unrelated legacy week unchanged,corruption after load rejected,quota denial preserves draft,and confirmed/cancelled scoped delete behavior. No global learner-history writes,page errors or horizontal overflow. Four WCAG A/AA/2.1 AA axe snapshots pass.
- Regression invokes real UI controls,localStorage and thrown quota fixture,not a parallel mock state machine. Test accepts expected beforeunload dialogs when intentionally reloading dirty drafts;initial harness waited on that confirmation and was corrected. Final repo-native run passes.
- Inspected actual390pxAR/EN screenshots:readable full preservation warning,draft input and date/week navigation,without clipping. Long planner remains scrollable. Actual-device screen-reader and local storage failure behavior remain manual checks.
- New scripts/test-planner-browser.mjs with npm run test:planner:browser uses a loopback static export and fresh browser. Run build first;CHROME_BIN optional(default /usr/bin/google-chrome),PLANNER_SCREENSHOT_DIR optional. Existing dev test dependencies reused.
- Search6variants/120assertions/6axe+cold import and navigation4variants/436assertions/4axe pass. Typecheck/content/study/speech/dependency/full production build/PWA/export/progress pass. npm audit0 at check time.1088HTML/1073sitemap,workerV_5TqTkYeKRnAP062lecH,progress396125bytes below500000. No content/question identity/scoring/backend change.

## Contribution
Real source contribution: https://github.com/3mrdiab/Deutschy/commit/caa7345d2b87f7d6d5ade810c5ed46bf8ab91ff3 . Verified author 3mrdiab/account ID356948613, exact main158 parentbe3a2b1b995c7107a06dffb1e3f3c4bea4fea859,13 substantive added validation lines in weekly-plan.ts. Entire helper source byte-identical to tested version,original commit integrated unchanged. Hinawi wires helper into load/save and localized preservation warnings,and contributes pure/browser regressions,test command and QA/manual-review records. Exact trailer only for genuine contribution. No empty commit/history rewrite/count-only split.

## Limits
No claim of automatic recovery or guaranteed storage. Explicit delete still deletes the selected week after confirmation. Native content/editorial,actual-device voice/keyboard/screen-reader checks remain pending. Deployment separate.
