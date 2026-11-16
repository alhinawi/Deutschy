# Device-local flashcard review quality - 2026-11-16

Found an unbounded loop: every missed flashcard was appended again, including already retried cards. Retry answers also kept adding history and points, while only the first answer updated the schedule. The summary divided correct answers by attempt count, hiding the difference between first recall and practice.

Changed flashcards to one practice retry per missed card in a round. Only first-pass answers change the schedule, answer history and XP. Retry answers do not inflate intervals, mastery counts or points. A missed card stays due on the current local day, even if its practice retry succeeds. The summary reports first-pass correctness against unique initial cards. A retry banner explains this before answering. A synchronous per-position guard prevents repeated input from submitting the same card twice. The former Known label is now Box 4 or higher; a box is not a proof of memory mastery.

No existing saved history is rewritten. Leitner intervals, initial queue limits (10 new, 25 total), due-card priority, and local date semantics are unchanged. No backend or sync introduced.

Checks: pure decision regressions cover both retry outcomes, first pass, queue cap and due priority; existing schedule/local-midnight tests pass. Arabic/English 390px browser tests use a one-word topic and exercise wrong/wrong, wrong/right and right scenarios. Every round ends after at most one retry, saved history has one answer, correct first pass earns 2 XP/due tomorrow, wrong first pass earns 0 XP/due today. Mock test histories exist only in temporary local test browsers. Production starts from the learner's own saved record.

Typecheck, study regression suite and production build passed. This is a simple device-local study schedule, not an officially validated spaced-repetition model or memory assessment.
