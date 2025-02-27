const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/api/transactions", (req, res) => {
  const { type, amount, description, date } = req.body;
  db.run(
    `INSERT INTO transactions (type, amount, description, date) VALUES (?, ?, ?, ?)`,
    [type, amount, description, date],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});

app.get("/api/transactions", (req, res) => {
  db.all(`SELECT * FROM transactions`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ transactions: rows });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
