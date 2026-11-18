'use client';
import {useT} from '@/lib/i18n';
const references:Record<string,{name:string;url:string}[]>={
 plusquamperfekt:[
  {name:'Lingolia: Plusquamperfekt',url:'https://deutsch.lingolia.com/de/grammatik/zeitformen/plusquamperfekt'},
  {name:'mein-deutschbuch: Plusquamperfekt',url:'https://mein-deutschbuch.de/plusquamperfekt/'},
  {name:'IDS: Hilfsverben',url:'https://grammis.ids-mannheim.de/systematische-grammatik/1613'},
 ],
 'indirekte-fragen':[
  {name:'DeutschAkademie: indirekte Fragen',url:'https://www.deutschakademie.de/online-deutschkurs/deutsche-grammatik/satzbau/nebensatz/indirekte-frage/'},
  {name:'LEO: die indirekte Frage',url:'https://dict.leo.org/grammatik/deutsch/Wort/Verb/Kategorien/Modi/Fragesatz.html?lang=de'},
  {name:'EasyDeutsch: indirekte Fragen',url:'https://easy-deutsch.de/satzbau/fragen/indirekte-fragen/'},
 ],
};
export default function GrammarReferences({topic}:{topic:string}){
 const t=useT(),items=references[topic];
 if(!items)return null;
 return <section aria-label={t('مصادر شرح القاعدة','Grammar explanation sources')} className="space-y-2 rounded-2xl border border-line bg-card p-4">
  <h2 className="ar-title text-xl font-bold">{t('اقرا القاعدة من مصدرها','Read the source explanations')}</h2>
  <p className="text-sm text-muted">{t('دي مراجع ألماني لتكوين القاعدة وأمثلتها، مش اعتماد للموقع أو مراجعة بشرية للمحتوى المصري.','German references for the rule and its forms, not site certification or human editorial approval of our translations.')}</p>
  <ul className="space-y-1">{items.map(item=><li key={item.url}>
   <a href={item.url} target="_blank" rel="noreferrer" className="de inline-block min-h-11 max-w-full break-words py-3 underline" dir="ltr" lang="de">{item.name}</a>
  </li>)}</ul>
 </section>;
}
