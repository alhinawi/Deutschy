# Fifteenth saved-review safety

Three saved-history review views now synchronously lock each answer before state updates. Grammar review locks per key until explicit list refresh; daily and spaced-word review reset the lock on the next card/new session. This prevents same-event double input from awarding XP, recording an answer or changing its schedule twice.

Grammar mistakes: explicit textual correct/miss status, LTR German prompt/options, wrapping choices, one column through tablet widths and 44px choice targets. List refresh resets the answered-key set. Old keys/history counts unchanged.

Daily review: stable six-way three-option ordering keyed by round, disabled answered choices, visible correct/wrong choice state plus textual status, wrapped German answers, source explanation where available and larger source link. Noun questions previously included the German lemma in their bilingual prompt. They now show Arabic/English meanings instead; the article+noun remains among the options. No saved key or schedule migration. Cards may still be recognized from earlier exposure; this is not a blinded or official assessment.

Word review: synchronous guard on schedule, XP/history and session accuracy; wrapped long choices. Existing first-pass/scheduling semantics unchanged.

Checks: typecheck, study and build pass. All three routes × AR/EN × 320/390 × correct/miss = 24 browser sessions. Each verifies single XP/history update under two synchronous clicks, disabled choices, textual correct answer, no overflow; daily cards schedule once, word cards enter box 1 once, grammar list refresh unlocks the round. Twelve miss-feedback axe states pass. AR 320 grammar, EN 390 daily and AR 390 word views visually inspected. Fixtures use only test-browser local storage; no seeded learner activity ships. Native copy review pending.
