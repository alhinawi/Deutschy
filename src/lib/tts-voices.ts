// Pinned free-premade roster observed via /v1/voices on 2026-11-18.
// Multilingual v2 supports German. These are not claims of native German accents.
// Do not reorder casually:the selected voice and cache profile are stable per canonical text.
// Owner directive 2026-11-21: every German audio on the site uses a female voice.
// New live speech picks from femaleTtsVoices only; male entries stay pinned here so
// existing clip ledgers, cache ids and tests that reference them keep resolving.
export const ttsVoices=[
  {
    "id": "CwhRBWXzGAHq8TQ4Fs17",
    "name": "Roger",
    "gender": "male"
  },
  {
    "id": "EXAVITQu4vr4xnSDxMaL",
    "name": "Sarah",
    "gender": "female"
  },
  {
    "id": "FGY2WhTYpPnrIDTdsKH5",
    "name": "Laura",
    "gender": "female"
  },
  {
    "id": "IKne3meq5aSn9XLyUdCD",
    "name": "Charlie",
    "gender": "male"
  },
  {
    "id": "JBFqnCBsd6RMkjVDRZzb",
    "name": "George",
    "gender": "male"
  },
  {
    "id": "N2lVS1w4EtoT3dr4eOWO",
    "name": "Callum",
    "gender": "male"
  },
  {
    "id": "SAz9YHcvj6GT2YYXdXww",
    "name": "River",
    "gender": "male"
  },
  {
    "id": "SOYHLrjzK2X1ezoPC6cr",
    "name": "Harry",
    "gender": "male"
  },
  {
    "id": "TX3LPaxmHKxFdv7VOQHJ",
    "name": "Liam",
    "gender": "male"
  },
  {
    "id": "Xb7hH8MSUJpSbSDYk0k2",
    "name": "Alice",
    "gender": "female"
  },
  {
    "id": "XrExE9yKIg1WjnnlVkGX",
    "name": "Matilda",
    "gender": "female"
  },
  {
    "id": "bIHbv24MWmeRgasZH58o",
    "name": "Will",
    "gender": "male"
  },
  {
    "id": "cgSgspJ2msm6clMCkdW9",
    "name": "Jessica",
    "gender": "female"
  },
  {
    "id": "cjVigY5qzO86Huf0OWal",
    "name": "Eric",
    "gender": "male"
  },
  {
    "id": "hpp4J3VqNfWAUOO0d1Us",
    "name": "Bella",
    "gender": "female"
  },
  {
    "id": "iP95p4xoKVk53GoZ742B",
    "name": "Chris",
    "gender": "male"
  },
  {
    "id": "nPczCjzI2devNBz1zQrb",
    "name": "Brian",
    "gender": "male"
  },
  {
    "id": "onwK4e9ZLuTAKqWW03F9",
    "name": "Daniel",
    "gender": "male"
  },
  {
    "id": "pFZP5JQG7iQjIQuC4Bku",
    "name": "Lily",
    "gender": "female"
  },
  {
    "id": "pNInz6obpgDQGcFmaJgB",
    "name": "Adam",
    "gender": "male"
  },
  {
    "id": "pqHfZKP75CvOlQylNhV4",
    "name": "Bill",
    "gender": "male"
  }
] as const;
export function voiceForTextHash(hash:string){return ttsVoices[Number.parseInt(hash.slice(0,8),16)%ttsVoices.length]}
export const femaleTtsVoices=ttsVoices.filter(v=>v.gender==='female');
// Female ElevenLabs ids plus the female Gemini premade voices (Kore, Erinome) used
// by generated-speech batches. speak() treats a cached clip as playable only when
// its voiceId is in this set.
export const femaleVoiceIds:ReadonlySet<string>=new Set([...femaleTtsVoices.map(v=>v.id),'Kore','Erinome']);
export function voiceForTextHashFemale(hash:string){return femaleTtsVoices[Number.parseInt(hash.slice(0,8),16)%femaleTtsVoices.length]}
