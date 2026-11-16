# Honest local activity display

The existing progress page now includes an exact seven-day XP table, with full local dates and accessible headers, in addition to the decorative mini chart. No minutes or practice days are inferred from XP: an incorrect answer can update a streak with zero XP. Copy explains device-clock dates, current local storage, no sync, deletion risk, and XP level vs language level. Box 4+ cards are labeled by their scheduling state rather than called known/mastered.

A stale persisted streak is no longer shown as current on the progress page or header. Today/yesterday retain the stored count; anything older or future-dated shows zero as the current streak. This is display-only: history, best streak and saved streak stay unchanged. The page explains the previous-day grace and that the XP goal is not required. A minute timer plus focus/visibility refresh handles midnight and returning to a suspended tab without writing storage.

Unit checks: yesterday grace, expired/empty/future date, today, year boundary, seven exact XP values and nonmutation. Browser checks: Arabic/English × 320/390px × today/yesterday/three-days-ago seeds; expected current count, exact seven rows, preserved persisted streak/best, no axe violations or horizontal overflow. Test data is isolated to browser QA and is not shipped as learner progress.
