const db = require("./database");

const addExpense = (type, amount, description, date) => {
  db.run(
    `INSERT INTO transactions (type, amount, description, date) VALUES (?, ?, ?, ?)`,
    [type, amount, description, date],
    function (err) {
      if (err) {
        console.error("Error adding expense:", err.message);
        return;
      }
      console.log(`Expense added with ID: ${this.lastID}`);
    }
  );
};

// Example usage:
const type = "expense";
const amount = 50.75;
const description = "Groceries";
const date = "2025-02-26";

addExpense(type, amount, description, date);
