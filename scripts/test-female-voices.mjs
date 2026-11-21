// Owner directive 2026-11-21: every German audio path uses a female voice.
// Pins the female roster, the female hash picker, the speak() clip filter and
// the female-first browser voice policy.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { webcrypto } from 'node:crypto';

const compile = (p) => ts.transpileModule(fs.readFileSync(p, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
let checks = 0;

// 1. Roster: 21 pinned voices, exactly the 7 female ElevenLabs voices plus the
// two female Gemini premade ids in the playable set.
const roster = {};
vm.runInNewContext(compile('src/lib/tts-voices.ts'), { exports: roster, Set });
assert.equal(roster.ttsVoices.length, 21);
const femaleNames = Array.from(roster.femaleTtsVoices, (v) => v.name).sort();
assert.deepEqual(femaleNames, ['Alice', 'Bella', 'Jessica', 'Laura', 'Lily', 'Matilda', 'Sarah']);
assert.equal(roster.femaleVoiceIds.size, 9);
assert.ok(roster.femaleVoiceIds.has('Kore') && roster.femaleVoiceIds.has('Erinome'));
assert.ok(!roster.femaleVoiceIds.has('Iapetus') && !roster.femaleVoiceIds.has('Charon'));
assert.ok(!roster.femaleVoiceIds.has('CwhRBWXzGAHq8TQ4Fs17')); // Roger
checks += 6;

// 2. Female hash picker: deterministic and always female across many hashes.
for (let i = 0; i < 500; i++) {
  const hash = (i * 2654435761 >>> 0).toString(16).padStart(8, '0');
  const pick = roster.voiceForTextHashFemale(hash);
  assert.ok(roster.femaleVoiceIds.has(pick.id), hash);
  assert.equal(roster.voiceForTextHashFemale(hash).id, pick.id);
  checks += 2;
}
assert.notEqual(roster.voiceForTextHashFemale('00000000').id, roster.voiceForTextHashFemale('00000001').id);
checks++;

// 3. speak(): a cached clip whose voice is not female is skipped, so the text
// falls through to the live female voice / browser voice instead of playing.
{
  const voices = {};
  const vsandbox = { exports: voices };
  vm.runInNewContext(compile('src/lib/browser-voices.ts'), vsandbox);
  voices.setVoices = (list) => { if (list) vsandbox.speechSynthesis = { getVoices: () => list }; else delete vsandbox.speechSynthesis; };
  const played = [];
  const sandbox = {
    exports: {},
    require: (name) =>
      name.includes('static-speech') ? { staticSpeech: { Test: { shard: 'deutschy-local', url: '/clips/' + 'a'.repeat(64) + '.mp3', voiceId: 'CwhRBWXzGAHq8TQ4Fs17' } }, speechShardBases: {} }
      : name.includes('recorded-audio') ? { recordedAudio: {} }
      : name.includes('voice-preference') ? { readVoicePreference: async () => 'varied' }
      : name.includes('tts-voices') ? { femaleVoiceIds: new Set(['EXAVITQu4vr4xnSDxMaL', 'Kore', 'Erinome']) }
      : voices,
    URL,
    AbortController,
    setTimeout: (fn) => 0,
    clearTimeout: () => {},
    fetch: async () => { throw new Error('offline'); },
    Audio: class {
      constructor(src) { played.push(src); this.playbackRate = 1; }
      play() { return Promise.reject(Object.assign(new Error('denied'), { name: 'NotAllowedError' })); }
      pause() {}
    },
  };
  vm.runInNewContext(compile('src/lib/speak.ts'), sandbox);
  const statuses = [];
  await sandbox.exports.speak('Test', { onstatus: (s) => statuses.push(s) });
  assert.deepEqual(played, []); // male clip (Roger) never started
  assert.ok(statuses.includes('error') || statuses.includes('unavailable'));
  checks += 2;

  // 4. Browser policy: a female German voice wins over a male one on both tiers.
  const male = { name: 'Microsoft Conrad Online (Natural) - German (Germany)', voiceURI: 'Microsoft Conrad Online (Natural) - German (Germany)', lang: 'de-DE' };
  const female = { name: 'Microsoft Katja Online (Natural) - German (Germany)', voiceURI: 'Microsoft Katja Online (Natural) - German (Germany)', lang: 'de-DE' };
  assert.equal(voices.edgeGermanVoices([male, female]).length, 2);
  voices.setVoices([male, female]);
  assert.equal(voices.chooseEdgeGermanVoice().name.includes('Katja'), true);
  voices.setVoices([{ name: 'Android deutsch male', voiceURI: 'x', lang: 'de-de', default: true }, { name: 'Petra', voiceURI: 'y', lang: 'de-DE' }]);
  assert.equal(voices.chooseEdgeGermanVoice().voiceURI, 'y');
  voices.setVoices(null);
  checks += 3;
}

// 5. Live fallback: a 'varied' request resolves to a female roster voice.
{
  const ex = {};
  const femaleOnly = { id: 'fixture-female', gender: 'female' };
  const rosterStub = { ttsVoices: [femaleOnly, { id: 'fixture-male', gender: 'male' }], voiceForTextHash: () => femaleOnly, femaleTtsVoices: [femaleOnly], femaleVoiceIds: new Set(['fixture-female']), voiceForTextHashFemale: () => femaleOnly };
  vm.runInNewContext(compile('functions/lib/audio-fallback194.ts'), { exports: ex, require: (name) => name.includes('allowlist') ? ['Approved text'] : rosterStub, Response, Request, URL, TextEncoder, crypto: webcrypto, caches: { default: { match: async () => undefined, put: async () => {} } } });
  let payload;
  const env = { AUDIO_FALLBACK_ENABLED: 'true', AUDIO_FALLBACK_SERVICE_TOKEN: 'test-only', AUDIO_FALLBACK_VOICES: '["fixture-female"]', AUDIO_FALLBACK: { async fetch(req) { payload = await req.json(); return new Response('audio', { headers: { 'content-type': 'audio/mpeg' } }); } } };
  const req = new Request('https://deutschy.pages.dev/api/audio-fallback', { method: 'POST', headers: { origin: 'https://deutschy.pages.dev', 'content-type': 'application/json' }, body: JSON.stringify({ text: 'Approved text', language: 'de', voice: 'varied', fallbackReason: 'free_unavailable' }) });
  const res = await ex.serveAudioFallback(req, env);
  assert.equal(res.status, 200);
  assert.equal(payload.voice, 'fixture-female');
  checks += 2;
}

console.log(`PASS ${checks} female-voice assertions: female-only roster picks, male clips skipped, female-first browser voices, live 'varied' resolves female`);
