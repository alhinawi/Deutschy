# List 161: Keep verb-quiz answers and round results consistent

## Reproduced defect
The mounted production verb quiz accepted each answer's actual React handler twice before a render. A first question awarded10XP even though the maximum for that one prompt is5XP. The quiz had only a rendered pick check,no synchronous lock;finished-round scores were also saved only when New round was pressed,not when the result was reached.

## Fix
- A live round/index/lock/finished ref gates every answer and progression handler. Lock is set synchronously before scoring. Retired answer,Next and restart handlers cannot apply to a new prompt or round. Unmount invalidates the round.
- Answer buttons disable after the first accepted choice. Correct/wrong feedback is announced with the correct German answer isolated as LTR. Prompts/options use explicit LTR;keyboard focus styles and minimum control heights added.
- Next advances the displayed answered prompt at most once. Completing the10th prompt records its score exactly once before showing the result. New round only begins a new round;it no longer saves/duplicates the previous score. An abandoned partial round creates no completed score.
- Existing question generator,10-question mixture,answer rules,5XP per correct choice,store scoring implementation/history cap and any existing connected-score routing are unchanged. Existing genuine individual-answer XP is retained on partial rounds as before. No new backend or assessment claim.

## QA
-4 AR/EN320/390 browser variants,556 assertions,4 WCAG A/AA/2.1 AA axe snapshots. Actual mounted handlers are invoked repeatedly synchronously,including every distractor after a valid choice,retired answers after advancing,retired Next after the next prompt is answered,and retired restart after a new round begins. No duplicate XP,question skip or premature reset.
- Two full10-question rounds per variant:all correct then alternating right/wrong. Results exactly10 then5,recorded once at completion and not again by repeated New round. Abandoned third round+reload adds no result;earned XP stays exact and unrelated seen history stays empty. Correct feedback,disabled answers,prompt state,no page errors or horizontal overflow checked.
- Screenshots:initial full-page capture of a short RTL viewport showed a capture offset despite normal DOM bounds. Switched this screenshot to viewport capture at scroll0 and inspected the resulting actual390pxAR/EN images:readable prompt,options,correct-answer feedback,Next and header,without clipping. Extra feedback-state width assertions pass.
- New scripts/test-verbs-browser.mjs/npm run test:verbs:browser uses loopback static export and fresh browser;run build first. CHROME_BIN optional(default /usr/bin/google-chrome),VERBS_SCREENSHOT_DIR optional. No live account or learner data used.
- Typecheck/content/study/speech/dependency/full production build/PWA/export/progress pass;npm audit0 at check time.1088 exportedHTML,1073 sitemap targets,worker Z3DA5U9OU7SWAhNM85jyS,progress396125bytes below500000. Initial build was killed while two orphaned test browsers from an earlier timed-out run were still resident;closed those known test browsers and reran production build successfully,then final build+checks passed again.
- Search6 variants/120 assertions/6 axe+cold import,navigation4/436/4 axe and timed24/532/4 axe pass.

## Contribution
Real source contribution: https://github.com/3mrdiab/Deutschy/commit/6de45b6e678454ba0f765567d7f4574af103b713 . Verified author3mrdiab/account ID356948613,exact main160 parent6266d66d0a14dce57a897fc581a34744328f4597,18 added/12 removed VerbQuiz.tsx lines. Editor added two indentation spaces to the final closing brace;adopted that original source without rewriting history and reran typecheck/study/full build/browser/PWA/export/progress successfully. Entire component now byte-identical to final tested source,original commit integrated unchanged. Hinawi contributes source guards,mounted browser regressions,test command and QA/manual-review records. Exact trailer only for genuine contribution. No empty commit/history rewrite/count-only split.

## Limits
Native German/Egyptian Arabic editorial and actual-device keyboard/screen-reader checks remain pending. Existing storage warnings govern score persistence;no new recovery or synchronization. Deployment separate.
