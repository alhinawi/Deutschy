/** Commit against the latest readable snapshot, never an optimistic UI copy.
 * The callbacks stay synchronous, so there is no await between read and write.
 * This avoids stale component state overwrites; it is not a cross-tab lock.
 */
export type ReviewSnapshot = { unreadable?: boolean };
export type ReviewCommit<T> = { ok: true; data: T } | { ok: false; data: T };
export function commitReviewChange<T extends ReviewSnapshot>(
  read: () => T,
  write: (next: T) => void,
  change: (current: T) => T,
): ReviewCommit<T> {
  const current = read();
  if (current.unreadable) return { ok: false, data: current };
  try {
    const next = change(current);
    if (next.unreadable) return { ok: false, data: current };
    write(next);
    return { ok: true, data: next };
  } catch {
    return { ok: false, data: current };
  }
}
