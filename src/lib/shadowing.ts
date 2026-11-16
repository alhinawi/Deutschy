import {readings} from './reading';
export const shadowingTexts=readings.map(r=>({id:r.id,level:r.level,title:r.title,lines:r.de.flatMap(p=>p.match(/[^.!?]+[.!?]+(?:["»”])?|[^.!?]+$/gu)?.map(s=>s.trim()).filter(Boolean)||[])})).filter(r=>r.lines.length);
