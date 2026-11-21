import raw from '../../data/word-examples.json';

// One short A1 example sentence per picture word, with its Egyptian Arabic
// translation. Authored in unit batches; words without an entry simply do
// not show an example yet.
export type WordExample = { de: string; ar: string };

const examples = raw as Record<string, WordExample>;

export const wordExampleCount = Object.keys(examples).length;

export function exampleOf(id: string): WordExample | null {
  const ex = examples[id];
  return ex && ex.de && ex.ar ? ex : null;
}
