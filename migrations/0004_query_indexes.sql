-- Additive indexes only. Do not apply during the exhausted-quota window.
-- Deployer: export a fresh backup, inspect PRAGMA index_list/index_info for
-- equivalent production-only indexes, then apply after the 02:00 Cairo reset.
-- Index creation reads existing rows and adds storage/write overhead.

-- /admin/stats: created_at > ? count and newest 10 users.
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at DESC);

-- /admin/stats: COUNT(*) WHERE google = 1; exclude other accounts from this index.
CREATE INDEX IF NOT EXISTS idx_users_google_enabled ON users(google) WHERE google = 1;

-- /leaderboard: GROUP BY user_id, game with MAX(score), plus user-id joins.
-- Cover grouping/score reads without fetching each score's table row.
-- This still reads score entries and sorts the aggregated leaderboard.
CREATE INDEX IF NOT EXISTS idx_scores_user_game_score ON scores(user_id, game, score DESC);

-- Deliberately not duplicated: users.email UNIQUE, users.id/progress.user_id/
-- account_state.user_id primary keys, idx_progress_xp, idx_scores_game,
-- and every TTS lookup's primary key. Sessions are signed cookies, not SQL.
-- Account-JSON XP ranking/SUM and whole-table counts still need broad reads;
-- adding an index on legacy progress.xp would not fix the current ranking.
