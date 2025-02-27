# SQL Budget

This project is a simple Node.js application that allows you to manage your expenses and income using an SQLite database. The application provides a way to add transactions directly to the database without the need for an HTTP request.

## Prerequisites

- Node.js
- Yarn

## Setup

1. Clone the repository and navigate to the project directory:

   ```sh
   git clone https://github.com/your-username/sql-budget.git
   cd sql-budget
   ```

2. Install the dependencies:
   ```sh
   yarn install
   ```
3. Set up the SQLite database:
   The database is automatically set up when you run the server or the script to add expenses. The database file (budget.db) will be created in the project directory.

## Usage

### Running the Server

To start the Express server, run:

```sh
yarn node server.js
```

The server will be running on `http://localhost:3000`.

### Adding Expenses Directly

To add expenses directly to the database without making an HTTP request, you can use the `addExpense.js` script. Modify the example usage section in the script to add different expenses as needed.

Run the script:

```sh
yarn node addExpense.js
```

### API Endpoints

The server provides the following API endpoints:

1. Add a transaction:

```sh
POST /api/transactions
```

Example request body:

```js
{
   "type": "income",
   "amount": 1000,
   "description": "Salary",
   "date": "2025-02-26"
}
```

2. Get all transactions:

```sh
GET /api/transaction
```

## Project Structure

- `database.js`: Sets up the SQLite database and creates the transactions table.
- `server.js`: Sets up the Express server and defines the API endpoints.
- `addExpense.js`: Script to add expenses directly to the database.

## License

This project is licensed under the MIT License.
