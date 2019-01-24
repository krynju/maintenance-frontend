const express = require('express');
const cors = require('cors');

const models = require('./models');
const db = require('./db');

const router = express.Router();

console.log("Initializing endpoint server...");

const app = express();

app.use(express.json());
app.use(cors());

router.use('/assignments', require('./endpoints/assignments'));
router.use('/failures', require('./endpoints/failures'));
router.use('/machines', require('./endpoints/machines'));
router.use('/tickets', require('./endpoints/tickets'));
router.use('/users', require('./endpoints/users'));
router.use('/comments', require('./endpoints/comments'));

app.use('/', router);

const server = app.listen(8081, () => {
  console.log("Initializing endpoint server... done, listening on http://127.0.0.1:8081");
});

process.on('SIGINT', () => {
  server.close();
  db.then(connection => {
    console.log("Committing to DB...")
    connection.commit();
    connection.close();
    console.log("Committing to DB... done")
  });
})
