export type Lvl = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type GrammarTopic = {
  id: string; level: Lvl; img: string;
  title: [string, string]; sum: [string, string];
  points: [string, string][]; ex: [string, string, string][];
  table?: { h: string[]; r: string[][] }; tip?: [string, string];
};
