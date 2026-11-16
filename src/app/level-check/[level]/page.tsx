import { notFound } from 'next/navigation';
import LevelCheck from '@/components/LevelCheck';
import { CHECK_LEVELS, type CheckLevel } from '@/lib/level-check';
export const dynamicParams = false;
export const generateStaticParams = () => CHECK_LEVELS.map((level)=>({level}));
export async function generateMetadata({params}:{params:Promise<{level:string}>}) { const {level}=await params; return {title:`${level} mixed level check - Deutschy`,description:'A limited grammar and reading revision check from existing practice banks. Not official placement or certification.',alternates:{canonical:`/level-check/${level}/`},openGraph:{title:`${level} mixed level check - Deutschy`,url:`/level-check/${level}/`,images:['/og.png']}}; }
export default async function Page({params}:{params:Promise<{level:string}>}) { const {level}=await params; if(!CHECK_LEVELS.includes(level as CheckLevel))notFound();return <LevelCheck level={level as CheckLevel}/>; }
