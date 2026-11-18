# Whole-site audio fallback194

The grammar screenshot has the same coverage/policy cause as pronunciation193: no exact clip, disabled server TTS, and no permitted German Microsoft browser voice exposed on the Android device. Edge Android does not guarantee that such a voice exists.

All speaker buttons use the shared speech helper. The new chain tries exact human/static/generated audio first, then a permitted browser voice, then the new same-origin `/api/audio-fallback` once after a real failure. There is no free server generator configured. The old `/api/tts` is an ElevenLabs implementation, not free audio, so it must not run before browser speech. It is left in place for compatibility but not called by the shared client.

A media error after playback starts now continues the chain instead of immediately producing the final toast. Final failure feedback appears only when the remaining permitted paths fail. Stop, newer requests, route navigation, pagehide, AbortError, autoplay denial and browser cancellation do not start vendor fallback. Eight-second start timeouts can advance only while the same request remains active. Vendor retries are not automatic.

## Disabled-by-default service adapter

`AUDIO_FALLBACK_ENABLED` must equal `true`, the `AUDIO_FALLBACK` service binding and `AUDIO_FALLBACK_SERVICE_TOKEN` must exist, and `AUDIO_FALLBACK_VOICES` must contain a JSON array of accepted pinned voice IDs. Missing or invalid configuration stays disabled. No credentials or configuration flags are added by this PR. The separate worker/service deployment is owned elsewhere.

The client reads the health capability only after free paths fail. Server-side origin checks, exact approved text, German language, allowed reason and voice checks run before the service call. The existing varied preference is resolved by the stable voiceForTextHash mapping into an exact provider ID on the server. Unreviewed user-edited text is not allowlisted. Failures expose no provider payload or secrets. The site adapter forwards only audio MIME data and bounded generic errors.

The generated server allowlist contains 37,533 exact normalized strings at content base cef4b7578a398e4ed3040b1fea68b62b633d7e20. The audit includes finite number/time/date drills, source examples and the full 7000 bank. It does not promise complete coverage of arbitrary text. There are 299 whole texts over 1000 characters; those are not sent to this service. Future work should segment them at existing sentence/paragraph boundaries, preserve text and order, and carry stop/new-request cancellation across segments, with each segment explicitly allowlisted. No truncation is acceptable.

Validation: 48 policy/adapter assertions, the retained voice-policy checks, production static export with type checking enabled, 1138-page export QA, 234 existing real pronunciation-browser assertions, and grammar-page adapter routing in mobile-width Chromium. The grammar adapter test mocks audio bytes, not a real vendor call; no quota is used. Its AR390 screenshot is visually inspected. Physical Android playback and the external service are not verified. The flags remain disabled.
