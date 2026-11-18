# List 156: Next build PostCSS dependency fix

## Scope and decision
- Keep Next 15.5.29, React 19.3.1 and all existing direct application dependencies unchanged. No major framework upgrade and no npm audit fix --force.
- Root override next.postcss uses $postcss, referring to the project's existing direct PostCSS range ^8.5.33. Lock resolves 8.5.33, already used by Tailwind/project before this change. Removes only Next's old nested8.4.31 package; shared8.5.33 is correctly retained for non-dev installation. No broad lockfile churn.
- npm registry currently lists15.5.29 as latest15.5 patch. Override is scoped to Next's PostCSS rather than all transitive packages. Review/remove when a future Next version supplies a suitable dependency natively.

## Why
The pre156 lockfile contained Next's nested PostCSS8.4.31. npm audit reported2 vulnerabilities (1 high,1 moderate), including source-map path disclosure issues and inherited Next impact. This is a dependency exposure, not proof of exploitability in this app, active attack, breach or compromised deployment. The static learning site does not provide user-submitted CSS processing. Build-tool maintenance still matters.

GitHub-reviewed GHSA-fxqj-rqcc-2cmp affects PostCSS<=8.5.22,patched8.5.23; untrusted previous maps without a from option can disclose external map sources. GHSA-r28c-9q8g-f849 affects<=8.5.17,patched8.5.18; sourceMappingURL traversal outside intended CSS directory.8.5.33 is beyond both patched thresholds. Current npm audit zero is time-specific, not an assertion of permanent or complete security.

## Checks
- Clean full npm ci:82 packages,89 audited,0 vulnerabilities. npm audit JSON:0 info/low/moderate/high/critical,0 total. npm ls postcss shows Next15.5.29 resolving/deduping8.5.33, no invalid dependency.
- Separate production-only install in temporary directory: npm ci --omit=dev --ignore-scripts resolves Next's PostCSS8.5.33. Fix is not accidentally dev-only.
- New npm run test:dependencies checks actual createRequire resolution from Next, same physical PostCSS as root, version >=8.5.33 on major8, no old nested lock entry and matching installed/locked version. Regression writes only its own temporary dummy source-map fixtures; blocks parent traversal and absolute/no-from map leakage, preserves legitimate same-directory map, cleans up fixtures. No vault/user filesystem files inspected.
- Initial npm install --package-lock-only/update preserved stale nested lock despite override. Removed only obsolete nested lock entry and regenerated through npm, then verified clean installs, actual resolution and audit. No hand-edited integrity/package payload. Final lock changes only remove obsolete package plus shared PostCSS dev flag.
- Typecheck/content/study/speech/full production build/PWA/export/progress pass.1088 HTML/1073 sitemap,worker2PR30aUmgtWNDVEwR3bs5,progress396125 bytes below500000.
- Search workflow regression passes6 AR/EN320/390/1280 variants,120 keyboard/focus/scroll/IME/navigation/storage assertions,6 axe snapshots and cold delayed-import case. 390pxAR/EN actual pixels inspected, unchanged readable layout.
- Additional276 exact dictation/speech/source/answer checks across69 segments,132 route/layout/image checks,4 axe snapshots,6 cached routes offline plus uncached fallback pass against the rebuilt output.
- No learning content, saved-question identity, scoring or account/backend changes. Actual-device keyboard/screen-reader and native content-editorial reviews remain pending from prior lists.

## Sources
- https://github.com/advisories/GHSA-fxqj-rqcc-2cmp reviewed advisory,affected<=8.5.22,patched8.5.23.
- https://github.com/advisories/GHSA-r28c-9q8g-f849 reviewed advisory,affected<=8.5.17,patched8.5.18.
- https://docs.npmjs.com/cli/v11/configuring-npm/package-json#overrides npm root overrides and direct dependency $ reference semantics.
- npm live registry metadata for next@15.5 and postcss@8.5.33,package resolution,clean install and audit outputs inspected Nov18,2026.

## Contribution
Real source contribution: https://github.com/3mrdiab/Deutschy/commit/f1aeb83abc588182207c2b385d293046440cabf0 . Verified author3mrdiab/account ID356948613, exact main155 parent21c620d4b138fc191b233e8daf68a604348e7828, package.json7 additions/1 deletion. Entire manifest byte-identical to clean-install/build-tested file. Original commit fast-forward integrated unchanged. Hinawi contributes resolved lockfile, actual dependency/source-map regression, QA and review records, with exact real-contribution trailer. No empty commits, history rewrites or count-only split.

Deployment owned separately; no statement that this change is live before deployment verification.
