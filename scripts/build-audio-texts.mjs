// Build the generation text list for pre-generated audio: old manifest minus
// quiz-generated number/date/time texts, plus the new generated sections.
import fs from 'node:fs';
import crypto from 'node:crypto';
const normalize=t=>t.normalize('NFC').trim().replace(/\s+/gu,' ');
const rows=JSON.parse(fs.readFileSync('data/tts-manifest.json','utf8'));
const skip=/^(number-quiz|date-quiz|time-formal|time-informal|typed-number)/;
const map=new Map();
for(const r of rows){if(skip.test(r.source))continue;const text=normalize(r.text);if(text&&!map.has(text))map.set(text,r.source);}
const woerter=JSON.parse(fs.readFileSync('src/lib/generated/woerter.json','utf8'));
for(const w of woerter){const t=normalize(w.pluralOnly?w.de:`${w.art} ${w.de}`);if(!map.has(t))map.set(t,'woerter');}
const verben=JSON.parse(fs.readFileSync('src/lib/generated/verben.json','utf8'));
for(const v of verben){const t=normalize(v.inf.replace(/^sich /,''));if(!map.has(t))map.set(t,'verben');}
const out=[...map.entries()].map(([text,source])=>({id:crypto.createHash('sha256').update(text).digest('hex'),text,source})).sort((a,b)=>a.id.localeCompare(b.id));
fs.writeFileSync('/tmp/audio-texts.json',JSON.stringify(out,null,1));
console.log(JSON.stringify({entries:out.length,characters:out.reduce((n,r)=>n+r.text.length,0)}));
