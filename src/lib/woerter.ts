import data from './generated/woerter.json';

export type Wort = {
  de: string;
  art: 'der' | 'die' | 'das' | null;
  pl: string | null;
  gen: string | null;
  ar: string;
  cat: string;
  pluralOnly: boolean;
  src: string;
};

export const woerter = data as Wort[];
