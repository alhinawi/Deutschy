// Browser fallback policy: German Microsoft/Edge voices first, then any German
// Android/system voice as the last resort. Remote Google voices stay removed.
export function edgeGermanVoices(voices: readonly SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
 return voices.filter(voice => {
  const identity=`${voice.name ?? ''} ${voice.voiceURI ?? ''}`;
  return /^de(?:[-_]|$)/i.test(voice.lang) && !/google|android/i.test(identity) && /microsoft|\bedge\b/i.test(identity);
 });
}
export function germanSystemVoices(voices: readonly SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
 return voices.filter(voice => {
  const identity=`${voice.name ?? ''} ${voice.voiceURI ?? ''}`;
  return /^de(?:[-_]|$)/i.test(voice.lang) && !/google/i.test(identity);
 });
}
export function availableEdgeGermanVoices(): SpeechSynthesisVoice[] {
 return typeof speechSynthesis==='undefined'?[]:edgeGermanVoices(speechSynthesis.getVoices());
}
export function chooseEdgeGermanVoice(preferred=''): SpeechSynthesisVoice|undefined {
 if (typeof speechSynthesis==='undefined')return undefined;
 const all=speechSynthesis.getVoices();
 const edge=edgeGermanVoices(all);
 const edgePick=edge.find(voice=>voice.voiceURI===preferred)??edge[0];
 if (edgePick)return edgePick;
 const system=germanSystemVoices(all);
 return system.find(voice=>voice.voiceURI===preferred)??system.find(voice=>voice.default)??system[0];
}
