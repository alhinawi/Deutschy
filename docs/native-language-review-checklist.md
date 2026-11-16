# Native-language editorial review checklist

Status: **not yet reviewed by a native-language editor**. Prepared 2026-11-16 after the fifteenth content update.

This is a handoff for a native German teacher/editor and an Egyptian Arabic reviewer. Passing automated checks does not establish idiomatic language, suitable difficulty or sound teaching. Level labels organize practice; they are not an official CEFR/Goethe mapping or assessment.

بداية سريعة: ابدأ بالحاجات ذات الأولوية تحت، مش مطلوب تراجع الموقع كله مرة واحدة. الألماني محتاج مدرس أو مراجع ألماني أصلي، والمصري محتاج مراجع مصري. علّم اللي اتراجع بس، واكتب النص المقترح بدل كلمة "تمام" من غير تحديد.

## 1. Start with this focused batch

Do not mark a row complete until the German, meaning and question ambiguity have been checked. Egyptian Arabic sign-off is a separate check.

| Done | Route / location | What needs a human decision |
| --- | --- | --- |
| [ ] | `/reading/alltag-a2-paket/` | Is the German natural at the intended study difficulty? Check long clauses, neighbor politeness, and **halb sieben = 18:30** in this evening context. Do all 4 answers follow from the text? |
| [ ] | `/reading/alltag-b1-schicht/` | Check *Frühschicht*, *Schichten tauschen*, *übernehmen* and *dafür*. Is the Thursday 8–10 / Friday last-2-hours exchange unambiguous? Is the school-arrival inference fair? |
| [ ] | `/grammar/dativ/` | Dative is not limited to an indirect object. Check plural -n wording and the -s exception, especially **mit den Autos**. |
| [ ] | `/grammar/adjektiv-endungen/` | Verify every definite-article ending, especially feminine/neuter accusative **-e**, not a blanket -en rule. |
| [ ] | `/grammar/perfekt/` | Check haben/sein qualifications, movement vs destination, reflexive verbs with haben, and verbs ending in -ieren without ge-. |
| [ ] | `/conjugation/#present-focus` | Verify the 36 new forms below and whether the contrast notes help beginners rather than overgeneralize. Test incorrect forms as well as correct forms. |
| [ ] | `/lessons/medizin/` | Check **der Rollstuhl / Rollstühle**, **die Krücke / Krücken**, **die Wärmflasche / Wärmflaschen** and Egyptian Arabic meanings. Does each real photo show the intended noun clearly? |
| [ ] | `/grammar/satzbau/` | Check the repaired yes/no item **___ du heute?** with **Kommst**, and the V2/yes-no question explanations. |

### Fourteenth update: additional pending targets

- [ ] `/b1/`, **Indirekte Fragen**: check all 8 prompts, ob vs question word, final verb, separable verb and Perfekt ordering; confirm exactly one supplied answer fits. Check explanation of whole-sentence punctuation.
- [ ] `/b1/`, **weil / denn / deshalb**: check all 8 connector contrasts, especially inversion after deshalb/trotzdem vs verb-final obwohl/weil. Six B1 specialist sets now contain 48 items, separate from the 382 core grammar-question count below.
- [ ] `/dialogues/`, **Das Fahrrad abholen**: workshop idiom, Abholschein, reparierte Bremse vs aufgepumpter Reifen, fictional 24-Euro total and no extra pump fee, Egyptian Arabic and three exact-evidence answers.
- [ ] `/dialogues/`, **Eine Aufgabe gemeinsam planen**: natural project negotiation, responsibility for each location vs shared table, Wednesday collection vs Thursday checking, pronoun references and three exact-evidence answers.
- [ ] `/dictation/`: each source-reading set preserves its sentence meaning and boundaries. Listen for device-voice issues with numbers/abbreviations; text correctness and voice behavior are separate findings. The tool is unsaved practice, not an official listening exam.

### Fifteenth update: additional pending targets

- [ ] `/reading/alltag-a2-bibliothek/`: check lost-bag sequence, Tuesday vs next-morning Wednesday, Stofftasche/Brotdose, the ten-minute closing window and all four evidence answers. Check Egyptian Arabic gender/pronoun consistency.
- [ ] `/reading/alltag-b1-reparatur/`: check technical but non-instructional repair vocabulary, the volunteers' no-guarantee qualification, test-page inference and all four questions. The event is fictional, not a service promise or repair manual.
- [ ] `/review/`, `/review/daily/`, `/review/words/`: review corrected feedback and local schedule copy. Noun prompts now use Arabic/English meanings instead of revealing the German lemma; check each meaning remains a fair cue. Synchronous answer locks do not establish learning quality.

### Present forms to sign off

Person order: **ich · du · er/sie/es · wir · ihr · sie/Sie**. These are full standard present-indicative forms. This list does not approve other tenses or colloquial shortened forms.

| Verb | Six forms | German editor |
| --- | --- | --- |
| nehmen | nehme · nimmst · nimmt · nehmen · nehmt · nehmen | [ ] |
| geben | gebe · gibst · gibt · geben · gebt · geben | [ ] |
| fahren | fahre · fährst · fährt · fahren · fahrt · fahren | [ ] |
| arbeiten | arbeite · arbeitest · arbeitet · arbeiten · arbeitet · arbeiten | [ ] |
| wissen | weiß · weißt · weiß · wissen · wisst · wissen | [ ] |
| sehen | sehe · siehst · sieht · sehen · seht · sehen | [ ] |

Sources were checked for these forms; that is not native editorial sign-off. Each active exercise links its specific present-form source. See `thirteenth-present-depth.md` for the six exact source URLs.

## 2. Apply these checks to each text or exercise

- [ ] German: spelling, capitalization, articles, cases, agreement, tense, word order and punctuation.
- [ ] Idiom: would a person actually say/write this in the stated setting? Flag unnatural literal translations.
- [ ] Meaning: Egyptian Arabic preserves the German meaning, time, negation, condition and pronoun reference. Do not silently add an inference.
- [ ] Register: Egyptian Arabic sounds natural and respectful, not a mix of formal Arabic and accidental slang. Latin runs remain readable in RTL.
- [ ] Questions: exactly one supplied answer is defensible. Distractors are wrong for a reason, not merely less preferred.
- [ ] Evidence: the quoted text really supports the answer; paraphrases preserve meaning. A question must not need outside knowledge.
- [ ] Difficulty: flag vocabulary or grammar beyond the intended practice group. Do not certify a level from this sample.
- [ ] Listening: listen on a German device voice if available. Check sentence segmentation, numbers and abbreviations. A pronunciation issue may belong to the device voice rather than the text.
- [ ] Safety and context: fictional prices, timetables, ticket validity, medical scenarios and workplace arrangements must not read as current policy, medical advice or real events.

## 3. Wider review queue after the focused batch

This is an inventory, not completed review. Snapshot: **669 photo nouns / 58 topics**, **71 reading texts / 237 reading questions**, **41 core grammar topics / 382 core grammar questions**, **11 dialogues**, **72 present-focus cells**. Separate specialist tools contain additional material not counted in the core grammar figure.

| Queue | Reader entry point | Editable content |
| --- | --- | --- |
| Nouns and photos | `/lessons/` and `/credits/` | `data/vocab.json`, `data/en.json`; use each word's photo credit and original source |
| Core grammar and question banks | `/grammar/` | `src/lib/grammar-a.ts` through `grammar-c.ts`; `exercises.ts` and its imported extensions |
| Reading and listening | `/reading/` | `src/lib/reading.ts` and `reading-*.ts`; exact support excerpts in `reading-evidence.ts` |
| Dialogues | `/dialogues/` | `src/lib/dialogues.ts`; also review the separate Egyptian situations from `/egypt-dialogues/` |
| Conjugation and verbs | `/conjugation/` and `/verbs/` | `src/lib/present-focus.ts`, `conjugation.ts`, `verbs.ts`; distinguish form recall from use in context |
| Higher-level specialist material | `/b1/`, `/b2/`, `/c1/`, `/c2/` | Corresponding `*-grammar.ts`, `*-themes.ts`, reading and writing files; prioritize nuance and alternative valid answers |
| Product language | `/progress/`, `/level-check/`, `/certificate/A1/` | Verify local-only records, repeated-attempt counts and non-official completion language; do not turn practice scores into proficiency claims |

Reading distribution: A1 7 · A2 18 · B1 16 · B2 12 · C1 9 · C2 9. These are content counts, not evidence of full level coverage.

## 4. Record findings so a fix is actionable

Copy this block once per finding. No learner names, personal history or account data are needed.

```text
Route / content ID:
Question index or exact sentence:
Current text:
Suggested replacement:
Reason (incorrect / ambiguous / unnatural / too difficult / translation mismatch):
Does the correct answer change? If yes, explain:
German reviewed by / date:
Egyptian Arabic reviewed by / date:
Status: open / fixed, needs recheck / checked
```

Do not reorder or insert into an existing saved question bank casually. A correction can keep its ID; a new item should be appended so a learner's saved question history is not assigned to a different question.

## 5. Sign-off is scoped, never implied

- [ ] The focused rows above have explicit German reviewer/date records.
- [ ] Egyptian Arabic meanings have separate reviewer/date records.
- [ ] Answer-changing fixes have been rechecked with their questions and feedback.
- [ ] Reading/listening variants, RTL/LTR display and mobile rendering have been rechecked after edits.
- [ ] Unreviewed content remains labeled pending in the review record. One approved sample does not approve the entire site.

No reviewer or review date has been filled in. This document requests review; it does not claim review has happened.
