# Bounded German helper181

German-study-only helper at `/helper/`,with short Egyptian Arabic explanations and German examples. Same bounded free pattern as Henglish799,adapted to Deutschy's actual signed-cookie auth rather than copying an incompatible bearer-session database query. Current question1200characters,up to4recent1000character messages,4500UTF8promptbytes,384completiontokens,thinkingdisabled,under100word instruction. No tools,browsing,learner records,progress writes,official grades or audio assessment. Output is plain text;no HTML/Markdown execution. Level/mode are allowlisted. No profile/email/name/progress is sent to inference.

Frontend conversation is component memory only,not localStorage/IndexedDB/server history. Clear,unmount,cancel and stale-generation guards prevent late replies attaching to a new session. Question retained on failure;real quota/rate/unavailable messages are shown,never canned teaching substituted as a model answer. Privacy/fallibility/UTC/shared-quota notices visible. Existing global voice attribution refers to speech,not this text model.

Same-origin Pages `/api/helper/chat` requires exact production Origin `https://deutschy.pages.dev`,derives IP from trusted platform header and learner identity from existing verified HttpOnlyHMACsession. Browser-supplied identities ignored. Public helper Worker endpoint disabled;private service-bindingRPC `HELPER.ask` only. Worker has WorkersAI andoneSQLiteDurableObject,noD1,R2,providersecret orGroq. Pages binding must point to default entrypoint of `deutschy-helper`. No new D1 migration. Missing binding fails visibly503rather than faking success.

Counters:30attempts/site/UTCday,4/min;6/learner/day,2/min;10/IP/day,3/min. Guests share IP identity. Transactions reserve80estimatedneurons perattempt,2400/day maximum;this is a conservative internal estimate,not measured usage or independent free allowance. Failed/canceled/uncertain requests stay reserved. Provider3036/429parks until nextUTCday. Only daily-salted identity/IP hashes and counters stored;no rawIP,prompt,response orconversation. Expiry alarm clears old day;late alarms cannot erase a fresh day's quota. Logs/observability disabled. Single25s inference deadline,no retryloop. Enabled only on verified WorkersFree,never upgrade/pay. Immediate kill switch HELPER_ENABLED=false.

Deployment: deploy `helper/wrangler.jsonc` on verified Free account,then add production Pages service binding HELPER -> deutschy-helper default entrypoint,deploy main and run a bounded synthetic German smoke test through the actual UI. workers_dev/preview_urlsfalse,publicfetch404. Parent/deployer manages live deployment and account-plan validation. Candidate deployed privately before merge;finalWorkerZIP includes midnight race guard. No inference success claimed before main/binding smoke test. Do not count mocked browser replies as model teaching quality.

QA:91backend/proxy assertions cover policy,size/mode/history bounds,durable reservations,concurrency/restarts,quota parking,privacy,midnight expiry,privateRPC,Origin,signedsession/spoof/IP,missingbinding andquota forwarding.100browserassertions,4AR/EN320/390variants,4axe cover fixture success/quota/rate/error/cancel/clear/stale/plaintext/no persistence and no unexpected payload fields. Navigation492/4axe. Frontend+helper+functions typechecks/build/content1009words/204topics/0problems,noun6781,animals940,study/review,PWA,1114export/1097sitemap,398017Bprogress pass. ActualAR/EN390screenshots inspected,including full-page privacy/form and fixture answer. Native-review125pageMD/PDF updated;actual German model smoke,native editorial and real-device assistive-tech review pending.

Source implementation inspected at current main:
https://github.com/alhinawi/henglish-Hinawi-English-Academy/pull/799
https://github.com/alhinawi/henglish-Hinawi-English-Academy/blob/main/backend/helper/index.ts
https://github.com/alhinawi/henglish-Hinawi-English-Academy/blob/main/backend/helper/policy.ts
https://github.com/alhinawi/henglish-Hinawi-English-Academy/blob/main/backend/helper/providers.ts
Official current sources verified:
https://developers.cloudflare.com/workers-ai/models/gemma-4-26b-a4b-it/
https://developers.cloudflare.com/workers-ai/platform/pricing/
https://developers.cloudflare.com/workers-ai/platform/data-usage/
https://developers.cloudflare.com/durable-objects/platform/pricing/
https://developers.cloudflare.com/pages/functions/bindings/
https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/rpc/
Free10000neurons/account/day is shared,not eachsite. Free exhaustion errors;SQLiteDO availableonFree. No commercial-quality/native-accent/officialCEFRclaim. Genuine Claude contribution;Henglish source reuse identified,not unrelated coauthorship.
