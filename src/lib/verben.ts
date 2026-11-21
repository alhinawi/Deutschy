import data from './generated/verben.json';

export type GenVerb = {
  inf: string;
  ar: string;
  lvl: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  kinds: ('regular' | 'strong' | 'irregular' | 'modal' | 'separable' | 'reflexive')[];
  aux: 'haben' | 'sein';
  pres: string[];
  pret: string[];
  kj2: string[];
  imp: string[];
  pp: string;
};

export const verben = data as GenVerb[];
export const perfektOf = (v: GenVerb) => `${v.aux === 'sein' ? 'ist' : 'hat'} ${v.pp}`;
export const PERSONS = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'] as const;
