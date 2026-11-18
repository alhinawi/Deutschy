# Pronunciation exact-word audio193

The reported Chrome Android failure was a coverage/policy combination, not a misspelled asset path. The 74 unique pronunciation words, including all six pictured ä examples, had no exact static clips. The live health endpoint returned `tts:false`. Browser fallback intentionally accepts identified German Microsoft/Edge voices and excludes Google/Android/default voices. An Android browser without an allowed voice could therefore reach the unavailable message.

This change adds 74 exact bare-word synthesized MP3 clips and registry entries. It does not substitute article-prefixed noun audio, loosen the fallback policy, enable a provider proxy or use D1. Playback now works on these cards without a browser German voice. Other unrecorded content can still lack audio. This is not full-site audio coverage.

The clips were supplied from the approved free generation workflow, with four varied Gemini voices. They are synthesized, not human recordings. Content-addressed filenames match SHA256 bytes. The existing 90 generated entries are preserved. No purchase, quota pooling, data migration or runtime configuration change is included.

Validation: 234 checks cover all 74 asset responses, audio MIME and hashes; real HTMLAudioElement ended events for Mädchen, Bäcker, Käse, Äpfel, spät and Zähne in mobile-width Chromium with only Google Deutsch offered to the browser fallback; zero server TTS requests and zero browser speech calls; no page errors; clean accessibility and 390/320px layout. Arabic 390px and English 320px screenshots were visually inspected. Existing shared-speech tests pass. Device-specific playback and native pronunciation quality are not certified by these checks.
