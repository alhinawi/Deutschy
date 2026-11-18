# Helper answer clarity182

## Real smoke, not fixture-only success

Production `/helper/` returned two real answers through `/api/helper/chat` on2026-11-18 at12:35:59 and12:36:03 Africa/Cairo. Both were200 with `Cache-Control:no-store` and no local fallback. The answers correctly used `Ich gehe zur Schule` and contrasted `in Berlin` with `nach Berlin`. They also exposed Markdown delimiters and overgeneralized the location/destination distinction. The first answer exceeded the requested two-line format. These are observed limits, not native-teacher approval.

## Fix

- Assistant answers use a small React-only inline allowlist: bold, italics and inline code. No HTML, links, images, scripts, Markdown dependency or `dangerouslySetInnerHTML`. Other text remains escaped.
- Every answer line has explicit first-letter RTL/LTR direction and start alignment. German runs stay isolated in Egyptian Arabic. All new styling is Tailwind utilities.
- The teaching instructions ask for2-4 lines under80words, respect shorter requests, prefer plain text, and scope rules. Concrete contrasts cover regular verb exceptions, movement within a location vs destination, `nach Berlin` vs `in die Schweiz`, bare professions vs a described profession, and differing language/nationality constructions. This is a prompt-level improvement, not a deterministic correctness guarantee.
- Existing384-token,4500-byte input,1200-character question,4-turn history and free quotas remain unchanged. Arabic/Latin1200-character inputs with maximal history still fit by trimming history rather than the current question. No new storage, tracking, dependencies, providers or paid resources.

Sources read for the editorial contrasts:

- https://deutschlernerblog.de/lokale-praepositionen-deutsch-ortsangaben-wo-wohin-woher/ - Wo/Wohin, in/nach, city/country examples.
- https://flumi.io/grammar/de/artikel-bei-berufen-laendern-und-sprachen - usual bare professions, described professions and language constructions.
- https://www.nemcina-on-line.cz/gramatika/podstatna-jmena-a-cleny/clen-u-povolani-narodnosti-a-jazyku-v-nemcine - professions with qualification, language vs nominalized language; `Ich bin ein Lehrer` is not intrinsically ungrammatical.

No native German/Egyptian Arabic sign-off is claimed. After deploying the updated private Worker and Pages UI, recheck one bounded real answer. Replay screenshots prove display behavior only, not revised inference behavior.

## Validation

108backend/proxy assertions;136browser assertions acrossAR/EN320/390 with4axe snapshots, including replayed production answers, safe inline formatting, explicit line direction, escaped HTML, quotas/rate/error/cancel/clear/stale requests and no persistence. Navigation492assertions/4axe, all frontend/Worker/functions typechecks, build,1009-word/204-topic content checks,6781noun-photo checks,940animal checks, study/review, PWA, progress-size and1114-page/1097-target export checks pass. Actual390px replay pixels inspected. Final native checklist updated; native review remains pending.
