// Browser fallback policy: German Microsoft/Edge voices first, then any German
// Android/system voice as the last resort. Remote Google voices stay removed.
// Owner directive 2026-11-21: prefer a female German voice whenever one is offered.
const FEMALE_DE=/katja|hedda|petra|amala|ingrid|leni|marlene|vicki|anna|gisela|astrid|brigitte|female/i;
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
 const edgePick=edge.find(voice=>voice.voiceURI===preferred)??edge.find(voice=>FEMALE_DE.test(`${voice.name} ${voice.voiceURI}`))??edge[0];
 if (edgePick)return edgePick;
 const system=germanSystemVoices(all);
 return system.find(voice=>voice.voiceURI===preferred)??system.find(voice=>FEMALE_DE.test(`${voice.name} ${voice.voiceURI}`))??system.find(voice=>voice.default)??system[0];
}
