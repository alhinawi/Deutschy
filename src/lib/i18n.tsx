'use client';
import {accountMemory} from '@/lib/account-memory';
import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';

export type Lang = 'ar' | 'en';
const KEY = 'deutschy:lang';
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'ar', setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setL] = useState<Lang>('ar');
  useEffect(() => {const sync=()=>{try{setL(accountMemory.getItem(KEY)==='en'?'en':'ar')}catch{}};sync();window.addEventListener('deutschy:account-state',sync);return()=>window.removeEventListener('deutschy:account-state',sync)},[]);
  const setLang = useCallback((l: Lang) => {
    setL(l);
    accountMemory.setItem(KEY, l);
    document.documentElement.lang = l;
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
export const useT = () => {
  const { lang } = useLang();
  return useCallback((ar: string, en: string) => (lang === 'ar' ? ar : en), [lang]);
};
/** Inline bilingual text. */
export function T({ ar, en }: { ar: string; en: string }) {
  const { lang } = useLang();
  return <>{lang === 'ar' ? ar : en}</>;
}
