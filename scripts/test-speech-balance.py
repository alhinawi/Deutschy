import json,sys,unittest
from pathlib import Path
sys.path.insert(0,str(Path(__file__).parent))
from speech_balance import least_used,rebalance_plan,counts_for
class BalanceTests(unittest.TestCase):
 def setUp(self):self.voices=[{'id':str(i)}for i in range(21)]
 def test_new_assignment_remains_balanced(self):
  ledger={}
  for n in range(1009):
   ledger[str(n)]={'voiceId':least_used(ledger,self.voices)}
   counts=counts_for(ledger,self.voices).values();self.assertLessEqual(max(counts)-min(counts),1)
 def test_minimum_replacements_and_no_mutation(self):
  ledger={str(i):{'voiceId':'0'}for i in range(81)};snapshot=json.dumps(ledger);plan=rebalance_plan(ledger,self.voices)
  self.assertEqual(len(plan),77);self.assertEqual(json.dumps(ledger),snapshot)
  for text,voice in plan:ledger[text]['voiceId']=voice
  c=counts_for(ledger,self.voices).values();self.assertLessEqual(max(c)-min(c),1);self.assertEqual(rebalance_plan(ledger,self.voices),[])
 def test_live_registry(self):
  root=Path(__file__).resolve().parents[1];ledger=json.loads((root/'data/static-speech.json').read_text());report=json.loads((root/'data/speech-balance179.json').read_text());counts={v:sum(x['voiceId']==v for x in ledger.values())for v in report['voiceCounts']};self.assertEqual(counts,report['voiceCounts']);self.assertEqual(sum(counts.values()),81);self.assertEqual(sorted(counts.values()),[3]*3+[4]*18)
  self.assertEqual(len(report['replacements']),10)
  for row in report['replacements']:
   self.assertNotEqual(row['before']['url'],row['after']['url']);self.assertNotEqual(row['before']['voiceId'],row['after']['voiceId']);self.assertEqual(ledger[row['text']]['url'],row['after']['url'])
if __name__=='__main__':unittest.main()
