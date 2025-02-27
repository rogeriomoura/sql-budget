const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./budget.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    amount REAL NOT NULL,
    description TEXT,
    date TEXT NOT NULL
  )`);
});

module.exports = db;
