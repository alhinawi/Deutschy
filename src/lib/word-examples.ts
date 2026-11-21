import raw from '../../data/word-examples.json';
import raw2 from '../../data/word-examples2.json';

// Short A1 example sentences per picture word, with Egyptian Arabic
// translations. word-examples.json holds the first sentence for every word;
// word-examples2.json holds a second, different sentence, authored in unit
// batches. Words without an entry simply do not show that example yet.
export type WordExample = { de: string; ar: string };

const examples = raw as Record<string, WordExample>;
const examples2 = raw2 as Record<string, WordExample>;

export const wordExampleCount = Object.keys(examples).length;
export const wordExample2Count = Object.keys(examples2).length;

export function exampleOf(id: string): WordExample | null {
  const ex = examples[id];
  return ex && ex.de && ex.ar ? ex : null;
}

export function example2Of(id: string): WordExample | null {
  const ex = examples2[id];
  return ex && ex.de && ex.ar ? ex : null;
}
