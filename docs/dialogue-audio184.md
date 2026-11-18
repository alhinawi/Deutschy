# A1 dialogue audio184

## Shipped

-149new exact German line clips covering23complete A1dialogues,including all4Egyptian A1dialogues and the Mansoura market dialogue. Includes the3core cafe/introduction/directions dialogues and16everyday dialogues.
-230active static clips total. Compatible static bundle retains10superseded clip URLs as well:240MP3files. Previously published URLs remain usable.
-Egyptian full-dialogue playback now uses its exact lines in sequence rather than sending one concatenated string that misses the static manifest. Stop,cancel,navigation and text changes cancel the sequence.
-An exact static clip plays even if a different preferred voice is selected. Voice settings now explain that available clips use their recorded synthesized voice;preferred selection applies to new requests. No voice setting is changed silently.
-Existing priority remains reviewed human recording,exact static speech,enabled provider endpoint,German Microsoft/Edge fallback. No Google/Android browser fallback introduced. No autoplay,microphone or learner recording.

## Counts and cost

Only the approved dedicated Free account was used,overage disabled. No paid generation,no account/key pooling,no retries of ambiguous synthesis.149requests generated5,866source characters. Actual provider balance moved from776/10,000used to5,370/10,000used:4,630remaining after the batch. Actual debit4,594provider credits differs from source-character count;the API balance is authoritative. No further synthesis after that measurement.

21voices remain balanced:20voices with11active clips and1with10. There are142A1dialogues and980unique lines in current content;831unique A1lines still lack this generated batch. This PR does not claim all dialogue audio exists. The rest retains existing fallbacks and text.

Source of balance: authenticated https://api.elevenlabs.io/v1/user/subscription . No credential or private account value is committed. Audio attribution remains elevenlabs.io,noncommercial Free-plan use,synthesized rather than human recording.

## Evidence

-149new files decoded with ffprobe and SHA256checked locally. All149deployed static URLs subsequently fetched in Chrome and matched committed report hashes. Python direct fetch was403,but Chrome worked;not treated as a missing deployment.
-AR/EN390Mansoura playback finished all4real deployed clips in order with no Edge voices and a different fixed preference saved. No provider synthesis call. Stop suppressed continuation.10browser assertions and2axe scans passed. Screens inspected. Concatenated4-line audio transcription matched all4German sentences;not native-accent/editorial sign-off.
-Speech model and voice-balance tests,108audio settings/provider/browser checks with4axe,64home/path checks with8axe,study/review,content/photo/animals,PWA,export,typechecks and build passed.
-Static sound bundle deployed before the new frontend manifest. Frontend deployment/live canonical interaction remains the deployer's step after merge.

The native-language checklist remains pending. New photos are not part of184. Future photo additions/replacements follow the owner's realistic photographic-style rule,not illustrated/cartoon styling;replace existing unsuitable art rather than deleting content. No paid image generation.

## Files

`data/static-speech.json`:exact text-to-shard/filename mapping.
`data/dialogue-audio184-plan.json`:149source rows and23dialogue IDs.
`data/dialogue-audio184-report.json`:149hash/voice/size records,actual balance snapshot and counts.
`scripts/test-dialogue-audio184-browser.mjs`:local artifact playback,or `LIVE_AUDIO=1` to read deployed static clips with local frontend.

Next:20themes and interactive UI sounds;real German deep-feature parity and helper teaching-quality followup remain recorded in mobile-journal183.md. No empty counterparts or native-review claims.
