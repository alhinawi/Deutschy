import VoiceSettings from '@/components/VoiceSettings';
import AppearanceSettings from '@/components/AppearanceSettings';
import SoundInstallSettings from '@/components/SoundInstallSettings';
export const metadata={title:'Settings - Deutschy',robots:{index:false,follow:false}};
export default function Page(){return <div className="space-y-12"><AppearanceSettings/><VoiceSettings/><SoundInstallSettings/></div>}
