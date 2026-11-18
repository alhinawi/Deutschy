# List 157: Mobile navigation modal workflow

## Defect reproduced
At 390 px, opening the mobile drawer left focus on the header menu toggle. The next Tab focused the background logo instead of navigation. No native modal or body scroll lock existed. This is independent of the search-dialog fix in list 155.

## Fix
- Replaces only mobile navigation with a named native dialog. showModal makes the background inert; localized close button receives initial focus, Tab/Shift+Tab wrap within close/navigation links, and native dialog closure returns focus to the menu opener.
- Escape, explicit close, actual backdrop click, same-route link and destination link close the drawer. Clicking padding inside the drawer is not mistaken for backdrop. Menu toggle exposes expanded state, controls and dialog popup semantics.
- Body overflow is saved and restored, not blindly cleared. Switching to desktop at 768 px closes the mobile modal and unlocks scrolling; its media listener is removed on close. Desktop sidebar remains a normal visible navigation landmark. One shared navigation tree definition preserves exact destinations, visibility filtering, active styles and wording in both surfaces.
- Ctrl+K or / closes navigation before opening global search; search retains focus and its own scroll lock, then restores prior scroll state on close. No content, saved question identity, progress, scoring or account/backend changes.

## QA
- Before-change browser reproduction recorded focus on background header after opening/Tab, no modal and empty overflow.
- Four Arabic/English 320/390 px variants: 436 assertions covering initial closed state, toggle semantics, localized initial focus, background programmatic focus rejection, full Tab cycle, Shift+Tab bounds, native modal, overflow preservation, explicit/Escape/backdrop/padding/same-route/destination behavior, desktop breakpoint closure, desktop links, mobile return, search transition and no learner-history writes. Four WCAG A/AA/2.1 AA axe snapshots pass.
- Native modal initially allowed the Tab cycle to reach browser chrome. Added explicit first/last control bounds and rechecked the full cycle. The route test accepts a full-document fallback from its static-only server and checks unlocked scrolling rather than assuming inline styles survive page reload. Final repository-native regression passes.
- Inspected actual 390 px Arabic/English screenshots: drawer opens on reading-direction side, clear close control/focus ring, readable navigation, dim background and scrollable long list. No horizontal overflow. Desktop visibility verified at 1280 px in each variant.
- New repeatable scripts/test-navigation-browser.mjs serves only local static export with a fresh browser. Run npm run build then CHROME_BIN=/path/to/chrome npm run test:navigation:browser. Default Chrome path /usr/bin/google-chrome. Optional NAV_SCREENSHOT_DIR saves 390 px images. Uses existing dev-only test dependencies, no new package installation.
- Search regression: six AR/EN 320/390/1280 variants, 120 behavior assertions, six axe snapshots and separate cold delayed-import case all pass.
- Typecheck, content verification, complete study/speech/dependency regression, full production build, PWA/export and progress budget pass. npm audit reports 0 vulnerabilities at check time. 1088 HTML / 1073 sitemap targets, worker 8IpkcHzROyEUzLFvgagwP, progress initial JS 396125 bytes below 500000.

## Contribution
Real source contribution: https://github.com/3mrdiab/Deutschy/commit/195308a186dfb32f76dc5498d9208b9bdfb3dd89 . Verified author 3mrdiab/account ID 356948613, exact main156 parent f00dfcbbc184913f0a2633103376305aaa572a65, Shell.tsx 63 additions/25 deletions. Entire source byte-identical to tested component. Original commit integrated unchanged. Hinawi contributes repeatable browser/source regressions, test command and QA/manual-review records, with exact trailer for genuine contribution only. No empty commit, history rewrite or count-only split.

## Limits
Actual device/OS keyboard and screen-reader behavior remain manual checks, including native dialog support on older browsers. No claim of native editorial sign-off or certification for previous content. Device-local progress limits unchanged. Deployment owned separately.
