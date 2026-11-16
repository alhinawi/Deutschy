# Dictation voice controls - 2026-11-16

The existing listening-and-typing tool now lets learners select any German voice available on their own device and choose 0.65, 0.8 or normal (1) speed. A visible playing state prevents overlapping starts. Changing the voice, speed, level or sentence cancels playback. Stale end/error callbacks cannot overwrite a new state. Answers are reset between sentences; voice/speed choices stay for the current page only.

The explanation now explicitly says this is synthesized device speech rather than a human recording. No microphone, audio upload, accent score or claim of official exam equivalence. Existing no-German-voice fallback remains. Browser voices may use a remote service and may need internet. Nominal speed is engine-dependent.

Source: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/localService and https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/rate.

QA: typecheck, study regressions, shared speech tests, production build. UI test injects German/English mock voices and checks German filtering, selected voice/lang/rate, cancellation/stale completion, answer reset and 390px overflow. Mock speech proves control wiring only: actual sound quality and the user's installed voices were not tested.
