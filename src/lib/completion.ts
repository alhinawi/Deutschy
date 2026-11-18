import type {State} from './store';
export type CheckpointId='pron'|'learn';
export const checkpointKey=(id:CheckpointId)=>`checkpoint:${id}:passed`;
export function checkpointState(s:Pick<State,'seen'|'pfad'>,id:CheckpointId){
 const earned=(s.seen[checkpointKey(id)]?.ok??0)>0;
 const legacy=s.pfad?.[id]===true;
 return {earned,legacy:legacy&&!earned,done:earned||legacy};
}
// Existing manual records stay valid historical records, not quiz evidence.
// New completions require a finished, perfect fixed-bank review round.
export function checkpointPassed(correct:number,total:number,expected:number){return expected>0&&total===expected&&Number.isInteger(correct)&&correct===total;}
