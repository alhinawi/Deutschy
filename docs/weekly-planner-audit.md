# Device-only weekly planner

Seven blank day slots per Monday-start week using device-local dates, including
correct month/year rollover. No seeded goals, streaks, rewards, automatic attendance,
calendar writes or reminders. Goal text capped at 150 characters and minutes at
0-240. A checkbox is self-report only; planned minutes are not measured study.

Explicit save preserves other stored weeks. Load and save errors cannot report
success. Unsaved changes warn on week navigation and page unload. Deletion needs
a confirmation and affects only the displayed week. No backend/account/sync.
Stored plans can disappear with browser data; intro says device/browser only.

Unit date/empty/bounds/totals checks pass. Browser actual save/reload, checked
state, independent empty next week, confirmed deletion and denied-storage error
pass. Mobile axe/overflow, typecheck/build/export pass. Screenshot shows an actual
test-entered goal, not a seeded user plan.
