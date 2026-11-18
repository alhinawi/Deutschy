import {notFound} from 'next/navigation';
import SentenceLibrary190 from '@/components/sentences190/SentenceLibrary190';
import library from '../../../data/sentences190/library.json';
import type {LibrarySentence} from '@/lib/sentence-library190';
export const metadata={title:'7000 German sentences | Deutschy'};
export default function Page(){
 const rows=library as LibrarySentence[];
 const complete=rows.length===7000&&rows.every(row=>row.publication==='approved');
 const preview=process.env.SENTENCE_LIBRARY_PREVIEW==='1';
 if(!complete&&!preview)notFound();
 return <SentenceLibrary190 rows={rows} preview={!complete}/>;
}
