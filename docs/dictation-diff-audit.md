# Existing dictation improvement

No duplicate dictation app: existing A1-C2 reading-derived dictation already
provides German browser speech, typing and honest no-voice fallback. Extended
its result with word-aligned difference map, explicit plus/missing and minus/
extra labels that do not rely on color. One inserted word no longer shifts all
later words. Original positional details remain expandable for compatibility.
Comparison ignores listed punctuation but retains case/umlauts; it is not
language grading. The text input is capped at 1500 characters and targets are short reading
segments. Stop audio added, stale error callbacks suppressed on reset,
and synchronous playback failure handled. No microphone or server changes.

Unit insert/delete/umlaut tests pass. Browser no-voice state, typed insertion,
non-cascading alignment, mobile overflow and WCAG A/AA axe pass. Screenshot
inspected. Typecheck/build/export pass. Real speech quality remains unverified.
