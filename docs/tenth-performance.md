# Slow-connection performance pass

Local static export, 390x844, 200 KiB/s down, 100 KiB/s up, 150ms latency, 4x CPU slowdown. Fresh isolated context for each route, HTTP cache disabled and service worker bypassed. Total transfer includes the HTML document, not just resource entries. Single before/after samples, not medians, production timings or a Lighthouse score. Network-idle settlement is not time to interactive. Earlier shared-context measurements were discarded.

| Route | Total bytes before / after | Network-idle ms before / after | LCP ms before / after | DOM before / after |
| --- | --- | --- | --- | --- |
| / | 2079245 / 2071675 | 11861 / 11911 | 1516 / 1440 | 706 / 706 |
| /credits/ | 1705036 / 1031134 | 10257 / 6367 | 1284 / 1092 | 4526 / 590 |
| /levels/A1/ | 2430288 / 2349359 | 13459 / 12501 | 1268 / 1296 | 1308 / 1308 |
| /verbs/ | 1268635 / 1268635 | 8663 / 8690 | 1268 / 1268 | 1513 / 1513 |
| /lessons/musik/ | 2849356 / 1848385 | 14927 / 10390 | 3784 / 3228 | 442 / 442 |

410 JPEGs safely recompressed/resized with a 960px longest-side cap. Image corpus: 101,663,795 -> 76,490,654 bytes, saving 25,173,141 bytes (24.8%). Before/after largest-eight contact sheet visually checked; identities/aspect ratios preserved. Global credits disclose resizing/compression. Cropped files keep per-file modification notes.

Credits table now renders 40 rows per page instead of all 662. All 662 records remain searchable/pageable; tested all 17 pages plus search. DOM 4526 -> 590, total cold transfer 1,705,036 -> 1,031,134 bytes. A first screenshot/test caught an RTL overflow from a visually hidden table caption; replaced it with a visible caption and retested at 390px. Table scroll stays inside its labelled region.

Music lesson cold transfer falls by 1,000,971 bytes (35.1%). Home and verbs did not materially improve in this pass; no speed claim is made for them. No text, source credits or learning exercises were dropped. A custom build change can alter chunk hashes; numbers are bounded local comparisons.
