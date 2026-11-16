import {notFound} from 'next/navigation';import {dialogues} from '@/lib/egypt-dialogues';import EgyptDialogueView from '@/components/EgyptDialogueView';
export function generateStaticParams(){return dialogues.map(d=>({id:d.id}))}
export async function generateMetadata({params}:{params:Promise<{id:string}>}){const {id}=await params;const d=dialogues.find(d=>d.id===id);return {title:`${d?.title[0]} - Deutschy`,alternates:{canonical:`/egypt-dialogues/${id}/`},openGraph:{title:d?.title[0],url:`/egypt-dialogues/${id}/`,images:['/og.png']}}}
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;const d=dialogues.find(d=>d.id===id);if(!d)notFound();return <EgyptDialogueView d={d}/>}
