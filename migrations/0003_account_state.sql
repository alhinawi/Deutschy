-- Additive. Export the remote DB before applying. No old data is deleted.
CREATE TABLE IF NOT EXISTS account_state (
 user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
 data TEXT NOT NULL DEFAULT '{}',
 revision INTEGER NOT NULL DEFAULT 0,
 updated_at INTEGER NOT NULL
);
