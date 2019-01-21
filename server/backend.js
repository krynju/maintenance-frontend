const express = require('express');
const oracledb = require('oracledb');

const models = require('./models');

const app = express();

console.log("Starting DB client...");
let connection = null;
oracledb.getConnection({
  user: process.env['ORA_USER'],
  password: process.env['ORA_PASSWORD'],
  connectString: process.env['ORA_CONNECTION'],
}).then((connection_) => {
  connection = connection_;
  console.log("DB client ready");
  app.emit('dbready');
});

// ENDPOINTS ----------------

app.get('/tickets', (req, res) => {
  connection.execute(
    `SELECT * FROM KGULINSK."zgloszenia"`
  ).then((result) => {
    res.send(result.rows.map((row) => models.Ticket.fromArray(row)));
  });
});

// /ENDPOINTS ----------------

app.on('dbready', () => {
  console.log("Starting backend server...");
  app.listen(8081, () => {
    console.log("Backend server ready");
  });
});



