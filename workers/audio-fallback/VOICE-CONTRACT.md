# Shared fallback voice and allowlist contract

The service accepts an exact provider voice ID, NOT `varied`, Gemini voice names, display names, gender or accent labels. The site adapter must resolve preferences to a pinned ID before calling.

German: use any of the 21 IDs in the attached src/voice-roster.json, copied from the current Deutschy pinned roster. For `varied`, Deutschy keeps its existing voiceForTextHash mapping and sends the resulting ID. Do not change stable voice assignment.

English profiles:
- US-female: EXAVITQu4vr4xnSDxMaL (Sarah)
- US-male: CwhRBWXzGAHq8TQ4Fs17 (Roger)
- UK-female: Xb7hH8MSUJpSbSDYk0k2 (Alice)
- UK-male: JBFqnCBsd6RMkjVDRZzb (George)

Each site's server adapter accepts only its own published voice preferences and sends the matching ID. These are multilingual voice IDs, not a claim of native German accent. Real account availability remains unverified while account reads time out.

## Text allowlist

Supply a UTF-8 JSON array of exact approved spoken strings per site. No IDs, URLs, translations or objects in the array. Normalize each string with NFC, trim and collapse whitespace; remove empty or >1000-codepoint entries, then dedupe. Preserve case, punctuation and bare-word versus article-prefixed distinctions. Edited/free-form user text is NOT approved by being typed into a field.

Builders send one file each: deutschy-allowlist.json / henglish-allowlist.json. The service build merges these into src/allowlist.json under keys deutschy/henglish. Defaults are empty, so new text is denied until that service version is deployed. Allowlist updates are reviewed code/deployment changes, never a writable browser endpoint. Include a count, SHA-256 and source commit with each update; acceptance tests prove an unknown text gets 404 before a provider call. Client/server endpoint flags stay off throughout this work.
