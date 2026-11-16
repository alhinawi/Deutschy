// Commons search per word; picks first real photo (jpg, wide enough) whose title mentions the English keyword. Resumable cache.
import fs from 'node:fs';
const UA = { 'User-Agent': 'Deutschy/0.1 (https://deutschy.pages.dev; alhinaawi@gmail.com)' };
const slug = (s) => s.toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const lines = fs.readFileSync('data/vocab-source3.txt','utf8').split('\n').filter(l=>l.trim());
let topic=null; const topics=[]; const items=[];
for (const l of lines) { if (l.startsWith('@')) { const [id,ar]=l.slice(1).split('|'); topic={id,ar}; topics.push(topic); continue; } const [art,de,plural,ar,q]=l.split('|'); items.push({topic:topic.id,art,de,plural,ar,q}); }
const CF='data/cache3.json'; const cache = fs.existsSync(CF)?JSON.parse(fs.readFileSync(CF,'utf8')):{};
const api = async (p) => { const u='https://commons.wikimedia.org/w/api.php?format=json&origin=*&'+new URLSearchParams(p); for(let i=0;i<4;i++){const r=await fetch(u,{headers:UA}); if(r.ok) return r.json(); await new Promise(r=>setTimeout(r,1500*(i+1)));} throw new Error('api'); };
const REJ=new Set(JSON.parse(fs.readFileSync('data/rejected3.json','utf8')));
fs.mkdirSync('public/img',{recursive:true});
async function one(it){
  const id=slug(it.de); if(cache[id]!==undefined) return;
  const kw=it.q.split(' ')[0].toLowerCase();
  const j=await api({action:'query',generator:'search',gsrnamespace:'6',gsrsearch:`${it.q} filetype:bitmap`,gsrlimit:'15',prop:'imageinfo',iiprop:'url|size|mime|extmetadata',iiurlwidth:'520',iiextmetadatafilter:'LicenseShortName|Artist'});
  const pages=Object.values(j.query?.pages||{}).sort((a,b)=>a.index-b.index);
  for(const p of pages){
    const ii=p.imageinfo?.[0]; if(!ii) continue;
    if(!/jpeg/.test(ii.mime)||ii.width<700||ii.height<500) continue;
    if(!p.title.toLowerCase().includes(kw)) continue;
    if(REJ.has(p.title.replace('File:',''))) continue;
    const lic=ii.extmetadata?.LicenseShortName?.value||''; if(!lic) continue;
    const r=await fetch(ii.thumburl,{headers:UA}); if(!r.ok) continue;
    fs.writeFileSync(`public/img/${id}.jpg`,Buffer.from(await r.arrayBuffer()));
    cache[id]={id,topic:it.topic,art:it.art,de:it.de,plural:it.plural,ar:it.ar,photo:{file:p.title.replace('File:',''),page:ii.descriptionurl,commons:ii.descriptionurl,license:lic,author:(ii.extmetadata.Artist?.value||'').replace(/<[^>]*>/g,'').trim().slice(0,120)}};
    fs.writeFileSync(CF,JSON.stringify(cache)); return;
  }
  cache[id]=null; fs.writeFileSync(CF,JSON.stringify(cache));
}
const t0=Date.now(); let idx=0;
await Promise.all(Array.from({length:4},async()=>{while(idx<items.length&&Date.now()-t0<80000){const it=items[idx++];try{await one(it);}catch(e){console.log('err',it.de);}}}));
console.log('done',Object.values(cache).filter(Boolean).length,'null',Object.values(cache).filter(v=>v===null).length,'of',items.length);
