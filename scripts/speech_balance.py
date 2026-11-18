"""Deterministic least-used assignment and minimum-change rebalance."""
from collections import Counter

def counts_for(ledger, voices):
    counts = Counter({v['id']: 0 for v in voices})
    for item in ledger.values():
        if item.get('voiceId') in counts:
            counts[item['voiceId']] += 1
    return counts

def least_used(ledger, voices):
    counts = counts_for(ledger, voices)
    return min(voices, key=lambda v: (counts[v['id']], v['id']))['id']

def rebalance_plan(ledger, voices):
    counts = counts_for(ledger, voices)
    ids = [v['id'] for v in voices]
    low, extra = divmod(sum(counts.values()), len(ids))
    # Give the extra slots to already-high voices to retain the most clips.
    ordered = sorted(ids, key=lambda v: (-counts[v], v))
    targets = {v: low + (i < extra) for i, v in enumerate(ordered)}
    deficits = [v for v in sorted(ids) for _ in range(max(0, targets[v] - counts[v]))]
    plan = []
    for voice in sorted(ids):
        surplus = max(0, counts[voice] - targets[voice])
        candidates = sorted(text for text, item in ledger.items() if item.get('voiceId') == voice)
        # Preserve reused preview clips when alternatives exist.
        candidates.sort(key=lambda text: (ledger[text].get('source') == 'existing-private-preview164', text))
        for text in candidates[:surplus]:
            plan.append((text, deficits.pop(0)))
    assert not deficits
    return plan
