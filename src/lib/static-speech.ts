// Synthesized German speech, not human recordings. Free-plan publication attribution applies.
import bases from '../../data/speech-shards.json';
export const speechShardBases:Readonly<Record<string,string>>=bases;
import clips from '../../data/static-speech.json';
import generated from '../../data/generated-speech.json';
export const staticSpeech:Readonly<Record<string,{url:string;voiceId:string;shard:string}>>={...clips,...generated};
