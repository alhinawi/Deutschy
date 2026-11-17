# List 28 dialogue hash-change fix

Browser testing found that changing only the dialogue hash while One remained mounted carried question index, answer lock, score, translation and nested role-practice state into a different dialogue. Added a dialogue-id React key at the One boundary. Changing to another valid dialogue now remounts scoped practice state while preserving prior learning history. No stored identities or scoring rules changed.

Four bilingual 320/390px sessions answered the first question, hid translation and advanced role practice, then changed hashes without a reload. Both subsequent dialogue switches reset quiz/translation/role state; completed quizzes also reset correctly on the next change. 28 answers, eight axe states, unchanged storage on hash-only switches and no overflow. Inspected fresh first-question/reset screenshot. Typecheck/study/build pass.
