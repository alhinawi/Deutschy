# Navigation/search review

- Added direct search entries for all 58 vocabulary lesson topics using German, Arabic and English titles, instead of relying only on word hits.
- Source-level checks verify all 58 are indexed and searchable by each title. No admin or gated certificate routes were exposed to search.
- Static graph walk from the home page reaches all 527 ordinary exported routes and confirms each has a way out. The 404 route, admin page and six state-gated certificates are deliberately excluded. No learning route was excluded.
- Existing export check validates internal links and images on 534 pages plus all 519 sitemap targets.
- Added bilingual custom 404 with home, lessons and grammar links plus search guidance.
- Local server configured to return the exported 404.html was tested with an unknown URL: HTTP 404, correct content, no 390px overflow, then global search -> Küche 2 -> the actual lesson page. This checks the exported artifact and recovery UI, not production routing. Live host status still needs a deployment check.

Commands: `npm run test:study`, `npm run qa:export`, `node scripts/qa-reachability.mjs`, browser 404/search recovery test.
