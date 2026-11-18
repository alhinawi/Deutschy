import json,pathlib,requests,hashlib,datetime,concurrent.futures,argparse
p=argparse.ArgumentParser();p.add_argument("--input",required=True);p.add_argument("--output",required=True);args=p.parse_args()
items=json.load(open(args.input))
def check(pair):
 slot,item=pair;slot=int(item['name'].rsplit(' ',1)[1]);p=pathlib.Path(item['path']);row={'slot':slot,'label':item['name']}
 try:
  key=p.read_text().strip();row['credentialFingerprint']=hashlib.sha256(key.encode()).hexdigest()[:16]
  for endpoint in ['subscription','user']:
   u='https://api.elevenlabs.io/v1/user'+('/subscription'if endpoint=='subscription'else'')
   try:
    r=requests.get(u,headers={'xi-api-key':key},timeout=(4,5));row[endpoint+'HTTP']=r.status_code
    if r.ok:
     j=r.json()
     if endpoint=='subscription':row.update(tier=j.get('tier'),characterCount=j.get('character_count'),characterLimit=j.get('character_limit'),canExtend=j.get('can_extend_character_limit'),nextReset=j.get('next_character_count_reset_unix'))
     else:
      ident=j.get('user_id')or j.get('email')
      if ident:row['accountFingerprint']=hashlib.sha256(str(ident).encode()).hexdigest()[:16]
    else:
     try:
      detail=r.json().get('detail',{});row[endpoint+'ErrorCode']=detail.get('status')if isinstance(detail,dict)else'provider_error'
     except ValueError:pass
   except requests.RequestException as e:row[endpoint+'Error']=type(e).__name__
 except Exception as e:row['localError']=type(e).__name__
 finally:p.unlink(missing_ok=True)
 return row
with concurrent.futures.ThreadPoolExecutor(max_workers=4)as pool:out=list(pool.map(check,enumerate(items,1)))
seen={}
for row in out:
 fp=row.get('credentialFingerprint');row['duplicateOf']=seen.get(fp)
 if fp:seen.setdefault(fp,row['slot'])
result={'auditedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'providerGenerationCalls':0,'entries':out};pathlib.Path(args.output).write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2))
