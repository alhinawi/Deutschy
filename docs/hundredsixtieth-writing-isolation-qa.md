# List 160: Isolate writing tasks and report draft failures

## Reproduced defect
In the actual exported writing UI,complete a birthday-style source draft and open its model,then change the hash to the invitation task. The invitation textarea becomes blank but its model remains open and its learner-history identity is awarded a successful answer without an invitation ever being entered. The source draft's completion effect ran against the new task before loading that task's text.

## Fix
- Key each mounted Task by its task ID. Draft text,model visibility,phrase checks and word counts are fresh for the selected task and cannot leak across hash changes. Existing separate localStorage keys are preserved.
- Gate completion while loading the task draft. A loaded valid draft can still earn its own task once;returning/reloading does not add another successful answer. Grading phrases/minimums and20XP reward are unchanged.
- Clear the selected task on invalid/empty hashes instead of leaving a stale task displayed. Existing onlyLevel filtering remains.
- Draft loading/edit saving now expose localized status or alert instead of silently hiding failures. Textarea describes the status and is disabled during the initial load. Read/write denial tells the user the displayed text may exist only in this tab and to copy it before leaving/closing. A failed write keeps the typed draft visible and the previous stored draft unchanged. Successful saves truthfully say browser/device-only,not account sync.
- No cross-tab merge,storage recovery or unload-blocking feature. This does not validate German beyond the existing phrase/count checks or remove already earned history from older versions.

## QA
-24 AR/EN320/390 variants across six levels,484 browser assertions total and4 WCAG A/AA/2.1 AA axe snapshots:task identity,saved drafts independent,model reset,no borrowed reward,return/reload without repeat success,valid preloaded draft earns its own identity,read/write failure feedback,previous saved bytes retained,invalid/empty hash exits,description linkage,no page errors or horizontal overflow.
- Regression uses actual exported mounted React UI and localStorage failures,not a parallel state machine. Initial436-assertion run passed;extended484 suite passed in two12-variant shards via optional WRITING_LEVELS. A full concurrent rerun exceeded the execution window and was stopped;both bounded shards and separate planner rerun then passed. Final source screenshot copy inspected after wording improvement.
- New scripts/test-writing-browser.mjs and npm run test:writing:browser use loopback static export/fresh browser. Run build first. CHROME_BIN optional(default /usr/bin/google-chrome),WRITING_SCREENSHOT_DIR optional,WRITING_LEVELS optional comma-separated levels for bounded shards.4 axe snapshots occur in A1 variants.
- Search6 variants/120 assertions/6axe+cold-import,navigation4/436/4axe,timed24/532/4axe,weekly planner4/184/4axe pass. Typecheck/content/study/speech/dependency/full production build/PWA/export/progress pass;npm audit0 at check time.1088 exported HTML,1073 sitemap targets,worker RN9YUy_feLwv9NsN3dpXP,progress396125bytes below500000.
- Inspected actual390pxAR/EN draft/storage-warning screenshots:textarea,input label,status,required phrases,model control readable without clipping. Native editorial and actual-device keyboard/screen-reader/storage behavior remain manual checks.

## Contribution
Real source contribution: https://github.com/3mrdiab/Deutschy/commit/dfc4c911abbc27ca0d5c7e004da9b3075abfc66e . Verified author 3mrdiab/account ID356948613, exact main159 parent5fc82913d493bd04d20542eea964eea347ccd73a,7 added/5 removed substantive lines in WritingView.tsx. Entire component byte-identical to final tested source,original commit integrated unchanged. Hinawi contributes source guards,six-level browser/storage regressions,test command and QA/manual-review records. Exact trailer only for genuine contribution. No empty commit/history rewrite/count-only split.

## Limits
Device-local draft/history only;no new backend or synchronization. Native German/Egyptian Arabic editorial and actual-device checks remain pending. Deployment separate.
