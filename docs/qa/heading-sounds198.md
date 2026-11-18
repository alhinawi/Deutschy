# Heading sound controls198

Cause: PronView rendered each heading as plain h2 text. Only example words called speak(), so the letters and clusters themselves had no playback control.

All12 cards now expose20 model buttons. Grouped headings have separate controls for sch/st/sp, ei/ie, v/w and r/-er. Umlauts have two models. Exact explicit-phoneme MP3s are checked in with content hashes and reproducible settings in data/heading-sounds198.json and scripts/build-heading-sounds198.py.

These are simplified eSpeak NG 1.50 formant models, not native-human recordings. The models are useful for access to the basic sound, but are robotic and are not a claim of native phonetic review. Listen to the existing word examples for context. Engine IPA is retained as diagnostic output, not used as a learner-facing phonetic transcription. The German engine describes some vowels differently from narrow standard-German IPA. r uses a valid tongue-tip variant; the card explains that it is not the throat model.

An attempt to obtain free-licensed human phonetic recordings from Wikimedia Commons was stopped after media429 responses. No Commons media is used in this change. Better human model recordings remain a quality improvement, not a playback dependency.

Normal speech keeps its existing exact-clip, permitted-browser, flagged-final-adapter order. Explicit sound models are deliberately static-only: a browser or vendor reading a display label aloud would teach a letter name or spelling instead of the sound. Missing models show the existing unavailable message, rather than silently substituting incorrect audio. ElevenLabs and all vendor flags are unchanged and disabled. No device storage, account tables, or auth behavior is changed.

Checks:
- Production Next export, type checking enabled,768MB heap.
-97 export-browser assertions: all20 assets200/audio/hash and real Audio ended without browser voices; all12 cards; AR/EN390 axe and layout;44px hit targets;320px and no local/session storage.
-64 shared speech/adapter assertions including static-only failure, invalid URL rejection, existing free order/cancellation/final fallback.
-53 account API/client regression checks.
-1139 exported pages, internal links,1099 sitemap entries and image metadata.
-390px AR/EN screenshots for ü and ß inspected as pixels.

Sources:
- https://github.com/espeak-ng/espeak-ng/tree/1.50
- https://raw.githubusercontent.com/espeak-ng/espeak-ng/1.50/phsource/ph_german
- https://raw.githubusercontent.com/espeak-ng/espeak-ng/1.50/docs/phonemes.md
- https://github.com/espeak-ng/espeak-ng/blob/1.50/COPYING

Only generated sound files are distributed, not eSpeak executable code or its voice database. The source/engine notice is linked from the pronunciation page.
