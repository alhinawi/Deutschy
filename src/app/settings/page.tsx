import VoiceSettings from '@/components/VoiceSettings';
import AppearanceSettings from '@/components/AppearanceSettings';
export const metadata={title:'Appearance and audio settings - Deutschy',robots:{index:false,follow:false}};
export default function Page(){return <div className="space-y-12"><AppearanceSettings/><VoiceSettings/></div>}
