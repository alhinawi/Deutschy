# List 162: Keep sentence-builder rounds consistent

## Reproduced defect
In the actual exported sentence-builder,assemble a correct random modal sentence and invoke the mounted Check handler twice synchronously. It awarded24XP and sb:modal.ok2 for a single displayed sentence(maximum12XP). Result-history writing also happened inside render rather than after commit.

## Fix
- A live prompt index,chosen-array identity and synchronous lock guard token edits,Check and Next. Repeated bank/remove handlers cannot duplicate a token or overwrite a later edit. Check verifies a complete unique-token assembly and locks before scoring. Retired Check/Next cannot affect a later sentence.
- A live mounted-round guard invalidates old handlers after changing pattern or starting another round. Repeated New round starts at most once from that finished round. Speech stops on Next/unmount.
- Save completed result once from an effect,not during render. Partial rounds add no completed result. Existing tokenization,accepted alternative orders,pattern banks,8-item maximum,12XP per correct sentence and history/store routing unchanged.
- Add announced feedback/result text and visible token keyboard focus/minimum heights. Existing text explains this checks a model and listed alternatives,not all grammatical orders or official proficiency.

## QA
-32 AR/EN320/390 rounds across All+seven patterns,1612 mounted-UI assertions,4 WCAG A/AA/2.1 AA axe snapshots. Each completes all available items(max8),alternates correct and reversed orders,checks exact XP/history totals,and invokes actual mounted handlers repeatedly,after later token edits/answers,prompt transitions,and round unmounts.
- Repeated add/remove cannot duplicate/revert tokens;stale Check/Next cannot award/advance an unseen sentence;finished score records once;New round/old handlers cannot reset a new round. Completed history/XP survive reload,unfinished reset adds no result,no page errors or horizontal overflow.
- Initial harness counted bank plus assembled tokens,so its wait expected1 while selecting both. Corrected selector to exclude bank;final full32-round run passed. Actual export and real localStorage used,no live learner data or account writes.
- New scripts/test-satzbau-browser.mjs/npm run test:satzbau:browser serves loopback export with fresh browser;run build first. CHROME_BIN optional(default /usr/bin/google-chrome),SATZBAU_SCREENSHOT_DIR optional.
- Inspected actual390pxAR/EN full-page feedback screenshots:legible assembled tokens,disabled bank,model sentence,rule and Next;no clipping. Native editorial/actual-device keyboard/screen-reader checks remain pending.
- Typecheck/content/study/speech/dependency/full production build/PWA/export/progress pass;npm audit0 at check time.1088HTML/1073sitemap,worker zOpnblVXscXc91CLLcsOT,progress396125bytes below500000. Verb-quiz4variants/556assertions/4axe,search6/120/6axe+cold import,navigation4/436/4axe and timed24/532/4axe pass.

## Contribution
Real source contribution: https://github.com/3mrdiab/Deutschy/commit/0dc2149a06468e27965a7e14021c5638557d21a4 . Verified author3mrdiab/account ID356948613,exact main161 parent6616151272befe47f468fb2f73ab86eb23a47ac0,18 added/12 removed substantive SatzbauGame.tsx lines. Entire component byte-identical to final tested source,original commit integrated unchanged. Hinawi contributes source guards,mounted browser regressions,test command and QA/manual-review records. Exact trailer only for genuine contribution. No empty commit/history rewrite/count-only split.

## Limits
Device-local practice,not official assessment. Existing storage warnings govern persistence;no new recovery/synchronization/backend. Native German/Egyptian Arabic editorial and actual-device checks remain manual. Deployment separate.
