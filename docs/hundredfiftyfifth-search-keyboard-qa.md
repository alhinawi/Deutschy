# List 155: Global search keyboard workflow

## Fixed
Global search previously let keyboard focus leave its modal, did not return focus to the opener, did not keep arrow-selected results visible, and allowed outdated lazy-import callbacks to replace current results. ArrowDown with no results could make the selection negative. Enter/arrow handling also applied to the close button and composing input.

- Tab and Shift+Tab cycle within the search controls; Escape, pointer close and result navigation still work. Closing restores the connected opener without moving the page. Body scrolling is locked only while open, then its original inline value is restored.
- Keyboard-selected results scroll into view. Empty-result selection remains nonnegative. Enter navigation applies only to the search input, not the close button. IME composition Enter is ignored by navigation.
- Each query/open effect invalidates its own late callback. Closed or superseded requests cannot replace the current query results after a cold lazy import. Reopening clears temporary query/selection state.
- The close button has a localized accessible name. Selected subtitle/type text uses solid selected foreground, fixing the contrast defect exposed during axe testing. Existing search corpus, ranking, destinations, saved progress and scoring are unchanged.

## Verification
- 6 variants: Arabic/English at 320, 390 and 1280 CSS px. 120 assertions cover initial focus, forward/reverse Tab wrap, arrows, empty results, bounded last result, visible selection, Escape return, scroll restoration, reopen reset, close-button name, composition Enter guard, correct Rotkehlchen destination and no learner-history write. 6 axe WCAG A/AA/2.1 AA snapshots pass.
- Separate isolated cold browser context bypasses service workers and holds actual dynamic JavaScript requests. Queries change Rotkehlchen to Amsel, close/reopen, then Kohlrabi while import is held. Releasing requests produces Kohlrabi, not stale results. Enter on the close button closes without navigation.
- Inspected actual 390 px Arabic and English selected-result screenshots. Selected last result fully visible, readable light text on accent, no horizontal overflow. 320/1280 behavioral checks pass. Actual device/screen-reader and IME hardware remain manual checks, not claimed as done.
- Repeatable browser regression is scripts/test-search-browser.mjs. Run npm ci, npm run build, then CHROME_BIN=/path/to/chrome npm run test:search:browser. Default Chrome path /usr/bin/google-chrome. It serves the static export on loopback and uses a new browser, no production account. Optional SEARCH_SCREENSHOT_DIR saves 390 px snapshots. Puppeteer Core and axe-core are dev-only dependencies; no browser download bundled.
- Typecheck, content verify, complete study and speech regressions, full production build, PWA/export and progress budget pass. Export stays 1088 HTML / 1073 sitemap. Worker fRwvXIJgn4VU0SpggFwov. Progress initial JS 396125 bytes, below 500000. No content or existing saved-question identity changes.
- The first axe run found low selected-type contrast; fixed before the final rerun. Test harness was corrected to await reopen effects, handle trailing-slash differences in its static server and isolate service-worker cache for the delayed-import case. Final repo-native test passes.

## Dependency audit caveat
Adding browser-test development dependencies prompted npm audit. Existing Next 15.5.29 already bundled PostCSS 8.4.31; comparison with the pre155 lockfile confirms both versions unchanged. Audit reports high source-map file-read advisories in that pre-existing nested dependency, plus moderate inherited Next impact. This PR does not apply npm audit fix --force or silently upgrade Next major. Investigate separately. Advisory references: https://github.com/advisories/GHSA-6g55-p6wh-862q and https://github.com/advisories/GHSA-fxqj-rqcc-2cmp .

## Contribution
Real source contribution: https://github.com/3mrdiab/Deutschy/commit/48dccae6dc419112ff980865fb9ef17926761dfc . Verified author 3mrdiab, account ID 356948613, exact main154 parent 23c9c6cb0face46cf7fb5aea7b645fbb144c7753, one SearchBox.tsx change (37 additions/11 deletions). Entire contributed source matches the tested file byte for byte. Original commit integrated unchanged. Hinawi contributes repeatable browser/source regression tests, dev-only test setup and QA/manual-review documentation, with the exact coauthor trailer only for this real contribution.

## Limits
Deployment is separate. This is a product fix, no new noun/content batch, no new certification/native-editorial claim. Existing device-local progress limits remain.
