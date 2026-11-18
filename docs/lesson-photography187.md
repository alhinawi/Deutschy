# Core lesson photographs187

## Scope

This change covers every one of the 43 core grammar lessons, 204 vocabulary topics and 155 verbs, on catalogue/level cards and detail pages. It does not yet cover the separate 480 reading texts, 420 general dialogues or 16 Egyptian-context dialogues. Those remain the next photo-coverage milestone. Exercises, content, routes, scoring identities and account storage are preserved.

All UI changes remain in the existing Next.js 15 static-export application, with Tailwind classes and no new dependency or paid service. Deployment stays with the existing Cloudflare Pages workflow.

## Photograph decisions

- `data/lesson-photos187.json` records the concrete teaching context, display path, full SHA-256, dimensions and credit for every selected asset.
- `src/lib/lesson-photo-map.json` is the small client-facing path map. Every display copy has a 20-hex content-hash filename. Original vocabulary asset paths remain intact.
- Action photographs are used where a suitable checked scene exists, including cooking, baking, playing football, flying, learning, discussing, sleeping, swimming, washing hands, showering, dancing, running, cutting bread and writing.
- Other photographs illustrate a concrete noun, setting or situation from the lesson. They do not prove an abstract rule, a person's thoughts, ownership, causation, an exact fictional example, movement or tense. For example, a key supplies context for finding or forgetting a key; it does not show forgetting.
- Verb cards now show their existing German example to make that context clearer. Verb details use `object-contain` to retain the whole action and avoid clipping hands or faces.
- Images are decorative next to the full text and use empty alt text. No teaching content is available only through an image.
- The original vocabulary credits are preserved. The missing shirt photographer credit is repaired from the Commons original to ChristianGlaeser, with the existing CC BY-SA 3.0 option. New scene credits are available under Photo credits, including exact license links and original source links.
- Nine new verb scenes have resized/compressed display copies, without permanent crops. Six grammar scene files retain their downloaded bytes. Responsive CSS can crop grammar images. The credit page states the transformations.

## New sources

The 15 new scene credits are listed in `data/lesson-photo-credits187.json`. The additional scenes used for verbs were checked against their original Commons pages and inspected before use:

- Cleaning: Mutiganda wa Nkunda, CC BY-SA 4.0.
- Beach shower: Stolbovsky, CC BY-SA 3.0.
- Butterfly swimmer: Crimson2016, CC BY-SA 3.0.
- Handwashing: Amuzujoe, CC BY-SA 4.0.
- Folk dancing: Michał Maliszewski, CC0.
- Hiking: Will Langenberg, CC0.
- Running: Ed Yourdon, CC BY-SA 2.0.
- Writing: Cathryn Lavery, CC0.
- Cutting bread: Ildar Sagdejev (Specious), CC BY-SA 4.0.

These are neutral educational contexts. No endorsement, real identity in a fictional story, diagnosis or commercial offer is implied. A distant exterior-cleaning candidate was rejected after pixel inspection. No paid image generation, stock purchase or account pooling was used.

## Validation

- Build and static export: 1,114 pages, internal links, sitemap and canonical destinations.
- Photo model: 3,376 checks for all 402 core lessons, asset hashes, exact paths, credits, examples and route coverage.
- Browser: 889 Arabic/English 320/390 checks and six accessibility scans. Every one of the 155 verb detail routes loads its exact mapped photo.
- Visual inspection: all 43 grammar cards and 155 verb cards, all selected verb-image subjects, Arabic/English detail pages, and mobile crops. Screenshot captures center each card above the fixed navigation bar.
- Existing content, noun/animal photo-credit, study/review, type and storage tests remain required before merge.

Automated checks are not native-language editorial sign-off or real-device approval. See the updated native review checklist. The reading/dialogue follow-up remains open.

## Deploy and rollback

No database migration, environment change or additional infrastructure is needed for this change. Deploy the merged main SHA through the normal Pages build. Revert the PR to roll back the UI and mappings; do not remove or alter historical account state. Static cache versioning continues through the existing build script.
