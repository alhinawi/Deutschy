# Common animals 176 - content and QA

Owner request: add common animals as genuine vocabulary lessons, not empty categories. The choice here is common species/groups rather than a literal claim to include every animal. Food, drinks and a dedicated slang section are separate queued batches.

## Counts and coverage

- Before:111 cards in 9 animal-topic lessons, plus bee and butterfly in Outdoors =113 living-animal vocabulary cards.
- Added 44 cards across 5 real lessons:10 pets/farm,10 wild,9 aquatic,9 reptiles/amphibians/small animals,6 birds.
- After:157 animal words; total vocabulary 965 to 1009; topics 199 to 204.
- `/animals/` groups all 157: pets/farm 30,wild 45,birds 35,aquatic 19,reptiles/amphibians 11,small/invertebrates 17. Broad animal names are illustrated by a real representative. Aquatic includes freshwater.
- Existing word/topic order and IDs retained, with new topics appended. No progress keys, schemas or automatic-completion rules changed. No seeded activity.

## Photos and meanings

All 44 new photos were visually inspected and metadata-checked. Portrait/wide subjects have neutral 4:3 padding rather than an identifying crop. Their exact source files, authors, licenses, dictionary URLs and image hashes are recorded in `data/animal-expansion176.json`. First leads rejected: Stier was a cow, Muschel was shells only, swordfish was stuffed, nightingale had a GFDL-only license, and a flea specimen's live/dead status was unclear. Cow/shell/nightingale photos were replaced. Swordfish/flea remain deferred, not represented by fake images.

German articles/plurals were checked against Wiktionary, selecting the animal sense, including das Pony, unchanged Hamster/Meerschweinchen/Büffel/Erdmännchen/Rochen/Hummer/Salamander/Geier, Walrosse, Geckos and Hähne. German source records retained. Six old Arabic meanings are clarified for deer/gazelle,eagle/vulture and big cats; original German text/IDs remain unchanged. Native German/Egyptian Arabic editorial review is pending and documented, not inferred from tests.

Igel was already a real card. Lesson search now shows a matching-word thumbnail and explicit word-card link; the global word result also links directly to an anchored card. Exact translated topic labels retain search priority as the word catalogue grows, so the English Animals lesson is still discoverable.

## Genuine contribution

Category source authored under 3mrdiab, verified authorID 356948613 and parent 174 main, preserved as ancestor and moved byte-identically into `src/lib/animal-groups.ts`:
https://github.com/3mrdiab/Deutschy/commit/41066225859a61052fcc267b9a2b63aa34c33607

## Validation

940 model assertions pin 44 newphotos/credits/dictionary sources,157 unique group members,real lesson routes and direct word search anchors.508 browser assertions acrossAR/EN 320/390 with 24 axe snapshots cover 6 group counts/show-more,all 44 newphoto loads,5 real lessons,hedgehog search-to-card navigation and unchanged synthetic learner progress. Combined speaker main561e7da + animal branch: typecheck/build/study/content checks pass; speaker44browser assertions/4axe and speech model pass; search120/6axe, navigation480/4axe, review112/4axe passed before reconciliation; final PWA/progress396347B/export1111pages/1095targets pass. Production npm audit has0vulnerabilities. Initial combined build was killed with an orphaned interrupted-test browser; stopped that browser and rebuilt successfully. An interrupted completion-browser run has no result and is not counted as passed. Mobile hub and actual Igel/Hamster/Robbe/Gecko cards pixel-inspected. Existing audio policy/provider remains unchanged; another scoped fix owns speaker availability notices.

No exhaustive-species claim, native-language sign-off, real-device sign-off, purchase or upstream-main push.

Final word-discovery regression:4166 assertions and12axe snapshots passed after speaker reconciliation. Final native-review PDF has149pages; new table layout inspected and fixed from a compressed first column.
