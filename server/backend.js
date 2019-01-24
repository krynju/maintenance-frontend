const express = require('express');

const models = require('./models');

const bodyParser = require('body-parser');

console.log("Initializing endpoint server...");

const app = express();

app.use(express.json());

const router = express.Router();

router.use('/assignments', require('./endpoints/assignments'));
router.use('/failures', require('./endpoints/failures'));
router.use('/machines', require('./endpoints/machines'));
router.use('/tickets', require('./endpoints/tickets'));
router.use('/users', require('./endpoints/users'));

app.use('/', router);

app.listen(8081, () => {
  console.log("Initializing endpoint server... done, listening on http://127.0.0.1:8081");
});



