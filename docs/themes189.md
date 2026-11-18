# 20 themes and a clearer default

## Theme refresh189 and hero corrections

Prepared 2026-11-18. This is an engineering handoff, not native-language sign-off.

- 20 appearance themes now use Tailwind utility tokens, with light/dark palettes and several self-hosted/system font pairings. New accounts and guests start with Cobalt. Explicit saved themes and legacy themes remain available.
- Settings shows an actual bilingual text preview, radio choices, palette swatches and a clear selected state. Theme choice saves in the server account. Guests retain it only in volatile tab memory until reload. No client data storage was added.
- Check German umlauts, Arabic shaping, mixed-script sentences and long headings in Cobalt, Midnight, Rose and Forest at 320px and 390px. Existing fonts are reused. No font or image service was purchased.
- Pronunciation now uses a conversation photograph, not the Bangladesh school building. The Places lesson hero now uses the licensed market square photo. The shopping verb now uses that square instead of a Cyrillic-signage supermarket. The full 271-asset hero atlas was visually inspected for subject context and signage. The school and supermarket vocabulary photographs are retained as vocabulary records, not deleted or silently replaced across all historical uses.
- Grammar photographs are teaching contexts, often tied to an example sentence, not photographs proving grammatical tense, ownership or a person's thoughts. The conversation photo is not evidence of what language its subjects speak.
- Test results: Next.js static export; 1114 exported pages and internal links; 252 theme model/contrast/default/legacy/failure checks; combined 208 browser assertions and 40 accessibility snapshots across Arabic/English and all 20 themes; 48 account API/client checks and 48 account browser checks with 7 accessibility snapshots; 3376 core-photo map/hash/source checks; full study/review regressions.
- Device storage was blocked during theme browser tests. Signed-in choices survived document reload and navigation. Guest choices reset on reload. Existing progress was not changed by theme selection.
- The 916 reading/dialogue photo pass is paused in a separate reversible work snapshot. It is not included in this release.

Human review remains open. Check the Egyptian Arabic theme labels and instructional tone; do not interpret automated accessibility or contrast checks as native-language approval.

## Deploy and rollback

Static Next.js export on free Cloudflare Pages. No migrations, account schema changes, paid services or client-side data storage. Deploy the verified merge commit. Revert the feature commit to undo this appearance release without deleting content or account data.
