'use client';
let ttsServer: boolean | null = null;
let cur: HTMLAudioElement | null = null;

async function serverTts(text: string) {
  if (ttsServer === null) {
    try { ttsServer = Boolean((await (await fetch('/api/health')).json()).tts); } catch { ttsServer = false; }
  }
  if (!ttsServer) return false;
  try {
    const r = await fetch('/api/tts?text=' + encodeURIComponent(text));
    if (!r.ok) return false;
    const url = URL.createObjectURL(await r.blob());
    cur?.pause();
    cur = new Audio(url);
    await cur.play();
    return true;
  } catch { return false; }
}

// Plays only on an explicit user tap (no autoplay). Server voice if configured, else the browser's German voice.
export async function speak(text: string) {
  if (await serverTts(text)) return true;
  if (typeof speechSynthesis === 'undefined') return false;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'de-DE'; u.rate = 0.85;
  const v = speechSynthesis.getVoices().find((x) => x.lang.toLowerCase().startsWith('de'));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
  return true;
}

export function stopSpeaking() { cur?.pause(); if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel(); }
