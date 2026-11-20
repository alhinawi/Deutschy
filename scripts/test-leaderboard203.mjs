import ts from 'typescript';
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { Hono } from 'hono';
const transpile = (file) => ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const policy = {}; vm.runInNewContext(transpile('functions/lib/account-state.ts'), { exports: policy, TextEncoder });
const sqlite = new DatabaseSync(':memory:');
sqlite.exec(`CREATE TABLE scores(user_id INTEGER,game TEXT,score INTEGER);CREATE TABLE users(id INTEGER PRIMARY KEY,name TEXT);CREATE TABLE progress(user_id INTEGER PRIMARY KEY,xp INTEGER,streak INTEGER,best INTEGER,last_day TEXT,data TEXT,updated_at INTEGER);`);
sqlite.exec(fs.readFileSync('migrations/0003_account_state.sql', 'utf8'));
const DB={prepare(sql){return{bind(...args){const statement=sqlite.prepare(sql);return{async first(){return statement.get(...args)||null},async run(){return statement.run(...args)},async all(){return{results:statement.all(...args)}}}},async all(){return{results:sqlite.prepare(sql).all()}}}}};
let app; vm.runInNewContext(transpile('functions/api/[[route]].ts'), { exports: {}, require: n => n === 'hono' ? { Hono } : n === 'hono/cloudflare-pages' ? { handle: a => { app = a } } : n.includes('account-state') ? policy : {}, TextEncoder, TextDecoder, crypto: webcrypto, Response, Request, Date, Number, JSON, Uint8Array, atob, btoa, URL });
const env = { SESSION_SECRET: 'synthetic-leaderboard-fixture', DB };
const board = async () => (await app.fetch(new Request('https://fixture.invalid/api/leaderboard'), env)).json();
const addUser = (id, name, xp, best = 1) => {
  sqlite.prepare('INSERT INTO users VALUES(?,?)').run(id, name);
  sqlite.prepare('INSERT INTO account_state(user_id,data,revision,updated_at) VALUES(?,?,1,0)').run(id, JSON.stringify({ 'deutschy:v1': JSON.stringify({ xp, best }) }));
};
const PLACEHOLDERS = ['Ahmed', 'Mostafa', 'Nour', 'Omar', 'Salma', 'Youssef', 'Mariam', 'Hana', 'Kareem', 'Farah'];
let checks = 0;
// Empty site: the board is ten placeholders, highest XP first.
let data = await board();
assert.equal(data.xp.length, 10);
assert.deepEqual(data.xp.map(r => r.name), PLACEHOLDERS);
assert(data.xp.every((r, i, a) => i === 0 || a[i - 1].xp >= r.xp));
assert.equal(data.xp.filter(r => r.avatar).length, 7);
assert.equal(data.xp.filter(r => r.avatar === null).length, 3);
assert(data.xp.every(r => r.placeholder === true));
checks += 6;
// A registered user with zero XP has not started studying and stays off the board.
addUser(1, 'Zero', 0);
data = await board();
assert(!data.xp.some(r => r.name === 'Zero'));
assert.equal(data.xp.length, 10);
checks += 2;
// Once a registered user earns XP, they replace one placeholder; order stays by XP.
addUser(2, 'RealOne', 150, 3);
data = await board();
assert.equal(data.xp.length, 10);
assert.equal(data.xp.filter(r => PLACEHOLDERS.includes(r.name)).length, 9);
assert.equal(data.xp.find(r => r.name === 'RealOne').xp, 150);
assert(data.xp.every((r, i, a) => i === 0 || a[i - 1].xp >= r.xp));
assert(data.xp.findIndex(r => r.name === 'RealOne') < data.xp.findIndex(r => r.name === 'Omar'));
checks += 5;
// Legacy progress counters without a snapshot still rank.
sqlite.prepare('INSERT INTO users VALUES(?,?)').run(3, 'Legacy');
sqlite.prepare("INSERT INTO progress VALUES(3,90,2,4,'2026-11-19','{}',0)").run();
data = await board();
assert.equal(data.xp.filter(r => PLACEHOLDERS.includes(r.name)).length, 8);
assert(data.xp.some(r => r.name === 'Legacy' && r.xp === 90));
checks += 2;
// More than ten real learners: no placeholders remain, top ten by XP.
for (let i = 4; i <= 13; i++) addUser(i, 'Real' + i, 500 - i * 10, 2);
data = await board();
assert.equal(data.xp.length, 10);
assert(!data.xp.some(r => PLACEHOLDERS.includes(r.name)));
assert(data.xp.every((r, i, a) => i === 0 || a[i - 1].xp >= r.xp));
assert(!data.xp.some(r => r.name === 'RealOne' || r.name === 'Legacy')); // lowest real XP drops off the full board
checks += 4;
console.log('PASS leaderboard203', checks, 'checks: placeholders fill an empty board, zero-XP accounts hidden, real learners replace placeholders one by one, legacy counters rank, full board is real-only');
