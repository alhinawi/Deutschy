# Timed practice QA

2026-11-16. User selects a level A1-C2 and 10 or 20 minutes. Questions interleave existing grammar and reading banks without repeating keys within a session. Options use a stable mixed ordering rather than a fixed correct-answer position. No invented questions, mastery or placement score.

A fixed wall-clock deadline continues across reloads and hidden/closed tabs. Visibility changes recheck expiry; answers after the deadline are rejected. Early ending and bank exhaustion are recorded separately. History distinguishes planned duration from actual elapsed time and labels the end reason. Active session and last 50 results use a separate device-local key; no calls to account sync or XP awards. Storage failure is disclosed; malformed/version-mismatched active sessions are discarded without inventing a result.

Unit checks: both durations, every level includes both bank kinds, expiry boundary, correct-answer scoring, elapsed cap. Browser checks: empty device record, C2/20-minute start, answer feedback, reload/resume, advanced clock expiry, exactly one history result, history after reload and malformed saved-session warning. Empty/active/feedback axe states pass; 390px screenshot inspected. Final integration adds both-language/all-route and offline checks.
