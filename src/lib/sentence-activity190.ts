'use client';
import {useCallback,useEffect,useState} from 'react';
import {accountMemory,subscribeState} from './account-memory';
const savedKey='deutschy:sentences190:saved',completedKey='deutschy:sentences190:completed';
const validId=(id:unknown):id is string=>typeof id==='string'&&/^s190-[a-z0-9-]{1,55}$/.test(id);
export function decodeSentenceIds(raw:string|null){
 if(raw===null)return new Set<string>();
 const value:unknown=JSON.parse(raw);
 if(!Array.isArray(value)||value.length>8000||!value.every(validId))throw Error('Invalid sentence activity data');
 return new Set<string>(value);
}
export function useSentenceActivity(){
 const [saved,setSaved]=useState(new Set<string>()),[completed,setCompleted]=useState(new Set<string>()),[error,setError]=useState(false),[ready,setReady]=useState(false);
 useEffect(()=>{
  const sync=()=>{try{const nextSaved=decodeSentenceIds(accountMemory.getItem(savedKey)),nextCompleted=decodeSentenceIds(accountMemory.getItem(completedKey));setSaved(nextSaved);setCompleted(nextCompleted);setReady(true);setError(false)}catch{setError(true);setReady(false)}};
  sync();return subscribeState(sync);
 },[]);
 const change=useCallback((key:string,id:string,toggle=false)=>{
  if(!validId(id))return false;
  try{const value=decodeSentenceIds(accountMemory.getItem(key));if(toggle&&value.has(id))value.delete(id);else value.add(id);if(value.size>8000)throw Error('Sentence activity too large');accountMemory.setItem(key,JSON.stringify([...value]));return true}catch{setError(true);return false}
 },[]);
 return {saved,completed,error,ready,toggleSaved:(id:string)=>change(savedKey,id,true),complete:(id:string)=>change(completedKey,id)};
}
