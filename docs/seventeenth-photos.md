# Seventeenth update: photos and performance

## Visual audit

Reviewed 14 contact sheets covering all 669 photos, then larger suspect images and replacement candidates. This checks photographic relevance, not an independent botanical/zoological identification or license legal opinion. Eight replacements preserve word IDs and local review identities:

- Fenster: visible glass panes instead of closed shutters.
- Schnee: snow-covered furniture instead of a snow-crystal composite.
- Regen: rain over a marina instead of droplets on an ambiguous surface.
- Schreibtisch: a desk in ordinary use instead of a closed antique writing cabinet.
- Toaster: a domestic bread toaster instead of a hotel conveyor appliance.
- Moped: an intact moped instead of an abandoned wreck.
- Rechen: an ordinary rake instead of multiple museum tools.
- Herz: a photo of physical 3D-printed whole-heart models instead of a decorative heart-shaped object. The vocabulary card explicitly labels the physical model. Not a generated image, illustration, exposed organ or medical teaching diagram.

Exact Commons URLs, licenses and authors are retained in `data/vocab.json` and `seventeenth-image-performance.json`, surfaced by the site's credits. Cropped originals remain marked. Family/job photos illustrate contexts, not proof of kinship or profession. The grandfather and engineer crops remain visually weak but avoid close-up faces; neither was falsely certified as an ideal teaching photo. A teacher should review such ambiguous cues before treating photo-choice results as an assessment.

## Image weights

After the seven first replacements, the pre-optimization baseline was 77,433,621 bytes. JPEG re-encoding changed 551 files: max edge 720 px, quality 82, progressive, no upscaling, only retained when at least 6% smaller. A later heart replacement brings the final set to 42,801,815 bytes, about 44.7% below that baseline. This is the total local photo directory, not initial-page transfer size. Existing lazy loading remains. No claim of lossless compression: larger textures lose detail. Visually checked replacement pixels, mobile desk card, and representative high-savings photos. Binary paths remain stable.

No new runtime dependency or JS optimization was introduced. Final JS/CSS raw and gzip sums are recorded in the final QA note; these sums are not a single-route download estimate.

## Checks

669 referenced vocabulary photos and credit records (670 JPEGs in the directory, including the pre-existing unused muschel.jpg); content verification, TypeScript, study/speech/PWA tests, static export and reachability. Mobile default credits table retains LTR Word/File order in Arabic. Full-route and new-content offline QA follow separately.
