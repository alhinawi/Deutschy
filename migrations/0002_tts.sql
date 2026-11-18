-- Additive only. Export the remote DB before applying. Existing application tables untouched.
CREATE TABLE IF NOT EXISTS tts_manifest (id TEXT PRIMARY KEY, text TEXT NOT NULL, source TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS tts_audio (id TEXT PRIMARY KEY, manifest_id TEXT NOT NULL, profile TEXT NOT NULL, audio BLOB NOT NULL, created_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS tts_usage (day TEXT PRIMARY KEY, chars INTEGER NOT NULL CHECK(chars >= 0), attempts INTEGER NOT NULL CHECK(attempts >= 0));
CREATE TABLE IF NOT EXISTS tts_keys (slot INTEGER PRIMARY KEY, parked_until INTEGER NOT NULL, reason TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS tts_locks (id TEXT PRIMARY KEY, owner TEXT NOT NULL, expires_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS tts_storage (id INTEGER PRIMARY KEY CHECK(id = 1), bytes INTEGER NOT NULL CHECK(bytes >= 0));
