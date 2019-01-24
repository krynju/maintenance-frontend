const oracledb = require('oracledb');

console.log("Initializing DB connection...");

let connection = oracledb.getConnection({
  user: process.env['ORA_USER'],
  password: process.env['ORA_PASSWORD'],
  connectString: process.env['ORA_CONNECTION'],
}).then((connection_) => {
  connection = connection_;
  console.log("Initializing DB connection... done");
  return Promise.resolve(connection);
});

module.exports = connection;
