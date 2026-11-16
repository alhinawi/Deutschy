# Conjugation form audit, 2026-11-16

Four curated verbs, six persons, eleven named tense/mood patterns: 264 cells. This is a focused forms lab, not a complete verb dictionary. Existing verb dictionary data are unchanged.

Checked base rows and compound auxiliary selection against:
- sein: https://deutschegrammatik20.de/spezielle-verben/verben-sein-haben-werden/das-verb-sein-2/
- haben: https://deutschegrammatik20.de/spezielle-verben/verben-sein-haben-werden/das-verb-haben-konjugation/
- machen Präteritum: https://www.verbformen.de/konjugation/indikativ/praeteritum/machen.htm
- kommen all forms: https://www.verbformen.de/konjugation/kommen.htm
- Konjunktiv I endings: https://deutschegrammatik20.de/konjunktiv/konjunktiv-i-gegenwart/
- Konjunktiv I compound formation: https://deutschegrammatik20.de/konjunktiv/konjunktiv-i-formen-uebersicht/
- Konjunktiv II present/past: https://deutschegrammatik20.de/konjunktiv/konjunktiv-ii-einfuehrung/

Present, past, participle, auxiliary and Konjunktiv base rows were reviewed. Compound forms use person-matched auxiliaries, not suffix guesses from arbitrary dictionary verbs. sein/kommen use sein, haben/machen use haben. Futur II preserves participle + auxiliary infinitive. würde + infinitive is labeled separately as an alternative, not a seventh indicative tense. Passive/modal forms are out of scope and stated in the interface. Standard full forms seiest/wärest/wäret are displayed; common short alternatives seist/wärst/wärt are accepted. No nouns were added, so article/plural data are unchanged. No official level or certificate claim.

Unit tests traverse all 264 cells and assert critical strong/compound forms. Mobile browser test enters wäre gekommen for kommen, checks success, no overflow and clean axe. Native human proofreading remains outstanding.
