'use client';
import {accountMemory} from './account-memory';
// Effects are independent of speech providers and never request a network resource.
export const EFFECT_KEY = 'deutschy:effects';
let gesture = false;
let consumed = false;
let context: AudioContext | null = null;
let generation = 0;
let lastUi=0;
let selectionUntil=0;
const active = new Set<OscillatorNode>();
export function effectsEnabled() {
  if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try { return accountMemory.getItem(EFFECT_KEY) !== 'off'; } catch { return false; }
}
export function stopEffects() {
  generation++;
  for (const oscillator of active) { try { oscillator.stop(); } catch {} }
  active.clear();
}
export function installEffectGestures() {
  const begin = (event: Event) => {
    if (!event.isTrusted) { gesture = false; selectionUntil=0; return; }
    if(event.type==='change'&&Date.now()>selectionUntil){gesture=false;return}
    if(event.type==='change')selectionUntil=0;
    else if(event.target instanceof Element&&event.target.closest('select,input[type=radio],input[type=checkbox]'))selectionUntil=Date.now()+2500;
    if (event instanceof KeyboardEvent && !['Enter', ' '].includes(event.key)) return;
    gesture = true; consumed = false;
    setTimeout(() => { gesture = false; }, 0);
  };
  const interactive=(event:Event)=>{
    if(!event.isTrusted||!(event.target instanceof Element))return;
    const control=event.target.closest('button,a[href],summary,select,input[type=radio],input[type=checkbox]');
    if(!control||control.closest('[data-ui-sound=off]')||control.matches(':disabled')||control.closest('fieldset[disabled]'))return;
    if(event.type==='change'&&!control.matches('select,input'))return;
    queueMicrotask(()=>{if(!consumed)uiEffect()});
  };
  const visibility = () => { if (document.hidden) stopEffects(); };
  document.addEventListener('click', begin, true);
  document.addEventListener('keydown', begin, true);
  document.addEventListener('submit', begin, true);
  document.addEventListener('visibilitychange', visibility);
  document.addEventListener('click',interactive);
  document.addEventListener('change',interactive);
  document.addEventListener('change',begin,true);
  document.addEventListener('pointerdown',begin,true);
  return () => {
    document.removeEventListener('click', begin, true);
    document.removeEventListener('keydown', begin, true);
    document.removeEventListener('submit', begin, true);
    document.removeEventListener('visibilitychange', visibility);
    document.removeEventListener('click',interactive);
    document.removeEventListener('change',interactive);
    document.removeEventListener('change',begin,true);
    document.removeEventListener('pointerdown',begin,true);
    gesture = false; stopEffects();
  };
}
export function answerEffect(correct:boolean){playEffect(correct?[523.25,659.25]:[293.66,261.63])}
export function uiEffect(){if(Date.now()-lastUi<80)return;lastUi=Date.now();playEffect([440])}
function playEffect(notes:number[]) {
  if (!gesture || consumed || !effectsEnabled() || document.hidden) return;
  consumed = true;
  const token = ++generation;
  try {
    const Constructor = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Constructor) return;
    context ??= new Constructor();
    const ctx = context;
    const play = () => {
      if (token !== generation || !effectsEnabled() || document.hidden || ctx.state !== 'running') return;
      // Soft sine notes, under 0.3 seconds. Wrong is low and calm, not a buzzer.
      // One quiet note for UI;two notes distinguish graded answers.
      for (const [i, frequency] of notes.entries()) {
        const oscillator = ctx.createOscillator(), gain = ctx.createGain();
        const start = ctx.currentTime + i * .105;
        oscillator.type = 'sine'; oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime((notes.length===1?.018:.045), start + .012);
        gain.gain.exponentialRampToValueAtTime(.0001, start + .14);
        oscillator.connect(gain); gain.connect(ctx.destination);
        active.add(oscillator);
        oscillator.onended = () => { active.delete(oscillator); oscillator.disconnect(); gain.disconnect(); };
        oscillator.start(start); oscillator.stop(start + .15);
      }
    };
    if (ctx.state === 'suspended') void ctx.resume().then(play).catch(() => {}); else play();
  } catch { /* A muted or unsupported device keeps visual feedback working. */ }
}
