# List 163: Remove Google browser voices;keep Edge fallback only

## Owner decision and scope
The owner's latest Nov18 correction removes Google Android/Google TTS selection/use and keeps Edge as last-resort after ElevenLabs. It supersedes the preceding preserve-both instruction. This PR implements the browser-voice restriction only. The separate ElevenLabs proxy/pool/dedicated-key wiring is explicitly not part of this work.

## Changes
- Shared browser-voices helper accepts only German-language Microsoft/Edge-identified voices. Rejects Google/Android identifiers before the allowlist,as well as unknown/unnamed/default/non-German voices. Names and voiceURI checked;German region variants permitted.
- Shared speak preserves existing server-health/server-audio-first flow,cancellation and playback behavior. Only its device fallback selection changes to the helper. It never invokes an unspecified default voice when no allowed voice exists.
- All four direct browser-voice surfaces use the same policy:GermanVoice(shadowing/dialogues/speaking cards),DictationTrainer,SoundContrastLab and SpeakingPractice. Dropdowns contain no forbidden voices. Every play rechecks the current platform voices,so stale cached selections cannot use a removed/forbidden voice even before voiceschanged updates UI.
- Existing browser-only trainers remain browser-only in this scoped PR;no claim they now prefer recorded audio. Labels/no-voice messages explicitly identify Microsoft Edge. No microphone/speech-recognition changes. No key material,provider settings or backend changes.

## QA
-16 AR/EN320/390 browser variants across shadowing,dictation,sound contrasts and speaking,164 assertions+4 WCAG A/AA/2.1 AA axe snapshots. Fixture list starts Google/Android/unknown only:dropdown has none and playback absent. Add two German Microsoft voices:default and explicit selection play correct voice;Google still absent. Remove allowed voices without firing event and call actual mounted handler:no playback. Event refresh removes stale choices. No page errors,horizontal overflow or learner-history writes.
- Shared speech/helper unit tests reject Google/Android/unknown/unnamed/non-German and mixed misleading identifiers;accept identified German Microsoft region variants. Preferred allowed voice retained,forbidden preference cannot select it,current list rechecked. Existing server audio plays first without browser speech;unavailable server uses allowed Edge only. Async cancellation still suppresses stale playback.
- Typecheck/content/study/speech/dependency/full production build/PWA/export/progress pass;npm audit0 at check time.1088HTML/1073sitemap,worker T8EckZCS5fi8LrGBtEm_L,progress396125bytes below500000. Search6variants/120assertions/6axe+cold import and navigation4/436/4axe pass. After unchanged helper integration/path correction,typecheck/speech/study/fullbuild/voices browser/PWA/export/progress repeated successfully.
- Actual390pxAR/EN viewport screenshots inspected:no-Edge state,readable policy label,disabled Listen and read-aloud fallback instructions,without clipping. Native German/Egyptian Arabic editorial,actual Edge/Android hardware voices and screen-reader checks remain manual. Fixture proves selection behavior,not real-device voice availability or sound quality.
- npm run test:voices:browser serves loopback static export with fresh browser;run build first. CHROME_BIN optional(default /usr/bin/google-chrome),VOICES_SCREENSHOT_DIR optional. No production data/audio credits used.

## Contribution
Real source contribution: https://github.com/3mrdiab/Deutschy/commit/7e5b3d43a1202848f65814d8ffb840a1ae7df9e8 . Verified author3mrdiab/account ID356948613,exact main162 parent6b30f36f5a0fa83807dd9cc4ec370ee0713f2806,14 added helper lines. GitHub new-file path entry duplicated the directory,so original helper was committed at src/lib/src/lib/browser-voices.ts. Original commit is integrated unchanged;Hinawi moves that exact helper byte-for-byte to src/lib/browser-voices.ts in the same PR,wires all five paths,updates labels,and contributes speech/browser/source tests,test command and QA/manual-review records. No history rewrite or extra PR for the path correction. Exact trailer only for genuine contribution.

## Limits
An unrecognized voice is unavailable rather than risk selecting Google. The site cannot add Edge voices to a device that does not expose them. No new recordings/proxy/pool/key wiring. Deployment separate.
