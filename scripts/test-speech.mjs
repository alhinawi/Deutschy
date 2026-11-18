// The shared chain changed in audio194: the legacy /api/tts is a vendor,
// not a free-server step. Exercise the replacement routing and policy suite.
import './test-audio-fallback194.mjs';
import ts from 'typescript';import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const exports={};let voices=[];vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/lib/browser-voices.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,{exports,speechSynthesis:{getVoices:()=>voices}});
const edge={lang:'de-DE',name:'Microsoft Katja Online (Natural) - German (Germany)',voiceURI:'Microsoft Katja Online (Natural) - German (Germany)'},edge2={lang:'de-AT',name:'Microsoft Ingrid',voiceURI:'Microsoft Ingrid'},google={lang:'de-DE',name:'Google Deutsch',voiceURI:'Google Deutsch'};
const bad=[google,{lang:'de-DE',name:'Android Deutsch',voiceURI:'com.android.tts'},{lang:'de-DE',name:'Microsoft Google',voiceURI:'Google Android'},{lang:'en-US',name:'Microsoft Aria',voiceURI:'Microsoft Aria'},{lang:'de-DE',name:'Unknown',voiceURI:'default'},{lang:'de-DE'}];
assert.equal(exports.edgeGermanVoices(bad).length,0);assert.equal(exports.edgeGermanVoices([...bad,edge,edge2]).length,2);voices=[google,edge,edge2];assert.equal(exports.chooseEdgeGermanVoice(edge2.voiceURI),edge2);assert.equal(exports.chooseEdgeGermanVoice(google.voiceURI),edge);voices=[google];assert.equal(exports.chooseEdgeGermanVoice(edge.voiceURI),undefined);
console.log('PASS existing German Microsoft/Edge allowlist, fixed selection and stale selection checks retained');
