# Typed numeric practice
Extends /zahlen/ with 16 explicit read/listen-to-digits exercises, four each for number, 24-hour time, day/month and euro/cents. Existing number/date/time reading functions reused. Fictional amounts/times, no real schedule or price claim. Explicit format guidance; semantic comparison permits zero padding and either price decimal separator. Rejects suffixes, fractional cent formats, invalid clock/date ranges and non-English digits. No fuzzy rounding or silent stripping.

Unit tests: every fixture accepts itself, rejects blank/suffix; padded variants and date/time/price boundary checks. Browser: 16 correct plus 16 wrong paths, mobile axe/overflow. Typecheck/build pass. Screenshot inspected. Device voices and native language proofread remain unverified.
