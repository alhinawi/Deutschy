import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
const clips=JSON.parse(fs.readFileSync('data/generated-speech.json','utf8'));
// Voices of record: the pinned ElevenLabs roster plus the Gemini premade voices used by past batches.
const rosterSrc=fs.readFileSync('src/lib/tts-voices.ts','utf8');
const rosterIds=[...rosterSrc.matchAll(/"id": "([^"]+)"/g)].map(m=>m[1]);
const knownVoices=new Set([...rosterIds,'Kore','Erinome','Iapetus','Charon']);
const counts={};
for(const [text,clip] of Object.entries(clips)){
 assert.equal(clip.shard,'deutschy-local');
 assert.ok(knownVoices.has(clip.voiceId),clip.voiceId);
 // Clip files are content-addressed by the encoded audio, not the text; the text key is the lookup.
 assert.match(clip.url,/^\/clips\/[a-f0-9]{64}\.mp3$/);
 assert.ok(fs.statSync(`public${clip.url}`).size>1000);
 const probe=spawnSync('ffprobe',['-v','error','-show_entries','format=duration','-of','csv=p=0',`public${clip.url}`],{encoding:'utf8'});
 assert.equal(probe.status,0,`invalid MP3 for ${text}`);
 assert.ok(Number(probe.stdout)>0.2,`short/empty MP3 for ${text}`);
 counts[clip.voiceId]=(counts[clip.voiceId]||0)+1;
}
assert.ok(Object.keys(clips).length>=60);
assert.ok(Object.keys(counts).length>=4,'expected several voices in use');
console.log('PASS generated static clips:',Object.keys(clips).length,counts);
