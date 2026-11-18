'use client';
import {useEffect,useState} from 'react';
import {stateStatus,subscribeState} from './account-memory';
export function useAccountSave(){const[state,setState]=useState(stateStatus);useEffect(()=>subscribeState(()=>setState(stateStatus())),[]);return state}
