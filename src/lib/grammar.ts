import {grammarExpansion} from './grammar-expansion';
import { grammarA } from './grammar-a';
import { grammarB } from './grammar-b';
import { grammarC } from './grammar-c';
import type { Lvl, GrammarTopic } from './grammar-types';
export type { GrammarTopic, Lvl };
export const grammar: GrammarTopic[] = [...grammarA, ...grammarB, ...grammarC, ...grammarExpansion];
export const grammarOf = (id: string) => grammar.find((g) => g.id === id);
export const grammarByLevel = (l: Lvl) => grammar.filter((g) => g.level === l);
// Photos only where the picture really fits the topic; others get an illustration tile.
export const GRAMMAR_PHOTO = new Set(['zahlen-uhrzeit']);
