# Sixteenth memory and topic safety

Memory now keeps two revealed cards visible until Continue. A synchronous open-card list prevents repeated same-card taps or a third card in the same event from losing the first card or changing the pair. Each pair adds one try. Continue consumes the pair once; matching IDs are added once. Completion XP/score save once in an effect, not during render. Delayed reset timers were removed.

Hidden cards have position-only accessible labels, revealed cards identify photo/word and article+noun, matched/revealed/awaiting cards disable correctly. Text wraps with a 112px minimum card height instead of a fixed small aspect ratio. Matching is still visual/self-directed; accessible names help keyboard/screen-reader use but do not make it an equivalent nonvisual memory assessment.

Unknown topic queries across all five vocabulary games show an explicit unavailable-topic selection and empty-state guidance. No score or XP is recorded and no silent fallback substitutes unrelated words. Selecting a real topic starts its normal round.

Checks: typecheck/study/build pass. Memory AR/EN × 320/390 completes four rounds of 11 pairs each (deterministic QA shuffle), with four axe mismatch states. Same-card double click, rapid third card and double Continue do not change try/score counts. Feedback remains after 1.3 seconds. Completion has one score and 60 XP. Twenty invalid-topic route states leave the record unchanged. Visually inspected Arabic 320px revised card grid and English 390px pair feedback. No shipped seeded history or image changes. Native-copy review remains pending.
