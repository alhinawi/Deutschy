# List164: Safe speech proxy and local voice settings

## Delivered code, not a public audio launch

This batch prepares a manifest-only ElevenLabs proxy,D1 cache and per-account local voice settings. Public provider speech remains OFF behind `TTS_ENABLED`;there is no claim that credentials,schema or manifest are deployed. Free-plan publication/noncommercial/attribution review is unresolved. No paid plan,R2 or billing activation.

`/settings/` offers Varied(default)and21fixed premade names. Varied hashes canonical German text to a stable pinned voice. Same word+article keeps its voice across keys and plays;voices necessarily repeat across965nouns. Fixed selection is allowlisted server-side and included in the cache profile. Each authenticated account ID has a separate local key;guest choice is separate. Save errors remain visible. No sync claim.

All five speech paths now share recording-if-present > site proxy > identified German Microsoft/Edge voice. Four former browser-only trainers no longer disable audio just because Edge is absent. Rate,stop,onend/error and stale-request guards are preserved. Arbitrary edited speaking text is not sent to the vendor unless it exactly matches the real-content manifest. No recorded speech assets currently exist. Synthesized speech is never labeled a human recording. Google/Android/unknown/non-German/default voices remain excluded. Existing microphone-recognition feature is separate and unchanged.

## Server safeguards

- Exact normalized text and SHA256 manifest match before vendor access. Cross-origin browser requests rejected.
- Atomic1000character/UTC-day hard cap per site,including conservative reservations for failures and each quota-fallback attempt. Not a global cross-site budget.
- Pool1-9 before dedicated12. Quota-exceeded parks indefinitely pending verified reset. Rate/auth/abuse/unknown errors stop,not cycle accounts. Vendor timeout8seconds. No exception/refund that can bypass cap.
- D1 same-profile/text lock,second cache read after lock acquisition,synchronous cache persistence before release. Crash-exactly-once billing not promised.
- Atomic maximum-clip reservation and64MB new-cache budget,512000bytes/clip limit. Failed cleanup can reduce capacity,not increase budget.
- New six-table additive-only SQL. Generator uses UPSERT,not DELETE/REPLACE. Existing application tables untouched. Private remote backup taken and locally restored before any potential migration. Actual production migration remains not applied.
- Generated manifest29872strings/1913006characters from real content and existing bounded quiz outputs.342overlong whole-text entries excluded;their eligible sentences/paragraphs remain. Not arbitrary-text coverage or a bulk-fill claim. Deployment inputs ignored by git.

## Private preview

21successful free-key German multilingual-v2 generations,one real noun per available premade voice,208characters/23seconds. Read-back transcript matches all21article/noun pairs. Earlier Alice preview83characters. Neither is a public asset. Successful generation is not native-accent/editorial approval. Roster/model source:https://elevenlabs.io/docs/overview/capabilities/text-to-speech and https://elevenlabs.io/docs/api-reference/voices/search . Free-plan commercial rights remain excluded by provider documentation.

## Audit, not filler

Initial section audit:199vocabulary topics have no empty topic,but koerper2has1noun and128topics have2nouns. These remain near-empty and require genuine enrichment,not cloned nouns/fake entries.41grammar topics all have at least8questions. Readings cover all6groups142/170/138/12/9/9,writing3/7/7/7/7/7,dictation2699/3050/2729/105/88/99,verbs143. Dialogues offer populated A1/A2/B1groups138/156/126;unoffered advanced groups are not claimed populated. Vocabulary has no CEFR field. This is not a completed every-filter audit or a claim thin topics have been filled. Owner's larger frequent-verb/grammar expansion and nav-order/X requests are subsequent focused work.

## QA

- Real SQLite unit tests(mock vendor):enable gate,manifest exactness,cross-origin refusal,cache reuse,atomic cap boundary,same-text concurrency,quota-only parking,pool order,ambiguous-failure nonretry,64MB budget,allowlisted fixed voice,idempotent additive migration and preservation of existing fixture user data.
- Client tests:recording path before vendor/browser,provider priority,cancellation during async lookup,Edge-only fallback,current platform list and forbidden identifiers.
-16provider-first AR/EN320/390variants/108assertions+4axe:all4trainers work with no Edge when site audio available,no Google call,voice param forwarding,settings22choices,reload persistence and account isolation,no overflow.
- Existing16Edge-only AR/EN320/390variants/164assertions+4axe pass with site audio unavailable. Search6variants/120assertions/6axe+cold import;navigation4variants/440assertions/4axe pass.
- Typecheck,Worker helper strict check,content,study,speech,dependency,full production build,PWA/export/progress pass;npm audit0.1089exportedHTML/1073sitemap,progress396125bytes. Final build ID recorded in report.
-390pxAR/ENsettings screenshots inspected readable without clipping. Native editorial,screen reader and actual device sound quality remain manual. Browser vendor response is mocked;private21voice generation is separate evidence. Remote D1/runtime installation is not proven.

## Genuine contribution

https://github.com/3mrdiab/Deutschy/commit/61a506f4571b9ebbe900b1c9931fc10447173233 authored by3mrdiab/account356948613,exact163main parenta5cee9d2b48cadbf0168a749d9a244e5ffb3757d.10added lines implement account-scoped preference reads/writes,validation,guest separation and fail-safe identity errors. GitHub new-file UI duplicated directory in path;original commit integrated unchanged,then the exact bytes are moved to intended src/lib/voice-preference.ts within this same PR. Hinawi implements server/cache/manifest/settings/UI wiring/tests/docs. No history rewrite or path-only PR. Exact3mrdiabtrailer only for this actual contribution.

## Rollback and remaining gate

Disable `TTS_ENABLED`,leave additive tables unused,redeploy prior code if needed. Never restore an old whole DB over newer learner data just to undo speech. Full instructions in docs/tts-setup.md. Parent owns deployment. No bulk generation,live schema install or public provider speech until publication clearance.
