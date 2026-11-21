#!/usr/bin/env python3
"""Build a separate static speech artifact. Never retries ambiguous synthesis requests.
Use only an explicitly approved free account, with overage disabled. No account cycling.
"""
import argparse,hashlib,json,os,subprocess,urllib.request
from speech_balance import least_used,rebalance_plan,counts_for
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--key-file',required=True);p.add_argument('--output',required=True);p.add_argument('--generate',type=int,default=0);p.add_argument('--rebalance',action='store_true');p.add_argument('--plan-file');args=p.parse_args()
assert 0<=args.generate<=200
root=Path(__file__).resolve().parents[1];out=Path(args.output);audio=out/'clips';audio.mkdir(parents=True,exist_ok=True)
key=Path(args.key_file).read_text().strip()
def get(path):return json.load(urllib.request.urlopen(urllib.request.Request('https://api.elevenlabs.io'+path,headers={'xi-api-key':key}),timeout=20))
sub=get('/v1/user/subscription');assert sub['tier']=='free' and sub.get('can_extend_character_limit') is False,'Free/no-overage guard failed'
ledger_path=out/'ledger.json';ledger=json.loads(ledger_path.read_text()) if ledger_path.exists() else {}
assert not any(x.get('pending') for x in ledger.values()),'Unresolved prior generation: inspect provider history before another request'
voices=json.loads((root/'src/lib/tts-voices.ts').read_text().split('export const ttsVoices=')[1].split(' as const;')[0])
# Owner directive 2026-11-21: new synthesis uses female voices only.
voices=[v for v in voices if v.get('gender')=='female']words=json.loads((root/'data/vocab.json').read_text())['words']
def save():ledger_path.write_text(json.dumps(ledger,ensure_ascii=False,indent=2)+'\n')
def store(text,voice,source,origin):
 encoded=out/'encoded.mp3'
 subprocess.run(['ffmpeg','-v','error','-y','-i',str(source),'-c:a','libmp3lame','-b:a','48k','-ar','24000','-ac','1','-metadata','title='+text+' | elevenlabs.io',str(encoded)],check=True)
 digest=hashlib.sha256(encoded.read_bytes()).hexdigest();target=audio/(digest+'.mp3')
 encoded.replace(target)
 ledger[text]={'url':'/clips/'+target.name,'voiceId':voice,'sha256':hashlib.sha256(target.read_bytes()).hexdigest(),'bytes':target.stat().st_size,'source':origin,'provider':'ElevenLabs','attribution':'elevenlabs.io','synthesized':True};save()
# Reuse authorized existing preview clips without another provider debit.
preview=Path('/tmp/voice164-multi-preview.json')
if preview.exists():
 for item in json.loads(preview.read_text())['samples']:
  if item['word'] not in ledger and Path(item['clip']).exists():store(item['word'],item['voice_id'],Path(item['clip']),'existing-private-preview164')
budget_file=out/'budget.json'
budget=json.loads(budget_file.read_text()) if budget_file.exists() else {'baseline':sub['character_count']}
budget.setdefault('reservedTotal',sum(len(text) for text,item in ledger.items() if item.get('source')=='generated178'))
budget_file.write_text(json.dumps(budget))
used=max(sub['character_count'],budget['baseline']+budget['reservedTotal']);limit=sub['character_limit'];generated=0
plan=rebalance_plan(ledger,voices) if args.rebalance else []
planned_replacements=len(plan)
texts=list(dict.fromkeys(row['text'] for row in json.loads(Path(args.plan_file).read_text()))) if args.plan_file else [word['art']+' '+word['de'] for word in words]
for text in texts:
 if len(plan)>=planned_replacements+args.generate:break
 if text not in ledger:plan.append((text,None))
for text,assigned in plan:
 cost=len(text)
 if used+cost>limit-500:break
 voice=assigned or least_used(ledger,voices)
 previous=ledger.get(text)
 budget['reservedTotal']+=cost;budget_file.write_text(json.dumps(budget))
 ledger[text]={'pending':True,'voiceId':voice,'reservedCharacters':cost,'previous':previous};save()
 body={'text':text,'model_id':'eleven_multilingual_v2','language_code':'de','voice_settings':{'stability':.6,'similarity_boost':.75}}
 request=urllib.request.Request('https://api.elevenlabs.io/v1/text-to-speech/'+voice+'?output_format=mp3_44100_128',data=json.dumps(body).encode(),headers={'xi-api-key':key,'content-type':'application/json','accept':'audio/mpeg'},method='POST')
 with urllib.request.urlopen(request,timeout=25) as response:
  assert response.headers.get('content-type','').startswith('audio/');data=response.read();assert 0<len(data)<512000
 source=out/'pending.mp3';source.write_bytes(data);store(text,voice,source,'balanced179' if previous else ('dialogue184' if args.plan_file else 'generated179'));source.unlink();used+=cost;generated+=1
registry={text:{'url':item['url'],'voiceId':item['voiceId'],'shard':'deutschy-1'} for text,item in ledger.items() if not item.get('pending')}
(root/'data/static-speech.json').write_text(json.dumps(registry,ensure_ascii=False,indent=2)+'\n')
(out/'_headers').write_text('/clips/*\n  Cache-Control: public, max-age=31536000, immutable\n  Access-Control-Allow-Origin: *\n  X-Content-Type-Options: nosniff\n')
(out/'index.html').write_text('<!doctype html><html lang="en"><meta charset="utf-8"><title>Deutschy synthesized speech | elevenlabs.io</title><h1>Deutschy German speech</h1><p>Synthesized speech by <a href="https://elevenlabs.io">elevenlabs.io</a>, not a human recording. Noncommercial free-plan use. Audio supports the free Deutschy learning site.</p></html>')
print(json.dumps({'clips':len(registry),'generated':generated,'bytes':sum(x['bytes']for x in ledger.values() if 'bytes'in x),'voiceCounts':dict(counts_for(ledger,voices)),'subscription':{k:v for k,v in get('/v1/user/subscription').items() if k in ['tier','character_count','character_limit','can_extend_character_limit']}},ensure_ascii=False))
