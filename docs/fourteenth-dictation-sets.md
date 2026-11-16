# Focused dictation sets

The existing dictation tool now lets a learner choose one source reading within the practice level, with an exact sentence count. The default remains all readings. A focused set follows original paragraph/sentence order, then wraps; it is not a scored or saved course completion. Copy explains this and warns that opening the original reading reveals the answer. No new sentences or human-audio claim introduced.

Existing sentence hash links still work: opening an exact sentence selects its source set and matching position. A level hash selects all readings in that level. Changing source/level clears the previous answer, comparison and audio state. Existing cancellation generation suppresses stale speech callbacks. German voice/speed and no-voice fallback remain unchanged.

Tests check that source sets partition each level without dropping/duplicating IDs, counts match and both recent A2/B1 stories are available with original text. No progress or scores are written by this tool. Device/browser voices may need internet, even for cached page/text content.
