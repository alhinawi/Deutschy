# Seventeenth integration QA

Checked 2026-11-16 on the local production export. Deployment is separate.

## Delivered

- `a1147b4`: two original fictional A2/B1 readings, two matching dialogues, exact-evidence questions, vocabulary glosses and linked dictation sets. Text/dialogue/dictation links preserve the selected scenario.
- `772611d`: actual-history next steps and page-only local resume on home/progress; truthful empty/corrupt-storage states. No answer/scroll recovery or sync claim.
- `e4b58b0`: bilingual worked walkthroughs for all 41 grammar topics and short rounds reusing original question identities. Existing questions were not duplicated into a new score bank.
- `8b11877`: full vocabulary-photo contact-sheet audit, eight clearer replacements, explicit physical heart-model label and 551 JPEG optimizations. Final handoff refines the model framing and preserves its credit.
- Updated pending native-review checklist, with all five final PDF pages visually inspected and editable Markdown delivered separately. No reviewer sign-off.

## Checks

- Typecheck, content verification (669 nouns / 58 topics / 0 problems), study/speech/PWA tests and production build pass.
- 540 export pages, 525 sitemap targets, internal links and OG checks pass; 533 ordinary routes reachable from home with no dead ends. Reachability excludes 404/admin and six state-gated certificates.
- 2160 fresh navigations: 540 routes × Arabic/English × 390/1280px. No failed navigation, page error, broken loaded main image, undefined link or document overflow. This checks loaded images, not every lazy image at every scroll position. Final JPEG-only heart framing was checked separately after the sweep; no route/JS/CSS change followed it.
- 32 focused AR/EN × 320/390 layout and axe states pass: home, progress, body vocabulary, credits, both new readings, selected dialogue and dative grammar. Earlier milestone sessions add 64 reading answers, 24 dialogue answers, 32 grammar rounds / 96 answers and four resume-flow tests. Native idiom/difficulty review remains pending.
- Offline: both new readings, both selected dialogue hashes, dictation, dative grammar and progress render after synthetic 90-page cache pressure. Bounded page cache stays at 80, shell/assets survive and uncached fallback works. This is route/content rendering, not completion of every exercise offline. Device speech can still require internet.
- Final mobile heart-model card and reading view inspected as actual pixels; credits default LTR Word/File ordering inspected. All five printable-checklist pages inspected without clipping. The checklist was condensed from an intermediate six-page layout to avoid a mostly blank page.

## Performance and inventory

Photo directory: 77,433,621 bytes before optimization (after the first seven replacements), final 42,801,815 bytes, about 44.7% smaller. 669 referenced noun photos; 670 JPEG files include pre-existing unused muschel.jpg. Re-encoding is lossy, not lossless. Stable paths and lazy loading retained. Some contextual family/job photos, particularly grandfather/engineer, remain weak cues; no photo proves identity, occupation or kinship.

144 JS files total 2,519,202 raw / 861,749 gzip bytes; one CSS file 30,186 raw / 6,589 gzip bytes. Shared first-load JS is approximately 103 kB according to Next build. These are aggregate bundle figures, not a single-route transfer estimate. No new runtime dependency or JS-performance claim.

Inventory: 73 readings / 245 questions, 13 general dialogues plus 16 separate Egyptian-context dialogues, 41 core grammar topics / 382 core questions, 669 nouns / 58 topics and 72 present-focus cells. Reading distribution A1 7, A2 19, B1 17, B2 12, C1 9, C2 9. Difficulty labels do not establish official level coverage.

## Limits

Native German/Egyptian Arabic editorial sign-off is pending. Automated axe checks are not a full assistive-technology audit. Fictional scenarios are original practice, not current service policies or events. All progress/resume state is device-local. No backend, accounts or purchases were added. Local export QA does not verify live deployment.
