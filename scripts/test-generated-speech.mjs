import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
const clips=JSON.parse(fs.readFileSync('data/generated-speech.json','utf8'));
const counts={};
for(const [text,clip] of Object.entries(clips)){
 assert.equal(clip.shard,'deutschy-local');
 assert.ok(['Erinome','Iapetus'].includes(clip.voiceId));
 const id=crypto.createHash('sha256').update(text).digest('hex');
 assert.equal(clip.url,`/clips/${id}.mp3`);
 assert.ok(fs.statSync(`public${clip.url}`).size>1000);
 const probe=spawnSync('ffprobe',['-v','error','-show_entries','format=duration','-of','csv=p=0',`public${clip.url}`],{encoding:'utf8'});
 assert.equal(probe.status,0,`invalid MP3 for ${text}`);
 assert.ok(Number(probe.stdout)>0.2,`short/empty MP3 for ${text}`);
 counts[clip.voiceId]=(counts[clip.voiceId]||0)+1;
}
assert.ok(Object.keys(clips).length>=60);
assert.ok(Math.abs((counts.Erinome||0)-(counts.Iapetus||0))<=1);
console.log('PASS generated static clips:',Object.keys(clips).length,counts);
