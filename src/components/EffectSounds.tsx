'use client';
import { useEffect } from 'react';
import { installEffectGestures } from '@/lib/game-effects';
/** Site-wide action-only UI sounds: one soft tone on real button/link/select
 *  activation, two on graded answers. Nothing on typing, scroll or page load.
 *  The on/off switch lives in Settings (GameSoundControl); this only installs
 *  the listeners and respects that saved choice on every play. */
export default function EffectSounds() {
  useEffect(() => installEffectGestures(), []);
  return null;
}
