'use client';
import { useState } from 'react';
import { useT } from '@/lib/i18n';
import Mixed from './Mixed';
import MiniQuiz from './MiniQuiz';
import { sample } from '@/lib/data';

const topics = [
  { id: 'nebensatz', name: 'weil / dass', ar: 'بعد weil و dass الفعل المتصرف بيروح آخر الجملة. weil بتقول السبب، و dass بتنقل معلومة.', en: 'After weil and dass, the conjugated verb goes to the end. Weil gives a reason; dass introduces a statement.', rows: [
    ['Ich bleibe zu Hause, weil ich krank ___.', 'bin', 'ist', 'habe'],
    ['Ich weiß, dass er heute ___.', 'kommt', 'kommen', 'kommst'],
    ['Sie lernt viel, weil sie die Prüfung bestehen ___.', 'will', 'wollen', 'wollt'],
    ['Er sagt, dass er keine Zeit ___.', 'hat', 'haben', 'hast'],
    ['Wir fahren mit dem Bus, weil unser Auto kaputt ___.', 'ist', 'sind', 'seid'],
    ['Ich glaube, dass sie in Berlin ___.', 'wohnt', 'wohnen', 'wohnst'],
    ['Ich bin müde, weil ich schlecht geschlafen ___.', 'habe', 'bin', 'hat'],
    ['Sie sagt, dass sie morgen arbeiten ___.', 'muss', 'müssen', 'musst'],
  ] },
  { id: 'modalperfekt', name: 'Modalverben im Perfekt', ar: 'مع فعل تاني: haben + المصدر + مصدر المودال. اسمه Ersatzinfinitiv. في الكلام غالبًا بنختار Präteritum الأسهل: Ich musste arbeiten.', en: 'With another verb: haben + infinitive + modal infinitive (Ersatzinfinitiv). Speech often uses the simpler Präteritum: Ich musste arbeiten.', rows: [
    ['Ich habe gestern arbeiten ___. (müssen)', 'müssen', 'gemusst', 'musste'],
    ['Sie hat nicht kommen ___. (können)', 'können', 'gekonnt', 'konnte'],
    ['Wir haben früher gehen ___. (dürfen)', 'dürfen', 'gedurft', 'durften'],
    ['Er hat länger bleiben ___. (wollen)', 'wollen', 'gewollt', 'wollte'],
    ['Du hast den Arzt anrufen ___. (sollen)', 'sollen', 'gesollt', 'solltest'],
    ['Ihr ___ heute nicht arbeiten müssen.', 'habt', 'seid', 'hat'],
    ['Sie ___ die Aufgabe lösen können.', 'hat', 'ist', 'bist'],
    ['Wir ___ den Zug nehmen wollen.', 'haben', 'sind', 'hat'],
  ] },
  { id: 'komparativ', name: 'Komparativ', ar: 'المقارنة: الصفة + er وبعدها als. بعض الصفات بتاخد أوملاوت. احفظ: gut → besser، viel → mehr، gern → lieber. التساوي: so ... wie.', en: 'Comparison: adjective + er, followed by als. Some adjectives add an umlaut. Learn gut → besser, viel → mehr, gern → lieber. Equality: so ... wie.', rows: [
    ['Berlin ist ___ als Bonn. (groß)', 'größer', 'großer', 'groß'],
    ['Heute ist es ___ als gestern. (kalt)', 'kälter', 'kalter', 'kälteste'],
    ['Dieses Buch ist ___ als das andere. (interessant)', 'interessanter', 'interessant', 'interessantest'],
    ['Der Zug ist schneller ___ der Bus.', 'als', 'wie', 'dass'],
    ['Mein Bruder ist so alt ___ du.', 'wie', 'als', 'weil'],
    ['Ich spreche jetzt ___ Deutsch. (gut)', 'besser', 'guter', 'best'],
    ['Ich trinke ___ Tee als Kaffee. (gern)', 'lieber', 'gerner', 'lieb'],
    ['Sie hat ___ Zeit als ich. (viel)', 'mehr', 'vieler', 'meist'],
  ] },
];
export default function A2View() {
  const t = useT();
  const [id, setId] = useState(0);
  const s = topics[id];
  return <div className="space-y-6">
    <h1 className="ar-title text-4xl font-bold">{t('تدريبات قواعد A2', 'A2 grammar practice')}</h1>
    <div className="flex flex-wrap gap-2">{topics.map((x, i) => <button key={x.id} aria-pressed={id === i} onClick={() => setId(i)} className={`rounded-full border px-4 py-2 ${id === i ? 'bg-accent text-accent-ink border-accent' : 'border-line'}`}>{x.name}</button>)}</div>
    <section className="space-y-3 rounded-2xl border border-line bg-card p-5"><h2 dir="ltr" className="de text-2xl font-bold">{s.name}</h2><p className="ar-title text-lg"><Mixed text={t(s.ar, s.en)} /></p><p dir="ltr" lang="de" className="de text-lg">{s.rows[0][0].replace('___', s.rows[0][1])}</p></section>
    <MiniQuiz key={s.id} game={`a2-${s.id}`} size={8} make={() => sample(s.rows, 8).map(([prompt, ...options]) => ({ prompt, options, key: `a2:${s.id}:${prompt}`, hear: prompt.replace('___', options[0]), note: [s.ar, s.en] }))} />
  </div>;
}
