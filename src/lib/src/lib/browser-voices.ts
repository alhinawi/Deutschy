// Browser fallback policy: German Microsoft/Edge voices only. Never use Google/Android or an unnamed default.
export function edgeGermanVoices(voices: readonly SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
 return voices.filter(voice => {
  const identity=`${voice.name ?? ''} ${voice.voiceURI ?? ''}`;
  return /^de(?:[-_]|$)/i.test(voice.lang) && !/google|android/i.test(identity) && /microsoft|\bedge\b/i.test(identity);
 });
}
export function availableEdgeGermanVoices(): SpeechSynthesisVoice[] {
 return typeof speechSynthesis==='undefined'?[]:edgeGermanVoices(speechSynthesis.getVoices());
}
export function chooseEdgeGermanVoice(preferred=''): SpeechSynthesisVoice|undefined {
 const voices=availableEdgeGermanVoices();
 return voices.find(voice=>voice.voiceURI===preferred)??voices[0];
}
