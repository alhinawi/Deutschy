'use client';
import {useEffect} from 'react';
import {setLoggedIn} from '@/lib/store';
import {stateStatus} from '@/lib/account-memory';
export default function AuthSync(){useEffect(()=>{setLoggedIn(Boolean(stateStatus().accountId));return()=>setLoggedIn(false)},[]);return null}
