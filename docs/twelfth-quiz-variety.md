# Quiz variety and answer integrity - milestone 4

The grammar lesson/review option order formerly depended on topic string length and question index times 3 modulo 6. Within a topic this alternated only two permutations and made answer positions predictable. Both now use the existing stable content-keyed permutation helper, covering all six orders. Lesson retry changes its in-memory round salt so the learner cannot rely on the previous option position. Saved question indices, correct-answer identities, XP values and history format are unchanged.

Lesson answers are disabled after selection, with a synchronous lock against repeated same-event input. Feedback is announced as a status with explicit correct/review wording as well as the existing SVG symbols. German prompts have explicit LTR direction.

Also repaired one broken existing yes/no prompt: it used to read '___ kommst du heute?' with 'Kommst' as correct, yielding a doubled verb. It now reads '___ du heute?' with the same correct answer and saved index. No reordering or history reset.

Typecheck, study regressions and production build pass. Pure tests cover six valid stable permutations and all three correct-answer positions. Arabic/English browser tests complete 15 dative questions, send two same-event clicks per item, confirm one saved answer per stable ID and disabled choices, retry with different option order and inspect 390px feedback. This is practice variety, not adaptive testing or a formal assessment.
